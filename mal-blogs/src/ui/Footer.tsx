import React from "react";
import logo from "../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <section>
        <hr />
        <Wrapper>
          <footer className="text-black flex  flex-wrap lg:flex-nowrap justify-between items-center py-10">
            <div className="space-y-5 basis-full md:basis-2/3 pr-10 text-[#5B5B5B] flex flex-col  ">
              <Image src={logo} alt="logo" />
              <p className="text-sm">
                Fast Easy Finance is a trading name of Fast Easy Finance
                Limited. Registered address: 45 Circus Road, London, Middlesex,
                NW8 9JH. Company number: 14051241.
              </p>
              <p className="text-sm">
                Fast Easy Finance Ltd (FRN: 994270) is an Appointed
                Representative of Vizion Autos Ltd which is authorised and
                regulated by the Financial Conduct Authority under reference
                number 920157. We can introduce you to a limited number of
                finance providers on our panel depending on your credit rating
                and affordability.
              </p>
              <p className="text-sm">
                Fast Easy Finance is registered with the ICO (Registration
                Number ZB523978). Finance is subject to status and is only
                available to UK residents aged 18 and over. Written quotations
                are available on request.
              </p>
            </div>

            <div className="basis-1/3">
              <h4 className="text-xl font-semibold pb-5">Where next?</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-4">
                  <FaArrowRight className="text-[#419EB7]" />
                  <Link href={"#"}>About Us</Link>
                </p>

                <p className="flex items-center gap-4">
                  <FaArrowRight className="text-[#419EB7]" />
                  <Link href={"#"}>Contact Us</Link>
                </p>

                <p className="flex items-center gap-4">
                  <FaArrowRight className="text-[#419EB7]" />
                  <Link href={"#"}>Privacy Policy</Link>
                </p>

                <p className="flex items-center gap-4">
                  <FaArrowRight className="text-[#419EB7]" />
                  <Link href={"#"}>Terms & Condition</Link>
                </p>

                <p className="flex items-center gap-4">
                  <FaArrowRight className="text-[#419EB7]" />
                  <Link href={"#"}>Magazine</Link>
                </p>

                <p className="flex items-center gap-4">
                  <FaArrowRight className="text-[#419EB7]" />
                  <Link href={"#"}>Disclosure</Link>
                </p>
              </div>
            </div>
            <div className="basis-1/4 space-y-4  ">
              <h4 className="text-xl font-semibold pb-4">Contact Info</h4>

              <span className="flex items-start gap-2">
                <IoLocationSharp className="text-[#419EB7] text-2xl " />
                <p>45 Circus Road London Middlesex NW8 9JH</p>
              </span>

              <span className="flex items-start gap-2">
                <MdEmail className="text-[#419EB7] text-2xl " />
                <p>info@fasteasyfinance.co.uk</p>
              </span>

              <span className="flex items-start gap-2">
                <BsFillTelephoneFill className="text-[#419EB7] text-2xl " />
                <p>0203 701 7994</p>
              </span>
            </div>
          </footer>
        </Wrapper>

        <hr />
        <Wrapper>
          <div className="py-10 text-start text-[#5B5B5B] text-sm">
            © 2024 Fast East Finance Limited. All rights reserved.
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Footer;
