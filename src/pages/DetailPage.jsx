import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ButtonModule from "../components/ButtonModule";

const DetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    detailApi();
  }, []);

  const detailApi = async () => {
    try {
      const res = await axios.get(`https://dod.study.mqueue.dev/api/v1/board/${id}`);
      const detailApi = res.data;
      console.log(detailApi);

      setPost(detailApi);
      setIsLoading(false);
    }
    catch (error) {
      console.error(error);
      alert('잘못된 접근입니다.');
      navigate('/');
    }
  }

  if (isLoading) return <>loading</>

  return (
    <div div className="flex-c" >
      <div className="type"> {id}번째 글 </div>
      <div className="article-outside">
        <div className="article">
          <div className="article-title">{post.title}</div>
          <div className="article-content">{post.content}</div>
        </div>
        <div className="w-10">
          <ButtonModule id={post.id} />
        </div>
      </div>
    </div >
  );
};

export default DetailPage;
