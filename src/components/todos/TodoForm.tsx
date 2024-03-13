import { useAddTodo } from "@/lib/todos/mutations";
import { FormEvent } from "react";

function TodoForm() {
  const { mutate: addTodo } = useAddTodo();

  const handleSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task, detail } = e.target as HTMLFormElement;

    const newTodo = {
      title: task.value,
      content: detail.value,
    };

    addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <input name="task" type="text" />
      <textarea name="detail" placeholder="내용"></textarea>
      <button>추가하기</button>
    </form>
  );
}

export default TodoForm;
