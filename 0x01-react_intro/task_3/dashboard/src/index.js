import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Notification from "./Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootNotifications = ReactDOM.createRoot(
  document.getElementById("root-notifications")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

rootNotifications.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>
);
