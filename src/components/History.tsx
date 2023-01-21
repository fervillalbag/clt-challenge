import React from "react";
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
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { User } from "../interfaces/user";
import { Service } from "../interfaces/service";
import { Payment } from "../interfaces/payments";

const History: React.FC = () => {
  const payments = useSelector(
    (state: { payments: any }) => state.payments
  );

  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const user = useSelector((state: { user: User }) => state.user);

  return (
    <Box
      pr="2.2rem"
      pl={{ base: "2.2rem", lg: 0 }}
      pt={{ base: 0, lg: "2.2rem" }}
    >
      <Box bgColor="#95cfd9" rounded="2.2rem" h="full" p="2rem">
        <Heading color="blue.900" fontWeight="black">
          Historial de pago
        </Heading>

        <Box mt="0.5rem">
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <TableCaption>
                Imperial to metric conversion factors
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Servicio</Th>
                  <Th>Usuario</Th>
                  <Th>Monto</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* array */}
                {payments.map((payment: Payment, index: number) => {
                  const service: Service | undefined = services.find(
                    (service) => service.id === payment.serviceId
                  );

                  return (
                    <Tr key={index}>
                      <Td>{service?.name}</Td>
                      <Td>
                        {user.id === payment.userId && user.fullname}
                      </Td>
                      <Td isNumeric>
                        Gs. {payment.amount.toLocaleString("en-US")}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default History;
