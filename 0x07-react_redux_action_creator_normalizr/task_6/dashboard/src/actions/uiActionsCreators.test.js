import Adapter from "@cfaester/enzyme-adapter-react-18";
import { configure } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import configureStore from "redux-mock-store";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
} from "./uiActionCreators";

configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

describe("Test actions", () => {
  it("Test Login", () => {
    expect(login("test@gmail.com", "pass")).toEqual({
      type: "LOGIN",
      user: { email: "test@gmail.com", password: "pass" },
    });
  });

  it("Logout", () => {
    expect(logout()).toEqual({ type: "LOGOUT" });
  });

  it("displayNotificationDrawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: "DISPLAY_NOTIFICATION_DRAWER",
    });
  });

  it("hideNotificationDrawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: "HIDE_NOTIFICATION_DRAWER",
    });
  });
});
