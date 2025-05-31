export interface Category {
  id: number | null;
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

export const addCategory = async (category: Category): Promise<Category> => {
  const response = await fetch("http://localhost:8080/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });

  if (!response.ok) {
    throw new Error("Failed to add category");
  }
  const result = await response.json();
  console.log(result, "added to category!");
  return result;
};
