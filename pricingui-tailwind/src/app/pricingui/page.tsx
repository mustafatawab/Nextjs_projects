import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="h-96 w-auto bg-purple-600 text-white flex items-center">
        <div className="m-auto ">
          <h1 className="text-3xl font-bold">
            Simple Pricing for your Business
          </h1>
          <p className="justify-center">
            Plans that are carefully crafted to suit your business
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex -mt-20 justify-center  rounded-lg  w-3/5 m-auto  bg-white drop-shadow-xl">
          <div className="p-9 items-center ">
            <h1 className="font-bold text-lg justify-center">Premium PRO</h1>
            <h1 className="text-4xl font-bold mt-3">$329</h1>
            <p className="mt-3">Billed Just Once</p>
            <button className="bg-purple-600 rounded-lg px-4 py-1 mt-4 text-white">
              Get Started
            </button>
          </div>
          <div className="ml-4 text-lg p-8">
            <p className="font-bold mb-4">
              Access these features when you get this pricing packages for you
              business
            </p>
            <ol className="ml-5 list-disc">
              <li>International calling and messagin APIs</li>
              <li>Additional Phone NUmbers</li>
              <li>Automated messages via Ziefer</li>
              <li>24/7 support and consulting</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
