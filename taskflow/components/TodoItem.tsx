import { motion } from "framer-motion";
import { Check, Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCompleteTask, useDeleteTask } from "@/hooks/useTodos";
import toast from "react-hot-toast";

export function TodoItem({
  todo,
}: {
  todo: { id: string; title: string; completed: boolean };
}) {
  const deleteTask = useDeleteTask();
  const completeTask = useCompleteTask();

  const isLoading = completeTask.isPending || deleteTask.isPending;

  const handleDelete = async () => {
    try {
      await deleteTask.mutateAsync(todo.id);
      toast.success("Task deleted successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const handleToggleComplete = async () => {
    try {
      await completeTask.mutateAsync(todo.id);
      toast.success(
        `Task marked as ${!todo.completed ? "completed" : "incomplete"}`
      );
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group flex items-center gap-4 rounded-xl bg-card p-4 shadow-soft transition-smooth hover:shadow-glow"
    >
      <button
        onClick={handleToggleComplete}
        disabled={isLoading || todo.completed}
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-smooth cursor-pointer",
          todo.completed
            ? "border-accent bg-accent"
            : "border-muted-foreground/30 hover:border-primary"
        )}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {completeTask.isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          todo.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check
                className="h-3.5 w-3.5 text-accent-foreground"
                strokeWidth={3}
              />
            </motion.div>
          )
        )}
      </button>

      <span
        className={cn(
          "flex-1 text-base transition-smooth",
          todo.completed
            ? "text-muted-foreground line-through"
            : "text-foreground"
        )}
      >
        {todo.title}
      </span>

      <button
        onClick={handleDelete}
        className="opacity-0 transition-smooth group-hover:opacity-100 hover:text-destructive"
        aria-label="Delete task"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        ) : (
          <Trash2 className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </motion.div>
  );
}
