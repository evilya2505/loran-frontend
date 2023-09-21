import mainApi from "../../utils/api";
export const GET_DOCTORS_INFO = "GET_DOCTORS_INFO";
export const GET_DOCTORS_INFO_SUCCES = "GET_DOCTORS_INFO_SUCCES";
export const GET_DOCTORS_INFO_FAILED = "GET_DOCTORS_INFO_FAILED";
export const SET_CURRENT_DOCTOR_INFO = "SET_CURRENT_DOCTOR_INFO";
export const EDIT_DOCTOR_INFO = "EDIT_DOCTOR_INFO";
export function getDoctors() {
  return function (dispatch) {
    dispatch({
      type: GET_DOCTORS_INFO,
    });
    mainApi
      .getDoctors()
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_DOCTORS_INFO_SUCCES,
          doctors: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_DOCTORS_INFO_FAILED,
        });
      });
  };
}

export function editDoctor(data) {
  return function (dispatch) {
    dispatch({
      type: EDIT_DOCTOR_INFO,
    });
    console.log(data);
  };
}
