import mainApi from "../../utils/api";

export const GET_SERVICES_INFO = "GET_SERVICES_INFO";
export const GET_SERVICES_INFO_SUCCES = "GET_SERVICES_INFO_SUCCES";
export const GET_SERVICES_INFO_FAILED = "GET_SERVICES_INFO_FAILED";

export function getServices() {
  return function (dispatch) {
    dispatch({
      type: GET_SERVICES_INFO,
    });
    mainApi
      .getServices()
      .then((res) => {
        dispatch({
          type: GET_SERVICES_INFO_SUCCES,
          services: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SERVICES_INFO_FAILED,
        });
      });
  };
}
