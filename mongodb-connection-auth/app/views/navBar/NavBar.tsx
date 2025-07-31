"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="fixed top-0 w-full   flex text-xl  justify-around py-7 text-white bg-gray-900   items-center z-10">
        <div className="font-autograph">
          <Link href={"/"}>Mustafa Tawab</Link>
        </div>
        <div className="space-x-7  text-sm hidden md:flex">
          <span className="hover:text-purple-800 hover:font-semibold hover:scale-150 duration-500">
            <Link href={"#"}>Home</Link>
          </span>

          <span className="hover:text-purple-800 hover:font-semibold hover:scale-150 duration-500">
            <Link href={"#about"}>About</Link>
          </span>
          <span className="hover:text-purple-800 hover:font-semibold hover:scale-150 duration-500">
            <Link href={"#portfolio"}>Portfolio</Link>
          </span>
          <span className="hover:text-purple-800 hover:font-semibold hover:scale-150 duration-500">
            <Link href={"#skills"}>Skills</Link>
          </span>
          <span className="hover:text-purple-800 hover:font-semibold hover:scale-150 duration-500">
            <Link href={"#education"}>Education</Link>
          </span>
          <span className="hover:text-purple-800 hover:font-semibold hover:scale-150 duration-500">
            <Link className="" style={{scrollBehavior : "smooth"}} href={"#contact"}>Contact Me</Link>
          </span>
        </div>



        <Link href={'#contact'} className="rounded-lg py-2 px-5 text-white bg-gradient-to-b from-[#5b21b6] to-[#5b21b6]/20 text-sm font-semibold hover:scale-125 duration-300" >Hire Me</Link>

        <div
          className="lg:hidden md:hidden z-20"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross1 />}
        </div>

        {/* overlay starts here */}
        {!toggle ? (
          <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center  bg-black text-white lg:hidden md:hidden sm:flex">
            <ul className="font-autograph2 text-6xl space-y-8">
              <li className="hover:scale-125 duration-300 hover:text-purple-700">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-purple-700">
                <Link href={"/"}>About</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-purple-700">
                <Link href={"/"}>Portfolio</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-purple-700">
                <Link href={"/"}>Skills</Link>
              </li>

              <li className="hover:scale-125 duration-300 hover:text-purple-700">
                <Link href={"/"}>Education</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-purple-700">
                <Link href={"#contact"}>Contact ME</Link>
              </li>
            </ul>
          </div>
        ) : null}

        {/* overlay Ends here */}
      </div>
    </>
  );
}

export default NavBar;
