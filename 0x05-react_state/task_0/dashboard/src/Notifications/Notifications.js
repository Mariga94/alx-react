import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.listNotifications.length < nextProps.listNotifications.length
    ) {
      return true;
    } else if (nextProps.displayDrawer !== this.props.displayDrawer) {
      return true
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    let { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    console.log(displayDrawer,this.props)
    return (
      <div className={css(styles.notificationBox)}>
        <div
        onClick={handleDisplayDrawer}
          className={css(styles.menuItem)}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={() => {
                handleHideDrawer();
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.listStyle)}>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification() }}
              />
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.protoTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: function () {
    return undefined;
  },
  handleHideDrawer: function () {
    return undefined;
  },
  listNotifications: [],
};

const opacity = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const keyFrame = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid red",
    borderStyle: "dashed",
    padding: "20px",
    textAlign: "left",
    flexDirection: "column",
    position: "absolute",
    right: "12px",
    flexWrap: "wrap",
    alignItems: "flex-end",
    // display: 'none',
    "@media (max-width: 900px) ": {
      border: "none",
      width: "100vw",
      height: "100vh",
      position: "relative",
      top: "0",
      right: "0",
      left: "0",
      padding: "0",
      fontSize: "20px",
    },
  },
  menuItem: {
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "none",
    marginBottom: "10px",
    "@media (max-width: 900px)": {
      display: "none",
      padding: "0",
    },
    ":hover": {
      cursor: "pointer",
      animationName: [opacity, keyFrame],
      animationDuration: "1s, 500ms",
      animationIterationCount: "3",
    },
  },
  notificationBox: {
    marginRight: "60px",
    "@media (max-width: 900px)": {
      padding: "0",
    },
  },
  listStyle: {
    padding: "0",
  },
  displayNone: {
    display: "none",
  },
});
