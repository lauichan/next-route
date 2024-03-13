"use client";
import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import { useTodosQuery } from "@/lib/todos/query";
import { Todo } from "@/types/todos";
import { useRouter } from "next/navigation";

function TodosCSRPage() {
  const { data = [], isLoading } = useTodosQuery();

  const workingList: Todo[] = data.filter((todo) => !todo.isDone);
  const doneList: Todo[] = data.filter((todo) => todo.isDone);

  const router = useRouter();
  const goToReportPage = () => {
    router.push("/report");
  };

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <button onClick={goToReportPage}>할일정보통계보러가기</button>
      <TodoForm />
      <TodoList list={workingList} />
      <TodoList list={doneList} />
    </>
  );
}

export default TodosCSRPage;
