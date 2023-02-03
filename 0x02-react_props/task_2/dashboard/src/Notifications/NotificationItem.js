import React, { Fragment } from "react";

export default function NotificationItem(props) {
  const { type, value, html } = props;
  return (
    <Fragment>
      {html === undefined ? (
        <li data-priority-type={type}>{value}</li>
      ) : (
        <li
          dangerouslySetInnerHTML={{ _html: html }}
          data-priority-type={type}
        />
      )}
    </Fragment>
  );
}
