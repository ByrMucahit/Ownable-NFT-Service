"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    children: [size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
      flat: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 37
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 14
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().sizing),
      style: {
        color: 'white'
      },
      children: JSON.stringify(size)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjNhNDAwYWRhZTA1MmViZGMwNWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDZCxNQUFNQyxJQUFJLEdBQUdQLDREQUFhLEVBQTFCO0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVDLGtFQUFoQjtBQUFBLGVBRU9NLElBQUksQ0FBQ0UsS0FBTCxHQUFhUCwwREFBYixnQkFDSiw4REFBQywyREFBRDtBQUFhLFVBQUk7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGdCQUNrQiw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSHpCLGVBT0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBVUssOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZMLGVBY0k7QUFBTSxlQUFTLEVBQUVELGtFQUFqQjtBQUFnQyxXQUFLLEVBQUU7QUFBQ1csUUFBQUEsS0FBSyxFQUFDO0FBQVAsT0FBdkM7QUFBQSxnQkFBeURDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWtCSDs7R0FwQlFEO1VBQ1FOOzs7S0FEUk07QUFzQlQsK0RBQWVBLE1BQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rL3VzZVdpbmRvd1NpemUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL25hdmlnYXRpb24vbmF2aWdhdGlvblwiXHJcbmltcG9ydCBFeGhpYml0aW9uU2lkZSBmcm9tICcuLi9yb3cvZXhoaWJpdGlvblNpZGUnXHJcbmltcG9ydCBRdW90YXRpb24gZnJvbSBcIi4uL3Jvdy9xdW90YXRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIExheW91dCgpIHtcclxuICAgIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dH0+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7IHNpemUud2lkdGggPCBDT05TVC5UQUJMRVRfU0laRSA/IFxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uICBmbGF0Lz4gOiA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPEV4aGliaXRpb25TaWRlLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxRdW90YXRpb24gLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zaXppbmd9IHN0eWxlPXt7Y29sb3I6J3doaXRlJ319PntKU09OLnN0cmluZ2lmeShzaXplKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIHsvKiBUaGVyZSBoYXZpbmcgbWFpbiBzaWRlICovfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcblxyXG4vKlxyXG48TWFpblNpZGUvPjogUGFnZSBoYXMgb25lIGdyaWQgbmFtZWQgTWFpblNpZGUuIFxyXG48TmF2aWdhdGlvbi8+OiBJdCBoYXMgaWNvbiwgbWFyaywgYnV0dG9ucyxhbmQgbG9jYXRlZCBvbiB0b3Agb2YgcGFnZXMuIFxyXG4qLyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVdpbmRvd1NpemUiLCJzdHlsZXMiLCJDT05TVCIsIk5hdmlnYXRpb24iLCJFeGhpYml0aW9uU2lkZSIsIlF1b3RhdGlvbiIsIkxheW91dCIsInNpemUiLCJsYXlvdXQiLCJ3aWR0aCIsIlRBQkxFVF9TSVpFIiwic2l6aW5nIiwiY29sb3IiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==