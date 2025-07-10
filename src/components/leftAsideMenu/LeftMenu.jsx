import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdClose, MdStarOutline } from "react-icons/md";
import FormSearch from "./FormSearch";
import MoreOpitions from "../layouts/MoreOpitions";

const LeftMenu = () => {
  const { toggleLeftMenu, setToggleLeftMenu } = useContext(TaskContext);

  const closLeftMenu = () => {
    setToggleLeftMenu(false);
  };
  return (
    <>
      <aside
        className={`
        w-64 bg-stone-900 fixed top-0  left-0 h-screen
        transition-all duration-300 ease-in-out p-2 z-50
        ${toggleLeftMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <MdClose onClick={closLeftMenu} className="text-white text-2xl" />

        <FormSearch />

        <div>
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
          />
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
          />
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
          />
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
          />
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
          />
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
          />
        </div>
      </aside>
    </>
  );
};

export default LeftMenu;
