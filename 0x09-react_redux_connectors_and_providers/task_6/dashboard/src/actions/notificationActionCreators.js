import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index: index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
};

export const fetchNotificationsSucess = () => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ],
  };
};

export const setLoadingState = (loading) => {
  return {
    type: SET_LOADING_STATE,
    loading,
  };
};

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("./notifications.json")
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundesetNotificationFilter = (index) =>
  dispatch(setNotificationFilter(index));
export const boundNotificationsSucess = () =>
  dispatch(fetchNotificationsSucess());
