import React from "react";
import PorfolioDetails from "@/app/components/portfolio/PorfolioDetails";
import Image from "next/image";
import image1 from "../../assets/images/portfolio/portfolio1.jpg";
import image2 from "../../assets/images/portfolio/portfolio2.jpg";
import image3 from "../../assets/images/portfolio/portfolio3.jpg";
function Portfolio() {
  return (
    <>
      <div>
        {/* 1 */}
        <div className="flex gap-28 p-10 justify-between items-center">
          <div className="w-2/3">
            <PorfolioDetails
              projectNumber="project 1"
              projectHeading="Branding Nice Studio"
            />
          </div>
          <div className="rounded-3xl">
            <Image
              className="rounded-3xl hover:shadow-xl hover:shadow-[#444444] hover:rotate-6 duration-500"
              src={image1}
              alt="Image 1"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex gap-28 p-10 items-center">
          <Image
            className="rounded-3xl hover:shadow-xl hover:shadow-[#444444] hover:rotate-6 duration-500"
            src={image2}
            alt="Image 2"
          ></Image>
          <div className="w-2/3">
            <PorfolioDetails
              projectNumber="project 2"
              projectHeading="Mobile App Card"
            />
          </div>
        </div>

        {/* 3 */}
        <div className="flex gap-28 items-center p-10">
          <div className="w-2/3">
            <PorfolioDetails
              projectNumber="project 3"
              projectHeading="Restuarent Landing Page"
            />
          </div>
          <Image
            src={image3}
            alt="Image 3"
            className="rounded-3xl hover:shadow-xl hover:shadow-[#444444] hover:rotate-6 duration-500"
          />
        </div>

        <div className="text-center p-10">
          <button className="bg-white hover:bg-[#444444] duration-300 text-center text-black hover:text-white px-4 py-2 rounded-lg shadow-lg">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
