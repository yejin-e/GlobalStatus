import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { useNavigate } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";

const MainPage = () => {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);
  console.log(posts);

  return (
    <div>
      <ButtonModule />

      <div className="relative border border-gray-300 w-9/10 mx-auto my-20">
        <span class="absolute top-0 left-0 w-0.5 h-20 bg-gray-300 origin-top-left rotate-240"></span>
        <span class="absolute top-0 right-0 w-0.5 h-20 bg-gray-300 origin-top-left rotate-240"></span>
        <span class="absolute -top-11 -right-15 w-0.5 h-420 bg-gray-300 origin-top-left rotate-90"></span>
        <span class="absolute -top-10 -right-17 w-0.5 h-1110 bg-gray-300 origin-top-left rotate-0"></span>
        <span class="absolute -bottom-20 right-0 w-0.5 h-20 bg-gray-300 origin-top-left rotate-240"></span>

        <div className="p-10 text-center text-5xl">게시판</div>

        {posts.map((post, index) => (
          <div
            className="border-b border-b-gray-300 p-5"
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
    </div>
  );
};

export default MainPage;
