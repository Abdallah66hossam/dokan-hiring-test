const Form = () => {
  return (
    <section className="border-[.5px] rounded-xl border-[#444444] p-4 bg-[#2C2C2C] mt-4.5">
      <h2 className="mb-4.5 text-[#D6D6D6] font-medium leading-6">
        Payment Method
      </h2>
      <form>
        <label
          htmlFor="name"
          className="text-[#D6D6D6] text-[14px] font-medium leading-5"
        >
          Cardholder name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full name on card"
          className="text-[#878787] placeholder:text-[#878787] rounded-md text-sm px-4 py-[7px] h-[34px] w-full bg-[#2F2F2F] border-[#383838] border-[0.8px] mt-1.5 mb-[14px] focus:outline-0"
        />
        <label
          htmlFor="name"
          className="text-[#D6D6D6] text-[14px] font-medium leading-5"
        >
          Card information
        </label>
        <div className="mt-1.5">
          <div className="relative w-full rounded-t-md text-sm px-4 py-[7px] h-[34px] bg-[#2F2F2F] border-[#383838] border-[0.8px] flex items-center justify-between">
            <input
              type="number"
              placeholder="Card Number"
              className="text-[#878787] placeholder:text-[#878787] w-full focus:outline-0"
            />
            <img src="/icons/cards.svg" alt="" className="" />
          </div>
          <div className="flex items-center">
            <input
              type="date"
              className="text-[#878787] placeholder:text-[#878787] rounded-es-md text-sm px-4 py-[7px] h-[34px] w-full bg-[#2F2F2F] border-[#383838] border-[0.8px] focus:outline-0"
            />
            <div
              className="relative w-full
            "
            >
              <input
                type="number"
                placeholder="CVC"
                className="text-[#878787] placeholder:text-[#878787] rounded-ee-md text-sm px-4 py-[7px] h-[34px] w-full bg-[#2F2F2F] border-[#383838] border-[0.8px] focus:outline-0"
              />
              <img
                src="/icons/cvv.svg"
                alt=""
                className="absolute right-[15px] top-[6px]"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
