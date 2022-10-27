import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const userIsLogin = !!initialToken;
const expiredIn = localStorage.getItem("expiredIn");

const initialState = {
  idToken: initialToken,
  isLogin: userIsLogin,
  expirationTime: expiredIn || ""
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.idToken = action.payload;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expiredIn", action.payload.expirationTime);
      state.expirationTime = action.payload.expirationTime;
    },
    logout(state) {
      state.isLogin = false;
      state.idToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("expiredIn");
    }
  }
});

export const loginActions = slice.actions;
export default slice.reducer;
