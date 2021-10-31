function timer() {
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

  weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  year = document.querySelector(".year");
  month = document.querySelector(".month");
  day = document.querySelector(".day");
  hour = document.querySelector(".hour");
  minute = document.querySelector(".minute");
  second = document.querySelector(".second");

  date = new Date();
  year.textContent = date.getFullYear();
  month.textContent = months[date.getMonth()].toLocaleUpperCase();
  day.textContent = weekdays[date.getDay()].toLocaleUpperCase();
  hour.textContent = date.getHours();
  minute.textContent = date.getMinutes();
  second.textContent = date.getSeconds();
}

setInterval(timer, 1000);
timer();
