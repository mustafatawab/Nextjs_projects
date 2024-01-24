import React from "react";
import Link from "next/link";

function PrimaryButton({ text, link }: any) {
  return (
    <div>
      <Link href={link}>
        <button className="bg-[#ffaf29] px-6 py-3 rounded-lg text-black text-center" type="submit">{text}</button>
      </Link>
    </div>
  );
}

export default PrimaryButton;
