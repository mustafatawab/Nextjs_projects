"use client";
import React from "react";
import { useEffect, useState } from "react";
import heroImage from "../../assets/images/hero-car.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [text, setText] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fullText = ["Simple", "Fast", "Easy"];
  const [textIndex, setTextIndex] = useState(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = fullText[textIndex];
      setText(currentText.slice(0, index));
      setIndex((prev) => prev + 1);

      // Reset index and text when it reaches the end
      if (index === currentText.length + 1) {
        setIndex(0);
        setText("");
        setTextIndex((prev) => (prev + 1) % fullText.length);
      }
    }, 150); // You can adjust the typing speed here

    // Clear the timeout when component unmounts
    return () => clearTimeout(timeout);
  }, [index, text, textIndex, fullText]);

  return (
    <section className="flex   flex-wrap justify-between items-center gap-10 py-10">
      <div className="space-y-4  pr-20 basis-full lg:basis-1/2 lg:text-start ">
        <h2 className="text-6xl h-28">
          {" "}
          <span className="font-bold"> Car Finance</span> Made Super{" "}
          <span className="text-[#419EB7] ">{text}</span>
        </h2>
        <p className="text-[#419EB7] text-3xl">
          Get approved and drive away today!*
        </p>
        <p>
          <Link
            href={"#"}
            className="text-black bg-yellow-500 py-2 px-4 hover:bg-transparent hover:border-2 hover:border-black rounded-md text-lg"
          >
            Get A Free Quote
          </Link>
        </p>
        <p className="text-sm text-[#5B5B5B] mt-3">
          We`re a credit broker not a lender. Rates from 8.9% APR.
          Representative APR 11.9%
        </p>
        <p className="text-sm text-[#5B5B5B]">
          Representative Example: Borrowing £25,000 over 4 years with a
          representative APR of 11.9%, an annual interest rate of 11.9% (Fixed)
          and a deposit of £5000.00 the amount payable would be £362.01 per
          month, with a total cost of credit of £7,376.69 and a total amount
          payable of £17,376.69. Based on 6,000 miles per annum, excess mileage
          charges will apply if this is exceeded. Finance subject to status 18+
          only.
        </p>
      </div>
      <div className="relative flex justify-center items-center ">
        <div className="lg:block hidden  bg-[#419EB7] w-[450px] h-[450px] rounded-full absolute -z-10 top-0 "></div>
        <Image src={heroImage} alt="Hero Image" className="mt-20" />
      </div>
    </section>
  );
};

export default Hero;
