import React from "react";
import { Box } from "@chakra-ui/react";

const Services: React.FC = () => {
  return (
    <Box
      gridColumn={{ base: "1/2", lg: "1/3" }}
      pr="2.2rem"
      pl="2.2rem"
      pb="2.2rem"
    >
      <Box bgColor="#dabda9" rounded="2.2rem" h="full"></Box>
    </Box>
  );
};

export default Services;
