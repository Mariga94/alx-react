import React, { Fragment } from "react";
import PropTypes from "prop-types";


export default function NotificationItem(props) {
  const { type, value, html } = props;

  return (
    <Fragment>
      {html === undefined ? (
        <li data-priority-type={type}>{value}</li>
      ) : (
        <li
          dangerouslySetInnerHTML={html}
          data-priority-type={type}
        />
      )}
    </Fragment>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};
