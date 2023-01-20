import React from "react";
import { Button, Grid, Text } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";

const ButtonLogout: React.FC = () => {
  return (
    <Grid
      w="full"
      px="3rem"
      placeItems="center"
      py="2rem"
      position="absolute"
      bottom="0"
    >
      <Button
        display="flex"
        alignItems="center"
        color="gray.500"
        bgColor="gray.200"
        h="3rem"
        w="8rem"
      >
        <Text fontSize="1.2rem" mr="0.3rem">
          <MdOutlineLogout />
        </Text>
        <Text>Salir</Text>
      </Button>
    </Grid>
  );
};

export default ButtonLogout;
