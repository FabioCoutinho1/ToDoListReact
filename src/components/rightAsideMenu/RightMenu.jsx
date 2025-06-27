import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import Task from "../containerTask/Task";
import Button from "../layouts/Button";

const RightMenu = () => {
  const { getIdTask } = useContext(TaskContext);

  const [task, setTask] = useState(null);

  const getTaskForId = async () => {
    const res = await fetch(`http://localhost:3000/tasks/${getIdTask}`);
    const data = await res.json();
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getIdTask ? getTaskForId() : setTask(null);
  }, [getIdTask]);

  if (!getIdTask) return null;

  return (
    <aside className="text-white flex flex-col bg-stone-900 p-2 min-w-2xs">
      {/* <h1 className="text-3xl font-bold text-center my-6">minha tarefa</h1> */}
      {task ? (
        <Task taskName={task.taskName} id={task.id} />
      ) : (
        <p>Carregando</p>
      )}

      <div className="flex flex-col gap-2  mt-2">
        <Button icon={MdOutlineDelete} label={"Apagar"} />
        <Button icon={MdOutlineEdit} label={"Editar"} />
      </div>
    </aside>
  );
};

export default RightMenu;
