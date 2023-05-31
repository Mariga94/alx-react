import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
};

const fetchCourseSuccess = () => {
  return {
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
  };
};

const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("./courses.json");
      const data = await res.json();
      return dispatch(selectCourse(data));
    } catch (error) { 
      return error
    }
  };
};

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
export const boundfetchCourseSuccess = () => dispatch(fetchCourseSuccess());
module.exports = {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
};
