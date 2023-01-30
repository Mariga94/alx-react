import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
export default function Notification() {
  return (
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
