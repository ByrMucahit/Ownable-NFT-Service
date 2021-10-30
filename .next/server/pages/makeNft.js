(() => {
var exports = {};
exports.id = "pages/makeNft";
exports.ids = ["pages/makeNft"];
exports.modules = {

/***/ "./components/button/base/index.js":
/*!*****************************************!*\
  !*** ./components/button/base/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ "./components/button/base/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["border", "children", "className"],
      _excluded2 = ["children", "className"],
      _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\base\\index.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function frameButton(_ref) {
  let {
    border = false,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

function linkButton(_ref2) {
  let {
    children,
    className
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().links),
      children: [" ", children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

function button(_ref3) {
  let {
    border = false,
    children,
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  const Comp = border ? frameButton : linkButton;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Comp, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (button);
/*
    Document:
    --------
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    border: Some button has border, but some it hasn't. When button has border, border attribute wil have been  activated. 
    children: Content, which include within element.
    ...props: What if Any properties is passed into function, Function can catch.
*/

/* 
// TO DO List
[]  frame button / Transparent - color

*/

/***/ }),

/***/ "./components/frame/frameButton.js":
/*!*****************************************!*\
  !*** ./components/frame/frameButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frameButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frameButton.module.css */ "./components/frame/frameButton.module.css");
/* harmony import */ var _frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\frameButton.js";






function FrameButton({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().frameBtn),
    type: "button",
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrameButton);
/* 
    Document:
    --------
    <TextTitle/>: It's vary of text, It just has some specific attribute such as 16 px font size, and bold font wight.
*/

/***/ }),

/***/ "./components/icons/CheckSquare.js":
/*!*****************************************!*\
  !*** ./components/icons/CheckSquare.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\CheckSquare.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgCheckSquare(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M16.071 0H1.93A1.929 1.929 0 000 1.929V16.07C0 17.137.863 18 1.929 18H16.07A1.929 1.929 0 0018 16.071V1.93A1.929 1.929 0 0016.071 0zm0 16.071H1.93V1.93H16.07V16.07zm-1.44-9.712l-6.935 6.879a.482.482 0 01-.682-.003L3.367 9.558a.482.482 0 01.003-.682l.912-.905a.482.482 0 01.682.003l2.403 2.422 5.679-5.634a.482.482 0 01.682.003l.905.912a.482.482 0 01-.002.682z",
      fill: "#FCC729"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCheckSquare);

/***/ }),

/***/ "./components/icons/Discord.js":
/*!*************************************!*\
  !*** ./components/icons/Discord.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Discord.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDiscord(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M25.603 0H3.397C1.525 0 0 1.334 0 2.987v19.604c0 1.653 1.525 2.987 3.397 2.987H22.19l-.878-2.683 2.121 1.726 2.005 1.624L29 29V2.987C29 1.334 27.475 0 25.603 0zm-6.397 18.937s-.596-.623-1.093-1.175c2.17-.536 2.999-1.725 2.999-1.725-.68.392-1.326.667-1.906.855-.828.305-1.624.508-2.403.624a13.24 13.24 0 01-4.292-.014 15.45 15.45 0 01-2.436-.624c-.38-.13-.795-.29-1.21-.493-.049-.029-.099-.044-.148-.073a.228.228 0 01-.067-.043c-.298-.145-.464-.246-.464-.246s.796 1.16 2.9 1.71c-.497.552-1.11 1.204-1.11 1.204-3.662-.102-5.054-2.204-5.054-2.204 0-4.669 2.386-8.454 2.386-8.454 2.386-1.566 4.657-1.522 4.657-1.522l.165.174c-2.983.754-4.358 1.9-4.358 1.9s.365-.175.978-.421c1.773-.681 3.181-.87 3.761-.913.1-.015.183-.03.282-.03a16.011 16.011 0 013.348-.028c1.574.159 3.264.565 4.988 1.392 0 0-1.31-1.088-4.127-1.842l.232-.232s2.27-.043 4.657 1.523c0 0 2.386 3.784 2.386 8.453 0 0-1.408 2.102-5.07 2.204zm-7.705-6.772c-.945 0-1.69.726-1.69 1.61 0 .884.762 1.61 1.69 1.61.944 0 1.69-.726 1.69-1.61.016-.885-.746-1.61-1.69-1.61zm6.048 0c-.944 0-1.69.726-1.69 1.61 0 .884.762 1.61 1.69 1.61.945 0 1.69-.726 1.69-1.61 0-.885-.745-1.61-1.69-1.61z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDiscord);

/***/ }),

/***/ "./components/icons/DropDown.js":
/*!**************************************!*\
  !*** ./components/icons/DropDown.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DropDown.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDropDown(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.58 4.516 9.163c-.408-.418-.436-1.17 0-1.615z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDropDown);

/***/ }),

/***/ "./components/icons/DropDownİcon.js":
/*!******************************************!*\
  !*** ./components/icons/DropDownİcon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DropDown\u0130con.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDropDownİcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M7 10l5 5 5-5H7z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDropDownİcon);

/***/ }),

/***/ "./components/icons/EthLogo.js":
/*!*************************************!*\
  !*** ./components/icons/EthLogo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\EthLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgEthLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 42 71",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.6,
      d: "M20.996 27.293L2 36.09l18.996 11.427 18.99-11.427-18.99-8.796z",
      fill: "#010101"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.45,
      d: "M1.57 35.834l-.253.428.425.256L20.74 47.944l.758.456V2.174l-.93 1.571L1.57 35.835z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.8,
      d: "M21.426 3.745l-.93-1.572V48.4l.758-.456 18.989-11.426.425-.256-.253-.428L21.426 3.745z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.45,
      d: "M20.497 51.462V65.41L3.75 41.389l16.747 10.073z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.8,
      d: "M20.738 50.751l-.242.146V68.59l.91-1.304L40.41 40.039l-.668-.714L20.738 50.75z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgEthLogo);

/***/ }),

/***/ "./components/icons/Facebook.js":
/*!**************************************!*\
  !*** ./components/icons/Facebook.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Facebook.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgFacebook(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M6.042 3.625h16.916a2.417 2.417 0 012.417 2.417v16.916a2.417 2.417 0 01-2.417 2.417H6.042a2.417 2.417 0 01-2.417-2.417V6.042a2.417 2.417 0 012.417-2.417zM21.75 6.042h-3.02a4.23 4.23 0 00-4.23 4.229v3.02h-2.417v3.626H14.5v8.458h3.625v-8.458h3.625v-3.625h-3.625v-2.417a1.208 1.208 0 011.208-1.208h2.417V6.042z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgFacebook);

/***/ }),

/***/ "./components/icons/Fingerprint.js":
/*!*****************************************!*\
  !*** ./components/icons/Fingerprint.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Fingerprint.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgFingerprint(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#fingerprint_svg__clip0)",
      fill: "#000",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M16.373.164c-.619.164-.928.96-.598 1.564.206.356.784.439 3.444.52 2.557.083 3.464.22 4.516.687 1.443.631 2.082.466 2.082-.494 0-.823-.804-1.344-2.928-1.92-1.773-.495-5.217-.687-6.516-.357zM11.568 2.002C8.62 3.703 5.093 7.325 5.238 8.505c.04.33.206.74.391.878.269.22.66-.082 1.856-1.427 1.67-1.866 3.176-3.128 4.929-4.116.618-.356 1.258-.768 1.402-.905.371-.412.31-1.262-.144-1.592-.516-.356-.289-.411-2.104.659zM27.611 3.292c-.742.548-.412 1.454.97 2.661 1.546 1.345 3.278 3.567 4.454 5.68.866 1.564 1.381 1.866 1.876 1.07.227-.357.206-.576-.103-1.344-1.382-3.403-6.186-8.808-7.197-8.067zM15.507 4.91c-3.114 1.126-5.98 3.403-7.877 6.311-2.104 3.183-3.238 6.915-3.753 12.21C2.743 35.395 3.67 47.358 6.64 58.8c1.155 4.472 1.34 4.884 2.02 4.774.33-.055.578-.274.62-.576.04-.275-.31-1.839-.764-3.457-2.474-8.78-3.711-19.152-3.464-28.701.31-10.564 1.3-14.872 4.475-19.07 2.64-3.512 5.794-5.24 9.589-5.24 3.814 0 6.99 1.728 9.609 5.213 1.753 2.36 2.578 4.143 3.402 7.298.64 2.525.722 5.049.413 12.485-.268 6.366.392 11.442 2.248 17.341.783 2.442 1.257 3.073 1.855 2.415.434-.467.392-1.208-.185-2.69-.742-1.975-1.732-6.338-2.103-9.328-.269-2.168-.31-3.568-.165-7.601.247-7.08.185-9.878-.207-11.908-1.381-6.915-5.093-12.183-10.125-14.46-2.288-1.016-6.062-1.208-8.351-.384z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M16.187 9.136c-2.412.796-5.732 3.677-5.588 4.912.041.301.206.685.392.823.268.22.64-.028 1.753-1.125 2.206-2.195 4.887-3.266 7.34-2.909 1.032.165 1.176.11 1.382-.384.29-.713.29-.768-.103-1.262-.392-.549-3.546-.576-5.176-.055zM23.281 10.316c-.082.082-.144.466-.144.796 0 .466.288.85 1.154 1.509 2.29 1.728 4.517 5.652 4.95 8.643.185 1.262.804 1.728 1.36.988.392-.494.392-.604.083-1.948-.392-1.784-1.196-3.897-2.083-5.543-1.526-2.716-4.66-5.35-5.32-4.445zM3.176 11.413c-.887 1.674-1.96 4.994-2.434 7.436-.618 3.238-.639 4.335-.082 4.72.536.384 1.237-.522 1.237-1.62 0-1.426 1.031-5.624 1.98-7.929.742-1.838.866-2.36.7-2.799-.308-.768-.927-.686-1.401.192zM16.105 13.773c-1.69.933-2.536 1.729-3.485 3.128-1.773 2.689-2.371 5.9-2.619 13.939-.33 11.661 1.732 23.899 5.774 34.298.907 2.305 1.155 2.744 1.567 2.744 1.01 0 1.01-.741-.02-3.348-2.454-6.173-4.351-13.939-5.217-21.347-.722-6.036-.598-16.984.247-21.265.557-2.908 2.124-5.186 4.227-6.2 1.34-.66 3.733-.577 5.197.164 2.227 1.125 4.083 4.088 4.392 7.024.062.713 0 3.402-.144 6.01-.207 3.758-.227 5.487-.02 8.285.515 7.656 2.123 14.46 4.886 20.717.928 2.112 1.279 2.524 1.835 2.25.64-.33.516-1.153-.536-3.567-3.711-8.506-5.217-18-4.516-28.262.33-4.637.165-6.393-.824-9.082-.764-2.03-2.393-4.116-4.083-5.186-1.01-.659-1.485-.768-3.341-.85-1.897-.083-2.31-.028-3.32.548zM35.2 15.227c-.186.247-.268.659-.206.906.722 2.47 1.175 5.433 1.278 8.396.124 3.238.268 3.979.805 3.979.598 0 .907-.851.907-2.552-.02-5.104-1.258-11.168-2.248-11.168-.103 0-.35.192-.536.44zM8.99 16.38c-1.051.905-2.04 6.695-2.185 12.786-.062 1.784 0 2.195.31 2.47.247.219.453.219.7 0 .289-.247.413-1.016.619-3.842.33-4.774.619-6.805 1.217-8.78.598-2.003.598-2.195.103-2.58-.475-.329-.475-.329-.763-.054z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M18.992 17.834c-.557.74-.206 1.51.784 1.756 1.195.274 2.227 1.317 2.742 2.744.433 1.18.454 1.536.33 4.198-.124 3.018-.02 3.622.722 3.622.577 0 .783-.823.928-3.76.144-3.017.02-3.923-.928-5.926-.68-1.372-1.918-2.497-3.279-2.908-.784-.22-.949-.192-1.3.274zM15.816 18.904c-.825.713-1.69 2.524-1.938 4.116-.31 1.948-.68 7.326-.598 8.917.062 1.18.124 1.372.536 1.455.845.164 1.072-.385 1.072-2.662 0-1.152.145-3.43.31-5.049.309-3.073.7-4.39 1.526-5.076.536-.411.556-1.591.061-1.948-.288-.192-.536-.137-.969.247z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M18.29 21.895c-1.236.686-1.505 2.113-1.67 9.494-.268 10.399 1.217 19.59 4.66 28.81 1.877 5.049 2.64 6.585 3.28 6.585.99 0 .99-.74-.062-3.046-2.083-4.637-3.98-10.563-4.95-15.502-1.092-5.707-1.257-7.6-1.237-15.064 0-7.216.165-9.137.743-9.274.556-.137.763.74.536 2.552-.268 2.387-.268 11.14.02 13.856.599 5.652 1.588 10.454 3.135 15.338 1.031 3.238 2.66 7.326 3.63 9 .556 1.015 1.175 1.18 1.484.412.227-.577.247-.494-1.423-4.308-2.99-6.805-4.866-14.872-5.403-23.295-.185-3.019-.185-4.857.042-8.699.288-5.542.227-5.954-1.134-6.722-.784-.439-1.052-.439-1.65-.137zM29.88 25.078c-.433.576-.66 3.896-.619 9.192.041 5.432.165 6.173 1.01 6.173h.599l-.083-4.801c-.041-2.882.041-5.9.186-7.519.247-2.551.247-2.744-.103-3.1-.495-.467-.62-.44-.99.055zM.371 26.203c-.495.63-.495 12.484 0 13.115.371.522.413.522.928.165.371-.274.392-.659.392-6.722 0-6.064-.02-6.449-.392-6.723-.515-.357-.557-.357-.928.165zM36.478 30.895c-.267.329-.164 10.371.104 10.728.37.494.948.384 1.196-.192.309-.796.268-9.988-.042-10.4-.268-.356-1.03-.438-1.258-.136z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M22.704 32.925c-.413 1.07.309 9.631 1.154 13.582.31 1.427.66 1.866 1.217 1.592.495-.247.557-.906.248-2.525-.516-2.634-.928-6.365-1.073-9.52-.082-1.675-.227-3.184-.35-3.376-.31-.521-.928-.384-1.196.247zM6.846 34.407c-.185.274-.206 1.125-.103 3.073.165 3.1.825 9.63 1.134 11.113.248 1.18.907 1.618 1.402.96.268-.384.268-.686-.04-2.854-.537-3.814-.723-5.762-.867-9-.082-1.673-.227-3.182-.35-3.374-.269-.44-.867-.412-1.176.082zM13.569 36.08c-.392.495-.35 1.318.206 6.723.7 6.75 1.464 9.33 2.454 8.369.37-.357.37-.467-.165-3.704-.31-1.811-.701-5.022-.887-7.107-.185-2.058-.392-3.951-.474-4.17-.248-.604-.743-.66-1.134-.11zM.268 42.309c-.474.768.165 6.338 1.114 9.686.7 2.524 1.03 3.128 1.65 3.128.721 0 .865-1.015.35-2.387-.763-1.948-1.3-4.665-1.547-7.683-.247-2.881-.268-2.963-.783-3.046-.289-.055-.64.11-.784.302zM30.292 42.94c-.082.11-.144.467-.144.823 0 1.235 1.485 6.64 2.64 9.576.99 2.552 1.257 3.019 1.67 3.019 1.03 0 .969-.686-.268-4.006-.64-1.73-1.506-4.555-1.939-6.284-.7-2.853-.825-3.155-1.299-3.238-.268-.054-.577 0-.66.11zM25.055 50.623c-.186.631.226 2.14 1.505 5.625 1.32 3.622 2.742 6.75 3.114 6.942.412.22.866-.11.99-.686.082-.33-.228-1.29-.908-2.771-.97-2.14-2.124-5.269-3.093-8.26-.33-1.07-.495-1.289-.949-1.289-.288 0-.577.192-.66.439zM8.95 52.16c-.372.493-.33.85.66 4.719 1.134 4.445 2.804 9.494 3.278 9.878.495.411 1.072-.137 1.052-.96-.02-.357-.454-1.921-.99-3.43-.536-1.537-1.402-4.5-1.938-6.586-.784-3.1-1.052-3.841-1.382-3.896-.227-.027-.536.082-.68.275zM16.023 54.108c-.145.74.907 4.308 2.618 8.89 1.423 3.814 2.186 5.213 2.702 4.939.742-.385.618-1.07-.846-4.83-.804-2.057-1.814-4.911-2.247-6.338-.99-3.238-1.01-3.292-1.609-3.292-.35 0-.536.192-.618.63z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "fingerprint_svg__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h38v63H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgFingerprint);

/***/ }),

/***/ "./components/icons/HomepageOption.js":
/*!********************************************!*\
  !*** ./components/icons/HomepageOption.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\HomepageOption.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgHomepageOption(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M2.09 1.643c-1.026.13-1.887.996-2.034 2.05-.074.47-.068 1.728 0 2.226A2.476 2.476 0 001.41 7.777l.374.181H27.215l.374-.181a2.476 2.476 0 001.354-1.858c.068-.487.068-1.677.005-2.192a2.405 2.405 0 00-2.09-2.09c-.453-.057-24.31-.057-24.769.006zM1.83 11.357c-.46.124-.748.294-1.094.645-.577.572-.736 1.11-.736 2.47 0 .923.074 1.421.26 1.818.187.396.618.867.97 1.06.64.345-.216.322 13.27.322 13.486 0 12.63.023 13.27-.323.352-.192.782-.663.97-1.06.186-.396.26-.894.26-1.817 0-.923-.074-1.422-.26-1.818-.188-.397-.618-.867-.97-1.06-.64-.345.222-.322-13.298-.317-10.456 0-12.393.012-12.643.08zM1.699 21.065c-.414.13-.708.323-1.037.68-.34.362-.527.764-.606 1.28-.068.492-.074 1.75 0 2.226a2.403 2.403 0 002.028 2.05c.255.04 4.412.057 12.67.045l12.291-.017.334-.124a2.508 2.508 0 001.45-1.479c.102-.266.13-.481.153-1.229.051-1.546-.096-2.175-.668-2.775-.34-.357-.634-.544-1.065-.674-.283-.08-1.478-.09-12.772-.085-11.759 0-12.484.005-12.778.102z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgHomepageOption);

/***/ }),

/***/ "./components/icons/Linkdn.js":
/*!************************************!*\
  !*** ./components/icons/Linkdn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Linkdn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgLinkdn(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M22.958 3.625a2.417 2.417 0 012.417 2.417v16.916a2.417 2.417 0 01-2.417 2.417H6.042a2.417 2.417 0 01-2.417-2.417V6.042a2.417 2.417 0 012.417-2.417h16.916zm-.604 18.73V15.95a3.94 3.94 0 00-3.939-3.94c-1.027 0-2.223.63-2.803 1.572V12.24H12.24v10.114h3.372v-5.957c0-.93.749-1.692 1.68-1.692a1.691 1.691 0 011.69 1.692v5.957h3.372zM8.314 10.342a2.03 2.03 0 002.03-2.03 2.037 2.037 0 00-2.03-2.042A2.042 2.042 0 006.27 8.313c0 1.124.919 2.03 2.042 2.03zm1.679 12.011V12.24H6.646v10.114h3.347z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLinkdn);

/***/ }),

/***/ "./components/icons/Mail.js":
/*!**********************************!*\
  !*** ./components/icons/Mail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Mail.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgMail(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M24.167 4.833H4.833A2.413 2.413 0 002.43 7.25l-.012 14.5a2.424 2.424 0 002.416 2.417h19.334a2.424 2.424 0 002.416-2.417V7.25a2.424 2.424 0 00-2.416-2.417zm0 16.917H4.833V9.667l9.667 6.041 9.667-6.041V21.75zM14.5 13.292L4.833 7.25h19.334L14.5 13.292z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMail);

/***/ }),

/***/ "./components/icons/Media.js":
/*!***********************************!*\
  !*** ./components/icons/Media.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Media.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgMedia(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMedia);

/***/ }),

/***/ "./components/icons/MetaData.js":
/*!**************************************!*\
  !*** ./components/icons/MetaData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\MetaData.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgMetaData(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M3.02 37.307l12.512 20.74c.056-.15.119-.29.188-.421 5.041-8.358 10.084-16.713 15.128-25.065.179-.272.276-.662.264-1.064-.011-2.419 0-4.837 0-7.313-.117.084-.222.151-.323.233-.842.681-1.713 1.248-2.651 1.43-.219.032-.408.262-.493.597-.802 2.372-2.053 3.592-3.676 3.55-1.703-.041-2.962-1.415-3.7-3.97-.88-3.047-.192-6.802 1.542-8.617 1.755-1.835 4.058-1.23 5.384 1.416.243.495.43 1.018.29 1.701-.083.465-.303.826-.584.958-.282.132-.584.016-.801-.306-.22-.314-.397-.712-.625-1.01-.768-1-1.612-1.192-2.492-.465-.93.772-1.375 2.065-1.306 3.779.066 1.597.597 2.706 1.474 3.32.916.648 1.981.198 2.6-1.098-.774-.297-1.478-.837-2.005-1.8a12.59 12.59 0 01-.953-2.324c-.195-.628.053-1.395.421-1.707.381-.328.85-.128 1.089.465.332.88.676 1.702 1.262 2.174.884.698 1.797.62 2.707.284 1.754-.635 3.188-2.193 4.43-4.255 1.373-2.272 2.359-4.913 2.666-8.138.19-1.985.022-3.871-1.03-5.175-.854-1.06-1.842-1.11-2.852-.796-1.184.397-2.3 1.219-3.272 2.407a5.09 5.09 0 01-.438.479c-.4.414-.924.227-1.186-.422-.262-.649-.165-1.524.218-1.978a15.265 15.265 0 011.672-1.8c1.403-1.225 2.895-1.964 4.512-1.734 2.373.347 4.079 3.34 4.191 7.292.096 3.371-.633 6.298-1.74 9.016-.661 1.6-1.455 3.038-2.359 4.271-.115.198-.18.46-.182.735-.011 3.215-.011 6.431 0 9.65.014.66-.145 1.3-.435 1.755-5.413 8.95-10.822 17.903-16.228 26.861-.56.93-1.001.93-1.562 0-4.482-7.423-8.962-14.855-13.44-22.295-.573-.949-.572-1.672.006-2.632 5.396-8.94 10.792-17.888 16.189-26.843.27-.486.654-.755 1.053-.737 2.747.022 5.494.022 8.242 0 .4-.022.786.243 1.059.728 1.328 2.237 2.665 4.452 4.002 6.682.291.461.356 1.192.157 1.772-.199.58-.61.863-.999.683a1.56 1.56 0 01-.484-.541 772.103 772.103 0 01-3.602-5.948c-.15-.275-.367-.424-.59-.404-2.446 0-4.89 0-7.336.02-.19.01-.372.129-.515.338-5.09 8.412-10.174 16.83-15.254 25.255l-.144.267z",
      fill: "#000",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M11.574 31.265V38.683c-.007.815-.392 1.482-.881 1.527-.49.046-.917-.546-.978-1.354a5.212 5.212 0 01-.012-.432v-8.408c0-1.269.357-1.865 1.112-1.867h5.131c.42 0 .755.247.932.91.163.596.139 1.221-.149 1.652-.207.305-.468.49-.744.529-1.313.052-2.626.022-3.94.025h-.471zM19.136 43.779v-6.942a4.524 4.524 0 01.125-1.135c.183-.638.61-.975 1.025-.809.417.146.718.752.725 1.46.017.927.008 1.854.008 2.781v5.874c0 1.308-.352 1.901-1.131 1.904h-5.14c-.384.039-.743-.316-.905-.895-.158-.51-.124-1.126.087-1.58.201-.459.532-.71.873-.663h3.873l.46.005z",
      fill: "#000",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMetaData);

/***/ }),

/***/ "./components/icons/OpenseaLogo.js":
/*!*****************************************!*\
  !*** ./components/icons/OpenseaLogo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\OpenseaLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgOpenseaLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M18.895 14.681c-.045-.045-.112-.045-.18-.022l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0 .31.31 0 01.089-.067c.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65-.359 0-.627.291-.627.65 0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224a5.16 5.16 0 00.448-.941c.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157.044-.022.022-.09-.023-.112zm-9.997-.493h2.555c.045 0 .068-.023.068-.067v-2.78c0-.022-.023-.044-.045-.067l-1.255-.583c-.023-.022-.068 0-.09.045l-1.3 3.34c-.022.067.022.112.067.112zM13 0C5.828 0 0 5.828 0 13s5.828 13 13 13 13-5.828 13-13S20.172 0 13 0zm-.045 22.459c-5.177 0-9.369-4.192-9.369-9.392 0-5.177 4.192-9.391 9.37-9.391 5.177 0 9.368 4.214 9.368 9.391-.022 5.2-4.214 9.392-9.369 9.392zm5.76-7.8l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0 .31.31 0 01.089-.067c.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65-.359 0-.627.291-.627.65 0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224a5.16 5.16 0 00.448-.941c.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157 0-.045-.023-.112-.068-.134 0 0-.067-.023-.135 0zm-9.817-.471h2.555c.045 0 .068-.023.068-.067v-2.78c0-.022-.023-.044-.045-.067l-1.255-.583c-.023-.022-.068 0-.09.045l-1.3 3.34c-.022.067.022.112.067.112z",
      fill: "#3291E9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M11.476 11.296l-1.255-.582c-.023-.023-.068 0-.09.045l-1.3 3.34c-.022.044.022.089.067.089h2.556c.044 0 .067-.023.067-.067v-2.78c0-.022-.023-.044-.045-.044zm7.419 3.385c-.045-.045-.112-.045-.18-.022l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0c.022-.022.044-.044.089-.067.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65s-.627.291-.627.65c0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224.179-.291.336-.627.448-.941.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157.044-.022.022-.09-.023-.112z",
      fill: "#3291E9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgOpenseaLogo);

/***/ }),

/***/ "./components/icons/QrCode.js":
/*!************************************!*\
  !*** ./components/icons/QrCode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\QrCode.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgQrCode(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 47 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#qr-code_svg__clip0)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M5.875 24.542h4.667v4.666H5.875v-4.666zm18.667-14h4.666v9.333h-4.666v-9.333zm-4.667 14h9.333v9.333h-4.666v-4.667h-4.667v-4.666zm14 0h4.667v4.666h4.666v-4.666h4.667v4.666h-4.667v4.667h4.667v9.333h-4.667v4.667h-4.666v-4.667h-9.334v4.667h-4.666v-9.333h9.333v-4.667h4.667v-4.667h-4.667v-4.666zm9.333 18.666v-9.333h-4.666v9.333h4.666zM33.875 5.875h14v14h-14v-14zm4.667 4.667v4.666h4.666v-4.666h-4.666zM5.875 5.875h14v14h-14v-14zm4.667 4.667v4.666h4.666v-4.666h-4.666zM5.875 33.875h14v14h-14v-14zm4.667 4.667v4.666h4.666v-4.666h-4.666z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "qr-code_svg__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h47v47H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgQrCode);

/***/ }),

/***/ "./components/icons/RaribleLogo.js":
/*!*****************************************!*\
  !*** ./components/icons/RaribleLogo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\RaribleLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgRaribleLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M20.8 0H5.2A5.2 5.2 0 000 5.2v15.6A5.2 5.2 0 005.2 26h15.6a5.2 5.2 0 005.2-5.2V5.2A5.2 5.2 0 0020.8 0z",
      fill: "#FEDA03"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.94 12.905c.82-.213 1.548-.826 1.548-2.057 0-2.05-1.741-2.528-3.972-2.528H6.63v9.234h3.74V14.42h4.437c.683 0 1.083.271 1.083.942v2.192h3.74v-2.308c0-1.258-.71-2.051-1.69-2.341zm-3.069-.974H10.37v-.903h4.501c.49 0 .787.065.787.452s-.297.451-.787.451z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgRaribleLogo);

/***/ }),

/***/ "./components/icons/SavingsPig.js":
/*!****************************************!*\
  !*** ./components/icons/SavingsPig.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\SavingsPig.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgSavingsPig(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.311.071c-3.581.821-5.937 7.212-4.764 12.925.127.59.222 1.107.222 1.178 0 .072-.349.34-.761.625-.972.625-2.63 2.089-3.286 2.892l-.507.625-.517-.375c-.972-.696-2.314-.785-3.202-.214-.38.25-1.236 1.232-1.236 1.428 0 .072.423 1.09.94 2.25l.93 2.106-.412 1.089c-.549 1.428-1.183 3.677-1.426 5.07l-.19 1.107h-.486c-.718 0-1.48.446-1.88 1.107-.708 1.178-.698 1.017-.73 7.944-.02 3.91.011 6.552.074 6.962.148.91.698 2 1.215 2.392.37.286.708.34 2.272.34h1.849l.95 1.678c.529.91 1.332 2.124 1.786 2.695l.813 1.018v2.981c0 2.732.021 3.017.243 3.66.412 1.232.708 1.375 2.737 1.321 1.595-.053 1.785-.09 2.06-.428.433-.554.676-1.357.74-2.5l.063-1 .327.09c1.405.41 3.19.535 4.49.339.76-.125 1.448-.268 1.532-.321.106-.072.158.178.19 1.07.042 1.25.222 1.822.76 2.5.265.34.434.375 2.103.375 1.733 0 1.838-.018 2.166-.41.613-.75.697-1.232.76-4.446l.053-2.892.793-.928c1.753-2.089 3.528-5.517 4.447-8.605 1.173-3.892 1.638-8.801 1.215-12.764l-.137-1.303.507-.429c.57-.5 1.226-.714 1.627-.553.402.178.317.375-.18.392-1.193.054-1.257 2.714-.073 3.303.37.197.454.179.707-.125.159-.196.36-.607.444-.928.19-.678.2-.678.76-.197.381.322.444.34.582.108.243-.411.074-.947-.444-1.357-.264-.214-.517-.375-.58-.375-.054 0-.107-.09-.107-.196 0-.5-.38-1.447-.665-1.714-.444-.375-1.374-.215-2.145.375-.327.25-.612.464-.623.464-.021 0-.074-.268-.116-.59-.148-1.142-.898-3.784-1.564-5.48-1.67-4.23-4.247-7.676-7.142-9.569-.549-.357-1.014-.66-1.035-.678-.01-.036.074-.518.19-1.107 1.036-5.034-.655-10.765-3.666-12.479-.834-.464-1.849-.624-2.673-.446zm1.796 2.607c1.332.5 2.41 2.035 3.033 4.284.264.946.295 1.25.295 2.928 0 1.75-.02 1.946-.348 3.07-1.648 5.713-6.381 5.713-7.977 0-.317-1.106-.338-1.339-.338-3.07 0-1.678.032-1.982.296-2.928.602-2.178 1.627-3.677 2.905-4.23.888-.394 1.226-.412 2.134-.054zm-4.352 15.37c.02 0-.349.232-.814.482-1.87 1.018-2.493 1.821-2.218 2.857.063.232.253.535.401.642.243.161.412.107 1.183-.464 2.779-2.017 6.17-2.231 8.96-.571.496.303 1.14.732 1.415.982.623.517.982.482 1.268-.143.486-1.107-.233-2.089-2.325-3.231-.602-.322-1.077-.625-1.077-.679.01-.053.243-.446.528-.874l.518-.786 1.056.643c4.047 2.41 7.258 7.998 8.304 14.46.528 3.231.465 7.23-.169 10.497-.845 4.338-2.62 8.159-5.029 10.854l-1.13 1.268-.01 3.249-.011 3.267-1.395.053-1.405.054v-2.339c0-1.267-.032-2.32-.074-2.32-.053 0-.349.124-.666.267-.887.41-2.852.803-3.94.803-1.13 0-2.736-.374-3.92-.892a28.93 28.93 0 00-.866-.357c-.021 0-.053 1.017-.063 2.267l-.032 2.285-1.405.054-1.405.053.021-3.41.01-3.41-.855-.981c-1.036-1.214-2.124-2.892-2.874-4.445l-.55-1.16H4.064c-2.017 0-2.123-.019-2.356-.393l-.243-.375V40.22c0-7.391-.137-6.82 1.596-6.945l1.183-.09.243-1.57c.433-2.732 1.11-4.999 2.314-7.73.147-.34.116-.464-.624-2.142-.454-1-.75-1.84-.697-1.928.18-.304 1.278.107 2.06.767l.792.66.793-.999c.972-1.214 2.44-2.553 3.645-3.32l.898-.59.528.84c.285.464.539.856.56.874zm21.087 14.264c.127.09.137.179.042.536-.127.446-.18.5-.444.321-.169-.107-.232-.625-.095-.839.085-.16.275-.16.497-.018z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M8.575 30.01c-.138.053-.38.32-.56.606-.36.625-.434 1.607-.17 2.464.286.928 1.205 1.214 1.765.535 1.035-1.25.243-3.999-1.035-3.606z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSavingsPig);

/***/ }),

/***/ "./components/icons/SmartContractİcon.js":
/*!***********************************************!*\
  !*** ./components/icons/SmartContractİcon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\SmartContract\u0130con.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgSmartContractİcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M3.023 1.368C1.864 2.088.333 5.025.07 7.13c-.336 2.382.561 4.986 2.056 6.15.71.553 2.13.83 4.11.83h2.99v2.493c0 1.385.187 2.493.374 2.493.485 0 .485-11.634 0-13.517-.187-.776-.673-1.884-1.121-2.549L7.73 1.922h13.117c11.696 0 13.228.111 14.2.942 2.018 1.773 2.205 3.213 2.205 17.285 0 8.144.15 12.797.373 12.797.224 0 .374-4.598.374-12.742 0-13.85-.15-15.124-2.055-17.728l-1.01-1.385L19.39.981c-8.557-.056-15.919.11-16.367.387zm3.96 1.385c1.496 1.164 2.243 3.49 2.243 7.202v3.047H7.544c-1.644 0-1.644 0-1.308-1.44.225-.776.262-1.994.15-2.77-.224-1.385-2.242-3.38-2.69-2.66-.15.222-.038.5.26.666.786.387 1.907 2.216 1.907 3.157 0 .444-.337 1.33-.785 1.995-.972 1.44-2.392 1.052-3.587-.942C.48 9.4.407 8.016 1.19 5.578 2.239 2.256 4.78 1.037 6.985 2.754z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.447 11.894c0 .333 2.242.554 5.942.554 3.587 0 6.054-.221 6.203-.554.15-.387-1.943-.554-5.942-.554-3.886 0-6.203.222-6.203.554zM12.963 16.88c0 .333 1.308.554 3.176.554 1.869 0 3.177-.221 3.177-.554 0-.332-1.308-.554-3.177-.554-1.868 0-3.176.222-3.176.554zM20.81 16.88c0 .333 1.121.554 2.616.554s2.616-.221 2.616-.554c0-.332-1.121-.554-2.616-.554s-2.616.222-2.616.554zM31.274 16.88c0 .277.672.554 1.494.554s1.494-.277 1.494-.554c0-.332-.672-.554-1.494-.554s-1.494.222-1.494.554zM9.525 21.645c-.187.221-.3 7.423-.3 16.01 0 14.349.038 15.678.673 16.51.561.775 1.869.941 8.147 1.052l7.436.166.112 4.266c.075 2.382.225 4.321.337 4.321.15 0 .747-.665 1.308-1.496l1.046-1.496 1.046 1.496c.56.831 1.159 1.496 1.308 1.496.15 0 .262-1.994.262-4.432v-4.432h2.952c4.11 0 4.148-.055 4.148-10.914 0-4.986-.15-8.531-.374-8.753-.224-.221-.373 1.274-.373 4.1v4.487H35.57c-.934 0-1.682.222-1.682.554 0 .277.748.554 1.682.554h1.682v3.546c0 5.318 0 5.318-3.401 5.318H30.9v-2.16c0-1.607.224-2.438.747-2.992.673-.72.785-1.274.673-4.598l-.112-3.712-2.055-1.662-2.056-1.662-1.868 1.662-1.869 1.606-.112 3.768c-.112 3.324 0 3.878.673 4.598.523.554.747 1.385.747 2.992v2.16h-7.623c-8.707 0-8.072.388-8.072-5.318v-3.546h6.353c3.998 0 6.353-.221 6.353-.554 0-.332-2.355-.554-6.353-.554H9.973l-.075-11.412c-.074-6.26-.224-11.191-.373-10.97zm20.478 18.281c1.644 1.44 1.644 1.44 1.644 4.543v3.158l-1.719 1.33-1.719 1.385-1.644-1.33-1.644-1.385V44.47c0-3.102 0-3.157 1.607-4.543.86-.775 1.607-1.44 1.681-1.44.075 0 .86.665 1.794 1.44zm-.822 11.025l.971-.942V61.92l-.934-1.274-.934-1.274-.934 1.274-.934 1.274v-11.8l.896.831c.86.831 1.01.831 1.869 0z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M27.91 41.81c0 .277.337.776.747 1.108.449.333.748 1.163.748 1.94 0 .775.186 1.384.373 1.384.747 0 .374-3.268-.448-4.1-.971-.997-1.42-1.108-1.42-.332zM14.084 21.866c0 .277.672.554 1.532.554.896 0 1.42-.221 1.27-.554-.112-.332-.822-.554-1.532-.554-.71 0-1.27.222-1.27.554zM18.755 21.866c-.15.388 2.504.554 7.623.554 5.008 0 7.885-.221 7.885-.554 0-.332-2.803-.554-7.623-.554-4.709 0-7.736.222-7.885.554zM12.776 27.406c.15.333 2.803.554 6.726.554 3.924 0 6.577-.221 6.727-.554.15-.388-2.168-.554-6.727-.554s-6.875.166-6.726.554zM27.91 27.406c0 .333 1.308.554 3.177.554 1.868 0 3.176-.221 3.176-.554 0-.332-1.308-.554-3.176-.554-1.869 0-3.177.222-3.177.554zM12.963 32.392c0 .333 3.25.554 8.968.554s8.969-.221 8.969-.554c0-.332-3.251-.554-8.969-.554-5.717 0-8.968.222-8.968.554z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSmartContractİcon);

/***/ }),

/***/ "./components/icons/Twitter.js":
/*!*************************************!*\
  !*** ./components/icons/Twitter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Twitter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgTwitter(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M27.14 7.25c-.931.423-1.934.7-2.973.834a5.194 5.194 0 002.271-2.876 10.44 10.44 0 01-3.286 1.269c-.955-1.04-2.296-1.644-3.819-1.644-2.84 0-5.16 2.32-5.16 5.184 0 .411.05.81.134 1.184A14.735 14.735 0 013.625 5.788a5.128 5.128 0 00-.7 2.598c0 1.8.905 3.395 2.307 4.302-.858 0-1.655-.242-2.356-.605v.037a5.188 5.188 0 004.157 5.087 5.1 5.1 0 01-2.333.084 5.172 5.172 0 004.834 3.601 10.296 10.296 0 01-6.44 2.224c-.411 0-.822-.025-1.233-.073a14.675 14.675 0 007.95 2.332c9.522 0 14.754-7.902 14.754-14.754 0-.23 0-.447-.012-.676A10.359 10.359 0 0027.14 7.25z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTwitter);

/***/ }),

/***/ "./components/icons/Vector.js":
/*!************************************!*\
  !*** ./components/icons/Vector.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Vector.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgVector(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M23.988 9.138h-1.713v-2.61C22.275 2.923 18.437 0 13.708 0 8.977 0 5.14 2.924 5.14 6.527v2.611H3.427C1.542 9.138 0 10.313 0 11.75v13.055c0 1.436 1.542 2.611 3.427 2.611h20.561c1.885 0 3.427-1.175 3.427-2.611V11.749c0-1.436-1.542-2.61-3.427-2.61zm-15.42-2.61c0-2.168 2.295-3.917 5.14-3.917 2.844 0 5.14 1.75 5.14 3.916v2.611H8.568v-2.61zm15.42 18.276H3.427V11.749h20.561v13.055zm-10.28-3.916c1.884 0 3.426-1.175 3.426-2.611 0-1.436-1.542-2.611-3.427-2.611-1.884 0-3.426 1.175-3.426 2.61 0 1.437 1.542 2.612 3.426 2.612z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M23.988 9.138h-1.713v-2.61C22.275 2.923 18.437 0 13.708 0 8.977 0 5.14 2.924 5.14 6.527v2.611H3.427C1.542 9.138 0 10.313 0 11.75v13.055c0 1.436 1.542 2.611 3.427 2.611h20.561c1.885 0 3.427-1.175 3.427-2.611V11.749c0-1.436-1.542-2.61-3.427-2.61zm-15.42-2.61c0-2.168 2.295-3.917 5.14-3.917 2.844 0 5.14 1.75 5.14 3.916v2.611H8.568v-2.61zm15.42 18.276H3.427V11.749h20.561v13.055zm-10.28-3.916c1.884 0 3.426-1.175 3.426-2.611 0-1.436-1.542-2.611-3.427-2.611-1.884 0-3.426 1.175-3.426 2.61 0 1.437 1.542 2.612 3.426 2.612z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgVector);

/***/ }),

/***/ "./components/icons/Youtube.js":
/*!*************************************!*\
  !*** ./components/icons/Youtube.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Youtube.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgYoutube(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M12.083 18.125l6.272-3.625-6.272-3.625v7.25zm13.969-9.461c.157.568.265 1.329.338 2.296.084.966.12 1.8.12 2.525l.073 1.015c0 2.646-.193 4.592-.531 5.836-.302 1.088-1.003 1.789-2.09 2.09-.569.158-1.608.267-3.203.339-1.57.084-3.009.12-4.338.12l-1.921.073c-5.063 0-8.217-.193-9.461-.531-1.088-.302-1.789-1.003-2.09-2.09-.158-.569-.267-1.33-.339-2.297-.085-.966-.12-1.8-.12-2.525L2.416 14.5c0-2.646.193-4.592.531-5.836.302-1.088 1.003-1.789 2.09-2.09.569-.158 1.608-.267 3.203-.339 1.57-.085 3.008-.12 4.338-.12l1.921-.073c5.063 0 8.217.193 9.461.531 1.088.302 1.789 1.003 2.09 2.09z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgYoutube);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckSquare": () => (/* reexport safe */ _CheckSquare__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Discord": () => (/* reexport safe */ _Discord__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "DropDownİcon": () => (/* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "DropDown": () => (/* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "EthLogo": () => (/* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Facebook": () => (/* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Fingerprint": () => (/* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "HomepageOption": () => (/* reexport safe */ _HomepageOption__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "İnstagram": () => (/* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "Linkdn": () => (/* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "Mail": () => (/* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Media": () => (/* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "MetaData": () => (/* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "OpenseaLogo": () => (/* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "QrCode": () => (/* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "RaribleLogo": () => (/* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "SavingsPig": () => (/* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "SmartContractİcon": () => (/* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "Twitter": () => (/* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "Vector": () => (/* reexport safe */ _Vector__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "Youtube": () => (/* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_20__.default)
/* harmony export */ });
/* harmony import */ var _CheckSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckSquare */ "./components/icons/CheckSquare.js");
/* harmony import */ var _Discord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discord */ "./components/icons/Discord.js");
/* harmony import */ var _DropDown_con__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDownİcon */ "./components/icons/DropDownİcon.js");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDown */ "./components/icons/DropDown.js");
/* harmony import */ var _EthLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EthLogo */ "./components/icons/EthLogo.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Facebook */ "./components/icons/Facebook.js");
/* harmony import */ var _Fingerprint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fingerprint */ "./components/icons/Fingerprint.js");
/* harmony import */ var _HomepageOption__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomepageOption */ "./components/icons/HomepageOption.js");
/* harmony import */ var _nstagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./İnstagram */ "./components/icons/İnstagram.js");
/* harmony import */ var _Linkdn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Linkdn */ "./components/icons/Linkdn.js");
/* harmony import */ var _Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Mail */ "./components/icons/Mail.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Media */ "./components/icons/Media.js");
/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MetaData */ "./components/icons/MetaData.js");
/* harmony import */ var _OpenseaLogo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenseaLogo */ "./components/icons/OpenseaLogo.js");
/* harmony import */ var _QrCode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./QrCode */ "./components/icons/QrCode.js");
/* harmony import */ var _RaribleLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RaribleLogo */ "./components/icons/RaribleLogo.js");
/* harmony import */ var _SavingsPig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SavingsPig */ "./components/icons/SavingsPig.js");
/* harmony import */ var _SmartContract_con__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SmartContractİcon */ "./components/icons/SmartContractİcon.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Twitter */ "./components/icons/Twitter.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Vector */ "./components/icons/Vector.js");
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Youtube */ "./components/icons/Youtube.js");






















/***/ }),

/***/ "./components/icons/İnstagram.js":
/*!***************************************!*\
  !*** ./components/icons/İnstagram.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\\u0130nstagram.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Svgİnstagram(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M9.425 2.417h10.15a7.013 7.013 0 017.008 7.008v10.15a7.008 7.008 0 01-7.008 7.008H9.425a7.013 7.013 0 01-7.008-7.008V9.425a7.008 7.008 0 017.008-7.008zm-.242 2.416a4.35 4.35 0 00-4.35 4.35v10.634a4.347 4.347 0 004.35 4.35h10.634a4.35 4.35 0 004.35-4.35V9.183a4.347 4.347 0 00-4.35-4.35H9.183zm11.66 1.813a1.51 1.51 0 110 3.02 1.51 1.51 0 010-3.02zM14.5 8.458a6.042 6.042 0 110 12.084 6.042 6.042 0 010-12.084zm0 2.417a3.625 3.625 0 100 7.25 3.625 3.625 0 000-7.25z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svgİnstagram);

/***/ }),

/***/ "./components/layout/makeNFT/index.js":
/*!********************************************!*\
  !*** ./components/layout/makeNFT/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/makeNFT/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\makeNFT\\index.js";






function Layout() {
  return (
    /*#__PURE__*/

    /* Layout in Make NFT Page */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().layout),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigator),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().formContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerSide),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
              size: "30px",
              bold: true,
              children: "Mint NFT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
              children: "Fungible and non-fungible tokens"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/navigation/button.js":
/*!*****************************************!*\
  !*** ./components/navigation/button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/navigation/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";





function NavigationButton({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationButton);

/***/ }),

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";









const MENU = [{
  key: 'make-an-nft',
  icon: '',
  title: 'Make an NFT'
}, {
  key: 'business-signup',
  icon: '',
  title: 'Business Signup'
}, {
  key: 'Subscribe-for-upcoming-drops',
  icon: '',
  title: 'Subscribe for Upcoming Drops'
}, {
  key: 'nft-standards',
  icon: '',
  title: 'NFT Standards'
}, {
  key: 'download-nft-creator',
  icon: '',
  title: 'Download NFT Creator'
}];

function Navigation({
  flat = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
    className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navigator),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().mark)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Ownable-NS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navBtn),
      children: MENU.map(menu => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().subBtn),
          children: !flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: [" ", menu.title, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 30
          }, this)
        }, menu.key, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().loginButton),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_6__.HomepageOption, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./components/text/head-title.js":
/*!***************************************!*\
  !*** ./components/text/head-title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-title.module.css */ "./components/text/head-title.module.css");
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text\\head-title.js";





function HeadTitle({
  bold = false,
  className,
  children,
  size = 20,
  opacity = 1
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold), className]),
    style: {
      fontSize: size,
      opacity: opacity
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadTitle);
/*
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    bold: Some text has bold font weight, but some it hasn't. When text has bold font weight properties, bold properties will have been activated.
*/

/***/ }),

/***/ "./components/text/text-title.js":
/*!***************************************!*\
  !*** ./components/text/text-title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title.module.css */ "./components/text/text-title.module.css");
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text\\text-title.js";





function TextTitle({
  bold = false,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold)]),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextTitle);

/***/ }),

/***/ "./pages/makeNft.js":
/*!**************************!*\
  !*** ./pages/makeNft.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_makeNFT_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/makeNFT/index */ "./components/layout/makeNFT/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\makeNft.js";




function makeNFT() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_makeNFT_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNFT);

/***/ }),

/***/ "./components/button/base/style.module.css":
/*!*************************************************!*\
  !*** ./components/button/base/style.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"baseBtn": "style_baseBtn__25y_r",
	"FrameBorder": "style_FrameBorder__1Hp63",
	"linkContainer": "style_linkContainer__2aJSj"
};


/***/ }),

/***/ "./components/frame/frameButton.module.css":
/*!*************************************************!*\
  !*** ./components/frame/frameButton.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"frameBtn": "frameButton_frameBtn__AmQ2u"
};


/***/ }),

/***/ "./components/layout/makeNFT/style.module.css":
/*!****************************************************!*\
  !*** ./components/layout/makeNFT/style.module.css ***!
  \****************************************************/
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ "./components/navigation/button.module.css":
/*!*************************************************!*\
  !*** ./components/navigation/button.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ "./components/navigation/navigation.module.css":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"navigator": "navigation_navigator__2CchN",
	"navBtn": "navigation_navBtn__2Irah",
	"navItem": "navigation_navItem__20uhs",
	"mark": "navigation_mark__3GFaM",
	"loginButton": "navigation_loginButton__2eAZM"
};


/***/ }),

/***/ "./components/text/head-title.module.css":
/*!***********************************************!*\
  !*** ./components/text/head-title.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Title": "head-title_Title__3mwXg",
	"bold": "head-title_bold__12sGy"
};


/***/ }),

/***/ "./components/text/text-title.module.css":
/*!***********************************************!*\
  !*** ./components/text/text-title.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Title": "text-title_Title__6Kb9h",
	"bold": "text-title_bold__pS28u"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/makeNft.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEsU0FBUy9DLFNBQVQsQ0FBbUI7QUFBRWtFLEVBQUFBLElBQUksR0FBQyxLQUFQO0FBQWM3RSxFQUFBQTtBQUFkLENBQW5CLEVBQTJDO0FBQ3ZDLHNCQUFPO0FBQUksYUFBUyxFQUFFSCxpREFBRSxDQUFDLENBQUNELHFFQUFELEVBQWVpRixJQUFJLElBQUlqRixvRUFBdkIsQ0FBRCxDQUFqQjtBQUFBLGNBQXlESTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7QUFHRCxpRUFBZVcsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTs7O0FBR0EsU0FBU3VFLE9BQVQsR0FBa0I7QUFDZCxzQkFDSSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFHRCxpRUFBZUEsT0FBZjs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvQ2hlY2tTcXVhcmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRGlzY29yZC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ecm9wRG93bi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ecm9wRG93bsSwY29uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0V0aExvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRmFjZWJvb2suanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRmluZ2VycHJpbnQuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvSG9tZXBhZ2VPcHRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTGlua2RuLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01haWwuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWV0YURhdGEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvT3BlbnNlYUxvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvUXJDb2RlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1JhcmlibGVMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1NhdmluZ3NQaWcuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvU21hcnRDb250cmFjdMSwY29uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1R3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvVmVjdG9yLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBuc3RhZ3JhbS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvbWFrZU5GVC9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vcGFnZXMvbWFrZU5mdC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbGF5b3V0L21ha2VORlQvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvaGVhZC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcblxyXG5mdW5jdGlvbiBmcmFtZUJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbGlua0J1dHRvbiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiB7Y2hpbGRyZW59IDwvYT5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICBjb25zdCBDb21wID0gYm9yZGVyID8gZnJhbWVCdXR0b24gOiBsaW5rQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29tcCAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmJhc2VCdG4gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyICYmIHN0eWxlcy5GcmFtZUJvcmRlcixcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICBdKX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn0gXHJcbiAgICAgICAgICAgIDwvQ29tcD5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblxyXG5cclxuLypcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIGNuIHN0YW5kIGZvciBjbGFzc25hbWVzOiAnQ2xhc3NuYW1lcycgIGlzIHByZXZlbnQgY2xhc3Mgb3ZlcndyaXRlLiBJdCBjb21lcyBtb3JlIHRoYW4gb25lIGNsYXNzIGludG8gZnVuY3Rpb24sIGl0J3MgcmVhc29uIGFib3V0IGNvbmZsaWN0LiBcclxuICAgIGJvcmRlcjogU29tZSBidXR0b24gaGFzIGJvcmRlciwgYnV0IHNvbWUgaXQgaGFzbid0LiBXaGVuIGJ1dHRvbiBoYXMgYm9yZGVyLCBib3JkZXIgYXR0cmlidXRlIHdpbCBoYXZlIGJlZW4gIGFjdGl2YXRlZC4gXHJcbiAgICBjaGlsZHJlbjogQ29udGVudCwgd2hpY2ggaW5jbHVkZSB3aXRoaW4gZWxlbWVudC5cclxuICAgIC4uLnByb3BzOiBXaGF0IGlmIEFueSBwcm9wZXJ0aWVzIGlzIHBhc3NlZCBpbnRvIGZ1bmN0aW9uLCBGdW5jdGlvbiBjYW4gY2F0Y2guXHJcbiovXHJcblxyXG4vKiBcclxuLy8gVE8gRE8gTGlzdFxyXG5bXSAgZnJhbWUgYnV0dG9uIC8gVHJhbnNwYXJlbnQgLSBjb2xvclxyXG5cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZnJhbWVCdXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Jhc2UvaW5kZXgnXHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSBcIi4uL3RleHQvdGV4dC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gRnJhbWVCdXR0b24gKHtjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZnJhbWVCdG59XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRUaXRsZT57Y2hpbGRyZW59PC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYW1lQnV0dG9uXHJcblxyXG4vKiBcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIDxUZXh0VGl0bGUvPjogSXQncyB2YXJ5IG9mIHRleHQsIEl0IGp1c3QgaGFzIHNvbWUgc3BlY2lmaWMgYXR0cmlidXRlIHN1Y2ggYXMgMTYgcHggZm9udCBzaXplLCBhbmQgYm9sZCBmb250IHdpZ2h0LlxyXG4qLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDaGVja1NxdWFyZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTYuMDcxIDBIMS45M0ExLjkyOSAxLjkyOSAwIDAwMCAxLjkyOVYxNi4wN0MwIDE3LjEzNy44NjMgMTggMS45MjkgMThIMTYuMDdBMS45MjkgMS45MjkgMCAwMDE4IDE2LjA3MVYxLjkzQTEuOTI5IDEuOTI5IDAgMDAxNi4wNzEgMHptMCAxNi4wNzFIMS45M1YxLjkzSDE2LjA3VjE2LjA3em0tMS40NC05LjcxMmwtNi45MzUgNi44NzlhLjQ4Mi40ODIgMCAwMS0uNjgyLS4wMDNMMy4zNjcgOS41NThhLjQ4Mi40ODIgMCAwMS4wMDMtLjY4MmwuOTEyLS45MDVhLjQ4Mi40ODIgMCAwMS42ODIuMDAzbDIuNDAzIDIuNDIyIDUuNjc5LTUuNjM0YS40ODIuNDgyIDAgMDEuNjgyLjAwM2wuOTA1LjkxMmEuNDgyLjQ4MiAwIDAxLS4wMDIuNjgyelwiXG4gICAgICAgIGZpbGw9XCIjRkNDNzI5XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2hlY2tTcXVhcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEaXNjb3JkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNS42MDMgMEgzLjM5N0MxLjUyNSAwIDAgMS4zMzQgMCAyLjk4N3YxOS42MDRjMCAxLjY1MyAxLjUyNSAyLjk4NyAzLjM5NyAyLjk4N0gyMi4xOWwtLjg3OC0yLjY4MyAyLjEyMSAxLjcyNiAyLjAwNSAxLjYyNEwyOSAyOVYyLjk4N0MyOSAxLjMzNCAyNy40NzUgMCAyNS42MDMgMHptLTYuMzk3IDE4LjkzN3MtLjU5Ni0uNjIzLTEuMDkzLTEuMTc1YzIuMTctLjUzNiAyLjk5OS0xLjcyNSAyLjk5OS0xLjcyNS0uNjguMzkyLTEuMzI2LjY2Ny0xLjkwNi44NTUtLjgyOC4zMDUtMS42MjQuNTA4LTIuNDAzLjYyNGExMy4yNCAxMy4yNCAwIDAxLTQuMjkyLS4wMTQgMTUuNDUgMTUuNDUgMCAwMS0yLjQzNi0uNjI0Yy0uMzgtLjEzLS43OTUtLjI5LTEuMjEtLjQ5My0uMDQ5LS4wMjktLjA5OS0uMDQ0LS4xNDgtLjA3M2EuMjI4LjIyOCAwIDAxLS4wNjctLjA0M2MtLjI5OC0uMTQ1LS40NjQtLjI0Ni0uNDY0LS4yNDZzLjc5NiAxLjE2IDIuOSAxLjcxYy0uNDk3LjU1Mi0xLjExIDEuMjA0LTEuMTEgMS4yMDQtMy42NjItLjEwMi01LjA1NC0yLjIwNC01LjA1NC0yLjIwNCAwLTQuNjY5IDIuMzg2LTguNDU0IDIuMzg2LTguNDU0IDIuMzg2LTEuNTY2IDQuNjU3LTEuNTIyIDQuNjU3LTEuNTIybC4xNjUuMTc0Yy0yLjk4My43NTQtNC4zNTggMS45LTQuMzU4IDEuOXMuMzY1LS4xNzUuOTc4LS40MjFjMS43NzMtLjY4MSAzLjE4MS0uODcgMy43NjEtLjkxMy4xLS4wMTUuMTgzLS4wMy4yODItLjAzYTE2LjAxMSAxNi4wMTEgMCAwMTMuMzQ4LS4wMjhjMS41NzQuMTU5IDMuMjY0LjU2NSA0Ljk4OCAxLjM5MiAwIDAtMS4zMS0xLjA4OC00LjEyNy0xLjg0MmwuMjMyLS4yMzJzMi4yNy0uMDQzIDQuNjU3IDEuNTIzYzAgMCAyLjM4NiAzLjc4NCAyLjM4NiA4LjQ1MyAwIDAtMS40MDggMi4xMDItNS4wNyAyLjIwNHptLTcuNzA1LTYuNzcyYy0uOTQ1IDAtMS42OS43MjYtMS42OSAxLjYxIDAgLjg4NC43NjIgMS42MSAxLjY5IDEuNjEuOTQ0IDAgMS42OS0uNzI2IDEuNjktMS42MS4wMTYtLjg4NS0uNzQ2LTEuNjEtMS42OS0xLjYxem02LjA0OCAwYy0uOTQ0IDAtMS42OS43MjYtMS42OSAxLjYxIDAgLjg4NC43NjIgMS42MSAxLjY5IDEuNjEuOTQ1IDAgMS42OS0uNzI2IDEuNjktMS42MSAwLS44ODUtLjc0NS0xLjYxLTEuNjktMS42MXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRGlzY29yZFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00LjUxNiA3LjU0OGMuNDM2LS40NDYgMS4wNDMtLjQ4MSAxLjU3NiAwTDEwIDExLjI5NWwzLjkwOC0zLjc0N2MuNTMzLS40ODEgMS4xNDEtLjQ0NiAxLjU3NCAwIC40MzYuNDQ1LjQwOCAxLjE5NyAwIDEuNjE1LS40MDYuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyYTEuMDk1IDEuMDk1IDAgMDEtMS41NzYgMFM0LjkyNCA5LjU4IDQuNTE2IDkuMTYzYy0uNDA4LS40MTgtLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93blxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duxLBjb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgMTBsNSA1IDUtNUg3elwiIGZpbGw9XCIjMDAwXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93bsSwY29uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRXRoTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQyIDcxXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNn1cbiAgICAgICAgZD1cIk0yMC45OTYgMjcuMjkzTDIgMzYuMDlsMTguOTk2IDExLjQyNyAxOC45OS0xMS40MjctMTguOTktOC43OTZ6XCJcbiAgICAgICAgZmlsbD1cIiMwMTAxMDFcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNDV9XG4gICAgICAgIGQ9XCJNMS41NyAzNS44MzRsLS4yNTMuNDI4LjQyNS4yNTZMMjAuNzQgNDcuOTQ0bC43NTguNDU2VjIuMTc0bC0uOTMgMS41NzFMMS41NyAzNS44MzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuOH1cbiAgICAgICAgZD1cIk0yMS40MjYgMy43NDVsLS45My0xLjU3MlY0OC40bC43NTgtLjQ1NiAxOC45ODktMTEuNDI2LjQyNS0uMjU2LS4yNTMtLjQyOEwyMS40MjYgMy43NDV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNDV9XG4gICAgICAgIGQ9XCJNMjAuNDk3IDUxLjQ2MlY2NS40MUwzLjc1IDQxLjM4OWwxNi43NDcgMTAuMDczelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjAuNzM4IDUwLjc1MWwtLjI0Mi4xNDZWNjguNTlsLjkxLTEuMzA0TDQwLjQxIDQwLjAzOWwtLjY2OC0uNzE0TDIwLjczOCA1MC43NXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0V0aExvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdGYWNlYm9vayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNi4wNDIgMy42MjVoMTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN3pNMjEuNzUgNi4wNDJoLTMuMDJhNC4yMyA0LjIzIDAgMDAtNC4yMyA0LjIyOXYzLjAyaC0yLjQxN3YzLjYyNkgxNC41djguNDU4aDMuNjI1di04LjQ1OGgzLjYyNXYtMy42MjVoLTMuNjI1di0yLjQxN2ExLjIwOCAxLjIwOCAwIDAxMS4yMDgtMS4yMDhoMi40MTdWNi4wNDJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZhY2Vib29rXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRmluZ2VycHJpbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjZmluZ2VycHJpbnRfc3ZnX19jbGlwMClcIiBmaWxsPVwiIzAwMFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjM3My4xNjRjLS42MTkuMTY0LS45MjguOTYtLjU5OCAxLjU2NC4yMDYuMzU2Ljc4NC40MzkgMy40NDQuNTIgMi41NTcuMDgzIDMuNDY0LjIyIDQuNTE2LjY4NyAxLjQ0My42MzEgMi4wODIuNDY2IDIuMDgyLS40OTQgMC0uODIzLS44MDQtMS4zNDQtMi45MjgtMS45Mi0xLjc3My0uNDk1LTUuMjE3LS42ODctNi41MTYtLjM1N3pNMTEuNTY4IDIuMDAyQzguNjIgMy43MDMgNS4wOTMgNy4zMjUgNS4yMzggOC41MDVjLjA0LjMzLjIwNi43NC4zOTEuODc4LjI2OS4yMi42Ni0uMDgyIDEuODU2LTEuNDI3IDEuNjctMS44NjYgMy4xNzYtMy4xMjggNC45MjktNC4xMTYuNjE4LS4zNTYgMS4yNTgtLjc2OCAxLjQwMi0uOTA1LjM3MS0uNDEyLjMxLTEuMjYyLS4xNDQtMS41OTItLjUxNi0uMzU2LS4yODktLjQxMS0yLjEwNC42NTl6TTI3LjYxMSAzLjI5MmMtLjc0Mi41NDgtLjQxMiAxLjQ1NC45NyAyLjY2MSAxLjU0NiAxLjM0NSAzLjI3OCAzLjU2NyA0LjQ1NCA1LjY4Ljg2NiAxLjU2NCAxLjM4MSAxLjg2NiAxLjg3NiAxLjA3LjIyNy0uMzU3LjIwNi0uNTc2LS4xMDMtMS4zNDQtMS4zODItMy40MDMtNi4xODYtOC44MDgtNy4xOTctOC4wNjd6TTE1LjUwNyA0LjkxYy0zLjExNCAxLjEyNi01Ljk4IDMuNDAzLTcuODc3IDYuMzExLTIuMTA0IDMuMTgzLTMuMjM4IDYuOTE1LTMuNzUzIDEyLjIxQzIuNzQzIDM1LjM5NSAzLjY3IDQ3LjM1OCA2LjY0IDU4LjhjMS4xNTUgNC40NzIgMS4zNCA0Ljg4NCAyLjAyIDQuNzc0LjMzLS4wNTUuNTc4LS4yNzQuNjItLjU3Ni4wNC0uMjc1LS4zMS0xLjgzOS0uNzY0LTMuNDU3LTIuNDc0LTguNzgtMy43MTEtMTkuMTUyLTMuNDY0LTI4LjcwMS4zMS0xMC41NjQgMS4zLTE0Ljg3MiA0LjQ3NS0xOS4wNyAyLjY0LTMuNTEyIDUuNzk0LTUuMjQgOS41ODktNS4yNCAzLjgxNCAwIDYuOTkgMS43MjggOS42MDkgNS4yMTMgMS43NTMgMi4zNiAyLjU3OCA0LjE0MyAzLjQwMiA3LjI5OC42NCAyLjUyNS43MjIgNS4wNDkuNDEzIDEyLjQ4NS0uMjY4IDYuMzY2LjM5MiAxMS40NDIgMi4yNDggMTcuMzQxLjc4MyAyLjQ0MiAxLjI1NyAzLjA3MyAxLjg1NSAyLjQxNS40MzQtLjQ2Ny4zOTItMS4yMDgtLjE4NS0yLjY5LS43NDItMS45NzUtMS43MzItNi4zMzgtMi4xMDMtOS4zMjgtLjI2OS0yLjE2OC0uMzEtMy41NjgtLjE2NS03LjYwMS4yNDctNy4wOC4xODUtOS44NzgtLjIwNy0xMS45MDgtMS4zODEtNi45MTUtNS4wOTMtMTIuMTgzLTEwLjEyNS0xNC40Ni0yLjI4OC0xLjAxNi02LjA2Mi0xLjIwOC04LjM1MS0uMzg0elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuMTg3IDkuMTM2Yy0yLjQxMi43OTYtNS43MzIgMy42NzctNS41ODggNC45MTIuMDQxLjMwMS4yMDYuNjg1LjM5Mi44MjMuMjY4LjIyLjY0LS4wMjggMS43NTMtMS4xMjUgMi4yMDYtMi4xOTUgNC44ODctMy4yNjYgNy4zNC0yLjkwOSAxLjAzMi4xNjUgMS4xNzYuMTEgMS4zODItLjM4NC4yOS0uNzEzLjI5LS43NjgtLjEwMy0xLjI2Mi0uMzkyLS41NDktMy41NDYtLjU3Ni01LjE3Ni0uMDU1ek0yMy4yODEgMTAuMzE2Yy0uMDgyLjA4Mi0uMTQ0LjQ2Ni0uMTQ0Ljc5NiAwIC40NjYuMjg4Ljg1IDEuMTU0IDEuNTA5IDIuMjkgMS43MjggNC41MTcgNS42NTIgNC45NSA4LjY0My4xODUgMS4yNjIuODA0IDEuNzI4IDEuMzYuOTg4LjM5Mi0uNDk0LjM5Mi0uNjA0LjA4My0xLjk0OC0uMzkyLTEuNzg0LTEuMTk2LTMuODk3LTIuMDgzLTUuNTQzLTEuNTI2LTIuNzE2LTQuNjYtNS4zNS01LjMyLTQuNDQ1ek0zLjE3NiAxMS40MTNjLS44ODcgMS42NzQtMS45NiA0Ljk5NC0yLjQzNCA3LjQzNi0uNjE4IDMuMjM4LS42MzkgNC4zMzUtLjA4MiA0LjcyLjUzNi4zODQgMS4yMzctLjUyMiAxLjIzNy0xLjYyIDAtMS40MjYgMS4wMzEtNS42MjQgMS45OC03LjkyOS43NDItMS44MzguODY2LTIuMzYuNy0yLjc5OS0uMzA4LS43NjgtLjkyNy0uNjg2LTEuNDAxLjE5MnpNMTYuMTA1IDEzLjc3M2MtMS42OS45MzMtMi41MzYgMS43MjktMy40ODUgMy4xMjgtMS43NzMgMi42ODktMi4zNzEgNS45LTIuNjE5IDEzLjkzOS0uMzMgMTEuNjYxIDEuNzMyIDIzLjg5OSA1Ljc3NCAzNC4yOTguOTA3IDIuMzA1IDEuMTU1IDIuNzQ0IDEuNTY3IDIuNzQ0IDEuMDEgMCAxLjAxLS43NDEtLjAyLTMuMzQ4LTIuNDU0LTYuMTczLTQuMzUxLTEzLjkzOS01LjIxNy0yMS4zNDctLjcyMi02LjAzNi0uNTk4LTE2Ljk4NC4yNDctMjEuMjY1LjU1Ny0yLjkwOCAyLjEyNC01LjE4NiA0LjIyNy02LjIgMS4zNC0uNjYgMy43MzMtLjU3NyA1LjE5Ny4xNjQgMi4yMjcgMS4xMjUgNC4wODMgNC4wODggNC4zOTIgNy4wMjQuMDYyLjcxMyAwIDMuNDAyLS4xNDQgNi4wMS0uMjA3IDMuNzU4LS4yMjcgNS40ODctLjAyIDguMjg1LjUxNSA3LjY1NiAyLjEyMyAxNC40NiA0Ljg4NiAyMC43MTcuOTI4IDIuMTEyIDEuMjc5IDIuNTI0IDEuODM1IDIuMjUuNjQtLjMzLjUxNi0xLjE1My0uNTM2LTMuNTY3LTMuNzExLTguNTA2LTUuMjE3LTE4LTQuNTE2LTI4LjI2Mi4zMy00LjYzNy4xNjUtNi4zOTMtLjgyNC05LjA4Mi0uNzY0LTIuMDMtMi4zOTMtNC4xMTYtNC4wODMtNS4xODYtMS4wMS0uNjU5LTEuNDg1LS43NjgtMy4zNDEtLjg1LTEuODk3LS4wODMtMi4zMS0uMDI4LTMuMzIuNTQ4ek0zNS4yIDE1LjIyN2MtLjE4Ni4yNDctLjI2OC42NTktLjIwNi45MDYuNzIyIDIuNDcgMS4xNzUgNS40MzMgMS4yNzggOC4zOTYuMTI0IDMuMjM4LjI2OCAzLjk3OS44MDUgMy45NzkuNTk4IDAgLjkwNy0uODUxLjkwNy0yLjU1Mi0uMDItNS4xMDQtMS4yNTgtMTEuMTY4LTIuMjQ4LTExLjE2OC0uMTAzIDAtLjM1LjE5Mi0uNTM2LjQ0ek04Ljk5IDE2LjM4Yy0xLjA1MS45MDUtMi4wNCA2LjY5NS0yLjE4NSAxMi43ODYtLjA2MiAxLjc4NCAwIDIuMTk1LjMxIDIuNDcuMjQ3LjIxOS40NTMuMjE5LjcgMCAuMjg5LS4yNDcuNDEzLTEuMDE2LjYxOS0zLjg0Mi4zMy00Ljc3NC42MTktNi44MDUgMS4yMTctOC43OC41OTgtMi4wMDMuNTk4LTIuMTk1LjEwMy0yLjU4LS40NzUtLjMyOS0uNDc1LS4zMjktLjc2My0uMDU0elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTguOTkyIDE3LjgzNGMtLjU1Ny43NC0uMjA2IDEuNTEuNzg0IDEuNzU2IDEuMTk1LjI3NCAyLjIyNyAxLjMxNyAyLjc0MiAyLjc0NC40MzMgMS4xOC40NTQgMS41MzYuMzMgNC4xOTgtLjEyNCAzLjAxOC0uMDIgMy42MjIuNzIyIDMuNjIyLjU3NyAwIC43ODMtLjgyMy45MjgtMy43Ni4xNDQtMy4wMTcuMDItMy45MjMtLjkyOC01LjkyNi0uNjgtMS4zNzItMS45MTgtMi40OTctMy4yNzktMi45MDgtLjc4NC0uMjItLjk0OS0uMTkyLTEuMy4yNzR6TTE1LjgxNiAxOC45MDRjLS44MjUuNzEzLTEuNjkgMi41MjQtMS45MzggNC4xMTYtLjMxIDEuOTQ4LS42OCA3LjMyNi0uNTk4IDguOTE3LjA2MiAxLjE4LjEyNCAxLjM3Mi41MzYgMS40NTUuODQ1LjE2NCAxLjA3Mi0uMzg1IDEuMDcyLTIuNjYyIDAtMS4xNTIuMTQ1LTMuNDMuMzEtNS4wNDkuMzA5LTMuMDczLjctNC4zOSAxLjUyNi01LjA3Ni41MzYtLjQxMS41NTYtMS41OTEuMDYxLTEuOTQ4LS4yODgtLjE5Mi0uNTM2LS4xMzctLjk2OS4yNDd6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xOC4yOSAyMS44OTVjLTEuMjM2LjY4Ni0xLjUwNSAyLjExMy0xLjY3IDkuNDk0LS4yNjggMTAuMzk5IDEuMjE3IDE5LjU5IDQuNjYgMjguODEgMS44NzcgNS4wNDkgMi42NCA2LjU4NSAzLjI4IDYuNTg1Ljk5IDAgLjk5LS43NC0uMDYyLTMuMDQ2LTIuMDgzLTQuNjM3LTMuOTgtMTAuNTYzLTQuOTUtMTUuNTAyLTEuMDkyLTUuNzA3LTEuMjU3LTcuNi0xLjIzNy0xNS4wNjQgMC03LjIxNi4xNjUtOS4xMzcuNzQzLTkuMjc0LjU1Ni0uMTM3Ljc2My43NC41MzYgMi41NTItLjI2OCAyLjM4Ny0uMjY4IDExLjE0LjAyIDEzLjg1Ni41OTkgNS42NTIgMS41ODggMTAuNDU0IDMuMTM1IDE1LjMzOCAxLjAzMSAzLjIzOCAyLjY2IDcuMzI2IDMuNjMgOSAuNTU2IDEuMDE1IDEuMTc1IDEuMTggMS40ODQuNDEyLjIyNy0uNTc3LjI0Ny0uNDk0LTEuNDIzLTQuMzA4LTIuOTktNi44MDUtNC44NjYtMTQuODcyLTUuNDAzLTIzLjI5NS0uMTg1LTMuMDE5LS4xODUtNC44NTcuMDQyLTguNjk5LjI4OC01LjU0Mi4yMjctNS45NTQtMS4xMzQtNi43MjItLjc4NC0uNDM5LTEuMDUyLS40MzktMS42NS0uMTM3ek0yOS44OCAyNS4wNzhjLS40MzMuNTc2LS42NiAzLjg5Ni0uNjE5IDkuMTkyLjA0MSA1LjQzMi4xNjUgNi4xNzMgMS4wMSA2LjE3M2guNTk5bC0uMDgzLTQuODAxYy0uMDQxLTIuODgyLjA0MS01LjkuMTg2LTcuNTE5LjI0Ny0yLjU1MS4yNDctMi43NDQtLjEwMy0zLjEtLjQ5NS0uNDY3LS42Mi0uNDQtLjk5LjA1NXpNLjM3MSAyNi4yMDNjLS40OTUuNjMtLjQ5NSAxMi40ODQgMCAxMy4xMTUuMzcxLjUyMi40MTMuNTIyLjkyOC4xNjUuMzcxLS4yNzQuMzkyLS42NTkuMzkyLTYuNzIyIDAtNi4wNjQtLjAyLTYuNDQ5LS4zOTItNi43MjMtLjUxNS0uMzU3LS41NTctLjM1Ny0uOTI4LjE2NXpNMzYuNDc4IDMwLjg5NWMtLjI2Ny4zMjktLjE2NCAxMC4zNzEuMTA0IDEwLjcyOC4zNy40OTQuOTQ4LjM4NCAxLjE5Ni0uMTkyLjMwOS0uNzk2LjI2OC05Ljk4OC0uMDQyLTEwLjQtLjI2OC0uMzU2LTEuMDMtLjQzOC0xLjI1OC0uMTM2elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjIuNzA0IDMyLjkyNWMtLjQxMyAxLjA3LjMwOSA5LjYzMSAxLjE1NCAxMy41ODIuMzEgMS40MjcuNjYgMS44NjYgMS4yMTcgMS41OTIuNDk1LS4yNDcuNTU3LS45MDYuMjQ4LTIuNTI1LS41MTYtMi42MzQtLjkyOC02LjM2NS0xLjA3My05LjUyLS4wODItMS42NzUtLjIyNy0zLjE4NC0uMzUtMy4zNzYtLjMxLS41MjEtLjkyOC0uMzg0LTEuMTk2LjI0N3pNNi44NDYgMzQuNDA3Yy0uMTg1LjI3NC0uMjA2IDEuMTI1LS4xMDMgMy4wNzMuMTY1IDMuMS44MjUgOS42MyAxLjEzNCAxMS4xMTMuMjQ4IDEuMTguOTA3IDEuNjE4IDEuNDAyLjk2LjI2OC0uMzg0LjI2OC0uNjg2LS4wNC0yLjg1NC0uNTM3LTMuODE0LS43MjMtNS43NjItLjg2Ny05LS4wODItMS42NzMtLjIyNy0zLjE4Mi0uMzUtMy4zNzQtLjI2OS0uNDQtLjg2Ny0uNDEyLTEuMTc2LjA4MnpNMTMuNTY5IDM2LjA4Yy0uMzkyLjQ5NS0uMzUgMS4zMTguMjA2IDYuNzIzLjcgNi43NSAxLjQ2NCA5LjMzIDIuNDU0IDguMzY5LjM3LS4zNTcuMzctLjQ2Ny0uMTY1LTMuNzA0LS4zMS0xLjgxMS0uNzAxLTUuMDIyLS44ODctNy4xMDctLjE4NS0yLjA1OC0uMzkyLTMuOTUxLS40NzQtNC4xNy0uMjQ4LS42MDQtLjc0My0uNjYtMS4xMzQtLjExek0uMjY4IDQyLjMwOWMtLjQ3NC43NjguMTY1IDYuMzM4IDEuMTE0IDkuNjg2LjcgMi41MjQgMS4wMyAzLjEyOCAxLjY1IDMuMTI4LjcyMSAwIC44NjUtMS4wMTUuMzUtMi4zODctLjc2My0xLjk0OC0xLjMtNC42NjUtMS41NDctNy42ODMtLjI0Ny0yLjg4MS0uMjY4LTIuOTYzLS43ODMtMy4wNDYtLjI4OS0uMDU1LS42NC4xMS0uNzg0LjMwMnpNMzAuMjkyIDQyLjk0Yy0uMDgyLjExLS4xNDQuNDY3LS4xNDQuODIzIDAgMS4yMzUgMS40ODUgNi42NCAyLjY0IDkuNTc2Ljk5IDIuNTUyIDEuMjU3IDMuMDE5IDEuNjcgMy4wMTkgMS4wMyAwIC45NjktLjY4Ni0uMjY4LTQuMDA2LS42NC0xLjczLTEuNTA2LTQuNTU1LTEuOTM5LTYuMjg0LS43LTIuODUzLS44MjUtMy4xNTUtMS4yOTktMy4yMzgtLjI2OC0uMDU0LS41NzcgMC0uNjYuMTF6TTI1LjA1NSA1MC42MjNjLS4xODYuNjMxLjIyNiAyLjE0IDEuNTA1IDUuNjI1IDEuMzIgMy42MjIgMi43NDIgNi43NSAzLjExNCA2Ljk0Mi40MTIuMjIuODY2LS4xMS45OS0uNjg2LjA4Mi0uMzMtLjIyOC0xLjI5LS45MDgtMi43NzEtLjk3LTIuMTQtMi4xMjQtNS4yNjktMy4wOTMtOC4yNi0uMzMtMS4wNy0uNDk1LTEuMjg5LS45NDktMS4yODktLjI4OCAwLS41NzcuMTkyLS42Ni40Mzl6TTguOTUgNTIuMTZjLS4zNzIuNDkzLS4zMy44NS42NiA0LjcxOSAxLjEzNCA0LjQ0NSAyLjgwNCA5LjQ5NCAzLjI3OCA5Ljg3OC40OTUuNDExIDEuMDcyLS4xMzcgMS4wNTItLjk2LS4wMi0uMzU3LS40NTQtMS45MjEtLjk5LTMuNDMtLjUzNi0xLjUzNy0xLjQwMi00LjUtMS45MzgtNi41ODYtLjc4NC0zLjEtMS4wNTItMy44NDEtMS4zODItMy44OTYtLjIyNy0uMDI3LS41MzYuMDgyLS42OC4yNzV6TTE2LjAyMyA1NC4xMDhjLS4xNDUuNzQuOTA3IDQuMzA4IDIuNjE4IDguODkgMS40MjMgMy44MTQgMi4xODYgNS4yMTMgMi43MDIgNC45MzkuNzQyLS4zODUuNjE4LTEuMDctLjg0Ni00LjgzLS44MDQtMi4wNTctMS44MTQtNC45MTEtMi4yNDctNi4zMzgtLjk5LTMuMjM4LTEuMDEtMy4yOTItMS42MDktMy4yOTItLjM1IDAtLjUzNi4xOTItLjYxOC42M3pcIiAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImZpbmdlcnByaW50X3N2Z19fY2xpcDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoMzh2NjNIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZpbmdlcnByaW50XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnSG9tZXBhZ2VPcHRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIuMDkgMS42NDNjLTEuMDI2LjEzLTEuODg3Ljk5Ni0yLjAzNCAyLjA1LS4wNzQuNDctLjA2OCAxLjcyOCAwIDIuMjI2QTIuNDc2IDIuNDc2IDAgMDAxLjQxIDcuNzc3bC4zNzQuMTgxSDI3LjIxNWwuMzc0LS4xODFhMi40NzYgMi40NzYgMCAwMDEuMzU0LTEuODU4Yy4wNjgtLjQ4Ny4wNjgtMS42NzcuMDA1LTIuMTkyYTIuNDA1IDIuNDA1IDAgMDAtMi4wOS0yLjA5Yy0uNDUzLS4wNTctMjQuMzEtLjA1Ny0yNC43NjkuMDA2ek0xLjgzIDExLjM1N2MtLjQ2LjEyNC0uNzQ4LjI5NC0xLjA5NC42NDUtLjU3Ny41NzItLjczNiAxLjExLS43MzYgMi40NyAwIC45MjMuMDc0IDEuNDIxLjI2IDEuODE4LjE4Ny4zOTYuNjE4Ljg2Ny45NyAxLjA2LjY0LjM0NS0uMjE2LjMyMiAxMy4yNy4zMjIgMTMuNDg2IDAgMTIuNjMuMDIzIDEzLjI3LS4zMjMuMzUyLS4xOTIuNzgyLS42NjMuOTctMS4wNi4xODYtLjM5Ni4yNi0uODk0LjI2LTEuODE3IDAtLjkyMy0uMDc0LTEuNDIyLS4yNi0xLjgxOC0uMTg4LS4zOTctLjYxOC0uODY3LS45Ny0xLjA2LS42NC0uMzQ1LjIyMi0uMzIyLTEzLjI5OC0uMzE3LTEwLjQ1NiAwLTEyLjM5My4wMTItMTIuNjQzLjA4ek0xLjY5OSAyMS4wNjVjLS40MTQuMTMtLjcwOC4zMjMtMS4wMzcuNjgtLjM0LjM2Mi0uNTI3Ljc2NC0uNjA2IDEuMjgtLjA2OC40OTItLjA3NCAxLjc1IDAgMi4yMjZhMi40MDMgMi40MDMgMCAwMDIuMDI4IDIuMDVjLjI1NS4wNCA0LjQxMi4wNTcgMTIuNjcuMDQ1bDEyLjI5MS0uMDE3LjMzNC0uMTI0YTIuNTA4IDIuNTA4IDAgMDAxLjQ1LTEuNDc5Yy4xMDItLjI2Ni4xMy0uNDgxLjE1My0xLjIyOS4wNTEtMS41NDYtLjA5Ni0yLjE3NS0uNjY4LTIuNzc1LS4zNC0uMzU3LS42MzQtLjU0NC0xLjA2NS0uNjc0LS4yODMtLjA4LTEuNDc4LS4wOS0xMi43NzItLjA4NS0xMS43NTkgMC0xMi40ODQuMDA1LTEyLjc3OC4xMDJ6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdIb21lcGFnZU9wdGlvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0xpbmtkbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIuOTU4IDMuNjI1YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN2gxNi45MTZ6bS0uNjA0IDE4LjczVjE1Ljk1YTMuOTQgMy45NCAwIDAwLTMuOTM5LTMuOTRjLTEuMDI3IDAtMi4yMjMuNjMtMi44MDMgMS41NzJWMTIuMjRIMTIuMjR2MTAuMTE0aDMuMzcydi01Ljk1N2MwLS45My43NDktMS42OTIgMS42OC0xLjY5MmExLjY5MSAxLjY5MSAwIDAxMS42OSAxLjY5MnY1Ljk1N2gzLjM3MnpNOC4zMTQgMTAuMzQyYTIuMDMgMi4wMyAwIDAwMi4wMy0yLjAzIDIuMDM3IDIuMDM3IDAgMDAtMi4wMy0yLjA0MkEyLjA0MiAyLjA0MiAwIDAwNi4yNyA4LjMxM2MwIDEuMTI0LjkxOSAyLjAzIDIuMDQyIDIuMDN6bTEuNjc5IDEyLjAxMVYxMi4yNEg2LjY0NnYxMC4xMTRoMy4zNDd6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xpbmtkblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01haWwocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI0LjE2NyA0LjgzM0g0LjgzM0EyLjQxMyAyLjQxMyAwIDAwMi40MyA3LjI1bC0uMDEyIDE0LjVhMi40MjQgMi40MjQgMCAwMDIuNDE2IDIuNDE3aDE5LjMzNGEyLjQyNCAyLjQyNCAwIDAwMi40MTYtMi40MTdWNy4yNWEyLjQyNCAyLjQyNCAwIDAwLTIuNDE2LTIuNDE3em0wIDE2LjkxN0g0LjgzM1Y5LjY2N2w5LjY2NyA2LjA0MSA5LjY2Ny02LjA0MVYyMS43NXpNMTQuNSAxMy4yOTJMNC44MzMgNy4yNWgxOS4zMzRMMTQuNSAxMy4yOTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01haWxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZWRpYShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkuMzUgMTAuMDRBNy40OSA3LjQ5IDAgMDAxMiA0QzkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDRBNS45OTQgNS45OTQgMCAwMDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZWRpYVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01ldGFEYXRhKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyIDM3LjMwN2wxMi41MTIgMjAuNzRjLjA1Ni0uMTUuMTE5LS4yOS4xODgtLjQyMSA1LjA0MS04LjM1OCAxMC4wODQtMTYuNzEzIDE1LjEyOC0yNS4wNjUuMTc5LS4yNzIuMjc2LS42NjIuMjY0LTEuMDY0LS4wMTEtMi40MTkgMC00LjgzNyAwLTcuMzEzLS4xMTcuMDg0LS4yMjIuMTUxLS4zMjMuMjMzLS44NDIuNjgxLTEuNzEzIDEuMjQ4LTIuNjUxIDEuNDMtLjIxOS4wMzItLjQwOC4yNjItLjQ5My41OTctLjgwMiAyLjM3Mi0yLjA1MyAzLjU5Mi0zLjY3NiAzLjU1LTEuNzAzLS4wNDEtMi45NjItMS40MTUtMy43LTMuOTctLjg4LTMuMDQ3LS4xOTItNi44MDIgMS41NDItOC42MTcgMS43NTUtMS44MzUgNC4wNTgtMS4yMyA1LjM4NCAxLjQxNi4yNDMuNDk1LjQzIDEuMDE4LjI5IDEuNzAxLS4wODMuNDY1LS4zMDMuODI2LS41ODQuOTU4LS4yODIuMTMyLS41ODQuMDE2LS44MDEtLjMwNi0uMjItLjMxNC0uMzk3LS43MTItLjYyNS0xLjAxLS43NjgtMS0xLjYxMi0xLjE5Mi0yLjQ5Mi0uNDY1LS45My43NzItMS4zNzUgMi4wNjUtMS4zMDYgMy43NzkuMDY2IDEuNTk3LjU5NyAyLjcwNiAxLjQ3NCAzLjMyLjkxNi42NDggMS45ODEuMTk4IDIuNi0xLjA5OC0uNzc0LS4yOTctMS40NzgtLjgzNy0yLjAwNS0xLjhhMTIuNTkgMTIuNTkgMCAwMS0uOTUzLTIuMzI0Yy0uMTk1LS42MjguMDUzLTEuMzk1LjQyMS0xLjcwNy4zODEtLjMyOC44NS0uMTI4IDEuMDg5LjQ2NS4zMzIuODguNjc2IDEuNzAyIDEuMjYyIDIuMTc0Ljg4NC42OTggMS43OTcuNjIgMi43MDcuMjg0IDEuNzU0LS42MzUgMy4xODgtMi4xOTMgNC40My00LjI1NSAxLjM3My0yLjI3MiAyLjM1OS00LjkxMyAyLjY2Ni04LjEzOC4xOS0xLjk4NS4wMjItMy44NzEtMS4wMy01LjE3NS0uODU0LTEuMDYtMS44NDItMS4xMS0yLjg1Mi0uNzk2LTEuMTg0LjM5Ny0yLjMgMS4yMTktMy4yNzIgMi40MDdhNS4wOSA1LjA5IDAgMDEtLjQzOC40NzljLS40LjQxNC0uOTI0LjIyNy0xLjE4Ni0uNDIyLS4yNjItLjY0OS0uMTY1LTEuNTI0LjIxOC0xLjk3OGExNS4yNjUgMTUuMjY1IDAgMDExLjY3Mi0xLjhjMS40MDMtMS4yMjUgMi44OTUtMS45NjQgNC41MTItMS43MzQgMi4zNzMuMzQ3IDQuMDc5IDMuMzQgNC4xOTEgNy4yOTIuMDk2IDMuMzcxLS42MzMgNi4yOTgtMS43NCA5LjAxNi0uNjYxIDEuNi0xLjQ1NSAzLjAzOC0yLjM1OSA0LjI3MS0uMTE1LjE5OC0uMTguNDYtLjE4Mi43MzUtLjAxMSAzLjIxNS0uMDExIDYuNDMxIDAgOS42NS4wMTQuNjYtLjE0NSAxLjMtLjQzNSAxLjc1NS01LjQxMyA4Ljk1LTEwLjgyMiAxNy45MDMtMTYuMjI4IDI2Ljg2MS0uNTYuOTMtMS4wMDEuOTMtMS41NjIgMC00LjQ4Mi03LjQyMy04Ljk2Mi0xNC44NTUtMTMuNDQtMjIuMjk1LS41NzMtLjk0OS0uNTcyLTEuNjcyLjAwNi0yLjYzMiA1LjM5Ni04Ljk0IDEwLjc5Mi0xNy44ODggMTYuMTg5LTI2Ljg0My4yNy0uNDg2LjY1NC0uNzU1IDEuMDUzLS43MzcgMi43NDcuMDIyIDUuNDk0LjAyMiA4LjI0MiAwIC40LS4wMjIuNzg2LjI0MyAxLjA1OS43MjggMS4zMjggMi4yMzcgMi42NjUgNC40NTIgNC4wMDIgNi42ODIuMjkxLjQ2MS4zNTYgMS4xOTIuMTU3IDEuNzcyLS4xOTkuNTgtLjYxLjg2My0uOTk5LjY4M2ExLjU2IDEuNTYgMCAwMS0uNDg0LS41NDEgNzcyLjEwMyA3NzIuMTAzIDAgMDEtMy42MDItNS45NDhjLS4xNS0uMjc1LS4zNjctLjQyNC0uNTktLjQwNC0yLjQ0NiAwLTQuODkgMC03LjMzNi4wMi0uMTkuMDEtLjM3Mi4xMjktLjUxNS4zMzgtNS4wOSA4LjQxMi0xMC4xNzQgMTYuODMtMTUuMjU0IDI1LjI1NWwtLjE0NC4yNjd6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjU3NCAzMS4yNjVWMzguNjgzYy0uMDA3LjgxNS0uMzkyIDEuNDgyLS44ODEgMS41MjctLjQ5LjA0Ni0uOTE3LS41NDYtLjk3OC0xLjM1NGE1LjIxMiA1LjIxMiAwIDAxLS4wMTItLjQzMnYtOC40MDhjMC0xLjI2OS4zNTctMS44NjUgMS4xMTItMS44NjdoNS4xMzFjLjQyIDAgLjc1NS4yNDcuOTMyLjkxLjE2My41OTYuMTM5IDEuMjIxLS4xNDkgMS42NTItLjIwNy4zMDUtLjQ2OC40OS0uNzQ0LjUyOS0xLjMxMy4wNTItMi42MjYuMDIyLTMuOTQuMDI1aC0uNDcxek0xOS4xMzYgNDMuNzc5di02Ljk0MmE0LjUyNCA0LjUyNCAwIDAxLjEyNS0xLjEzNWMuMTgzLS42MzguNjEtLjk3NSAxLjAyNS0uODA5LjQxNy4xNDYuNzE4Ljc1Mi43MjUgMS40Ni4wMTcuOTI3LjAwOCAxLjg1NC4wMDggMi43ODF2NS44NzRjMCAxLjMwOC0uMzUyIDEuOTAxLTEuMTMxIDEuOTA0aC01LjE0Yy0uMzg0LjAzOS0uNzQzLS4zMTYtLjkwNS0uODk1LS4xNTgtLjUxLS4xMjQtMS4xMjYuMDg3LTEuNTguMjAxLS40NTkuNTMyLS43MS44NzMtLjY2M2gzLjg3M2wuNDYuMDA1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01ldGFEYXRhXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnT3BlbnNlYUxvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNiAyNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE4Ljg5NSAxNC42ODFjLS4wNDUtLjA0NS0uMTEyLS4wNDUtLjE4LS4wMjJsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwIC4zMS4zMSAwIDAxLjA4OS0uMDY3Yy4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjUtLjM1OSAwLS42MjcuMjkxLS42MjcuNjUgMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNGE1LjE2IDUuMTYgMCAwMC40NDgtLjk0MWMuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1Ny4wNDQtLjAyMi4wMjItLjA5LS4wMjMtLjExMnptLTkuOTk3LS40OTNoMi41NTVjLjA0NSAwIC4wNjgtLjAyMy4wNjgtLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA2N2wtMS4yNTUtLjU4M2MtLjAyMy0uMDIyLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNjcuMDIyLjExMi4wNjcuMTEyek0xMyAwQzUuODI4IDAgMCA1LjgyOCAwIDEzczUuODI4IDEzIDEzIDEzIDEzLTUuODI4IDEzLTEzUzIwLjE3MiAwIDEzIDB6bS0uMDQ1IDIyLjQ1OWMtNS4xNzcgMC05LjM2OS00LjE5Mi05LjM2OS05LjM5MiAwLTUuMTc3IDQuMTkyLTkuMzkxIDkuMzctOS4zOTEgNS4xNzcgMCA5LjM2OCA0LjIxNCA5LjM2OCA5LjM5MS0uMDIyIDUuMi00LjIxNCA5LjM5Mi05LjM2OSA5LjM5MnptNS43Ni03LjhsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwIC4zMS4zMSAwIDAxLjA4OS0uMDY3Yy4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjUtLjM1OSAwLS42MjcuMjkxLS42MjcuNjUgMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNGE1LjE2IDUuMTYgMCAwMC40NDgtLjk0MWMuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1NyAwLS4wNDUtLjAyMy0uMTEyLS4wNjgtLjEzNCAwIDAtLjA2Ny0uMDIzLS4xMzUgMHptLTkuODE3LS40NzFoMi41NTVjLjA0NSAwIC4wNjgtLjAyMy4wNjgtLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA2N2wtMS4yNTUtLjU4M2MtLjAyMy0uMDIyLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNjcuMDIyLjExMi4wNjcuMTEyelwiXG4gICAgICAgIGZpbGw9XCIjMzI5MUU5XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjQ3NiAxMS4yOTZsLTEuMjU1LS41ODJjLS4wMjMtLjAyMy0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDQ0LjAyMi4wODkuMDY3LjA4OWgyLjU1NmMuMDQ0IDAgLjA2Ny0uMDIzLjA2Ny0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDQ0em03LjQxOSAzLjM4NWMtLjA0NS0uMDQ1LS4xMTItLjA0NS0uMTgtLjAyMmwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDBjLjAyMi0uMDIyLjA0NC0uMDQ0LjA4OS0uMDY3LjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NXMtLjYyNy4yOTEtLjYyNy42NWMwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0LjE3OS0uMjkxLjMzNi0uNjI3LjQ0OC0uOTQxLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcuMDQ0LS4wMjIuMDIyLS4wOS0uMDIzLS4xMTJ6XCJcbiAgICAgICAgZmlsbD1cIiMzMjkxRTlcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdPcGVuc2VhTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1FyQ29kZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQ3IDQ3XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNxci1jb2RlX3N2Z19fY2xpcDApXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01Ljg3NSAyNC41NDJoNC42Njd2NC42NjZINS44NzV2LTQuNjY2em0xOC42NjctMTRoNC42NjZ2OS4zMzNoLTQuNjY2di05LjMzM3ptLTQuNjY3IDE0aDkuMzMzdjkuMzMzaC00LjY2NnYtNC42NjdoLTQuNjY3di00LjY2NnptMTQgMGg0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoNC42Njd2NC42NjZoLTQuNjY3djQuNjY3aDQuNjY3djkuMzMzaC00LjY2N3Y0LjY2N2gtNC42NjZ2LTQuNjY3aC05LjMzNHY0LjY2N2gtNC42NjZ2LTkuMzMzaDkuMzMzdi00LjY2N2g0LjY2N3YtNC42NjdoLTQuNjY3di00LjY2NnptOS4zMzMgMTguNjY2di05LjMzM2gtNC42NjZ2OS4zMzNoNC42NjZ6TTMzLjg3NSA1Ljg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2ek01Ljg3NSA1Ljg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2ek01Ljg3NSAzMy44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJxci1jb2RlX3N2Z19fY2xpcDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoNDd2NDdIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1FyQ29kZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1JhcmlibGVMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMC44IDBINS4yQTUuMiA1LjIgMCAwMDAgNS4ydjE1LjZBNS4yIDUuMiAwIDAwNS4yIDI2aDE1LjZhNS4yIDUuMiAwIDAwNS4yLTUuMlY1LjJBNS4yIDUuMiAwIDAwMjAuOCAwelwiXG4gICAgICAgIGZpbGw9XCIjRkVEQTAzXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3Ljk0IDEyLjkwNWMuODItLjIxMyAxLjU0OC0uODI2IDEuNTQ4LTIuMDU3IDAtMi4wNS0xLjc0MS0yLjUyOC0zLjk3Mi0yLjUyOEg2LjYzdjkuMjM0aDMuNzRWMTQuNDJoNC40MzdjLjY4MyAwIDEuMDgzLjI3MSAxLjA4My45NDJ2Mi4xOTJoMy43NHYtMi4zMDhjMC0xLjI1OC0uNzEtMi4wNTEtMS42OS0yLjM0MXptLTMuMDY5LS45NzRIMTAuMzd2LS45MDNoNC41MDFjLjQ5IDAgLjc4Ny4wNjUuNzg3LjQ1MnMtLjI5Ny40NTEtLjc4Ny40NTF6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdSYXJpYmxlTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NhdmluZ3NQaWcocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjMxMS4wNzFjLTMuNTgxLjgyMS01LjkzNyA3LjIxMi00Ljc2NCAxMi45MjUuMTI3LjU5LjIyMiAxLjEwNy4yMjIgMS4xNzggMCAuMDcyLS4zNDkuMzQtLjc2MS42MjUtLjk3Mi42MjUtMi42MyAyLjA4OS0zLjI4NiAyLjg5MmwtLjUwNy42MjUtLjUxNy0uMzc1Yy0uOTcyLS42OTYtMi4zMTQtLjc4NS0zLjIwMi0uMjE0LS4zOC4yNS0xLjIzNiAxLjIzMi0xLjIzNiAxLjQyOCAwIC4wNzIuNDIzIDEuMDkuOTQgMi4yNWwuOTMgMi4xMDYtLjQxMiAxLjA4OWMtLjU0OSAxLjQyOC0xLjE4MyAzLjY3Ny0xLjQyNiA1LjA3bC0uMTkgMS4xMDdoLS40ODZjLS43MTggMC0xLjQ4LjQ0Ni0xLjg4IDEuMTA3LS43MDggMS4xNzgtLjY5OCAxLjAxNy0uNzMgNy45NDQtLjAyIDMuOTEuMDExIDYuNTUyLjA3NCA2Ljk2Mi4xNDguOTEuNjk4IDIgMS4yMTUgMi4zOTIuMzcuMjg2LjcwOC4zNCAyLjI3Mi4zNGgxLjg0OWwuOTUgMS42NzhjLjUyOS45MSAxLjMzMiAyLjEyNCAxLjc4NiAyLjY5NWwuODEzIDEuMDE4djIuOTgxYzAgMi43MzIuMDIxIDMuMDE3LjI0MyAzLjY2LjQxMiAxLjIzMi43MDggMS4zNzUgMi43MzcgMS4zMjEgMS41OTUtLjA1MyAxLjc4NS0uMDkgMi4wNi0uNDI4LjQzMy0uNTU0LjY3Ni0xLjM1Ny43NC0yLjVsLjA2My0xIC4zMjcuMDljMS40MDUuNDEgMy4xOS41MzUgNC40OS4zMzkuNzYtLjEyNSAxLjQ0OC0uMjY4IDEuNTMyLS4zMjEuMTA2LS4wNzIuMTU4LjE3OC4xOSAxLjA3LjA0MiAxLjI1LjIyMiAxLjgyMi43NiAyLjUuMjY1LjM0LjQzNC4zNzUgMi4xMDMuMzc1IDEuNzMzIDAgMS44MzgtLjAxOCAyLjE2Ni0uNDEuNjEzLS43NS42OTctMS4yMzIuNzYtNC40NDZsLjA1My0yLjg5Mi43OTMtLjkyOGMxLjc1My0yLjA4OSAzLjUyOC01LjUxNyA0LjQ0Ny04LjYwNSAxLjE3My0zLjg5MiAxLjYzOC04LjgwMSAxLjIxNS0xMi43NjRsLS4xMzctMS4zMDMuNTA3LS40MjljLjU3LS41IDEuMjI2LS43MTQgMS42MjctLjU1My40MDIuMTc4LjMxNy4zNzUtLjE4LjM5Mi0xLjE5My4wNTQtMS4yNTcgMi43MTQtLjA3MyAzLjMwMy4zNy4xOTcuNDU0LjE3OS43MDctLjEyNS4xNTktLjE5Ni4zNi0uNjA3LjQ0NC0uOTI4LjE5LS42NzguMi0uNjc4Ljc2LS4xOTcuMzgxLjMyMi40NDQuMzQuNTgyLjEwOC4yNDMtLjQxMS4wNzQtLjk0Ny0uNDQ0LTEuMzU3LS4yNjQtLjIxNC0uNTE3LS4zNzUtLjU4LS4zNzUtLjA1NCAwLS4xMDctLjA5LS4xMDctLjE5NiAwLS41LS4zOC0xLjQ0Ny0uNjY1LTEuNzE0LS40NDQtLjM3NS0xLjM3NC0uMjE1LTIuMTQ1LjM3NS0uMzI3LjI1LS42MTIuNDY0LS42MjMuNDY0LS4wMjEgMC0uMDc0LS4yNjgtLjExNi0uNTktLjE0OC0xLjE0Mi0uODk4LTMuNzg0LTEuNTY0LTUuNDgtMS42Ny00LjIzLTQuMjQ3LTcuNjc2LTcuMTQyLTkuNTY5LS41NDktLjM1Ny0xLjAxNC0uNjYtMS4wMzUtLjY3OC0uMDEtLjAzNi4wNzQtLjUxOC4xOS0xLjEwNyAxLjAzNi01LjAzNC0uNjU1LTEwLjc2NS0zLjY2Ni0xMi40NzktLjgzNC0uNDY0LTEuODQ5LS42MjQtMi42NzMtLjQ0NnptMS43OTYgMi42MDdjMS4zMzIuNSAyLjQxIDIuMDM1IDMuMDMzIDQuMjg0LjI2NC45NDYuMjk1IDEuMjUuMjk1IDIuOTI4IDAgMS43NS0uMDIgMS45NDYtLjM0OCAzLjA3LTEuNjQ4IDUuNzEzLTYuMzgxIDUuNzEzLTcuOTc3IDAtLjMxNy0xLjEwNi0uMzM4LTEuMzM5LS4zMzgtMy4wNyAwLTEuNjc4LjAzMi0xLjk4Mi4yOTYtMi45MjguNjAyLTIuMTc4IDEuNjI3LTMuNjc3IDIuOTA1LTQuMjMuODg4LS4zOTQgMS4yMjYtLjQxMiAyLjEzNC0uMDU0em0tNC4zNTIgMTUuMzdjLjAyIDAtLjM0OS4yMzItLjgxNC40ODItMS44NyAxLjAxOC0yLjQ5MyAxLjgyMS0yLjIxOCAyLjg1Ny4wNjMuMjMyLjI1My41MzUuNDAxLjY0Mi4yNDMuMTYxLjQxMi4xMDcgMS4xODMtLjQ2NCAyLjc3OS0yLjAxNyA2LjE3LTIuMjMxIDguOTYtLjU3MS40OTYuMzAzIDEuMTQuNzMyIDEuNDE1Ljk4Mi42MjMuNTE3Ljk4Mi40ODIgMS4yNjgtLjE0My40ODYtMS4xMDctLjIzMy0yLjA4OS0yLjMyNS0zLjIzMS0uNjAyLS4zMjItMS4wNzctLjYyNS0xLjA3Ny0uNjc5LjAxLS4wNTMuMjQzLS40NDYuNTI4LS44NzRsLjUxOC0uNzg2IDEuMDU2LjY0M2M0LjA0NyAyLjQxIDcuMjU4IDcuOTk4IDguMzA0IDE0LjQ2LjUyOCAzLjIzMS40NjUgNy4yMy0uMTY5IDEwLjQ5Ny0uODQ1IDQuMzM4LTIuNjIgOC4xNTktNS4wMjkgMTAuODU0bC0xLjEzIDEuMjY4LS4wMSAzLjI0OS0uMDExIDMuMjY3LTEuMzk1LjA1My0xLjQwNS4wNTR2LTIuMzM5YzAtMS4yNjctLjAzMi0yLjMyLS4wNzQtMi4zMi0uMDUzIDAtLjM0OS4xMjQtLjY2Ni4yNjctLjg4Ny40MS0yLjg1Mi44MDMtMy45NC44MDMtMS4xMyAwLTIuNzM2LS4zNzQtMy45Mi0uODkyYTI4LjkzIDI4LjkzIDAgMDAtLjg2Ni0uMzU3Yy0uMDIxIDAtLjA1MyAxLjAxNy0uMDYzIDIuMjY3bC0uMDMyIDIuMjg1LTEuNDA1LjA1NC0xLjQwNS4wNTMuMDIxLTMuNDEuMDEtMy40MS0uODU1LS45ODFjLTEuMDM2LTEuMjE0LTIuMTI0LTIuODkyLTIuODc0LTQuNDQ1bC0uNTUtMS4xNkg0LjA2NGMtMi4wMTcgMC0yLjEyMy0uMDE5LTIuMzU2LS4zOTNsLS4yNDMtLjM3NVY0MC4yMmMwLTcuMzkxLS4xMzctNi44MiAxLjU5Ni02Ljk0NWwxLjE4My0uMDkuMjQzLTEuNTdjLjQzMy0yLjczMiAxLjExLTQuOTk5IDIuMzE0LTcuNzMuMTQ3LS4zNC4xMTYtLjQ2NC0uNjI0LTIuMTQyLS40NTQtMS0uNzUtMS44NC0uNjk3LTEuOTI4LjE4LS4zMDQgMS4yNzguMTA3IDIuMDYuNzY3bC43OTIuNjYuNzkzLS45OTljLjk3Mi0xLjIxNCAyLjQ0LTIuNTUzIDMuNjQ1LTMuMzJsLjg5OC0uNTkuNTI4Ljg0Yy4yODUuNDY0LjUzOS44NTYuNTYuODc0em0yMS4wODcgMTQuMjY0Yy4xMjcuMDkuMTM3LjE3OS4wNDIuNTM2LS4xMjcuNDQ2LS4xOC41LS40NDQuMzIxLS4xNjktLjEwNy0uMjMyLS42MjUtLjA5NS0uODM5LjA4NS0uMTYuMjc1LS4xNi40OTctLjAxOHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04LjU3NSAzMC4wMWMtLjEzOC4wNTMtLjM4LjMyLS41Ni42MDYtLjM2LjYyNS0uNDM0IDEuNjA3LS4xNyAyLjQ2NC4yODYuOTI4IDEuMjA1IDEuMjE0IDEuNzY1LjUzNSAxLjAzNS0xLjI1LjI0My0zLjk5OS0xLjAzNS0zLjYwNnpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NhdmluZ3NQaWdcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTbWFydENvbnRyYWN0xLBjb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2NFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMuMDIzIDEuMzY4QzEuODY0IDIuMDg4LjMzMyA1LjAyNS4wNyA3LjEzYy0uMzM2IDIuMzgyLjU2MSA0Ljk4NiAyLjA1NiA2LjE1LjcxLjU1MyAyLjEzLjgzIDQuMTEuODNoMi45OXYyLjQ5M2MwIDEuMzg1LjE4NyAyLjQ5My4zNzQgMi40OTMuNDg1IDAgLjQ4NS0xMS42MzQgMC0xMy41MTctLjE4Ny0uNzc2LS42NzMtMS44ODQtMS4xMjEtMi41NDlMNy43MyAxLjkyMmgxMy4xMTdjMTEuNjk2IDAgMTMuMjI4LjExMSAxNC4yLjk0MiAyLjAxOCAxLjc3MyAyLjIwNSAzLjIxMyAyLjIwNSAxNy4yODUgMCA4LjE0NC4xNSAxMi43OTcuMzczIDEyLjc5Ny4yMjQgMCAuMzc0LTQuNTk4LjM3NC0xMi43NDIgMC0xMy44NS0uMTUtMTUuMTI0LTIuMDU1LTE3LjcyOGwtMS4wMS0xLjM4NUwxOS4zOS45ODFjLTguNTU3LS4wNTYtMTUuOTE5LjExLTE2LjM2Ny4zODd6bTMuOTYgMS4zODVjMS40OTYgMS4xNjQgMi4yNDMgMy40OSAyLjI0MyA3LjIwMnYzLjA0N0g3LjU0NGMtMS42NDQgMC0xLjY0NCAwLTEuMzA4LTEuNDQuMjI1LS43NzYuMjYyLTEuOTk0LjE1LTIuNzctLjIyNC0xLjM4NS0yLjI0Mi0zLjM4LTIuNjktMi42Ni0uMTUuMjIyLS4wMzguNS4yNi42NjYuNzg2LjM4NyAxLjkwNyAyLjIxNiAxLjkwNyAzLjE1NyAwIC40NDQtLjMzNyAxLjMzLS43ODUgMS45OTUtLjk3MiAxLjQ0LTIuMzkyIDEuMDUyLTMuNTg3LS45NDJDLjQ4IDkuNC40MDcgOC4wMTYgMS4xOSA1LjU3OCAyLjIzOSAyLjI1NiA0Ljc4IDEuMDM3IDYuOTg1IDIuNzU0elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjQ0NyAxMS44OTRjMCAuMzMzIDIuMjQyLjU1NCA1Ljk0Mi41NTQgMy41ODcgMCA2LjA1NC0uMjIxIDYuMjAzLS41NTQuMTUtLjM4Ny0xLjk0My0uNTU0LTUuOTQyLS41NTQtMy44ODYgMC02LjIwMy4yMjItNi4yMDMuNTU0ek0xMi45NjMgMTYuODhjMCAuMzMzIDEuMzA4LjU1NCAzLjE3Ni41NTQgMS44NjkgMCAzLjE3Ny0uMjIxIDMuMTc3LS41NTQgMC0uMzMyLTEuMzA4LS41NTQtMy4xNzctLjU1NC0xLjg2OCAwLTMuMTc2LjIyMi0zLjE3Ni41NTR6TTIwLjgxIDE2Ljg4YzAgLjMzMyAxLjEyMS41NTQgMi42MTYuNTU0czIuNjE2LS4yMjEgMi42MTYtLjU1NGMwLS4zMzItMS4xMjEtLjU1NC0yLjYxNi0uNTU0cy0yLjYxNi4yMjItMi42MTYuNTU0ek0zMS4yNzQgMTYuODhjMCAuMjc3LjY3Mi41NTQgMS40OTQuNTU0czEuNDk0LS4yNzcgMS40OTQtLjU1NGMwLS4zMzItLjY3Mi0uNTU0LTEuNDk0LS41NTRzLTEuNDk0LjIyMi0xLjQ5NC41NTR6TTkuNTI1IDIxLjY0NWMtLjE4Ny4yMjEtLjMgNy40MjMtLjMgMTYuMDEgMCAxNC4zNDkuMDM4IDE1LjY3OC42NzMgMTYuNTEuNTYxLjc3NSAxLjg2OS45NDEgOC4xNDcgMS4wNTJsNy40MzYuMTY2LjExMiA0LjI2NmMuMDc1IDIuMzgyLjIyNSA0LjMyMS4zMzcgNC4zMjEuMTUgMCAuNzQ3LS42NjUgMS4zMDgtMS40OTZsMS4wNDYtMS40OTYgMS4wNDYgMS40OTZjLjU2LjgzMSAxLjE1OSAxLjQ5NiAxLjMwOCAxLjQ5Ni4xNSAwIC4yNjItMS45OTQuMjYyLTQuNDMydi00LjQzMmgyLjk1MmM0LjExIDAgNC4xNDgtLjA1NSA0LjE0OC0xMC45MTQgMC00Ljk4Ni0uMTUtOC41MzEtLjM3NC04Ljc1My0uMjI0LS4yMjEtLjM3MyAxLjI3NC0uMzczIDQuMXY0LjQ4N0gzNS41N2MtLjkzNCAwLTEuNjgyLjIyMi0xLjY4Mi41NTQgMCAuMjc3Ljc0OC41NTQgMS42ODIuNTU0aDEuNjgydjMuNTQ2YzAgNS4zMTggMCA1LjMxOC0zLjQwMSA1LjMxOEgzMC45di0yLjE2YzAtMS42MDcuMjI0LTIuNDM4Ljc0Ny0yLjk5Mi42NzMtLjcyLjc4NS0xLjI3NC42NzMtNC41OThsLS4xMTItMy43MTItMi4wNTUtMS42NjItMi4wNTYtMS42NjItMS44NjggMS42NjItMS44NjkgMS42MDYtLjExMiAzLjc2OGMtLjExMiAzLjMyNCAwIDMuODc4LjY3MyA0LjU5OC41MjMuNTU0Ljc0NyAxLjM4NS43NDcgMi45OTJ2Mi4xNmgtNy42MjNjLTguNzA3IDAtOC4wNzIuMzg4LTguMDcyLTUuMzE4di0zLjU0Nmg2LjM1M2MzLjk5OCAwIDYuMzUzLS4yMjEgNi4zNTMtLjU1NCAwLS4zMzItMi4zNTUtLjU1NC02LjM1My0uNTU0SDkuOTczbC0uMDc1LTExLjQxMmMtLjA3NC02LjI2LS4yMjQtMTEuMTkxLS4zNzMtMTAuOTd6bTIwLjQ3OCAxOC4yODFjMS42NDQgMS40NCAxLjY0NCAxLjQ0IDEuNjQ0IDQuNTQzdjMuMTU4bC0xLjcxOSAxLjMzLTEuNzE5IDEuMzg1LTEuNjQ0LTEuMzMtMS42NDQtMS4zODVWNDQuNDdjMC0zLjEwMiAwLTMuMTU3IDEuNjA3LTQuNTQzLjg2LS43NzUgMS42MDctMS40NCAxLjY4MS0xLjQ0LjA3NSAwIC44Ni42NjUgMS43OTQgMS40NHptLS44MjIgMTEuMDI1bC45NzEtLjk0MlY2MS45MmwtLjkzNC0xLjI3NC0uOTM0LTEuMjc0LS45MzQgMS4yNzQtLjkzNCAxLjI3NHYtMTEuOGwuODk2LjgzMWMuODYuODMxIDEuMDEuODMxIDEuODY5IDB6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuOTEgNDEuODFjMCAuMjc3LjMzNy43NzYuNzQ3IDEuMTA4LjQ0OS4zMzMuNzQ4IDEuMTYzLjc0OCAxLjk0IDAgLjc3NS4xODYgMS4zODQuMzczIDEuMzg0Ljc0NyAwIC4zNzQtMy4yNjgtLjQ0OC00LjEtLjk3MS0uOTk3LTEuNDItMS4xMDgtMS40Mi0uMzMyek0xNC4wODQgMjEuODY2YzAgLjI3Ny42NzIuNTU0IDEuNTMyLjU1NC44OTYgMCAxLjQyLS4yMjEgMS4yNy0uNTU0LS4xMTItLjMzMi0uODIyLS41NTQtMS41MzItLjU1NC0uNzEgMC0xLjI3LjIyMi0xLjI3LjU1NHpNMTguNzU1IDIxLjg2NmMtLjE1LjM4OCAyLjUwNC41NTQgNy42MjMuNTU0IDUuMDA4IDAgNy44ODUtLjIyMSA3Ljg4NS0uNTU0IDAtLjMzMi0yLjgwMy0uNTU0LTcuNjIzLS41NTQtNC43MDkgMC03LjczNi4yMjItNy44ODUuNTU0ek0xMi43NzYgMjcuNDA2Yy4xNS4zMzMgMi44MDMuNTU0IDYuNzI2LjU1NCAzLjkyNCAwIDYuNTc3LS4yMjEgNi43MjctLjU1NC4xNS0uMzg4LTIuMTY4LS41NTQtNi43MjctLjU1NHMtNi44NzUuMTY2LTYuNzI2LjU1NHpNMjcuOTEgMjcuNDA2YzAgLjMzMyAxLjMwOC41NTQgMy4xNzcuNTU0IDEuODY4IDAgMy4xNzYtLjIyMSAzLjE3Ni0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc2LS41NTQtMS44NjkgMC0zLjE3Ny4yMjItMy4xNzcuNTU0ek0xMi45NjMgMzIuMzkyYzAgLjMzMyAzLjI1LjU1NCA4Ljk2OC41NTRzOC45NjktLjIyMSA4Ljk2OS0uNTU0YzAtLjMzMi0zLjI1MS0uNTU0LTguOTY5LS41NTQtNS43MTcgMC04Ljk2OC4yMjItOC45NjguNTU0elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU21hcnRDb250cmFjdMSwY29uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuMTQgNy4yNWMtLjkzMS40MjMtMS45MzQuNy0yLjk3My44MzRhNS4xOTQgNS4xOTQgMCAwMDIuMjcxLTIuODc2IDEwLjQ0IDEwLjQ0IDAgMDEtMy4yODYgMS4yNjljLS45NTUtMS4wNC0yLjI5Ni0xLjY0NC0zLjgxOS0xLjY0NC0yLjg0IDAtNS4xNiAyLjMyLTUuMTYgNS4xODQgMCAuNDExLjA1LjgxLjEzNCAxLjE4NEExNC43MzUgMTQuNzM1IDAgMDEzLjYyNSA1Ljc4OGE1LjEyOCA1LjEyOCAwIDAwLS43IDIuNTk4YzAgMS44LjkwNSAzLjM5NSAyLjMwNyA0LjMwMi0uODU4IDAtMS42NTUtLjI0Mi0yLjM1Ni0uNjA1di4wMzdhNS4xODggNS4xODggMCAwMDQuMTU3IDUuMDg3IDUuMSA1LjEgMCAwMS0yLjMzMy4wODQgNS4xNzIgNS4xNzIgMCAwMDQuODM0IDMuNjAxIDEwLjI5NiAxMC4yOTYgMCAwMS02LjQ0IDIuMjI0Yy0uNDExIDAtLjgyMi0uMDI1LTEuMjMzLS4wNzNhMTQuNjc1IDE0LjY3NSAwIDAwNy45NSAyLjMzMmM5LjUyMiAwIDE0Ljc1NC03LjkwMiAxNC43NTQtMTQuNzU0IDAtLjIzIDAtLjQ0Ny0uMDEyLS42NzZBMTAuMzU5IDEwLjM1OSAwIDAwMjcuMTQgNy4yNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVHdpdHRlclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1ZlY3Rvcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI4IDI4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMy45ODggOS4xMzhoLTEuNzEzdi0yLjYxQzIyLjI3NSAyLjkyMyAxOC40MzcgMCAxMy43MDggMCA4Ljk3NyAwIDUuMTQgMi45MjQgNS4xNCA2LjUyN3YyLjYxMUgzLjQyN0MxLjU0MiA5LjEzOCAwIDEwLjMxMyAwIDExLjc1djEzLjA1NWMwIDEuNDM2IDEuNTQyIDIuNjExIDMuNDI3IDIuNjExaDIwLjU2MWMxLjg4NSAwIDMuNDI3LTEuMTc1IDMuNDI3LTIuNjExVjExLjc0OWMwLTEuNDM2LTEuNTQyLTIuNjEtMy40MjctMi42MXptLTE1LjQyLTIuNjFjMC0yLjE2OCAyLjI5NS0zLjkxNyA1LjE0LTMuOTE3IDIuODQ0IDAgNS4xNCAxLjc1IDUuMTQgMy45MTZ2Mi42MTFIOC41Njh2LTIuNjF6bTE1LjQyIDE4LjI3NkgzLjQyN1YxMS43NDloMjAuNTYxdjEzLjA1NXptLTEwLjI4LTMuOTE2YzEuODg0IDAgMy40MjYtMS4xNzUgMy40MjYtMi42MTEgMC0xLjQzNi0xLjU0Mi0yLjYxMS0zLjQyNy0yLjYxMS0xLjg4NCAwLTMuNDI2IDEuMTc1LTMuNDI2IDIuNjEgMCAxLjQzNyAxLjU0MiAyLjYxMiAzLjQyNiAyLjYxMnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVmVjdG9yXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnWW91dHViZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIuMDgzIDE4LjEyNWw2LjI3Mi0zLjYyNS02LjI3Mi0zLjYyNXY3LjI1em0xMy45NjktOS40NjFjLjE1Ny41NjguMjY1IDEuMzI5LjMzOCAyLjI5Ni4wODQuOTY2LjEyIDEuOC4xMiAyLjUyNWwuMDczIDEuMDE1YzAgMi42NDYtLjE5MyA0LjU5Mi0uNTMxIDUuODM2LS4zMDIgMS4wODgtMS4wMDMgMS43ODktMi4wOSAyLjA5LS41NjkuMTU4LTEuNjA4LjI2Ny0zLjIwMy4zMzktMS41Ny4wODQtMy4wMDkuMTItNC4zMzguMTJsLTEuOTIxLjA3M2MtNS4wNjMgMC04LjIxNy0uMTkzLTkuNDYxLS41MzEtMS4wODgtLjMwMi0xLjc4OS0xLjAwMy0yLjA5LTIuMDktLjE1OC0uNTY5LS4yNjctMS4zMy0uMzM5LTIuMjk3LS4wODUtLjk2Ni0uMTItMS44LS4xMi0yLjUyNUwyLjQxNiAxNC41YzAtMi42NDYuMTkzLTQuNTkyLjUzMS01LjgzNi4zMDItMS4wODggMS4wMDMtMS43ODkgMi4wOS0yLjA5LjU2OS0uMTU4IDEuNjA4LS4yNjcgMy4yMDMtLjMzOSAxLjU3LS4wODUgMy4wMDgtLjEyIDQuMzM4LS4xMmwxLjkyMS0uMDczYzUuMDYzIDAgOC4yMTcuMTkzIDkuNDYxLjUzMSAxLjA4OC4zMDIgMS43ODkgMS4wMDMgMi4wOSAyLjA5elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdZb3V0dWJlXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrU3F1YXJlIH0gZnJvbSAnLi9DaGVja1NxdWFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9tZXBhZ2VPcHRpb24gfSBmcm9tICcuL0hvbWVwYWdlT3B0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyDEsG5zdGFncmFtIH0gZnJvbSAnLi/EsG5zdGFncmFtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZG4gfSBmcm9tICcuL0xpbmtkbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbCB9IGZyb20gJy4vTWFpbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVkaWEgfSBmcm9tICcuL01lZGlhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhRGF0YSB9IGZyb20gJy4vTWV0YURhdGEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE9wZW5zZWFMb2dvIH0gZnJvbSAnLi9PcGVuc2VhTG9nbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXJDb2RlIH0gZnJvbSAnLi9RckNvZGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJhcmlibGVMb2dvIH0gZnJvbSAnLi9SYXJpYmxlTG9nbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2F2aW5nc1BpZyB9IGZyb20gJy4vU2F2aW5nc1BpZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU21hcnRDb250cmFjdMSwY29uIH0gZnJvbSAnLi9TbWFydENvbnRyYWN0xLBjb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmfEsG5zdGFncmFtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05LjQyNSAyLjQxN2gxMC4xNWE3LjAxMyA3LjAxMyAwIDAxNy4wMDggNy4wMDh2MTAuMTVhNy4wMDggNy4wMDggMCAwMS03LjAwOCA3LjAwOEg5LjQyNWE3LjAxMyA3LjAxMyAwIDAxLTcuMDA4LTcuMDA4VjkuNDI1YTcuMDA4IDcuMDA4IDAgMDE3LjAwOC03LjAwOHptLS4yNDIgMi40MTZhNC4zNSA0LjM1IDAgMDAtNC4zNSA0LjM1djEwLjYzNGE0LjM0NyA0LjM0NyAwIDAwNC4zNSA0LjM1aDEwLjYzNGE0LjM1IDQuMzUgMCAwMDQuMzUtNC4zNVY5LjE4M2E0LjM0NyA0LjM0NyAwIDAwLTQuMzUtNC4zNUg5LjE4M3ptMTEuNjYgMS44MTNhMS41MSAxLjUxIDAgMTEwIDMuMDIgMS41MSAxLjUxIDAgMDEwLTMuMDJ6TTE0LjUgOC40NThhNi4wNDIgNi4wNDIgMCAxMTAgMTIuMDg0IDYuMDQyIDYuMDQyIDAgMDEwLTEyLjA4NHptMCAyLjQxN2EzLjYyNSAzLjYyNSAwIDEwMCA3LjI1IDMuNjI1IDMuNjI1IDAgMDAwLTcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z8SwbnN0YWdyYW1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uLy4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgLyogTGF5b3V0IGluIE1ha2UgTkZUIFBhZ2UgKi9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dH0+XHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0b3IgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogQ2VudGVyIENvbnRhaW5lciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgaW5zaWRlIENvbnRhaW5lciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyU2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBzaXplPSczMHB4JyBib2xkPk1pbnQgTkZUPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZT5GdW5naWJsZSBhbmQgbm9uLWZ1bmdpYmxlIHRva2VuczwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9iYXNlL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbiAoeyBjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tICcuLi90ZXh0L3RleHQtdGl0bGUnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcbmNvbnN0IE1FTlUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbWFrZS1hbi1uZnQnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFrZSBhbiBORlQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2J1c2luZXNzLXNpZ251cCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdCdXNpbmVzcyBTaWdudXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ1N1YnNjcmliZS1mb3ItdXBjb21pbmctZHJvcHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnU3Vic2NyaWJlIGZvciBVcGNvbWluZyBEcm9wcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbmZ0LXN0YW5kYXJkcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdORlQgU3RhbmRhcmRzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdkb3dubG9hZC1uZnQtY3JlYXRvcicsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdEb3dubG9hZCBORlQgQ3JlYXRvcidcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1hcmspfT5cclxuICAgICAgICAgICAgPEhlYWRUaXRsZT5Pd25hYmxlLU5TPC9IZWFkVGl0bGU+IFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJ0bn0+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJCdG59XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PSB7bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJjxUZXh0VGl0bGU+IHttZW51LnRpdGxlfSA8L1RleHRUaXRsZT59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbi8+fVxyXG4gICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkVGl0bGUoeyBib2xkPSBmYWxzZSxjbGFzc05hbWUgLGNoaWxkcmVuLCBzaXplPTIwLCBvcGFjaXR5PTF9KXtcclxuICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBbc3R5bGVzLlRpdGxlLCBcclxuICAgICAgICBib2xkICYmIHN0eWxlcy5ib2xkLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgIF0pfVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFNpemU6c2l6ZSwgb3BhY2l0eTogb3BhY2l0eX19XHJcbiAgICAgICAgPntjaGlsZHJlbn08L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkVGl0bGVcclxuXHJcbi8qXHJcbiAgICBjbiBzdGFuZCBmb3IgY2xhc3NuYW1lczogJ0NsYXNzbmFtZXMnICBpcyBwcmV2ZW50IGNsYXNzIG92ZXJ3cml0ZS4gSXQgY29tZXMgbW9yZSB0aGFuIG9uZSBjbGFzcyBpbnRvIGZ1bmN0aW9uLCBpdCdzIHJlYXNvbiBhYm91dCBjb25mbGljdC4gXHJcbiAgICBib2xkOiBTb21lIHRleHQgaGFzIGJvbGQgZm9udCB3ZWlnaHQsIGJ1dCBzb21lIGl0IGhhc24ndC4gV2hlbiB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0IHByb3BlcnRpZXMsIGJvbGQgcHJvcGVydGllcyB3aWxsIGhhdmUgYmVlbiBhY3RpdmF0ZWQuXHJcbiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXh0VGl0bGUoeyBib2xkPWZhbHNlLCBjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuIDxoMiBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvaDI+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0VGl0bGUiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21ha2VORlQvaW5kZXgnXHJcblxyXG5cclxuZnVuY3Rpb24gbWFrZU5GVCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZU5GVCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhc2VCdG5cIjogXCJzdHlsZV9iYXNlQnRuX18yNXlfclwiLFxuXHRcIkZyYW1lQm9yZGVyXCI6IFwic3R5bGVfRnJhbWVCb3JkZXJfXzFIcDYzXCIsXG5cdFwibGlua0NvbnRhaW5lclwiOiBcInN0eWxlX2xpbmtDb250YWluZXJfXzJhSlNqXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmcmFtZUJ0blwiOiBcImZyYW1lQnV0dG9uX2ZyYW1lQnRuX19BbVEydVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTlwiLFxuXHRcIm5hdkJ0blwiOiBcIm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaFwiLFxuXHRcIm5hdkl0ZW1cIjogXCJuYXZpZ2F0aW9uX25hdkl0ZW1fXzIwdWhzXCIsXG5cdFwibWFya1wiOiBcIm5hdmlnYXRpb25fbWFya19fM0dGYU1cIixcblx0XCJsb2dpbkJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcImhlYWQtdGl0bGVfVGl0bGVfXzNtd1hnXCIsXG5cdFwiYm9sZFwiOiBcImhlYWQtdGl0bGVfYm9sZF9fMTJzR3lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRpdGxlXCI6IFwidGV4dC10aXRsZV9UaXRsZV9fNktiOWhcIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX19wUzI4dVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY24iLCJmcmFtZUJ1dHRvbiIsImJvcmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJiYXNlQnRuIiwiRnJhbWVCb3JkZXIiLCJsaW5rQnV0dG9uIiwibGlua0NvbnRhaW5lciIsImxpbmtzIiwiYnV0dG9uIiwiQ29tcCIsIkJ1dHRvbiIsIlRleHRUaXRsZSIsIkZyYW1lQnV0dG9uIiwiZnJhbWVCdG4iLCJTdmdDaGVja1NxdWFyZSIsIlN2Z0Rpc2NvcmQiLCJTdmdEcm9wRG93biIsIlN2Z0Ryb3BEb3duxLBjb24iLCJTdmdFdGhMb2dvIiwiU3ZnRmFjZWJvb2siLCJTdmdGaW5nZXJwcmludCIsIlN2Z0hvbWVwYWdlT3B0aW9uIiwiU3ZnTGlua2RuIiwiU3ZnTWFpbCIsIlN2Z01lZGlhIiwiU3ZnTWV0YURhdGEiLCJTdmdPcGVuc2VhTG9nbyIsIlN2Z1FyQ29kZSIsIlN2Z1JhcmlibGVMb2dvIiwiU3ZnU2F2aW5nc1BpZyIsIlN2Z1NtYXJ0Q29udHJhY3TEsGNvbiIsIlN2Z1R3aXR0ZXIiLCJTdmdWZWN0b3IiLCJTdmdZb3V0dWJlIiwiZGVmYXVsdCIsIkNoZWNrU3F1YXJlIiwiRGlzY29yZCIsIkRyb3BEb3duxLBjb24iLCJEcm9wRG93biIsIkV0aExvZ28iLCJGYWNlYm9vayIsIkZpbmdlcnByaW50IiwiSG9tZXBhZ2VPcHRpb24iLCLEsG5zdGFncmFtIiwiTGlua2RuIiwiTWFpbCIsIk1lZGlhIiwiTWV0YURhdGEiLCJPcGVuc2VhTG9nbyIsIlFyQ29kZSIsIlJhcmlibGVMb2dvIiwiU2F2aW5nc1BpZyIsIlNtYXJ0Q29udHJhY3TEsGNvbiIsIlR3aXR0ZXIiLCJWZWN0b3IiLCJZb3V0dWJlIiwiU3ZnxLBuc3RhZ3JhbSIsIk5hdmlnYXRpb24iLCJIZWFkVGl0bGUiLCJMYXlvdXQiLCJsYXlvdXQiLCJuYXZpZ2F0b3IiLCJmb3JtQ29udGFpbmVyIiwiaGVhZGVyU2lkZSIsIk5hdmlnYXRpb25CdXR0b24iLCJuYXYiLCJNRU5VIiwia2V5IiwiaWNvbiIsInRpdGxlIiwiZmxhdCIsIm1hcmsiLCJuYXZCdG4iLCJtYXAiLCJtZW51Iiwic3ViQnRuIiwibG9naW5CdXR0b24iLCJib2xkIiwic2l6ZSIsIm9wYWNpdHkiLCJUaXRsZSIsImZvbnRTaXplIiwibWFrZU5GVCJdLCJzb3VyY2VSb290IjoiIn0=