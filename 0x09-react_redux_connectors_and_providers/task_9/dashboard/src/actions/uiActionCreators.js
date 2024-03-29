import {
  DISPLAY_NOTIFICATION_DRAWER,
  LOGOUT,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundLogin = (email, password) => login(dispatch(email, password));
export const boundLogOut = () => logout(dispatch());
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());
export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:8080/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
