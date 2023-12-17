/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/calendar.js ***!
  \**********************************/
var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
var dayNames = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];
var events = [{
  year: 2023,
  month: 4,
  day: 10,
  time: '10:30',
  location: "Warszawa",
  descritpion: "Zjazd miłośników szczupaków"
}, {
  year: 2023,
  month: 4,
  day: 7,
  time: '12:00',
  location: "Lublin",
  descritpion: "Targi producentów żyłek"
}, {
  year: 2023,
  month: 4,
  day: 22,
  time: '19:00',
  location: "Zamość",
  descritpion: "Zjazd fanów wędkarstwa"
}, {
  year: 2023,
  month: 5,
  day: 17,
  time: '10:30',
  location: "Lublin",
  descritpion: "Targi producentów wędzisk"
}, {
  year: 2023,
  month: 6,
  day: 10,
  time: '13:30',
  location: "Poznań",
  descritpion: "Targi producentów przynęt"
}, {
  year: 2023,
  month: 7,
  day: 18,
  time: '15:30',
  location: "Gdańsk",
  descritpion: "Zjazd miłośników łowienia na otwartych wodach"
}];
var date;
var dayOfMonth;
var currentMonth;
var month;
var year;
$(document).ready(function () {
  getCurrentDate();
  updateCalendar();
  updateCalendarTitle();
  updateEvents();
});
function getCurrentDate() {
  date = new Date();
  dayOfMonth = date.getDate();
  month = date.getMonth();
  currentMonth = month;
  year = date.getFullYear();
}
function updateCalendar() {
  var cal = document.getElementById('calendar_days');
  var numberOfDaysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  var calendar = "";
  var firstDayOfWeekInMonth = new Date(year, month, 1).getDay();
  if (firstDayOfWeekInMonth == 0) {
    firstDayOfWeekInMonth = 6;
  } else {
    firstDayOfWeekInMonth = firstDayOfWeekInMonth - 1;
  }
  for (var i = 0; i < firstDayOfWeekInMonth; i++) {
    calendar += "<div class=\"day invisible\"></div>";
  }
  var weekday;
  for (var _i = 0; _i < numberOfDaysInCurrentMonth; _i++) {
    weekday = (firstDayOfWeekInMonth + _i) % 7;
    calendar += "<div class=\"day ".concat(weekday > 4 ? "weekend" : "", " ").concat(dayOfMonth == _i + 1 && month == currentMonth ? "today" : "", "\">\n                        <div class=\"dayname\">").concat(dayNames[weekday], "</div>\n                        <div class=\"daynumber ").concat(checkIfEventPresent(year, month, _i + 1) ? "eventday" : "", "\">").concat(_i + 1, "</div>\n                    </div>");
  }
  cal.innerHTML = calendar;
}
function checkIfEventPresent(year, month, day) {
  for (var i = 0; i < events.length; i++) {
    if (events[i].year == year && events[i].month == month && events[i].day == day) {
      return true;
    }
  }
  return false;
}
function updateCalendarTitle() {
  var title = document.getElementById('calendar_nav_title');
  title.innerHTML = "".concat(year, " ").concat(months[month]);
}
function previousMonth() {
  if (month == 0) {
    year--;
    month = 11;
  } else {
    month--;
  }
  updateCalendar();
  updateCalendarTitle();
  updateEvents();
}
function nextMonth() {
  if (month == 11) {
    year++;
    month = 0;
  } else {
    month++;
  }
  updateCalendar();
  updateCalendarTitle();
  updateEvents();
}
function updateEvents() {
  var ev = document.getElementById('events');
  var eventsInMonth = [];
  for (var i = 0; i < events.length; i++) {
    if (events[i].month == month && events[i].year == year) {
      eventsInMonth.push(events[i]);
    }
  }
  var eventsElements = "";
  if (eventsInMonth.length == 0) {
    ev.innerHTML = '<div class="event"><div><b>Brak wydarzeń</b></div></div>';
    return;
  }
  for (var _i2 = 0; _i2 < eventsInMonth.length; _i2++) {
    eventsElements += "<div class=\"event\">\n                <img src=\"img/sea-fish-drawing.png\" class=\"event_fish\" alt=\"fish_img\">\n                <div>\n                    <b>".concat(eventsInMonth[_i2].day, " ").concat(months[month].toLowerCase(), " ").concat(year, "</b>\n                    - <u>").concat(eventsInMonth[_i2].location, "</u>\n                    <b>").concat(eventsInMonth[_i2].time, "</b>\n                    - ").concat(eventsInMonth[_i2].descritpion, "\n                </div>\n            </div>");
  }
  ev.innerHTML = eventsElements;
}
/******/ })()
;