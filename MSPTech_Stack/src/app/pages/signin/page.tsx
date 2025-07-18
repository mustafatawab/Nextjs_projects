'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import Link from "next/link";
import toast from "react-hot-toast";
const Login = () => {

  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [btnDissable, setBtnDissable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notValid, setNotValid] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(user);


    try {
      setLoading(true);
      const response = await axios.post("/api/users/signin", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/pages/venderMarketplace");
    } catch (error: any) {
      setNotValid(true);
      console.log(error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDissable(false);
    } else {
      setBtnDissable(true);
    }
  }, [user]);
  return (
    <main className="">
      <div className="bg-blue relative w-screen">
        <Image
          className="opacity-35 w-full h-[400px] object-cover "
          src={background}
          alt="Background Image"
        />
      </div>

      <div className="-mt-52 z-20 relative ">
        <form
          onSubmit={handleLogin}
          action=""
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          {loading ? <p className="font-semibold text-3xl">Processing....</p> : <Heading text="Sign In" />}
          <p className="text-[#0F1519CC] text-2xl font-semibold">Lets Get Started</p>
          <span className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              id="email"
              value={user.email}
              name="email"
              type="email"
              placeholder="email@example.com"
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold border border-black"
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              value={user.password}
              name="password"
              id="password"
              type="password"
              placeholder="**********"
              onChange={handleChange}
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold border border-black"
            />
            {notValid ? <p className="text-red-500">Password or Email is incorrect</p> : <p className="text-blue "></p>}
          </span>

          <Link className="text-[#0F1519CC] font-semibold text-lg" href={"#"}>Forgot Password?</Link>


          <button type="submit" className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit">{btnDissable ? "No Login" : "Login"}</button>


          <p>Do not have any account ? <Link className="text-blue font-bold text-xl" href={"/pages/signup"}>Sign Up</Link> </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
