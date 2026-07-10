import { defineField, defineType } from 'sanity';

export const siteContentType = defineType({
  name: 'siteContent',
  title: 'Nettstedsinnhold',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({ name: 'logoText', title: 'Logo tekst', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'logoSubtext', title: 'Logo undertekst', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'links', title: 'Lenker', type: 'array', of: [{ type: 'navLink' }], validation: (rule) => rule.min(1) }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'highlight', title: 'Highlight', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Beskrivelse', type: 'text', rows: 4, validation: (rule) => rule.required() }),
        defineField({ name: 'primaryCta', title: 'Primær CTA', type: 'cta' }),
        defineField({ name: 'secondaryCta', title: 'Sekundær CTA', type: 'cta' }),
        defineField({ name: 'image', title: 'Bilde', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Alt-tekst', type: 'string' }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'Om oss',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Beskrivelse', type: 'text', rows: 4, validation: (rule) => rule.required() }),
        defineField({ name: 'bullets', title: 'Punktliste', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.min(1) }),
        defineField({ name: 'image', title: 'Bilde', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Alt-tekst', type: 'string' }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Tjenester',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Beskrivelse', type: 'text', rows: 3, validation: (rule) => rule.required() }),
        defineField({ name: 'cards', title: 'Kort', type: 'array', of: [{ type: 'serviceCard' }], validation: (rule) => rule.min(1) }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Beskrivelse', type: 'text', rows: 3, validation: (rule) => rule.required() }),
        defineField({ name: 'email', title: 'E-post', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'location', title: 'Lokasjon', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'copyright', title: 'Copyright', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Nettstedsinnhold',
      subtitle: 'Multidata Consulting',
    }),
  },
});
