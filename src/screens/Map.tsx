import React from "react";
import { Grid, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";

const Map: React.FC = () => {
  return (
    <Layout>
      <Grid placeItems="center" h="100vh" w="full">
        <Heading
          color="#222"
          fontSize="9rem"
          textShadow="5px 5px #457b9d"
        >
          Mapa
        </Heading>
      </Grid>
    </Layout>
  );
};

export default Map;
