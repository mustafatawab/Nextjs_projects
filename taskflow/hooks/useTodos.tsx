import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const fetchTasks = async () => {
  try {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    console.log("Fetched todos:", data.tasks);
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

const createTasks = async (text: string) => {
  try {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text }),
    });
    const data = await res.json();
    console.log("Created task:", data);
    return data;
  } catch (error) {
    throw new Error("Failed to create task");
  }
};

const deleteTask = async (id: string) => {
  try {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("Deleted task:", data);
    return data;
  } catch (error) {
    throw new Error("Failed to delete task");
  }
};

const completeTask = async (id: string) => {
  try {
    const res = await fetch(`/api/tasks/${id}/completed`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("Completed task:", data);
    return data;
  } catch (error) {
    throw new Error("Failed to complete task");
  }
};

export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}

export function useCreateTasks() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => createTasks(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useCompleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => completeTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
