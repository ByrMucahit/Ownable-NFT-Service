"use strict";
self["webpackHotUpdate_N_E"]("pages/downloadNFTCreator",{

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";











function Navigation(_ref) {
  var _this = this;

  var _ref$flat = _ref.flat,
      flat = _ref$flat === void 0 ? false : _ref$flat;
  return (
    /*#__PURE__*/

    /* Navigator */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("nav", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_9___default().navigator),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_9___default().mark)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_9___default().navBtn),
        children: _constant__WEBPACK_IMPORTED_MODULE_6__.MENU.map(function (menu) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_9___default().subBtn),
            href: menu.href,
            children: !flat && menu.title
          }, menu.key, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_9___default().loginButton),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_7__.HomepageOption, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)
  );
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


/***/ }),

/***/ "./constant/index.js":
/*!***************************!*\
  !*** ./constant/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNFTOption": function() { return /* binding */ makeNFTOption; },
/* harmony export */   "BUSINESS": function() { return /* binding */ BUSINESS; },
/* harmony export */   "INFO": function() { return /* binding */ INFO; },
/* harmony export */   "MENU": function() { return /* binding */ MENU; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = ({
  TABLET_SIZE: 943,
  DESKTOP_SIZE: 1270
});
var makeNFTOption = [{
  key: 'NFT',
  title: 'NFT(Non Fungible Token)'
}, {
  key: 'FT',
  title: 'FT(Fungible Token)'
}];
var BUSINESS = [{
  key: 'NFTsforyourBusiness',
  title: 'NFTs for your Business'
}, {
  key: 'CreateACollection',
  title: 'Create a Collection'
}, {
  key: 'CustomerASupport',
  title: 'Customer A Support'
}, {
  key: 'NFTStandardCollaboration',
  title: 'NFT Standard Collaboration'
}, {
  key: 'SomethingElse',
  title: 'Something Else'
}];
var INFO = [{
  title: 'Claim Ownership',
  mark: true
}, {
  title: 'Prove Exitence',
  mark: true
}, {
  title: 'Verify Authenticity',
  mark: true
}, {
  title: 'Privately Connect with the Owner',
  mark: true
}, {
  title: 'Secure Digital Assets',
  mark: true
}];
var MENU = [{
  key: 'privacyPolicy',
  title: 'Privacy Policy'
}, {
  key: 'tos',
  title: 'TOS'
}, {
  key: 'myCollection',
  title: 'My Collection'
}, {
  key: 'contact',
  title: 'Contact'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG93bmxvYWRORlRDcmVhdG9yLjE4NzFiYjRiODcyZDI1YzJiN2FjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNTLFVBQVQsT0FBaUM7QUFBQTs7QUFBQSx1QkFBWkMsSUFBWTtBQUFBLE1BQVpBLElBQVksMEJBQVAsS0FBTztBQUM3QjtBQUFBOztBQUNJO0FBQ0o7QUFBSyxlQUFTLEVBQUVULHlFQUFoQjtBQUFBLDhCQUVJO0FBQUssaUJBQVMsRUFBRUMsaURBQUUsQ0FBQ0Qsb0VBQUQsQ0FBbEI7QUFBQSwrQkFDQSw4REFBQyw0Q0FBRDtBQUFrQixjQUFJLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFNSTtBQUFLLGlCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLGtCQUVJTSwrQ0FBQSxDQUFTLFVBQUNRLElBQUQsRUFBVTtBQUNmLDhCQUNJLDhEQUFDLDRDQUFEO0FBQ0EscUJBQVMsRUFBRWQsc0VBRFg7QUFHQSxnQkFBSSxFQUFFYyxJQUFJLENBQUNFLElBSFg7QUFBQSxzQkFLQyxDQUFDUCxJQUFELElBQVNLLElBQUksQ0FBQ0c7QUFMZixhQUVNSCxJQUFJLENBQUNJLEdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQVFHLFNBVFA7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFxQkk7QUFBSyxpQkFBUyxFQUFFbEIsMkVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKLEVBd0JTUyxJQUFJLGlCQUFJLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBNkJIOztLQTlCUUQ7QUFnQ1QsK0RBQWVBLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQSwrREFBYztBQUNWWSxFQUFBQSxXQUFXLEVBQUUsR0FESDtBQUVWQyxFQUFBQSxZQUFZLEVBQUU7QUFGSixDQUFkO0FBS08sSUFBTUMsYUFBYSxHQUFDLENBQ3ZCO0FBQ0lKLEVBQUFBLEdBQUcsRUFBRSxLQURUO0FBRUlELEVBQUFBLEtBQUssRUFBRTtBQUZYLENBRHVCLEVBS3ZCO0FBQ0lDLEVBQUFBLEdBQUcsRUFBRSxJQURUO0FBRUlELEVBQUFBLEtBQUssRUFBRTtBQUZYLENBTHVCLENBQXBCO0FBV0EsSUFBTU0sUUFBUSxHQUFHLENBQ3BCO0FBQ0lMLEVBQUFBLEdBQUcsRUFBRyxxQkFEVjtBQUVJRCxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQURvQixFQUtwQjtBQUNJQyxFQUFBQSxHQUFHLEVBQUcsbUJBRFY7QUFFSUQsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FMb0IsRUFTcEI7QUFDSUMsRUFBQUEsR0FBRyxFQUFHLGtCQURWO0FBRUlELEVBQUFBLEtBQUssRUFBRTtBQUZYLENBVG9CLEVBYXBCO0FBQ0lDLEVBQUFBLEdBQUcsRUFBRywwQkFEVjtBQUVJRCxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQWJvQixFQWlCcEI7QUFDSUMsRUFBQUEsR0FBRyxFQUFHLGVBRFY7QUFFSUQsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FqQm9CLENBQWpCO0FBd0JBLElBQU1PLElBQUksR0FBRyxDQUNoQjtBQUNJUCxFQUFBQSxLQUFLLEVBQUUsaUJBRFg7QUFFSU4sRUFBQUEsSUFBSSxFQUFFO0FBRlYsQ0FEZ0IsRUFLaEI7QUFDSU0sRUFBQUEsS0FBSyxFQUFFLGdCQURYO0FBRUlOLEVBQUFBLElBQUksRUFBRTtBQUZWLENBTGdCLEVBU2hCO0FBQ0lNLEVBQUFBLEtBQUssRUFBRSxxQkFEWDtBQUVJTixFQUFBQSxJQUFJLEVBQUU7QUFGVixDQVRnQixFQWFoQjtBQUNJTSxFQUFBQSxLQUFLLEVBQUUsa0NBRFg7QUFFSU4sRUFBQUEsSUFBSSxFQUFFO0FBRlYsQ0FiZ0IsRUFpQmhCO0FBQ0lNLEVBQUFBLEtBQUssRUFBRSx1QkFEWDtBQUVJTixFQUFBQSxJQUFJLEVBQUU7QUFGVixDQWpCZ0IsQ0FBYjtBQXlCQSxJQUFNTCxJQUFJLEdBQUcsQ0FDaEI7QUFDSVksRUFBQUEsR0FBRyxFQUFFLGVBRFQ7QUFFSUQsRUFBQUEsS0FBSyxFQUFDO0FBRlYsQ0FEZ0IsRUFNaEI7QUFDSUMsRUFBQUEsR0FBRyxFQUFFLEtBRFQ7QUFFSUQsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FOZ0IsRUFXaEI7QUFDSUMsRUFBQUEsR0FBRyxFQUFFLGNBRFQ7QUFFSUQsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FYZ0IsRUFlaEI7QUFDSUMsRUFBQUEsR0FBRyxFQUFFLFNBRFQ7QUFFSUQsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FmZ0IsQ0FBYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi90ZXh0L2hlYWQtdGl0bGUnXHJcbmltcG9ydCBGcmFtZUJ1dHRvbiBmcm9tIFwiLi4vZnJhbWUvZnJhbWVCdXR0b25cIjtcclxuaW1wb3J0IHtNRU5VfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHtIb21lcGFnZU9wdGlvbn0gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBOYXZpZ2F0b3IgKi9cclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICB7LyogTWFyayBTaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFyayl9PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGhyZWY9Jy8nPk93bmFibGUtTlM8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIExpbmsgU2lkZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJ0bn0+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJCdG59XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PSB7bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWVudS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiYgbWVudS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbi8+fVxyXG4gICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBUQUJMRVRfU0laRTogOTQzLFxyXG4gICAgREVTS1RPUF9TSVpFOiAxMjcwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlTkZUT3B0aW9uPVtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdORlQnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUKE5vbiBGdW5naWJsZSBUb2tlbiknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ0ZUJyxcclxuICAgICAgICB0aXRsZTogJ0ZUKEZ1bmdpYmxlIFRva2VuKSdcclxuICAgIH1dXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJVU0lORVNTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdORlRzZm9yeW91ckJ1c2luZXNzJyxcclxuICAgICAgICB0aXRsZTogJ05GVHMgZm9yIHlvdXIgQnVzaW5lc3MnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdDcmVhdGVBQ29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgYSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnQ3VzdG9tZXJBU3VwcG9ydCcsXHJcbiAgICAgICAgdGl0bGU6ICdDdXN0b21lciBBIFN1cHBvcnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdORlRTdGFuZGFyZENvbGxhYm9yYXRpb24nLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUIFN0YW5kYXJkIENvbGxhYm9yYXRpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdTb21ldGhpbmdFbHNlJyxcclxuICAgICAgICB0aXRsZTogJ1NvbWV0aGluZyBFbHNlJ1xyXG4gICAgICBcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IElORk8gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDbGFpbSBPd25lcnNoaXAnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQcm92ZSBFeGl0ZW5jZScsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1ZlcmlmeSBBdXRoZW50aWNpdHknLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQcml2YXRlbHkgQ29ubmVjdCB3aXRoIHRoZSBPd25lcicsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NlY3VyZSBEaWdpdGFsIEFzc2V0cycsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNRU5VID0gW1xyXG4gICAgeyAgIFxyXG4gICAgICAgIGtleTogJ3ByaXZhY3lQb2xpY3knLFxyXG4gICAgICAgIHRpdGxlOidQcml2YWN5IFBvbGljeSdcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3RvcycsXHJcbiAgICAgICAgdGl0bGU6ICdUT1MnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbXlDb2xsZWN0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ015IENvbGxlY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2NvbnRhY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCdcclxuICAgIH1cclxuXSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNuIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIlRleHRUaXRsZSIsIkhlYWRUaXRsZSIsIkZyYW1lQnV0dG9uIiwiTUVOVSIsIkhvbWVwYWdlT3B0aW9uIiwiTmF2aWdhdGlvbiIsImZsYXQiLCJuYXZpZ2F0b3IiLCJtYXJrIiwibmF2QnRuIiwibWFwIiwibWVudSIsInN1YkJ0biIsImhyZWYiLCJ0aXRsZSIsImtleSIsImxvZ2luQnV0dG9uIiwiVEFCTEVUX1NJWkUiLCJERVNLVE9QX1NJWkUiLCJtYWtlTkZUT3B0aW9uIiwiQlVTSU5FU1MiLCJJTkZPIl0sInNvdXJjZVJvb3QiOiIifQ==