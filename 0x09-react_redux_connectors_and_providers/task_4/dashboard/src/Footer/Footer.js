import React from "react";
import "./Footer.css";
import AppContext from "../App/AppContext";
import { getFooterCopy, getFullYear } from "../utils/utils";
import PropTypes from "prop-types";
// redux
import { connect } from "react-redux";

export function Footer() {
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

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);
