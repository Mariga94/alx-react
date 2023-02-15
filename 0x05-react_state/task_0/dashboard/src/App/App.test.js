import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

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
    shallow(<App />);
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
    const wrapper = shallow(<App />)
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  test("Verify that after calling handleHideDrawer the state is updated to be false", () => {
    const wrapper = shallow(<App/>)
    wrapper.instance().handleHideDrawer()
    expect(wrapper.state().displayDrawer).toEqual(false)
  })
});

