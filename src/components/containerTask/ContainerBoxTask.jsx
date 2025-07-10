import { useEffect } from "react";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const ContainerBoxTask = () => {
  const { tasks, fetchTask, toggleLeftMenu } = useContext(TaskContext);

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className={` p-2 h-full flex flex-1 flex-col justify-between   ${toggleLeftMenu && "blur-sm bg-stone-950/60 z-40"} `}>
      <HeaderContainerTasks />
      <BoxTasks tasks={tasks} />
      <BoxTasksDone tasks={tasks} />
      <InputTasks onTaskCreate={fetchTask} />
    </div>
  );
};

export default ContainerBoxTask;
