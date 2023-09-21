import mainApi from "../../utils/api";
export const GET_DIRECTIONS_INFO = "GET_DIRECTIONS_INFO";
export const GET_DIRECTIONS_INFO_SUCCES = "GET_DIRECTIONS_INFO_SUCCES";
export const GET_DIRECTIONS_INFO_FAILED = "GET_DIRECTIONS_INFO_FAILED";

export function getDirections() {
  return function (dispatch) {
    dispatch({
      type: GET_DIRECTIONS_INFO,
    });
    mainApi
      .getDirections()
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_DIRECTIONS_INFO_SUCCES,
          directions: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_DIRECTIONS_INFO_FAILED,
        });
      });
  };
}
