import { useNavigate } from "react-router-dom";
import Create from "../icons/Create";

const CreateButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="rounded-4xl shadow-lg hover:translate-x-3 transition duration-300"
      onClick={() => {
        navigate("/create");
      }}
    >
      <Create />
    </button>
  );
};

export default CreateButton;
