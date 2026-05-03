export const booksData = async () => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  return data;
};
