import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { expect as expectChai } from "chai";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

configure({ adapter: new Adapter() });

const htmlObject = {
  _html: getLatestNotification(),
};

const listNotifications = [
  { id: 1, type: "default", value: "test1" },
  { id: 2, type: "urgent", value: "test2" },
  { id: 3, type: "urgent", html: htmlObject },
];

describe("<Notification />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let props1 = {
    displayDrawer: false,
  };
  let props2 = {
    displayDrawer: true,
  };
  let wrapperOne;
  let wrapperTwo;

  beforeEach(() => {
    wrapperOne = shallow(<Notifications shouldRender {...props1} />);
    wrapperTwo = shallow(<Notifications {...props2} />);
  });

  test("<Notification /> renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toEqual(wrapper);
  });

  test("The menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications dislayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toEqual(true);
  });

  test("The div.Notificatons is being displayed when displayedDrawer is true", () => {
    const wrapper = shallow(<Notifications dislayDrawer={true} />);
    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("verify that Notifications renders three list items", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  test("<Notification /> renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });

  test("The menu item is being displayed when the displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").exists()).toBeTruthy();
  });

  test("the div.Notifiations is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.Notifications").exists()).toBeFalsy();
  });

  test('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled();
    done();
  });
});
