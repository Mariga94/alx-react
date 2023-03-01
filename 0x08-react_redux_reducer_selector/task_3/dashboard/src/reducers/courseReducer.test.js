import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { courseReducer, defaultState } from "./courseReducer";

configure({ adapter: new Adapter() });

describe("Testing courseReducer", () => {
  let courses = [];

  test("default state returns an empty array", () => {
    let reducer = courseReducer(undefined, {});
    expect(reducer).toHaveLength(0);
    expect(reducer).toBe(array);
  });
  test("FETCH_COURSE_SUCCESS returns the data passed", () => {
    let action = fetchCourseSuccess();
    let reducer = courseReducer(undefined, action);
    action.data.map((course) => {
      courses.push({ ...course, isSelected: false });
    });
    expect(reducer).toEqual(courses);
  });
  test("SELECT_COURSE returns the data with the right item updated", () => {
    let select = courses;
    let action = selectCourse(2);
    let reducer = courseReducer(courses, action);
    courses = [];
    select.map((course) => {
      if (course.id == action.index) {
        courses.push({ ...course, isSelected: true });
      } else {
        courses.push(course);
      }
    });
    expect(reducer).toEqual(courses);
    courses = select;
  });
  test("UNSELECT_COURSE returns the data with the right item updated", () => {
    let select = courses;
    let action = unSelectCourse(1);
    let reducer = courseReducer(courses, action);
    courses = [];
    select.map((course) => {
      if (course.id == action.index) {
        courses.push({ ...course, isSelected: true });
      } else {
        courses.push(course);
      }
    });
    expect(reducer).to.deep.equal(courses);
  });
});
