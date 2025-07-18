import Heading from "@/components/Heading/heading";
import React from "react";
import Image from "next/image";
import cloudImage from "@/assets/svgs/home/clouds.svg";
import edgeImage1 from "@/assets/svgs/home/edge1.svg";
import edgeImage2 from "@/assets/svgs/home/edge2.svg";
import cloudIcon from "@/assets/svgs/home/cloudIcon.svg";
import edgeIcon from "@/assets/svgs/home/edgeIcon.svg";
const CloudToEdge = () => {
  return (
    <section className="2xs:mt-60 xs:mt-36   md:mt-40  xl:mt-80  flex flex-wrap  lg:justify-between place-items-end sm:gap-4 lg:gap-0 w-full">
      <div className="md:basis-full  lg:basis-1/2 px-4 space-y-5 ">
        <Heading text="Trend : Cloud to Edge" />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          debitis. Accusantium, <br /> rem fugit illo ut soluta facilis autem
          laborum nostrum nam nesciunt m?
        </p>
        <div className="">
          <span className="flex justify-start gap-4 items-center p">
            <Image src={cloudIcon} alt="" />
            <h2 className="text-lg font-bold">
              Today : Hundred of Clouds Locations
            </h2>
          </span>
          <Image src={cloudImage} alt="" />
        </div>
      </div>

      <div className=" space-y-10 mb-10 xs:basis-full sm:basis-full  lg:basis-1/2">
        <span className="flex justify-start gap-4 items-center">
          <Image src={edgeIcon} alt="" />

          <h2 className="text-lg font-bold">
            Tommarrow : Millions of Cloud Edge Locations
          </h2>
        </span>
        <div className="flex flex-col gap-5 ">
          <Image src={edgeImage1} alt="" />
          <Image className="" src={edgeImage2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CloudToEdge;
