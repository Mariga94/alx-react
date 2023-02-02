import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  prototype = {
    isLoggedIn: PropTypes.bool,
  };

  static defaultProps = {
    isLoggedIn: true,
  };
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
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
