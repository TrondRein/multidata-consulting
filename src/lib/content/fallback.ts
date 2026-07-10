import type { SiteContent } from './types';

export const fallbackSiteContent: SiteContent = {
  seo: {
    title: 'Multidata Consulting | Robust IT-Infrastruktur og Skyarkitektur',
    description: 'Avansert datakonsulentvirksomhet levert av Multidata Consulting.',
  },
  header: {
    logoText: 'MULTIDATA',
    logoSubtext: 'CONSULTING',
    links: [
      { label: 'Tjenester', href: '#tjenester' },
      { label: 'Om oss', href: '#om-oss' },
      { label: 'Kontakt', href: '#kontakt', isPrimary: true },
    ],
  },
  hero: {
    title: 'Avansert datakonsulentvirksomhet.',
    highlight: 'Levert.',
    description:
      'Vi bygger og optimaliserer fremtidens IT-infrastruktur. Fra robuste dataløsninger til skyarkitektur – vi omsetter kompleks data til reell forretningsverdi.',
    primaryCta: { label: 'Kom i gang', href: '#kontakt' },
    secondaryCta: { label: 'Våre tjenester', href: '#tjenester' },
  },
  about: {
    title: 'Teknologi som tåler virkeligheten',
    description:
      'Multidata Consulting leverer rådgivning og gjennomføring innen infrastruktur, dataflyt og operativ modernisering. Vi kombinerer teknisk dybde med tydelig retning for å skape målbar verdi.',
    bullets: [
      'Erfaring med virksomhetskritiske miljøer i både privat og offentlig sektor',
      'Tverrfaglig kompetanse innen sky, data, sikkerhet og automatisering',
      'Pragmatisk leveransemodell som gir raske forbedringer uten å kompromisse kvalitet',
    ],
  },
  services: {
    title: 'Våre tjenester',
    description: 'Tung teknisk kompetanse pakket inn i en strukturert og fremtidsrettet leveransemodell.',
    cards: [
      {
        label: 'Infrastruktur',
        title: 'Skyarkitektur & Moderne Endpoint Management',
        description:
          'Vi designer, migrerer og optimaliserer skytjenester og virksomhetskritisk infrastruktur med fokus på automasjon, sikkerhet og skalerbarhet.',
        tone: 'accent',
        featured: true,
      },
      {
        label: 'Data',
        title: 'Dataintegrasjon & Analyse',
        description:
          'Vi samler og strukturerer data fra spredte kilder, slik at virksomheten kan ta beslutninger basert på sanntidsinnsikt.',
        tone: 'orange',
      },
      {
        label: 'Strategi',
        title: 'IT-Rådgivning & Arkitektur',
        description:
          'Strategisk rådgivning som kobler forretningsmål med teknologiske valg, roadmap og konkret gjennomføring.',
        tone: 'blue',
      },
      {
        label: 'Kode & Effektivitet',
        title: 'Automatisering & DevOps Pipelines',
        description:
          'Vi fjerner manuelle feilkilder med moderne CI/CD, skripting og infrastruktur som kode for konsistente miljøer.',
        tone: 'dark',
        featured: true,
      },
    ],
  },
  footer: {
    title: 'Klar for å rigge infrastrukturen for fremtiden?',
    description:
      'Send oss en e-post eller avtal et uforpliktende møte for å diskutere dine tekniske utfordringer.',
    email: 'kontakt@multidataconsulting.no',
    location: 'Oslo, Norge',
    copyright: '© 2026 Multidata Consulting AS. Driftet på Vercel.',
  },
};
