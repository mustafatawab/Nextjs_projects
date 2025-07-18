import Heading from "@/components/Heading/heading";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/wrapper";
import React from "react";
import Image from "next/image";

import background from "@/assets/svgs/headerBackground.svg";
import Header from "@/components/Navbar/Header";

const page = () => {
  return (
    <main className="">
      {/* <Navbar /> */}
      <Header />
      {/* Hero Section */}
      <section className="">
        <div className="w-full   ">
          <Image
            className="absolute -z-10 bg-fixed object-cover   w-full  top-0 left-0"
            src={background}
            alt=""
          />
        </div>
        <div className="2xs:mt-0 sm:mt-2 md:mt-10 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto  lg:mt-20 xs:space-x-1 md:space-y-5 lg:space-y-10 overflow-hidden">
          <p className=" font-bold 2xs:text-lg sm:text-2xl md:text-5xl text-white">Amazing Support ,</p>

          <p className="font-bold 2xs:text-lg sm:text-2xl md:text-5xl text-white"> Available 24/7</p>
        </div>
      </section>
      <Wrapper>
        <section className="2xs:mt-10 xs:mt-16 sm:mt-52 md:mt-[370px] lg:mt-[450px] xl:mt-[570px] space-y-20">
          <p className="text-blue text-center sm:text-lg md:text-[24px] font-bold">
            Explore the possibilities with the global MSPTech Stack Marketplace{" "}
            <br />
            featuring 30,000+ resellers, 400,000+ SMBs, and 10+ million end
            users.
          </p>

          <p className="text-center font-bold text-[#4F4F4F] text-xl">
            Partner Suport
          </p>

          <div className="flex flex-wrap justify-around  text-[24px]">
            <span>Open a Ticket</span>
            <span>+123 456 789 909</span>
            <span>support@msptechstack.com</span>
            <span>Contact Us</span>
          </div>

          <div className="sm:w-full md:w-full lg:w-3/4">
            <Heading text="With a 76 NPS, we provide world-class support" />
          </div>

          <div className="flex flex-wrap justify-between items-center gap-10 ">
            <div className="bg-blue rounded-xl p-10  flex flex-col justify-center items-center 2xs:w-full sm:basis-2/3 md:1/3 lg:basis-1/4 text-center gap-5 ">
              <h3 className="font-bold text-[44px] text-white">500+</h3>
              <p className="text-white text-[16px]">
                500+ certifications from Microsoft to CCNA
              </p>
            </div>

            <div className="bg-blue rounded-xl p-10  flex flex-col justify-center items-center  2xs:w-full sm:basis-2/3 md:1/3 lg:basis-1/4 text-center gap-5 ">
              <h3 className="font-bold text-[44px] text-white">98.5%</h3>
              <p className="text-white text-[16px]">
                98.5% fully automated provisioning
              </p>
            </div>

            <div className="bg-blue rounded-xl p-10 flex flex-col justify-center items-center  2xs:w-full sm:basis-2/3 md:1/3 lg:basis-1/4 text-center gap-5 ">
              <h3 className="font-bold text-[44px] text-white">85%</h3>
              <p className="text-white text-[16px]">
                85% of requests resolved in-house
              </p>
            </div>
          </div>

          <div className="bg-[#0455B7] rounded-xl text-center space-y-10 p-10 mt-20">
            <h2 className="text-white font-bold text-4xl">
              Need more proactive support for a project?
            </h2>
            <p className="text-white text-lg">
              Let our pro services team do the heavy lifting.
            </p>
            <button className="bg-white text-black rounded-2xl px-4 py-2">
              Start Your Project
            </button>
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default page;
