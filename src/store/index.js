import { createStore } from "redux";
import serviceApp from "../reducers/index";

const logger = store => nextDispatch => action => {
  console.group(action.type);
  console.log("%c prev state", "color: blue", store.getState());
  console.log("%c action", "color: green", action);
  const retrunValue = nextDispatch(action);
  console.log("%c next state", "color: red", store.getState());
  console.groupEnd(action.type);
  return retrunValue;
};

const promise = store => nextDispatch => action => {
  if (typeof action.then === "function") {
    return action.then(nextDispatch);
  }

  return nextDispatch(action);
};

const applyMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach(middleware => {
      store.dispatch = middleware(store)(store.dispatch);
    });
};

const initStore = () => {
  const middlewares = [promise];
 
  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  applyMiddlewares(store, middlewares);

  return store;
};

export default initStore;
