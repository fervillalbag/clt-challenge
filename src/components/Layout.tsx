import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Layout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Grid
      gridTemplateColumns="280px 1fr"
      h={{ base: "full", lg: "100vh" }}
    >
      <Navbar />

      <Box
        h={{ base: "full", lg: "100vh" }}
        bgColor="gray.100"
        rounded="4rem 0 0 4rem"
      >
        {children}
      </Box>
    </Grid>
  );
};

export default Layout;
