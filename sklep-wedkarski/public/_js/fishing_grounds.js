/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./resources/js/fishing_grounds.js ***!
  \*****************************************/
var map;
var weatherLat;
var weatherLng;
var grounds = [{
  lat: 51.357685,
  lng: 22.280941,
  name: 'Łowisko Przybysławice',
  species: ['Karp', 'Szczupak', 'Jesiotr', 'Sum'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 51.356048,
  lng: 22.34006,
  name: 'Łowisko Garbów',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 53.683587,
  lng: 21.614839,
  name: 'Łowisko Wejsuny',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 51.625527,
  lng: 22.781187,
  name: 'Łowisko Siemień',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 50.543429,
  lng: 21.645223,
  name: 'Łowisko Tarnobrzeg',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 50.785831,
  lng: 23.006664,
  name: 'Łowisko Nielisz',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 52.891034,
  lng: 17.130872,
  name: 'Łowisko Kaliszany',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 53.537065,
  lng: 16.218873,
  name: 'Łowisko Pławno',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 53.64453,
  lng: 14.623586,
  name: 'Łowisko Stepnica',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 54.527401,
  lng: 16.607734,
  name: 'Łowisko Wicko',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 54.764738,
  lng: 17.634623,
  name: 'Łowisko Sarbsko',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}, {
  lat: 53.78706,
  lng: 19.751535,
  name: 'Łowisko Skarpa',
  species: ['Karp', 'Szczupak'],
  nightFishing: true,
  tent: true,
  voivodeship: 'Lubelskie',
  accommodation: false,
  spinning: true,
  area: 0.2
}];
$(document).ready(function () {
  initMap();
});
function initMap() {
  if (navigator.geolocation) {
    var options = {
      timeout: 60000
    };
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
  } else {
    alert("Twoja przeglądarka nie wspiera geolokalizacji!");
  }
}
function panToCurrentLocation() {
  if (navigator.geolocation) {
    var options = {
      timeout: 60000
    };
    navigator.geolocation.getCurrentPosition(showMyLocation, errorHandler, options);
  } else {
    alert("Twoja przeglądarka nie wspiera geolokalizacji!");
  }
}
function showMyLocation(position) {
  map.flyTo([position.coords.latitude, position.coords.longitude], 11);
}
function showLocation(position) {
  var latitide = position.coords.latitude;
  var longitude = position.coords.longitude;
  weatherLat = latitide;
  weatherLng = longitude;
  map = L.map('map').setView([latitide, longitude], 11);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  addFishingGroundsMarkers(map);
  var redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  });
  L.marker([latitide, longitude], {
    icon: redIcon
  }).addTo(map).bindPopup('Moja lokalizacja');
}
function findClosestFishingGround() {
  if (navigator.geolocation) {
    var options = {
      timeout: 60000
    };
    navigator.geolocation.getCurrentPosition(closestGround, errorHandler, options);
  } else if (grounds.length == 0) {
    return null;
  } else {
    alert("Twoja przeglądarka nie wspiera geolokalizacji!");
  }
}
function closestGround(position) {
  var latitide = position.coords.latitude;
  var longitude = position.coords.longitude;
  var closestDistance = Math.pow(grounds[0].lat - latitide, 2) + Math.pow(grounds[0].lng - longitude, 2);
  var closestId = 0;
  for (var i = 1; i < grounds.length; i++) {
    var distance = Math.pow(grounds[i].lat - latitide, 2) + Math.pow(grounds[i].lng - longitude, 2);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestId = i;
    }
  }
  map.flyTo([grounds[closestId].lat, grounds[closestId].lng], 11);
}
function addFishingGroundsMarkers(map) {
  for (var i = 0; i < grounds.length; i++) {
    L.marker([grounds[i].lat, grounds[i].lng]).addTo(map).bindPopup(grounds[i].name).on('click', updateGroundDetails);
  }
}
function updateGroundDetails(e) {
  var ground = grounds.find(function (element) {
    return element.lat == e.latlng.lat && element.lng == e.latlng.lng;
  });
  var species = '';
  for (var i = 0; i < ground.species.length - 1; i++) {
    species += ground.species[i] + ', ';
  }
  species += ground.species[ground.species.length - 1];
  weatherLat = e.latlng.lat;
  weatherLng = e.latlng.lng;
  document.getElementById('weather_forecast').innerHTML = '';
  document.getElementById('ground_name').innerHTML = ground.name;
  document.getElementById('ground_voivodeship').textContent = ground.voivodeship;
  document.getElementById('ground_spieces').innerHTML = species;
  document.getElementById('ground_area').innerHTML = ground.area;
  document.getElementById('ground_night_fishing').innerHTML = ground.nightFishing ? 'Tak' : 'Nie';
  document.getElementById('ground_tent').innerHTML = ground.tent ? 'Tak' : 'Nie';
  document.getElementById('ground_accommodation').innerHTML = ground.accommodation ? 'Tak' : 'Nie';
  document.getElementById('ground_spinning').innerHTML = ground.spinning ? 'Tak' : 'Nie';
}
function errorHandler(error) {
  var output = document.getElementById("geo");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      output.innerHTML = "Użytkownik nie udostępnił danych.";
      break;
    case error.POSITION_UNAVAILABLE:
      output.innerHTML = "Dane lokalizacyjne niedostępne.";
      break;
    case error.TIMEOUT:
      output.innerHTML = "Przekroczono czas żądania.";
      break;
    case error.UNKNOWN_ERROR:
      output.innerHTML = "Wystąpił nieznany błąd.";
      break;
  }
}
function checkWeather() {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=".concat(weatherLat, "&longitude=").concat(weatherLng, "&timezone=auto&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum")).then(function (response) {
    return response.json();
  }).then(function (data) {
    updateWeatherElement(data);
  })["catch"](function (error) {
    console.error(error);
  });
}
function extractDayName(date) {
  days = {
    0: 'Nd',
    1: 'Pn',
    2: 'Wt',
    3: 'Śr',
    4: 'Cz',
    5: 'Pt',
    6: 'Sb'
  };
  dayNumber = new Date(date).getDay();
  return days[dayNumber];
}
function getWeatherIcon(weatherCode) {
  icons = {
    0: "<i class=\"fa-solid fa-sun\"></i>",
    1: "<i class=\"fa-solid fa-cloud-sun\"></i>",
    2: "<i class=\"fa-solid fa-cloud-sun\"></i>",
    3: "<i class=\"fa-solid fa-cloud-sun\"></i>",
    45: "<i class=\"fa-solid fa-smog\"></i>",
    48: "<i class=\"fa-solid fa-smog\"></i>",
    51: "<i class=\"fa-solid fa-cloud-sun-rain\"></i>",
    52: "<i class=\"fa-solid fa-cloud-sun-rain\"></i>",
    53: "<i class=\"fa-solid fa-cloud-sun-rain\"></i>",
    56: "<i class=\"fa-solid fa-cloud-showers-water\"></i>",
    57: "<i class=\"fa-solid fa-cloud-showers-water\"></i>",
    61: "<i class=\"fa-solid fa-cloud-rain\"></i>",
    63: "<i class=\"fa-solid fa-cloud-rain\"></i>",
    65: "<i class=\"fa-solid fa-cloud-rain\"></i>",
    66: "<i class=\"fa-solid fa-cloud-showers-water\"></i>",
    67: "<i class=\"fa-solid fa-cloud-showers-water\"></i>",
    71: "<i class=\"fa-regular fa-snowflake\"></i>",
    73: "<i class=\"fa-regular fa-snowflake\"></i>",
    75: "<i class=\"fa-regular fa-snowflake\"></i>",
    77: "<i class=\"fa-regular fa-snowflake\"></i>",
    80: "<i class=\"fa-solid fa-cloud-showers-heavy\"></i>",
    81: "<i class=\"fa-solid fa-cloud-showers-heavy\"></i>",
    82: "<i class=\"fa-solid fa-cloud-showers-heavy\"></i>",
    85: "<i class=\"fa-solid fa-snowflake\"></i>",
    86: "<i class=\"fa-solid fa-snowflake\"></i>",
    95: "<i class=\"fa-solid fa-cloud-bolt\"></i>",
    96: "<i class=\"fa-solid fa-cloud-bolt\"></i>",
    99: "<i class=\"fa-solid fa-cloud-bolt\"></i>"
  };
  return icons[weatherCode];
}
function extractTime(datetime) {
  var date = new Date(datetime);
  return "".concat(date.getHours(), ":").concat(date.getMinutes());
}
function updateWeatherElement(weather) {
  var days = "";
  for (var i = 0; i < weather.daily.time.length; i++) {
    var day = extractDayName(weather.daily.time[i]);
    var isWeekend = false;
    if (day == 'Sb' || day == 'Nd') {
      isWeekend = true;
    }
    var icon = getWeatherIcon(weather.daily.weathercode[i]);
    var sunrise = extractTime(weather.daily.sunrise[i]);
    var sunset = extractTime(weather.daily.sunset[i]);
    var maxT = weather.daily.temperature_2m_max[i];
    var minT = weather.daily.temperature_2m_min[i];
    var precipitation = weather.daily.precipitation_sum[i];
    days += "<div class=\"day_weather\">\n            <div class=\"weather_dayname ".concat(isWeekend ? 'weekend' : '', "\">").concat(day, "</div>\n            <div class=\"weather_icon\">").concat(icon, "</i></div>\n            <div class=\"weather_details\">\n                <table>\n                    <tbody>\n                        <tr>\n                            <td><span><i class=\"fa-solid fa-sun\"></i></td>\n                            <td>Wsch.</td>\n                            <td>").concat(sunrise, "</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-regular fa-sun\"></i></td>\n                            <td>Zach.</td>\n                            <td>").concat(sunset, "</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-solid fa-temperature-full\"></i></td>\n                            <td>Max T.</td>\n                            <td>").concat(maxT, " &degC</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-solid fa-temperature-empty\"></i></td>\n                            <td>Min T.</td>\n                            <td>").concat(minT, " &degC</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-solid fa-umbrella\"></i></td>\n                            <td>Opady</td>\n                            <td>").concat(precipitation, "mm</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>");
  }
  document.getElementById('weather_forecast').innerHTML = days;
}
/******/ })()
;