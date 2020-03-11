import { createStore, combineReducers } from "redux";
import servicesReducer from "../reducers/index";

const addLoggerToDispach = store => {
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

const initStore = () => {
  const serviceApp = combineReducers({
    service: servicesReducer
  });

  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch = addLoggerToDispach(store);

  return store;
};

export default initStore;
