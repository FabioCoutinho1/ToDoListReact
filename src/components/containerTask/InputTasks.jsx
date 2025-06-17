import React from "react";
import { MdAdd } from "react-icons/md";

const InputTasks = () => {
  return (
    <form className="flex items-center bg-gray-500 text-white">
      <input
        className="flex-1 px-3 py-1 border-none outline-none"
        type="text"
        placeholder="Adicionar tarefa"
      />
      <button className="cursor-pointer text-2xl px-1" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default InputTasks;
