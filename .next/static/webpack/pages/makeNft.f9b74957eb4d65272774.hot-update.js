self["webpackHotUpdate_N_E"]("pages/makeNft",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC5mOWI3NDk1N2ViNGQ2NTI3Mjc3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHQSxTQUFTRSxjQUFULE9BQWdEO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVJDLEtBQVE7O0FBQzVDLHNCQUNJO0FBQUssYUFBUyxFQUFFSCxnRUFBaEI7QUFBQSwyQkFDUTtBQUFHLGVBQVMsRUFBRUEsK0RBQVVLO0FBQXhCLE9BQThCRixLQUE5QjtBQUFBLGdCQUNDRDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7S0FSUUQ7QUFVVCwrREFBZUEsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1UsVUFBVCxPQUFpQztBQUFBOztBQUFBLHVCQUFaQyxJQUFZO0FBQUEsTUFBWkEsSUFBWSwwQkFBUCxLQUFPO0FBQzdCO0FBQUE7O0FBQ0k7QUFDSjtBQUFRLGVBQVMsRUFBRVosc0VBQW5CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFQSx5RUFBaEI7QUFBQSxnQ0FDSSw4REFBQyw0Q0FBRDtBQUFrQixjQUFJLEVBQUMsR0FBdkI7QUFBMkIsbUJBQVMsRUFBRUEsb0VBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBR0E7QUFBSyxtQkFBUyxFQUFFTSxpREFBRSxDQUFDTixvRUFBRCxDQUFsQjtBQUFBLG9CQUdRUywrQ0FBQSxDQUFTLFVBQUNMLElBQUQsRUFBVTtBQUNmLGdDQUVRLDhEQUFDLDRDQUFEO0FBQ0ksdUJBQVMsRUFBRUosc0VB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QkFBNEIsNEJBQTRCLDZCQUE2Qix3QkFBd0IsK0JBQStCLGdDQUFnQyxhQUFhLG9CQUFvQixrQkFBa0IseUJBQXlCLG9EQUFvRCwwQkFBMEIsOEJBQThCLDRCQUE0QiwwSkFBMEoscUJBQXFCLGdDQUFnQyx3QkFBd0IsNkJBQTZCLFVBQVUsNEJBQTRCLGdDQUFnQyxTQUFTLGtCQUFrQix3QkFBd0IsbUNBQW1DLGFBQWEsMEJBQTBCLGtDQUFrQyxhQUFhLEtBQUssU0FBUywyQkFBMkI7QUFDdDZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uTGluayAoeyBjaGlsZHJlbiwgLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25MaW5rIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCBGcmFtZUJ1dHRvbiBmcm9tIFwiLi4vZnJhbWUvZnJhbWVCdXR0b25cIjtcclxuaW1wb3J0IHtNRU5VfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHtIb21lcGFnZU9wdGlvbn0gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHtmbGF0PWZhbHNlfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8qIE5hdmlnYXRvciAqL1xyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0b3J9PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBocmVmPScvJyBjbGFzc05hbWU9e3N0eWxlcy5jb21wfT5Pd25hYmxlLU5TPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgIHsvKiBNYXJrIFNpZGUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5tYXJrKX0+ICAgXHJcbiAgICAgICAgICAgIHsvKiBMaW5rIFNpZGUgKi99XHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBNRU5VLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YkJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiYgbWVudS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogTG9naW4gQnV0dG9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAge2ZsYXQgJiYgPEhvbWVwYWdlT3B0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlT3B0aW9ufS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4gLmJ1dHRvbl9tZW51X18zN1R0VXtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jLW5hdmlnYXRpb24tZm9udC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXIsIGNvbG9yIDE1MG1zIGxpbmVhciwgYmFja2dyb3VuZCAxNTBtcyBsaW5lYXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuICAgIC5idXR0b25fbWVudV9fMzdUdFUgYXtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtbmF2aWdhdGlvbi1mb250LWNvbG9yKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXIsIGNvbG9yIDE1MG1zIGxpbmVhciwgYmFja2dyb3VuZCAxNTBtcyBsaW5lYXI7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b25fbWVudV9fMzdUdFUgYTpob3ZlcntcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoICAtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgfVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtDQUNDO0lBQ0csV0FBVztJQUNYLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2RUFBNkU7SUFDN0UsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQWlCekI7SUFoQkk7UUFDSSxXQUFXO1FBQ1gscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLDZFQUE2RTtRQUM3RSwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIscUJBQXFCO0lBQ3pCO0lBQ0k7WUFDSSwyQ0FBMkM7UUFDL0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuIC5tZW51e1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgY29sb3I6IHZhcigtLWMtbmF2aWdhdGlvbi1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyLCBiYWNrZ3JvdW5kIDE1MG1zIGxpbmVhcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBhe1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1uYXZpZ2F0aW9uLWZvbnQtY29sb3IpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyLCBiYWNrZ3JvdW5kIDE1MG1zIGxpbmVhcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgICAgIGE6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAgLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWVudVwiOiBcImJ1dHRvbl9tZW51X18zN1R0VVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5hdmlnYXRvciAqL1xcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk17XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYy1pY29uLWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIycHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWMtc2hhZG93LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIycHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDYwMHB4KXtcXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5Ne1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjBweFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiB7XFxyXFxuICAgICAgIGZsZXg6MTtcXHJcXG4gICAgICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFyayAqL1xcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9tYXJrX18zR0ZhTXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgXFxyXFxuXFxyXFxuICAgIC8qIC5uYXZCdG4gYW5kIC5tYXJrIGhhcyB0aGUgc2FtZSBkaXNwbGF5LCBiZWNhdXNlIGJvdGggb2YgdGhlbSBpcyBpbiBkaWZmZXJlbnQgZGl2LCBhbmQgdGhvc2UgdHdvIGRpdiBtdXN0IGJlIHNhbWUgcm93LiovXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNe1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDt9XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogOTQzcHgpe1xcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9sb2dpbkJ1dHRvbl9fMmVBWk17XFxyXFxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0fVxcclxcbiAgICB9XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25faGVhZGVyX18xNmVuTSAubmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOIC5uYXZpZ2F0aW9uX2hvbWVwYWdlT3B0aW9uX18zZ2d3NXtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9oZWFkZXJfXzE2ZW5NIC5uYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE4gLm5hdmlnYXRpb25fY29tcF9fcUYxSGp7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpe1xcclxcblxcclxcbi5uYXZpZ2F0aW9uX2hlYWRlcl9fMTZlbk0gLm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTiAubmF2aWdhdGlvbl9jb21wX19xRjFIantcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOztBQUVkO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7O0FBMkN4Qjs7QUF6Q0k7O0FBWEo7UUFZUSxrQkFBa0I7UUFDbEI7O0FBdUNSOztJQXJDSTs7QUFDQTtPQUNHLE1BQU07T0FDTixhQUFhO0FBZ0NwQjs7QUEzQkksU0FBUzs7QUFDVDtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTs7O0lBR25CLHlIQUF5SDtJQUN6SDs7QUFDQTtRQUNJLG1CQUFtQixDQUd0Qjs7QUFGRzs7QUFGSjtZQUdRLFlBQ1A7SUFBRDs7QUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFQTtRQUlJLGFBQWE7UUFDYixxQkFBcUI7O0lBRXpCOztBQU5JOztBQURKO1lBRVEsa0JBQWtCOztJQUsxQjtRQUpJXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdmlnYXRvciAqL1xcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYy1pY29uLWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIycHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWMtc2hhZG93LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIycHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSgtLWQpe1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAubmF2aWdhdG9yIHtcXHJcXG4gICAgICAgZmxleDoxO1xcclxcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICBcXHJcXG5cXHJcXG5cXHJcXG4gICAgLyogTWFyayAqL1xcclxcbiAgICAubWFya3tcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgXFxyXFxuXFxyXFxuICAgIC8qIC5uYXZCdG4gYW5kIC5tYXJrIGhhcyB0aGUgc2FtZSBkaXNwbGF5LCBiZWNhdXNlIGJvdGggb2YgdGhlbSBpcyBpbiBkaWZmZXJlbnQgZGl2LCBhbmQgdGhvc2UgdHdvIGRpdiBtdXN0IGJlIHNhbWUgcm93LiovXFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ2luQnV0dG9ue1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIEBtZWRpYSgtLXQpe1xcclxcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfX1cXHJcXG5cXHJcXG4gICAgLmhvbWVwYWdlT3B0aW9ue1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tcHtcXHJcXG4gICAgICAgIEBtZWRpYSgtLWQpe1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIm5hdmlnYXRpb25faGVhZGVyX18xNmVuTVwiLFxuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTlwiLFxuXHRcIm1hcmtcIjogXCJuYXZpZ2F0aW9uX21hcmtfXzNHRmFNXCIsXG5cdFwibG9naW5CdXR0b25cIjogXCJuYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTVwiLFxuXHRcImhvbWVwYWdlT3B0aW9uXCI6IFwibmF2aWdhdGlvbl9ob21lcGFnZU9wdGlvbl9fM2dndzVcIixcblx0XCJjb21wXCI6IFwibmF2aWdhdGlvbl9jb21wX19xRjFIalwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIk5hdmlnYXRpb25MaW5rIiwiY2hpbGRyZW4iLCJwcm9wcyIsIm1lbnUiLCJuYXYiLCJjbiIsIk5hdmlnYXRpb25CdXR0b24iLCJGcmFtZUJ1dHRvbiIsIk1FTlUiLCJIb21lcGFnZU9wdGlvbiIsIk5hdmlnYXRpb24iLCJmbGF0IiwiaGVhZGVyIiwibmF2aWdhdG9yIiwiY29tcCIsIm1hcmsiLCJtYXAiLCJzdWJCdG4iLCJocmVmIiwidGl0bGUiLCJrZXkiLCJsb2dpbkJ1dHRvbiIsImhvbWVwYWdlT3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==