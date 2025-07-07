import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/wrapper";
import React from "react";
import Image from "next/image";
import mouse from "@/assets/svgs/mouse.svg";
import Link from "next/link";

import background from "@/assets/svgs/headerBackground.svg";
import Header from "@/components/Navbar/Header";
const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />

      {/* Hero */}

      <section>
        <div className="w-full">
          <Image
            className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0 "
            src={background}
            alt=""
          />
        </div>
        <div className="2xs:mt-2 sm:mt-2 md:mt-10 lg:mt-32 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto   xs:space-x-1 md:space-y-5 lg:space-y-10">
          <p className="2xs:font-bold sm:font-bold  lg:font-[900] 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white ">
            A Universe of
            <br />
            Possiblity
          </p>

          <p className="2xs:hidden sm:block md:block  lg:font-[600] lg:text-[24px] text-white">
            Quote, Order, Bill and Provision cloud products in one
            <br />
            place- all with one monthly bill.
          </p>
        </div>
        <div className="2xs:hidden sm:hidden md:flex lg:flex items-center justify-center md:mt-10 lg:mt-32 static   ">
          <Image className="" src={mouse} alt="" />
        </div>
      </section>

      <Wrapper>
        <div className="py-24">
          <h1 className="text-black text-4xl font-bold py-5">
            Cloud Management Vendor Resources
          </h1>
          <hr />
          <section className="grid xs:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 gap-7">
            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>

            <div>
              <p className="font-semibold">Cloud Management </p>
              <p className="font-semibold">Cyber Threat </p>
              <p className="font-semibold">Cloud Management </p>
              <Link className="text-blue text-sm" href={"#"}>
                See Resources
              </Link>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
