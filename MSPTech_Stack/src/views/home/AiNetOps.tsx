import React from "react";
import Heading from "@/components/Heading/heading";
import Image from "next/image";

import mspCloudImage from "@/assets/svgs/home/AINetOps/cloudImage.svg";

const AiNetOps = () => {
  return (
    <section className="py-20 mt-20 flex flex-wrap justify-between gap-10 w-full">
      <div className="md:basis-full lg:basis-1/2 flex flex-col justify-around ">
        <Heading text="MSPTech Stack AINetOps" />
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Image
        className="md:mx-auto lg:mx-0 md:basis-1/2 lg:basis-1/3"
        src={mspCloudImage}
        alt="MSP Cloud "
        width={348}
      />
    </section>
  );
};

export default AiNetOps;
