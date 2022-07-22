export default {
  title: "Хувилбар",
  name: "productOption",
  type: "object",
  fields: [
    {
      title: "Нэр",
      name: "name",
      validation: (Rule) => Rule.required().max(80),
      type: "string",
    },
    {
      title: "Нөөц",
      name: "countInStock",
      type: "number",
      validation: (Rule) => Rule.required(),

      require: true,
    },
    {
      title: "Үндсэн үнэ",
      name: "price",
      type: "number",

      validation: (Rule) => Rule.required(),
    },
    {
      title: "Хямдрал",
      name: "discount",
      type: "number",
    },
  ],
  initialValue: {
    discount:0
  }
};
