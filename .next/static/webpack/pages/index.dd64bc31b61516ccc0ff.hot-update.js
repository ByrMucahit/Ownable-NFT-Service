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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        flat: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 14
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 14
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQ2NGJjMzFiNjE1MTZjY2MwZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDZCxNQUFNQyxJQUFJLEdBQUdQLDREQUFhLEVBQTFCO0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVDLGtFQUFoQjtBQUFBLDRCQUNLO0FBQUEsZ0JBQ0VNLElBQUksQ0FBQ0UsS0FBTCxHQUFhUCwwREFBYixnQkFDSiw4REFBQywyREFBRDtBQUFhLFlBQUk7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJLGdCQUNrQiw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETCxlQU1FO0FBQUEsNkJBQ0EsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVlLLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaTCxlQWNJO0FBQU0sZUFBUyxFQUFFRCxrRUFBakI7QUFBZ0MsV0FBSyxFQUFFO0FBQUNXLFFBQUFBLEtBQUssRUFBQztBQUFQLE9BQXZDO0FBQUEsZ0JBQXlEQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFpQkg7O0dBbkJRRDtVQUNRTjs7O0tBRFJNO0FBcUJULCtEQUFlQSxNQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9vay91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgRXhoaWJpdGlvblNpZGUgZnJvbSAnLi4vcm93L2V4aGliaXRpb25TaWRlJ1xyXG5pbXBvcnQgUXVvdGF0aW9uIGZyb20gXCIuLi9yb3cvcXVvdGF0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IHNpemUud2lkdGggPCBDT05TVC5UQUJMRVRfU0laRSA/IFxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uICBmbGF0Lz4gOiA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPEV4aGliaXRpb25TaWRlLz5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxRdW90YXRpb24gLz5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zaXppbmd9IHN0eWxlPXt7Y29sb3I6J3doaXRlJ319PntKU09OLnN0cmluZ2lmeShzaXplKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIHsvKiBUaGVyZSBoYXZpbmcgbWFpbiBzaWRlICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuXHJcbi8qXHJcbjxNYWluU2lkZS8+OiBQYWdlIGhhcyBvbmUgZ3JpZCBuYW1lZCBNYWluU2lkZS4gXHJcbjxOYXZpZ2F0aW9uLz46IEl0IGhhcyBpY29uLCBtYXJrLCBidXR0b25zLGFuZCBsb2NhdGVkIG9uIHRvcCBvZiBwYWdlcy4gXHJcbiovIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlV2luZG93U2l6ZSIsInN0eWxlcyIsIkNPTlNUIiwiTmF2aWdhdGlvbiIsIkV4aGliaXRpb25TaWRlIiwiUXVvdGF0aW9uIiwiTGF5b3V0Iiwic2l6ZSIsImxheW91dCIsIndpZHRoIiwiVEFCTEVUX1NJWkUiLCJzaXppbmciLCJjb2xvciIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9