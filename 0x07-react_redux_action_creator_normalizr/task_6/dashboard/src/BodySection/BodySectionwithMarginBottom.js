import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
import { StyleSheet, css } from 'aphrodite';

export default class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(style.bodySectionWithMargin)}>
        <BodySection
          title={this.props.title}
          children={this.props.children}
        ></BodySection>
      </div>
    );
  }
}

const style = StyleSheet.create({
  bodySectionWithMargin: {
    marginTop: "40px",
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};
