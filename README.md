# Kignature LLC — Corporate Website

Official corporate website for **Kignature LLC**, a Bangladesh-headquartered technology company. The site presents the company and its product portfolio — including **NexBD**, the flagship Super App (currently in development) — with a premium dark, navy/blue/cyan design.

> This is the **company website**, not the NexBD application. NexBD is presented as one of Kignature LLC's products.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (custom ink/brand/ice palette in `globals.css`)
- **lucide-react** icons
- Single-page layout with anchor navigation (#about, #products, #technology, #vision, #contact)
- Contact form → `POST /api/contact` route (webhook delivery or server-side log fallback)
- SEO: `metadataBase`-aware OpenGraph/Twitter, `sitemap.ts`, `robots.ts`, JSON-LD Organization schema, `opengraph-image.tsx`

## System requirements

- Node.js **20+** (developed on Node 24) and npm
- ~1 GB free disk for `node_modules`
- Any modern browser for viewing

## Installation

```bash
# Windows (PowerShell / CMD / Git Bash)
cd "C:\Users\Atik\Pictures\Kignature LLC"
npm install

# macOS / Linux
cd "path/to/Kignature LLC"
npm install
```

## Environment setup

All variables are **optional** — see `.env.example` and `ENV_SETUP.md` for details.

```bash
cp .env.example .env.local     # Windows: copy .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap/robots/OG metadata (set to the real domain at deploy time) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown in the Contact section (leave empty to hide it) |
| `CONTACT_WEBHOOK_URL` | Server-side endpoint that receives contact-form submissions |

## Run locally (development)

```bash
npm run dev
# → http://localhost:3000
```

Stop with `Ctrl+C` in the terminal.

## Production build & run

```bash
npm run build     # outputs optimized build to .next/
npm run start     # serves on http://localhost:3000
# custom port: npx next start -p 3001
```

Stop with `Ctrl+C`.

## Lint / typecheck

```bash
npm run lint      # ESLint (eslint-config-next)
npx tsc --noEmit  # strict TypeScript check (also runs inside next build)
```

## Project structure

```
Kignature LLC/
├── .env.example          # documented env template (committable)
├── ENV_SETUP.md          # env var reference
├── next.config.ts        # Turbopack CSS rule, cacheComponents
├── public/               # static assets
└── src/
    ├── app/
    │   ├── layout.tsx        # fonts, metadata, Navbar/Footer shell, JSON-LD
    │   ├── page.tsx          # section composition (single page)
    │   ├── globals.css       # Tailwind v4 theme tokens + custom utilities
    │   ├── robots.ts         # /robots.txt
    │   ├── sitemap.ts        # /sitemap.xml
    │   ├── icon.svg          # favicon
    │   ├── opengraph-image.tsx
    │   └── api/contact/route.ts  # contact form endpoint
    ├── components/
    │   ├── Navbar.tsx         # fixed nav + mobile menu
    │   ├── Footer.tsx
    │   ├── Reveal.tsx         # scroll-reveal wrapper (IntersectionObserver)
    │   ├── SectionHeading.tsx
    │   ├── phone/             # CSS phone mockup + NexBD screen previews
    │   └── sections/          # Hero, About/Vision, NexBDProduct,
    │                          # Showcase, Technology/Roadmap, Contact
    └── (screenshots/ — QA captures, not part of the app)
```

## Testing performed (2026-11-20)

- `npm install` — clean, 0 vulnerabilities
- `npm run dev` — all routes 200: `/`, `/sitemap.xml`, `/robots.txt`
- `POST /api/contact` — validation rejects bad payloads (422); valid payload returns `{ ok: true, delivered: false }` in placeholder mode
- `npm run build` — ✅ compiled, typecheck passed, 8 routes generated
- `npx next start -p 3001` — production server serves `/` → 200
- Screenshots: `screenshots/kignature-desktop.png`, `kignature-full.png`, `kignature-mobile.png` (headless Chrome, 1440px + 390px)

## Common errors & troubleshooting

| Symptom | Fix |
|---|---|
| `Port 3000 is already in use` | `npx next dev -p 3001` or stop the other process |
| Build warning: `metadataBase … not set` | Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (see ENV_SETUP.md) |
| Contact form shows "Unable to deliver" | `CONTACT_WEBHOOK_URL` unreachable — check the URL; without it, submissions only log to the server console |
| `next/font` fetch errors on restricted networks | Fonts are fetched from Google Fonts at build time; retry or use a network that allows fonts.googleapis.com |
| Blank page / hydration errors | Delete `.next/` and `node_modules/.cache`, then `npm run dev` again |
| Tailwind classes not applying | Ensure Tailwind v4 `@import "tailwindcss"` is first in `globals.css`; restart dev server after config edits |

## Deployment

The site is fully static except `POST /api/contact` (serverless function).

- **Vercel** (easiest): import repo → set env vars → deploy. `NEXT_PUBLIC_SITE_URL` must be the production domain.
- **Netlify / other hosts**: `npm run build` then serve `.next` via the platform's Next.js runtime, or export static output (note: `/api/contact` needs a serverless/edge function).
- **Self-hosted**: `npm run build && npm run start` behind nginx/Caddy with TLS.

Before going live: set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, and `CONTACT_WEBHOOK_URL`, and confirm all content claims (NexBD is labeled "in development" throughout).

## Content notes

- NexBD is presented strictly as a Kignature LLC **product in development** — modules are labeled "Planned" and a construction notice appears in the product section.
- No invented addresses, phone numbers, partnerships, or launch claims. Contact details appear only when `NEXT_PUBLIC_CONTACT_EMAIL` is set.
