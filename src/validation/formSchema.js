import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("Size is required!")
        .oneOf(["small", "medium", "large"], "Size is required!"),
    sauce: yup
        .string()
        .required("Sauce is required")
        .oneOf(["original", "alfredo", "pesto", "bbq"], "Sauce is required!"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    greenPeppers: yup.boolean(),
    olives: yup.boolean(),
    pineapple: yup.boolean(),
    onion: yup.boolean(),
    dicedTomatos: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    extraCheese: yup.boolean(),
    gfc: yup.boolean(),
    specialInstruction: yup
        .string()
        .trim(),
})

export default formSchema