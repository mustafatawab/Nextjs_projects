"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toast, toast, Toaster } from "react-hot-toast";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDissabled] = useState(false);
  const router = useRouter();


  const [user, setUser] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");

    try {
      setLoading(true);
      const response = await axios.post(
        "/api/users/signup",
        user
      );
      toast.success("Form Submitted");
      console.log(response.data);
      router.push("/pages/signin");
    } catch (error: any) {
      console.log(error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setBtnDissabled(false);
    } else {
      setBtnDissabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="bg-blue relative w-screen">
        <Image
          className="opacity-35 w-full h-[400px]"
          src={background}
          alt="Background Image"
        />
      </div>

      <div className="-mt-52 z-20 relative ">
        <form
          onSubmit={handleSignUp}
          action=""
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <Suspense fallback={"Loading"}>
            {loading ? "Loading" : <Heading text="Sign Up" />}
          </Suspense>
          <span className="flex flex-col">
            <label htmlFor="">Your Full Name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder=""
              value={user.fullname}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              value={user.email}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Create Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              value={user.username}
              onChange={handleChange}
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Create Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder=""
              value={user.password}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              onChange={handleChange}
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder=""
              value={user.confirmPassword}
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              onChange={handleChange}
              required
            />
            <p className="text-red-600">
              {user.confirmPassword === user.password
                ? ""
                : "Password Does not Match"}
            </p>
          </span>

          <button
            className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
            type="submit"
          >
            {
              btnDisabled ? "Fill All Fields First" : "Now Sign Up"
            }
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
