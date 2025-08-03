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

  let visible = {
    mainV: "",
    leftMoveV: "invisible",
    rightMoveV: "invisible",
    createV: "invisible",
    updateV: "invisible",
    deleteV: "invisible",
  };

  if (pathname === "/") {
    visible.mainV = "invisible";
    visible.createV = "";
  } else if (pathname === `/detail/${numberId}`) {
    visible.leftMoveV = "";
    visible.rightMoveV = "";
    visible.updateV = "";
    visible.deleteV = "";
    if (numberId === 0) {
      visible.leftMoveV = "invisible";
    } else if (numberId === posts.length - 1) {
      visible.rightMoveV = "invisible";
    }
  }

  return (
    <div className="bookmark z-10 h-150">
      <Bookmark />
      <div className="bookmark flex-c gap-2 py-10 items-center">
        <div className={`button-css ${visible.mainV}`}>
          <MainButton />
        </div>
        <div className={`button-css ${visible.leftMoveV}`}>
          <MoveButton numberId={numberId - 1} pre={true} />
        </div>
        <div className={`button-css ${visible.rightMoveV}`}>
          <MoveButton numberId={numberId + 1} pre={false} />
        </div>
        <div className={`button-css ${visible.createV}`}>
          <CreateButton />
        </div>
        <div className={`button-css ${visible.updateV}`}>
          <UpdateButton numberId={numberId} />
        </div>
        <div className={`button-css ${visible.deleteV}`}>
          <DeleteButton numberId={numberId} />
        </div>
      </div>
    </div>
  );
};

export default ButtonModule;
