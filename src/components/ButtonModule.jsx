import CreateButton from "./CreateButton";
import MoveButton from "./MoveButton";
import DeleteButton from "./DeleteButton";
import MainButton from "./MainButton";
import Create from "../icons/Create";
import { useLocation } from "react-router-dom";

const ButtonModule = ({ numberId }) => {
  const location = useLocation();
  const url = location.pathname;
  console.log("url:", url);

  if (url === "/") {
    return (
      <div className="flex flex-col fixed top-10 right-5 gap-2 bg-lime-200 py-5 px-2 rounded-4xl">
        <CreateButton />
      </div>
    );
  } else if (url === "/create") {
    return (
      <div className="flex flex-col fixed top-10 right-5 gap-2 bg-lime-200 py-5 px-2 rounded-4xl">
        <MainButton />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col fixed top-10 right-5 gap-2 bg-lime-200 py-5 px-2 rounded-4xl">
        <MainButton />
        <MoveButton numberId={numberId - 1} left={true} />
        <MoveButton numberId={numberId + 1} left={false} />
        <CreateButton />
        {/* <UpdatePage /> */}
        <DeleteButton deleteIndex={numberId} />
      </div>
    );
  }
};

export default ButtonModule;
