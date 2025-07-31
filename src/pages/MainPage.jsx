import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { Link, useNavigate } from "react-router-dom";
import Create from "../icons/Create";

const MainPage = () => {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);
  console.log(posts);

  return (
    <div>
      <Link className="fixed bottom-5 right-5" to={"/create"}>
        <Create />
      </Link>
      <div className="p-10 text-center text-5xl">게시판</div>
      {posts.map((post, index) => (
        <div
          className="border border-gray-300 w-9/10 m-auto p-5"
          key={index}
          onClick={() => {
            navigate(`/detail/${index}`);
          }}
        >
          <div className="font-bold">{post.title}</div>
          <div className="truncate">{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
