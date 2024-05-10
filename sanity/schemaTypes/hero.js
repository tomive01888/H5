import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'herosection',
  title: 'Hero section',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This will be used on the index page',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'This will be used as paragraph on the index page',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
      description: 'This text is to be used on the hero button',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})

// defineField({
//   name: 'slug',
//   title: 'Slug',
//   type: 'slug',
//   options: {
//     source: 'name',
//     maxLength: 100,
//   },
// }),