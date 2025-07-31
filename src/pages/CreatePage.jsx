import { useContext } from "react";
import { PostContext } from "../contexts/post";
import Create from "../icons/Create";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
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

    setPosts((prev) => [
      { title: formJson.title, content: formJson.content },
      ...prev,
    ]);
    navigate("/");
  };

  return (
    <div>
      <div className="p-10 text-center text-5xl"> 글 생성 </div>
      <form
        method="post"
        onSubmit={handleCreateCick}
        className="border w-4/5 m-auto border-gray-300"
      >
        <input
          name="title"
          placeholder="글 제목"
          className="border w-full p-5 border-gray-300 outline-none"
        />
        <textarea
          name="content"
          placeholder="글 내용"
          className="border w-full h-100 p-5 border-gray-300 outline-none"
        />
        <button type="submit" className="">
          <Create />
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
