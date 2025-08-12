import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <h1 className="leading-8 text-2xl font-semibold text-header">
          Payment Details
        </h1>
        <p className="text-[#EDEDED] leading-6 mt-2">
          Complete your purchase by providing your payment details
        </p>
      </div>
      <Image
        src={"/icons/dokan-logo.svg"}
        alt="Dokan logo"
        width={33.01}
        height={46.37}
      />
    </section>
  );
};

export default Header;
