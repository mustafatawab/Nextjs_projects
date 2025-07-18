import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading/heading";
import newsImage1 from "@/assets/svgs/home/news/image1.svg";

const News = () => {
  return (
    <section className="py-20 w-full space-y-10 ">
      <Heading text="News" />
      <div className="flex flex-wrap justify-between">
        <div className=" shadow-xl w-[380px]  bg-[#FFFFFF] rounded-b-3xl">
          <Image src={newsImage1} alt="" />
          <span className="p-5    flex flex-col justify-center gap-3 ">
            <h2 className="font-semibold">Lorem Ipsum Dollar</h2>
            <p className="text-[#4D4D4D]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, sequi quasi. Officiis assumenda excepturi vel ut quas
              tenetur nostrum unde doloremque in, minima beatae eaque sequi
              mollitia amet officia iste.
            </p>

            <Link
              className="border text-blue w-fit mx-auto border-blue py-1 px-4 rounded-2xl"
              href="#"
            >
              to read
            </Link>
          </span>
        </div>

        <div className=" shadow-xl w-[380px]  bg-[#FFFFFF] rounded-b-3xl">
          <Image src={newsImage1} alt="" />
          <span className="p-5    flex flex-col justify-center gap-3 ">
            <h2 className="font-semibold">Lorem Ipsum Dollar</h2>
            <p className="text-[#4D4D4D]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, sequi quasi. Officiis assumenda excepturi vel ut quas
              tenetur nostrum unde doloremque in, minima beatae eaque sequi
              mollitia amet officia iste.
            </p>

            <Link
              className="border text-blue w-fit mx-auto border-blue py-1 px-4 rounded-2xl"
              href="#"
            >
              to read
            </Link>
          </span>
        </div>
        <div className=" shadow-xl w-[380px]  bg-[#FFFFFF] rounded-b-3xl">
          <Image src={newsImage1} alt="" />
          <span className="p-5    flex flex-col justify-center gap-3 ">
            <h2 className="font-semibold">Lorem Ipsum Dollar</h2>
            <p className="text-[#4D4D4D]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, sequi quasi. Officiis assumenda excepturi vel ut quas
              tenetur nostrum unde doloremque in, minima beatae eaque sequi
              mollitia amet officia iste.
            </p>

            <Link
              className="border text-blue w-fit mx-auto border-blue py-1 px-4 rounded-2xl"
              href="#"
            >
              to read
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default News;
