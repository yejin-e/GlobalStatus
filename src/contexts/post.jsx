import { createContext, useState } from "react";

// Post 용도로 사용하는 Context를 생성
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const savedPosts =
    JSON.parse(localStorage.getItem("posts")) || [];
  const [posts, setPosts] = useState(savedPosts);

  console.log(posts);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
