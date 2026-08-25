import nodemailer from "nodemailer";
import {
  customerConfirmationEmail,
  internalNotificationEmail,
} from "./contactEmailTemplates";

export const SERVICE_LABELS = {
  "sea-freight": "Sea Freight",
  "air-freight": "Air Freight",
  consolidation: "Cargo Consolidation",
  customs: "Customs Clearance",
  warehouse: "Warehousing & Delivery",
  other: "Other",
} as const;

export type ServiceValue = keyof typeof SERVICE_LABELS;

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HEADER_UNSAFE = /[\r\n]/;

function displayOrDash(value: string) {
  return value.trim() ? value.trim() : "Not provided";
}

export type MailErrorStage =
  | "missing_env"
  | "transporter_config"
  | "smtp_auth"
  | "smtp_connection"
  | "customer_send"
  | "internal_send";

export class ContactMailError extends Error {
  stage: MailErrorStage;
  code?: string;
  command?: string;
  responseCode?: number;

  constructor(
    stage: MailErrorStage,
    message: string,
    options?: {
      cause?: unknown;
      code?: string;
      command?: string;
      responseCode?: number;
    },
  ) {
    super(message, options?.cause ? { cause: options.cause } : undefined);
    this.name = "ContactMailError";
    this.stage = stage;
    this.code = options?.code;
    this.command = options?.command;
    this.responseCode = options?.responseCode;
  }
}

export function mailEnvPresence() {
  return {
    ZOHO_SMTP_HOST: Boolean(process.env.ZOHO_SMTP_HOST?.trim()),
    ZOHO_SMTP_PORT: Boolean(process.env.ZOHO_SMTP_PORT?.trim()),
    ZOHO_SMTP_USER: Boolean(process.env.ZOHO_SMTP_USER?.trim()),
    ZOHO_SMTP_PASSWORD: Boolean(process.env.ZOHO_SMTP_PASSWORD?.trim()),
    CONTACT_EMAIL: Boolean(process.env.CONTACT_EMAIL?.trim()),
  };
}

export function redactSecrets(value: string) {
  const secrets = [
    process.env.ZOHO_SMTP_PASSWORD,
    process.env.ZOHO_SMTP_USER,
    process.env.CONTACT_EMAIL,
  ].filter((secret): secret is string => Boolean(secret && secret.length > 0));

  return secrets.reduce(
    (message, secret) => message.split(secret).join("[redacted]"),
    value,
  );
}

function smtpDetails(error: unknown) {
  const err = error as {
    name?: string;
    message?: string;
    code?: string;
    command?: string;
    responseCode?: number;
  };

  return {
    name: typeof err?.name === "string" ? err.name : "Error",
    message: redactSecrets(
      typeof err?.message === "string" && err.message
        ? err.message
        : "Unknown error",
    ),
    code: typeof err?.code === "string" ? err.code : undefined,
    command: typeof err?.command === "string" ? err.command : undefined,
    responseCode:
      typeof err?.responseCode === "number" ? err.responseCode : undefined,
  };
}

function classifySendFailure(
  error: unknown,
  sendStage: "customer_send" | "internal_send",
) {
  const details = smtpDetails(error);
  const blob = `${details.code ?? ""} ${details.command ?? ""} ${details.message}`.toLowerCase();

  let stage: MailErrorStage = sendStage;
  if (
    details.code === "EAUTH" ||
    details.responseCode === 535 ||
    details.command === "AUTH" ||
    blob.includes("invalid login") ||
    blob.includes("authentication")
  ) {
    stage = "smtp_auth";
  } else if (
    ["ECONNECTION", "ETIMEDOUT", "ESOCKET", "EDNS", "EPIPE", "EHOSTUNREACH"].includes(
      details.code ?? "",
    ) ||
    details.command === "CONN" ||
    blob.includes("connect") ||
    blob.includes("timeout")
  ) {
    stage = "smtp_connection";
  }

  const wrapped = new ContactMailError(stage, details.message, {
    cause: error,
    code: details.code,
    command: details.command,
    responseCode: details.responseCode,
  });
  wrapped.name = details.name;
  return wrapped;
}

function requireEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new ContactMailError(
      "missing_env",
      `Missing environment variable ${name}`,
    );
  }
  return value;
}

function serviceLabel(value: string) {
  if (!value) return "Not specified";
  if (value in SERVICE_LABELS) {
    return SERVICE_LABELS[value as ServiceValue];
  }
  return "Not specified";
}

export function parseContactPayload(input: unknown): ContactPayload | string {
  if (!input || typeof input !== "object") {
    return "Invalid request.";
  }

  const body = input as Record<string, unknown>;
  const read = (key: string, max: number) => {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    return value.slice(0, max);
  };

  const name = read("name", 120);
  const email = read("email", 254).toLowerCase();
  const phone = read("phone", 40);
  const company = read("company", 120);
  const service = read("service", 40);
  const message = read("message", 5000);

  if (!name || !email || !message) {
    return "Please fill in your name, email, and message.";
  }

  if (!EMAIL_PATTERN.test(email) || HEADER_UNSAFE.test(email)) {
    return "Please enter a valid email address.";
  }

  if (HEADER_UNSAFE.test(name) || HEADER_UNSAFE.test(phone) || HEADER_UNSAFE.test(company)) {
    return "Invalid characters in the form.";
  }

  if (service && !(service in SERVICE_LABELS)) {
    return "Please select a valid service.";
  }

  return { name, email, phone, company, service, message };
}

function createTransport() {
  const host = requireEnv("ZOHO_SMTP_HOST");
  const user = requireEnv("ZOHO_SMTP_USER");
  const pass = requireEnv("ZOHO_SMTP_PASSWORD");
  const port = Number(process.env.ZOHO_SMTP_PORT ?? "465");

  if (!Number.isFinite(port) || port <= 0) {
    throw new ContactMailError(
      "transporter_config",
      "ZOHO_SMTP_PORT is not a valid port",
    );
  }

  try {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  } catch (error) {
    const details = smtpDetails(error);
    throw new ContactMailError(
      "transporter_config",
      details.message,
      {
        cause: error,
        code: details.code,
        command: details.command,
        responseCode: details.responseCode,
      },
    );
  }
}

function fromAddress() {
  const user = requireEnv("ZOHO_SMTP_USER");
  return `"TDG's Logistics" <${user}>`;
}

export async function sendQuoteEmails(payload: ContactPayload) {
  const contactEmail = requireEnv("CONTACT_EMAIL");
  const transport = createTransport();
  const from = fromAddress();
  const content = {
    name: payload.name,
    email: payload.email,
    phone: displayOrDash(payload.phone),
    company: displayOrDash(payload.company),
    service: serviceLabel(payload.service),
    message: payload.message,
  };
  const confirmation = customerConfirmationEmail(content);
  const internal = internalNotificationEmail(content, new Date());

  try {
    await transport.sendMail({
      from,
      to: payload.email,
      subject: "We've received your request — TDG's Logistics",
      text: confirmation.text,
      html: confirmation.html,
    });
  } catch (error) {
    throw classifySendFailure(error, "customer_send");
  }

  try {
    await transport.sendMail({
      from,
      to: contactEmail,
      replyTo: payload.email,
      subject: "New Quote Request — TDG's Logistics",
      text: internal.text,
      html: internal.html,
    });
  } catch (error) {
    throw classifySendFailure(error, "internal_send");
  }
}

