import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
export default function Notifications(props) {
  const { displayDrawer, listNotifications } = props;
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
          {listNotifications.length === 0 && (
            <p>No new notification for now</p>
          )}
          {
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((note) => {
                  return (
                    <NotificationItem
                      key={note.id}
                      type={note.type}
                      value={note.value}
                      html={note.html}
                    />
                  );
                })}
              </ul>
            </>
          }
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};
