import React from 'react'
import { AnimatePresence} from 'framer-motion'
import { CheckCircle2 } from 'lucide-react';
import { TodoItem } from './TodoItem';
const TodoList = () => {
    const todos: any = []
  return (
   <div className="flex flex-col gap-3">
      <AnimatePresence mode="popLayout">
        {todos.map((todo: any) => (
          <TodoItem
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default TodoList