self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navigation/button.js":
/*!*****************************************!*\
  !*** ./components/navigation/button.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.module.css */ "./components/navigation/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["children"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function NavigationLink(_ref) {
  var children = _ref.children,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", _objectSpread(_objectSpread({
      className: (_button_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav)
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = NavigationLink;
/* harmony default export */ __webpack_exports__["default"] = (NavigationLink);

var _c;

$RefreshReg$(_c, "NavigationLink");

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
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";









function Navigation(_ref) {
  var _this = this;

  var _ref$flat = _ref.flat,
      flat = _ref$flat === void 0 ? false : _ref$flat;
  return (
    /*#__PURE__*/

    /* Navigator */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("header", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigator),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().comp),
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().mark)),
          children: _constant__WEBPACK_IMPORTED_MODULE_4__.MENU.map(function (menu) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
              className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().subBtn),
              href: menu.href,
              children: !flat && menu.title
            }, menu.key, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_5__.HomepageOption, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().homepageOption)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/navigation/button.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n .button_menu__37TtU{\r\n    width: auto;\r\n    color: var(--c-navigation-font-color);\r\n    font-size: 13px !important;\r\n    align-self: center;\r\n    text-align: center;\r\n    transition: opacity 150ms linear, color 150ms linear, background 150ms linear;\r\n    font-weight: 500 !important;\r\n    line-height: 13px !important;\r\n    padding-right: 10px;\r\n    text-transform: initial;\r\n    text-decoration: none;\r\n}\r\n    .button_menu__37TtU a{\r\n        width: auto;\r\n        color: var(--c-navigation-font-color);\r\n        font-size: 13px !important;\r\n        align-self: center;\r\n        text-align: center;\r\n        transition: opacity 150ms linear, color 150ms linear, background 150ms linear;\r\n        font-weight: 500 !important;\r\n        line-height: 13px !important;\r\n        padding-right: 10px;\r\n        text-transform: initial;\r\n        text-decoration: none;\r\n    }\r\n    .button_menu__37TtU a:hover{\r\n            background-color: var(  --c-btn-background);\r\n        }\r\n", "",{"version":3,"sources":["webpack://components/navigation/button.module.css"],"names":[],"mappings":";CACC;IACG,WAAW;IACX,qCAAqC;IACrC,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,2BAA2B;IAC3B,4BAA4B;IAC5B,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;AAiBzB;IAhBI;QACI,WAAW;QACX,qCAAqC;QACrC,0BAA0B;QAC1B,kBAAkB;QAClB,kBAAkB;QAClB,6EAA6E;QAC7E,2BAA2B;QAC3B,4BAA4B;QAC5B,mBAAmB;QACnB,uBAAuB;QACvB,qBAAqB;IACzB;IACI;YACI,2CAA2C;QAC/C","sourcesContent":["\r\n .menu{\r\n    width: auto;\r\n    color: var(--c-navigation-font-color);\r\n    font-size: 13px !important;\r\n    align-self: center;\r\n    text-align: center;\r\n    transition: opacity 150ms linear, color 150ms linear, background 150ms linear;\r\n    font-weight: 500 !important;\r\n    line-height: 13px !important;\r\n    padding-right: 10px;\r\n    text-transform: initial;\r\n    text-decoration: none;\r\n    a{\r\n        width: auto;\r\n        color: var(--c-navigation-font-color);\r\n        font-size: 13px !important;\r\n        align-self: center;\r\n        text-align: center;\r\n        transition: opacity 150ms linear, color 150ms linear, background 150ms linear;\r\n        font-weight: 500 !important;\r\n        line-height: 13px !important;\r\n        padding-right: 10px;\r\n        text-transform: initial;\r\n        text-decoration: none;\r\n    }\r\n        a:hover{\r\n            background-color: var(  --c-btn-background);\r\n        }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"menu": "button_menu__37TtU"
};
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Navigator */\r\n\r\n.navigation_header__16enM{\r\n    position: relative;\r\n    background: var(--c-icon-color);\r\n    box-shadow: none;\r\n    padding-top: 22px;\r\n    padding-left: 20px;\r\n    border-bottom: 1px solid var(--c-shadow-color);\r\n    padding-right: 20px;\r\n    flex-direction: row;\r\n    padding-bottom: 22px;\r\n\r\n}\r\n\r\n@media(min-width: 600px){\r\n\r\n.navigation_header__16enM{\r\n        padding-left: 60px;\r\n        padding-right: 60px\r\n\r\n}\r\n\r\n    }\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN {\r\n       flex:1;\r\n       display: flex;\r\n}\r\n\r\n/* Mark */\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN .navigation_mark__3GFaM{\r\n        display: flex;\r\n        margin-left: auto;\r\n        margin-right: 0;\r\n       \r\n\r\n    /* .navBtn and .mark has the same display, because both of them is in different div, and those two div must be same row.*/\r\n    }\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN .navigation_loginButton__2eAZM{\r\n        padding-right: 20px;}\r\n\r\n@media(max-width: 943px){\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN .navigation_loginButton__2eAZM{\r\n            float: right}\r\n    }\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN .navigation_homepageOption__3ggw5{\r\n        padding-right: 10px;\r\n    }\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN .navigation_comp__qF1Hj{\r\n        display: flex;\r\n        text-decoration: none;\r\n\r\n    }\r\n\r\n@media(min-width: 600px){\r\n\r\n.navigation_header__16enM .navigation_navigator__2CchN .navigation_comp__qF1Hj{\r\n            margin-right: 30px;\r\n\r\n    }\r\n        }\r\n\r\n", "",{"version":3,"sources":["webpack://components/navigation/navigation.module.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,8CAA8C;IAC9C,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;;AA2CxB;;AAzCI;;AAXJ;QAYQ,kBAAkB;QAClB;;AAuCR;;IArCI;;AACA;OACG,MAAM;OACN,aAAa;AAgCpB;;AA3BI,SAAS;;AACT;QACI,aAAa;QACb,iBAAiB;QACjB,eAAe;;;IAGnB,yHAAyH;IACzH;;AACA;QACI,mBAAmB,CAGtB;;AAFG;;AAFJ;YAGQ,YACP;IAAD;;AAEA;QACI,mBAAmB;IACvB;;AAEA;QAII,aAAa;QACb,qBAAqB;;IAEzB;;AANI;;AADJ;YAEQ,kBAAkB;;IAK1B;QAJI","sourcesContent":["/* Navigator */\r\n\r\n.header{\r\n    position: relative;\r\n    background: var(--c-icon-color);\r\n    box-shadow: none;\r\n    padding-top: 22px;\r\n    padding-left: 20px;\r\n    border-bottom: 1px solid var(--c-shadow-color);\r\n    padding-right: 20px;\r\n    flex-direction: row;\r\n    padding-bottom: 22px;\r\n\r\n    @media(--d){\r\n        padding-left: 60px;\r\n        padding-right: 60px;\r\n\r\n    }\r\n    .navigator {\r\n       flex:1;\r\n       display: flex;\r\n\r\n    \r\n\r\n\r\n    /* Mark */\r\n    .mark{\r\n        display: flex;\r\n        margin-left: auto;\r\n        margin-right: 0;\r\n       \r\n\r\n    /* .navBtn and .mark has the same display, because both of them is in different div, and those two div must be same row.*/\r\n    }\r\n    .loginButton{\r\n        padding-right: 20px;\r\n        @media(--t){\r\n            float: right;\r\n    }}\r\n\r\n    .homepageOption{\r\n        padding-right: 10px;\r\n    }\r\n\r\n    .comp{\r\n        @media(--d){\r\n            margin-right: 30px;\r\n        }\r\n        display: flex;\r\n        text-decoration: none;\r\n\r\n    }\r\n}\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "navigation_header__16enM",
	"navigator": "navigation_navigator__2CchN",
	"mark": "navigation_mark__3GFaM",
	"loginButton": "navigation_loginButton__2eAZM",
	"homepageOption": "navigation_homepageOption__3ggw5",
	"comp": "navigation_comp__qF1Hj"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjliNzQ5NTdlYjRkNjUyNzI3NzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0EsU0FBU0UsY0FBVCxPQUFnRDtBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFSQyxLQUFROztBQUM1QyxzQkFDSTtBQUFLLGFBQVMsRUFBRUgsZ0VBQWhCO0FBQUEsMkJBQ1E7QUFBRyxlQUFTLEVBQUVBLCtEQUFVSztBQUF4QixPQUE4QkYsS0FBOUI7QUFBQSxnQkFDQ0Q7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0tBUlFEO0FBVVQsK0RBQWVBLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNVLFVBQVQsT0FBaUM7QUFBQTs7QUFBQSx1QkFBWkMsSUFBWTtBQUFBLE1BQVpBLElBQVksMEJBQVAsS0FBTztBQUM3QjtBQUFBOztBQUNJO0FBQ0o7QUFBUSxlQUFTLEVBQUVaLHNFQUFuQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsZ0NBQ0ksOERBQUMsNENBQUQ7QUFBa0IsY0FBSSxFQUFDLEdBQXZCO0FBQTJCLG1CQUFTLEVBQUVBLG9FQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdBO0FBQUssbUJBQVMsRUFBRU0saURBQUUsQ0FBQ04sb0VBQUQsQ0FBbEI7QUFBQSxvQkFHUVMsK0NBQUEsQ0FBUyxVQUFDTCxJQUFELEVBQVU7QUFDZixnQ0FFUSw4REFBQyw0Q0FBRDtBQUNJLHVCQUFTLEVBQUVKLHNFQURm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QTRCLDRCQUE0Qiw2QkFBNkIsd0JBQXdCLCtCQUErQixnQ0FBZ0MsYUFBYSxvQkFBb0Isa0JBQWtCLHlCQUF5QixvREFBb0QsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsMEpBQTBKLHFCQUFxQixnQ0FBZ0Msd0JBQXdCLDZCQUE2QixVQUFVLDRCQUE0QixnQ0FBZ0MsU0FBUyxrQkFBa0Isd0JBQXdCLG1DQUFtQyxhQUFhLDBCQUEwQixrQ0FBa0MsYUFBYSxLQUFLLFNBQVMsMkJBQTJCO0FBQ3Q2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkxpbmsgKHsgY2hpbGRyZW4sIC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2fSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uTGluayIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcbmltcG9ydCB7TUVOVX0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7SG9tZXBhZ2VPcHRpb259IGZyb20gJy4uL2ljb25zJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBOYXZpZ2F0b3IgKi9cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaHJlZj0nLycgY2xhc3NOYW1lPXtzdHlsZXMuY29tcH0+T3duYWJsZS1OUzwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICB7LyogTWFyayBTaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFyayl9PiAgIFxyXG4gICAgICAgICAgICB7LyogTGluayBTaWRlICovfVxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSB7bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bWVudS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFmbGF0ICYmIG1lbnUudGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIExvZ2luIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lcGFnZU9wdGlvbn0vPn1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuIC5idXR0b25fbWVudV9fMzdUdFV7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1uYXZpZ2F0aW9uLWZvbnQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXIsIGJhY2tncm91bmQgMTUwbXMgbGluZWFyO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbiAgICAuYnV0dG9uX21lbnVfXzM3VHRVIGF7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jLW5hdmlnYXRpb24tZm9udC1jb2xvcik7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXIsIGJhY2tncm91bmQgMTUwbXMgbGluZWFyO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYnV0dG9uX21lbnVfXzM3VHRVIGE6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAgLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Q0FDQztJQUNHLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkVBQTZFO0lBQzdFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFpQnpCO0lBaEJJO1FBQ0ksV0FBVztRQUNYLHFDQUFxQztRQUNyQywwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQiw2RUFBNkU7UUFDN0UsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtJQUN6QjtJQUNJO1lBQ0ksMkNBQTJDO1FBQy9DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiAubWVudXtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jLW5hdmlnYXRpb24tZm9udC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXIsIGNvbG9yIDE1MG1zIGxpbmVhciwgYmFja2dyb3VuZCAxNTBtcyBsaW5lYXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYXtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtbmF2aWdhdGlvbi1mb250LWNvbG9yKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXIsIGNvbG9yIDE1MG1zIGxpbmVhciwgYmFja2dyb3VuZCAxNTBtcyBsaW5lYXI7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICAgICBhOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggIC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxuICAgICAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1lbnVcIjogXCJidXR0b25fbWVudV9fMzdUdFVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOYXZpZ2F0b3IgKi9cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5Ne1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWMtaWNvbi1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jLXNoYWRvdy1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiA2MDBweCl7XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTXtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHhcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4ge1xcclxcbiAgICAgICBmbGV4OjE7XFxyXFxuICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIE1hcmsgKi9cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fbWFya19fM0dGYU17XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgIFxcclxcblxcclxcbiAgICAvKiAubmF2QnRuIGFuZCAubWFyayBoYXMgdGhlIHNhbWUgZGlzcGxheSwgYmVjYXVzZSBib3RoIG9mIHRoZW0gaXMgaW4gZGlmZmVyZW50IGRpdiwgYW5kIHRob3NlIHR3byBkaXYgbXVzdCBiZSBzYW1lIHJvdy4qL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTXtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7fVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDk0M3B4KXtcXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNe1xcclxcbiAgICAgICAgICAgIGZsb2F0OiByaWdodH1cXHJcXG4gICAgfVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9ob21lcGFnZU9wdGlvbl9fM2dndzV7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2NvbXBfX3FGMUhqe1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDYwMHB4KXtcXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fY29tcF9fcUYxSGp7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFFZDtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9COztBQTJDeEI7O0FBekNJOztBQVhKO1FBWVEsa0JBQWtCO1FBQ2xCOztBQXVDUjs7SUFyQ0k7O0FBQ0E7T0FDRyxNQUFNO09BQ04sYUFBYTtBQWdDcEI7O0FBM0JJLFNBQVM7O0FBQ1Q7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGVBQWU7OztJQUduQix5SEFBeUg7SUFDekg7O0FBQ0E7UUFDSSxtQkFBbUIsQ0FHdEI7O0FBRkc7O0FBRko7WUFHUSxZQUNQO0lBQUQ7O0FBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0FBRUE7UUFJSSxhQUFhO1FBQ2IscUJBQXFCOztJQUV6Qjs7QUFOSTs7QUFESjtZQUVRLGtCQUFrQjs7SUFLMUI7UUFKSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOYXZpZ2F0b3IgKi9cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWMtaWNvbi1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jLXNoYWRvdy1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xcclxcblxcclxcbiAgICBAbWVkaWEoLS1kKXtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmlnYXRvciB7XFxyXFxuICAgICAgIGZsZXg6MTtcXHJcXG4gICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIE1hcmsgKi9cXHJcXG4gICAgLm1hcmt7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgIFxcclxcblxcclxcbiAgICAvKiAubmF2QnRuIGFuZCAubWFyayBoYXMgdGhlIHNhbWUgZGlzcGxheSwgYmVjYXVzZSBib3RoIG9mIHRoZW0gaXMgaW4gZGlmZmVyZW50IGRpdiwgYW5kIHRob3NlIHR3byBkaXYgbXVzdCBiZSBzYW1lIHJvdy4qL1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dpbkJ1dHRvbntcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBAbWVkaWEoLS10KXtcXHJcXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIH19XFxyXFxuXFxyXFxuICAgIC5ob21lcGFnZU9wdGlvbntcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbXB7XFxyXFxuICAgICAgICBAbWVkaWEoLS1kKXtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJuYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk1cIixcblx0XCJuYXZpZ2F0b3JcIjogXCJuYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE5cIixcblx0XCJtYXJrXCI6IFwibmF2aWdhdGlvbl9tYXJrX18zR0ZhTVwiLFxuXHRcImxvZ2luQnV0dG9uXCI6IFwibmF2aWdhdGlvbl9sb2dpbkJ1dHRvbl9fMmVBWk1cIixcblx0XCJob21lcGFnZU9wdGlvblwiOiBcIm5hdmlnYXRpb25faG9tZXBhZ2VPcHRpb25fXzNnZ3c1XCIsXG5cdFwiY29tcFwiOiBcIm5hdmlnYXRpb25fY29tcF9fcUYxSGpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJOYXZpZ2F0aW9uTGluayIsImNoaWxkcmVuIiwicHJvcHMiLCJtZW51IiwibmF2IiwiY24iLCJOYXZpZ2F0aW9uQnV0dG9uIiwiRnJhbWVCdXR0b24iLCJNRU5VIiwiSG9tZXBhZ2VPcHRpb24iLCJOYXZpZ2F0aW9uIiwiZmxhdCIsImhlYWRlciIsIm5hdmlnYXRvciIsImNvbXAiLCJtYXJrIiwibWFwIiwic3ViQnRuIiwiaHJlZiIsInRpdGxlIiwia2V5IiwibG9naW5CdXR0b24iLCJob21lcGFnZU9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=