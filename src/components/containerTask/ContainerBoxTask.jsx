import { useState, useEffect } from "react";
import fetchTask from "../../api/fetch";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";

const ContainerBoxTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTask().then((res) => setTasks(res));
  }, []);

  return (
    <div className=" p-2 h-full flex flex-1 flex-col justify-between">
      <HeaderContainerTasks />
      <BoxTasks tasks={tasks} />
      <BoxTasksDone tasks={tasks} />
      <InputTasks />
    </div>
  );
};

export default ContainerBoxTask;
