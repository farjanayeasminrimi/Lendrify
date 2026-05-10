import path from "path";
import fs from "fs";

const urlMaker = (fileName) => {
  const filePath = path.join(process.cwd(), "public", fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data;
};
export const booksData = async () => {
  // const res = await fetch("http://localhost:3000/data/data.json");
  // const data = await res.json();
  // return data.books;

  const books = urlMaker("data.json");
  return books.books;
};
export const categoriesData = async () => {
  // const res = await fetch("http://localhost:3000/data/data.json");
  // const data = await res.json();
  const data = urlMaker("data.json");
  return data.categories;
};
export const categoryData = async (slug = "all") => {
  // const res = await fetch("http://localhost:3000/data/data.json");
  // const data = await res.json();
  // console.log(slug);

  const data = urlMaker("data.json");
  if (slug === "all") {
    return data.books;
  }
  const selectedCategory = data.categories?.find((i) => i.slug === slug);
  return selectedCategory?.books;
};
export const searchBookData = async (query = "", categoryBooks = []) => {
  if (!query || query.trim() === "") {
    return categoryBooks;
  }

  const lowerQuery = query.toLowerCase();

  return categoryBooks.filter(
    (book) =>
      book.title?.toLowerCase().includes(lowerQuery) ||
      book.author?.toLowerCase().includes(lowerQuery),
  );
};

export const booksDetailsData = async (id) => {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();
  const detailsData = data.books.find((i) => i.id === parseInt(id));
  return detailsData;
};
