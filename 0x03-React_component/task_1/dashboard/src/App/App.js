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
    isLoggedIn: true,
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
    const { isLoggedIn, logOut } = this.props;
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
