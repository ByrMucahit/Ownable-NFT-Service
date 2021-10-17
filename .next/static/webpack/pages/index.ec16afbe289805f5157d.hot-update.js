self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.module.css */ "./components/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["border", "children"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button.js";





function button(_ref) {
  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      children = _ref.children,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([baseBtn, border && (_button_module_css__WEBPACK_IMPORTED_MODULE_4___default().FrameBorder)]),
    type: "button",
    children: [" ", children, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (button);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/frame-button.js":
/*!************************************!*\
  !*** ./components/frame-button.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frame_button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame-button.module.css */ "./components/frame-button.module.css");
/* harmony import */ var _frame_button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_frame_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame-button.js";





function FrameButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__.default, {
    type: "button",
    className: (_frame_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().frameBtn),
    border: true,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

_c = FrameButton;
/* harmony default export */ __webpack_exports__["default"] = (FrameButton);

var _c;

$RefreshReg$(_c, "FrameButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/head-title.js":
/*!**********************************!*\
  !*** ./components/head-title.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-title.module.css */ "./components/head-title.module.css");
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\head-title.js";





function HeadTitle(_ref) {
  var _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold)]),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

_c = HeadTitle;
/* harmony default export */ __webpack_exports__["default"] = (HeadTitle);

var _c;

$RefreshReg$(_c, "HeadTitle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Discord.js":
/*!*************************************!*\
  !*** ./components/icons/Discord.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Discord.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgDiscord(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgDiscord;
/* harmony default export */ __webpack_exports__["default"] = (SvgDiscord);

var _c;

$RefreshReg$(_c, "SvgDiscord");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/DropDown.js":
/*!**************************************!*\
  !*** ./components/icons/DropDown.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DropDown.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgDropDown(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgDropDown;
/* harmony default export */ __webpack_exports__["default"] = (SvgDropDown);

var _c;

$RefreshReg$(_c, "SvgDropDown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/DropDownİcon.js":
/*!******************************************!*\
  !*** ./components/icons/DropDownİcon.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DropDown\u0130con.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgDropDownİcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgDropDownİcon;
/* harmony default export */ __webpack_exports__["default"] = (SvgDropDownİcon);

var _c;

$RefreshReg$(_c, "SvgDropDown\u0130con");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/EthLogo.js":
/*!*************************************!*\
  !*** ./components/icons/EthLogo.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\EthLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgEthLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 42 71",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      opacity: 0.6,
      d: "M20.996 27.293L2 36.09l18.996 11.427 18.99-11.427-18.99-8.796z",
      fill: "#010101"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      opacity: 0.45,
      d: "M1.57 35.834l-.253.428.425.256L20.74 47.944l.758.456V2.174l-.93 1.571L1.57 35.835z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      opacity: 0.8,
      d: "M21.426 3.745l-.93-1.572V48.4l.758-.456 18.989-11.426.425-.256-.253-.428L21.426 3.745z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      opacity: 0.45,
      d: "M20.497 51.462V65.41L3.75 41.389l16.747 10.073z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgEthLogo;
/* harmony default export */ __webpack_exports__["default"] = (SvgEthLogo);

var _c;

$RefreshReg$(_c, "SvgEthLogo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Facebook.js":
/*!**************************************!*\
  !*** ./components/icons/Facebook.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Facebook.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgFacebook(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgFacebook;
/* harmony default export */ __webpack_exports__["default"] = (SvgFacebook);

var _c;

$RefreshReg$(_c, "SvgFacebook");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Fingerprint.js":
/*!*****************************************!*\
  !*** ./components/icons/Fingerprint.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Fingerprint.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgFingerprint(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
      clipPath: "url(#fingerprint_svg__clip0)",
      fill: "#000",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M16.373.164c-.619.164-.928.96-.598 1.564.206.356.784.439 3.444.52 2.557.083 3.464.22 4.516.687 1.443.631 2.082.466 2.082-.494 0-.823-.804-1.344-2.928-1.92-1.773-.495-5.217-.687-6.516-.357zM11.568 2.002C8.62 3.703 5.093 7.325 5.238 8.505c.04.33.206.74.391.878.269.22.66-.082 1.856-1.427 1.67-1.866 3.176-3.128 4.929-4.116.618-.356 1.258-.768 1.402-.905.371-.412.31-1.262-.144-1.592-.516-.356-.289-.411-2.104.659zM27.611 3.292c-.742.548-.412 1.454.97 2.661 1.546 1.345 3.278 3.567 4.454 5.68.866 1.564 1.381 1.866 1.876 1.07.227-.357.206-.576-.103-1.344-1.382-3.403-6.186-8.808-7.197-8.067zM15.507 4.91c-3.114 1.126-5.98 3.403-7.877 6.311-2.104 3.183-3.238 6.915-3.753 12.21C2.743 35.395 3.67 47.358 6.64 58.8c1.155 4.472 1.34 4.884 2.02 4.774.33-.055.578-.274.62-.576.04-.275-.31-1.839-.764-3.457-2.474-8.78-3.711-19.152-3.464-28.701.31-10.564 1.3-14.872 4.475-19.07 2.64-3.512 5.794-5.24 9.589-5.24 3.814 0 6.99 1.728 9.609 5.213 1.753 2.36 2.578 4.143 3.402 7.298.64 2.525.722 5.049.413 12.485-.268 6.366.392 11.442 2.248 17.341.783 2.442 1.257 3.073 1.855 2.415.434-.467.392-1.208-.185-2.69-.742-1.975-1.732-6.338-2.103-9.328-.269-2.168-.31-3.568-.165-7.601.247-7.08.185-9.878-.207-11.908-1.381-6.915-5.093-12.183-10.125-14.46-2.288-1.016-6.062-1.208-8.351-.384z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M16.187 9.136c-2.412.796-5.732 3.677-5.588 4.912.041.301.206.685.392.823.268.22.64-.028 1.753-1.125 2.206-2.195 4.887-3.266 7.34-2.909 1.032.165 1.176.11 1.382-.384.29-.713.29-.768-.103-1.262-.392-.549-3.546-.576-5.176-.055zM23.281 10.316c-.082.082-.144.466-.144.796 0 .466.288.85 1.154 1.509 2.29 1.728 4.517 5.652 4.95 8.643.185 1.262.804 1.728 1.36.988.392-.494.392-.604.083-1.948-.392-1.784-1.196-3.897-2.083-5.543-1.526-2.716-4.66-5.35-5.32-4.445zM3.176 11.413c-.887 1.674-1.96 4.994-2.434 7.436-.618 3.238-.639 4.335-.082 4.72.536.384 1.237-.522 1.237-1.62 0-1.426 1.031-5.624 1.98-7.929.742-1.838.866-2.36.7-2.799-.308-.768-.927-.686-1.401.192zM16.105 13.773c-1.69.933-2.536 1.729-3.485 3.128-1.773 2.689-2.371 5.9-2.619 13.939-.33 11.661 1.732 23.899 5.774 34.298.907 2.305 1.155 2.744 1.567 2.744 1.01 0 1.01-.741-.02-3.348-2.454-6.173-4.351-13.939-5.217-21.347-.722-6.036-.598-16.984.247-21.265.557-2.908 2.124-5.186 4.227-6.2 1.34-.66 3.733-.577 5.197.164 2.227 1.125 4.083 4.088 4.392 7.024.062.713 0 3.402-.144 6.01-.207 3.758-.227 5.487-.02 8.285.515 7.656 2.123 14.46 4.886 20.717.928 2.112 1.279 2.524 1.835 2.25.64-.33.516-1.153-.536-3.567-3.711-8.506-5.217-18-4.516-28.262.33-4.637.165-6.393-.824-9.082-.764-2.03-2.393-4.116-4.083-5.186-1.01-.659-1.485-.768-3.341-.85-1.897-.083-2.31-.028-3.32.548zM35.2 15.227c-.186.247-.268.659-.206.906.722 2.47 1.175 5.433 1.278 8.396.124 3.238.268 3.979.805 3.979.598 0 .907-.851.907-2.552-.02-5.104-1.258-11.168-2.248-11.168-.103 0-.35.192-.536.44zM8.99 16.38c-1.051.905-2.04 6.695-2.185 12.786-.062 1.784 0 2.195.31 2.47.247.219.453.219.7 0 .289-.247.413-1.016.619-3.842.33-4.774.619-6.805 1.217-8.78.598-2.003.598-2.195.103-2.58-.475-.329-.475-.329-.763-.054z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M18.992 17.834c-.557.74-.206 1.51.784 1.756 1.195.274 2.227 1.317 2.742 2.744.433 1.18.454 1.536.33 4.198-.124 3.018-.02 3.622.722 3.622.577 0 .783-.823.928-3.76.144-3.017.02-3.923-.928-5.926-.68-1.372-1.918-2.497-3.279-2.908-.784-.22-.949-.192-1.3.274zM15.816 18.904c-.825.713-1.69 2.524-1.938 4.116-.31 1.948-.68 7.326-.598 8.917.062 1.18.124 1.372.536 1.455.845.164 1.072-.385 1.072-2.662 0-1.152.145-3.43.31-5.049.309-3.073.7-4.39 1.526-5.076.536-.411.556-1.591.061-1.948-.288-.192-.536-.137-.969.247z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M18.29 21.895c-1.236.686-1.505 2.113-1.67 9.494-.268 10.399 1.217 19.59 4.66 28.81 1.877 5.049 2.64 6.585 3.28 6.585.99 0 .99-.74-.062-3.046-2.083-4.637-3.98-10.563-4.95-15.502-1.092-5.707-1.257-7.6-1.237-15.064 0-7.216.165-9.137.743-9.274.556-.137.763.74.536 2.552-.268 2.387-.268 11.14.02 13.856.599 5.652 1.588 10.454 3.135 15.338 1.031 3.238 2.66 7.326 3.63 9 .556 1.015 1.175 1.18 1.484.412.227-.577.247-.494-1.423-4.308-2.99-6.805-4.866-14.872-5.403-23.295-.185-3.019-.185-4.857.042-8.699.288-5.542.227-5.954-1.134-6.722-.784-.439-1.052-.439-1.65-.137zM29.88 25.078c-.433.576-.66 3.896-.619 9.192.041 5.432.165 6.173 1.01 6.173h.599l-.083-4.801c-.041-2.882.041-5.9.186-7.519.247-2.551.247-2.744-.103-3.1-.495-.467-.62-.44-.99.055zM.371 26.203c-.495.63-.495 12.484 0 13.115.371.522.413.522.928.165.371-.274.392-.659.392-6.722 0-6.064-.02-6.449-.392-6.723-.515-.357-.557-.357-.928.165zM36.478 30.895c-.267.329-.164 10.371.104 10.728.37.494.948.384 1.196-.192.309-.796.268-9.988-.042-10.4-.268-.356-1.03-.438-1.258-.136z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("clipPath", {
        id: "fingerprint_svg__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgFingerprint;
/* harmony default export */ __webpack_exports__["default"] = (SvgFingerprint);

var _c;

$RefreshReg$(_c, "SvgFingerprint");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Linkdn.js":
/*!************************************!*\
  !*** ./components/icons/Linkdn.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Linkdn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgLinkdn(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgLinkdn;
/* harmony default export */ __webpack_exports__["default"] = (SvgLinkdn);

var _c;

$RefreshReg$(_c, "SvgLinkdn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Mail.js":
/*!**********************************!*\
  !*** ./components/icons/Mail.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Mail.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgMail(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgMail;
/* harmony default export */ __webpack_exports__["default"] = (SvgMail);

var _c;

$RefreshReg$(_c, "SvgMail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Media.js":
/*!***********************************!*\
  !*** ./components/icons/Media.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Media.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgMedia(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgMedia;
/* harmony default export */ __webpack_exports__["default"] = (SvgMedia);

var _c;

$RefreshReg$(_c, "SvgMedia");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/MetaData.js":
/*!**************************************!*\
  !*** ./components/icons/MetaData.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\MetaData.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgMetaData(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M3.02 37.307l12.512 20.74c.056-.15.119-.29.188-.421 5.041-8.358 10.084-16.713 15.128-25.065.179-.272.276-.662.264-1.064-.011-2.419 0-4.837 0-7.313-.117.084-.222.151-.323.233-.842.681-1.713 1.248-2.651 1.43-.219.032-.408.262-.493.597-.802 2.372-2.053 3.592-3.676 3.55-1.703-.041-2.962-1.415-3.7-3.97-.88-3.047-.192-6.802 1.542-8.617 1.755-1.835 4.058-1.23 5.384 1.416.243.495.43 1.018.29 1.701-.083.465-.303.826-.584.958-.282.132-.584.016-.801-.306-.22-.314-.397-.712-.625-1.01-.768-1-1.612-1.192-2.492-.465-.93.772-1.375 2.065-1.306 3.779.066 1.597.597 2.706 1.474 3.32.916.648 1.981.198 2.6-1.098-.774-.297-1.478-.837-2.005-1.8a12.59 12.59 0 01-.953-2.324c-.195-.628.053-1.395.421-1.707.381-.328.85-.128 1.089.465.332.88.676 1.702 1.262 2.174.884.698 1.797.62 2.707.284 1.754-.635 3.188-2.193 4.43-4.255 1.373-2.272 2.359-4.913 2.666-8.138.19-1.985.022-3.871-1.03-5.175-.854-1.06-1.842-1.11-2.852-.796-1.184.397-2.3 1.219-3.272 2.407a5.09 5.09 0 01-.438.479c-.4.414-.924.227-1.186-.422-.262-.649-.165-1.524.218-1.978a15.265 15.265 0 011.672-1.8c1.403-1.225 2.895-1.964 4.512-1.734 2.373.347 4.079 3.34 4.191 7.292.096 3.371-.633 6.298-1.74 9.016-.661 1.6-1.455 3.038-2.359 4.271-.115.198-.18.46-.182.735-.011 3.215-.011 6.431 0 9.65.014.66-.145 1.3-.435 1.755-5.413 8.95-10.822 17.903-16.228 26.861-.56.93-1.001.93-1.562 0-4.482-7.423-8.962-14.855-13.44-22.295-.573-.949-.572-1.672.006-2.632 5.396-8.94 10.792-17.888 16.189-26.843.27-.486.654-.755 1.053-.737 2.747.022 5.494.022 8.242 0 .4-.022.786.243 1.059.728 1.328 2.237 2.665 4.452 4.002 6.682.291.461.356 1.192.157 1.772-.199.58-.61.863-.999.683a1.56 1.56 0 01-.484-.541 772.103 772.103 0 01-3.602-5.948c-.15-.275-.367-.424-.59-.404-2.446 0-4.89 0-7.336.02-.19.01-.372.129-.515.338-5.09 8.412-10.174 16.83-15.254 25.255l-.144.267z",
      fill: "#000",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgMetaData;
/* harmony default export */ __webpack_exports__["default"] = (SvgMetaData);

var _c;

$RefreshReg$(_c, "SvgMetaData");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/OpenseaLogo.js":
/*!*****************************************!*\
  !*** ./components/icons/OpenseaLogo.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\OpenseaLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgOpenseaLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M18.895 14.681c-.045-.045-.112-.045-.18-.022l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0 .31.31 0 01.089-.067c.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65-.359 0-.627.291-.627.65 0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224a5.16 5.16 0 00.448-.941c.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157.044-.022.022-.09-.023-.112zm-9.997-.493h2.555c.045 0 .068-.023.068-.067v-2.78c0-.022-.023-.044-.045-.067l-1.255-.583c-.023-.022-.068 0-.09.045l-1.3 3.34c-.022.067.022.112.067.112zM13 0C5.828 0 0 5.828 0 13s5.828 13 13 13 13-5.828 13-13S20.172 0 13 0zm-.045 22.459c-5.177 0-9.369-4.192-9.369-9.392 0-5.177 4.192-9.391 9.37-9.391 5.177 0 9.368 4.214 9.368 9.391-.022 5.2-4.214 9.392-9.369 9.392zm5.76-7.8l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0 .31.31 0 01.089-.067c.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65-.359 0-.627.291-.627.65 0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224a5.16 5.16 0 00.448-.941c.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157 0-.045-.023-.112-.068-.134 0 0-.067-.023-.135 0zm-9.817-.471h2.555c.045 0 .068-.023.068-.067v-2.78c0-.022-.023-.044-.045-.067l-1.255-.583c-.023-.022-.068 0-.09.045l-1.3 3.34c-.022.067.022.112.067.112z",
      fill: "#3291E9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgOpenseaLogo;
/* harmony default export */ __webpack_exports__["default"] = (SvgOpenseaLogo);

var _c;

$RefreshReg$(_c, "SvgOpenseaLogo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/QrCode.js":
/*!************************************!*\
  !*** ./components/icons/QrCode.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\QrCode.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgQrCode(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 47 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
      clipPath: "url(#qr-code_svg__clip0)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("clipPath", {
        id: "qr-code_svg__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgQrCode;
/* harmony default export */ __webpack_exports__["default"] = (SvgQrCode);

var _c;

$RefreshReg$(_c, "SvgQrCode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/RaribleLogo.js":
/*!*****************************************!*\
  !*** ./components/icons/RaribleLogo.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\RaribleLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgRaribleLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M20.8 0H5.2A5.2 5.2 0 000 5.2v15.6A5.2 5.2 0 005.2 26h15.6a5.2 5.2 0 005.2-5.2V5.2A5.2 5.2 0 0020.8 0z",
      fill: "#FEDA03"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgRaribleLogo;
/* harmony default export */ __webpack_exports__["default"] = (SvgRaribleLogo);

var _c;

$RefreshReg$(_c, "SvgRaribleLogo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/SavingsPig.js":
/*!****************************************!*\
  !*** ./components/icons/SavingsPig.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\SavingsPig.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgSavingsPig(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M17.311.071c-3.581.821-5.937 7.212-4.764 12.925.127.59.222 1.107.222 1.178 0 .072-.349.34-.761.625-.972.625-2.63 2.089-3.286 2.892l-.507.625-.517-.375c-.972-.696-2.314-.785-3.202-.214-.38.25-1.236 1.232-1.236 1.428 0 .072.423 1.09.94 2.25l.93 2.106-.412 1.089c-.549 1.428-1.183 3.677-1.426 5.07l-.19 1.107h-.486c-.718 0-1.48.446-1.88 1.107-.708 1.178-.698 1.017-.73 7.944-.02 3.91.011 6.552.074 6.962.148.91.698 2 1.215 2.392.37.286.708.34 2.272.34h1.849l.95 1.678c.529.91 1.332 2.124 1.786 2.695l.813 1.018v2.981c0 2.732.021 3.017.243 3.66.412 1.232.708 1.375 2.737 1.321 1.595-.053 1.785-.09 2.06-.428.433-.554.676-1.357.74-2.5l.063-1 .327.09c1.405.41 3.19.535 4.49.339.76-.125 1.448-.268 1.532-.321.106-.072.158.178.19 1.07.042 1.25.222 1.822.76 2.5.265.34.434.375 2.103.375 1.733 0 1.838-.018 2.166-.41.613-.75.697-1.232.76-4.446l.053-2.892.793-.928c1.753-2.089 3.528-5.517 4.447-8.605 1.173-3.892 1.638-8.801 1.215-12.764l-.137-1.303.507-.429c.57-.5 1.226-.714 1.627-.553.402.178.317.375-.18.392-1.193.054-1.257 2.714-.073 3.303.37.197.454.179.707-.125.159-.196.36-.607.444-.928.19-.678.2-.678.76-.197.381.322.444.34.582.108.243-.411.074-.947-.444-1.357-.264-.214-.517-.375-.58-.375-.054 0-.107-.09-.107-.196 0-.5-.38-1.447-.665-1.714-.444-.375-1.374-.215-2.145.375-.327.25-.612.464-.623.464-.021 0-.074-.268-.116-.59-.148-1.142-.898-3.784-1.564-5.48-1.67-4.23-4.247-7.676-7.142-9.569-.549-.357-1.014-.66-1.035-.678-.01-.036.074-.518.19-1.107 1.036-5.034-.655-10.765-3.666-12.479-.834-.464-1.849-.624-2.673-.446zm1.796 2.607c1.332.5 2.41 2.035 3.033 4.284.264.946.295 1.25.295 2.928 0 1.75-.02 1.946-.348 3.07-1.648 5.713-6.381 5.713-7.977 0-.317-1.106-.338-1.339-.338-3.07 0-1.678.032-1.982.296-2.928.602-2.178 1.627-3.677 2.905-4.23.888-.394 1.226-.412 2.134-.054zm-4.352 15.37c.02 0-.349.232-.814.482-1.87 1.018-2.493 1.821-2.218 2.857.063.232.253.535.401.642.243.161.412.107 1.183-.464 2.779-2.017 6.17-2.231 8.96-.571.496.303 1.14.732 1.415.982.623.517.982.482 1.268-.143.486-1.107-.233-2.089-2.325-3.231-.602-.322-1.077-.625-1.077-.679.01-.053.243-.446.528-.874l.518-.786 1.056.643c4.047 2.41 7.258 7.998 8.304 14.46.528 3.231.465 7.23-.169 10.497-.845 4.338-2.62 8.159-5.029 10.854l-1.13 1.268-.01 3.249-.011 3.267-1.395.053-1.405.054v-2.339c0-1.267-.032-2.32-.074-2.32-.053 0-.349.124-.666.267-.887.41-2.852.803-3.94.803-1.13 0-2.736-.374-3.92-.892a28.93 28.93 0 00-.866-.357c-.021 0-.053 1.017-.063 2.267l-.032 2.285-1.405.054-1.405.053.021-3.41.01-3.41-.855-.981c-1.036-1.214-2.124-2.892-2.874-4.445l-.55-1.16H4.064c-2.017 0-2.123-.019-2.356-.393l-.243-.375V40.22c0-7.391-.137-6.82 1.596-6.945l1.183-.09.243-1.57c.433-2.732 1.11-4.999 2.314-7.73.147-.34.116-.464-.624-2.142-.454-1-.75-1.84-.697-1.928.18-.304 1.278.107 2.06.767l.792.66.793-.999c.972-1.214 2.44-2.553 3.645-3.32l.898-.59.528.84c.285.464.539.856.56.874zm21.087 14.264c.127.09.137.179.042.536-.127.446-.18.5-.444.321-.169-.107-.232-.625-.095-.839.085-.16.275-.16.497-.018z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgSavingsPig;
/* harmony default export */ __webpack_exports__["default"] = (SvgSavingsPig);

var _c;

$RefreshReg$(_c, "SvgSavingsPig");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/SmartContractİcon.js":
/*!***********************************************!*\
  !*** ./components/icons/SmartContractİcon.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\SmartContract\u0130con.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgSmartContractİcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M3.023 1.368C1.864 2.088.333 5.025.07 7.13c-.336 2.382.561 4.986 2.056 6.15.71.553 2.13.83 4.11.83h2.99v2.493c0 1.385.187 2.493.374 2.493.485 0 .485-11.634 0-13.517-.187-.776-.673-1.884-1.121-2.549L7.73 1.922h13.117c11.696 0 13.228.111 14.2.942 2.018 1.773 2.205 3.213 2.205 17.285 0 8.144.15 12.797.373 12.797.224 0 .374-4.598.374-12.742 0-13.85-.15-15.124-2.055-17.728l-1.01-1.385L19.39.981c-8.557-.056-15.919.11-16.367.387zm3.96 1.385c1.496 1.164 2.243 3.49 2.243 7.202v3.047H7.544c-1.644 0-1.644 0-1.308-1.44.225-.776.262-1.994.15-2.77-.224-1.385-2.242-3.38-2.69-2.66-.15.222-.038.5.26.666.786.387 1.907 2.216 1.907 3.157 0 .444-.337 1.33-.785 1.995-.972 1.44-2.392 1.052-3.587-.942C.48 9.4.407 8.016 1.19 5.578 2.239 2.256 4.78 1.037 6.985 2.754z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M17.447 11.894c0 .333 2.242.554 5.942.554 3.587 0 6.054-.221 6.203-.554.15-.387-1.943-.554-5.942-.554-3.886 0-6.203.222-6.203.554zM12.963 16.88c0 .333 1.308.554 3.176.554 1.869 0 3.177-.221 3.177-.554 0-.332-1.308-.554-3.177-.554-1.868 0-3.176.222-3.176.554zM20.81 16.88c0 .333 1.121.554 2.616.554s2.616-.221 2.616-.554c0-.332-1.121-.554-2.616-.554s-2.616.222-2.616.554zM31.274 16.88c0 .277.672.554 1.494.554s1.494-.277 1.494-.554c0-.332-.672-.554-1.494-.554s-1.494.222-1.494.554zM9.525 21.645c-.187.221-.3 7.423-.3 16.01 0 14.349.038 15.678.673 16.51.561.775 1.869.941 8.147 1.052l7.436.166.112 4.266c.075 2.382.225 4.321.337 4.321.15 0 .747-.665 1.308-1.496l1.046-1.496 1.046 1.496c.56.831 1.159 1.496 1.308 1.496.15 0 .262-1.994.262-4.432v-4.432h2.952c4.11 0 4.148-.055 4.148-10.914 0-4.986-.15-8.531-.374-8.753-.224-.221-.373 1.274-.373 4.1v4.487H35.57c-.934 0-1.682.222-1.682.554 0 .277.748.554 1.682.554h1.682v3.546c0 5.318 0 5.318-3.401 5.318H30.9v-2.16c0-1.607.224-2.438.747-2.992.673-.72.785-1.274.673-4.598l-.112-3.712-2.055-1.662-2.056-1.662-1.868 1.662-1.869 1.606-.112 3.768c-.112 3.324 0 3.878.673 4.598.523.554.747 1.385.747 2.992v2.16h-7.623c-8.707 0-8.072.388-8.072-5.318v-3.546h6.353c3.998 0 6.353-.221 6.353-.554 0-.332-2.355-.554-6.353-.554H9.973l-.075-11.412c-.074-6.26-.224-11.191-.373-10.97zm20.478 18.281c1.644 1.44 1.644 1.44 1.644 4.543v3.158l-1.719 1.33-1.719 1.385-1.644-1.33-1.644-1.385V44.47c0-3.102 0-3.157 1.607-4.543.86-.775 1.607-1.44 1.681-1.44.075 0 .86.665 1.794 1.44zm-.822 11.025l.971-.942V61.92l-.934-1.274-.934-1.274-.934 1.274-.934 1.274v-11.8l.896.831c.86.831 1.01.831 1.869 0z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgSmartContractİcon;
/* harmony default export */ __webpack_exports__["default"] = (SvgSmartContractİcon);

var _c;

$RefreshReg$(_c, "SvgSmartContract\u0130con");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Twitter.js":
/*!*************************************!*\
  !*** ./components/icons/Twitter.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Twitter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgTwitter(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgTwitter;
/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

var _c;

$RefreshReg$(_c, "SvgTwitter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/Youtube.js":
/*!*************************************!*\
  !*** ./components/icons/Youtube.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Youtube.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgYoutube(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgYoutube;
/* harmony default export */ __webpack_exports__["default"] = (SvgYoutube);

var _c;

$RefreshReg$(_c, "SvgYoutube");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Discord": function() { return /* reexport safe */ _Discord__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "DropDownİcon": function() { return /* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "DropDown": function() { return /* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "EthLogo": function() { return /* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "Facebook": function() { return /* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "Fingerprint": function() { return /* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "İnstagram": function() { return /* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "Linkdn": function() { return /* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "Mail": function() { return /* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "Media": function() { return /* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "MetaData": function() { return /* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "OpenseaLogo": function() { return /* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "QrCode": function() { return /* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "RaribleLogo": function() { return /* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "SavingsPig": function() { return /* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "SmartContractİcon": function() { return /* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "Twitter": function() { return /* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "Youtube": function() { return /* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_17__.default; }
/* harmony export */ });
/* harmony import */ var _Discord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discord */ "./components/icons/Discord.js");
/* harmony import */ var _DropDown_con__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropDownİcon */ "./components/icons/DropDownİcon.js");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDown */ "./components/icons/DropDown.js");
/* harmony import */ var _EthLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EthLogo */ "./components/icons/EthLogo.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Facebook */ "./components/icons/Facebook.js");
/* harmony import */ var _Fingerprint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fingerprint */ "./components/icons/Fingerprint.js");
/* harmony import */ var _nstagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./İnstagram */ "./components/icons/İnstagram.js");
/* harmony import */ var _Linkdn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Linkdn */ "./components/icons/Linkdn.js");
/* harmony import */ var _Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mail */ "./components/icons/Mail.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Media */ "./components/icons/Media.js");
/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MetaData */ "./components/icons/MetaData.js");
/* harmony import */ var _OpenseaLogo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OpenseaLogo */ "./components/icons/OpenseaLogo.js");
/* harmony import */ var _QrCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QrCode */ "./components/icons/QrCode.js");
/* harmony import */ var _RaribleLogo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RaribleLogo */ "./components/icons/RaribleLogo.js");
/* harmony import */ var _SavingsPig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SavingsPig */ "./components/icons/SavingsPig.js");
/* harmony import */ var _SmartContract_con__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SmartContractİcon */ "./components/icons/SmartContractİcon.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Twitter */ "./components/icons/Twitter.js");
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Youtube */ "./components/icons/Youtube.js");
/* module decorator */ module = __webpack_require__.hmd(module);



















;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/icons/İnstagram.js":
/*!***************************************!*\
  !*** ./components/icons/İnstagram.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\\u0130nstagram.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Svgİnstagram(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = Svgİnstagram;
/* harmony default export */ __webpack_exports__["default"] = (Svgİnstagram);

var _c;

$RefreshReg$(_c, "Svg\u0130nstagram");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./constant/index.js");
/* harmony import */ var _components_col_markSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/col-markSide */ "./components/col-markSide.js");
/* harmony import */ var _components_col_mainSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/col-mainSide */ "./components/col-mainSide.js");
/* harmony import */ var _components_col_loginSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/col-loginSide */ "./components/col-loginSide.js");
/* harmony import */ var _Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Hook/useWindowsSize */ "./Hook/useWindowsSize.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation */ "./components/navigation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout.js",
    _s = $RefreshSig$();












function Layout(_ref) {
  _s();

  var children = _ref.children;
  var size = (0,_Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_6__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().layout)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_col_mainSide__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, this);
}

_s(Layout, "/dTDjnwlNGsRzu12Dr5t7HJe8sA=", false, function () {
  return [_Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/navigation-button.js":
/*!*****************************************!*\
  !*** ./components/navigation-button.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation-button.js";





function NavigationButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

_c = NavigationButton;
/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

var _c;

$RefreshReg$(_c, "NavigationButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-button */ "./components/navigation-button.js");
/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title */ "./components/text-title.js");
/* harmony import */ var _head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head-title */ "./components/head-title.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./components/icons/index.js");
/* harmony import */ var _frame_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frame-button */ "./components/frame-button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation.js";









var MENU = [{
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

function Navigation() {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
    className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navigator),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().mark)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("headTitle", {
        children: "Ownable-NS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navBtn),
      children: MENU.map(function (menu) {
        var showElement = menu.icon.length > 0;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("textTitle", {
            children: [" ", menu.title, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, _this)
        }, menu.key, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().loginButton),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_frame_button__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/text-title.js":
/*!**********************************!*\
  !*** ./components/text-title.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title.module.css */ "./components/text-title.module.css");
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text-title.js";





function TextTitle(_ref) {
  var _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold), className]),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

_c = TextTitle;
/* harmony default export */ __webpack_exports__["default"] = (TextTitle);

var _c;

$RefreshReg$(_c, "TextTitle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/button.module.css":
/*!**************************************!*\
  !*** ./components/button.module.css ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/frame-button.module.css":
/*!********************************************!*\
  !*** ./components/frame-button.module.css ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./frame-button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame-button.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./frame-button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame-button.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./frame-button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame-button.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/head-title.module.css":
/*!******************************************!*\
  !*** ./components/head-title.module.css ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./head-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/head-title.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./head-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/head-title.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./head-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/head-title.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/navigation.module.css":
/*!******************************************!*\
  !*** ./components/navigation.module.css ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/text-title.module.css":
/*!******************************************!*\
  !*** ./components/text-title.module.css ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./text-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text-title.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./text-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text-title.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./text-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text-title.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button.module.css":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button.module.css ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Container from button */\r\n    /* Button Elements */\r\n    .button_baseBtn__1m7rF{\r\n        font-size: 12px;\r\n        background-color: transparent;\r\n        display: inline-block;\r\n        border:none;  \r\n    }\r\n\r\n    /* While hovering on buttons of navigation, text will have been yellow. */\r\n    .button_baseBtn__1m7rF:hover{\r\n        color: var(--c-btn-background)\r\n    }\r\n\r\n    /* If Button has border, This code snippet will have been activated*/\r\n    .button_FrameBorder__1gdTB{\r\n        border: 2px solid;\r\n        border-color: var( --c-btn-background);\r\n        width: 92.94px;\r\n        height: 53.81px;\r\n                }\r\n\r\n    /* while hovering on button, Button background will have been black, even text will have been yellow */\r\n    .button_FrameBorder__1gdTB:hover{\r\n        background: var(--c-frame-background);\r\n                        }\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/button.module.css"],"names":[],"mappings":"AAAA,0BAA0B;IACtB,oBAAoB;IACpB;QACI,eAAe;QACf,6BAA6B;QAC7B,qBAAqB;QACrB,WAAW;IACf;;IAEA,yEAAyE;IACzE;QACI;IACJ;;IAEA,oEAAoE;IACpE;QACI,iBAAiB;QACjB,sCAAsC;QACtC,cAAc;QACd,eAAe;gBACP;;IAEZ,sGAAsG;IACtG;QACI,qCAAqC;wBACrB","sourcesContent":["/* Container from button */\r\n    /* Button Elements */\r\n    .baseBtn{\r\n        font-size: 12px;\r\n        background-color: transparent;\r\n        display: inline-block;\r\n        border:none;  \r\n    }\r\n\r\n    /* While hovering on buttons of navigation, text will have been yellow. */\r\n    .baseBtn:hover{\r\n        color: var(--c-btn-background)\r\n    }\r\n\r\n    /* If Button has border, This code snippet will have been activated*/\r\n    .FrameBorder{\r\n        border: 2px solid;\r\n        border-color: var( --c-btn-background);\r\n        width: 92.94px;\r\n        height: 53.81px;\r\n                }\r\n\r\n    /* while hovering on button, Button background will have been black, even text will have been yellow */\r\n    .FrameBorder:hover{\r\n        background: var(--c-frame-background);\r\n                        }\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"baseBtn": "button_baseBtn__1m7rF",
	"FrameBorder": "button_FrameBorder__1gdTB"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame-button.module.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame-button.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/head-title.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/head-title.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".head-title_Title__1h7AK {\r\n    font-size: 16px;\r\n}\r\n\r\n.head-title_bold__1zWhb {\r\n    font-weight: bold;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/head-title.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".Title {\r\n    font-size: 16px;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Title": "head-title_Title__1h7AK",
	"bold": "head-title_bold__1zWhb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Navigator */\r\n.navigation_navigator__18CJa {\r\n        border: 1px solid;\r\n        border-color: #9E9E9E;\r\n        width: 1903px;\r\n        height: 71px;\r\n        max-height: 95px;\r\n        padding-top: 22px;\r\n        display: table;\r\n}\r\n.navigation_navigator__18CJa div + div {\r\n        padding-left:16px; \r\n    }\r\n/* Navigator Button */\r\n.navigation_navigator__18CJa .navigation_navBtn__2Z5CG{\r\n        padding-left: 980px;\r\n        display: table-cell\r\n            }\r\n/* Mark */\r\n.navigation_navigator__18CJa .navigation_mark__2PeVp{\r\n        padding-left: 30px;\r\n        display: table-cell;\r\n    /* .navBtn and .mark has the same display, because both of them is in different div, and those two div must be same row.*/\r\n    }\r\n.navigation_navigator__18CJa .navigation_mark__2PeVp .navigation_mark__2PeVp svg{\r\n            font-size: 30px;\r\n            display: table-cell;\r\n        }\r\n.navigation_navigator__18CJa .navigation_loginButton__2FBIi{\r\n        padding-right: 60px;\r\n    }\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/navigation.module.css"],"names":[],"mappings":"AAAA,cAAc;AACd;QACQ,iBAAiB;QACjB,qBAAqB;QACrB,aAAa;QACb,YAAY;QACZ,gBAAgB;QAChB,iBAAiB;QACjB,cAAc;AA0BtB;AAxBI;QACI,iBAAiB;IACrB;AAEA,qBAAqB;AACrB;QACI,mBAAmB;QACnB;YACI;AAER,SAAS;AACT;QACI,kBAAkB;QAClB,mBAAmB;IAMvB,yHAAyH;IACzH;AALI;YACI,eAAe;YACf,mBAAmB;QACvB;AAGJ;QACI,mBAAmB;IACvB","sourcesContent":["/* Navigator */\r\n.navigator {\r\n        border: 1px solid;\r\n        border-color: #9E9E9E;\r\n        width: 1903px;\r\n        height: 71px;\r\n        max-height: 95px;\r\n        padding-top: 22px;\r\n        display: table;\r\n\r\n    div + div {\r\n        padding-left:16px; \r\n    }\r\n\r\n    /* Navigator Button */\r\n    .navBtn{\r\n        padding-left: 980px;\r\n        display: table-cell\r\n            }\r\n\r\n    /* Mark */\r\n    .mark{\r\n        padding-left: 30px;\r\n        display: table-cell;\r\n        \r\n        .mark svg{\r\n            font-size: 30px;\r\n            display: table-cell;\r\n        }\r\n    /* .navBtn and .mark has the same display, because both of them is in different div, and those two div must be same row.*/\r\n    }\r\n    .loginButton{\r\n        padding-right: 60px;\r\n    }\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navigator": "navigation_navigator__18CJa",
	"navBtn": "navigation_navBtn__2Z5CG",
	"mark": "navigation_mark__2PeVp",
	"loginButton": "navigation_loginButton__2FBIi"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text-title.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text-title.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-title_Title__3Th57 {\r\n    font-size: 18px;\r\n}\r\n\r\n.text-title_bold__2YHBM {\r\n    font-weight: bold;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/text-title.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".Title {\r\n    font-size: 18px;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Title": "text-title_Title__3Th57",
	"bold": "text-title_bold__2YHBM"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWMxNmFmYmUyODk4MDVmNTE1N2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7O0FBRUEsU0FBU0csTUFBVCxPQUFxRDtBQUFBLHlCQUFuQ0MsTUFBbUM7QUFBQSxNQUFuQ0EsTUFBbUMsNEJBQTVCLEtBQTRCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVJDLEtBQVE7O0FBQ2pELHNCQUNRO0FBQVMsYUFBUyxFQUFFSixpREFBRSxDQUFDLENBQUNLLE9BQUQsRUFBVUgsTUFBTSxJQUFJSCx1RUFBcEIsQ0FBRCxDQUF0QjtBQUFpRSxRQUFJLEVBQUMsUUFBdEU7QUFBQSxvQkFBaUZJLFFBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBR0g7O0FBRUQsK0RBQWVGLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBOzs7QUFHQSxTQUFTTyxXQUFULE9BQWtDO0FBQUEsTUFBWEwsUUFBVyxRQUFYQSxRQUFXO0FBQzlCLHNCQUNRLDhEQUFDLDRDQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFDQSxhQUFTLEVBQUVKLDBFQURYO0FBRUMsVUFBTSxNQUZQO0FBQUEsY0FJQ0k7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUFRSDs7S0FUUUs7QUFZVCwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNFLFNBQVQsT0FBNEM7QUFBQSx1QkFBdkJDLElBQXVCO0FBQUEsTUFBdkJBLElBQXVCLDBCQUFqQixLQUFpQjtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxvRUFBb0Usd0JBQXdCLEtBQUssaUNBQWlDLDBCQUEwQixLQUFLLGVBQWUsaUdBQWlHLFVBQVUsT0FBTyxLQUFLLFlBQVksa0NBQWtDLHdCQUF3QixLQUFLLGVBQWUsMEJBQTBCLEtBQUssMkJBQTJCO0FBQzNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUseUVBQTRCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmFtZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZC10aXRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9EaXNjb3JkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duxLBjb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvRXRoTG9nby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9GYWNlYm9vay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9GaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9MaW5rZG4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvTWFpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9NZXRhRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9PcGVuc2VhTG9nby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9RckNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvUmFyaWJsZUxvZ28uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvU2F2aW5nc1BpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9TbWFydENvbnRyYWN0xLBjb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvVHdpdHRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9Zb3V0dWJlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL8SwbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24tYnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24ubW9kdWxlLmNzcz9kYzgxIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZyYW1lLWJ1dHRvbi5tb2R1bGUuY3NzPzJlZTgiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZC10aXRsZS5tb2R1bGUuY3NzPzQ2M2EiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5tb2R1bGUuY3NzP2VjNTgiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGV4dC10aXRsZS5tb2R1bGUuY3NzPzhmMDAiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnJhbWUtYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXh0LXRpdGxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuZnVuY3Rpb24gYnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e2NuKFtiYXNlQnRuICxib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyXSl9IHR5cGU9XCJidXR0b25cIj4ge2NoaWxkcmVufSA8L2J1dHRvbj5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZyYW1lLWJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuXHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZyYW1lQnRufVxyXG4gICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhbWVCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkLXRpdGxlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRUaXRsZSh7IGJvbGQ9IGZhbHNlLCBjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvaDE+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkVGl0bGUiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnRGlzY29yZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUuNjAzIDBIMy4zOTdDMS41MjUgMCAwIDEuMzM0IDAgMi45ODd2MTkuNjA0YzAgMS42NTMgMS41MjUgMi45ODcgMy4zOTcgMi45ODdIMjIuMTlsLS44NzgtMi42ODMgMi4xMjEgMS43MjYgMi4wMDUgMS42MjRMMjkgMjlWMi45ODdDMjkgMS4zMzQgMjcuNDc1IDAgMjUuNjAzIDB6bS02LjM5NyAxOC45MzdzLS41OTYtLjYyMy0xLjA5My0xLjE3NWMyLjE3LS41MzYgMi45OTktMS43MjUgMi45OTktMS43MjUtLjY4LjM5Mi0xLjMyNi42NjctMS45MDYuODU1LS44MjguMzA1LTEuNjI0LjUwOC0yLjQwMy42MjRhMTMuMjQgMTMuMjQgMCAwMS00LjI5Mi0uMDE0IDE1LjQ1IDE1LjQ1IDAgMDEtMi40MzYtLjYyNGMtLjM4LS4xMy0uNzk1LS4yOS0xLjIxLS40OTMtLjA0OS0uMDI5LS4wOTktLjA0NC0uMTQ4LS4wNzNhLjIyOC4yMjggMCAwMS0uMDY3LS4wNDNjLS4yOTgtLjE0NS0uNDY0LS4yNDYtLjQ2NC0uMjQ2cy43OTYgMS4xNiAyLjkgMS43MWMtLjQ5Ny41NTItMS4xMSAxLjIwNC0xLjExIDEuMjA0LTMuNjYyLS4xMDItNS4wNTQtMi4yMDQtNS4wNTQtMi4yMDQgMC00LjY2OSAyLjM4Ni04LjQ1NCAyLjM4Ni04LjQ1NCAyLjM4Ni0xLjU2NiA0LjY1Ny0xLjUyMiA0LjY1Ny0xLjUyMmwuMTY1LjE3NGMtMi45ODMuNzU0LTQuMzU4IDEuOS00LjM1OCAxLjlzLjM2NS0uMTc1Ljk3OC0uNDIxYzEuNzczLS42ODEgMy4xODEtLjg3IDMuNzYxLS45MTMuMS0uMDE1LjE4My0uMDMuMjgyLS4wM2ExNi4wMTEgMTYuMDExIDAgMDEzLjM0OC0uMDI4YzEuNTc0LjE1OSAzLjI2NC41NjUgNC45ODggMS4zOTIgMCAwLTEuMzEtMS4wODgtNC4xMjctMS44NDJsLjIzMi0uMjMyczIuMjctLjA0MyA0LjY1NyAxLjUyM2MwIDAgMi4zODYgMy43ODQgMi4zODYgOC40NTMgMCAwLTEuNDA4IDIuMTAyLTUuMDcgMi4yMDR6bS03LjcwNS02Ljc3MmMtLjk0NSAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NCAwIDEuNjktLjcyNiAxLjY5LTEuNjEuMDE2LS44ODUtLjc0Ni0xLjYxLTEuNjktMS42MXptNi4wNDggMGMtLjk0NCAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NSAwIDEuNjktLjcyNiAxLjY5LTEuNjEgMC0uODg1LS43NDUtMS42MS0xLjY5LTEuNjF6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEaXNjb3JkO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00LjUxNiA3LjU0OGMuNDM2LS40NDYgMS4wNDMtLjQ4MSAxLjU3NiAwTDEwIDExLjI5NWwzLjkwOC0zLjc0N2MuNTMzLS40ODEgMS4xNDEtLjQ0NiAxLjU3NCAwIC40MzYuNDQ1LjQwOCAxLjE5NyAwIDEuNjE1LS40MDYuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyYTEuMDk1IDEuMDk1IDAgMDEtMS41NzYgMFM0LjkyNCA5LjU4IDQuNTE2IDkuMTYzYy0uNDA4LS40MTgtLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnRHJvcERvd27EsGNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01SDd6XCIgZmlsbD1cIiMwMDBcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93bsSwY29uO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0V0aExvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0MiA3MVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjZ9XG4gICAgICAgIGQ9XCJNMjAuOTk2IDI3LjI5M0wyIDM2LjA5bDE4Ljk5NiAxMS40MjcgMTguOTktMTEuNDI3LTE4Ljk5LTguNzk2elwiXG4gICAgICAgIGZpbGw9XCIjMDEwMTAxXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTEuNTcgMzUuODM0bC0uMjUzLjQyOC40MjUuMjU2TDIwLjc0IDQ3Ljk0NGwuNzU4LjQ1NlYyLjE3NGwtLjkzIDEuNTcxTDEuNTcgMzUuODM1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjEuNDI2IDMuNzQ1bC0uOTMtMS41NzJWNDguNGwuNzU4LS40NTYgMTguOTg5LTExLjQyNi40MjUtLjI1Ni0uMjUzLS40MjhMMjEuNDI2IDMuNzQ1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTIwLjQ5NyA1MS40NjJWNjUuNDFMMy43NSA0MS4zODlsMTYuNzQ3IDEwLjA3M3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC44fVxuICAgICAgICBkPVwiTTIwLjczOCA1MC43NTFsLS4yNDIuMTQ2VjY4LjU5bC45MS0xLjMwNEw0MC40MSA0MC4wMzlsLS42NjgtLjcxNEwyMC43MzggNTAuNzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRXRoTG9nbztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdGYWNlYm9vayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNi4wNDIgMy42MjVoMTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN3pNMjEuNzUgNi4wNDJoLTMuMDJhNC4yMyA0LjIzIDAgMDAtNC4yMyA0LjIyOXYzLjAyaC0yLjQxN3YzLjYyNkgxNC41djguNDU4aDMuNjI1di04LjQ1OGgzLjYyNXYtMy42MjVoLTMuNjI1di0yLjQxN2ExLjIwOCAxLjIwOCAwIDAxMS4yMDgtMS4yMDhoMi40MTdWNi4wNDJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGYWNlYm9vaztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdGaW5nZXJwcmludChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNmaW5nZXJwcmludF9zdmdfX2NsaXAwKVwiIGZpbGw9XCIjMDAwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuMzczLjE2NGMtLjYxOS4xNjQtLjkyOC45Ni0uNTk4IDEuNTY0LjIwNi4zNTYuNzg0LjQzOSAzLjQ0NC41MiAyLjU1Ny4wODMgMy40NjQuMjIgNC41MTYuNjg3IDEuNDQzLjYzMSAyLjA4Mi40NjYgMi4wODItLjQ5NCAwLS44MjMtLjgwNC0xLjM0NC0yLjkyOC0xLjkyLTEuNzczLS40OTUtNS4yMTctLjY4Ny02LjUxNi0uMzU3ek0xMS41NjggMi4wMDJDOC42MiAzLjcwMyA1LjA5MyA3LjMyNSA1LjIzOCA4LjUwNWMuMDQuMzMuMjA2Ljc0LjM5MS44NzguMjY5LjIyLjY2LS4wODIgMS44NTYtMS40MjcgMS42Ny0xLjg2NiAzLjE3Ni0zLjEyOCA0LjkyOS00LjExNi42MTgtLjM1NiAxLjI1OC0uNzY4IDEuNDAyLS45MDUuMzcxLS40MTIuMzEtMS4yNjItLjE0NC0xLjU5Mi0uNTE2LS4zNTYtLjI4OS0uNDExLTIuMTA0LjY1OXpNMjcuNjExIDMuMjkyYy0uNzQyLjU0OC0uNDEyIDEuNDU0Ljk3IDIuNjYxIDEuNTQ2IDEuMzQ1IDMuMjc4IDMuNTY3IDQuNDU0IDUuNjguODY2IDEuNTY0IDEuMzgxIDEuODY2IDEuODc2IDEuMDcuMjI3LS4zNTcuMjA2LS41NzYtLjEwMy0xLjM0NC0xLjM4Mi0zLjQwMy02LjE4Ni04LjgwOC03LjE5Ny04LjA2N3pNMTUuNTA3IDQuOTFjLTMuMTE0IDEuMTI2LTUuOTggMy40MDMtNy44NzcgNi4zMTEtMi4xMDQgMy4xODMtMy4yMzggNi45MTUtMy43NTMgMTIuMjFDMi43NDMgMzUuMzk1IDMuNjcgNDcuMzU4IDYuNjQgNTguOGMxLjE1NSA0LjQ3MiAxLjM0IDQuODg0IDIuMDIgNC43NzQuMzMtLjA1NS41NzgtLjI3NC42Mi0uNTc2LjA0LS4yNzUtLjMxLTEuODM5LS43NjQtMy40NTctMi40NzQtOC43OC0zLjcxMS0xOS4xNTItMy40NjQtMjguNzAxLjMxLTEwLjU2NCAxLjMtMTQuODcyIDQuNDc1LTE5LjA3IDIuNjQtMy41MTIgNS43OTQtNS4yNCA5LjU4OS01LjI0IDMuODE0IDAgNi45OSAxLjcyOCA5LjYwOSA1LjIxMyAxLjc1MyAyLjM2IDIuNTc4IDQuMTQzIDMuNDAyIDcuMjk4LjY0IDIuNTI1LjcyMiA1LjA0OS40MTMgMTIuNDg1LS4yNjggNi4zNjYuMzkyIDExLjQ0MiAyLjI0OCAxNy4zNDEuNzgzIDIuNDQyIDEuMjU3IDMuMDczIDEuODU1IDIuNDE1LjQzNC0uNDY3LjM5Mi0xLjIwOC0uMTg1LTIuNjktLjc0Mi0xLjk3NS0xLjczMi02LjMzOC0yLjEwMy05LjMyOC0uMjY5LTIuMTY4LS4zMS0zLjU2OC0uMTY1LTcuNjAxLjI0Ny03LjA4LjE4NS05Ljg3OC0uMjA3LTExLjkwOC0xLjM4MS02LjkxNS01LjA5My0xMi4xODMtMTAuMTI1LTE0LjQ2LTIuMjg4LTEuMDE2LTYuMDYyLTEuMjA4LTguMzUxLS4zODR6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xNi4xODcgOS4xMzZjLTIuNDEyLjc5Ni01LjczMiAzLjY3Ny01LjU4OCA0LjkxMi4wNDEuMzAxLjIwNi42ODUuMzkyLjgyMy4yNjguMjIuNjQtLjAyOCAxLjc1My0xLjEyNSAyLjIwNi0yLjE5NSA0Ljg4Ny0zLjI2NiA3LjM0LTIuOTA5IDEuMDMyLjE2NSAxLjE3Ni4xMSAxLjM4Mi0uMzg0LjI5LS43MTMuMjktLjc2OC0uMTAzLTEuMjYyLS4zOTItLjU0OS0zLjU0Ni0uNTc2LTUuMTc2LS4wNTV6TTIzLjI4MSAxMC4zMTZjLS4wODIuMDgyLS4xNDQuNDY2LS4xNDQuNzk2IDAgLjQ2Ni4yODguODUgMS4xNTQgMS41MDkgMi4yOSAxLjcyOCA0LjUxNyA1LjY1MiA0Ljk1IDguNjQzLjE4NSAxLjI2Mi44MDQgMS43MjggMS4zNi45ODguMzkyLS40OTQuMzkyLS42MDQuMDgzLTEuOTQ4LS4zOTItMS43ODQtMS4xOTYtMy44OTctMi4wODMtNS41NDMtMS41MjYtMi43MTYtNC42Ni01LjM1LTUuMzItNC40NDV6TTMuMTc2IDExLjQxM2MtLjg4NyAxLjY3NC0xLjk2IDQuOTk0LTIuNDM0IDcuNDM2LS42MTggMy4yMzgtLjYzOSA0LjMzNS0uMDgyIDQuNzIuNTM2LjM4NCAxLjIzNy0uNTIyIDEuMjM3LTEuNjIgMC0xLjQyNiAxLjAzMS01LjYyNCAxLjk4LTcuOTI5Ljc0Mi0xLjgzOC44NjYtMi4zNi43LTIuNzk5LS4zMDgtLjc2OC0uOTI3LS42ODYtMS40MDEuMTkyek0xNi4xMDUgMTMuNzczYy0xLjY5LjkzMy0yLjUzNiAxLjcyOS0zLjQ4NSAzLjEyOC0xLjc3MyAyLjY4OS0yLjM3MSA1LjktMi42MTkgMTMuOTM5LS4zMyAxMS42NjEgMS43MzIgMjMuODk5IDUuNzc0IDM0LjI5OC45MDcgMi4zMDUgMS4xNTUgMi43NDQgMS41NjcgMi43NDQgMS4wMSAwIDEuMDEtLjc0MS0uMDItMy4zNDgtMi40NTQtNi4xNzMtNC4zNTEtMTMuOTM5LTUuMjE3LTIxLjM0Ny0uNzIyLTYuMDM2LS41OTgtMTYuOTg0LjI0Ny0yMS4yNjUuNTU3LTIuOTA4IDIuMTI0LTUuMTg2IDQuMjI3LTYuMiAxLjM0LS42NiAzLjczMy0uNTc3IDUuMTk3LjE2NCAyLjIyNyAxLjEyNSA0LjA4MyA0LjA4OCA0LjM5MiA3LjAyNC4wNjIuNzEzIDAgMy40MDItLjE0NCA2LjAxLS4yMDcgMy43NTgtLjIyNyA1LjQ4Ny0uMDIgOC4yODUuNTE1IDcuNjU2IDIuMTIzIDE0LjQ2IDQuODg2IDIwLjcxNy45MjggMi4xMTIgMS4yNzkgMi41MjQgMS44MzUgMi4yNS42NC0uMzMuNTE2LTEuMTUzLS41MzYtMy41NjctMy43MTEtOC41MDYtNS4yMTctMTgtNC41MTYtMjguMjYyLjMzLTQuNjM3LjE2NS02LjM5My0uODI0LTkuMDgyLS43NjQtMi4wMy0yLjM5My00LjExNi00LjA4My01LjE4Ni0xLjAxLS42NTktMS40ODUtLjc2OC0zLjM0MS0uODUtMS44OTctLjA4My0yLjMxLS4wMjgtMy4zMi41NDh6TTM1LjIgMTUuMjI3Yy0uMTg2LjI0Ny0uMjY4LjY1OS0uMjA2LjkwNi43MjIgMi40NyAxLjE3NSA1LjQzMyAxLjI3OCA4LjM5Ni4xMjQgMy4yMzguMjY4IDMuOTc5LjgwNSAzLjk3OS41OTggMCAuOTA3LS44NTEuOTA3LTIuNTUyLS4wMi01LjEwNC0xLjI1OC0xMS4xNjgtMi4yNDgtMTEuMTY4LS4xMDMgMC0uMzUuMTkyLS41MzYuNDR6TTguOTkgMTYuMzhjLTEuMDUxLjkwNS0yLjA0IDYuNjk1LTIuMTg1IDEyLjc4Ni0uMDYyIDEuNzg0IDAgMi4xOTUuMzEgMi40Ny4yNDcuMjE5LjQ1My4yMTkuNyAwIC4yODktLjI0Ny40MTMtMS4wMTYuNjE5LTMuODQyLjMzLTQuNzc0LjYxOS02LjgwNSAxLjIxNy04Ljc4LjU5OC0yLjAwMy41OTgtMi4xOTUuMTAzLTIuNTgtLjQ3NS0uMzI5LS40NzUtLjMyOS0uNzYzLS4wNTR6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xOC45OTIgMTcuODM0Yy0uNTU3Ljc0LS4yMDYgMS41MS43ODQgMS43NTYgMS4xOTUuMjc0IDIuMjI3IDEuMzE3IDIuNzQyIDIuNzQ0LjQzMyAxLjE4LjQ1NCAxLjUzNi4zMyA0LjE5OC0uMTI0IDMuMDE4LS4wMiAzLjYyMi43MjIgMy42MjIuNTc3IDAgLjc4My0uODIzLjkyOC0zLjc2LjE0NC0zLjAxNy4wMi0zLjkyMy0uOTI4LTUuOTI2LS42OC0xLjM3Mi0xLjkxOC0yLjQ5Ny0zLjI3OS0yLjkwOC0uNzg0LS4yMi0uOTQ5LS4xOTItMS4zLjI3NHpNMTUuODE2IDE4LjkwNGMtLjgyNS43MTMtMS42OSAyLjUyNC0xLjkzOCA0LjExNi0uMzEgMS45NDgtLjY4IDcuMzI2LS41OTggOC45MTcuMDYyIDEuMTguMTI0IDEuMzcyLjUzNiAxLjQ1NS44NDUuMTY0IDEuMDcyLS4zODUgMS4wNzItMi42NjIgMC0xLjE1Mi4xNDUtMy40My4zMS01LjA0OS4zMDktMy4wNzMuNy00LjM5IDEuNTI2LTUuMDc2LjUzNi0uNDExLjU1Ni0xLjU5MS4wNjEtMS45NDgtLjI4OC0uMTkyLS41MzYtLjEzNy0uOTY5LjI0N3pcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE4LjI5IDIxLjg5NWMtMS4yMzYuNjg2LTEuNTA1IDIuMTEzLTEuNjcgOS40OTQtLjI2OCAxMC4zOTkgMS4yMTcgMTkuNTkgNC42NiAyOC44MSAxLjg3NyA1LjA0OSAyLjY0IDYuNTg1IDMuMjggNi41ODUuOTkgMCAuOTktLjc0LS4wNjItMy4wNDYtMi4wODMtNC42MzctMy45OC0xMC41NjMtNC45NS0xNS41MDItMS4wOTItNS43MDctMS4yNTctNy42LTEuMjM3LTE1LjA2NCAwLTcuMjE2LjE2NS05LjEzNy43NDMtOS4yNzQuNTU2LS4xMzcuNzYzLjc0LjUzNiAyLjU1Mi0uMjY4IDIuMzg3LS4yNjggMTEuMTQuMDIgMTMuODU2LjU5OSA1LjY1MiAxLjU4OCAxMC40NTQgMy4xMzUgMTUuMzM4IDEuMDMxIDMuMjM4IDIuNjYgNy4zMjYgMy42MyA5IC41NTYgMS4wMTUgMS4xNzUgMS4xOCAxLjQ4NC40MTIuMjI3LS41NzcuMjQ3LS40OTQtMS40MjMtNC4zMDgtMi45OS02LjgwNS00Ljg2Ni0xNC44NzItNS40MDMtMjMuMjk1LS4xODUtMy4wMTktLjE4NS00Ljg1Ny4wNDItOC42OTkuMjg4LTUuNTQyLjIyNy01Ljk1NC0xLjEzNC02LjcyMi0uNzg0LS40MzktMS4wNTItLjQzOS0xLjY1LS4xMzd6TTI5Ljg4IDI1LjA3OGMtLjQzMy41NzYtLjY2IDMuODk2LS42MTkgOS4xOTIuMDQxIDUuNDMyLjE2NSA2LjE3MyAxLjAxIDYuMTczaC41OTlsLS4wODMtNC44MDFjLS4wNDEtMi44ODIuMDQxLTUuOS4xODYtNy41MTkuMjQ3LTIuNTUxLjI0Ny0yLjc0NC0uMTAzLTMuMS0uNDk1LS40NjctLjYyLS40NC0uOTkuMDU1ek0uMzcxIDI2LjIwM2MtLjQ5NS42My0uNDk1IDEyLjQ4NCAwIDEzLjExNS4zNzEuNTIyLjQxMy41MjIuOTI4LjE2NS4zNzEtLjI3NC4zOTItLjY1OS4zOTItNi43MjIgMC02LjA2NC0uMDItNi40NDktLjM5Mi02LjcyMy0uNTE1LS4zNTctLjU1Ny0uMzU3LS45MjguMTY1ek0zNi40NzggMzAuODk1Yy0uMjY3LjMyOS0uMTY0IDEwLjM3MS4xMDQgMTAuNzI4LjM3LjQ5NC45NDguMzg0IDEuMTk2LS4xOTIuMzA5LS43OTYuMjY4LTkuOTg4LS4wNDItMTAuNC0uMjY4LS4zNTYtMS4wMy0uNDM4LTEuMjU4LS4xMzZ6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yMi43MDQgMzIuOTI1Yy0uNDEzIDEuMDcuMzA5IDkuNjMxIDEuMTU0IDEzLjU4Mi4zMSAxLjQyNy42NiAxLjg2NiAxLjIxNyAxLjU5Mi40OTUtLjI0Ny41NTctLjkwNi4yNDgtMi41MjUtLjUxNi0yLjYzNC0uOTI4LTYuMzY1LTEuMDczLTkuNTItLjA4Mi0xLjY3NS0uMjI3LTMuMTg0LS4zNS0zLjM3Ni0uMzEtLjUyMS0uOTI4LS4zODQtMS4xOTYuMjQ3ek02Ljg0NiAzNC40MDdjLS4xODUuMjc0LS4yMDYgMS4xMjUtLjEwMyAzLjA3My4xNjUgMy4xLjgyNSA5LjYzIDEuMTM0IDExLjExMy4yNDggMS4xOC45MDcgMS42MTggMS40MDIuOTYuMjY4LS4zODQuMjY4LS42ODYtLjA0LTIuODU0LS41MzctMy44MTQtLjcyMy01Ljc2Mi0uODY3LTktLjA4Mi0xLjY3My0uMjI3LTMuMTgyLS4zNS0zLjM3NC0uMjY5LS40NC0uODY3LS40MTItMS4xNzYuMDgyek0xMy41NjkgMzYuMDhjLS4zOTIuNDk1LS4zNSAxLjMxOC4yMDYgNi43MjMuNyA2Ljc1IDEuNDY0IDkuMzMgMi40NTQgOC4zNjkuMzctLjM1Ny4zNy0uNDY3LS4xNjUtMy43MDQtLjMxLTEuODExLS43MDEtNS4wMjItLjg4Ny03LjEwNy0uMTg1LTIuMDU4LS4zOTItMy45NTEtLjQ3NC00LjE3LS4yNDgtLjYwNC0uNzQzLS42Ni0xLjEzNC0uMTF6TS4yNjggNDIuMzA5Yy0uNDc0Ljc2OC4xNjUgNi4zMzggMS4xMTQgOS42ODYuNyAyLjUyNCAxLjAzIDMuMTI4IDEuNjUgMy4xMjguNzIxIDAgLjg2NS0xLjAxNS4zNS0yLjM4Ny0uNzYzLTEuOTQ4LTEuMy00LjY2NS0xLjU0Ny03LjY4My0uMjQ3LTIuODgxLS4yNjgtMi45NjMtLjc4My0zLjA0Ni0uMjg5LS4wNTUtLjY0LjExLS43ODQuMzAyek0zMC4yOTIgNDIuOTRjLS4wODIuMTEtLjE0NC40NjctLjE0NC44MjMgMCAxLjIzNSAxLjQ4NSA2LjY0IDIuNjQgOS41NzYuOTkgMi41NTIgMS4yNTcgMy4wMTkgMS42NyAzLjAxOSAxLjAzIDAgLjk2OS0uNjg2LS4yNjgtNC4wMDYtLjY0LTEuNzMtMS41MDYtNC41NTUtMS45MzktNi4yODQtLjctMi44NTMtLjgyNS0zLjE1NS0xLjI5OS0zLjIzOC0uMjY4LS4wNTQtLjU3NyAwLS42Ni4xMXpNMjUuMDU1IDUwLjYyM2MtLjE4Ni42MzEuMjI2IDIuMTQgMS41MDUgNS42MjUgMS4zMiAzLjYyMiAyLjc0MiA2Ljc1IDMuMTE0IDYuOTQyLjQxMi4yMi44NjYtLjExLjk5LS42ODYuMDgyLS4zMy0uMjI4LTEuMjktLjkwOC0yLjc3MS0uOTctMi4xNC0yLjEyNC01LjI2OS0zLjA5My04LjI2LS4zMy0xLjA3LS40OTUtMS4yODktLjk0OS0xLjI4OS0uMjg4IDAtLjU3Ny4xOTItLjY2LjQzOXpNOC45NSA1Mi4xNmMtLjM3Mi40OTMtLjMzLjg1LjY2IDQuNzE5IDEuMTM0IDQuNDQ1IDIuODA0IDkuNDk0IDMuMjc4IDkuODc4LjQ5NS40MTEgMS4wNzItLjEzNyAxLjA1Mi0uOTYtLjAyLS4zNTctLjQ1NC0xLjkyMS0uOTktMy40My0uNTM2LTEuNTM3LTEuNDAyLTQuNS0xLjkzOC02LjU4Ni0uNzg0LTMuMS0xLjA1Mi0zLjg0MS0xLjM4Mi0zLjg5Ni0uMjI3LS4wMjctLjUzNi4wODItLjY4LjI3NXpNMTYuMDIzIDU0LjEwOGMtLjE0NS43NC45MDcgNC4zMDggMi42MTggOC44OSAxLjQyMyAzLjgxNCAyLjE4NiA1LjIxMyAyLjcwMiA0LjkzOS43NDItLjM4NS42MTgtMS4wNy0uODQ2LTQuODMtLjgwNC0yLjA1Ny0xLjgxNC00LjkxMS0yLjI0Ny02LjMzOC0uOTktMy4yMzgtMS4wMS0zLjI5Mi0xLjYwOS0zLjI5Mi0uMzUgMC0uNTM2LjE5Mi0uNjE4LjYzelwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiZmluZ2VycHJpbnRfc3ZnX19jbGlwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgzOHY2M0gwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZpbmdlcnByaW50O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0xpbmtkbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIuOTU4IDMuNjI1YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN2gxNi45MTZ6bS0uNjA0IDE4LjczVjE1Ljk1YTMuOTQgMy45NCAwIDAwLTMuOTM5LTMuOTRjLTEuMDI3IDAtMi4yMjMuNjMtMi44MDMgMS41NzJWMTIuMjRIMTIuMjR2MTAuMTE0aDMuMzcydi01Ljk1N2MwLS45My43NDktMS42OTIgMS42OC0xLjY5MmExLjY5MSAxLjY5MSAwIDAxMS42OSAxLjY5MnY1Ljk1N2gzLjM3MnpNOC4zMTQgMTAuMzQyYTIuMDMgMi4wMyAwIDAwMi4wMy0yLjAzIDIuMDM3IDIuMDM3IDAgMDAtMi4wMy0yLjA0MkEyLjA0MiAyLjA0MiAwIDAwNi4yNyA4LjMxM2MwIDEuMTI0LjkxOSAyLjAzIDIuMDQyIDIuMDN6bTEuNjc5IDEyLjAxMVYxMi4yNEg2LjY0NnYxMC4xMTRoMy4zNDd6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaW5rZG47XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnTWFpbChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQuMTY3IDQuODMzSDQuODMzQTIuNDEzIDIuNDEzIDAgMDAyLjQzIDcuMjVsLS4wMTIgMTQuNWEyLjQyNCAyLjQyNCAwIDAwMi40MTYgMi40MTdoMTkuMzM0YTIuNDI0IDIuNDI0IDAgMDAyLjQxNi0yLjQxN1Y3LjI1YTIuNDI0IDIuNDI0IDAgMDAtMi40MTYtMi40MTd6bTAgMTYuOTE3SDQuODMzVjkuNjY3bDkuNjY3IDYuMDQxIDkuNjY3LTYuMDQxVjIxLjc1ek0xNC41IDEzLjI5Mkw0LjgzMyA3LjI1aDE5LjMzNEwxNC41IDEzLjI5MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01haWw7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnTWVkaWEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5LjM1IDEwLjA0QTcuNDkgNy40OSAwIDAwMTIgNEM5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0QTUuOTk0IDUuOTk0IDAgMDAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lZGlhO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z01ldGFEYXRhKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyIDM3LjMwN2wxMi41MTIgMjAuNzRjLjA1Ni0uMTUuMTE5LS4yOS4xODgtLjQyMSA1LjA0MS04LjM1OCAxMC4wODQtMTYuNzEzIDE1LjEyOC0yNS4wNjUuMTc5LS4yNzIuMjc2LS42NjIuMjY0LTEuMDY0LS4wMTEtMi40MTkgMC00LjgzNyAwLTcuMzEzLS4xMTcuMDg0LS4yMjIuMTUxLS4zMjMuMjMzLS44NDIuNjgxLTEuNzEzIDEuMjQ4LTIuNjUxIDEuNDMtLjIxOS4wMzItLjQwOC4yNjItLjQ5My41OTctLjgwMiAyLjM3Mi0yLjA1MyAzLjU5Mi0zLjY3NiAzLjU1LTEuNzAzLS4wNDEtMi45NjItMS40MTUtMy43LTMuOTctLjg4LTMuMDQ3LS4xOTItNi44MDIgMS41NDItOC42MTcgMS43NTUtMS44MzUgNC4wNTgtMS4yMyA1LjM4NCAxLjQxNi4yNDMuNDk1LjQzIDEuMDE4LjI5IDEuNzAxLS4wODMuNDY1LS4zMDMuODI2LS41ODQuOTU4LS4yODIuMTMyLS41ODQuMDE2LS44MDEtLjMwNi0uMjItLjMxNC0uMzk3LS43MTItLjYyNS0xLjAxLS43NjgtMS0xLjYxMi0xLjE5Mi0yLjQ5Mi0uNDY1LS45My43NzItMS4zNzUgMi4wNjUtMS4zMDYgMy43NzkuMDY2IDEuNTk3LjU5NyAyLjcwNiAxLjQ3NCAzLjMyLjkxNi42NDggMS45ODEuMTk4IDIuNi0xLjA5OC0uNzc0LS4yOTctMS40NzgtLjgzNy0yLjAwNS0xLjhhMTIuNTkgMTIuNTkgMCAwMS0uOTUzLTIuMzI0Yy0uMTk1LS42MjguMDUzLTEuMzk1LjQyMS0xLjcwNy4zODEtLjMyOC44NS0uMTI4IDEuMDg5LjQ2NS4zMzIuODguNjc2IDEuNzAyIDEuMjYyIDIuMTc0Ljg4NC42OTggMS43OTcuNjIgMi43MDcuMjg0IDEuNzU0LS42MzUgMy4xODgtMi4xOTMgNC40My00LjI1NSAxLjM3My0yLjI3MiAyLjM1OS00LjkxMyAyLjY2Ni04LjEzOC4xOS0xLjk4NS4wMjItMy44NzEtMS4wMy01LjE3NS0uODU0LTEuMDYtMS44NDItMS4xMS0yLjg1Mi0uNzk2LTEuMTg0LjM5Ny0yLjMgMS4yMTktMy4yNzIgMi40MDdhNS4wOSA1LjA5IDAgMDEtLjQzOC40NzljLS40LjQxNC0uOTI0LjIyNy0xLjE4Ni0uNDIyLS4yNjItLjY0OS0uMTY1LTEuNTI0LjIxOC0xLjk3OGExNS4yNjUgMTUuMjY1IDAgMDExLjY3Mi0xLjhjMS40MDMtMS4yMjUgMi44OTUtMS45NjQgNC41MTItMS43MzQgMi4zNzMuMzQ3IDQuMDc5IDMuMzQgNC4xOTEgNy4yOTIuMDk2IDMuMzcxLS42MzMgNi4yOTgtMS43NCA5LjAxNi0uNjYxIDEuNi0xLjQ1NSAzLjAzOC0yLjM1OSA0LjI3MS0uMTE1LjE5OC0uMTguNDYtLjE4Mi43MzUtLjAxMSAzLjIxNS0uMDExIDYuNDMxIDAgOS42NS4wMTQuNjYtLjE0NSAxLjMtLjQzNSAxLjc1NS01LjQxMyA4Ljk1LTEwLjgyMiAxNy45MDMtMTYuMjI4IDI2Ljg2MS0uNTYuOTMtMS4wMDEuOTMtMS41NjIgMC00LjQ4Mi03LjQyMy04Ljk2Mi0xNC44NTUtMTMuNDQtMjIuMjk1LS41NzMtLjk0OS0uNTcyLTEuNjcyLjAwNi0yLjYzMiA1LjM5Ni04Ljk0IDEwLjc5Mi0xNy44ODggMTYuMTg5LTI2Ljg0My4yNy0uNDg2LjY1NC0uNzU1IDEuMDUzLS43MzcgMi43NDcuMDIyIDUuNDk0LjAyMiA4LjI0MiAwIC40LS4wMjIuNzg2LjI0MyAxLjA1OS43MjggMS4zMjggMi4yMzcgMi42NjUgNC40NTIgNC4wMDIgNi42ODIuMjkxLjQ2MS4zNTYgMS4xOTIuMTU3IDEuNzcyLS4xOTkuNTgtLjYxLjg2My0uOTk5LjY4M2ExLjU2IDEuNTYgMCAwMS0uNDg0LS41NDEgNzcyLjEwMyA3NzIuMTAzIDAgMDEtMy42MDItNS45NDhjLS4xNS0uMjc1LS4zNjctLjQyNC0uNTktLjQwNC0yLjQ0NiAwLTQuODkgMC03LjMzNi4wMi0uMTkuMDEtLjM3Mi4xMjktLjUxNS4zMzgtNS4wOSA4LjQxMi0xMC4xNzQgMTYuODMtMTUuMjU0IDI1LjI1NWwtLjE0NC4yNjd6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjU3NCAzMS4yNjVWMzguNjgzYy0uMDA3LjgxNS0uMzkyIDEuNDgyLS44ODEgMS41MjctLjQ5LjA0Ni0uOTE3LS41NDYtLjk3OC0xLjM1NGE1LjIxMiA1LjIxMiAwIDAxLS4wMTItLjQzMnYtOC40MDhjMC0xLjI2OS4zNTctMS44NjUgMS4xMTItMS44NjdoNS4xMzFjLjQyIDAgLjc1NS4yNDcuOTMyLjkxLjE2My41OTYuMTM5IDEuMjIxLS4xNDkgMS42NTItLjIwNy4zMDUtLjQ2OC40OS0uNzQ0LjUyOS0xLjMxMy4wNTItMi42MjYuMDIyLTMuOTQuMDI1aC0uNDcxek0xOS4xMzYgNDMuNzc5di02Ljk0MmE0LjUyNCA0LjUyNCAwIDAxLjEyNS0xLjEzNWMuMTgzLS42MzguNjEtLjk3NSAxLjAyNS0uODA5LjQxNy4xNDYuNzE4Ljc1Mi43MjUgMS40Ni4wMTcuOTI3LjAwOCAxLjg1NC4wMDggMi43ODF2NS44NzRjMCAxLjMwOC0uMzUyIDEuOTAxLTEuMTMxIDEuOTA0aC01LjE0Yy0uMzg0LjAzOS0uNzQzLS4zMTYtLjkwNS0uODk1LS4xNTgtLjUxLS4xMjQtMS4xMjYuMDg3LTEuNTguMjAxLS40NTkuNTMyLS43MS44NzMtLjY2M2gzLjg3M2wuNDYuMDA1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXRhRGF0YTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdPcGVuc2VhTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTguODk1IDE0LjY4MWMtLjA0NS0uMDQ1LS4xMTItLjA0NS0uMTgtLjAyMmwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDAgLjMxLjMxIDAgMDEuMDg5LS4wNjdjLjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NS0uMzU5IDAtLjYyNy4yOTEtLjYyNy42NSAwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0YTUuMTYgNS4xNiAwIDAwLjQ0OC0uOTQxYy4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3LjA0NC0uMDIyLjAyMi0uMDktLjAyMy0uMTEyem0tOS45OTctLjQ5M2gyLjU1NWMuMDQ1IDAgLjA2OC0uMDIzLjA2OC0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDY3bC0xLjI1NS0uNTgzYy0uMDIzLS4wMjItLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA2Ny4wMjIuMTEyLjA2Ny4xMTJ6TTEzIDBDNS44MjggMCAwIDUuODI4IDAgMTNzNS44MjggMTMgMTMgMTMgMTMtNS44MjggMTMtMTNTMjAuMTcyIDAgMTMgMHptLS4wNDUgMjIuNDU5Yy01LjE3NyAwLTkuMzY5LTQuMTkyLTkuMzY5LTkuMzkyIDAtNS4xNzcgNC4xOTItOS4zOTEgOS4zNy05LjM5MSA1LjE3NyAwIDkuMzY4IDQuMjE0IDkuMzY4IDkuMzkxLS4wMjIgNS4yLTQuMjE0IDkuMzkyLTkuMzY5IDkuMzkyem01Ljc2LTcuOGwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDAgLjMxLjMxIDAgMDEuMDg5LS4wNjdjLjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NS0uMzU5IDAtLjYyNy4yOTEtLjYyNy42NSAwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0YTUuMTYgNS4xNiAwIDAwLjQ0OC0uOTQxYy4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3IDAtLjA0NS0uMDIzLS4xMTItLjA2OC0uMTM0IDAgMC0uMDY3LS4wMjMtLjEzNSAwem0tOS44MTctLjQ3MWgyLjU1NWMuMDQ1IDAgLjA2OC0uMDIzLjA2OC0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDY3bC0xLjI1NS0uNTgzYy0uMDIzLS4wMjItLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA2Ny4wMjIuMTEyLjA2Ny4xMTJ6XCJcbiAgICAgICAgZmlsbD1cIiMzMjkxRTlcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTEuNDc2IDExLjI5NmwtMS4yNTUtLjU4MmMtLjAyMy0uMDIzLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNDQuMDIyLjA4OS4wNjcuMDg5aDIuNTU2Yy4wNDQgMCAuMDY3LS4wMjMuMDY3LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNDR6bTcuNDE5IDMuMzg1Yy0uMDQ1LS4wNDUtLjExMi0uMDQ1LS4xOC0uMDIybC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMGMuMDIyLS4wMjIuMDQ0LS4wNDQuMDg5LS4wNjcuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1cy0uNjI3LjI5MS0uNjI3LjY1YzAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjQuMTc5LS4yOTEuMzM2LS42MjcuNDQ4LS45NDEuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1Ny4wNDQtLjAyMi4wMjItLjA5LS4wMjMtLjExMnpcIlxuICAgICAgICBmaWxsPVwiIzMyOTFFOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdPcGVuc2VhTG9nbztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdRckNvZGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0NyA0N1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjcXItY29kZV9zdmdfX2NsaXAwKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNS44NzUgMjQuNTQyaDQuNjY3djQuNjY2SDUuODc1di00LjY2NnptMTguNjY3LTE0aDQuNjY2djkuMzMzaC00LjY2NnYtOS4zMzN6bS00LjY2NyAxNGg5LjMzM3Y5LjMzM2gtNC42NjZ2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTE0IDBoNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aDQuNjY3djQuNjY2aC00LjY2N3Y0LjY2N2g0LjY2N3Y5LjMzM2gtNC42Njd2NC42NjdoLTQuNjY2di00LjY2N2gtOS4zMzR2NC42NjdoLTQuNjY2di05LjMzM2g5LjMzM3YtNC42NjdoNC42Njd2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTkuMzMzIDE4LjY2NnYtOS4zMzNoLTQuNjY2djkuMzMzaDQuNjY2ek0zMy44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgMzMuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwicXItY29kZV9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDQ3djQ3SDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUXJDb2RlO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z1JhcmlibGVMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMC44IDBINS4yQTUuMiA1LjIgMCAwMDAgNS4ydjE1LjZBNS4yIDUuMiAwIDAwNS4yIDI2aDE1LjZhNS4yIDUuMiAwIDAwNS4yLTUuMlY1LjJBNS4yIDUuMiAwIDAwMjAuOCAwelwiXG4gICAgICAgIGZpbGw9XCIjRkVEQTAzXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3Ljk0IDEyLjkwNWMuODItLjIxMyAxLjU0OC0uODI2IDEuNTQ4LTIuMDU3IDAtMi4wNS0xLjc0MS0yLjUyOC0zLjk3Mi0yLjUyOEg2LjYzdjkuMjM0aDMuNzRWMTQuNDJoNC40MzdjLjY4MyAwIDEuMDgzLjI3MSAxLjA4My45NDJ2Mi4xOTJoMy43NHYtMi4zMDhjMC0xLjI1OC0uNzEtMi4wNTEtMS42OS0yLjM0MXptLTMuMDY5LS45NzRIMTAuMzd2LS45MDNoNC41MDFjLjQ5IDAgLjc4Ny4wNjUuNzg3LjQ1MnMtLjI5Ny40NTEtLjc4Ny40NTF6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUmFyaWJsZUxvZ287XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU2F2aW5nc1BpZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuMzExLjA3MWMtMy41ODEuODIxLTUuOTM3IDcuMjEyLTQuNzY0IDEyLjkyNS4xMjcuNTkuMjIyIDEuMTA3LjIyMiAxLjE3OCAwIC4wNzItLjM0OS4zNC0uNzYxLjYyNS0uOTcyLjYyNS0yLjYzIDIuMDg5LTMuMjg2IDIuODkybC0uNTA3LjYyNS0uNTE3LS4zNzVjLS45NzItLjY5Ni0yLjMxNC0uNzg1LTMuMjAyLS4yMTQtLjM4LjI1LTEuMjM2IDEuMjMyLTEuMjM2IDEuNDI4IDAgLjA3Mi40MjMgMS4wOS45NCAyLjI1bC45MyAyLjEwNi0uNDEyIDEuMDg5Yy0uNTQ5IDEuNDI4LTEuMTgzIDMuNjc3LTEuNDI2IDUuMDdsLS4xOSAxLjEwN2gtLjQ4NmMtLjcxOCAwLTEuNDguNDQ2LTEuODggMS4xMDctLjcwOCAxLjE3OC0uNjk4IDEuMDE3LS43MyA3Ljk0NC0uMDIgMy45MS4wMTEgNi41NTIuMDc0IDYuOTYyLjE0OC45MS42OTggMiAxLjIxNSAyLjM5Mi4zNy4yODYuNzA4LjM0IDIuMjcyLjM0aDEuODQ5bC45NSAxLjY3OGMuNTI5LjkxIDEuMzMyIDIuMTI0IDEuNzg2IDIuNjk1bC44MTMgMS4wMTh2Mi45ODFjMCAyLjczMi4wMjEgMy4wMTcuMjQzIDMuNjYuNDEyIDEuMjMyLjcwOCAxLjM3NSAyLjczNyAxLjMyMSAxLjU5NS0uMDUzIDEuNzg1LS4wOSAyLjA2LS40MjguNDMzLS41NTQuNjc2LTEuMzU3Ljc0LTIuNWwuMDYzLTEgLjMyNy4wOWMxLjQwNS40MSAzLjE5LjUzNSA0LjQ5LjMzOS43Ni0uMTI1IDEuNDQ4LS4yNjggMS41MzItLjMyMS4xMDYtLjA3Mi4xNTguMTc4LjE5IDEuMDcuMDQyIDEuMjUuMjIyIDEuODIyLjc2IDIuNS4yNjUuMzQuNDM0LjM3NSAyLjEwMy4zNzUgMS43MzMgMCAxLjgzOC0uMDE4IDIuMTY2LS40MS42MTMtLjc1LjY5Ny0xLjIzMi43Ni00LjQ0NmwuMDUzLTIuODkyLjc5My0uOTI4YzEuNzUzLTIuMDg5IDMuNTI4LTUuNTE3IDQuNDQ3LTguNjA1IDEuMTczLTMuODkyIDEuNjM4LTguODAxIDEuMjE1LTEyLjc2NGwtLjEzNy0xLjMwMy41MDctLjQyOWMuNTctLjUgMS4yMjYtLjcxNCAxLjYyNy0uNTUzLjQwMi4xNzguMzE3LjM3NS0uMTguMzkyLTEuMTkzLjA1NC0xLjI1NyAyLjcxNC0uMDczIDMuMzAzLjM3LjE5Ny40NTQuMTc5LjcwNy0uMTI1LjE1OS0uMTk2LjM2LS42MDcuNDQ0LS45MjguMTktLjY3OC4yLS42NzguNzYtLjE5Ny4zODEuMzIyLjQ0NC4zNC41ODIuMTA4LjI0My0uNDExLjA3NC0uOTQ3LS40NDQtMS4zNTctLjI2NC0uMjE0LS41MTctLjM3NS0uNTgtLjM3NS0uMDU0IDAtLjEwNy0uMDktLjEwNy0uMTk2IDAtLjUtLjM4LTEuNDQ3LS42NjUtMS43MTQtLjQ0NC0uMzc1LTEuMzc0LS4yMTUtMi4xNDUuMzc1LS4zMjcuMjUtLjYxMi40NjQtLjYyMy40NjQtLjAyMSAwLS4wNzQtLjI2OC0uMTE2LS41OS0uMTQ4LTEuMTQyLS44OTgtMy43ODQtMS41NjQtNS40OC0xLjY3LTQuMjMtNC4yNDctNy42NzYtNy4xNDItOS41NjktLjU0OS0uMzU3LTEuMDE0LS42Ni0xLjAzNS0uNjc4LS4wMS0uMDM2LjA3NC0uNTE4LjE5LTEuMTA3IDEuMDM2LTUuMDM0LS42NTUtMTAuNzY1LTMuNjY2LTEyLjQ3OS0uODM0LS40NjQtMS44NDktLjYyNC0yLjY3My0uNDQ2em0xLjc5NiAyLjYwN2MxLjMzMi41IDIuNDEgMi4wMzUgMy4wMzMgNC4yODQuMjY0Ljk0Ni4yOTUgMS4yNS4yOTUgMi45MjggMCAxLjc1LS4wMiAxLjk0Ni0uMzQ4IDMuMDctMS42NDggNS43MTMtNi4zODEgNS43MTMtNy45NzcgMC0uMzE3LTEuMTA2LS4zMzgtMS4zMzktLjMzOC0zLjA3IDAtMS42NzguMDMyLTEuOTgyLjI5Ni0yLjkyOC42MDItMi4xNzggMS42MjctMy42NzcgMi45MDUtNC4yMy44ODgtLjM5NCAxLjIyNi0uNDEyIDIuMTM0LS4wNTR6bS00LjM1MiAxNS4zN2MuMDIgMC0uMzQ5LjIzMi0uODE0LjQ4Mi0xLjg3IDEuMDE4LTIuNDkzIDEuODIxLTIuMjE4IDIuODU3LjA2My4yMzIuMjUzLjUzNS40MDEuNjQyLjI0My4xNjEuNDEyLjEwNyAxLjE4My0uNDY0IDIuNzc5LTIuMDE3IDYuMTctMi4yMzEgOC45Ni0uNTcxLjQ5Ni4zMDMgMS4xNC43MzIgMS40MTUuOTgyLjYyMy41MTcuOTgyLjQ4MiAxLjI2OC0uMTQzLjQ4Ni0xLjEwNy0uMjMzLTIuMDg5LTIuMzI1LTMuMjMxLS42MDItLjMyMi0xLjA3Ny0uNjI1LTEuMDc3LS42NzkuMDEtLjA1My4yNDMtLjQ0Ni41MjgtLjg3NGwuNTE4LS43ODYgMS4wNTYuNjQzYzQuMDQ3IDIuNDEgNy4yNTggNy45OTggOC4zMDQgMTQuNDYuNTI4IDMuMjMxLjQ2NSA3LjIzLS4xNjkgMTAuNDk3LS44NDUgNC4zMzgtMi42MiA4LjE1OS01LjAyOSAxMC44NTRsLTEuMTMgMS4yNjgtLjAxIDMuMjQ5LS4wMTEgMy4yNjctMS4zOTUuMDUzLTEuNDA1LjA1NHYtMi4zMzljMC0xLjI2Ny0uMDMyLTIuMzItLjA3NC0yLjMyLS4wNTMgMC0uMzQ5LjEyNC0uNjY2LjI2Ny0uODg3LjQxLTIuODUyLjgwMy0zLjk0LjgwMy0xLjEzIDAtMi43MzYtLjM3NC0zLjkyLS44OTJhMjguOTMgMjguOTMgMCAwMC0uODY2LS4zNTdjLS4wMjEgMC0uMDUzIDEuMDE3LS4wNjMgMi4yNjdsLS4wMzIgMi4yODUtMS40MDUuMDU0LTEuNDA1LjA1My4wMjEtMy40MS4wMS0zLjQxLS44NTUtLjk4MWMtMS4wMzYtMS4yMTQtMi4xMjQtMi44OTItMi44NzQtNC40NDVsLS41NS0xLjE2SDQuMDY0Yy0yLjAxNyAwLTIuMTIzLS4wMTktMi4zNTYtLjM5M2wtLjI0My0uMzc1VjQwLjIyYzAtNy4zOTEtLjEzNy02LjgyIDEuNTk2LTYuOTQ1bDEuMTgzLS4wOS4yNDMtMS41N2MuNDMzLTIuNzMyIDEuMTEtNC45OTkgMi4zMTQtNy43My4xNDctLjM0LjExNi0uNDY0LS42MjQtMi4xNDItLjQ1NC0xLS43NS0xLjg0LS42OTctMS45MjguMTgtLjMwNCAxLjI3OC4xMDcgMi4wNi43NjdsLjc5Mi42Ni43OTMtLjk5OWMuOTcyLTEuMjE0IDIuNDQtMi41NTMgMy42NDUtMy4zMmwuODk4LS41OS41MjguODRjLjI4NS40NjQuNTM5Ljg1Ni41Ni44NzR6bTIxLjA4NyAxNC4yNjRjLjEyNy4wOS4xMzcuMTc5LjA0Mi41MzYtLjEyNy40NDYtLjE4LjUtLjQ0NC4zMjEtLjE2OS0uMTA3LS4yMzItLjYyNS0uMDk1LS44MzkuMDg1LS4xNi4yNzUtLjE2LjQ5Ny0uMDE4elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTguNTc1IDMwLjAxYy0uMTM4LjA1My0uMzguMzItLjU2LjYwNi0uMzYuNjI1LS40MzQgMS42MDctLjE3IDIuNDY0LjI4Ni45MjggMS4yMDUgMS4yMTQgMS43NjUuNTM1IDEuMDM1LTEuMjUuMjQzLTMuOTk5LTEuMDM1LTMuNjA2elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NhdmluZ3NQaWc7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU21hcnRDb250cmFjdMSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyMyAxLjM2OEMxLjg2NCAyLjA4OC4zMzMgNS4wMjUuMDcgNy4xM2MtLjMzNiAyLjM4Mi41NjEgNC45ODYgMi4wNTYgNi4xNS43MS41NTMgMi4xMy44MyA0LjExLjgzaDIuOTl2Mi40OTNjMCAxLjM4NS4xODcgMi40OTMuMzc0IDIuNDkzLjQ4NSAwIC40ODUtMTEuNjM0IDAtMTMuNTE3LS4xODctLjc3Ni0uNjczLTEuODg0LTEuMTIxLTIuNTQ5TDcuNzMgMS45MjJoMTMuMTE3YzExLjY5NiAwIDEzLjIyOC4xMTEgMTQuMi45NDIgMi4wMTggMS43NzMgMi4yMDUgMy4yMTMgMi4yMDUgMTcuMjg1IDAgOC4xNDQuMTUgMTIuNzk3LjM3MyAxMi43OTcuMjI0IDAgLjM3NC00LjU5OC4zNzQtMTIuNzQyIDAtMTMuODUtLjE1LTE1LjEyNC0yLjA1NS0xNy43MjhsLTEuMDEtMS4zODVMMTkuMzkuOTgxYy04LjU1Ny0uMDU2LTE1LjkxOS4xMS0xNi4zNjcuMzg3em0zLjk2IDEuMzg1YzEuNDk2IDEuMTY0IDIuMjQzIDMuNDkgMi4yNDMgNy4yMDJ2My4wNDdINy41NDRjLTEuNjQ0IDAtMS42NDQgMC0xLjMwOC0xLjQ0LjIyNS0uNzc2LjI2Mi0xLjk5NC4xNS0yLjc3LS4yMjQtMS4zODUtMi4yNDItMy4zOC0yLjY5LTIuNjYtLjE1LjIyMi0uMDM4LjUuMjYuNjY2Ljc4Ni4zODcgMS45MDcgMi4yMTYgMS45MDcgMy4xNTcgMCAuNDQ0LS4zMzcgMS4zMy0uNzg1IDEuOTk1LS45NzIgMS40NC0yLjM5MiAxLjA1Mi0zLjU4Ny0uOTQyQy40OCA5LjQuNDA3IDguMDE2IDEuMTkgNS41NzggMi4yMzkgMi4yNTYgNC43OCAxLjAzNyA2Ljk4NSAyLjc1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy40NDcgMTEuODk0YzAgLjMzMyAyLjI0Mi41NTQgNS45NDIuNTU0IDMuNTg3IDAgNi4wNTQtLjIyMSA2LjIwMy0uNTU0LjE1LS4zODctMS45NDMtLjU1NC01Ljk0Mi0uNTU0LTMuODg2IDAtNi4yMDMuMjIyLTYuMjAzLjU1NHpNMTIuOTYzIDE2Ljg4YzAgLjMzMyAxLjMwOC41NTQgMy4xNzYuNTU0IDEuODY5IDAgMy4xNzctLjIyMSAzLjE3Ny0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc3LS41NTQtMS44NjggMC0zLjE3Ni4yMjItMy4xNzYuNTU0ek0yMC44MSAxNi44OGMwIC4zMzMgMS4xMjEuNTU0IDIuNjE2LjU1NHMyLjYxNi0uMjIxIDIuNjE2LS41NTRjMC0uMzMyLTEuMTIxLS41NTQtMi42MTYtLjU1NHMtMi42MTYuMjIyLTIuNjE2LjU1NHpNMzEuMjc0IDE2Ljg4YzAgLjI3Ny42NzIuNTU0IDEuNDk0LjU1NHMxLjQ5NC0uMjc3IDEuNDk0LS41NTRjMC0uMzMyLS42NzItLjU1NC0xLjQ5NC0uNTU0cy0xLjQ5NC4yMjItMS40OTQuNTU0ek05LjUyNSAyMS42NDVjLS4xODcuMjIxLS4zIDcuNDIzLS4zIDE2LjAxIDAgMTQuMzQ5LjAzOCAxNS42NzguNjczIDE2LjUxLjU2MS43NzUgMS44NjkuOTQxIDguMTQ3IDEuMDUybDcuNDM2LjE2Ni4xMTIgNC4yNjZjLjA3NSAyLjM4Mi4yMjUgNC4zMjEuMzM3IDQuMzIxLjE1IDAgLjc0Ny0uNjY1IDEuMzA4LTEuNDk2bDEuMDQ2LTEuNDk2IDEuMDQ2IDEuNDk2Yy41Ni44MzEgMS4xNTkgMS40OTYgMS4zMDggMS40OTYuMTUgMCAuMjYyLTEuOTk0LjI2Mi00LjQzMnYtNC40MzJoMi45NTJjNC4xMSAwIDQuMTQ4LS4wNTUgNC4xNDgtMTAuOTE0IDAtNC45ODYtLjE1LTguNTMxLS4zNzQtOC43NTMtLjIyNC0uMjIxLS4zNzMgMS4yNzQtLjM3MyA0LjF2NC40ODdIMzUuNTdjLS45MzQgMC0xLjY4Mi4yMjItMS42ODIuNTU0IDAgLjI3Ny43NDguNTU0IDEuNjgyLjU1NGgxLjY4MnYzLjU0NmMwIDUuMzE4IDAgNS4zMTgtMy40MDEgNS4zMThIMzAuOXYtMi4xNmMwLTEuNjA3LjIyNC0yLjQzOC43NDctMi45OTIuNjczLS43Mi43ODUtMS4yNzQuNjczLTQuNTk4bC0uMTEyLTMuNzEyLTIuMDU1LTEuNjYyLTIuMDU2LTEuNjYyLTEuODY4IDEuNjYyLTEuODY5IDEuNjA2LS4xMTIgMy43NjhjLS4xMTIgMy4zMjQgMCAzLjg3OC42NzMgNC41OTguNTIzLjU1NC43NDcgMS4zODUuNzQ3IDIuOTkydjIuMTZoLTcuNjIzYy04LjcwNyAwLTguMDcyLjM4OC04LjA3Mi01LjMxOHYtMy41NDZoNi4zNTNjMy45OTggMCA2LjM1My0uMjIxIDYuMzUzLS41NTQgMC0uMzMyLTIuMzU1LS41NTQtNi4zNTMtLjU1NEg5Ljk3M2wtLjA3NS0xMS40MTJjLS4wNzQtNi4yNi0uMjI0LTExLjE5MS0uMzczLTEwLjk3em0yMC40NzggMTguMjgxYzEuNjQ0IDEuNDQgMS42NDQgMS40NCAxLjY0NCA0LjU0M3YzLjE1OGwtMS43MTkgMS4zMy0xLjcxOSAxLjM4NS0xLjY0NC0xLjMzLTEuNjQ0LTEuMzg1VjQ0LjQ3YzAtMy4xMDIgMC0zLjE1NyAxLjYwNy00LjU0My44Ni0uNzc1IDEuNjA3LTEuNDQgMS42ODEtMS40NC4wNzUgMCAuODYuNjY1IDEuNzk0IDEuNDR6bS0uODIyIDExLjAyNWwuOTcxLS45NDJWNjEuOTJsLS45MzQtMS4yNzQtLjkzNC0xLjI3NC0uOTM0IDEuMjc0LS45MzQgMS4yNzR2LTExLjhsLjg5Ni44MzFjLjg2LjgzMSAxLjAxLjgzMSAxLjg2OSAwelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjkxIDQxLjgxYzAgLjI3Ny4zMzcuNzc2Ljc0NyAxLjEwOC40NDkuMzMzLjc0OCAxLjE2My43NDggMS45NCAwIC43NzUuMTg2IDEuMzg0LjM3MyAxLjM4NC43NDcgMCAuMzc0LTMuMjY4LS40NDgtNC4xLS45NzEtLjk5Ny0xLjQyLTEuMTA4LTEuNDItLjMzMnpNMTQuMDg0IDIxLjg2NmMwIC4yNzcuNjcyLjU1NCAxLjUzMi41NTQuODk2IDAgMS40Mi0uMjIxIDEuMjctLjU1NC0uMTEyLS4zMzItLjgyMi0uNTU0LTEuNTMyLS41NTQtLjcxIDAtMS4yNy4yMjItMS4yNy41NTR6TTE4Ljc1NSAyMS44NjZjLS4xNS4zODggMi41MDQuNTU0IDcuNjIzLjU1NCA1LjAwOCAwIDcuODg1LS4yMjEgNy44ODUtLjU1NCAwLS4zMzItMi44MDMtLjU1NC03LjYyMy0uNTU0LTQuNzA5IDAtNy43MzYuMjIyLTcuODg1LjU1NHpNMTIuNzc2IDI3LjQwNmMuMTUuMzMzIDIuODAzLjU1NCA2LjcyNi41NTQgMy45MjQgMCA2LjU3Ny0uMjIxIDYuNzI3LS41NTQuMTUtLjM4OC0yLjE2OC0uNTU0LTYuNzI3LS41NTRzLTYuODc1LjE2Ni02LjcyNi41NTR6TTI3LjkxIDI3LjQwNmMwIC4zMzMgMS4zMDguNTU0IDMuMTc3LjU1NCAxLjg2OCAwIDMuMTc2LS4yMjEgMy4xNzYtLjU1NCAwLS4zMzItMS4zMDgtLjU1NC0zLjE3Ni0uNTU0LTEuODY5IDAtMy4xNzcuMjIyLTMuMTc3LjU1NHpNMTIuOTYzIDMyLjM5MmMwIC4zMzMgMy4yNS41NTQgOC45NjguNTU0czguOTY5LS4yMjEgOC45NjktLjU1NGMwLS4zMzItMy4yNTEtLjU1NC04Ljk2OS0uNTU0LTUuNzE3IDAtOC45NjguMjIyLTguOTY4LjU1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTbWFydENvbnRyYWN0xLBjb247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuMTQgNy4yNWMtLjkzMS40MjMtMS45MzQuNy0yLjk3My44MzRhNS4xOTQgNS4xOTQgMCAwMDIuMjcxLTIuODc2IDEwLjQ0IDEwLjQ0IDAgMDEtMy4yODYgMS4yNjljLS45NTUtMS4wNC0yLjI5Ni0xLjY0NC0zLjgxOS0xLjY0NC0yLjg0IDAtNS4xNiAyLjMyLTUuMTYgNS4xODQgMCAuNDExLjA1LjgxLjEzNCAxLjE4NEExNC43MzUgMTQuNzM1IDAgMDEzLjYyNSA1Ljc4OGE1LjEyOCA1LjEyOCAwIDAwLS43IDIuNTk4YzAgMS44LjkwNSAzLjM5NSAyLjMwNyA0LjMwMi0uODU4IDAtMS42NTUtLjI0Mi0yLjM1Ni0uNjA1di4wMzdhNS4xODggNS4xODggMCAwMDQuMTU3IDUuMDg3IDUuMSA1LjEgMCAwMS0yLjMzMy4wODQgNS4xNzIgNS4xNzIgMCAwMDQuODM0IDMuNjAxIDEwLjI5NiAxMC4yOTYgMCAwMS02LjQ0IDIuMjI0Yy0uNDExIDAtLjgyMi0uMDI1LTEuMjMzLS4wNzNhMTQuNjc1IDE0LjY3NSAwIDAwNy45NSAyLjMzMmM5LjUyMiAwIDE0Ljc1NC03LjkwMiAxNC43NTQtMTQuNzU0IDAtLjIzIDAtLjQ0Ny0uMDEyLS42NzZBMTAuMzU5IDEwLjM1OSAwIDAwMjcuMTQgNy4yNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnWW91dHViZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIuMDgzIDE4LjEyNWw2LjI3Mi0zLjYyNS02LjI3Mi0zLjYyNXY3LjI1em0xMy45NjktOS40NjFjLjE1Ny41NjguMjY1IDEuMzI5LjMzOCAyLjI5Ni4wODQuOTY2LjEyIDEuOC4xMiAyLjUyNWwuMDczIDEuMDE1YzAgMi42NDYtLjE5MyA0LjU5Mi0uNTMxIDUuODM2LS4zMDIgMS4wODgtMS4wMDMgMS43ODktMi4wOSAyLjA5LS41NjkuMTU4LTEuNjA4LjI2Ny0zLjIwMy4zMzktMS41Ny4wODQtMy4wMDkuMTItNC4zMzguMTJsLTEuOTIxLjA3M2MtNS4wNjMgMC04LjIxNy0uMTkzLTkuNDYxLS41MzEtMS4wODgtLjMwMi0xLjc4OS0xLjAwMy0yLjA5LTIuMDktLjE1OC0uNTY5LS4yNjctMS4zMy0uMzM5LTIuMjk3LS4wODUtLjk2Ni0uMTItMS44LS4xMi0yLjUyNUwyLjQxNiAxNC41YzAtMi42NDYuMTkzLTQuNTkyLjUzMS01LjgzNi4zMDItMS4wODggMS4wMDMtMS43ODkgMi4wOS0yLjA5LjU2OS0uMTU4IDEuNjA4LS4yNjcgMy4yMDMtLjMzOSAxLjU3LS4wODUgMy4wMDgtLjEyIDQuMzM4LS4xMmwxLjkyMS0uMDczYzUuMDYzIDAgOC4yMTcuMTkzIDkuNDYxLjUzMSAxLjA4OC4zMDIgMS43ODkgMS4wMDMgMi4wOSAyLjA5elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgxLBuc3RhZ3JhbSB9IGZyb20gJy4vxLBuc3RhZ3JhbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2RuIH0gZnJvbSAnLi9MaW5rZG4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWwgfSBmcm9tICcuL01haWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lZGlhIH0gZnJvbSAnLi9NZWRpYSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YURhdGEgfSBmcm9tICcuL01ldGFEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuc2VhTG9nbyB9IGZyb20gJy4vT3BlbnNlYUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFyQ29kZSB9IGZyb20gJy4vUXJDb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSYXJpYmxlTG9nbyB9IGZyb20gJy4vUmFyaWJsZUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhdmluZ3NQaWcgfSBmcm9tICcuL1NhdmluZ3NQaWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNtYXJ0Q29udHJhY3TEsGNvbiB9IGZyb20gJy4vU21hcnRDb250cmFjdMSwY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmfEsG5zdGFncmFtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05LjQyNSAyLjQxN2gxMC4xNWE3LjAxMyA3LjAxMyAwIDAxNy4wMDggNy4wMDh2MTAuMTVhNy4wMDggNy4wMDggMCAwMS03LjAwOCA3LjAwOEg5LjQyNWE3LjAxMyA3LjAxMyAwIDAxLTcuMDA4LTcuMDA4VjkuNDI1YTcuMDA4IDcuMDA4IDAgMDE3LjAwOC03LjAwOHptLS4yNDIgMi40MTZhNC4zNSA0LjM1IDAgMDAtNC4zNSA0LjM1djEwLjYzNGE0LjM0NyA0LjM0NyAwIDAwNC4zNSA0LjM1aDEwLjYzNGE0LjM1IDQuMzUgMCAwMDQuMzUtNC4zNVY5LjE4M2E0LjM0NyA0LjM0NyAwIDAwLTQuMzUtNC4zNUg5LjE4M3ptMTEuNjYgMS44MTNhMS41MSAxLjUxIDAgMTEwIDMuMDIgMS41MSAxLjUxIDAgMDEwLTMuMDJ6TTE0LjUgOC40NThhNi4wNDIgNi4wNDIgMCAxMTAgMTIuMDg0IDYuMDQyIDYuMDQyIDAgMDEwLTEyLjA4NHptMCAyLjQxN2EzLjYyNSAzLjYyNSAwIDEwMCA3LjI1IDMuNjI1IDMuNjI1IDAgMDAwLTcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsG5zdGFncmFtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi9jb25zdGFudCdcclxuaW1wb3J0IE1hcmtTaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvY29sLW1hcmtTaWRlJ1xyXG5pbXBvcnQgTWFpblNpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2wtbWFpblNpZGUnXHJcbmltcG9ydCBMb2dpblNpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2wtbG9naW5TaWRlJ1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi9Ib29rL3VzZVdpbmRvd3NTaXplJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5sYXlvdXQpfT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPE1haW5TaWRlPlxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cclxuICAgICAgICAgIDwvTWFpblNpZGU+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLWJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CdXR0b24gKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuICg8QnV0dG9uID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi9uYXZpZ2F0aW9uLWJ1dHRvbidcclxuaW1wb3J0IHRleHRUaXRsZSBmcm9tICcuL3RleHQtdGl0bGUnXHJcbmltcG9ydCBoZWFkVGl0bGUgZnJvbSAnLi9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gXCIuL2ljb25zXCI7XHJcbmltcG9ydCBGcmFtZUJ1dHRvbiBmcm9tIFwiLi9mcmFtZS1idXR0b25cIjtcclxuXHJcbmNvbnN0IE1FTlUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbWFrZS1hbi1uZnQnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFrZSBhbiBORlQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2J1c2luZXNzLXNpZ251cCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdCdXNpbmVzcyBTaWdudXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ1N1YnNjcmliZS1mb3ItdXBjb21pbmctZHJvcHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnU3Vic2NyaWJlIGZvciBVcGNvbWluZyBEcm9wcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbmZ0LXN0YW5kYXJkcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdORlQgU3RhbmRhcmRzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdkb3dubG9hZC1uZnQtY3JlYXRvcicsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdEb3dubG9hZCBORlQgQ3JlYXRvcidcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1hcmspfT5cclxuICAgICAgICAgICAgPGhlYWRUaXRsZT5Pd25hYmxlLU5TPC9oZWFkVGl0bGU+IFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJ0bn0+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50ID0gbWVudS5pY29uLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRUaXRsZT4ge21lbnUudGl0bGV9IDwvdGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlxyXG4gICAgICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXh0VGl0bGUoeyBib2xkPWZhbHNlLCBjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuIDxoMiBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGQsIGNsYXNzTmFtZV0pfT57Y2hpbGRyZW59PC9oMj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRUaXRsZSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9idXR0b24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vYnV0dG9uLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2J1dHRvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9mcmFtZS1idXR0b24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vZnJhbWUtYnV0dG9uLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2ZyYW1lLWJ1dHRvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9oZWFkLXRpdGxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2hlYWQtdGl0bGUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vaGVhZC10aXRsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL25hdmlnYXRpb24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi90ZXh0LXRpdGxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3RleHQtdGl0bGUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vdGV4dC10aXRsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbnRhaW5lciBmcm9tIGJ1dHRvbiAqL1xcclxcbiAgICAvKiBCdXR0b24gRWxlbWVudHMgKi9cXHJcXG4gICAgLmJ1dHRvbl9iYXNlQnRuX18xbTdyRntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgYm9yZGVyOm5vbmU7ICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBXaGlsZSBob3ZlcmluZyBvbiBidXR0b25zIG9mIG5hdmlnYXRpb24sIHRleHQgd2lsbCBoYXZlIGJlZW4geWVsbG93LiAqL1xcclxcbiAgICAuYnV0dG9uX2Jhc2VCdG5fXzFtN3JGOmhvdmVye1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogSWYgQnV0dG9uIGhhcyBib3JkZXIsIFRoaXMgY29kZSBzbmlwcGV0IHdpbGwgaGF2ZSBiZWVuIGFjdGl2YXRlZCovXFxyXFxuICAgIC5idXR0b25fRnJhbWVCb3JkZXJfXzFnZFRCe1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHZhciggLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIHdpZHRoOiA5Mi45NHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1My44MXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC8qIHdoaWxlIGhvdmVyaW5nIG9uIGJ1dHRvbiwgQnV0dG9uIGJhY2tncm91bmQgd2lsbCBoYXZlIGJlZW4gYmxhY2ssIGV2ZW4gdGV4dCB3aWxsIGhhdmUgYmVlbiB5ZWxsb3cgKi9cXHJcXG4gICAgLmJ1dHRvbl9GcmFtZUJvcmRlcl9fMWdkVEI6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9idXR0b24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEI7SUFDdEIsb0JBQW9CO0lBQ3BCO1FBQ0ksZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDckIsV0FBVztJQUNmOztJQUVBLHlFQUF5RTtJQUN6RTtRQUNJO0lBQ0o7O0lBRUEsb0VBQW9FO0lBQ3BFO1FBQ0ksaUJBQWlCO1FBQ2pCLHNDQUFzQztRQUN0QyxjQUFjO1FBQ2QsZUFBZTtnQkFDUDs7SUFFWixzR0FBc0c7SUFDdEc7UUFDSSxxQ0FBcUM7d0JBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvbnRhaW5lciBmcm9tIGJ1dHRvbiAqL1xcclxcbiAgICAvKiBCdXR0b24gRWxlbWVudHMgKi9cXHJcXG4gICAgLmJhc2VCdG57XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGJvcmRlcjpub25lOyAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogV2hpbGUgaG92ZXJpbmcgb24gYnV0dG9ucyBvZiBuYXZpZ2F0aW9uLCB0ZXh0IHdpbGwgaGF2ZSBiZWVuIHllbGxvdy4gKi9cXHJcXG4gICAgLmJhc2VCdG46aG92ZXJ7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZClcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBJZiBCdXR0b24gaGFzIGJvcmRlciwgVGhpcyBjb2RlIHNuaXBwZXQgd2lsbCBoYXZlIGJlZW4gYWN0aXZhdGVkKi9cXHJcXG4gICAgLkZyYW1lQm9yZGVye1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHZhciggLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIHdpZHRoOiA5Mi45NHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1My44MXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC8qIHdoaWxlIGhvdmVyaW5nIG9uIGJ1dHRvbiwgQnV0dG9uIGJhY2tncm91bmQgd2lsbCBoYXZlIGJlZW4gYmxhY2ssIGV2ZW4gdGV4dCB3aWxsIGhhdmUgYmVlbiB5ZWxsb3cgKi9cXHJcXG4gICAgLkZyYW1lQm9yZGVyOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1mcmFtZS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmFzZUJ0blwiOiBcImJ1dHRvbl9iYXNlQnRuX18xbTdyRlwiLFxuXHRcIkZyYW1lQm9yZGVyXCI6IFwiYnV0dG9uX0ZyYW1lQm9yZGVyX18xZ2RUQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkLXRpdGxlX1RpdGxlX18xaDdBSyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtdGl0bGVfYm9sZF9fMXpXaGIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvaGVhZC10aXRsZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRpdGxlXCI6IFwiaGVhZC10aXRsZV9UaXRsZV9fMWg3QUtcIixcblx0XCJib2xkXCI6IFwiaGVhZC10aXRsZV9ib2xkX18xeldoYlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5hdmlnYXRvciAqL1xcclxcbi5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMThDSmEge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICM5RTlFOUU7XFxyXFxuICAgICAgICB3aWR0aDogMTkwM3B4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MXB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogOTVweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xcclxcbiAgICAgICAgZGlzcGxheTogdGFibGU7XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMThDSmEgZGl2ICsgZGl2IHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDoxNnB4OyBcXHJcXG4gICAgfVxcclxcbi8qIE5hdmlnYXRvciBCdXR0b24gKi9cXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzE4Q0phIC5uYXZpZ2F0aW9uX25hdkJ0bl9fMlo1Q0d7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDk4MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4vKiBNYXJrICovXFxyXFxuLm5hdmlnYXRpb25fbmF2aWdhdG9yX18xOENKYSAubmF2aWdhdGlvbl9tYXJrX18yUGVWcHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIC8qIC5uYXZCdG4gYW5kIC5tYXJrIGhhcyB0aGUgc2FtZSBkaXNwbGF5LCBiZWNhdXNlIGJvdGggb2YgdGhlbSBpcyBpbiBkaWZmZXJlbnQgZGl2LCBhbmQgdGhvc2UgdHdvIGRpdiBtdXN0IGJlIHNhbWUgcm93LiovXFxyXFxuICAgIH1cXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzE4Q0phIC5uYXZpZ2F0aW9uX21hcmtfXzJQZVZwIC5uYXZpZ2F0aW9uX21hcmtfXzJQZVZwIHN2Z3tcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgICAgIH1cXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzE4Q0phIC5uYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yRkJJaXtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO1FBQ1EsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsY0FBYztBQTBCdEI7QUF4Qkk7UUFDSSxpQkFBaUI7SUFDckI7QUFFQSxxQkFBcUI7QUFDckI7UUFDSSxtQkFBbUI7UUFDbkI7WUFDSTtBQUVSLFNBQVM7QUFDVDtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFNdkIseUhBQXlIO0lBQ3pIO0FBTEk7WUFDSSxlQUFlO1lBQ2YsbUJBQW1CO1FBQ3ZCO0FBR0o7UUFDSSxtQkFBbUI7SUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2aWdhdG9yICovXFxyXFxuLm5hdmlnYXRvciB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzlFOUU5RTtcXHJcXG4gICAgICAgIHdpZHRoOiAxOTAzcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDcxcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiA5NXB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIycHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG5cXHJcXG4gICAgZGl2ICsgZGl2IHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDoxNnB4OyBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBOYXZpZ2F0b3IgQnV0dG9uICovXFxyXFxuICAgIC5uYXZCdG57XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDk4MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLyogTWFyayAqL1xcclxcbiAgICAubWFya3tcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIC5tYXJrIHN2Z3tcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgLyogLm5hdkJ0biBhbmQgLm1hcmsgaGFzIHRoZSBzYW1lIGRpc3BsYXksIGJlY2F1c2UgYm90aCBvZiB0aGVtIGlzIGluIGRpZmZlcmVudCBkaXYsIGFuZCB0aG9zZSB0d28gZGl2IG11c3QgYmUgc2FtZSByb3cuKi9cXHJcXG4gICAgfVxcclxcbiAgICAubG9naW5CdXR0b257XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18xOENKYVwiLFxuXHRcIm5hdkJ0blwiOiBcIm5hdmlnYXRpb25fbmF2QnRuX18yWjVDR1wiLFxuXHRcIm1hcmtcIjogXCJuYXZpZ2F0aW9uX21hcmtfXzJQZVZwXCIsXG5cdFwibG9naW5CdXR0b25cIjogXCJuYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yRkJJaVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0LXRpdGxlX1RpdGxlX18zVGg1NyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtdGl0bGVfYm9sZF9fMllIQk0ge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvdGV4dC10aXRsZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRpdGxlXCI6IFwidGV4dC10aXRsZV9UaXRsZV9fM1RoNTdcIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX18yWUhCTVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjbiIsImJ1dHRvbiIsImJvcmRlciIsImNoaWxkcmVuIiwicHJvcHMiLCJiYXNlQnRuIiwiRnJhbWVCb3JkZXIiLCJCdXR0b24iLCJGcmFtZUJ1dHRvbiIsImZyYW1lQnRuIiwiSGVhZFRpdGxlIiwiYm9sZCIsIlRpdGxlIiwiU3ZnRGlzY29yZCIsIlN2Z0Ryb3BEb3duIiwiU3ZnRHJvcERvd27EsGNvbiIsIlN2Z0V0aExvZ28iLCJTdmdGYWNlYm9vayIsIlN2Z0ZpbmdlcnByaW50IiwiU3ZnTGlua2RuIiwiU3ZnTWFpbCIsIlN2Z01lZGlhIiwiU3ZnTWV0YURhdGEiLCJTdmdPcGVuc2VhTG9nbyIsIlN2Z1FyQ29kZSIsIlN2Z1JhcmlibGVMb2dvIiwiU3ZnU2F2aW5nc1BpZyIsIlN2Z1NtYXJ0Q29udHJhY3TEsGNvbiIsIlN2Z1R3aXR0ZXIiLCJTdmdZb3V0dWJlIiwiZGVmYXVsdCIsIkRpc2NvcmQiLCJEcm9wRG93bsSwY29uIiwiRHJvcERvd24iLCJFdGhMb2dvIiwiRmFjZWJvb2siLCJGaW5nZXJwcmludCIsIsSwbnN0YWdyYW0iLCJMaW5rZG4iLCJNYWlsIiwiTWVkaWEiLCJNZXRhRGF0YSIsIk9wZW5zZWFMb2dvIiwiUXJDb2RlIiwiUmFyaWJsZUxvZ28iLCJTYXZpbmdzUGlnIiwiU21hcnRDb250cmFjdMSwY29uIiwiVHdpdHRlciIsIllvdXR1YmUiLCJTdmfEsG5zdGFncmFtIiwiQ09OU1QiLCJNYXJrU2lkZSIsIk1haW5TaWRlIiwiTG9naW5TaWRlIiwidXNlV2luZG93U2l6ZSIsIk5hdmlnYXRpb24iLCJMYXlvdXQiLCJzaXplIiwibGF5b3V0IiwiTmF2aWdhdGlvbkJ1dHRvbiIsInRleHRUaXRsZSIsImhlYWRUaXRsZSIsIk1FTlUiLCJrZXkiLCJpY29uIiwidGl0bGUiLCJuYXZpZ2F0b3IiLCJtYXJrIiwibmF2QnRuIiwibWFwIiwibWVudSIsInNob3dFbGVtZW50IiwibGVuZ3RoIiwibG9naW5CdXR0b24iLCJUZXh0VGl0bGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9