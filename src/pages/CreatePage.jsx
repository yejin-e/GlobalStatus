import Create from "../icons/Create";
import { useNavigate } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";
import axios from "axios";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleCreateCick = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    fetch("/some-api", { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());

    const data = {
      "title": formJson.title,
      "content": formJson.content,
    };

    await axios.post('https://dod.study.mqueue.dev/api/v1/board/', data);


    navigate("/");
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
