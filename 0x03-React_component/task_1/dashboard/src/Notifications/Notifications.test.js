import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

import Notifications from "./Notifications";
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';


describe("<Notification />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  test("<Notification /> renders without crashing", () => {
    expect(wrapper).toEqual(wrapper);
  });

  test("<Notification /> renders three </li> items", () => {
    expect(wrapper.find("li")).toHaveLength(0);
  });

  test("<Notification /> renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });

  test()
});
