import { Map } from "immutable";

import {
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export let uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);
    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);
    case LOGIN:
      return state.set("user", action.user);
    case LOGOUT:
      return state.set("isUserLoggedIn", false).set("user", null);
    default:
      break;
  }
  return state;
};
