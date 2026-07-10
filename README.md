# Multidata Consulting Website

Astro-basert markedsnettsted for Multidata Consulting AS.

## Utvikling

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Sanity-integrasjon

Frontend er satt opp for å hente innhold fra en enkelt Sanity-dokumenttype: `siteContent`.
Hvis Sanity-variabler mangler, brukes lokale fallback-data automatisk.

### Miljøvariabler

Kopier `.env.example` til `.env` og fyll inn:

```bash
SANITY_PROJECT_ID=...
SANITY_DATASET=...
SANITY_API_VERSION=...
SANITY_READ_TOKEN=... # valgfri for private datasett
```

### Full Sanity-struktur + ferdig innhold

Repoet inneholder nå både struktur og ferdig utfylt data:

- Schema-typer: `sanity/schemas/`
- Schema-indeks: `sanity/schemas/index.ts`
- Seed-data: `sanity/seed/siteContent.ndjson`
- Steg-for-steg: `sanity/README.md`

### Felter som frontend forventer i `siteContent`

- `seo.title`, `seo.description`
- `header.logoText`, `header.logoSubtext`, `header.links[]`
- `hero.title`, `hero.highlight`, `hero.description`, `hero.primaryCta`, `hero.secondaryCta`, `hero.image`
- `about.title`, `about.description`, `about.bullets[]`, `about.image`
- `services.title`, `services.description`, `services.cards[]`
- `footer.title`, `footer.description`, `footer.email`, `footer.location`, `footer.copyright`

Bildene i `hero.image` og `about.image` brukes direkte fra Sanity asset-URL.
Hvis bilder ikke finnes, rendres siden fortsatt med fallback-innhold uten eksterne bildeavhengigheter.
