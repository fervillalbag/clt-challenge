import React from "react";
import dayjs from "dayjs";
import Calendar from "react-calendar";
import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar } from "react-icons/bs";

import { User } from "../interfaces/user";
import { Service } from "../interfaces/service";
import { Payment } from "../interfaces/payments";

const History: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: { user: User }) => state.user);

  const payments = useSelector(
    (state: { payments: Payment[] }) => state.payments
  );

  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const [typeEntitySelected, setTypeEntitySelected] =
    React.useState<string>("PUBLIC");

  const [rangeDateSelected, setRangeDateSelected] =
    React.useState<any>();

  const paymentsFilter = payments?.filter((payment: Payment) => {
    const service = services.find(
      (service) => service.id === payment.serviceId
    ) as Service;
    if (service.type === typeEntitySelected) return payment;
  });

  const paymentsFilteredByDate = paymentsFilter?.filter(
    (payment) =>
      dayjs(payment.created_at).format("DD-MM") ===
      dayjs(rangeDateSelected).format("DD-MM")
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const paymentsRender =
    paymentsFilteredByDate.length === 0 && !rangeDateSelected
      ? paymentsFilter
      : paymentsFilteredByDate;

  return (
    <Box
      pr="2.2rem"
      pl={{ base: "2.2rem", lg: 0 }}
      pt={{ base: 0, lg: "2.2rem" }}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Calendario</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Calendar
              onChange={setRangeDateSelected}
              value={rangeDateSelected}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box bgColor="#95cfd9" rounded="2.2rem" h="full" p="2rem">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading color="blue.900" fontWeight="black">
            Historial de pago
          </Heading>

          <Flex gap="1rem" alignItems="center">
            <Box mr="10px">
              <Text fontSize="14px">
                {dayjs(rangeDateSelected).format("DD/MM/YYYY")}
              </Text>
            </Box>
            <Box>
              <Button type="button" onClick={onOpen}>
                <BsCalendar />
              </Button>
            </Box>
          </Flex>
        </Flex>

        <Flex my="1rem">
          <Button
            borderBottom="2px solid"
            borderColor={
              typeEntitySelected === "PUBLIC"
                ? "gray.500"
                : "transparent"
            }
            rounded="0"
            bgColor="transparent"
            w="full"
            _hover={{}}
            onClick={() => setTypeEntitySelected("PUBLIC")}
          >
            Entidades publicas
          </Button>
          <Button
            borderBottom="2px solid"
            borderColor={
              typeEntitySelected === "PRIVATE"
                ? "gray.500"
                : "transparent"
            }
            rounded="0"
            bgColor="transparent"
            w="full"
            _hover={{}}
            onClick={() => setTypeEntitySelected("PRIVATE")}
          >
            Entidades privadas
          </Button>
        </Flex>

        <Box mt="0.5rem">
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              {paymentsRender.length === 0 && (
                <TableCaption>
                  No existe ningun pago realizado
                </TableCaption>
              )}
              <Thead>
                <Tr>
                  <Th>Servicio</Th>
                  <Th>Fecha abonada</Th>
                  <Th textAlign="right">Monto</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* array */}
                {paymentsRender.map(
                  (payment: Payment, index: number) => {
                    const service: Service | undefined =
                      services.find(
                        (service) => service.id === payment.serviceId
                      );

                    return (
                      <Tr key={index}>
                        <Td>{service?.name}</Td>
                        <Td>
                          {dayjs(payment.created_at).format(
                            "DD/MM/YYYY"
                          )}
                        </Td>
                        <Td isNumeric>
                          Gs. {payment.amount.toLocaleString("en-US")}
                        </Td>
                      </Tr>
                    );
                  }
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default History;
