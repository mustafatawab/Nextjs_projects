import Heading from "@/components/Heading/heading";
import React from "react";

const TalktoUs = () => {
  return (
    <section className="space-y-10 w-full">
      <Heading text="Talk to Us !" />
      <p className="pb-10 ">
        Thank you for your interest in MSPTech Stack. Complete the form below
        and some will reach out shortly to you..
      </p>
      <div className=" w-full 2xs:p-3 2xs:bg-blue  rounded-2xl xs:p-3 sm:p-5 md:p-20 lg:p-20 flex justify-start items-center relative mt-10">
        {/* <Image className="absolute" src={backgroud} alt=""/> */}
        <p className="text-white xs:max-w-[340px] md:w-full lg:w-[555px] ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum ipsa aliquid est laborum dolor unde? Labore ex sequi magni
          saepe quidem et quam? Soluta beatae odit necessitatibus voluptate
          dolores.
        </p>

        <form
          action=""
          className="bg-white flex flex-col gap-5 xs:static md:absolute lg:absolute top-0 -mt-7 2xs:py-5 2xs:px-3 md:p-7 rounded-lg xs:w-fit md:w-[300px] lg:w-[460px] shadow-lg"
        >
          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder="Name*"
          />

          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="email"
            placeholder="Business E-mail*"
          />

          <textarea
            name=""
            id=""
            cols={20}
            rows={6}
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
          />
          <button className="w-fit ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default TalktoUs;
