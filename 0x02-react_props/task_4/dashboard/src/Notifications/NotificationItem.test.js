import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import NotificationItem from "./NotificationItem";

configure({ adapter: new Adapter() });

describe("Test NotificationItem Component", () => {
  test("<NotificationItem /> renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toEqual(wrapper);
  });

  test("renders the correct html when passing props", () => {
    const props = {
      type: "default",
      value: "test",
      html: undefined,
    };
    const wrapper = shallow(
      <NotificationItem type={props.type} value={props.value} />
    );
    expect(
      wrapper.contains(<li data-priority-type="default">test</li>)
    ).toEqual(true);
  });

  test("render the correct HTML, by passing dummy html props", () => {
    let props = {
      type: "urgent",
      html: { __html: "<p>test</p>" },
    };
    let component = shallow(<NotificationItem {...props} />);
    expect(
      component.contains(
        <li
          data-priority-type={props.type}
          dangerouslySetInnerHTML={props.html}
        />
      )
    ).toEqual(true);
  });
});
