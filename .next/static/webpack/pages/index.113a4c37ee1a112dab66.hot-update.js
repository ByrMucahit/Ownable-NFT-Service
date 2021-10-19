"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-button */ "./components/navigation-button.js");
/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title */ "./components/text-title.js");
/* harmony import */ var _head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head-title */ "./components/head-title.js");
/* harmony import */ var _frame_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frame-button */ "./components/frame-button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation.js";








var MENU = [{
  key: 'make-an-nft',
  icon: '',
  title: 'Make an NFT'
}, {
  key: 'business-signup',
  icon: '',
  title: 'Business Signup'
}, {
  key: 'Subscribe-for-upcoming-drops',
  icon: '',
  title: 'Subscribe for Upcoming Drops'
}, {
  key: 'nft-standards',
  icon: '',
  title: 'NFT Standards'
}, {
  key: 'download-nft-creator',
  icon: '',
  title: 'Download NFT Creator'
}];

function Navigation(_ref) {
  var _this = this;

  var _ref$flat = _ref.flat,
      flat = _ref$flat === void 0 ? true : _ref$flat;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
    className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigator),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().mark)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_head_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Ownable-NS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navBtn),
      children: MENU.map(function (menu) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: [" ", menu.title, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, _this)
        }, menu.key, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_frame_button__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTEzYTRjMzdlZTFhMTEyZGFiNjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxFQUFBQSxHQUFHLEVBQUUsYUFEVDtBQUVJQyxFQUFBQSxJQUFJLEVBQUUsRUFGVjtBQUdJQyxFQUFBQSxLQUFLLEVBQUU7QUFIWCxDQURTLEVBTVQ7QUFDSUYsRUFBQUEsR0FBRyxFQUFFLGlCQURUO0FBRUlDLEVBQUFBLElBQUksRUFBRSxFQUZWO0FBR0lDLEVBQUFBLEtBQUssRUFBRTtBQUhYLENBTlMsRUFXVDtBQUNJRixFQUFBQSxHQUFHLEVBQUUsOEJBRFQ7QUFFSUMsRUFBQUEsSUFBSSxFQUFFLEVBRlY7QUFHSUMsRUFBQUEsS0FBSyxFQUFFO0FBSFgsQ0FYUyxFQWdCVDtBQUNJRixFQUFBQSxHQUFHLEVBQUUsZUFEVDtBQUVJQyxFQUFBQSxJQUFJLEVBQUUsRUFGVjtBQUdJQyxFQUFBQSxLQUFLLEVBQUU7QUFIWCxDQWhCUyxFQXFCVDtBQUNJRixFQUFBQSxHQUFHLEVBQUUsc0JBRFQ7QUFFSUMsRUFBQUEsSUFBSSxFQUFFLEVBRlY7QUFHSUMsRUFBQUEsS0FBSyxFQUFFO0FBSFgsQ0FyQlMsQ0FBYjs7QUE0QkEsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBLHVCQUFYQyxJQUFXO0FBQUEsTUFBWEEsSUFBVywwQkFBTixJQUFNO0FBQzVCLHNCQUNBO0FBQUssYUFBUyxFQUFFWCx5RUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUMsaURBQUUsQ0FBQ0Qsb0VBQUQsQ0FBbEI7QUFBQSw2QkFDSSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSxnQkFFSU0sSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBRWYsNEJBRUksOERBQUMsdURBQUQ7QUFBQSxvQkFHQ0wsSUFBSSxpQkFBRyw4REFBQyxnREFBRDtBQUFBLDRCQUFhSyxJQUFJLENBQUNQLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLFdBQ01PLElBQUksQ0FBQ1QsR0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBT0csT0FUUDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQW9CSTtBQUFLLGVBQVMsRUFBRVAsMkVBQWhCO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBMEJIOztLQTNCUVU7QUE2QlQsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL25hdmlnYXRpb24tYnV0dG9uJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4vdGV4dC10aXRsZSdcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuL2hlYWQtdGl0bGUnXHJcbmltcG9ydCBGcmFtZUJ1dHRvbiBmcm9tIFwiLi9mcmFtZS1idXR0b25cIjtcclxuXHJcbmNvbnN0IE1FTlUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbWFrZS1hbi1uZnQnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFrZSBhbiBORlQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2J1c2luZXNzLXNpZ251cCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdCdXNpbmVzcyBTaWdudXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ1N1YnNjcmliZS1mb3ItdXBjb21pbmctZHJvcHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnU3Vic2NyaWJlIGZvciBVcGNvbWluZyBEcm9wcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbmZ0LXN0YW5kYXJkcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdORlQgU3RhbmRhcmRzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdkb3dubG9hZC1uZnQtY3JlYXRvcicsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdEb3dubG9hZCBORlQgQ3JlYXRvcidcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD10cnVlfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0b3J9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFyayl9PlxyXG4gICAgICAgICAgICA8SGVhZFRpdGxlPk93bmFibGUtTlM8L0hlYWRUaXRsZT4gXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2QnRufT5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBNRU5VLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PSB7bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmbGF0ICYmPFRleHRUaXRsZT4ge21lbnUudGl0bGV9IDwvVGV4dFRpdGxlPn1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgPEZyYW1lQnV0dG9uPkxvZ2luPC9GcmFtZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNuIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIlRleHRUaXRsZSIsIkhlYWRUaXRsZSIsIkZyYW1lQnV0dG9uIiwiTUVOVSIsImtleSIsImljb24iLCJ0aXRsZSIsIk5hdmlnYXRpb24iLCJmbGF0IiwibmF2aWdhdG9yIiwibWFyayIsIm5hdkJ0biIsIm1hcCIsIm1lbnUiLCJsb2dpbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=