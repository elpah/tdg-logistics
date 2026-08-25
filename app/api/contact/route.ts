import { NextResponse } from "next/server";
import { parseContactPayload, sendQuoteEmails } from "@/lib/contactMail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = parseContactPayload(body);
  if (typeof parsed === "string") {
    return NextResponse.json({ error: parsed }, { status: 400 });
  }

  try {
    await sendQuoteEmails(parsed);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const failedInternal =
      error instanceof Error && error.message === "INTERNAL_NOTIFY_FAILED";

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
