import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index,
  };
};

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
};

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
module.exports = {
  selectCourse,
  unSelectCourse,
};
