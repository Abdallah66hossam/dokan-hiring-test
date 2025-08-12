"use client";
import Image from "next/image";
import { useState } from "react";

const data = [
  { id: 1, name: "Card", icon: "/icons/card.svg" },
  { id: 2, name: "Apple Pay", icon: "/icons/apple.svg" },
  { id: 3, name: "Google Pay", icon: "/icons/google.svg" },
  { id: 4, name: "STC Pay", icon: "/icons/stc.svg" },
];

const Method = () => {
  const [type, setType] = useState(0);

  const handleSelectType = (id: number) => {
    setType(id);
  };

  return (
    <section className="border-[.5px] rounded-xl border-[#444444] p-4 bg-[#2C2C2C]">
      <h2 className="mb-[14px] text-[#D6D6D6] font-medium leading-6">
        Payment Method
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {data.map((c) => (
          <div
            key={c.id}
            className="cursor-pointer"
            onClick={() => handleSelectType(c.id)}
          >
            <div
              className={`p-1 rounded-[6px] h-20 duration-300 ${
                c.id === type
                  ? "border border-[#9F98FF]"
                  : "border-[#606060] border-[.7px]"
              }`}
            >
              <div className="bg-[#464646] h-full flex items-center justify-center rounded-[4px]">
                <Image
                  src={c.icon}
                  alt={c.name}
                  width={0}
                  height={0}
                  sizes="auto"
                  className="w-auto h-auto max-h-full max-w-full"
                />
              </div>
            </div>
            <h3 className="text-[12px] leading-[18px] mt-2 text-center text-[#D6D6D6]">
              {c.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Method;
