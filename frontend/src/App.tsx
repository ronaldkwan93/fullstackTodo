import { useEffect, useState } from "react";
import "./App.css";
import { getAllTodos, type Todo } from "./services/todos";
import Todos from "./pages/Todos";
import { getAllCategories, type Category } from "./services/categories";

function App() {
  const [todosData, setTodosData] = useState<Todo[]>([]);
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    getAllTodos().then(data => setTodosData(data));
    getAllCategories().then(data => setCategoriesData(data));
  },[])
  return (
    <>
      <Todos todosData={todosData} categoriesData={categoriesData}/>
    </>
  );
}

export default App;
