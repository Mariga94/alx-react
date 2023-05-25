import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <div className={css(style.appHeader)}>
          <img src={logo} alt="holberton-logo" className={css(style.appLogo)} />
          <h1>School dashboard</h1>
          {user.isLoggedIn ? (
            <p id="logoutSection">
              Welcome <strong>{user.email}</strong>(
              <span onClick={logOut}>
                <i>logOut</i>
              </span>
              )
            </p>
          ) : (
            " "
          )}
        </div>
      </>
    );
  }
}
Header.contextType = AppContext;

const style = StyleSheet.create({
  appHeader: {
    backgroundColor: "#fff",
    borderBottom: "3px solid #e1354b",
    height: "200px",
  },
  appLogo: {
    width: "200px",
    height: "200px",
  },
  appHeaderH1: {
    display: "inline",
    position: "relative",
    top: "-6rem",
    color: "#e1354b",
  },
  welcome: {
    position: "absolute",
    margin: "20px",
  },
});
