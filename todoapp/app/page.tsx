"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Task 1", completed: false },
  ]);

  const onCLickHandler = (meraElement: any) => {
    console.log(`Mera Element ${meraElement}`);

    //map runs on array and return array
    const newTodos = todos.map((todo) => {
      if (todo.todoText === meraElement.todoText) {
        todo.completed = !todo.completed; //false hai to true kardo, other wise negative kardo
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("  ");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <div>
        To Do Application Using Next Js{" "}
        <a
          style={{ textDecoration: "none", color: "blueviolet" }}
          href="https://github.com/mustafatawab"
        >
          By Mustafa Tawab
        </a>
        <br />
        <br />
        <input
          type="text"
          placeholder="Add Todo Text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((element) => {
            return (
              <li
                key={element.todoText}
                style={{
                  color: element.completed ? "green" : "darkblue",
                  fontStyle: "oblique",

                  listStyle: "none",
                }}
              >
                <input
                  type="radio"
                  checked={element.completed}
                  onClick={() => {
                    onCLickHandler(element);
                  }}
                />
                {element.todoText}
                &nbsp;
                <button
                  onClick={() => {
                    deleteTodo(element);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
