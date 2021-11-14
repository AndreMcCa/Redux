import { combineReducers } from "redux";
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../../constants/counter-constants";

const valueReducer = function (state = 0, { type, payload }) {
  switch (type) {
    case COUNTER_INCREMENT:
      return state + payload;
    case COUNTER_DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = function (state = 1, action) {
  return state;
};

const counterReducer = combineReducers({ value: valueReducer, step: stepReducer });
export default counterReducer;
