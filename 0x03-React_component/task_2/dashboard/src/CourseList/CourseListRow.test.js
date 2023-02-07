import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  test("renders one cell with colspan=2 when textSecondCell does not exist", () => {
    const props = {
      isHeader: true,
      textFirstCell: "test1",
      textSecondCell: "test2",
    };

    const wrapper = shallow(<CourseListRow {...props} />);
    expect(
      wrapper.contains(
        <tr>
          <th colSpan="2">{props.textFirstCell}</th>
        </tr>
      )
    );
  });

  test("renders correctly two <td> elements within a <tr> element", () => {
    let props = {
      isHeader: false,
      textFirstCell: "test1",
      textSecondCell: "test2",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(
      wrapper.contains(
        <tr>
          <td>{props.textFirstCell}</td>
          <td>{props.textSecondCell}</td>
        </tr>
      )
    ).toEqual(true);
  });
});
