import Books from "@/components/Shared/Books";
import CategoryList from "@/components/Shared/CategoryLinst";
import { categoriesData, categoryData } from "@/lib/fetchData";
import Link from "next/link";
import React from "react";

const AllBookPage = async ({ searchParams }) => {
  const categories = await categoriesData();
  const { category } = await searchParams;
  const categoryBooks = await categoryData(category);
  // console.log(categories);
  return (
    <div className="my-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-20">
          <h1 className=" text-4xl font-bold text-[#2F3A3D]">All Books</h1>
          <div className="flex-1 ">
            <label className="input w-full rounded-4xl outline-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-12">
          {/* categories */}
          {/* <div className="col-span-1 ">
            <div className="flex flex-col gap-4 text-center">
              <Link href={`?id=${category.id}`}>All Books</Link>
              {categories.map((category) => (
                <Link
                  href={`?id=${category.id}`}
                  className=" border border-[#2F3A3D]/35 rounded-xs p-2 text-[.8rem] font-medium text-[#2F3A3D] hover:bg-[#2F3A3D]/10"
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div> */}

          {/* another way */}
          <CategoryList categories={categories}></CategoryList>
          {/* books */}
          <div className="col-span-4 ">
            <Books categoryBooks={categoryBooks}></Books>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookPage;
