"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast } from "react-toastify";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      callbackURL: "/",
    });
    console.log(data, error);
    if (data) {
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      redirect("/");
    }
    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
  return (
    <div className=" bg-[#F3EFEA]">
      <div className="min-h-screen flex items-center justify-center">
        <fieldset className=" bg-base-200 border-base-300 rounded-box  max-w-[500px] border p-10">
          <h1 className="mt-2 text-center text-4xl font-bold text-[#2F3A3D]">Welcome Back</h1>
          <span className="mb-4 mt-2 text-center text-[.8rem] block text-gray-400 ">
            Please Enter Your Details
          </span>
          <form onSubmit={onSubmit}>
            <label className="label my-2">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full  outline-none border border-[#5F737A] mb-2"
              placeholder="Email"
            />

            <label className="label my-2">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full outline-none border border--[#5F737A]"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn mt-4 bg-[#5F737A] hover:bg-[#4C5E64] text-white w-full"
            >
              Login
            </button>
            <button
              type="button"
              className="btn mt-4 bg-transparent border border-[#5F737A] hover:bg-[#4C5E64] hover:text-white text-[#4C5E64] w-full flex gap-2 items-center"
            >
              <FcGoogle size={20} />
              Login with Google
            </button>
          </form>
          <p className="text-xs text-[#2F3A3D] text-center mt-4">
            Haven&apos;t Registered Yet? &nbsp;
            <Link className="text-[#4C5E64] border-b border-b-[#4C5E64]" href={"/signup"}>
              Register
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default LoginPage;
