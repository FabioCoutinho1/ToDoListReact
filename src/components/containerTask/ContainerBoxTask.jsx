import React from "react";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";

const ContainerBoxTask = () => {
  return (
    <div className=" p-2 h-full flex flex-col justify-between">
      <BoxTasks />
      <BoxTasksDone/>
      <InputTasks />
    </div>
  );
};

export default ContainerBoxTask;
