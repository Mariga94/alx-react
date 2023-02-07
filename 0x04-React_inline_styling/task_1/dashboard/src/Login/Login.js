import React, { Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <Fragment>
      <div className="Login-body">
        <p>Login to access the full dashboard</p>
        <form>
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
          <button>OK</button>
        </form>
      </div>
    </Fragment>
  );
}

const style = StyleSheet.create({
	loginContainerInput: {
	  marginRight: '9px',
	  marginLeft: '9px',
	}
  });
