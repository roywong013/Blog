import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false, idToken: "" };

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.idToken = action.payload;
    },
    logout(state) {
      state.isLogin = false;
      state.idToken = "";
      console.log(state.idToken);
    }
  }
});

export const loginActions = slice.actions;
export default slice.reducer;
