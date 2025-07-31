import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../contexts/post";
import ButtonModule from "../components/ButtonModule";

const DetailPage = () => {
  const { id } = useParams(); // param 안의 숫자는 항상 문자열 형식
  const numberId = Number(id);
  const { posts } = useContext(PostContext);

  return (
    <div>
      <ButtonModule numberId={numberId} />
      <div className="border border-gray-300 w-9/10 mx-auto my-10 p-15">
        <div className="font-bold text-3xl mb-10">{posts[numberId].title}</div>
        <div className="text-base/7">{posts[numberId].content}</div>
      </div>
    </div>
  );
};

export default DetailPage;
