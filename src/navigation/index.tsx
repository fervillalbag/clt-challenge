import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Explore from "../screens/Explore";
import Plans from "../screens/Plans";
import Logistic from "../screens/Logistic";
import Map from "../screens/Map";
import NotLogin from "../components/NotLogin";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotLogin />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/explore" element={<Explore />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/logistic" element={<Logistic />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};
