self["webpackHotUpdate_N_E"]("pages/downloadNFTCreator",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG93bmxvYWRORlRDcmVhdG9yLmY5Yjc0OTU3ZWI0ZDY1MjcyNzc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBLFNBQVNFLGNBQVQsT0FBZ0Q7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBUkMsS0FBUTs7QUFDNUMsc0JBQ0k7QUFBSyxhQUFTLEVBQUVILGdFQUFoQjtBQUFBLDJCQUNRO0FBQUcsZUFBUyxFQUFFQSwrREFBVUs7QUFBeEIsT0FBOEJGLEtBQTlCO0FBQUEsZ0JBQ0NEO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztLQVJRRDtBQVVULCtEQUFlQSxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTVSxVQUFULE9BQWlDO0FBQUE7O0FBQUEsdUJBQVpDLElBQVk7QUFBQSxNQUFaQSxJQUFZLDBCQUFQLEtBQU87QUFDN0I7QUFBQTs7QUFDSTtBQUNKO0FBQVEsZUFBUyxFQUFFWixzRUFBbkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGdDQUNJLDhEQUFDLDRDQUFEO0FBQWtCLGNBQUksRUFBQyxHQUF2QjtBQUEyQixtQkFBUyxFQUFFQSxvRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHQTtBQUFLLG1CQUFTLEVBQUVNLGlEQUFFLENBQUNOLG9FQUFELENBQWxCO0FBQUEsb0JBR1FTLCtDQUFBLENBQVMsVUFBQ0wsSUFBRCxFQUFVO0FBQ2YsZ0NBRVEsOERBQUMsNENBQUQ7QUFDSSx1QkFB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MkIsdURBQXVELDRCQUE0Qiw0QkFBNEIsNkJBQTZCLHdCQUF3QiwrQkFBK0IsZ0NBQWdDLGFBQWEsb0JBQW9CLGtCQUFrQix5QkFBeUIsb0RBQW9ELDBCQUEwQiw4QkFBOEIsNEJBQTRCLDBKQUEwSixxQkFBcUIsZ0NBQWdDLHdCQUF3Qiw2QkFBNkIsVUFBVSw0QkFBNEIsZ0NBQWdDLFNBQVMsa0JBQWtCLHdCQUF3QixtQ0FBbUMsYUFBYSwwQkFBMEIsa0NBQWtDLGFBQWEsS0FBSyxTQUFTLDJCQUEyQjtBQUN0Nkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25MaW5rICh7IGNoaWxkcmVuLCAuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkxpbmsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IEZyYW1lQnV0dG9uIGZyb20gXCIuLi9mcmFtZS9mcmFtZUJ1dHRvblwiO1xyXG5pbXBvcnQge01FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe2ZsYXQ9ZmFsc2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogTmF2aWdhdG9yICovXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGhyZWY9Jy8nIGNsYXNzTmFtZT17c3R5bGVzLmNvbXB9Pk93bmFibGUtTlM8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgey8qIE1hcmsgU2lkZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1hcmspfT4gICBcclxuICAgICAgICAgICAgey8qIExpbmsgU2lkZSAqL31cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJiBtZW51LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBMb2dpbiBCdXR0b24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgPEZyYW1lQnV0dG9uPkxvZ2luPC9GcmFtZUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB7ZmxhdCAmJiA8SG9tZXBhZ2VPcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZXBhZ2VPcHRpb259Lz59XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbiAuYnV0dG9uX21lbnVfXzM3VHRVe1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgY29sb3I6IHZhcigtLWMtbmF2aWdhdGlvbi1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyLCBiYWNrZ3JvdW5kIDE1MG1zIGxpbmVhcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4gICAgLmJ1dHRvbl9tZW51X18zN1R0VSBhe1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1uYXZpZ2F0aW9uLWZvbnQtY29sb3IpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyLCBiYWNrZ3JvdW5kIDE1MG1zIGxpbmVhcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1dHRvbl9tZW51X18zN1R0VSBhOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggIC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxuICAgICAgICB9XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0NBQ0M7SUFDRyxXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDZFQUE2RTtJQUM3RSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBaUJ6QjtJQWhCSTtRQUNJLFdBQVc7UUFDWCxxQ0FBcUM7UUFDckMsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsNkVBQTZFO1FBQzdFLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixxQkFBcUI7SUFDekI7SUFDSTtZQUNJLDJDQUEyQztRQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4gLm1lbnV7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1uYXZpZ2F0aW9uLWZvbnQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXIsIGJhY2tncm91bmQgMTUwbXMgbGluZWFyO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGF7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jLW5hdmlnYXRpb24tZm9udC1jb2xvcik7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXIsIGJhY2tncm91bmQgMTUwbXMgbGluZWFyO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAgICAgYTpob3ZlcntcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoICAtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZW51XCI6IFwiYnV0dG9uX21lbnVfXzM3VHRVXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTmF2aWdhdG9yICovXFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWljb24tY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYy1zaGFkb3ctY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpe1xcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk17XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIHtcXHJcXG4gICAgICAgZmxleDoxO1xcclxcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYXJrICovXFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX21hcmtfXzNHRmFNe1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICBcXHJcXG5cXHJcXG4gICAgLyogLm5hdkJ0biBhbmQgLm1hcmsgaGFzIHRoZSBzYW1lIGRpc3BsYXksIGJlY2F1c2UgYm90aCBvZiB0aGVtIGlzIGluIGRpZmZlcmVudCBkaXYsIGFuZCB0aG9zZSB0d28gZGl2IG11c3QgYmUgc2FtZSByb3cuKi9cXHJcXG4gICAgfVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9sb2dpbkJ1dHRvbl9fMmVBWk17XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O31cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA5NDNweCl7XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTXtcXHJcXG4gICAgICAgICAgICBmbG9hdDogcmlnaHR9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25faG9tZXBhZ2VPcHRpb25fXzNnZ3c1e1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9jb21wX19xRjFIantcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiA2MDBweCl7XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2NvbXBfX3FGMUhqe1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjs7QUEyQ3hCOztBQXpDSTs7QUFYSjtRQVlRLGtCQUFrQjtRQUNsQjs7QUF1Q1I7O0lBckNJOztBQUNBO09BQ0csTUFBTTtPQUNOLGFBQWE7QUFnQ3BCOztBQTNCSSxTQUFTOztBQUNUO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixlQUFlOzs7SUFHbkIseUhBQXlIO0lBQ3pIOztBQUNBO1FBQ0ksbUJBQW1CLENBR3RCOztBQUZHOztBQUZKO1lBR1EsWUFDUDtJQUFEOztBQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVBO1FBSUksYUFBYTtRQUNiLHFCQUFxQjs7SUFFekI7O0FBTkk7O0FBREo7WUFFUSxrQkFBa0I7O0lBSzFCO1FBSklcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2aWdhdG9yICovXFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWljb24tY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYy1zaGFkb3ctY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhKC0tZCl7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5uYXZpZ2F0b3Ige1xcclxcbiAgICAgICBmbGV4OjE7XFxyXFxuICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbiAgICAvKiBNYXJrICovXFxyXFxuICAgIC5tYXJre1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICBcXHJcXG5cXHJcXG4gICAgLyogLm5hdkJ0biBhbmQgLm1hcmsgaGFzIHRoZSBzYW1lIGRpc3BsYXksIGJlY2F1c2UgYm90aCBvZiB0aGVtIGlzIGluIGRpZmZlcmVudCBkaXYsIGFuZCB0aG9zZSB0d28gZGl2IG11c3QgYmUgc2FtZSByb3cuKi9cXHJcXG4gICAgfVxcclxcbiAgICAubG9naW5CdXR0b257XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgQG1lZGlhKC0tdCl7XFxyXFxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9fVxcclxcblxcclxcbiAgICAuaG9tZXBhZ2VPcHRpb257XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb21we1xcclxcbiAgICAgICAgQG1lZGlhKC0tZCl7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwibmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NXCIsXG5cdFwibmF2aWdhdG9yXCI6IFwibmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOXCIsXG5cdFwibWFya1wiOiBcIm5hdmlnYXRpb25fbWFya19fM0dGYU1cIixcblx0XCJsb2dpbkJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNXCIsXG5cdFwiaG9tZXBhZ2VPcHRpb25cIjogXCJuYXZpZ2F0aW9uX2hvbWVwYWdlT3B0aW9uX18zZ2d3NVwiLFxuXHRcImNvbXBcIjogXCJuYXZpZ2F0aW9uX2NvbXBfX3FGMUhqXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTmF2aWdhdGlvbkxpbmsiLCJjaGlsZHJlbiIsInByb3BzIiwibWVudSIsIm5hdiIsImNuIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIkZyYW1lQnV0dG9uIiwiTUVOVSIsIkhvbWVwYWdlT3B0aW9uIiwiTmF2aWdhdGlvbiIsImZsYXQiLCJoZWFkZXIiLCJuYXZpZ2F0b3IiLCJjb21wIiwibWFyayIsIm1hcCIsInN1YkJ0biIsImhyZWYiLCJ0aXRsZSIsImtleSIsImxvZ2luQnV0dG9uIiwiaG9tZXBhZ2VPcHRpb24iXSwic291cmNlUm9vdCI6IiJ9