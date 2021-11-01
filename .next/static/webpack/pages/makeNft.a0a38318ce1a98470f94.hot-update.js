"use strict";
self["webpackHotUpdate_N_E"]("pages/makeNft",{

/***/ "./components/input/text.js":
/*!**********************************!*\
  !*** ./components/input/text.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text.module.css */ "./components/input/text.module.css");
/* harmony import */ var _text_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_text_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\text.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Small() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
    type: "text",
    className: (_text_module_css__WEBPACK_IMPORTED_MODULE_4___default().smalltextInput),
    required: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

_c = Small;

function Big(_ref) {
  var props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, _ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread(_objectSpread({
    type: "text",
    className: (_text_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigtextInput)
  }, props), {}, {
    required: true
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

_c2 = Big;

function Button(_ref2) {
  var _ref2$big = _ref2.big,
      big = _ref2$big === void 0 ? false : _ref2$big;
  var Comp = big ? Big : Small;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Comp, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, this);
}

_c3 = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c, _c2, _c3;

$RefreshReg$(_c, "Small");
$RefreshReg$(_c2, "Big");
$RefreshReg$(_c3, "Button");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC5hMGEzODMxOGNlMWE5ODQ3MGY5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNFLEtBQVQsR0FBZ0I7QUFDYixzQkFFUztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBRUQsd0VBQTlCO0FBQXFELFlBQVE7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZUO0FBTUY7O0tBUFFDOztBQVVULFNBQVNFLEdBQVQsT0FBd0I7QUFBQSxNQUFQQyxLQUFPOztBQUNyQixzQkFFTTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBRUosc0VBQW1CSztBQUFqRCxLQUF3REQsS0FBeEQ7QUFBK0QsWUFBUTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk47QUFRRjs7TUFUUUQ7O0FBV1QsU0FBU0csTUFBVCxRQUE0QjtBQUFBLHdCQUFYQyxHQUFXO0FBQUEsTUFBWEEsR0FBVywwQkFBUCxLQUFPO0FBQ3pCLE1BQU1DLElBQUksR0FBR0QsR0FBRyxHQUFHSixHQUFILEdBQVFGLEtBQXhCO0FBQ0Esc0JBQ0csOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFHRjs7TUFMUUs7QUFPVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2lucHV0L3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gU21hbGwoKXtcclxuICAgcmV0dXJuKFxyXG4gICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsdGV4dElucHV0fSByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEJpZyh7Li4ucHJvcHN9KXtcclxuICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17c3R5bGVzLmJpZ3RleHRJbnB1dH0gIHsuLi5wcm9wc30gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICBcclxuXHJcbiAgICAgIFxyXG5cclxuICkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7YmlnPWZhbHNlfSl7XHJcbiAgIGNvbnN0IENvbXAgPSBiaWcgPyBCaWc6IFNtYWxsXHJcbiAgIHJldHVybihcclxuICAgICAgPENvbXAvPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJTbWFsbCIsInNtYWxsdGV4dElucHV0IiwiQmlnIiwicHJvcHMiLCJiaWd0ZXh0SW5wdXQiLCJCdXR0b24iLCJiaWciLCJDb21wIl0sInNvdXJjZVJvb3QiOiIifQ==