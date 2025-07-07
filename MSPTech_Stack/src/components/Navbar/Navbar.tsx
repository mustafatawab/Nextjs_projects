"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import background from "../../assets/svgs/headerBackground.svg";
import Link from "next/link";
import arrow from "../../assets/svgs/dropdown.svg";
import dunya from "../../assets/svgs/dunya.svg";
import search from "../../assets/svgs/search.svg";
import { IoMdClose } from "react-icons/io";
import PrimaryButton from "../button/PrimaryButton";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [growth, setGrowth] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      {/* Background Image */}
      {/* <Image
        className=" bg-fixed w-fit absolute -z-10 "
        src={background}
        alt="backgorund"
      /> */}

      {/* Navbar starts here */}

      <nav className=" flex items-center justify-between 2xs:text-sm   md:text-lg 2xs:pr-4 sm:pr-2 md:pr-0    text-white font-semibold z-20 ">
       
        <Link href={"/"}>
          <Image className="" src={logo} alt="logo" />
        </Link>

        <ul className="2xs:hidden md:flex lg:flex justify-between items-center gap-5 ">
          <li className="group relative cursor-pointer">
            <span
              className="static flex items-baseline gap-1"
              onMouseEnter={() => setIsOpen(true)}
            >
              Marketplace <Image src={arrow} alt="" />
            </span>

            {isOpen && (
              <ul
                onMouseLeave={() => setIsOpen(false)}
                className=" z-20 h-fit space-y-3  font-light text-gray-700 w-64 p-2 -ml-2 mt-1  rounded-lg  absolute   bg-white  "
              >
                <li className="font-semibold ">
                  <Link href={"/pages/exploreMarketplace"}>
                    Explore The Marketplace
                  </Link>
                </li>
                <li className="font-semibold">
                  <Link href={"/pages/venderMarketplace"}>
                    Marketplace for Venders
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="group relative cursor-pointer">
            <span
              className="static flex items-baseline gap-1 "
              onMouseEnter={() => setGrowth(true)}
            >
              Growth With Us <Image src={arrow} alt="" />
            </span>

            {growth && (
              <div
                onMouseLeave={() => setGrowth(false)}
                className=" z-20 h-fit space-y-3  font-light text-gray-700 w-40  p-2 -ml-2 mt-1  rounded-lg  absolute   bg-white  "
              >
                <li className="font-semibold ">
                  <Link href={"/pages/contact"}>Contact Us</Link>
                </li>
              </div>
            )}
          </li>
          <li>
            <Link href={"/pages/about"}>About</Link>
          </li>
          <li>
            <Link href={"/pages/support"}>Support</Link>
          </li>
        </ul>

        <div className=" 2xs:hidden sm:hidden md:flex items-center gap-6">
          <span>
            <Link href={"/pages/signin"}>Login</Link>
          </span>
          <span className="bg-blue text-white px-3 py-1 rounded-full shrink-0">
            <Link href={"/pages/signup"}>Get Started</Link>
          </span>
          <Image src={dunya} alt="" />
          <Image onClick={() => setIsSearch(true)} src={search} alt="" />
        </div>

        {!toggle && (
          <div className="flex items-center gap-5 mr-10">
            <FaSearch className="md:hidden" onClick={() => setIsSearch(true)} />
            <MdMenu
              className="xs:block md:hidden lg:hidden text-4xl"
              onClick={() => setToggle(true)}
            />
          </div>
        )}
      </nav>
      {toggle && (
        <div className="fixed top-0 left-0 bg-black w-full text-white p-2 transition-transform duration-300 transform translate-x-0 md:hidden">
          <div className="flex justify-between items-center w-full ">
            <h2 className="text-lg font-semibold">Menu</h2>
            <IoMdClose className="text-4xl " onClick={() => setToggle(false)} />
          </div>
          <ul className="p-2 text-sm">
            <li
              onClick={() => {
                setIsOpen(true);
                setGrowth(false);
              }}
              className="flex justify-between items-center"
            >
              <p className="">Marketplace </p>
              {isOpen ? (
                <MdArrowUpward className="text-white" />
              ) : (
                <Image src={arrow} alt="" />
              )}
            </li>
            {isOpen && (
              <div className="px-4 py-2 space-y-1">
                <p className="">
                  <Link href={"/pages/exploreMarketplace"}>
                    Explore Marketplace
                  </Link>
                </p>
                <p className="">
                  <Link href={"/pages/venderMarketplace"}>
                    Marketplace for Vendors
                  </Link>
                </p>
              </div>
            )}

            <li
              onClick={() => {
                setIsOpen(false);
                setGrowth(true);
              }}
              className="flex justify-between items-center"
            >
              <p className="">Growth with Us </p>
              {growth ? (
                <MdArrowUpward className="text-white" />
              ) : (
                <Image src={arrow} alt="" />
              )}
            </li>

            {growth && (
              <div className="px-4 py-2 space-y-1">
                <p className="">
                  <Link href={"/pages/contact"}>Contact Us</Link>
                </p>
              </div>
            )}

            <li className="">
              <Link href={"/pages/about"}>About Us</Link>
            </li>
            <li className="">
              <Link href={"/pages/support"}>Support</Link>
            </li>
          </ul>
        </div>
      )}

      {isSearch && (
        <div className="flex justify-center items-center">
          <form
            action=""
            className="bg-blue text-white w-2/3 mx-auto absolute top-3  rounded-3xl py-1 px-3 flex justify-center items-center z-20"
          >
            <input
              className="p-2 w-full  bg-transparent outline-none"
              type="text"
              placeholder="Search Products"
            />
            <IoMdClose
              className="text-3xl text-white"
              onClick={() => setIsSearch(false)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
