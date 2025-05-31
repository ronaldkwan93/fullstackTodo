import { useEffect } from "react"
import { getAllTodos } from "../services/todos"

const Todo = () => {
    useEffect(() => {
        getAllTodos();
    },[])
  return (
    <div>
        Todo page
    </div>
  )
}

export default Todo
