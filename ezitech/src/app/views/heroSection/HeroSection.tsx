import PrimaryButton from "@/app/components/primaryButton";
import React from "react";
import Image from "next/image";
import heroImage from "../../assets/images/hero/hero-img.png";
function HeroSection() {
  return (
    <div className="flex sm:flex-col md:flex-row justify-between px-10  bg-[#25262A] w-full object-cover">
      <div className="sm:w-full md:w-1/3 space-y-5">
        <p className="text-[#64F4AB] ">Introducing</p>
        <h1 className="text-6xl font-bold ">Hello </h1>
        <h1 className="text-6xl font-bold  ">I am Jessy</h1>
        <h1 className="text-6xl font-bold  ">Walter</h1>
        <p className="text-xl">
          Since beginning my journey as a freelance designer nearby 7 years ago,
          I have done remote work for agencies, consulted for startup, and
          collaborated with talented people to create digital products.
        </p>
        <PrimaryButton text="Contact Me" link="/" />
      </div>
      <div className="mr-32">
        <span className=" grid grid-cols-2  gap-[450px] absolute mt-24 -ml-10">
          <span className="text-[#64F4AB] bg-[#2D2E32] rounded-full px-6 py-6 text-3xl font-semibold">
            Id
          </span>
          <span className="text-[#64F4AB] bg-[#2D2E32] rounded-full px-6 py-6 text-3xl font-semibold">
            Ps
          </span>

          <span className=" text-[#64F4AB] bg-[#2D2E32] rounded-full px-6 py-6 text-3xl font-semibold">
            Ai
          </span>
          <span className="text-[#64F4AB] bg-[#2D2E32] rounded-full px-6 py-6 text-3xl font-semibold">
            Xd
          </span>
        </span>
        <Image className="" src={heroImage} alt="Hero Section Image"></Image>
      </div>
    </div>
  );
}

export default HeroSection;
