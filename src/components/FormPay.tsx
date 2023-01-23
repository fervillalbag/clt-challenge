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
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import { Service } from "../interfaces/service";
import { InfoPay } from "../interfaces/infoPay";
import { createPayment } from "../features/paymentSlice";
import { User } from "../interfaces/user";
import { updateBalance } from "../features/userSlice";
import { Debts } from "../interfaces/debts";
import { addDebt } from "../features/debtsSlice";

const FormPay: React.FC = () => {
  const dispatch = useDispatch();

  const services = useSelector(
    (state: { services: Service[] }) => state.services
  );

  const debts = useSelector(
    (state: { debts: Debts[] }) => state.debts
  );

  const user = useSelector((state: { user: User }) => state.user);

  const [infoPay, setInfoPay] = React.useState<InfoPay>({
    nroDocumento: "",
    serviceId: 0,
    nroCta: "",
    nameCta: "",
    cvc: "",
    amount: 0,
  });

  const [serviceSelected, setServiceSelected] =
    React.useState<Debts>();

  // TODO: look up the data type name of this event
  const handleFocus = (event: any) => event.target.select();

  const handleSearchDebt = () => {
    setServiceSelected({
      id: "",
      serviceId: 0,
      userId: "",
      amount: 0,
    });

    const debt = debts.find(
      (debt) =>
        debt.userId === infoPay.nroDocumento &&
        debt.serviceId === infoPay.serviceId
    );

    if (debt?.id) {
      toast.success("Deuda encontrada");
      return setServiceSelected(debt);
    }

    toast.error("Deuda no encontrada");
  };

  const handlePay = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (
      infoPay.nroDocumento === "" ||
      !infoPay.serviceId ||
      infoPay.serviceId === 0 ||
      infoPay.nroCta === "" ||
      infoPay.nameCta === "" ||
      infoPay.cvc === ""
    ) {
      return toast.error("Todos los campos son obligatorios");
    }

    if (Number(infoPay.amount) < 0) {
      return toast.error("El valor debe ser un valor positivo");
    }

    if (!serviceSelected?.id)
      return toast.error("No se puede realizar dicha operacion");

    const parseAmount = Number(
      serviceSelected?.amount
        .toString()
        .replaceAll(".", "")
        .replaceAll(",", "")
    );

    // pay debts
    dispatch(
      addDebt({
        id: serviceSelected?.id,
        serviceId: infoPay.serviceId,
        userId: user.id,
        amount: infoPay.amount,
      })
    );

    dispatch(updateBalance(parseAmount));

    dispatch(
      createPayment({
        serviceId: infoPay.serviceId,
        userId: user.id,
        amount: parseAmount,
        nroFactura: infoPay.nroDocumento,
        created_at: dayjs().format(),
      })
    );

    setInfoPay({
      nroDocumento: "",
      serviceId: 0,
      nroCta: "",
      nameCta: "",
      cvc: "",
      amount: 0,
    });

    toast.success("Pago realizado!");
  };

  return (
    <Grid
      pr={{ base: "2.2rem", lg: 0 }}
      pl="2.2rem"
      pt="2.2rem"
      as="form"
      onSubmit={handlePay}
    >
      <Flex
        outline="0.7rem solid"
        outlineColor={serviceSelected?.id ? "green.300" : "red.200"}
        flexDir="column"
        justifyContent="space-between"
        bgColor="#0f1322"
        rounded="2.2rem"
        h="full"
        p="2rem"
      >
        <Box>
          <Heading color="white">Pagar servicios</Heading>
          <Box my="1rem">
            <Text as="label" htmlFor="nro-factura" color="white">
              Nro de Documento
            </Text>
            <Input
              value={infoPay.nroDocumento}
              onChange={(e) =>
                setInfoPay({
                  ...infoPay,
                  nroDocumento: e.target.value,
                })
              }
              mt="0.5rem"
              bgColor="white"
              placeholder=""
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

          {/* <Heading color="white">
            {serviceSelected?.name || "--"}
          </Heading> */}

          <Flex alignItems="center" justifyContent="space-between">
            <Heading
              fontSize="1.2rem"
              textTransform="uppercase"
              color="white"
            >
              {serviceSelected?.id.slice(0, 16) || "XXXX-XXXX-XXXX"}
            </Heading>

            <Button
              type="button"
              border="1px solid white"
              bgColor="transparent"
              color="white"
              _hover={{ bgColor: "blue.900" }}
              _focusWithin={{}}
              _active={{ bgColor: "transparent" }}
              _focus={{}}
              onClick={handleSearchDebt}
            >
              Verificar
            </Button>
          </Flex>
        </Box>

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

          <Box my="1rem">
            <Text as="label" htmlFor="nro-factura" color="white">
              Monto de la cuota
            </Text>
            <Input
              disabled
              _disabled={{ opacity: 0.7 }}
              value={serviceSelected?.amount}
              type="number"
              onFocus={handleFocus}
              mt="0.5rem"
              bgColor="white"
              // placeholder="Ejemplo: Juan Lopez"
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
      </Flex>
    </Grid>
  );
};

export default FormPay;
