import React from "react";
import image from "@/assets/books/atomic habits.jpg";
import Image from "next/image";
import Link from "next/link";
import { booksDetailsData } from "@/lib/fetchData";

const CategoryBooks = async ({ params }) => {
  const { id } = await params;
  const details = await booksDetailsData(id);
  const { title, author, description, price, available_quantity, popularity } = details;
  console.log(details);
  return (
    <div className="container mx-auto px-5 md:px-0 bg-[#F3EFEA]/40 my-4 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12  md:p-10">
        <div className="mt-0 p-5 md:p-5 shadow-xl rounded-2xl">
          <Image
            className="rounded-2xl"
            src={image}
            width={280}
            height={300}
            alt="book image"
          ></Image>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className=" text-5xl font-bold text-[#2F3A3D]">{title}</h1>
          <h5 className="text-gray-400 font-medium text-[.9rem]">{author}</h5>
          <p className="text-[#2F3A3D]">{description}</p>
          <p className="font-medium text-[#2F3A3D] text-[.9rem]">
            Popularity : <span className="text-amber-600">{popularity}%</span>
          </p>
          <h5 className="text-gray-400 font-medium text-[.9rem]">
            Available Quantity: {available_quantity}
          </h5>
          <h2 className="text-orange-600 font-bold text-xl">${price}</h2>
          <Link className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white" href={"/"}>
            <button>Borrow This Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBooks;
