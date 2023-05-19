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
  return data.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}
