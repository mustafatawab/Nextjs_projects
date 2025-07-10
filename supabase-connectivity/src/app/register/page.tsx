"use client";
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
          <input
            type="email"
            onChange={handleChange}
            name="email"
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
        </div>
      </form>
    </div>
  );
};

export default page;
