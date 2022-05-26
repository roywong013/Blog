import { configureStore } from "@reduxjs/toolkit"
import login from "./slice/login"



const store = configureStore({
  reducer: {
    login
  }
});

export default store;
