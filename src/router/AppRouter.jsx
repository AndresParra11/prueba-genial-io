import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import CardDetail from "../pages/CardDetail/CardDetail";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/card/:id" element={<CardDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
