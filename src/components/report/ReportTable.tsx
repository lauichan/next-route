import { Todo } from "@/types/todos";
import styles from "./ReportTable.module.css";

async function ReportTable() {
  const response = await fetch("http://localhost:4000/todos", {
    next: {
      revalidate: 10,
    },
  });
  const todos: Todo[] = await response.json();

  const totalCount = todos.length;
  const workingCount = todos.filter((todo) => !todo.isDone).length;
  const doneCount = totalCount - workingCount;

  return (
    <table className={styles.table}>
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
  );
}

export default ReportTable;
