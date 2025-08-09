import { useNavigate } from "react-router-dom";
import Direction from "../icons/Direction";
import axios from "axios";

const MoveButton = ({ id, pre }) => {
  const navigate = useNavigate();

  const rotate = pre ? "rotate-180" : "";
  console.log(id);

  const prevApi = async (id) => {
    const res = await axios.get(
      `https://dod.study.mqueue.dev/api/v1/board/${id}/${pre ? "prev" : "next"}`
    );
    const data = res.data;
    console.log("data:", data);

    if (data === null) {
      alert("마지막입니다.");
    } else {
      navigate(`/detail/${data.id}`);
    }
  };

  return (
    <>
      <div
        type="button"
        onClick={() => {
          prevApi(id);
        }}
        className={`mt-2" ${rotate}`}
      >
        <Direction />
      </div>
    </>
  );
};

export default MoveButton;
