import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { getRandomInt } from "../hooks/useRandomNum";
import { Debts } from "../interfaces/debts";

const initialState: Debts[] | [] = [
  {
    id: uuid(),
    serviceId: 1,
    userId: "",
    amount: getRandomInt(200000, 600000),
  },
  {
    id: uuid(),
    serviceId: 2,
    userId: "",
    amount: getRandomInt(200000, 600000),
  },
  {
    id: uuid(),
    serviceId: 3,
    userId: "",
    amount: getRandomInt(200000, 600000),
  },
  {
    id: uuid(),
    serviceId: 4,
    userId: "",
    amount: getRandomInt(200000, 600000),
  },
];

const debtsSlice = createSlice({
  name: "debts",
  initialState,
  reducers: {
    updateUserLogin: (state, { payload }) => {
      return state.map((debt: Debts) => {
        return {
          ...debt,
          userId: payload,
        };
      });
    },

    addDebt: (state, { payload }) => {
      return state.filter((debt) => debt.id !== payload.id);
    },

    clearDebts: (state) => {
      state = [];
    },
  },
});

export const { updateUserLogin, addDebt, clearDebts } =
  debtsSlice.actions;
export default debtsSlice.reducer;
