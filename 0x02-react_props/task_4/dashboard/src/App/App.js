import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import "./App.css";

export default function App(props) {
  const { isLoggedIn } = props;

  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {!isLoggedIn ? <Login /> : <CourseList />}
        <Footer />
      </div>
    </Fragment>
  );
}

App.prototype = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: true,
};
