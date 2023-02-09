import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

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
});
