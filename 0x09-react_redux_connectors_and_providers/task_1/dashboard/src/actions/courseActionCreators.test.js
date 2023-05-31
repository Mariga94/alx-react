import {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
} from "./courseActionCreators";

describe("Test action creators", () => {
  it("Test for the selectCourse action", () => {
    expect(selectCourse(1)).toEqual({ type: "SELECT_COURSE", index: 1 });
  });

  it("Test for the unselectCourse action", () => {
    expect(unSelectCourse(1)).toEqual({ type: "UNSELECT_COURSE", index: 1 });
  });
  it("Test for fetchCourseSuccess action", () => {
    expect(fetchCourseSuccess()).toEqual({
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          credit: 40,
        },
      ],
    });
  });
});
