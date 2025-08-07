import { useNavigate } from "react-router-dom";
import Direction from "../icons/Direction";

const MoveButton = ({ id, pre }) => {
  const navigate = useNavigate();

  const rotate = pre ? "rotate-180" : "";

  return (
    <>
      <div
        type="button"
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        className={`mt-2" ${rotate}`}
      >
        <Direction />
      </div>
    </>
  );
};

export default MoveButton;
