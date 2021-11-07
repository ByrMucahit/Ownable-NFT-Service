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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg3MWJiNGI4NzJkMjVjMmI3YWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU1MsVUFBVCxPQUFpQztBQUFBOztBQUFBLHVCQUFaQyxJQUFZO0FBQUEsTUFBWkEsSUFBWSwwQkFBUCxLQUFPO0FBQzdCO0FBQUE7O0FBQ0k7QUFDSjtBQUFLLGVBQVMsRUFBRVQseUVBQWhCO0FBQUEsOEJBRUk7QUFBSyxpQkFBUyxFQUFFQyxpREFBRSxDQUFDRCxvRUFBRCxDQUFsQjtBQUFBLCtCQUNBLDhEQUFDLDRDQUFEO0FBQWtCLGNBQUksRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1JO0FBQUssaUJBQVMsRUFBRUEsc0VBQWhCO0FBQUEsa0JBRUlNLCtDQUFBLENBQVMsVUFBQ1EsSUFBRCxFQUFVO0FBQ2YsOEJBQ0ksOERBQUMsNENBQUQ7QUFDQSxxQkFBUyxFQUFFZCxzRUFEWDtBQUdBLGdCQUFJLEVBQUVjLElBQUksQ0FBQ0UsSUFIWDtBQUFBLHNCQUtDLENBQUNQLElBQUQsSUFBU0ssSUFBSSxDQUFDRztBQUxmLGFBRU1ILElBQUksQ0FBQ0ksR0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBUUcsU0FUUDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQXFCSTtBQUFLLGlCQUFTLEVBQUVsQiwyRUFBaEI7QUFBQSwrQkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkosRUF3QlNTLElBQUksaUJBQUksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUE2Qkg7O0tBOUJRRDtBQWdDVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSAnLi4vdGV4dC90ZXh0LXRpdGxlJ1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IEZyYW1lQnV0dG9uIGZyb20gXCIuLi9mcmFtZS9mcmFtZUJ1dHRvblwiO1xyXG5pbXBvcnQge01FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHtmbGF0PWZhbHNlfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8qIE5hdmlnYXRvciAqL1xyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0b3J9PlxyXG4gICAgICAgIHsvKiBNYXJrIFNpZGUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5tYXJrKX0+XHJcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaHJlZj0nLyc+T3duYWJsZS1OUzwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogTGluayBTaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2QnRufT5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBNRU5VLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YkJ0bn1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJiBtZW51LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgPEZyYW1lQnV0dG9uPkxvZ2luPC9GcmFtZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZsYXQgJiYgPEhvbWVwYWdlT3B0aW9uLz59XHJcbiAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjbiIsIk5hdmlnYXRpb25CdXR0b24iLCJUZXh0VGl0bGUiLCJIZWFkVGl0bGUiLCJGcmFtZUJ1dHRvbiIsIk1FTlUiLCJIb21lcGFnZU9wdGlvbiIsIk5hdmlnYXRpb24iLCJmbGF0IiwibmF2aWdhdG9yIiwibWFyayIsIm5hdkJ0biIsIm1hcCIsIm1lbnUiLCJzdWJCdG4iLCJocmVmIiwidGl0bGUiLCJrZXkiLCJsb2dpbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=