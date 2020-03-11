import { FETCH_SERVICES_SUCCESS } from "../types/index";


const services = (state = { items: [] }, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return { ...state, items: action.services };
    default:
      return state;
  }
};

export default services;
