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
      state = [];
    },
  },
});

export const { createPayment } = paymentSlice.actions;
export default paymentSlice.reducer;