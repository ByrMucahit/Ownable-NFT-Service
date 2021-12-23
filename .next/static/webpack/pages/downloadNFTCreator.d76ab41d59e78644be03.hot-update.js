"use strict";
self["webpackHotUpdate_N_E"]("pages/downloadNFTCreator",{

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
    alt: alt,
    href: href
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG93bmxvYWRORlRDcmVhdG9yLmQ3NmFiNDFkNTllNzg2NDRiZTAzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0EsU0FBU0UsSUFBVCxPQUE2QjtBQUFBLE1BQWRDLEdBQWMsUUFBZEEsR0FBYztBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTtBQUN6QixzQkFDSTtBQUFHLGFBQVMsRUFBRUosZ0VBQWQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsOERBQWhCO0FBQ0EsU0FBRyxFQUFFRSxHQURMO0FBRUEsU0FBRyxFQUFFQyxHQUZMO0FBR0EsVUFBSSxFQUFFQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFRCxTQUFTRyxRQUFULFFBQWlDO0FBQUEsTUFBZEwsR0FBYyxTQUFkQSxHQUFjO0FBQUEsTUFBVkMsR0FBVSxTQUFWQSxHQUFVO0FBQUEsTUFBTkMsSUFBTSxTQUFOQSxJQUFNO0FBQzdCLHNCQUNJO0FBQUcsYUFBUyxFQUFFSixtRUFBZDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFFQSwrREFBaEI7QUFDQSxTQUFHLEVBQUVFLEdBREw7QUFFQSxTQUFHLEVBQUVDLEdBRkw7QUFHQSxVQUFJLEVBQUVDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztBQUlELFNBQVNLLEtBQVQsUUFBa1I7QUFBQSx3QkFBbFFQLEdBQWtRO0FBQUEsTUFBbFFBLEdBQWtRLDBCQUE5UCwrTEFBOFA7QUFBQSxNQUE3REMsR0FBNkQsU0FBN0RBLEdBQTZEO0FBQUEsMEJBQXhETyxLQUF3RDtBQUFBLE1BQXhEQSxLQUF3RCw0QkFBbEQsR0FBa0Q7QUFBQSwyQkFBN0NDLE1BQTZDO0FBQUEsTUFBN0NBLE1BQTZDLDZCQUF0QyxHQUFzQztBQUFBLHlCQUFqQ0gsSUFBaUM7QUFBQSxNQUFqQ0EsSUFBaUMsMkJBQTVCLEtBQTRCO0FBQUEsTUFBdEJJLFNBQXNCLFNBQXRCQSxTQUFzQjtBQUFBLHlCQUFYUixJQUFXO0FBQUEsTUFBWEEsSUFBVywyQkFBTixHQUFNO0FBRTlRLE1BQU1TLElBQUksR0FBR0wsSUFBSSxHQUFHRCxRQUFILEdBQWNOLElBQS9CO0FBRUEsc0JBQ0ksOERBQUMsSUFBRDtBQUFNLE9BQUcsRUFBRUMsR0FBWDtBQUFnQixPQUFHLEVBQUVDLEdBQXJCO0FBQTBCLFFBQUksRUFBRUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0g7O0tBUFFLO0FBU1QsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9waG90by9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmsoe3NyYyxhbHQsaHJlZn0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5waG90b30gPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT4gICBcclxuKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrTGluayh7c3JjLGFsdCxocmVmfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubWFya0xpbmt9ID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm1hcmt9XHJcbiAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAvPlxyXG4gICAgPC9hPiAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFBob3RvKHtzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JlY2VpcHRjb2luLXJlY2VpcHRjaGFpbi1kZTU2MC5hcHBzcG90LmNvbS9vL3dlYnNpdGUlMkZqcGllcmNlJTJGai1waWVyY2UtcHJvbW8tYmxhY2stMDEucG5nP2FsdD1tZWRpYSZ0b2tlbj01Y2YwY2YwZi0zMWZhLTRlZjItOWYyMS1lYWExMzY1OTU2N2JcIiwgYWx0LCB3aWR0aD00NzAsIGhlaWdodD0yOTIsIG1hcms9ZmFsc2UsY2xhc3NOYW1lLCBocmVmPVwiL1wifSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBDb21wID0gbWFyayA/IG1hcmtMaW5rIDogbGluaztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wIHNyYz17c3JjfSBhbHQ9e2FsdH0gaHJlZj17aHJlZn0vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90byJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImxpbmsiLCJzcmMiLCJhbHQiLCJocmVmIiwicGhvdG8iLCJpbWciLCJtYXJrTGluayIsIm1hcmsiLCJQaG90byIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiQ29tcCJdLCJzb3VyY2VSb290IjoiIn0=