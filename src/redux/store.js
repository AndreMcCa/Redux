import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants/counter-constants";

const initialState = {
  counter: {
    value: 0,
    step: 1,
  },
  user: {
    name: "Jack",
    email: "",
  },
  todos: {},
};

/**
 * Reducer - функция - принимает предыдущее состояния хранилища и action,
 * и на базе предыдущего состояния и action
 * возвращает новое сотояние - записывает в store.
 * Все reducers получают все экшены, и обрабатывают по полю type
 *
 */

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
