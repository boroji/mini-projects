let months, weekdays, year, month, day, hour, minute, second, date;

months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

year = document.querySelector(".year");
month = document.querySelector(".month");
day = document.querySelector(".day");
hour = document.querySelector(".hour");
minute = document.querySelector(".minute");
second = document.querySelector(".second");

date = new Date();

year.textContent = date.getFullYear();
month.textContent = months[date.getMonth()].toLocaleUpperCase();
