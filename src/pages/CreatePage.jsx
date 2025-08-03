import { useContext } from "react";
import { PostContext } from "../contexts/post";
import Create from "../icons/Create";
import { useNavigate } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";

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
    navigate("/detail/0");
  };

  return (
    <div className="flex-c">
      <div className="type"> 글 생성 </div>
      <div className="article-outside">
        <form method="post" onSubmit={handleCreateCick} className="article">
          <input
            name="title"
            placeholder="글 제목"
            className="article-title w-full outline-none"
          />
          <textarea
            name="content"
            placeholder="글 내용"
            className="article-content w-full flex-1 outline-none"
          />
          <button type="submit" className="w-full pt-2 flex justify-end">
            <Create />
          </button>
        </form>
        <div className="w-10">
          <ButtonModule />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
