import { useNavigate } from "react-router-dom";
import List from "../icons/List";

const MainButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/`);
      }}
    >
      <List />
    </button>
  );
};

export default MainButton;
