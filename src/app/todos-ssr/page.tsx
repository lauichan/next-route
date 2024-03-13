type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const fetchData = async () => {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  const data: Todo[] = await response.json();
  return data;
};

async function TodosSSRPage() {
  const data = await fetchData();

  return (
    <>
      <ul>
        {data.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}-{todo.content}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodosSSRPage;
