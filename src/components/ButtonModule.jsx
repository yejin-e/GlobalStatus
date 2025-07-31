import CreateButton from "./CreateButton";
import MoveButton from "./MoveButton";
import DeleteButton from "./DeleteButton";
import MainButton from "./MainButton";
import { useLocation } from "react-router-dom";
import { PostContext } from "../contexts/post";
import { useContext } from "react";
import UpdateButton from "./UpdateButton";

const ButtonModule = ({ numberId }) => {
  const { posts } = useContext(PostContext);
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col fixed top-10 right-5 gap-2 bg-gray-200 py-5 px-2 rounded-4xl border border-gray-300 hover:shadow-lg hover:-translate-y-2 transition duration-300">
      {pathname != "/" ? <MainButton /> : <></>}
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
      {pathname === "/" ? <CreateButton /> : <></>}
      {pathname === `/detail/${numberId}` ? (
        <>
          <UpdateButton numberId={numberId} />
          <DeleteButton numberId={numberId} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ButtonModule;
