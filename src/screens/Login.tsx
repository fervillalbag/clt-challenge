import React from "react";
import {
  Grid,
  Box,
  Text,
  Input,
  Flex,
  Checkbox,
  Button,
  Image,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const Login: React.FC = () => {
  return (
    <Grid overflow="hidden" h="100vh" gridTemplateColumns="2fr 1.5fr">
      <Box
        css={{
          img: {
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            verticalAlign: "top",
          },
        }}
      >
        <LazyLoadImage
          alt=""
          height="100%"
          src="https://bit.ly/3ks9xCS" // use normal <img> attributes as props
          width="100%"
          effect="blur"
        />
      </Box>

      <Grid
        alignContent="center"
        my="3rem"
        h="calc(100vh - 6rem)"
        px="6rem"
      >
        <Box css={{ img: { width: "140px" } }}>
          <LazyLoadImage src="/logo.jpeg" alt="" />
        </Box>
        <Text color="#333" fontWeight="black" fontSize="2rem">
          Hola, de nuevo
        </Text>
        <Text color="#333">
          Introduce las credenciales para iniciar sesion
        </Text>
        <Flex mt="2rem" gap="1.5rem 0" flexDir="column">
          {/* Email */}
          <Box>
            <Text
              color="#999"
              fontSize="0.8rem"
              fontWeight="semibold"
              as="label"
              textTransform="uppercase"
              display="block"
              htmlFor="email"
            >
              Email
            </Text>
            <Input
              mt="0.5rem"
              rounded="4px"
              borderColor="#d9d9d9"
              px="10px"
              id="email"
            />
          </Box>

          {/* Password */}
          <Box>
            <Text
              color="#999"
              fontSize="0.8rem"
              fontWeight="semibold"
              as="label"
              textTransform="uppercase"
              display="block"
              htmlFor="password"
            >
              Contraseña
            </Text>
            <Input
              id="password"
              mt="0.5rem"
              rounded="4px"
              borderColor="#d9d9d9"
              px="10px"
            />
          </Box>
        </Flex>

        <Flex mt="1rem" justifyContent="space-between">
          <Checkbox defaultChecked>Recordar</Checkbox>

          <Text
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
            color="blue.600"
          >
            Olvidaste tu contraseña?
          </Text>
        </Flex>

        <Button
          mt="1.5rem"
          h="3.4rem"
          w="full"
          bgColor="blue.500"
          color="white"
          _hover={{ bgColor: "blue.400" }}
        >
          Ingresar
        </Button>

        <Grid
          alignContent="center"
          gridTemplateColumns="1fr auto 1fr"
          my="3rem"
          gap="1rem"
        >
          <Box alignSelf="center" h="1px" bgColor="#e8e8e8" />
          <Box>
            <Text fontWeight="semibold" color="gray.400">
              o
            </Text>
          </Box>
          <Box h="1px" bgColor="#e8e8e8" alignSelf="center" />
        </Grid>

        <Button
          h="3.4rem"
          w="full"
          bgColor="white"
          color="white"
          border="1px solid #e8e8e8"
          _hover={{ bgColor: "gray.100" }}
        >
          <Image w="2.5rem" src="/logo-google.png" alt="" />
          <Text ml="10px" color="#666">
            Ingresar con Google
          </Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
