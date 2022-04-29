import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),

  choiceOfSize: yup
    .string()
    .oneOf(["small", "medium", "large", "xlarge"], "Size is required!"),

  choiceOfSauce: yup
    .string()
    .oneOf(
      ["original", "garlic-ranch", "bbq", "spinach-alfredo"],
      "Sauce is required!"
    ),

  special: yup.string().trim(),

  pepperoni: yup.boolean(),
  mushroom: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean(),
});

export default formSchema;
