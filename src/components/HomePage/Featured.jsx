import { booksData } from "@/lib/fetchData";
import React from "react";

const Featured = async () => {
  const allBooks = await booksData();
  console.log(allBooks);
  return <div></div>;
};

export default Featured;
