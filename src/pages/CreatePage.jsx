import { useContext } from "react";
import { PostContext } from "../contexts/post";
import Create from "../icons/Create";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);

  const handleCreateCick = () => {
    setPosts((prev) => [{ title: "추가 제목", content: "추가 내용" }, ...prev]);
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleCreateCick}>
        <Create />
      </button>
    </div>
  );
};

export default CreatePage;
