self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ "./components/button/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["border", "children", "className"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\index.js";





function frameButton(_ref) {
  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      children = _ref.children,
      className = _ref.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

function linkButton(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
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
  var _ref3$border = _ref3.border,
      border = _ref3$border === void 0 ? false : _ref3$border,
      children = _ref3.children,
      className = _ref3.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, _excluded3);

  var Comp = border ? frameButton : linkButton;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Comp, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (button);
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

/***/ "./components/frame/frameButton.js":
/*!*****************************************!*\
  !*** ./components/frame/frameButton.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frameButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frameButton.module.css */ "./components/frame/frameButton.module.css");
/* harmony import */ var _frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/index */ "./components/button/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\frameButton.js";






function FrameButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_index__WEBPACK_IMPORTED_MODULE_1__.default, {
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

_c = FrameButton;
/* harmony default export */ __webpack_exports__["default"] = (FrameButton);
/* 
    Document:
    --------
    <TextTitle/>: It's vary of text, It just has some specific attribute such as 16 px font size, and bold font wight.
*/

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

/***/ "./components/frame/mintButton.js":
/*!****************************************!*\
  !*** ./components/frame/mintButton.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mintButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mintButton.module.css */ "./components/frame/mintButton.module.css");
/* harmony import */ var _mintButton_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mintButton_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/index */ "./components/button/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\mintButton.js";







function MintButton(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button_index__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_mintButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintButton), className),
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
      bold: true,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = MintButton;
/* harmony default export */ __webpack_exports__["default"] = (MintButton);

var _c;

$RefreshReg$(_c, "MintButton");

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

/***/ "./components/icons/CheckSquare.js":
/*!*****************************************!*\
  !*** ./components/icons/CheckSquare.js ***!
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

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\CheckSquare.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgCheckSquare(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgCheckSquare;
/* harmony default export */ __webpack_exports__["default"] = (SvgCheckSquare);

var _c;

$RefreshReg$(_c, "SvgCheckSquare");

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

/***/ "./components/icons/HomepageOption.js":
/*!********************************************!*\
  !*** ./components/icons/HomepageOption.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\HomepageOption.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgHomepageOption(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgHomepageOption;
/* harmony default export */ __webpack_exports__["default"] = (SvgHomepageOption);

var _c;

$RefreshReg$(_c, "SvgHomepageOption");

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

/***/ "./components/icons/Vector.js":
/*!************************************!*\
  !*** ./components/icons/Vector.js ***!
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

var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Vector.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function SvgVector(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
      d: "M23.988 9.138h-1.713v-2.61C22.275 2.923 18.437 0 13.708 0 8.977 0 5.14 2.924 5.14 6.527v2.611H3.427C1.542 9.138 0 10.313 0 11.75v13.055c0 1.436 1.542 2.611 3.427 2.611h20.561c1.885 0 3.427-1.175 3.427-2.611V11.749c0-1.436-1.542-2.61-3.427-2.61zm-15.42-2.61c0-2.168 2.295-3.917 5.14-3.917 2.844 0 5.14 1.75 5.14 3.916v2.611H8.568v-2.61zm15.42 18.276H3.427V11.749h20.561v13.055zm-10.28-3.916c1.884 0 3.426-1.175 3.426-2.611 0-1.436-1.542-2.611-3.427-2.611-1.884 0-3.426 1.175-3.426 2.61 0 1.437 1.542 2.612 3.426 2.612z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
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

_c = SvgVector;
/* harmony default export */ __webpack_exports__["default"] = (SvgVector);

var _c;

$RefreshReg$(_c, "SvgVector");

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
/* harmony export */   "CheckSquare": function() { return /* reexport safe */ _CheckSquare__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Discord": function() { return /* reexport safe */ _Discord__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "DropDownİcon": function() { return /* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "DropDown": function() { return /* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "EthLogo": function() { return /* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "Facebook": function() { return /* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "Fingerprint": function() { return /* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "HomepageOption": function() { return /* reexport safe */ _HomepageOption__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "İnstagram": function() { return /* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "Linkdn": function() { return /* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "Mail": function() { return /* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "Media": function() { return /* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "MetaData": function() { return /* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "OpenseaLogo": function() { return /* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "QrCode": function() { return /* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "RaribleLogo": function() { return /* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "SavingsPig": function() { return /* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "SmartContractİcon": function() { return /* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "Twitter": function() { return /* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "Vector": function() { return /* reexport safe */ _Vector__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "Youtube": function() { return /* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_20__.default; }
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

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hook/useWindowSize */ "./hook/useWindowSize.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row/exhibitionSide */ "./components/row/exhibitionSide.js");
/* harmony import */ var _row_quotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../row/quotation */ "./components/row/quotation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\layout.js",
    _s = $RefreshSig$();










function Layout() {
  _s();

  var size = (0,_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().layout),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().sizing),
      style: {
        color: 'white'
      },
      children: JSON.stringify(size)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 16
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

_s(Layout, "/dTDjnwlNGsRzu12Dr5t7HJe8sA=", false, function () {
  return [_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);
/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/

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

/***/ "./components/navigation/button.js":
/*!*****************************************!*\
  !*** ./components/navigation/button.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/navigation/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/index */ "./components/button/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";





function NavigationButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),
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

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";









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

function Navigation(_ref) {
  var _this = this;

  var _ref$flat = _ref.flat,
      flat = _ref$flat === void 0 ? false : _ref$flat;
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
      children: MENU.map(function (menu) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().subBtn),
          children: !flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: [" ", menu.title, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 30
          }, _this)
        }, menu.key, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this);
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

/***/ "./components/photo/index.js":
/*!***********************************!*\
  !*** ./components/photo/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ "./components/photo/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\photo\\index.js";




function Photo(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fjpierce%2Fj-pierce-promo-black-01.png?alt=media&token=5cf0cf0f-31fa-4ef2-9f21-eaa13659567b" : _ref$src,
      alt = _ref.alt,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 470 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 292 : _ref$height;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().photo),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),
      style: {
        width: width,
        height: height
      },
      src: src,
      alt: alt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }, this);
}

_c = Photo;
/* harmony default export */ __webpack_exports__["default"] = (Photo);

var _c;

$RefreshReg$(_c, "Photo");

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

/***/ "./components/row/exhibitionSide.js":
/*!******************************************!*\
  !*** ./components/row/exhibitionSide.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exhibitionSide.module.css */ "./components/row/exhibitionSide.module.css");
/* harmony import */ var _exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _photo_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photo/index */ "./components/photo/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _frame_mintButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/mintButton */ "./components/frame/mintButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\exhibitionSide.js";







function Exhibition(_ref) {
  var Header = _ref.Header,
      Text = _ref.Text,
      Owner = _ref.Owner,
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? "https://ownerfy.com/jpandfriends" : _ref$src;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("article", {
    className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().advert),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().advertHeader),
        size: "33px",
        bold: true,
        children: "CA$H Cows"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
          size: "22px",
          children: "Now Minting: Chic-A-Dees,First NFTs to Generate EGGS Tokens"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_frame_mintButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintButton),
        children: "MINT CHIC-A-DEE NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().photoExhibition),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().photos),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fchicadees%2Fcashcows.png?alt=media&token=60ef4aa7-42c9-47de-82a6-b719953749c3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().owner),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subOwner),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            size: "12px",
            bold: true,
            children: "UPCOMING COLLECTION:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            size: "12px",
            children: "J.Pierce and Friends - Hand Painted and Signed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_c = Exhibition;
/* harmony default export */ __webpack_exports__["default"] = (Exhibition);

var _c;

$RefreshReg$(_c, "Exhibition");

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

/***/ "./components/row/quotation.js":
/*!*************************************!*\
  !*** ./components/row/quotation.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _quotation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotation.module.css */ "./components/row/quotation.module.css");
/* harmony import */ var _quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_quotation_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\quotation.js";







function Quotation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quo),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoHeader),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoHeaderText),
        size: "26px",
        bold: true,
        children: ["Trade ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().Span),
          children: "Ownable-NS "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 24
        }, this), "created on marketplace platforms."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoMiddle),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoMiddleText),
        size: "16px",
        opacity: "0.6",
        bold: true,
        children: "Trade Ownable-NS created on marketplace platforms."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoFooter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoFooterText),
        size: "16px",
        opacity: "0.6",
        children: ["You,the creator, own your private keys, therefore own your assets and are free to,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 103
        }, this), "transfer, sell or trade NFTs anywhere on the digital marketplace."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoIcons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.RaribleLogo, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoRarible)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.OpenseaLogo, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoOpensea)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_c = Quotation;
/* harmony default export */ __webpack_exports__["default"] = (Quotation);

var _c;

$RefreshReg$(_c, "Quotation");

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

/***/ "./components/text/head-title.js":
/*!***************************************!*\
  !*** ./components/text/head-title.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-title.module.css */ "./components/text/head-title.module.css");
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text\\head-title.js";





function HeadTitle(_ref) {
  var _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      className = _ref.className,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity;
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

_c = HeadTitle;
/* harmony default export */ __webpack_exports__["default"] = (HeadTitle);
/*
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    bold: Some text has bold font weight, but some it hasn't. When text has bold font weight properties, bold properties will have been activated.
*/

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

/***/ "./components/text/text-title.js":
/*!***************************************!*\
  !*** ./components/text/text-title.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title.module.css */ "./components/text/text-title.module.css");
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text\\text-title.js";





function TextTitle(_ref) {
  var _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold)]),
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

/***/ "./constant/index.js":
/*!***************************!*\
  !*** ./constant/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = ({
  TABLET_SIZE: 943,
  DESKTOP_SIZE: 1270
});

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

/***/ "./hook/useWindowSize.js":
/*!*******************************!*\
  !*** ./hook/useWindowSize.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();

 // Hook

function useWindowSize() {
  _s();

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: undefined,
    height: undefined
  }),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

_s(useWindowSize, "KDnSZXZID0J9brnGdsQ5nH1K0Ao=");

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\index.js";




function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./components/button/style.module.css":
/*!********************************************!*\
  !*** ./components/button/style.module.css ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./style.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/style.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./style.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/style.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./style.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/style.module.css");

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

/***/ "./components/frame/frameButton.module.css":
/*!*************************************************!*\
  !*** ./components/frame/frameButton.module.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./frameButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/frameButton.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./frameButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/frameButton.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./frameButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/frameButton.module.css");

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

/***/ "./components/frame/mintButton.module.css":
/*!************************************************!*\
  !*** ./components/frame/mintButton.module.css ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./mintButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/mintButton.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./mintButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/mintButton.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./mintButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/mintButton.module.css");

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

/***/ "./components/layout/layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/layout.module.css ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/layout/layout.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/layout/layout.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/layout/layout.module.css");

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

/***/ "./components/navigation/button.module.css":
/*!*************************************************!*\
  !*** ./components/navigation/button.module.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css");

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

/***/ "./components/navigation/navigation.module.css":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation.module.css ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/navigation.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/navigation.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/navigation.module.css");

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

/***/ "./components/photo/index.module.css":
/*!*******************************************!*\
  !*** ./components/photo/index.module.css ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./index.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/photo/index.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./index.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/photo/index.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./index.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/photo/index.module.css");

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

/***/ "./components/row/exhibitionSide.module.css":
/*!**************************************************!*\
  !*** ./components/row/exhibitionSide.module.css ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./exhibitionSide.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/exhibitionSide.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./exhibitionSide.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/exhibitionSide.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./exhibitionSide.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/exhibitionSide.module.css");

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

/***/ "./components/row/quotation.module.css":
/*!*********************************************!*\
  !*** ./components/row/quotation.module.css ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./quotation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/quotation.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./quotation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/quotation.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./quotation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/quotation.module.css");

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

/***/ "./components/text/head-title.module.css":
/*!***********************************************!*\
  !*** ./components/text/head-title.module.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./head-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/head-title.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./head-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/head-title.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./head-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/head-title.module.css");

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

/***/ "./components/text/text-title.module.css":
/*!***********************************************!*\
  !*** ./components/text/text-title.module.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./text-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/text-title.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./text-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/text-title.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./text-title.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/text-title.module.css");

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
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
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/style.module.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/style.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Container from button */\r\n    /* Button Elements */\r\n    .style_baseBtn__1MyPU{\r\n        background-color: transparent;\r\n        display: inline-block;\r\n        border:none;  \r\n    }\r\n\r\n    /* While hovering on buttons of navigation, text will have been yellow. */\r\n    .style_baseBtn__1MyPU:hover{\r\n        color: var(--c-btn-background)\r\n    }\r\n\r\n    /* If Button has border, This code snippet will have been activated*/\r\n    .style_FrameBorder__-GMIy{\r\n        border: 2px solid;\r\n        border-color: var( --c-btn-background);\r\n        width: 92.94px;\r\n        height: 53.81px;\r\n                }\r\n\r\n    /* while hovering on button, Button background will have been black, even text will have been yellow */\r\n    .style_FrameBorder__-GMIy:hover{\r\n        background: var(--c-frame-background);\r\n                        }\r\n\r\n    .style_linkContainer__2meFz+*{\r\n            padding-left: 20px;\r\n        }\r\n    \r\n    .style_linkContainer__2meFz:hover{\r\n        color:var(--c-frame-background);\r\n    }\r\n\r\n  \r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/button/style.module.css"],"names":[],"mappings":"AAAA,0BAA0B;IACtB,oBAAoB;IACpB;QACI,6BAA6B;QAC7B,qBAAqB;QACrB,WAAW;IACf;;IAEA,yEAAyE;IACzE;QACI;IACJ;;IAEA,oEAAoE;IACpE;QACI,iBAAiB;QACjB,sCAAsC;QACtC,cAAc;QACd,eAAe;gBACP;;IAEZ,sGAAsG;IACtG;QACI,qCAAqC;wBACrB;;IAIhB;YACI,kBAAkB;QACtB;;IAGJ;QACI,+BAA+B;IACnC","sourcesContent":["/* Container from button */\r\n    /* Button Elements */\r\n    .baseBtn{\r\n        background-color: transparent;\r\n        display: inline-block;\r\n        border:none;  \r\n    }\r\n\r\n    /* While hovering on buttons of navigation, text will have been yellow. */\r\n    .baseBtn:hover{\r\n        color: var(--c-btn-background)\r\n    }\r\n\r\n    /* If Button has border, This code snippet will have been activated*/\r\n    .FrameBorder{\r\n        border: 2px solid;\r\n        border-color: var( --c-btn-background);\r\n        width: 92.94px;\r\n        height: 53.81px;\r\n                }\r\n\r\n    /* while hovering on button, Button background will have been black, even text will have been yellow */\r\n    .FrameBorder:hover{\r\n        background: var(--c-frame-background);\r\n                        }\r\n\r\n    .linkContainer {\r\n    \r\n        &+*{\r\n            padding-left: 20px;\r\n        }    \r\n    }\r\n    \r\n    .linkContainer:hover{\r\n        color:var(--c-frame-background);\r\n    }\r\n\r\n  \r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"baseBtn": "style_baseBtn__1MyPU",
	"FrameBorder": "style_FrameBorder__-GMIy",
	"linkContainer": "style_linkContainer__2meFz"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/frameButton.module.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/frameButton.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".frameButton_frameBtn__AmQ2u{\r\n\r\n}", "",{"version":3,"sources":["webpack://components/frame/frameButton.module.css"],"names":[],"mappings":"AAAA;;AAEA","sourcesContent":[".frameBtn{\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"frameBtn": "frameButton_frameBtn__AmQ2u"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/mintButton.module.css":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/mintButton.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mintButton_mintButton__2IVdW {\r\n    background-color: var(--c-frame-background);\r\n    color: var(--c-btn-background);\r\n    width: 255.75px;\r\n    height: 48.98px;\r\n}\r\n\r\n.mintButton_mintButton__2IVdW:hover{\r\n    color: var(--c-frame-background);\r\n    background-color: var(--c-btn-background);\r\n}", "",{"version":3,"sources":["webpack://components/frame/mintButton.module.css"],"names":[],"mappings":"AAAA;IACI,2CAA2C;IAC3C,8BAA8B;IAC9B,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,yCAAyC;AAC7C","sourcesContent":[".mintButton {\r\n    background-color: var(--c-frame-background);\r\n    color: var(--c-btn-background);\r\n    width: 255.75px;\r\n    height: 48.98px;\r\n}\r\n\r\n.mintButton:hover{\r\n    color: var(--c-frame-background);\r\n    background-color: var(--c-btn-background);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mintButton": "mintButton_mintButton__2IVdW"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/layout/layout.module.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/layout/layout.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".layout_layout__2edI9{\r\nmin-height: 640px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/layout/layout.module.css"],"names":[],"mappings":"AAAA;AACA,iBAAiB;AACjB","sourcesContent":[".layout{\r\nmin-height: 640px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"layout": "layout_layout__2edI9"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/navigation.module.css":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/navigation.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Navigator */\r\n.navigation_navigator__2CchN {\r\n        border: 1px solid;\r\n        border-color: #9E9E9E;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        text-align: center;\r\n        align-items: center;\r\n        padding:  1rem 1.5rem;}\r\n/* Navigator Media */\r\n@media (min-width: 1270px){\r\n.navigation_navigator__2CchN {           \r\n            max-width: 1270;\r\n            height: 71px;\r\n            max-height: 95px}\r\n        }\r\n/* Navigator Button */\r\n.navigation_navigator__2CchN .navigation_navBtn__2Irah{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;}\r\n@media (max-width: 943px){\r\n.navigation_navigator__2CchN .navigation_navBtn__2Irah{\r\n            position: fixed;\r\n            top: 5rem;\r\n            flex-direction: column;\r\n            width: 100%;\r\n            display: center;\r\n            transition: 0.3s}\r\n        }\r\n.navigation_navigator__2CchN .navigation_navBtn__2Irah button + button {\r\n        padding-left: 20px; \r\n        }\r\n.navigation_navigator__2CchN .navigation_navBtn__2Irah .navigation_navItem__20uhs{\r\n            margin-left: 5rem;\r\n    }\r\n/* Mark */\r\n.navigation_navigator__2CchN .navigation_mark__3GFaM{\r\n        padding-left: 10px;\r\n\r\n    /* .navBtn and .mark has the same display, because both of them is in different div, and those two div must be same row.*/\r\n    }\r\n.navigation_navigator__2CchN .navigation_mark__3GFaM .navigation_mark__3GFaM svg{\r\n            font-size: 30px;\r\n            \r\n        }\r\n@media(max-width: 943px){\r\n.navigation_navigator__2CchN .navigation_mark__3GFaM{\r\n            display: inline-block;\r\n            text-align: left\r\n    }\r\n        }\r\n.navigation_navigator__2CchN .navigation_loginButton__2eAZM{\r\n        padding-right: 20px;}\r\n@media(max-width: 943px){\r\n.navigation_navigator__2CchN .navigation_loginButton__2eAZM{\r\n            display: inline-block;\r\n            text-align: right}\r\n    }\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/navigation/navigation.module.css"],"names":[],"mappings":"AAAA,cAAc;AACd;QACQ,iBAAiB;QACjB,qBAAqB;QACrB,aAAa;QACb,8BAA8B;QAC9B,kBAAkB;QAClB,mBAAmB;QACnB,qBAAqB,CAiDvB;AAhDE,oBAAoB;AACpB;AATR;YAUY,eAAe;YACf,YAAY;YACZ,gBA4CN;QA3CE;AAEJ,qBAAqB;AACrB;QACI,aAAa;QACb,8BAA8B;QAC9B,mBAAmB,CAgBtB;AAfG;AAJJ;YAKQ,eAAe;YACf,SAAS;YACT,sBAAsB;YACtB,WAAW;YACX,eAAe;YACf,gBASP;QARG;AAEA;QACA,kBAAkB;QAClB;AAEA;YACI,iBAAiB;IACzB;AAEA,SAAS;AACT;QACI,kBAAkB;;IAUtB,yHAAyH;IACzH;AAVI;YACI,eAAe;;QAEnB;AACA;AANJ;YAOQ,qBAAqB;YACrB;IAIR;QAHI;AAIJ;QACI,mBAAmB,CAItB;AAHG;AAFJ;YAGQ,qBAAqB;YACrB,iBACP;IAAD","sourcesContent":["/* Navigator */\r\n.navigator {\r\n        border: 1px solid;\r\n        border-color: #9E9E9E;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        text-align: center;\r\n        align-items: center;\r\n        padding:  1rem 1.5rem;\r\n        /* Navigator Media */\r\n        @media (--d){           \r\n            max-width: 1270;\r\n            height: 71px;\r\n            max-height: 95px;\r\n        }\r\n\r\n    /* Navigator Button */\r\n    .navBtn{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        @media (--t){\r\n            position: fixed;\r\n            top: 5rem;\r\n            flex-direction: column;\r\n            width: 100%;\r\n            display: center;\r\n            transition: 0.3s;\r\n        }\r\n        \r\n        button + button {\r\n        padding-left: 20px; \r\n        }\r\n\r\n        .navItem{\r\n            margin-left: 5rem;\r\n    }}\r\n\r\n    /* Mark */\r\n    .mark{\r\n        padding-left: 10px;\r\n        .mark svg{\r\n            font-size: 30px;\r\n            \r\n        }\r\n        @media(--t){\r\n            display: inline-block;\r\n            text-align: left;\r\n        }\r\n\r\n    /* .navBtn and .mark has the same display, because both of them is in different div, and those two div must be same row.*/\r\n    }\r\n    .loginButton{\r\n        padding-right: 20px;\r\n        @media(--t){\r\n            display: inline-block;\r\n            text-align: right;\r\n    }}}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navigator": "navigation_navigator__2CchN",
	"navBtn": "navigation_navBtn__2Irah",
	"navItem": "navigation_navItem__20uhs",
	"mark": "navigation_mark__3GFaM",
	"loginButton": "navigation_loginButton__2eAZM"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/photo/index.module.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/photo/index.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".photo_photo__3OnmP{\r\n \r\n}\r\n\r\n.photo_img__1nYXD{\r\n    float: left;\r\n    width: 33.33%;\r\n    padding-left: 20px;\r\n    padding-top: 32px;\r\n    \r\n}\r\n", "",{"version":3,"sources":["webpack://components/photo/index.module.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,iBAAiB;;AAErB","sourcesContent":[".photo{\r\n \r\n}\r\n\r\n.img{\r\n    float: left;\r\n    width: 33.33%;\r\n    padding-left: 20px;\r\n    padding-top: 32px;\r\n    \r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"photo": "photo_photo__3OnmP",
	"img": "photo_img__1nYXD"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/exhibitionSide.module.css":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/exhibitionSide.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".exhibitionSide_container__3QjKN{\r\n    display: grid;\r\n    grid-template-areas: 'Advert Photos';\r\n    grid-template-columns: 700px 1fr;\r\n    background-color: var(--c-frame-background);\r\n    color: white;\r\n    width: 1920px;\r\n    height: 426.26px;\r\n    position: fixed;  \r\n}\r\n\r\n    /*Advert Side */\r\n\r\n    .exhibitionSide_container__3QjKN .exhibitionSide_advert__M4tyZ{\r\n        grid-area: Advert;\r\n        text-align: start;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        -ms-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);  \r\n        }\r\n\r\n    @media(max-width: 943px){\r\n\r\n    .exhibitionSide_container__3QjKN .exhibitionSide_advert__M4tyZ{\r\n            left: 35%  \r\n        }\r\n        }\r\n\r\n    .exhibitionSide_container__3QjKN .exhibitionSide_advert__M4tyZ .exhibitionSide_borderLine__1WjtA{\r\n            line-height: 22.88px;\r\n            }\r\n\r\n    .exhibitionSide_container__3QjKN .exhibitionSide_mintButton__17trM{\r\n            margin-top: 32px;\r\n    }\r\n\r\n.exhibitionSide_photoExhibition__1Zq07{\r\n    grid-area: Photos;\r\n}\r\n\r\n.exhibitionSide_photoExhibition__1Zq07 .exhibitionSide_photos__2J5wx{\r\n        text-align: justify;\r\n        display: flex;\r\n    }\r\n\r\n.exhibitionSide_photoExhibition__1Zq07 .exhibitionSide_subOwner__2asPr{\r\n        display: flex;\r\n        margin-top: 32px;\r\n        margin-left: 20px;\r\n        \r\n    }\r\n\r\n", "",{"version":3,"sources":["webpack://components/row/exhibitionSide.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oCAAoC;IACpC,gCAAgC;IAChC,2CAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;AAwBnB;;IAtBI,eAAe;;IACf;QACI,iBAAiB;QACjB,iBAAiB;QACjB,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,oCAAoC;QACpC,gCAAgC;QAShC;;IAPA;;IATJ;YAUQ;QAMJ;QALA;;IAEA;YACI,oBAAoB;YACpB;;IAGR;YACQ,gBAAgB;IACxB;;AAGJ;IACI,iBAAiB;AAYrB;;AAVI;QACI,mBAAmB;QACnB,aAAa;IACjB;;AACA;QACI,aAAa;QACb,gBAAgB;QAChB,iBAAiB;;IAErB","sourcesContent":[".container{\r\n    display: grid;\r\n    grid-template-areas: 'Advert Photos';\r\n    grid-template-columns: 700px 1fr;\r\n    background-color: var(--c-frame-background);\r\n    color: white;\r\n    width: 1920px;\r\n    height: 426.26px;\r\n    position: fixed;\r\n\r\n    /*Advert Side */\r\n    .advert{\r\n        grid-area: Advert;\r\n        text-align: start;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        -ms-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n\r\n        @media(--t){\r\n            left: 35%;\r\n        }\r\n       \r\n        .borderLine{\r\n            line-height: 22.88px;\r\n            }  \r\n        }\r\n    \r\n    .mintButton{\r\n            margin-top: 32px;\r\n    }  \r\n}\r\n\r\n.photoExhibition{\r\n    grid-area: Photos;\r\n\r\n    .photos{\r\n        text-align: justify;\r\n        display: flex;\r\n    }\r\n    .subOwner{\r\n        display: flex;\r\n        margin-top: 32px;\r\n        margin-left: 20px;\r\n        \r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "exhibitionSide_container__3QjKN",
	"advert": "exhibitionSide_advert__M4tyZ",
	"borderLine": "exhibitionSide_borderLine__1WjtA",
	"mintButton": "exhibitionSide_mintButton__17trM",
	"photoExhibition": "exhibitionSide_photoExhibition__1Zq07",
	"photos": "exhibitionSide_photos__2J5wx",
	"subOwner": "exhibitionSide_subOwner__2asPr"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/quotation.module.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/quotation.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".quotation_quo__F-Q0q{\r\n    padding-top: 40px;\r\n    text-align: center;\r\n    background-color: var(--c-background-alternative-color);\r\n    min-height: 214.72px;\r\n   \r\n}\r\n\r\n    .quotation_quo__F-Q0q .quotation_quoMiddleText__3g59f {\r\n        color: var(--c-color-alternative);\r\n    }\r\n\r\n    .quotation_quo__F-Q0q .quotation_quoFooterText__1N3sf{\r\n        color: var(--c-color-alternative);\r\n    }\r\n\r\n    .quotation_quo__F-Q0q div + div{\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .quotation_quo__F-Q0q .quotation_quoOpensea__XpgaI{\r\n        padding-left: 20px;\r\n    }\r\n\r\n    .quotation_quo__F-Q0q .quotation_Span__2jHjL{\r\n        color: var(--c-btn-background);\r\n    }\r\n\r\n    .quotation_quo__F-Q0q .quotation_quoRarible__3sqe0{\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    .quotation_quo__F-Q0q .quotation_quoOpensea__XpgaI{\r\n        width: 25px;\r\n        height: 25px;\r\n    }", "",{"version":3,"sources":["webpack://components/row/quotation.module.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,uDAAuD;IACvD,oBAAoB;;AA4BxB;;IA1BI;QACI,iCAAiC;IACrC;;IACA;QACI,iCAAiC;IACrC;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;;IACA;QACI,8BAA8B;IAClC;;IACA;QACI,WAAW;QACX,YAAY;IAChB;;IACA;QACI,WAAW;QACX,YAAY;IAChB","sourcesContent":[".quo{\r\n    padding-top: 40px;\r\n    text-align: center;\r\n    background-color: var(--c-background-alternative-color);\r\n    min-height: 214.72px;\r\n\r\n    .quoMiddleText {\r\n        color: var(--c-color-alternative);\r\n    }\r\n    .quoFooterText{\r\n        color: var(--c-color-alternative);\r\n    }\r\n\r\n    div + div{\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .quoOpensea{\r\n        padding-left: 20px;\r\n    }\r\n    .Span{\r\n        color: var(--c-btn-background);\r\n    }\r\n    .quoRarible{\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n    .quoOpensea{\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n   \r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"quo": "quotation_quo__F-Q0q",
	"quoMiddleText": "quotation_quoMiddleText__3g59f",
	"quoFooterText": "quotation_quoFooterText__1N3sf",
	"quoOpensea": "quotation_quoOpensea__XpgaI",
	"Span": "quotation_Span__2jHjL",
	"quoRarible": "quotation_quoRarible__3sqe0"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/head-title.module.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/head-title.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".head-title_Title__3mwXg {\r\n    \r\n}\r\n\r\n.head-title_bold__12sGy {\r\n    font-weight: bold;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/text/head-title.module.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".Title {\r\n    \r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Title": "head-title_Title__3mwXg",
	"bold": "head-title_bold__12sGy"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/text-title.module.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/text/text-title.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-title_Title__6Kb9h {\r\n    font-size: 14px ;\r\n}\r\n\r\n.text-title_bold__pS28u {\r\n    font-weight: bold;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/text/text-title.module.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".Title {\r\n    font-size: 14px ;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Title": "text-title_Title__6Kb9h",
	"bold": "text-title_bold__pS28u"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDE3ZDIyOWYzNzIxYWI2Y2JiMjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFHQSxTQUFTRyxXQUFULE9BQXFFO0FBQUEseUJBQTlDQyxNQUE4QztBQUFBLE1BQTlDQSxNQUE4Qyw0QkFBdkMsS0FBdUM7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVJDLEtBQVE7O0FBQ2pFLHNCQUNRO0FBQ0EsYUFBUyxFQUFFTCxpREFBRSxDQUNULENBQUNELGtFQUFELEVBQ0FHLE1BQU0sSUFBSUgsc0VBRFYsRUFFQUssU0FGQSxDQURTLENBRGI7QUFNSSxRQUFJLEVBQUMsUUFOVDtBQUFBLGNBUUtEO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBWUg7O0FBR0QsU0FBU0ssVUFBVCxRQUF1RDtBQUFBLE1BQWhDTCxRQUFnQyxTQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsU0FBc0IsU0FBdEJBLFNBQXNCO0FBQUEsTUFBUkMsS0FBUTs7QUFDbkQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVOLHdFQUFoQjtBQUFBLDJCQUNJO0FBQUcsZUFBUyxFQUFFQSxnRUFBZDtBQUFBLHNCQUE4QkksUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBR0QsU0FBU1EsTUFBVCxRQUFnRTtBQUFBLDJCQUE5Q1QsTUFBOEM7QUFBQSxNQUE5Q0EsTUFBOEMsNkJBQXZDLEtBQXVDO0FBQUEsTUFBaENDLFFBQWdDLFNBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxTQUFzQixTQUF0QkEsU0FBc0I7QUFBQSxNQUFSQyxLQUFROztBQUM1RCxNQUFNTyxJQUFJLEdBQUdWLE1BQU0sR0FBR0QsV0FBSCxHQUFpQk8sVUFB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O0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUseUVBQTRCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmFtZS9mcmFtZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmFtZS9taW50QnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0NoZWNrU3F1YXJlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0Rpc2NvcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvRHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvRHJvcERvd27EsGNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9FdGhMb2dvLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0ZhY2Vib29rLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0ZpbmdlcnByaW50LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0hvbWVwYWdlT3B0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL0xpbmtkbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9NYWlsLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL01lZGlhLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL01ldGFEYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL09wZW5zZWFMb2dvLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL1FyQ29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9SYXJpYmxlTG9nby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9TYXZpbmdzUGlnLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL1NtYXJ0Q29udHJhY3TEsGNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9Ud2l0dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9Zb3V0dWJlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL8SwbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGhvdG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcm93L2V4aGliaXRpb25TaWRlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jvdy9xdW90YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2svdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi9zdHlsZS5tb2R1bGUuY3NzPzU4MmQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24ubW9kdWxlLmNzcz80NTdiIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZyYW1lL21pbnRCdXR0b24ubW9kdWxlLmNzcz9jOTY1Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcz81MzU4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLm1vZHVsZS5jc3M/N2U0OSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcz9lYTZiIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bob3RvL2luZGV4Lm1vZHVsZS5jc3M/ZTJkZCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb3cvZXhoaWJpdGlvblNpZGUubW9kdWxlLmNzcz9mOTkwIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jvdy9xdW90YXRpb24ubW9kdWxlLmNzcz85MzBlIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RleHQvaGVhZC10aXRsZS5tb2R1bGUuY3NzPzgzZjkiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGV4dC90ZXh0LXRpdGxlLm1vZHVsZS5jc3M/ZTJkNCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV0dG9uL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmFtZS9taW50QnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGhvdG8vaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb3cvZXhoaWJpdGlvblNpZGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb3cvcXVvdGF0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGV4dC90ZXh0LXRpdGxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5cclxuZnVuY3Rpb24gZnJhbWVCdXR0b24gKHtib3JkZXI9ZmFsc2UsIGNoaWxkcmVuLCBjbGFzc05hbWUgLC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvbiAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmJhc2VCdG4gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyICYmIHN0eWxlcy5GcmFtZUJvcmRlcixcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICBdKX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn0gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmtCdXR0b24gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT4ge2NoaWxkcmVufSA8L2E+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBidXR0b24gKHtib3JkZXI9ZmFsc2UsIGNoaWxkcmVuLCBjbGFzc05hbWUgLC4uLnByb3BzfSkge1xyXG4gICAgY29uc3QgQ29tcCA9IGJvcmRlciA/IGZyYW1lQnV0dG9uIDogbGlua0J1dHRvblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbXAgIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L0NvbXA+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25cclxuXHJcbi8qXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICBjbiBzdGFuZCBmb3IgY2xhc3NuYW1lczogJ0NsYXNzbmFtZXMnICBpcyBwcmV2ZW50IGNsYXNzIG92ZXJ3cml0ZS4gSXQgY29tZXMgbW9yZSB0aGFuIG9uZSBjbGFzcyBpbnRvIGZ1bmN0aW9uLCBpdCdzIHJlYXNvbiBhYm91dCBjb25mbGljdC4gXHJcbiAgICBib3JkZXI6IFNvbWUgYnV0dG9uIGhhcyBib3JkZXIsIGJ1dCBzb21lIGl0IGhhc24ndC4gV2hlbiBidXR0b24gaGFzIGJvcmRlciwgYm9yZGVyIGF0dHJpYnV0ZSB3aWwgaGF2ZSBiZWVuICBhY3RpdmF0ZWQuIFxyXG4gICAgY2hpbGRyZW46IENvbnRlbnQsIHdoaWNoIGluY2x1ZGUgd2l0aGluIGVsZW1lbnQuXHJcbiAgICAuLi5wcm9wczogV2hhdCBpZiBBbnkgcHJvcGVydGllcyBpcyBwYXNzZWQgaW50byBmdW5jdGlvbiwgRnVuY3Rpb24gY2FuIGNhdGNoLlxyXG4qL1xyXG5cclxuLyogXHJcbi8vIFRPIERPIExpc3RcclxuW10gIGZyYW1lIGJ1dHRvbiAvIFRyYW5zcGFyZW50IC0gY29sb3JcclxuXHJcbiovXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9pbmRleCdcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mcmFtZUJ0bn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPntjaGlsZHJlbn08L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhbWVCdXR0b25cclxuXHJcbi8qIFxyXG4gICAgRG9jdW1lbnQ6XHJcbiAgICAtLS0tLS0tLVxyXG4gICAgPFRleHRUaXRsZS8+OiBJdCdzIHZhcnkgb2YgdGV4dCwgSXQganVzdCBoYXMgc29tZSBzcGVjaWZpYyBhdHRyaWJ1dGUgc3VjaCBhcyAxNiBweCBmb250IHNpemUsIGFuZCBib2xkIGZvbnQgd2lnaHQuXHJcbiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9taW50QnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2luZGV4J1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuXHJcblxyXG5mdW5jdGlvbiBNaW50QnV0dG9uICh7IGNoaWxkcmVuLCBjbGFzc05hbWV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiAgY2xhc3NOYW1lPXtjbihzdHlsZXMubWludEJ1dHRvbiwgY2xhc3NOYW1lKX0gYm9yZGVyPlxyXG4gICAgICAgICAgICA8VGV4dFRpdGxlIGJvbGQ+e2NoaWxkcmVufTwvVGV4dFRpdGxlPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgICApfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDaGVja1NxdWFyZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTYuMDcxIDBIMS45M0ExLjkyOSAxLjkyOSAwIDAwMCAxLjkyOVYxNi4wN0MwIDE3LjEzNy44NjMgMTggMS45MjkgMThIMTYuMDdBMS45MjkgMS45MjkgMCAwMDE4IDE2LjA3MVYxLjkzQTEuOTI5IDEuOTI5IDAgMDAxNi4wNzEgMHptMCAxNi4wNzFIMS45M1YxLjkzSDE2LjA3VjE2LjA3em0tMS40NC05LjcxMmwtNi45MzUgNi44NzlhLjQ4Mi40ODIgMCAwMS0uNjgyLS4wMDNMMy4zNjcgOS41NThhLjQ4Mi40ODIgMCAwMS4wMDMtLjY4MmwuOTEyLS45MDVhLjQ4Mi40ODIgMCAwMS42ODIuMDAzbDIuNDAzIDIuNDIyIDUuNjc5LTUuNjM0YS40ODIuNDgyIDAgMDEuNjgyLjAwM2wuOTA1LjkxMmEuNDgyLjQ4MiAwIDAxLS4wMDIuNjgyelwiXG4gICAgICAgIGZpbGw9XCIjRkNDNzI5XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2hlY2tTcXVhcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEaXNjb3JkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNS42MDMgMEgzLjM5N0MxLjUyNSAwIDAgMS4zMzQgMCAyLjk4N3YxOS42MDRjMCAxLjY1MyAxLjUyNSAyLjk4NyAzLjM5NyAyLjk4N0gyMi4xOWwtLjg3OC0yLjY4MyAyLjEyMSAxLjcyNiAyLjAwNSAxLjYyNEwyOSAyOVYyLjk4N0MyOSAxLjMzNCAyNy40NzUgMCAyNS42MDMgMHptLTYuMzk3IDE4LjkzN3MtLjU5Ni0uNjIzLTEuMDkzLTEuMTc1YzIuMTctLjUzNiAyLjk5OS0xLjcyNSAyLjk5OS0xLjcyNS0uNjguMzkyLTEuMzI2LjY2Ny0xLjkwNi44NTUtLjgyOC4zMDUtMS42MjQuNTA4LTIuNDAzLjYyNGExMy4yNCAxMy4yNCAwIDAxLTQuMjkyLS4wMTQgMTUuNDUgMTUuNDUgMCAwMS0yLjQzNi0uNjI0Yy0uMzgtLjEzLS43OTUtLjI5LTEuMjEtLjQ5My0uMDQ5LS4wMjktLjA5OS0uMDQ0LS4xNDgtLjA3M2EuMjI4LjIyOCAwIDAxLS4wNjctLjA0M2MtLjI5OC0uMTQ1LS40NjQtLjI0Ni0uNDY0LS4yNDZzLjc5NiAxLjE2IDIuOSAxLjcxYy0uNDk3LjU1Mi0xLjExIDEuMjA0LTEuMTEgMS4yMDQtMy42NjItLjEwMi01LjA1NC0yLjIwNC01LjA1NC0yLjIwNCAwLTQuNjY5IDIuMzg2LTguNDU0IDIuMzg2LTguNDU0IDIuMzg2LTEuNTY2IDQuNjU3LTEuNTIyIDQuNjU3LTEuNTIybC4xNjUuMTc0Yy0yLjk4My43NTQtNC4zNTggMS45LTQuMzU4IDEuOXMuMzY1LS4xNzUuOTc4LS40MjFjMS43NzMtLjY4MSAzLjE4MS0uODcgMy43NjEtLjkxMy4xLS4wMTUuMTgzLS4wMy4yODItLjAzYTE2LjAxMSAxNi4wMTEgMCAwMTMuMzQ4LS4wMjhjMS41NzQuMTU5IDMuMjY0LjU2NSA0Ljk4OCAxLjM5MiAwIDAtMS4zMS0xLjA4OC00LjEyNy0xLjg0MmwuMjMyLS4yMzJzMi4yNy0uMDQzIDQuNjU3IDEuNTIzYzAgMCAyLjM4NiAzLjc4NCAyLjM4NiA4LjQ1MyAwIDAtMS40MDggMi4xMDItNS4wNyAyLjIwNHptLTcuNzA1LTYuNzcyYy0uOTQ1IDAtMS42OS43MjYtMS42OSAxLjYxIDAgLjg4NC43NjIgMS42MSAxLjY5IDEuNjEuOTQ0IDAgMS42OS0uNzI2IDEuNjktMS42MS4wMTYtLjg4NS0uNzQ2LTEuNjEtMS42OS0xLjYxem02LjA0OCAwYy0uOTQ0IDAtMS42OS43MjYtMS42OSAxLjYxIDAgLjg4NC43NjIgMS42MSAxLjY5IDEuNjEuOTQ1IDAgMS42OS0uNzI2IDEuNjktMS42MSAwLS44ODUtLjc0NS0xLjYxLTEuNjktMS42MXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRGlzY29yZFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00LjUxNiA3LjU0OGMuNDM2LS40NDYgMS4wNDMtLjQ4MSAxLjU3NiAwTDEwIDExLjI5NWwzLjkwOC0zLjc0N2MuNTMzLS40ODEgMS4xNDEtLjQ0NiAxLjU3NCAwIC40MzYuNDQ1LjQwOCAxLjE5NyAwIDEuNjE1LS40MDYuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyYTEuMDk1IDEuMDk1IDAgMDEtMS41NzYgMFM0LjkyNCA5LjU4IDQuNTE2IDkuMTYzYy0uNDA4LS40MTgtLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93blxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duxLBjb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgMTBsNSA1IDUtNUg3elwiIGZpbGw9XCIjMDAwXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93bsSwY29uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRXRoTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQyIDcxXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNn1cbiAgICAgICAgZD1cIk0yMC45OTYgMjcuMjkzTDIgMzYuMDlsMTguOTk2IDExLjQyNyAxOC45OS0xMS40MjctMTguOTktOC43OTZ6XCJcbiAgICAgICAgZmlsbD1cIiMwMTAxMDFcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNDV9XG4gICAgICAgIGQ9XCJNMS41NyAzNS44MzRsLS4yNTMuNDI4LjQyNS4yNTZMMjAuNzQgNDcuOTQ0bC43NTguNDU2VjIuMTc0bC0uOTMgMS41NzFMMS41NyAzNS44MzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuOH1cbiAgICAgICAgZD1cIk0yMS40MjYgMy43NDVsLS45My0xLjU3MlY0OC40bC43NTgtLjQ1NiAxOC45ODktMTEuNDI2LjQyNS0uMjU2LS4yNTMtLjQyOEwyMS40MjYgMy43NDV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNDV9XG4gICAgICAgIGQ9XCJNMjAuNDk3IDUxLjQ2MlY2NS40MUwzLjc1IDQxLjM4OWwxNi43NDcgMTAuMDczelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjAuNzM4IDUwLjc1MWwtLjI0Mi4xNDZWNjguNTlsLjkxLTEuMzA0TDQwLjQxIDQwLjAzOWwtLjY2OC0uNzE0TDIwLjczOCA1MC43NXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0V0aExvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdGYWNlYm9vayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNi4wNDIgMy42MjVoMTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN3pNMjEuNzUgNi4wNDJoLTMuMDJhNC4yMyA0LjIzIDAgMDAtNC4yMyA0LjIyOXYzLjAyaC0yLjQxN3YzLjYyNkgxNC41djguNDU4aDMuNjI1di04LjQ1OGgzLjYyNXYtMy42MjVoLTMuNjI1di0yLjQxN2ExLjIwOCAxLjIwOCAwIDAxMS4yMDgtMS4yMDhoMi40MTdWNi4wNDJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZhY2Vib29rXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRmluZ2VycHJpbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjZmluZ2VycHJpbnRfc3ZnX19jbGlwMClcIiBmaWxsPVwiIzAwMFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjM3My4xNjRjLS42MTkuMTY0LS45MjguOTYtLjU5OCAxLjU2NC4yMDYuMzU2Ljc4NC40MzkgMy40NDQuNTIgMi41NTcuMDgzIDMuNDY0LjIyIDQuNTE2LjY4NyAxLjQ0My42MzEgMi4wODIuNDY2IDIuMDgyLS40OTQgMC0uODIzLS44MDQtMS4zNDQtMi45MjgtMS45Mi0xLjc3My0uNDk1LTUuMjE3LS42ODctNi41MTYtLjM1N3pNMTEuNTY4IDIuMDAyQzguNjIgMy43MDMgNS4wOTMgNy4zMjUgNS4yMzggOC41MDVjLjA0LjMzLjIwNi43NC4zOTEuODc4LjI2OS4yMi42Ni0uMDgyIDEuODU2LTEuNDI3IDEuNjctMS44NjYgMy4xNzYtMy4xMjggNC45MjktNC4xMTYuNjE4LS4zNTYgMS4yNTgtLjc2OCAxLjQwMi0uOTA1LjM3MS0uNDEyLjMxLTEuMjYyLS4xNDQtMS41OTItLjUxNi0uMzU2LS4yODktLjQxMS0yLjEwNC42NTl6TTI3LjYxMSAzLjI5MmMtLjc0Mi41NDgtLjQxMiAxLjQ1NC45NyAyLjY2MSAxLjU0NiAxLjM0NSAzLjI3OCAzLjU2NyA0LjQ1NCA1LjY4Ljg2NiAxLjU2NCAxLjM4MSAxLjg2NiAxLjg3NiAxLjA3LjIyNy0uMzU3LjIwNi0uNTc2LS4xMDMtMS4zNDQtMS4zODItMy40MDMtNi4xODYtOC44MDgtNy4xOTctOC4wNjd6TTE1LjUwNyA0LjkxYy0zLjExNCAxLjEyNi01Ljk4IDMuNDAzLTcuODc3IDYuMzExLTIuMTA0IDMuMTgzLTMuMjM4IDYuOTE1LTMuNzUzIDEyLjIxQzIuNzQzIDM1LjM5NSAzLjY3IDQ3LjM1OCA2LjY0IDU4LjhjMS4xNTUgNC40NzIgMS4zNCA0Ljg4NCAyLjAyIDQuNzc0LjMzLS4wNTUuNTc4LS4yNzQuNjItLjU3Ni4wNC0uMjc1LS4zMS0xLjgzOS0uNzY0LTMuNDU3LTIuNDc0LTguNzgtMy43MTEtMTkuMTUyLTMuNDY0LTI4LjcwMS4zMS0xMC41NjQgMS4zLTE0Ljg3MiA0LjQ3NS0xOS4wNyAyLjY0LTMuNTEyIDUuNzk0LTUuMjQgOS41ODktNS4yNCAzLjgxNCAwIDYuOTkgMS43MjggOS42MDkgNS4yMTMgMS43NTMgMi4zNiAyLjU3OCA0LjE0MyAzLjQwMiA3LjI5OC42NCAyLjUyNS43MjIgNS4wNDkuNDEzIDEyLjQ4NS0uMjY4IDYuMzY2LjM5MiAxMS40NDIgMi4yNDggMTcuMzQxLjc4MyAyLjQ0MiAxLjI1NyAzLjA3MyAxLjg1NSAyLjQxNS40MzQtLjQ2Ny4zOTItMS4yMDgtLjE4NS0yLjY5LS43NDItMS45NzUtMS43MzItNi4zMzgtMi4xMDMtOS4zMjgtLjI2OS0yLjE2OC0uMzEtMy41NjgtLjE2NS03LjYwMS4yNDctNy4wOC4xODUtOS44NzgtLjIwNy0xMS45MDgtMS4zODEtNi45MTUtNS4wOTMtMTIuMTgzLTEwLjEyNS0xNC40Ni0yLjI4OC0xLjAxNi02LjA2Mi0xLjIwOC04LjM1MS0uMzg0elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuMTg3IDkuMTM2Yy0yLjQxMi43OTYtNS43MzIgMy42NzctNS41ODggNC45MTIuMDQxLjMwMS4yMDYuNjg1LjM5Mi44MjMuMjY4LjIyLjY0LS4wMjggMS43NTMtMS4xMjUgMi4yMDYtMi4xOTUgNC44ODctMy4yNjYgNy4zNC0yLjkwOSAxLjAzMi4xNjUgMS4xNzYuMTEgMS4zODItLjM4NC4yOS0uNzEzLjI5LS43NjgtLjEwMy0xLjI2Mi0uMzkyLS41NDktMy41NDYtLjU3Ni01LjE3Ni0uMDU1ek0yMy4yODEgMTAuMzE2Yy0uMDgyLjA4Mi0uMTQ0LjQ2Ni0uMTQ0Ljc5NiAwIC40NjYuMjg4Ljg1IDEuMTU0IDEuNTA5IDIuMjkgMS43MjggNC41MTcgNS42NTIgNC45NSA4LjY0My4xODUgMS4yNjIuODA0IDEuNzI4IDEuMzYuOTg4LjM5Mi0uNDk0LjM5Mi0uNjA0LjA4My0xLjk0OC0uMzkyLTEuNzg0LTEuMTk2LTMuODk3LTIuMDgzLTUuNTQzLTEuNTI2LTIuNzE2LTQuNjYtNS4zNS01LjMyLTQuNDQ1ek0zLjE3NiAxMS40MTNjLS44ODcgMS42NzQtMS45NiA0Ljk5NC0yLjQzNCA3LjQzNi0uNjE4IDMuMjM4LS42MzkgNC4zMzUtLjA4MiA0LjcyLjUzNi4zODQgMS4yMzctLjUyMiAxLjIzNy0xLjYyIDAtMS40MjYgMS4wMzEtNS42MjQgMS45OC03LjkyOS43NDItMS44MzguODY2LTIuMzYuNy0yLjc5OS0uMzA4LS43NjgtLjkyNy0uNjg2LTEuNDAxLjE5MnpNMTYuMTA1IDEzLjc3M2MtMS42OS45MzMtMi41MzYgMS43MjktMy40ODUgMy4xMjgtMS43NzMgMi42ODktMi4zNzEgNS45LTIuNjE5IDEzLjkzOS0uMzMgMTEuNjYxIDEuNzMyIDIzLjg5OSA1Ljc3NCAzNC4yOTguOTA3IDIuMzA1IDEuMTU1IDIuNzQ0IDEuNTY3IDIuNzQ0IDEuMDEgMCAxLjAxLS43NDEtLjAyLTMuMzQ4LTIuNDU0LTYuMTczLTQuMzUxLTEzLjkzOS01LjIxNy0yMS4zNDctLjcyMi02LjAzNi0uNTk4LTE2Ljk4NC4yNDctMjEuMjY1LjU1Ny0yLjkwOCAyLjEyNC01LjE4NiA0LjIyNy02LjIgMS4zNC0uNjYgMy43MzMtLjU3NyA1LjE5Ny4xNjQgMi4yMjcgMS4xMjUgNC4wODMgNC4wODggNC4zOTIgNy4wMjQuMDYyLjcxMyAwIDMuNDAyLS4xNDQgNi4wMS0uMjA3IDMuNzU4LS4yMjcgNS40ODctLjAyIDguMjg1LjUxNSA3LjY1NiAyLjEyMyAxNC40NiA0Ljg4NiAyMC43MTcuOTI4IDIuMTEyIDEuMjc5IDIuNTI0IDEuODM1IDIuMjUuNjQtLjMzLjUxNi0xLjE1My0uNTM2LTMuNTY3LTMuNzExLTguNTA2LTUuMjE3LTE4LTQuNTE2LTI4LjI2Mi4zMy00LjYzNy4xNjUtNi4zOTMtLjgyNC05LjA4Mi0uNzY0LTIuMDMtMi4zOTMtNC4xMTYtNC4wODMtNS4xODYtMS4wMS0uNjU5LTEuNDg1LS43NjgtMy4zNDEtLjg1LTEuODk3LS4wODMtMi4zMS0uMDI4LTMuMzIuNTQ4ek0zNS4yIDE1LjIyN2MtLjE4Ni4yNDctLjI2OC42NTktLjIwNi45MDYuNzIyIDIuNDcgMS4xNzUgNS40MzMgMS4yNzggOC4zOTYuMTI0IDMuMjM4LjI2OCAzLjk3OS44MDUgMy45NzkuNTk4IDAgLjkwNy0uODUxLjkwNy0yLjU1Mi0uMDItNS4xMDQtMS4yNTgtMTEuMTY4LTIuMjQ4LTExLjE2OC0uMTAzIDAtLjM1LjE5Mi0uNTM2LjQ0ek04Ljk5IDE2LjM4Yy0xLjA1MS45MDUtMi4wNCA2LjY5NS0yLjE4NSAxMi43ODYtLjA2MiAxLjc4NCAwIDIuMTk1LjMxIDIuNDcuMjQ3LjIxOS40NTMuMjE5LjcgMCAuMjg5LS4yNDcuNDEzLTEuMDE2LjYxOS0zLjg0Mi4zMy00Ljc3NC42MTktNi44MDUgMS4yMTctOC43OC41OTgtMi4wMDMuNTk4LTIuMTk1LjEwMy0yLjU4LS40NzUtLjMyOS0uNDc1LS4zMjktLjc2My0uMDU0elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTguOTkyIDE3LjgzNGMtLjU1Ny43NC0uMjA2IDEuNTEuNzg0IDEuNzU2IDEuMTk1LjI3NCAyLjIyNyAxLjMxNyAyLjc0MiAyLjc0NC40MzMgMS4xOC40NTQgMS41MzYuMzMgNC4xOTgtLjEyNCAzLjAxOC0uMDIgMy42MjIuNzIyIDMuNjIyLjU3NyAwIC43ODMtLjgyMy45MjgtMy43Ni4xNDQtMy4wMTcuMDItMy45MjMtLjkyOC01LjkyNi0uNjgtMS4zNzItMS45MTgtMi40OTctMy4yNzktMi45MDgtLjc4NC0uMjItLjk0OS0uMTkyLTEuMy4yNzR6TTE1LjgxNiAxOC45MDRjLS44MjUuNzEzLTEuNjkgMi41MjQtMS45MzggNC4xMTYtLjMxIDEuOTQ4LS42OCA3LjMyNi0uNTk4IDguOTE3LjA2MiAxLjE4LjEyNCAxLjM3Mi41MzYgMS40NTUuODQ1LjE2NCAxLjA3Mi0uMzg1IDEuMDcyLTIuNjYyIDAtMS4xNTIuMTQ1LTMuNDMuMzEtNS4wNDkuMzA5LTMuMDczLjctNC4zOSAxLjUyNi01LjA3Ni41MzYtLjQxMS41NTYtMS41OTEuMDYxLTEuOTQ4LS4yODgtLjE5Mi0uNTM2LS4xMzctLjk2OS4yNDd6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xOC4yOSAyMS44OTVjLTEuMjM2LjY4Ni0xLjUwNSAyLjExMy0xLjY3IDkuNDk0LS4yNjggMTAuMzk5IDEuMjE3IDE5LjU5IDQuNjYgMjguODEgMS44NzcgNS4wNDkgMi42NCA2LjU4NSAzLjI4IDYuNTg1Ljk5IDAgLjk5LS43NC0uMDYyLTMuMDQ2LTIuMDgzLTQuNjM3LTMuOTgtMTAuNTYzLTQuOTUtMTUuNTAyLTEuMDkyLTUuNzA3LTEuMjU3LTcuNi0xLjIzNy0xNS4wNjQgMC03LjIxNi4xNjUtOS4xMzcuNzQzLTkuMjc0LjU1Ni0uMTM3Ljc2My43NC41MzYgMi41NTItLjI2OCAyLjM4Ny0uMjY4IDExLjE0LjAyIDEzLjg1Ni41OTkgNS42NTIgMS41ODggMTAuNDU0IDMuMTM1IDE1LjMzOCAxLjAzMSAzLjIzOCAyLjY2IDcuMzI2IDMuNjMgOSAuNTU2IDEuMDE1IDEuMTc1IDEuMTggMS40ODQuNDEyLjIyNy0uNTc3LjI0Ny0uNDk0LTEuNDIzLTQuMzA4LTIuOTktNi44MDUtNC44NjYtMTQuODcyLTUuNDAzLTIzLjI5NS0uMTg1LTMuMDE5LS4xODUtNC44NTcuMDQyLTguNjk5LjI4OC01LjU0Mi4yMjctNS45NTQtMS4xMzQtNi43MjItLjc4NC0uNDM5LTEuMDUyLS40MzktMS42NS0uMTM3ek0yOS44OCAyNS4wNzhjLS40MzMuNTc2LS42NiAzLjg5Ni0uNjE5IDkuMTkyLjA0MSA1LjQzMi4xNjUgNi4xNzMgMS4wMSA2LjE3M2guNTk5bC0uMDgzLTQuODAxYy0uMDQxLTIuODgyLjA0MS01LjkuMTg2LTcuNTE5LjI0Ny0yLjU1MS4yNDctMi43NDQtLjEwMy0zLjEtLjQ5NS0uNDY3LS42Mi0uNDQtLjk5LjA1NXpNLjM3MSAyNi4yMDNjLS40OTUuNjMtLjQ5NSAxMi40ODQgMCAxMy4xMTUuMzcxLjUyMi40MTMuNTIyLjkyOC4xNjUuMzcxLS4yNzQuMzkyLS42NTkuMzkyLTYuNzIyIDAtNi4wNjQtLjAyLTYuNDQ5LS4zOTItNi43MjMtLjUxNS0uMzU3LS41NTctLjM1Ny0uOTI4LjE2NXpNMzYuNDc4IDMwLjg5NWMtLjI2Ny4zMjktLjE2NCAxMC4zNzEuMTA0IDEwLjcyOC4zNy40OTQuOTQ4LjM4NCAxLjE5Ni0uMTkyLjMwOS0uNzk2LjI2OC05Ljk4OC0uMDQyLTEwLjQtLjI2OC0uMzU2LTEuMDMtLjQzOC0xLjI1OC0uMTM2elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjIuNzA0IDMyLjkyNWMtLjQxMyAxLjA3LjMwOSA5LjYzMSAxLjE1NCAxMy41ODIuMzEgMS40MjcuNjYgMS44NjYgMS4yMTcgMS41OTIuNDk1LS4yNDcuNTU3LS45MDYuMjQ4LTIuNTI1LS41MTYtMi42MzQtLjkyOC02LjM2NS0xLjA3My05LjUyLS4wODItMS42NzUtLjIyNy0zLjE4NC0uMzUtMy4zNzYtLjMxLS41MjEtLjkyOC0uMzg0LTEuMTk2LjI0N3pNNi44NDYgMzQuNDA3Yy0uMTg1LjI3NC0uMjA2IDEuMTI1LS4xMDMgMy4wNzMuMTY1IDMuMS44MjUgOS42MyAxLjEzNCAxMS4xMTMuMjQ4IDEuMTguOTA3IDEuNjE4IDEuNDAyLjk2LjI2OC0uMzg0LjI2OC0uNjg2LS4wNC0yLjg1NC0uNTM3LTMuODE0LS43MjMtNS43NjItLjg2Ny05LS4wODItMS42NzMtLjIyNy0zLjE4Mi0uMzUtMy4zNzQtLjI2OS0uNDQtLjg2Ny0uNDEyLTEuMTc2LjA4MnpNMTMuNTY5IDM2LjA4Yy0uMzkyLjQ5NS0uMzUgMS4zMTguMjA2IDYuNzIzLjcgNi43NSAxLjQ2NCA5LjMzIDIuNDU0IDguMzY5LjM3LS4zNTcuMzctLjQ2Ny0uMTY1LTMuNzA0LS4zMS0xLjgxMS0uNzAxLTUuMDIyLS44ODctNy4xMDctLjE4NS0yLjA1OC0uMzkyLTMuOTUxLS40NzQtNC4xNy0uMjQ4LS42MDQtLjc0My0uNjYtMS4xMzQtLjExek0uMjY4IDQyLjMwOWMtLjQ3NC43NjguMTY1IDYuMzM4IDEuMTE0IDkuNjg2LjcgMi41MjQgMS4wMyAzLjEyOCAxLjY1IDMuMTI4LjcyMSAwIC44NjUtMS4wMTUuMzUtMi4zODctLjc2My0xLjk0OC0xLjMtNC42NjUtMS41NDctNy42ODMtLjI0Ny0yLjg4MS0uMjY4LTIuOTYzLS43ODMtMy4wNDYtLjI4OS0uMDU1LS42NC4xMS0uNzg0LjMwMnpNMzAuMjkyIDQyLjk0Yy0uMDgyLjExLS4xNDQuNDY3LS4xNDQuODIzIDAgMS4yMzUgMS40ODUgNi42NCAyLjY0IDkuNTc2Ljk5IDIuNTUyIDEuMjU3IDMuMDE5IDEuNjcgMy4wMTkgMS4wMyAwIC45NjktLjY4Ni0uMjY4LTQuMDA2LS42NC0xLjczLTEuNTA2LTQuNTU1LTEuOTM5LTYuMjg0LS43LTIuODUzLS44MjUtMy4xNTUtMS4yOTktMy4yMzgtLjI2OC0uMDU0LS41NzcgMC0uNjYuMTF6TTI1LjA1NSA1MC42MjNjLS4xODYuNjMxLjIyNiAyLjE0IDEuNTA1IDUuNjI1IDEuMzIgMy42MjIgMi43NDIgNi43NSAzLjExNCA2Ljk0Mi40MTIuMjIuODY2LS4xMS45OS0uNjg2LjA4Mi0uMzMtLjIyOC0xLjI5LS45MDgtMi43NzEtLjk3LTIuMTQtMi4xMjQtNS4yNjktMy4wOTMtOC4yNi0uMzMtMS4wNy0uNDk1LTEuMjg5LS45NDktMS4yODktLjI4OCAwLS41NzcuMTkyLS42Ni40Mzl6TTguOTUgNTIuMTZjLS4zNzIuNDkzLS4zMy44NS42NiA0LjcxOSAxLjEzNCA0LjQ0NSAyLjgwNCA5LjQ5NCAzLjI3OCA5Ljg3OC40OTUuNDExIDEuMDcyLS4xMzcgMS4wNTItLjk2LS4wMi0uMzU3LS40NTQtMS45MjEtLjk5LTMuNDMtLjUzNi0xLjUzNy0xLjQwMi00LjUtMS45MzgtNi41ODYtLjc4NC0zLjEtMS4wNTItMy44NDEtMS4zODItMy44OTYtLjIyNy0uMDI3LS41MzYuMDgyLS42OC4yNzV6TTE2LjAyMyA1NC4xMDhjLS4xNDUuNzQuOTA3IDQuMzA4IDIuNjE4IDguODkgMS40MjMgMy44MTQgMi4xODYgNS4yMTMgMi43MDIgNC45MzkuNzQyLS4zODUuNjE4LTEuMDctLjg0Ni00LjgzLS44MDQtMi4wNTctMS44MTQtNC45MTEtMi4yNDctNi4zMzgtLjk5LTMuMjM4LTEuMDEtMy4yOTItMS42MDktMy4yOTItLjM1IDAtLjUzNi4xOTItLjYxOC42M3pcIiAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImZpbmdlcnByaW50X3N2Z19fY2xpcDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoMzh2NjNIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZpbmdlcnByaW50XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnSG9tZXBhZ2VPcHRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIuMDkgMS42NDNjLTEuMDI2LjEzLTEuODg3Ljk5Ni0yLjAzNCAyLjA1LS4wNzQuNDctLjA2OCAxLjcyOCAwIDIuMjI2QTIuNDc2IDIuNDc2IDAgMDAxLjQxIDcuNzc3bC4zNzQuMTgxSDI3LjIxNWwuMzc0LS4xODFhMi40NzYgMi40NzYgMCAwMDEuMzU0LTEuODU4Yy4wNjgtLjQ4Ny4wNjgtMS42NzcuMDA1LTIuMTkyYTIuNDA1IDIuNDA1IDAgMDAtMi4wOS0yLjA5Yy0uNDUzLS4wNTctMjQuMzEtLjA1Ny0yNC43NjkuMDA2ek0xLjgzIDExLjM1N2MtLjQ2LjEyNC0uNzQ4LjI5NC0xLjA5NC42NDUtLjU3Ny41NzItLjczNiAxLjExLS43MzYgMi40NyAwIC45MjMuMDc0IDEuNDIxLjI2IDEuODE4LjE4Ny4zOTYuNjE4Ljg2Ny45NyAxLjA2LjY0LjM0NS0uMjE2LjMyMiAxMy4yNy4zMjIgMTMuNDg2IDAgMTIuNjMuMDIzIDEzLjI3LS4zMjMuMzUyLS4xOTIuNzgyLS42NjMuOTctMS4wNi4xODYtLjM5Ni4yNi0uODk0LjI2LTEuODE3IDAtLjkyMy0uMDc0LTEuNDIyLS4yNi0xLjgxOC0uMTg4LS4zOTctLjYxOC0uODY3LS45Ny0xLjA2LS42NC0uMzQ1LjIyMi0uMzIyLTEzLjI5OC0uMzE3LTEwLjQ1NiAwLTEyLjM5My4wMTItMTIuNjQzLjA4ek0xLjY5OSAyMS4wNjVjLS40MTQuMTMtLjcwOC4zMjMtMS4wMzcuNjgtLjM0LjM2Mi0uNTI3Ljc2NC0uNjA2IDEuMjgtLjA2OC40OTItLjA3NCAxLjc1IDAgMi4yMjZhMi40MDMgMi40MDMgMCAwMDIuMDI4IDIuMDVjLjI1NS4wNCA0LjQxMi4wNTcgMTIuNjcuMDQ1bDEyLjI5MS0uMDE3LjMzNC0uMTI0YTIuNTA4IDIuNTA4IDAgMDAxLjQ1LTEuNDc5Yy4xMDItLjI2Ni4xMy0uNDgxLjE1My0xLjIyOS4wNTEtMS41NDYtLjA5Ni0yLjE3NS0uNjY4LTIuNzc1LS4zNC0uMzU3LS42MzQtLjU0NC0xLjA2NS0uNjc0LS4yODMtLjA4LTEuNDc4LS4wOS0xMi43NzItLjA4NS0xMS43NTkgMC0xMi40ODQuMDA1LTEyLjc3OC4xMDJ6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdIb21lcGFnZU9wdGlvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0xpbmtkbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIuOTU4IDMuNjI1YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN2gxNi45MTZ6bS0uNjA0IDE4LjczVjE1Ljk1YTMuOTQgMy45NCAwIDAwLTMuOTM5LTMuOTRjLTEuMDI3IDAtMi4yMjMuNjMtMi44MDMgMS41NzJWMTIuMjRIMTIuMjR2MTAuMTE0aDMuMzcydi01Ljk1N2MwLS45My43NDktMS42OTIgMS42OC0xLjY5MmExLjY5MSAxLjY5MSAwIDAxMS42OSAxLjY5MnY1Ljk1N2gzLjM3MnpNOC4zMTQgMTAuMzQyYTIuMDMgMi4wMyAwIDAwMi4wMy0yLjAzIDIuMDM3IDIuMDM3IDAgMDAtMi4wMy0yLjA0MkEyLjA0MiAyLjA0MiAwIDAwNi4yNyA4LjMxM2MwIDEuMTI0LjkxOSAyLjAzIDIuMDQyIDIuMDN6bTEuNjc5IDEyLjAxMVYxMi4yNEg2LjY0NnYxMC4xMTRoMy4zNDd6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xpbmtkblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01haWwocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI0LjE2NyA0LjgzM0g0LjgzM0EyLjQxMyAyLjQxMyAwIDAwMi40MyA3LjI1bC0uMDEyIDE0LjVhMi40MjQgMi40MjQgMCAwMDIuNDE2IDIuNDE3aDE5LjMzNGEyLjQyNCAyLjQyNCAwIDAwMi40MTYtMi40MTdWNy4yNWEyLjQyNCAyLjQyNCAwIDAwLTIuNDE2LTIuNDE3em0wIDE2LjkxN0g0LjgzM1Y5LjY2N2w5LjY2NyA2LjA0MSA5LjY2Ny02LjA0MVYyMS43NXpNMTQuNSAxMy4yOTJMNC44MzMgNy4yNWgxOS4zMzRMMTQuNSAxMy4yOTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01haWxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZWRpYShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkuMzUgMTAuMDRBNy40OSA3LjQ5IDAgMDAxMiA0QzkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDRBNS45OTQgNS45OTQgMCAwMDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZWRpYVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01ldGFEYXRhKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyIDM3LjMwN2wxMi41MTIgMjAuNzRjLjA1Ni0uMTUuMTE5LS4yOS4xODgtLjQyMSA1LjA0MS04LjM1OCAxMC4wODQtMTYuNzEzIDE1LjEyOC0yNS4wNjUuMTc5LS4yNzIuMjc2LS42NjIuMjY0LTEuMDY0LS4wMTEtMi40MTkgMC00LjgzNyAwLTcuMzEzLS4xMTcuMDg0LS4yMjIuMTUxLS4zMjMuMjMzLS44NDIuNjgxLTEuNzEzIDEuMjQ4LTIuNjUxIDEuNDMtLjIxOS4wMzItLjQwOC4yNjItLjQ5My41OTctLjgwMiAyLjM3Mi0yLjA1MyAzLjU5Mi0zLjY3NiAzLjU1LTEuNzAzLS4wNDEtMi45NjItMS40MTUtMy43LTMuOTctLjg4LTMuMDQ3LS4xOTItNi44MDIgMS41NDItOC42MTcgMS43NTUtMS44MzUgNC4wNTgtMS4yMyA1LjM4NCAxLjQxNi4yNDMuNDk1LjQzIDEuMDE4LjI5IDEuNzAxLS4wODMuNDY1LS4zMDMuODI2LS41ODQuOTU4LS4yODIuMTMyLS41ODQuMDE2LS44MDEtLjMwNi0uMjItLjMxNC0uMzk3LS43MTItLjYyNS0xLjAxLS43NjgtMS0xLjYxMi0xLjE5Mi0yLjQ5Mi0uNDY1LS45My43NzItMS4zNzUgMi4wNjUtMS4zMDYgMy43NzkuMDY2IDEuNTk3LjU5NyAyLjcwNiAxLjQ3NCAzLjMyLjkxNi42NDggMS45ODEuMTk4IDIuNi0xLjA5OC0uNzc0LS4yOTctMS40NzgtLjgzNy0yLjAwNS0xLjhhMTIuNTkgMTIuNTkgMCAwMS0uOTUzLTIuMzI0Yy0uMTk1LS42MjguMDUzLTEuMzk1LjQyMS0xLjcwNy4zODEtLjMyOC44NS0uMTI4IDEuMDg5LjQ2NS4zMzIuODguNjc2IDEuNzAyIDEuMjYyIDIuMTc0Ljg4NC42OTggMS43OTcuNjIgMi43MDcuMjg0IDEuNzU0LS42MzUgMy4xODgtMi4xOTMgNC40My00LjI1NSAxLjM3My0yLjI3MiAyLjM1OS00LjkxMyAyLjY2Ni04LjEzOC4xOS0xLjk4NS4wMjItMy44NzEtMS4wMy01LjE3NS0uODU0LTEuMDYtMS44NDItMS4xMS0yLjg1Mi0uNzk2LTEuMTg0LjM5Ny0yLjMgMS4yMTktMy4yNzIgMi40MDdhNS4wOSA1LjA5IDAgMDEtLjQzOC40NzljLS40LjQxNC0uOTI0LjIyNy0xLjE4Ni0uNDIyLS4yNjItLjY0OS0uMTY1LTEuNTI0LjIxOC0xLjk3OGExNS4yNjUgMTUuMjY1IDAgMDExLjY3Mi0xLjhjMS40MDMtMS4yMjUgMi44OTUtMS45NjQgNC41MTItMS43MzQgMi4zNzMuMzQ3IDQuMDc5IDMuMzQgNC4xOTEgNy4yOTIuMDk2IDMuMzcxLS42MzMgNi4yOTgtMS43NCA5LjAxNi0uNjYxIDEuNi0xLjQ1NSAzLjAzOC0yLjM1OSA0LjI3MS0uMTE1LjE5OC0uMTguNDYtLjE4Mi43MzUtLjAxMSAzLjIxNS0uMDExIDYuNDMxIDAgOS42NS4wMTQuNjYtLjE0NSAxLjMtLjQzNSAxLjc1NS01LjQxMyA4Ljk1LTEwLjgyMiAxNy45MDMtMTYuMjI4IDI2Ljg2MS0uNTYuOTMtMS4wMDEuOTMtMS41NjIgMC00LjQ4Mi03LjQyMy04Ljk2Mi0xNC44NTUtMTMuNDQtMjIuMjk1LS41NzMtLjk0OS0uNTcyLTEuNjcyLjAwNi0yLjYzMiA1LjM5Ni04Ljk0IDEwLjc5Mi0xNy44ODggMTYuMTg5LTI2Ljg0My4yNy0uNDg2LjY1NC0uNzU1IDEuMDUzLS43MzcgMi43NDcuMDIyIDUuNDk0LjAyMiA4LjI0MiAwIC40LS4wMjIuNzg2LjI0MyAxLjA1OS43MjggMS4zMjggMi4yMzcgMi42NjUgNC40NTIgNC4wMDIgNi42ODIuMjkxLjQ2MS4zNTYgMS4xOTIuMTU3IDEuNzcyLS4xOTkuNTgtLjYxLjg2My0uOTk5LjY4M2ExLjU2IDEuNTYgMCAwMS0uNDg0LS41NDEgNzcyLjEwMyA3NzIuMTAzIDAgMDEtMy42MDItNS45NDhjLS4xNS0uMjc1LS4zNjctLjQyNC0uNTktLjQwNC0yLjQ0NiAwLTQuODkgMC03LjMzNi4wMi0uMTkuMDEtLjM3Mi4xMjktLjUxNS4zMzgtNS4wOSA4LjQxMi0xMC4xNzQgMTYuODMtMTUuMjU0IDI1LjI1NWwtLjE0NC4yNjd6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjU3NCAzMS4yNjVWMzguNjgzYy0uMDA3LjgxNS0uMzkyIDEuNDgyLS44ODEgMS41MjctLjQ5LjA0Ni0uOTE3LS41NDYtLjk3OC0xLjM1NGE1LjIxMiA1LjIxMiAwIDAxLS4wMTItLjQzMnYtOC40MDhjMC0xLjI2OS4zNTctMS44NjUgMS4xMTItMS44NjdoNS4xMzFjLjQyIDAgLjc1NS4yNDcuOTMyLjkxLjE2My41OTYuMTM5IDEuMjIxLS4xNDkgMS42NTItLjIwNy4zMDUtLjQ2OC40OS0uNzQ0LjUyOS0xLjMxMy4wNTItMi42MjYuMDIyLTMuOTQuMDI1aC0uNDcxek0xOS4xMzYgNDMuNzc5di02Ljk0MmE0LjUyNCA0LjUyNCAwIDAxLjEyNS0xLjEzNWMuMTgzLS42MzguNjEtLjk3NSAxLjAyNS0uODA5LjQxNy4xNDYuNzE4Ljc1Mi43MjUgMS40Ni4wMTcuOTI3LjAwOCAxLjg1NC4wMDggMi43ODF2NS44NzRjMCAxLjMwOC0uMzUyIDEuOTAxLTEuMTMxIDEuOTA0aC01LjE0Yy0uMzg0LjAzOS0uNzQzLS4zMTYtLjkwNS0uODk1LS4xNTgtLjUxLS4xMjQtMS4xMjYuMDg3LTEuNTguMjAxLS40NTkuNTMyLS43MS44NzMtLjY2M2gzLjg3M2wuNDYuMDA1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01ldGFEYXRhXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnT3BlbnNlYUxvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNiAyNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE4Ljg5NSAxNC42ODFjLS4wNDUtLjA0NS0uMTEyLS4wNDUtLjE4LS4wMjJsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwIC4zMS4zMSAwIDAxLjA4OS0uMDY3Yy4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjUtLjM1OSAwLS42MjcuMjkxLS42MjcuNjUgMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNGE1LjE2IDUuMTYgMCAwMC40NDgtLjk0MWMuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1Ny4wNDQtLjAyMi4wMjItLjA5LS4wMjMtLjExMnptLTkuOTk3LS40OTNoMi41NTVjLjA0NSAwIC4wNjgtLjAyMy4wNjgtLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA2N2wtMS4yNTUtLjU4M2MtLjAyMy0uMDIyLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNjcuMDIyLjExMi4wNjcuMTEyek0xMyAwQzUuODI4IDAgMCA1LjgyOCAwIDEzczUuODI4IDEzIDEzIDEzIDEzLTUuODI4IDEzLTEzUzIwLjE3MiAwIDEzIDB6bS0uMDQ1IDIyLjQ1OWMtNS4xNzcgMC05LjM2OS00LjE5Mi05LjM2OS05LjM5MiAwLTUuMTc3IDQuMTkyLTkuMzkxIDkuMzctOS4zOTEgNS4xNzcgMCA5LjM2OCA0LjIxNCA5LjM2OCA5LjM5MS0uMDIyIDUuMi00LjIxNCA5LjM5Mi05LjM2OSA5LjM5MnptNS43Ni03LjhsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwIC4zMS4zMSAwIDAxLjA4OS0uMDY3Yy4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjUtLjM1OSAwLS42MjcuMjkxLS42MjcuNjUgMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNGE1LjE2IDUuMTYgMCAwMC40NDgtLjk0MWMuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1NyAwLS4wNDUtLjAyMy0uMTEyLS4wNjgtLjEzNCAwIDAtLjA2Ny0uMDIzLS4xMzUgMHptLTkuODE3LS40NzFoMi41NTVjLjA0NSAwIC4wNjgtLjAyMy4wNjgtLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA2N2wtMS4yNTUtLjU4M2MtLjAyMy0uMDIyLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNjcuMDIyLjExMi4wNjcuMTEyelwiXG4gICAgICAgIGZpbGw9XCIjMzI5MUU5XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjQ3NiAxMS4yOTZsLTEuMjU1LS41ODJjLS4wMjMtLjAyMy0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDQ0LjAyMi4wODkuMDY3LjA4OWgyLjU1NmMuMDQ0IDAgLjA2Ny0uMDIzLjA2Ny0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDQ0em03LjQxOSAzLjM4NWMtLjA0NS0uMDQ1LS4xMTItLjA0NS0uMTgtLjAyMmwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDBjLjAyMi0uMDIyLjA0NC0uMDQ0LjA4OS0uMDY3LjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NXMtLjYyNy4yOTEtLjYyNy42NWMwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0LjE3OS0uMjkxLjMzNi0uNjI3LjQ0OC0uOTQxLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcuMDQ0LS4wMjIuMDIyLS4wOS0uMDIzLS4xMTJ6XCJcbiAgICAgICAgZmlsbD1cIiMzMjkxRTlcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdPcGVuc2VhTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1FyQ29kZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQ3IDQ3XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNxci1jb2RlX3N2Z19fY2xpcDApXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01Ljg3NSAyNC41NDJoNC42Njd2NC42NjZINS44NzV2LTQuNjY2em0xOC42NjctMTRoNC42NjZ2OS4zMzNoLTQuNjY2di05LjMzM3ptLTQuNjY3IDE0aDkuMzMzdjkuMzMzaC00LjY2NnYtNC42NjdoLTQuNjY3di00LjY2NnptMTQgMGg0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoNC42Njd2NC42NjZoLTQuNjY3djQuNjY3aDQuNjY3djkuMzMzaC00LjY2N3Y0LjY2N2gtNC42NjZ2LTQuNjY3aC05LjMzNHY0LjY2N2gtNC42NjZ2LTkuMzMzaDkuMzMzdi00LjY2N2g0LjY2N3YtNC42NjdoLTQuNjY3di00LjY2NnptOS4zMzMgMTguNjY2di05LjMzM2gtNC42NjZ2OS4zMzNoNC42NjZ6TTMzLjg3NSA1Ljg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2ek01Ljg3NSA1Ljg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2ek01Ljg3NSAzMy44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJxci1jb2RlX3N2Z19fY2xpcDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoNDd2NDdIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1FyQ29kZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1JhcmlibGVMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMC44IDBINS4yQTUuMiA1LjIgMCAwMDAgNS4ydjE1LjZBNS4yIDUuMiAwIDAwNS4yIDI2aDE1LjZhNS4yIDUuMiAwIDAwNS4yLTUuMlY1LjJBNS4yIDUuMiAwIDAwMjAuOCAwelwiXG4gICAgICAgIGZpbGw9XCIjRkVEQTAzXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3Ljk0IDEyLjkwNWMuODItLjIxMyAxLjU0OC0uODI2IDEuNTQ4LTIuMDU3IDAtMi4wNS0xLjc0MS0yLjUyOC0zLjk3Mi0yLjUyOEg2LjYzdjkuMjM0aDMuNzRWMTQuNDJoNC40MzdjLjY4MyAwIDEuMDgzLjI3MSAxLjA4My45NDJ2Mi4xOTJoMy43NHYtMi4zMDhjMC0xLjI1OC0uNzEtMi4wNTEtMS42OS0yLjM0MXptLTMuMDY5LS45NzRIMTAuMzd2LS45MDNoNC41MDFjLjQ5IDAgLjc4Ny4wNjUuNzg3LjQ1MnMtLjI5Ny40NTEtLjc4Ny40NTF6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdSYXJpYmxlTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NhdmluZ3NQaWcocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjMxMS4wNzFjLTMuNTgxLjgyMS01LjkzNyA3LjIxMi00Ljc2NCAxMi45MjUuMTI3LjU5LjIyMiAxLjEwNy4yMjIgMS4xNzggMCAuMDcyLS4zNDkuMzQtLjc2MS42MjUtLjk3Mi42MjUtMi42MyAyLjA4OS0zLjI4NiAyLjg5MmwtLjUwNy42MjUtLjUxNy0uMzc1Yy0uOTcyLS42OTYtMi4zMTQtLjc4NS0zLjIwMi0uMjE0LS4zOC4yNS0xLjIzNiAxLjIzMi0xLjIzNiAxLjQyOCAwIC4wNzIuNDIzIDEuMDkuOTQgMi4yNWwuOTMgMi4xMDYtLjQxMiAxLjA4OWMtLjU0OSAxLjQyOC0xLjE4MyAzLjY3Ny0xLjQyNiA1LjA3bC0uMTkgMS4xMDdoLS40ODZjLS43MTggMC0xLjQ4LjQ0Ni0xLjg4IDEuMTA3LS43MDggMS4xNzgtLjY5OCAxLjAxNy0uNzMgNy45NDQtLjAyIDMuOTEuMDExIDYuNTUyLjA3NCA2Ljk2Mi4xNDguOTEuNjk4IDIgMS4yMTUgMi4zOTIuMzcuMjg2LjcwOC4zNCAyLjI3Mi4zNGgxLjg0OWwuOTUgMS42NzhjLjUyOS45MSAxLjMzMiAyLjEyNCAxLjc4NiAyLjY5NWwuODEzIDEuMDE4djIuOTgxYzAgMi43MzIuMDIxIDMuMDE3LjI0MyAzLjY2LjQxMiAxLjIzMi43MDggMS4zNzUgMi43MzcgMS4zMjEgMS41OTUtLjA1MyAxLjc4NS0uMDkgMi4wNi0uNDI4LjQzMy0uNTU0LjY3Ni0xLjM1Ny43NC0yLjVsLjA2My0xIC4zMjcuMDljMS40MDUuNDEgMy4xOS41MzUgNC40OS4zMzkuNzYtLjEyNSAxLjQ0OC0uMjY4IDEuNTMyLS4zMjEuMTA2LS4wNzIuMTU4LjE3OC4xOSAxLjA3LjA0MiAxLjI1LjIyMiAxLjgyMi43NiAyLjUuMjY1LjM0LjQzNC4zNzUgMi4xMDMuMzc1IDEuNzMzIDAgMS44MzgtLjAxOCAyLjE2Ni0uNDEuNjEzLS43NS42OTctMS4yMzIuNzYtNC40NDZsLjA1My0yLjg5Mi43OTMtLjkyOGMxLjc1My0yLjA4OSAzLjUyOC01LjUxNyA0LjQ0Ny04LjYwNSAxLjE3My0zLjg5MiAxLjYzOC04LjgwMSAxLjIxNS0xMi43NjRsLS4xMzctMS4zMDMuNTA3LS40MjljLjU3LS41IDEuMjI2LS43MTQgMS42MjctLjU1My40MDIuMTc4LjMxNy4zNzUtLjE4LjM5Mi0xLjE5My4wNTQtMS4yNTcgMi43MTQtLjA3MyAzLjMwMy4zNy4xOTcuNDU0LjE3OS43MDctLjEyNS4xNTktLjE5Ni4zNi0uNjA3LjQ0NC0uOTI4LjE5LS42NzguMi0uNjc4Ljc2LS4xOTcuMzgxLjMyMi40NDQuMzQuNTgyLjEwOC4yNDMtLjQxMS4wNzQtLjk0Ny0uNDQ0LTEuMzU3LS4yNjQtLjIxNC0uNTE3LS4zNzUtLjU4LS4zNzUtLjA1NCAwLS4xMDctLjA5LS4xMDctLjE5NiAwLS41LS4zOC0xLjQ0Ny0uNjY1LTEuNzE0LS40NDQtLjM3NS0xLjM3NC0uMjE1LTIuMTQ1LjM3NS0uMzI3LjI1LS42MTIuNDY0LS42MjMuNDY0LS4wMjEgMC0uMDc0LS4yNjgtLjExNi0uNTktLjE0OC0xLjE0Mi0uODk4LTMuNzg0LTEuNTY0LTUuNDgtMS42Ny00LjIzLTQuMjQ3LTcuNjc2LTcuMTQyLTkuNTY5LS41NDktLjM1Ny0xLjAxNC0uNjYtMS4wMzUtLjY3OC0uMDEtLjAzNi4wNzQtLjUxOC4xOS0xLjEwNyAxLjAzNi01LjAzNC0uNjU1LTEwLjc2NS0zLjY2Ni0xMi40NzktLjgzNC0uNDY0LTEuODQ5LS42MjQtMi42NzMtLjQ0NnptMS43OTYgMi42MDdjMS4zMzIuNSAyLjQxIDIuMDM1IDMuMDMzIDQuMjg0LjI2NC45NDYuMjk1IDEuMjUuMjk1IDIuOTI4IDAgMS43NS0uMDIgMS45NDYtLjM0OCAzLjA3LTEuNjQ4IDUuNzEzLTYuMzgxIDUuNzEzLTcuOTc3IDAtLjMxNy0xLjEwNi0uMzM4LTEuMzM5LS4zMzgtMy4wNyAwLTEuNjc4LjAzMi0xLjk4Mi4yOTYtMi45MjguNjAyLTIuMTc4IDEuNjI3LTMuNjc3IDIuOTA1LTQuMjMuODg4LS4zOTQgMS4yMjYtLjQxMiAyLjEzNC0uMDU0em0tNC4zNTIgMTUuMzdjLjAyIDAtLjM0OS4yMzItLjgxNC40ODItMS44NyAxLjAxOC0yLjQ5MyAxLjgyMS0yLjIxOCAyLjg1Ny4wNjMuMjMyLjI1My41MzUuNDAxLjY0Mi4yNDMuMTYxLjQxMi4xMDcgMS4xODMtLjQ2NCAyLjc3OS0yLjAxNyA2LjE3LTIuMjMxIDguOTYtLjU3MS40OTYuMzAzIDEuMTQuNzMyIDEuNDE1Ljk4Mi42MjMuNTE3Ljk4Mi40ODIgMS4yNjgtLjE0My40ODYtMS4xMDctLjIzMy0yLjA4OS0yLjMyNS0zLjIzMS0uNjAyLS4zMjItMS4wNzctLjYyNS0xLjA3Ny0uNjc5LjAxLS4wNTMuMjQzLS40NDYuNTI4LS44NzRsLjUxOC0uNzg2IDEuMDU2LjY0M2M0LjA0NyAyLjQxIDcuMjU4IDcuOTk4IDguMzA0IDE0LjQ2LjUyOCAzLjIzMS40NjUgNy4yMy0uMTY5IDEwLjQ5Ny0uODQ1IDQuMzM4LTIuNjIgOC4xNTktNS4wMjkgMTAuODU0bC0xLjEzIDEuMjY4LS4wMSAzLjI0OS0uMDExIDMuMjY3LTEuMzk1LjA1My0xLjQwNS4wNTR2LTIuMzM5YzAtMS4yNjctLjAzMi0yLjMyLS4wNzQtMi4zMi0uMDUzIDAtLjM0OS4xMjQtLjY2Ni4yNjctLjg4Ny40MS0yLjg1Mi44MDMtMy45NC44MDMtMS4xMyAwLTIuNzM2LS4zNzQtMy45Mi0uODkyYTI4LjkzIDI4LjkzIDAgMDAtLjg2Ni0uMzU3Yy0uMDIxIDAtLjA1MyAxLjAxNy0uMDYzIDIuMjY3bC0uMDMyIDIuMjg1LTEuNDA1LjA1NC0xLjQwNS4wNTMuMDIxLTMuNDEuMDEtMy40MS0uODU1LS45ODFjLTEuMDM2LTEuMjE0LTIuMTI0LTIuODkyLTIuODc0LTQuNDQ1bC0uNTUtMS4xNkg0LjA2NGMtMi4wMTcgMC0yLjEyMy0uMDE5LTIuMzU2LS4zOTNsLS4yNDMtLjM3NVY0MC4yMmMwLTcuMzkxLS4xMzctNi44MiAxLjU5Ni02Ljk0NWwxLjE4My0uMDkuMjQzLTEuNTdjLjQzMy0yLjczMiAxLjExLTQuOTk5IDIuMzE0LTcuNzMuMTQ3LS4zNC4xMTYtLjQ2NC0uNjI0LTIuMTQyLS40NTQtMS0uNzUtMS44NC0uNjk3LTEuOTI4LjE4LS4zMDQgMS4yNzguMTA3IDIuMDYuNzY3bC43OTIuNjYuNzkzLS45OTljLjk3Mi0xLjIxNCAyLjQ0LTIuNTUzIDMuNjQ1LTMuMzJsLjg5OC0uNTkuNTI4Ljg0Yy4yODUuNDY0LjUzOS44NTYuNTYuODc0em0yMS4wODcgMTQuMjY0Yy4xMjcuMDkuMTM3LjE3OS4wNDIuNTM2LS4xMjcuNDQ2LS4xOC41LS40NDQuMzIxLS4xNjktLjEwNy0uMjMyLS42MjUtLjA5NS0uODM5LjA4NS0uMTYuMjc1LS4xNi40OTctLjAxOHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04LjU3NSAzMC4wMWMtLjEzOC4wNTMtLjM4LjMyLS41Ni42MDYtLjM2LjYyNS0uNDM0IDEuNjA3LS4xNyAyLjQ2NC4yODYuOTI4IDEuMjA1IDEuMjE0IDEuNzY1LjUzNSAxLjAzNS0xLjI1LjI0My0zLjk5OS0xLjAzNS0zLjYwNnpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NhdmluZ3NQaWdcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTbWFydENvbnRyYWN0xLBjb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2NFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMuMDIzIDEuMzY4QzEuODY0IDIuMDg4LjMzMyA1LjAyNS4wNyA3LjEzYy0uMzM2IDIuMzgyLjU2MSA0Ljk4NiAyLjA1NiA2LjE1LjcxLjU1MyAyLjEzLjgzIDQuMTEuODNoMi45OXYyLjQ5M2MwIDEuMzg1LjE4NyAyLjQ5My4zNzQgMi40OTMuNDg1IDAgLjQ4NS0xMS42MzQgMC0xMy41MTctLjE4Ny0uNzc2LS42NzMtMS44ODQtMS4xMjEtMi41NDlMNy43MyAxLjkyMmgxMy4xMTdjMTEuNjk2IDAgMTMuMjI4LjExMSAxNC4yLjk0MiAyLjAxOCAxLjc3MyAyLjIwNSAzLjIxMyAyLjIwNSAxNy4yODUgMCA4LjE0NC4xNSAxMi43OTcuMzczIDEyLjc5Ny4yMjQgMCAuMzc0LTQuNTk4LjM3NC0xMi43NDIgMC0xMy44NS0uMTUtMTUuMTI0LTIuMDU1LTE3LjcyOGwtMS4wMS0xLjM4NUwxOS4zOS45ODFjLTguNTU3LS4wNTYtMTUuOTE5LjExLTE2LjM2Ny4zODd6bTMuOTYgMS4zODVjMS40OTYgMS4xNjQgMi4yNDMgMy40OSAyLjI0MyA3LjIwMnYzLjA0N0g3LjU0NGMtMS42NDQgMC0xLjY0NCAwLTEuMzA4LTEuNDQuMjI1LS43NzYuMjYyLTEuOTk0LjE1LTIuNzctLjIyNC0xLjM4NS0yLjI0Mi0zLjM4LTIuNjktMi42Ni0uMTUuMjIyLS4wMzguNS4yNi42NjYuNzg2LjM4NyAxLjkwNyAyLjIxNiAxLjkwNyAzLjE1NyAwIC40NDQtLjMzNyAxLjMzLS43ODUgMS45OTUtLjk3MiAxLjQ0LTIuMzkyIDEuMDUyLTMuNTg3LS45NDJDLjQ4IDkuNC40MDcgOC4wMTYgMS4xOSA1LjU3OCAyLjIzOSAyLjI1NiA0Ljc4IDEuMDM3IDYuOTg1IDIuNzU0elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjQ0NyAxMS44OTRjMCAuMzMzIDIuMjQyLjU1NCA1Ljk0Mi41NTQgMy41ODcgMCA2LjA1NC0uMjIxIDYuMjAzLS41NTQuMTUtLjM4Ny0xLjk0My0uNTU0LTUuOTQyLS41NTQtMy44ODYgMC02LjIwMy4yMjItNi4yMDMuNTU0ek0xMi45NjMgMTYuODhjMCAuMzMzIDEuMzA4LjU1NCAzLjE3Ni41NTQgMS44NjkgMCAzLjE3Ny0uMjIxIDMuMTc3LS41NTQgMC0uMzMyLTEuMzA4LS41NTQtMy4xNzctLjU1NC0xLjg2OCAwLTMuMTc2LjIyMi0zLjE3Ni41NTR6TTIwLjgxIDE2Ljg4YzAgLjMzMyAxLjEyMS41NTQgMi42MTYuNTU0czIuNjE2LS4yMjEgMi42MTYtLjU1NGMwLS4zMzItMS4xMjEtLjU1NC0yLjYxNi0uNTU0cy0yLjYxNi4yMjItMi42MTYuNTU0ek0zMS4yNzQgMTYuODhjMCAuMjc3LjY3Mi41NTQgMS40OTQuNTU0czEuNDk0LS4yNzcgMS40OTQtLjU1NGMwLS4zMzItLjY3Mi0uNTU0LTEuNDk0LS41NTRzLTEuNDk0LjIyMi0xLjQ5NC41NTR6TTkuNTI1IDIxLjY0NWMtLjE4Ny4yMjEtLjMgNy40MjMtLjMgMTYuMDEgMCAxNC4zNDkuMDM4IDE1LjY3OC42NzMgMTYuNTEuNTYxLjc3NSAxLjg2OS45NDEgOC4xNDcgMS4wNTJsNy40MzYuMTY2LjExMiA0LjI2NmMuMDc1IDIuMzgyLjIyNSA0LjMyMS4zMzcgNC4zMjEuMTUgMCAuNzQ3LS42NjUgMS4zMDgtMS40OTZsMS4wNDYtMS40OTYgMS4wNDYgMS40OTZjLjU2LjgzMSAxLjE1OSAxLjQ5NiAxLjMwOCAxLjQ5Ni4xNSAwIC4yNjItMS45OTQuMjYyLTQuNDMydi00LjQzMmgyLjk1MmM0LjExIDAgNC4xNDgtLjA1NSA0LjE0OC0xMC45MTQgMC00Ljk4Ni0uMTUtOC41MzEtLjM3NC04Ljc1My0uMjI0LS4yMjEtLjM3MyAxLjI3NC0uMzczIDQuMXY0LjQ4N0gzNS41N2MtLjkzNCAwLTEuNjgyLjIyMi0xLjY4Mi41NTQgMCAuMjc3Ljc0OC41NTQgMS42ODIuNTU0aDEuNjgydjMuNTQ2YzAgNS4zMTggMCA1LjMxOC0zLjQwMSA1LjMxOEgzMC45di0yLjE2YzAtMS42MDcuMjI0LTIuNDM4Ljc0Ny0yLjk5Mi42NzMtLjcyLjc4NS0xLjI3NC42NzMtNC41OThsLS4xMTItMy43MTItMi4wNTUtMS42NjItMi4wNTYtMS42NjItMS44NjggMS42NjItMS44NjkgMS42MDYtLjExMiAzLjc2OGMtLjExMiAzLjMyNCAwIDMuODc4LjY3MyA0LjU5OC41MjMuNTU0Ljc0NyAxLjM4NS43NDcgMi45OTJ2Mi4xNmgtNy42MjNjLTguNzA3IDAtOC4wNzIuMzg4LTguMDcyLTUuMzE4di0zLjU0Nmg2LjM1M2MzLjk5OCAwIDYuMzUzLS4yMjEgNi4zNTMtLjU1NCAwLS4zMzItMi4zNTUtLjU1NC02LjM1My0uNTU0SDkuOTczbC0uMDc1LTExLjQxMmMtLjA3NC02LjI2LS4yMjQtMTEuMTkxLS4zNzMtMTAuOTd6bTIwLjQ3OCAxOC4yODFjMS42NDQgMS40NCAxLjY0NCAxLjQ0IDEuNjQ0IDQuNTQzdjMuMTU4bC0xLjcxOSAxLjMzLTEuNzE5IDEuMzg1LTEuNjQ0LTEuMzMtMS42NDQtMS4zODVWNDQuNDdjMC0zLjEwMiAwLTMuMTU3IDEuNjA3LTQuNTQzLjg2LS43NzUgMS42MDctMS40NCAxLjY4MS0xLjQ0LjA3NSAwIC44Ni42NjUgMS43OTQgMS40NHptLS44MjIgMTEuMDI1bC45NzEtLjk0MlY2MS45MmwtLjkzNC0xLjI3NC0uOTM0LTEuMjc0LS45MzQgMS4yNzQtLjkzNCAxLjI3NHYtMTEuOGwuODk2LjgzMWMuODYuODMxIDEuMDEuODMxIDEuODY5IDB6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuOTEgNDEuODFjMCAuMjc3LjMzNy43NzYuNzQ3IDEuMTA4LjQ0OS4zMzMuNzQ4IDEuMTYzLjc0OCAxLjk0IDAgLjc3NS4xODYgMS4zODQuMzczIDEuMzg0Ljc0NyAwIC4zNzQtMy4yNjgtLjQ0OC00LjEtLjk3MS0uOTk3LTEuNDItMS4xMDgtMS40Mi0uMzMyek0xNC4wODQgMjEuODY2YzAgLjI3Ny42NzIuNTU0IDEuNTMyLjU1NC44OTYgMCAxLjQyLS4yMjEgMS4yNy0uNTU0LS4xMTItLjMzMi0uODIyLS41NTQtMS41MzItLjU1NC0uNzEgMC0xLjI3LjIyMi0xLjI3LjU1NHpNMTguNzU1IDIxLjg2NmMtLjE1LjM4OCAyLjUwNC41NTQgNy42MjMuNTU0IDUuMDA4IDAgNy44ODUtLjIyMSA3Ljg4NS0uNTU0IDAtLjMzMi0yLjgwMy0uNTU0LTcuNjIzLS41NTQtNC43MDkgMC03LjczNi4yMjItNy44ODUuNTU0ek0xMi43NzYgMjcuNDA2Yy4xNS4zMzMgMi44MDMuNTU0IDYuNzI2LjU1NCAzLjkyNCAwIDYuNTc3LS4yMjEgNi43MjctLjU1NC4xNS0uMzg4LTIuMTY4LS41NTQtNi43MjctLjU1NHMtNi44NzUuMTY2LTYuNzI2LjU1NHpNMjcuOTEgMjcuNDA2YzAgLjMzMyAxLjMwOC41NTQgMy4xNzcuNTU0IDEuODY4IDAgMy4xNzYtLjIyMSAzLjE3Ni0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc2LS41NTQtMS44NjkgMC0zLjE3Ny4yMjItMy4xNzcuNTU0ek0xMi45NjMgMzIuMzkyYzAgLjMzMyAzLjI1LjU1NCA4Ljk2OC41NTRzOC45NjktLjIyMSA4Ljk2OS0uNTU0YzAtLjMzMi0zLjI1MS0uNTU0LTguOTY5LS41NTQtNS43MTcgMC04Ljk2OC4yMjItOC45NjguNTU0elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU21hcnRDb250cmFjdMSwY29uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuMTQgNy4yNWMtLjkzMS40MjMtMS45MzQuNy0yLjk3My44MzRhNS4xOTQgNS4xOTQgMCAwMDIuMjcxLTIuODc2IDEwLjQ0IDEwLjQ0IDAgMDEtMy4yODYgMS4yNjljLS45NTUtMS4wNC0yLjI5Ni0xLjY0NC0zLjgxOS0xLjY0NC0yLjg0IDAtNS4xNiAyLjMyLTUuMTYgNS4xODQgMCAuNDExLjA1LjgxLjEzNCAxLjE4NEExNC43MzUgMTQuNzM1IDAgMDEzLjYyNSA1Ljc4OGE1LjEyOCA1LjEyOCAwIDAwLS43IDIuNTk4YzAgMS44LjkwNSAzLjM5NSAyLjMwNyA0LjMwMi0uODU4IDAtMS42NTUtLjI0Mi0yLjM1Ni0uNjA1di4wMzdhNS4xODggNS4xODggMCAwMDQuMTU3IDUuMDg3IDUuMSA1LjEgMCAwMS0yLjMzMy4wODQgNS4xNzIgNS4xNzIgMCAwMDQuODM0IDMuNjAxIDEwLjI5NiAxMC4yOTYgMCAwMS02LjQ0IDIuMjI0Yy0uNDExIDAtLjgyMi0uMDI1LTEuMjMzLS4wNzNhMTQuNjc1IDE0LjY3NSAwIDAwNy45NSAyLjMzMmM5LjUyMiAwIDE0Ljc1NC03LjkwMiAxNC43NTQtMTQuNzU0IDAtLjIzIDAtLjQ0Ny0uMDEyLS42NzZBMTAuMzU5IDEwLjM1OSAwIDAwMjcuMTQgNy4yNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVHdpdHRlclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1ZlY3Rvcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI4IDI4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMy45ODggOS4xMzhoLTEuNzEzdi0yLjYxQzIyLjI3NSAyLjkyMyAxOC40MzcgMCAxMy43MDggMCA4Ljk3NyAwIDUuMTQgMi45MjQgNS4xNCA2LjUyN3YyLjYxMUgzLjQyN0MxLjU0MiA5LjEzOCAwIDEwLjMxMyAwIDExLjc1djEzLjA1NWMwIDEuNDM2IDEuNTQyIDIuNjExIDMuNDI3IDIuNjExaDIwLjU2MWMxLjg4NSAwIDMuNDI3LTEuMTc1IDMuNDI3LTIuNjExVjExLjc0OWMwLTEuNDM2LTEuNTQyLTIuNjEtMy40MjctMi42MXptLTE1LjQyLTIuNjFjMC0yLjE2OCAyLjI5NS0zLjkxNyA1LjE0LTMuOTE3IDIuODQ0IDAgNS4xNCAxLjc1IDUuMTQgMy45MTZ2Mi42MTFIOC41Njh2LTIuNjF6bTE1LjQyIDE4LjI3NkgzLjQyN1YxMS43NDloMjAuNTYxdjEzLjA1NXptLTEwLjI4LTMuOTE2YzEuODg0IDAgMy40MjYtMS4xNzUgMy40MjYtMi42MTEgMC0xLjQzNi0xLjU0Mi0yLjYxMS0zLjQyNy0yLjYxMS0xLjg4NCAwLTMuNDI2IDEuMTc1LTMuNDI2IDIuNjEgMCAxLjQzNyAxLjU0MiAyLjYxMiAzLjQyNiAyLjYxMnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVmVjdG9yXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnWW91dHViZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIuMDgzIDE4LjEyNWw2LjI3Mi0zLjYyNS02LjI3Mi0zLjYyNXY3LjI1em0xMy45NjktOS40NjFjLjE1Ny41NjguMjY1IDEuMzI5LjMzOCAyLjI5Ni4wODQuOTY2LjEyIDEuOC4xMiAyLjUyNWwuMDczIDEuMDE1YzAgMi42NDYtLjE5MyA0LjU5Mi0uNTMxIDUuODM2LS4zMDIgMS4wODgtMS4wMDMgMS43ODktMi4wOSAyLjA5LS41NjkuMTU4LTEuNjA4LjI2Ny0zLjIwMy4zMzktMS41Ny4wODQtMy4wMDkuMTItNC4zMzguMTJsLTEuOTIxLjA3M2MtNS4wNjMgMC04LjIxNy0uMTkzLTkuNDYxLS41MzEtMS4wODgtLjMwMi0xLjc4OS0xLjAwMy0yLjA5LTIuMDktLjE1OC0uNTY5LS4yNjctMS4zMy0uMzM5LTIuMjk3LS4wODUtLjk2Ni0uMTItMS44LS4xMi0yLjUyNUwyLjQxNiAxNC41YzAtMi42NDYuMTkzLTQuNTkyLjUzMS01LjgzNi4zMDItMS4wODggMS4wMDMtMS43ODkgMi4wOS0yLjA5LjU2OS0uMTU4IDEuNjA4LS4yNjcgMy4yMDMtLjMzOSAxLjU3LS4wODUgMy4wMDgtLjEyIDQuMzM4LS4xMmwxLjkyMS0uMDczYzUuMDYzIDAgOC4yMTcuMTkzIDkuNDYxLjUzMSAxLjA4OC4zMDIgMS43ODkgMS4wMDMgMi4wOSAyLjA5elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdZb3V0dWJlXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrU3F1YXJlIH0gZnJvbSAnLi9DaGVja1NxdWFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9tZXBhZ2VPcHRpb24gfSBmcm9tICcuL0hvbWVwYWdlT3B0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyDEsG5zdGFncmFtIH0gZnJvbSAnLi/EsG5zdGFncmFtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZG4gfSBmcm9tICcuL0xpbmtkbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbCB9IGZyb20gJy4vTWFpbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVkaWEgfSBmcm9tICcuL01lZGlhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhRGF0YSB9IGZyb20gJy4vTWV0YURhdGEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE9wZW5zZWFMb2dvIH0gZnJvbSAnLi9PcGVuc2VhTG9nbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXJDb2RlIH0gZnJvbSAnLi9RckNvZGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJhcmlibGVMb2dvIH0gZnJvbSAnLi9SYXJpYmxlTG9nbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2F2aW5nc1BpZyB9IGZyb20gJy4vU2F2aW5nc1BpZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU21hcnRDb250cmFjdMSwY29uIH0gZnJvbSAnLi9TbWFydENvbnRyYWN0xLBjb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmfEsG5zdGFncmFtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05LjQyNSAyLjQxN2gxMC4xNWE3LjAxMyA3LjAxMyAwIDAxNy4wMDggNy4wMDh2MTAuMTVhNy4wMDggNy4wMDggMCAwMS03LjAwOCA3LjAwOEg5LjQyNWE3LjAxMyA3LjAxMyAwIDAxLTcuMDA4LTcuMDA4VjkuNDI1YTcuMDA4IDcuMDA4IDAgMDE3LjAwOC03LjAwOHptLS4yNDIgMi40MTZhNC4zNSA0LjM1IDAgMDAtNC4zNSA0LjM1djEwLjYzNGE0LjM0NyA0LjM0NyAwIDAwNC4zNSA0LjM1aDEwLjYzNGE0LjM1IDQuMzUgMCAwMDQuMzUtNC4zNVY5LjE4M2E0LjM0NyA0LjM0NyAwIDAwLTQuMzUtNC4zNUg5LjE4M3ptMTEuNjYgMS44MTNhMS41MSAxLjUxIDAgMTEwIDMuMDIgMS41MSAxLjUxIDAgMDEwLTMuMDJ6TTE0LjUgOC40NThhNi4wNDIgNi4wNDIgMCAxMTAgMTIuMDg0IDYuMDQyIDYuMDQyIDAgMDEwLTEyLjA4NHptMCAyLjQxN2EzLjYyNSAzLjYyNSAwIDEwMCA3LjI1IDMuNjI1IDMuNjI1IDAgMDAwLTcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z8SwbnN0YWdyYW1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9vay91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgRXhoaWJpdGlvblNpZGUgZnJvbSAnLi4vcm93L2V4aGliaXRpb25TaWRlJ1xyXG5pbXBvcnQgUXVvdGF0aW9uIGZyb20gXCIuLi9yb3cvcXVvdGF0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsvKiB7IHNpemUud2lkdGggPCBDT05TVC5UQUJMRVRfU0laRSA/IFxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uICBmbGF0Lz4gOiA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxFeGhpYml0aW9uU2lkZS8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxRdW90YXRpb24gLz5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc2l6aW5nfSBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT57SlNPTi5zdHJpbmdpZnkoc2l6ZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICB7LyogVGhlcmUgaGF2aW5nIG1haW4gc2lkZSAqL31cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG5cclxuLypcclxuPE1haW5TaWRlLz46IFBhZ2UgaGFzIG9uZSBncmlkIG5hbWVkIE1haW5TaWRlLiBcclxuPE5hdmlnYXRpb24vPjogSXQgaGFzIGljb24sIG1hcmssIGJ1dHRvbnMsYW5kIGxvY2F0ZWQgb24gdG9wIG9mIHBhZ2VzLiBcclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQnV0dG9uICh7IGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuICg8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi90ZXh0L2hlYWQtdGl0bGUnXHJcbmltcG9ydCBGcmFtZUJ1dHRvbiBmcm9tIFwiLi4vZnJhbWUvZnJhbWVCdXR0b25cIjtcclxuXHJcbmltcG9ydCB7SG9tZXBhZ2VPcHRpb259IGZyb20gJy4uL2ljb25zJ1xyXG5cclxuY29uc3QgTUVOVSA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdtYWtlLWFuLW5mdCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdNYWtlIGFuIE5GVCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYnVzaW5lc3Mtc2lnbnVwJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ0J1c2luZXNzIFNpZ251cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnU3Vic2NyaWJlLWZvci11cGNvbWluZy1kcm9wcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdTdWJzY3JpYmUgZm9yIFVwY29taW5nIERyb3BzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICduZnQtc3RhbmRhcmRzJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ05GVCBTdGFuZGFyZHMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Rvd25sb2FkLW5mdC1jcmVhdG9yJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ0Rvd25sb2FkIE5GVCBDcmVhdG9yJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHtmbGF0PWZhbHNlfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0b3J9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFyayl9PlxyXG4gICAgICAgICAgICA8SGVhZFRpdGxlPk93bmFibGUtTlM8L0hlYWRUaXRsZT4gXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2QnRufT5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBNRU5VLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YkJ0bn1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFmbGF0ICYmPFRleHRUaXRsZT4ge21lbnUudGl0bGV9IDwvVGV4dFRpdGxlPn1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgPEZyYW1lQnV0dG9uPkxvZ2luPC9GcmFtZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZsYXQgJiYgPEhvbWVwYWdlT3B0aW9uLz59XHJcbiAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUGhvdG8oe3NyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmVjZWlwdGNvaW4tcmVjZWlwdGNoYWluLWRlNTYwLmFwcHNwb3QuY29tL28vd2Vic2l0ZSUyRmpwaWVyY2UlMkZqLXBpZXJjZS1wcm9tby1ibGFjay0wMS5wbmc/YWx0PW1lZGlhJnRva2VuPTVjZjBjZjBmLTMxZmEtNGVmMi05ZjIxLWVhYTEzNjU5NTY3YlwiLCBhbHQsIHdpZHRoPTQ3MCwgaGVpZ2h0PTI5Mn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OmhlaWdodH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPiAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90byIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vcGhvdG8vaW5kZXgnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgTWludEJ1dHRvbiBmcm9tICcuLi9mcmFtZS9taW50QnV0dG9uJ1xyXG5cclxuZnVuY3Rpb24gRXhoaWJpdGlvbih7IEhlYWRlciwgVGV4dCwgT3duZXIsIHNyYz1cImh0dHBzOi8vb3duZXJmeS5jb20vanBhbmRmcmllbmRzXCJ9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgey8qIFRleHQgU2lkZSBGcm9tIEV4aGliaXRpb24gc2lkZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnR9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnRIZWFkZXJ9IHNpemU9JzMzcHgnIGJvbGQ+Q0EkSCBDb3dzPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlckxpbmV9Lz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFRleHQgU2lkZSAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuc3ViVGV4dH0gIHNpemU9JzIycHgnID5Ob3cgTWludGluZzogQ2hpYy1BLURlZXMsRmlyc3QgTkZUcyB0byBHZW5lcmF0ZSBFR0dTIFRva2VuczwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbnRCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubWludEJ1dHRvbn0+TUlOVCBDSElDLUEtREVFIE5GVDwvTWludEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQaG90b3MgU2lkZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0V4aGliaXRpb259PlxyXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICA8UGhvdG8vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQaG90byBzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JlY2VpcHRjb2luLXJlY2VpcHRjaGFpbi1kZTU2MC5hcHBzcG90LmNvbS9vL3dlYnNpdGUlMkZjaGljYWRlZXMlMkZjYXNoY293cy5wbmc/YWx0PW1lZGlhJnRva2VuPTYwZWY0YWE3LTQyYzktNDdkZS04MmE2LWI3MTk5NTM3NDljM1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICB7LyogT3duZXIgT2YgUGhvdG9zICovfVxyXG4gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5vd25lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1Yk93bmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMTJweCcgYm9sZD5VUENPTUlORyBDT0xMRUNUSU9OOjwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBzaXplPScxMnB4Jz5KLlBpZXJjZSBhbmQgRnJpZW5kcyAtIEhhbmQgUGFpbnRlZCBhbmQgU2lnbmVkPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhoaWJpdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVvdGF0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gUXVvdGF0aW9uKCl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXVvSGVhZGVyVGV4dH0gXHJcbiAgICAgICAgICAgICAgICBzaXplPScyNnB4JyBcclxuICAgICAgICAgICAgICAgIGJvbGRcclxuICAgICAgICAgICAgICAgID5UcmFkZSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TIDwvc3Bhbj5jcmVhdGVkIG9uIG1hcmtldHBsYWNlIHBsYXRmb3Jtcy5cclxuICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvTWlkZGxlfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdW9NaWRkbGVUZXh0fSBcclxuICAgICAgICAgICAgICAgIHNpemU9JzE2cHgnIFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eT0nMC42JyBcclxuICAgICAgICAgICAgICAgIGJvbGRcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUcmFkZSBPd25hYmxlLU5TIGNyZWF0ZWQgb24gbWFya2V0cGxhY2UgcGxhdGZvcm1zLlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW9Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnF1b0Zvb3RlclRleHR9IFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nMTZweCcgXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PScwLjYnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91LHRoZSBjcmVhdG9yLCBvd24geW91ciBwcml2YXRlIGtleXMsIHRoZXJlZm9yZSBvd24geW91ciBhc3NldHMgYW5kIGFyZSBmcmVlIHRvLDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zlciwgc2VsbCBvciB0cmFkZSBORlRzIGFueXdoZXJlIG9uIHRoZSBkaWdpdGFsIG1hcmtldHBsYWNlLlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW9JY29uc30+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5SYXJpYmxlTG9nbyBjbGFzc05hbWU9e3N0eWxlcy5xdW9SYXJpYmxlfS8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5PcGVuc2VhTG9nbyBjbGFzc05hbWU9e3N0eWxlcy5xdW9PcGVuc2VhfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVvdGF0aW9uIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkVGl0bGUoeyBib2xkPSBmYWxzZSxjbGFzc05hbWUgLGNoaWxkcmVuLCBzaXplPTIwLCBvcGFjaXR5PTF9KXtcclxuICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBbc3R5bGVzLlRpdGxlLCBcclxuICAgICAgICBib2xkICYmIHN0eWxlcy5ib2xkLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgIF0pfVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFNpemU6c2l6ZSwgb3BhY2l0eTogb3BhY2l0eX19XHJcbiAgICAgICAgPntjaGlsZHJlbn08L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkVGl0bGVcclxuXHJcbi8qXHJcbiAgICBjbiBzdGFuZCBmb3IgY2xhc3NuYW1lczogJ0NsYXNzbmFtZXMnICBpcyBwcmV2ZW50IGNsYXNzIG92ZXJ3cml0ZS4gSXQgY29tZXMgbW9yZSB0aGFuIG9uZSBjbGFzcyBpbnRvIGZ1bmN0aW9uLCBpdCdzIHJlYXNvbiBhYm91dCBjb25mbGljdC4gXHJcbiAgICBib2xkOiBTb21lIHRleHQgaGFzIGJvbGQgZm9udCB3ZWlnaHQsIGJ1dCBzb21lIGl0IGhhc24ndC4gV2hlbiB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0IHByb3BlcnRpZXMsIGJvbGQgcHJvcGVydGllcyB3aWxsIGhhdmUgYmVlbiBhY3RpdmF0ZWQuXHJcbiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dC10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXh0VGl0bGUoeyBib2xkPWZhbHNlLCBjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuIDxoMiBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvaDI+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0VGl0bGUiLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIFRBQkxFVF9TSVpFOiA5NDMsXHJcbiAgICBERVNLVE9QX1NJWkU6IDEyNzBcclxufSIsImltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIEhvb2tcclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAgIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAgIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICAgIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcclxuICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcbiAgICByZXR1cm4gd2luZG93U2l6ZTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplOyIsImltcG9ydCBSZWFjdCBmcm9tJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0J1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0Lz4gICAgICAgIFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL21pbnRCdXR0b24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vbWludEJ1dHRvbi5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9taW50QnV0dG9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2xheW91dC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9sYXlvdXQubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vbGF5b3V0Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2J1dHRvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9idXR0b24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vYnV0dG9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL25hdmlnYXRpb24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2luZGV4Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2luZGV4Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2luZGV4Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3F1b3RhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9xdW90YXRpb24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vcXVvdGF0aW9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2hlYWQtdGl0bGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vaGVhZC10aXRsZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9oZWFkLXRpdGxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3RleHQtdGl0bGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vdGV4dC10aXRsZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi90ZXh0LXRpdGxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRTEoKSB7XG4gICAgbGV0IG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgICAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xufSgpO1xuY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0MSgpIHtcbiAgICBjb25zdCBtZW1vID0ge1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgICAgICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICAgIH07XG59KCk7XG5jb25zdCBzdHlsZXNJbkRvbSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkQ291bnRNYXAgPSB7XG4gICAgfTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgIGNvbnN0IGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkICsgJyAnICsgY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgICAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBub25jZSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovIGNvbnN0IHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQxKCkge1xuICAgIGNvbnN0IHRleHRTdG9yZSA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgIH07XG59KCk7XG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICBjb25zdCBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/ICdAbWVkaWEgJyArIG9iai5tZWRpYSArICcgeycgKyBvYmouY3NzICsgJ30nIDogb2JqLmNzcztcbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gICAgbGV0IGNzcyA9IG9iai5jc3M7XG4gICAgY29uc3QgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgY29uc3Qgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nO1xuICAgIH1cbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG59XG5sZXQgc2luZ2xldG9uID0gbnVsbDtcbmxldCBzaW5nbGV0b25Db3VudGVyID0gMDtcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgdXBkYXRlO1xuICAgIGxldCByZW1vdmU7XG4gICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUob2JqKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICB9O1xuICAgIC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAgIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbiAgICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICAgIH1cbiAgICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgICBsZXQgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgICAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaTErKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2kxXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29udGFpbmVyIGZyb20gYnV0dG9uICovXFxyXFxuICAgIC8qIEJ1dHRvbiBFbGVtZW50cyAqL1xcclxcbiAgICAuc3R5bGVfYmFzZUJ0bl9fMU15UFV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGJvcmRlcjpub25lOyAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogV2hpbGUgaG92ZXJpbmcgb24gYnV0dG9ucyBvZiBuYXZpZ2F0aW9uLCB0ZXh0IHdpbGwgaGF2ZSBiZWVuIHllbGxvdy4gKi9cXHJcXG4gICAgLnN0eWxlX2Jhc2VCdG5fXzFNeVBVOmhvdmVye1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogSWYgQnV0dG9uIGhhcyBib3JkZXIsIFRoaXMgY29kZSBzbmlwcGV0IHdpbGwgaGF2ZSBiZWVuIGFjdGl2YXRlZCovXFxyXFxuICAgIC5zdHlsZV9GcmFtZUJvcmRlcl9fLUdNSXl7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKCAtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgd2lkdGg6IDkyLjk0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUzLjgxcHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLyogd2hpbGUgaG92ZXJpbmcgb24gYnV0dG9uLCBCdXR0b24gYmFja2dyb3VuZCB3aWxsIGhhdmUgYmVlbiBibGFjaywgZXZlbiB0ZXh0IHdpbGwgaGF2ZSBiZWVuIHllbGxvdyAqL1xcclxcbiAgICAuc3R5bGVfRnJhbWVCb3JkZXJfXy1HTUl5OmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1mcmFtZS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC5zdHlsZV9saW5rQ29udGFpbmVyX18ybWVGeisqe1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zdHlsZV9saW5rQ29udGFpbmVyX18ybWVGejpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOnZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2J1dHRvbi9zdHlsZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUEwQjtJQUN0QixvQkFBb0I7SUFDcEI7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLFdBQVc7SUFDZjs7SUFFQSx5RUFBeUU7SUFDekU7UUFDSTtJQUNKOztJQUVBLG9FQUFvRTtJQUNwRTtRQUNJLGlCQUFpQjtRQUNqQixzQ0FBc0M7UUFDdEMsY0FBYztRQUNkLGVBQWU7Z0JBQ1A7O0lBRVosc0dBQXNHO0lBQ3RHO1FBQ0kscUNBQXFDO3dCQUNyQjs7SUFJaEI7WUFDSSxrQkFBa0I7UUFDdEI7O0lBR0o7UUFDSSwrQkFBK0I7SUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ29udGFpbmVyIGZyb20gYnV0dG9uICovXFxyXFxuICAgIC8qIEJ1dHRvbiBFbGVtZW50cyAqL1xcclxcbiAgICAuYmFzZUJ0bntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgYm9yZGVyOm5vbmU7ICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBXaGlsZSBob3ZlcmluZyBvbiBidXR0b25zIG9mIG5hdmlnYXRpb24sIHRleHQgd2lsbCBoYXZlIGJlZW4geWVsbG93LiAqL1xcclxcbiAgICAuYmFzZUJ0bjpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jLWJ0bi1iYWNrZ3JvdW5kKVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIElmIEJ1dHRvbiBoYXMgYm9yZGVyLCBUaGlzIGNvZGUgc25pcHBldCB3aWxsIGhhdmUgYmVlbiBhY3RpdmF0ZWQqL1xcclxcbiAgICAuRnJhbWVCb3JkZXJ7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKCAtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgd2lkdGg6IDkyLjk0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUzLjgxcHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLyogd2hpbGUgaG92ZXJpbmcgb24gYnV0dG9uLCBCdXR0b24gYmFja2dyb3VuZCB3aWxsIGhhdmUgYmVlbiBibGFjaywgZXZlbiB0ZXh0IHdpbGwgaGF2ZSBiZWVuIHllbGxvdyAqL1xcclxcbiAgICAuRnJhbWVCb3JkZXI6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpbmtDb250YWluZXIge1xcclxcbiAgICBcXHJcXG4gICAgICAgICYrKntcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICB9ICAgIFxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubGlua0NvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOnZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJhc2VCdG5cIjogXCJzdHlsZV9iYXNlQnRuX18xTXlQVVwiLFxuXHRcIkZyYW1lQm9yZGVyXCI6IFwic3R5bGVfRnJhbWVCb3JkZXJfXy1HTUl5XCIsXG5cdFwibGlua0NvbnRhaW5lclwiOiBcInN0eWxlX2xpbmtDb250YWluZXJfXzJtZUZ6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZyYW1lQnV0dG9uX2ZyYW1lQnRuX19BbVEydXtcXHJcXG5cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7QUFFQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZnJhbWVCdG57XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZyYW1lQnRuXCI6IFwiZnJhbWVCdXR0b25fZnJhbWVCdG5fX0FtUTJ1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pbnRCdXR0b25fbWludEJ1dHRvbl9fMklWZFcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiAyNTUuNzVweDtcXHJcXG4gICAgaGVpZ2h0OiA0OC45OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWludEJ1dHRvbl9taW50QnV0dG9uX18ySVZkVzpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9mcmFtZS9taW50QnV0dG9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlDQUF5QztBQUM3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWludEJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDI1NS43NXB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4Ljk4cHg7XFxyXFxufVxcclxcblxcclxcbi5taW50QnV0dG9uOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1mcmFtZS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1pbnRCdXR0b25cIjogXCJtaW50QnV0dG9uX21pbnRCdXR0b25fXzJJVmRXXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxheW91dF9sYXlvdXRfXzJlZEk5e1xcclxcbm1pbi1oZWlnaHQ6IDY0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYXlvdXR7XFxyXFxubWluLWhlaWdodDogNjQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICBcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsYXlvdXRcIjogXCJsYXlvdXRfbGF5b3V0X18yZWRJOVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5hdmlnYXRvciAqL1xcclxcbi5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4ge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICM5RTlFOUU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6ICAxcmVtIDEuNXJlbTt9XFxyXFxuLyogTmF2aWdhdG9yIE1lZGlhICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyNzBweCl7XFxyXFxuLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiB7ICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyNzA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA3MXB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDk1cHh9XFxyXFxuICAgICAgICB9XFxyXFxuLyogTmF2aWdhdG9yIEJ1dHRvbiAqL1xcclxcbi5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO31cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTQzcHgpe1xcclxcbi5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAgICAgdG9wOiA1cmVtO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3N9XFxyXFxuICAgICAgICB9XFxyXFxuLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9uYXZCdG5fXzJJcmFoIGJ1dHRvbiArIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IFxcclxcbiAgICAgICAgfVxcclxcbi5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaCAubmF2aWdhdGlvbl9uYXZJdGVtX18yMHVoc3tcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcXHJcXG4gICAgfVxcclxcbi8qIE1hcmsgKi9cXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX21hcmtfXzNHRmFNe1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcblxcclxcbiAgICAvKiAubmF2QnRuIGFuZCAubWFyayBoYXMgdGhlIHNhbWUgZGlzcGxheSwgYmVjYXVzZSBib3RoIG9mIHRoZW0gaXMgaW4gZGlmZmVyZW50IGRpdiwgYW5kIHRob3NlIHR3byBkaXYgbXVzdCBiZSBzYW1lIHJvdy4qL1xcclxcbiAgICB9XFxyXFxuLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9tYXJrX18zR0ZhTSAubmF2aWdhdGlvbl9tYXJrX18zR0ZhTSBzdmd7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDk0M3B4KXtcXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX21hcmtfXzNHRmFNe1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XFxyXFxuICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTXtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7fVxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDk0M3B4KXtcXHJcXG4ubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHR9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7UUFDUSxpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixxQkFBcUIsQ0FpRHZCO0FBaERFLG9CQUFvQjtBQUNwQjtBQVRSO1lBVVksZUFBZTtZQUNmLFlBQVk7WUFDWixnQkE0Q047UUEzQ0U7QUFFSixxQkFBcUI7QUFDckI7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQixDQWdCdEI7QUFmRztBQUpKO1lBS1EsZUFBZTtZQUNmLFNBQVM7WUFDVCxzQkFBc0I7WUFDdEIsV0FBVztZQUNYLGVBQWU7WUFDZixnQkFTUDtRQVJHO0FBRUE7UUFDQSxrQkFBa0I7UUFDbEI7QUFFQTtZQUNJLGlCQUFpQjtJQUN6QjtBQUVBLFNBQVM7QUFDVDtRQUNJLGtCQUFrQjs7SUFVdEIseUhBQXlIO0lBQ3pIO0FBVkk7WUFDSSxlQUFlOztRQUVuQjtBQUNBO0FBTko7WUFPUSxxQkFBcUI7WUFDckI7SUFJUjtRQUhJO0FBSUo7UUFDSSxtQkFBbUIsQ0FJdEI7QUFIRztBQUZKO1lBR1EscUJBQXFCO1lBQ3JCLGlCQUNQO0lBQURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2aWdhdG9yICovXFxyXFxuLm5hdmlnYXRvciB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzlFOUU5RTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogIDFyZW0gMS41cmVtO1xcclxcbiAgICAgICAgLyogTmF2aWdhdG9yIE1lZGlhICovXFxyXFxuICAgICAgICBAbWVkaWEgKC0tZCl7ICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyNzA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA3MXB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDk1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC8qIE5hdmlnYXRvciBCdXR0b24gKi9cXHJcXG4gICAgLm5hdkJ0bntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgQG1lZGlhICgtLXQpe1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgICAgICB0b3A6IDVyZW07XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2SXRlbXtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcXHJcXG4gICAgfX1cXHJcXG5cXHJcXG4gICAgLyogTWFyayAqL1xcclxcbiAgICAubWFya3tcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgICAgIC5tYXJrIHN2Z3tcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEoLS10KXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLyogLm5hdkJ0biBhbmQgLm1hcmsgaGFzIHRoZSBzYW1lIGRpc3BsYXksIGJlY2F1c2UgYm90aCBvZiB0aGVtIGlzIGluIGRpZmZlcmVudCBkaXYsIGFuZCB0aG9zZSB0d28gZGl2IG11c3QgYmUgc2FtZSByb3cuKi9cXHJcXG4gICAgfVxcclxcbiAgICAubG9naW5CdXR0b257XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgQG1lZGlhKC0tdCl7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB9fX1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJuYXZpZ2F0b3JcIjogXCJuYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE5cIixcblx0XCJuYXZCdG5cIjogXCJuYXZpZ2F0aW9uX25hdkJ0bl9fMklyYWhcIixcblx0XCJuYXZJdGVtXCI6IFwibmF2aWdhdGlvbl9uYXZJdGVtX18yMHVoc1wiLFxuXHRcIm1hcmtcIjogXCJuYXZpZ2F0aW9uX21hcmtfXzNHRmFNXCIsXG5cdFwibG9naW5CdXR0b25cIjogXCJuYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5waG90b19waG90b19fM09ubVB7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG9faW1nX18xbllYRHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiAzMy4zMyU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9waG90by9pbmRleC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztBQUVBOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGhvdG97XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uaW1ne1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgd2lkdGg6IDMzLjMzJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBob3RvXCI6IFwicGhvdG9fcGhvdG9fXzNPbm1QXCIsXG5cdFwiaW1nXCI6IFwicGhvdG9faW1nX18xbllYRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5leGhpYml0aW9uU2lkZV9jb250YWluZXJfXzNRaktOe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnQWR2ZXJ0IFBob3Rvcyc7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAwcHggMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxOTIwcHg7XFxyXFxuICAgIGhlaWdodDogNDI2LjI2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgIFxcclxcbn1cXHJcXG5cXHJcXG4gICAgLypBZHZlcnQgU2lkZSAqL1xcclxcblxcclxcbiAgICAuZXhoaWJpdGlvblNpZGVfY29udGFpbmVyX18zUWpLTiAuZXhoaWJpdGlvblNpZGVfYWR2ZXJ0X19NNHR5WntcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogQWR2ZXJ0O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAgXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDk0M3B4KXtcXHJcXG5cXHJcXG4gICAgLmV4aGliaXRpb25TaWRlX2NvbnRhaW5lcl9fM1FqS04gLmV4aGliaXRpb25TaWRlX2FkdmVydF9fTTR0eVp7XFxyXFxuICAgICAgICAgICAgbGVmdDogMzUlICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLmV4aGliaXRpb25TaWRlX2NvbnRhaW5lcl9fM1FqS04gLmV4aGliaXRpb25TaWRlX2FkdmVydF9fTTR0eVogLmV4aGliaXRpb25TaWRlX2JvcmRlckxpbmVfXzFXanRBe1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMi44OHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLmV4aGliaXRpb25TaWRlX2NvbnRhaW5lcl9fM1FqS04gLmV4aGliaXRpb25TaWRlX21pbnRCdXR0b25fXzE3dHJNe1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4uZXhoaWJpdGlvblNpZGVfcGhvdG9FeGhpYml0aW9uX18xWnEwN3tcXHJcXG4gICAgZ3JpZC1hcmVhOiBQaG90b3M7XFxyXFxufVxcclxcblxcclxcbi5leGhpYml0aW9uU2lkZV9waG90b0V4aGliaXRpb25fXzFacTA3IC5leGhpYml0aW9uU2lkZV9waG90b3NfXzJKNXd4e1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4uZXhoaWJpdGlvblNpZGVfcGhvdG9FeGhpYml0aW9uX18xWnEwNyAuZXhoaWJpdGlvblNpZGVfc3ViT3duZXJfXzJhc1Bye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvcm93L2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQywyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQXdCbkI7O0lBdEJJLGVBQWU7O0lBQ2Y7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFTaEM7O0lBUEE7O0lBVEo7WUFVUTtRQU1KO1FBTEE7O0lBRUE7WUFDSSxvQkFBb0I7WUFDcEI7O0lBR1I7WUFDUSxnQkFBZ0I7SUFDeEI7O0FBR0o7SUFDSSxpQkFBaUI7QUFZckI7O0FBVkk7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7QUFDQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCOztJQUVyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnQWR2ZXJ0IFBob3Rvcyc7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAwcHggMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxOTIwcHg7XFxyXFxuICAgIGhlaWdodDogNDI2LjI2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHJcXG4gICAgLypBZHZlcnQgU2lkZSAqL1xcclxcbiAgICAuYWR2ZXJ0e1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBBZHZlcnQ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEoLS10KXtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAzNSU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgIFxcclxcbiAgICAgICAgLmJvcmRlckxpbmV7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIyLjg4cHg7XFxyXFxuICAgICAgICAgICAgfSAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubWludEJ1dHRvbntcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xcclxcbiAgICB9ICBcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvRXhoaWJpdGlvbntcXHJcXG4gICAgZ3JpZC1hcmVhOiBQaG90b3M7XFxyXFxuXFxyXFxuICAgIC5waG90b3N7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3ViT3duZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiZXhoaWJpdGlvblNpZGVfY29udGFpbmVyX18zUWpLTlwiLFxuXHRcImFkdmVydFwiOiBcImV4aGliaXRpb25TaWRlX2FkdmVydF9fTTR0eVpcIixcblx0XCJib3JkZXJMaW5lXCI6IFwiZXhoaWJpdGlvblNpZGVfYm9yZGVyTGluZV9fMVdqdEFcIixcblx0XCJtaW50QnV0dG9uXCI6IFwiZXhoaWJpdGlvblNpZGVfbWludEJ1dHRvbl9fMTd0ck1cIixcblx0XCJwaG90b0V4aGliaXRpb25cIjogXCJleGhpYml0aW9uU2lkZV9waG90b0V4aGliaXRpb25fXzFacTA3XCIsXG5cdFwicGhvdG9zXCI6IFwiZXhoaWJpdGlvblNpZGVfcGhvdG9zX18ySjV3eFwiLFxuXHRcInN1Yk93bmVyXCI6IFwiZXhoaWJpdGlvblNpZGVfc3ViT3duZXJfXzJhc1ByXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnF1b3RhdGlvbl9xdW9fX0YtUTBxe1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3IpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMTQuNzJweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5xdW90YXRpb25fcXVvX19GLVEwcSAucXVvdGF0aW9uX3F1b01pZGRsZVRleHRfXzNnNTlmIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jLWNvbG9yLWFsdGVybmF0aXZlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucXVvdGF0aW9uX3F1b19fRi1RMHEgLnF1b3RhdGlvbl9xdW9Gb290ZXJUZXh0X18xTjNzZntcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jLWNvbG9yLWFsdGVybmF0aXZlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucXVvdGF0aW9uX3F1b19fRi1RMHEgZGl2ICsgZGl2e1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnF1b3RhdGlvbl9xdW9fX0YtUTBxIC5xdW90YXRpb25fcXVvT3BlbnNlYV9fWHBnYUl7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnF1b3RhdGlvbl9xdW9fX0YtUTBxIC5xdW90YXRpb25fU3Bhbl9fMmpIakx7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnF1b3RhdGlvbl9xdW9fX0YtUTBxIC5xdW90YXRpb25fcXVvUmFyaWJsZV9fM3NxZTB7XFxyXFxuICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucXVvdGF0aW9uX3F1b19fRi1RMHEgLnF1b3RhdGlvbl9xdW9PcGVuc2VhX19YcGdhSXtcXHJcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvcm93L3F1b3RhdGlvbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1REFBdUQ7SUFDdkQsb0JBQW9COztBQTRCeEI7O0lBMUJJO1FBQ0ksaUNBQWlDO0lBQ3JDOztJQUNBO1FBQ0ksaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucXVve1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3IpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMTQuNzJweDtcXHJcXG5cXHJcXG4gICAgLnF1b01pZGRsZVRleHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtY29sb3ItYWx0ZXJuYXRpdmUpO1xcclxcbiAgICB9XFxyXFxuICAgIC5xdW9Gb290ZXJUZXh0e1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtY29sb3ItYWx0ZXJuYXRpdmUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdiArIGRpdntcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5xdW9PcGVuc2Vhe1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5TcGFue1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICB9XFxyXFxuICAgIC5xdW9SYXJpYmxle1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnF1b09wZW5zZWF7XFxyXFxuICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJxdW9cIjogXCJxdW90YXRpb25fcXVvX19GLVEwcVwiLFxuXHRcInF1b01pZGRsZVRleHRcIjogXCJxdW90YXRpb25fcXVvTWlkZGxlVGV4dF9fM2c1OWZcIixcblx0XCJxdW9Gb290ZXJUZXh0XCI6IFwicXVvdGF0aW9uX3F1b0Zvb3RlclRleHRfXzFOM3NmXCIsXG5cdFwicXVvT3BlbnNlYVwiOiBcInF1b3RhdGlvbl9xdW9PcGVuc2VhX19YcGdhSVwiLFxuXHRcIlNwYW5cIjogXCJxdW90YXRpb25fU3Bhbl9fMmpIakxcIixcblx0XCJxdW9SYXJpYmxlXCI6IFwicXVvdGF0aW9uX3F1b1JhcmlibGVfXzNzcWUwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWQtdGl0bGVfVGl0bGVfXzNtd1hnIHtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkLXRpdGxlX2JvbGRfXzEyc0d5IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3RleHQvaGVhZC10aXRsZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5UaXRsZSB7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJUaXRsZVwiOiBcImhlYWQtdGl0bGVfVGl0bGVfXzNtd1hnXCIsXG5cdFwiYm9sZFwiOiBcImhlYWQtdGl0bGVfYm9sZF9fMTJzR3lcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC10aXRsZV9UaXRsZV9fNktiOWgge1xcclxcbiAgICBmb250LXNpemU6IDE0cHggO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC10aXRsZV9ib2xkX19wUzI4dSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy90ZXh0L3RleHQtdGl0bGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE0cHggO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJUaXRsZVwiOiBcInRleHQtdGl0bGVfVGl0bGVfXzZLYjloXCIsXG5cdFwiYm9sZFwiOiBcInRleHQtdGl0bGVfYm9sZF9fcFMyOHVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY24iLCJmcmFtZUJ1dHRvbiIsImJvcmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJiYXNlQnRuIiwiRnJhbWVCb3JkZXIiLCJsaW5rQnV0dG9uIiwibGlua0NvbnRhaW5lciIsImxpbmtzIiwiYnV0dG9uIiwiQ29tcCIsIkJ1dHRvbiIsIlRleHRUaXRsZSIsIkZyYW1lQnV0dG9uIiwiZnJhbWVCdG4iLCJNaW50QnV0dG9uIiwibWludEJ1dHRvbiIsIlN2Z0NoZWNrU3F1YXJlIiwiU3ZnRGlzY29yZCIsIlN2Z0Ryb3BEb3duIiwiU3ZnRHJvcERvd27EsGNvbiIsIlN2Z0V0aExvZ28iLCJTdmdGYWNlYm9vayIsIlN2Z0ZpbmdlcnByaW50IiwiU3ZnSG9tZXBhZ2VPcHRpb24iLCJTdmdMaW5rZG4iLCJTdmdNYWlsIiwiU3ZnTWVkaWEiLCJTdmdNZXRhRGF0YSIsIlN2Z09wZW5zZWFMb2dvIiwiU3ZnUXJDb2RlIiwiU3ZnUmFyaWJsZUxvZ28iLCJTdmdTYXZpbmdzUGlnIiwiU3ZnU21hcnRDb250cmFjdMSwY29uIiwiU3ZnVHdpdHRlciIsIlN2Z1ZlY3RvciIsIlN2Z1lvdXR1YmUiLCJkZWZhdWx0IiwiQ2hlY2tTcXVhcmUiLCJEaXNjb3JkIiwiRHJvcERvd27EsGNvbiIsIkRyb3BEb3duIiwiRXRoTG9nbyIsIkZhY2Vib29rIiwiRmluZ2VycHJpbnQiLCJIb21lcGFnZU9wdGlvbiIsIsSwbnN0YWdyYW0iLCJMaW5rZG4iLCJNYWlsIiwiTWVkaWEiLCJNZXRhRGF0YSIsIk9wZW5zZWFMb2dvIiwiUXJDb2RlIiwiUmFyaWJsZUxvZ28iLCJTYXZpbmdzUGlnIiwiU21hcnRDb250cmFjdMSwY29uIiwiVHdpdHRlciIsIlZlY3RvciIsIllvdXR1YmUiLCJTdmfEsG5zdGFncmFtIiwidXNlV2luZG93U2l6ZSIsIkNPTlNUIiwiTmF2aWdhdGlvbiIsIkV4aGliaXRpb25TaWRlIiwiUXVvdGF0aW9uIiwiTGF5b3V0Iiwic2l6ZSIsImxheW91dCIsInNpemluZyIsImNvbG9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIk5hdmlnYXRpb25CdXR0b24iLCJuYXYiLCJIZWFkVGl0bGUiLCJNRU5VIiwia2V5IiwiaWNvbiIsInRpdGxlIiwiZmxhdCIsIm5hdmlnYXRvciIsIm1hcmsiLCJuYXZCdG4iLCJtYXAiLCJtZW51Iiwic3ViQnRuIiwibG9naW5CdXR0b24iLCJQaG90byIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGhvdG8iLCJpbWciLCJFeGhpYml0aW9uIiwiSGVhZGVyIiwiVGV4dCIsIk93bmVyIiwiY29udGFpbmVyIiwiYWR2ZXJ0IiwiYWR2ZXJ0SGVhZGVyIiwiYm9yZGVyTGluZSIsInN1YlRleHQiLCJwaG90b0V4aGliaXRpb24iLCJwaG90b3MiLCJvd25lciIsInN1Yk93bmVyIiwiSWNvbiIsInF1byIsInF1b0hlYWRlciIsInF1b0hlYWRlclRleHQiLCJTcGFuIiwicXVvTWlkZGxlIiwicXVvTWlkZGxlVGV4dCIsInF1b0Zvb3RlciIsInF1b0Zvb3RlclRleHQiLCJxdW9JY29ucyIsInF1b1JhcmlibGUiLCJxdW9PcGVuc2VhIiwiYm9sZCIsIm9wYWNpdHkiLCJUaXRsZSIsImZvbnRTaXplIiwiVEFCTEVUX1NJWkUiLCJERVNLVE9QX1NJWkUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=