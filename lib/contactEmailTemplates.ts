export type QuoteEmailContent = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const LOGO_SRC =
  "https://res.cloudinary.com/dvwpuenzk/image/upload/c_limit,w_200,q_auto/v1782091880/tdd_logo_ksizmd.png";
const PHONE_DISPLAY = "+233 59 799 3709";
const PHONE_HREF = "tel:+233597993709";
const EMAIL_DISPLAY = "info@tdgslogistics.com";
const EMAIL_HREF = "mailto:info@tdgslogistics.com";
const WHATSAPP_HREF = "https://wa.me/233597993709";

const BLUE = "#0064B9";
const INK = "#0B121A";
const MUTED = "#5B646F";
const PAGE = "#FCFCFC";
const CARD = "#F0F6FC";
const LINE = "#E5F0FC";
const WHITE = "#FFFFFF";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function telHref(phone: string) {
  const trimmed = phone.trim();
  if (!trimmed) return "";
  const compact = trimmed.replace(/[^\d+]/g, "");
  return compact ? `tel:${compact}` : "";
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Accra",
  }).format(date);
}

function row(label: string, valueHtml: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${LINE};width:38%;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:${MUTED};vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid ${LINE};font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${INK};vertical-align:top;">
        ${valueHtml}
      </td>
    </tr>
  `;
}

function bulletproofButton(href: string, label: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" bgcolor="${BLUE}" style="border-radius:6px;">
          <a href="${href}" style="display:inline-block;padding:12px 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;line-height:1;color:${WHITE};text-decoration:none;border-radius:6px;">
            ${label}
          </a>
        </td>
      </tr>
    </table>
  `;
}

function layout(title: string, body: string) {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${PAGE};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(title)}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${PAGE};">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background-color:${WHITE};border:1px solid ${LINE};">
            <tr>
              <td style="height:4px;line-height:4px;font-size:0;background-color:${BLUE};">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:24px 28px 16px 28px;border-bottom:1px solid ${LINE};">
                <img src="${LOGO_SRC}" width="140" alt="TDG's Logistics" style="display:block;border:0;outline:none;text-decoration:none;max-width:140px;height:auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background-color:${CARD};border-top:1px solid ${LINE};">
                <p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">
                  TDG's Logistics · Afienya, Greater Accra Region, Ghana
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">
                  &copy; ${year} TDG's Logistics. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function customerConfirmationEmail(payload: QuoteEmailContent) {
  const service = payload.service;
  const phone = payload.phone;
  const company = payload.company;
  const safeName = escapeHtml(payload.name);
  const messageHtml = escapeHtml(payload.message).replaceAll("\n", "<br/>");

  const html = layout(
    "We've received your request — TDG's Logistics",
    `
      <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;color:${BLUE};font-weight:bold;">
        Request received
      </p>
      <h1 style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:${INK};font-weight:bold;">
        Hello ${safeName}
      </h1>
      <p style="margin:0 0 18px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${INK};">
        Thank you for contacting TDG's Logistics. Your enquiry has been received successfully, and our team will review it shortly.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${CARD};border:1px solid ${LINE};">
        <tr>
          <td style="padding:18px 20px;">
            <p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:${INK};">
              Your request
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              ${row("Name", safeName)}
              ${row("Email", `<a href="mailto:${escapeHtml(payload.email)}" style="color:${BLUE};text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
              ${row("Phone", phone === "Not provided" || !telHref(phone) ? escapeHtml(phone) : `<a href="${telHref(phone)}" style="color:${BLUE};text-decoration:none;">${escapeHtml(phone)}</a>`)}
              ${row("Company", escapeHtml(company))}
              ${row("Service requested", escapeHtml(service))}
            </table>
            <p style="margin:16px 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:${INK};">
              Cargo / shipment details
            </p>
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${INK};">
              ${messageHtml}
            </p>
          </td>
        </tr>
      </table>
      <p style="margin:20px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${INK};">
        What happens next: a member of the TDG team will review your request and contact you as soon as possible.
      </p>
      <p style="margin:20px 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:${INK};">
        Need to reach us sooner?
      </p>
      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:${INK};">
        Phone:
        <a href="${PHONE_HREF}" style="color:${BLUE};text-decoration:none;">${PHONE_DISPLAY}</a><br/>
        Email:
        <a href="${EMAIL_HREF}" style="color:${BLUE};text-decoration:none;">${EMAIL_DISPLAY}</a><br/>
        WhatsApp:
        <a href="${WHATSAPP_HREF}" style="color:${BLUE};text-decoration:none;">Chat on WhatsApp</a>
      </p>
      <p style="margin:22px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${INK};">
        Kind regards,<br/>
        <strong>TDG's Logistics</strong>
      </p>
    `,
  );

  const text = [
    `Hello ${payload.name}`,
    "",
    "Thank you for contacting TDG's Logistics. Your enquiry has been received successfully, and our team will review it shortly.",
    "",
    "Your request",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${phone}`,
    `Company: ${company}`,
    `Service requested: ${service}`,
    "",
    "Cargo / shipment details:",
    payload.message,
    "",
    "What happens next: a member of the TDG team will review your request and contact you as soon as possible.",
    "",
    "Need to reach us sooner?",
    `Phone: ${PHONE_DISPLAY}`,
    `Email: ${EMAIL_DISPLAY}`,
    `WhatsApp: ${WHATSAPP_HREF}`,
    "",
    "Kind regards,",
    "TDG's Logistics",
    "",
    `© ${new Date().getFullYear()} TDG's Logistics. All rights reserved.`,
  ].join("\n");

  return { html, text };
}

export function internalNotificationEmail(
  payload: QuoteEmailContent,
  submittedAt: Date,
) {
  const service = payload.service;
  const phone = payload.phone;
  const company = payload.company;
  const submitted = `${formatSubmittedAt(submittedAt)} GMT`;
  const replyHref = `mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent("Re: Your quote request — TDG's Logistics")}`;
  const phoneLink =
    phone === "Not provided" || !telHref(phone)
      ? escapeHtml(phone)
      : `<a href="${telHref(phone)}" style="color:${BLUE};text-decoration:none;">${escapeHtml(phone)}</a>`;
  const messageHtml = escapeHtml(payload.message).replaceAll("\n", "<br/>");

  const html = layout(
    "New Quote Request — TDG's Logistics",
    `
      <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;color:${BLUE};font-weight:bold;">
        TDG's Logistics
      </p>
      <h1 style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:${INK};font-weight:bold;">
        New Quote Request
      </h1>
      <p style="margin:0 0 20px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:${MUTED};">
        Submitted ${escapeHtml(submitted)}
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${CARD};border:1px solid ${LINE};">
        <tr>
          <td style="padding:18px 20px;">
            <p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:${INK};">
              Customer summary
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              ${row("Customer name", escapeHtml(payload.name))}
              ${row("Email", `<a href="mailto:${escapeHtml(payload.email)}" style="color:${BLUE};text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
              ${row("Phone", phoneLink)}
              ${row("Service requested", `<strong>${escapeHtml(service)}</strong>`)}
            </table>
          </td>
        </tr>
      </table>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:16px;">
        <tr>
          <td>
            ${bulletproofButton(replyHref, "Reply to Customer")}
          </td>
        </tr>
      </table>
      <p style="margin:24px 0 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:${INK};">
        Request details
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${LINE};">
        <tr>
          <td style="padding:18px 20px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              ${row("Company", escapeHtml(company))}
              ${row("Submitted", escapeHtml(submitted))}
            </table>
            <p style="margin:16px 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:${INK};">
              Cargo / shipment information
            </p>
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${INK};">
              ${messageHtml}
            </p>
          </td>
        </tr>
      </table>
      <p style="margin:18px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">
        Reply to this email to respond directly to the customer.
      </p>
    `,
  );

  const text = [
    "TDG's Logistics",
    "New Quote Request",
    `Submitted: ${submitted}`,
    "",
    "Customer summary",
    `Customer name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${phone}`,
    `Service requested: ${service}`,
    "",
    `Reply to customer: ${payload.email}`,
    "",
    "Request details",
    `Company: ${company}`,
    "",
    "Cargo / shipment information:",
    payload.message,
  ].join("\n");

  return { html, text };
}
