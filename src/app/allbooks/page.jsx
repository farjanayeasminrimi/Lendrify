import { categoriesData } from "@/lib/fetchData";
import Link from "next/link";
import React from "react";

const AllBookPage = async () => {
  const categories = await categoriesData();
  console.log(categories);
  return (
    <div className="mb-12 pt-9 pb-18">
      <div className="container mx-auto">
        <h1 className=" text-4xl font-bold text-[#2F3A3D]">All Books</h1>

        <div className="grid grid-cols-5 gap-5 mt-12">
          {/* categories */}
          <div className="col-span-1 ">
            <div className="flex flex-col gap-4 text-center">
              {categories.map((category) => (
                <Link
                  className=" border border-[#2F3A3D]/35 rounded-xs p-2 text-[.8rem] font-medium text-[#2F3A3D] hover:bg-[#2F3A3D]/10"
                  href={`/allbooks/id`}
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          {/* books */}
          <div className="col-span-4 bg-amber-100">hello</div>
        </div>
      </div>
    </div>
  );
};

export default AllBookPage;
