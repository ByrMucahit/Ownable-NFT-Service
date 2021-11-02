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
      business = _ref$business === void 0 ? false : _ref$business;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
    "for": "subOptions",
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: "What type of asset is this?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 34
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 110
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
      id: "subOptions",
      name: "options",
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().options),
      children: _constant__WEBPACK_IMPORTED_MODULE_2__.makeNFTOption.map(function (options) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC41M2VlYjRlYjI3MjZiMjM5Zjg1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNLLFlBQVQsT0FBdUM7QUFBQTs7QUFBQSwyQkFBaEJDLFFBQWdCO0FBQUEsTUFBaEJBLFFBQWdCLDhCQUFQLEtBQU87QUFHbkMsc0JBQ0k7QUFBTyxXQUFJLFlBQVg7QUFBQSxpQ0FBeUIsOERBQUMscURBQUQ7QUFBVyxlQUFTLEVBQUVMLGlFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF6QixlQUFxRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHLGVBQ0k7QUFBUSxRQUFFLEVBQUMsWUFBWDtBQUF3QixVQUFJLEVBQUMsU0FBN0I7QUFBdUMsZUFBUyxFQUFFQSxrRUFBbEQ7QUFBQSxnQkFDQ0Usd0RBQUEsQ0FBa0IsVUFBQ0ssT0FBRCxFQUFXO0FBQzFCLDRCQUNBO0FBQVEsZUFBSyxFQUFFQSxPQUFPLENBQUNFLEdBQXZCO0FBQTRCLG1CQUFTLEVBQUVULGlFQUF2QztBQUFBLG9CQUF1RE8sT0FBTyxDQUFDSTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBO0FBR0gsT0FKQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztLQWhCUVA7QUFtQlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9kcm9wZG93bi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uLy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IHttYWtlTkZUT3B0aW9uLCBCVVNJTkVTU30gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmZ1bmN0aW9uIERyb3BEb3duTWVudSh7YnVzaW5lc3M9ZmFsc2V9KXtcclxuXHJcbiAgIFxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxsYWJlbCBmb3I9J3N1Yk9wdGlvbnMnPiA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+V2hhdCB0eXBlIG9mIGFzc2V0IGlzIHRoaXM/PC9IZWFkVGl0bGU+PGJyLz5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD0nc3ViT3B0aW9ucycgbmFtZT0nb3B0aW9ucycgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc30+XHJcbiAgICAgICAgICAgIHttYWtlTkZUT3B0aW9uLm1hcCgob3B0aW9ucyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnMua2V5fSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PntvcHRpb25zLnRpdGxlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25NZW51Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSGVhZFRpdGxlIiwibWFrZU5GVE9wdGlvbiIsIkJVU0lORVNTIiwiRHJvcERvd25NZW51IiwiYnVzaW5lc3MiLCJoZWFkZXIiLCJvcHRpb25zIiwibWFwIiwia2V5Iiwib3B0aW9uIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9