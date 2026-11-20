# Environment Setup — Kignature LLC Corporate Website

This site is a **static-first Next.js marketing site**. It has no database and no required secrets — everything below is optional configuration.

## Variable reference

| Variable | Scope | Required? | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | public (baked into client bundle) | No (recommended for deploy) | Canonical site URL used by `metadataBase`, `sitemap.xml`, `robots.txt`, OpenGraph/Twitter image URLs. Without it, Next.js falls back to `http://localhost:3000` and prints a build warning. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | public | No | Email address displayed in the Contact section (`mailto:` link). Leave unset to show the "official contact channels are being finalized" notice instead — **do not invent an address**. |
| `CONTACT_WEBHOOK_URL` | **server-only** | No (required for delivery) | HTTPS endpoint that receives validated contact-form submissions as `POST` JSON: `{ name, email, company, subject, message, receivedAt }`. When unset, the API route logs the submission to the server console and returns `delivered: false`. |

## Setup

```bash
# 1. Copy the example file
cp .env.example .env.local        # Windows PowerShell: copy .env.example .env.local

# 2. Edit .env.local — only set values you actually have.
#    .env.local is gitignored; never commit real values.

# 3. Restart the dev server after changing env vars.
npm run dev
```

## Notes

- `NEXT_PUBLIC_*` variables are inlined into the client bundle at **build time** — changing them requires a rebuild (`npm run build`) to take effect in production.
- `CONTACT_WEBHOOK_URL` is read at **request time** on the server; it is never exposed to the browser.
- There are no API keys, database credentials, or third-party SDK keys in this project.
- For production deployment (Vercel/Netlify/own server), set the same variables in the host's environment settings.
