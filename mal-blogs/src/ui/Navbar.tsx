"use client";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";

const Navbar = () => {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Magazine", path: "/blogs" },
    { title: "Calculator", path: "#calculator" },
    { title: "How It Works", path: "#how-it-works" },
    { title: "FAQ", path: "#faq" },
  ];

  return (
    <>
      <Wrapper>
        <nav className="bg-white w-full border-b  md:border-0 md:static">
          <div className="items-center    md:flex ">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image src={logo} alt="image" className="" width={200} />
              </Link>
              <div className="md:hidden">
                <button
                  className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="hover:text-[#419EB7] hover:border-b hover:border-[#419EB7] text-xl text-gray-700"
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hidden lg:inline-block">
              <button className="py-2 px-4 rounded-md text-lg text-white bg-[#032933] hover:text-[#032933] hover:border hover:border-[#032933] hover:bg-transparent">
                Get A Free Quote
              </button>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

export default Navbar;
