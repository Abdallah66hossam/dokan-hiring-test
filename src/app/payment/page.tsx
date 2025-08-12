import Image from "next/image";

const Payment = () => {
  return (
    <div className="relative bg-[#111111] h-screen">
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
