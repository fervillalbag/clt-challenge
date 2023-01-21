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
  {
    id: 4,
    name: "COPACO",
    type: "PRIVATE",
  },
  {
    id: 5,
    name: "STARLINK",
    type: "PRIVATE",
  },
  {
    id: 6,
    name: "TIGO TV",
    type: "PRIVATE",
  },
  {
    id: 7,
    name: "STAR+",
    type: "PRIVATE",
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
