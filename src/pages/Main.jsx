import { useContext } from "react";
import { PostContext } from "../contexts/post";

const Main = () => {
  const { posts } = useContext(PostContext);

  console.log(posts);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <div>{post.title}</div>
          <div>{post.content}</div>

        </div>
      ))}
    </div>
    // <>Main</>
  )
}

export default Main;
