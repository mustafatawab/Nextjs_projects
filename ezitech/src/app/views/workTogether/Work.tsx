import React from "react";
import PrimaryButton from "@/app/components/primaryButton";

function Work() {
  return (
    <div className="p-20 ">
      <div className="space-y-4 px-52 rounded-3xl text-center py-12 bg-[#25262A]">
        <h1 className="text-3xl font-bold">Lets Work Together</h1>
        <p>
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn
        </p>
            <PrimaryButton text='Contact Me' link='/'/>
      </div>
    </div>
  );
}

export default Work;
