"use client";
import { useDeleteTodo, useUpdateTodo } from "@/lib/todos/mutations";
import { Todo } from "@/types/todos";

function TodoItem({ todo }: { todo: Todo }) {
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleSwitchIsDone = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    updateTodo(updatedTodo);
  };

  const handleDeteleBtn = () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    deleteTodo(todo.id);
  };

  return (
    <li>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={handleSwitchIsDone}>
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button onClick={handleDeteleBtn}>삭제</button>
    </li>
  );
}

export default TodoItem;
