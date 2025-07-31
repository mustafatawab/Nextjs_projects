'use client'
import { add_todo } from "@/actions/actions";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useActionState } from "react";
import { useEffect, useRef } from "react";
const AddTodo = () => {
  const ref = useRef<HTMLFormElement>(null);

  const { pending } = useFormStatus();

  const [state, formAction] = useActionState(add_todo, {
    status: "",
    message: "",
  });
  const { status, message } = state;

  useEffect(() => {
    if (status == "success") {
      ref.current?.reset();
      // toast.success(message)
    } else if (status == "error") {
      //toast.success(message)
    }
  }, [state]);

  return (
    <form
      ref={ref}
      action={formAction}
      className="flex flex-col justify-between items-center gap-x-4 w-full"
    >
      <input
        type="text"
        placeholder="Add Task"
        minLength={3}
        maxLength={54}
        name="add_task"
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
  );
};

export default AddTodo;
