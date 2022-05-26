import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false };

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    }
  }
});

export const loginActions = slice.actions;
export default slice.reducer;
