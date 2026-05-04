import { booksData } from "@/lib/fetchData";
import React from "react";
import LatestBook from "../Shared/LatestBook";
import Image from "next/image";
import popular from "@/assets/popular.jpg";

const Latest = async () => {
  const allBooks = await booksData();
  // console.log(allBooks);
  const latestRelease = allBooks.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date),
  );

  console.log(latestRelease);
  return (
    <div>
      <div className="container mx-auto mt-20 ">
        <h1 className="text-center text-4xl font-bold text-[#2F3A3D]">Latest Books</h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
              {latestRelease.slice(0, 8).map((book) => (
                <LatestBook key={book.id} book={book}></LatestBook>
              ))}
            </div>
          </div>
          <div className="col-span-2 flex justify-end">
            <Image
              className="rounded-2xl"
              src={popular}
              width={400}
              height={800}
              alt="popular"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
