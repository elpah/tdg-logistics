# TDG's Shipping & Logistics

Marketing website for TDG's Shipping & Logistics (China → Ghana). Built with Next.js, Tailwind CSS, and Framer Motion. Images are served from Cloudinary.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/contact` — Contact and quote form
- `/privacy-policy` — Privacy Policy
- `/terms-of-service` — Terms of Service

The contact form posts to `POST /api/contact`. On success it sends two emails over Zoho SMTP: a confirmation to the visitor, then a notification to the business (`CONTACT_EMAIL`).

## Setup

```bash
npm install
cp .env.example .env
```

Fill in the values in `.env`, then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Required for the quote form in production:

| Variable | Purpose |
| --- | --- |
| `ZOHO_SMTP_HOST` | Zoho SMTP host (usually `smtp.zoho.com`) |
| `ZOHO_SMTP_PORT` | SMTP port (usually `465`) |
| `ZOHO_SMTP_USER` | Zoho mailbox used to send mail |
| `ZOHO_SMTP_PASSWORD` | App password for that mailbox |
| `CONTACT_EMAIL` | Inbox that receives new quote requests |

Never commit `.env` or real credentials.

## Scripts

```bash
npm run dev      # local development
npm run lint     # eslint
npm run build    # production build
npm run start    # serve the production build
```

## Deploy

The site is intended for Vercel. Set the environment variables above on the **Production** environment, then redeploy after changing them.
