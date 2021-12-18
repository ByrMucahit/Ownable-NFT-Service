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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
                className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().subBtn),
                href: menu.href,
                children: !flat && menu.title
              }, menu.key, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
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
            lineNumber: 43,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_5__.HomepageOption, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().homepageOption)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC4wY2JiMzg4ZGFjNDM4NGUyOGU0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTTyxVQUFULE9BQWlDO0FBQUE7O0FBQUEsdUJBQVpDLElBQVk7QUFBQSxNQUFaQSxJQUFZLDBCQUFQLEtBQU87QUFDN0I7QUFBQTs7QUFDSTtBQUNKO0FBQVEsZUFBUyxrQkFDZlAsNEVBRGUsb0JBRWZBLDZFQUZlLG9CQUdmQSx5RkFIZSxvQkFJZkEscUZBSmUsb0JBS2ZBLHlFQUxlLG9CQU1mQSxpRkFOZSxDQUFqQjtBQUFBLDZCQVFJO0FBQUssaUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsZ0NBQ0ksOERBQUMsNENBQUQ7QUFBa0IsY0FBSSxFQUFDLEdBQXZCO0FBQTJCLG1CQUFTLEVBQUVBLG9FQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsb0JBR0lJLCtDQUFBLENBQVMsVUFBQ2MsSUFBRCxFQUFVO0FBQ2YsZ0NBQ0c7QUFBQSxxQ0FDSyw4REFBQyw0Q0FBRDtBQUNJLHlCQUFTLEVBQUVsQixzRUFEZjtBQUdJLG9CQUFJLEVBQUVrQixJQUFJLENBQUNFLElBSGY7QUFBQSwwQkFLUyxDQUFDYixJQUFELElBQVNXLElBQUksQ0FBQ0c7QUFMdkIsaUJBRVVILElBQUksQ0FBQ0ksR0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESDtBQVdHLFdBWlA7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBc0JJO0FBQUssbUJBQVMsRUFBRXRCLDJFQUFoQjtBQUFBLGlDQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkosRUEyQktPLElBQUksaUJBQUksOERBQUMsa0RBQUQ7QUFBZ0IsbUJBQVMsRUFBRVAsOEVBQXFCd0I7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBeUNIOztLQTFDUWxCO0FBNENULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcbmltcG9ydCB7TUVOVX0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7SG9tZXBhZ2VPcHRpb259IGZyb20gJy4uL2ljb25zJ1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBOYXZpZ2F0b3IgKi9cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgXHJcbiAgICAke3N0eWxlcy5tdWlQYXBlclJvb3R9IFxyXG4gICAgJHtzdHlsZXMubXVpQXBwQmFyUm9vdH0gXHJcbiAgICAke3N0eWxlcy5tdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlfSBcclxuICAgICR7c3R5bGVzLm11aUFwcEJhckNvbG9yRGVmYXVsdH0gXHJcbiAgICAke3N0eWxlcy5jc3NIZWFkZXJ9IFxyXG4gICAgJHtzdHlsZXMubXVpUGFwZXJFbGV2YXRpb259YH0+ICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGhyZWY9Jy8nIGNsYXNzTmFtZT17c3R5bGVzLmNvbXB9Pk93bmFibGUtTlM8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiBNYXJrIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3NzTmF2aWdhdG9yfT4gICBcclxuICAgICAgICAgICAgICAgIHsvKiBMaW5rIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YkJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiYgbWVudS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIExvZ2luIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lcGFnZU9wdGlvbn0vPn1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY24iLCJOYXZpZ2F0aW9uQnV0dG9uIiwiRnJhbWVCdXR0b24iLCJNRU5VIiwiSG9tZXBhZ2VPcHRpb24iLCJOYXZpZ2F0aW9uIiwiZmxhdCIsIm11aVBhcGVyUm9vdCIsIm11aUFwcEJhclJvb3QiLCJtdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlIiwibXVpQXBwQmFyQ29sb3JEZWZhdWx0IiwiY3NzSGVhZGVyIiwibXVpUGFwZXJFbGV2YXRpb24iLCJuYXZpZ2F0b3IiLCJjb21wIiwiY3NzTmF2aWdhdG9yIiwibWFwIiwibWVudSIsInN1YkJ0biIsImhyZWYiLCJ0aXRsZSIsImtleSIsImxvZ2luQnV0dG9uIiwiaG9tZXBhZ2VPcHRpb24iXSwic291cmNlUm9vdCI6IiJ9