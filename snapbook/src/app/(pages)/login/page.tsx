"use client";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 p-4">
      <div className=" p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png" // Put your logo in public folder
            alt="Snapbook Logo"
            width={600}
            height={10}
            className="mb-4"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-green-950 text-center mb-6">
          Welcome Back
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border bg-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <Link href="/register" className="text-green-900 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

