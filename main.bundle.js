/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Montserrat-VariableFont_wght.ttf */ "./src/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./PermanentMarker-Regular.ttf */ "./src/PermanentMarker-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background9.jpg */ "./src/images/background9.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n.body {\n    padding: 0px !important;\n    margin: 0px  !important;\n\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'PermanentMarker';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n\n\n/* ********************************************************************************* */\n/* ROOT COMPONENT */\n/* ********************************************************************************* */\n\n.background {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    height: 100vh;\n    width: 100vw;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* box-shadow: inset 0 0 0 500px  rgba(56, 39, 55, 0.6); */\n    background-attachment: fixed;\n}\n\n/* ********************************************************************************* */\n/* HEADER COMPONENT */\n/* ********************************************************************************* */\n\n.header {\n    text-align: center;\n    padding-top: 30px;\n    padding-bottom: 8px;\n    color: white;\n    background-color: rgba(8, 1, 1, 0.9);\n}\n\n.header-name {\n    margin-top: 0px;\n    font-size: 60px;\n    font-family: 'PermanentMarker';\n}\n\n.header-tabs {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    padding-left: 0px;\n    cursor: pointer;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.header-tab:hover {\n    padding-top: 10px;\n}\n\n.header-tab {\n    list-style-type: none;\n    padding-right: 20px;\n    padding-left: 20px;\n    padding-bottom: 15px;\n    font-size: 20px;\n    letter-spacing: 2px;\n    padding-top: 20px;\n    transition: 200ms linear;\n}\n\n/* ********************************************************************************* */\n/* HOME PAGE */\n/* ********************************************************************************* */\n\n/* HOME PAGE DESCRIPTION */\n\n.chefImage {\n    width: 80%;\n    border-radius: 50%;\n    margin: 20px auto;\n}\n\n/* .description {\n    background-color: rgba(8, 1, 1, 0.7);\n    width: 90%;\n    margin: 50px auto;\n    padding: 20px;\n} */\n\n/* BULLETIN CONTENTS */\n\n/* .bulletin {\n    background-color: rgba(8, 1, 1, 0.9);\n    width: 90%;\n    margin: 20px auto;\n    padding: 20px;\n} */\n\n/* ********************************************************************************* */\n/* MENU COMPONENT */\n/* ********************************************************************************* */\n\n.img {\n    width: 180px;\n    height: 180px;\n    border-radius: 20px;\n}\n\n.wrapper {\n    max-width: 250px;\n    background-color: rgba(0, 0, 0, 0.6);\n    margin: 20px;\n    padding: 20px 20px 0px 20px;\n    border: 1px solid rgb(85, 83, 83);\n    border-radius: 10px;\n    transition: 300ms;\n}\n\n.wrapper:hover {\n    background-color: rgba(143, 143, 143, 0.6);\n    cursor: pointer;\n}\n\n.menuLiner {\n    border-bottom: 1px solid rgb(41, 41, 41);\n    border-top: 1px solid rgb(41, 41, 41);\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 5px;\n}\n\n.wrapper p {\n    font-size: 12px;\n}\n\n.menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* ********************************************************************************* */\n/* CONTACT COMPONENT */\n/* ********************************************************************************* */\n\n/* .contact-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n} */\n\n.mapImage {\n    width: 100%;\n    margin: 10px auto;\n}\n/* ********************************************************************************* */\n/* FOOTER COMPONENT */\n/* ********************************************************************************* */\n\n.footer {\n    background-color:rgba(8, 1, 1, 0.9);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\n}\n\n\n/* ********************************************************************************* */\n/* CLASS BANK */\n/* ********************************************************************************* */\n\n.inactive {\n    display: none;\n}\n\n.bottomLine {\n    border-bottom: 2px solid white;\n}\n\n.center {\n    text-align: center;\n}\n\n.whiteColor {\n    color: white;\n}\n\n.largeSize {\n    font-size: 50px;\n}\n\n.container {\n    /* display: flex;\n    flex-direction: column; */\n    background-color: rgba(0, 0, 0, 0.7);\n    max-width: 700px;\n    width: 90%;\n    margin: 50px auto;\n    padding: 40px;\n    font-family: 'Montserrat', cursive;\n    text-align: center;\n    letter-spacing: 1px;\n    word-spacing: 2px;\n}\n\n.liner {\n    border-bottom: 1px solid rgb(117, 116, 116);\n    border-top: 1px solid rgb(117, 116, 116);\n    padding-bottom: 10px;\n    padding-top: 10px;\n    margin-top: 40px;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;;AAE3B;;AAEA;IACI,yBAAyB;IACzB,4CAA8C;AAClD;;AAEA;IACI,8BAA8B;IAC9B,4CAAyC;AAC7C;;;;AAIA,sFAAsF;AACtF,mBAAmB;AACnB,sFAAsF;;AAEtF;IACI,yDAAiD;IACjD,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,0DAA0D;IAC1D,4BAA4B;AAChC;;AAEA,sFAAsF;AACtF,qBAAqB;AACrB,sFAAsF;;AAEtF;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2DAA2D;IAC3D,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA,sFAAsF;AACtF,cAAc;AACd,sFAAsF;;AAEtF,0BAA0B;;AAE1B;IACI,UAAU;IACV,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;;;;GAKG;;AAEH,sBAAsB;;AAEtB;;;;;GAKG;;AAEH,sFAAsF;AACtF,mBAAmB;AACnB,sFAAsF;;AAEtF;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,YAAY;IACZ,2BAA2B;IAC3B,iCAAiC;IACjC,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;IACI,wCAAwC;IACxC,qCAAqC;IACrC,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA,sFAAsF;AACtF,sBAAsB;AACtB,sFAAsF;;AAEtF;;;;;GAKG;;AAEH;IACI,WAAW;IACX,iBAAiB;AACrB;AACA,sFAAsF;AACtF,qBAAqB;AACrB,sFAAsF;;AAEtF;IACI,mCAAmC;IACnC,iBAAiB;IACjB,oBAAoB;IACpB,2DAA2D;;AAE/D;;;AAGA,sFAAsF;AACtF,eAAe;AACf,sFAAsF;;AAEtF;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;6BACyB;IACzB,oCAAoC;IACpC,gBAAgB;IAChB,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,2CAA2C;IAC3C,wCAAwC;IACxC,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,oCAAoC;AACxC","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\n.body {\n    padding: 0px !important;\n    margin: 0px  !important;\n\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url('./Montserrat-VariableFont_wght.ttf');\n}\n\n@font-face {\n    font-family: 'PermanentMarker';\n    src: url('./PermanentMarker-Regular.ttf');\n}\n\n\n\n/* ********************************************************************************* */\n/* ROOT COMPONENT */\n/* ********************************************************************************* */\n\n.background {\n    background-image: url('./images/background9.jpg');\n    height: 100vh;\n    width: 100vw;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* box-shadow: inset 0 0 0 500px  rgba(56, 39, 55, 0.6); */\n    background-attachment: fixed;\n}\n\n/* ********************************************************************************* */\n/* HEADER COMPONENT */\n/* ********************************************************************************* */\n\n.header {\n    text-align: center;\n    padding-top: 30px;\n    padding-bottom: 8px;\n    color: white;\n    background-color: rgba(8, 1, 1, 0.9);\n}\n\n.header-name {\n    margin-top: 0px;\n    font-size: 60px;\n    font-family: 'PermanentMarker';\n}\n\n.header-tabs {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    padding-left: 0px;\n    cursor: pointer;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.header-tab:hover {\n    padding-top: 10px;\n}\n\n.header-tab {\n    list-style-type: none;\n    padding-right: 20px;\n    padding-left: 20px;\n    padding-bottom: 15px;\n    font-size: 20px;\n    letter-spacing: 2px;\n    padding-top: 20px;\n    transition: 200ms linear;\n}\n\n/* ********************************************************************************* */\n/* HOME PAGE */\n/* ********************************************************************************* */\n\n/* HOME PAGE DESCRIPTION */\n\n.chefImage {\n    width: 80%;\n    border-radius: 50%;\n    margin: 20px auto;\n}\n\n/* .description {\n    background-color: rgba(8, 1, 1, 0.7);\n    width: 90%;\n    margin: 50px auto;\n    padding: 20px;\n} */\n\n/* BULLETIN CONTENTS */\n\n/* .bulletin {\n    background-color: rgba(8, 1, 1, 0.9);\n    width: 90%;\n    margin: 20px auto;\n    padding: 20px;\n} */\n\n/* ********************************************************************************* */\n/* MENU COMPONENT */\n/* ********************************************************************************* */\n\n.img {\n    width: 180px;\n    height: 180px;\n    border-radius: 20px;\n}\n\n.wrapper {\n    max-width: 250px;\n    background-color: rgba(0, 0, 0, 0.6);\n    margin: 20px;\n    padding: 20px 20px 0px 20px;\n    border: 1px solid rgb(85, 83, 83);\n    border-radius: 10px;\n    transition: 300ms;\n}\n\n.wrapper:hover {\n    background-color: rgba(143, 143, 143, 0.6);\n    cursor: pointer;\n}\n\n.menuLiner {\n    border-bottom: 1px solid rgb(41, 41, 41);\n    border-top: 1px solid rgb(41, 41, 41);\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 5px;\n}\n\n.wrapper p {\n    font-size: 12px;\n}\n\n.menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* ********************************************************************************* */\n/* CONTACT COMPONENT */\n/* ********************************************************************************* */\n\n/* .contact-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n} */\n\n.mapImage {\n    width: 100%;\n    margin: 10px auto;\n}\n/* ********************************************************************************* */\n/* FOOTER COMPONENT */\n/* ********************************************************************************* */\n\n.footer {\n    background-color:rgba(8, 1, 1, 0.9);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\n}\n\n\n/* ********************************************************************************* */\n/* CLASS BANK */\n/* ********************************************************************************* */\n\n.inactive {\n    display: none;\n}\n\n.bottomLine {\n    border-bottom: 2px solid white;\n}\n\n.center {\n    text-align: center;\n}\n\n.whiteColor {\n    color: white;\n}\n\n.largeSize {\n    font-size: 50px;\n}\n\n.container {\n    /* display: flex;\n    flex-direction: column; */\n    background-color: rgba(0, 0, 0, 0.7);\n    max-width: 700px;\n    width: 90%;\n    margin: 50px auto;\n    padding: 40px;\n    font-family: 'Montserrat', cursive;\n    text-align: center;\n    letter-spacing: 1px;\n    word-spacing: 2px;\n}\n\n.liner {\n    border-bottom: 1px solid rgb(117, 116, 116);\n    border-top: 1px solid rgb(117, 116, 116);\n    padding-bottom: 10px;\n    padding-top: 10px;\n    margin-top: 40px;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_restaurantLocation_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/restaurantLocation.png */ "./src/images/restaurantLocation.png");




function contact() {
    const element = document.createElement('div');
    element.classList.add('contact-page', 'container');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = '+234 (813) 8818 457';
    const address = document.createElement('p');
    address.innerText = '13 Ibiono Street, Uyo, Akwa Ibom State, Nigeria';

    const map = new Image();
    map.src = _images_restaurantLocation_png__WEBPACK_IMPORTED_MODULE_1__;
    map.classList.add('mapImage')

    element.appendChild(phoneNumber);
    element.appendChild(address);
    element.appendChild(map);

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function footer(){
    const element = document.createElement('div');
    element.classList.add('footer', 'center')

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Copyright © 2022 Andre Udotai'

    element.appendChild(paragraph);

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function header() {
    const element = document.createElement('div');
    const name = document.createElement('h1');
    const tabs = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    name.innerHTML = 'Akwa Cuisines';
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    element.classList.add('header');
    name.classList.add('header-name');
    home.classList.add('header-tab', 'home-button');
    menu.classList.add('header-tab', 'menu-button');
    contact.classList.add('header-tab', 'contact-button');
    tabs.classList.add('header-tabs');

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    element.appendChild(name);
    element.appendChild(tabs);

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_chefImage_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/chefImage.jpg */ "./src/images/chefImage.jpg");






function home() {
    const element = document.createElement('div');
    element.classList.add('home-page');

    const chefImage = new Image();
    chefImage.src = _images_chefImage_jpg__WEBPACK_IMPORTED_MODULE_1__;
    chefImage.classList.add('chefImage');

    const description = document.createElement('div');
    description.classList.add('container');

    const descriptionParagraph = document.createElement('p');

    descriptionParagraph.innerText =
        'Akwa Cuisine introduces you to the savory soups and meals made from the rich lush leaves and crops in Akwa Ibom State, south/south Nigeria (The region with the best soups in the Western Africa sub region).';

    description.appendChild(descriptionParagraph);

    const bulletin = document.createElement('div');
    bulletin.classList.add('container');
    const bulletinHeader = document.createElement('h2');
    bulletinHeader.innerText = `RESTAURANT'S SPECIAL`;
    bulletinHeader.classList.add('center')
    const bulletinSubHeader = document.createElement('h3');
    bulletinSubHeader.innerText = 'NDIA NYUKO - OUR STANDARD 3 COURSE MEALS';
    bulletinSubHeader.classList.add('center')
    const starterCourseTitle = document.createElement('h4');
    starterCourseTitle.innerText = 'Starters';
    starterCourseTitle.classList.add('liner');
    const firstCourseTitle = document.createElement('h4');
    firstCourseTitle.innerText = 'First Courses';
    firstCourseTitle.classList.add('liner');
    const secondCourseTitle = document.createElement('h4');
    secondCourseTitle.innerText = 'Second Courses';
    const starterP1 = document.createElement('p');
    secondCourseTitle.classList.add('liner');
    starterP1.innerText = 'Chicken Pepper Soup';
    const starterP2 = document.createElement('p');
    starterP2.innerText = 'Chevon Pepper Soup';
    const firstP1 = document.createElement('p');
    firstP1.innerText = 'Ubobok Ukom (Plantain Porridge) with stock fish';
    const firstP2 = document.createElement('p');
    firstP2.innerText = 'Oto Mboro (Unripe Plantain Porridge) with dried fish';
    const secondP1 = document.createElement('p');
    secondP1.innerText = 'Edikang Ikong Soup with Goat Meat';
    const secondP2 = document.createElement('p');
    secondP2.innerText = 'Afang Soup with Goat Meat';

    bulletin.appendChild(bulletinHeader);
    bulletin.appendChild(chefImage);
    bulletin.appendChild(bulletinSubHeader);
    bulletin.appendChild(starterCourseTitle);
    bulletin.appendChild(starterP1);
    bulletin.appendChild(starterP2);
    bulletin.appendChild(firstCourseTitle);
    bulletin.appendChild(firstP1);
    bulletin.appendChild(firstP2);
    bulletin.appendChild(secondCourseTitle);
    bulletin.appendChild(secondP1);
    bulletin.appendChild(secondP2);

    element.appendChild(description);
    element.appendChild(bulletin);

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_afang_soup_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/afang-soup.jpeg */ "./src/images/afang-soup.jpeg");
/* harmony import */ var _images_afia_efere_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/afia-efere.jpeg */ "./src/images/afia-efere.jpeg");
/* harmony import */ var _images_asa_akpakpa_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/asa-akpakpa.jpeg */ "./src/images/asa-akpakpa.jpeg");
/* harmony import */ var _images_atama_soup_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/atama-soup.jpeg */ "./src/images/atama-soup.jpeg");
/* harmony import */ var _images_efere_atike2_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/efere-atike2.jpeg */ "./src/images/efere-atike2.jpeg");
/* harmony import */ var _images_efere_ikon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/efere-ikon.jpg */ "./src/images/efere-ikon.jpg");
/* harmony import */ var _images_fisherman_soup_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/fisherman-soup.jpeg */ "./src/images/fisherman-soup.jpeg");
/* harmony import */ var _images_otong_soup_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/otong-soup.jpeg */ "./src/images/otong-soup.jpeg");
/* harmony import */ var _images_pepper_soup_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/pepper-soup.jpg */ "./src/images/pepper-soup.jpg");
/* harmony import */ var _images_edikang_ikong_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/edikang-ikong.jpg */ "./src/images/edikang-ikong.jpg");
/* harmony import */ var _images_ekoki_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/ekoki.jpeg */ "./src/images/ekoki.jpeg");
/* harmony import */ var _images_ekpang_nkukwo_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/ekpang-nkukwo.jpeg */ "./src/images/ekpang-nkukwo.jpeg");
/* harmony import */ var _images_ukang_ukom_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/ukang-ukom.png */ "./src/images/ukang-ukom.png");
/* harmony import */ var _images_ubobok_ukom_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/ubobok-ukom.jpeg */ "./src/images/ubobok-ukom.jpeg");
/* harmony import */ var _images_oto_ebre_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/oto-ebre.jpg */ "./src/images/oto-ebre.jpg");
/* harmony import */ var _images_oto_mboro_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/oto-mboro.jpeg */ "./src/images/oto-mboro.jpeg");

















const afangsoup = new Image();
afangsoup.src = _images_afang_soup_jpeg__WEBPACK_IMPORTED_MODULE_0__;

const afiaefere = new Image();
afiaefere.src = _images_afia_efere_jpeg__WEBPACK_IMPORTED_MODULE_1__;

const asaakpakpa = new Image();
asaakpakpa.src = _images_asa_akpakpa_jpeg__WEBPACK_IMPORTED_MODULE_2__;

const atamasoup = new Image();
atamasoup.src = _images_atama_soup_jpeg__WEBPACK_IMPORTED_MODULE_3__;

const efereatike = new Image();
efereatike.src = _images_efere_atike2_jpeg__WEBPACK_IMPORTED_MODULE_4__;

const efereikon = new Image();
efereikon.src = _images_efere_ikon_jpg__WEBPACK_IMPORTED_MODULE_5__;

const fishermansoup = new Image();
fishermansoup.src = _images_fisherman_soup_jpeg__WEBPACK_IMPORTED_MODULE_6__;

const otongsoup = new Image();
otongsoup.src = _images_otong_soup_jpeg__WEBPACK_IMPORTED_MODULE_7__;

const peppersoup = new Image();
peppersoup.src = _images_pepper_soup_jpg__WEBPACK_IMPORTED_MODULE_8__;

const edikangikong = new Image();
edikangikong.src = _images_edikang_ikong_jpg__WEBPACK_IMPORTED_MODULE_9__;

const ekokii = new Image();
ekokii.src = _images_ekoki_jpeg__WEBPACK_IMPORTED_MODULE_10__;

const ekpangnkukwo = new Image();
ekpangnkukwo.src = _images_ekpang_nkukwo_jpeg__WEBPACK_IMPORTED_MODULE_11__;

const ukangukom = new Image();
ukangukom.src = _images_ukang_ukom_png__WEBPACK_IMPORTED_MODULE_12__;

const ubobokukom = new Image();
ubobokukom.src = _images_ubobok_ukom_jpeg__WEBPACK_IMPORTED_MODULE_13__;

const otoebre = new Image();
otoebre.src = _images_oto_ebre_jpg__WEBPACK_IMPORTED_MODULE_14__;

const otomboro = new Image();
otomboro.src = _images_oto_mboro_jpeg__WEBPACK_IMPORTED_MODULE_15__;

function menuWrapper() {
    const container = document.createElement('div');
    container.classList.add('menuContainer');
    const menuArray = [
        {
            img: afangsoup,
            name: 'Afang Soup',
            desc: 'Afang leaves, water leaves, goat meat, cow hide, stock fish, perewinkles, palm oil...',
        },
        {
            img: afiaefere,
            name: 'Afia Efere',
            desc: 'Goat meat, yam flour, spices, stock fish',
        },
        {
            img: asaakpakpa,
            name: 'Asa Akpakpa',
            desc: 'Maize grains, dry fish, crayfish, pumpkin leaves, coconut milk...',
        },
        {
            img: atamasoup,
            name: 'Atama Soup',
            desc: 'Palm nuts, atama leaves, beef, fresh fish, cow hide, cow intestine...',
        },
        {
            img: efereatike,
            name: 'Efere Atike',
            desc: 'Okra, smoked turkey wings, cow hide, dry fish, pumpkin leaves...',
        },
        {
            img: efereikon,
            name: 'Efere Ikon',
            desc: 'Melon seeds, water leaves, palm oil, Goat meat, cow hide, stock fish...',
        },
        {
            img: fishermansoup,
            name: 'Fisherman Soup',
            desc: 'Fresh fish, shrimps, scallops, prawns, paprika, periwinkles...',
        },
        // {
        //     img: otongsoup,
        //     name: 'Otong Soup',
        //     desc: 'Goat meat, yam flour, spices, stock fish',
        // },
        {
            img: peppersoup,
            name: 'Pepper Soup',
            desc: 'Chilli pepper, bell pepper, Chevon/Chiken, calabash nutmeg...',
        },
        {
            img: edikangikong,
            name: 'Edikang Ikong',
            desc: 'Beef, pumpkin leaves, water leaves, dried fish, bush meat, crayfish, cow tripe... ',
        },
        {
            img: ekokii,
            name: 'Ekoki',
            desc: 'Corn, palm oil, dried fish, prawns, scent leaves...',
        },
        {
            img: ekpangnkukwo,
            name: 'Ekpang Nkukwo',
            desc: 'Water yam, cocoyam leaves, Beef, dried fish, perewikles, cow hide, greens...',
        },
        {
            img: ukangukom,
            name: 'Ukang Ukon',
            desc: 'Unripe plantain, chevon, dried fish, crayfish, scent leaves...',
        },
        // {
        //     img: ubobokukom,
        //     name: 'Afia Efere',
        //     desc: 'Goat meat, yam flour, spices, stock fish',
        // },
        {
            img: otoebre,
            name: 'Oto Ebre',
            desc: 'Water yam, dried prawns, beef, stock fish, palm oil, crayfish...',
        },
        {
            img: otomboro,
            name: 'Afia Efere',
            desc: 'Unripe bananas, smoked fish, palm oil, greens, dried fish, stock fish...',
        },
    ];

    for (let food of menuArray) {
        const wrapper = document.createElement('div');
        food.img.classList.add('img');
        wrapper.appendChild(food.img);

        let header = document.createElement('h3');
        let paragraph = document.createElement('p');
        header.innerText = food.name;
        header.classList.add('menuLiner')
        paragraph.innerText = food.desc;

        wrapper.appendChild(header);
        wrapper.appendChild(paragraph);
        wrapper.classList.add('wrapper');

        container.appendChild(wrapper);
    }

    return container;
}

function menu() {
    const element = document.createElement('div');
    element.classList.add('menu-page', 'container');

    // const container = document.createElement('div');
    // container.appendChild(menuWrapper());

    element.appendChild(menuWrapper());

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/Montserrat-VariableFont_wght.ttf":
/*!**********************************************!*\
  !*** ./src/Montserrat-VariableFont_wght.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3068cdb43142f5625baf.ttf";

/***/ }),

/***/ "./src/PermanentMarker-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/PermanentMarker-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "109a10dca0508e41aa12.ttf";

/***/ }),

/***/ "./src/images/afang-soup.jpeg":
/*!************************************!*\
  !*** ./src/images/afang-soup.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de84d2b024c26a6b0613.jpeg";

/***/ }),

/***/ "./src/images/afia-efere.jpeg":
/*!************************************!*\
  !*** ./src/images/afia-efere.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70dd9f7e89b2f6dbbdbd.jpeg";

/***/ }),

/***/ "./src/images/asa-akpakpa.jpeg":
/*!*************************************!*\
  !*** ./src/images/asa-akpakpa.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2424430230aaa4c98095.jpeg";

/***/ }),

/***/ "./src/images/atama-soup.jpeg":
/*!************************************!*\
  !*** ./src/images/atama-soup.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f15d911521100a739d03.jpeg";

/***/ }),

/***/ "./src/images/background9.jpg":
/*!************************************!*\
  !*** ./src/images/background9.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fb00832fe6746620190.jpg";

/***/ }),

/***/ "./src/images/chefImage.jpg":
/*!**********************************!*\
  !*** ./src/images/chefImage.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a18bc65189ae904ed0c.jpg";

/***/ }),

/***/ "./src/images/edikang-ikong.jpg":
/*!**************************************!*\
  !*** ./src/images/edikang-ikong.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4317d4e24f333f4e2d0b.jpg";

/***/ }),

/***/ "./src/images/efere-atike2.jpeg":
/*!**************************************!*\
  !*** ./src/images/efere-atike2.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fed508f0c75d181716f3.jpeg";

/***/ }),

/***/ "./src/images/efere-ikon.jpg":
/*!***********************************!*\
  !*** ./src/images/efere-ikon.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dfc299e11aedf4db3b2.jpg";

/***/ }),

/***/ "./src/images/ekoki.jpeg":
/*!*******************************!*\
  !*** ./src/images/ekoki.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61d0b96dd7556eb4d7d7.jpeg";

/***/ }),

/***/ "./src/images/ekpang-nkukwo.jpeg":
/*!***************************************!*\
  !*** ./src/images/ekpang-nkukwo.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "309a563f1e699b479dbf.jpeg";

/***/ }),

/***/ "./src/images/fisherman-soup.jpeg":
/*!****************************************!*\
  !*** ./src/images/fisherman-soup.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "613f247cd4731ac9dcfc.jpeg";

/***/ }),

/***/ "./src/images/oto-ebre.jpg":
/*!*********************************!*\
  !*** ./src/images/oto-ebre.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3705327d3b512e84176.jpg";

/***/ }),

/***/ "./src/images/oto-mboro.jpeg":
/*!***********************************!*\
  !*** ./src/images/oto-mboro.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f58ebbb36aa6e86cacbb.jpeg";

/***/ }),

/***/ "./src/images/otong-soup.jpeg":
/*!************************************!*\
  !*** ./src/images/otong-soup.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b6f244b79cb9175d46a.jpeg";

/***/ }),

/***/ "./src/images/pepper-soup.jpg":
/*!************************************!*\
  !*** ./src/images/pepper-soup.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3461717b6c5984b601a.jpg";

/***/ }),

/***/ "./src/images/restaurantLocation.png":
/*!*******************************************!*\
  !*** ./src/images/restaurantLocation.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "556fb4c96d5b8b038668.png";

/***/ }),

/***/ "./src/images/ubobok-ukom.jpeg":
/*!*************************************!*\
  !*** ./src/images/ubobok-ukom.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28cb78c642c74387e301.jpeg";

/***/ }),

/***/ "./src/images/ukang-ukom.png":
/*!***********************************!*\
  !*** ./src/images/ukang-ukom.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cf5bdb322eb9a04b384.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");







// Adds the body class to the document's body
document.body.classList.add('body', 'background');

// Creates a rootContent div element that will contain everything in the html file
const rootContent = document.createElement('div');

// Adds css classes to the rootContent div
rootContent.classList.add('whiteColor');

// Appends the header component to the rootContent div
rootContent.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());

// Appends the home, menu and contact pages modules to the rootContent DOM element
rootContent.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
rootContent.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
rootContent.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
rootContent.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());

// Appends the rootContent div to the document's body
document.body.appendChild(rootContent);

// Selects the tab buttons DOM elements on the header
const homeButton = document.getElementsByClassName('home-button')[0];
const contactButton = document.getElementsByClassName('contact-button')[0];
const menuButton = document.getElementsByClassName('menu-button')[0];

// Selects the various pages
const homePage = document.getElementsByClassName('home-page')[0];
const menuPage = document.getElementsByClassName('menu-page')[0];
const contactPage = document.getElementsByClassName('contact-page')[0];

menuPage.classList.add('inactive');
contactPage.classList.add('inactive');
homeButton.classList.add('bottomLine');

homeButton.addEventListener('click', () => {
    homePage.classList.remove('inactive');
    menuPage.classList.add('inactive');
    contactPage.classList.add('inactive');

    homeButton.classList.add('bottomLine');
    menuButton.classList.remove('bottomLine');
    contactButton.classList.remove('bottomLine');
});

menuButton.addEventListener('click', () => {
    menuPage.classList.remove('inactive');
    homePage.classList.add('inactive');
    contactPage.classList.add('inactive');

    homeButton.classList.remove('bottomLine');
    menuButton.classList.add('bottomLine');
    contactButton.classList.remove('bottomLine');
});

contactButton.addEventListener('click', () => {
    contactPage.classList.remove('inactive');
    menuPage.classList.add('inactive');
    homePage.classList.add('inactive');

    homeButton.classList.remove('bottomLine');
    menuButton.classList.remove('bottomLine');
    contactButton.classList.add('bottomLine');
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeExwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ29CO0FBQ0o7QUFDQTtBQUNNO0FBQ0Y7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDhEQUFNOztBQUU5QjtBQUNBLHdCQUF3Qiw0REFBSTtBQUM1Qix3QkFBd0IsK0RBQU87QUFDL0Isd0JBQXdCLDREQUFJO0FBQzVCLHdCQUF3Qiw4REFBTTs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUGVybWFuZW50TWFya2VyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZDkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG4gICAgbWFyZ2luOiAwcHggICFpbXBvcnRhbnQ7XFxuXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudE1hcmtlcic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogUk9PVCBDT01QT05FTlQgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1MDBweCAgcmdiYSg1NiwgMzksIDU1LCAwLjYpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBIRUFERVIgQ09NUE9ORU5UICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxLCAxLCAwLjkpO1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnRNYXJrZXInO1xcbn1cXG5cXG4uaGVhZGVyLXRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5oZWFkZXItdGFiOmhvdmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItdGFiIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIEhPTUUgUEFHRSAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIEhPTUUgUEFHRSBERVNDUklQVElPTiAqL1xcblxcbi5jaGVmSW1hZ2Uge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG4vKiAuZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEsIDEsIDAuNyk7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn0gKi9cXG5cXG4vKiBCVUxMRVRJTiBDT05URU5UUyAqL1xcblxcbi8qIC5idWxsZXRpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMSwgMSwgMC45KTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufSAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIE1FTlUgQ09NUE9ORU5UICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmltZyB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODUsIDgzLCA4Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG4ud3JhcHBlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxNDMsIDE0MywgMC42KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudUxpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig0MSwgNDEsIDQxKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig0MSwgNDEsIDQxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi53cmFwcGVyIHAge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBDT05UQUNUIENPTVBPTkVOVCAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIC5jb250YWN0LXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59ICovXFxuXFxuLm1hcEltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBGT09URVIgQ09NUE9ORU5UICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg4LCAxLCAxLCAwLjkpO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBDTEFTUyBCQU5LICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvdHRvbUxpbmUge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aGl0ZUNvbG9yIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGFyZ2VTaXplIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgY3Vyc2l2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICB3b3JkLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLmxpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTcsIDExNiwgMTE2KTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxMTcsIDExNiwgMTE2KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNENBQXlDO0FBQzdDOzs7O0FBSUEsc0ZBQXNGO0FBQ3RGLG1CQUFtQjtBQUNuQixzRkFBc0Y7O0FBRXRGO0lBQ0kseURBQWlEO0lBQ2pELGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMERBQTBEO0lBQzFELDRCQUE0QjtBQUNoQzs7QUFFQSxzRkFBc0Y7QUFDdEYscUJBQXFCO0FBQ3JCLHNGQUFzRjs7QUFFdEY7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyREFBMkQ7SUFDM0QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQSxzRkFBc0Y7QUFDdEYsY0FBYztBQUNkLHNGQUFzRjs7QUFFdEYsMEJBQTBCOztBQUUxQjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7OztHQUtHOztBQUVILHNCQUFzQjs7QUFFdEI7Ozs7O0dBS0c7O0FBRUgsc0ZBQXNGO0FBQ3RGLG1CQUFtQjtBQUNuQixzRkFBc0Y7O0FBRXRGO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUEsc0ZBQXNGO0FBQ3RGLHNCQUFzQjtBQUN0QixzRkFBc0Y7O0FBRXRGOzs7OztHQUtHOztBQUVIO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLHNGQUFzRjtBQUN0RixxQkFBcUI7QUFDckIsc0ZBQXNGOztBQUV0RjtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJEQUEyRDs7QUFFL0Q7OztBQUdBLHNGQUFzRjtBQUN0RixlQUFlO0FBQ2Ysc0ZBQXNGOztBQUV0RjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJOzZCQUN5QjtJQUN6QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyx3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW46IDBweCAgIWltcG9ydGFudDtcXG5cXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHNyYzogdXJsKCcuL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudE1hcmtlcic7XFxuICAgIHNyYzogdXJsKCcuL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBST09UIENPTVBPTkVOVCAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kOS5qcGcnKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwMHB4ICByZ2JhKDU2LCAzOSwgNTUsIDAuNik7ICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIEhFQURFUiBDT01QT05FTlQgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEsIDEsIDAuOSk7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudE1hcmtlcic7XFxufVxcblxcbi5oZWFkZXItdGFicyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmhlYWRlci10YWI6aG92ZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmhlYWRlci10YWIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogSE9NRSBQQUdFICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogSE9NRSBQQUdFIERFU0NSSVBUSU9OICovXFxuXFxuLmNoZWZJbWFnZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi8qIC5kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMSwgMSwgMC43KTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufSAqL1xcblxcbi8qIEJVTExFVElOIENPTlRFTlRTICovXFxuXFxuLyogLmJ1bGxldGluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxLCAxLCAwLjkpO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG59ICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogTUVOVSBDT01QT05FTlQgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uaW1nIHtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NSwgODMsIDgzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi53cmFwcGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE0MywgMTQzLCAwLjYpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51TGluZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDQxLCA0MSwgNDEpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDQxLCA0MSwgNDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLndyYXBwZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIENPTlRBQ1QgQ09NUE9ORU5UICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogLmNvbnRhY3QtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn0gKi9cXG5cXG4ubWFwSW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIEZPT1RFUiBDT01QT05FTlQgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsIDEsIDEsIDAuOSk7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIENMQVNTIEJBTksgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm90dG9tTGluZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndoaXRlQ29sb3Ige1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYXJnZVNpemUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIHdvcmQtc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubGluZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExNywgMTE2LCAxMTYpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDExNywgMTE2LCAxMTYpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCBtYXBTb3VyY2UgZnJvbSAnLi4vaW1hZ2VzL3Jlc3RhdXJhbnRMb2NhdGlvbi5wbmcnO1xuXG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1wYWdlJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJUZXh0ID0gJysyMzQgKDgxMykgODgxOCA0NTcnO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy5pbm5lclRleHQgPSAnMTMgSWJpb25vIFN0cmVldCwgVXlvLCBBa3dhIElib20gU3RhdGUsIE5pZ2VyaWEnO1xuXG4gICAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XG4gICAgbWFwLnNyYyA9IG1hcFNvdXJjZTtcbiAgICBtYXAuY2xhc3NMaXN0LmFkZCgnbWFwSW1hZ2UnKVxuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gZm9vdGVyKCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJywgJ2NlbnRlcicpXG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9ICdDb3B5cmlnaHQgwqkgMjAyMiBBbmRyZSBVZG90YWknXG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbmFtZS5pbm5lckhUTUwgPSAnQWt3YSBDdWlzaW5lcyc7XG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hbWUnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10YWInLCAnaG9tZS1idXR0b24nKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10YWInLCAnbWVudS1idXR0b24nKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10YWInLCAnY29udGFjdC1idXR0b24nKTtcbiAgICB0YWJzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10YWJzJyk7XG5cbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNoZWZJbWFnZVNvdXJjZSBmcm9tICcuLi9pbWFnZXMvY2hlZkltYWdlLmpwZyc7XG5cblxuXG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG5cbiAgICBjb25zdCBjaGVmSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVmSW1hZ2Uuc3JjID0gY2hlZkltYWdlU291cmNlO1xuICAgIGNoZWZJbWFnZS5jbGFzc0xpc3QuYWRkKCdjaGVmSW1hZ2UnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoLmlubmVyVGV4dCA9XG4gICAgICAgICdBa3dhIEN1aXNpbmUgaW50cm9kdWNlcyB5b3UgdG8gdGhlIHNhdm9yeSBzb3VwcyBhbmQgbWVhbHMgbWFkZSBmcm9tIHRoZSByaWNoIGx1c2ggbGVhdmVzIGFuZCBjcm9wcyBpbiBBa3dhIElib20gU3RhdGUsIHNvdXRoL3NvdXRoIE5pZ2VyaWEgKFRoZSByZWdpb24gd2l0aCB0aGUgYmVzdCBzb3VwcyBpbiB0aGUgV2VzdGVybiBBZnJpY2Egc3ViIHJlZ2lvbikuJztcblxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoKTtcblxuICAgIGNvbnN0IGJ1bGxldGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVsbGV0aW4uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgYnVsbGV0aW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJ1bGxldGluSGVhZGVyLmlubmVyVGV4dCA9IGBSRVNUQVVSQU5UJ1MgU1BFQ0lBTGA7XG4gICAgYnVsbGV0aW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJylcbiAgICBjb25zdCBidWxsZXRpblN1YkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYnVsbGV0aW5TdWJIZWFkZXIuaW5uZXJUZXh0ID0gJ05ESUEgTllVS08gLSBPVVIgU1RBTkRBUkQgMyBDT1VSU0UgTUVBTFMnO1xuICAgIGJ1bGxldGluU3ViSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpXG4gICAgY29uc3Qgc3RhcnRlckNvdXJzZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBzdGFydGVyQ291cnNlVGl0bGUuaW5uZXJUZXh0ID0gJ1N0YXJ0ZXJzJztcbiAgICBzdGFydGVyQ291cnNlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbGluZXInKTtcbiAgICBjb25zdCBmaXJzdENvdXJzZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmaXJzdENvdXJzZVRpdGxlLmlubmVyVGV4dCA9ICdGaXJzdCBDb3Vyc2VzJztcbiAgICBmaXJzdENvdXJzZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xpbmVyJyk7XG4gICAgY29uc3Qgc2Vjb25kQ291cnNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHNlY29uZENvdXJzZVRpdGxlLmlubmVyVGV4dCA9ICdTZWNvbmQgQ291cnNlcyc7XG4gICAgY29uc3Qgc3RhcnRlclAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlY29uZENvdXJzZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xpbmVyJyk7XG4gICAgc3RhcnRlclAxLmlubmVyVGV4dCA9ICdDaGlja2VuIFBlcHBlciBTb3VwJztcbiAgICBjb25zdCBzdGFydGVyUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RhcnRlclAyLmlubmVyVGV4dCA9ICdDaGV2b24gUGVwcGVyIFNvdXAnO1xuICAgIGNvbnN0IGZpcnN0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmlyc3RQMS5pbm5lclRleHQgPSAnVWJvYm9rIFVrb20gKFBsYW50YWluIFBvcnJpZGdlKSB3aXRoIHN0b2NrIGZpc2gnO1xuICAgIGNvbnN0IGZpcnN0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmlyc3RQMi5pbm5lclRleHQgPSAnT3RvIE1ib3JvIChVbnJpcGUgUGxhbnRhaW4gUG9ycmlkZ2UpIHdpdGggZHJpZWQgZmlzaCc7XG4gICAgY29uc3Qgc2Vjb25kUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2Vjb25kUDEuaW5uZXJUZXh0ID0gJ0VkaWthbmcgSWtvbmcgU291cCB3aXRoIEdvYXQgTWVhdCc7XG4gICAgY29uc3Qgc2Vjb25kUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2Vjb25kUDIuaW5uZXJUZXh0ID0gJ0FmYW5nIFNvdXAgd2l0aCBHb2F0IE1lYXQnO1xuXG4gICAgYnVsbGV0aW4uYXBwZW5kQ2hpbGQoYnVsbGV0aW5IZWFkZXIpO1xuICAgIGJ1bGxldGluLmFwcGVuZENoaWxkKGNoZWZJbWFnZSk7XG4gICAgYnVsbGV0aW4uYXBwZW5kQ2hpbGQoYnVsbGV0aW5TdWJIZWFkZXIpO1xuICAgIGJ1bGxldGluLmFwcGVuZENoaWxkKHN0YXJ0ZXJDb3Vyc2VUaXRsZSk7XG4gICAgYnVsbGV0aW4uYXBwZW5kQ2hpbGQoc3RhcnRlclAxKTtcbiAgICBidWxsZXRpbi5hcHBlbmRDaGlsZChzdGFydGVyUDIpO1xuICAgIGJ1bGxldGluLmFwcGVuZENoaWxkKGZpcnN0Q291cnNlVGl0bGUpO1xuICAgIGJ1bGxldGluLmFwcGVuZENoaWxkKGZpcnN0UDEpO1xuICAgIGJ1bGxldGluLmFwcGVuZENoaWxkKGZpcnN0UDIpO1xuICAgIGJ1bGxldGluLmFwcGVuZENoaWxkKHNlY29uZENvdXJzZVRpdGxlKTtcbiAgICBidWxsZXRpbi5hcHBlbmRDaGlsZChzZWNvbmRQMSk7XG4gICAgYnVsbGV0aW4uYXBwZW5kQ2hpbGQoc2Vjb25kUDIpO1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidWxsZXRpbik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiIsImltcG9ydCBhZmFuZ1NvdXAgZnJvbSAnLi4vaW1hZ2VzL2FmYW5nLXNvdXAuanBlZyc7XG5pbXBvcnQgYWZpYUVmZXJlIGZyb20gJy4uL2ltYWdlcy9hZmlhLWVmZXJlLmpwZWcnO1xuaW1wb3J0IGFzYUFrcGFrcGEgZnJvbSAnLi4vaW1hZ2VzL2FzYS1ha3Bha3BhLmpwZWcnO1xuaW1wb3J0IGF0YW1hU291cCBmcm9tICcuLi9pbWFnZXMvYXRhbWEtc291cC5qcGVnJztcbmltcG9ydCBlZmVyZUF0aWtlIGZyb20gJy4uL2ltYWdlcy9lZmVyZS1hdGlrZTIuanBlZyc7XG5pbXBvcnQgZWZlcmVJa29uIGZyb20gJy4uL2ltYWdlcy9lZmVyZS1pa29uLmpwZyc7XG5pbXBvcnQgZmlzaGVybWFuU291cCBmcm9tICcuLi9pbWFnZXMvZmlzaGVybWFuLXNvdXAuanBlZyc7XG5pbXBvcnQgb3RvbmdTb3VwIGZyb20gJy4uL2ltYWdlcy9vdG9uZy1zb3VwLmpwZWcnO1xuaW1wb3J0IHBlcHBlclNvdXAgZnJvbSAnLi4vaW1hZ2VzL3BlcHBlci1zb3VwLmpwZyc7XG5pbXBvcnQgZWRpa2FuZ0lrb25nIGZyb20gJy4uL2ltYWdlcy9lZGlrYW5nLWlrb25nLmpwZyc7XG5pbXBvcnQgZWtva2kgZnJvbSAnLi4vaW1hZ2VzL2Vrb2tpLmpwZWcnO1xuaW1wb3J0IGVrcGFuZ05rdWt3byBmcm9tICcuLi9pbWFnZXMvZWtwYW5nLW5rdWt3by5qcGVnJztcbmltcG9ydCB1a2FuZ1Vrb20gZnJvbSAnLi4vaW1hZ2VzL3VrYW5nLXVrb20ucG5nJztcbmltcG9ydCB1Ym9ib2tVa29tIGZyb20gJy4uL2ltYWdlcy91Ym9ib2stdWtvbS5qcGVnJztcbmltcG9ydCBvdG9FYnJlIGZyb20gJy4uL2ltYWdlcy9vdG8tZWJyZS5qcGcnO1xuaW1wb3J0IG90b01ib3JvIGZyb20gJy4uL2ltYWdlcy9vdG8tbWJvcm8uanBlZyc7XG5cbmNvbnN0IGFmYW5nc291cCA9IG5ldyBJbWFnZSgpO1xuYWZhbmdzb3VwLnNyYyA9IGFmYW5nU291cDtcblxuY29uc3QgYWZpYWVmZXJlID0gbmV3IEltYWdlKCk7XG5hZmlhZWZlcmUuc3JjID0gYWZpYUVmZXJlO1xuXG5jb25zdCBhc2Fha3Bha3BhID0gbmV3IEltYWdlKCk7XG5hc2Fha3Bha3BhLnNyYyA9IGFzYUFrcGFrcGE7XG5cbmNvbnN0IGF0YW1hc291cCA9IG5ldyBJbWFnZSgpO1xuYXRhbWFzb3VwLnNyYyA9IGF0YW1hU291cDtcblxuY29uc3QgZWZlcmVhdGlrZSA9IG5ldyBJbWFnZSgpO1xuZWZlcmVhdGlrZS5zcmMgPSBlZmVyZUF0aWtlO1xuXG5jb25zdCBlZmVyZWlrb24gPSBuZXcgSW1hZ2UoKTtcbmVmZXJlaWtvbi5zcmMgPSBlZmVyZUlrb247XG5cbmNvbnN0IGZpc2hlcm1hbnNvdXAgPSBuZXcgSW1hZ2UoKTtcbmZpc2hlcm1hbnNvdXAuc3JjID0gZmlzaGVybWFuU291cDtcblxuY29uc3Qgb3Rvbmdzb3VwID0gbmV3IEltYWdlKCk7XG5vdG9uZ3NvdXAuc3JjID0gb3RvbmdTb3VwO1xuXG5jb25zdCBwZXBwZXJzb3VwID0gbmV3IEltYWdlKCk7XG5wZXBwZXJzb3VwLnNyYyA9IHBlcHBlclNvdXA7XG5cbmNvbnN0IGVkaWthbmdpa29uZyA9IG5ldyBJbWFnZSgpO1xuZWRpa2FuZ2lrb25nLnNyYyA9IGVkaWthbmdJa29uZztcblxuY29uc3QgZWtva2lpID0gbmV3IEltYWdlKCk7XG5la29raWkuc3JjID0gZWtva2k7XG5cbmNvbnN0IGVrcGFuZ25rdWt3byA9IG5ldyBJbWFnZSgpO1xuZWtwYW5nbmt1a3dvLnNyYyA9IGVrcGFuZ05rdWt3bztcblxuY29uc3QgdWthbmd1a29tID0gbmV3IEltYWdlKCk7XG51a2FuZ3Vrb20uc3JjID0gdWthbmdVa29tO1xuXG5jb25zdCB1Ym9ib2t1a29tID0gbmV3IEltYWdlKCk7XG51Ym9ib2t1a29tLnNyYyA9IHVib2Jva1Vrb207XG5cbmNvbnN0IG90b2VicmUgPSBuZXcgSW1hZ2UoKTtcbm90b2VicmUuc3JjID0gb3RvRWJyZTtcblxuY29uc3Qgb3RvbWJvcm8gPSBuZXcgSW1hZ2UoKTtcbm90b21ib3JvLnNyYyA9IG90b01ib3JvO1xuXG5mdW5jdGlvbiBtZW51V3JhcHBlcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1lbnVBcnJheSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBhZmFuZ3NvdXAsXG4gICAgICAgICAgICBuYW1lOiAnQWZhbmcgU291cCcsXG4gICAgICAgICAgICBkZXNjOiAnQWZhbmcgbGVhdmVzLCB3YXRlciBsZWF2ZXMsIGdvYXQgbWVhdCwgY293IGhpZGUsIHN0b2NrIGZpc2gsIHBlcmV3aW5rbGVzLCBwYWxtIG9pbC4uLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogYWZpYWVmZXJlLFxuICAgICAgICAgICAgbmFtZTogJ0FmaWEgRWZlcmUnLFxuICAgICAgICAgICAgZGVzYzogJ0dvYXQgbWVhdCwgeWFtIGZsb3VyLCBzcGljZXMsIHN0b2NrIGZpc2gnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IGFzYWFrcGFrcGEsXG4gICAgICAgICAgICBuYW1lOiAnQXNhIEFrcGFrcGEnLFxuICAgICAgICAgICAgZGVzYzogJ01haXplIGdyYWlucywgZHJ5IGZpc2gsIGNyYXlmaXNoLCBwdW1wa2luIGxlYXZlcywgY29jb251dCBtaWxrLi4uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBhdGFtYXNvdXAsXG4gICAgICAgICAgICBuYW1lOiAnQXRhbWEgU291cCcsXG4gICAgICAgICAgICBkZXNjOiAnUGFsbSBudXRzLCBhdGFtYSBsZWF2ZXMsIGJlZWYsIGZyZXNoIGZpc2gsIGNvdyBoaWRlLCBjb3cgaW50ZXN0aW5lLi4uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBlZmVyZWF0aWtlLFxuICAgICAgICAgICAgbmFtZTogJ0VmZXJlIEF0aWtlJyxcbiAgICAgICAgICAgIGRlc2M6ICdPa3JhLCBzbW9rZWQgdHVya2V5IHdpbmdzLCBjb3cgaGlkZSwgZHJ5IGZpc2gsIHB1bXBraW4gbGVhdmVzLi4uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBlZmVyZWlrb24sXG4gICAgICAgICAgICBuYW1lOiAnRWZlcmUgSWtvbicsXG4gICAgICAgICAgICBkZXNjOiAnTWVsb24gc2VlZHMsIHdhdGVyIGxlYXZlcywgcGFsbSBvaWwsIEdvYXQgbWVhdCwgY293IGhpZGUsIHN0b2NrIGZpc2guLi4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IGZpc2hlcm1hbnNvdXAsXG4gICAgICAgICAgICBuYW1lOiAnRmlzaGVybWFuIFNvdXAnLFxuICAgICAgICAgICAgZGVzYzogJ0ZyZXNoIGZpc2gsIHNocmltcHMsIHNjYWxsb3BzLCBwcmF3bnMsIHBhcHJpa2EsIHBlcml3aW5rbGVzLi4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaW1nOiBvdG9uZ3NvdXAsXG4gICAgICAgIC8vICAgICBuYW1lOiAnT3RvbmcgU291cCcsXG4gICAgICAgIC8vICAgICBkZXNjOiAnR29hdCBtZWF0LCB5YW0gZmxvdXIsIHNwaWNlcywgc3RvY2sgZmlzaCcsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogcGVwcGVyc291cCxcbiAgICAgICAgICAgIG5hbWU6ICdQZXBwZXIgU291cCcsXG4gICAgICAgICAgICBkZXNjOiAnQ2hpbGxpIHBlcHBlciwgYmVsbCBwZXBwZXIsIENoZXZvbi9DaGlrZW4sIGNhbGFiYXNoIG51dG1lZy4uLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogZWRpa2FuZ2lrb25nLFxuICAgICAgICAgICAgbmFtZTogJ0VkaWthbmcgSWtvbmcnLFxuICAgICAgICAgICAgZGVzYzogJ0JlZWYsIHB1bXBraW4gbGVhdmVzLCB3YXRlciBsZWF2ZXMsIGRyaWVkIGZpc2gsIGJ1c2ggbWVhdCwgY3JheWZpc2gsIGNvdyB0cmlwZS4uLiAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IGVrb2tpaSxcbiAgICAgICAgICAgIG5hbWU6ICdFa29raScsXG4gICAgICAgICAgICBkZXNjOiAnQ29ybiwgcGFsbSBvaWwsIGRyaWVkIGZpc2gsIHByYXducywgc2NlbnQgbGVhdmVzLi4uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBla3Bhbmdua3Vrd28sXG4gICAgICAgICAgICBuYW1lOiAnRWtwYW5nIE5rdWt3bycsXG4gICAgICAgICAgICBkZXNjOiAnV2F0ZXIgeWFtLCBjb2NveWFtIGxlYXZlcywgQmVlZiwgZHJpZWQgZmlzaCwgcGVyZXdpa2xlcywgY293IGhpZGUsIGdyZWVucy4uLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogdWthbmd1a29tLFxuICAgICAgICAgICAgbmFtZTogJ1VrYW5nIFVrb24nLFxuICAgICAgICAgICAgZGVzYzogJ1VucmlwZSBwbGFudGFpbiwgY2hldm9uLCBkcmllZCBmaXNoLCBjcmF5ZmlzaCwgc2NlbnQgbGVhdmVzLi4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaW1nOiB1Ym9ib2t1a29tLFxuICAgICAgICAvLyAgICAgbmFtZTogJ0FmaWEgRWZlcmUnLFxuICAgICAgICAvLyAgICAgZGVzYzogJ0dvYXQgbWVhdCwgeWFtIGZsb3VyLCBzcGljZXMsIHN0b2NrIGZpc2gnLFxuICAgICAgICAvLyB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IG90b2VicmUsXG4gICAgICAgICAgICBuYW1lOiAnT3RvIEVicmUnLFxuICAgICAgICAgICAgZGVzYzogJ1dhdGVyIHlhbSwgZHJpZWQgcHJhd25zLCBiZWVmLCBzdG9jayBmaXNoLCBwYWxtIG9pbCwgY3JheWZpc2guLi4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IG90b21ib3JvLFxuICAgICAgICAgICAgbmFtZTogJ0FmaWEgRWZlcmUnLFxuICAgICAgICAgICAgZGVzYzogJ1VucmlwZSBiYW5hbmFzLCBzbW9rZWQgZmlzaCwgcGFsbSBvaWwsIGdyZWVucywgZHJpZWQgZmlzaCwgc3RvY2sgZmlzaC4uLicsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGZvb2Qgb2YgbWVudUFycmF5KSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vZC5pbWcuY2xhc3NMaXN0LmFkZCgnaW1nJyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9vZC5pbWcpO1xuXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gZm9vZC5uYW1lO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudUxpbmVyJylcbiAgICAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IGZvb2QuZGVzYztcblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVXcmFwcGVyKCkpO1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChtZW51V3JhcHBlcigpKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdCc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG4vLyBBZGRzIHRoZSBib2R5IGNsYXNzIHRvIHRoZSBkb2N1bWVudCdzIGJvZHlcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScsICdiYWNrZ3JvdW5kJyk7XG5cbi8vIENyZWF0ZXMgYSByb290Q29udGVudCBkaXYgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiBldmVyeXRoaW5nIGluIHRoZSBodG1sIGZpbGVcbmNvbnN0IHJvb3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vIEFkZHMgY3NzIGNsYXNzZXMgdG8gdGhlIHJvb3RDb250ZW50IGRpdlxucm9vdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnd2hpdGVDb2xvcicpO1xuXG4vLyBBcHBlbmRzIHRoZSBoZWFkZXIgY29tcG9uZW50IHRvIHRoZSByb290Q29udGVudCBkaXZcbnJvb3RDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcblxuLy8gQXBwZW5kcyB0aGUgaG9tZSwgbWVudSBhbmQgY29udGFjdCBwYWdlcyBtb2R1bGVzIHRvIHRoZSByb290Q29udGVudCBET00gZWxlbWVudFxucm9vdENvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbnJvb3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG5yb290Q29udGVudC5hcHBlbmRDaGlsZChob21lKCkpO1xucm9vdENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4vLyBBcHBlbmRzIHRoZSByb290Q29udGVudCBkaXYgdG8gdGhlIGRvY3VtZW50J3MgYm9keVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290Q29udGVudCk7XG5cbi8vIFNlbGVjdHMgdGhlIHRhYiBidXR0b25zIERPTSBlbGVtZW50cyBvbiB0aGUgaGVhZGVyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG9tZS1idXR0b24nKVswXTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWN0LWJ1dHRvbicpWzBdO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtYnV0dG9uJylbMF07XG5cbi8vIFNlbGVjdHMgdGhlIHZhcmlvdXMgcGFnZXNcbmNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG9tZS1wYWdlJylbMF07XG5jb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtcGFnZScpWzBdO1xuY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWN0LXBhZ2UnKVswXTtcblxubWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbmNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG5ob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUxpbmUnKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcblxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYm90dG9tTGluZScpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYm90dG9tTGluZScpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYm90dG9tTGluZScpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG5cbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2JvdHRvbUxpbmUnKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUxpbmUnKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2JvdHRvbUxpbmUnKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdib3R0b21MaW5lJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdib3R0b21MaW5lJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib3R0b21MaW5lJyk7XG59KTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=