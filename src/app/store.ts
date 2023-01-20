import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import servicesSlice from "../features/servicesSlice";

export const store = configureStore({
  reducer: {
    services: servicesSlice,
  },
});
