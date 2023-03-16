import Adapter from "@cfaester/enzyme-adapter-react-18";
import { configure } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes.js";
import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators.js";

configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

describe("Notification", () => {
  it("Test markAsAread", () => {
    expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it("setNotificationFilter", () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
