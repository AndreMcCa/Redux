import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./Counter/counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// ================================ >

// const initialState = {
//   counter: {
//     value: 0,
//     step: 1,
//   },
//   user: {
//     name: "Jack",
//     email: "",
//   },
//   todos: {},
// };
