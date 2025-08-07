import { useContext, useEffect, useState } from "react";
import { PostContext } from "../contexts/post";
import { useNavigate, useParams } from "react-router-dom";
import ButtonModule from "../components/ButtonModule";
import Pencil from "../icons/Pencil";
import axios from "axios";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    detailApi();
  }, []);

  const detailApi = async () => {
    const res = await axios.get(`https://dod.study.mqueue.dev/api/v1/board/${id}`);
    setTitle(res.data.title);
    setContent(res.data.content);
    console.log(title, content);
  }

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
    await axios.patch(`https://dod.study.mqueue.dev/api/v1/board/${id}`, data);

    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex-c">
      <div className="type"> 글 수정 </div>
      <div className="article-outside">
        <form method="post" onSubmit={handleCreateCick} className="article">
          <input
            name="title"
            placeholder="글 제목"
            defaultValue={title}
            className="article-title w-full outline-none"
          />
          <textarea
            name="content"
            placeholder="글 내용"
            defaultValue={content}
            className="article-content w-full flex-1 outline-none"
          />
          <button type="submit" className="w-full pt-2 flex justify-end">
            <Pencil />
          </button>
        </form>
        <div className="w-10">
          <ButtonModule />
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
