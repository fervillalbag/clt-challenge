import React from "react";
import { Grid } from "@chakra-ui/react";

import FormPay from "../components/FormPay";
import History from "../components/History";
import Layout from "../components/Layout";
import Services from "../components/Services";

const gridColumns = { base: "1fr", lg: "1fr 1fr", xl: "1.5fr 2fr" };
const gridRows = { base: "initial", lg: "1fr 300px" };

const Home: React.FC = () => {
  return (
    <Layout>
      <Grid
        gap="2.2rem"
        gridTemplateColumns={gridColumns}
        gridTemplateRows={gridRows}
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
