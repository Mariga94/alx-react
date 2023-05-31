import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import { uiReducer, initialState } from "./uiReducer";
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

configure({ adapter: new Adapter() });
describe("Reducer", () => {
  test("verify state returned by the uiReducer function equals the intial state when no action is passed", () => {
    const state = uiReducer(initialState);
    expect(state.toJS()).toEqual(initialState);
  });

  test("verify the state returned by the uiReducer function equals the initial state when the action SELECT_COURSEE is passed", () => {
    const state = uiReducer(initialState, { action: "SELECT_COURSE" });
    expect(state.toJS()).toEqual(initialState);
  });

  test("verify state returned by the uiReducer function, when action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the is NotificationDrawerVisible property", () => {
    const state = uiReducer(
      initialState.set("isNotificationDrawerVisible", true),
      {
        type: HIDE_NOTIFICATION_DRAWER,
      }
    );
    expect(
      state.toJS().toEqual({
        ...initialState,
        isNotificationDrawerVisible: true,
      })
    );
  });
});
