import AddCategory from "../containers/category/AddCategory";
import type { Category } from "../services/categories";
import type { Todo } from "../services/todos";

interface TodosProps {
  todosData: Todo[];
  categoriesData: Category[];
}

const Todos = ({ todosData, categoriesData }: TodosProps) => {
  if (!todosData || !categoriesData) return <p>Loading..</p>;
  console.log(categoriesData, "categories");
  const catList = [];
  for (let i = 0; i < categoriesData.length; i++) {
    catList.push(categoriesData[i].title);
    if (i === categoriesData.length - 1) {
      break;
    }
    catList.push(", ");
  }
  console.log(catList);


  return (
    <div>
      <h3>Task Categories</h3>
      <p>{catList}</p>
      <AddCategory />
      <select>
        {categoriesData.map((option)=> (
          <option key={option.id}>{option.title}</option>
        ))}
      </select>

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
