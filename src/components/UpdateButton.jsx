import { useNavigate } from "react-router-dom";
import Pencil from "../icons/Pencil";

const UpdateButton = ({ numberId }) => {
  const navigate = useNavigate();
  return (
    <button
      className="rounded-4xl shadow-lg hover:translate-x-3 transition duration-300"
      onClick={() => {
        navigate(`/update/${numberId}`);
      }}
    >
      <Pencil />
    </button>
  );
};

export default UpdateButton;
