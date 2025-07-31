import { useContext } from "react";
import { PostContext } from "../contexts/post";
import Delete from "../icons/Delete";
import { useNavigate } from "react-router-dom";

const DeleteButton = (deleteIndex) => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);

  const handleDeleteCick = (deleteIndex) => {
    let copyPosts = [...posts];
    copyPosts.splice(deleteIndex, 1);
    setPosts(copyPosts);
    navigate("/");
  };

  return (
    <button
      onClick={() => {
        handleDeleteCick(deleteIndex);
      }}
    >
      <Delete />
    </button>
  );
};

export default DeleteButton;
