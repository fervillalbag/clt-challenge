import { configureStore } from "@reduxjs/toolkit";

import debtsSlice from "../features/debtsSlice";
import paymentSlice from "../features/paymentSlice";
import servicesSlice from "../features/servicesSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    user: userSlice,
    payments: paymentSlice,
    debts: debtsSlice,
  },
});
