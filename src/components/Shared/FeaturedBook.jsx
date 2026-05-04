import Image from "next/image";
import React from "react";

const FeaturedBook = ({ book }) => {
  const { title, popularity, image_url, author, price } = book;
  console.log(book);
  return (
    <div className="p-6 bg-[#E6DED3] shadow-xs border border-gray-200 rounded-2xl">
      <div className="mx-auto">
        <Image
          className="rounded-2xl mx-auto"
          src={image_url}
          width={200}
          height={100}
          alt="book image"
        ></Image>
      </div>
      <div className=" pt-4 px-9">
        <h2 className="text-[#2F3A3D] font-semibold text-lg">{title}</h2>
        <p className="font-medium text-[#2F3A3D] text-[.9rem]">
          Popularity : <span className="text-amber-600">{popularity}%</span>{" "}
        </p>
        <span className="font-medium text-gray-400 text-[.7rem]">{author}</span>
        <h1 className="text-orange-600 font-bold text-xl">${price}</h1>
      </div>
    </div>
  );
};

export default FeaturedBook;
