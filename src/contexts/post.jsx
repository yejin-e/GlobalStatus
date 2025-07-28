import { createContext, useState } from "react";

// Post 용도로 사용하는 Context를 생성
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { title: "제목 1", content: "내용 1" },
    { title: "제목 2", content: "내용 2" },
    { title: "제목 3", content: "내용 3" },
    { title: "제목 4", content: "내용 4" }
  ]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children} 
    </PostContext.Provider>
  )
}

