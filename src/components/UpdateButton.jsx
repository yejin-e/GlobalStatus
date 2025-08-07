import { useNavigate } from "react-router-dom";
import Pencil from "../icons/Pencil";

const UpdateButton = ({ id }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/update/${id}`);
      }}
    >
      <Pencil />
    </button>
  );
};

export default UpdateButton;
