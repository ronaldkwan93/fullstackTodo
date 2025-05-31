export interface Todo {
    id: number;
    title: string;
}

export const getAllTodos = async (): Promise<Todo[]> => {
    const response = await fetch("http://localhost:8080/todos");
    if(!response.ok) {
        throw new Error("Failed to fetch todo data")
    }
    // console.log(response);
    const result = await response.json();
    console.log(result, "todo results");
    return result;
}