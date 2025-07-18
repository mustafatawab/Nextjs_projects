import React from "react";
import Heading from "@/components/Heading/heading";
import PrimaryButton from "@/components/button/PrimaryButton";
import Image from "next/image";
import growUpImage from "@/assets/svgs/home/growUp.svg";

const GoToMarket = () => {
  return (
    <section className="flex flex-wrap items-end w-full">
      <div className="xs:basis-full sm:basis-full md:basis-2/3 lg:basis-2/3 space-y-10">
        <Heading text="The easiest way to accelerate your go-to-market reach" />
        <p className="text-[#3A3A3A] xs:text-sm sm:text-sm md:text-xl lg:text-[22px]">
          MSPTech Stack Accelerate is an exclusive program that provides a clear{" "}
          <br />
          roadmap to help you effectively manage your GTM activities. Its never
          been easier to foster stronger engagement and empower your business{" "}
          <br />
          Get transparency regarding additional opportunities beyond core <br />
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
          <PrimaryButton text="Join the MSPTech Stack Marketplace" />
        </div>
    </section>
  );
};

export default GoToMarket;
