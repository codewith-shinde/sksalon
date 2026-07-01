# SK Unique Studio — Luxury Beauty Salon Website

A production-grade, luxury marketing website for **SK Unique Studio** (beauty
salon, 10 Colliergate, York, YO1 8BP). Built with **React + Vite**, animated
with **Framer Motion**, and deployed on **Cloudflare Pages**.

> Beauty · Confidence · You

---

## ✨ Features

- **Luxury white + champagne-gold** editorial design system
- **Cinematic scroll storytelling** — parallax hero, kinetic typography, reveal
  animations, 3D tilt service cards
- **Fully responsive**, mobile-first, with a sticky mobile call/WhatsApp bar
- **Accurate pricing** transcribed from the official salon menu
- **Context-aware WhatsApp deep-linking** on every CTA
- **Click-to-call**, embedded Google Map, opening hours
- **Gallery** with category filter + keyboard-accessible lightbox
- **Secure contact form** — validation, honeypot bot-trap, rate limiting,
  input sanitisation (composes a WhatsApp message; no backend/secrets needed)
- **SEO**: semantic HTML, meta/OG/Twitter tags, JSON-LD `BeautySalon`,
  `sitemap.xml`, `robots.txt`
- **Performance**: route-level code splitting, lazy-loaded sections,
  progressive images with shimmer + graceful fallback, font preconnect
- **Security headers** (CSP, HSTS, X-Frame-Options, etc.) via `public/_headers`

---

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to /dist
npm run preview    # preview the production build
npm run audit      # dependency vulnerability audit
```

---

## ☁️ Deploy to Cloudflare Pages

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. (Optional) add the env vars from `.env.example` under
   **Settings → Environment variables**.
5. Deploy. `public/_headers` (security headers) is applied automatically.

> **SPA routing:** handled by Wrangler's asset config
> `"not_found_handling": "single-page-application"` — do **not** add a
> `_redirects` file, as `/* /index.html` rules conflict with it and cause an
> infinite redirect loop on Cloudflare.

---

## 🖼 Adding your own brand assets

Everything is set up so you can drop in real assets with **no code changes**:

| Asset | Where to put it |
|-------|-----------------|
| Logo | Live: `public/logo.jpg` (hero) + `public/logo-mark.jpg` (nav/footer emblem). Full-res PNG originals kept in `brand-assets/`. Replace these files to update the logo everywhere. |
| Favicon / touch icons | `public/favicon.png`, `public/apple-touch-icon.png`, `public/android-chrome-*.png` |
| OG share image | `public/images/og-cover.jpg` |
| Service / gallery photos | edit `src` paths in `src/data/services.js` and `src/data/gallery.js` (e.g. `/images/nails.jpg`) |

Until you add real photos, the site uses curated **real** stock photography
(Unsplash) — never AI-generated people. If any image fails to load, an elegant
gold gradient with the “SK” monogram shows instead, so nothing ever looks broken.

---

## 💷 Pricing

All prices live in **`src/data/services.js`**, transcribed verbatim from the
official menu. **Nothing is invented.**

> ⚠️ **One thing to confirm:** the bottom ~5 lines of the *Nail Extensions*
> section were hidden by the iOS share overlay in the supplied photo. See the
> `PENDING_CONFIRMATION` block at the bottom of `services.js` — fill those in and
> move them into the `nails` → `Nail Extensions` group. No guessed prices are
> ever displayed.

---

## 🗂 Project structure

```
public/            _headers, robots, sitemap, manifest, assets
src/
  data/            siteConfig, services (pricing), testimonials, gallery
  hooks/           media query, scroll, body-scroll-lock
  utils/           whatsapp deep-links, formatting + sanitisation
  components/
    ui/            Button, LazyImage, Icon, Reveal, Stars, Logo, SectionHeading
    layout/        Navbar, Footer, FloatingActions, ScrollProgress
    sections/      Hero, About, Services, Pricing, WhyChooseUs,
                   Testimonials, Gallery, CTABand, Contact
  App.jsx, main.jsx, index.css
```

---

## 🔐 Security notes

- No secrets in the frontend. Only public contact details are exposed.
- Strict CSP + security headers in `public/_headers`.
- All external links use `rel="noopener noreferrer"`.
- Contact form: client-side validation + sanitisation + honeypot + rate limit.
  If you later add a real backend endpoint, **validate again server-side**.

---

© 2026 SK Unique Studio Salon. All rights reserved.
