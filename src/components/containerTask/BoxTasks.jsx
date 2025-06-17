import React from "react";
import Task from "./Task";

const BoxTasks = () => {
  return (
    <div className="flex flex-col gap-1 mb-2 overflow-auto max-h-1/2">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default BoxTasks;
