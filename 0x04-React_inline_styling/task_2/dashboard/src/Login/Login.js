import React, { Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <Fragment>
      <div>
        <p>Login to access the full dashboard</p>
        <form className={css(style.login)}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              className={css(style.loginContainerInput)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              className={css(style.loginContainerInput)}
            />
          </label>
          <button className={css(style.button)}>OK</button>
        </form>
      </div>
    </Fragment>
  );
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
