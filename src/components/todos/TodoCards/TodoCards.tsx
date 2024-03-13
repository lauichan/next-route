import { Todo } from "@/types/todos";

import styles from "./TodoCards.module.css";
import TodoItem from "../TodoItem/TodoItem";

type TodoListType = {
  title: string;
  list: Todo[];
};

function TodoCards({ title, list }: TodoListType) {
  return (
    <section>
      <h2 title={title}></h2>
      <ul className={styles.cards}>
        {list.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoCards;
