const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(days) {
  const dateToday = new Date();
  const dayToday = dateToday.getDay();
  const eventDay = (dayToday + days) % 7;
  return weekDay[eventDay];
}

// With todays weekday a Thursday
console.log(getEventWeekday(9)); // Logs out "Saturday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"
