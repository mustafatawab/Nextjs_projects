import PrimaryButton from "@/components/button/PrimaryButton";
import React from "react";

const SmallSection = () => {
  return (
    <section className="py-10 mt-10 space-y-20 w-full">
      {/* Counter */}
      <div className="bg-[#0455B7] p-10 text-center space-y-10 rounded-xl">
        <h1 className="text-[36px] font-semibold text-white">
          The MSPTech Stack is Best-in-class for a reason
        </h1>

        <div className="flex flex-wrap justify-around gap-4">
          <span className="w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
            <h2 className="text-white font-bold text-[44px]">0%</h2>
            <p className="text-white">98.5% fully automated</p>
          </span>
          <span className=" w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
            <h2 className="text-white font-bold text-[44px]">100K+</h2>
            <p className="text-white">Over 300,000 transactions per</p>
          </span>
          <span className=" w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
            <h2 className="text-white font-bold text-[44px]">400</h2>
            <p className="text-white">Currency conversion for 17 currencies</p>
          </span>
          <span className="w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
            <h2 className="text-white font-bold text-[44px]">1400%</h2>
            <p className="text-white">
              85% of support requests resolved in-house
            </p>
          </span>
        </div>
      </div>

      {/* small one */}
      <div className="flex flex-col justify-start items-center text-center bg-white p-10 gap-5 rounded-2xl shadow-xl">
        <p className="text-[32px] text-[#2D2D2D]">
          Join the 30,000+ partners and vendors building their businesses in the
          MSPTech STack Marketplace
        </p>
        <PrimaryButton text="Get Started" />
      </div>
    </section>
  );
};

export default SmallSection;
