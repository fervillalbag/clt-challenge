import { createSlice } from "@reduxjs/toolkit";
import { Payment } from "../interfaces/payments";

const initialState: Payment[] | [] = [];

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    createPayment: (state, { payload }) => {
      return [...state, payload];
    },
    cleanPayments: (state) => {
      return [];
    },
  },
});

export const { createPayment, cleanPayments } = paymentSlice.actions;
export default paymentSlice.reducer;
