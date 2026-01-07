'use client'
import ContactForm from "@/components/form";
import DataTable from "@/components/formdata";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";


const Home = () => {
  return (
    <div className="min-h-screen gradient-subtle mt-20">
      <div className="container mx-auto max-w-xl px-4 py-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Stay organized
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Taskflow
          </h1>
          <p className="mt-2 text-muted-foreground">
            Simple, beautiful task management
          </p>
        </motion.header>

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {/* <TodoInput onAdd={addTodo} /> */}

          {/* <div className="flex flex-wrap items-center justify-between gap-4">
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />

            {counts.completed > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCompleted}
                className="text-muted-foreground hover:text-destructive"
              >
                Clear completed
              </Button>
            )}
          </div> */}

          {/* <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          /> */}
        </motion.main>
      </div>
    </div>
  );
};

export default Home;
