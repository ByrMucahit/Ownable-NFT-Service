"use strict";
self["webpackHotUpdate_N_E"]("pages/businessSignUp",{

/***/ "./components/input/dropdown/index.js":
/*!********************************************!*\
  !*** ./components/input/dropdown/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./components/input/dropdown/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constant */ "./constant/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\dropdown\\index.js";







function DropDownMenu(_ref) {
  var _this = this;

  var _ref$business = _ref.business,
      business = _ref$business === void 0 ? false : _ref$business,
      header = _ref.header,
      big = _ref.big,
      medium = _ref.medium,
      small = _ref.small;
  var comp = business ? _constant__WEBPACK_IMPORTED_MODULE_3__.BUSINESS : _constant__WEBPACK_IMPORTED_MODULE_3__.makeNFTOption;
  return (
    /*#__PURE__*/

    /* Dropdown menu container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      "for": "subOptions",
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 34
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 91
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
        id: "subOptions",
        name: "options",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().options), medium && (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().medium)]),
        children: comp.map(function (options) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
            value: options.key,
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().option),
            children: options.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)
  );
}

_c = DropDownMenu;
/* harmony default export */ __webpack_exports__["default"] = (DropDownMenu);

var _c;

$RefreshReg$(_c, "DropDownMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzaW5lc3NTaWduVXAuOTM2ZjE2ZTI0ZDdmZjNjNDdlZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU00sWUFBVCxPQUFpRTtBQUFBOztBQUFBLDJCQUExQ0MsUUFBMEM7QUFBQSxNQUExQ0EsUUFBMEMsOEJBQWpDLEtBQWlDO0FBQUEsTUFBMUJDLE1BQTBCLFFBQTFCQSxNQUEwQjtBQUFBLE1BQWxCQyxHQUFrQixRQUFsQkEsR0FBa0I7QUFBQSxNQUFkQyxNQUFjLFFBQWRBLE1BQWM7QUFBQSxNQUFQQyxLQUFPLFFBQVBBLEtBQU87QUFFN0QsTUFBTUMsSUFBSSxHQUFHTCxRQUFRLEdBQUdGLCtDQUFILEdBQWNELG9EQUFuQztBQUNBO0FBQUE7O0FBQ0k7QUFDQTtBQUFPLGFBQUksWUFBWDtBQUFBLG1DQUF5Qiw4REFBQyxxREFBRDtBQUFXLGlCQUFTLEVBQUVILGlFQUF0QjtBQUFBLGtCQUFzQ087QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF6QixlQUFrRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWxGLGVBRUk7QUFBUSxVQUFFLEVBQUMsWUFBWDtBQUF3QixZQUFJLEVBQUMsU0FBN0I7QUFBdUMsaUJBQVMsRUFBRUwsaURBQUUsQ0FBQyxDQUFDRixrRUFBRCxFQUFnQlMsTUFBTSxJQUFJVCxpRUFBMUIsQ0FBRCxDQUFwRDtBQUFBLGtCQUNDVyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDRCxPQUFELEVBQVc7QUFDakIsOEJBQ0E7QUFBUSxpQkFBSyxFQUFFQSxPQUFPLENBQUNFLEdBQXZCO0FBQTRCLHFCQUFTLEVBQUVkLGlFQUF2QztBQUFBLHNCQUF1RFksT0FBTyxDQUFDSTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBO0FBR0gsU0FKQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQWVIOztLQWxCUVg7QUFxQlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9kcm9wZG93bi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uLy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7bWFrZU5GVE9wdGlvbiwgQlVTSU5FU1N9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5mdW5jdGlvbiBEcm9wRG93bk1lbnUoe2J1c2luZXNzPWZhbHNlLCBoZWFkZXIsIGJpZyxtZWRpdW0sc21hbGx9KXtcclxuXHJcbiAgICBjb25zdCBjb21wID0gYnVzaW5lc3MgPyBCVVNJTkVTUyA6IG1ha2VORlRPcHRpb25cclxuICAgIHJldHVybiAoICBcclxuICAgICAgICAvKiBEcm9wZG93biBtZW51IGNvbnRhaW5lciAqL1xyXG4gICAgICAgIDxsYWJlbCBmb3I9J3N1Yk9wdGlvbnMnPiA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L0hlYWRUaXRsZT48YnIvPlxyXG4gICAgICAgICAgICB7LyogU2VsZWN0aW9uICovfVxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPSdzdWJPcHRpb25zJyBuYW1lPSdvcHRpb25zJyBjbGFzc05hbWU9e2NuKFtzdHlsZXMub3B0aW9ucyxtZWRpdW0gJiYgc3R5bGVzLm1lZGl1bV0pfT5cclxuICAgICAgICAgICAge2NvbXAubWFwKChvcHRpb25zKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9ucy5rZXl9IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+e29wdGlvbnMudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bk1lbnUiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJIZWFkVGl0bGUiLCJjbiIsIm1ha2VORlRPcHRpb24iLCJCVVNJTkVTUyIsIkRyb3BEb3duTWVudSIsImJ1c2luZXNzIiwiaGVhZGVyIiwiYmlnIiwibWVkaXVtIiwic21hbGwiLCJjb21wIiwib3B0aW9ucyIsIm1hcCIsImtleSIsIm9wdGlvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==