'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Heading from "@/components/Heading/heading";
import Wrapper from "@/components/Wrapper/wrapper";
import icon1 from "@/assets/svgs/venderMarketplace/icon1.svg";
import icon2 from "@/assets/svgs/venderMarketplace/icon2.svg";
import icon3 from "@/assets/svgs/venderMarketplace/icon3.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import growUpImage from "@/assets/svgs/home/growUp.svg";
import finance from "@/assets/svgs/venderMarketplace/finance.svg";
import productivity from "@/assets/svgs/venderMarketplace/productivity.svg";
import continuity from "@/assets/svgs/venderMarketplace/continuity.svg";
import infrastructure from "@/assets/svgs/venderMarketplace/infrastructure.svg";
import image1 from "@/assets/svgs/home/scheduleDemo/image.svg";
import image2 from "@/assets/svgs/home/scheduleDemo/image2.svg";
import image3 from "@/assets/svgs/home/scheduleDemo/image3.svg";
import Navbar from "@/components/Navbar/Navbar";
import VenderForm from "@/views/venderMarketplace/Form/Form";

import background from "@/assets/svgs/headerBackground.svg";
import Header from "@/components/Navbar/Header";
const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* Hero Section */}
      <section>
        <div className="w-full">
          <Image
            className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0"
            src={background}
            alt=""
          />
        </div>
        <div className="2xs:mt-2 sm:mt-2 md:mt-10 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto  lg:mt-20 xs:space-x-1 md:space-y-5 lg:space-y-10">
          <p className="font-bold sm:text-[30px]  md:text-[64px] text-white">
            extend your reach.
            <br />
            Grow your business.
          </p>
        </div>
      </section>

      <Wrapper>
        {/* Simple Text */}
        <div className="2xs:mt-32 sm:mt-36 md:mt-64  lg:mt-[500px]">
          <p className="text-blue text-center 2xs:text-lg sm:text-xl md:text-2xl  lg:text-2xl font-semibold">
            Explore the possibilities with the global MSPTech Stack Marketplace{" "}
            <br />
            featuring 30,000+ resellers, 400,000+ SMBs, and 10+ million end
            users.
          </p>
        </div>

        {/* Section 2 - Why Vendors Choose MSPTech Stack Marketplace */}
        <section className="py-20 ">
          <div className="sm:w-full  lg:w-[800px] mb-10">
            <Heading text="Why Venders Choose MSPTech Stack Marketplace" />
          </div>

          <div className="flex flex-wrap  2xs:justify-center  md:justify-between lg:justify-between gap-10 items-center text-center ">
            <span className="2xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/4  text-center bg-blue py-10 px-14 flex flex-col justify-center items-center gap-5 text-white rounded-xl shadow-xl">
              <Image src={icon1} alt="" />
              <h3 className="text-2xl font-semibold">Reach new SMB markets</h3>
              <p>
                Pax8 Marketplace serves over 400,000 small and medium-sized
                businesses (SMBs).
              </p>
            </span>

            <span className="2xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/4 text-center bg-[#EFEFF1] py-10 px-14 flex flex-col justify-center items-center gap-5 text-black rounded-xl shadow-xl">
              <Image src={icon2} alt="" />
              <h3 className="text-2xl font-semibold">Strengthen your brand</h3>
              <p>
                Increase brand visibility through our go-to-market (GTM)
                offerings.
              </p>
            </span>

            <span className="2xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/4  text-center bg-blue py-10 px-14 flex flex-col justify-center items-center gap-5 text-white rounded-xl shadow-xl">
              <Image src={icon3} alt="" />
              <h3 className="text-2xl font-semibold">Grow your business</h3>
              <p>
                Get lower customer acquisition cost (CAC) and higher lifetime
                value (LTV).
              </p>
            </span>
          </div>
          <div className="text-center my-16">
            <PrimaryButton text="Join the MSPTech Stack Marketplace" />
          </div>
        </section>

        {/*Section 3 - The easiest way to accelerate your go-to-market reach */}
        <section className="flex flex-wrap items-end">
          <div className="xs:basis-full sm:basis-full md:basis-2/3 lg:basis-2/3 space-y-10">
            <Heading text="The easiest way to accelerate your go-to-market reach" />
            <p className="text-[#3A3A3A] xs:text-sm sm:text-sm md:text-xl lg:text-[22px]">
              MSPTech Stack Accelerate is an exclusive program that provides a
              clear <br />
              roadmap to help you effectively manage your GTM activities. Its
              never been easier to foster stronger engagement and empower your
              business <br />
              Get transparency regarding additional opportunities beyond core{" "}
              <br />
              management. Drive benefits incrementally with a tiered and <br />
              incentivized program. Establish a competitive edge in the <br />
              marketplace.
            </p>
            <div className="mx-auto xs:hidden md:block lg:block">
              <PrimaryButton text="Join the MSPTech Stack Marketplace" />
            </div>
          </div>
          <div>
            <Image src={growUpImage} alt="" />
          </div>
          <div className="xs:mx-auto my-5 xs:block md:hidden lg:hidden">

            
            <PrimaryButton  text="Join the MSPTech Stack Marketplace" />

          </div>
        </section>

        {/* Section 4 - The MSPTech Stack is Best-in-class for a reason */}
        <section className="my-28">
          <div className="bg-[#0455B7] p-10 text-center space-y-10 rounded-xl">
            <h1 className="text-[36px] font-semibold text-white">
              The MSPTech Stack is Best-in-class for a reason
            </h1>

            <div className="flex flex-wrap justify-around gap-4">
              <span className="w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                <h2 className="text-white font-bold text-[44px]">0%</h2>
                <p className="text-white">98.5% fully automated</p>
              </span>
              <span className=" w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                {/* <h2 className="text-white font-bold text-[44px]">100K+</h2> */}
                <AnimatedCounter value={100} sign="k+" />

                <p className="text-white">Over 300,000 transactions per</p>
              </span>
              <span className=" w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                {/* <h2 className="text-white font-bold text-[44px]">400</h2> */}
                <AnimatedCounter value={400} />
                <p className="text-white">
                  Currency conversion for 17 currencies
                </p>
              </span>
              <span className="w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                {/* <h2 className="text-white font-bold text-[44px]">1400%</h2> */}
                <AnimatedCounter value={1400} sign='%' />

                <p className="text-white">
                  85% of support requests resolved in-house
                </p>
              </span>
            </div>
          </div>
        </section>

        {/* section 5 - Our marketplace delivers value for every vendor,  in every business */}
        <section>
          <Heading text="Our marketplace delivers value for every vendor,  in every business" />
          <div className="flex flex-wrap justify-between items-center my-6">
            <span className="flex flex-col">
              <Image src={finance} alt="FInance" />
              <p className="text-blue font-bold text-xl px-3 xs:text-center md:text-start">
                {" "}
                Finance
              </p>
            </span>

            <span className="flex flex-col">
              <Image src={productivity} alt="productivity" />
              <p className="text-blue font-bold text-xl px-3 xs:text-center md:text-start">
                {" "}
                Productivity
              </p>
            </span>

            <span className="flex flex-col">
              <Image src={continuity} alt="Continuity" />
              <p className="text-blue font-bold text-xl px-3 xs:text-center md:text-start">
                {" "}
                Continuity
              </p>
            </span>

            <span className="flex flex-col">
              <Image src={infrastructure} alt="Infrastructure" />
              <p className="text-blue font-bold text-xl px-3 xs:text-center md:text-start">
                {" "}
                Infrastructure
              </p>
            </span>
          </div>
          <div>
            <span className="bg-blue rounded-full w-[27px] h-[10px]"></span>
          </div>
        </section>

        {/* section 6 - Interested in Joining the Marketplace? */}

        <section id="joinMarketplace" className="md:static lg:relative my-10 py-10">
          <span className="2xs:w-full md:w-full lg:w-1/2 ">
            <Heading text="Interested in Joining the Marketplace?" />
          </span>
          <p className="text-[#4F4F4F] 2xs:text-lg md:text-xl lg:text-2xl 2xs:w-full md:w-2/3 lg:w-1/2 my-5">
            To begin the vendor evaluation process, please fill out this bform.
            We will reach out with further questions and schedule a time to
            meet.
          </p>
          <div className="md:mt-20 lg:mt-40 bg-blue flex flex-wrap md:justify-center lg:justify-start md:items-center lg:items-center p-5 -z-30 rounded-2xl gap-10 w-full">
            <span className="flex flex-wrap 2xs:justify-center  items-end gap-4">
              <div className="">
                <Image src={image1} alt="" />
              </div>
              <div className="flex flex-wrap items-center justify-center mx-auto md:static lg:relative ">
                <Image src={image2} className="z-20" alt="" />
                <Image className=" 2xs:-ml-48 2xs:-mb-8 " src={image3} alt="" />
              </div>
            </span>
            <VenderForm />
          </div>
        </section>
      </Wrapper>
    </>
  );
};


function AnimatedCounter({ value, sign }: { value: any, sign?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < value) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return value;
      });
    }, 20); // Change the interval to speed up or slow down the animation

    return () => clearInterval(interval);
  }, [value]);

  return <h2 className="text-white font-bold text-[44px] duration-200">{count} {sign}</h2>;
}


export default page;
