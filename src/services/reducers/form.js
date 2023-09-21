import { SET_IS_ON_SUBMIT } from "../actions/form";

const initialState = {
  isOnSubmit: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ON_SUBMIT: {
      return {
        isOnSubmit: true,
      };
    }

    default: {
      return state;
    }
  }
};
