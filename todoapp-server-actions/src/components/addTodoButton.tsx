import React from "react";
import Modal from "./modal";
import { Button } from "./ui/button";
import { TodoType } from "../../types";
const AddTodoButton = ({todo} : {todo : TodoType}) => {
  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <Modal todo={todo} add={true}>
        <Button variant="outline" className="w-full bg-teal-600 text-white">
          Add Task
        </Button>
      </Modal>
    </div>
  );
};

export default AddTodoButton;
