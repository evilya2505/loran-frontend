import {
  AUTHORIZATION,
  AUTHORIZATION_SUCCESS,
  LOGOUT,
  REQUEST_FAILED,
  LOGOUT_SUCCESS,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
} from "../actions/auth";

const initialState = {
  userInfo: {},
  request: false,
  requestFailed: false,
  loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION: {
      return {
        ...state,
        request: true,
      };
    }
    case AUTHORIZATION_SUCCESS: {
      return {
        ...state,
        userInfo: action.userInfo,
        loggedIn: true,
        request: false,
        requestFailed: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        request: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return initialState;
    }

    case GET_USER_INFO: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        userInfo: action.userInfo,
        request: false,
        requestFailed: false,
        loggedIn: true,
      };
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        requestFailed: true,
        request: false,
      };
    }
    default: {
      return state;
    }
  }
};
