import React from "react";

function MoreAbout() {
  return (
    <div>
      <div className="p-5 flex flex-wrap gap-2 justify-center">
        <div className="text-center space-y-3 bg-[#25262A] py-16 px-20 lg:rounded-l-2xl">
          <p className="text-[#64F4AB] text-6xl font-bold">56</p>
          <p>Happy Clients</p>
        </div>
        <div className="text-center space-y-3 bg-[#25262A] py-16 px-20">
          <p className="text-[#64F4AB] text-6xl font-bold">87</p>
          <p>Projects Done</p>
        </div>
        <div className="text-center space-y-3 bg-[#25262A] py-16 px-20">
          <p className="text-[#64F4AB] text-6xl font-bold">16</p>
          <p>Awards Winning</p>
        </div>
        <div className="text-center space-y-3 bg-[#25262A] py-16 px-20 lg:rounded-r-2xl">
          <p className="text-[#64F4AB] text-6xl font-bold">7</p>
          <p>Years Experience</p>
        </div>
      </div>


      
    </div>
  );
}

export default MoreAbout;
