import React from "react";
import "./Footer.css";
import AppContext from "../App/AppContext";
import { getFooterCopy, getFullYear } from "../utils/utils";
export default function Footer() {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      <AppContext.Consumer>
        {(user) =>
          user.user.isLoggedIn ? (
            <p>
              <a href="#contact_us">Contact us</a>
            </p>
          ) : (
            ""
          )
        }
      </AppContext.Consumer>
    </div>
  );
}
