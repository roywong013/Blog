import { createSlice } from "@reduxjs/toolkit";

const initialState = { articles: [], articlesCount: 0, id: 0 };

const slice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticles(state, payload) {
      state.articles = [payload, ...state.articles];
      state.articlesCount++;
      state.id++;
    }
  }
});

export const articlesActions = slice.actions;
export default slice.reducer;
