import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionwithMarginBottom";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  prototype = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: function () {
      void 0;
    },
  };

  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 60 },
      { id: 3, name: "React", credit: 40 },
    ];

    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        html: { __html: getLatestNotification() },
      },
    ];

    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className={css(style.body)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>These are some random text</p>
            </BodySection>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    padding: "4rem",
    minHeight: "31rem",
  },
  footer: {
    backgroundColor: "#fff",
    textAlign: "center",
    width: "100%",
    bottom: "0px",
    borderTop: "3px solid #e1354b",
    fontStyle: "italic",
    padding: "1rem 0",
  },
});

export default App;
