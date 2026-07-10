# Sanity-oppsett for Multidata Consulting

Denne mappen inneholder ferdig struktur og seed-data for dokumenttypen `siteContent` som frontend leser.

## 1) Legg inn schema i Sanity Studio

Importer schema-typene fra:

- `sanity/schemas/index.ts`

Dette må inkluderes i din Studio-konfigurasjon (`schema.types`).

## 2) Importer ferdig innhold

Seed-fil:

- `sanity/seed/siteContent.ndjson`

Eksempel med Sanity CLI:

```bash
sanity dataset import sanity/seed/siteContent.ndjson production --replace
```

## 3) Koble frontend mot prosjektet

Kopier `.env.example` til `.env` i webprosjektet og fyll inn:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`
- `SANITY_READ_TOKEN` (kun hvis datasett er privat)
