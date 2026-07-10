import { defineField, defineType } from 'sanity';

export const ctaType = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Etikett', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', title: 'Lenke', type: 'string', validation: (rule) => rule.required() }),
  ],
});
