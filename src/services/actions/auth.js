import mainApi from "../../utils/api";
export const AUTHORIZATION = "AUTHORIZATION";
export const AUTHORIZATION_SUCCESS = "AUTHORIZATION_SUCCESS";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// export const EDIT_USER_INFO = "EDIT_USER_INFO";
// export const EDIT_USER_INFO_SUCCESS = "EDIT_USER_INFO_SUCCESS";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";

export const REQUEST_FAILED = "REQUEST_FAILED";

export function authorization(userData) {
  return function (dispatch) {
    dispatch({
      type: AUTHORIZATION,
    });
    mainApi
      .login(userData)
      .then((res) => {
        localStorage.setItem("token", res.token);

        dispatch({
          type: AUTHORIZATION_SUCCESS,
          userInfo: res.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: REQUEST_FAILED,
        });
      });
  };
}
export function getUserInfo() {
  return async function (dispatch) {
    dispatch({
      type: GET_USER_INFO,
    });

    try {
      const res = await mainApi.getUserInfo();
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        userInfo: res,
      });
    } catch (err) {
      dispatch({
        type: REQUEST_FAILED,
      });
    }
  };
}

export function logout() {
  // return function (dispatch) {
  //   dispatch({
  //     type: LOGOUT,
  //   });
  //   mainApi
  //     .logout()
  //     .then((res) => {
  //       localStorage.removeItem("token");
  //       dispatch({
  //         type: LOGOUT_SUCCESS,
  //       });
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: REQUEST_FAILED,
  //       });
  //     });
  // };
}
