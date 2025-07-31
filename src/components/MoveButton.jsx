import { useNavigate } from "react-router-dom";

const MoveButton = ({ numberId }) => {
  const navigate = useNavigate();

  return (
    <button
      className="w-3 aspect-square bg-lime-500"
      onClick={() => {
        navigate(`/detail/${numberId}`);
      }}
    />
  );
};

export default MoveButton;
