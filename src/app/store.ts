import { configureStore } from "@reduxjs/toolkit";

import servicesSlice from "../features/servicesSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    user: userSlice,
  },
});
