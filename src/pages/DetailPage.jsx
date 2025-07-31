import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../contexts/post";
import MainButton from "../components/MainButton";
import MoveButton from "../components/MoveButton";
import CreatePage from "./CreatePage";
import DeleteButton from "../components/DeleteButton";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // param 안의 숫자는 항상 문자열 형식
  const numberId = Number(id);
  const { posts } = useContext(PostContext);

  return (
    <div>
      <div className="fixed top-10 right-5">
        <MainButton />
        <MoveButton numberId={numberId - 1} left={true} />
        <MoveButton numberId={numberId + 1} left={false} />
        <CreatePage />
        {/* <UpdatePage /> */}
        <DeleteButton deleteIndex={numberId} />
      </div>
      <div className="border border-gray-300 w-9/10 mx-auto my-10 p-15">
        <div className="font-bold text-3xl mb-10">{posts[numberId].title}</div>
        <div className="text-base/7">{posts[numberId].content}</div>
      </div>
    </div>
  );
};

export default DetailPage;
