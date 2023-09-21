import {
  GET_DOCTORS_INFO,
  GET_DOCTORS_INFO_FAILED,
  GET_DOCTORS_INFO_SUCCES,
  SET_CURRENT_DOCTOR_INFO,
} from "../actions/doctors";

const initialState = {
  currentDoctorInfo: {},
  doctors: [],
  doctorsRequest: false,
  doctorsFailed: false,
};

export const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DOCTOR_INFO: {
      const doctorKeyTitle = action.infoPart.title;
      const doctorValue = action.infoPart.value;
      let newObj = state.currentDoctorInfo;
      newObj[doctorKeyTitle] = doctorValue;
      // console.log(doctorKeyTitle, doctorValue);
      return {
        ...state,
        currentDoctorInfo: newObj,
      };
    }
    case GET_DOCTORS_INFO: {
      return {
        ...state,
        doctorsRequest: true,
        doctorsFailed: false,
      };
    }

    case GET_DOCTORS_INFO_SUCCES: {
      return {
        ...state,
        doctors: action.doctors,
        doctorsRequest: false,
      };
    }
    case GET_DOCTORS_INFO_FAILED: {
      return {
        doctors: [],
        doctorsFailed: true,
        doctorsRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
