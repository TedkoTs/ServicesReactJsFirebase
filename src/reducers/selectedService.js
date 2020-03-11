import { FETCH_SERVICE_SUCCESS } from "../types/index";

const selectedService = (state = { item: {} }, action) => {
  switch (action.type) {
    case FETCH_SERVICE_SUCCESS:
      return { item: action.service };
    default:
      return state;
  }
};

export default selectedService;
