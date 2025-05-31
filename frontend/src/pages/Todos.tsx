import type { Todo } from "../services/todos";

interface TodosProps {
  data: Todo[];
}

const Todos = ({ data }: TodosProps) => {
  if (!data) return <p>Loading..</p>;
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
