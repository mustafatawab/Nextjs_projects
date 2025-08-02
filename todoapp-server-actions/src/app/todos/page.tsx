"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodoType } from "../../../types";
import { GrStatusGood } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Modal from "@/components/modal";
import AddTodoButton from "@/components/addTodoButton";

const page =  () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:8000/todos");
      const data = await response.json();
      setTodoList(data);
    };

    fetchTodos();
  }, []);

  return (
    <main className="">
      <AddTodoButton todo={todoList[-1]}/>
      <Table className="my-5 max-w-5xl  mx-auto">
        <TableCaption>A list of your tasks here.</TableCaption>
        <TableHeader className="bg-gray-200 rounded-lg">
          <TableRow>
            <TableHead className="w-[150px]">TasK</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList &&
            todoList.map((todo: TodoType) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{todo.content}</TableCell>

                <TableCell className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <Tooltip>
                      <TooltipTrigger>
                        <GrStatusGood
                          className={`${
                            todo.is_completed
                              ? "text-green-500"
                              : "text-gray-500"
                          }`}
                          size={24}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Change the status to{" "}
                          {String(!todo.is_completed).toUpperCase()}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <Modal todo={todo} edit={true}>
                      <FaEdit size={24} className="text-blue-600" />
                    </Modal>
                    <Modal todo={todo}>
                      <MdDelete size={24} className="text-red-600" />
                    </Modal>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default page;
