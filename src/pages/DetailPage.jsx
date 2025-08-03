import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../contexts/post";
import ButtonModule from "../components/ButtonModule";

const DetailPage = () => {
  const { id } = useParams(); // param 안의 숫자는 항상 문자열 형식
  const numberId = Number(id);
  const { posts } = useContext(PostContext);

  return (
    <div className="article-outside">
      <div className="article">
        <div className="article-title">{posts[numberId].title}</div>
        <div className="article-content">{posts[numberId].content}</div>
      </div>
      <div className="w-10">
        <ButtonModule numberId={numberId} />
      </div>
    </div>
  );
};

export default DetailPage;
