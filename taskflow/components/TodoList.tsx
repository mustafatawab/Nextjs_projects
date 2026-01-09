"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { TodoItem } from "./TodoItem";
import { useTasks } from "@/hooks/useTodos";
import toast from "react-hot-toast";

const TodoList = () => {
  // const [todos, setTodos] = useState([]);
  const { data, isLoading, isError } = useTasks();

  if (isLoading)
    return (
      <span className="flex justify-center items-center gap-2">
        <span className="text-center h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Loading Tasks
      </span>
    );
  if (isError)
    return (
      <span className="flex justify-center items-center gap-2">
        <span className="text-red-600 text-center h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Failed To Load Tasks
      </span>
    );

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const res = await fetch('/api/tasks');
  //       const data = await res.json();
  //       setTodos(data.tasks);
  //       console.log('Fetched todos:', data.tasks);
  //     } catch (error) {
  //       console.error('Error fetching todos:', error);
  //     }
  //   };

  //   fetchTodos();
  // }, []);

  return (
    <div className="flex flex-col gap-3">
      <AnimatePresence mode="popLayout">
        {data.tasks.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
