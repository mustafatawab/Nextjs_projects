import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import AddTodo from "./addTodo";
import EditTodo from "./editTodo";
import { TodoType } from "../../types";

const Modal = ({
  children,
  add,
  edit,
}: {
  children: React.ReactNode;
  add?: boolean;
  edit?: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {edit || add ? (
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>
                Please fill the field to {add ? "add" : "edit"} your task.
              </DialogDescription>
            </DialogHeader>

            {add && <AddTodo />}
            {edit && <EditTodo />}
          </DialogContent>
        </form>
      ) : (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
          </DialogHeader>
          Are you sure you want to delete ?
          <DialogFooter>
            <Button variant="outline">No</Button>
            <Button variant="outline" className="bg-red-500 text-white">
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Modal;
