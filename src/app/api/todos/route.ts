import { NewTodo, Todo } from "@/types/todos";

const ENDPOINT = "http://localhost:4000/todos";

export async function GET(request: Request) {
  const response = await fetch(`${ENDPOINT}`);
  const todos: Todo[] = await response.json();

  if (!todos) {
    return new Response("Todo is not found", { status: 404 });
  }

  return Response.json({ data: [...todos] });
}

export async function POST(request: Request) {
  const { title, content }: NewTodo = await request.json();

  const response = await fetch(`${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, isDone: false }),
  });

  const todo = await response.json();

  return Response.json({ todo });
}

export async function PATCH(request: Request) {
  const updated: Todo = await request.json();

  const response = await fetch(`${ENDPOINT}/${updated.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updated),
  });

  const todo = await response.json();

  return Response.json({ todo });
}

export async function DELETE(request: Request) {
  const id: Todo["id"] = await request.json();

  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  const todo = await response.json();

  return Response.json({ todo });
}
