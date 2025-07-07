import Heading from "@/components/Heading/heading";
import Image from "next/image";
import React from "react";
import arrow from "@/assets/svgs/home/arrow.svg";
import oneCloud from "@/assets/svgs/home/oneCloud.svg";
import manyCloud from "@/assets/svgs/home/manyClouds.svg";
import diagram from "@/assets/svgs/home/diagram.svg";
import smDiagram from "@/assets/svgs/home/smDiagram.svg";

const EdgeEnablement = () => {
  return (
    <section className="w-full py-20 space-y-6">
      <Heading text="Why Edge Enablement is needed ?" />
      <p className="xs:w-full sm:w-full md:w-1/4 lg:w-1/4 text-[#4F4F4F]">
        When the Cloud was born, several companies who enabled the cloud grew
        rapidly.
      </p>

      <div className="xs:max-w-[320px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-full  relative -z-20 bg-white p-10 rounded-2xl  shadow-xl ">
        <div className="absolute -z-10 mx-auto  flex justify-between items-cente 2xs:hidden sm:hidden md:hidden lg:flex">
          <Image src={arrow} alt="" />
          <Image src={arrow} alt="" />
          <Image src={arrow} alt="" />
        </div>

        <div className=" static gap-10 text-center items-center  lg:flex grid md:grid-cols-2 sm:grid-cols-1 justify-between z-20 ">
          <div className="basis-1/5 flex flex-col justify-center items-center gap-5">
            <Image src={oneCloud} alt="" />
            <span className="text-[#4F4F4F] text-[24px] font-semibold">
              Cloud
            </span>
          </div>
          <Image className=" mx-auto" src={smDiagram} alt="" />
          <div className="basis-1/5 flex flex-col justify-center items-center gap-5">
            <Image src={manyCloud} alt="" />
            <span className="text-[#4F4F4F] text-[24px] ">Egde Enable</span>
          </div>
          <Image className="mx-auto" src={diagram} alt="" />
          <div className="basis-1/5 flex flex-col justify-center items-center gap-5">
            <p>
              With Edge still in nascent stage, the new frontier is to enable
              the edge <br />
              Edge needs a platform to Locate, Deploy, Manage, Operate ,
              Optimize Data Movement and MORE...
            </p>
            <button className="w-full bg-blue text-white rounded-3xl px-4 py-2">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeEnablement;
