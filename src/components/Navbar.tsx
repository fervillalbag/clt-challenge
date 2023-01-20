import React from "react";
import { Box } from "@chakra-ui/react";

import Navigation from "../components/Navigation";
import Profile from "./Profile";
import BrandLogo from "./BrandLogo";
import ButtonLogout from "./ButtonLogout";

const Navbar: React.FC = () => {
  return (
    <Box position="relative" h="100vh">
      {/* Logo */}
      <BrandLogo />

      {/* Profile */}
      <Profile />

      {/* Navigation */}
      <Navigation />

      {/* Logout */}
      <ButtonLogout />
    </Box>
  );
};

export default Navbar;
