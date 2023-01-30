import React, { Fragment } from "react";
import "./Login.css";

export default function Login() {
  return (
    <Fragment>
      <div className="Login-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="password" />
          </label>
          <button>OK</button>
        </form>
      </div>
    </Fragment>
  );
}
