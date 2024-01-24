import React from "react";
import Image from "next/image";
import feedbackImage from "../../assets/images/feedback/test21.png";
import { RiDoubleQuotesL } from "react-icons/ri";

function Feedback() {
  return (
    <div className="flex gap-20 p-16 items-center">
      <Image className=" rounded-3xl" src={feedbackImage} alt="Feedback Image"></Image>
      <div className="w-2/3 space-y-5">
        <RiDoubleQuotesL className="text-6xl text-[#64F4AB]" />
        <p className="font-semibold">
          A Quizk Brown Fox Jumps Over The Lazy Dog. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Natus laborum obcaecati quisquam
          placeat illo deleniti tenetur alias culpa similique! Magni cupiditate
          id repudiandae  alias culpa similique! Magni cupiditate
          id repudiandae  alias culpa similique! Magni cupiditate
          id repudiandae
        </p>
        <p className="text-lg font-semibold text-[#64F4AB]">Amman Payne</p>
        <p className="text-sm">CEO of Figma</p>
      </div>
    </div>
  );
}

export default Feedback;
