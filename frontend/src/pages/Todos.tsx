import AddCategory from "../containers/category/AddCategory";
import type { Category } from "../services/categories";
import type { Todo } from "../services/todos";

interface TodosProps {
  todosData: Todo[];
  categoriesData: Category[];
}

const Todos = ({ todosData, categoriesData }: TodosProps) => {
  if (!todosData || !categoriesData) return <p>Loading..</p>;
  return (
    <div>
      <h3>Task Categories</h3>
      <AddCategory />
      {todosData.map((todo) => (
        <div key={todo.id}>
          <p>Task: {todo.title}</p>
        </div>
      ))}
      {categoriesData.map((category) => (
        <div key={category.id}>
          <p>Category: {category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
