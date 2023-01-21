import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { User } from "../interfaces/user";
import NotLogin from "./NotLogin";

const Layout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector((state: { user: User }) => state.user);
  if (user.fullname === "") return <NotLogin />;

  return (
    <Grid
      gridTemplateColumns="280px 1fr"
      h={{ base: "full", lg: "100vh" }}
    >
      <Navbar />

      <Box
        h={{ base: "full", lg: "100vh" }}
        bgColor="gray.100"
        rounded={{ base: "4rem 0 0 0", "2xl": "4rem 0 0 4rem" }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default Layout;
