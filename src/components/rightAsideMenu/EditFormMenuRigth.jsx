import { MdSave, MdCancelPresentation } from "react-icons/md";
import Button from "../layouts/Button";

const EditFormMenuRigth = () => {
  return (
    <form className="flex flex-col gap-2  mt-2">
      <input type="text"  />
      <Button label={"Salvar"} icon={MdSave} />
      <Button label={"Cancelar"} icon={MdCancelPresentation} />
    </form>
  );
};

export default EditFormMenuRigth;
