import TodoList from "@/components/todos/TodoList/TodoList";
import { Todo } from "@/types/todos";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Todos",
  description: "SSR로 구현한 투두리스트 R",
};

const fetchData = async (): Promise<Todo[]> => {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  return await response.json();
};

async function TodosSSRPage() {
  const todos = await fetchData();

  return (
    <>
      <Link href="/report">할일정보통계보러가기</Link>
      <TodoList todos={todos} />
    </>
  );
}

export default TodosSSRPage;
