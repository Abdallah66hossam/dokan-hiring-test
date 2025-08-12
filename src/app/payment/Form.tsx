const Form = () => {
  return (
    <section className="border border-[#444444] rounded-xl p-4 bg-[#2C2C2C] mt-4">
      <h2 className="mb-4 text-[#D6D6D6] font-medium leading-6 text-sm sm:text-base">
        Payment Method
      </h2>
      <form>
        <label
          htmlFor="name"
          className="text-[#D6D6D6] text-[14px] sm:text-sm font-medium leading-5"
        >
          Cardholder name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full name on card"
          className="text-[#878787] placeholder:text-[#878787] rounded-md text-sm px-4 py-2 w-full bg-[#2F2F2F] border border-[#383838] mt-1 mb-4 focus:outline-none"
        />

        <label
          htmlFor="card-number"
          className="text-[#D6D6D6] text-[14px] sm:text-sm font-medium leading-5"
        >
          Card information
        </label>
        <div className="mt-1">
          <div className="relative w-full rounded-t-md px-4 py-2 bg-[#2F2F2F] border border-[#383838] flex items-center">
            <input
              type="number"
              id="card-number"
              placeholder="Card Number"
              className="text-[#878787] placeholder:text-[#878787] w-full bg-transparent focus:outline-none"
            />
            <img src="/icons/cards.svg" alt="cards" className="ml-2" />
          </div>

          <div className="flex flex-col sm:flex-row">
            <input
              type="date"
              className="text-[#878787] placeholder:text-[#878787] rounded-bl-md text-sm px-4 py-2 w-full bg-[#2F2F2F] border border-[#383838] focus:outline-none sm:rounded-none sm:rounded-bl-md"
            />
            <div className="relative w-full">
              <input
                type="number"
                placeholder="CVC"
                className="text-[#878787] placeholder:text-[#878787] rounded-br-md text-sm px-4 py-2 w-full bg-[#2F2F2F] border border-[#383838] focus:outline-none sm:rounded-none sm:rounded-br-md"
              />
              <img
                src="/icons/cvv.svg"
                alt="cvv"
                className="absolute right-4 top-2"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
