import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import Task from "../containerTask/Task";
import Button from "../layouts/Button";
const RightMenu = () => {
  return (
    <aside className="text-white flex flex-col bg-stone-900 p-2 min-w-2xs">
      {/* <h1 className="text-3xl font-bold text-center my-6">minha tarefa</h1> */}
      <Task />

      <div className="flex flex-col gap-2  mt-2">
        <Button icon={MdOutlineDelete} label={"Apagar"} />
        <Button icon={MdOutlineEdit} label={"Editar"} />
      </div>
    </aside>
  );
};

export default RightMenu;
