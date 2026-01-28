# LocalAI Presence – Marketing Site (Next.js + Tailwind)

This repository contains a complete marketing website for an AI-enhanced web presence services business (pricing tiers, industries, process, contact form, SEO, legal pages).

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Contact form API route (Resend)

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import Git Repository**.
3. Build settings: Framework preset **Next.js** (default).
4. Add environment variables (optional but recommended):

### Email (Contact form)
This site uses Resend to send contact form submissions.

- `RESEND_API_KEY` – your Resend API key
- `CONTACT_TO_EMAIL` – destination email (where leads should be sent)
- `CONTACT_FROM_EMAIL` – verified sender (example: `leads@yourdomain.com`)

If these are not set, the contact form will return an error with instructions.

### Optional
- `NEXT_PUBLIC_CALENDLY_URL` – link for the “Schedule a demo” CTA
- `NEXT_PUBLIC_SITE_URL` – canonical site URL (example: `https://yourdomain.com`)

## Customize branding/content
Most brand content lives in:
- `lib/site.ts`

Update company name, description, phone/email, social links, industries and FAQs there.

## Legal
The included **Terms** and **Privacy Policy** are templates. Have counsel review before production use.

---

© Your Company. All rights reserved.
