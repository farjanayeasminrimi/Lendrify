"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryList({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");
  // console.log(selectedCategory);

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category === "all") {
      params.delete("category");
      // params.set("category", "all");
    } else {
      params.set("category", category);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="col-span-5 md:col-span-2 lg:col-span-1">
      <ul className="flex flex-col gap-4 text-center">
        <li
          onClick={() => handleCategoryClick("all")}
          className={`border border-[#2F3A3D]/35 rounded-xs p-2 text-[.8rem] font-medium text-[#2F3A3D] hover:bg-[#2F3A3D]/10 ${!selectedCategory ? "bg-[#2F3A3D]/20" : ""}`}
        >
          All Books
        </li>

        {categories?.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className={` border border-[#2F3A3D]/35 rounded-xs p-2 text-[.8rem] font-medium text-[#2F3A3D] hover:bg-[#2F3A3D]/10 ${
              selectedCategory === category.slug ? "bg-[#2F3A3D]/20" : ""
            }`}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
