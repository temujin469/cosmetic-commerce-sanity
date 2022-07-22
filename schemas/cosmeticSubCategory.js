export default {
  name: "cosmeticSubCategories",
  title: "Гоо сайхны дэд ангилал",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Гоо сайхны дэд ангилал",
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
    
  ],
};
