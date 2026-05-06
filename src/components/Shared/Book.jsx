import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = ({ book }) => {
  const { id, title, popularity, image_url, author, price } = book;
  // console.log(book);
  return (
    <div className=" py-3 px-2  bg-gray-100 shadow-xs border border-gray-200 hover:border-[#2F3A3D]/30 rounded-2xl">
      <div className="mx-auto">
        <Image
          className="rounded-2xl mx-auto"
          src={image_url}
          width={110}
          height={100}
          alt="book image"
        ></Image>
      </div>
      <div className=" p-4">
        <h2 className="text-[#2F3A3D] font-semibold text-lg">{title}</h2>
        <p className="font-medium text-[#2F3A3D] text-[.7rem]">
          Popularity : <span className="text-amber-600">{popularity}%</span>{" "}
        </p>
        <span className="font-medium text-gray-400 text-[.6rem]">{author}</span>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-orange-600 font-bold text-xl">${price}</h1>
          <Link className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white" href={`/allbooks/${id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
