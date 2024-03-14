import { queryClient } from "@/app/provider";
import { NewTodo, Todo } from "@/types/todos";
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query.keys";
import { API_ENDPOINT } from "./query";

export const useAddTodo = () => {
  return useMutation({
    mutationFn: async (data: NewTodo) => {
      return await fetch(`${API_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS] });
    },
  });
};

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: async (data: Todo) => {
      return await fetch(`${API_ENDPOINT}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS] });
    },
  });
};

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: async (id: Todo["id"]) => {
      return await fetch(`${API_ENDPOINT}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS] });
    },
  });
};
