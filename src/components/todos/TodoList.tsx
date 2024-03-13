import { Todo } from "@/types/todos";
import TodoItem from "./TodoItem";

function TodoList({ list }: { list: Todo[] }) {
  return (
    <section>
      <ul>
        {list.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
