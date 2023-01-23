import { getRandomInt } from "../hooks/useRandomNum";

export const DATA_PAYMENTS = [
  {
    serviceId: getRandomInt(1, 6),
    amount: getRandomInt(200000, 600000),
    created_at: new Date("2022-01-12"),
  },
  {
    serviceId: getRandomInt(1, 6),
    amount: getRandomInt(200000, 600000),
    created_at: new Date("2022-01-05"),
  },
  {
    serviceId: getRandomInt(1, 6),
    amount: getRandomInt(200000, 600000),
    created_at: new Date("2022-01-02"),
  },
  {
    serviceId: getRandomInt(1, 6),
    amount: getRandomInt(200000, 600000),
    created_at: new Date("2022-01-22"),
  },
  {
    serviceId: getRandomInt(1, 6),
    amount: getRandomInt(200000, 600000),
    created_at: new Date("2022-01-14"),
  },
  {
    serviceId: getRandomInt(1, 6),
    amount: getRandomInt(200000, 600000),
    created_at: new Date("2022-01-19"),
  },
];
