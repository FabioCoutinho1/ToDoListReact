import Task from "./Task";
import { MdOutlineCircle } from "react-icons/md";

const BoxTasks = ({ tasks }) => {
  const tasksNoDone = tasks.filter((task) => !task.checkend);

  return (
    <div className="flex flex-col gap-1 mb-2 overflow-auto max-h-1/2">
      {tasksNoDone.map((task) => (
        <Task
          key={task.id}
          taskName={task.taskName}
          id={task.id}
          icon={MdOutlineCircle}
          arrayTasks={tasks}
        />
      ))}
    </div>
  );
};

export default BoxTasks;
