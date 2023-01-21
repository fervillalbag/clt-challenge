import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { Service } from "../interfaces/service";
import { InfoPay } from "../interfaces/infoPay";
import { toast } from "react-hot-toast";

const FormPay: React.FC = () => {
  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const [infoPay, setInfoPay] = React.useState<InfoPay>({
    nroFactura: "",
    serviceId: 0,
    nroCta: "",
    nameCta: "",
    cvc: "",
  });

  const serviceSelected: Service | undefined = services.find(
    (service) => service.id === infoPay.serviceId
  );

  const handlePay = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (
      infoPay.nroFactura === "" ||
      !infoPay.serviceId ||
      infoPay.serviceId === 0 ||
      infoPay.nroCta === "" ||
      infoPay.nameCta === "" ||
      infoPay.cvc === ""
    ) {
      return toast.error("Todos los campos son obligatorios");
    }
  };

  return (
    <Grid
      pr={{ base: "2.2rem", lg: 0 }}
      pl="2.2rem"
      pt="2.2rem"
      as="form"
      onSubmit={handlePay}
    >
      <Box bgColor="#0f1322" rounded="2.2rem" h="full" p="2rem">
        <Heading color="white">Pagar servicios</Heading>

        <Box my="1rem">
          <Text as="label" htmlFor="nro-factura" color="white">
            Nro de Factura
          </Text>
          <Input
            value={infoPay.nroFactura}
            onChange={(e) =>
              setInfoPay({ ...infoPay, nroFactura: e.target.value })
            }
            mt="0.5rem"
            bgColor="white"
            placeholder="Ejemplo: 23982137273-277"
          />
        </Box>

        <Box mb="1rem">
          <Text as="label" htmlFor="nro-factura" color="white">
            Seleccione servicio
          </Text>

          <Select
            value={infoPay.serviceId}
            onChange={(e) =>
              setInfoPay({ ...infoPay, serviceId: +e.target.value })
            }
            bgColor="white"
            color="#999"
            mt="0.5rem"
          >
            <option value="">Lista de servicios</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </Select>
        </Box>

        <Heading color="white">
          {serviceSelected?.name || "--"}
        </Heading>

        <Box mt="1rem">
          <Text color="white">Informacion de la tarjeta</Text>

          <Box my="1rem">
            <Text as="label" htmlFor="nro-factura" color="white">
              Nro de cuenta
            </Text>
            <Input
              value={infoPay.nroCta}
              onChange={(e) =>
                setInfoPay({ ...infoPay, nroCta: e.target.value })
              }
              mt="0.5rem"
              bgColor="white"
              placeholder="Ejemplo: XXXX XXXX XXXX XXXX"
            />
          </Box>

          <Box my="1rem">
            <Text as="label" htmlFor="nro-factura" color="white">
              Nombre de la cuenta
            </Text>
            <Input
              value={infoPay.nameCta}
              onChange={(e) =>
                setInfoPay({ ...infoPay, nameCta: e.target.value })
              }
              mt="0.5rem"
              bgColor="white"
              placeholder="Ejemplo: Juan Lopez"
            />
          </Box>

          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Input
                value={infoPay.cvc}
                onChange={(e) =>
                  setInfoPay({ ...infoPay, cvc: e.target.value })
                }
                type="number"
                w="7rem"
                mt="0.5rem"
                bgColor="white"
                placeholder="CVC"
              />
            </Box>

            <Button
              type="submit"
              m="0"
              h="2.5rem"
              px="1.2rem"
              rounded="4px"
              minW="initial"
              bgColor="#fe4c24"
              color="white"
            >
              Pagar
            </Button>
          </Flex>
        </Box>
      </Box>
    </Grid>
  );
};

export default FormPay;
