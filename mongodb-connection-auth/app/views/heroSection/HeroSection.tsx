"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import background from "../../assets/images/background.jpg";
import mustafaImage from "../../assets/images/mustafa.png";
import { MdKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import Wrapper from "@/app/components/wrap/wrapper";
import Link from "next/link";

function HeroSection() {
  const [text, setText] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fullText = ["A Modern Full Stack Developer.", 'Professional Front End Developer', "A WordPress Developer"];
  const [textIndex, setTextIndex] = useState(0)
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
        setTextIndex((prev) => (prev + 1) % fullText.length)
      }
    }, 150); // You can adjust the typing speed here

    // Clear the timeout when component unmounts
    return () => clearTimeout(timeout);
  }, [index, text, textIndex, fullText]);



  return (
    <Wrapper>
      <main className=" text-white pt-20 pb-32 flex justify-between items-center">
        <div className="space-y-3 flex flex-col flex-wrap lg:flex-nowrap items-start justify-start">
          <p className="text-lg">
            Hi I Am Mustafa Tawab
          </p>
          <h1 className="text-5xl font-bold ">{text}</h1>
          <p className="text-lg ">Based in Pakistan</p>
          <Link href={'#porfolio'} className="inline-block px-4 py-2 font-semibold text-white border rounded-lg border-gray-500 mt-10">See my recent works</Link>
          <br />
          <Link href={'/MustafaTawabCV.pdf'} target="_blank" download className="group px-4 py-2 font-semibold text-white border rounded-lg border-gray-500 mt-10 flex items-center gap-2"> Download CV  <MdFileDownload className="group-hover:-rotate-90 duration-300" /></Link>
        </div>
        <div className="rounded-xl">
          <Image className="shadow rounded-xl" src={mustafaImage} alt="Mustafa Tawab" />
        </div>
      </main>
    </Wrapper>
  );
}

export default HeroSection;
