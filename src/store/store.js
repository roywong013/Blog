import { configureStore } from "@reduxjs/toolkit";
import login from "./slice/login";
import articles from "./slice/articles";

const store = configureStore({
  reducer: {
    login,
    articles
  }
});

export default store;
