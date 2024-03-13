import { Todo } from "@/types/todos";

async function TodosSSRPage() {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  const data: Todo[] = await response.json();

  return (
    <>
      <ul>
        {data.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}-{todo.content}
              <span>{todo.isDone ? "완료" : "미완료"}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodosSSRPage;
