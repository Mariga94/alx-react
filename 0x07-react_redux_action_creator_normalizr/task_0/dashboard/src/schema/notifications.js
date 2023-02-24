import * as data from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
  return data.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}
