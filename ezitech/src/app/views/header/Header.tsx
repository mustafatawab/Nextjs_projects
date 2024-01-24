import logo from "../../assets/images/logo-header.svg";
import React from "react";
import PrimaryButton from "@/app/components/primaryButton";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import Footer from "../footer/footer";
const Header = () => {
  function scrollDown() {
    let footer = document.getElementById("footer");
    footer?.scrollIntoView({behavior : "smooth"});
  }
  return (
    <div className="flex items-center justify-between py-5 px-10 text-lg bg-[#25262A] ">
      <div className="flex items-center gap-16">
        <Link href={"/"}>
          <Image src={logo} alt="logo"></Image>
        </Link>

        <ul className="flex items-center gap-6  sm:hidden md:flex lg:flex">
          <Link href="/">
            <li className="hover:underline hover:font-bold duration-500">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="hover:underline hover:font-bold duration-500">
              Portfolio
            </li>
          </Link>
          <Link href={"/"} >
            <li className="hover:underline hover:font-bold duration-500">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <div className=" group p-4 rounded-lg hover:bg-[#ffaf29] hover:text-[#2D2E32] bg-[#2D2E32] ">
          <TbWorld className="text-[#ffaf29] group-hover:text-[#2D2E32] text-xl" />
        </div>
        <PrimaryButton text="Contact Me" link="/" />
      </div>
    </div>
  );
};

export default Header;
