import React from "react";
import { Box, Flex, Grid, Heading, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDraggable } from "react-use-draggable-scroll";

import { Service } from "../interfaces/service";
import ServiceItem from "./ServiceItem";

const Services: React.FC = () => {
  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const [inputSearch, setInputSearch] = React.useState<string>("");

  const servicesFiltered = services?.filter((service) =>
    service.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const ref: any = React.useRef();
  const { events } = useDraggable(ref);

  return (
    <Box
      gridColumn={{ base: "1/2", lg: "1/3" }}
      pr="2.2rem"
      pl="2.2rem"
      pb="2.2rem"
    >
      <Grid
        gridTemplateRows="auto 1fr"
        bgColor="#dabda9"
        rounded="2.2rem"
        h="full"
        py="2rem"
      >
        <Box pl="2rem">
          <Input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            w="20rem"
            bgColor="white"
            placeholder="Buscar servicios"
          />
        </Box>

        <Flex
          className="hide-scrollbar"
          overflowY="scroll"
          pt="2.5rem"
          alignItems="center"
          h="full"
          pl="2rem"
          ref={ref}
          {...events}
        >
          {servicesFiltered.length === 0 || !servicesFiltered ? (
            <Grid placeItems="center" mx="auto" h="150px">
              <Heading
                color="#333"
                textAlign="center"
                fontSize="2rem"
                fontWeight="black"
                textTransform="uppercase"
                textShadow="2px 2px #fff"
              >
                No se encontraron resultados ⚠️
              </Heading>
            </Grid>
          ) : (
            servicesFiltered.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))
          )}
        </Flex>
      </Grid>
    </Box>
  );
};

export default Services;
