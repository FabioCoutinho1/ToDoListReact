import { useState, useEffect } from "react";
import Task from "./Task";

const BoxTasks = ({ tasks }) => {
  const tasksNoDone = tasks.filter((task) => !task.checkend);

  return (
    <div className="flex flex-col gap-1 mb-2 overflow-auto max-h-1/2">
      {tasksNoDone.map((task) => (
        <Task key={task.id} taskName={task.taskName} />
      ))}
    </div>
  );
};

export default BoxTasks;
