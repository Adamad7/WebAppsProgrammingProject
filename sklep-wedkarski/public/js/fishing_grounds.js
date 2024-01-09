/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./resources/js/fishing_grounds.js ***!
  \*****************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var map;
var weatherLat;
var weatherLng;
var grounds;
var grounds;
$(document).ready(function () {
  getGroundsAndInit();
});
function getGroundsAndInit() {
  return _getGroundsAndInit.apply(this, arguments);
}
function _getGroundsAndInit() {
  _getGroundsAndInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("/get_fishing_grounds").then(function (response) {
            return response.json();
          }).then(function (data) {
            return data;
          });
        case 2:
          grounds = _context.sent;
          $("#find_closest_ground_button").on("click", findClosestFishingGround);
          $("#pan_to_location_button").on("click", panToCurrentLocation);
          $("#check_weather_button").on("click", checkWeather);
          initMap();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getGroundsAndInit.apply(this, arguments);
}
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
  map = L.map("map").setView([latitide, longitude], 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  addFishingGroundsMarkers(map);
  var redIcon = L.icon({
    iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  });
  L.marker([latitide, longitude], {
    icon: redIcon
  }).addTo(map).bindPopup("Moja lokalizacja");
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
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var closestDistance = Math.pow(grounds[0].latitude - latitude, 2) + Math.pow(grounds[0].longitude - longitude, 2);
  var closestId = 0;
  for (var i = 1; i < grounds.length; i++) {
    var distance = Math.pow(grounds[i].latitude - latitude, 2) + Math.pow(grounds[i].longitude - longitude, 2);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestId = i;
    }
  }
  map.flyTo([grounds[closestId].latitude, grounds[closestId].longitude], 11);
}
function addFishingGroundsMarkers(map) {
  for (var i = 0; i < grounds.length; i++) {
    L.marker([grounds[i].latitude, grounds[i].longitude]).addTo(map).bindPopup(grounds[i].name).on("click", updateGroundDetails);
  }
}
function updateGroundDetails(e) {
  var ground = grounds.find(function (element) {
    return element.latitude == e.latlng.lat && element.longitude == e.latlng.lng;
  });
  var species = ground.species;
  weatherLat = e.latlng.lat;
  weatherLng = e.latlng.lng;
  document.getElementById("weather_forecast").innerHTML = "";
  document.getElementById("ground_name").innerHTML = ground.name;
  document.getElementById("ground_voivodeship").textContent = ground.voivodeship;
  document.getElementById("ground_spieces").innerHTML = species;
  document.getElementById("ground_area").innerHTML = ground.area;
  document.getElementById("ground_night_fishing").innerHTML = ground.nightFishing ? "Tak" : "Nie";
  document.getElementById("ground_tent").innerHTML = ground.tent ? "Tak" : "Nie";
  document.getElementById("ground_accommodation").innerHTML = ground.accommodation ? "Tak" : "Nie";
  document.getElementById("ground_spinning").innerHTML = ground.spinning ? "Tak" : "Nie";
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
    0: "Nd",
    1: "Pn",
    2: "Wt",
    3: "Śr",
    4: "Cz",
    5: "Pt",
    6: "Sb"
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
    if (day == "Sb" || day == "Nd") {
      isWeekend = true;
    }
    var icon = getWeatherIcon(weather.daily.weathercode[i]);
    var sunrise = extractTime(weather.daily.sunrise[i]);
    var sunset = extractTime(weather.daily.sunset[i]);
    var maxT = weather.daily.temperature_2m_max[i];
    var minT = weather.daily.temperature_2m_min[i];
    var precipitation = weather.daily.precipitation_sum[i];
    days += "<div class=\"day_weather\">\n            <div class=\"weather_dayname ".concat(isWeekend ? "weekend" : "", "\">").concat(day, "</div>\n            <div class=\"weather_icon\">").concat(icon, "</i></div>\n            <div class=\"weather_details\">\n                <table>\n                    <tbody>\n                        <tr>\n                            <td><span><i class=\"fa-solid fa-sun\"></i></td>\n                            <td>Wsch.</td>\n                            <td>").concat(sunrise, "</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-regular fa-sun\"></i></td>\n                            <td>Zach.</td>\n                            <td>").concat(sunset, "</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-solid fa-temperature-full\"></i></td>\n                            <td>Max T.</td>\n                            <td>").concat(maxT, " &degC</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-solid fa-temperature-empty\"></i></td>\n                            <td>Min T.</td>\n                            <td>").concat(minT, " &degC</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa-solid fa-umbrella\"></i></td>\n                            <td>Opady</td>\n                            <td>").concat(precipitation, "mm</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>");
  }
  document.getElementById("weather_forecast").innerHTML = days;
}
/******/ })()
;