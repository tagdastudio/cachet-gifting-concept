# Cachet — a gifting-house concept

A configurable, design-led website for a gift, hamper or corporate-gifting business, built by **Tagda Studio**.

**Live preview:** https://cachet-gifting-concept.pages.dev

The business and its details are fictional. The site is a concept, not a live shop; prices, hours, lead times and the address are illustrative. A thin concept banner and a noindex header make that clear on every page.

## What it is

- A **candlelit cover**: a full-bleed photograph, an oversized Didone headline and a wax seal drawn in SVG — uneven poured edge, two drips, a pressed monogram.
- A **numbered catalogue** on ivory: six parcels, each with a drawn plate rather than a stock photograph, so the colourways stay in the brand's four colours.
- A **commission brief** that composes a message in the browser. Nothing is posted; the visitor chooses WhatsApp or email.
- Wedding, corporate, showroom, journal, FAQ, delivery and legal pages.
- One dark ground, one ivory paper, one pop (oxblood) and one metal (champagne). Two typefaces.

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger · Lenis · Cloudflare Pages.

## Run

```bash
npm install
npm run dev          # http://127.0.0.1:4302
npm run check        # typecheck, lint, production build
```

Build the static site:

```bash
npm run build        # writes ./out
```

## Deploy

```bash
npm run build
npx wrangler pages deploy out --project-name cachet-gifting-concept --branch main
```

The repo is `tagdastudio/cachet-gifting-concept`. Cloudflare serves `out` as static files; `public/_headers` sets the security headers and the noindex tag.

## Rebrand it for a client

1. **`src/content/site.ts`** — name, wordmark, monogram, city, address, hours, phone, WhatsApp, email, Instagram, delivery note, concept flag.
2. **`src/app/globals.css`** — the palette tokens (`--color-bg`, `--color-paper`, `--color-rose`, `--color-champagne`, and the rest). Keep the token names.
3. **`src/lib/fonts.ts`** — the two voices: display and body. The seal's monogram follows `site.monogram`.
4. **`src/content/parcels.ts`** — names, prices, contents, lead times and each plate's four colours.
5. **`src/content/journal.ts`, `faq.ts`** — the editorial pages.
6. **`public/media/`** — replace the Pexels placeholders with the client's own photography; the plates are drawn, so they need no images.
7. **`src/components/layout/ConceptBanner.tsx`** — remove the concept banner for a real launch.
8. **`next.config.ts`** — set `NEXT_PUBLIC_INDEXABLE=true` and remove the noindex rule in `public/_headers` when the site is ready to be indexed. Update `NEXT_PUBLIC_SITE_URL` or the default in `src/lib/site.ts`.
9. **`src/components/ui/WaxSeal.tsx`** — the seal tone is a prop; a client with a different house colour changes one object.

## Notes on the seal

The seal is generated from a seeded, uneven circle and drawn in SVG: no raster asset, no duplicated gradients (each instance gets its own IDs from `useId`, so a copy inside a closed menu cannot blank the ones on the page). It prints, animates and scales.

## Preview files

- `preview/hero-desktop.png`, `preview/hero-mobile.png` — the cover.
- `preview/mobile/` — menu, filtered catalogue, a composed brief, an open FAQ, a parcel detail.
- `preview/pages/` — full-page QA captures (ignored by git).

## Credits

Photography placeholders are from Pexels; see `CREDITS.md`. Fonts are Bodoni Moda and Archivo via Google Fonts. All rights in the concept, copy, layout and drawn illustrations belong to Tagda Studio.
