import { useEffect, useState, useRef } from "react";
import { MdAdd } from "react-icons/md";

const InputTasks = ({ onTaskCreate }) => {
  const [task, setTask] = useState({});
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value);

    setTask({
      ...task,
      id: crypto.randomUUID(),
      [e.target.name]: e.target.value.trim(),
      checkend: false,
      favorit: false,
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.taskName || !task.taskName.trim()) {
      return alert("A tarefa precisa ter um nome");
    }

    try {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!res.ok) {
        throw new Error("Erro ao salvar a tarefa");
      }

      const data = await res.json();

      onTaskCreate();

      setInputValue("");
      inputRef.current.focus();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-stone-800 text-white"
    >
      <input
        className="flex-1 px-3 text-2xl py-2 border-none outline-none"
        type="text"
        name="taskName"
        id="taskName"
        ref={inputRef}
        value={inputValue}
        placeholder="Adicionar tarefa"
        onChange={handleChange}
      />
      <button className="cursor-pointer text-2xl px-1" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default InputTasks;
