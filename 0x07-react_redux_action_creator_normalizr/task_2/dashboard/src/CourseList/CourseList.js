import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from 'aphrodite';

export default function CourseList(props) {
  const { listCourses } = props;
  return (
    <>
      {!listCourses.length ? (
        <div>No course available yet</div>
      ) : (
        <table className={css(styles.table)}>
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

const styles = StyleSheet.create({
	table: {
	  margin: "20px auto",
	  width: "85%",
	  border: "1px solid lightgrey",
	},
  });

CourseList.proptypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
