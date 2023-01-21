import React from "react";
import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoSettingsSharp } from "react-icons/io5";

const Profile: React.FC = () => {
  return (
    <Box>
      <Grid
        placeContent="center"
        mt="1.5rem"
        position="relative"
        w="7rem"
        // h="7rem"
        mx="auto"
        css={{
          img: {
            width: "7rem",
            height: "7rem",
            borderRadius: "50%",
            objectFit: "cover",
          },
        }}
      >
        <Image loading="lazy" src="https://bit.ly/3HkKcnl" alt="" />

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
        Lucas Perez
      </Text>
      <Text
        textAlign="center"
        fontWeight="medium"
        fontSize="0.9rem"
        color="gray.500"
        // mt="0.7rem"
      >
        lucasperez9@gmail.com
      </Text>
    </Box>
  );
};

export default Profile;
