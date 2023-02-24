import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

configure({ adapter: new Adapter() });

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("Testing the <CourseList /> Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Test if <CourseList /> is rendered without crashing", () => {
    let component = shallow(<CourseList />);
    expect(component).not.toBe("undefined");
  });

  it("Test if <CourseList /> renders", () => {
    let component = shallow(<CourseList listCourses={listCourses} />);
    expect(component.find(CourseListRow)).toHaveLength(5);
  });
});
