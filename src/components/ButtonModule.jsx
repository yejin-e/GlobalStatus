import CreateButton from "./CreateButton";
import MoveButton from "./MoveButton";
import DeleteButton from "./DeleteButton";
import MainButton from "./MainButton";
import { useLocation } from "react-router-dom";
import { PostContext } from "../contexts/post";
import { useContext } from "react";

const ButtonModule = ({ numberId }) => {
  const { posts } = useContext(PostContext);
  const location = useLocation();
  const url = location.pathname;

  return (
    <div className="flex flex-col fixed top-10 right-5 gap-2 bg-lime-200 py-5 px-2 rounded-4xl">
      {url != "/" ? <MainButton /> : <></>}
      {numberId > 0 ? (
        <MoveButton numberId={numberId - 1} left={true} />
      ) : (
        <></>
      )}
      {numberId < posts.length - 1 ? (
        <MoveButton numberId={numberId + 1} left={false} />
      ) : (
        <></>
      )}
      {url != "/create" ? <CreateButton /> : <></>}
      {/* <UpdatePage /> */}
      {url === `/detail/${numberId}` ? (
        <DeleteButton deleteIndex={numberId} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ButtonModule;
