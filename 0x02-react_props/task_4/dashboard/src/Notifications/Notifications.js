import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
export default function Notifications(props) {
  const { displayDrawer } = props;
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>

      {displayDrawer && (
        <div className="Notifications">
          <button
            onClick={() => console.log("clicked")}
            style={{
              position: "absolute",
              top: "7px",
              right: "7px",
              border: "none",
              cursor: "pointer",
              ariaLabel: "Close",
              backgroundColor: "rgba(0,0,0,0)",
              height: "15px",
              width: "15px",
              padding: "0.05rem",
            }}
          >
            {<img src={closeIcon} alt="close" />}
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <li data-priority="urgent">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li
              dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
              data-priority="urgent"
            ></li>
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: true,
};
