import { useNavigate } from "react-router-dom";

const MainButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="w-3 aspect-square bg-lime-900"
      onClick={() => {
        navigate(`/`);
      }}
    />
  );
};

export default MainButton;
