import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import ViwerMoreOpitoinsTasks from "./ViwerMoreOpitoinsTasks";
import EditFormMenuRigth from "./editFormMenuRigth";

const RightMenu = () => {
  const [toggleEdit, setToggleEditInput] = useState(true);
  const { getIdTask, tasks } = useContext(TaskContext);

  const task = tasks.find((element) => element.id === getIdTask);
  const handleEdit = () => {
    setToggleEditInput(false);
  };

  if (!getIdTask) return null;

  return (
    <aside className="text-white flex flex-col bg-stone-900 p-2 min-w-2xs">
      {toggleEdit ? (
        <ViwerMoreOpitoinsTasks task={task} handleEdit={handleEdit} />
      ) : (
        <EditFormMenuRigth />
      )}
    </aside>
  );
};

export default RightMenu;
