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

import { Debts as DebtsType } from "../interfaces/debts";
import { Service } from "../interfaces/service";
import { User } from "../interfaces/user";

const ListDebts: React.FC<{
  services: Service[];
  debtsResponse: DebtsType[];
  user: User;
}> = ({ debtsResponse, services, user }) => {
  return (
    <Box h="full" p="2rem">
      <Box h="full" bgColor="gray.300" rounded="3rem" p="2rem">
        <Heading fontWeight="black" color="blue.900">
          Lista de mis deudas
        </Heading>

        <TableContainer mt="1rem">
          <Table variant="simple" colorScheme="teal">
            {debtsResponse.length === 0 && (
              <TableCaption>No hay deudas pendientes!</TableCaption>
            )}
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Servicio</Th>
                <Th>Usuario</Th>
                <Th textAlign="right">Monto</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* array */}
              {debtsResponse.map((debt: DebtsType, index: number) => {
                const service: Service | undefined = services.find(
                  (service: Service) => service.id === debt.serviceId
                ) as Service;

                return (
                  <Tr key={index}>
                    <Td>{debt.id}</Td>
                    <Td>{service.name}</Td>
                    <Td>
                      {user.id === debt.userId && user.fullname}
                    </Td>
                    <Td isNumeric>
                      Gs. {debt.amount.toLocaleString("en-US")}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ListDebts;
