import { normalize, schema } from "normalizr";
import * as data from "../../notifications.json";

const user = new schema.Entity("users");
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(data, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;
  const userNotifications = [];
  for (let n in notifications) {
    if (notification[n].author === userId) {
      userNotifications.push(messages[notifications[n].context]);
    }
  }
  return userNotifications;
}
