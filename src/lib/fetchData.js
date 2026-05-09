export const booksData = async () => {
  const res = await fetch(
    "https://lendrify-ba2g24git-farjanayeasminrimis-projects.vercel.app/data/data.json",
  );
  const data = await res.json();
  return data.books;
};
export const categoriesData = async () => {
  const res = await fetch(
    "https://lendrify-ba2g24git-farjanayeasminrimis-projects.vercel.app/data/data.json",
  );
  const data = await res.json();
  return data.categories;
};
export const categoryData = async (slug = "all") => {
  const res = await fetch(
    "https://lendrify-ba2g24git-farjanayeasminrimis-projects.vercel.app/data/data.json",
  );
  const data = await res.json();
  // console.log(slug);
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
  const res = await fetch(
    "https://lendrify-ba2g24git-farjanayeasminrimis-projects.vercel.app/data/data.json",
  );
  const data = await res.json();
  const detailsData = data.books.find((i) => i.id === parseInt(id));
  return detailsData;
};
