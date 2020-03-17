import { combineReducers } from "redux";
import services from "../reducers/services";
import selectedService from "../reducers/selectedService";
import auth from "./auth";
import offers from "./offers";

const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
  offers
});

export default serviceApp;
