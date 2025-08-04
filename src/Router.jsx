import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import UpdatePage from "./pages/UpdatePage";
import ScrollToTop from "./components/ScrollToTop";
import ApiTestPage from "./pages/ApiTestPage";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />


        <Route path="/api" element={<ApiTestPage />} />

        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
