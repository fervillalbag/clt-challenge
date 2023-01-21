import React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { BsLightningChargeFill } from "react-icons/bs";

import { Service } from "../interfaces/service";

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Box
      position="relative"
      bgColor="white"
      p="2.5rem 3rem"
      rounded="1rem"
      cursor="pointer"
      mr="2rem"
      userSelect="none"
      onClick={() => console.log(service.name)}
    >
      <Grid
        placeItems="center"
        position="absolute"
        top="-1.5rem"
        left="1.5rem"
        w="3rem"
        h="3rem"
        rounded="0.8rem"
        bgColor="#fe4c24"
        color="white"
        fontSize="1.7rem"
      >
        <BsLightningChargeFill />
      </Grid>

      <Text fontWeight="semibold" color="#666" fontSize="1.1rem">
        {service.type}
      </Text>
      <Heading whiteSpace="nowrap" color="#333">
        {service.name}
      </Heading>
    </Box>
  );
};

export default ServiceItem;
