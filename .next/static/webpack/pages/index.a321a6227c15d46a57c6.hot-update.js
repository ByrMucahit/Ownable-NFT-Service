"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.module.css */ "./components/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title */ "./components/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["border", "children", "className"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button.js";






function frameButton(_ref) {
  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      children = _ref.children,
      className = _ref.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().baseBtn), border && (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

function linkButton(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
      children: [" ", children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

function button(_ref3) {
  var _ref3$border = _ref3.border,
      border = _ref3$border === void 0 ? false : _ref3$border,
      children = _ref3.children,
      className = _ref3.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, _excluded3);

  var Comp = border ? frameButton : linkButton;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Comp, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().baseBtn), border && (_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (button);
/*
    Document:
    --------
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    border: Some button has border, but some it hasn't. When button has border, border attribute wil have been  activated. 
    children: Content, which include within element.
    ...props: What if Any properties is passed into function, Function can catch.
*/

/* 
// TO DO List
[]  frame button / Transparent - color

*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTMyMWE2MjI3YzE1ZDQ2YTU3YzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxTQUFTSSxXQUFULE9BQXFFO0FBQUEseUJBQTlDQyxNQUE4QztBQUFBLE1BQTlDQSxNQUE4Qyw0QkFBdkMsS0FBdUM7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVJDLEtBQVE7O0FBQ2pFLHNCQUNRO0FBQ0EsYUFBUyxFQUFFTixpREFBRSxDQUNULENBQUNELG1FQUFELEVBQ0FJLE1BQU0sSUFBSUosdUVBRFYsRUFFQU0sU0FGQSxDQURTLENBRGI7QUFNSSxRQUFJLEVBQUMsUUFOVDtBQUFBLGNBUUtEO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBWUg7O0FBR0QsU0FBU0ssVUFBVCxRQUF1RDtBQUFBLE1BQWhDTCxRQUFnQyxTQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsU0FBc0IsU0FBdEJBLFNBQXNCO0FBQUEsTUFBUkMsS0FBUTs7QUFDbkQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVQLHlFQUFoQjtBQUFBLDJCQUNBO0FBQUEsc0JBQUtLLFFBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBR0QsU0FBU08sTUFBVCxRQUFnRTtBQUFBLDJCQUE5Q1IsTUFBOEM7QUFBQSxNQUE5Q0EsTUFBOEMsNkJBQXZDLEtBQXVDO0FBQUEsTUFBaENDLFFBQWdDLFNBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxTQUFzQixTQUF0QkEsU0FBc0I7QUFBQSxNQUFSQyxLQUFROztBQUM1RCxNQUFNTSxJQUFJLEdBQUdULE1BQU0sR0FBR0QsV0FBSCxHQUFpQk8sVUFBcEM7QUFDQSxzQkFDUSw4REFBQyxJQUFEO0FBQ0EsYUFBUyxFQUFFVCxpREFBRSxDQUNULENBQUNELG1FQUFELEVBQ0FJLE1BQU0sSUFBSUosdUVBRFYsRUFFQU0sU0FGQSxDQURTLENBRGI7QUFNSSxRQUFJLEVBQUMsUUFOVDtBQUFBLGNBUUtEO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBWUg7O0FBRUQsK0RBQWVPLE1BQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tICcuL3RleHQtdGl0bGUnXHJcblxyXG5mdW5jdGlvbiBmcmFtZUJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbGlua0J1dHRvbiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGFpbmVyfT5cclxuICAgICAgICA8YT4ge2NoaWxkcmVufSA8L2E+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBidXR0b24gKHtib3JkZXI9ZmFsc2UsIGNoaWxkcmVuLCBjbGFzc05hbWUgLC4uLnByb3BzfSkge1xyXG4gICAgY29uc3QgQ29tcCA9IGJvcmRlciA/IGZyYW1lQnV0dG9uIDogbGlua0J1dHRvblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbXAgIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L0NvbXA+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25cclxuXHJcbi8qXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICBjbiBzdGFuZCBmb3IgY2xhc3NuYW1lczogJ0NsYXNzbmFtZXMnICBpcyBwcmV2ZW50IGNsYXNzIG92ZXJ3cml0ZS4gSXQgY29tZXMgbW9yZSB0aGFuIG9uZSBjbGFzcyBpbnRvIGZ1bmN0aW9uLCBpdCdzIHJlYXNvbiBhYm91dCBjb25mbGljdC4gXHJcbiAgICBib3JkZXI6IFNvbWUgYnV0dG9uIGhhcyBib3JkZXIsIGJ1dCBzb21lIGl0IGhhc24ndC4gV2hlbiBidXR0b24gaGFzIGJvcmRlciwgYm9yZGVyIGF0dHJpYnV0ZSB3aWwgaGF2ZSBiZWVuICBhY3RpdmF0ZWQuIFxyXG4gICAgY2hpbGRyZW46IENvbnRlbnQsIHdoaWNoIGluY2x1ZGUgd2l0aGluIGVsZW1lbnQuXHJcbiAgICAuLi5wcm9wczogV2hhdCBpZiBBbnkgcHJvcGVydGllcyBpcyBwYXNzZWQgaW50byBmdW5jdGlvbiwgRnVuY3Rpb24gY2FuIGNhdGNoLlxyXG4qL1xyXG5cclxuLyogXHJcbi8vIFRPIERPIExpc3RcclxuW10gIGZyYW1lIGJ1dHRvbiAvIFRyYW5zcGFyZW50IC0gY29sb3JcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNuIiwiVGV4dFRpdGxlIiwiZnJhbWVCdXR0b24iLCJib3JkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInByb3BzIiwiYmFzZUJ0biIsIkZyYW1lQm9yZGVyIiwibGlua0J1dHRvbiIsImxpbmtDb250YWluZXIiLCJidXR0b24iLCJDb21wIl0sInNvdXJjZVJvb3QiOiIifQ==