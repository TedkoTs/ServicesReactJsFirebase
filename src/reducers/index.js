import services from "../reducers/services";
import selectedService from "../reducers/selectedService";
import { combineReducers } from "redux";

const serviceApp = combineReducers({
  services,
  selectedService
});

export default serviceApp;
