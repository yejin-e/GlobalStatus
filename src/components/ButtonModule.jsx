import CreateButton from "./CreateButton";
import MoveButton from "./MoveButton";
import DeleteButton from "./DeleteButton";
import MainButton from "./MainButton";
import { useLocation } from "react-router-dom";
import { PostContext } from "../contexts/post";
import { useContext } from "react";
import UpdateButton from "./UpdateButton";
import Bookmark from "../icons/Bookmark";

const ButtonModule = ({ numberId }) => {
  const { posts } = useContext(PostContext);
  const { pathname } = useLocation();

  return (
    <div className="bookmark z-10">
      <Bookmark />
      <div className="bookmark flex-c gap-2 py-15 px-2">
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
    </div>
  );
};

export default ButtonModule;
