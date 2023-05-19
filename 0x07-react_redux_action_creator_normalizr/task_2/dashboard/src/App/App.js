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
import AppContext from "./AppContext";
import { user, logOut } from "./AppContext";
import { StyleSheet, css } from "aphrodite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
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
      ],
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    const newlistNotifications = this.state.listNotifications.filter(
      (item) => item.id !== id
    );
    this.setState({
      listNotifications: newlistNotifications,
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert("Logging you out");
      this.state.logOut();
    }
  }
  render() {
    const { user, logOut } = this.state;
    const value = { user, logOut };
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 60 },
      { id: 3, name: "React", credit: 40 },
    ];
    return (
      <AppContext.Provider value={value}>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header />
          <div className={css(style.body)}>
            {!user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
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
      </AppContext.Provider>
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
