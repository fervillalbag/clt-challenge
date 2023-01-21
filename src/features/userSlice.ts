import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const initialState = {
  id: "",
  fullname: "",
  email: "",
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
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
