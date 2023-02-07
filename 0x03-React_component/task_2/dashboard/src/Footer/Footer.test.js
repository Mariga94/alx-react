import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import Footer from "./Footer";

configure({ adapter: new Adapter() });
describe("Footer component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer shouldRender />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toEqual(wrapper);
  });

  test("renders at the very least 'Copyright'", () => {
    expect(wrapper.find('p').text()).toContain('Copyright');
  });
});
