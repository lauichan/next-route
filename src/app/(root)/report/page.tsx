import { Todo } from "@/types/todos";

async function ReportPage() {
  const response = await fetch("http://localhost:3000/api/todos", {
    next: {
      revalidate: 5,
    },
  });
  const { data: todos }: { data: Todo[] } = await response.json();

  const totalCount = todos.length;
  const workingCount = todos.filter((todo) => todo.isDone === false).length;
  const doneCount = totalCount - workingCount;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>할일</th>
            <th>미완료</th>
            <th>완료</th>
            <th>전체</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>합계</td>
            <td>{workingCount}</td>
            <td>{doneCount}</td>
            <td>{totalCount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ReportPage;
