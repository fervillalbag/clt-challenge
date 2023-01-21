import React from "react";
import toast from "react-hot-toast";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "react-lazy-load-image-component/src/effects/blur.css";
import { login } from "../features/userSlice";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = React.useState<{
    fullname: string;
    email: string;
    password: string;
  }>({ fullname: "", email: "", password: "" });

  React.useEffect(() => {
    setUserInfo({ fullname: "", email: "", password: "" });
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const regexValidationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (userInfo.fullname === "") {
      return toast.error("El nombre es obligatorio");
    }

    if (!regexValidationEmail.test(userInfo.email)) {
      return toast.error("El email debe ser valido!");
    }

    if (userInfo.password.length <= 5) {
      return toast.error(
        "La contraseña debe tener al menos 6 caracteres"
      );
    }

    dispatch(login(userInfo));

    navigate("/");
    toast.success("Has iniciado sesion!");
  };

  return (
    <Grid
      overflow="hidden"
      h="100vh"
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr",
        xl: "2fr 1fr",
      }}
    >
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
        px={{ base: "3rem", xl: "4rem" }}
        as="form"
        onSubmit={handleLogin}
      >
        <Box css={{ img: { width: "120px" } }}>
          <LazyLoadImage src="/logo.jpeg" alt="" />
        </Box>
        <Text color="#333" fontWeight="black" fontSize="2rem">
          Hola, de nuevo
        </Text>
        <Text color="#333">
          Introduce las credenciales para iniciar sesion
        </Text>
        <Flex mt="1rem" gap="1rem 0" flexDir="column">
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
              Nombre
            </Text>
            <Input
              // autoComplete="off"
              mt="0.5rem"
              rounded="4px"
              borderColor="#d9d9d9"
              px="10px"
              id="email"
              value={userInfo.fullname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, fullname: e.target.value })
              }
            />
          </Box>

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
              // autoComplete="off"
              mt="0.5rem"
              rounded="4px"
              borderColor="#d9d9d9"
              px="10px"
              id="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
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
              type="password"
              // autoComplete="off"
              id="password"
              mt="0.5rem"
              rounded="4px"
              borderColor="#d9d9d9"
              px="10px"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
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
          type="submit"
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
          my="1.5rem"
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
          onClick={() => {
            navigate("/");
            return toast.success("Sesion iniciada con Google");
          }}
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
