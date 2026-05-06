"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const selectedPath = searchParams.get("search");
  const search = (e) => {
    const searchName = e.target.value.toLowerCase();
    const category = searchParams.get("category"); // get existing category

    const params = new URLSearchParams();
    if (category) params.set("category", category); // keep it
    if (searchName) params.set("search", searchName);

    router.push(`/allbooks?${params.toString()}`);
  };

  return (
    <div className="flex-1 ">
      <label className="input w-full rounded-4xl outline-none">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
        <input onChange={search} type="search" required placeholder="Search" defaultValue={""} />
      </label>
    </div>
  );
};

export default Search;
