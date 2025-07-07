"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
    const [data, setData] = useState("nothing");
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:3000/api/users/logout");
            toast.success("Logout Successfully");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error("Some Problem Occure " + error.message);
        }
    };

    const getUserDetails = async () => {
        const res = await axios.get("http://localhost:3000/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-center p-5 text-3xl font-bold my-10">Profile</h1>
            <p className="bg-green-600 p-2 text-center">
                {data === "nothing" ? (
                    "Nothing"
                ) : (
                    <>

                        <Link href={`/profile/${data}`}>{data}</Link>{" "}
                    </>
                )}
            </p>
            <button
                onClick={handleLogout}
                className="text-xl font-semibold p-2 mx-auto w-fit bg-blue-700 rounded-lg"
            >
                Logout
            </button>
            <Toaster />
            <button
                onClick={getUserDetails}
                className="text-xl font-semibold p-2 mx-auto w-fit bg-blue-700 rounded-lg"
            >
                Get User Details
            </button>
        </div>
    );
};

export default Profile;
