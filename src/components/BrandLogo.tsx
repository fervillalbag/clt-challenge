import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";

const BrandLogo: React.FC = () => {
  return (
    <Grid placeItems="center" py="2rem">
      <Box
        cursor="pointer"
        position="relative"
        display="inline-block"
      >
        <Text
          color="blue.800"
          fontWeight="black"
          fontSize="2rem"
          textTransform="lowercase"
          letterSpacing="3px"
        >
          CLT
        </Text>

        <Box
          position="absolute"
          bottom="0"
          left="-0.5rem"
          zIndex="-1"
          w="3rem"
          h="1.5rem"
          bgColor="orange.200"
        />
      </Box>
    </Grid>
  );
};

export default BrandLogo;
