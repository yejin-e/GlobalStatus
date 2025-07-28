import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { Navigate } from "react-router-dom";

const CreatePage = () => {
  const { posts, setPosts } = useContext(PostContext);

  const handleCick = () => {
    setPosts((prev) => [
      ...prev,
      { title: "추가 제목", content: "추가 내용" }
    ]);
    Navigate("/");
  }

  return (
    <div>
      <button onClick={handleCick}>create</button>
    </div>
  )
}

export default CreatePage;
