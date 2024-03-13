import { Todo } from "@/types/todos";
import styles from "./TodoList.module.css";

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <section>
      <ul className={styles.list}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}-{todo.content}
              <span>{todo.isDone ? "완료" : "미완료"}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
