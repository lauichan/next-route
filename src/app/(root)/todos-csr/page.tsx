"use client";

import TodoCards from "@/components/todos/TodoCards/TodoCards";
import TodoForm from "@/components/todos/TodoForm/TodoForm";
import { useTodosQuery } from "@/lib/todos/query";
import { Todo } from "@/types/todos";
import { useRouter } from "next/navigation";

function TodosCSRPage() {
  const { data = [], isLoading, isError, error } = useTodosQuery();

  const workingList: Todo[] = data.filter((todo) => !todo.isDone);
  const doneList: Todo[] = data.filter((todo) => todo.isDone);

  const router = useRouter();
  const goToReportPage = () => {
    router.push("/report");
  };

  if (isLoading) return <div>로딩중...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <button onClick={goToReportPage}>할일정보통계보러가기</button>
      <TodoForm />
      <TodoCards title="진행중" list={workingList} />
      <TodoCards title="완료" list={doneList} />
    </>
  );
}

export default TodosCSRPage;
