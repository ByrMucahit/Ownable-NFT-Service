"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./constant/index.js");
/* harmony import */ var _components_col_markSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/col-markSide */ "./components/col-markSide.js");
/* harmony import */ var _components_col_mainSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/col-mainSide */ "./components/col-mainSide.js");
/* harmony import */ var _components_col_loginSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/col-loginSide */ "./components/col-loginSide.js");
/* harmony import */ var _Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Hook/useWindowsSize */ "./Hook/useWindowsSize.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout.js",
    _s = $RefreshSig$();











function Layout(_ref) {
  _s();

  var children = _ref.children;
  var size = (0,_Hook_useWindowsSize__WEBPACK_IMPORTED_MODULE_6__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().layout)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_col_markSide__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "Sidebar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_col_mainSide__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: JSON.stringify(size)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, this), size.width > _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_col_loginSide__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: "Extra"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 47
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzlkOTg3ZDUxYjZiYmYyY2FhMjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTUSxNQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzFCLE1BQU1DLElBQUksR0FBR0gsNkRBQWEsRUFBMUI7QUFFQSxzQkFBTztBQUFLLGFBQVMsRUFBRU4saURBQUUsQ0FBQ0Msa0VBQUQsQ0FBbEI7QUFBQSw0QkFDRCw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURDLGVBRUQsOERBQUMsNkRBQUQ7QUFBQSxnQkFBV1UsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWY7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkMsRUFHQUEsSUFBSSxDQUFDSSxLQUFMLEdBQWFYLDBEQUFiLGlCQUFtQyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztHQVJRSztVQUNRRDs7O0tBRFJDO0FBVVQsK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSwrREFBYztBQUNWTyxFQUFBQSxXQUFXLEVBQUUsR0FESDtBQUVWQyxFQUFBQSxZQUFZLEVBQUU7QUFGSixDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb25zdGFudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IENPTlNUIGZyb20gJy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgTWFya1NpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2wtbWFya1NpZGUnXHJcbmltcG9ydCBNYWluU2lkZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbC1tYWluU2lkZSdcclxuaW1wb3J0IExvZ2luU2lkZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbC1sb2dpblNpZGUnXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uL0hvb2svdXNlV2luZG93c1NpemUnXHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmxheW91dCl9PlxyXG4gICAgICAgICAgPE1hcmtTaWRlPlNpZGViYXI8L01hcmtTaWRlPlxyXG4gICAgICAgICAgPE1haW5TaWRlPntKU09OLnN0cmluZ2lmeShzaXplKX08L01haW5TaWRlPlxyXG4gICAgICAgICAge3NpemUud2lkdGggPiBDT05TVC5UQUJMRVRfU0laRSAmJiAgPExvZ2luU2lkZT5FeHRyYTwvTG9naW5TaWRlPn1cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIFRBQkxFVF9TSVpFOiA5NDMsXHJcbiAgICBERVNLVE9QX1NJWkU6IDEyNzBcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNuIiwic3R5bGVzIiwiQ09OU1QiLCJNYXJrU2lkZSIsIk1haW5TaWRlIiwiTG9naW5TaWRlIiwidXNlV2luZG93U2l6ZSIsIkxheW91dCIsImNoaWxkcmVuIiwic2l6ZSIsImxheW91dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aCIsIlRBQkxFVF9TSVpFIiwiREVTS1RPUF9TSVpFIl0sInNvdXJjZVJvb3QiOiIifQ==