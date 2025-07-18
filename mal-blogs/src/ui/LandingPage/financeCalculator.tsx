"use client";
import React, { useState } from "react";

const FinanceCalculator = () => {
  const [priceRange, setPriceRange] = useState(0);
  const [initialPayment, setInitialPayment] = useState(0);
  const [month, setMonth] = useState(40);

  let initialBorrowing = priceRange - initialPayment;
  // if(initialBorrowing == 0){
  //         initialBorrowing = 0;
  // }
  return (
    <section
      className="my-20 mt-10 flex flex-col lg:flex-row justify-center shadow-lg "
      id="#calculator"
    >
      <div className="w-full flex flex-col gap-2 basis-1/2 p-10 bg-white shadow-lg">
        <h3 className="font-semibold text-lg text-black/80 py-2 mb-2">
          Car Finance Calculator
        </h3>

        <label htmlFor="">Vehicle Price</label>

        <div className="flex items-center gap-3">
          <p className="text-[#37a3c1] text-xl font-semibold">£</p>
          <p className="font-bold">{priceRange}</p>
        </div>

        <input
          type="range"
          className="w-full  accent-[#40bee1] "
          step={500}
          min={0}
          max={10000}
          value={priceRange}
          onChange={(e: any) => setPriceRange(e.target.value)}
        />

        <label htmlFor="">Initial Payment (deposit)</label>

        <div className="flex items-center gap-3">
          <p className="text-[#37a3c1] text-xl font-semibold">£</p>
          <p className="font-semibold">{initialPayment}</p>
        </div>
        <input
          type="range"
          className="w-full  accent-[#40bee1] "
          step={500}
          min={0}
          max={10000}
          value={initialPayment}
          onChange={(e: any) => setInitialPayment(e.target.value)}
        />

        <label htmlFor="">To Pay Over</label>

        <div className="flex items-center gap-3">
          <p className="text-[#37a3c1] text-xl font-semibold">{month}</p>
          <p className="font-semibold"> Months</p>
        </div>
        <input
          type="range"
          className="w-full  accent-[#40bee1] "
          step={1}
          min={0}
          max={60}
          value={month}
          onChange={(e: any) => setMonth(e.target.value)}
        />

        <div className="flex justify-between items-center">
          <p className="text-sm">Assuming your credit score is : </p>

          <select
            name=""
            id=""
            className="py-1 px-4  border-2 border-black text-black/70 bg-transparent outline-none "
          >
            <option value="excelent" className="bg-gray-600  text-white ">
              Excelent
            </option>
            <option value="good" className="bg-gray-600 text-white">
              Good
            </option>
            <option value="fair" className="bg-gray-600 text-white">
              Fair
            </option>
            <option value="bad" className="bg-gray-600 text-white">
              Bad
            </option>
          </select>
        </div>
      </div>

      <div className="bg-[#032933] p-10 text-white basis-1/2 text-sm flex flex-col justify-between ">
        <div className="flex justify-between items-center ">
          <p>Best Availble Rate</p>
          <p className="text-xl font-semibold">9.8%</p>
        </div>

        <div className="flex justify-between items-center ">
          <p>Initial Borrowing</p>
          <p className="text-xl font-semibold">
            £{initialBorrowing < 0 ? "0" : initialBorrowing}
          </p>
        </div>

        <div className="flex justify-between items-center ">
          <p>Total Cost of Credit</p>
          <p className="text-xl font-semibold">£{0.0}</p>
        </div>

        <div className="flex justify-between items-center ">
          <p>Total Amount Repayable</p>
          <p className="text-xl font-semibold">£{0.0}</p>
        </div>

        <div className="flex justify-between items-center ">
          <p>
            <span className="text-sky-700">48 Months</span>
            <br />
            Payment of
          </p>
          <p className="text-xl font-semibold">£{0.0}</p>
        </div>

        <button className="bg-[#FCB400] p-2 text-black">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default FinanceCalculator;
