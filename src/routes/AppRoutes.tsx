import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.tsx"
import Details from "../pages/details.tsx"
import '../index.css'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;