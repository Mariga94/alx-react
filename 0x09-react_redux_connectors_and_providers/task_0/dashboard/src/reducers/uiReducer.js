const { Map } = require("immutable");
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export let uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true)
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false )
    case LOGIN_SUCESS:
      return state.set('isUserLoggedIn', true)
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      break;
  }
  return state
};
