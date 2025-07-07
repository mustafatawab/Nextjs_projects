import Heading from "@/components/Heading/heading";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/wrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
import React from "react";
import Image from "next/image";
import aboutImage from "@/assets/svgs/About/about.svg";
import optimizeDataMovement from "@/assets/svgs/About/optimizeDataMovement.svg";
import loadBalancing from "@/assets/svgs/About/loadBalancing.svg";
import monitoring from "@/assets/svgs/About/monitoring.svg";
import securityCompliances from "@/assets/svgs/About/securityCompliance.svg";
import edgeDeploy from "@/assets/svgs/About/selectSearch.svg";
import objectDetection from "@/assets/svgs/About/objectDetection.svg";
import edge from "@/assets/svgs/About/edge.svg";
import plugin from "@/assets/svgs/About/plugin.svg";
import mspCloudImage from "@/assets/svgs/home/AINetOps/cloudImage.svg";
import teamImage from "@/assets/images/team.jpeg";
import Contact from "@/views/Contact/contact";

import background from "@/assets/svgs/headerBackground.svg";
import Header from "@/components/Navbar/Header";
const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <section>
        <div className="w-full">
          <Image
            className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0"
            src={background}
            alt=""
          />
        </div>
        <div className="uppercase flex flex-col justify-center items-center md:mt-10 lg:mt-20   lg:space-y-10">
          <p className="font-[900]  sm:text-[24px] md:text-[32px] lg:text-[64px] text-white">
            What we are ?
          </p>
          <p className="font-[900]  sm:text-[24px] md:text-[32px] lg:text-[64px] text-white">What we do?</p>

          <PrimaryButton text="Schedule a Demo" />
        </div>
      </section>

      <Wrapper>
        {/*Section 2 - ABout us  */}
        <section className="2xs:mt-40 xs:mt-16 md:mt-60 lg:mt-72  xl:mt-[450px]  flex 2xs:flex-col lg:flex-row items-center  lg:justify-between place-items-end sm:gap-4 lg:gap-0 mb-20">
          <div className="basis-1/2">
            <Heading text="About Us" />
            <p className="text-[#707070] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum amet ab, at facilis sunt dolorum, natus voluptatem eligendi
              consectetur impedit error laudantium consequatur expedita dicta
              asperiores eius. Voluptate, quibusdam.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum amet ab, at facilis sunt dolorum, natus voluptatem eligendi
              consectetur impedit error laudantium consequatur expedita dicta
              asperiores eius. Voluptate, quibusdam.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum amet ab, at facilis sunt dolorum, natus voluptatem eligendi
              consectetur impedit error laudantium consequatur expedita dicta
              asperiores eius. Voluptate, quibusdam.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              earum amet ab, at facilis sunt dolorum, natus voluptatem eligendi
              consectetur impedit error laudantium consequatur expedita dicta
              asperiores eius. Voluptate, quibusdam.
            </p>
          </div>
          <Image src={aboutImage} alt="About us" />
        </section>

        {/* Seciton 3 - Why MSP Tech Stack */}
        <section>
          <Heading text="Why MSP Tech Stack ?" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 py-5">
            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={optimizeDataMovement} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                {" "}
                Optimize Data Movement
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={loadBalancing} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                {" "}
                Load Balancing
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={monitoring} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold"> Monitoring</p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={securityCompliances} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                Security, Compliance
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={edgeDeploy} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                Select best Edge & Deploy
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={plugin} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                AI Model Optimizer Plugins
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={objectDetection} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                Real time Object Detection
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 flex flex-col justify-center items-center gap-3 text-center  rounded-lg ">
              <Image src={edge} alt="" />
              <p className="text-[#4F4F4F] text-lg font-bold">
                Manage & Operate Edge{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - MSPTech Stack AINetOps */}
        <section className="py-20 mt-20 flex flex-wrap justify-between gap-10">
          <div className="md:basis-full lg:basis-1/2 flex flex-col justify-around ">
            <Heading text="MSPTech Stack AINetOps" />
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Image
            className="md:mx-auto lg:mx-0 md:basis-1/2 lg:basis-1/3"
            src={mspCloudImage}
            alt="MSP Cloud "
            width={348}
          />
        </section>

        {/* Section 5 - MSP Tech Stack Team */}
        <section className="space-y-5">
          <Heading text="MSP Tech Stack Team" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
              <Image
                className="rounded-full"
                src={teamImage}
                width={200}
                alt=""
              />
              <p className="font-bold text-[#4F4F4F] text-lg">Person Name</p>
              <p className="text-blue">His/Her Profession</p>
            </div>
          </div>
        </section>

        {/* section 6 - contact us */}
        <section className="mt-20">
          <Contact />
        </section>
      </Wrapper>
    </>
  );
};

export default page;
