import { useState, useEffect } from "react";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";

const ContainerBoxTask = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className=" p-2 h-full flex flex-1 flex-col justify-between">
      <HeaderContainerTasks />
      <BoxTasks tasks={tasks} />
      <BoxTasksDone tasks={tasks} />
      <InputTasks onTaskCreate={fetchTask} />
    </div>
  );
};

export default ContainerBoxTask;
