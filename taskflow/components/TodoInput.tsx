"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Loader2 } from "lucide-react";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";
import { useCreateTasks } from "@/hooks/useTodos";

const TodoInput = () => {
  const [text, setText] = useState("");
  const createTasks = useCreateTasks();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      toast.error("Task title cannot be empty");
      return;
    }

    try {
      await createTasks.mutateAsync(text);
      toast.success("Task created successfully");
      setText("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }

    // try {
    //   const res = await fetch("/api/tasks", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ title: text }),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   toast.success(data.message);
    //   setText("");
    // } catch (error) {
    //   if (error instanceof Error) {
    //     toast.error(error.message);
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // }
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="h-12 flex-1 rounded-xl border-border bg-card px-4 text-base shadow-soft transition-smooth placeholder:text-muted-foreground focus-visible:shadow-glow focus-visible:ring-primary"
      />
      <Button
        type="submit"
        size="lg"
        disabled={createTasks.isPending}
        className="h-12 w-12 shrink-0 rounded-xl gradient-warm shadow-soft transition-smooth hover:shadow-glow"
      >
        {createTasks.isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Plus className="h-5 w-5" />
        )}
      </Button>
    </form>
  );
};

export default TodoInput;
