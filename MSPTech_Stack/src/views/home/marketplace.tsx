import Heading from "@/components/Heading/heading";
import PrimaryButton from "@/components/button/PrimaryButton";
import React from "react";
import Image from "next/image";
import marketplaceImage from "@/assets/svgs/home/marketplaceImage.svg";

const Marketplace = () => {
  return (
    <section className="flex  flex-wrap justify-between items-center gap-10 w-full">
      <div className="space-y-5 md:basis-full lg:basis-1/3 ">
        <Heading text="Marketplace" />
        <p className="pr-20">
          Enhance operational efficiency with a platform that streamlines
          billing consolidation, automates provisioning, and seamlessly
          integrates with top-tier PSA tools in the industry.
        </p>
        <span className="flex flex-wrap gap-5 items-center justify-start">
          <div className="flex justify-start items-start">
            <PrimaryButton text="Explore the Marketplace" />
          </div>
          <button className="w-fit bg-transparent text-black border border-blue rounded-3xl px-4 py-2 ">
            Schedule a Demo
          </button>
        </span>
      </div>
      <div className="md:basis-full lg:basis-1/2">
        <Image
          src={marketplaceImage}
          alt="Marketplace Image goes here"
          width={609}
        />
      </div>
    </section>
  );
};

export default Marketplace;
