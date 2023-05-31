import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default class NotificationItem extends PureComponent {
  render() {
    let { id, type, value, html, markNotificationAsRead } = this.props;
    return (
      <Fragment>
        {html !== undefined && (
          <li
            id={id}
            onClick={() => markNotificationAsRead(id)}
            className={
              type === "default"
                ? css(styles.defaultNotification, styles.mediaNotification)
                : css(styles.urgentNotification, styles.mediaNotification)
            }
            data-priority-type={type}
            dangerouslySetInnerHTML={html}
          />
        )}
        {html === undefined && (
          <li
            id={id}
            onClick={() => markNotificationAsRead(id)}
            className={
              type === "default"
                ? css(styles.defaultNotification, styles.mediaNotification)
                : css(styles.urgentNotification, styles.mediaNotification)
            }
            data-priority-type={type}
          >
            {value}
          </li>
        )}
      </Fragment>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markNotificationAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};

const styles = StyleSheet.create({
  defaultNotification: {
    color: "blue",
  },
  urgentNotification: {
    color: "red",
  },
  mediaNotification: {
    "@media (max-width: 900px)": {
      borderBottom: "1px solid black",
      padding: "10px 8px",
      listStyle: "none",
    },
  },
});
