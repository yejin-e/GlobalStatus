import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Create from "./pages/create";
import Detail from "./pages/detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
