import { notificationsNormalizer } from "../../../../task_5/dashboard/src/schema/notifications";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";

const defaultState = {
  notifications: [],
  filter: "DEFAULT",
};

export let notificationReducer = (
  state = new Immutable.Map(defaultState),
  action
) => {
  let newState = state;
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      let notifsArr = [];
      action.data.map((course) => {
        notifsArr.push({ ...course, isRead: false });
      });
      notifsArr = notificationsNormalizer(notifsArr);
      return merge(state, { 'notications': notifsArr });
    case MARK_AS_READ:
      newState = {
        filter: state.filter,
        notifications: [],
      };
      state.notifications.map((course) => {
        if (course.id == action.index) {
          newState.notifications.push({ ...course, isRead: true });
        } else {
          newState.notifications.push(course);
        }
      });
      return newState;
    case SET_TYPE_FILTER:
      newState = {
        ...state,
        filter: action.filter,
      };
      return newState;
    default:
      return state;
  }
};
