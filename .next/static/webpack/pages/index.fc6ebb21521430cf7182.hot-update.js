"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./constant/index.js":
/*!***************************!*\
  !*** ./constant/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./constant/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hook/useWindowsSize */ "./Hook/useWindowsSize.js");
/* harmony import */ var _components_col_markSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/col-markSide */ "./components/col-markSide.js");
/* harmony import */ var _components_col_mainSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/col-mainSide */ "./components/col-mainSide.js");
/* harmony import */ var _components_col_loginSide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/col-loginSide */ "./components/col-loginSide.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\index.js",
    _s = $RefreshSig$();










function HomePage() {
  _s();

  var size = (0,_Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_col_markSide__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: "Sidebar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_col_mainSide__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: JSON.stringify(size)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, this), size.width > _constant__WEBPACK_IMPORTED_MODULE_1__.default.DESKTOP_SIZE && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_col_loginSide__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: "Extra"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 48
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, this);
}

_s(HomePage, "/dTDjnwlNGsRzu12Dr5t7HJe8sA=", false, function () {
  return [_Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_3__.default];
});

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmM2ZWJiMjE1MjE0MzBjZjcxODIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUFjO0FBQ1ZBLEVBQUFBLFdBQVcsRUFBRSxHQURIO0FBRVZDLEVBQUFBLFlBQVksRUFBRTtBQUZKLENBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxTQUFTUSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLE1BQU1DLElBQUksR0FBR0wsNkRBQWEsRUFBMUI7QUFFRSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyw2REFBRDtBQUFBLGdCQUFXTSxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdLQSxJQUFJLENBQUNHLEtBQUwsR0FBYVYsMkRBQWIsaUJBQW9DLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBVk1NO1VBQ01KOzs7S0FETkk7QUFZUCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBUQUJMRVRfU0laRTogOTQzLFxyXG4gICAgREVTS1RPUF9TSVpFOiAxMjcwXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uL0hvb2svdXNlV2luZG93c1NpemUnXHJcblxyXG5pbXBvcnQgTWFya1NpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2wtbWFya1NpZGUnXHJcbmltcG9ydCBNYWluU2lkZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbC1tYWluU2lkZSdcclxuaW1wb3J0IExvZ2luU2lkZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbC1sb2dpblNpZGUnXHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPE1hcmtTaWRlPlNpZGViYXI8L01hcmtTaWRlPlxyXG4gICAgICAgICAgPE1haW5TaWRlPntKU09OLnN0cmluZ2lmeShzaXplKX08L01haW5TaWRlPlxyXG4gICAgICAgICAge3NpemUud2lkdGggPiBDT05TVC5ERVNLVE9QX1NJWkUgJiYgIDxMb2dpblNpZGU+RXh0cmE8L0xvZ2luU2lkZT59XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJUQUJMRVRfU0laRSIsIkRFU0tUT1BfU0laRSIsIlJlYWN0IiwiQ09OU1QiLCJMYXlvdXQiLCJ1c2VXaW5kb3dTaXplIiwiTWFya1NpZGUiLCJNYWluU2lkZSIsIkxvZ2luU2lkZSIsIkhvbWVQYWdlIiwic2l6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=