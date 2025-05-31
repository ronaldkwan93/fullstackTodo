import { useEffect, useState } from "react";
import "./App.css";
import { getAllTodos, type Todo } from "./services/todos";
import Todos from "./pages/Todos";

function App() {
  const [todosData, setTodosData] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos().then(data => setTodosData(data));
  },[])
  return (
    <>
      <Todos data={todosData}/>
    </>
  );
}

export default App;
