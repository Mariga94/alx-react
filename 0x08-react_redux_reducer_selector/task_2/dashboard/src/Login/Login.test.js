import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";
import { wrap } from "@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils";

configure({ adapter: new Adapter() });

describe("Login Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("Login component renders without crashing", () => {
    expect(wrapper).toEqual(wrapper);
  });

  test("Login component renders 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  test("Login component renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  test("Submit button is disabled by default", () => {
    expect(wrapper.find("button").at(0).props().disabled).toEqual(true);
  });

  test("The button is enabled after changing the value of the two inputs", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { name: "email", value: "test@gmail.com" },
      });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "password", value: "passwoed" } });
    expect(wrapper.find("button").at(0).props().disabled).toEqual(false);
  });
});
