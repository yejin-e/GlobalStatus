import { useNavigate } from "react-router-dom";
import Direction from "../icons/Direction";

const MoveButton = ({ numberId, left }) => {
  const navigate = useNavigate();

  return (
    <div
      type="button"
      onClick={() => {
        navigate(`/detail/${numberId}`);
      }}
      className={left ? "rotate-180" : ""}
    >
      <Direction />
    </div>
  );
};

export default MoveButton;
