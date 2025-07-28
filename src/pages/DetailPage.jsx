import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../contexts/post";
import MainButton from "../components/MainButton";
import MoveButton from "../components/MoveButton";
import CreatePage from "./CreatePage";


const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // param 안의 숫자는 항상 문자열 형식
  const numberId = Number(id);
  const { posts } = useContext(PostContext);

  return (
    <div>
      <MainButton />
      <MoveButton numberId={numberId - 1} />
      <MoveButton numberId={numberId + 1} />
      <div>
        title: {posts[numberId].title}
      </div>
      <div>
        content: {posts[numberId].content}
      </div>
      <CreatePage />
    </div>
  )
}

export default DetailPage;
