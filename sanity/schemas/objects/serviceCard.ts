import { defineField, defineType } from 'sanity';

export const serviceCardType = defineType({
  name: 'serviceCard',
  title: 'Tjenestekort',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Kategori', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Beskrivelse', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'tone',
      title: 'Fargetone',
      type: 'string',
      options: {
        list: [
          { title: 'Accent', value: 'accent' },
          { title: 'Orange', value: 'orange' },
          { title: 'Blue', value: 'blue' },
          { title: 'Dark', value: 'dark' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'featured', title: 'Fremhevet kort', type: 'boolean', initialValue: false }),
  ],
});
