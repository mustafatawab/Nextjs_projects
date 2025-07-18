'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import axios from "axios";
import { useRouter } from "next/navigation";

function Business () {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    numberOfEmploye: "",
    numberOfClients: "",
    focus: "",
    endpoints: "",
    phoneNumber: "",
    msCompetency: "",
    interest: "",
    psaTool: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    console.log(details);

  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(details);

    try {
      setLoading(true);
      const response = await axios.post("/api/business/details", details);
      console.log(response);
      router.push("/pages/signup/step4")
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
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

            {loading ? "Loading..." : <>
              <Heading text="Business Details" />

            </>}

          <p className="text-gray-400 font-semibold">3/5</p>

          </div>

          <span className="flex flex-col">
            <label htmlFor="">Number of Employes</label>
            <input
              onChange={handleChange}
              value={details.numberOfEmploye}
              name="numberOfEmploye"
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Number of Clients/Customers</label>
            <input
              onChange={handleChange}

              value={details.numberOfClients}
              name="numberOfClients"
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Client Verticle Focus</label>
            <input
              name="focus"
              onChange={handleChange}
              value={details.focus}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>



          <span className="flex flex-col ">
            <label htmlFor="">End Points Under Management</label>
            <input
              value={details.endpoints}
              onChange={handleChange}
              name="endpoints"
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Company Phone</label>
            <input
              value={details.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Microsoft Competency</label>
            <input
              value={details.msCompetency}
              name="msCompetency"
              onChange={handleChange}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Primary Interest</label>
            <input
              value={details.interest}
              name="interest"
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex gap-10">
            <p>Do You Have a PSA tool ? </p>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="yes">Yes</label>

              <input type="radio" id="yes" name="psaTool" onChange={handleChange} value={'yes'} />
            </span>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="no">No</label>
              <input type="radio" id="no" name="psaTool" onChange={handleChange} value={'no'} />
            </span>
          </span>

          <button type="submit" className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
          >Continue</button>

        </form>
      </div>
    </main>
  );
};

export default Business;
