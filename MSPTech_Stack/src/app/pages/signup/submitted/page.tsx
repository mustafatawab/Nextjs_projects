import React from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
function Submitted() {
  return (
    <>
      <div className="bg-blue relative -z-10 w-screen">
        <Image
          className="opacity-35  w-full h-[400px]"
          src={background}
          alt="Background Image"
        />
      </div>

      <div className="z-10 -mt-20 mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl">
        <h2 className="font-bold text-[#13EB00] text-6xl uppercase">
          SUCCESS!
        </h2>
        <p className="font-semibold text-3xl text-[#363636]">
          Sign Up Form Submitted
        </p>
        <p>
          Please login to your email and click on the link to confirm your
          signup
        </p>
        <p>
          Please note - some email systems may place this email in your spam
          folder or reject this email all together.
        </p>
        <span>
          If you do not receive it, please give us a call at{" "}
          <b>+123 456 789 890</b>{" "}
        </span>
        <Link
          href={"/"}
          className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
        >
          Go Back to Home
        </Link>
      </div>
    </>
  );
};

export default Submitted;
