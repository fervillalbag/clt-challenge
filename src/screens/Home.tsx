import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Grid
        gap="2.2rem"
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
          xl: "1.5fr 2fr",
        }}
        h={{ base: "full", lg: "100vh" }}
        overflowY="scroll"
      >
        <Box pr={{ base: "2.2rem", lg: 0 }} pl="2.2rem" pt="2.2rem">
          <Box bgColor="pink.100" rounded="2.2rem" h="full"></Box>
        </Box>
        <Box
          pr="2.2rem"
          pl={{ base: "2.2rem", lg: 0 }}
          pt={{ base: 0, lg: "2.2rem" }}
        >
          <Box bgColor="blue.100" rounded="2.2rem" h="full"></Box>
        </Box>
        <Box
          gridColumn={{ base: "1/2", lg: "1/3" }}
          pr="2.2rem"
          pl="2.2rem"
          pb="2.2rem"
        >
          <Box bgColor="green.100" rounded="2.2rem" h="full"></Box>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Home;
