"use strict";
self["webpackHotUpdate_N_E"]("pages/makeNft",{

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
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("header", {
      className: "\n    ".concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiPaperRoot), " \n    ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiAppBarRoot), " \n    ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiAppBarPositionAbsolute), " \n    ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiAppBarColorDefault), " \n    ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().cssHeader), " \n    ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiPaperElevation)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigator),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().comp),
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().cssNavigator),
          children: _constant__WEBPACK_IMPORTED_MODULE_4__.MENU.map(function (menu) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
              className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().subBtn),
              href: menu.href,
              children: !flat && menu.title
            }, menu.key, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_5__.HomepageOption, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().homepageOption)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC4wYzMzZDI0ZGYyMDI4MGQ5NmQwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTTyxVQUFULE9BQWlDO0FBQUE7O0FBQUEsdUJBQVpDLElBQVk7QUFBQSxNQUFaQSxJQUFZLDBCQUFQLEtBQU87QUFDN0I7QUFBQTs7QUFDSTtBQUNKO0FBQVEsZUFBUyxrQkFDZlAsNEVBRGUsb0JBRWZBLDZFQUZlLG9CQUdmQSx5RkFIZSxvQkFJZkEscUZBSmUsb0JBS2ZBLHlFQUxlLG9CQU1mQSxpRkFOZSxDQUFqQjtBQUFBLDZCQVFJO0FBQUssaUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsZ0NBQ0ksOERBQUMsNENBQUQ7QUFBa0IsY0FBSSxFQUFDLEdBQXZCO0FBQTJCLG1CQUFTLEVBQUVBLG9FQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdBO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsb0JBR1FJLCtDQUFBLENBQVMsVUFBQ2MsSUFBRCxFQUFVO0FBQ2YsZ0NBRVEsOERBQUMsNENBQUQ7QUFDSSx1QkFBUyxFQUFFbEIsc0VBRGY7QUFHSSxrQkFBSSxFQUFFa0IsSUFBSSxDQUFDRSxJQUhmO0FBQUEsd0JBS1MsQ0FBQ2IsSUFBRCxJQUFTVyxJQUFJLENBQUNHO0FBTHZCLGVBRVVILElBQUksQ0FBQ0ksR0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZSO0FBVUcsV0FYUDtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEEsZUFxQkk7QUFBSyxtQkFBUyxFQUFFdEIsMkVBQWhCO0FBQUEsaUNBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSixFQTBCS08sSUFBSSxpQkFBSSw4REFBQyxrREFBRDtBQUFnQixtQkFBUyxFQUFFUCw4RUFBcUJ3QjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUF3Q0g7O0tBekNRbEI7QUEyQ1QsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCBGcmFtZUJ1dHRvbiBmcm9tIFwiLi4vZnJhbWUvZnJhbWVCdXR0b25cIjtcclxuaW1wb3J0IHtNRU5VfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHtIb21lcGFnZU9wdGlvbn0gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHtmbGF0PWZhbHNlfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8qIE5hdmlnYXRvciAqL1xyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2BcclxuICAgICR7c3R5bGVzLm11aVBhcGVyUm9vdH0gXHJcbiAgICAke3N0eWxlcy5tdWlBcHBCYXJSb290fSBcclxuICAgICR7c3R5bGVzLm11aUFwcEJhclBvc2l0aW9uQWJzb2x1dGV9IFxyXG4gICAgJHtzdHlsZXMubXVpQXBwQmFyQ29sb3JEZWZhdWx0fSBcclxuICAgICR7c3R5bGVzLmNzc0hlYWRlcn0gXHJcbiAgICAke3N0eWxlcy5tdWlQYXBlckVsZXZhdGlvbn1gfT4gIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaHJlZj0nLycgY2xhc3NOYW1lPXtzdHlsZXMuY29tcH0+T3duYWJsZS1OUzwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICB7LyogTWFyayBTaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3NzTmF2aWdhdG9yfT4gICBcclxuICAgICAgICAgICAgey8qIExpbmsgU2lkZSAqL31cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJiBtZW51LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBMb2dpbiBCdXR0b24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgPEZyYW1lQnV0dG9uPkxvZ2luPC9GcmFtZUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB7ZmxhdCAmJiA8SG9tZXBhZ2VPcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZXBhZ2VPcHRpb259Lz59XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNuIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIkZyYW1lQnV0dG9uIiwiTUVOVSIsIkhvbWVwYWdlT3B0aW9uIiwiTmF2aWdhdGlvbiIsImZsYXQiLCJtdWlQYXBlclJvb3QiLCJtdWlBcHBCYXJSb290IiwibXVpQXBwQmFyUG9zaXRpb25BYnNvbHV0ZSIsIm11aUFwcEJhckNvbG9yRGVmYXVsdCIsImNzc0hlYWRlciIsIm11aVBhcGVyRWxldmF0aW9uIiwibmF2aWdhdG9yIiwiY29tcCIsImNzc05hdmlnYXRvciIsIm1hcCIsIm1lbnUiLCJzdWJCdG4iLCJocmVmIiwidGl0bGUiLCJrZXkiLCJsb2dpbkJ1dHRvbiIsImhvbWVwYWdlT3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==