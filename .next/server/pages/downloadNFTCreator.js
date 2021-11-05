(() => {
var exports = {};
exports.id = "pages/downloadNFTCreator";
exports.ids = ["pages/downloadNFTCreator"];
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

/***/ "./components/icons/AppStore.js":
/*!**************************************!*\
  !*** ./components/icons/AppStore.js ***!
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
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\AppStore.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgAppStore(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 240 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#app-store_svg__clip0_51:501)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M231.461 71.09H8.407C3.772 71.09 0 67.308 0 62.678V8.4C0 3.768 3.772 0 8.407 0h223.054C236.094 0 240 3.768 240 8.4v54.278c0 4.63-3.906 8.412-8.539 8.412z",
        fill: "#A6A6A6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M238.279 62.68a6.808 6.808 0 01-6.816 6.807H8.407c-3.767 0-6.825-3.046-6.825-6.807V8.398c0-3.76 3.058-6.816 6.825-6.816h223.054a6.815 6.815 0 016.816 6.816l.002 54.282z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M53.56 35.161c-.05-5.728 4.692-8.515 4.91-8.644-2.687-3.916-6.85-4.45-8.314-4.493-3.496-.368-6.889 2.091-8.67 2.091-1.817 0-4.56-2.056-7.516-1.995-3.805.058-7.364 2.26-9.316 5.68-4.028 6.972-1.024 17.218 2.836 22.853 1.93 2.76 4.186 5.842 7.14 5.734 2.888-.12 3.967-1.841 7.453-1.841 3.455 0 4.468 1.84 7.48 1.772 3.1-.05 5.052-2.773 6.915-5.558 2.231-3.163 3.127-6.279 3.163-6.439-.073-.025-6.021-2.294-6.08-9.16zM47.872 18.316c1.554-1.942 2.617-4.585 2.322-7.267-2.25.1-5.062 1.555-6.681 3.455-1.433 1.674-2.713 4.418-2.382 6.999 2.526.188 5.12-1.274 6.74-3.187zM95.369 55.99h-4.037l-2.212-6.947h-7.687l-2.107 6.947h-3.93l7.616-23.651h4.704l7.653 23.651zm-6.916-9.861l-2-6.176c-.211-.631-.608-2.117-1.193-4.456h-.07a171.766 171.766 0 01-1.124 4.456L82.1 46.128h6.352zM114.955 47.254c0 2.9-.784 5.193-2.352 6.876-1.405 1.498-3.149 2.246-5.231 2.246-2.247 0-3.861-.807-4.844-2.42h-.071v8.983h-3.79V44.55c0-1.823-.048-3.695-.14-5.614h3.333l.211 2.703h.071c1.264-2.037 3.182-3.053 5.757-3.053 2.012 0 3.692.794 5.036 2.385 1.348 1.592 2.02 3.686 2.02 6.283zm-3.862.138c0-1.66-.373-3.028-1.123-4.105-.82-1.124-1.92-1.685-3.3-1.685-.935 0-1.785.313-2.544.93-.761.621-1.258 1.434-1.491 2.44-.118.469-.176.853-.176 1.155v2.843c0 1.24.38 2.288 1.141 3.142.761.855 1.749 1.282 2.965 1.282 1.428 0 2.539-.551 3.334-1.65.796-1.1 1.194-2.55 1.194-4.352zM134.576 47.254c0 2.9-.784 5.193-2.354 6.876-1.402 1.498-3.146 2.246-5.228 2.246-2.247 0-3.861-.807-4.843-2.42h-.071v8.983h-3.79V44.55c0-1.823-.048-3.695-.141-5.614h3.334l.211 2.703h.071c1.263-2.037 3.181-3.053 5.757-3.053 2.011 0 3.691.794 5.038 2.385 1.342 1.592 2.016 3.686 2.016 6.283zm-3.861.138c0-1.66-.375-3.028-1.126-4.105-.819-1.124-1.916-1.685-3.297-1.685-.937 0-1.785.313-2.546.93-.761.621-1.257 1.434-1.49 2.44-.115.469-.176.853-.176 1.155v2.843c0 1.24.381 2.288 1.138 3.142.761.853 1.749 1.282 2.969 1.282 1.427 0 2.538-.551 3.333-1.65.797-1.1 1.195-2.55 1.195-4.352zM156.514 49.358c0 2.012-.699 3.649-2.101 4.912-1.542 1.381-3.688 2.07-6.445 2.07-2.546 0-4.587-.49-6.131-1.473l.878-3.158c1.664 1.006 3.49 1.51 5.479 1.51 1.427 0 2.539-.323 3.337-.966.794-.643 1.191-1.507 1.191-2.584 0-.96-.327-1.768-.983-2.424-.653-.656-1.742-1.266-3.264-1.83-4.142-1.544-6.212-3.806-6.212-6.781 0-1.944.726-3.539 2.178-4.78 1.447-1.241 3.378-1.862 5.792-1.862 2.153 0 3.941.375 5.369 1.123l-.948 3.09c-1.333-.726-2.841-1.088-4.528-1.088-1.333 0-2.375.329-3.121.983-.632.584-.948 1.297-.948 2.141 0 .935.361 1.708 1.086 2.316.631.561 1.778 1.17 3.442 1.825 2.036.82 3.531 1.777 4.492 2.876.959 1.094 1.437 2.465 1.437 4.1zM169.045 41.78h-4.177v8.28c0 2.106.736 3.158 2.211 3.158.677 0 1.239-.059 1.684-.176l.105 2.877c-.747.28-1.73.42-2.948.42-1.497 0-2.667-.457-3.511-1.369-.841-.913-1.264-2.445-1.264-4.597v-8.597h-2.489v-2.844h2.489V35.81l3.723-1.123v4.245h4.177v2.848zM187.895 47.323c0 2.621-.75 4.774-2.247 6.457-1.57 1.733-3.653 2.596-6.251 2.596-2.503 0-4.496-.83-5.982-2.49-1.486-1.66-2.229-3.755-2.229-6.28 0-2.643.764-4.808 2.298-6.491 1.531-1.685 3.597-2.527 6.194-2.527 2.503 0 4.518.83 6.038 2.492 1.454 1.611 2.179 3.693 2.179 6.243zm-3.932.123c0-1.573-.336-2.922-1.017-4.047-.795-1.362-1.931-2.04-3.403-2.04-1.523 0-2.681.68-3.475 2.04-.681 1.127-1.017 2.497-1.017 4.118 0 1.572.336 2.921 1.017 4.045.819 1.361 1.964 2.04 3.441 2.04 1.447 0 2.583-.693 3.403-2.076.699-1.146 1.051-2.51 1.051-4.08zM200.215 42.268a6.58 6.58 0 00-1.194-.105c-1.334 0-2.365.503-3.09 1.511-.631.889-.948 2.012-.948 3.368v8.948h-3.788l.035-11.683a92.91 92.91 0 00-.142-5.37h3.301l.139 3.264h.105c.4-1.122 1.031-2.025 1.895-2.702.845-.61 1.757-.913 2.74-.913.35 0 .666.025.947.07v3.612zM217.166 46.656c0 .68-.044 1.252-.138 1.719h-11.371c.044 1.685.594 2.973 1.65 3.862.958.794 2.197 1.192 3.719 1.192 1.683 0 3.219-.268 4.601-.806l.593 2.63c-1.614.704-3.52 1.054-5.719 1.054-2.645 0-4.721-.779-6.233-2.334-1.507-1.555-2.263-3.643-2.263-6.263 0-2.571.703-4.713 2.109-6.42 1.472-1.824 3.461-2.736 5.964-2.736 2.459 0 4.32.912 5.584 2.735 1.001 1.449 1.504 3.24 1.504 5.367zm-3.614-.982c.025-1.124-.222-2.094-.736-2.913-.656-1.054-1.664-1.58-3.02-1.58-1.24 0-2.248.513-3.017 1.544-.631.82-1.007 1.802-1.122 2.947h7.895v.002zM87.2 17.789c0 2.091-.627 3.666-1.88 4.723-1.162.976-2.811 1.465-4.948 1.465-1.06 0-1.967-.046-2.726-.139v-11.43c.99-.16 2.057-.24 3.21-.24 2.035 0 3.569.442 4.604 1.327 1.159 1 1.74 2.431 1.74 4.294zm-1.964.051c0-1.356-.36-2.396-1.078-3.12-.718-.724-1.767-1.087-3.148-1.087-.587 0-1.086.04-1.5.121v8.69c.229.035.648.05 1.258.05 1.426 0 2.526-.396 3.301-1.188.775-.793 1.167-1.948 1.167-3.466zM97.616 19.616c0 1.288-.368 2.344-1.104 3.172-.772.851-1.794 1.276-3.07 1.276-1.23 0-2.21-.407-2.94-1.224-.73-.816-1.094-1.845-1.094-3.086 0-1.297.375-2.362 1.129-3.188.754-.827 1.767-1.24 3.043-1.24 1.23 0 2.22.406 2.968 1.222.71.793 1.068 1.816 1.068 3.068zm-1.933.06c0-.773-.167-1.436-.499-1.989-.391-.668-.948-1.002-1.671-1.002-.749 0-1.318.334-1.709 1.002-.334.553-.5 1.227-.5 2.023 0 .773.168 1.436.5 1.988.404.669.966 1.003 1.691 1.003.711 0 1.27-.34 1.671-1.02.345-.564.517-1.232.517-2.005zM111.582 15.496l-2.622 8.378h-1.707l-1.086-3.638a27.595 27.595 0 01-.674-2.707h-.033c-.162.92-.386 1.822-.674 2.707l-1.154 3.638h-1.726l-2.466-8.378h1.915l.947 3.983c.23.942.418 1.84.569 2.689h.034a29.8 29.8 0 01.692-2.672l1.189-3.998h1.518l1.14 3.913c.275.954.499 1.873.672 2.758h.051c.126-.861.317-1.78.569-2.758l1.017-3.913h1.829v-.002zM121.241 23.874h-1.863v-4.799c0-1.478-.562-2.218-1.689-2.218-.553 0-.999.203-1.346.61a2.163 2.163 0 00-.517 1.436v4.97h-1.863V17.89c0-.736-.023-1.534-.068-2.398h1.637l.088 1.31h.051c.217-.407.541-.743.965-1.011a3.152 3.152 0 011.689-.471c.783 0 1.433.252 1.951.759.643.62.965 1.546.965 2.776v5.019zM126.379 23.874h-1.862V11.652h1.862v12.222zM137.348 19.616c0 1.288-.368 2.344-1.104 3.172-.772.851-1.796 1.276-3.071 1.276-1.232 0-2.211-.407-2.94-1.224-.729-.816-1.093-1.845-1.093-3.086 0-1.297.375-2.362 1.128-3.188.754-.827 1.768-1.24 3.042-1.24 1.232 0 2.219.406 2.969 1.222.711.793 1.069 1.816 1.069 3.068zm-1.935.06c0-.773-.167-1.436-.499-1.989-.39-.668-.948-1.002-1.67-1.002-.75 0-1.319.334-1.708 1.002-.334.553-.5 1.227-.5 2.023 0 .773.168 1.436.5 1.988.404.669.965 1.003 1.691 1.003.711 0 1.267-.34 1.669-1.02.347-.564.517-1.232.517-2.005zM146.365 23.874h-1.673l-.139-.965h-.052c-.572.77-1.388 1.155-2.448 1.155-.791 0-1.431-.254-1.912-.759-.438-.458-.657-1.029-.657-1.706 0-1.024.427-1.804 1.286-2.344.857-.54 2.062-.805 3.614-.793v-.156c0-1.104-.58-1.655-1.74-1.655-.827 0-1.556.208-2.185.62l-.379-1.222c.779-.482 1.741-.724 2.875-.724 2.19 0 3.289 1.155 3.289 3.466v3.085c0 .837.041 1.504.121 1.998zm-1.935-2.88v-1.291c-2.055-.036-3.082.527-3.082 1.688 0 .437.117.764.357.983.24.219.546.327.91.327.409 0 .791-.13 1.14-.387a1.587 1.587 0 00.675-1.32zM156.951 23.874h-1.653l-.087-1.345h-.052c-.528 1.023-1.427 1.535-2.691 1.535-1.01 0-1.851-.396-2.518-1.189-.666-.793-.999-1.822-.999-3.085 0-1.356.361-2.455 1.086-3.293.703-.783 1.563-1.174 2.587-1.174 1.125 0 1.913.38 2.361 1.138h.035v-4.81h1.865v9.966c0 .816.022 1.567.066 2.257zm-1.931-3.533v-1.397c0-.242-.017-.437-.051-.587a2.123 2.123 0 00-.674-1.128 1.831 1.831 0 00-1.246-.457c-.695 0-1.239.276-1.639.828-.397.553-.598 1.258-.598 2.12 0 .829.191 1.5.573 2.018.403.55.947.826 1.628.826.612 0 1.101-.23 1.472-.69.36-.424.535-.936.535-1.533zM172.885 19.616c0 1.288-.368 2.344-1.104 3.172-.771.851-1.792 1.276-3.07 1.276-1.228 0-2.208-.407-2.94-1.224-.729-.816-1.094-1.845-1.094-3.086 0-1.297.375-2.362 1.129-3.188.754-.827 1.767-1.24 3.046-1.24 1.228 0 2.218.406 2.965 1.222.711.793 1.068 1.816 1.068 3.068zm-1.93.06c0-.773-.167-1.436-.5-1.989-.393-.668-.947-1.002-1.673-1.002-.746 0-1.315.334-1.708 1.002-.334.553-.5 1.227-.5 2.023 0 .773.167 1.436.5 1.988.403.669.965 1.003 1.69 1.003.712 0 1.272-.34 1.673-1.02.343-.564.518-1.232.518-2.005zM182.903 23.874h-1.861v-4.799c0-1.478-.562-2.218-1.691-2.218-.553 0-.999.203-1.344.61a2.153 2.153 0 00-.517 1.436v4.97h-1.865V17.89c0-.736-.021-1.534-.066-2.398h1.636l.087 1.31h.051c.219-.407.543-.743.966-1.011a3.153 3.153 0 011.69-.471c.781 0 1.432.252 1.949.759.645.62.965 1.546.965 2.776v5.019zM195.442 16.891h-2.052v4.07c0 1.034.365 1.552 1.087 1.552.334 0 .611-.029.83-.088l.048 1.413c-.368.139-.852.208-1.447.208-.736 0-1.309-.224-1.723-.671-.416-.448-.622-1.202-.622-2.26v-4.224h-1.225v-1.395h1.225V13.96l1.826-.55v2.084h2.051v1.397h.002zM205.305 23.874h-1.865V19.11c0-1.502-.562-2.254-1.687-2.254-.864 0-1.454.436-1.778 1.307a2.344 2.344 0 00-.087.67v5.038h-1.861v-12.22h1.861V16.7h.036c.586-.919 1.427-1.378 2.517-1.378.771 0 1.41.253 1.916.76.631.63.948 1.569.948 2.81v4.98zM215.479 19.289c0 .334-.025.614-.069.844h-5.588c.025.828.292 1.459.809 1.896.473.391 1.083.587 1.829.587.827 0 1.581-.132 2.26-.397l.292 1.294c-.795.345-1.73.517-2.813.517-1.298 0-2.32-.382-3.059-1.146-.744-.764-1.112-1.79-1.112-3.076 0-1.264.344-2.316 1.035-3.155.722-.896 1.698-1.344 2.93-1.344 1.205 0 2.121.448 2.739 1.344.5.71.747 1.59.747 2.636zm-1.778-.482c.015-.553-.108-1.03-.361-1.43-.323-.518-.816-.777-1.482-.777-.608 0-1.104.252-1.483.758-.309.404-.492.886-.553 1.449h3.879z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "app-store_svg__clip0_51:501",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h240v71.09H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAppStore);

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

/***/ "./components/icons/GooglePlayStore.js":
/*!*********************************************!*\
  !*** ./components/icons/GooglePlayStore.js ***!
  \*********************************************/
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
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\GooglePlayStore.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgGooglePlayStore(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 240 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#google-play-store_svg__clip0_51:546)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M231.108 71.109H8.892C3.992 71.109 0 67.101 0 62.22V8.89C0 3.989 3.991 0 8.892 0h222.216C236.004 0 240 3.99 240 8.889V62.22c0 4.881-3.996 8.889-8.892 8.889z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M231.108 1.423c4.11 0 7.475 3.356 7.475 7.466V62.22c0 4.11-3.343 7.466-7.475 7.466H8.892c-4.11 0-7.475-3.356-7.475-7.466V8.89c0-4.11 3.343-7.466 7.475-7.466h222.216zm0-1.423H8.892C3.992 0 0 4.008 0 8.889V62.22c0 4.9 3.991 8.889 8.892 8.889h222.216c4.896 0 8.892-3.99 8.892-8.889V8.89C240 4.008 236.004 0 231.108 0z",
        fill: "#A6A6A6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M126.433 23.523c-1.603 0-2.954-.563-4.022-1.672a5.7 5.7 0 01-1.625-4.078c0-1.618.547-2.988 1.625-4.074 1.064-1.109 2.415-1.672 4.017-1.672 1.585 0 2.936.563 4.023 1.672 1.077 1.121 1.624 2.491 1.624 4.074-.017 1.622-.565 2.992-1.624 4.074-1.064 1.117-2.416 1.676-4.018 1.676zm-47.688 0c-1.568 0-2.928-.554-4.04-1.65-1.104-1.09-1.665-2.469-1.665-4.096 0-1.627.561-3.006 1.665-4.096 1.09-1.095 2.45-1.65 4.04-1.65a5.61 5.61 0 012.256.47c.71.307 1.289.723 1.717 1.233l.106.129-1.196 1.179-.124-.146c-.675-.807-1.58-1.202-2.777-1.202-1.069 0-2 .381-2.768 1.135-.773.758-1.166 1.751-1.166 2.953 0 1.201.393 2.194 1.166 2.952a3.83 3.83 0 002.768 1.135c1.14 0 2.097-.381 2.843-1.135.442-.443.716-1.064.813-1.848h-3.837v-1.659h5.484l.022.151c.04.28.08.568.08.834 0 1.53-.46 2.766-1.37 3.68-1.033 1.081-2.384 1.63-4.017 1.63zm63.406-.235h-1.691l-5.179-8.321.044 1.498v6.818h-1.691V12.267h1.929l.053.084 4.87 7.838-.044-1.494v-6.428h1.709v11.02zm-28.425 0h-1.713v-9.363h-2.972v-1.658h7.652v1.658h-2.971v9.363h.004zm-6.08 0h-1.708V12.267h1.708v11.02zm-9.603 0h-1.708v-9.363h-2.972v-1.658h7.652v1.658h-2.972v9.363zm-5.762-.018H85.73V12.267h6.552v1.658h-4.839v3.023h4.367v1.64h-4.367v3.024h4.84v1.658zm31.383-2.558c.764.767 1.691 1.153 2.769 1.153 1.108 0 2.013-.377 2.768-1.153.751-.754 1.13-1.742 1.13-2.935 0-1.192-.379-2.185-1.125-2.935a3.782 3.782 0 00-2.769-1.152c-1.108 0-2.013.377-2.764 1.152-.75.754-1.13 1.743-1.13 2.935 0 1.193.375 2.186 1.121 2.935z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M120.627 38.675c-4.172 0-7.554 3.18-7.554 7.564 0 4.344 3.404 7.563 7.554 7.563 4.172 0 7.554-3.201 7.554-7.563 0-4.385-3.382-7.563-7.554-7.563zm0 12.13c-2.283 0-4.247-1.898-4.247-4.584 0-2.727 1.969-4.584 4.247-4.584 2.283 0 4.247 1.857 4.247 4.584.005 2.704-1.964 4.584-4.247 4.584zm-16.482-12.13c-4.172 0-7.554 3.18-7.554 7.564 0 4.344 3.404 7.563 7.554 7.563 4.172 0 7.554-3.201 7.554-7.563 0-4.385-3.386-7.563-7.554-7.563zm0 12.13c-2.283 0-4.247-1.898-4.247-4.584 0-2.727 1.969-4.584 4.247-4.584 2.283 0 4.247 1.857 4.247 4.584 0 2.704-1.964 4.584-4.247 4.584zm-19.612-9.82v3.201h7.651c-.234 1.795-.825 3.121-1.73 4.03-1.122 1.126-2.853 2.35-5.903 2.35-4.703 0-8.38-3.813-8.38-8.535 0-4.721 3.677-8.533 8.38-8.533 2.538 0 4.388 1.006 5.761 2.291l2.26-2.27c-1.907-1.835-4.445-3.24-8.004-3.24-6.45 0-11.863 5.275-11.863 11.735 0 6.477 5.408 11.734 11.863 11.734 3.484 0 6.097-1.143 8.164-3.298 2.106-2.114 2.773-5.098 2.773-7.505 0-.75-.058-1.423-.177-1.995h-10.8c.005-.005.005.035.005.035zm80.219 2.492c-.631-1.698-2.539-4.82-6.45-4.82-3.877 0-7.1 3.064-7.1 7.564 0 4.247 3.188 7.563 7.475 7.563 3.444 0 5.448-2.115 6.274-3.356l-2.556-1.72c-.848 1.263-2.027 2.092-3.7 2.092-1.691 0-2.875-.771-3.661-2.292l10.071-4.189c0 .004-.353-.842-.353-.842zm-10.27 2.527c-.079-2.922 2.261-4.407 3.934-4.407 1.321 0 2.42.652 2.795 1.6l-6.729 2.807zm-8.181 7.328h3.307v-22.22h-3.307v22.22zm-5.43-12.976h-.12c-.746-.891-2.163-1.698-3.973-1.698-3.758 0-7.219 3.32-7.219 7.585 0 4.247 3.444 7.528 7.219 7.528 1.788 0 3.227-.812 3.973-1.72h.12v1.086c0 2.886-1.537 4.442-4.014 4.442-2.026 0-3.285-1.463-3.797-2.687l-2.874 1.206c.825 1.995 3.029 4.464 6.667 4.464 3.876 0 7.161-2.292 7.161-7.882V39.11h-3.126v1.246h-.017zm-3.798 10.449c-2.282 0-4.19-1.915-4.19-4.562 0-2.669 1.908-4.602 4.19-4.602 2.261 0 4.014 1.955 4.014 4.602.022 2.647-1.749 4.562-4.014 4.562zm43.163-19.693h-7.907v22.22h3.307v-8.415h4.605c3.66 0 7.258-2.664 7.258-6.893 0-4.23-3.585-6.912-7.263-6.912zm.097 10.702h-4.702V34.19h4.702c2.477 0 3.877 2.053 3.877 3.813 0 1.742-1.417 3.812-3.877 3.812zm20.421-3.178c-2.402 0-4.879 1.068-5.904 3.395l2.932 1.224c.632-1.224 1.788-1.64 3.011-1.64 1.713 0 3.444 1.028 3.484 2.864v.235c-.592-.337-1.89-.852-3.444-.852-3.166 0-6.375 1.738-6.375 4.997 0 2.983 2.596 4.898 5.488 4.898 2.22 0 3.443-1.006 4.207-2.172h.119v1.72h3.188v-8.512c0-3.963-2.931-6.157-6.706-6.157zm-.415 12.169c-1.082 0-2.597-.532-2.597-1.898 0-1.72 1.89-2.371 3.502-2.371 1.457 0 2.145.314 3.011.749a3.987 3.987 0 01-3.916 3.52zM219.09 39.11l-3.797 9.638h-.119l-3.934-9.638h-3.559l5.903 13.473-3.364 7.487h3.444l9.082-20.96h-3.656zm-29.767 14.222h3.307v-22.22h-3.307v22.22z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.473 13.393c-.512.554-.808 1.4-.808 2.51V55.21c0 1.109.296 1.956.826 2.488l.137.12 21.934-22.025v-.492L18.61 13.273l-.137.12z",
        fill: "url(#google-play-store_svg__paint0_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.86 43.157l-7.316-7.345v-.515l7.316-7.345.16.097 8.653 4.939c2.477 1.4 2.477 3.715 0 5.133L48.02 43.06l-.159.097z",
        fill: "url(#google-play-store_svg__paint1_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M48.02 43.06l-7.475-7.506-22.072 22.162c.808.87 2.164.967 3.678.12L48.02 43.06z",
        fill: "url(#google-play-store_svg__paint2_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M48.02 28.049L22.15 13.295c-1.514-.869-2.874-.749-3.678.12l22.072 22.14 7.474-7.506z",
        fill: "url(#google-play-store_svg__paint3_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: 0.2,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.86 42.9L22.17 57.557c-1.436.829-2.716.771-3.541.017l-.137.138.137.12c.825.749 2.105.81 3.54-.018L48.038 43.06l-.177-.16z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: 0.12,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M56.673 37.864L47.838 42.9l.16.16 8.653-4.939c1.24-.709 1.85-1.64 1.85-2.567-.075.852-.706 1.658-1.828 2.31z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: 0.25,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.15 13.552l34.523 19.693c1.122.634 1.753 1.463 1.85 2.31 0-.927-.61-1.858-1.85-2.567L22.151 13.295c-2.477-1.423-4.486-.235-4.486 2.607v.257c0-2.846 2.009-4.012 4.486-2.607z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint0_linear_51:546",
        x1: 38.595,
        y1: 15.478,
        x2: 3.44,
        y2: 24.807,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#00A0FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.007,
          stopColor: "#00A1FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.26,
          stopColor: "#00BEFF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.512,
          stopColor: "#00D2FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.76,
          stopColor: "#00DFFF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#00E3FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint1_linear_51:546",
        x1: 59.903,
        y1: 35.555,
        x2: 17.063,
        y2: 35.555,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#FFE000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.409,
          stopColor: "#FFBD00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.775,
          stopColor: "orange"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#FF9C00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint2_linear_51:546",
        x1: 43.955,
        y1: 39.639,
        x2: 15.578,
        y2: 87.205,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#FF3A44"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#C31162"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint3_linear_51:546",
        x1: 12.915,
        y1: 0.318,
        x2: 25.576,
        y2: 21.562,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#32A071"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.069,
          stopColor: "#2DA771"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.476,
          stopColor: "#15CF74"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.801,
          stopColor: "#06E775"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#00F076"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "google-play-store_svg__clip0_51:546",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h240v71.109H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgGooglePlayStore);

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
/* harmony export */   "AppStore": () => (/* reexport safe */ _AppStore__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "CheckSquare": () => (/* reexport safe */ _CheckSquare__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Discord": () => (/* reexport safe */ _Discord__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "DropDownİcon": () => (/* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "DropDown": () => (/* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "EthLogo": () => (/* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Facebook": () => (/* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Fingerprint": () => (/* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "GooglePlayStore": () => (/* reexport safe */ _GooglePlayStore__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "HomepageOption": () => (/* reexport safe */ _HomepageOption__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "İnstagram": () => (/* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Linkdn": () => (/* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "Mail": () => (/* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "Media": () => (/* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "MetaData": () => (/* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "OpenseaLogo": () => (/* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "QrCode": () => (/* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "RaribleLogo": () => (/* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "SavingsPig": () => (/* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "SmartContractİcon": () => (/* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "Twitter": () => (/* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_20__.default),
/* harmony export */   "Vector": () => (/* reexport safe */ _Vector__WEBPACK_IMPORTED_MODULE_21__.default),
/* harmony export */   "Youtube": () => (/* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_22__.default)
/* harmony export */ });
/* harmony import */ var _AppStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppStore */ "./components/icons/AppStore.js");
/* harmony import */ var _CheckSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckSquare */ "./components/icons/CheckSquare.js");
/* harmony import */ var _Discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discord */ "./components/icons/Discord.js");
/* harmony import */ var _DropDown_con__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDownİcon */ "./components/icons/DropDownİcon.js");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDown */ "./components/icons/DropDown.js");
/* harmony import */ var _EthLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EthLogo */ "./components/icons/EthLogo.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Facebook */ "./components/icons/Facebook.js");
/* harmony import */ var _Fingerprint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fingerprint */ "./components/icons/Fingerprint.js");
/* harmony import */ var _GooglePlayStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GooglePlayStore */ "./components/icons/GooglePlayStore.js");
/* harmony import */ var _HomepageOption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomepageOption */ "./components/icons/HomepageOption.js");
/* harmony import */ var _nstagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./İnstagram */ "./components/icons/İnstagram.js");
/* harmony import */ var _Linkdn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Linkdn */ "./components/icons/Linkdn.js");
/* harmony import */ var _Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Mail */ "./components/icons/Mail.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Media */ "./components/icons/Media.js");
/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MetaData */ "./components/icons/MetaData.js");
/* harmony import */ var _OpenseaLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OpenseaLogo */ "./components/icons/OpenseaLogo.js");
/* harmony import */ var _QrCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./QrCode */ "./components/icons/QrCode.js");
/* harmony import */ var _RaribleLogo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RaribleLogo */ "./components/icons/RaribleLogo.js");
/* harmony import */ var _SavingsPig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SavingsPig */ "./components/icons/SavingsPig.js");
/* harmony import */ var _SmartContract_con__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SmartContractİcon */ "./components/icons/SmartContractİcon.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Twitter */ "./components/icons/Twitter.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Vector */ "./components/icons/Vector.js");
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Youtube */ "./components/icons/Youtube.js");
























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

/***/ "./components/layout/downloadNFTCreator/index.js":
/*!*******************************************************!*\
  !*** ./components/layout/downloadNFTCreator/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/downloadNFTCreator/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var _Photos_google_play_store_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Photos/google-play-store.png */ "./Photos/google-play-store.png");
/* harmony import */ var _Photos_app_store_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Photos/app-store.png */ "./Photos/app-store.png");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\downloadNFTCreator\\index.js";










function Layout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().navigation),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().body),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().leftSide),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
          bold: true,
          children: ["Download Ownable-NS NFT", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 48
          }, this), "Creator"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().rightSide),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().rightSideContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().topTextContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                children: "Ownable-NS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 40
              }, this), "Mobile App is used to create and view Semi-Fungible NFTs for artwork, merchandise, tickets, coupons, and more! All accounts are exportable to MetaMask wallet."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                children: "Note:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 40
              }, this), "Some functionality is only available to Android users"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: "The NFTs you generate are authentication and ownership records for your digital creations and physical goods like paintings or designer shoes. Records are backed up on the blockchain and impossible to counterfeit. All records can be tracked back to the original creator. Your blockchain records are 100% secured by your digital keys and identity. NFTs are the world's most secure way to provide authenticity of goods, prevent counterfeiting and provide proof of ownership. Use the links below to download the apps and start creating NFTs today:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().middleImageContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                src: _Photos_google_play_store_png__WEBPACK_IMPORTED_MODULE_4__.default,
                alt: "googlePlayStore",
                height: 71.009,
                width: 240
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                src: _Photos_app_store_png__WEBPACK_IMPORTED_MODULE_5__.default,
                alt: "googlePlayStore",
                height: 71.009,
                width: 240
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().bottomTextContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                children: "Ownerfy NFT Creator "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 40
              }, this), "mobile app allows you to:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().mobileAppList),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                children: "Create an inventory of your digital and physical items"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                children: "Preserve the creator information and the ownership history"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                children: "Validate authenticity of merchandise by checking its source"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                children: ["Supports digital assets created on other platforms like:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
                  className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().platformList),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "OpenSea"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "MLB Digital Collectibles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "Enjin Assets"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "CryptoKitties"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "BasketBall Digital Collectibles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "MyCryptoHeros"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "Decentraland"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "0xUniverse"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                    children: "and many more"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().features),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  children: "Ownerfy NFT Generator"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 44
                }, this), "features:"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                  children: "Support for ERC721 or ERC1155 digital assets"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                  children: "Ownership integrity - you, the creator, own your private keys"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                  children: "Opportunity to trade created NFTs on OpenSea and other trading platforms"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
                children: "Tokens minted by your address are unique in all the world and can only be created by you and you alone."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/downloadNFTCreator.js":
/*!*************************************!*\
  !*** ./pages/downloadNFTCreator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_downloadNFTCreator_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/downloadNFTCreator/index */ "./components/layout/downloadNFTCreator/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\downloadNFTCreator.js";




function DownloadNFTCreator() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_downloadNFTCreator_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadNFTCreator);

/***/ }),

/***/ "./Photos/app-store.png":
/*!******************************!*\
  !*** ./Photos/app-store.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/Photos/app-store.bfceb118a36daecad9b9273aeab18d87.png","height":72,"width":241,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2FPhotos%2Fapp-store.bfceb118a36daecad9b9273aeab18d87.png&w=8&q=70"});

/***/ }),

/***/ "./Photos/google-play-store.png":
/*!**************************************!*\
  !*** ./Photos/google-play-store.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/Photos/google-play-store.70ec0b15a1dabd8cf1af865fb16a8a69.png","height":72,"width":241,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2FPhotos%2Fgoogle-play-store.70ec0b15a1dabd8cf1af865fb16a8a69.png&w=8&q=70"});

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

/***/ "./components/layout/downloadNFTCreator/style.module.css":
/*!***************************************************************!*\
  !*** ./components/layout/downloadNFTCreator/style.module.css ***!
  \***************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__15NSl",
	"body": "style_body__4rKyr",
	"leftSide": "style_leftSide__6DeTk",
	"rightSide": "style_rightSide__3NiRB",
	"rightSideContainer": "style_rightSideContainer__17JyB",
	"topTextContainer": "style_topTextContainer__KI3Ha",
	"middleImageContainer": "style_middleImageContainer__FenaD",
	"bottomTextContainer": "style_bottomTextContainer__3XxuZ"
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

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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
var __webpack_exports__ = (__webpack_exec__("./pages/downloadNFTCreator.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQWhCLEVBQTJCO0FBQ3ZCK0UsUUFBQUEsUUFBUSxDQUFDL0UsU0FBRCxDQUFSO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSZ0IsRUFRZGdGLE9BUmMsQ0FBakI7QUFTQU0sRUFBQUEsU0FBUyxDQUFDL0MsR0FBVixDQUFjcUIsRUFBZCxFQUFrQjJCLFFBQVEsR0FBRztBQUN6QjNCLElBQUFBLEVBRHlCO0FBRXpCcUIsSUFBQUEsUUFGeUI7QUFHekJDLElBQUFBO0FBSHlCLEdBQTdCO0FBS0EsU0FBT0ssUUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkQ7QUFFQTs7O0FBRUEsU0FBU0ssa0JBQVQsR0FBNkI7QUFDekIsc0JBQ0ksOERBQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0g7O0FBRUQsaUVBQWVBLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpRUFBZSxDQUFDLHdPQUF3Tzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhQLGlFQUFlLENBQUMsd1BBQXdQOzs7Ozs7Ozs7O0FDQXhRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9mcmFtZS9mcmFtZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9DaGVja1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9EaXNjb3JkLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duxLBjb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRXRoTG9nby5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9GYWNlYm9vay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9GaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Hb29nbGVQbGF5U3RvcmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvSG9tZXBhZ2VPcHRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTGlua2RuLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01haWwuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWV0YURhdGEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvT3BlbnNlYUxvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvUXJDb2RlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1JhcmlibGVMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1NhdmluZ3NQaWcuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvU21hcnRDb250cmFjdMSwY29uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1R3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvVmVjdG9yLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBuc3RhZ3JhbS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvZG93bmxvYWRORlRDcmVhdG9yL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L2hlYWQtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC90ZXh0LXRpdGxlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9wYWdlcy9kb3dubG9hZE5GVENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL1Bob3Rvcy9hcHAtc3RvcmUucG5nIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9QaG90b3MvZ29vZ2xlLXBsYXktc3RvcmUucG5nIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2J1dHRvbi9iYXNlL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvZG93bmxvYWRORlRDcmVhdG9yL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L2hlYWQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L3RleHQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcblxyXG5mdW5jdGlvbiBmcmFtZUJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbGlua0J1dHRvbiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiB7Y2hpbGRyZW59IDwvYT5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICBjb25zdCBDb21wID0gYm9yZGVyID8gZnJhbWVCdXR0b24gOiBsaW5rQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29tcCAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmJhc2VCdG4gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyICYmIHN0eWxlcy5GcmFtZUJvcmRlcixcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICBdKX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn0gXHJcbiAgICAgICAgICAgIDwvQ29tcD5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblxyXG5cclxuLypcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIGNuIHN0YW5kIGZvciBjbGFzc25hbWVzOiAnQ2xhc3NuYW1lcycgIGlzIHByZXZlbnQgY2xhc3Mgb3ZlcndyaXRlLiBJdCBjb21lcyBtb3JlIHRoYW4gb25lIGNsYXNzIGludG8gZnVuY3Rpb24sIGl0J3MgcmVhc29uIGFib3V0IGNvbmZsaWN0LiBcclxuICAgIGJvcmRlcjogU29tZSBidXR0b24gaGFzIGJvcmRlciwgYnV0IHNvbWUgaXQgaGFzbid0LiBXaGVuIGJ1dHRvbiBoYXMgYm9yZGVyLCBib3JkZXIgYXR0cmlidXRlIHdpbCBoYXZlIGJlZW4gIGFjdGl2YXRlZC4gXHJcbiAgICBjaGlsZHJlbjogQ29udGVudCwgd2hpY2ggaW5jbHVkZSB3aXRoaW4gZWxlbWVudC5cclxuICAgIC4uLnByb3BzOiBXaGF0IGlmIEFueSBwcm9wZXJ0aWVzIGlzIHBhc3NlZCBpbnRvIGZ1bmN0aW9uLCBGdW5jdGlvbiBjYW4gY2F0Y2guXHJcbiovXHJcblxyXG4vKiBcclxuLy8gVE8gRE8gTGlzdFxyXG5bXSAgZnJhbWUgYnV0dG9uIC8gVHJhbnNwYXJlbnQgLSBjb2xvclxyXG5cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZnJhbWVCdXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Jhc2UvaW5kZXgnXHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSBcIi4uL3RleHQvdGV4dC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gRnJhbWVCdXR0b24gKHtjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZnJhbWVCdG59XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRUaXRsZT57Y2hpbGRyZW59PC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYW1lQnV0dG9uXHJcblxyXG4vKiBcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIDxUZXh0VGl0bGUvPjogSXQncyB2YXJ5IG9mIHRleHQsIEl0IGp1c3QgaGFzIHNvbWUgc3BlY2lmaWMgYXR0cmlidXRlIHN1Y2ggYXMgMTYgcHggZm9udCBzaXplLCBhbmQgYm9sZCBmb250IHdpZ2h0LlxyXG4qLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcHBTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjYXBwLXN0b3JlX3N2Z19fY2xpcDBfNTE6NTAxKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjMxLjQ2MSA3MS4wOUg4LjQwN0MzLjc3MiA3MS4wOSAwIDY3LjMwOCAwIDYyLjY3OFY4LjRDMCAzLjc2OCAzLjc3MiAwIDguNDA3IDBoMjIzLjA1NEMyMzYuMDk0IDAgMjQwIDMuNzY4IDI0MCA4LjR2NTQuMjc4YzAgNC42My0zLjkwNiA4LjQxMi04LjUzOSA4LjQxMnpcIlxuICAgICAgICAgIGZpbGw9XCIjQTZBNkE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIzOC4yNzkgNjIuNjhhNi44MDggNi44MDggMCAwMS02LjgxNiA2LjgwN0g4LjQwN2MtMy43NjcgMC02LjgyNS0zLjA0Ni02LjgyNS02LjgwN1Y4LjM5OGMwLTMuNzYgMy4wNTgtNi44MTYgNi44MjUtNi44MTZoMjIzLjA1NGE2LjgxNSA2LjgxNSAwIDAxNi44MTYgNi44MTZsLjAwMiA1NC4yODJ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01My41NiAzNS4xNjFjLS4wNS01LjcyOCA0LjY5Mi04LjUxNSA0LjkxLTguNjQ0LTIuNjg3LTMuOTE2LTYuODUtNC40NS04LjMxNC00LjQ5My0zLjQ5Ni0uMzY4LTYuODg5IDIuMDkxLTguNjcgMi4wOTEtMS44MTcgMC00LjU2LTIuMDU2LTcuNTE2LTEuOTk1LTMuODA1LjA1OC03LjM2NCAyLjI2LTkuMzE2IDUuNjgtNC4wMjggNi45NzItMS4wMjQgMTcuMjE4IDIuODM2IDIyLjg1MyAxLjkzIDIuNzYgNC4xODYgNS44NDIgNy4xNCA1LjczNCAyLjg4OC0uMTIgMy45NjctMS44NDEgNy40NTMtMS44NDEgMy40NTUgMCA0LjQ2OCAxLjg0IDcuNDggMS43NzIgMy4xLS4wNSA1LjA1Mi0yLjc3MyA2LjkxNS01LjU1OCAyLjIzMS0zLjE2MyAzLjEyNy02LjI3OSAzLjE2My02LjQzOS0uMDczLS4wMjUtNi4wMjEtMi4yOTQtNi4wOC05LjE2ek00Ny44NzIgMTguMzE2YzEuNTU0LTEuOTQyIDIuNjE3LTQuNTg1IDIuMzIyLTcuMjY3LTIuMjUuMS01LjA2MiAxLjU1NS02LjY4MSAzLjQ1NS0xLjQzMyAxLjY3NC0yLjcxMyA0LjQxOC0yLjM4MiA2Ljk5OSAyLjUyNi4xODggNS4xMi0xLjI3NCA2Ljc0LTMuMTg3ek05NS4zNjkgNTUuOTloLTQuMDM3bC0yLjIxMi02Ljk0N2gtNy42ODdsLTIuMTA3IDYuOTQ3aC0zLjkzbDcuNjE2LTIzLjY1MWg0LjcwNGw3LjY1MyAyMy42NTF6bS02LjkxNi05Ljg2MWwtMi02LjE3NmMtLjIxMS0uNjMxLS42MDgtMi4xMTctMS4xOTMtNC40NTZoLS4wN2ExNzEuNzY2IDE3MS43NjYgMCAwMS0xLjEyNCA0LjQ1Nkw4Mi4xIDQ2LjEyOGg2LjM1MnpNMTE0Ljk1NSA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1MiA2Ljg3Ni0xLjQwNSAxLjQ5OC0zLjE0OSAyLjI0Ni01LjIzMSAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDQtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0LTUuNjE0aDMuMzMzbC4yMTEgMi43MDNoLjA3MWMxLjI2NC0yLjAzNyAzLjE4Mi0zLjA1MyA1Ljc1Ny0zLjA1MyAyLjAxMiAwIDMuNjkyLjc5NCA1LjAzNiAyLjM4NSAxLjM0OCAxLjU5MiAyLjAyIDMuNjg2IDIuMDIgNi4yODN6bS0zLjg2Mi4xMzhjMC0xLjY2LS4zNzMtMy4wMjgtMS4xMjMtNC4xMDUtLjgyLTEuMTI0LTEuOTItMS42ODUtMy4zLTEuNjg1LS45MzUgMC0xLjc4NS4zMTMtMi41NDQuOTMtLjc2MS42MjEtMS4yNTggMS40MzQtMS40OTEgMi40NC0uMTE4LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zOCAyLjI4OCAxLjE0MSAzLjE0Mi43NjEuODU1IDEuNzQ5IDEuMjgyIDIuOTY1IDEuMjgyIDEuNDI4IDAgMi41MzktLjU1MSAzLjMzNC0xLjY1Ljc5Ni0xLjEgMS4xOTQtMi41NSAxLjE5NC00LjM1MnpNMTM0LjU3NiA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1NCA2Ljg3Ni0xLjQwMiAxLjQ5OC0zLjE0NiAyLjI0Ni01LjIyOCAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDMtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0MS01LjYxNGgzLjMzNGwuMjExIDIuNzAzaC4wNzFjMS4yNjMtMi4wMzcgMy4xODEtMy4wNTMgNS43NTctMy4wNTMgMi4wMTEgMCAzLjY5MS43OTQgNS4wMzggMi4zODUgMS4zNDIgMS41OTIgMi4wMTYgMy42ODYgMi4wMTYgNi4yODN6bS0zLjg2MS4xMzhjMC0xLjY2LS4zNzUtMy4wMjgtMS4xMjYtNC4xMDUtLjgxOS0xLjEyNC0xLjkxNi0xLjY4NS0zLjI5Ny0xLjY4NS0uOTM3IDAtMS43ODUuMzEzLTIuNTQ2LjkzLS43NjEuNjIxLTEuMjU3IDEuNDM0LTEuNDkgMi40NC0uMTE1LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zODEgMi4yODggMS4xMzggMy4xNDIuNzYxLjg1MyAxLjc0OSAxLjI4MiAyLjk2OSAxLjI4MiAxLjQyNyAwIDIuNTM4LS41NTEgMy4zMzMtMS42NS43OTctMS4xIDEuMTk1LTIuNTUgMS4xOTUtNC4zNTJ6TTE1Ni41MTQgNDkuMzU4YzAgMi4wMTItLjY5OSAzLjY0OS0yLjEwMSA0LjkxMi0xLjU0MiAxLjM4MS0zLjY4OCAyLjA3LTYuNDQ1IDIuMDctMi41NDYgMC00LjU4Ny0uNDktNi4xMzEtMS40NzNsLjg3OC0zLjE1OGMxLjY2NCAxLjAwNiAzLjQ5IDEuNTEgNS40NzkgMS41MSAxLjQyNyAwIDIuNTM5LS4zMjMgMy4zMzctLjk2Ni43OTQtLjY0MyAxLjE5MS0xLjUwNyAxLjE5MS0yLjU4NCAwLS45Ni0uMzI3LTEuNzY4LS45ODMtMi40MjQtLjY1My0uNjU2LTEuNzQyLTEuMjY2LTMuMjY0LTEuODMtNC4xNDItMS41NDQtNi4yMTItMy44MDYtNi4yMTItNi43ODEgMC0xLjk0NC43MjYtMy41MzkgMi4xNzgtNC43OCAxLjQ0Ny0xLjI0MSAzLjM3OC0xLjg2MiA1Ljc5Mi0xLjg2MiAyLjE1MyAwIDMuOTQxLjM3NSA1LjM2OSAxLjEyM2wtLjk0OCAzLjA5Yy0xLjMzMy0uNzI2LTIuODQxLTEuMDg4LTQuNTI4LTEuMDg4LTEuMzMzIDAtMi4zNzUuMzI5LTMuMTIxLjk4My0uNjMyLjU4NC0uOTQ4IDEuMjk3LS45NDggMi4xNDEgMCAuOTM1LjM2MSAxLjcwOCAxLjA4NiAyLjMxNi42MzEuNTYxIDEuNzc4IDEuMTcgMy40NDIgMS44MjUgMi4wMzYuODIgMy41MzEgMS43NzcgNC40OTIgMi44NzYuOTU5IDEuMDk0IDEuNDM3IDIuNDY1IDEuNDM3IDQuMXpNMTY5LjA0NSA0MS43OGgtNC4xNzd2OC4yOGMwIDIuMTA2LjczNiAzLjE1OCAyLjIxMSAzLjE1OC42NzcgMCAxLjIzOS0uMDU5IDEuNjg0LS4xNzZsLjEwNSAyLjg3N2MtLjc0Ny4yOC0xLjczLjQyLTIuOTQ4LjQyLTEuNDk3IDAtMi42NjctLjQ1Ny0zLjUxMS0xLjM2OS0uODQxLS45MTMtMS4yNjQtMi40NDUtMS4yNjQtNC41OTd2LTguNTk3aC0yLjQ4OXYtMi44NDRoMi40ODlWMzUuODFsMy43MjMtMS4xMjN2NC4yNDVoNC4xNzd2Mi44NDh6TTE4Ny44OTUgNDcuMzIzYzAgMi42MjEtLjc1IDQuNzc0LTIuMjQ3IDYuNDU3LTEuNTcgMS43MzMtMy42NTMgMi41OTYtNi4yNTEgMi41OTYtMi41MDMgMC00LjQ5Ni0uODMtNS45ODItMi40OS0xLjQ4Ni0xLjY2LTIuMjI5LTMuNzU1LTIuMjI5LTYuMjggMC0yLjY0My43NjQtNC44MDggMi4yOTgtNi40OTEgMS41MzEtMS42ODUgMy41OTctMi41MjcgNi4xOTQtMi41MjcgMi41MDMgMCA0LjUxOC44MyA2LjAzOCAyLjQ5MiAxLjQ1NCAxLjYxMSAyLjE3OSAzLjY5MyAyLjE3OSA2LjI0M3ptLTMuOTMyLjEyM2MwLTEuNTczLS4zMzYtMi45MjItMS4wMTctNC4wNDctLjc5NS0xLjM2Mi0xLjkzMS0yLjA0LTMuNDAzLTIuMDQtMS41MjMgMC0yLjY4MS42OC0zLjQ3NSAyLjA0LS42ODEgMS4xMjctMS4wMTcgMi40OTctMS4wMTcgNC4xMTggMCAxLjU3Mi4zMzYgMi45MjEgMS4wMTcgNC4wNDUuODE5IDEuMzYxIDEuOTY0IDIuMDQgMy40NDEgMi4wNCAxLjQ0NyAwIDIuNTgzLS42OTMgMy40MDMtMi4wNzYuNjk5LTEuMTQ2IDEuMDUxLTIuNTEgMS4wNTEtNC4wOHpNMjAwLjIxNSA0Mi4yNjhhNi41OCA2LjU4IDAgMDAtMS4xOTQtLjEwNWMtMS4zMzQgMC0yLjM2NS41MDMtMy4wOSAxLjUxMS0uNjMxLjg4OS0uOTQ4IDIuMDEyLS45NDggMy4zNjh2OC45NDhoLTMuNzg4bC4wMzUtMTEuNjgzYTkyLjkxIDkyLjkxIDAgMDAtLjE0Mi01LjM3aDMuMzAxbC4xMzkgMy4yNjRoLjEwNWMuNC0xLjEyMiAxLjAzMS0yLjAyNSAxLjg5NS0yLjcwMi44NDUtLjYxIDEuNzU3LS45MTMgMi43NC0uOTEzLjM1IDAgLjY2Ni4wMjUuOTQ3LjA3djMuNjEyek0yMTcuMTY2IDQ2LjY1NmMwIC42OC0uMDQ0IDEuMjUyLS4xMzggMS43MTloLTExLjM3MWMuMDQ0IDEuNjg1LjU5NCAyLjk3MyAxLjY1IDMuODYyLjk1OC43OTQgMi4xOTcgMS4xOTIgMy43MTkgMS4xOTIgMS42ODMgMCAzLjIxOS0uMjY4IDQuNjAxLS44MDZsLjU5MyAyLjYzYy0xLjYxNC43MDQtMy41MiAxLjA1NC01LjcxOSAxLjA1NC0yLjY0NSAwLTQuNzIxLS43NzktNi4yMzMtMi4zMzQtMS41MDctMS41NTUtMi4yNjMtMy42NDMtMi4yNjMtNi4yNjMgMC0yLjU3MS43MDMtNC43MTMgMi4xMDktNi40MiAxLjQ3Mi0xLjgyNCAzLjQ2MS0yLjczNiA1Ljk2NC0yLjczNiAyLjQ1OSAwIDQuMzIuOTEyIDUuNTg0IDIuNzM1IDEuMDAxIDEuNDQ5IDEuNTA0IDMuMjQgMS41MDQgNS4zNjd6bS0zLjYxNC0uOTgyYy4wMjUtMS4xMjQtLjIyMi0yLjA5NC0uNzM2LTIuOTEzLS42NTYtMS4wNTQtMS42NjQtMS41OC0zLjAyLTEuNTgtMS4yNCAwLTIuMjQ4LjUxMy0zLjAxNyAxLjU0NC0uNjMxLjgyLTEuMDA3IDEuODAyLTEuMTIyIDIuOTQ3aDcuODk1di4wMDJ6TTg3LjIgMTcuNzg5YzAgMi4wOTEtLjYyNyAzLjY2Ni0xLjg4IDQuNzIzLTEuMTYyLjk3Ni0yLjgxMSAxLjQ2NS00Ljk0OCAxLjQ2NS0xLjA2IDAtMS45NjctLjA0Ni0yLjcyNi0uMTM5di0xMS40M2MuOTktLjE2IDIuMDU3LS4yNCAzLjIxLS4yNCAyLjAzNSAwIDMuNTY5LjQ0MiA0LjYwNCAxLjMyNyAxLjE1OSAxIDEuNzQgMi40MzEgMS43NCA0LjI5NHptLTEuOTY0LjA1MWMwLTEuMzU2LS4zNi0yLjM5Ni0xLjA3OC0zLjEyLS43MTgtLjcyNC0xLjc2Ny0xLjA4Ny0zLjE0OC0xLjA4Ny0uNTg3IDAtMS4wODYuMDQtMS41LjEyMXY4LjY5Yy4yMjkuMDM1LjY0OC4wNSAxLjI1OC4wNSAxLjQyNiAwIDIuNTI2LS4zOTYgMy4zMDEtMS4xODguNzc1LS43OTMgMS4xNjctMS45NDggMS4xNjctMy40NjZ6TTk3LjYxNiAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk0IDEuMjc2LTMuMDcgMS4yNzYtMS4yMyAwLTIuMjEtLjQwNy0yLjk0LTEuMjI0LS43My0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDMtMS4yNCAxLjIzIDAgMi4yMi40MDYgMi45NjggMS4yMjIuNzEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45MzMuMDZjMC0uNzczLS4xNjctMS40MzYtLjQ5OS0xLjk4OS0uMzkxLS42NjgtLjk0OC0xLjAwMi0xLjY3MS0xLjAwMi0uNzQ5IDAtMS4zMTguMzM0LTEuNzA5IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjggMS40MzYuNSAxLjk4OC40MDQuNjY5Ljk2NiAxLjAwMyAxLjY5MSAxLjAwMy43MTEgMCAxLjI3LS4zNCAxLjY3MS0xLjAyLjM0NS0uNTY0LjUxNy0xLjIzMi41MTctMi4wMDV6TTExMS41ODIgMTUuNDk2bC0yLjYyMiA4LjM3OGgtMS43MDdsLTEuMDg2LTMuNjM4YTI3LjU5NSAyNy41OTUgMCAwMS0uNjc0LTIuNzA3aC0uMDMzYy0uMTYyLjkyLS4zODYgMS44MjItLjY3NCAyLjcwN2wtMS4xNTQgMy42MzhoLTEuNzI2bC0yLjQ2Ni04LjM3OGgxLjkxNWwuOTQ3IDMuOTgzYy4yMy45NDIuNDE4IDEuODQuNTY5IDIuNjg5aC4wMzRhMjkuOCAyOS44IDAgMDEuNjkyLTIuNjcybDEuMTg5LTMuOTk4aDEuNTE4bDEuMTQgMy45MTNjLjI3NS45NTQuNDk5IDEuODczLjY3MiAyLjc1OGguMDUxYy4xMjYtLjg2MS4zMTctMS43OC41NjktMi43NThsMS4wMTctMy45MTNoMS44Mjl2LS4wMDJ6TTEyMS4yNDEgMjMuODc0aC0xLjg2M3YtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjg5LTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0Ni42MWEyLjE2MyAyLjE2MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjNWMTcuODljMC0uNzM2LS4wMjMtMS41MzQtLjA2OC0yLjM5OGgxLjYzN2wuMDg4IDEuMzFoLjA1MWMuMjE3LS40MDcuNTQxLS43NDMuOTY1LTEuMDExYTMuMTUyIDMuMTUyIDAgMDExLjY4OS0uNDcxYy43ODMgMCAxLjQzMy4yNTIgMS45NTEuNzU5LjY0My42Mi45NjUgMS41NDYuOTY1IDIuNzc2djUuMDE5ek0xMjYuMzc5IDIzLjg3NGgtMS44NjJWMTEuNjUyaDEuODYydjEyLjIyMnpNMTM3LjM0OCAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk2IDEuMjc2LTMuMDcxIDEuMjc2LTEuMjMyIDAtMi4yMTEtLjQwNy0yLjk0LTEuMjI0LS43MjktLjgxNi0xLjA5My0xLjg0NS0xLjA5My0zLjA4NiAwLTEuMjk3LjM3NS0yLjM2MiAxLjEyOC0zLjE4OC43NTQtLjgyNyAxLjc2OC0xLjI0IDMuMDQyLTEuMjQgMS4yMzIgMCAyLjIxOS40MDYgMi45NjkgMS4yMjIuNzExLjc5MyAxLjA2OSAxLjgxNiAxLjA2OSAzLjA2OHptLTEuOTM1LjA2YzAtLjc3My0uMTY3LTEuNDM2LS40OTktMS45ODktLjM5LS42NjgtLjk0OC0xLjAwMi0xLjY3LTEuMDAyLS43NSAwLTEuMzE5LjMzNC0xLjcwOCAxLjAwMi0uMzM0LjU1My0uNSAxLjIyNy0uNSAyLjAyMyAwIC43NzMuMTY4IDEuNDM2LjUgMS45ODguNDA0LjY2OS45NjUgMS4wMDMgMS42OTEgMS4wMDMuNzExIDAgMS4yNjctLjM0IDEuNjY5LTEuMDIuMzQ3LS41NjQuNTE3LTEuMjMyLjUxNy0yLjAwNXpNMTQ2LjM2NSAyMy44NzRoLTEuNjczbC0uMTM5LS45NjVoLS4wNTJjLS41NzIuNzctMS4zODggMS4xNTUtMi40NDggMS4xNTUtLjc5MSAwLTEuNDMxLS4yNTQtMS45MTItLjc1OS0uNDM4LS40NTgtLjY1Ny0xLjAyOS0uNjU3LTEuNzA2IDAtMS4wMjQuNDI3LTEuODA0IDEuMjg2LTIuMzQ0Ljg1Ny0uNTQgMi4wNjItLjgwNSAzLjYxNC0uNzkzdi0uMTU2YzAtMS4xMDQtLjU4LTEuNjU1LTEuNzQtMS42NTUtLjgyNyAwLTEuNTU2LjIwOC0yLjE4NS42MmwtLjM3OS0xLjIyMmMuNzc5LS40ODIgMS43NDEtLjcyNCAyLjg3NS0uNzI0IDIuMTkgMCAzLjI4OSAxLjE1NSAzLjI4OSAzLjQ2NnYzLjA4NWMwIC44MzcuMDQxIDEuNTA0LjEyMSAxLjk5OHptLTEuOTM1LTIuODh2LTEuMjkxYy0yLjA1NS0uMDM2LTMuMDgyLjUyNy0zLjA4MiAxLjY4OCAwIC40MzcuMTE3Ljc2NC4zNTcuOTgzLjI0LjIxOS41NDYuMzI3LjkxLjMyNy40MDkgMCAuNzkxLS4xMyAxLjE0LS4zODdhMS41ODcgMS41ODcgMCAwMC42NzUtMS4zMnpNMTU2Ljk1MSAyMy44NzRoLTEuNjUzbC0uMDg3LTEuMzQ1aC0uMDUyYy0uNTI4IDEuMDIzLTEuNDI3IDEuNTM1LTIuNjkxIDEuNTM1LTEuMDEgMC0xLjg1MS0uMzk2LTIuNTE4LTEuMTg5LS42NjYtLjc5My0uOTk5LTEuODIyLS45OTktMy4wODUgMC0xLjM1Ni4zNjEtMi40NTUgMS4wODYtMy4yOTMuNzAzLS43ODMgMS41NjMtMS4xNzQgMi41ODctMS4xNzQgMS4xMjUgMCAxLjkxMy4zOCAyLjM2MSAxLjEzOGguMDM1di00LjgxaDEuODY1djkuOTY2YzAgLjgxNi4wMjIgMS41NjcuMDY2IDIuMjU3em0tMS45MzEtMy41MzN2LTEuMzk3YzAtLjI0Mi0uMDE3LS40MzctLjA1MS0uNTg3YTIuMTIzIDIuMTIzIDAgMDAtLjY3NC0xLjEyOCAxLjgzMSAxLjgzMSAwIDAwLTEuMjQ2LS40NTdjLS42OTUgMC0xLjIzOS4yNzYtMS42MzkuODI4LS4zOTcuNTUzLS41OTggMS4yNTgtLjU5OCAyLjEyIDAgLjgyOS4xOTEgMS41LjU3MyAyLjAxOC40MDMuNTUuOTQ3LjgyNiAxLjYyOC44MjYuNjEyIDAgMS4xMDEtLjIzIDEuNDcyLS42OS4zNi0uNDI0LjUzNS0uOTM2LjUzNS0xLjUzM3pNMTcyLjg4NSAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzEuODUxLTEuNzkyIDEuMjc2LTMuMDcgMS4yNzYtMS4yMjggMC0yLjIwOC0uNDA3LTIuOTQtMS4yMjQtLjcyOS0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDYtMS4yNCAxLjIyOCAwIDIuMjE4LjQwNiAyLjk2NSAxLjIyMi43MTEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45My4wNmMwLS43NzMtLjE2Ny0xLjQzNi0uNS0xLjk4OS0uMzkzLS42NjgtLjk0Ny0xLjAwMi0xLjY3My0xLjAwMi0uNzQ2IDAtMS4zMTUuMzM0LTEuNzA4IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjcgMS40MzYuNSAxLjk4OC40MDMuNjY5Ljk2NSAxLjAwMyAxLjY5IDEuMDAzLjcxMiAwIDEuMjcyLS4zNCAxLjY3My0xLjAyLjM0My0uNTY0LjUxOC0xLjIzMi41MTgtMi4wMDV6TTE4Mi45MDMgMjMuODc0aC0xLjg2MXYtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjkxLTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0NC42MWEyLjE1MyAyLjE1MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjVWMTcuODljMC0uNzM2LS4wMjEtMS41MzQtLjA2Ni0yLjM5OGgxLjYzNmwuMDg3IDEuMzFoLjA1MWMuMjE5LS40MDcuNTQzLS43NDMuOTY2LTEuMDExYTMuMTUzIDMuMTUzIDAgMDExLjY5LS40NzFjLjc4MSAwIDEuNDMyLjI1MiAxLjk0OS43NTkuNjQ1LjYyLjk2NSAxLjU0Ni45NjUgMi43NzZ2NS4wMTl6TTE5NS40NDIgMTYuODkxaC0yLjA1MnY0LjA3YzAgMS4wMzQuMzY1IDEuNTUyIDEuMDg3IDEuNTUyLjMzNCAwIC42MTEtLjAyOS44My0uMDg4bC4wNDggMS40MTNjLS4zNjguMTM5LS44NTIuMjA4LTEuNDQ3LjIwOC0uNzM2IDAtMS4zMDktLjIyNC0xLjcyMy0uNjcxLS40MTYtLjQ0OC0uNjIyLTEuMjAyLS42MjItMi4yNnYtNC4yMjRoLTEuMjI1di0xLjM5NWgxLjIyNVYxMy45NmwxLjgyNi0uNTV2Mi4wODRoMi4wNTF2MS4zOTdoLjAwMnpNMjA1LjMwNSAyMy44NzRoLTEuODY1VjE5LjExYzAtMS41MDItLjU2Mi0yLjI1NC0xLjY4Ny0yLjI1NC0uODY0IDAtMS40NTQuNDM2LTEuNzc4IDEuMzA3YTIuMzQ0IDIuMzQ0IDAgMDAtLjA4Ny42N3Y1LjAzOGgtMS44NjF2LTEyLjIyaDEuODYxVjE2LjdoLjAzNmMuNTg2LS45MTkgMS40MjctMS4zNzggMi41MTctMS4zNzguNzcxIDAgMS40MS4yNTMgMS45MTYuNzYuNjMxLjYzLjk0OCAxLjU2OS45NDggMi44MXY0Ljk4ek0yMTUuNDc5IDE5LjI4OWMwIC4zMzQtLjAyNS42MTQtLjA2OS44NDRoLTUuNTg4Yy4wMjUuODI4LjI5MiAxLjQ1OS44MDkgMS44OTYuNDczLjM5MSAxLjA4My41ODcgMS44MjkuNTg3LjgyNyAwIDEuNTgxLS4xMzIgMi4yNi0uMzk3bC4yOTIgMS4yOTRjLS43OTUuMzQ1LTEuNzMuNTE3LTIuODEzLjUxNy0xLjI5OCAwLTIuMzItLjM4Mi0zLjA1OS0xLjE0Ni0uNzQ0LS43NjQtMS4xMTItMS43OS0xLjExMi0zLjA3NiAwLTEuMjY0LjM0NC0yLjMxNiAxLjAzNS0zLjE1NS43MjItLjg5NiAxLjY5OC0xLjM0NCAyLjkzLTEuMzQ0IDEuMjA1IDAgMi4xMjEuNDQ4IDIuNzM5IDEuMzQ0LjUuNzEuNzQ3IDEuNTkuNzQ3IDIuNjM2em0tMS43NzgtLjQ4MmMuMDE1LS41NTMtLjEwOC0xLjAzLS4zNjEtMS40My0uMzIzLS41MTgtLjgxNi0uNzc3LTEuNDgyLS43NzctLjYwOCAwLTEuMTA0LjI1Mi0xLjQ4My43NTgtLjMwOS40MDQtLjQ5Mi44ODYtLjU1MyAxLjQ0OWgzLjg3OXpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImFwcC1zdG9yZV9zdmdfX2NsaXAwXzUxOjUwMVwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgyNDB2NzEuMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0FwcFN0b3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2hlY2tTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE2LjA3MSAwSDEuOTNBMS45MjkgMS45MjkgMCAwMDAgMS45MjlWMTYuMDdDMCAxNy4xMzcuODYzIDE4IDEuOTI5IDE4SDE2LjA3QTEuOTI5IDEuOTI5IDAgMDAxOCAxNi4wNzFWMS45M0ExLjkyOSAxLjkyOSAwIDAwMTYuMDcxIDB6bTAgMTYuMDcxSDEuOTNWMS45M0gxNi4wN1YxNi4wN3ptLTEuNDQtOS43MTJsLTYuOTM1IDYuODc5YS40ODIuNDgyIDAgMDEtLjY4Mi0uMDAzTDMuMzY3IDkuNTU4YS40ODIuNDgyIDAgMDEuMDAzLS42ODJsLjkxMi0uOTA1YS40ODIuNDgyIDAgMDEuNjgyLjAwM2wyLjQwMyAyLjQyMiA1LjY3OS01LjYzNGEuNDgyLjQ4MiAwIDAxLjY4Mi4wMDNsLjkwNS45MTJhLjQ4Mi40ODIgMCAwMS0uMDAyLjY4MnpcIlxuICAgICAgICBmaWxsPVwiI0ZDQzcyOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NoZWNrU3F1YXJlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRGlzY29yZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUuNjAzIDBIMy4zOTdDMS41MjUgMCAwIDEuMzM0IDAgMi45ODd2MTkuNjA0YzAgMS42NTMgMS41MjUgMi45ODcgMy4zOTcgMi45ODdIMjIuMTlsLS44NzgtMi42ODMgMi4xMjEgMS43MjYgMi4wMDUgMS42MjRMMjkgMjlWMi45ODdDMjkgMS4zMzQgMjcuNDc1IDAgMjUuNjAzIDB6bS02LjM5NyAxOC45MzdzLS41OTYtLjYyMy0xLjA5My0xLjE3NWMyLjE3LS41MzYgMi45OTktMS43MjUgMi45OTktMS43MjUtLjY4LjM5Mi0xLjMyNi42NjctMS45MDYuODU1LS44MjguMzA1LTEuNjI0LjUwOC0yLjQwMy42MjRhMTMuMjQgMTMuMjQgMCAwMS00LjI5Mi0uMDE0IDE1LjQ1IDE1LjQ1IDAgMDEtMi40MzYtLjYyNGMtLjM4LS4xMy0uNzk1LS4yOS0xLjIxLS40OTMtLjA0OS0uMDI5LS4wOTktLjA0NC0uMTQ4LS4wNzNhLjIyOC4yMjggMCAwMS0uMDY3LS4wNDNjLS4yOTgtLjE0NS0uNDY0LS4yNDYtLjQ2NC0uMjQ2cy43OTYgMS4xNiAyLjkgMS43MWMtLjQ5Ny41NTItMS4xMSAxLjIwNC0xLjExIDEuMjA0LTMuNjYyLS4xMDItNS4wNTQtMi4yMDQtNS4wNTQtMi4yMDQgMC00LjY2OSAyLjM4Ni04LjQ1NCAyLjM4Ni04LjQ1NCAyLjM4Ni0xLjU2NiA0LjY1Ny0xLjUyMiA0LjY1Ny0xLjUyMmwuMTY1LjE3NGMtMi45ODMuNzU0LTQuMzU4IDEuOS00LjM1OCAxLjlzLjM2NS0uMTc1Ljk3OC0uNDIxYzEuNzczLS42ODEgMy4xODEtLjg3IDMuNzYxLS45MTMuMS0uMDE1LjE4My0uMDMuMjgyLS4wM2ExNi4wMTEgMTYuMDExIDAgMDEzLjM0OC0uMDI4YzEuNTc0LjE1OSAzLjI2NC41NjUgNC45ODggMS4zOTIgMCAwLTEuMzEtMS4wODgtNC4xMjctMS44NDJsLjIzMi0uMjMyczIuMjctLjA0MyA0LjY1NyAxLjUyM2MwIDAgMi4zODYgMy43ODQgMi4zODYgOC40NTMgMCAwLTEuNDA4IDIuMTAyLTUuMDcgMi4yMDR6bS03LjcwNS02Ljc3MmMtLjk0NSAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NCAwIDEuNjktLjcyNiAxLjY5LTEuNjEuMDE2LS44ODUtLjc0Ni0xLjYxLTEuNjktMS42MXptNi4wNDggMGMtLjk0NCAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NSAwIDEuNjktLjcyNiAxLjY5LTEuNjEgMC0uODg1LS43NDUtMS42MS0xLjY5LTEuNjF6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Rpc2NvcmRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEcm9wRG93bihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNC41MTYgNy41NDhjLjQzNi0uNDQ2IDEuMDQzLS40ODEgMS41NzYgMEwxMCAxMS4yOTVsMy45MDgtMy43NDdjLjUzMy0uNDgxIDEuMTQxLS40NDYgMS41NzQgMCAuNDM2LjQ0NS40MDggMS4xOTcgMCAxLjYxNS0uNDA2LjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMmExLjA5NSAxLjA5NSAwIDAxLTEuNTc2IDBTNC45MjQgOS41OCA0LjUxNiA5LjE2M2MtLjQwOC0uNDE4LS40MzYtMS4xNyAwLTEuNjE1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEcm9wRG93bsSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDEwbDUgNSA1LTVIN3pcIiBmaWxsPVwiIzAwMFwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd27EsGNvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0V0aExvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0MiA3MVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjZ9XG4gICAgICAgIGQ9XCJNMjAuOTk2IDI3LjI5M0wyIDM2LjA5bDE4Ljk5NiAxMS40MjcgMTguOTktMTEuNDI3LTE4Ljk5LTguNzk2elwiXG4gICAgICAgIGZpbGw9XCIjMDEwMTAxXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTEuNTcgMzUuODM0bC0uMjUzLjQyOC40MjUuMjU2TDIwLjc0IDQ3Ljk0NGwuNzU4LjQ1NlYyLjE3NGwtLjkzIDEuNTcxTDEuNTcgMzUuODM1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjEuNDI2IDMuNzQ1bC0uOTMtMS41NzJWNDguNGwuNzU4LS40NTYgMTguOTg5LTExLjQyNi40MjUtLjI1Ni0uMjUzLS40MjhMMjEuNDI2IDMuNzQ1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTIwLjQ5NyA1MS40NjJWNjUuNDFMMy43NSA0MS4zODlsMTYuNzQ3IDEwLjA3M3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC44fVxuICAgICAgICBkPVwiTTIwLjczOCA1MC43NTFsLS4yNDIuMTQ2VjY4LjU5bC45MS0xLjMwNEw0MC40MSA0MC4wMzlsLS42NjgtLjcxNEwyMC43MzggNTAuNzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdFdGhMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRmFjZWJvb2socHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTYuMDQyIDMuNjI1aDE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxMi40MTcgMi40MTd2MTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEtMi40MTcgMi40MTdINi4wNDJhMi40MTcgMi40MTcgMCAwMS0yLjQxNy0yLjQxN1Y2LjA0MmEyLjQxNyAyLjQxNyAwIDAxMi40MTctMi40MTd6TTIxLjc1IDYuMDQyaC0zLjAyYTQuMjMgNC4yMyAwIDAwLTQuMjMgNC4yMjl2My4wMmgtMi40MTd2My42MjZIMTQuNXY4LjQ1OGgzLjYyNXYtOC40NThoMy42MjV2LTMuNjI1aC0zLjYyNXYtMi40MTdhMS4yMDggMS4yMDggMCAwMTEuMjA4LTEuMjA4aDIuNDE3VjYuMDQyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGYWNlYm9va1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0ZpbmdlcnByaW50KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2ZpbmdlcnByaW50X3N2Z19fY2xpcDApXCIgZmlsbD1cIiMwMDBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNi4zNzMuMTY0Yy0uNjE5LjE2NC0uOTI4Ljk2LS41OTggMS41NjQuMjA2LjM1Ni43ODQuNDM5IDMuNDQ0LjUyIDIuNTU3LjA4MyAzLjQ2NC4yMiA0LjUxNi42ODcgMS40NDMuNjMxIDIuMDgyLjQ2NiAyLjA4Mi0uNDk0IDAtLjgyMy0uODA0LTEuMzQ0LTIuOTI4LTEuOTItMS43NzMtLjQ5NS01LjIxNy0uNjg3LTYuNTE2LS4zNTd6TTExLjU2OCAyLjAwMkM4LjYyIDMuNzAzIDUuMDkzIDcuMzI1IDUuMjM4IDguNTA1Yy4wNC4zMy4yMDYuNzQuMzkxLjg3OC4yNjkuMjIuNjYtLjA4MiAxLjg1Ni0xLjQyNyAxLjY3LTEuODY2IDMuMTc2LTMuMTI4IDQuOTI5LTQuMTE2LjYxOC0uMzU2IDEuMjU4LS43NjggMS40MDItLjkwNS4zNzEtLjQxMi4zMS0xLjI2Mi0uMTQ0LTEuNTkyLS41MTYtLjM1Ni0uMjg5LS40MTEtMi4xMDQuNjU5ek0yNy42MTEgMy4yOTJjLS43NDIuNTQ4LS40MTIgMS40NTQuOTcgMi42NjEgMS41NDYgMS4zNDUgMy4yNzggMy41NjcgNC40NTQgNS42OC44NjYgMS41NjQgMS4zODEgMS44NjYgMS44NzYgMS4wNy4yMjctLjM1Ny4yMDYtLjU3Ni0uMTAzLTEuMzQ0LTEuMzgyLTMuNDAzLTYuMTg2LTguODA4LTcuMTk3LTguMDY3ek0xNS41MDcgNC45MWMtMy4xMTQgMS4xMjYtNS45OCAzLjQwMy03Ljg3NyA2LjMxMS0yLjEwNCAzLjE4My0zLjIzOCA2LjkxNS0zLjc1MyAxMi4yMUMyLjc0MyAzNS4zOTUgMy42NyA0Ny4zNTggNi42NCA1OC44YzEuMTU1IDQuNDcyIDEuMzQgNC44ODQgMi4wMiA0Ljc3NC4zMy0uMDU1LjU3OC0uMjc0LjYyLS41NzYuMDQtLjI3NS0uMzEtMS44MzktLjc2NC0zLjQ1Ny0yLjQ3NC04Ljc4LTMuNzExLTE5LjE1Mi0zLjQ2NC0yOC43MDEuMzEtMTAuNTY0IDEuMy0xNC44NzIgNC40NzUtMTkuMDcgMi42NC0zLjUxMiA1Ljc5NC01LjI0IDkuNTg5LTUuMjQgMy44MTQgMCA2Ljk5IDEuNzI4IDkuNjA5IDUuMjEzIDEuNzUzIDIuMzYgMi41NzggNC4xNDMgMy40MDIgNy4yOTguNjQgMi41MjUuNzIyIDUuMDQ5LjQxMyAxMi40ODUtLjI2OCA2LjM2Ni4zOTIgMTEuNDQyIDIuMjQ4IDE3LjM0MS43ODMgMi40NDIgMS4yNTcgMy4wNzMgMS44NTUgMi40MTUuNDM0LS40NjcuMzkyLTEuMjA4LS4xODUtMi42OS0uNzQyLTEuOTc1LTEuNzMyLTYuMzM4LTIuMTAzLTkuMzI4LS4yNjktMi4xNjgtLjMxLTMuNTY4LS4xNjUtNy42MDEuMjQ3LTcuMDguMTg1LTkuODc4LS4yMDctMTEuOTA4LTEuMzgxLTYuOTE1LTUuMDkzLTEyLjE4My0xMC4xMjUtMTQuNDYtMi4yODgtMS4wMTYtNi4wNjItMS4yMDgtOC4zNTEtLjM4NHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjE4NyA5LjEzNmMtMi40MTIuNzk2LTUuNzMyIDMuNjc3LTUuNTg4IDQuOTEyLjA0MS4zMDEuMjA2LjY4NS4zOTIuODIzLjI2OC4yMi42NC0uMDI4IDEuNzUzLTEuMTI1IDIuMjA2LTIuMTk1IDQuODg3LTMuMjY2IDcuMzQtMi45MDkgMS4wMzIuMTY1IDEuMTc2LjExIDEuMzgyLS4zODQuMjktLjcxMy4yOS0uNzY4LS4xMDMtMS4yNjItLjM5Mi0uNTQ5LTMuNTQ2LS41NzYtNS4xNzYtLjA1NXpNMjMuMjgxIDEwLjMxNmMtLjA4Mi4wODItLjE0NC40NjYtLjE0NC43OTYgMCAuNDY2LjI4OC44NSAxLjE1NCAxLjUwOSAyLjI5IDEuNzI4IDQuNTE3IDUuNjUyIDQuOTUgOC42NDMuMTg1IDEuMjYyLjgwNCAxLjcyOCAxLjM2Ljk4OC4zOTItLjQ5NC4zOTItLjYwNC4wODMtMS45NDgtLjM5Mi0xLjc4NC0xLjE5Ni0zLjg5Ny0yLjA4My01LjU0My0xLjUyNi0yLjcxNi00LjY2LTUuMzUtNS4zMi00LjQ0NXpNMy4xNzYgMTEuNDEzYy0uODg3IDEuNjc0LTEuOTYgNC45OTQtMi40MzQgNy40MzYtLjYxOCAzLjIzOC0uNjM5IDQuMzM1LS4wODIgNC43Mi41MzYuMzg0IDEuMjM3LS41MjIgMS4yMzctMS42MiAwLTEuNDI2IDEuMDMxLTUuNjI0IDEuOTgtNy45MjkuNzQyLTEuODM4Ljg2Ni0yLjM2LjctMi43OTktLjMwOC0uNzY4LS45MjctLjY4Ni0xLjQwMS4xOTJ6TTE2LjEwNSAxMy43NzNjLTEuNjkuOTMzLTIuNTM2IDEuNzI5LTMuNDg1IDMuMTI4LTEuNzczIDIuNjg5LTIuMzcxIDUuOS0yLjYxOSAxMy45MzktLjMzIDExLjY2MSAxLjczMiAyMy44OTkgNS43NzQgMzQuMjk4LjkwNyAyLjMwNSAxLjE1NSAyLjc0NCAxLjU2NyAyLjc0NCAxLjAxIDAgMS4wMS0uNzQxLS4wMi0zLjM0OC0yLjQ1NC02LjE3My00LjM1MS0xMy45MzktNS4yMTctMjEuMzQ3LS43MjItNi4wMzYtLjU5OC0xNi45ODQuMjQ3LTIxLjI2NS41NTctMi45MDggMi4xMjQtNS4xODYgNC4yMjctNi4yIDEuMzQtLjY2IDMuNzMzLS41NzcgNS4xOTcuMTY0IDIuMjI3IDEuMTI1IDQuMDgzIDQuMDg4IDQuMzkyIDcuMDI0LjA2Mi43MTMgMCAzLjQwMi0uMTQ0IDYuMDEtLjIwNyAzLjc1OC0uMjI3IDUuNDg3LS4wMiA4LjI4NS41MTUgNy42NTYgMi4xMjMgMTQuNDYgNC44ODYgMjAuNzE3LjkyOCAyLjExMiAxLjI3OSAyLjUyNCAxLjgzNSAyLjI1LjY0LS4zMy41MTYtMS4xNTMtLjUzNi0zLjU2Ny0zLjcxMS04LjUwNi01LjIxNy0xOC00LjUxNi0yOC4yNjIuMzMtNC42MzcuMTY1LTYuMzkzLS44MjQtOS4wODItLjc2NC0yLjAzLTIuMzkzLTQuMTE2LTQuMDgzLTUuMTg2LTEuMDEtLjY1OS0xLjQ4NS0uNzY4LTMuMzQxLS44NS0xLjg5Ny0uMDgzLTIuMzEtLjAyOC0zLjMyLjU0OHpNMzUuMiAxNS4yMjdjLS4xODYuMjQ3LS4yNjguNjU5LS4yMDYuOTA2LjcyMiAyLjQ3IDEuMTc1IDUuNDMzIDEuMjc4IDguMzk2LjEyNCAzLjIzOC4yNjggMy45NzkuODA1IDMuOTc5LjU5OCAwIC45MDctLjg1MS45MDctMi41NTItLjAyLTUuMTA0LTEuMjU4LTExLjE2OC0yLjI0OC0xMS4xNjgtLjEwMyAwLS4zNS4xOTItLjUzNi40NHpNOC45OSAxNi4zOGMtMS4wNTEuOTA1LTIuMDQgNi42OTUtMi4xODUgMTIuNzg2LS4wNjIgMS43ODQgMCAyLjE5NS4zMSAyLjQ3LjI0Ny4yMTkuNDUzLjIxOS43IDAgLjI4OS0uMjQ3LjQxMy0xLjAxNi42MTktMy44NDIuMzMtNC43NzQuNjE5LTYuODA1IDEuMjE3LTguNzguNTk4LTIuMDAzLjU5OC0yLjE5NS4xMDMtMi41OC0uNDc1LS4zMjktLjQ3NS0uMzI5LS43NjMtLjA1NHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE4Ljk5MiAxNy44MzRjLS41NTcuNzQtLjIwNiAxLjUxLjc4NCAxLjc1NiAxLjE5NS4yNzQgMi4yMjcgMS4zMTcgMi43NDIgMi43NDQuNDMzIDEuMTguNDU0IDEuNTM2LjMzIDQuMTk4LS4xMjQgMy4wMTgtLjAyIDMuNjIyLjcyMiAzLjYyMi41NzcgMCAuNzgzLS44MjMuOTI4LTMuNzYuMTQ0LTMuMDE3LjAyLTMuOTIzLS45MjgtNS45MjYtLjY4LTEuMzcyLTEuOTE4LTIuNDk3LTMuMjc5LTIuOTA4LS43ODQtLjIyLS45NDktLjE5Mi0xLjMuMjc0ek0xNS44MTYgMTguOTA0Yy0uODI1LjcxMy0xLjY5IDIuNTI0LTEuOTM4IDQuMTE2LS4zMSAxLjk0OC0uNjggNy4zMjYtLjU5OCA4LjkxNy4wNjIgMS4xOC4xMjQgMS4zNzIuNTM2IDEuNDU1Ljg0NS4xNjQgMS4wNzItLjM4NSAxLjA3Mi0yLjY2MiAwLTEuMTUyLjE0NS0zLjQzLjMxLTUuMDQ5LjMwOS0zLjA3My43LTQuMzkgMS41MjYtNS4wNzYuNTM2LS40MTEuNTU2LTEuNTkxLjA2MS0xLjk0OC0uMjg4LS4xOTItLjUzNi0uMTM3LS45NjkuMjQ3elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTguMjkgMjEuODk1Yy0xLjIzNi42ODYtMS41MDUgMi4xMTMtMS42NyA5LjQ5NC0uMjY4IDEwLjM5OSAxLjIxNyAxOS41OSA0LjY2IDI4LjgxIDEuODc3IDUuMDQ5IDIuNjQgNi41ODUgMy4yOCA2LjU4NS45OSAwIC45OS0uNzQtLjA2Mi0zLjA0Ni0yLjA4My00LjYzNy0zLjk4LTEwLjU2My00Ljk1LTE1LjUwMi0xLjA5Mi01LjcwNy0xLjI1Ny03LjYtMS4yMzctMTUuMDY0IDAtNy4yMTYuMTY1LTkuMTM3Ljc0My05LjI3NC41NTYtLjEzNy43NjMuNzQuNTM2IDIuNTUyLS4yNjggMi4zODctLjI2OCAxMS4xNC4wMiAxMy44NTYuNTk5IDUuNjUyIDEuNTg4IDEwLjQ1NCAzLjEzNSAxNS4zMzggMS4wMzEgMy4yMzggMi42NiA3LjMyNiAzLjYzIDkgLjU1NiAxLjAxNSAxLjE3NSAxLjE4IDEuNDg0LjQxMi4yMjctLjU3Ny4yNDctLjQ5NC0xLjQyMy00LjMwOC0yLjk5LTYuODA1LTQuODY2LTE0Ljg3Mi01LjQwMy0yMy4yOTUtLjE4NS0zLjAxOS0uMTg1LTQuODU3LjA0Mi04LjY5OS4yODgtNS41NDIuMjI3LTUuOTU0LTEuMTM0LTYuNzIyLS43ODQtLjQzOS0xLjA1Mi0uNDM5LTEuNjUtLjEzN3pNMjkuODggMjUuMDc4Yy0uNDMzLjU3Ni0uNjYgMy44OTYtLjYxOSA5LjE5Mi4wNDEgNS40MzIuMTY1IDYuMTczIDEuMDEgNi4xNzNoLjU5OWwtLjA4My00LjgwMWMtLjA0MS0yLjg4Mi4wNDEtNS45LjE4Ni03LjUxOS4yNDctMi41NTEuMjQ3LTIuNzQ0LS4xMDMtMy4xLS40OTUtLjQ2Ny0uNjItLjQ0LS45OS4wNTV6TS4zNzEgMjYuMjAzYy0uNDk1LjYzLS40OTUgMTIuNDg0IDAgMTMuMTE1LjM3MS41MjIuNDEzLjUyMi45MjguMTY1LjM3MS0uMjc0LjM5Mi0uNjU5LjM5Mi02LjcyMiAwLTYuMDY0LS4wMi02LjQ0OS0uMzkyLTYuNzIzLS41MTUtLjM1Ny0uNTU3LS4zNTctLjkyOC4xNjV6TTM2LjQ3OCAzMC44OTVjLS4yNjcuMzI5LS4xNjQgMTAuMzcxLjEwNCAxMC43MjguMzcuNDk0Ljk0OC4zODQgMS4xOTYtLjE5Mi4zMDktLjc5Ni4yNjgtOS45ODgtLjA0Mi0xMC40LS4yNjgtLjM1Ni0xLjAzLS40MzgtMS4yNTgtLjEzNnpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTIyLjcwNCAzMi45MjVjLS40MTMgMS4wNy4zMDkgOS42MzEgMS4xNTQgMTMuNTgyLjMxIDEuNDI3LjY2IDEuODY2IDEuMjE3IDEuNTkyLjQ5NS0uMjQ3LjU1Ny0uOTA2LjI0OC0yLjUyNS0uNTE2LTIuNjM0LS45MjgtNi4zNjUtMS4wNzMtOS41Mi0uMDgyLTEuNjc1LS4yMjctMy4xODQtLjM1LTMuMzc2LS4zMS0uNTIxLS45MjgtLjM4NC0xLjE5Ni4yNDd6TTYuODQ2IDM0LjQwN2MtLjE4NS4yNzQtLjIwNiAxLjEyNS0uMTAzIDMuMDczLjE2NSAzLjEuODI1IDkuNjMgMS4xMzQgMTEuMTEzLjI0OCAxLjE4LjkwNyAxLjYxOCAxLjQwMi45Ni4yNjgtLjM4NC4yNjgtLjY4Ni0uMDQtMi44NTQtLjUzNy0zLjgxNC0uNzIzLTUuNzYyLS44NjctOS0uMDgyLTEuNjczLS4yMjctMy4xODItLjM1LTMuMzc0LS4yNjktLjQ0LS44NjctLjQxMi0xLjE3Ni4wODJ6TTEzLjU2OSAzNi4wOGMtLjM5Mi40OTUtLjM1IDEuMzE4LjIwNiA2LjcyMy43IDYuNzUgMS40NjQgOS4zMyAyLjQ1NCA4LjM2OS4zNy0uMzU3LjM3LS40NjctLjE2NS0zLjcwNC0uMzEtMS44MTEtLjcwMS01LjAyMi0uODg3LTcuMTA3LS4xODUtMi4wNTgtLjM5Mi0zLjk1MS0uNDc0LTQuMTctLjI0OC0uNjA0LS43NDMtLjY2LTEuMTM0LS4xMXpNLjI2OCA0Mi4zMDljLS40NzQuNzY4LjE2NSA2LjMzOCAxLjExNCA5LjY4Ni43IDIuNTI0IDEuMDMgMy4xMjggMS42NSAzLjEyOC43MjEgMCAuODY1LTEuMDE1LjM1LTIuMzg3LS43NjMtMS45NDgtMS4zLTQuNjY1LTEuNTQ3LTcuNjgzLS4yNDctMi44ODEtLjI2OC0yLjk2My0uNzgzLTMuMDQ2LS4yODktLjA1NS0uNjQuMTEtLjc4NC4zMDJ6TTMwLjI5MiA0Mi45NGMtLjA4Mi4xMS0uMTQ0LjQ2Ny0uMTQ0LjgyMyAwIDEuMjM1IDEuNDg1IDYuNjQgMi42NCA5LjU3Ni45OSAyLjU1MiAxLjI1NyAzLjAxOSAxLjY3IDMuMDE5IDEuMDMgMCAuOTY5LS42ODYtLjI2OC00LjAwNi0uNjQtMS43My0xLjUwNi00LjU1NS0xLjkzOS02LjI4NC0uNy0yLjg1My0uODI1LTMuMTU1LTEuMjk5LTMuMjM4LS4yNjgtLjA1NC0uNTc3IDAtLjY2LjExek0yNS4wNTUgNTAuNjIzYy0uMTg2LjYzMS4yMjYgMi4xNCAxLjUwNSA1LjYyNSAxLjMyIDMuNjIyIDIuNzQyIDYuNzUgMy4xMTQgNi45NDIuNDEyLjIyLjg2Ni0uMTEuOTktLjY4Ni4wODItLjMzLS4yMjgtMS4yOS0uOTA4LTIuNzcxLS45Ny0yLjE0LTIuMTI0LTUuMjY5LTMuMDkzLTguMjYtLjMzLTEuMDctLjQ5NS0xLjI4OS0uOTQ5LTEuMjg5LS4yODggMC0uNTc3LjE5Mi0uNjYuNDM5ek04Ljk1IDUyLjE2Yy0uMzcyLjQ5My0uMzMuODUuNjYgNC43MTkgMS4xMzQgNC40NDUgMi44MDQgOS40OTQgMy4yNzggOS44NzguNDk1LjQxMSAxLjA3Mi0uMTM3IDEuMDUyLS45Ni0uMDItLjM1Ny0uNDU0LTEuOTIxLS45OS0zLjQzLS41MzYtMS41MzctMS40MDItNC41LTEuOTM4LTYuNTg2LS43ODQtMy4xLTEuMDUyLTMuODQxLTEuMzgyLTMuODk2LS4yMjctLjAyNy0uNTM2LjA4Mi0uNjguMjc1ek0xNi4wMjMgNTQuMTA4Yy0uMTQ1Ljc0LjkwNyA0LjMwOCAyLjYxOCA4Ljg5IDEuNDIzIDMuODE0IDIuMTg2IDUuMjEzIDIuNzAyIDQuOTM5Ljc0Mi0uMzg1LjYxOC0xLjA3LS44NDYtNC44My0uODA0LTIuMDU3LTEuODE0LTQuOTExLTIuMjQ3LTYuMzM4LS45OS0zLjIzOC0xLjAxLTMuMjkyLTEuNjA5LTMuMjkyLS4zNSAwLS41MzYuMTkyLS42MTguNjN6XCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJmaW5nZXJwcmludF9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDM4djYzSDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGaW5nZXJwcmludFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0dvb2dsZVBsYXlTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19jbGlwMF81MTo1NDYpXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjMxLjEwOCA3MS4xMDlIOC44OTJDMy45OTIgNzEuMTA5IDAgNjcuMTAxIDAgNjIuMjJWOC44OUMwIDMuOTg5IDMuOTkxIDAgOC44OTIgMGgyMjIuMjE2QzIzNi4wMDQgMCAyNDAgMy45OSAyNDAgOC44ODlWNjIuMjJjMCA0Ljg4MS0zLjk5NiA4Ljg4OS04Ljg5MiA4Ljg4OXpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMzEuMTA4IDEuNDIzYzQuMTEgMCA3LjQ3NSAzLjM1NiA3LjQ3NSA3LjQ2NlY2Mi4yMmMwIDQuMTEtMy4zNDMgNy40NjYtNy40NzUgNy40NjZIOC44OTJjLTQuMTEgMC03LjQ3NS0zLjM1Ni03LjQ3NS03LjQ2NlY4Ljg5YzAtNC4xMSAzLjM0My03LjQ2NiA3LjQ3NS03LjQ2NmgyMjIuMjE2em0wLTEuNDIzSDguODkyQzMuOTkyIDAgMCA0LjAwOCAwIDguODg5VjYyLjIyYzAgNC45IDMuOTkxIDguODg5IDguODkyIDguODg5aDIyMi4yMTZjNC44OTYgMCA4Ljg5Mi0zLjk5IDguODkyLTguODg5VjguODlDMjQwIDQuMDA4IDIzNi4wMDQgMCAyMzEuMTA4IDB6XCJcbiAgICAgICAgICBmaWxsPVwiI0E2QTZBNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0xMjYuNDMzIDIzLjUyM2MtMS42MDMgMC0yLjk1NC0uNTYzLTQuMDIyLTEuNjcyYTUuNyA1LjcgMCAwMS0xLjYyNS00LjA3OGMwLTEuNjE4LjU0Ny0yLjk4OCAxLjYyNS00LjA3NCAxLjA2NC0xLjEwOSAyLjQxNS0xLjY3MiA0LjAxNy0xLjY3MiAxLjU4NSAwIDIuOTM2LjU2MyA0LjAyMyAxLjY3MiAxLjA3NyAxLjEyMSAxLjYyNCAyLjQ5MSAxLjYyNCA0LjA3NC0uMDE3IDEuNjIyLS41NjUgMi45OTItMS42MjQgNC4wNzQtMS4wNjQgMS4xMTctMi40MTYgMS42NzYtNC4wMTggMS42NzZ6bS00Ny42ODggMGMtMS41NjggMC0yLjkyOC0uNTU0LTQuMDQtMS42NS0xLjEwNC0xLjA5LTEuNjY1LTIuNDY5LTEuNjY1LTQuMDk2IDAtMS42MjcuNTYxLTMuMDA2IDEuNjY1LTQuMDk2IDEuMDktMS4wOTUgMi40NS0xLjY1IDQuMDQtMS42NWE1LjYxIDUuNjEgMCAwMTIuMjU2LjQ3Yy43MS4zMDcgMS4yODkuNzIzIDEuNzE3IDEuMjMzbC4xMDYuMTI5LTEuMTk2IDEuMTc5LS4xMjQtLjE0NmMtLjY3NS0uODA3LTEuNTgtMS4yMDItMi43NzctMS4yMDItMS4wNjkgMC0yIC4zODEtMi43NjggMS4xMzUtLjc3My43NTgtMS4xNjYgMS43NTEtMS4xNjYgMi45NTMgMCAxLjIwMS4zOTMgMi4xOTQgMS4xNjYgMi45NTJhMy44MyAzLjgzIDAgMDAyLjc2OCAxLjEzNWMxLjE0IDAgMi4wOTctLjM4MSAyLjg0My0xLjEzNS40NDItLjQ0My43MTYtMS4wNjQuODEzLTEuODQ4aC0zLjgzN3YtMS42NTloNS40ODRsLjAyMi4xNTFjLjA0LjI4LjA4LjU2OC4wOC44MzQgMCAxLjUzLS40NiAyLjc2Ni0xLjM3IDMuNjgtMS4wMzMgMS4wODEtMi4zODQgMS42My00LjAxNyAxLjYzem02My40MDYtLjIzNWgtMS42OTFsLTUuMTc5LTguMzIxLjA0NCAxLjQ5OHY2LjgxOGgtMS42OTFWMTIuMjY3aDEuOTI5bC4wNTMuMDg0IDQuODcgNy44MzgtLjA0NC0xLjQ5NHYtNi40MjhoMS43MDl2MTEuMDJ6bS0yOC40MjUgMGgtMS43MTN2LTkuMzYzaC0yLjk3MnYtMS42NThoNy42NTJ2MS42NThoLTIuOTcxdjkuMzYzaC4wMDR6bS02LjA4IDBoLTEuNzA4VjEyLjI2N2gxLjcwOHYxMS4wMnptLTkuNjAzIDBoLTEuNzA4di05LjM2M2gtMi45NzJ2LTEuNjU4aDcuNjUydjEuNjU4aC0yLjk3MnY5LjM2M3ptLTUuNzYyLS4wMThIODUuNzNWMTIuMjY3aDYuNTUydjEuNjU4aC00LjgzOXYzLjAyM2g0LjM2N3YxLjY0aC00LjM2N3YzLjAyNGg0Ljg0djEuNjU4em0zMS4zODMtMi41NThjLjc2NC43NjcgMS42OTEgMS4xNTMgMi43NjkgMS4xNTMgMS4xMDggMCAyLjAxMy0uMzc3IDIuNzY4LTEuMTUzLjc1MS0uNzU0IDEuMTMtMS43NDIgMS4xMy0yLjkzNSAwLTEuMTkyLS4zNzktMi4xODUtMS4xMjUtMi45MzVhMy43ODIgMy43ODIgMCAwMC0yLjc2OS0xLjE1MmMtMS4xMDggMC0yLjAxMy4zNzctMi43NjQgMS4xNTItLjc1Ljc1NC0xLjEzIDEuNzQzLTEuMTMgMi45MzUgMCAxLjE5My4zNzUgMi4xODYgMS4xMjEgMi45MzV6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0xMjAuNjI3IDM4LjY3NWMtNC4xNzIgMC03LjU1NCAzLjE4LTcuNTU0IDcuNTY0IDAgNC4zNDQgMy40MDQgNy41NjMgNy41NTQgNy41NjMgNC4xNzIgMCA3LjU1NC0zLjIwMSA3LjU1NC03LjU2MyAwLTQuMzg1LTMuMzgyLTcuNTYzLTcuNTU0LTcuNTYzem0wIDEyLjEzYy0yLjI4MyAwLTQuMjQ3LTEuODk4LTQuMjQ3LTQuNTg0IDAtMi43MjcgMS45NjktNC41ODQgNC4yNDctNC41ODQgMi4yODMgMCA0LjI0NyAxLjg1NyA0LjI0NyA0LjU4NC4wMDUgMi43MDQtMS45NjQgNC41ODQtNC4yNDcgNC41ODR6bS0xNi40ODItMTIuMTNjLTQuMTcyIDAtNy41NTQgMy4xOC03LjU1NCA3LjU2NCAwIDQuMzQ0IDMuNDA0IDcuNTYzIDcuNTU0IDcuNTYzIDQuMTcyIDAgNy41NTQtMy4yMDEgNy41NTQtNy41NjMgMC00LjM4NS0zLjM4Ni03LjU2My03LjU1NC03LjU2M3ptMCAxMi4xM2MtMi4yODMgMC00LjI0Ny0xLjg5OC00LjI0Ny00LjU4NCAwLTIuNzI3IDEuOTY5LTQuNTg0IDQuMjQ3LTQuNTg0IDIuMjgzIDAgNC4yNDcgMS44NTcgNC4yNDcgNC41ODQgMCAyLjcwNC0xLjk2NCA0LjU4NC00LjI0NyA0LjU4NHptLTE5LjYxMi05LjgydjMuMjAxaDcuNjUxYy0uMjM0IDEuNzk1LS44MjUgMy4xMjEtMS43MyA0LjAzLTEuMTIyIDEuMTI2LTIuODUzIDIuMzUtNS45MDMgMi4zNS00LjcwMyAwLTguMzgtMy44MTMtOC4zOC04LjUzNSAwLTQuNzIxIDMuNjc3LTguNTMzIDguMzgtOC41MzMgMi41MzggMCA0LjM4OCAxLjAwNiA1Ljc2MSAyLjI5MWwyLjI2LTIuMjdjLTEuOTA3LTEuODM1LTQuNDQ1LTMuMjQtOC4wMDQtMy4yNC02LjQ1IDAtMTEuODYzIDUuMjc1LTExLjg2MyAxMS43MzUgMCA2LjQ3NyA1LjQwOCAxMS43MzQgMTEuODYzIDExLjczNCAzLjQ4NCAwIDYuMDk3LTEuMTQzIDguMTY0LTMuMjk4IDIuMTA2LTIuMTE0IDIuNzczLTUuMDk4IDIuNzczLTcuNTA1IDAtLjc1LS4wNTgtMS40MjMtLjE3Ny0xLjk5NWgtMTAuOGMuMDA1LS4wMDUuMDA1LjAzNS4wMDUuMDM1em04MC4yMTkgMi40OTJjLS42MzEtMS42OTgtMi41MzktNC44Mi02LjQ1LTQuODItMy44NzcgMC03LjEgMy4wNjQtNy4xIDcuNTY0IDAgNC4yNDcgMy4xODggNy41NjMgNy40NzUgNy41NjMgMy40NDQgMCA1LjQ0OC0yLjExNSA2LjI3NC0zLjM1NmwtMi41NTYtMS43MmMtLjg0OCAxLjI2My0yLjAyNyAyLjA5Mi0zLjcgMi4wOTItMS42OTEgMC0yLjg3NS0uNzcxLTMuNjYxLTIuMjkybDEwLjA3MS00LjE4OWMwIC4wMDQtLjM1My0uODQyLS4zNTMtLjg0MnptLTEwLjI3IDIuNTI3Yy0uMDc5LTIuOTIyIDIuMjYxLTQuNDA3IDMuOTM0LTQuNDA3IDEuMzIxIDAgMi40Mi42NTIgMi43OTUgMS42bC02LjcyOSAyLjgwN3ptLTguMTgxIDcuMzI4aDMuMzA3di0yMi4yMmgtMy4zMDd2MjIuMjJ6bS01LjQzLTEyLjk3NmgtLjEyYy0uNzQ2LS44OTEtMi4xNjMtMS42OTgtMy45NzMtMS42OTgtMy43NTggMC03LjIxOSAzLjMyLTcuMjE5IDcuNTg1IDAgNC4yNDcgMy40NDQgNy41MjggNy4yMTkgNy41MjggMS43ODggMCAzLjIyNy0uODEyIDMuOTczLTEuNzJoLjEydjEuMDg2YzAgMi44ODYtMS41MzcgNC40NDItNC4wMTQgNC40NDItMi4wMjYgMC0zLjI4NS0xLjQ2My0zLjc5Ny0yLjY4N2wtMi44NzQgMS4yMDZjLjgyNSAxLjk5NSAzLjAyOSA0LjQ2NCA2LjY2NyA0LjQ2NCAzLjg3NiAwIDcuMTYxLTIuMjkyIDcuMTYxLTcuODgyVjM5LjExaC0zLjEyNnYxLjI0NmgtLjAxN3ptLTMuNzk4IDEwLjQ0OWMtMi4yODIgMC00LjE5LTEuOTE1LTQuMTktNC41NjIgMC0yLjY2OSAxLjkwOC00LjYwMiA0LjE5LTQuNjAyIDIuMjYxIDAgNC4wMTQgMS45NTUgNC4wMTQgNC42MDIuMDIyIDIuNjQ3LTEuNzQ5IDQuNTYyLTQuMDE0IDQuNTYyem00My4xNjMtMTkuNjkzaC03LjkwN3YyMi4yMmgzLjMwN3YtOC40MTVoNC42MDVjMy42NiAwIDcuMjU4LTIuNjY0IDcuMjU4LTYuODkzIDAtNC4yMy0zLjU4NS02LjkxMi03LjI2My02LjkxMnptLjA5NyAxMC43MDJoLTQuNzAyVjM0LjE5aDQuNzAyYzIuNDc3IDAgMy44NzcgMi4wNTMgMy44NzcgMy44MTMgMCAxLjc0Mi0xLjQxNyAzLjgxMi0zLjg3NyAzLjgxMnptMjAuNDIxLTMuMTc4Yy0yLjQwMiAwLTQuODc5IDEuMDY4LTUuOTA0IDMuMzk1bDIuOTMyIDEuMjI0Yy42MzItMS4yMjQgMS43ODgtMS42NCAzLjAxMS0xLjY0IDEuNzEzIDAgMy40NDQgMS4wMjggMy40ODQgMi44NjR2LjIzNWMtLjU5Mi0uMzM3LTEuODktLjg1Mi0zLjQ0NC0uODUyLTMuMTY2IDAtNi4zNzUgMS43MzgtNi4zNzUgNC45OTcgMCAyLjk4MyAyLjU5NiA0Ljg5OCA1LjQ4OCA0Ljg5OCAyLjIyIDAgMy40NDMtMS4wMDYgNC4yMDctMi4xNzJoLjExOXYxLjcyaDMuMTg4di04LjUxMmMwLTMuOTYzLTIuOTMxLTYuMTU3LTYuNzA2LTYuMTU3em0tLjQxNSAxMi4xNjljLTEuMDgyIDAtMi41OTctLjUzMi0yLjU5Ny0xLjg5OCAwLTEuNzIgMS44OS0yLjM3MSAzLjUwMi0yLjM3MSAxLjQ1NyAwIDIuMTQ1LjMxNCAzLjAxMS43NDlhMy45ODcgMy45ODcgMCAwMS0zLjkxNiAzLjUyek0yMTkuMDkgMzkuMTFsLTMuNzk3IDkuNjM4aC0uMTE5bC0zLjkzNC05LjYzOGgtMy41NTlsNS45MDMgMTMuNDczLTMuMzY0IDcuNDg3aDMuNDQ0bDkuMDgyLTIwLjk2aC0zLjY1NnptLTI5Ljc2NyAxNC4yMjJoMy4zMDd2LTIyLjIyaC0zLjMwN3YyMi4yMnpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTE4LjQ3MyAxMy4zOTNjLS41MTIuNTU0LS44MDggMS40LS44MDggMi41MVY1NS4yMWMwIDEuMTA5LjI5NiAxLjk1Ni44MjYgMi40ODhsLjEzNy4xMiAyMS45MzQtMjIuMDI1di0uNDkyTDE4LjYxIDEzLjI3M2wtLjEzNy4xMnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQwX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk00Ny44NiA0My4xNTdsLTcuMzE2LTcuMzQ1di0uNTE1bDcuMzE2LTcuMzQ1LjE2LjA5NyA4LjY1MyA0LjkzOWMyLjQ3NyAxLjQgMi40NzcgMy43MTUgMCA1LjEzM0w0OC4wMiA0My4wNmwtLjE1OS4wOTd6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MV9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDguMDIgNDMuMDZsLTcuNDc1LTcuNTA2LTIyLjA3MiAyMi4xNjJjLjgwOC44NyAyLjE2NC45NjcgMy42NzguMTJMNDguMDIgNDMuMDZ6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50Ml9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDguMDIgMjguMDQ5TDIyLjE1IDEzLjI5NWMtMS41MTQtLjg2OS0yLjg3NC0uNzQ5LTMuNjc4LjEybDIyLjA3MiAyMi4xNCA3LjQ3NC03LjUwNnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQzX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBvcGFjaXR5PXswLjJ9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDcuODYgNDIuOUwyMi4xNyA1Ny41NTdjLTEuNDM2LjgyOS0yLjcxNi43NzEtMy41NDEuMDE3bC0uMTM3LjEzOC4xMzcuMTJjLjgyNS43NDkgMi4xMDUuODEgMy41NC0uMDE4TDQ4LjAzOCA0My4wNmwtLjE3Ny0uMTZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgb3BhY2l0eT17MC4xMn1cbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk01Ni42NzMgMzcuODY0TDQ3LjgzOCA0Mi45bC4xNi4xNiA4LjY1My00LjkzOWMxLjI0LS43MDkgMS44NS0xLjY0IDEuODUtMi41NjctLjA3NS44NTItLjcwNiAxLjY1OC0xLjgyOCAyLjMxelwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIG9wYWNpdHk9ezAuMjV9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjIuMTUgMTMuNTUybDM0LjUyMyAxOS42OTNjMS4xMjIuNjM0IDEuNzUzIDEuNDYzIDEuODUgMi4zMSAwLS45MjctLjYxLTEuODU4LTEuODUtMi41NjdMMjIuMTUxIDEzLjI5NWMtMi40NzctMS40MjMtNC40ODYtLjIzNS00LjQ4NiAyLjYwN3YuMjU3YzAtMi44NDYgMi4wMDktNC4wMTIgNC40ODYtMi42MDd6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQwX2xpbmVhcl81MTo1NDZcIlxuICAgICAgICAgIHgxPXszOC41OTV9XG4gICAgICAgICAgeTE9ezE1LjQ3OH1cbiAgICAgICAgICB4Mj17My40NH1cbiAgICAgICAgICB5Mj17MjQuODA3fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMDBBMEZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMDA3fSBzdG9wQ29sb3I9XCIjMDBBMUZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMjZ9IHN0b3BDb2xvcj1cIiMwMEJFRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC41MTJ9IHN0b3BDb2xvcj1cIiMwMEQyRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC43Nn0gc3RvcENvbG9yPVwiIzAwREZGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDBFM0ZGXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MV9saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17NTkuOTAzfVxuICAgICAgICAgIHkxPXszNS41NTV9XG4gICAgICAgICAgeDI9ezE3LjA2M31cbiAgICAgICAgICB5Mj17MzUuNTU1fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkZFMDAwXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNDA5fSBzdG9wQ29sb3I9XCIjRkZCRDAwXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNzc1fSBzdG9wQ29sb3I9XCJvcmFuZ2VcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0ZGOUMwMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDJfbGluZWFyXzUxOjU0NlwiXG4gICAgICAgICAgeDE9ezQzLjk1NX1cbiAgICAgICAgICB5MT17MzkuNjM5fVxuICAgICAgICAgIHgyPXsxNS41Nzh9XG4gICAgICAgICAgeTI9ezg3LjIwNX1cbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGM0E0NFwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjQzMxMTYyXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50M19saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17MTIuOTE1fVxuICAgICAgICAgIHkxPXswLjMxOH1cbiAgICAgICAgICB4Mj17MjUuNTc2fVxuICAgICAgICAgIHkyPXsyMS41NjJ9XG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMzMkEwNzFcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4wNjl9IHN0b3BDb2xvcj1cIiMyREE3NzFcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC40NzZ9IHN0b3BDb2xvcj1cIiMxNUNGNzRcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44MDF9IHN0b3BDb2xvcj1cIiMwNkU3NzVcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwRjA3NlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fY2xpcDBfNTE6NTQ2XCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDI0MHY3MS4xMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dvb2dsZVBsYXlTdG9yZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0hvbWVwYWdlT3B0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yLjA5IDEuNjQzYy0xLjAyNi4xMy0xLjg4Ny45OTYtMi4wMzQgMi4wNS0uMDc0LjQ3LS4wNjggMS43MjggMCAyLjIyNkEyLjQ3NiAyLjQ3NiAwIDAwMS40MSA3Ljc3N2wuMzc0LjE4MUgyNy4yMTVsLjM3NC0uMTgxYTIuNDc2IDIuNDc2IDAgMDAxLjM1NC0xLjg1OGMuMDY4LS40ODcuMDY4LTEuNjc3LjAwNS0yLjE5MmEyLjQwNSAyLjQwNSAwIDAwLTIuMDktMi4wOWMtLjQ1My0uMDU3LTI0LjMxLS4wNTctMjQuNzY5LjAwNnpNMS44MyAxMS4zNTdjLS40Ni4xMjQtLjc0OC4yOTQtMS4wOTQuNjQ1LS41NzcuNTcyLS43MzYgMS4xMS0uNzM2IDIuNDcgMCAuOTIzLjA3NCAxLjQyMS4yNiAxLjgxOC4xODcuMzk2LjYxOC44NjcuOTcgMS4wNi42NC4zNDUtLjIxNi4zMjIgMTMuMjcuMzIyIDEzLjQ4NiAwIDEyLjYzLjAyMyAxMy4yNy0uMzIzLjM1Mi0uMTkyLjc4Mi0uNjYzLjk3LTEuMDYuMTg2LS4zOTYuMjYtLjg5NC4yNi0xLjgxNyAwLS45MjMtLjA3NC0xLjQyMi0uMjYtMS44MTgtLjE4OC0uMzk3LS42MTgtLjg2Ny0uOTctMS4wNi0uNjQtLjM0NS4yMjItLjMyMi0xMy4yOTgtLjMxNy0xMC40NTYgMC0xMi4zOTMuMDEyLTEyLjY0My4wOHpNMS42OTkgMjEuMDY1Yy0uNDE0LjEzLS43MDguMzIzLTEuMDM3LjY4LS4zNC4zNjItLjUyNy43NjQtLjYwNiAxLjI4LS4wNjguNDkyLS4wNzQgMS43NSAwIDIuMjI2YTIuNDAzIDIuNDAzIDAgMDAyLjAyOCAyLjA1Yy4yNTUuMDQgNC40MTIuMDU3IDEyLjY3LjA0NWwxMi4yOTEtLjAxNy4zMzQtLjEyNGEyLjUwOCAyLjUwOCAwIDAwMS40NS0xLjQ3OWMuMTAyLS4yNjYuMTMtLjQ4MS4xNTMtMS4yMjkuMDUxLTEuNTQ2LS4wOTYtMi4xNzUtLjY2OC0yLjc3NS0uMzQtLjM1Ny0uNjM0LS41NDQtMS4wNjUtLjY3NC0uMjgzLS4wOC0xLjQ3OC0uMDktMTIuNzcyLS4wODUtMTEuNzU5IDAtMTIuNDg0LjAwNS0xMi43NzguMTAyelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnSG9tZXBhZ2VPcHRpb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdMaW5rZG4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyLjk1OCAzLjYyNWEyLjQxNyAyLjQxNyAwIDAxMi40MTcgMi40MTd2MTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEtMi40MTcgMi40MTdINi4wNDJhMi40MTcgMi40MTcgMCAwMS0yLjQxNy0yLjQxN1Y2LjA0MmEyLjQxNyAyLjQxNyAwIDAxMi40MTctMi40MTdoMTYuOTE2em0tLjYwNCAxOC43M1YxNS45NWEzLjk0IDMuOTQgMCAwMC0zLjkzOS0zLjk0Yy0xLjAyNyAwLTIuMjIzLjYzLTIuODAzIDEuNTcyVjEyLjI0SDEyLjI0djEwLjExNGgzLjM3MnYtNS45NTdjMC0uOTMuNzQ5LTEuNjkyIDEuNjgtMS42OTJhMS42OTEgMS42OTEgMCAwMTEuNjkgMS42OTJ2NS45NTdoMy4zNzJ6TTguMzE0IDEwLjM0MmEyLjAzIDIuMDMgMCAwMDIuMDMtMi4wMyAyLjAzNyAyLjAzNyAwIDAwLTIuMDMtMi4wNDJBMi4wNDIgMi4wNDIgMCAwMDYuMjcgOC4zMTNjMCAxLjEyNC45MTkgMi4wMyAyLjA0MiAyLjAzem0xLjY3OSAxMi4wMTFWMTIuMjRINi42NDZ2MTAuMTE0aDMuMzQ3elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaW5rZG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNYWlsKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNC4xNjcgNC44MzNINC44MzNBMi40MTMgMi40MTMgMCAwMDIuNDMgNy4yNWwtLjAxMiAxNC41YTIuNDI0IDIuNDI0IDAgMDAyLjQxNiAyLjQxN2gxOS4zMzRhMi40MjQgMi40MjQgMCAwMDIuNDE2LTIuNDE3VjcuMjVhMi40MjQgMi40MjQgMCAwMC0yLjQxNi0yLjQxN3ptMCAxNi45MTdINC44MzNWOS42NjdsOS42NjcgNi4wNDEgOS42NjctNi4wNDFWMjEuNzV6TTE0LjUgMTMuMjkyTDQuODMzIDcuMjVoMTkuMzM0TDE0LjUgMTMuMjkyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNYWlsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWVkaWEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5LjM1IDEwLjA0QTcuNDkgNy40OSAwIDAwMTIgNEM5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0QTUuOTk0IDUuOTk0IDAgMDAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXRhRGF0YShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMy4wMiAzNy4zMDdsMTIuNTEyIDIwLjc0Yy4wNTYtLjE1LjExOS0uMjkuMTg4LS40MjEgNS4wNDEtOC4zNTggMTAuMDg0LTE2LjcxMyAxNS4xMjgtMjUuMDY1LjE3OS0uMjcyLjI3Ni0uNjYyLjI2NC0xLjA2NC0uMDExLTIuNDE5IDAtNC44MzcgMC03LjMxMy0uMTE3LjA4NC0uMjIyLjE1MS0uMzIzLjIzMy0uODQyLjY4MS0xLjcxMyAxLjI0OC0yLjY1MSAxLjQzLS4yMTkuMDMyLS40MDguMjYyLS40OTMuNTk3LS44MDIgMi4zNzItMi4wNTMgMy41OTItMy42NzYgMy41NS0xLjcwMy0uMDQxLTIuOTYyLTEuNDE1LTMuNy0zLjk3LS44OC0zLjA0Ny0uMTkyLTYuODAyIDEuNTQyLTguNjE3IDEuNzU1LTEuODM1IDQuMDU4LTEuMjMgNS4zODQgMS40MTYuMjQzLjQ5NS40MyAxLjAxOC4yOSAxLjcwMS0uMDgzLjQ2NS0uMzAzLjgyNi0uNTg0Ljk1OC0uMjgyLjEzMi0uNTg0LjAxNi0uODAxLS4zMDYtLjIyLS4zMTQtLjM5Ny0uNzEyLS42MjUtMS4wMS0uNzY4LTEtMS42MTItMS4xOTItMi40OTItLjQ2NS0uOTMuNzcyLTEuMzc1IDIuMDY1LTEuMzA2IDMuNzc5LjA2NiAxLjU5Ny41OTcgMi43MDYgMS40NzQgMy4zMi45MTYuNjQ4IDEuOTgxLjE5OCAyLjYtMS4wOTgtLjc3NC0uMjk3LTEuNDc4LS44MzctMi4wMDUtMS44YTEyLjU5IDEyLjU5IDAgMDEtLjk1My0yLjMyNGMtLjE5NS0uNjI4LjA1My0xLjM5NS40MjEtMS43MDcuMzgxLS4zMjguODUtLjEyOCAxLjA4OS40NjUuMzMyLjg4LjY3NiAxLjcwMiAxLjI2MiAyLjE3NC44ODQuNjk4IDEuNzk3LjYyIDIuNzA3LjI4NCAxLjc1NC0uNjM1IDMuMTg4LTIuMTkzIDQuNDMtNC4yNTUgMS4zNzMtMi4yNzIgMi4zNTktNC45MTMgMi42NjYtOC4xMzguMTktMS45ODUuMDIyLTMuODcxLTEuMDMtNS4xNzUtLjg1NC0xLjA2LTEuODQyLTEuMTEtMi44NTItLjc5Ni0xLjE4NC4zOTctMi4zIDEuMjE5LTMuMjcyIDIuNDA3YTUuMDkgNS4wOSAwIDAxLS40MzguNDc5Yy0uNC40MTQtLjkyNC4yMjctMS4xODYtLjQyMi0uMjYyLS42NDktLjE2NS0xLjUyNC4yMTgtMS45NzhhMTUuMjY1IDE1LjI2NSAwIDAxMS42NzItMS44YzEuNDAzLTEuMjI1IDIuODk1LTEuOTY0IDQuNTEyLTEuNzM0IDIuMzczLjM0NyA0LjA3OSAzLjM0IDQuMTkxIDcuMjkyLjA5NiAzLjM3MS0uNjMzIDYuMjk4LTEuNzQgOS4wMTYtLjY2MSAxLjYtMS40NTUgMy4wMzgtMi4zNTkgNC4yNzEtLjExNS4xOTgtLjE4LjQ2LS4xODIuNzM1LS4wMTEgMy4yMTUtLjAxMSA2LjQzMSAwIDkuNjUuMDE0LjY2LS4xNDUgMS4zLS40MzUgMS43NTUtNS40MTMgOC45NS0xMC44MjIgMTcuOTAzLTE2LjIyOCAyNi44NjEtLjU2LjkzLTEuMDAxLjkzLTEuNTYyIDAtNC40ODItNy40MjMtOC45NjItMTQuODU1LTEzLjQ0LTIyLjI5NS0uNTczLS45NDktLjU3Mi0xLjY3Mi4wMDYtMi42MzIgNS4zOTYtOC45NCAxMC43OTItMTcuODg4IDE2LjE4OS0yNi44NDMuMjctLjQ4Ni42NTQtLjc1NSAxLjA1My0uNzM3IDIuNzQ3LjAyMiA1LjQ5NC4wMjIgOC4yNDIgMCAuNC0uMDIyLjc4Ni4yNDMgMS4wNTkuNzI4IDEuMzI4IDIuMjM3IDIuNjY1IDQuNDUyIDQuMDAyIDYuNjgyLjI5MS40NjEuMzU2IDEuMTkyLjE1NyAxLjc3Mi0uMTk5LjU4LS42MS44NjMtLjk5OS42ODNhMS41NiAxLjU2IDAgMDEtLjQ4NC0uNTQxIDc3Mi4xMDMgNzcyLjEwMyAwIDAxLTMuNjAyLTUuOTQ4Yy0uMTUtLjI3NS0uMzY3LS40MjQtLjU5LS40MDQtMi40NDYgMC00Ljg5IDAtNy4zMzYuMDItLjE5LjAxLS4zNzIuMTI5LS41MTUuMzM4LTUuMDkgOC40MTItMTAuMTc0IDE2LjgzLTE1LjI1NCAyNS4yNTVsLS4xNDQuMjY3elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMS41NzQgMzEuMjY1VjM4LjY4M2MtLjAwNy44MTUtLjM5MiAxLjQ4Mi0uODgxIDEuNTI3LS40OS4wNDYtLjkxNy0uNTQ2LS45NzgtMS4zNTRhNS4yMTIgNS4yMTIgMCAwMS0uMDEyLS40MzJ2LTguNDA4YzAtMS4yNjkuMzU3LTEuODY1IDEuMTEyLTEuODY3aDUuMTMxYy40MiAwIC43NTUuMjQ3LjkzMi45MS4xNjMuNTk2LjEzOSAxLjIyMS0uMTQ5IDEuNjUyLS4yMDcuMzA1LS40NjguNDktLjc0NC41MjktMS4zMTMuMDUyLTIuNjI2LjAyMi0zLjk0LjAyNWgtLjQ3MXpNMTkuMTM2IDQzLjc3OXYtNi45NDJhNC41MjQgNC41MjQgMCAwMS4xMjUtMS4xMzVjLjE4My0uNjM4LjYxLS45NzUgMS4wMjUtLjgwOS40MTcuMTQ2LjcxOC43NTIuNzI1IDEuNDYuMDE3LjkyNy4wMDggMS44NTQuMDA4IDIuNzgxdjUuODc0YzAgMS4zMDgtLjM1MiAxLjkwMS0xLjEzMSAxLjkwNGgtNS4xNGMtLjM4NC4wMzktLjc0My0uMzE2LS45MDUtLjg5NS0uMTU4LS41MS0uMTI0LTEuMTI2LjA4Ny0xLjU4LjIwMS0uNDU5LjUzMi0uNzEuODczLS42NjNoMy44NzNsLjQ2LjAwNXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXRhRGF0YVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z09wZW5zZWFMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOC44OTUgMTQuNjgxYy0uMDQ1LS4wNDUtLjExMi0uMDQ1LS4xOC0uMDIybC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMCAuMzEuMzEgMCAwMS4wODktLjA2N2MuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1LS4zNTkgMC0uNjI3LjI5MS0uNjI3LjY1IDAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjRhNS4xNiA1LjE2IDAgMDAuNDQ4LS45NDFjLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcuMDQ0LS4wMjIuMDIyLS4wOS0uMDIzLS4xMTJ6bS05Ljk5Ny0uNDkzaDIuNTU1Yy4wNDUgMCAuMDY4LS4wMjMuMDY4LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNjdsLTEuMjU1LS41ODNjLS4wMjMtLjAyMi0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDY3LjAyMi4xMTIuMDY3LjExMnpNMTMgMEM1LjgyOCAwIDAgNS44MjggMCAxM3M1LjgyOCAxMyAxMyAxMyAxMy01LjgyOCAxMy0xM1MyMC4xNzIgMCAxMyAwem0tLjA0NSAyMi40NTljLTUuMTc3IDAtOS4zNjktNC4xOTItOS4zNjktOS4zOTIgMC01LjE3NyA0LjE5Mi05LjM5MSA5LjM3LTkuMzkxIDUuMTc3IDAgOS4zNjggNC4yMTQgOS4zNjggOS4zOTEtLjAyMiA1LjItNC4yMTQgOS4zOTItOS4zNjkgOS4zOTJ6bTUuNzYtNy44bC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMCAuMzEuMzEgMCAwMS4wODktLjA2N2MuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1LS4zNTkgMC0uNjI3LjI5MS0uNjI3LjY1IDAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjRhNS4xNiA1LjE2IDAgMDAuNDQ4LS45NDFjLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcgMC0uMDQ1LS4wMjMtLjExMi0uMDY4LS4xMzQgMCAwLS4wNjctLjAyMy0uMTM1IDB6bS05LjgxNy0uNDcxaDIuNTU1Yy4wNDUgMCAuMDY4LS4wMjMuMDY4LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNjdsLTEuMjU1LS41ODNjLS4wMjMtLjAyMi0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDY3LjAyMi4xMTIuMDY3LjExMnpcIlxuICAgICAgICBmaWxsPVwiIzMyOTFFOVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMS40NzYgMTEuMjk2bC0xLjI1NS0uNTgyYy0uMDIzLS4wMjMtLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA0NC4wMjIuMDg5LjA2Ny4wODloMi41NTZjLjA0NCAwIC4wNjctLjAyMy4wNjctLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA0NHptNy40MTkgMy4zODVjLS4wNDUtLjA0NS0uMTEyLS4wNDUtLjE4LS4wMjJsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwYy4wMjItLjAyMi4wNDQtLjA0NC4wODktLjA2Ny4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjVzLS42MjcuMjkxLS42MjcuNjVjMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNC4xNzktLjI5MS4zMzYtLjYyNy40NDgtLjk0MS4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3LjA0NC0uMDIyLjAyMi0uMDktLjAyMy0uMTEyelwiXG4gICAgICAgIGZpbGw9XCIjMzI5MUU5XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnT3BlbnNlYUxvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdRckNvZGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0NyA0N1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjcXItY29kZV9zdmdfX2NsaXAwKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNS44NzUgMjQuNTQyaDQuNjY3djQuNjY2SDUuODc1di00LjY2NnptMTguNjY3LTE0aDQuNjY2djkuMzMzaC00LjY2NnYtOS4zMzN6bS00LjY2NyAxNGg5LjMzM3Y5LjMzM2gtNC42NjZ2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTE0IDBoNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aDQuNjY3djQuNjY2aC00LjY2N3Y0LjY2N2g0LjY2N3Y5LjMzM2gtNC42Njd2NC42NjdoLTQuNjY2di00LjY2N2gtOS4zMzR2NC42NjdoLTQuNjY2di05LjMzM2g5LjMzM3YtNC42NjdoNC42Njd2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTkuMzMzIDE4LjY2NnYtOS4zMzNoLTQuNjY2djkuMzMzaDQuNjY2ek0zMy44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgMzMuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwicXItY29kZV9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDQ3djQ3SDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdRckNvZGVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdSYXJpYmxlTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAuOCAwSDUuMkE1LjIgNS4yIDAgMDAwIDUuMnYxNS42QTUuMiA1LjIgMCAwMDUuMiAyNmgxNS42YTUuMiA1LjIgMCAwMDUuMi01LjJWNS4yQTUuMiA1LjIgMCAwMDIwLjggMHpcIlxuICAgICAgICBmaWxsPVwiI0ZFREEwM1wiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy45NCAxMi45MDVjLjgyLS4yMTMgMS41NDgtLjgyNiAxLjU0OC0yLjA1NyAwLTIuMDUtMS43NDEtMi41MjgtMy45NzItMi41MjhINi42M3Y5LjIzNGgzLjc0VjE0LjQyaDQuNDM3Yy42ODMgMCAxLjA4My4yNzEgMS4wODMuOTQydjIuMTkyaDMuNzR2LTIuMzA4YzAtMS4yNTgtLjcxLTIuMDUxLTEuNjktMi4zNDF6bS0zLjA2OS0uOTc0SDEwLjM3di0uOTAzaDQuNTAxYy40OSAwIC43ODcuMDY1Ljc4Ny40NTJzLS4yOTcuNDUxLS43ODcuNDUxelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUmFyaWJsZUxvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTYXZpbmdzUGlnKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy4zMTEuMDcxYy0zLjU4MS44MjEtNS45MzcgNy4yMTItNC43NjQgMTIuOTI1LjEyNy41OS4yMjIgMS4xMDcuMjIyIDEuMTc4IDAgLjA3Mi0uMzQ5LjM0LS43NjEuNjI1LS45NzIuNjI1LTIuNjMgMi4wODktMy4yODYgMi44OTJsLS41MDcuNjI1LS41MTctLjM3NWMtLjk3Mi0uNjk2LTIuMzE0LS43ODUtMy4yMDItLjIxNC0uMzguMjUtMS4yMzYgMS4yMzItMS4yMzYgMS40MjggMCAuMDcyLjQyMyAxLjA5Ljk0IDIuMjVsLjkzIDIuMTA2LS40MTIgMS4wODljLS41NDkgMS40MjgtMS4xODMgMy42NzctMS40MjYgNS4wN2wtLjE5IDEuMTA3aC0uNDg2Yy0uNzE4IDAtMS40OC40NDYtMS44OCAxLjEwNy0uNzA4IDEuMTc4LS42OTggMS4wMTctLjczIDcuOTQ0LS4wMiAzLjkxLjAxMSA2LjU1Mi4wNzQgNi45NjIuMTQ4LjkxLjY5OCAyIDEuMjE1IDIuMzkyLjM3LjI4Ni43MDguMzQgMi4yNzIuMzRoMS44NDlsLjk1IDEuNjc4Yy41MjkuOTEgMS4zMzIgMi4xMjQgMS43ODYgMi42OTVsLjgxMyAxLjAxOHYyLjk4MWMwIDIuNzMyLjAyMSAzLjAxNy4yNDMgMy42Ni40MTIgMS4yMzIuNzA4IDEuMzc1IDIuNzM3IDEuMzIxIDEuNTk1LS4wNTMgMS43ODUtLjA5IDIuMDYtLjQyOC40MzMtLjU1NC42NzYtMS4zNTcuNzQtMi41bC4wNjMtMSAuMzI3LjA5YzEuNDA1LjQxIDMuMTkuNTM1IDQuNDkuMzM5Ljc2LS4xMjUgMS40NDgtLjI2OCAxLjUzMi0uMzIxLjEwNi0uMDcyLjE1OC4xNzguMTkgMS4wNy4wNDIgMS4yNS4yMjIgMS44MjIuNzYgMi41LjI2NS4zNC40MzQuMzc1IDIuMTAzLjM3NSAxLjczMyAwIDEuODM4LS4wMTggMi4xNjYtLjQxLjYxMy0uNzUuNjk3LTEuMjMyLjc2LTQuNDQ2bC4wNTMtMi44OTIuNzkzLS45MjhjMS43NTMtMi4wODkgMy41MjgtNS41MTcgNC40NDctOC42MDUgMS4xNzMtMy44OTIgMS42MzgtOC44MDEgMS4yMTUtMTIuNzY0bC0uMTM3LTEuMzAzLjUwNy0uNDI5Yy41Ny0uNSAxLjIyNi0uNzE0IDEuNjI3LS41NTMuNDAyLjE3OC4zMTcuMzc1LS4xOC4zOTItMS4xOTMuMDU0LTEuMjU3IDIuNzE0LS4wNzMgMy4zMDMuMzcuMTk3LjQ1NC4xNzkuNzA3LS4xMjUuMTU5LS4xOTYuMzYtLjYwNy40NDQtLjkyOC4xOS0uNjc4LjItLjY3OC43Ni0uMTk3LjM4MS4zMjIuNDQ0LjM0LjU4Mi4xMDguMjQzLS40MTEuMDc0LS45NDctLjQ0NC0xLjM1Ny0uMjY0LS4yMTQtLjUxNy0uMzc1LS41OC0uMzc1LS4wNTQgMC0uMTA3LS4wOS0uMTA3LS4xOTYgMC0uNS0uMzgtMS40NDctLjY2NS0xLjcxNC0uNDQ0LS4zNzUtMS4zNzQtLjIxNS0yLjE0NS4zNzUtLjMyNy4yNS0uNjEyLjQ2NC0uNjIzLjQ2NC0uMDIxIDAtLjA3NC0uMjY4LS4xMTYtLjU5LS4xNDgtMS4xNDItLjg5OC0zLjc4NC0xLjU2NC01LjQ4LTEuNjctNC4yMy00LjI0Ny03LjY3Ni03LjE0Mi05LjU2OS0uNTQ5LS4zNTctMS4wMTQtLjY2LTEuMDM1LS42NzgtLjAxLS4wMzYuMDc0LS41MTguMTktMS4xMDcgMS4wMzYtNS4wMzQtLjY1NS0xMC43NjUtMy42NjYtMTIuNDc5LS44MzQtLjQ2NC0xLjg0OS0uNjI0LTIuNjczLS40NDZ6bTEuNzk2IDIuNjA3YzEuMzMyLjUgMi40MSAyLjAzNSAzLjAzMyA0LjI4NC4yNjQuOTQ2LjI5NSAxLjI1LjI5NSAyLjkyOCAwIDEuNzUtLjAyIDEuOTQ2LS4zNDggMy4wNy0xLjY0OCA1LjcxMy02LjM4MSA1LjcxMy03Ljk3NyAwLS4zMTctMS4xMDYtLjMzOC0xLjMzOS0uMzM4LTMuMDcgMC0xLjY3OC4wMzItMS45ODIuMjk2LTIuOTI4LjYwMi0yLjE3OCAxLjYyNy0zLjY3NyAyLjkwNS00LjIzLjg4OC0uMzk0IDEuMjI2LS40MTIgMi4xMzQtLjA1NHptLTQuMzUyIDE1LjM3Yy4wMiAwLS4zNDkuMjMyLS44MTQuNDgyLTEuODcgMS4wMTgtMi40OTMgMS44MjEtMi4yMTggMi44NTcuMDYzLjIzMi4yNTMuNTM1LjQwMS42NDIuMjQzLjE2MS40MTIuMTA3IDEuMTgzLS40NjQgMi43NzktMi4wMTcgNi4xNy0yLjIzMSA4Ljk2LS41NzEuNDk2LjMwMyAxLjE0LjczMiAxLjQxNS45ODIuNjIzLjUxNy45ODIuNDgyIDEuMjY4LS4xNDMuNDg2LTEuMTA3LS4yMzMtMi4wODktMi4zMjUtMy4yMzEtLjYwMi0uMzIyLTEuMDc3LS42MjUtMS4wNzctLjY3OS4wMS0uMDUzLjI0My0uNDQ2LjUyOC0uODc0bC41MTgtLjc4NiAxLjA1Ni42NDNjNC4wNDcgMi40MSA3LjI1OCA3Ljk5OCA4LjMwNCAxNC40Ni41MjggMy4yMzEuNDY1IDcuMjMtLjE2OSAxMC40OTctLjg0NSA0LjMzOC0yLjYyIDguMTU5LTUuMDI5IDEwLjg1NGwtMS4xMyAxLjI2OC0uMDEgMy4yNDktLjAxMSAzLjI2Ny0xLjM5NS4wNTMtMS40MDUuMDU0di0yLjMzOWMwLTEuMjY3LS4wMzItMi4zMi0uMDc0LTIuMzItLjA1MyAwLS4zNDkuMTI0LS42NjYuMjY3LS44ODcuNDEtMi44NTIuODAzLTMuOTQuODAzLTEuMTMgMC0yLjczNi0uMzc0LTMuOTItLjg5MmEyOC45MyAyOC45MyAwIDAwLS44NjYtLjM1N2MtLjAyMSAwLS4wNTMgMS4wMTctLjA2MyAyLjI2N2wtLjAzMiAyLjI4NS0xLjQwNS4wNTQtMS40MDUuMDUzLjAyMS0zLjQxLjAxLTMuNDEtLjg1NS0uOTgxYy0xLjAzNi0xLjIxNC0yLjEyNC0yLjg5Mi0yLjg3NC00LjQ0NWwtLjU1LTEuMTZINC4wNjRjLTIuMDE3IDAtMi4xMjMtLjAxOS0yLjM1Ni0uMzkzbC0uMjQzLS4zNzVWNDAuMjJjMC03LjM5MS0uMTM3LTYuODIgMS41OTYtNi45NDVsMS4xODMtLjA5LjI0My0xLjU3Yy40MzMtMi43MzIgMS4xMS00Ljk5OSAyLjMxNC03LjczLjE0Ny0uMzQuMTE2LS40NjQtLjYyNC0yLjE0Mi0uNDU0LTEtLjc1LTEuODQtLjY5Ny0xLjkyOC4xOC0uMzA0IDEuMjc4LjEwNyAyLjA2Ljc2N2wuNzkyLjY2Ljc5My0uOTk5Yy45NzItMS4yMTQgMi40NC0yLjU1MyAzLjY0NS0zLjMybC44OTgtLjU5LjUyOC44NGMuMjg1LjQ2NC41MzkuODU2LjU2Ljg3NHptMjEuMDg3IDE0LjI2NGMuMTI3LjA5LjEzNy4xNzkuMDQyLjUzNi0uMTI3LjQ0Ni0uMTguNS0uNDQ0LjMyMS0uMTY5LS4xMDctLjIzMi0uNjI1LS4wOTUtLjgzOS4wODUtLjE2LjI3NS0uMTYuNDk3LS4wMTh6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOC41NzUgMzAuMDFjLS4xMzguMDUzLS4zOC4zMi0uNTYuNjA2LS4zNi42MjUtLjQzNCAxLjYwNy0uMTcgMi40NjQuMjg2LjkyOCAxLjIwNSAxLjIxNCAxLjc2NS41MzUgMS4wMzUtMS4yNS4yNDMtMy45OTktMS4wMzUtMy42MDZ6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTYXZpbmdzUGlnXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU21hcnRDb250cmFjdMSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyMyAxLjM2OEMxLjg2NCAyLjA4OC4zMzMgNS4wMjUuMDcgNy4xM2MtLjMzNiAyLjM4Mi41NjEgNC45ODYgMi4wNTYgNi4xNS43MS41NTMgMi4xMy44MyA0LjExLjgzaDIuOTl2Mi40OTNjMCAxLjM4NS4xODcgMi40OTMuMzc0IDIuNDkzLjQ4NSAwIC40ODUtMTEuNjM0IDAtMTMuNTE3LS4xODctLjc3Ni0uNjczLTEuODg0LTEuMTIxLTIuNTQ5TDcuNzMgMS45MjJoMTMuMTE3YzExLjY5NiAwIDEzLjIyOC4xMTEgMTQuMi45NDIgMi4wMTggMS43NzMgMi4yMDUgMy4yMTMgMi4yMDUgMTcuMjg1IDAgOC4xNDQuMTUgMTIuNzk3LjM3MyAxMi43OTcuMjI0IDAgLjM3NC00LjU5OC4zNzQtMTIuNzQyIDAtMTMuODUtLjE1LTE1LjEyNC0yLjA1NS0xNy43MjhsLTEuMDEtMS4zODVMMTkuMzkuOTgxYy04LjU1Ny0uMDU2LTE1LjkxOS4xMS0xNi4zNjcuMzg3em0zLjk2IDEuMzg1YzEuNDk2IDEuMTY0IDIuMjQzIDMuNDkgMi4yNDMgNy4yMDJ2My4wNDdINy41NDRjLTEuNjQ0IDAtMS42NDQgMC0xLjMwOC0xLjQ0LjIyNS0uNzc2LjI2Mi0xLjk5NC4xNS0yLjc3LS4yMjQtMS4zODUtMi4yNDItMy4zOC0yLjY5LTIuNjYtLjE1LjIyMi0uMDM4LjUuMjYuNjY2Ljc4Ni4zODcgMS45MDcgMi4yMTYgMS45MDcgMy4xNTcgMCAuNDQ0LS4zMzcgMS4zMy0uNzg1IDEuOTk1LS45NzIgMS40NC0yLjM5MiAxLjA1Mi0zLjU4Ny0uOTQyQy40OCA5LjQuNDA3IDguMDE2IDEuMTkgNS41NzggMi4yMzkgMi4yNTYgNC43OCAxLjAzNyA2Ljk4NSAyLjc1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy40NDcgMTEuODk0YzAgLjMzMyAyLjI0Mi41NTQgNS45NDIuNTU0IDMuNTg3IDAgNi4wNTQtLjIyMSA2LjIwMy0uNTU0LjE1LS4zODctMS45NDMtLjU1NC01Ljk0Mi0uNTU0LTMuODg2IDAtNi4yMDMuMjIyLTYuMjAzLjU1NHpNMTIuOTYzIDE2Ljg4YzAgLjMzMyAxLjMwOC41NTQgMy4xNzYuNTU0IDEuODY5IDAgMy4xNzctLjIyMSAzLjE3Ny0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc3LS41NTQtMS44NjggMC0zLjE3Ni4yMjItMy4xNzYuNTU0ek0yMC44MSAxNi44OGMwIC4zMzMgMS4xMjEuNTU0IDIuNjE2LjU1NHMyLjYxNi0uMjIxIDIuNjE2LS41NTRjMC0uMzMyLTEuMTIxLS41NTQtMi42MTYtLjU1NHMtMi42MTYuMjIyLTIuNjE2LjU1NHpNMzEuMjc0IDE2Ljg4YzAgLjI3Ny42NzIuNTU0IDEuNDk0LjU1NHMxLjQ5NC0uMjc3IDEuNDk0LS41NTRjMC0uMzMyLS42NzItLjU1NC0xLjQ5NC0uNTU0cy0xLjQ5NC4yMjItMS40OTQuNTU0ek05LjUyNSAyMS42NDVjLS4xODcuMjIxLS4zIDcuNDIzLS4zIDE2LjAxIDAgMTQuMzQ5LjAzOCAxNS42NzguNjczIDE2LjUxLjU2MS43NzUgMS44NjkuOTQxIDguMTQ3IDEuMDUybDcuNDM2LjE2Ni4xMTIgNC4yNjZjLjA3NSAyLjM4Mi4yMjUgNC4zMjEuMzM3IDQuMzIxLjE1IDAgLjc0Ny0uNjY1IDEuMzA4LTEuNDk2bDEuMDQ2LTEuNDk2IDEuMDQ2IDEuNDk2Yy41Ni44MzEgMS4xNTkgMS40OTYgMS4zMDggMS40OTYuMTUgMCAuMjYyLTEuOTk0LjI2Mi00LjQzMnYtNC40MzJoMi45NTJjNC4xMSAwIDQuMTQ4LS4wNTUgNC4xNDgtMTAuOTE0IDAtNC45ODYtLjE1LTguNTMxLS4zNzQtOC43NTMtLjIyNC0uMjIxLS4zNzMgMS4yNzQtLjM3MyA0LjF2NC40ODdIMzUuNTdjLS45MzQgMC0xLjY4Mi4yMjItMS42ODIuNTU0IDAgLjI3Ny43NDguNTU0IDEuNjgyLjU1NGgxLjY4MnYzLjU0NmMwIDUuMzE4IDAgNS4zMTgtMy40MDEgNS4zMThIMzAuOXYtMi4xNmMwLTEuNjA3LjIyNC0yLjQzOC43NDctMi45OTIuNjczLS43Mi43ODUtMS4yNzQuNjczLTQuNTk4bC0uMTEyLTMuNzEyLTIuMDU1LTEuNjYyLTIuMDU2LTEuNjYyLTEuODY4IDEuNjYyLTEuODY5IDEuNjA2LS4xMTIgMy43NjhjLS4xMTIgMy4zMjQgMCAzLjg3OC42NzMgNC41OTguNTIzLjU1NC43NDcgMS4zODUuNzQ3IDIuOTkydjIuMTZoLTcuNjIzYy04LjcwNyAwLTguMDcyLjM4OC04LjA3Mi01LjMxOHYtMy41NDZoNi4zNTNjMy45OTggMCA2LjM1My0uMjIxIDYuMzUzLS41NTQgMC0uMzMyLTIuMzU1LS41NTQtNi4zNTMtLjU1NEg5Ljk3M2wtLjA3NS0xMS40MTJjLS4wNzQtNi4yNi0uMjI0LTExLjE5MS0uMzczLTEwLjk3em0yMC40NzggMTguMjgxYzEuNjQ0IDEuNDQgMS42NDQgMS40NCAxLjY0NCA0LjU0M3YzLjE1OGwtMS43MTkgMS4zMy0xLjcxOSAxLjM4NS0xLjY0NC0xLjMzLTEuNjQ0LTEuMzg1VjQ0LjQ3YzAtMy4xMDIgMC0zLjE1NyAxLjYwNy00LjU0My44Ni0uNzc1IDEuNjA3LTEuNDQgMS42ODEtMS40NC4wNzUgMCAuODYuNjY1IDEuNzk0IDEuNDR6bS0uODIyIDExLjAyNWwuOTcxLS45NDJWNjEuOTJsLS45MzQtMS4yNzQtLjkzNC0xLjI3NC0uOTM0IDEuMjc0LS45MzQgMS4yNzR2LTExLjhsLjg5Ni44MzFjLjg2LjgzMSAxLjAxLjgzMSAxLjg2OSAwelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjkxIDQxLjgxYzAgLjI3Ny4zMzcuNzc2Ljc0NyAxLjEwOC40NDkuMzMzLjc0OCAxLjE2My43NDggMS45NCAwIC43NzUuMTg2IDEuMzg0LjM3MyAxLjM4NC43NDcgMCAuMzc0LTMuMjY4LS40NDgtNC4xLS45NzEtLjk5Ny0xLjQyLTEuMTA4LTEuNDItLjMzMnpNMTQuMDg0IDIxLjg2NmMwIC4yNzcuNjcyLjU1NCAxLjUzMi41NTQuODk2IDAgMS40Mi0uMjIxIDEuMjctLjU1NC0uMTEyLS4zMzItLjgyMi0uNTU0LTEuNTMyLS41NTQtLjcxIDAtMS4yNy4yMjItMS4yNy41NTR6TTE4Ljc1NSAyMS44NjZjLS4xNS4zODggMi41MDQuNTU0IDcuNjIzLjU1NCA1LjAwOCAwIDcuODg1LS4yMjEgNy44ODUtLjU1NCAwLS4zMzItMi44MDMtLjU1NC03LjYyMy0uNTU0LTQuNzA5IDAtNy43MzYuMjIyLTcuODg1LjU1NHpNMTIuNzc2IDI3LjQwNmMuMTUuMzMzIDIuODAzLjU1NCA2LjcyNi41NTQgMy45MjQgMCA2LjU3Ny0uMjIxIDYuNzI3LS41NTQuMTUtLjM4OC0yLjE2OC0uNTU0LTYuNzI3LS41NTRzLTYuODc1LjE2Ni02LjcyNi41NTR6TTI3LjkxIDI3LjQwNmMwIC4zMzMgMS4zMDguNTU0IDMuMTc3LjU1NCAxLjg2OCAwIDMuMTc2LS4yMjEgMy4xNzYtLjU1NCAwLS4zMzItMS4zMDgtLjU1NC0zLjE3Ni0uNTU0LTEuODY5IDAtMy4xNzcuMjIyLTMuMTc3LjU1NHpNMTIuOTYzIDMyLjM5MmMwIC4zMzMgMy4yNS41NTQgOC45NjguNTU0czguOTY5LS4yMjEgOC45NjktLjU1NGMwLS4zMzItMy4yNTEtLjU1NC04Ljk2OS0uNTU0LTUuNzE3IDAtOC45NjguMjIyLTguOTY4LjU1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NtYXJ0Q29udHJhY3TEsGNvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1R3aXR0ZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjE0IDcuMjVjLS45MzEuNDIzLTEuOTM0LjctMi45NzMuODM0YTUuMTk0IDUuMTk0IDAgMDAyLjI3MS0yLjg3NiAxMC40NCAxMC40NCAwIDAxLTMuMjg2IDEuMjY5Yy0uOTU1LTEuMDQtMi4yOTYtMS42NDQtMy44MTktMS42NDQtMi44NCAwLTUuMTYgMi4zMi01LjE2IDUuMTg0IDAgLjQxMS4wNS44MS4xMzQgMS4xODRBMTQuNzM1IDE0LjczNSAwIDAxMy42MjUgNS43ODhhNS4xMjggNS4xMjggMCAwMC0uNyAyLjU5OGMwIDEuOC45MDUgMy4zOTUgMi4zMDcgNC4zMDItLjg1OCAwLTEuNjU1LS4yNDItMi4zNTYtLjYwNXYuMDM3YTUuMTg4IDUuMTg4IDAgMDA0LjE1NyA1LjA4NyA1LjEgNS4xIDAgMDEtMi4zMzMuMDg0IDUuMTcyIDUuMTcyIDAgMDA0LjgzNCAzLjYwMSAxMC4yOTYgMTAuMjk2IDAgMDEtNi40NCAyLjIyNGMtLjQxMSAwLS44MjItLjAyNS0xLjIzMy0uMDczYTE0LjY3NSAxNC42NzUgMCAwMDcuOTUgMi4zMzJjOS41MjIgMCAxNC43NTQtNy45MDIgMTQuNzU0LTE0Ljc1NCAwLS4yMyAwLS40NDctLjAxMi0uNjc2QTEwLjM1OSAxMC4zNTkgMCAwMDI3LjE0IDcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdWZWN0b3IocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOCAyOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzLjk4OCA5LjEzOGgtMS43MTN2LTIuNjFDMjIuMjc1IDIuOTIzIDE4LjQzNyAwIDEzLjcwOCAwIDguOTc3IDAgNS4xNCAyLjkyNCA1LjE0IDYuNTI3djIuNjExSDMuNDI3QzEuNTQyIDkuMTM4IDAgMTAuMzEzIDAgMTEuNzV2MTMuMDU1YzAgMS40MzYgMS41NDIgMi42MTEgMy40MjcgMi42MTFoMjAuNTYxYzEuODg1IDAgMy40MjctMS4xNzUgMy40MjctMi42MTFWMTEuNzQ5YzAtMS40MzYtMS41NDItMi42MS0zLjQyNy0yLjYxem0tMTUuNDItMi42MWMwLTIuMTY4IDIuMjk1LTMuOTE3IDUuMTQtMy45MTcgMi44NDQgMCA1LjE0IDEuNzUgNS4xNCAzLjkxNnYyLjYxMUg4LjU2OHYtMi42MXptMTUuNDIgMTguMjc2SDMuNDI3VjExLjc0OWgyMC41NjF2MTMuMDU1em0tMTAuMjgtMy45MTZjMS44ODQgMCAzLjQyNi0xLjE3NSAzLjQyNi0yLjYxMSAwLTEuNDM2LTEuNTQyLTIuNjExLTMuNDI3LTIuNjExLTEuODg0IDAtMy40MjYgMS4xNzUtMy40MjYgMi42MSAwIDEuNDM3IDEuNTQyIDIuNjEyIDMuNDI2IDIuNjEyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1ZlY3RvclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1lvdXR1YmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEyLjA4MyAxOC4xMjVsNi4yNzItMy42MjUtNi4yNzItMy42MjV2Ny4yNXptMTMuOTY5LTkuNDYxYy4xNTcuNTY4LjI2NSAxLjMyOS4zMzggMi4yOTYuMDg0Ljk2Ni4xMiAxLjguMTIgMi41MjVsLjA3MyAxLjAxNWMwIDIuNjQ2LS4xOTMgNC41OTItLjUzMSA1LjgzNi0uMzAyIDEuMDg4LTEuMDAzIDEuNzg5LTIuMDkgMi4wOS0uNTY5LjE1OC0xLjYwOC4yNjctMy4yMDMuMzM5LTEuNTcuMDg0LTMuMDA5LjEyLTQuMzM4LjEybC0xLjkyMS4wNzNjLTUuMDYzIDAtOC4yMTctLjE5My05LjQ2MS0uNTMxLTEuMDg4LS4zMDItMS43ODktMS4wMDMtMi4wOS0yLjA5LS4xNTgtLjU2OS0uMjY3LTEuMzMtLjMzOS0yLjI5Ny0uMDg1LS45NjYtLjEyLTEuOC0uMTItMi41MjVMMi40MTYgMTQuNWMwLTIuNjQ2LjE5My00LjU5Mi41MzEtNS44MzYuMzAyLTEuMDg4IDEuMDAzLTEuNzg5IDIuMDktMi4wOS41NjktLjE1OCAxLjYwOC0uMjY3IDMuMjAzLS4zMzkgMS41Ny0uMDg1IDMuMDA4LS4xMiA0LjMzOC0uMTJsMS45MjEtLjA3M2M1LjA2MyAwIDguMjE3LjE5MyA5LjQ2MS41MzEgMS4wODguMzAyIDEuNzg5IDEuMDAzIDIuMDkgMi4wOXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBTdG9yZSB9IGZyb20gJy4vQXBwU3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrU3F1YXJlIH0gZnJvbSAnLi9DaGVja1NxdWFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR29vZ2xlUGxheVN0b3JlIH0gZnJvbSAnLi9Hb29nbGVQbGF5U3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWVwYWdlT3B0aW9uIH0gZnJvbSAnLi9Ib21lcGFnZU9wdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgxLBuc3RhZ3JhbSB9IGZyb20gJy4vxLBuc3RhZ3JhbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2RuIH0gZnJvbSAnLi9MaW5rZG4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWwgfSBmcm9tICcuL01haWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lZGlhIH0gZnJvbSAnLi9NZWRpYSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YURhdGEgfSBmcm9tICcuL01ldGFEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuc2VhTG9nbyB9IGZyb20gJy4vT3BlbnNlYUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFyQ29kZSB9IGZyb20gJy4vUXJDb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSYXJpYmxlTG9nbyB9IGZyb20gJy4vUmFyaWJsZUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhdmluZ3NQaWcgfSBmcm9tICcuL1NhdmluZ3NQaWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNtYXJ0Q29udHJhY3TEsGNvbiB9IGZyb20gJy4vU21hcnRDb250cmFjdMSwY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3IgfSBmcm9tICcuL1ZlY3RvcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWW91dHViZSB9IGZyb20gJy4vWW91dHViZSciLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnxLBuc3RhZ3JhbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOS40MjUgMi40MTdoMTAuMTVhNy4wMTMgNy4wMTMgMCAwMTcuMDA4IDcuMDA4djEwLjE1YTcuMDA4IDcuMDA4IDAgMDEtNy4wMDggNy4wMDhIOS40MjVhNy4wMTMgNy4wMTMgMCAwMS03LjAwOC03LjAwOFY5LjQyNWE3LjAwOCA3LjAwOCAwIDAxNy4wMDgtNy4wMDh6bS0uMjQyIDIuNDE2YTQuMzUgNC4zNSAwIDAwLTQuMzUgNC4zNXYxMC42MzRhNC4zNDcgNC4zNDcgMCAwMDQuMzUgNC4zNWgxMC42MzRhNC4zNSA0LjM1IDAgMDA0LjM1LTQuMzVWOS4xODNhNC4zNDcgNC4zNDcgMCAwMC00LjM1LTQuMzVIOS4xODN6bTExLjY2IDEuODEzYTEuNTEgMS41MSAwIDExMCAzLjAyIDEuNTEgMS41MSAwIDAxMC0zLjAyek0xNC41IDguNDU4YTYuMDQyIDYuMDQyIDAgMTEwIDEyLjA4NCA2LjA0MiA2LjA0MiAwIDAxMC0xMi4wODR6bTAgMi40MTdhMy42MjUgMy42MjUgMCAxMDAgNy4yNSAzLjYyNSAzLjYyNSAwIDAwMC03LjI1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsG5zdGFncmFtXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uLy4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gXCIuLi8uLi90ZXh0L3RleHQtdGl0bGVcIjtcclxuaW1wb3J0IEdvb2dsZVBsYXlTdG9yZSBmcm9tICcuLi8uLi8uLi9QaG90b3MvZ29vZ2xlLXBsYXktc3RvcmUucG5nJ1xyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vLi4vUGhvdG9zL2FwcC1zdG9yZS5wbmcnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRvci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgYm9sZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgT3duYWJsZS1OUyBORlQ8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0U2lkZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wVGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPk93bmFibGUtTlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIEFwcCBpcyB1c2VkIHRvIGNyZWF0ZSBhbmQgdmlldyBTZW1pLUZ1bmdpYmxlIE5GVHMgZm9yIGFydHdvcmssIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmNoYW5kaXNlLCB0aWNrZXRzLCBjb3Vwb25zLCBhbmQgbW9yZSEgQWxsIGFjY291bnRzIGFyZSBleHBvcnRhYmxlIHRvIE1ldGFNYXNrIHdhbGxldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5Ob3RlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGZ1bmN0aW9uYWxpdHkgaXMgb25seSBhdmFpbGFibGUgdG8gQW5kcm9pZCB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBORlRzIHlvdSBnZW5lcmF0ZSBhcmUgYXV0aGVudGljYXRpb24gYW5kIG93bmVyc2hpcCByZWNvcmRzIGZvciB5b3VyIGRpZ2l0YWwgY3JlYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHBoeXNpY2FsIGdvb2RzIGxpa2UgcGFpbnRpbmdzIG9yIGRlc2lnbmVyIHNob2VzLiBSZWNvcmRzIGFyZSBiYWNrZWQgdXAgb24gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrY2hhaW4gYW5kIGltcG9zc2libGUgdG8gY291bnRlcmZlaXQuIEFsbCByZWNvcmRzIGNhbiBiZSB0cmFja2VkIGJhY2sgdG8gdGhlIG9yaWdpbmFsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3IuIFlvdXIgYmxvY2tjaGFpbiByZWNvcmRzIGFyZSAxMDAlIHNlY3VyZWQgYnkgeW91ciBkaWdpdGFsIGtleXMgYW5kIGlkZW50aXR5LiBORlRzIGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSB3b3JsZCdzIG1vc3Qgc2VjdXJlIHdheSB0byBwcm92aWRlIGF1dGhlbnRpY2l0eSBvZiBnb29kcywgcHJldmVudCBjb3VudGVyZmVpdGluZyBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZSBwcm9vZiBvZiBvd25lcnNoaXAuIFVzZSB0aGUgbGlua3MgYmVsb3cgdG8gZG93bmxvYWQgdGhlIGFwcHMgYW5kIHN0YXJ0IGNyZWF0aW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5GVHMgdG9kYXk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17R29vZ2xlUGxheVN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2dvb2dsZVBsYXlTdG9yZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MS4wMDl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtBcHBTdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdnb29nbGVQbGF5U3RvcmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzEuMDA5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21UZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+T3duZXJmeSBORlQgQ3JlYXRvciA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlIGFwcCBhbGxvd3MgeW91IHRvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZUFwcExpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYW4gaW52ZW50b3J5IG9mIHlvdXIgZGlnaXRhbCBhbmQgcGh5c2ljYWwgaXRlbXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzZXJ2ZSB0aGUgY3JlYXRvciBpbmZvcm1hdGlvbiBhbmQgdGhlIG93bmVyc2hpcCBoaXN0b3J5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VmFsaWRhdGUgYXV0aGVudGljaXR5IG9mIG1lcmNoYW5kaXNlIGJ5IGNoZWNraW5nIGl0cyBzb3VyY2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdXBwb3J0cyBkaWdpdGFsIGFzc2V0cyBjcmVhdGVkIG9uIG90aGVyIHBsYXRmb3JtcyBsaWtlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucGxhdGZvcm1MaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PcGVuU2VhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NTEIgRGlnaXRhbCBDb2xsZWN0aWJsZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkVuamluIEFzc2V0czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3J5cHRvS2l0dGllczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmFza2V0QmFsbCBEaWdpdGFsIENvbGxlY3RpYmxlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlDcnlwdG9IZXJvczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGVjZW50cmFsYW5kPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4weFVuaXZlcnNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5hbmQgbWFueSBtb3JlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5Pd25lcmZ5IE5GVCBHZW5lcmF0b3I8L3NwYW4+ZmVhdHVyZXM6PC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3VwcG9ydCBmb3IgRVJDNzIxIG9yIEVSQzExNTUgZGlnaXRhbCBhc3NldHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3duZXJzaGlwIGludGVncml0eSAtIHlvdSwgdGhlIGNyZWF0b3IsIG93biB5b3VyIHByaXZhdGUga2V5czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PcHBvcnR1bml0eSB0byB0cmFkZSBjcmVhdGVkIE5GVHMgb24gT3BlblNlYSBhbmQgb3RoZXIgdHJhZGluZyBwbGF0Zm9ybXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT5Ub2tlbnMgbWludGVkIGJ5IHlvdXIgYWRkcmVzcyBhcmUgdW5pcXVlIGluIGFsbCB0aGUgd29ybGQgYW5kIGNhbiBvbmx5IGJlIGNyZWF0ZWQgYnkgeW91IGFuZCB5b3UgYWxvbmUuPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9iYXNlL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbiAoeyBjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tICcuLi90ZXh0L3RleHQtdGl0bGUnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcbmNvbnN0IE1FTlUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbWFrZS1hbi1uZnQnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFrZSBhbiBORlQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2J1c2luZXNzLXNpZ251cCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdCdXNpbmVzcyBTaWdudXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ1N1YnNjcmliZS1mb3ItdXBjb21pbmctZHJvcHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnU3Vic2NyaWJlIGZvciBVcGNvbWluZyBEcm9wcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbmZ0LXN0YW5kYXJkcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdORlQgU3RhbmRhcmRzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdkb3dubG9hZC1uZnQtY3JlYXRvcicsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdEb3dubG9hZCBORlQgQ3JlYXRvcidcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1hcmspfT5cclxuICAgICAgICAgICAgPEhlYWRUaXRsZT5Pd25hYmxlLU5TPC9IZWFkVGl0bGU+IFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJ0bn0+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJCdG59XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PSB7bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJjxUZXh0VGl0bGU+IHttZW51LnRpdGxlfSA8L1RleHRUaXRsZT59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbi8+fVxyXG4gICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkVGl0bGUoeyBib2xkPSBmYWxzZSxjbGFzc05hbWUgLGNoaWxkcmVuLCBzaXplPTIwLCBvcGFjaXR5PTF9KXtcclxuICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBbc3R5bGVzLlRpdGxlLCBcclxuICAgICAgICBib2xkICYmIHN0eWxlcy5ib2xkLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgIF0pfVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFNpemU6c2l6ZSwgb3BhY2l0eTogb3BhY2l0eX19XHJcbiAgICAgICAgPntjaGlsZHJlbn08L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkVGl0bGVcclxuXHJcbi8qXHJcbiAgICBjbiBzdGFuZCBmb3IgY2xhc3NuYW1lczogJ0NsYXNzbmFtZXMnICBpcyBwcmV2ZW50IGNsYXNzIG92ZXJ3cml0ZS4gSXQgY29tZXMgbW9yZSB0aGFuIG9uZSBjbGFzcyBpbnRvIGZ1bmN0aW9uLCBpdCdzIHJlYXNvbiBhYm91dCBjb25mbGljdC4gXHJcbiAgICBib2xkOiBTb21lIHRleHQgaGFzIGJvbGQgZm9udCB3ZWlnaHQsIGJ1dCBzb21lIGl0IGhhc24ndC4gV2hlbiB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0IHByb3BlcnRpZXMsIGJvbGQgcHJvcGVydGllcyB3aWxsIGhhdmUgYmVlbiBhY3RpdmF0ZWQuXHJcbiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXh0VGl0bGUoeyBib2xkPWZhbHNlLCBjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y24oW3N0eWxlcy5UaXRsZSwgYm9sZCAmJiBzdHlsZXMuYm9sZF0pfT57Y2hpbGRyZW59PC9wPlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFRpdGxlIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvZG93bmxvYWRORlRDcmVhdG9yL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gRG93bmxvYWRORlRDcmVhdG9yKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dCAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZE5GVENyZWF0b3IiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvUGhvdG9zL2FwcC1zdG9yZS5iZmNlYjExOGEzNmRhZWNhZDliOTI3M2FlYWIxOGQ4Ny5wbmdcIixcImhlaWdodFwiOjcyLFwid2lkdGhcIjoyNDEsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGUGhvdG9zJTJGYXBwLXN0b3JlLmJmY2ViMTE4YTM2ZGFlY2FkOWI5MjczYWVhYjE4ZDg3LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvUGhvdG9zL2dvb2dsZS1wbGF5LXN0b3JlLjcwZWMwYjE1YTFkYWJkOGNmMWFmODY1ZmIxNmE4YTY5LnBuZ1wiLFwiaGVpZ2h0XCI6NzIsXCJ3aWR0aFwiOjI0MSxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZQaG90b3MlMkZnb29nbGUtcGxheS1zdG9yZS43MGVjMGIxNWExZGFiZDhjZjFhZjg2NWZiMTZhOGE2OS5wbmcmdz04JnE9NzBcIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFzZUJ0blwiOiBcInN0eWxlX2Jhc2VCdG5fXzI1eV9yXCIsXG5cdFwiRnJhbWVCb3JkZXJcIjogXCJzdHlsZV9GcmFtZUJvcmRlcl9fMUhwNjNcIixcblx0XCJsaW5rQ29udGFpbmVyXCI6IFwic3R5bGVfbGlua0NvbnRhaW5lcl9fMmFKU2pcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZyYW1lQnRuXCI6IFwiZnJhbWVCdXR0b25fZnJhbWVCdG5fX0FtUTJ1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZV9jb250YWluZXJfXzE1TlNsXCIsXG5cdFwiYm9keVwiOiBcInN0eWxlX2JvZHlfXzRyS3lyXCIsXG5cdFwibGVmdFNpZGVcIjogXCJzdHlsZV9sZWZ0U2lkZV9fNkRlVGtcIixcblx0XCJyaWdodFNpZGVcIjogXCJzdHlsZV9yaWdodFNpZGVfXzNOaVJCXCIsXG5cdFwicmlnaHRTaWRlQ29udGFpbmVyXCI6IFwic3R5bGVfcmlnaHRTaWRlQ29udGFpbmVyX18xN0p5QlwiLFxuXHRcInRvcFRleHRDb250YWluZXJcIjogXCJzdHlsZV90b3BUZXh0Q29udGFpbmVyX19LSTNIYVwiLFxuXHRcIm1pZGRsZUltYWdlQ29udGFpbmVyXCI6IFwic3R5bGVfbWlkZGxlSW1hZ2VDb250YWluZXJfX0ZlbmFEXCIsXG5cdFwiYm90dG9tVGV4dENvbnRhaW5lclwiOiBcInN0eWxlX2JvdHRvbVRleHRDb250YWluZXJfXzNYeHVaXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTlwiLFxuXHRcIm5hdkJ0blwiOiBcIm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaFwiLFxuXHRcIm5hdkl0ZW1cIjogXCJuYXZpZ2F0aW9uX25hdkl0ZW1fXzIwdWhzXCIsXG5cdFwibWFya1wiOiBcIm5hdmlnYXRpb25fbWFya19fM0dGYU1cIixcblx0XCJsb2dpbkJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcImhlYWQtdGl0bGVfVGl0bGVfXzNtd1hnXCIsXG5cdFwiYm9sZFwiOiBcImhlYWQtdGl0bGVfYm9sZF9fMTJzR3lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRpdGxlXCI6IFwidGV4dC10aXRsZV9UaXRsZV9fNktiOWhcIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX19wUzI4dVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjbiIsImZyYW1lQnV0dG9uIiwiYm9yZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsImJhc2VCdG4iLCJGcmFtZUJvcmRlciIsImxpbmtCdXR0b24iLCJsaW5rQ29udGFpbmVyIiwibGlua3MiLCJidXR0b24iLCJDb21wIiwiQnV0dG9uIiwiVGV4dFRpdGxlIiwiRnJhbWVCdXR0b24iLCJmcmFtZUJ0biIsIlN2Z0FwcFN0b3JlIiwiU3ZnQ2hlY2tTcXVhcmUiLCJTdmdEaXNjb3JkIiwiU3ZnRHJvcERvd24iLCJTdmdEcm9wRG93bsSwY29uIiwiU3ZnRXRoTG9nbyIsIlN2Z0ZhY2Vib29rIiwiU3ZnRmluZ2VycHJpbnQiLCJTdmdHb29nbGVQbGF5U3RvcmUiLCJTdmdIb21lcGFnZU9wdGlvbiIsIlN2Z0xpbmtkbiIsIlN2Z01haWwiLCJTdmdNZWRpYSIsIlN2Z01ldGFEYXRhIiwiU3ZnT3BlbnNlYUxvZ28iLCJTdmdRckNvZGUiLCJTdmdSYXJpYmxlTG9nbyIsIlN2Z1NhdmluZ3NQaWciLCJTdmdTbWFydENvbnRyYWN0xLBjb24iLCJTdmdUd2l0dGVyIiwiU3ZnVmVjdG9yIiwiU3ZnWW91dHViZSIsImRlZmF1bHQiLCJBcHBTdG9yZSIsIkNoZWNrU3F1YXJlIiwiRGlzY29yZCIsIkRyb3BEb3duxLBjb24iLCJEcm9wRG93biIsIkV0aExvZ28iLCJGYWNlYm9vayIsIkZpbmdlcnByaW50IiwiR29vZ2xlUGxheVN0b3JlIiwiSG9tZXBhZ2VPcHRpb24iLCLEsG5zdGFncmFtIiwiTGlua2RuIiwiTWFpbCIsIk1lZGlhIiwiTWV0YURhdGEiLCJPcGVuc2VhTG9nbyIsIlFyQ29kZSIsIlJhcmlibGVMb2dvIiwiU2F2aW5nc1BpZyIsIlNtYXJ0Q29udHJhY3TEsGNvbiIsIlR3aXR0ZXIiLCJWZWN0b3IiLCJZb3V0dWJlIiwiU3ZnxLBuc3RhZ3JhbSIsIk5hdmlnYXRvciIsIkhlYWRUaXRsZSIsIkltYWdlIiwiTGF5b3V0IiwiY29udGFpbmVyIiwibmF2aWdhdGlvbiIsImJvZHkiLCJsZWZ0U2lkZSIsInJpZ2h0U2lkZSIsInJpZ2h0U2lkZUNvbnRhaW5lciIsInRvcFRleHRDb250YWluZXIiLCJtaWRkbGVJbWFnZUNvbnRhaW5lciIsImJvdHRvbVRleHRDb250YWluZXIiLCJtb2JpbGVBcHBMaXN0IiwicGxhdGZvcm1MaXN0IiwiZmVhdHVyZXMiLCJOYXZpZ2F0aW9uQnV0dG9uIiwibmF2IiwiTUVOVSIsImtleSIsImljb24iLCJ0aXRsZSIsIk5hdmlnYXRpb24iLCJmbGF0IiwibmF2aWdhdG9yIiwibWFyayIsIm5hdkJ0biIsIm1hcCIsIm1lbnUiLCJzdWJCdG4iLCJsb2dpbkJ1dHRvbiIsImJvbGQiLCJzaXplIiwib3BhY2l0eSIsIlRpdGxlIiwiZm9udFNpemUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwidXNlRWZmZWN0IiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJEb3dubG9hZE5GVENyZWF0b3IiXSwic291cmNlUm9vdCI6IiJ9