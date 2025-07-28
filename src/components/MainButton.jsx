import { useNavigate } from "react-router-dom";

const MainButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => {
      navigate(`/`);
    }} />
  )
}

export default MainButton;
