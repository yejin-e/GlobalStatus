import { useNavigate } from "react-router-dom";
import List from "../icons/List";

const MainButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-4xl shadow-lg hover:translate-x-3 transition duration-300"
      onClick={() => {
        navigate(`/`);
      }}
    >
      <List />
    </button>
  );
};

export default MainButton;
