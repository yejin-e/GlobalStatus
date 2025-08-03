import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { useNavigate } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";

const MainPage = () => {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);

  localStorage.setItem("posts", JSON.stringify(posts));

  return (
    <div className="flex-c">
      <div className="type mb-10">게시판</div>
      {posts.map((post, index) => (
        <div
          className="border-t border-t-[#819067] w-9/10 m-auto p-5"
          key={index}
          onClick={() => {
            navigate(`/detail/${index}`);
          }}
        >
          <div className="font-black">{post.title}</div>
          <div className="truncate">{post.content}</div>
        </div>
      ))}
      <div className="w-10">
        <ButtonModule />
      </div>
    </div>
  );
};

export default MainPage;
