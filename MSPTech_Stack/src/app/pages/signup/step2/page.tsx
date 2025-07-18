'use client'
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import { useRouter } from "next/navigation";

function BusinessModel() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [businessModelDetails, setBusinessModelDetails] = useState({
    model: "",
    classification: ""
  })


  const handleChange = (e: any) => {
    const { name, value } = e.target
    setBusinessModelDetails({
      ...businessModelDetails,
      [name]: value
    })
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(businessModelDetails);
    try {
      setLoading(true);
      const response = await axios.post("/api/business/model", businessModelDetails);
      console.log(response);
      router.push("/pages/signup/step3")
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="bg-blue relative w-screen">
        <Image
          className="opacity-35 w-full h-[400px]"
          src={background}
          alt="Background Image"
        />
      </div>

      <div className="-mt-52 z-20 relative ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <div className="flex justify-between">

          {loading ? "Loading " : <><Heading text="Business model" /></>}
          <p className="text-gray-400 font-semibold">2/5</p>
          
          </div>

          <p className="text-[#0F1519CC] text-2xl font-semibold">
            Please select the option that best applies to your business model
          </p>
          <span className="flex items-center text-[#0F1519CC]  gap-6 text-lg ">
            <input onChange={handleChange} type="radio" name="model" className="" value=' We invoice, support, and resell services to our clients on a monthly reoccurring model' />
            <p>
              We invoice, support, and resell services to our clients on a
              monthly reoccurring model
            </p>
          </span>

          <span className="flex items-center text-[#0F1519CC]  gap-6 text-lg">
            <input onChange={handleChange} type="radio" name="model" value={'We support our clients and invoice them for time and materials'} required />
            <p>
              We support our clients and invoice them for time and materials
            </p>
          </span>

          <span className="flex items-center text-[#0F1519CC]  gap-6 text-lg">
            <input onChange={handleChange} value="We utilize a referral model and prefer not to invoice or support
              our clients directly" type="radio" name="model" required />
            <p>
              We utilize a referral model and prefer not to invoice or support
              our clients directly
            </p>
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Business Classification</label>
            <input
              type="text"
              name="classification"
              value={businessModelDetails.classification}
              placeholder=""
              onChange={handleChange}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>


          <button type="submit"
            className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
          >Continue</button>
        </form>
      </div>
    </main>
  );
};

export default BusinessModel;
