import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import CardDetail from "../pages/CardDetail/CardDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/prueba-genial-io.vercel.app" element={<Layout />}>
          <Route path="/prueba-genial-io.vercel.app" element={<Home />} />
          <Route
            path="/prueba-genial-io.vercel.app/card/:id"
            element={<CardDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
