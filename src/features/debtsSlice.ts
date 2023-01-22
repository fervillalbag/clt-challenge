import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { Debts } from "../interfaces/debts";

const initialState: Debts[] | [] = [
  {
    id: uuid(),
    serviceId: 0,
    userId: "",
    amount: 20000,
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
  },
});

export const { updateUserLogin } = debtsSlice.actions;
export default debtsSlice.reducer;
