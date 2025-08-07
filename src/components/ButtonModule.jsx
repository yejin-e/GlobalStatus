import CreateButton from "./CreateButton";
import MoveButton from "./MoveButton";
import DeleteButton from "./DeleteButton";
import MainButton from "./MainButton";
import { useLocation } from "react-router-dom";
import UpdateButton from "./UpdateButton";
import Bookmark from "../icons/Bookmark";

const ButtonModule = ({ id }) => {
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
  } else if (pathname === `/detail/${id}`) {
    visible.leftMoveV = "";
    visible.rightMoveV = "";
    visible.updateV = "";
    visible.deleteV = "";
    // if (id === 0) {
    //   visible.leftMoveV = "invisible";
    // } else if (id === posts.length - 1) {
    //   visible.rightMoveV = "invisible";
    // }
  }

  return (
    <div className="bookmark z-10 h-150">
      <Bookmark />
      <div className="bookmark flex-c gap-2 py-10 items-center">
        <div className={`button-css ${visible.mainV}`}>
          <MainButton />
        </div>
        <div className={`button-css ${visible.leftMoveV}`}>
          <MoveButton id={id - 1} pre={true} />
        </div>
        <div className={`button-css ${visible.rightMoveV}`}>
          <MoveButton id={id + 1} pre={false} />
        </div>
        <div className={`button-css ${visible.createV}`}>
          <CreateButton />
        </div>
        <div className={`button-css ${visible.updateV}`}>
          <UpdateButton id={id} />
        </div>
        <div className={`button-css ${visible.deleteV}`}>
          <DeleteButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default ButtonModule;
