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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_text_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
      type: "text",
      className: (_text_module_css__WEBPACK_IMPORTED_MODULE_4___default().smalltextInput),
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, this);
}

_c = Small;

function Big(_ref) {
  var props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, _ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_text_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread(_objectSpread({
      type: "text",
      className: (_text_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigtextInput)
    }, props), {}, {
      required: true
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC4zZjhhNDE4MWJjZDQ1ZGJiYjA1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNFLEtBQVQsR0FBZ0I7QUFDYixzQkFDRztBQUFLLGFBQVMsRUFBRUQsbUVBQWhCO0FBQUEsMkJBQ007QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFTLEVBQUVBLHdFQUE5QjtBQUFxRCxjQUFRO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFNRjs7S0FQUUM7O0FBVVQsU0FBU0csR0FBVCxPQUF3QjtBQUFBLE1BQVBDLEtBQU87O0FBQ3JCLHNCQUNHO0FBQUssYUFBUyxFQUFFTCxtRUFBaEI7QUFBQSwyQkFDRztBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVMsRUFBRUEsc0VBQW1CTTtBQUFqRCxPQUF3REQsS0FBeEQ7QUFBK0QsY0FBUTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBUUY7O01BVFFEOztBQVdULFNBQVNHLE1BQVQsUUFBNEI7QUFBQSx3QkFBWEMsR0FBVztBQUFBLE1BQVhBLEdBQVcsMEJBQVAsS0FBTztBQUN6QixNQUFNQyxJQUFJLEdBQUdELEdBQUcsR0FBR0osR0FBSCxHQUFRSCxLQUF4QjtBQUNBLHNCQUNHLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBR0Y7O01BTFFNO0FBT1QsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC90ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFNtYWxsKCl7XHJcbiAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx0ZXh0SW5wdXR9IHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQmlnKHsuLi5wcm9wc30pe1xyXG4gICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17c3R5bGVzLmJpZ3RleHRJbnB1dH0gIHsuLi5wcm9wc30gcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuXHJcbiApIFxyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe2JpZz1mYWxzZX0pe1xyXG4gICBjb25zdCBDb21wID0gYmlnID8gQmlnOiBTbWFsbFxyXG4gICByZXR1cm4oXHJcbiAgICAgIDxDb21wLz5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiU21hbGwiLCJjb250YWluZXIiLCJzbWFsbHRleHRJbnB1dCIsIkJpZyIsInByb3BzIiwiYmlndGV4dElucHV0IiwiQnV0dG9uIiwiYmlnIiwiQ29tcCJdLCJzb3VyY2VSb290IjoiIn0=