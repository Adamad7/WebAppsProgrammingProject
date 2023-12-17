/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/js/shop.js ***!
  \******************************/
var currentMainOptionIndex = 0;
var currentAdditionalOptionIndex = 0;
var currentItem;
var items = {
  spinning_rods: [{
    name: "Wędka Jaxon Tenesa Easy Spin",
    img: "img/item_images/spinning_rod_1.jpg",
    manufacturer: "Jaxon",
    price: [60, 80, 90, 100],
    length: [210, 240, 270, 300],
    castingWeight: [20, 30, 40, 60, 75],
    sections: [2, 2, 3, 3],
    transportlength: [120, 130, 150, 190],
    weight: [260, 280, 300, 340]
  }, {
    name: "Wędka Dragon Express Spinn 35",
    img: "img/item_images/spinning_rod_2.jpg",
    manufacturer: "Dragon",
    price: [160, 180, 190, 210],
    length: [190, 220, 245, 305],
    castingWeight: [18, 25, 30, 35, 42],
    sections: [2, 2, 3, 3],
    transportlength: [110, 125, 142, 180],
    weight: [180, 210, 250, 290]
  }, {
    name: "Wędka Mikado Bixlite Spin",
    img: "img/item_images/spinning_rod_3.jpg",
    manufacturer: "Mikado",
    price: [100, 120, 150, 160],
    length: [198, 214, 244, 260],
    castingWeight: [7, 9, 12, 14, 16],
    sections: [2, 2, 2, 3],
    transportlength: [105, 116, 133, 150],
    weight: [80, 110, 119, 135]
  }],
  carp_rods: [{
    name: "Wędka Mikado Sasori Feeder",
    img: "img/item_images/carp_rod_1.jpg",
    manufacturer: "Mikado",
    price: [160, 180],
    length: [220, 255],
    castingWeight: [20, 30],
    sections: [2, 2],
    transportlength: [150, 180],
    weight: [230, 245]
  }, {
    name: "Wędka Zaffira Tele Carp Rt Jaxon",
    img: "img/item_images/carp_rod_2.jpg",
    manufacturer: "Jaxon",
    price: [260, 280, 300],
    length: [170, 190, 230],
    castingWeight: [60, 70, 100],
    sections: [2, 2, 3],
    transportlength: [180, 190, 210],
    weight: [280, 300, 325]
  }, {
    name: "Wędka Mikado Ultraviolet Feeder",
    img: "img/item_images/carp_rod_3.jpg",
    manufacturer: "Mikado",
    price: [190, 215],
    length: [185, 212],
    castingWeight: [70, 85],
    sections: [2, 2],
    transportlength: [130, 145],
    weight: [195, 235]
  }],
  front_reels: [{
    name: "Kołowrotek DAM Runshift 3L",
    img: "img/item_images/front_reel_1.jpg",
    manufacturer: "DAM",
    price: [130, 150],
    size: [4000, 5000],
    ratio: "5:1",
    spoolCapacity: ["0.28/250", "0.33/265"],
    brakeForce: [8, 11],
    length: [215, 265],
    bearing: "2+1"
  }, {
    name: "Kołowrotek Dragon Magnum FD230i",
    img: "img/item_images/front_reel_2.jpg",
    manufacturer: "Dragon",
    price: [60, 70],
    size: [3000, 4000],
    ratio: "6:1",
    spoolCapacity: ["0.28/210", "0.33/180"],
    brakeForce: [6, 8],
    length: [190, 210],
    bearing: "2"
  }, {
    name: "Kołowrotek Jaxon Bonzo PRI",
    img: "img/item_images/front_reel_3.jpg",
    manufacturer: "Jaxon",
    price: [50, 90],
    size: [2000, 3000],
    ratio: "4:1",
    spoolCapacity: ["0.28/220", "0.33/250"],
    brakeForce: [5, 10],
    length: [220, 240],
    bearing: "2+1"
  }],
  back_reels: [{
    name: "Kołowrotek Jaxon Piano VM",
    img: "img/item_images/back_reel_1.jpg",
    manufacturer: "Jaxon",
    price: [40, 60],
    size: [3000, 5000],
    ratio: "5.5:1",
    spoolCapacity: ["0.28/190", "0.33/235"],
    brakeForce: [5, 9],
    length: [210, 235],
    bearing: "2"
  }, {
    name: "Kołowrotek Jaxon Piano VS",
    img: "img/item_images/back_reel_2.jpg",
    manufacturer: "Jaxon",
    price: [45, 68],
    size: [3000, 4000],
    ratio: "5.0:1",
    spoolCapacity: ["0.28/215", "0.33/240"],
    brakeForce: [8, 10],
    length: [245, 260],
    bearing: "4+1"
  }, {
    name: "Kołowrotek Mikado Sasori RD",
    img: "img/item_images/back_reel_3.jpg",
    manufacturer: "Mikado",
    price: [55, 72],
    size: [2000, 3000],
    ratio: "5.2:1",
    spoolCapacity: ["0.28/235", "0.33/270"],
    brakeForce: [3, 5],
    length: [280, 310],
    bearing: "1"
  }],
  main_strings: [{
    name: "Żyłka Dragon Millenium Szczupak",
    img: "img/item_images/main_string_1.jpg",
    manufacturer: "Dragon",
    price: [10, 15],
    diameter: [0.20, 0.24],
    length: [200, 300]
  }, {
    name: "Żyłka Jaxon Crocodile Spinning",
    img: "img/item_images/main_string_2.jpg",
    manufacturer: "Jaxon",
    price: [8, 19],
    diameter: [0.25, 0.3],
    length: [100, 150]
  }, {
    name: "Żyłka Mikado Dino Dynamic II",
    img: "img/item_images/main_string_3.jpg",
    manufacturer: "Mikado",
    price: [25, 32],
    diameter: [0.3, 0.34],
    length: [500, 750]
  }, {
    name: "Żyłka Dragon Guide Select",
    img: "img/item_images/main_string_4.jpg",
    manufacturer: "Dragon",
    price: [39, 45],
    diameter: [0.24, 0.3],
    length: [750, 1000]
  }],
  artificial_baits: [{
    name: "Guma Savage Gear Slender Scoop Shad",
    img: "img/item_images/artificial_bait_1.jpg",
    manufacturer: "Savage Gear",
    price: [8, 9, 10],
    color: ["Czerwony", "Zielony", "Niebieski"],
    length: [9, 11, 13],
    weight: [7, 10, 12]
  }, {
    name: "Guma Mikado Angry CrayFish",
    img: "img/item_images/artificial_bait_2.jpg",
    manufacturer: "Mikado",
    price: [2, 4, 5],
    color: ["Różowy", "Złoty", "Zielony"],
    length: [3.5, 5, 6],
    weight: [4, 5, 7]
  }],
  natural_baits: [{
    name: "Kulki haczykowe Jaxon Method Ground 16mm",
    img: "img/item_images/natural_bait_1.jpg",
    price: [9],
    manufacturer: "Jaxon",
    flavor: ["Truskawka", "Wanilia", "Amur"]
  }, {
    name: "Kukurydza wędkarska w puszce Traper",
    img: "img/item_images/natural_bait_2.jpg",
    price: [3.5],
    manufacturer: "Traper",
    flavor: ["Truskawka", "Tutti-frutti", "Miód"]
  }]
};
function showCategory(categoryId) {
  var displayedItems;
  var itemsDescriptions;
  var categoryNames = ["Wędziska spinningowe", "Wędziska karpiowe", "Kołowrotki z przednim hamulcem", "Kołowrotki z tylnym hamulcem", "Żyłki główne", "Przynęty sztuczne", "Przynęty naturalne"];
  switch (categoryId) {
    case 1:
      displayedItems = items.spinning_rods;
      itemsDescriptions = getRodsDescription(displayedItems);
      break;
    case 2:
      displayedItems = items.carp_rods;
      itemsDescriptions = getRodsDescription(displayedItems);
      break;
    case 3:
      displayedItems = items.front_reels;
      itemsDescriptions = getReelsDescription(displayedItems);
      break;
    case 4:
      displayedItems = items.back_reels;
      itemsDescriptions = getReelsDescription(displayedItems);
      break;
    case 5:
      displayedItems = items.main_strings;
      itemsDescriptions = getStringsDescription(displayedItems);
      break;
    case 6:
      displayedItems = items.artificial_baits;
      itemsDescriptions = getArtificialBaitsDescription(displayedItems);
      break;
    case 7:
      displayedItems = items.natural_baits;
      itemsDescriptions = getNaturalBaitsDescprition(displayedItems);
      break;
    default:
      return null;
  }
  var html = '';
  for (var i = 0; i < displayedItems.length; i++) {
    html += "\n        <div class=\"item\">\n            <div class=\"item_image\">\n                <img src=\"".concat(displayedItems[i].img, "\" alt=\"item_img\">\n            </div>\n            <div class=\"item_name\">").concat(displayedItems[i].name, "</div>\n            <div class=\"item_description\">\n                ").concat(itemsDescriptions[i], "\n            </div>\n            <dvi class=\"item_price_details\">\n                <div class=\"item_price\">").concat(displayedItems[i].price[0], " z\u0142</div>\n                <button class=\"item_details\" onclick=\"showItemDetails(").concat(categoryId, ", ").concat(i, ")\">Szczeg\xF3\u0142y</button>\n            </dvi>\n        </div>\n        ");
  }
  document.getElementsByClassName('selected_category')[0].innerHTML = categoryNames[categoryId - 1];
  document.getElementById('items_display').innerHTML = html;
}
function getRodsDescription(rods) {
  var descriptions = [];
  for (var i = 0; i < rods.length; i++) {
    descriptions.push("D\u0142ugo\u015B\u0107 [mm]: ".concat(rods[i].length[0], "<br>\n        C.W. [g]: ").concat(rods[i].castingWeight[0], "<br>\n        Waga [g]: ").concat(rods[i].weight[0], "<br>"));
  }
  return descriptions;
}
function getReelsDescription(reels) {
  var descriptions = [];
  for (var i = 0; i < reels.length; i++) {
    descriptions.push("Wielko\u015B\u0107: ".concat(reels[i].size[0], "<br>\n        Prze\u0142o\u017Cenie.: ").concat(reels[i].ratio, "<br>\n        Poj. szpuli: ").concat(reels[i].spoolCapacity[0], "<br>\n        Si\u0142a hamulca [kg]: ").concat(reels[i].brakeForce[0], "<br>"));
  }
  return descriptions;
}
function getStringsDescription(strings) {
  var descriptions = [];
  for (var i = 0; i < strings.length; i++) {
    descriptions.push("\u015Arednica [mm]: ".concat(strings[i].diameter[0], "<br>\n        D\u0142ugo\u015B\u0107 [m]: ").concat(strings[i].length[0], "<br>"));
  }
  return descriptions;
}
function getArtificialBaitsDescription(baits) {
  var descriptions = [];
  for (var i = 0; i < baits.length; i++) {
    descriptions.push("Kolor: ".concat(baits[i].color[0], "<br>\n        D\u0142ugo\u015B\u0107 [mm]: ").concat(baits[i].length[0], "<br>\n        Ci\u0119\u017Car [g]: ").concat(baits[i].weight[0], "<br>"));
  }
  return descriptions;
}
function getNaturalBaitsDescprition(baits) {
  var descriptions = [];
  for (var i = 0; i < baits.length; i++) {
    descriptions.push("Smak: ".concat(baits[i].flavor[0], "<br>"));
  }
  return descriptions;
}
function showItemDetails(categoryId, itemIndex) {
  currentMainOptionIndex = 0;
  currentAdditionalOptionIndex = 0;
  var item;
  var mainOptions = '';
  var additionalOptions = '';
  switch (categoryId) {
    case 1:
      item = items.spinning_rods[itemIndex];
      mainOptions = getOptions('length', item.length, "Długość [mm]", true, categoryId);
      additionalOptions = getOptions('cw', item.castingWeight, "C.W. [g]", false, categoryId);
      break;
    case 2:
      item = items.carp_rods[itemIndex];
      mainOptions = getOptions('length', item.length, "Długość [mm]", true, categoryId);
      additionalOptions = getOptions('cw', item.castingWeight, "C.W. [g]", false, categoryId);
      break;
    case 3:
      item = items.front_reels[itemIndex];
      mainOptions = getOptions('size', item.size, "Wielkość", true, categoryId);
      break;
    case 4:
      item = items.back_reels[itemIndex];
      mainOptions = getOptions('size', item.size, "Wielkość", true, categoryId);
      break;
    case 5:
      item = items.main_strings[itemIndex];
      mainOptions = getOptions('length', item.length, "Długość [mm]", true, categoryId);
      additionalOptions = getOptions('diameter', item.diameter, "Średnica [mm]", false, categoryId);
      break;
    case 6:
      item = items.artificial_baits[itemIndex];
      mainOptions = getOptions('length', item.length, "Długość [mm]", true, categoryId);
      additionalOptions = getOptions('color', item.color, "Kolor", false, categoryId);
      break;
    case 7:
      item = items.natural_baits[itemIndex];
      additionalOptions = getOptions('flavor', item.flavor, "Smak", false, categoryId);
      break;
    default:
      return null;
  }
  currentItem = item;
  var html = "\n    <div id=\"details\">\n        <div id=\"img_and_options\">\n            <img src=\"".concat(item.img, "\" alt=\"item_img\">\n            \n            <div id=\"name_and_options\">\n                <h2 class=\"product_details\">").concat(item.name, "</h2>\n                <div id=\"item_price\">").concat(item.price[currentMainOptionIndex], "z\u0142</div>\n                <div id=\"product_options\">\n                    <div class=\"product_option\">\n                        ").concat(mainOptions, "\n\n                        </div>\n                    <div class=\"product_option\">\n                        \n                        ").concat(additionalOptions, "\n                    </div>\n                    <div class=\"product_option\">\n                        <div class=\"option_name\">Ilo\u015B\u0107:</div>\n                        <div id=\"options_quantity\" class=\"options\">\n                            <input id=\"quantity\" type=\"number\" max=\"10\" min=\"1\" value=\"1\">\n                            <div id=\"quantity_error\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div id=\"product_details\">\n        </div>\n\n        <div id=\"back_and_cart\">\n            <button id=\"go_back\" onclick=\"goBack(").concat(categoryId, ")\"><i class=\"fa-solid fa-arrow-left-long\"></i> Wr\xF3\u0107</button>\n            <button id=\"add_to_cart\" onclick=\"addToCart()\"><i class=\"fa-solid fa-cart-arrow-down fa-beat\"></i> Do koszyka</button>\n        </div>\n    </div>\n    ");
  document.getElementsByTagName('main')[0].innerHTML = html;
  updateDetails(categoryId);
}
function updateDetails(categoryId) {
  if (categoryId <= 2) {
    updateRodDetails();
  } else if (categoryId > 2 && categoryId <= 4) {
    updateReelDetails();
  } else if (categoryId > 4 && categoryId <= 5) {
    updateStringDetails();
  } else if (categoryId > 5 && categoryId <= 6) {
    updateArtificialBaitDetails();
  } else if (categoryId > 6 && categoryId <= 7) {
    updateNaturalBaitDetails();
  }
}
function getOptions(className, options, optionName, isMainOption, categoryId) {
  var html = "\n    <div class=\"option_name\">".concat(optionName, ":</div>\n    <div id=\"options_").concat(className, "\" class=\"options\">");
  html += "<button class=\"option ".concat(className, " selected\" onclick=\"selectOption('").concat(className, "', 0, ").concat(isMainOption, ", ").concat(categoryId, ")\">").concat(options[0], "</button>");
  for (var i = 1; i < options.length; i++) {
    html += "<button class=\"option ".concat(className, "\" onclick=\"selectOption('").concat(className, "', ").concat(i, ", ").concat(isMainOption, ", ").concat(categoryId, ")\">").concat(options[i], "</button>");
  }
  html += '</div>';
  return html;
}
function updateRodDetails() {
  var html = "\n    <div>Szczeg\xF3\u0142y:</div>\n            <table>\n                <tbody>\n                    <tr><td>Producent</td><td>".concat(currentItem.manufacturer, "</td></tr>\n                    <tr><td>D\u0142ugo\u015B\u0107 [mm]</td><td>").concat(currentItem.length[currentMainOptionIndex], "</td></tr>\n                    <tr><td>C. W. [g]</td><td>").concat(currentItem.castingWeight[currentAdditionalOptionIndex], "</td></tr>\n                    <tr><td>Sekcje</td><td>").concat(currentItem.sections[currentMainOptionIndex], "</td></tr>\n                    <tr><td>D\u0142. transportowa [mm]</td><td>").concat(currentItem.transportlength[currentMainOptionIndex], "</td></tr>\n                    <tr><td>Waga [g]</td><td>").concat(currentItem.weight[currentMainOptionIndex], "</td></tr>\n                </tbody>\n            </table>\n    ");
  document.getElementById('product_details').innerHTML = html;
}
function updateReelDetails() {
  var html = "\n    <div>Szczeg\xF3\u0142y:</div>\n            <table>\n                <tbody>\n                    <tr><td>Producent</td><td>".concat(currentItem.manufacturer, "</td></tr>\n                    <tr><td>Wielko\u015B\u0107</td><td>").concat(currentItem.size[currentMainOptionIndex], "</td></tr>\n                    <tr><td>Prze\u0142o\u017Cenie</td><td>").concat(currentItem.ratio, "</td></tr>\n                    <tr><td>Pojemno\u015B\u0107 szpuli</td><td>").concat(currentItem.spoolCapacity[currentMainOptionIndex], "</td></tr>\n                    <tr><td>Si\u0142a hamulca [kg]</td><td>").concat(currentItem.brakeForce[currentMainOptionIndex], "</td></tr>\n                    <tr><td>D\u0142ugo\u015B\u0107 [mm]</td><td>").concat(currentItem.length[currentMainOptionIndex], "</td></tr>\n                    <tr><td>\u0141o\u017Cyska</td><td>").concat(currentItem.bearing, "</td></tr>\n                </tbody>\n            </table>\n    ");
  document.getElementById('product_details').innerHTML = html;
}
function updateStringDetails() {
  var html = "\n    <div>Szczeg\xF3\u0142y:</div>\n            <table>\n                <tbody>\n                    <tr><td>Producent</td><td>".concat(currentItem.manufacturer, "</td></tr>\n                    <tr><td>D\u0142ugo\u015B\u0107 [m]</td><td>").concat(currentItem.length[currentMainOptionIndex], "</td></tr>\n                    <tr><td>\u015Arednica [mm]</td><td>").concat(currentItem.diameter[currentAdditionalOptionIndex], "</td></tr>\n                </tbody>\n            </table>\n    ");
  document.getElementById('product_details').innerHTML = html;
}
function updateArtificialBaitDetails() {
  var html = "\n    <div>Szczeg\xF3\u0142y:</div>\n            <table>\n                <tbody>\n                    <tr><td>Producent</td><td>".concat(currentItem.manufacturer, "</td></tr>\n                    <tr><td>D\u0142ugo\u015B\u0107 [mm]</td><td>").concat(currentItem.length[currentMainOptionIndex], "</td></tr>\n                    <tr><td>Kolor</td><td>").concat(currentItem.color[currentAdditionalOptionIndex], "</td></tr>\n                    <tr><td>Ci\u0119\u017Car [g]</td><td>").concat(currentItem.weight[currentMainOptionIndex], "</td></tr>\n                </tbody>\n            </table>\n    ");
  document.getElementById('product_details').innerHTML = html;
}
function updateNaturalBaitDetails() {
  var html = "\n    <div>Szczeg\xF3\u0142y:</div>\n            <table>\n                <tbody>\n                    <tr><td>Producent</td><td>".concat(currentItem.manufacturer, "</td></tr>\n                    <tr><td>Smak</td><td>").concat(currentItem.flavor[currentAdditionalOptionIndex], "</td></tr>\n                </tbody>\n            </table>\n    ");
  document.getElementById('product_details').innerHTML = html;
}
function updatePrice() {
  document.getElementById('item_price').innerHTML = currentItem.price[currentMainOptionIndex] + "zł";
}
function selectOption(className, selectedIndex, isMainOption, categoryId) {
  var options = document.getElementsByClassName(className);
  if (isMainOption == true) {
    currentMainOptionIndex = selectedIndex;
  } else {
    currentAdditionalOptionIndex = selectedIndex;
  }
  var parentId = options[0].parentElement.id;
  var html = "";
  for (var i = 0; i < options.length; i++) {
    if (i == selectedIndex) {
      html += "<button class=\"option ".concat(className, " selected\" onclick=\"selectOption('").concat(className, "', ").concat(i, ", ").concat(isMainOption, ", ").concat(categoryId, ")\">").concat(options[i].innerHTML, "</button>");
    } else {
      html += "<button class=\"option ".concat(className, "\" onclick=\"selectOption('").concat(className, "', ").concat(i, ", ").concat(isMainOption, ", ").concat(categoryId, ")\">").concat(options[i].innerHTML, "</button>");
    }
  }
  updateDetails(categoryId);
  updatePrice();
  document.getElementById(parentId).innerHTML = html;
}
function goBack(categoryId) {
  document.getElementsByTagName('main')[0].innerHTML = "\n    <div id=\"shop\">\n            <aside id=\"filters\">\n                <div class=\"category\">\n                    <div class=\"category_name\">\n                        W\u0119dziska\n                    </div>\n                    <ul>\n                        <li><a href=\"javascript:showCategory(1);\">Spinningowe</a></li>\n                        <li><a href=\"javascript:showCategory(2);\">Karpiowe</a></li>\n                    </ul>\n                </div>\n                <div class=\"category\">\n                    <div class=\"category_name\">\n                        Ko\u0142owrotki\n                    </div>\n                    <ul>\n                        <li><a href=\"javascript:showCategory(3);\">Z przednim hamulcem</a></li>\n                        <li><a href=\"javascript:showCategory(4);\">Z tylnym hamulcem</a></li>\n                    </ul>\n                </div>\n                <div class=\"category\">\n                    <div class=\"category_name\">\n                        \u017By\u0142ki\n                    </div>\n                    <ul>\n                        <li><a href=\"javascript:showCategory(5);\">G\u0142\xF3wne</a></li>\n                    </ul>\n                </div>\n                <div class=\"category\">\n                    <div class=\"category_name\">\n                        Przyn\u0119ty\n                    </div>\n                    <ul>\n                        <li><a href=\"javascript:showCategory(6);\">Sztuczne</a></li>\n                        <li><a href=\"javascript:showCategory(7);\">Naturalne</a></li>\n                    </ul>\n                </div>\n            </aside>\n            <div id=\"items\">\n                <h2 class=\"selected_category\">Wybierz kategori\u0119</h2>\n                <div id=\"items_display\">\n                </div>\n            </div>\n        </div>\n    ";
  showCategory(categoryId);
}
function addToCart() {
  var itemQuantity = document.getElementById("quantity").value;
  if (itemQuantity < 1 || itemQuantity > 10) {
    document.getElementById('quantity_error').innerHTML = "Błąd, możesz kupić od 1 do 10 sztuk produktu";
    return;
  } else {
    document.getElementById('quantity_error').innerHTML = '';
  }
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (cart == null) {
    cart = {
      totalValue: 0,
      itemsInCart: []
    };
  }
  cart.itemsInCart.push({
    item: currentItem,
    quantity: itemQuantity,
    price: currentItem.price[currentMainOptionIndex],
    totalPrice: itemQuantity * currentItem.price[currentMainOptionIndex],
    mainOption: currentMainOptionIndex,
    additionalOption: currentAdditionalOptionIndex
  });
  cart.totalValue += itemQuantity * currentItem.price[currentMainOptionIndex];
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Dodano produkt do koszyka");
  updateCartValue();
}
/******/ })()
;