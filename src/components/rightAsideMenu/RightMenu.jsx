import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import ViwerMoreOpitoinsTasks from "./ViwerMoreOpitoinsTasks";
import EditFormMenuRigth from "./editFormMenuRigth";
import { MdClose } from "react-icons/md";

const RightMenu = () => {
  const { getIdTask, setGetIdTask, tasks, toggleEdit, setToggleEdit } =
    useContext(TaskContext);

  const task = tasks.find((element) => element.id === getIdTask);
  const handleEdit = () => {
    setToggleEdit(false);
  };

  const closeRightMenu = () => {
    setGetIdTask(null);
  };

  return (
    <aside
      className={` 
        fixed top-0 right-0 h-full w-screen flex flex-col text-white
         bg-stone-900 transition-all duration-300   ${
           getIdTask ? "translate-x-0 " : "translate-x-full  "
         }`}
    >
      <div className="flex justify-end p-2">
        <MdClose
          className="text-2xl font-bold cursor-pointer"
          onClick={closeRightMenu}
        />
      </div>
      {toggleEdit ? (
        <ViwerMoreOpitoinsTasks task={task} handleEdit={handleEdit} />
      ) : (
        <EditFormMenuRigth task={task} toggleEdit={toggleEdit} />
      )}
    </aside>
  );
};

export default RightMenu;
