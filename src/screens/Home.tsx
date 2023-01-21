import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import FormPay from "../components/FormPay";
import History from "../components/History";
import Layout from "../components/Layout";
import Services from "../components/Services";

const gridOptions = { base: "1fr", lg: "1fr 1fr", xl: "1.5fr 2fr" };

const Home: React.FC = () => {
  return (
    <Layout>
      <Grid
        gap="2.2rem"
        gridTemplateColumns={gridOptions}
        h={{ base: "full", lg: "100vh" }}
        overflowY="scroll"
      >
        <FormPay />
        <History />
        <Services />
      </Grid>
    </Layout>
  );
};

export default Home;
