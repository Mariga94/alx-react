import React from "react";
import { shallow } from "enzyme";
// import sinon from 'sinon';
import Notification from "./Notification";

describe("<Notification />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notification />);
  });

  it("<Notification /> renders without crashing", () => {
    expect(wrapper).toEqual(wrapper);
  });

  it("<Notification /> renders three </li> items", () => {
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("<Notification /> renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBeTruthy();
  })
});
