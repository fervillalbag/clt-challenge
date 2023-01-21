import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDraggable } from "react-use-draggable-scroll";

import { Service } from "../interfaces/service";
import ServiceItem from "./ServiceItem";

const Services: React.FC = () => {
  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const ref: any = React.useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <Box
      gridColumn={{ base: "1/2", lg: "1/3" }}
      pr="2.2rem"
      pl="2.2rem"
      pb="2.2rem"
    >
      <Box bgColor="#dabda9" rounded="2.2rem" h="full">
        <Flex
          className="hide-scrollbar"
          overflowY="scroll"
          alignItems="center"
          h="full"
          pl="2rem"
          ref={ref}
          {...events}
        >
          {services.map((service) => (
            <ServiceItem service={service} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Services;
