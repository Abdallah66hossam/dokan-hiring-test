"use client";

import React, { useRef } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { PaymentFormValues } from "@/lib/types";
import { paymentSchema } from "@/lib/validations/payment";

const Form: React.FC = () => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const initialValues: PaymentFormValues = {
    name: "",
    cardNumber: null,
    expiry: "",
    cvc: null,
  };

  return (
    <section className="border border-[#444444] rounded-xl p-4 bg-[#2C2C2C] mt-4">
      <h2 className="mb-4 text-[#D6D6D6] font-medium leading-6 text-sm sm:text-base">
        Payment Method
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={paymentSchema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
        }}
      >
        {({ errors }) => (
          <FormikForm>
            {/* Global error list */}
            {Object.keys(errors).length ? (
              <ul className="mb-4 bg-red-900/30 border border-red-500 rounded-md p-3 text-red-300 text-sm">
                {Object.values(errors).map((error, idx) => (
                  <li key={idx}>• {error}</li>
                ))}
              </ul>
            ) : (
              ""
            )}

            <label
              htmlFor="name"
              className="text-[#D6D6D6] text-[14px] sm:text-sm font-medium leading-5"
            >
              Cardholder name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Full name on card"
              className="text-[#878787] placeholder:text-[#878787] rounded-md text-sm px-4 py-2 w-full bg-[#2F2F2F] border border-[#383838] mt-1 mb-4 focus:outline-none focus:border-[#9F98FF]"
            />

            <label
              htmlFor="cardNumber"
              className="text-[#D6D6D6] text-[14px] sm:text-sm font-medium leading-5"
            >
              Card information
            </label>
            <div className="mt-1">
              <div className="relative w-full rounded-t-md px-4 py-2 bg-[#2F2F2F] border border-[#383838] flex items-center">
                <Field
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="text-[#878787] placeholder:text-[#878787] focus:border-[#9F98FF] w-full bg-transparent focus:outline-none"
                />
                <img src="/icons/cards.svg" alt="cards" className="ml-2" />
              </div>

              <div className="flex flex-col sm:flex-row">
                <div
                  className="text-[#878787] rounded-bl-md text-sm px-4 py-2 w-full bg-[#2F2F2F] border border-[#383838] focus-within:border-[#9F98FF] sm:rounded-none sm:rounded-bl-md cursor-pointer"
                  onClick={() => dateInputRef.current?.showPicker?.()}
                >
                  <Field
                    innerRef={dateInputRef}
                    type="date"
                    name="expiry"
                    className="bg-transparent w-full focus:outline-none cursor-pointer"
                  />
                </div>
                <div className="relative w-full">
                  <Field
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    className="text-[#878787] placeholder:text-[#878787] rounded-br-md text-sm px-4 py-2 w-full bg-[#2F2F2F] border border-[#383838] focus:border-[#9F98FF] focus:outline-none sm:rounded-none sm:rounded-br-md"
                  />
                  <img
                    src="/icons/cvv.svg"
                    alt="cvv"
                    className="absolute right-4 top-2"
                  />
                </div>
              </div>
            </div>
          </FormikForm>
        )}
      </Formik>
    </section>
  );
};

export default Form;
