'use client'
import React, { useState } from "react";
import Image from "next/image";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import axios from "axios";
import { useRouter } from "next/navigation";


const country = [
  "United States",
  "UK",
  "Pakistan",
  "India",
  "Canada",
  "Australia",
  "Bangladesh",
];

function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [businessContactDetails, setbusinessContactDetails] = useState({

    companyName: "",
    businessEmail: "",
    domain: "",
    partof_franchise: '',
    country: "",
    city: "",
    state: "",
    postalCode: "",
    currency: "",
    headquater_address: "",
    phoneNumber: "",

  })

  const handleChange = (e: any) => {

    const { name, value } = e.target;

    setbusinessContactDetails({
      ...businessContactDetails,
      [name]: value
    })
  }



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(businessContactDetails);
    try {
      setLoading(true);
      const response = await axios.post('/api/business/contact', businessContactDetails);

      console.log(response.data);

      router.push("/pages/signup/step2")

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

      <div className="-mt-52 z-20 relative "  >
        <form
          onSubmit={handleSubmit}
          action=""
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <div className="flex justify-between">

            {loading ? "Loading..." : <> <Heading text="Contact Info" /> </>}
            <p className="text-gray-400 font-semibold">1/5</p>
          </div>


          <span className="flex flex-col">
            <label >Company Name</label>
            <input
              name="companyName"
              type="text"
              placeholder=""
              onChange={handleChange}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex flex-col">
            <label >Email Address</label>
            <input
              name="businessEmail"
              type="email"
              value={businessContactDetails.businessEmail}
              placeholder=""
              onChange={handleChange}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col">
            <label >Company Domain</label>
            <input
              name="domain"
              value={businessContactDetails.domain}
              type="text"
              placeholder=""
              onChange={handleChange}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex gap-10">
            <p>Are you part of Franchise ? </p>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="yes" name="partof_franchise" value='yes' onChange={handleChange} />
            </span>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="no">No</label>
              <input type="radio" id="no" name="partof_franchise" value='no' onChange={handleChange} />
            </span>
          </span>

          <select
            name="country"
            id="country"
            value={businessContactDetails.country}
            className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
            required
          >
            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              defaultChecked
              disabled
            >
              Select Country
            </option>


            <option
              value={"USA"}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"

            >
              USA
            </option>

            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value={'Pakistan'}>
              Pakistan
            </option>


            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value={'India'}>
              India
            </option>


            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value={'Canada'}>
              Canada
            </option>

            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value={'England'}>
              England
            </option>


          </select>

          <div className="flex justify-between ">
            <span className="flex flex-col  w-1/5">
              <label >City</label>
              <input
                value={businessContactDetails.city}
                onChange={handleChange}
                name="city"
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>

            <span className="flex flex-col w-1/5">
              <label >State</label>
              <input
                name="state"
                value={businessContactDetails.state}
                onChange={handleChange}
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>

            <span className="flex flex-col w-1/5">
              <label >Postal Code</label>
              <input
                name="postalCode"
                value={businessContactDetails.postalCode}
                onChange={handleChange}
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>

            <span className="flex flex-col w-1/5">
              <label >Currency</label>
              <input
                name="currency"
                value={businessContactDetails.currency}
                onChange={handleChange}
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>
          </div>

          <span className="flex flex-col ">
            <label >Company Headquater Address</label>
            <input
              id="headquater_address"
              name="headquater_address"
              value={businessContactDetails.headquater_address}
              onChange={handleChange}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label >Company Phone</label>
            <input
              name="phoneNumber"
              value={businessContactDetails.phoneNumber}
              onChange={handleChange}
              type="number"
              placeholder=""
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

export default Contact;
