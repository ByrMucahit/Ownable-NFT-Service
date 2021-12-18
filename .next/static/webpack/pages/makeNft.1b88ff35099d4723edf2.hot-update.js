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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC4xYjg4ZmYzNTA5OWQ0NzIzZWRmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTTyxVQUFULE9BQWlDO0FBQUE7O0FBQUEsdUJBQVpDLElBQVk7QUFBQSxNQUFaQSxJQUFZLDBCQUFQLEtBQU87QUFDN0I7QUFBQTs7QUFDSTtBQUNKO0FBQVEsZUFBUyxrQkFDZlAsNEVBRGUsb0JBRWZBLDZFQUZlLG9CQUdmQSx5RkFIZSxvQkFJZkEscUZBSmUsb0JBS2ZBLHlFQUxlLG9CQU1mQSxpRkFOZSxDQUFqQjtBQUFBLDZCQVFJO0FBQUssaUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsZ0NBQ0ksOERBQUMsNENBQUQ7QUFBa0IsY0FBSSxFQUFDLEdBQXZCO0FBQTJCLG1CQUFTLEVBQUVBLG9FQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsb0JBR0lJLCtDQUFBLENBQVMsVUFBQ2MsSUFBRCxFQUFVO0FBQ2YsZ0NBQ0c7QUFBSyx1QkFBUyxxQ0FDWmxCLGlGQURZLHVDQUVaQSwrRUFGWSx1Q0FHWkEsbUZBSFksdUNBSVpBLGtGQUpZLHVDQUtaQSxpRkFMWSxDQUFkO0FBQUEscUNBTUssOERBQUMsNENBQUQ7QUFDSSx5QkFBUyxFQUFFQSxzRUFEZjtBQUdJLG9CQUFJLEVBQUVrQixJQUFJLENBQUNPLElBSGY7QUFBQSwwQkFLUyxDQUFDbEIsSUFBRCxJQUFTVyxJQUFJLENBQUNRO0FBTHZCLGlCQUVVUixJQUFJLENBQUNTLEdBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREg7QUFnQkcsV0FqQlA7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBMkJJO0FBQUssbUJBQVMsRUFBRTNCLDJFQUFoQjtBQUFBLGlDQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkosRUFnQ0tPLElBQUksaUJBQUksOERBQUMsa0RBQUQ7QUFBZ0IsbUJBQVMsRUFBRVAsOEVBQXFCNkI7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBOENIOztLQS9DUXZCO0FBaURULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcbmltcG9ydCB7TUVOVX0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7SG9tZXBhZ2VPcHRpb259IGZyb20gJy4uL2ljb25zJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBOYXZpZ2F0b3IgKi9cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgXHJcbiAgICAke3N0eWxlcy5tdWlQYXBlclJvb3R9IFxyXG4gICAgJHtzdHlsZXMubXVpQXBwQmFyUm9vdH0gXHJcbiAgICAke3N0eWxlcy5tdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlfSBcclxuICAgICR7c3R5bGVzLm11aUFwcEJhckNvbG9yRGVmYXVsdH0gXHJcbiAgICAke3N0eWxlcy5jc3NIZWFkZXJ9IFxyXG4gICAgJHtzdHlsZXMubXVpUGFwZXJFbGV2YXRpb259YH0+ICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGhyZWY9Jy8nIGNsYXNzTmFtZT17c3R5bGVzLmNvbXB9Pk93bmFibGUtTlM8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiBNYXJrIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3NzTmF2aWdhdG9yfT4gICBcclxuICAgICAgICAgICAgICAgIHsvKiBMaW5rIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uQmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUxpc3RJdGVtUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzTmF2aWdhdG9yQ29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpTGlzdEl0ZW1HdXR0ZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlMaXN0SXRlbUJ1dHRvbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJiBtZW51LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogTG9naW4gQnV0dG9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAge2ZsYXQgJiYgPEhvbWVwYWdlT3B0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlT3B0aW9ufS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjbiIsIk5hdmlnYXRpb25CdXR0b24iLCJGcmFtZUJ1dHRvbiIsIk1FTlUiLCJIb21lcGFnZU9wdGlvbiIsIk5hdmlnYXRpb24iLCJmbGF0IiwibXVpUGFwZXJSb290IiwibXVpQXBwQmFyUm9vdCIsIm11aUFwcEJhclBvc2l0aW9uQWJzb2x1dGUiLCJtdWlBcHBCYXJDb2xvckRlZmF1bHQiLCJjc3NIZWFkZXIiLCJtdWlQYXBlckVsZXZhdGlvbiIsIm5hdmlnYXRvciIsImNvbXAiLCJjc3NOYXZpZ2F0b3IiLCJtYXAiLCJtZW51IiwibXVpQnV0dG9uQmFzZVJvb3QiLCJtdWlMaXN0SXRlbVJvb3QiLCJjc3NOYXZpZ2F0b3JDb250ZW50IiwibXVpTGlzdEl0ZW1HdXR0ZXJzIiwibXVpTGlzdEl0ZW1CdXR0b24iLCJzdWJCdG4iLCJocmVmIiwidGl0bGUiLCJrZXkiLCJsb2dpbkJ1dHRvbiIsImhvbWVwYWdlT3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==