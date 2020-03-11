import { createStore, combineReducers } from "redux";
import servicesReducer from "../reducers/index";

const addLoggerToDispatch = store => {
  const dispatch = store.dispatch;

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: blue", store.getState());
    console.log("%c action", "color: green", action);
    const retrunValue = dispatch(action);
    console.log("%c next state", "color: red", store.getState());
    console.groupEnd(action.type);
    return retrunValue;
  };
};

const addPromiseToDispatch = store => {
  const dispatch = store.dispatch;

  return action => {
    if (typeof action.then === "function") {
      return action.then(dispatch);
    }

    return dispatch(action);
  };
};

const initStore = () => {
  const serviceApp = combineReducers({
    service: servicesReducer
  });

  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggerToDispatch(store);
  }
  store.dispatch = addPromiseToDispatch(store);

  return store;
};

export default initStore;
