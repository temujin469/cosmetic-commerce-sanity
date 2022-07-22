export default {
  name: "cosmeticCategories",
  title: "Гоо сайхны ангилал",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ангилалын нэр",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(80),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "subCategory",
      title: "Хамаарах ангилал",
      type: "array",

      of: [{ type: "reference",to:[{type:"cosmeticSubCategories"}] }],
    },
  ],
};
