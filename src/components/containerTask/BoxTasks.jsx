import { useState, useEffect } from "react";
import Task from "./Task";

const BoxTasks = ({ tasks }) => {
  const tasksNoDone = tasks.filter((task) => !task.checkend);
  const clickTask = (e) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-1 mb-2 overflow-auto max-h-1/2">
      {tasksNoDone.map((task) => (
        <Task key={task.id} taskName={task.taskName} id={task.id} />
      ))}
    </div>
  );
};

export default BoxTasks;
