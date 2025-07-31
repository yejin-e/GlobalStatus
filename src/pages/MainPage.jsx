import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);
  console.log(posts);

  return (
    <div className="w-screen h-screen">
      <div className="p-10 text-center text-5xl">게시판</div>
      <Link className="p-1 border w-fit h-fit place-content-end" to={"/create"}>
        go Create
      </Link>
      {posts.map((post, index) => (
        <div
          className="border w-9/10 m-auto p-4"
          key={index}
          onClick={() => {
            navigate(`/detail/${index}`);
          }}
        >
          <div className="font-bold">{post.title}</div>
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
