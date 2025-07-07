'use client'
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import { useRouter } from "next/navigation";

function Partnership ()  {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({

    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    adminAccountTitle: "",
    adminPhone: " ",
    agree: ""
  })


  const handleChange = (e: any) => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value
    })
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post("/api/business/partnership", admin)
      console.log(response);
      router.push("/pages/signup/step5")
    } catch (error: any) {
      setLoading(false);
      console.log(error, "Error occure");

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

            {loading ? "loading" : <>

              <Heading text="Partnership" />
            </>}
            <p className="text-gray-400 font-semibold">4/5</p>

          </div>
          <span className="flex flex-col">
            <label htmlFor="">Account Administrator First Name</label>
            <input
              name="adminFirstName"
              value={admin.adminFirstName}
              onChange={handleChange}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Account Administrator Last Name</label>
            <input
              name="adminLastName"
              value={admin.adminLastName}
              onChange={handleChange}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Account Administrator Business Email</label>
            <input
              name="adminEmail"
              value={admin.adminEmail}
              onChange={handleChange}
              type="email"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Account Administrator Account Title</label>
            <input
              name="adminAccountTitle"
              value={admin.adminAccountTitle}
              onChange={handleChange}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Account Administrator Phone (optional)</label>
            <input
              name="adminPhone"
              value={admin.adminPhone}
              onChange={handleChange}
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
            />
          </span>

          <span className="flex gap-5 items-baseline">
            <input type="checkbox" name="agree" value={'yes'} onChange={handleChange} />
            <p className="text-blue font-semibold">
              By checking this box, you are agreeing to and acknowledging our
              Pax8 Partner Terms and state that you have read and understood
              such Terms.
            </p>
          </span>
          <p>
            By completing this form and selecting this box, you confirm that you
            have the authority to sign a binding Partner Agreement on behalf of
            your organization
          </p>
          <button type="submit" className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
          >Continue</button>

        </form>
      </div>
    </main>
  );
};

export default Partnership;
