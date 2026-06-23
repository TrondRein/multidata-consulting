# CLAUDE.md — Multidata Consulting Website

## Project Overview

Static marketing website for **Multidata Consulting AS** — an IT consulting company based in Oslo.
Built with Astro + Tailwind CSS, deployed to Vercel.

**Live URL:** (TBD after first deploy)
**GitHub repo:** (set after init)
**Stack:** Astro 4.x · Tailwind CSS 3.x · TypeScript · Vercel (serverless adapter)

---

## Architecture

```
src/
  components/     # Astro components (Header, Hero, Services, Footer, etc.)
  layouts/        # BaseLayout.astro — wraps all pages with <html>, <head>, etc.
  pages/          # File-based routing — index.astro is the main landing page
public/           # Static assets (favicon, images, etc.)
```

Single-page layout with anchor-based navigation (`#tjenester`, `#om-oss`, `#kontakt`).
No CMS, no database — pure static content for now.

---

## Brand & Design System

### Colors (defined in `tailwind.config.mjs`)

| Token              | Hex       | Usage                          |
|--------------------|-----------|-------------------------------|
| `brand-blue`       | `#0D3B66` | Primary backgrounds, headings  |
| `brand-orange`     | `#F4D35E` | Highlights, CTA buttons        |
| `brand-accent`     | `#EE964B` | Hover states, accent elements  |
| `neutral-dark`     | `#0F172A` | Footer background              |
| `neutral-light`    | `#F8FAFC` | Page background                |

### Typography
- Font: system sans-serif (via Tailwind `font-sans`)
- Mono: system monospace for labels/tags (`font-mono`)
- Headings: `font-black` for maximum weight

### Component conventions
- Bento-grid card layout in `Services.astro`
- Cards: `rounded-2xl border border-slate-200 bg-white` with hover glow effects
- Hover animations: expanding underline bar (`h-1 w-12 → w-24`) via Tailwind `transition-all`
- No JavaScript unless strictly necessary — prefer CSS transitions

---

## Development Commands

```bash
npm run dev       # Start local dev server (http://localhost:4321)
npm run build     # Type-check + build for production
npm run preview   # Preview production build locally
```

---

## Code Style Rules

- **Language:** Norwegian in all user-facing copy; English in code, comments, and this file
- **Components:** One component per file, named in PascalCase (`Header.astro`)
- **Tailwind:** Use design tokens (`brand-blue`, `brand-orange`) — never raw hex values in class names
- **No inline styles** unless generating dynamic values (e.g. calculated widths)
- **Astro components:** Keep frontmatter minimal — no business logic in `.astro` files
- **TypeScript:** Enable strict mode; use `interface Props` for all component props

---

## Content Guidelines

- Copy is in **Norwegian (bokmål)**
- Tone: professional, confident, technically credible — not salesy
- Company name: **Multidata Consulting** (never "MultiData" or "Multi Data")
- Short name in logo: **MULTIDATA** (all caps, stylized)
- Email: `kontakt@multidataconsulting.no`
- Location: Oslo, Norge

---

## Sections (current)

| Section     | Anchor      | Component        | Description                           |
|-------------|-------------|------------------|---------------------------------------|
| Header      | —           | `Header.astro`   | Sticky nav with logo + links          |
| Hero        | —           | `Hero.astro`     | Full-width intro with two CTAs        |
| Services    | `#tjenester`| `Services.astro` | Bento-grid with 4 service cards       |
| Footer      | `#kontakt`  | `Footer.astro`   | Contact info + copyright              |

**Planned sections (not yet built):**
- `#om-oss` — About / team / credentials
- Testimonials / case references
- `/blogg` or `/innsikt` — optional articles page

---

## Deployment

- Adapter: `@astrojs/vercel` (serverless)
- Deploy: push to `main` → Vercel auto-deploys
- Environment variables: none required for static build
- `astro.config.mjs` uses `output: 'serverless'` + vercel adapter

---

## Do Not

- Do not add npm packages without checking if Astro or Tailwind already solves it natively
- Do not hardcode colors outside of `tailwind.config.mjs`
- Do not create JavaScript-heavy components — this is a marketing site, keep it lean
- Do not modify `BaseLayout.astro` for page-specific concerns — use component slots instead
- Do not commit `node_modules/`, `.vercel/`, or `dist/`

---

## GitHub Workflow

- Branch: `main` is production
- Feature branches: `feature/section-name` or `fix/description`
- Commit style: imperative, lowercase — e.g. `add about section`, `fix hero cta alignment`
- PR before merge for anything structural; direct push to main acceptable for copy/style tweaks
