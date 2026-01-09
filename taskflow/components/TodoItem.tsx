import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';



export function TodoItem() {
    const todo = {
        completed : false,
        text : ""
    }
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group flex items-center gap-4 rounded-xl bg-card p-4 shadow-soft transition-smooth hover:shadow-glow"
    >
      <button
        className={cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-smooth',
          todo.completed
            ? 'border-accent bg-accent'
            : 'border-muted-foreground/30 hover:border-primary'
        )}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <Check className="h-3.5 w-3.5 text-accent-foreground" strokeWidth={3} />
          </motion.div>
        )}
      </button>

      <span
        className={cn(
          'flex-1 text-base transition-smooth',
          todo.completed
            ? 'text-muted-foreground line-through'
            : 'text-foreground'
        )}
      >
        {todo.text}
      </span>

      <button
        className="opacity-0 transition-smooth group-hover:opacity-100 hover:text-destructive"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4 text-muted-foreground" />
      </button>
    </motion.div>
  );
}
