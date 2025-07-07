import { MdSave, MdCancelPresentation } from "react-icons/md";
import { useContext, useRef, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from "../layouts/Button";

const EditFormMenuRigth = ({ task }) => {
  const { upDateTaskField, setToggleEdit } = useContext(TaskContext);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(task.taskName);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputValue.trim();

    if (inputValue == task.taskName) {
      return alert("o nome nao pode ser o mesmo");
    }
    upDateTaskField("taskName", name, task.id);

    setToggleEdit(true);
  };

  const handleCancel = () => {
    setToggleEdit(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2  mt-2">
      <input
        type="text"
        value={inputValue}
        className="outline-0"
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label={"Salvar"} icon={MdSave} type={"submit"} />
      <Button
        label={"Cancelar"}
        icon={MdCancelPresentation}
        type={"reset"}
        onClick={handleCancel}
      />
    </form>
  );
};

export default EditFormMenuRigth;
