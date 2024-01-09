const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
];

const dayNames = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];

var events = [];
var date;
var dayOfMonth;
var currentMonth;
var month;
var year;

$(document).ready(function () {
    getEventsAndInit();
});

async function getEventsAndInit() {
    events = await fetch("/fishing_events")
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
    init();
}

function init() {
    console.log(events);
    getCurrentDate();
    updateCalendar();
    updateCalendarTitle();
    updateEvents();
    $(document).on("click", "#calendar_previous_month", function () {
        previousMonth();
    });

    $(document).on("click", "#calendar_next_month", function () {
        nextMonth();
    });
}

function getCurrentDate() {
    date = new Date();
    dayOfMonth = date.getDate();
    month = date.getMonth();
    currentMonth = month;
    year = date.getFullYear();
}

function updateCalendar() {
    var cal = document.getElementById("calendar_days");
    var numberOfDaysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    var calendar = "";

    var firstDayOfWeekInMonth = new Date(year, month, 1).getDay();

    if (firstDayOfWeekInMonth == 0) {
        firstDayOfWeekInMonth = 6;
    } else {
        firstDayOfWeekInMonth = firstDayOfWeekInMonth - 1;
    }

    for (let i = 0; i < firstDayOfWeekInMonth; i++) {
        calendar += `<div class="day invisible"></div>`;
    }
    var weekday;
    for (let i = 0; i < numberOfDaysInCurrentMonth; i++) {
        weekday = (firstDayOfWeekInMonth + i) % 7;
        calendar += `<div class="day ${weekday > 4 ? "weekend" : ""} ${
            dayOfMonth == i + 1 && month == currentMonth ? "today" : ""
        }">
                        <div class="dayname">${dayNames[weekday]}</div>
                        <div class="daynumber ${
                            checkIfEventPresent(year, month, i + 1)
                                ? "eventday"
                                : ""
                        }">${i + 1}</div>
                    </div>`;
    }
    cal.innerHTML = calendar;
}

function checkIfEventPresent(year, month, day) {
    for (let i = 0; i < events.length; i++) {
        if (
            events[i].year == year &&
            events[i].month == month &&
            events[i].day == day
        ) {
            return true;
        }
    }
    return false;
}

function updateCalendarTitle() {
    var title = document.getElementById("calendar_nav_title");
    title.innerHTML = `${year} ${months[month]}`;
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
    var ev = document.getElementById("events");
    var eventsInMonth = [];
    for (let i = 0; i < events.length; i++) {
        if (events[i].month == month && events[i].year == year) {
            eventsInMonth.push(events[i]);
        }
    }

    var eventsElements = "";
    if (eventsInMonth.length == 0) {
        ev.innerHTML =
            '<div class="event"><div><b>Brak wydarzeń</b></div></div>';
        return;
    }
    for (let i = 0; i < eventsInMonth.length; i++) {
        eventsElements += `<div class="event">
                <img src="img/sea-fish-drawing.png" class="event_fish" alt="fish_img">
                <div>
                    <b>${eventsInMonth[i].day} ${months[
            month
        ].toLowerCase()} ${year}</b>
                    - <u>${eventsInMonth[i].location}</u>
                    <b>${eventsInMonth[i].time}</b>
                    - ${eventsInMonth[i].description}
                </div>
            </div>`;
    }
    ev.innerHTML = eventsElements;
}
