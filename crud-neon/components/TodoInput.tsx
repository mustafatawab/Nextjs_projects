import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react';

const TodoInput = () => {
    const [text , setText] = useState('')

    const handleSubmit = async () => {
        console.log("----- Submitting -----")

    }
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
        className="h-12 w-12 shrink-0 rounded-xl gradient-warm shadow-soft transition-smooth hover:shadow-glow"
      >
        <Plus className="h-5 w-5" />
        <span className="sr-only">Add task</span>
      </Button>
    </form>
  )
}

export default TodoInput