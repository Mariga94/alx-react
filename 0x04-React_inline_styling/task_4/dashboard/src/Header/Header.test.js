import Header from "./Header";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { StyleSheetTestUtils } from "aphrodite";

configure({ adapter: new Adapter() });
describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("renders <Header /> component without crashing", () => {
    expect(wrapper).toEqual(wrapper);
  });

  test("Header component render img", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  test("Header component render h1", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
