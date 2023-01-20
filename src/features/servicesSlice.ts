import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: 1,
    name: "ANDE",
    type: "PUBLIC",
  },
  {
    id: 2,
    name: "TIGO",
    type: "PRIVATE",
  },
  {
    id: 3,
    name: "ESSAP",
    type: "PUBLIC",
  },
];

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getAllServices: (state) => {
      return state;
    },
  },
});

export const { getAllServices } = serviceSlice.actions;
export default serviceSlice.reducer;
