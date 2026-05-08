import Books from "@/components/Shared/Books";
import CategoryList from "@/components/Shared/CategoryLinst";
import Search from "@/components/Shared/Search";
import { booksData, categoriesData, categoryData, searchBookData } from "@/lib/fetchData";
import Link from "next/link";
import React from "react";

const AllBookPage = async ({ searchParams }) => {
  const categories = await categoriesData();
  const { category, search } = await searchParams;
  console.log(category, "category");
  const categoryBooks = await categoryData(category);
  // console.log(search);
  const searchBooksData = await searchBookData(search, categoryBooks);
  // console.log(searchBooksData);

  const allBooks = await booksData();
  return (
    <div className="my-12 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20">
          <h1 className=" text-4xl font-bold text-[#2F3A3D]">All Books</h1>
          <Search allBooks={allBooks}></Search>
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
          <div className="col-span-5 md:col-span-4 ">
            <Books categoryBooks={searchBooksData}></Books>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookPage;
