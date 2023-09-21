import {
  GET_SERVICES_INFO,
  GET_SERVICES_INFO_FAILED,
  GET_SERVICES_INFO_SUCCES,
} from "../actions/services";

const initialState = {
  services: [],
  servicesRequest: false,
  servicesFailed: false,
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES_INFO: {
      return {
        ...state,
        servicesRequest: true,
        servicesFailed: false,
      };
    }

    case GET_SERVICES_INFO_SUCCES: {
      return {
        ...state,
        services: action.services,
        servicesRequest: false,
      };
    }
    case GET_SERVICES_INFO_FAILED: {
      return {
        services: [],
        servicesFailed: true,
        servicesRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
