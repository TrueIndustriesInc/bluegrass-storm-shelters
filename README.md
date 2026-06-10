# Bluegrass Storm Shelters - Website

Premium, hyper-local marketing site for **Bluegrass Storm Shelters** (Bowling Green, KY): in-ground and above-ground tornado shelters for Warren County & South Central Kentucky.

**Live preview:** https://trueindustriesinc.github.io/bluegrass-storm-shelters/

## Tech stack

- **Next.js 16** (App Router) with **static export** - deploys anywhere, no servers, excellent Core Web Vitals
- **Tailwind CSS v4** with brand tokens defined in `src/app/globals.css`
- **React Hook Form + Zod** lead form (Formspree-ready, see below)
- Custom scroll-reveal animations (IntersectionObserver, `prefers-reduced-motion` aware) - no animation library needed
- JSON-LD structured data: `LocalBusiness`, `Service`, `FAQPage`, `HowTo`, `Article`, `BreadcrumbList`
- Generated concept photography in `public/images` (replace with real install photos as available)

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

## Deploying

### Vercel (recommended for production)

1. [vercel.com/new](https://vercel.com/new) → Import `TrueIndustriesInc/bluegrass-storm-shelters`
2. Accept the defaults (framework auto-detected, no env vars required) → Deploy
3. Add the custom domain under Project → Settings → Domains
4. Update `site.url` in `src/lib/site.ts` to the production domain (drives canonical URLs, sitemap, and schema)

### GitHub Pages (current preview)

Pushes to `main` lint, build, and deploy automatically via `.github/workflows/ci.yml`. The preview builds with `NEXT_PUBLIC_BASE_PATH=/bluegrass-storm-shelters`; Vercel builds without it.

## Handover checklist for Bluegrass

Everything marked `PLACEHOLDER` in the code needs real data before launch:

1. **Business details** - `src/lib/site.ts` is the single source of truth: phone, email, address/zip, legal name, license number, Facebook URL, hours, final domain. Header, footer, contact page, and schema all read from it.
2. **Photos** - drop real install photos into `public/images/` (JPEG, ~1400px wide, compressed) and update references in the pages. Alt text matters for SEO and accessibility - describe what's actually in the photo.
3. **Testimonials** - replace the placeholder entries in `src/content/testimonials.ts` with real quotes (name, area, install detail).
4. **Lead form delivery** - create a free form at [formspree.io](https://formspree.io), then set `NEXT_PUBLIC_FORMSPREE_ID` (in Vercel: Project → Settings → Environment Variables). Until then the form validates and shows the success state but doesn't email anywhere ("demo mode" - see `src/components/LeadForm.tsx`).
5. **FAQ & guide accuracy** - `src/content/faqs.ts` and `src/app/resources/*` were written from public information; have Landon verify pricing language, certifications, and warranty claims.
6. **Analytics (optional)** - add Plausible/Fathom script in `src/app/layout.tsx` if desired; nothing is tracked today.

## Editing content

| What | Where |
|---|---|
| Phone, email, service areas, permits contacts | `src/lib/site.ts` |
| FAQs (with auto schema) | `src/content/faqs.ts` |
| Testimonials | `src/content/testimonials.ts` |
| Resource guide registry | `src/content/articles.ts` |
| Guide articles (plain JSX prose) | `src/app/resources/<slug>/page.tsx` |
| Brand colors & fonts | `src/app/globals.css` (`@theme` block) |
| Logo | `src/components/Logo.tsx` + `src/app/icon.svg` |

## Page map

- `/` - hero, local reality (2021 context), trust bar, shelter options, process, why-local, gallery, testimonials, FAQ, lead form
- `/shelters` (+ `/shelters/in-ground`, `/shelters/above-ground`) - options, honest comparison table, what's included
- `/process` - six transparent steps with HowTo schema
- `/why-local` - local story & differentiation
- `/resources` - Peace of Mind Center: 5 guides, printable preparedness checklist (lead magnet), official links, full FAQ
- `/contact` - lead form, service-area list, direct contact
