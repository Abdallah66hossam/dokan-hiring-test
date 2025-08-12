import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="animate-slide-in-text">
        <h1 className="leading-7 sm:leading-8 text-xl sm:text-2xl font-semibold text-header">
          Payment Details
        </h1>
        <p className="text-[#EDEDED] leading-5 sm:leading-6 mt-2 text-sm sm:text-base md:w-full sm:w-[95%] w-[90%] animate-fade-in-delayed">
          Complete your purchase by providing your payment details
        </p>
      </div>
      <Image
        src={"/icons/dokan-logo.svg"}
        alt="Dokan logo"
        width={33}
        height={46}
        className="w-[28px] sm:w-[33px] h-auto sm:relative absolute right-2 sm:right-6 top-0 sm:top-6 md:top-auto md:right-auto animate-logo-bounce"
      />
    </section>
  );
};

export default Header;
