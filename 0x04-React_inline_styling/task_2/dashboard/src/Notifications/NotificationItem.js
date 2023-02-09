import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default class NotificationItem extends PureComponent {
  render() {
    let { id, type, value, html, markAsRead } = this.props;
    let liStyle =
      type === "urgent"
        ? styles.urgentNotification
        : styles.defaultNotification;
    return (
      <Fragment>
        {html !== undefined && (
          <li
            className={css(liStyle)}
            onClick={() => markAsRead(id)}
            data-priority-type={type}
            dangerouslySetInnerHTML={html}
          />
        )}
        {html === undefined && (
          <li
            className={css(liStyle)}
            onClick={() => markAsRead(id)}
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
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
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
});
