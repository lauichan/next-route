export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type NewTodo = Pick<Todo, "title" | "content">;
