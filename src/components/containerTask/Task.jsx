import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Task = ({ taskName, id, icon: Icon, arrayTasks }) => {
  const { setGetIdTask } = useContext(TaskContext);
  const { fetchTask } = useContext(TaskContext);

  const handleClick = () => {
    setGetIdTask(id);
  };

  const checkTask = async (e) => {
    e.stopPropagation();

    const task = arrayTasks.find((element) => element.id === id);
    console.log(task);
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Contente-Type": "application/json",
        },
        body: JSON.stringify({ ...task, checkend: !task.checkend }),
      });
      fetchTask();
    } catch (erro) {
      console.error(erro);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-stone-800 text-white cursor-pointer hover:bg-stone-700 py-1.5 px-2 flex justify-between items-center gap-3.5"
    >
      <button onClick={checkTask}>
        <Icon className="cursor-pointer text-2xl" />
      </button>
      <h3 className="flex-1 text-[18px] flex items-center">{taskName}</h3>
      <button>
        <MdOutlineStarPurple500 className="cursor-pointer text-2xl text-gray-400" />
      </button>
    </div>
  );
};

export default Task;
