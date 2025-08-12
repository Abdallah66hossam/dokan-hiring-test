export interface PaymentFormValues {
  name: string;
  cardNumber: number | null;
  expiry: string;
  cvc: number | null;
}
