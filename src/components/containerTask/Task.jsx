import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineStarPurple500,
} from "react-icons/md";

const Task = () => {
  return (
    <div className="bg-gray-500 px-2 flex justify-between items-center gap-3.5">
      <MdCheckBoxOutlineBlank className="cursor-pointer" />
      <h3 className="flex-1">minha tarefa</h3>
      <MdOutlineStarPurple500 />
    </div>
  );
};

export default Task;
