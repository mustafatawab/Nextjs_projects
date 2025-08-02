"use server";

import { revalidatePath } from "next/cache";
import { TodoType } from "../../types";

export async function add_todo(
  state: { status: string; message: string },
  formData: FormData
) {
  const new_todo = formData.get("add_task") as string;

  try {
    const response = await fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: new_todo }),
    });
    const data = await response.json();
    revalidatePath("/todos");
    if (data.content) {
      return { status: "Success", message: "Task added successfully" };
    } else {
      return { status: "error", message: "Something went wrong" };
    }
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function edit_todo(
  state: { status: string; message: string },
  {
    id,
    content,
    is_completed,
  }: { id: number; content: string; is_completed: boolean }
) {
  try {
    const response = await fetch("http://localhost:8000/todos/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        content: content,
        is_completed: is_completed,
      }),
    });

    const data = await response.json();
    revalidatePath("/todos");
    if (data.content) {
      return { status: "Success", message: "Task added successfully" };
    } else {
      return { status: "error", message: "Something went wrong" };
    }
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function status_change(
  id: number,
  content: string,
  is_completed: boolean
) {
  try {
    const response = await fetch(`http://localhost:8000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        content: content,
        id_completed: !is_completed,
      }),
    });
    const data = await response.json();

    revalidatePath("/todos");
    return { status: "success", message: "Status Changed Successfully !! " };
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function delete_todo(id: number) {
  try {
    const response = await fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidatePath("/todos");
    return { status: "success", message: "Deleted Successfully !! " };
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}
