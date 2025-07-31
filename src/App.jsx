import Router from "./router";
import { PostProvider } from "./contexts/post";

function App() {
  return (
    <PostProvider>
      <Router />
    </PostProvider>
  );
}

export default App;
