import {
  GET_DIRECTIONS_INFO,
  GET_DIRECTIONS_INFO_FAILED,
  GET_DIRECTIONS_INFO_SUCCES,
} from "../actions/directions";

const initialState = {
  directions: [],
  directionsRequest: false,
  directionsFailed: false,
};

export const directionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIRECTIONS_INFO: {
      return {
        ...state,
        directionsRequest: true,
        directionsFailed: false,
      };
    }

    case GET_DIRECTIONS_INFO_SUCCES: {
      return {
        ...state,
        directions: action.directions,
        directionsRequest: false,
      };
    }
    case GET_DIRECTIONS_INFO_FAILED: {
      return {
        directions: [],
        directionsFailed: true,
        directionsRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
