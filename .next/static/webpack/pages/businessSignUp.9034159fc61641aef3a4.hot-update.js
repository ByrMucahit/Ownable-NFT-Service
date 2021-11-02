"use strict";
self["webpackHotUpdate_N_E"]("pages/businessSignUp",{

/***/ "./components/form/businessSignUp/index.js":
/*!*************************************************!*\
  !*** ./components/form/businessSignUp/index.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./components/form/businessSignUp/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_dropdown_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../input/dropdown/index */ "./components/input/dropdown/index.js");
/* harmony import */ var _input_text_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/text/text */ "./components/input/text/text.js");
/* harmony import */ var _input_message_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input/message/index */ "./components/input/message/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\form\\businessSignUp\\index.js";







function BusinessSignUp() {
  return (
    /*#__PURE__*/

    /* Business Sign Up Form */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryOfBusiness),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_input_dropdown_index__WEBPACK_IMPORTED_MODULE_1__.default, {
            medium: true,
            business: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().emailInput),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_input_text_text__WEBPACK_IMPORTED_MODULE_2__.default, {
            medium: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().messageArea),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_input_message_index__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().message)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)
  );
}

_c = BusinessSignUp;
/* harmony default export */ __webpack_exports__["default"] = (BusinessSignUp);

var _c;

$RefreshReg$(_c, "BusinessSignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzaW5lc3NTaWduVXAuOTAzNDE1OWZjNjE2NDFhZWYzYTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTSyxjQUFULEdBQXlCO0FBQ3JCO0FBQUE7O0FBQ0k7QUFDQTtBQUFLLGVBQVMsRUFBRUosK0RBQWhCO0FBQUEsNkJBQ0E7QUFBTSxpQkFBUyxFQUFFQSxvRUFBakI7QUFBQSxnQ0FFSTtBQUFLLG1CQUFTLEVBQUVBLDZFQUFoQjtBQUFBLGlDQUNJLDhEQUFDLDBEQUFEO0FBQWMsa0JBQU0sTUFBcEI7QUFBcUIsb0JBQVE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFLSTtBQUFLLG1CQUFTLEVBQUVBLHFFQUFoQjtBQUFBLGlDQUNJLDhEQUFDLHFEQUFEO0FBQVcsa0JBQU07QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFRSTtBQUFLLG1CQUFTLEVBQUVBLHNFQUFoQjtBQUFBLGlDQUNJLDhEQUFDLHlEQUFEO0FBQWMscUJBQVMsRUFBRUEsa0VBQWNVO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQWlCSDs7S0FsQlFOO0FBb0JULCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9idXNpbmVzc1NpZ25VcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJy4uLy4uL2lucHV0L2Ryb3Bkb3duL2luZGV4J1xyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uLy4uL2lucHV0L3RleHQvdGV4dCdcclxuaW1wb3J0IE1lc3NhZ2VzQXJlYSBmcm9tICcuLi8uLi9pbnB1dC9tZXNzYWdlL2luZGV4J1xyXG5mdW5jdGlvbiBCdXNpbmVzc1NpZ25VcCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8qIEJ1c2luZXNzIFNpZ24gVXAgRm9ybSAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgey8qIENhdGVnb3J5IE9mIEJ1c2luZXNzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5T2ZCdXNpbmVzc30+XHJcbiAgICAgICAgICAgICAgICA8RHJvcERvd25NZW51IG1lZGl1bSBidXNpbmVzcy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsSW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBtZWRpdW0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlQXJlYX0+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZXNBcmVhIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXNpbmVzc1NpZ25VcCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkRyb3BEb3duTWVudSIsIlRleHRJbnB1dCIsIk1lc3NhZ2VzQXJlYSIsIkJ1c2luZXNzU2lnblVwIiwiZm9ybSIsImNvbnRhaW5lciIsImNhdGVnb3J5T2ZCdXNpbmVzcyIsImVtYWlsSW5wdXQiLCJtZXNzYWdlQXJlYSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9