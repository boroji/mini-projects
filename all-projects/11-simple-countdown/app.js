let months, weekdays, year, month, day, hour, minute, second, date;

months = [
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

weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

year = document.querySelector(".year");
month = document.querySelector(".day");
day = document.querySelector(".day");
hour = document.querySelector(".hour");
minute = document.querySelector(".minute");
second = document.querySelector(".second");

date = new Date();

console.log(date, year, month, day, hour, minute, second);
