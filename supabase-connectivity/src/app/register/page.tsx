"use client";
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
          <input
            type="email"
            onChange={handleChange}
            name="email"
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
        </div>
      </form>
    </div>
  );
};

export default page;
