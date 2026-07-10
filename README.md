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

Legg disse i `.env`:

```bash
SANITY_PROJECT_ID=...
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=... # valgfri for private datasett
```

### Felter som forventes i `siteContent`

- `seo.title`, `seo.description`
- `header.logoText`, `header.logoSubtext`, `header.links[]`
- `hero.title`, `hero.highlight`, `hero.description`, `hero.primaryCta`, `hero.secondaryCta`, `hero.image`
- `about.title`, `about.description`, `about.bullets[]`, `about.image`
- `services.title`, `services.description`, `services.cards[]`
- `footer.title`, `footer.description`, `footer.email`, `footer.location`, `footer.copyright`

Bildene i `hero.image` og `about.image` brukes direkte fra Sanity asset-URL.
