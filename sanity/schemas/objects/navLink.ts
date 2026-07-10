import { defineField, defineType } from 'sanity';

export const navLinkType = defineType({
  name: 'navLink',
  title: 'Navigasjonslenke',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Etikett', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', title: 'Lenke', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'isPrimary', title: 'Primær knapp', type: 'boolean', initialValue: false }),
  ],
});
