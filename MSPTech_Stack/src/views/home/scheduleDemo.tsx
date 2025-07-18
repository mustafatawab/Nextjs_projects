'use client'
import React, { Suspense, useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading/heading";
import image1 from "@/assets/svgs/home/scheduleDemo/image.svg";
import image2 from "@/assets/svgs/home/scheduleDemo/image2.svg";
import image3 from "@/assets/svgs/home/scheduleDemo/image3.svg";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ScheduleDemo = () => {
  
  const [demo, setDemo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    e_mail: "",
    phone: "",
    country: "",
  })

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDemo({
      ...demo,
      [name]: value
    })
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();


    try {

      const response = await axios.post('/api/demo', demo)
      console.log(response);

      toast.success("The Demo has been scheduled successfully")


    } catch (error: any) {
      toast.error(error.message)
    }
  }
  return (
    <section className="w-full lg:relative space-y-12">

      <Heading text="Schedule a Demo" />


      <div className="bg-blue flex flex-wrap  md:justify-center xs:justify-center lg:justify-start xs:items-center md:items-center lg:items-end p-5 -z-30 rounded-2xl gap-10">
        <div className="">
          <Image src={image1} alt="" />
        </div>
        <div className="flex flex-wrap md:static lg:relative ">
          <Image src={image2} className="z-20" alt="" />
          <Image className="xs:hidden sm:hidden md:block lg:block lg:-ml-48 lg:-mb-8" src={image3} alt="" />
        </div>

        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white xs:mx-auto sm:mx-auto md:mx-0 flex flex-col gap-5 md:static lg:absolute right-5 top-3 mr-10 p-7 rounded-lg md:w-[300px] lg:w-[460px] shadow-lg z-20"
        >
          <input
            name="firstName"
            value={demo.firstName}
            onChange={handleChange}
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder="First Name*"
          />

          <input
            name="lastName"
            value={demo.lastName}
            onChange={handleChange}
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder=" Last Name*"
          />

          <input
            name="companyName"
            value={demo.companyName}
            onChange={handleChange}
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder="Company Name*"
          />

          <input
            name="e_mail"
            value={demo.e_mail}
            onChange={handleChange}
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="email"
            placeholder="Business E-mail*"
          />

          <input
            name="phone"
            value={demo.phone}
            onChange={handleChange}
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="number"
            placeholder=" Business Phone*"
          />
          <select
            
            value={demo.country}
            onChange={handleChange}
            name="country"
            id="country"
            className=" bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
          >
            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="country"
              defaultValue={"Select Country"}
              disabled
            >
              Select Country
            </option>

            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="Pakistan"
              onChange={handleChange}
            >
              Pakistan
            </option>
            <option
              onChange={handleChange}

              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="USA"
            >
              USA
            </option>
            <option
              onChange={handleChange}

              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="India"
            >
              India
            </option>
            <option
              onChange={handleChange}
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="Other"
            >
              Other
            </option>
          </select>

          <button type="submit" className="w-fit ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
            Submit
          </button>
          <Toaster />
        </form>
      </div>
    </section >
  );
};

export default ScheduleDemo;
