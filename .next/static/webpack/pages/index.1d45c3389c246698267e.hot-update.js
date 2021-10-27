self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/frame/getStartedButton.js":
/*!**********************************************!*\
  !*** ./components/frame/getStartedButton.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStartedButton.module.css */ "./components/frame/getStartedButton.module.css");
/* harmony import */ var _getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/index */ "./components/button/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\getStartedButton.js";






function GetStartedButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().getStartedButton),
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
      size: "14px",
      bold: true,
      children: "Get Started"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = GetStartedButton;
/* harmony default export */ __webpack_exports__["default"] = (GetStartedButton);

var _c;

$RefreshReg$(_c, "GetStartedButton");

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

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hook/useWindowSize */ "./hook/useWindowSize.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row/exhibitionSide */ "./components/row/exhibitionSide.js");
/* harmony import */ var _row_quotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../row/quotation */ "./components/row/quotation.js");
/* harmony import */ var _row_reasonSide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../row/reasonSide */ "./components/row/reasonSide.js");
/* harmony import */ var _row_businessSide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../row/businessSide */ "./components/row/businessSide.js");
/* harmony import */ var _row_getStarted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../row/getStarted */ "./components/row/getStarted.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\layout.js",
    _s = $RefreshSig$();













function Layout() {
  _s();

  var size = (0,_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().layout),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        flat: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_reasonSide__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_businessSide__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_getStarted__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().sizing),
        children: JSON.stringify(size)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, this);
}

_s(Layout, "/dTDjnwlNGsRzu12Dr5t7HJe8sA=", false, function () {
  return [_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);
/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ "./components/row/getStarted.js":
/*!**************************************!*\
  !*** ./components/row/getStarted.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _getStarted_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getStarted.module.css */ "./components/row/getStarted.module.css");
/* harmony import */ var _getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _frame_getStartedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frame/getStartedButton */ "./components/frame/getStartedButton.js");
/* harmony import */ var _Photos_suitcase_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Photos/suitcase.jpg */ "./Photos/suitcase.jpg");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photo */ "./components/photo/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\getStarted.js";








function GetStarted() {
  return (
    /*#__PURE__*/

    /* Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedTextSide),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedHeaderText),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
            opacity: "0.8",
            size: "26px",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().Span),
              children: "NFT QR codes "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 58
            }, this), "authenticate, add value and prevent ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 57
            }, this), "counterfitting of goods."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedMainText),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
            size: "20px",
            opacity: "0.8",
            children: "Create NFTs for your business or customer at scale"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedButtonContainer),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_frame_getStartedButton__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedButton),
            border: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
              className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().GetStartedButtonText),
              bold: true,
              children: "GET STARTED"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImageSide),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_photo__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image),
          src: _Photos_suitcase_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          width: "345px",
          height: "207.986"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)
  );
}

_c = GetStarted;
/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

var _c;

$RefreshReg$(_c, "GetStarted");

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

/***/ "./Photos/suitcase.jpg":
/*!*****************************!*\
  !*** ./Photos/suitcase.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Photos/suitcase.ddf61607d1ac8d25ef659d4c8a15b8b9.jpg","height":418,"width":694,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2FPhotos%2Fsuitcase.ddf61607d1ac8d25ef659d4c8a15b8b9.jpg&w=8&q=70"});

/***/ }),

/***/ "./components/frame/getStartedButton.module.css":
/*!******************************************************!*\
  !*** ./components/frame/getStartedButton.module.css ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./getStartedButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/getStartedButton.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./getStartedButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/getStartedButton.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./getStartedButton.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/getStartedButton.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/row/getStarted.module.css":
/*!**********************************************!*\
  !*** ./components/row/getStarted.module.css ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./getStarted.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/getStarted.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./getStarted.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/getStarted.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./getStarted.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/getStarted.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/getStartedButton.module.css":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/frame/getStartedButton.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".getStartedButton_getStartedButton__16l0h{\r\n    width: 192.934px;\r\n    height: 48.437;\r\n    border-color: var(--c-frame-background);\r\n    background-color: var(--c-frame-background);\r\n    color: var(--c-btn-background);\r\n}\r\n\r\n    .getStartedButton_getStartedButton__16l0h:hover{\r\n        background-color: var(--c-btn-background);\r\n        color: var(--c-frame-background);\r\n    }", "",{"version":3,"sources":["webpack://components/frame/getStartedButton.module.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,uCAAuC;IACvC,2CAA2C;IAC3C,8BAA8B;AAMlC;;IAJI;QACI,yCAAyC;QACzC,gCAAgC;IACpC","sourcesContent":[".getStartedButton{\r\n    width: 192.934px;\r\n    height: 48.437;\r\n    border-color: var(--c-frame-background);\r\n    background-color: var(--c-frame-background);\r\n    color: var(--c-btn-background);\r\n\r\n    &:hover{\r\n        background-color: var(--c-btn-background);\r\n        color: var(--c-frame-background);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"getStartedButton": "getStartedButton_getStartedButton__16l0h"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/getStarted.module.css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/getStarted.module.css ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".getStarted_getStartedContainer__3vOml{\r\n    display: flex;\r\n    padding-left: 10%;\r\n}\r\n    .getStarted_getStartedContainer__3vOml .getStarted_getStartedTextSide__1mApo{\r\n        text-align: center;\r\n        \r\n    }\r\n    .getStarted_getStartedContainer__3vOml .getStarted_getStartedTextSide__1mApo div+div{\r\n            padding-top: 20px;\r\n        }\r\n    .getStarted_getStartedContainer__3vOml .getStarted_getStartedTextSide__1mApo{\r\n        -webkit-transform: translateY(25%);\r\n        color: var(--c-color-alternative);\r\n}\r\n    .getStarted_getStartedContainer__3vOml .getStarted_getStartedTextSide__1mApo .getStarted_getStartedHeaderText__i-2zZ .getStarted_Span__3xieP {\r\n                font-weight: bold;\r\n            }", "",{"version":3,"sources":["webpack://components/row/getStarted.module.css","<no source>"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,iBAAiB;AAgBrB;IAfI;QACI,kBAAkB;;IAatB;IAZI;YACI,iBAAiB;QACrB;ICPR;QDQQ,kCAAkC;QAClC,iCAAA;AAKR;IAFY;gBACI,iBAAiB;YACrB","sourcesContent":[".getStartedContainer{\r\n    display: flex;\r\n    padding-left: 10%;\r\n    .getStartedTextSide{\r\n        text-align: center;\r\n        div+div{\r\n            padding-top: 20px;\r\n        }\r\n        -webkit-transform: translateY(25%);\r\n        color: var(--c-color-alternative);\r\n        .getStartedHeaderText{\r\n           \r\n            .Span {\r\n                font-weight: bold;\r\n            }\r\n        }\r\n        \r\n    }\r\n}",null],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"getStartedContainer": "getStarted_getStartedContainer__3vOml",
	"getStartedTextSide": "getStarted_getStartedTextSide__1mApo",
	"getStartedHeaderText": "getStarted_getStartedHeaderText__i-2zZ",
	"Span": "getStarted_Span__3xieP"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWQ0NWMzMzg5YzI0NjY5ODI2N2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxnQkFBVCxPQUFxQztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTtBQUNqQyxzQkFDSSw4REFBQyxrREFBRDtBQUFRLGFBQVMsRUFBRUosc0ZBQW5CO0FBQ0EsVUFBTSxNQUROO0FBQUEsMkJBRUksOERBQUMscURBQUQ7QUFDQSxVQUFJLEVBQUMsTUFETDtBQUVBLFVBQUksTUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztLQVhRRztBQWFULCtEQUFlQSxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTVyxNQUFULEdBQWtCO0FBQUE7O0FBQ2QsTUFBTUMsSUFBSSxHQUFHVCw0REFBYSxFQUExQjtBQUNBLHNCQUFPO0FBQUssYUFBUyxFQUFFTixtRUFBaEI7QUFBQSw0QkFFSztBQUFBLGdCQUNFZSxJQUFJLENBQUNFLEtBQUwsR0FBYVYsMERBQWIsZ0JBQ0osOERBQUMsMkRBQUQ7QUFBYSxZQUFJO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESSxnQkFDa0IsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkwsZUFPSztBQUFBLDZCQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEwsZUFXTztBQUFBLDZCQUNBLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWFAsZUFlTztBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZlAsZUFtQk87QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CUCxlQXVCTztBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJQLGVBOEJLO0FBQUEsNkJBQ0E7QUFBTSxpQkFBUyxFQUFFUCxtRUFBakI7QUFBQSxrQkFBa0NvQixJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXVDSDs7R0F6Q1FEO1VBQ1FSOzs7S0FEUlE7QUEyQ1QsK0RBQWVBLE1BQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1UsVUFBVCxHQUFxQjtBQUVqQjtBQUFBOztBQUNJO0FBQ0E7QUFBSyxlQUFTLEVBQUV4QixtRkFBaEI7QUFBQSw4QkFFSTtBQUFLLGlCQUFTLEVBQUVBLGtGQUFoQjtBQUFBLGdDQUVJO0FBQUssbUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsaUNBQ0ksOERBQUMscURBQUQ7QUFBVyxtQkFBTyxFQUFDLEtBQW5CO0FBQXlCLGdCQUFJLEVBQUMsTUFBOUI7QUFBQSxvQ0FBcUM7QUFBTSx1QkFBUyxFQUFFQSxvRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXJDLHVEQUNvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBUUk7QUFBSyxtQkFBUyxFQUFFQSxrRkFBaEI7QUFBQSxpQ0FDSSw4REFBQyxxREFBRDtBQUFXLGdCQUFJLEVBQUMsTUFBaEI7QUFBdUIsbUJBQU8sRUFBQyxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFZSTtBQUFLLG1CQUFTLEVBQUVBLHlGQUFoQjtBQUFBLGlDQUNJLDhEQUFDLDREQUFEO0FBQWtCLHFCQUFTLEVBQUVBLGdGQUE3QjtBQUNBLGtCQUFNLE1BRE47QUFBQSxtQ0FHSSw4REFBQyxxREFBRDtBQUFXLHVCQUFTLEVBQUVBLG9GQUF0QjtBQUNBLGtCQUFJLE1BREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQTJCSTtBQUFLLGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFBLCtCQUNJLDhEQUFDLDJDQUFEO0FBQU8sbUJBQVMsRUFBRUEscUVBQWxCO0FBQWdDLGFBQUcsRUFBRXNCLHlEQUFyQztBQUErQyxlQUFLLEVBQUMsT0FBckQ7QUFBNkQsZ0JBQU0sRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQWtDSDs7S0FwQ1FFO0FBc0NULCtEQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0EsK0RBQWUsQ0FBQyx1T0FBdU87Ozs7Ozs7Ozs7QUNBdlAsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQywyY0FBK047O0FBRWpROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDJjQUErTjtBQUNyTztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJjQUErTjs7QUFFelA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7QUNuRkEsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyw2YkFBeU47O0FBRTNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDZiQUF5TjtBQUMvTjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDZiQUF5Tjs7QUFFblA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7QUNuRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLG9GQUFvRix5QkFBeUIsdUJBQXVCLGdEQUFnRCxvREFBb0QsdUNBQXVDLEtBQUssNERBQTRELHNEQUFzRCw2Q0FBNkMsU0FBUyxPQUFPLDZHQUE2RyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSw0Q0FBNEMseUJBQXlCLHVCQUF1QixnREFBZ0Qsb0RBQW9ELHVDQUF1QyxvQkFBb0Isc0RBQXNELDZDQUE2QyxTQUFTLEtBQUssbUJBQW1CO0FBQ2poQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSxpRkFBaUYsc0JBQXNCLDBCQUEwQixLQUFLLHFGQUFxRiwrQkFBK0IscUJBQXFCLDZGQUE2RixrQ0FBa0MsYUFBYSxxRkFBcUYsK0NBQStDLDhDQUE4QyxLQUFLLHNKQUFzSixzQ0FBc0MsaUJBQWlCLE9BQU8sbUhBQW1ILFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxhQUFhLCtDQUErQyxzQkFBc0IsMEJBQTBCLDRCQUE0QiwrQkFBK0Isb0JBQW9CLGtDQUFrQyxhQUFhLCtDQUErQyw4Q0FBOEMsa0NBQWtDLHNDQUFzQyxzQ0FBc0MsaUJBQWlCLGFBQWEscUJBQXFCLEtBQUssd0JBQXdCO0FBQ2poRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnJhbWUvZ2V0U3RhcnRlZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jvdy9nZXRTdGFydGVkLmpzIiwid2VicGFjazovL19OX0UvLi9QaG90b3Mvc3VpdGNhc2UuanBnIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZyYW1lL2dldFN0YXJ0ZWRCdXR0b24ubW9kdWxlLmNzcz9lYjUxIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jvdy9nZXRTdGFydGVkLm1vZHVsZS5jc3M/NWNhNCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmFtZS9nZXRTdGFydGVkQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcm93L2dldFN0YXJ0ZWQubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nZXRTdGFydGVkQnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2luZGV4J1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gXCIuLi90ZXh0L2hlYWQtdGl0bGVcIjtcclxuXHJcbmZ1bmN0aW9uIEdldFN0YXJ0ZWRCdXR0b24oe2NoaWxkcmVufSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkQnV0dG9ufSBcclxuICAgICAgICBib3JkZXI+XHJcbiAgICAgICAgICAgIDxIZWFkVGl0bGUgXHJcbiAgICAgICAgICAgIHNpemU9JzE0cHgnICBcclxuICAgICAgICAgICAgYm9sZD5cclxuICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTdGFydGVkQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rL3VzZVdpbmRvd1NpemUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL25hdmlnYXRpb24vbmF2aWdhdGlvblwiXHJcbmltcG9ydCBFeGhpYml0aW9uU2lkZSBmcm9tICcuLi9yb3cvZXhoaWJpdGlvblNpZGUnXHJcbmltcG9ydCBRdW90YXRpb24gZnJvbSBcIi4uL3Jvdy9xdW90YXRpb25cIlxyXG5pbXBvcnQgUmVhc29uU2lkZSBmcm9tIFwiLi4vcm93L3JlYXNvblNpZGVcIlxyXG5pbXBvcnQgQnVzaW5lc3NTaWRlIGZyb20gXCIuLi9yb3cvYnVzaW5lc3NTaWRlXCJcclxuaW1wb3J0IEdldFN0YXJ0ZWRTaWRlIGZyb20gXCIuLi9yb3cvZ2V0U3RhcnRlZFwiXHJcbmZ1bmN0aW9uIExheW91dCgpIHtcclxuICAgIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dH0+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBzaXplLndpZHRoIDwgQ09OU1QuVEFCTEVUX1NJWkUgPyBcclxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbiAgZmxhdC8+IDogPE5hdmlnYXRpb24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxFeGhpYml0aW9uU2lkZS8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8UXVvdGF0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhc29uU2lkZS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnVzaW5lc3NTaWRlIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8R2V0U3RhcnRlZFNpZGUgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNpemluZ30gPntKU09OLnN0cmluZ2lmeShzaXplKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIHsvKiBUaGVyZSBoYXZpbmcgbWFpbiBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG5cclxuLypcclxuPE1haW5TaWRlLz46IFBhZ2UgaGFzIG9uZSBncmlkIG5hbWVkIE1haW5TaWRlLiBcclxuPE5hdmlnYXRpb24vPjogSXQgaGFzIGljb24sIG1hcmssIGJ1dHRvbnMsYW5kIGxvY2F0ZWQgb24gdG9wIG9mIHBhZ2VzLiBcclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2V0U3RhcnRlZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgR2V0U3RhcnRlZEJ1dHRvbiBmcm9tICcuLi9mcmFtZS9nZXRTdGFydGVkQnV0dG9uJ1xyXG5pbXBvcnQgU3VpdENhc2UgZnJvbSAnLi4vLi4vUGhvdG9zL3N1aXRjYXNlLmpwZydcclxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9waG90b1wiO1xyXG5cclxuZnVuY3Rpb24gR2V0U3RhcnRlZCgpe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogQ29udGFpbmVyICovIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiBDb250YWluZXIgVGV4dCBTaWRlKi8gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWRUZXh0U2lkZX0+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkSGVhZGVyVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBvcGFjaXR5PScwLjgnIHNpemU9JzI2cHgnPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNwYW59Pk5GVCBRUiBjb2RlcyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSwgYWRkIHZhbHVlIGFuZCBwcmV2ZW50IDxici8+IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJmaXR0aW5nIG9mIGdvb2RzLjwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogVGV4dCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZE1haW5UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIHNpemU9JzIwcHgnIG9wYWNpdHk9JzAuOCc+Q3JlYXRlIE5GVHMgZm9yIHlvdXIgYnVzaW5lc3Mgb3IgY3VzdG9tZXIgYXQgc2NhbGU8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZEJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdldFN0YXJ0ZWRCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZEJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLkdldFN0YXJ0ZWRCdXR0b25UZXh0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR2V0U3RhcnRlZEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEltYWdlIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2VTaWRlfT5cclxuICAgICAgICAgICAgICAgIDxQaG90byBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gc3JjPXtTdWl0Q2FzZX0gd2lkdGg9JzM0NXB4JyBoZWlnaHQ9JzIwNy45ODYnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTdGFydGVkOyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9QaG90b3Mvc3VpdGNhc2UuZGRmNjE2MDdkMWFjOGQyNWVmNjU5ZDRjOGExNWI4YjkuanBnXCIsXCJoZWlnaHRcIjo0MTgsXCJ3aWR0aFwiOjY5NCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZQaG90b3MlMkZzdWl0Y2FzZS5kZGY2MTYwN2QxYWM4ZDI1ZWY2NTlkNGM4YTE1YjhiOS5qcGcmdz04JnE9NzBcIn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2dldFN0YXJ0ZWRCdXR0b24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vZ2V0U3RhcnRlZEJ1dHRvbi5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9nZXRTdGFydGVkQnV0dG9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2dldFN0YXJ0ZWQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vZ2V0U3RhcnRlZC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9nZXRTdGFydGVkLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdldFN0YXJ0ZWRCdXR0b25fZ2V0U3RhcnRlZEJ1dHRvbl9fMTZsMGh7XFxyXFxuICAgIHdpZHRoOiAxOTIuOTM0cHg7XFxyXFxuICAgIGhlaWdodDogNDguNDM3O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZnJhbWUtYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5nZXRTdGFydGVkQnV0dG9uX2dldFN0YXJ0ZWRCdXR0b25fXzE2bDBoOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1mcmFtZS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2ZyYW1lL2dldFN0YXJ0ZWRCdXR0b24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQyw4QkFBOEI7QUFNbEM7O0lBSkk7UUFDSSx5Q0FBeUM7UUFDekMsZ0NBQWdDO0lBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nZXRTdGFydGVkQnV0dG9ue1xcclxcbiAgICB3aWR0aDogMTkyLjkzNHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4LjQzNztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1idG4tYmFja2dyb3VuZCk7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jLWZyYW1lLWJhY2tncm91bmQpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImdldFN0YXJ0ZWRCdXR0b25cIjogXCJnZXRTdGFydGVkQnV0dG9uX2dldFN0YXJ0ZWRCdXR0b25fXzE2bDBoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdldFN0YXJ0ZWRfZ2V0U3RhcnRlZENvbnRhaW5lcl9fM3ZPbWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbn1cXHJcXG4gICAgLmdldFN0YXJ0ZWRfZ2V0U3RhcnRlZENvbnRhaW5lcl9fM3ZPbWwgLmdldFN0YXJ0ZWRfZ2V0U3RhcnRlZFRleHRTaWRlX18xbUFwb3tcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIC5nZXRTdGFydGVkX2dldFN0YXJ0ZWRDb250YWluZXJfXzN2T21sIC5nZXRTdGFydGVkX2dldFN0YXJ0ZWRUZXh0U2lkZV9fMW1BcG8gZGl2K2RpdntcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgLmdldFN0YXJ0ZWRfZ2V0U3RhcnRlZENvbnRhaW5lcl9fM3ZPbWwgLmdldFN0YXJ0ZWRfZ2V0U3RhcnRlZFRleHRTaWRlX18xbUFwb3tcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYy1jb2xvci1hbHRlcm5hdGl2ZSk7XFxyXFxufVxcclxcbiAgICAuZ2V0U3RhcnRlZF9nZXRTdGFydGVkQ29udGFpbmVyX18zdk9tbCAuZ2V0U3RhcnRlZF9nZXRTdGFydGVkVGV4dFNpZGVfXzFtQXBvIC5nZXRTdGFydGVkX2dldFN0YXJ0ZWRIZWFkZXJUZXh0X19pLTJ6WiAuZ2V0U3RhcnRlZF9TcGFuX18zeGllUCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9yb3cvZ2V0U3RhcnRlZC5tb2R1bGUuY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFnQnJCO0lBZkk7UUFDSSxrQkFBa0I7O0lBYXRCO0lBWkk7WUFDSSxpQkFBaUI7UUFDckI7SUNQUjtRRFFRLGtDQUFrQztRQUNsQyxpQ0FBQTtBQUtSO0lBRlk7Z0JBQ0ksaUJBQWlCO1lBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nZXRTdGFydGVkQ29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgLmdldFN0YXJ0ZWRUZXh0U2lkZXtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpditkaXZ7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWMtY29sb3ItYWx0ZXJuYXRpdmUpO1xcclxcbiAgICAgICAgLmdldFN0YXJ0ZWRIZWFkZXJUZXh0e1xcclxcbiAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgLlNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbn1cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImdldFN0YXJ0ZWRDb250YWluZXJcIjogXCJnZXRTdGFydGVkX2dldFN0YXJ0ZWRDb250YWluZXJfXzN2T21sXCIsXG5cdFwiZ2V0U3RhcnRlZFRleHRTaWRlXCI6IFwiZ2V0U3RhcnRlZF9nZXRTdGFydGVkVGV4dFNpZGVfXzFtQXBvXCIsXG5cdFwiZ2V0U3RhcnRlZEhlYWRlclRleHRcIjogXCJnZXRTdGFydGVkX2dldFN0YXJ0ZWRIZWFkZXJUZXh0X19pLTJ6WlwiLFxuXHRcIlNwYW5cIjogXCJnZXRTdGFydGVkX1NwYW5fXzN4aWVQXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiQnV0dG9uIiwiSGVhZFRpdGxlIiwiR2V0U3RhcnRlZEJ1dHRvbiIsImNoaWxkcmVuIiwiZ2V0U3RhcnRlZEJ1dHRvbiIsInVzZVdpbmRvd1NpemUiLCJDT05TVCIsIk5hdmlnYXRpb24iLCJFeGhpYml0aW9uU2lkZSIsIlF1b3RhdGlvbiIsIlJlYXNvblNpZGUiLCJCdXNpbmVzc1NpZGUiLCJHZXRTdGFydGVkU2lkZSIsIkxheW91dCIsInNpemUiLCJsYXlvdXQiLCJ3aWR0aCIsIlRBQkxFVF9TSVpFIiwic2l6aW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN1aXRDYXNlIiwiUGhvdG8iLCJHZXRTdGFydGVkIiwiZ2V0U3RhcnRlZENvbnRhaW5lciIsImdldFN0YXJ0ZWRUZXh0U2lkZSIsImdldFN0YXJ0ZWRIZWFkZXJUZXh0IiwiU3BhbiIsImdldFN0YXJ0ZWRNYWluVGV4dCIsImdldFN0YXJ0ZWRCdXR0b25Db250YWluZXIiLCJHZXRTdGFydGVkQnV0dG9uVGV4dCIsIkltYWdlU2lkZSIsIkltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==