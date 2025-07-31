import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { useNavigate, useParams } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";
import Pencil from "../icons/Pencil";

const UpdatePage = () => {
  const { id } = useParams(); // param 안의 숫자는 항상 문자열 형식
  const numberId = Number(id);

  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);

  const handleCreateCick = (e) => {
    // 브라우저가 페이지를 다시 로드하지 못하도록 방지합니다.
    e.preventDefault();

    // 폼 데이터를 읽습니다.
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.title);

    let copyPosts = [...posts];
    copyPosts.splice(numberId, 1, {
      title: formJson.title,
      content: formJson.content,
    });
    setPosts(copyPosts);
    navigate(`/detail/${numberId}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <ButtonModule />
      <div className="p-10 h-30 text-center text-5xl"> 글 수정 </div>
      <form
        method="post"
        onSubmit={handleCreateCick}
        className="w-4/5 flex-auto h-full mx-auto border-gray-300"
      >
        <input
          name="title"
          placeholder="글 제목"
          defaultValue={posts[numberId].title}
          className="border h-15 w-full p-5 border-gray-300 outline-none"
        />
        <textarea
          name="content"
          placeholder="글 내용"
          defaultValue={posts[numberId].content}
          className="border w-full p-5 h-4/5 border-gray-300 outline-none"
        />
        <button type="submit" className="w-full h-20 p-2 flex justify-end">
          <Pencil />
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
