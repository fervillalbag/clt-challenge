import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Login from "../screens/Login";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
