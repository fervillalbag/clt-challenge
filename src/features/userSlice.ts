import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const initialState = {
  id: "",
  fullname: "",
  email: "",
  balance: 2000000,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return { ...state, id: uuid(), ...payload };
    },
    logout: (state) => {
      state.email = "";
      state.id = "";
      state.fullname = "";
    },
    updateBalance: (state, { payload }) => {
      return {
        ...state,
        balance: state.balance - payload,
      };
    },
  },
});

export const { login, logout, updateBalance } = userSlice.actions;
export default userSlice.reducer;
