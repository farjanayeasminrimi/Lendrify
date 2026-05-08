import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  return (
    <div className="px-5 md:px-0">
      <div className="flex flex-col md:flex-row  items-center gap-5 bg-[#F3EFEA] max-w-[800px] mx-auto my-10 md:my-35 p-10 shadow-lg rounded-2xl ">
        <div>
          <Image
            className="rounded-full"
            src={session.user.image}
            width={110}
            height={110}
            alt="User Photo"
          ></Image>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 items-center w-full">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2F3A3D]">{session.user.name}</h1>
            <span className="text-[.8rem] md:text-[1rem] font-medium text-gray-500">
              {session.user.email}
            </span>
            <span className="font-medium text-xs text-gray-400  flex flex-col mt-1">
              General Member
            </span>
          </div>
          <div>
            <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
