import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'castMember',
  title: 'Cast Member',
  type: 'object',
  fields: [
    defineField({
      name: 'characterName',
      title: 'Character Name',
      type: 'string',
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'externalCreditId',
      title: 'External Credit ID',
      type: 'string',
    }),
  ],
})
