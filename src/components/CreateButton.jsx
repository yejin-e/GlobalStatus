import { useNavigate } from "react-router-dom";
import Create from "../icons/Create";

const CreateButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/create");
      }}
    >
      <Create />
    </button>
  );
};

export default CreateButton;
