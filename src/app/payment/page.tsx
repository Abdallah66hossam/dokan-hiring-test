import Image from "next/image";
import Header from "./Header";

const Payment = () => {
  return (
    <div className="relative bg-[#111111] min-h-screen py-[100px] 2xl:py-[176px] overflow-hidden">
      <section className="card-sh mx-auto w-[78%] h-[672px] relative z-50 rounded-[15.41px] p-[48px] ">
        <Header />
        <span className="text-[#C2C2C2] flex justify-center font-secondary mt-8">
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
