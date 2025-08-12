import React from "react";

const OrderSummary = () => {
  return (
    <section className="h-full w-[36%]">
      <div className="border-[.5px] border-[#444444] bg-blur p-4 rounded-xl h-[371px]">
        <h3 className="text-center font-medium text-[#D6D6D6] leading-6">
          Total Amount
        </h3>
        <h4 className="text-total font-bold text-[36px] leading-[44px] -tracking-[2%] mt-4 text-center">
          $89.57
        </h4>
        <div className="bg-[#383838] h-px w-fit my-[14px]"></div>
        <h5 className="text-[#D6D6D6] font-medium text-[14px] mb-[14px]">
          Order Summary
        </h5>
        <div className="flex items-center justify-between">
          <h6 className="text-[#878787] font-medium text-[14px]">Invoice</h6>
          <span className="text-[#D6D6D6] text-[12px]">#34593350</span>
        </div>
        <div className="flex items-center justify-between my-6">
          <h6 className="text-[#878787] font-medium text-[14px]">Seller</h6>
          <span className="text-[#D6D6D6] text-[12px]">Dukan Tab</span>
        </div>
        <h6 className="text-[#878787] font-medium text-[14px] mb-2.5">
          Seller Description:
        </h6>
        <span className="text-[#D6D6D6] text-[12px] w-[90%]">
          Platform for live broadcasting solutions and content creation
        </span>
      </div>
      <button className="bg-submit-btn border border-[#ffffff33] cursor-pointer w-full rounded-[6px] h-[41px] text-white flex justify-center items-center mt-6">
        Pay $89.57
      </button>
    </section>
  );
};

export default OrderSummary;
