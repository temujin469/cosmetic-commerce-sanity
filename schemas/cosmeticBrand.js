export default {
  name: 'cosmeticBrands',
  title: 'Гоо сайхны брэнд',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Брэндийн нэр',
      type: 'string',
      validation: Rule => Rule.required().error('Нэрээ оруулан уу').max(80)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'logo',
      title: 'Лого',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name:"backgroundImage",
      title:'Ханын зураг',
      type:'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'брэндийн тухай мэдээлэл',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
