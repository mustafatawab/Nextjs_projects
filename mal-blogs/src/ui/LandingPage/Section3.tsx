import React from "react";
import image1 from "../../assets/images/image.avif";
import image2 from "../../assets/images/image1.avif";
import image3 from "../../assets/images/image2.avif";
import image4 from "../../assets/images/imag3.avif";
import carImage from "../../assets/images/what-is-car-finance.svg";
import chooseCar from "../../assets/images/why-choose.svg";
import Image from "next/image";

const Section3 = () => {
  return (
    <main>
      <section
        id="how-it-works"
        className="space-y-4 bg-[#F0F0F0] px-10 md:px-20 lg:px-44 py-10  lg:h-[800px] flex flex-col justify-end lg:-mt-80"
      >
        <h1 className="text-3xl font-bold">Let`s Get Started</h1>
        <p className="text-[#419EB7]">Your Step by Step Buying Guide</p>
        <div className="flex justify-between items-center flex-wrap-reverse">
          <span className=" space-y-2">
            <span className="bg-[#419EB7] rounded-full text-white px-2 py-1">
              1
            </span>
            <Image src={image1} alt="" className="md:w-44" />
            <p className="font-semibold text-center">Get a Free Quote</p>
          </span>

          <span className=" space-y-2">
            <span className="bg-[#419EB7] rounded-full text-white px-2 py-1">
              2
            </span>
            <Image src={image2} alt="" className="md:w-28" />
            <p className="font-semibold text-center">Choose Your Car</p>
          </span>

          <span className=" space-y-2">
            <span className="bg-[#419EB7] rounded-full text-white px-2 py-1">
              3
            </span>
            <Image src={image3} alt="" className="md:w-28" />
            <p className="font-semibold text-center">Sign Your eDocs</p>
          </span>
          <span className=" space-y-2">
            <span className="bg-[#419EB7] rounded-full text-white px-2 py-1">
              4
            </span>
            <Image src={image4} alt="" className="md:w-40" />
            <p className="font-semibold text-center">Collect Your New Car!</p>
          </span>
        </div>
      </section>

      <section className="flex flex-wrap lg:flex-nowrap justify-between items-center px-10 md:px-20 lg:px-44 py-10">
        <div className="basis-full lg:basis-1/2 text-[#5B5B5B] space-y-4">
          <h2 className="text-3xl font-semibold text-black">
            What is Car Finance?
          </h2>
          <p className=" ">
            Car finance is a common alternative to purchasing your next car
            outright and involves an agreement with a lender to pay over an
            agreed time period.
          </p>
          <p>
            Most commonly chosen methods of car finance include Personal
            Contract Purchase (PCP) and Hire Purchase (HP). Alternatives
            including a personal loan are also available.
          </p>
          <p>
            Your payments can depend upon what car you decide to purchase, how
            long you wish to purchase it over, whether you wish to own the car,
            and how much you wish to pay upfront.
          </p>
        </div>
        <Image src={carImage} alt="" />
      </section>

      <section className="bg-[#F0F0F0] flex flex-wrap-reverse lg:flex-row flex-col lg:flex-nowrap justify-between items-center px-10 md:px-20 lg:px-44 py-10">
        <Image src={chooseCar} alt="" />
        <div className="basis-full lg:basis-1/2 text-[#5B5B5B] space-y-4 ">
          <h2 className="text-3xl font-semibold text-black">
            Why Choose Fast Easy Finance?
          </h2>
          <p>
            Here at Fast Easy Finance, we`re committed to transforming lives,
            quickly and with no hassle. With a dedication to excellence and a
            commitment to unparalleled customer satisfaction, here`s why you
            should choose us:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="list-disc font-semibold text-black">
              All Credit Scores Accepted
            </li>
            <li className="indent-10">
              We`ll help you assess your circumstances, collaborate with our
              panel of trusted lenders and bring you the best deals.
            </li>

            <li className="list-disc font-semibold text-black">
              Best APR Rates
            </li>
            <li className="indent-10">
              Our lenders work hard to keep their rates as low as possible.
              Current rated from 8.9% APR (11.9% Representative)
            </li>

            <li className="list-disc font-semibold text-black">
              Zero Deposit Options Available
            </li>
            <li className="indent-10">
              We`ll always introduce you to lenders that offer zero-deposit
              finance deals. If you`re a good fit, w`ll make it happen!
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Section3;
