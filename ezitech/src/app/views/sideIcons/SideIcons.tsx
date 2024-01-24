import Link from "next/link";
import React from "react";
import { SiTorbrowser } from "react-icons/si";
import { AiOutlineShoppingCart, AiOutlineExport } from "react-icons/ai";

function SideIcons() {
  return (
    <div className="fixed right-0 top-[300px] space-y-4 text-sm">
      <div className="bg-slate-900  px-4 py-2 rounded-xl flex items-center  gap-3 hover:scale-125 hover:bg-blue-700 duration-500">
        <SiTorbrowser />
        <span className="">Brows Demos</span>
      </div>

      <div className="bg-slate-900  px-4 py-2 rounded-xl flex items-center  gap-3 hover:scale-125 hover:bg-blue-700 duration-500">
        <AiOutlineShoppingCart />
        <span>Buy Now</span>
      </div>

      <div className="bg-slate-900  px-4 py-2 rounded-xl flex items-center  gap-3 hover:scale-125 hover:bg-blue-700 duration-500">
        <AiOutlineExport />
        <span>Export Section</span>
      </div>
    </div>
  );
}

export default SideIcons;
