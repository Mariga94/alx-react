import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import CourseShape from "./CourseShape";

export default function CourseList(props) {
  const { listCourses } = props;
  return (
    <>
      {!listCourses.length ? (
        <div>No course available yet</div>
      ) : (
        <table id="CourseList">
          <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow
              textFirstCell="Course name"
              textSecondCell="Credit"
              isHeader={true}
            />
          </thead>
          <tbody>
            {listCourses.map(course => {
              return (
                <CourseListRow key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}/>
              )
              
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

CourseList.proptypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
