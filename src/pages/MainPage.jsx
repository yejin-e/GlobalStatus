import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);
  console.log(posts);

  return (
    <div>
      <Link to={"/create"}>go Create</Link>
      {posts.map((post, index) => (
        <div key={index} onClick={() => {
          navigate(`/detail/${index}`);
        }}>
          <div>{post.title}</div>
          <div>{post.content}</div>

        </div>
      ))}
    </div>
  )
}

export default MainPage;
