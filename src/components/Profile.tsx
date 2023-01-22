import React from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { IoSettingsSharp } from "react-icons/io5";
import { User } from "../interfaces/user";

const Profile: React.FC = () => {
  const user = useSelector((state: { user: User }) => state.user);

  return (
    <Box>
      <Grid
        placeContent="center"
        mt="1.5rem"
        position="relative"
        w="7rem"
        mx="auto"
      >
        <Image
          w="7rem"
          h="7rem"
          objectFit="cover"
          rounded="full"
          loading="lazy"
          src="https://bit.ly/3iZ70zJ"
          alt=""
        />

        <Box bottom="0" right="0" position="absolute">
          <Button
            border="1px solid #e8e8e8"
            bgColor="white"
            rounded="full"
            fontSize="1.2rem"
            p="0.5rem"
            h="auto"
            minW="initial"
          >
            <IoSettingsSharp />
          </Button>
        </Box>
      </Grid>
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize="1.3rem"
        color="blue.800"
        mt="0.7rem"
      >
        {user.fullname}
      </Text>
      <Text
        textAlign="center"
        fontWeight="medium"
        fontSize="0.9rem"
        color="gray.500"
      >
        {user.email}
      </Text>

      <Heading
        fontSize="1.25rem"
        fontWeight="black"
        color="blue.900"
        mt="0.5rem"
        textAlign="center"
      >
        Gs. {user.balance.toLocaleString("en-US")}
      </Heading>
    </Box>
  );
};

export default Profile;
