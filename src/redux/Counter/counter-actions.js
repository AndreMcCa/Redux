import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../../constants/counter-constants";

export const increment = value => ({ type: COUNTER_INCREMENT, payload: value });
export const decrement = value => ({ type: COUNTER_DECREMENT, payload: value });
