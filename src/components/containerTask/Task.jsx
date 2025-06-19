import React from "react";
import {
  MdOutlineCircle,
  MdCheckCircle,
  MdOutlineStarPurple500,
} from "react-icons/md";

const Task = ({ taskName }) => {
  return (
    <div className="bg-stone-800 text-white py-1.5 px-2 flex justify-between items-center gap-3.5">
      <MdOutlineCircle className="cursor-pointer text-2xl" />
      <h3 className="flex-1 text-[18px] flex items-center">{taskName}</h3>
      <MdOutlineStarPurple500 className="cursor-pointer text-2xl text-gray-400" />
    </div>
  );
};

export default Task;
