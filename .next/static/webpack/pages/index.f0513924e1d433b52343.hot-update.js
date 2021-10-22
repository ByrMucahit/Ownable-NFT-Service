self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/button-mintButton.js":
/*!*****************************************!*\
  !*** ./components/button-mintButton.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_mintButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-mintButton.module.css */ "./components/button-mintButton.module.css");
/* harmony import */ var _button_mintButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_mintButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button */ "./components/button/button.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button-mintButton.js";






function MintButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_button__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_button_mintButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().mintButton),
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_2__.default, {
      bold: true,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
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

/***/ "./components/button/button.js":
/*!*************************************!*\
  !*** ./components/button/button.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.module.css */ "./components/button/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["border", "children", "className"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\button.js";






function frameButton(_ref) {
  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      children = _ref.children,
      className = _ref.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().baseBtn), border && (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().FrameBorder), className]),
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
      className: (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().links),
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Comp, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().baseBtn), border && (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().FrameBorder), className]),
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

/***/ "./components/frame-button.js":
/*!************************************!*\
  !*** ./components/frame-button.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frame_button_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame-button.module.css */ "./components/frame-button.module.css");
/* harmony import */ var _frame_button_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_frame_button_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button */ "./components/button/button.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame-button.js";






function FrameButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_button__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_frame_button_module_css__WEBPACK_IMPORTED_MODULE_4___default().frameBtn),
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

/***/ "./components/navigation-button.js":
/*!*****************************************!*\
  !*** ./components/navigation-button.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-button.module.css */ "./components/navigation-button.module.css");
/* harmony import */ var _navigation_button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navigation_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button */ "./components/button/button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation-button.js";





function NavigationButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button_button__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_navigation_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),
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

/***/ "./components/button/button.module.css":
/*!*********************************************!*\
  !*** ./components/button/button.module.css ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/button.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/button.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/button.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/button.module.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/button/button.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Container from button */\r\n    /* Button Elements */\r\n    .button_baseBtn__2PkKs{\r\n        background-color: transparent;\r\n        display: inline-block;\r\n        border:none;  \r\n    }\r\n\r\n    /* While hovering on buttons of navigation, text will have been yellow. */\r\n    .button_baseBtn__2PkKs:hover{\r\n        color: var(--c-btn-background)\r\n    }\r\n\r\n    /* If Button has border, This code snippet will have been activated*/\r\n    .button_FrameBorder__3LCki{\r\n        border: 2px solid;\r\n        border-color: var( --c-btn-background);\r\n        width: 92.94px;\r\n        height: 53.81px;\r\n                }\r\n\r\n    /* while hovering on button, Button background will have been black, even text will have been yellow */\r\n    .button_FrameBorder__3LCki:hover{\r\n        background: var(--c-frame-background);\r\n                        }\r\n\r\n    .button_linkContainer__1RzOC+*{\r\n            padding-left: 20px;\r\n        }\r\n\r\n    .button_linkContainer__1RzOC:hover{\r\n        color:var(--c-frame-background);\r\n    }\r\n\r\n  \r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://components/button/button.module.css"],"names":[],"mappings":"AAAA,0BAA0B;IACtB,oBAAoB;IACpB;QACI,6BAA6B;QAC7B,qBAAqB;QACrB,WAAW;IACf;;IAEA,yEAAyE;IACzE;QACI;IACJ;;IAEA,oEAAoE;IACpE;QACI,iBAAiB;QACjB,sCAAsC;QACtC,cAAc;QACd,eAAe;gBACP;;IAEZ,sGAAsG;IACtG;QACI,qCAAqC;wBACrB;;IAIhB;YACI,kBAAkB;QACtB;;IAMJ;QACI,+BAA+B;IACnC","sourcesContent":["/* Container from button */\r\n    /* Button Elements */\r\n    .baseBtn{\r\n        background-color: transparent;\r\n        display: inline-block;\r\n        border:none;  \r\n    }\r\n\r\n    /* While hovering on buttons of navigation, text will have been yellow. */\r\n    .baseBtn:hover{\r\n        color: var(--c-btn-background)\r\n    }\r\n\r\n    /* If Button has border, This code snippet will have been activated*/\r\n    .FrameBorder{\r\n        border: 2px solid;\r\n        border-color: var( --c-btn-background);\r\n        width: 92.94px;\r\n        height: 53.81px;\r\n                }\r\n\r\n    /* while hovering on button, Button background will have been black, even text will have been yellow */\r\n    .FrameBorder:hover{\r\n        background: var(--c-frame-background);\r\n                        }\r\n\r\n    .linkContainer {\r\n    \r\n        &+*{\r\n            padding-left: 20px;\r\n        }\r\n\r\n    \r\n      \r\n    }\r\n\r\n    .linkContainer:hover{\r\n        color:var(--c-frame-background);\r\n    }\r\n\r\n  \r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"baseBtn": "button_baseBtn__2PkKs",
	"FrameBorder": "button_FrameBorder__3LCki",
	"linkContainer": "button_linkContainer__1RzOC"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA1MTM5MjRlMWQ0MzNiNTIzNDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBOzs7QUFHQSxTQUFTSSxVQUFULE9BQW1DO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQy9CLHNCQUNBLDhEQUFDLG1EQUFEO0FBQVMsYUFBUyxFQUFFSixpRkFBcEI7QUFBdUMsVUFBTSxNQUE3QztBQUFBLDJCQUVRLDhEQUFDLHFEQUFEO0FBQVcsVUFBSSxNQUFmO0FBQUEsZ0JBQWlCSTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBTUU7O0tBUEdEO0FBU1QsK0RBQWVBLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLFNBQVNJLFdBQVQsT0FBcUU7QUFBQSx5QkFBOUNDLE1BQThDO0FBQUEsTUFBOUNBLE1BQThDLDRCQUF2QyxLQUF1QztBQUFBLE1BQWhDSixRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkssU0FBc0IsUUFBdEJBLFNBQXNCO0FBQUEsTUFBUkMsS0FBUTs7QUFDakUsc0JBQ1E7QUFDQSxhQUFTLEVBQUVKLGlEQUFFLENBQ1QsQ0FBQ04sbUVBQUQsRUFDQVEsTUFBTSxJQUFJUix1RUFEVixFQUVBUyxTQUZBLENBRFMsQ0FEYjtBQU1JLFFBQUksRUFBQyxRQU5UO0FBQUEsY0FRS0w7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUFZSDs7QUFHRCxTQUFTUyxVQUFULFFBQXVEO0FBQUEsTUFBaENULFFBQWdDLFNBQWhDQSxRQUFnQztBQUFBLE1BQXRCSyxTQUFzQixTQUF0QkEsU0FBc0I7QUFBQSxN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LEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSxpSUFBaUksMENBQTBDLGtDQUFrQywwQkFBMEIsU0FBUywySEFBMkgsbURBQW1ELG9IQUFvSCw4QkFBOEIsbURBQW1ELDJCQUEyQiw0QkFBNEIscUJBQXFCLDRKQUE0SixrREFBa0QsNkJBQTZCLDJDQUEyQyxtQ0FBbUMsYUFBYSwrQ0FBK0MsNENBQTRDLFNBQVMsaUNBQWlDLDJHQUEyRyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksbUdBQW1HLDBDQUEwQyxrQ0FBa0MsMEJBQTBCLFNBQVMsNkdBQTZHLG1EQUFtRCxzR0FBc0csOEJBQThCLG1EQUFtRCwyQkFBMkIsNEJBQTRCLHFCQUFxQiw4SUFBOEksa0RBQWtELDZCQUE2Qiw0QkFBNEIsd0JBQXdCLG1DQUFtQyxhQUFhLCtCQUErQixpQ0FBaUMsNENBQTRDLFNBQVMsNkNBQTZDO0FBQzlpRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi1taW50QnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnJhbWUtYnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24tYnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcz8zNGQ3Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi1taW50QnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24vYnV0dG9uJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4vdGV4dC90ZXh0LXRpdGxlJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1pbnRCdXR0b24gKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLm1pbnRCdXR0b259IGJvcmRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFRleHRUaXRsZSBib2xkPntjaGlsZHJlbn08L1RleHRUaXRsZT5cclxuICAgICAgICBcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuXHJcbmZ1bmN0aW9uIGZyYW1lQnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsaW5rQnV0dG9uICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgLC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+IHtjaGlsZHJlbn0gPC9hPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIGNvbnN0IENvbXAgPSBib3JkZXIgPyBmcmFtZUJ1dHRvbiA6IGxpbmtCdXR0b25cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb21wICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9Db21wPlxyXG4gICAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uXHJcblxyXG4vKlxyXG4gICAgRG9jdW1lbnQ6XHJcbiAgICAtLS0tLS0tLVxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9yZGVyOiBTb21lIGJ1dHRvbiBoYXMgYm9yZGVyLCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gYnV0dG9uIGhhcyBib3JkZXIsIGJvcmRlciBhdHRyaWJ1dGUgd2lsIGhhdmUgYmVlbiAgYWN0aXZhdGVkLiBcclxuICAgIGNoaWxkcmVuOiBDb250ZW50LCB3aGljaCBpbmNsdWRlIHdpdGhpbiBlbGVtZW50LlxyXG4gICAgLi4ucHJvcHM6IFdoYXQgaWYgQW55IHByb3BlcnRpZXMgaXMgcGFzc2VkIGludG8gZnVuY3Rpb24sIEZ1bmN0aW9uIGNhbiBjYXRjaC5cclxuKi9cclxuXHJcbi8qIFxyXG4vLyBUTyBETyBMaXN0XHJcbltdICBmcmFtZSBidXR0b24gLyBUcmFuc3BhcmVudCAtIGNvbG9yXHJcblxyXG4qL1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mcmFtZS1idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24vYnV0dG9uJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gXCIuL3RleHQvdGV4dC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gRnJhbWVCdXR0b24gKHtjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZnJhbWVCdG59XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRUaXRsZT57Y2hpbGRyZW59PC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYW1lQnV0dG9uXHJcblxyXG4vKiBcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIDxUZXh0VGl0bGUvPjogSXQncyB2YXJ5IG9mIHRleHQsIEl0IGp1c3QgaGFzIHNvbWUgc3BlY2lmaWMgYXR0cmlidXRlIHN1Y2ggYXMgMTYgcHggZm9udCBzaXplLCBhbmQgYm9sZCBmb250IHdpZ2h0LlxyXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi1idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24vYnV0dG9uJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbiAoeyBjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9idXR0b24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vYnV0dG9uLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2J1dHRvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbnRhaW5lciBmcm9tIGJ1dHRvbiAqL1xcclxcbiAgICAvKiBCdXR0b24gRWxlbWVudHMgKi9cXHJcXG4gICAgLmJ1dHRvbl9iYXNlQnRuX18yUGtLc3tcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgYm9yZGVyOm5vbmU7ICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBXaGlsZSBob3ZlcmluZyBvbiBidXR0b25zIG9mIG5hdmlnYXRpb24sIHRleHQgd2lsbCBoYXZlIGJlZW4geWVsbG93LiAqL1xcclxcbiAgICAuYnV0dG9uX2Jhc2VCdG5fXzJQa0tzOmhvdmVye1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogSWYgQnV0dG9uIGhhcyBib3JkZXIsIFRoaXMgY29kZSBzbmlwcGV0IHdpbGwgaGF2ZSBiZWVuIGFjdGl2YXRlZCovXFxyXFxuICAgIC5idXR0b25fRnJhbWVCb3JkZXJfXzNMQ2tpe1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHZhciggLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIHdpZHRoOiA5Mi45NHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1My44MXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC8qIHdoaWxlIGhvdmVyaW5nIG9uIGJ1dHRvbiwgQnV0dG9uIGJhY2tncm91bmQgd2lsbCBoYXZlIGJlZW4gYmxhY2ssIGV2ZW4gdGV4dCB3aWxsIGhhdmUgYmVlbiB5ZWxsb3cgKi9cXHJcXG4gICAgLmJ1dHRvbl9GcmFtZUJvcmRlcl9fM0xDa2k6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbl9saW5rQ29udGFpbmVyX18xUnpPQysqe1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbl9saW5rQ29udGFpbmVyX18xUnpPQzpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOnZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEI7SUFDdEIsb0JBQW9CO0lBQ3BCO1FBQ0ksNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixXQUFXO0lBQ2Y7O0lBRUEseUVBQXlFO0lBQ3pFO1FBQ0k7SUFDSjs7SUFFQSxvRUFBb0U7SUFDcEU7UUFDSSxpQkFBaUI7UUFDakIsc0NBQXNDO1FBQ3RDLGNBQWM7UUFDZCxlQUFlO2dCQUNQOztJQUVaLHNHQUFzRztJQUN0RztRQUNJLHFDQUFxQzt3QkFDckI7O0lBSWhCO1lBQ0ksa0JBQWtCO1FBQ3RCOztJQU1KO1FBQ0ksK0JBQStCO0lBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvbnRhaW5lciBmcm9tIGJ1dHRvbiAqL1xcclxcbiAgICAvKiBCdXR0b24gRWxlbWVudHMgKi9cXHJcXG4gICAgLmJhc2VCdG57XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGJvcmRlcjpub25lOyAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogV2hpbGUgaG92ZXJpbmcgb24gYnV0dG9ucyBvZiBuYXZpZ2F0aW9uLCB0ZXh0IHdpbGwgaGF2ZSBiZWVuIHllbGxvdy4gKi9cXHJcXG4gICAgLmJhc2VCdG46aG92ZXJ7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZClcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBJZiBCdXR0b24gaGFzIGJvcmRlciwgVGhpcyBjb2RlIHNuaXBwZXQgd2lsbCBoYXZlIGJlZW4gYWN0aXZhdGVkKi9cXHJcXG4gICAgLkZyYW1lQm9yZGVye1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHZhciggLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIHdpZHRoOiA5Mi45NHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1My44MXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC8qIHdoaWxlIGhvdmVyaW5nIG9uIGJ1dHRvbiwgQnV0dG9uIGJhY2tncm91bmQgd2lsbCBoYXZlIGJlZW4gYmxhY2ssIGV2ZW4gdGV4dCB3aWxsIGhhdmUgYmVlbiB5ZWxsb3cgKi9cXHJcXG4gICAgLkZyYW1lQm9yZGVyOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1mcmFtZS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC5saW5rQ29udGFpbmVyIHtcXHJcXG4gICAgXFxyXFxuICAgICAgICAmKyp7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGlua0NvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOnZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJhc2VCdG5cIjogXCJidXR0b25fYmFzZUJ0bl9fMlBrS3NcIixcblx0XCJGcmFtZUJvcmRlclwiOiBcImJ1dHRvbl9GcmFtZUJvcmRlcl9fM0xDa2lcIixcblx0XCJsaW5rQ29udGFpbmVyXCI6IFwiYnV0dG9uX2xpbmtDb250YWluZXJfXzFSek9DXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiQnV0dG9uIiwiVGV4dFRpdGxlIiwiTWludEJ1dHRvbiIsImNoaWxkcmVuIiwibWludEJ1dHRvbiIsImNuIiwiZnJhbWVCdXR0b24iLCJib3JkZXIiLCJjbGFzc05hbWUiLCJwcm9wcyIsImJhc2VCdG4iLCJGcmFtZUJvcmRlciIsImxpbmtCdXR0b24iLCJsaW5rQ29udGFpbmVyIiwibGlua3MiLCJidXR0b24iLCJDb21wIiwiRnJhbWVCdXR0b24iLCJmcmFtZUJ0biIsIk5hdmlnYXRpb25CdXR0b24iLCJuYXYiXSwic291cmNlUm9vdCI6IiJ9