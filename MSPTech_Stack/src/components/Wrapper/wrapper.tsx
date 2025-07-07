import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className=" 2xs:px-2 sm:px-4 md:px-16 lg:px-16 xs:mt-60 md:mt-52 lg:mt-40  ">{children}</div>;
};

export default Wrapper;
