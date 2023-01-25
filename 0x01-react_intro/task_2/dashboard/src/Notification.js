import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";
export default function Notification() {
  const buttonStyle = {
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
  };
  return (
    <div className="Notifications">
      <button style={buttonStyle} onClick={() => console.log("clicked")}>
        {<img src={closeIcon} alt="close" />}
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data-priority="urgent"
        ></li>
      </ul>
    </div>
  );
}