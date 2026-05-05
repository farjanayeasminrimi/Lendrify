export const booksData = async () => {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();
  return data.books;
};
export const categoriesData = async () => {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();
  return data.categories;
};
export const categoryData = async (slug) => {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();
  // console.log(slug);
  const selectedCategory = data.categories?.find((i) => i.slug === slug);
  return selectedCategory?.books;
};
