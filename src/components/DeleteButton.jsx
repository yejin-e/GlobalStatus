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
    navigate("/");
  };

  return (
    <button
      className="rounded-4xl shadow-lg hover:translate-x-3 transition duration-300"
      onClick={() => {
        handleDeleteCick(numberId);
      }}
    >
      <Delete />
    </button>
  );
};

export default DeleteButton;
