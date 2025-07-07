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

  if (!getIdTask) return null;

  return (
    <aside className="text-white flex flex-col bg-stone-900 p-2 min-w-2xs">
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
