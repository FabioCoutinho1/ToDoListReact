import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import ViwerMoreOpitoinsTasks from "./ViwerMoreOpitoinsTasks";
import EditFormMenuRigth from "./editFormMenuRigth";

const RightMenu = () => {
  const { getIdTask, tasks, toggleEdit, setToggleEdit } =
    useContext(TaskContext);

  const task = tasks.find((element) => element.id === getIdTask);
  const handleEdit = () => {
    setToggleEdit(false);
  };

  return (
    <aside
      className={` 
        fixed top-0 right-0 h-full w-screen flex flex-col text-white 
        p-2 bg-stone-900 transition-all duration-300 sm:w-64   ${
          getIdTask ? "translate-x-0 " : "translate-x-full  "
        }`}
    >
      <div className="flex justify-end p-2"></div>
      {toggleEdit ? (
        <ViwerMoreOpitoinsTasks task={task} handleEdit={handleEdit} />
      ) : (
        <EditFormMenuRigth task={task} toggleEdit={toggleEdit} />
      )}
    </aside>
  );
};

export default RightMenu;
