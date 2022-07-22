export default {
    name: 'advertising',
    title: 'Зар сурталчилгаа',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'нэр',
        type: 'string',
        validation: Rule => Rule.required().error('Нэрээ оруулан уу').max(80)
      },
      {
        name:"image",
        title:'Зураг',
        type:'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  