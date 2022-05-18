import { createStore } from "redux";

let defaultState = {};

const reducer = (state = defaultState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
