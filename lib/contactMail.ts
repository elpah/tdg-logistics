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

function requireEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error("Email is not configured.");
  }
  return value;
}

function createTransport() {
  const host = requireEnv("ZOHO_SMTP_HOST");
  const user = requireEnv("ZOHO_SMTP_USER");
  const pass = requireEnv("ZOHO_SMTP_PASSWORD");
  const port = Number(process.env.ZOHO_SMTP_PORT ?? "465");

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error("Email is not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
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
    console.error("Customer confirmation email failed");
    throw error;
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
    console.error("Internal quote notification email failed");
    const failure = new Error("INTERNAL_NOTIFY_FAILED");
    failure.cause = error;
    throw failure;
  }
}

