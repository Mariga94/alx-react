import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App, { listNotifications, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "./AppContext";
import { user, logOut } from "./AppContext";
import { mapStateToProps } from "./App";
import createStore from "redux";
import { Provider } from "react-redux";
import { uiReducer, initialState } from "../reducers/uiReducer";
import { FromJS, fromJS } from "immutable";
configure({ adapter: new Adapter() });

const store = createStore(uiReducer, initialState);

describe("App", () => {
  test("mapStateToProps returns the right object when passing the state", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });

  test("mapStateToProps returns the right objec when passing the state", () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ displayDrawer: true });
  });
});
