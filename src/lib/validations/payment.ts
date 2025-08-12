import * as Yup from "yup";

export const paymentSchema = Yup.object({
  name: Yup.string().min(4, "Name must be at least 4 characters"),
  cardNumber: Yup.string().matches(
    /^\d{16}$/,
    "Card number must be exactly 16 digits"
  ),
  expiry: Yup.date().min(new Date(), "Expiry date must be in the future"),
  cvc: Yup.string().matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits"),
});
