import React from "react";
import Task from "./Task";
import { MdCheckCircle } from "react-icons/md";

const BoxTasksDone = ({ tasks }) => {
  const tasksDone = tasks.filter((task) => task.checkend);

  return (
    <div className="flex flex-col gap-1 flex-1 mb-2 overflow-auto">
      <h1 className="text-white">Tarefas feitas</h1>
      {tasksDone.map((task) => (
        <Task
          key={task.id}
          taskName={task.taskName}
          id={task.id}
          icon={MdCheckCircle}
          arrayTasks={tasks}
        />
      ))}
    </div>
  );
};

export default BoxTasksDone;
