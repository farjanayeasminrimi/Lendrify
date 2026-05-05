import Image from "next/image";
import React from "react";

const MyProfilePage = () => {
  return (
    <div className="flex  items-center gap-5 bg-[#F3EFEA] max-w-[800px] mx-auto my-35 p-10 shadow-lg rounded-2xl">
      <div>
        <Image
          className="rounded-full"
          src={
            "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg"
          }
          width={150}
          height={150}
          alt="User Photo"
        ></Image>
      </div>
      <div className="flex justify-between gap-5 items-center w-full">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#2F3A3D]">Farjana Yeasmin</h1>
          <span className="text-[1rem] font-medium text-gray-500">farjanayeasmin003@gmail.com</span>
          <span className="font-medium text-xs text-gray-400  flex flex-col mt-1">
            General Member
          </span>
        </div>
        <div>
          <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
