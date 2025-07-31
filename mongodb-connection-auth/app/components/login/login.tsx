"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FiMail } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);
  

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/v1/auth/login", user);
      // router.push("/login");
    } catch (error: any) {
      console.log("login failed", error.message);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <main className="w-full h-screen flex justify-center items-center p-4">
      <div className="w-full sm:2/3 md:w-1/2 lg:w-1/3 p-8 rounded-lg  bg-black/80 shadow-xl space-y-3 flex flex-col justify-center items-center">
        <div className="flex  w-full items-center border border-white py-2 px-3 gap-2 rounded-full">
          <CgProfile className="text-white rounded-full " size={20} />
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
            className="bg-transparent  outline-none text-white"
          />
        </div>
        <div className="flex w-full  items-center border border-white py-2 px-3 gap-2 rounded-full">
          <FiMail className="text-white" size={20} />
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            className="bg-transparent  outline-none text-white"
          />
        </div>
        <div className="flex w-full  items-center justify-between border border-white py-2 px-3 gap-2 rounded-full">
          <div className="flex items-center gap-2">
            {showPass ? (
              <IoLockOpen className="text-white" size={20} />
            ) : (
              <FaLock className="text-white" size={20} />
            )}

            <input
              id="password"
              type={showPass ? "text" : "password"}
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              name="password"
              className="bg-transparent  outline-none text-white"
            />
          </div>

          <button onClick={() => setShowPass(!showPass)}>
            <FaEye className="text-white" size={20} />
          </button>
        </div>

     

        <div className="py-2">
          <button
            className="rounded-full bg-amber-400 px-3 py-1 font-semibold "
            onClick={onLogin}
          >
            Login
          </button>
        </div>

        <div className="text-white text-lg">
          Did Not Have An Account ? <Link className="underline" href="/"> Register </Link>
        </div>
      </div>
    </main>
  );
}
