import { Map, fromJS } from "immutable";

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";

const defaultState = {
  notifications: [],
  filter: "DEFAULT",
  loading: false,
};

import { notificationsNormalizer } from "../schema/notifications";

export let notificationReducer = (state = Map(defaultState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);

      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normalizedData);
    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    case SET_LOADING_STATE:
      return state.set("loading", action.loading);
    default:
      return state;
  }
};
