"use strict";
self["webpackHotUpdate_N_E"]("pages/downloadNFTCreator",{

/***/ "./components/button/base/index.js":
/*!*****************************************!*\
  !*** ./components/button/base/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ "./components/button/base/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["children", "href"],
    _excluded2 = ["border", "children", "className"],
    _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\base\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function linkButton(_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: href,
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().links),
      props: true,
      children: [" ", children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

function frameButton(_ref2) {
  var _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? false : _ref2$border,
      children = _ref2.children,
      className = _ref2.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }, this);
}

function button(_ref3) {
  var _ref3$border = _ref3.border,
      border = _ref3$border === void 0 ? false : _ref3$border,
      children = _ref3.children,
      className = _ref3.className,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, _excluded3);

  var Comp = border ? frameButton : linkButton;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Comp, _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().FrameBorder), className])
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (button);
/*
    Document:
    --------
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    border: Some button has border, but some it hasn't. When button has border, border attribute will have been  activated. 
    children: Content, which include within element.
    ...props: What if Any properties is passed into function, Function can catch.

    --> We have option that's is divided into two option. One Of them has image and text, other one has just text.
    --> Base Button has just text.
    --> Base Button is divided into two variant in itself. One Of them has borders, other one hasn't. When button was called with sended with parameter named border, Button will have 
    been border. 
*/

/* 
// TO DO List
[X]  frame button / Transparent - color

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG93bmxvYWRORlRDcmVhdG9yLjc4YzkxODFiOTUzNWE3MDhmNTFjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxTQUFTSSxVQUFULE9BQWlEO0FBQUEsTUFBMUJDLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFSQyxLQUFROztBQUM3QyxzQkFDSSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBRUQsSUFBWjtBQUFrQixhQUFTLEVBQUVMLHdFQUE3QjtBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFFQSxnRUFBZjtBQUE2QixXQUFLLE1BQWxDO0FBQUEsc0JBQXFDSSxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFHRCxTQUFTSyxXQUFULFFBQXFFO0FBQUEsMkJBQTlDQyxNQUE4QztBQUFBLE1BQTlDQSxNQUE4Qyw2QkFBdkMsS0FBdUM7QUFBQSxNQUFoQ04sUUFBZ0MsU0FBaENBLFFBQWdDO0FBQUEsTUFBdEJPLFNBQXNCLFNBQXRCQSxTQUFzQjtBQUFBLE1BQVJMLEtBQVE7O0FBQ2pFLHNCQUNRO0FBQ0EsYUFBUyxFQUFFSixpREFBRSxDQUNULENBQUNGLGtFQUFELEVBQ0FVLE1BQU0sSUFBSVYsc0VBRFYsRUFFQVcsU0FGQSxDQURTLENBRGI7QUFNSSxRQUFJLEVBQUMsUUFOVDtBQUFBLGNBUUtQO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBWUg7O0FBR0QsU0FBU1UsTUFBVCxRQUFnRTtBQUFBLDJCQUE5Q0osTUFBOEM7QUFBQSxNQUE5Q0EsTUFBOEMsNkJBQXZDLEtBQXVDO0FBQUEsTUFBaENOLFFBQWdDLFNBQWhDQSxRQUFnQztBQUFBLE1BQXRCTyxTQUFzQixTQUF0QkEsU0FBc0I7QUFBQSxNQUFSTCxLQUFROztBQUM1RCxNQUFNUyxJQUFJLEdBQUdMLE1BQU0sR0FBR0QsV0FBSCxHQUFpQk4sVUFBcEM7QUFDQSxzQkFDUSw4REFBQyxJQUFEO0FBQ0EsYUFBUyxFQUFFRCxpREFBRSxDQUNULENBQUNGLGtFQUFELEVBQ0FVLE1BQU0sSUFBSVYsc0VBRFYsRUFFQVcsU0FGQSxDQURTO0FBRGIsS0FNSUwsS0FOSjtBQUFBLGNBUUtGO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBWUg7O0FBRUQsK0RBQWVVLE1BQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbGlua0J1dHRvbiAoeyBjaGlsZHJlbiwgaHJlZiwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubGlua0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhICBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30gcHJvcHM+IHtjaGlsZHJlbn0gPC9hPlxyXG4gICAgICAgIDwvTGluaz4gIFxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZyYW1lQnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBidXR0b24gKHtib3JkZXI9ZmFsc2UsIGNoaWxkcmVuLCBjbGFzc05hbWUgLC4uLnByb3BzfSkge1xyXG4gICAgY29uc3QgQ29tcCA9IGJvcmRlciA/IGZyYW1lQnV0dG9uIDogbGlua0J1dHRvblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbXAgIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L0NvbXA+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25cclxuXHJcbi8qXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICBjbiBzdGFuZCBmb3IgY2xhc3NuYW1lczogJ0NsYXNzbmFtZXMnICBpcyBwcmV2ZW50IGNsYXNzIG92ZXJ3cml0ZS4gSXQgY29tZXMgbW9yZSB0aGFuIG9uZSBjbGFzcyBpbnRvIGZ1bmN0aW9uLCBpdCdzIHJlYXNvbiBhYm91dCBjb25mbGljdC4gXHJcbiAgICBib3JkZXI6IFNvbWUgYnV0dG9uIGhhcyBib3JkZXIsIGJ1dCBzb21lIGl0IGhhc24ndC4gV2hlbiBidXR0b24gaGFzIGJvcmRlciwgYm9yZGVyIGF0dHJpYnV0ZSB3aWxsIGhhdmUgYmVlbiAgYWN0aXZhdGVkLiBcclxuICAgIGNoaWxkcmVuOiBDb250ZW50LCB3aGljaCBpbmNsdWRlIHdpdGhpbiBlbGVtZW50LlxyXG4gICAgLi4ucHJvcHM6IFdoYXQgaWYgQW55IHByb3BlcnRpZXMgaXMgcGFzc2VkIGludG8gZnVuY3Rpb24sIEZ1bmN0aW9uIGNhbiBjYXRjaC5cclxuXHJcbiAgICAtLT4gV2UgaGF2ZSBvcHRpb24gdGhhdCdzIGlzIGRpdmlkZWQgaW50byB0d28gb3B0aW9uLiBPbmUgT2YgdGhlbSBoYXMgaW1hZ2UgYW5kIHRleHQsIG90aGVyIG9uZSBoYXMganVzdCB0ZXh0LlxyXG4gICAgLS0+IEJhc2UgQnV0dG9uIGhhcyBqdXN0IHRleHQuXHJcbiAgICAtLT4gQmFzZSBCdXR0b24gaXMgZGl2aWRlZCBpbnRvIHR3byB2YXJpYW50IGluIGl0c2VsZi4gT25lIE9mIHRoZW0gaGFzIGJvcmRlcnMsIG90aGVyIG9uZSBoYXNuJ3QuIFdoZW4gYnV0dG9uIHdhcyBjYWxsZWQgd2l0aCBzZW5kZWQgd2l0aCBwYXJhbWV0ZXIgbmFtZWQgYm9yZGVyLCBCdXR0b24gd2lsbCBoYXZlIFxyXG4gICAgYmVlbiBib3JkZXIuIFxyXG4qL1xyXG5cclxuLyogXHJcbi8vIFRPIERPIExpc3RcclxuW1hdICBmcmFtZSBidXR0b24gLyBUcmFuc3BhcmVudCAtIGNvbG9yXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJMaW5rIiwiY24iLCJsaW5rQnV0dG9uIiwiY2hpbGRyZW4iLCJocmVmIiwicHJvcHMiLCJsaW5rQ29udGFpbmVyIiwibGlua3MiLCJmcmFtZUJ1dHRvbiIsImJvcmRlciIsImNsYXNzTmFtZSIsImJhc2VCdG4iLCJGcmFtZUJvcmRlciIsImJ1dHRvbiIsIkNvbXAiXSwic291cmNlUm9vdCI6IiJ9