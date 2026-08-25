import { NextResponse } from "next/server";
import {
  ContactMailError,
  mailEnvPresence,
  parseContactPayload,
  redactSecrets,
  sendQuoteEmails,
} from "@/lib/contactMail";

export const runtime = "nodejs";

function logContactFailure(diagnostic: Record<string, unknown>) {
  console.error("contact_email_failed", diagnostic);
}

function errorFields(error: unknown) {
  const err = error as {
    name?: string;
    message?: string;
    code?: string;
    command?: string;
    responseCode?: number;
  };

  return {
    name: err?.name ?? "Error",
    code: err?.code ?? null,
    message: redactSecrets(err?.message ?? "Unknown error"),
    command: err?.command ?? null,
    responseCode: err?.responseCode ?? null,
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    logContactFailure({
      stage: "validation",
      name: "SyntaxError",
      code: null,
      message: "Request body was not valid JSON",
      env: mailEnvPresence(),
    });
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = parseContactPayload(body);
  if (typeof parsed === "string") {
    logContactFailure({
      stage: "validation",
      name: "ValidationError",
      code: null,
      message: parsed,
      env: mailEnvPresence(),
    });
    return NextResponse.json({ error: parsed }, { status: 400 });
  }

  try {
    await sendQuoteEmails(parsed);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const fields = errorFields(error);
    const stage =
      error instanceof ContactMailError ? error.stage : "customer_send";

    logContactFailure({
      stage,
      name: fields.name,
      code: fields.code,
      message: fields.message,
      command: fields.command,
      responseCode: fields.responseCode,
      env: mailEnvPresence(),
    });

    const failedInternal = stage === "internal_send";

    return NextResponse.json(
      {
        error: failedInternal
          ? "Your request could not be fully processed. Please try again or email us at info@tdgslogistics.com."
          : "We could not send your request. Please try again or email us at info@tdgslogistics.com.",
      },
      { status: 500 },
    );
  }
}
