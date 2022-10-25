import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");

const userIsLogin = !!initialToken;

const initialState = { isLogin: userIsLogin, idToken: initialToken };

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.idToken = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.isLogin = false;
      state.idToken = "";
      localStorage.removeItem("token");
    }
  }
});

export const loginActions = slice.actions;
export default slice.reducer;
