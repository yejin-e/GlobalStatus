import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listApi();
  }, []);

  const listApi = async () => {
    const res = await axios.get("https://dod.study.mqueue.dev/api/v1/board");
    console.log(res);

    const apiPosts = res.data.posts;
    setPosts(apiPosts);
  }

  console.log(posts);

  return (
    <div className="flex-c">
      <div className="type mb-10">게시판</div>
      {posts.map((post, index) => (
        <div
          className="border-t border-t-[#819067] w-9/10 m-auto p-5"
          key={index}
          onClick={() => {
            navigate(`/detail/${post.id}`);
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
