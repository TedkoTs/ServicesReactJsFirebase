import { createStore, combineReducers } from "redux";

const initStore = () => {
  const serviceApp = combineReducers({
    service: (state = { items: [] }, action) => {
      if (action.type === "FETCH_SERVICES") {
        return { ...state, items: action.services };
      }
      return state
    }
  });

  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default initStore;
