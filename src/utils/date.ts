export const getDate = (time: string) => {
  const date = new Date(time);
  return (
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "/" +
    (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()) +
    "/" +
    date.getFullYear()
  );
};

export const getWeekDay = (time: string) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(time);
  return weekday[date.getUTCDay()];
};

export const getTime = (time: string) => {
  const date = new Date(time);
  return (
    date.getUTCHours() +
    ":" +
    (date.getUTCMinutes() < 10
      ? "0" + date.getUTCMinutes()
      : date.getUTCMinutes())
  );
};

export const getMonth = (time: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(time);
  return months[date.getUTCMonth()];
};
