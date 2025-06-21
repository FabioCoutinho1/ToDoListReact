import { useState } from "react";
import { MdAdd } from "react-icons/md";
import postForTask from "../../api/postForTask";

const InputTasks = () => {
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      id: crypto.randomUUID(),
      [e.target.name]: e.target.value.trim(),
      checkend: false,
      favorit: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.taskName || !inputValue.taskName.trim()) {
      return alert("A tarefa precisa ter um nome");
    }

    postForTask(inputValue);
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
