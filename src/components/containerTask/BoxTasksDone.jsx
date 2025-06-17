import React from "react";
import Task from "./Task";

const BoxTasksDone = () => {
  return (
    <div className="flex flex-col gap-1 flex-1 mb-2 overflow-auto">
        <h1 className="text-white">Tarefas feitas</h1>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default BoxTasksDone;
