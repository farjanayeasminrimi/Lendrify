import { categoryData } from "@/lib/fetchData";
import React from "react";

const CategoryBooks = async ({ searchParams }) => {
  const { category } = await searchParams;
  const book = await categoryData(category);
  console.log(book);
  return <div>categories books</div>;
};

export default CategoryBooks;
