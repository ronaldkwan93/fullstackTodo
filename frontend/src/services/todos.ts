export interface Todo {
    id: number;
    title: string;
}

export const getAllTodos = async () => {
    const response = await fetch("http://localhost:8080/todos");
    if(!response.ok) {
        throw new Error("Failed to fetch todo data")
    }
    console.log(response);
}