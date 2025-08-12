import Image from "next/image";
import Header from "./Header";
import Method from "./Method";
import Form from "./Form";
import OrderSummary from "./OrderSummary";

const Payment = () => {
  return (
    <div className="relative bg-[#111111] min-h-screen py-[60px] sm:py-[80px] xl:py-[100px] 2xl:py-[176px] overflow-hidden">
      <section className="card-sh mx-auto w-[95%] sm:w-[90%] xl:w-[78%] max-w-[1200px] h-auto relative z-50 rounded-[15px] p-6 sm:p-8 xl:p-[48px]">
        <Header />

        {/* Main content layout */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 mt-6">
          <div className="w-full xl:w-[64%]">
            <Method />
            <Form />
          </div>
          <OrderSummary />
        </div>

        <span className="text-[#C2C2C2] flex justify-center font-secondary mt-8 text-sm sm:text-base text-center">
          © 2025 Dokan Inc. All rights reserved.
        </span>
      </section>

      {/* Page Background */}
      <Image
        src="/images/Pattern-Bot.svg"
        alt="pattern background"
        width={0}
        height={305}
        sizes="100vw"
        className="absolute bottom-0 w-full object-cover"
        priority
      />
      <Image
        src="/images/gr1.svg"
        alt="gradient background"
        width={1131}
        height={799}
        className="absolute bottom-0 left-0"
      />
      <Image
        src="/images/gr2.svg"
        alt="gradient background"
        width={1012}
        height={622}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default Payment;
