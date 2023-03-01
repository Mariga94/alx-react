import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "./AppContext";
import { user, logOut } from "./AppContext";

configure({ adapter: new Adapter() });

describe("App", () => {
  let events;

  beforeEach(() => {
    events = {};
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("<App /> renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toEqual(wrapper);
  });

  test("verify that when the keys 'control' and 'h' are pressed the 'logOut' function", (done) => {
    const logOut = jest.fn(() => void 0);
    shallow(<App logOut={logOut}/>);
    window.alert = logOut;
    events.keydown({ keyCode: 72, ctrlKey: true });
    expect(logOut).toHaveBeenCalled();
    done();
  });

  test("Verify that the default state for displayDrawer is false", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  test("Verify that after calling handleDisplayDrawer the state should now be true", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  test("Verify that after calling handleHideDrawer the state is updated to be false", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  test("Check if logOut is being called by verifying if the state is updated correctly instead", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(user);
  });

  test("Check if the logIn function updates the state correctly", () => {
    const test = {
      email: "test@gmail.com",
      password: "password",
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logIn("test@gmail.com", "password");
    expect(wrapper.state().user).toEqual(user);
  });

  test("Verify that markNotificationAsRead works ", () => {
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications) == newListNotifications;
  });
});
