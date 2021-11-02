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
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ "./components/input/dropdown/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\dropdown\\index.js";





function DropDownMenu(_ref) {
  var _ref$selection = _ref.selection,
      selection = _ref$selection === void 0 ? ['option1', 'option2'] : _ref$selection;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
    "for": "subOptions",
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: "What type of asset is this?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 38
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 114
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
      id: "subOptions",
      name: "options",
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().options),
      children: ["selection.map(select =>", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
        value: "NFT",
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),
        children: select
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
        value: "FT",
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),
        children: "FT(Fungible Token)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, this), ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC41YjU3YmNmZmJhOTE3Mzk5ODIzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNHLFlBQVQsT0FFd0M7QUFBQSw0QkFBakNDLFNBQWlDO0FBQUEsTUFBakNBLFNBQWlDLCtCQUF2QixDQUFDLFNBQUQsRUFBVyxTQUFYLENBQXVCO0FBQ3BDLHNCQUNRO0FBQU8sV0FBSSxZQUFYO0FBQUEsaUNBQXlCLDhEQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFSCxpRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBekIsZUFBcUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFyRyxlQUNBO0FBQVEsUUFBRSxFQUFDLFlBQVg7QUFBd0IsVUFBSSxFQUFDLFNBQTdCO0FBQXVDLGVBQVMsRUFBRUEsa0VBQWxEO0FBQUEseURBRVk7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFvQixpQkFBUyxFQUFFQSxpRUFBL0I7QUFBQSxrQkFBK0NPO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGWixlQUdZO0FBQVEsYUFBSyxFQUFDLElBQWQ7QUFBbUIsaUJBQVMsRUFBRVAsaUVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUFpQkg7O0tBcEJRRTtBQXVCVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2lucHV0L2Ryb3Bkb3duL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5mdW5jdGlvbiBEcm9wRG93bk1lbnUoXHJcbiAgICB7XHJcbiAgICAgICBzZWxlY3Rpb249WydvcHRpb24xJywnb3B0aW9uMiddfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdzdWJPcHRpb25zJz4gPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldoYXQgdHlwZSBvZiBhc3NldCBpcyB0aGlzPzwvSGVhZFRpdGxlPjxici8+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9J3N1Yk9wdGlvbnMnIG5hbWU9J29wdGlvbnMnIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbnN9PlxyXG4gICAgICAgICAgICBzZWxlY3Rpb24ubWFwKHNlbGVjdCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkZUXCIgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT57c2VsZWN0fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRlRcIiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PkZUKEZ1bmdpYmxlIFRva2VuKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bk1lbnUiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJIZWFkVGl0bGUiLCJEcm9wRG93bk1lbnUiLCJzZWxlY3Rpb24iLCJoZWFkZXIiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==