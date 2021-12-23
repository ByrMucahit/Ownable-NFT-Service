"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/photo/index.js":
/*!***********************************!*\
  !*** ./components/photo/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ "./components/photo/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\photo\\index.js";




function link(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      href = _ref.href;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().photo),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),
      src: src,
      alt: alt,
      href: href
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

function markLink(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt,
      href = _ref2.href;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().markLink),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().mark),
      src: src,
      alt: alt,
      href: href
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

function Photo(_ref3) {
  var _ref3$src = _ref3.src,
      src = _ref3$src === void 0 ? "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fjpierce%2Fj-pierce-promo-black-01.png?alt=media&token=5cf0cf0f-31fa-4ef2-9f21-eaa13659567b" : _ref3$src,
      alt = _ref3.alt,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? 470 : _ref3$width,
      _ref3$height = _ref3.height,
      height = _ref3$height === void 0 ? 292 : _ref3$height,
      _ref3$mark = _ref3.mark,
      mark = _ref3$mark === void 0 ? false : _ref3$mark,
      className = _ref3.className,
      _ref3$href = _ref3.href,
      href = _ref3$href === void 0 ? "/" : _ref3$href;
  var Comp = mark ? markLink : link;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Comp, {
    src: src,
    className: className,
    alt: alt,
    href: href
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_c = Photo;
/* harmony default export */ __webpack_exports__["default"] = (Photo);

var _c;

$RefreshReg$(_c, "Photo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQzOTgzMjg5ODcyODgzYzRhYWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHQSxTQUFTRSxJQUFULE9BQTZCO0FBQUEsTUFBZEMsR0FBYyxRQUFkQSxHQUFjO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQUEsTUFBTkMsSUFBTSxRQUFOQSxJQUFNO0FBQ3pCLHNCQUNJO0FBQUcsYUFBUyxFQUFFSixnRUFBZDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQSw4REFBaEI7QUFDQSxTQUFHLEVBQUVFLEdBREw7QUFFQSxTQUFHLEVBQUVDLEdBRkw7QUFHQSxVQUFJLEVBQUVDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztBQUVELFNBQVNHLFFBQVQsUUFBaUM7QUFBQSxNQUFkTCxHQUFjLFNBQWRBLEdBQWM7QUFBQSxNQUFWQyxHQUFVLFNBQVZBLEdBQVU7QUFBQSxNQUFOQyxJQUFNLFNBQU5BLElBQU07QUFDN0Isc0JBQ0k7QUFBRyxhQUFTLEVBQUVKLG1FQUFkO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUVBLCtEQUFoQjtBQUNBLFNBQUcsRUFBRUUsR0FETDtBQUVBLFNBQUcsRUFBRUMsR0FGTDtBQUdBLFVBQUksRUFBRUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0FBRUQsU0FBU0ssS0FBVCxRQUFrUjtBQUFBLHdCQUFsUVAsR0FBa1E7QUFBQSxNQUFsUUEsR0FBa1EsMEJBQTlQLCtMQUE4UDtBQUFBLE1BQTdEQyxHQUE2RCxTQUE3REEsR0FBNkQ7QUFBQSwwQkFBeERPLEtBQXdEO0FBQUEsTUFBeERBLEtBQXdELDRCQUFsRCxHQUFrRDtBQUFBLDJCQUE3Q0MsTUFBNkM7QUFBQSxNQUE3Q0EsTUFBNkMsNkJBQXRDLEdBQXNDO0FBQUEseUJBQWpDSCxJQUFpQztBQUFBLE1BQWpDQSxJQUFpQywyQkFBNUIsS0FBNEI7QUFBQSxNQUF0QkksU0FBc0IsU0FBdEJBLFNBQXNCO0FBQUEseUJBQVhSLElBQVc7QUFBQSxNQUFYQSxJQUFXLDJCQUFOLEdBQU07QUFFOVEsTUFBTVMsSUFBSSxHQUFHTCxJQUFJLEdBQUdELFFBQUgsR0FBY04sSUFBL0I7QUFFQSxzQkFDSSw4REFBQyxJQUFEO0FBQU0sT0FBRyxFQUFFQyxHQUFYO0FBQWdCLGFBQVMsRUFBRVUsU0FBM0I7QUFBc0MsT0FBRyxFQUFFVCxHQUEzQztBQUFnRCxRQUFJLEVBQUVDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIOztLQVBRSztBQVNULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGhvdG8vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5mdW5jdGlvbiBsaW5rKHtzcmMsYWx0LGhyZWZ9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99ID5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XHJcbiAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2E+ICAgXHJcbilcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0xpbmsoe3NyYyxhbHQsaHJlZn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtMaW5rfSA+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tYXJrfVxyXG4gICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgLz5cclxuICAgIDwvYT4gICBcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gUGhvdG8oe3NyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmVjZWlwdGNvaW4tcmVjZWlwdGNoYWluLWRlNTYwLmFwcHNwb3QuY29tL28vd2Vic2l0ZSUyRmpwaWVyY2UlMkZqLXBpZXJjZS1wcm9tby1ibGFjay0wMS5wbmc/YWx0PW1lZGlhJnRva2VuPTVjZjBjZjBmLTMxZmEtNGVmMi05ZjIxLWVhYTEzNjU5NTY3YlwiLCBhbHQsIHdpZHRoPTQ3MCwgaGVpZ2h0PTI5MiwgbWFyaz1mYWxzZSxjbGFzc05hbWUsIGhyZWY9XCIvXCJ9KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IENvbXAgPSBtYXJrID8gbWFya0xpbmsgOiBsaW5rO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbXAgc3JjPXtzcmN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhbHQ9e2FsdH0gaHJlZj17aHJlZn0vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90byJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImxpbmsiLCJzcmMiLCJhbHQiLCJocmVmIiwicGhvdG8iLCJpbWciLCJtYXJrTGluayIsIm1hcmsiLCJQaG90byIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiQ29tcCJdLCJzb3VyY2VSb290IjoiIn0=