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
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";









function Navigation(_ref) {
  var _this = this;

  var _ref$flat = _ref.flat,
      flat = _ref$flat === void 0 ? false : _ref$flat;
  return (
    /*#__PURE__*/

    /* Navigator */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigator),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().mark)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navBtn),
        children: _constant__WEBPACK_IMPORTED_MODULE_4__.MENU.map(function (menu) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().subBtn),
            href: menu.href,
            children: !flat && menu.title
          }, menu.key, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_5__.HomepageOption, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG93bmxvYWRORlRDcmVhdG9yLjU4ZDkxNmEwNDg4N2JjMTcyNzhlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNPLFVBQVQsT0FBaUM7QUFBQTs7QUFBQSx1QkFBWkMsSUFBWTtBQUFBLE1BQVpBLElBQVksMEJBQVAsS0FBTztBQUM3QjtBQUFBOztBQUNJO0FBQ0o7QUFBSyxlQUFTLEVBQUVQLHlFQUFoQjtBQUFBLDhCQUVJO0FBQUssaUJBQVMsRUFBRUMsaURBQUUsQ0FBQ0Qsb0VBQUQsQ0FBbEI7QUFBQSwrQkFDQSw4REFBQyw0Q0FBRDtBQUFrQixjQUFJLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFNSTtBQUFLLGlCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLGtCQUVJSSwrQ0FBQSxDQUFTLFVBQUNRLElBQUQsRUFBVTtBQUNmLDhCQUNJLDhEQUFDLDRDQUFEO0FBQ0EscUJBQVMsRUFBRVosc0VBRFg7QUFHQSxnQkFBSSxFQUFFWSxJQUFJLENBQUNFLElBSFg7QUFBQSxzQkFLQyxDQUFDUCxJQUFELElBQVNLLElBQUksQ0FBQ0c7QUFMZixhQUVNSCxJQUFJLENBQUNJLEdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQVFHLFNBVFA7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFxQkk7QUFBSyxpQkFBUyxFQUFFaEIsMkVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKLEVBd0JTTyxJQUFJLGlCQUFJLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBNkJIOztLQTlCUUQ7QUFnQ1QsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcbmltcG9ydCB7TUVOVX0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7SG9tZXBhZ2VPcHRpb259IGZyb20gJy4uL2ljb25zJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe2ZsYXQ9ZmFsc2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogTmF2aWdhdG9yICovXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgey8qIE1hcmsgU2lkZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1hcmspfT5cclxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBocmVmPScvJz5Pd25hYmxlLU5TPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBMaW5rIFNpZGUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZCdG59PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFmbGF0ICYmIG1lbnUudGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlxyXG4gICAgICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmxhdCAmJiA8SG9tZXBhZ2VPcHRpb24vPn1cclxuICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNuIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIkZyYW1lQnV0dG9uIiwiTUVOVSIsIkhvbWVwYWdlT3B0aW9uIiwiTmF2aWdhdGlvbiIsImZsYXQiLCJuYXZpZ2F0b3IiLCJtYXJrIiwibmF2QnRuIiwibWFwIiwibWVudSIsInN1YkJ0biIsImhyZWYiLCJ0aXRsZSIsImtleSIsImxvZ2luQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==