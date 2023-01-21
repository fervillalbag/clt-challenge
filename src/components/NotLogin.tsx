import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/userSlice";

const NotLogin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Grid bgColor="white" placeItems="center" w="100vw" h="100vh">
      <Box textAlign="center">
        <Heading color="blue.900">No tienes una cuenta</Heading>
        <Text color="#999" mt="0.3rem">
          Para iniciar sesion debes ingresar una cuenta
        </Text>
        <Button
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
          mt="1rem"
          border="1px solid"
          borderColor="blue.900"
          textTransform="uppercase"
          rounded="4px"
          bgColor="white"
          color="blue.900"
          h="auto"
          p="1rem 2rem"
        >
          Inicia sesion
        </Button>
      </Box>
    </Grid>
  );
};

export default NotLogin;
