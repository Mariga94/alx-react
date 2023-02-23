import Header from "./Header";
import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";
configure({ adapter: new Adapter() });
describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("renders <Header /> component without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  test("Verify that the logoutSection is not created with a default context value", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).not.toBeTruthy();
  });

  test("Header component render img", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  test("Header component render h1", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  test("Mount the Header component with user defined isLoggedIn is true and an email is set", () => {
    const spy = jest.fn();
    const data = {
      email: "test@gmail.com",
      password: "passgranted",
      isLoggedIn: true,
    };
    const component = mount(
      <AppContext.Provider value={{ user: data, logOut: spy }}>
        <Header />
      </AppContext.Provider>
    );
    expect(component.find("#logoutSection").exists()).toBeTruthy();
    component.find("#logoutSection span i").simulate("click");
    expect(spy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
