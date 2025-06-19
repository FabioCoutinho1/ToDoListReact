import React from "react";
import { MdOutlineMenu } from "react-icons/md";

const HeaderContainerTasks = () => {
  return (
    <header className="text-white flex mb-4">

      <div className=" cursor-default">
        <MdOutlineMenu className="cursor-pointer font-bold text-3xl" />
        <h1 className="text-3xl font-bold">My Work</h1>
        <p>18/06/2025</p>
      </div>

    </header>
  );
};

export default HeaderContainerTasks;
