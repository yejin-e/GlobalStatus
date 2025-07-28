import { useNavigate } from "react-router-dom";

const MoveButton = ({ numberId }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => {
      navigate(`/detail/${numberId}`);
    }} />
  )
}

export default MoveButton;
