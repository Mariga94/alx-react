import React, { Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    if (e.target.value.length > 0 && this.state.password.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    if (this.state.email.length > 0 && e.target.value.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  handleLoginSubmit(e) {
    this.props.logIn(this.state.email, this.state.password)
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div>
          <p>Login to access the full dashboard</p>
          <form className={css(style.login)} onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                className={css(style.loginContainerInput)}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                className={css(style.loginContainerInput)}
              />
            </label>
            <button
              className={css(style.button)}
              type="submit"
              disabled={!this.state.enableSubmit}
            >
              OK
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

const style = StyleSheet.create({
  loginContainerInput: {
    marginRight: "9px",
    marginLeft: "9px",
    "@media (max-width: 900px)": {
      border: "none",
    },
  },

  phone: {
    "@media (max-width: 900px)": {},
  },

  login: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  button: {
    "@media (max-width: 900px)": {
      backgroundColor: "#fff",
      border: "3px solid orange",
    },
  },
});
