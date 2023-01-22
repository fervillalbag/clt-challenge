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
import { useDispatch, useSelector } from "react-redux";

import { Service } from "../interfaces/service";
import { addDebt } from "../features/debtsSlice";
import { User } from "../interfaces/user";
import { updateBalance } from "../features/userSlice";
import { createPayment } from "../features/paymentSlice";
import { Debts } from "../interfaces/debts";

import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";

const FormPayDebts: React.FC<{ services: Service[] }> = ({
  services,
}) => {
  const dispatch = useDispatch();

  const debts = useSelector(
    (state: { debts: Debts[] }) => state.debts
  );
  const user = useSelector((state: { user: User }) => state.user);

  const [infoPay, setInfoPay] = React.useState<any>({
    nroFactura: "",
    serviceId: 0,
    nroCta: "",
    nameCta: "",
    cvc: "",
    debtId: "",
    amount: null,
  });

  React.useEffect(() => {
    const debt = debts.find((debt) => debt.id === infoPay.debtId);
    setInfoPay({ ...infoPay, amount: debt?.amount });
  }, [infoPay.debtId]);

  const handleFocus = (event: any) => event.target.select();

  const handlePayDebt = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const debt = debts.find(
      (debt) => debt.id === infoPay.debtId
    ) as Debts;

    const service = services.find(
      (service) => service.id === +debt.serviceId
    ) as Service;

    // pay debts
    dispatch(
      addDebt({
        id: debt.id,
        serviceId: service.id,
        userId: user.id,
        amount: infoPay.amount,
      })
    );

    // remove balance from user
    dispatch(updateBalance(infoPay.amount));

    // pay payments
    dispatch(
      createPayment({
        serviceId: service.id,
        userId: user.id,
        amount: infoPay.amount,
        nroFactura: infoPay.nroFactura,
      })
    );

    toast.success("Pago realizado!");

    setInfoPay({
      nroFactura: "",
      serviceId: 0,
      nroCta: "",
      nameCta: "",
      cvc: "",
      debtId: "",
      amount: null,
    });
  };

  return (
    <Box h="full" p="2rem" pl="0">
      <Box h="full" bgColor="#0f1322" rounded="3rem" p="2rem">
        <Heading color="white" fontWeight="black">
          Pagar deuda
        </Heading>

        <Grid as="form" onSubmit={handlePayDebt} mt="1rem">
          <Text
            display="block"
            mb="0.5rem"
            as="label"
            htmlFor="nro-factura"
            color="white"
          >
            Nro de Factura
          </Text>
          <Select
            bgColor="white"
            value={infoPay.debtId}
            onChange={(e) =>
              setInfoPay({ ...infoPay, debtId: e.target.value })
            }
          >
            <option value="">Seleccione deuda</option>
            {debts.map((debt) => {
              const service = services.find(
                (service) => service.id === debt.serviceId
              ) as Service;

              return (
                <option key={debt.id} value={debt.id}>
                  {service.name}
                </option>
              );
            })}
          </Select>

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
                type="number"
                onFocus={handleFocus}
                value={infoPay.amount ?? "0"}
                onChange={(e) =>
                  setInfoPay({ ...infoPay, amount: +e.target.value })
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
        </Grid>
      </Box>
    </Box>
  );
};

export default FormPayDebts;
