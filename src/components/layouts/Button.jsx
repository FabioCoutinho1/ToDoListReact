import React from "react";

const Button = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-stone-800 flex items-center gap-2 text-[18px] py-2 px-2 hover:bg-stone-700 duration-300 cursor-pointer"
    >
      <Icon className="font-bold text-2xl" />
      <span>{label}</span>
    </button>
  );
};

export default Button;
