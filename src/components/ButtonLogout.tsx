import React from "react";
import { Button, Grid, Text } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { clearDebts } from "../features/debtsSlice";
import { cleanPayments } from "../features/paymentSlice";

const ButtonLogout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        onClick={() => {
          dispatch(clearDebts());
          dispatch(cleanPayments());
          navigate("/login");
        }}
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
