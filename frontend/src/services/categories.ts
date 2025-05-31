export interface Category {
  id: number;
  title: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch("http://localhost:8080/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch category data");
  }
  // console.log(response);
  const result = await response.json();
  console.log(result, "category results");
  return result;
};
