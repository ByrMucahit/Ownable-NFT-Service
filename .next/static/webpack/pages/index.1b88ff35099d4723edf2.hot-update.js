"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "\n                       ".concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiButtonBaseRoot), " \n                       ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiListItemRoot), " \n                       ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().cssNavigatorContent), " \n                       ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiListItemGutters), " \n                       ").concat((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiListItemButton)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
                className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().subBtn),
                href: menu.href,
                children: !flat && menu.title
              }, menu.key, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_5__.HomepageOption, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().homepageOption)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWI4OGZmMzUwOTlkNDcyM2VkZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU08sVUFBVCxPQUFpQztBQUFBOztBQUFBLHVCQUFaQyxJQUFZO0FBQUEsTUFBWkEsSUFBWSwwQkFBUCxLQUFPO0FBQzdCO0FBQUE7O0FBQ0k7QUFDSjtBQUFRLGVBQVMsa0JBQ2ZQLDRFQURlLG9CQUVmQSw2RUFGZSxvQkFHZkEseUZBSGUsb0JBSWZBLHFGQUplLG9CQUtmQSx5RUFMZSxvQkFNZkEsaUZBTmUsQ0FBakI7QUFBQSw2QkFRSTtBQUFLLGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGdDQUNJLDhEQUFDLDRDQUFEO0FBQWtCLGNBQUksRUFBQyxHQUF2QjtBQUEyQixtQkFBUyxFQUFFQSxvRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHSTtBQUFLLG1CQUFTLEVBQUVBLDRFQUFoQjtBQUFBLG9CQUdJSSwrQ0FBQSxDQUFTLFVBQUNjLElBQUQsRUFBVTtBQUNmLGdDQUNHO0FBQUssdUJBQVMscUNBQ1psQixpRkFEWSx1Q0FFWkEsK0VBRlksdUNBR1pBLG1GQUhZLHVDQUlaQSxrRkFKWSx1Q0FLWkEsaUZBTFksQ0FBZDtBQUFBLHFDQU1LLDhEQUFDLDRDQUFEO0FBQ0kseUJBQVMsRUFBRUEsc0VBRGY7QUFHSSxvQkFBSSxFQUFFa0IsSUFBSSxDQUFDTyxJQUhmO0FBQUEsMEJBS1MsQ0FBQ2xCLElBQUQsSUFBU1csSUFBSSxDQUFDUTtBQUx2QixpQkFFVVIsSUFBSSxDQUFDUyxHQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBZ0JHLFdBakJQO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQTJCSTtBQUFLLG1CQUFTLEVBQUUzQiwyRUFBaEI7QUFBQSxpQ0FDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JKLEVBZ0NLTyxJQUFJLGlCQUFJLDhEQUFDLGtEQUFEO0FBQWdCLG1CQUFTLEVBQUVQLDhFQUFxQjZCO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQThDSDs7S0EvQ1F2QjtBQWlEVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IEZyYW1lQnV0dG9uIGZyb20gXCIuLi9mcmFtZS9mcmFtZUJ1dHRvblwiO1xyXG5pbXBvcnQge01FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe2ZsYXQ9ZmFsc2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogTmF2aWdhdG9yICovXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17YFxyXG4gICAgJHtzdHlsZXMubXVpUGFwZXJSb290fSBcclxuICAgICR7c3R5bGVzLm11aUFwcEJhclJvb3R9IFxyXG4gICAgJHtzdHlsZXMubXVpQXBwQmFyUG9zaXRpb25BYnNvbHV0ZX0gXHJcbiAgICAke3N0eWxlcy5tdWlBcHBCYXJDb2xvckRlZmF1bHR9IFxyXG4gICAgJHtzdHlsZXMuY3NzSGVhZGVyfSBcclxuICAgICR7c3R5bGVzLm11aVBhcGVyRWxldmF0aW9ufWB9PiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0b3J9PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBocmVmPScvJyBjbGFzc05hbWU9e3N0eWxlcy5jb21wfT5Pd25hYmxlLU5TPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogTWFyayBTaWRlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNzc05hdmlnYXRvcn0+ICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTGluayBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlMaXN0SXRlbVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmNzc05hdmlnYXRvckNvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUxpc3RJdGVtR3V0dGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpTGlzdEl0ZW1CdXR0b259YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YkJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiYgbWVudS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIExvZ2luIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lcGFnZU9wdGlvbn0vPn1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY24iLCJOYXZpZ2F0aW9uQnV0dG9uIiwiRnJhbWVCdXR0b24iLCJNRU5VIiwiSG9tZXBhZ2VPcHRpb24iLCJOYXZpZ2F0aW9uIiwiZmxhdCIsIm11aVBhcGVyUm9vdCIsIm11aUFwcEJhclJvb3QiLCJtdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlIiwibXVpQXBwQmFyQ29sb3JEZWZhdWx0IiwiY3NzSGVhZGVyIiwibXVpUGFwZXJFbGV2YXRpb24iLCJuYXZpZ2F0b3IiLCJjb21wIiwiY3NzTmF2aWdhdG9yIiwibWFwIiwibWVudSIsIm11aUJ1dHRvbkJhc2VSb290IiwibXVpTGlzdEl0ZW1Sb290IiwiY3NzTmF2aWdhdG9yQ29udGVudCIsIm11aUxpc3RJdGVtR3V0dGVycyIsIm11aUxpc3RJdGVtQnV0dG9uIiwic3ViQnRuIiwiaHJlZiIsInRpdGxlIiwia2V5IiwibG9naW5CdXR0b24iLCJob21lcGFnZU9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=