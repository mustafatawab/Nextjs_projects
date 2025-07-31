import React from "react";
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
import { Button } from "@/components/ui/button";
import Modal from "@/components/modal";

const page = () => {
  const todo_list: TodoType[] = [
    {
      id: 1,
      content: "First Task",
      is_completed: false,
    },

    {
      id: 2,
      content: "Hello",
      is_completed: true,
    },
  ];
  return (
    <main className="">
      <div className="mt-10 max-w-5xl mx-auto">
        <Modal add={true}>
          <Button variant="outline" className="w-full bg-teal-600 text-white">
            Add Task
          </Button>
        </Modal>
      </div>
      <Table className="my-5 max-w-5xl  mx-auto">
        <TableCaption>A list of your tasks here.</TableCaption>
        <TableHeader className="bg-gray-200 rounded-lg">
          <TableRow>
            <TableHead className="w-[150px]">TasK</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todo_list.map((todo: TodoType) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.content}</TableCell>

              <TableCell className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  <Tooltip>
                    <TooltipTrigger>
                      <GrStatusGood
                        className={`${
                          todo.is_completed ? "text-green-500" : "text-gray-500"
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
                  <Modal edit={true}>
                    <FaEdit size={24} className="text-blue-600" />
                  </Modal>
                  <Modal>

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
