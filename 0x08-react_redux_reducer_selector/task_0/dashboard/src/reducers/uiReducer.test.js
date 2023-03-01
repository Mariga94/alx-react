import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import { uiReducer, initState } from "./uiReducer";

configure({ adapter: new Adapter() });
describe("Reducer", () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  test("verify state returned by the uiReducer function equals the intial state when no action is passed", () => {
    const state = uiReducer(initialState);
    expect(state).toEqual(initialState);
  });

  test("verify the state returned by the uiReducer function equals the initial state when the action SELECT_COURSEE is passed", () => {
    const state = uiReducer(initialState, { action: "SELECT_COURSE" });
    expect(state).toEqual(initialState);
  });

  test("verify state returned by the uiReducer function, when action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the is NotificationDrawerVisible property", () => {
    const state = uiReducer(initState, {
      action: "DISPLAY_NOTIFICATION_DRAWER",
    });
    const resultState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    expect(state).toEqual(resultState);
  });
});
