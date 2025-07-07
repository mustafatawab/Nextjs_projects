import Heading from "@/components/Heading/heading";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/wrapper";
import React from "react";
import instagram from "@/assets/svgs/icons/instagram.svg";
import Image from "next/image";
import {
  FaInstagram,
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

import { GrTwitter } from "react-icons/gr";
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
        <div className="2xs:mt-2 sm:mt-2 md:mt-10 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto  lg:mt-20 xs:space-x-1 md:space-y-5 lg:space-y-10 overflow-hidden">
          <p className="2xs:font-semibold sm:font-semibold md:font-bold lg:font-[900] sm:text-[24px] md:text-[64px] text-white">
            extend your reach.
            <br />
            Grow your business.
          </p>
        </div>
      </section>

      <Wrapper>
        <section className="2xs:mt-32 xs:mt-28 sm:mt-12 md:mt-80 lg:mt-[500px]">
          <Contact />
        </section>

        {/* All Socials */}
        <section className="xs:mt-80 md:mt-80 lg:mt-60 xl:mt-52 text-center space-y-5 static">
          <Heading text="All Socials" />
          <div className="flex text-5xl text-blue justify-center items-center gap-20">
            <FaInstagram className="" />
            <FaFacebook />
            <GrTwitter />
            <FaDiscord />
            <FaLinkedin />
            <FaTiktok />
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default page;
