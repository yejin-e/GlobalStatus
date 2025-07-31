import { useNavigate } from "react-router-dom";
import Pencil from "../icons/Pencil";

const UpdateButton = ({ numberId }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/update/${numberId}`);
      }}
    >
      <Pencil />
    </button>
  );
};

export default UpdateButton;
