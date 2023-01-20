import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <Grid gridTemplateColumns="280px 1fr" h="100vh">
      <Navbar />

      <Box>
        <Box
          h="100vh"
          bgColor="gray.100"
          rounded="4rem 0 0 4rem"
        ></Box>
      </Box>
    </Grid>
  );
};

export default Layout;
