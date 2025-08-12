import React from "react";

const OrderSummary = () => {
  return (
    <section className="w-full xl:w-[36%] mt-6 xl:mt-0 animate-slide-in-right animate-delay-300">
      <div className="border border-[#444444] bg-blur p-4 sm:p-6 rounded-xl xl:h-[389px]">
        <h3 className="text-center font-medium text-[#D6D6D6] leading-6 text-sm sm:text-base">
          Total Amount
        </h3>
        <h4 className="text-total font-bold text-2xl sm:text-3xl md:text-[36px] leading-8 sm:leading-[44px] -tracking-[2%] xl:mt-4 mt-3 text-center">
          $89.57
        </h4>

        <div className="bg-[#383838] h-px w-full my-4 xl:my-5"></div>

        <h5 className="text-[#D6D6D6] font-medium text-sm sm:text-[14px] mb-3">
          Order Summary
        </h5>
        <div className="flex items-center justify-between">
          <h6 className="text-[#878787] font-medium text-sm sm:text-[14px]">
            Invoice
          </h6>
          <span className="text-[#D6D6D6] text-xs sm:text-[12px]">
            #34593350
          </span>
        </div>

        <div className="flex items-center justify-between my-4 sm:my-6">
          <h6 className="text-[#878787] font-medium text-sm sm:text-[14px]">
            Seller
          </h6>
          <span className="text-[#D6D6D6] text-xs sm:text-[12px]">
            Dukan Tab
          </span>
        </div>

        <h6 className="text-[#878787] font-medium text-sm sm:text-[14px] mb-2.5">
          Seller Description:
        </h6>
        <p className="text-[#D6D6D6] text-xs sm:text-[12px] leading-5">
          Platform for live broadcasting solutions and content creation
        </p>
      </div>

      <button className="bg-submit-btn border border-[#ffffff33] cursor-pointer w-full rounded-md h-[41px] text-white flex justify-center items-center mt-4 sm:mt-6 text-sm sm:text-base">
        Pay $89.57
      </button>
    </section>
  );
};

export default OrderSummary;
