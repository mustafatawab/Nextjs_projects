"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const VenderForm = () => {
  const [formDetails, setFormDetails] = useState({
    CompanyName: "",
    CompanyWebsite: "",
    name: "",
    email: "",
    job: "",
    country: "",
    preferredPerson: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formDetails);
    try {
      await axios.post('/api/joinMarketplace', formDetails)
      toast.success("Successfully registered for joining");
      setFormDetails({
        CompanyName: "",
        CompanyWebsite: "",
        name: "",
        email: "",
        job: "",
        country: "",
        preferredPerson: "",
      });
    } catch (error: any) {
      console.log(error.message);
      toast.error("Something went wrong")

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="z-20 bg-white flex flex-col gap-5 md:static lg:absolute right-5   mr-10 p-7 rounded-lg 2xs:w-full  md:w-2/3 lg:w-[460px] shadow-lg mx-auto"
    >
      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder=" Company Name*"
        name="CompanyName"
        onChange={handleChange}
        value={formDetails.CompanyName}
        required
      />

      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder=" Company Website*"
        name="CompanyWebsite"
        onChange={handleChange}
        value={formDetails.CompanyWebsite}
        required
      />

      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder="Your Name*"
        name="name"
        onChange={handleChange}
        value={formDetails.name}
        required
      />

      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder="Job Title*"
        name="job"
        value={formDetails.job}
        onChange={handleChange}
        required
      />
      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="email"
        placeholder="Your E-mail Address*"
        name="email"
        value={formDetails.email}
        onChange={handleChange}
        required
      />

      <select
        name="country"
        value={formDetails.country}
        id="country"
        required
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
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
        >
          Pakistan
        </option>
        <option
          className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
          value="USA"
        >
          USA
        </option>
        <option
          className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
          value="India"
        >
          India
        </option>
        <option
          className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
          value="Other"
        >
          Other
        </option>
      </select>
      <div className="text-[#577DB8] font-semibold px-2">
        <p className="">Were your prefered by anyone ?</p>
        <div className="flex gap-10 ">
          <span className="">
            <input type="radio" name="prefered" value={"yes"} id="yes" />
            <label htmlFor="yes">Yes</label>
          </span>
          <span>
            <input type="radio" name="prefered" id="no" value={"no"} />{" "}
            <label htmlFor="no">No</label>
          </span>
        </div>
      </div>
      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder="If yes who refered you ?"
        name="preferredPerson"
        onChange={handleChange}
        value={formDetails.preferredPerson}
      />
      <button className="w-fit 2xs:mx-auto md:ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
        Submit
      </button>
      <Toaster />
    </form>
  );
};

export default VenderForm;
