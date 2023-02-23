import * as data from "../../notifications.json";

function getAllNotificationsByUser(userId) {
    return data.filter(item => item.author.id === userId).map(c => c.context)
}