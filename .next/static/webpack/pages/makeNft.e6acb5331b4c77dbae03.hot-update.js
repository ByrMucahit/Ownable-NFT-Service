"use strict";
self["webpackHotUpdate_N_E"]("pages/makeNft",{

/***/ "./components/input/dropdown/index.js":
/*!********************************************!*\
  !*** ./components/input/dropdown/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ "./components/input/dropdown/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant */ "./constant/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\dropdown\\index.js";






function DropDownMenu(_ref) {
  var _this = this;

  var _ref$business = _ref.business,
      business = _ref$business === void 0 ? false : _ref$business,
      header = _ref.header;
  var comp = business ? _constant__WEBPACK_IMPORTED_MODULE_2__.BUSINESS : _constant__WEBPACK_IMPORTED_MODULE_2__.makeNFTOption;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
    "for": "subOptions",
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 34
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 91
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
      id: "subOptions",
      name: "options",
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().options),
      children: comp.map(function (options) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          value: options.key,
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().option),
          children: options.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = DropDownMenu;
/* harmony default export */ __webpack_exports__["default"] = (DropDownMenu);

var _c;

$RefreshReg$(_c, "DropDownMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC5lNmFjYjUzMzFiNGM3N2RiYWUwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNLLFlBQVQsT0FBK0M7QUFBQTs7QUFBQSwyQkFBeEJDLFFBQXdCO0FBQUEsTUFBeEJBLFFBQXdCLDhCQUFmLEtBQWU7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7QUFFM0MsTUFBTUMsSUFBSSxHQUFHRixRQUFRLEdBQUdGLCtDQUFILEdBQWNELG9EQUFuQztBQUNBLHNCQUNJO0FBQU8sV0FBSSxZQUFYO0FBQUEsaUNBQXlCLDhEQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFRixpRUFBdEI7QUFBQSxnQkFBc0NNO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBekIsZUFBa0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFsRixlQUNJO0FBQVEsUUFBRSxFQUFDLFlBQVg7QUFBd0IsVUFBSSxFQUFDLFNBQTdCO0FBQXVDLGVBQVMsRUFBRU4sa0VBQWxEO0FBQUEsZ0JBQ0NPLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNELE9BQUQsRUFBVztBQUNqQiw0QkFDQTtBQUFRLGVBQUssRUFBRUEsT0FBTyxDQUFDRSxHQUF2QjtBQUE0QixtQkFBUyxFQUFFVixpRUFBdkM7QUFBQSxvQkFBdURRLE9BQU8sQ0FBQ0k7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQUdILE9BSkE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7S0FoQlFSO0FBbUJULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5wdXQvZHJvcGRvd24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi8uLi90ZXh0L2hlYWQtdGl0bGUnXHJcbmltcG9ydCB7bWFrZU5GVE9wdGlvbiwgQlVTSU5FU1N9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5mdW5jdGlvbiBEcm9wRG93bk1lbnUoe2J1c2luZXNzPWZhbHNlLCBoZWFkZXJ9KXtcclxuXHJcbiAgICBjb25zdCBjb21wID0gYnVzaW5lc3MgPyBCVVNJTkVTUyA6IG1ha2VORlRPcHRpb25cclxuICAgIHJldHVybiAoICBcclxuICAgICAgICA8bGFiZWwgZm9yPSdzdWJPcHRpb25zJz4gPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9IZWFkVGl0bGU+PGJyLz5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD0nc3ViT3B0aW9ucycgbmFtZT0nb3B0aW9ucycgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc30+XHJcbiAgICAgICAgICAgIHtjb21wLm1hcCgob3B0aW9ucyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnMua2V5fSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PntvcHRpb25zLnRpdGxlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25NZW51Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSGVhZFRpdGxlIiwibWFrZU5GVE9wdGlvbiIsIkJVU0lORVNTIiwiRHJvcERvd25NZW51IiwiYnVzaW5lc3MiLCJoZWFkZXIiLCJjb21wIiwib3B0aW9ucyIsIm1hcCIsImtleSIsIm9wdGlvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==