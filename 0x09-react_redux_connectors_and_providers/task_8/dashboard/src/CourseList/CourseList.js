import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { Component } from "react";
export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    }
    this.props.unSelectCourse(id);
  }

  render() {
    const {listCourses} =  this.props;
    
    return (
      <>
        {!listCourses.length ? (
          <div>No course available yet</div>
        ) : (
          <table className={css(styles.table)}>
            <thead>
              <CourseListRow
                textFirstCell="Available courses"
                isHeader={true}
              />
              <CourseListRow
                textFirstCell="Course name"
                textSecondCell="Credit"
                isHeader={true}
              />
            </thead>
            <tbody>
              {listCourses.map((course) => {
                return (
                  <CourseListRow
                    key={course.id}
                    textFirstCell={course.name}
                    textSecondCell={course.credit}
                    isHeader={false}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  }
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
