'use client'
import React from "react";
import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import instagram from "../../assets/svgs/icons/instagram.svg";
import world from "../../assets/svgs/icons/world.svg";
import twitter from "../../assets/svgs/icons/twitter.svg";
import youtube from "../../assets/svgs/icons/youtube.svg";
import Link from "next/link";
import send from "../../assets/svgs/icons/send.svg";
import { toast, Toaster } from "react-hot-toast";
const Footer = () => {

  return (
    <footer className="mt-80 object-cover bg-[#0455B7] text-white flex flex-wrap grow justify-between p-10">
      <div className="space-y-5 basis-2/5">
        <Image src={logo} alt="" />
        <span>
          <p className="text-[#D9DBE1]">Copyright © 2024 MSPTechStack.</p>
          <p className="text-[#D9DBE1]">All rights reserved</p>
        </span>
        <span className="text-white flex justify-start gap-5">
          <Image src={instagram} alt="" />
          <Image src={world} alt="" />
          <Image src={twitter} alt="" />
          <Image src={youtube} alt="" />
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Company</h2>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Marketplace</Link>
        </p>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Grow With Us</Link>
        </p>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>About</Link>
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Company</h2>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Help Center</Link>
        </p>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Terms of Services</Link>
        </p>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Legal</Link>
        </p>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Privacy Policy</Link>
        </p>
        <p className="text-[#D9DBE1]">
          <Link href={"#"}>Status</Link>
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Stay up to date</h2>
        <form className="bg-blue/20  px-3 py-2 rounded-3xl flex justify-between items-center">
          <input
            name="email"

            className="bg-transparent p-1 opacity-100 text-[#D9DBE1] rounded-2xl border-none outline-none"
            type="email"
            placeholder="Your email address"
          />
          <button  onClick={() => {
            toast('Subscribed !!!!', {
              icon: '👏',
            })
          }}>
            <Image src={send} alt="" />
          </button>
          <Toaster />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
