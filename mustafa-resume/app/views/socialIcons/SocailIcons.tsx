import React from "react";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

function SocailIcons() {
  return (
    <div className="">
      <div className="flex justify-between  items-center text-lg w-36 bg-gray-800 ml-[-100px] fixed left-0 rounded-r-lg top-[20vh] py-3  px-4 hover:ml-0 duration-300 text-white">
        <Link href={"https://www.linkedin.com/in/mustafa-tawab-35542b201/"}>LinkedIn</Link>
        <SiLinkedin size={25}/>
      </div>

      <div className="ml-[-100px] hover:ml-0 duration-300 flex items-center justify-between  text-lg fixed left-0 top-[30vh] py-3  px-4 w-36 rounded-r-lg text-white bg-gray-800">
        <Link href={"https://github.com/mustafatawab"} className="">
          Github{" "}
        </Link>

        <FaGithub size={25}/>
      </div>

      <div className="ml-[-100px] hover:ml-0 duration-300 flex items-center justify-between  text-lg fixed left-0 top-[40vh] py-3  px-4 w-36 rounded-r-lg text-white bg-gray-800">
        <Link href={"https://twitter.com/MustafaTawab1"}>Twitter</Link>

        <FiTwitter size={25}/>
      </div>
    </div>
  );
}

export default SocailIcons;
