import { booksData } from "@/lib/fetchData";
import React from "react";
import FeaturedBook from "../Shared/FeaturedBook";

const Featured = async () => {
  const allBooks = await booksData();
  // console.log(allBooks);
  const popularity = allBooks.sort((a, b) => b.popularity - a.popularity);

  // console.log(popularity);
  return (
    <div className="mb-12 pt-14 pb-18 bg-[#F3EFEA]">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-[#2F3A3D]">Featured Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
          {popularity.slice(0, 4).map((book) => (
            <FeaturedBook key={book.id} book={book}></FeaturedBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
