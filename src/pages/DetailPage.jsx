import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../contexts/post";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // param 안의 숫자는 항상 문자열 형식
  const numberId = Number(id);
  const { posts } = useContext(PostContext);

  return (
    <div>

      <div>
        title: {posts[numberId].title}
      </div>
      <div>
        content: {posts[numberId].content}
      </div>
    </div>
  )
}

export default DetailPage;
