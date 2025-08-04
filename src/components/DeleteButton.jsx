import { useContext } from "react";
import { PostContext } from "../contexts/post";
import Delete from "../icons/Delete";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ numberId }) => {
  console.log(numberId);

  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);

  const handleDeleteCick = (deleteIndex) => {
    let copyPosts = [...posts];
    copyPosts.splice(deleteIndex, 1);
    setPosts(copyPosts);

    localStorage.setItem("posts", JSON.stringify(copyPosts));

    navigate("/");
  };

  return (
    <button
      onClick={() => {
        handleDeleteCick(numberId);
      }}
    >
      <Delete />
    </button>
  );
};

export default DeleteButton;
