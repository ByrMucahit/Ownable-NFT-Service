"use strict";
self["webpackHotUpdate_N_E"]("pages/downloadNFTCreator",{

/***/ "./components/navigation/button.js":
/*!*****************************************!*\
  !*** ./components/navigation/button.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.module.css */ "./components/navigation/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["children"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function NavigationButton(_ref) {
  var children = _ref.children,
      props = (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav)
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = NavigationButton;
/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

var _c;

$RefreshReg$(_c, "NavigationButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG93bmxvYWRORlRDcmVhdG9yLjE4MzQ1YzMzZmRjYzc2ZGMwZWRmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUNBLFNBQVNJLGdCQUFULE9BQWtEO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVJDLEtBQVE7O0FBQzlDLHNCQUNBLDhEQUFDLHVEQUFEO0FBQVEsYUFBUyxFQUFFTCwrREFBVU07QUFBN0IsS0FBbUNELEtBQW5DO0FBQUEsY0FDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLSDs7S0FOUUQ7QUFRVCwrREFBZUEsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLCtEQUFjO0FBQ1ZJLEVBQUFBLFdBQVcsRUFBRSxHQURIO0FBRVZDLEVBQUFBLFlBQVksRUFBRTtBQUZKLENBQWQ7QUFLTyxJQUFNQyxhQUFhLEdBQUMsQ0FDdkI7QUFDSUMsRUFBQUEsR0FBRyxFQUFFLEtBRFQ7QUFFSUMsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FEdUIsRUFLdkI7QUFDSUQsRUFBQUEsR0FBRyxFQUFFLElBRFQ7QUFFSUMsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FMdUIsQ0FBcEI7QUFXQSxJQUFNQyxRQUFRLEdBQUcsQ0FDcEI7QUFDSUYsRUFBQUEsR0FBRyxFQUFHLHFCQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRTtBQUZYLENBRG9CLEVBS3BCO0FBQ0lELEVBQUFBLEdBQUcsRUFBRyxtQkFEVjtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQUxvQixFQVNwQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUcsa0JBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FUb0IsRUFhcEI7QUFDSUQsRUFBQUEsR0FBRyxFQUFHLDBCQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRTtBQUZYLENBYm9CLEVBaUJwQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUcsZUFEVjtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQWpCb0IsQ0FBakI7QUF3QkEsSUFBTUUsSUFBSSxHQUFHLENBQ2hCO0FBQ0lGLEVBQUFBLEtBQUssRUFBRSxpQkFEWDtBQUVJRyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQURnQixFQUtoQjtBQUNJSCxFQUFBQSxLQUFLLEVBQUUsZ0JBRFg7QUFFSUcsRUFBQUEsSUFBSSxFQUFFO0FBRlYsQ0FMZ0IsRUFTaEI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLHFCQURYO0FBRUlHLEVBQUFBLElBQUksRUFBRTtBQUZWLENBVGdCLEVBYWhCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSxrQ0FEWDtBQUVJRyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQWJnQixFQWlCaEI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLHVCQURYO0FBRUlHLEVBQUFBLElBQUksRUFBRTtBQUZWLENBakJnQixDQUFiO0FBeUJBLElBQU1aLElBQUksR0FBRyxDQUNoQjtBQUNJUSxFQUFBQSxHQUFHLEVBQUUsZUFEVDtBQUVJQyxFQUFBQSxLQUFLLEVBQUM7QUFGVixDQURnQixFQU1oQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUUsS0FEVDtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQU5nQixFQVdoQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUUsY0FEVDtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQVhnQixFQWVoQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUUsU0FEVDtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQWZnQixDQUFiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9iYXNlL2luZGV4J1xyXG5pbXBvcnQge01FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQnV0dG9uICh7IGNoaWxkcmVuLCAuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0gey4uLnByb3BzfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbiIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgVEFCTEVUX1NJWkU6IDk0MyxcclxuICAgIERFU0tUT1BfU0laRTogMTI3MFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZU5GVE9wdGlvbj1bXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnTkZUJyxcclxuICAgICAgICB0aXRsZTogJ05GVChOb24gRnVuZ2libGUgVG9rZW4pJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdGVCcsXHJcbiAgICAgICAgdGl0bGU6ICdGVChGdW5naWJsZSBUb2tlbiknXHJcbiAgICB9XVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCVVNJTkVTUyA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnTkZUc2ZvcnlvdXJCdXNpbmVzcycsXHJcbiAgICAgICAgdGl0bGU6ICdORlRzIGZvciB5b3VyIEJ1c2luZXNzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnQ3JlYXRlQUNvbGxlY3Rpb24nLFxyXG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIGEgQ29sbGVjdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ0N1c3RvbWVyQVN1cHBvcnQnLFxyXG4gICAgICAgIHRpdGxlOiAnQ3VzdG9tZXIgQSBTdXBwb3J0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnTkZUU3RhbmRhcmRDb2xsYWJvcmF0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ05GVCBTdGFuZGFyZCBDb2xsYWJvcmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnU29tZXRoaW5nRWxzZScsXHJcbiAgICAgICAgdGl0bGU6ICdTb21ldGhpbmcgRWxzZSdcclxuICAgICAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBJTkZPID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2xhaW0gT3duZXJzaGlwJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvdmUgRXhpdGVuY2UnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdWZXJpZnkgQXV0aGVudGljaXR5JyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJpdmF0ZWx5IENvbm5lY3Qgd2l0aCB0aGUgT3duZXInLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTZWN1cmUgRGlnaXRhbCBBc3NldHMnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTUVOVSA9IFtcclxuICAgIHsgICBcclxuICAgICAgICBrZXk6ICdwcml2YWN5UG9saWN5JyxcclxuICAgICAgICB0aXRsZTonUHJpdmFjeSBQb2xpY3knXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICd0b3MnLFxyXG4gICAgICAgIHRpdGxlOiAnVE9TJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ215Q29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdNeSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjb250YWN0JyxcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnXHJcbiAgICB9XHJcbl0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJCdXR0b24iLCJNRU5VIiwiTmF2aWdhdGlvbkJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJuYXYiLCJUQUJMRVRfU0laRSIsIkRFU0tUT1BfU0laRSIsIm1ha2VORlRPcHRpb24iLCJrZXkiLCJ0aXRsZSIsIkJVU0lORVNTIiwiSU5GTyIsIm1hcmsiXSwic291cmNlUm9vdCI6IiJ9