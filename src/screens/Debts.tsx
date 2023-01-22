import React from "react";
import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import { Debts as DebtsType } from "../interfaces/debts";
import { Service } from "../interfaces/service";
import { User } from "../interfaces/user";
import ListDebts from "../components/ListDebts";
// import FormPayDebts from "../components/FormPayDebts";

const Debts: React.FC = () => {
  const debtsResponse = useSelector(
    (state: { debts: DebtsType[] }) => state.debts
  );

  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const user = useSelector((state: { user: User }) => state.user);

  return (
    <Layout>
      <Grid
        gap="2rem"
        // gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateColumns="1fr"
        h="100vh"
      >
        <ListDebts
          user={user}
          debtsResponse={debtsResponse}
          services={services}
        />
        {/* <FormPayDebts services={services} /> */}
      </Grid>
    </Layout>
  );
};

export default Debts;
