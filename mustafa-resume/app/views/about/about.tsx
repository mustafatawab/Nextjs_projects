import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
     
      <section id="about" className="text-white">
        <div className=" py-10 flex flex-wrap lg:flex-nowrap justify-between">
          <div className="md:basis-1/2 flex flex-col gap-2">
            <div className="border border-gray-500 p-10 rounded-lg bg-black/10">
              <h1 className="text-start text-3xl font-bold ">About Me</h1>
              <p className="leading-6">
                I am a self-motivated web developer with hands-on experience in JavaScript, React, Next.js, Tailwind CSS, MUI, and Bootstrap. Additionally, I have expertise in PHP, WordPress, Joomla, and Technical Support. I specialize in creating dynamic, responsive websites and applications. I am passionate about learning new technologies and continuously improving my coding skills. With strong problem-solving abilities and a keen eye for detail, I am eager to contribute to a collaborative team environment and deliver high-quality web solutions.
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-center p-20   rounded-lg bg-gradient-to-br from-purple-900/20 via-black/50 to-purple-900/5 ">
              <h1 className="text-4xl fonf-semibold text-white">Do You Want to Start Project Together ?</h1>
              <Link href='#contact' className="bg-white p-2 text-black font-semibold rounded-lg">Let`s Discuss</Link>
            </div>
          </div>
          <div className="md:basis-1/3 p-4 space-y-2  border border-gray-500 rounded-lg bg-black/10 flex flex-col justify-center items-start">
            <p className="text-md text-gray-500">I constantly improve </p>
            <h1 className="text-4xl font-bold text-white">My Tech Stack</h1>
            <div className="gap-2 flex flex-wrap">

              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Javascript </span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Typescript</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">HTML</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Nextjs</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Reactjs</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Tailwind CSS</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Bootstrap</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Material UI</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Nodejs</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">PHP</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">Vuejs</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">MongoDB</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">MySQL</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">PosgreSQL</span>
              <span className="bg-[#000000] shadow-2xl p-2 text-sm rounded-lg border border-gray-800">WordPress</span>

            </div>
           
          </div>
        </div>

        {/* <div className="flex justify-around">
          <span className="text-center">
            <h2 className="font-bold text-4xl text-gray-400">10+</h2>
            <p>Years Experience</p>
          </span>

          <span className="text-center">
            <h2 className="font-bold text-4xl text-gray-400">250+</h2>
            <p>Happy Clients</p>
          </span>

          <span className="text-center">
            <h2 className="font-bold text-4xl text-gray-400">650+</h2>
            <p>Projects Done</p>
          </span>

          <span className="text-center">
            <h2 className="font-bold text-4xl text-gray-400">38</h2>
            <p>Get Awards</p>
          </span>
        </div> */}

      </section>
    </>
  );
};

export default About;
