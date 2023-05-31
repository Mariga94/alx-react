import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes.js";
import {
  markAsAread,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from "../actions/notificationActionCreators.js";

configure({ adapter: new Adapter() });

describe("Testing the notificationReducer", () => {
  let newState = initState;

  it(" FETCH_NOTIFICATIONS_SUCCESS returns the data ", () => {
    let action = fetchNotificationsSuccess();
    let expected = notificationReducer(undefined, action);
    action.data.map((notification) => {
      newState.notifications.push({ ...notification, isRead: false });
    });
    expect(expected).toEqual(newState);
  });

  it(" SET_TYPE_FILTER returns the data with the item updated", () => {
    let action = setNotificationFilter("URGENT");
    let expected = notificationReducer(newState, action);
    newState = {
      ...newState,
      filter: action.filter,
    };
    expect(expected).toEqual(newState);
  });
  it(" MARK_AS_READ returns the data with the right updated", () => {
    let newStates = notificationReducer(undefined, fetchNotificationsSuccess());
    let action = markAsAread(1);
    let expected = notificationReducer(newState, action);
    newState = {
      filter: ns.filter,
      notifications: [],
    };
    newStates.notifications.map((course) => {
      if (course.id == action.index) {
        newState.notifications.push({ ...course, isRead: true });
      } else {
        newState.notifications.push(course);
      }
    });
    expect(expected).toEqual(newState);
    newState = newStates;
  });
});
