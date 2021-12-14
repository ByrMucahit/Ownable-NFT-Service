"use strict";
self["webpackHotUpdate_N_E"]("pages/makeNft",{

/***/ "./components/layout/makeNFT/index.js":
/*!********************************************!*\
  !*** ./components/layout/makeNFT/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/makeNFT/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _form_makeNFT_NonAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/makeNFT/NonAccount */ "./components/form/makeNFT/NonAccount/index.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/index */ "./components/footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\makeNFT\\index.js";








function Layout() {
  return (
    /*#__PURE__*/

    /* Layout in Make NFT Page */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().layout),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().formContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_form_makeNFT_NonAccount__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().Footer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_footer_index__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)
  );
}

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC5kMjFiZGVhN2I4NDgwODI3N2NhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLE1BQVQsR0FBaUI7QUFDYjtBQUFBOztBQUNJO0FBQ0E7QUFBSyxlQUFTLEVBQUVMLGlFQUFoQjtBQUFBLDhCQUVRLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQUlJO0FBQUssaUJBQVMsRUFBRUEsd0VBQWhCO0FBQUEsK0JBR0EsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQVdJO0FBQUssaUJBQVMsRUFBRUEsaUVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQWtCSDs7S0FuQlFLO0FBcUJULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L21ha2VORlQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBNYWtlTkZURm9ybSBmcm9tIFwiLi4vLi4vZm9ybS9tYWtlTkZUL05vbkFjY291bnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9mb290ZXIvaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICAvKiBMYXlvdXQgaW4gTWFrZSBORlQgUGFnZSAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRvciAqL31cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIHsvKiBDZW50ZXIgQ29udGFpbmVyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TWFrZU5GVEZvcm0vPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIENvbnRhaW5lciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTmF2aWdhdGlvbiIsIkhlYWRUaXRsZSIsIk1ha2VORlRGb3JtIiwiRm9vdGVyIiwiTGF5b3V0IiwibGF5b3V0IiwiZm9ybUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=