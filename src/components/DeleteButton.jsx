import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { Navigate } from "react-router-dom";
import Delete from "../icons/Delete";

const DeleteButton = (deleteIndex) => {
  const { posts, setPosts } = useContext(PostContext);

  const handleDeleteCick = (deleteIndex) => {
    let copyPosts = [...posts];
    copyPosts.splice(deleteIndex, 1);
    setPosts(copyPosts);
    Navigate("/");
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
