/**
 * Finds the current year.
 * @return {date} current year
 **/
export const getFullYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

/**
 * Checks if user is logged in dashboard.
 * @param {boolean} isIndex boolean value
 * @return {string}         "Holberton School main dashboard"
 **/
export const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
};

/**
 * Checks for latest notification
 * @return {string}   "<strong>Urgent requirement</strong> - complete by EOD"
 **/
export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
