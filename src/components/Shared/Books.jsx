import React from "react";
import Book from "./Book";

const Books = ({ categoryBooks }) => {
  console.log(categoryBooks);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {categoryBooks?.map((book, index) => (
        <Book key={index} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
