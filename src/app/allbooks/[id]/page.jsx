"use client";
import { useParams } from "next/navigation";
import React from "react";
import image from "@/assets/books/atomic habits.jpg";
import Image from "next/image";
import Link from "next/link";

const CategoryBooks = ({ params }) => {
  const { param } = useParams(params);
  console.log(param);
  return (
    <div className="container mx-auto px-5 md:px-0 bg-[#F3EFEA] my-10 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-7 p-10">
        <div className="p-10">
          <Image
            className="rounded-2xl"
            src={image}
            width={280}
            height={300}
            alt="book image"
          ></Image>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className=" text-5xl font-bold text-[#2F3A3D]">title</h1>
          <h5 className="text-gray-400 font-medium text-[.9rem]">author</h5>
          <p className="text-[#2F3A3D]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In iusto voluptas aliquam!
            Animi excepturi obcaecati error aliquam tempora ad unde maxime, blanditiis temporibus at
            facere expedita perferendis eum, alias odio.
          </p>
          <h5 className="text-gray-400 font-medium text-[.9rem]">available quantity</h5>
          <h2 className="text-orange-600 font-bold text-xl">price</h2>
          <Link className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white" href={"/"}>
            <button>Borrow This Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBooks;
