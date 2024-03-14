"use client";
import { Todo } from "@/types/todos";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query.keys";

export const API_ENDPOINT = "http://localhost:3000/api/todos";

export const useTodosQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS],
    queryFn: async () => {
      const response = await fetch(`${API_ENDPOINT}`);
      const { data }: { data: Todo[] } = await response.json();
      return data;
    },
  });
};
