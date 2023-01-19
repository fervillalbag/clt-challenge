import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
