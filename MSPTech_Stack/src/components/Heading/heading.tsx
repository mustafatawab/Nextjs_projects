import React from "react";

const Heading = ({ text }: any) => {
  return (
    <h1 className="text-blue 2xs:font-bold md:font-extrabold lg:font-extrabold 2xs:text-2xl sm:text-xl md:text-3xl lg:text-5xl">
      {text}
    </h1>
  );
};

export default Heading;
