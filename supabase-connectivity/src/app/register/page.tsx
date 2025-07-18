"use client";
<<<<<<< HEAD
import React, { useState } from "react";
import { supabase } from "../../../lib/supabase/supabase";
import { error } from "console";
const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    confirmPassword?: string;
  }>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const signUp = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: "https://localhost:3000/",
      },
    });
    if (data) {
      console.log(data);
      alert("Check your email for confirmation link");
      alert(data);
    }
    if (error) {
      console.log(error);
      alert("Error signing up");
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="text-black font-bold text-3xl text-center">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <form action="" onSubmit={signUp}>
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
=======
import { supabase } from "@/lib/supabase/client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    confirm_password: string;
  }>({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [match, setMatch] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormData({
      ...formData,
      [name]: value,
    });

    // console.log(formData);
  };

  const signUpUser = async (e: any) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setMatch("Password Does Not Match");
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      router.push("/login");
      console.log(data);
      console.log(error);
      <Toaster richColors position="top-right"/>
    }
  };

  return (
    <div>
      <form  onSubmit={signUpUser}>
        <div className="flex flex-col gap-4 w-1/2 mx-auto bg-white shadow-2xl space-y-5 p-5">
>>>>>>> 91b47bf72849b653e5eec08a39d00fb47446ca23
          <input
            type="email"
            onChange={handleChange}
            name="email"
<<<<<<< HEAD
            id="email"
            className="border border-gray-300 p-2 rounded mb-4"
          />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            className="border border-gray-300 p-2 rounded mb-4"
          />
          <input
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            id="confirmPassword"
            className="border border-gray-300 p-2 rounded mb-4"
          />
          {formData.password !== formData.confirmPassword && (
            <p className="text-red-500">Passwords do not match</p>
          )}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Sign Up
          </button>
=======
            placeholder="email"
            className="rounded-2xl bg-sky-100 p-2"
          />
          <input
            type={showPass ? "text" : "password"}
            placeholder="password"
            onChange={handleChange}
            name="password"
            className="rounded-2xl bg-sky-100 p-2"
          />
          <input
            type={showPass ? "text" : "password"}
            placeholder="confirm password"
            onChange={handleChange}
            name="confirm_password"
            className="rounded-2xl bg-sky-100 p-2"
          />
          <div className="flex items-center gap-2 p-2">
            <input
              id="show"
              type="checkbox"
              value="show password"
              onChange={() => setShowPass(!showPass)}
            />{" "}
            <label htmlFor="show"> Show Password</label>
          </div>
          {match && <div className="p-2 text-red-600">{match}</div>}
          <button type="submit">Submit</button>
>>>>>>> 91b47bf72849b653e5eec08a39d00fb47446ca23
        </div>
      </form>
    </div>
  );
};

export default page;
