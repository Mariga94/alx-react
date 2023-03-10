import {
  DISPLAY_NOTIFICATION_DRAWER,
  LOGOUT,
  LOGIN,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};

const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    }
}

const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    }
}
