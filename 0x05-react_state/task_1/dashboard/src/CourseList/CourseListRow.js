import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;
  let trContent = "";
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const headerStyle = { backgroundColor: "#deb5b545" };
  const styleInline = isHeader ? headerStyle : rowStyle;

  if (isHeader) {
    if (textSecondCell === null) {
      trContent = <th colSpan="2" className={css(style.thF, style.thTd)}>{textFirstCell}</th>;
    } else {
      trContent = (
        <React.Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </React.Fragment>
      );
    }
  } else {
    trContent = (
      <React.Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </React.Fragment>
    );
  }
  return <tr style={styleInline}>{trContent}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: true,
  textSecondCell: null,
};

const style = StyleSheet.create({
  thF: {
    textAlign: "center",
  },
  thTd: {
    padding: "0.4rem",
    border: "1px solid light-grey",
  },
});
