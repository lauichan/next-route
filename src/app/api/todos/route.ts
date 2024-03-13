import { Todo } from "@/types/todos";

export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/todos");
  const todos: Todo[] = await response.json();

  if (!todos) {
    return new Response("Todo is not found", { status: 404 });
  }

  return Response.json({ data: [...todos] });
}

export async function POST(request: Request) {
  const { title, content } = await request.json();

  const response = await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ title, content, isDone: false }),
  });

  const todo = await response.json();

  return Response.json({ todo });
}
