export default {
  name: "cosmetic",
  title: "Гоо сайхны бүтээгдэхүүн",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Нэр",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(80),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      require: true,
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "images",
      title: "Зурагнууд",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "thumbnail",
      title: "Нүүр зураг",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: "Үндсэн сонголт",
      name: "defaultOption",
      type: "productOption",
      validation: (Rule) => Rule.required().error("Үндсэн сонголт заавал байх ёстой!")
    },
    {
      title: "Сонголт нэмэх",
      name: "options",
      type: "array",
      of: [
        {
          title: "option",
          type: "productOption",
        },
      ],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "brand",
      title: "Брэнд",
      type: "reference",
      to: { type: "cosmeticBrands" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Хамаарах ангилал",
      type: "reference",
      to: { type: "cosmeticSubCategories" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Мэдээлэл",
      validation: (Rule) => Rule.required(),
      type: "blockContent",
    },
    {
      name: "isFeatured",
      title: "Онцлох",
      type: "boolean",
    },
  ],
  initialValue: {
    isFeatured: false,
  },
  preview: {
    select: {
      title: "name",
      manufactor: "manufactor.title",
      media: "thumbnail",
    },
  },
};
