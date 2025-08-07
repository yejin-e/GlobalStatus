import Delete from "../icons/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDeleteCick = async () => {
    await axios.delete(`https://dod.study.mqueue.dev/api/v1/board/${id}`)
    navigate("/");
  };

  return (
    <button
      onClick={() => {
        handleDeleteCick(id);
      }}
    >
      <Delete />
    </button>
  );
};

export default DeleteButton;
