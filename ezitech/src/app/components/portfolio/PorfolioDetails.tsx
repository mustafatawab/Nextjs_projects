import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function PorfolioDetails({ projectNumber, projectHeading }: any) {
  return (
    <>
      <div className="space-y-5 text-left">
        <p className="text-[#64F4AB]">- {projectNumber}</p>
        <h1 className="text-3xl font-bold">{projectHeading}</h1>
        <p>
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it is also changing the way we learn and what
          we learn. Factual knowledge is less prized when everything you ever
          need to know can be found on your phone. There is no imperative to be
          an expert at doing everything when you can.
        </p>
        <div className="group flex items-center gap-4">
          <span>
            <AiOutlineArrowRight className="text-[#FECD1A]" />
          </span>
          <span className="group-hover:ml-5 duration-500">
            <Link href={"/"} className="text-[#FECD1A]">
              Read More
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default PorfolioDetails;
