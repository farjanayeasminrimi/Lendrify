import { booksData } from "@/lib/fetchData";
import React from "react";

const Featured = async () => {
  const allBooks = await booksData();
  // console.log(allBooks);
  const popularity = allBooks.sort((a, b) => b.popularity - a.popularity);

  console.log(popularity);
  return (
    <div>
      <h1>Featured</h1>
      {popularity.slice(0, 4).map((i) => (
        <div key={i.id}>{i.title}</div>
      ))}
    </div>
  );
};

export default Featured;
