// ==============>

const initialState = { count: 0 };
const store = createStore(rootReducer, initialState);

// ==============>

buttonIncrementElement.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

buttonDecrementElement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});

// ==============>

store.subscribe(() => {
  const state = store.getState();

  countElement.textContetnt = state;
});

store.dispatch({ type: "INIT_APPLICATION" });

// ==============>

function createStore() {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(sub => {
        sub();
      });
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}

function rootReducer(state, action) {
  switch (action.type) {
    case "increment":
      return (state.count = state.count + 1);
    case "decrement":
      return (state.count = state.count - 1);

    default:
      return state;
  }
}

console.log(store.getState());
