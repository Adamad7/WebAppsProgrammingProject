/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/newsletter.js ***!
  \************************************/
function subscribe() {
  if (isDataCorrect()) {
    saveData();
  }
  return false;
}
function isDataCorrect() {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,30}$/;
  var errorEmail = document.getElementById('error_email');
  var errorName = document.getElementById('error_name');
  var errorFreq = document.getElementById('error_frequency');
  var errorSub = document.getElementById('error_subjects');
  var errorFav = document.getElementById('error_fav_fishing_type');
  var ok = true;
  if (!isTextCorrect('email', emailRegex)) {
    errorEmail.textContent = 'Niepoprawny adres email';
    ok = false;
  } else {
    errorEmail.textContent = '';
  }
  if (!isTextCorrect('name', nameRegex)) {
    errorName.textContent = 'Niepoprawne imię';
    ok = false;
  } else {
    errorName.textContent = '';
  }
  if (!isRadioCorrect('frequency')) {
    errorFreq.textContent = 'Wybierz jedną z opcji';
    ok = false;
  } else {
    errorFreq.textContent = '';
  }
  if (!isBoxCorrect('subjects')) {
    errorSub.textContent = 'Wybierz przynajmniej jeden temat';
    ok = false;
  } else {
    errorSub.textContent = '';
  }
  if (!isRadioCorrect('fav_fishing_type')) {
    errorFav.textContent = 'Wybierz jedną z opcji';
    ok = false;
  } else {
    errorFav.textContent = '';
  }
  return ok;
}
function isTextCorrect(id, regex) {
  var text = document.getElementById(id);
  return regex.test(text.value);
}
function isRadioCorrect(name) {
  var radio = document.getElementsByName(name);
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) return true;
  }
  return false;
}
function isBoxCorrect(className) {
  var box = document.getElementsByClassName(className);
  for (i = 0; i < box.length; i++) {
    if (box[i].checked) return true;
  }
  return false;
}
function saveData() {
  var subscriber = {
    email: getText('email'),
    name: getText('name'),
    frequency: getRadio('frequency'),
    subjects: getBox('subjects'),
    favFishing: getRadio('fav_fishing_type'),
    comments: getText('comments'),
    rodo: getRodo()
  };
  var subscribersList = [];
  subscribersList = JSON.parse(localStorage.getItem('newsletter_subscribers'));
  if (subscribersList === null) {
    subscribersList = [];
  }
  if (!isAlreadySubscribed(subscriber, subscribersList)) {
    subscribersList.push(subscriber);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribersList));
    alert("Zapisano Cię na newsletter!");
  } else {
    alert("Na podany adres email wysyłamy już newsletter");
  }
}
function isAlreadySubscribed(subscriber, subscribersList) {
  for (var _i = 0; _i < subscribersList.length; _i++) {
    if (subscribersList[_i].email == subscriber.email) {
      return true;
    }
  }
  return false;
}
function getText(id) {
  return document.getElementById(id).value;
}
function getRadio(name) {
  var radio = document.getElementsByName(name);
  for (var _i2 = 0; _i2 < radio.length; _i2++) {
    if (radio[_i2].checked) {
      console.log($("label[for=".concat(radio[_i2].id, "]")).text());
      return $("label[for=".concat(radio[_i2].id, "]")).text();
    }
  }
  return null;
}
function getBox(className) {
  var box = document.getElementsByClassName(className);
  var checkedId = [];
  for (var _i3 = 0; _i3 < box.length; _i3++) {
    if (box[_i3].checked) {
      checkedId.push(box[_i3].id);
    }
  }
  var labels = [];
  for (var _i4 = 0; _i4 < checkedId.length; _i4++) {
    labels.push($("label[for=".concat(checkedId[_i4], "]")).text());
  }
  return labels;
}
function getRodo() {
  return document.getElementById('rodo').checked;
}
/******/ })()
;