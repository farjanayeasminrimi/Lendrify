import Image from "next/image";
import React from "react";

const LatestBook = ({ book }) => {
  const { title, popularity, image_url, author, price } = book;
  // console.log(book);
  return (
    <div className="pt-6 px-2 pb-2 bg-gray-100 shadow-xs border border-gray-200 hover:border-[#2F3A3D]/30 rounded-2xl">
      <div className="mx-auto">
        <Image
          className="rounded-2xl mx-auto"
          src={image_url}
          width={100}
          height={100}
          alt="book image"
        ></Image>
      </div>
      <div className=" pt-2 px-2">
        <h2 className="text-[#2F3A3D] font-semibold text-md">{title}</h2>
        <p className="font-medium text-[#2F3A3D] text-[.6rem]">
          Popularity : <span className="text-amber-600">{popularity}%</span>{" "}
        </p>
        <span className="font-medium text-gray-400 text-[.6rem]">{author}</span>
        <h1 className="text-orange-600 font-bold text-xl">${price}</h1>
      </div>
    </div>
  );
};

export default LatestBook;
