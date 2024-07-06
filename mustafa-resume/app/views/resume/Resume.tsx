import Experties from "@/app/components/experties/experties";
import React from "react";

const Resume = () => {
  return (
    <div id="education" className="text-white mb-32 ">
        <h1 className="text-5xl text-gray-200 font-bold text-center p-28">Education</h1>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <h1 className="text-3xl font-bold">My Education</h1>

        <h1 className="text-3xl font-bold">My Experties</h1>
        <Experties
          date="2019 - 2023"
          topic="Software Engineering"
          subTopic="University of Lahore"
          details="4 Year bachelor degree in Software Engineering with multiple awards and having 3.28 CGPA."
        ></Experties>
        <Experties
          date="1+ Year"
          topic=" Web Developer"
          subTopic="Panaverse , PIAIC "
          details="I am expert in Front end and backend techonologies. The technology used are NextJs, and ReactJS as a client side and server side technlogy. Also used Tailwind CSS and Chakra UI for designing web pages."
        ></Experties>
           <Experties
          date="2017 - 2019"
          topic="Intermediate"
          subTopic="GHHS Balogram, Swat"
          details="Intermediate in Pre-Engineering with a nice grade"
        ></Experties>
           <Experties
          date="1+ Years"
          topic="WordPress"
          subTopic="YODO , Lahore "
          details="Beautiful and Full responsive website using wordpress elementor and dynamic data using some plugins like JetEngine and ACF. Also nice grip on WordPress costumization using PHP in THemes and Plugins too"
        ></Experties>
      </div>
    </div>
  );
};

export default Resume;
