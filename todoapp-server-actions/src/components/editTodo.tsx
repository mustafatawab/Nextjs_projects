'use client'
import { edit_todo } from '@/actions/actions'
import React from 'react'
import { TodoType } from '../../types'
import { useFormStatus, useFormState } from 'react-dom'
import { useActionState } from 'react'
const EditTodo = ({todo} : {todo : TodoType}) => {
    const {pending} = useFormStatus()

    const [state , formAction] = useActionState(edit_todo, {status : "" , message : ""})
    const {status , message} = state

    const handleFormSubmit = (formData: FormData) => {
        const id: number = todo.id
        const content: string = formData.get("edit_task") as string
        const is_completed: boolean = todo.is_completed
        formAction({id , content , is_completed})
    }

  return (
    <form
      action={handleFormSubmit}
      className="flex flex-col justify-between items-center gap-x-4 w-full"
    >
      <input
        type="text"
        placeholder="Edit Task"
        minLength={3}
        maxLength={54}
        name="edit_task"
        className="w-full px-2 py-1 border border-gray-100 rounded-md"
        required
        
      />
      <button
        disabled={pending}
        className="px-2 py-1 bg-teal-600 text-white rounded-md w-full mt-4"
      >
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  )
}

export default EditTodo