import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false, token: "" };

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLogin = false;
    }
  }
});

export const loginActions = slice.actions;
export default slice.reducer;
