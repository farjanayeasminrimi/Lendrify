import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <div className=" bg-[#F3EFEA]">
      <div className="min-h-screen flex items-center justify-center">
        <fieldset className=" bg-base-200 border-base-300 rounded-box  max-w-[500px] border p-10">
          <h1 className="mt-2 text-center text-4xl font-bold text-[#2F3A3D]">Sign Up to Explore</h1>
          <span className="mb-4 mt-2 text-center text-[.8rem] block text-gray-400 ">
            Please Enter Your Details
          </span>
          <form action="">
            <label className="label my-2">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full  outline-none border border-[#5F737A] mb-2"
              placeholder="Name"
            />

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
              class="btn mt-4  bg-[#5F737A] hover:bg-[#4C5E64] text-white w-full"
            >
              Register
            </button>
            <button
              type="button"
              class="btn mt-4  bg-transparent border border-[#5F737A] hover:bg-[#4C5E64] hover:text-white text-[#4C5E64] w-full flex gap-2 items-center"
            >
              <FcGoogle size={16} />
              Login with Google
            </button>
          </form>
          <p className="text-xs text-[#2F3A3D] text-center mt-4">
            Already Have an Account? &nbsp;
            <Link className="text-[#4C5E64] border-b border-b-[#4C5E64]" href={"/login"}>
              Login
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUpPage;
