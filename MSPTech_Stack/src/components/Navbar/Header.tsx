"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import arrow from "@/assets/svgs/dropdown.svg";
const Header = () => {
  const [state, setState] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [showGrowWithUsDropdown, setShowGrowWithUsDropdown] = useState(false);

  const navigation = [
    {
      title: "Marketplace",
      path: "#",
      subItems: [
        { title: "Explore Marketplace", path: "/pages/exploreMarketplace" },
      ],
    },
    {
      title: "Grow With Us",
      path: "#",
      subItems: [
        { title: "Marketplace for Vendors", path: "/pages/venderMarketplace" },
      ],
    },
    { title: "About", path: "/pages/about" },
    { title: "Support", path: "/pages/support" },
  ];

  const toggleMarketplaceDropdown = () => {
    setShowMarketplaceDropdown(!showMarketplaceDropdown);
    setShowGrowWithUsDropdown(false);
  };
  const toggleGrowWithUsDropdown = () => {
    setShowGrowWithUsDropdown(!showGrowWithUsDropdown);
    setShowMarketplaceDropdown(false);
  };
  return (
    <nav className="bg-transparent text-white w-full top-0 z-20 text-lg pr-5  ">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block text-white">
          <Link href="/">
            <Image src={logo} alt="Float UI logo" />
          </Link>
          <div className="lg:hidden text-white">
            <button
              className=" outline-none p-2 rounded-md focus:border-gray-400 focus:border"
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
          className={`flex-1 2xs:bg-black z-20  lg:bg-transparent justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? " left-0 p-20 overflow-auto   w-full " : "hidden"
          }`}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row text-white items-center">
              <li className="mt-8 mb-8 lg:mt-0 lg:mb-0 text-white 2xs:w-full lg:w-fit">
                <Link href="/pages/contact">Contact</Link>
              </li>
              <li className="mt-4 lg:mt-0 2xs:w-full lg:w-fit">
                <Link
                  href="/pages/signin"
                  className="hover:bg-blue hover:border-none py-2 px-4 text-center border border-white    rounded-md block lg:inline lg:border-0"
                >
                  Login
                </Link>
              </li>
              <li className="mt-8 lg:mt-0 2xs:w-full lg:w-fit">
                <Link
                  href="/pages/signup"
                  className=" py-2 px-4 text-center text-white   bg-blue/80 hover:bg-transparent hover:border  rounded-full shadow block lg:inline "
                >
                  Get Started
                </Link>
              </li>
              <li
                onClick={() => setIsSearch(!isSearch)}
                className="mt-4 lg:mt-0 "
              >
                <FaSearch />
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => (
                <li
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    if (item.title === "Marketplace") {
                      toggleMarketplaceDropdown();
                    }
                  }}
                  key={idx}
                  className="text-white font-semibold relative"
                >
                  <Link
                    href={item.path}
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      if (item.title === "Marketplace") {
                        toggleMarketplaceDropdown();
                      }
                      if (item.title === "Grow With Us") {
                        toggleGrowWithUsDropdown();
                      }
                    }}
                  >
                    <p className="flex items-baseline gap-1 justify-between">
                      {item.title}{" "}
                      {item.title === "Marketplace" ||
                      item.title === "Grow With Us" ? (
                        <Image src={arrow} alt="" />
                      ) : (
                        ""
                      )}{" "}
                    </p>
                  </Link>
                  {item.title === "Marketplace" && showMarketplaceDropdown && (
                    <ul className="absolute block 2xs:w-full lg:w-52   p-2 top-full left-0 z-20  bg-white text-black shadow-md rounded-md py-2 space-y-2 opacity-100 transition-all duration-300">
                      {item.subItems?.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link href={subItem.path}>
                            <p className="text-gray-800">{subItem.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.title === "Grow With Us" && showGrowWithUsDropdown && (
                    <ul className="absolute block 2xs:w-full lg:w-52   p-2 top-full left-0 z-20  bg-white text-black shadow-md rounded-md py-2 space-y-2 opacity-100 transition-all duration-300">
                      {item.subItems?.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link href={subItem.path}>
                            <p className="text-gray-800">{subItem.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
    </nav>
  );
};

export default Header;
