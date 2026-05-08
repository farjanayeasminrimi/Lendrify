"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginButtons = () => {
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();
  console.log(session);

  return (
    <div>
      {session ? (
        <div className="dropdown dropdown-end">
          <div className="flex justify-end gap-2 items-center">
            <h1 className="text-[#2F3A3D] font-bold text-[.8rem] md:text-[1rem]">
              {session?.user?.name}
            </h1>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={session?.user?.image} width={20} height={20} alt="user image"></Image>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/myprofile"}>Profile</Link>
              </li>

              <li>
                <Link onClick={() => authClient.signOut()} href={"/login"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <Link href={"/login"}>
            <button className="text-[#2F3A3D] font-bold text-[.8rem] md:text-[1rem]">LogIn</button>
          </Link>
          <h1 className="font-medium text-gray-500 text-[.8rem] md:text-[1rem] m-0 leading-none">
            or
          </h1>
          <Link href={"/signup"}>
            <button className="text-[#2F3A3D] font-bold text-[.8rem] md:text-[1rem]">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginButtons;
