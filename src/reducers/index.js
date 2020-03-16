import { combineReducers } from "redux";
import services from "../reducers/services";
import selectedService from "../reducers/selectedService";
import auth from "./auth";


const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
});

export default serviceApp;
