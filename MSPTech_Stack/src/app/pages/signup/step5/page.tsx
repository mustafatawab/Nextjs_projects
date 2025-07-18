'use client'
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import image1 from '@/assets/svgs/step5/image1.svg'
import image2 from '@/assets/svgs/step5/image2.svg'
import image3 from '@/assets/svgs/step5/image3.svg'
import image4 from '@/assets/svgs/step5/image4.svg'
import image5 from '@/assets/svgs/step5/image5.svg'
import image6 from '@/assets/svgs/step5/image6.svg'
import image7 from '@/assets/svgs/step5/image7.svg'
import image8 from '@/assets/svgs/step5/image8.svg'
import image9 from '@/assets/svgs/step5/image9.svg'
import image10 from '@/assets/svgs/step5/image10.svg'

function GoBig() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState('');
  const [details, setDetails] = useState({
    listned: "",
    time: "",
    day: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value
    })

  }

  const handleImageSelect = (id: any) => {
    setSelectedImage(id);

  };


  const handleSubmit = async () => {

    try {
      const res = await axios.post('/api/business/partnership/go', details);
      console.log(res.data);
      router.push("/pages/signup/submitted")
    } catch (error: any) {
      console.log(error);

    }

  }
  return (
    <>
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
          action=" "
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <div className="flex justify-between">

            <Heading text="Get Ready To Go Big" />
            <p className="text-gray-400 font-semibold">5/5</p>

          </div>
          <span className="flex flex-col">
            <label htmlFor="">How did you hear about us? (optional)</label>
            <input
              name="listned"
              value={details.listned}
              onChange={handleChange}
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
            />
          </span>

          <div className="space-y-2">
            <p className="text-[#0F1519CC] font-semibold">
              Please select the option that best applies to your business model
            </p>

            <span className="flex justify-start items-center gap-5">
              <input type="radio" name="time" value={'ASAP'} onChange={handleChange} />
              <p className="text-[#0F1519CC] " >As soon as possible</p>
            </span>
            <span className="flex justify-start items-center gap-5">
              <input type="radio" name="time" value={"Next Week"} onChange={handleChange} />
              <p className="text-[#0F1519CC] " >Sometime Next Week</p>
            </span>

            <span className="flex justify-start items-center gap-5">
              <input type="radio" name="time" value={'Next Month'} onChange={handleChange} />
              <p className="text-[#0F1519CC] " >Next Month</p>
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-[#0F1519CC] font-semibold">
              Preferred time of the Day
            </p>

            <span className="flex justify-start items-center gap-5">
              <input type="radio" name="day" value={'Morning'} onChange={handleChange} />
              <p className="text-[#0F1519CC] " >Morning</p>
            </span>
            <span className="flex justify-start items-center gap-5">
              <input type="radio" name="day" value={"AfterNoon"} onChange={handleChange} />
              <p className="text-[#0F1519CC] " >Afternoon</p>
            </span>
            <div className="flex flex-wrap gap-3">

              <span className="">
                <input type="radio" name="myKind" id="8x8"
                />

                <label htmlFor="8x8">
                  <Image src={image1} alt="" className='border py-2' width={110} />
                </label>
              </span>


              <span>
                <input type="radio" name="myKind" id="acronis" />
                <label htmlFor="acronis" className="">
                  <Image src={image2} alt="" width={110} />
                </label>
              </span>


              <span className="">
                <input type="radio" name="myKind" id="air" className="" />
                <label htmlFor="air">
                  <Image src={image3} alt="" width={110} />
                </label>
              </span>


              <span className="">
                <input type="radio" name="myKind" id="business" className="" />
                <label htmlFor="business">
                  <Image src={image4} alt="" width={110} />
                </label>
              </span>


              <span className="">
                <input type="radio" name="myKind" id="aws" className="" />
                <label htmlFor="aws">
                  <Image src={image5} alt="" width={110} />
                </label>
              </span>


              <span className="">
                <input type="radio" name="myKind" id="bigleaf" className="" />
                <label htmlFor="bigleaf">
                  <Image src={image6} alt="" width={110} />
                </label>
              </span>

              <span className="">
                <input type="radio" name="myKind" id="bitdefender" className="" />
                <label htmlFor="bitdefender">
                  <Image src={image7} alt="" width={110} />
                </label>
              </span>


              <span className="">
                <input type="radio" name="myKind" id="titan" className="" />
                <label htmlFor="titan">
                  <Image src={image8} alt="" width={110} />
                </label>
              </span>

              <span className="">
                <input type="radio" name="myKind" id="breach" className="" />
                <label htmlFor="breach">
                  <Image src={image9} alt="" width={110} />
                </label>
              </span>

              <span className="">
                <input type="radio" name="myKind" id="sky" className="" />
                <label htmlFor="sky">
                  <Image src={image10} alt="" width={110} />
                </label>
              </span>





            </div>
          </div>

          <button type="submit" className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
          >Continue</button>

        </form>
      </div>
    </>
  );
};

export default GoBig;
