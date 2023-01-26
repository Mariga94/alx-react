
import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("<App /> renders without crashing", () => {
    expect(wrapper).toEqual(wrapper);
  });

  it("<App /> renders a div with the class App-header", () => {
    expect(wrapper.find(".App-header")).toHaveLength(1);
  });

  it("<App /> renders a div with the class App-body", () => {
    expect(wrapper.find(".App-body")).toHaveLength(1);
  });

  it("<App /> renders a div with the class App-footer", () => {
    expect(wrapper.find(".App-footer")).toHaveLength(1);
  });
});
