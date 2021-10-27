self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/form/ReasonSide/index.js":
/*!*********************************************!*\
  !*** ./components/form/ReasonSide/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ "./components/form/ReasonSide/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\form\\ReasonSide\\index.js";





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

function ReasonSideForm() {
  var _this = this;

  return INFO.map(function (info) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().reasonSideContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.CheckSquare, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
        size: "18px",
        opacity: "0.8",
        children: info.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }, _this);
  });
}

_c = ReasonSideForm;
/* harmony default export */ __webpack_exports__["default"] = (ReasonSideForm);

var _c;

$RefreshReg$(_c, "ReasonSideForm");

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
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row/exhibitionSide */ "./components/row/exhibitionSide.js");
/* harmony import */ var _row_quotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../row/quotation */ "./components/row/quotation.js");
/* harmony import */ var _row_reasonSide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../row/reasonSide */ "./components/row/reasonSide.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\layout.js",
    _s = $RefreshSig$();











function Layout() {
  _s();

  var size = (0,_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().layout),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        flat: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_row_reasonSide__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().sizing),
        children: JSON.stringify(size)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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

/***/ "./components/row/reasonSide.js":
/*!**************************************!*\
  !*** ./components/row/reasonSide.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reasonSide.module.css */ "./components/row/reasonSide.module.css");
/* harmony import */ var _reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _photo_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo/index */ "./components/photo/index.js");
/* harmony import */ var _form_ReasonSide_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/ReasonSide/index */ "./components/form/ReasonSide/index.js");
/* harmony import */ var _Photos_reasonSidePhoto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Photos/reasonSidePhoto.png */ "./Photos/reasonSidePhoto.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\reasonSide.js";








function ReasonSide() {
  return (
    /*#__PURE__*/

    /* Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().reasonContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().reasonHeader),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().reasonHeaderText),
          size: "20px",
          bold: true,
          children: ["Reasons to NFT Everything with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().Span),
            children: "Ownable-NS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 112
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("hr", {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().Line)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().middleContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().reasonTextSide),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_form_ReasonSide_index__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().reastImageSide),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_2__.default, {
            src: _Photos_reasonSidePhoto_png__WEBPACK_IMPORTED_MODULE_4__.default,
            width: "832px",
            height: "139",
            alt: "reasonside"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerText),
          size: "18px",
          opacity: "0.6",
          children: "NFT is permanent immutable record of who owns anything of value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)
  );
}

_c = ReasonSide;
/* harmony default export */ __webpack_exports__["default"] = (ReasonSide);

var _c;

$RefreshReg$(_c, "ReasonSide");

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

/***/ "./Photos/reasonSidePhoto.png":
/*!************************************!*\
  !*** ./Photos/reasonSidePhoto.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Photos/reasonSidePhoto.8d6e91470d55dd420cc2a9f9eac9d799.png","height":139,"width":832,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2FPhotos%2FreasonSidePhoto.8d6e91470d55dd420cc2a9f9eac9d799.png&w=8&q=70"});

/***/ }),

/***/ "./components/form/ReasonSide/style.module.css":
/*!*****************************************************!*\
  !*** ./components/form/ReasonSide/style.module.css ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./style.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/form/ReasonSide/style.module.css");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./style.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/form/ReasonSide/style.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./style.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/form/ReasonSide/style.module.css");

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

/***/ "./components/row/reasonSide.module.css":
/*!**********************************************!*\
  !*** ./components/row/reasonSide.module.css ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./reasonSide.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/reasonSide.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./reasonSide.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/reasonSide.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./reasonSide.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/reasonSide.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/form/ReasonSide/style.module.css":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/form/ReasonSide/style.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".style_reasonSideContainer__Ez_3g{\r\n    display: flex;\r\n    padding-top: 10px;\r\n}\r\n    .style_reasonSideContainer__Ez_3g svg + h1 {\r\n        padding-left: 10px;\r\n    }", "",{"version":3,"sources":["webpack://components/form/ReasonSide/style.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,iBAAiB;AAIrB;IAHI;QACI,kBAAkB;IACtB","sourcesContent":[".reasonSideContainer{\r\n    display: flex;\r\n    padding-top: 10px;\r\n    svg + h1 {\r\n        padding-left: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"reasonSideContainer": "style_reasonSideContainer__Ez_3g"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/reasonSide.module.css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/row/reasonSide.module.css ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".reasonSide_reasonContainer__1ortc{\r\n    color: var(--c-color-alternative);\r\n}\r\n\r\n    .reasonSide_reasonContainer__1ortc .reasonSide_reasonHeader__2rQNr .reasonSide_Span__1RpOt{\r\n            color: var(--c-btn-background);\r\n        }\r\n\r\n    .reasonSide_reasonContainer__1ortc .reasonSide_reasonHeader__2rQNr .reasonSide_Line__32vQu{\r\n            opacity: 0.30;\r\n        }\r\n\r\n    .reasonSide_reasonContainer__1ortc .reasonSide_middleContainer__3jc65{\r\n        display: flex;\r\n        padding-left: 100px;\r\n    }\r\n\r\n    .reasonSide_reasonContainer__1ortc .reasonSide_reasonTextSide__1NdZT{\r\n        padding-top: 56px;\r\n    }\r\n\r\n    .reasonSide_reasonContainer__1ortc .reasonSide_reastImageSide__mrzkX{\r\n        padding-top: 45px;\r\n    }\r\n\r\n    .reasonSide_reasonContainer__1ortc .reasonSide_footerContainer__3_B3B{\r\n        padding-left: 30%;\r\n        padding-top: 3%;\r\n\r\n    }", "",{"version":3,"sources":["webpack://components/row/reasonSide.module.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;AA0BrC;;IAvBQ;YACI,8BAA8B;QAClC;;IACA;YACI,aAAa;QACjB;;IAEJ;QACI,aAAa;QACb,mBAAmB;IACvB;;IACA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IACA;QACI,iBAAiB;QACjB,eAAe;;IAEnB","sourcesContent":[".reasonContainer{\r\n    color: var(--c-color-alternative);\r\n\r\n    .reasonHeader{\r\n        .Span{\r\n            color: var(--c-btn-background);\r\n        }\r\n        .Line{\r\n            opacity: 0.30;\r\n        }\r\n    }\r\n    .middleContainer{\r\n        display: flex;\r\n        padding-left: 100px;\r\n    }\r\n    .reasonTextSide{\r\n        padding-top: 56px;\r\n    }\r\n\r\n    .reastImageSide{\r\n        padding-top: 45px;\r\n    }\r\n    .footerContainer{\r\n        padding-left: 30%;\r\n        padding-top: 3%;\r\n\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"reasonContainer": "reasonSide_reasonContainer__1ortc",
	"reasonHeader": "reasonSide_reasonHeader__2rQNr",
	"Span": "reasonSide_Span__1RpOt",
	"Line": "reasonSide_Line__32vQu",
	"middleContainer": "reasonSide_middleContainer__3jc65",
	"reasonTextSide": "reasonSide_reasonTextSide__1NdZT",
	"reastImageSide": "reasonSide_reastImageSide__mrzkX",
	"footerContainer": "reasonSide_footerContainer__3_B3B"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGE4OGZjOTAzNjdjMjUyYjUwZjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1JLElBQUksR0FBRyxDQUNUO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSxpQkFEWDtBQUVJQyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQURTLEVBS1Q7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLGdCQURYO0FBRUlDLEVBQUFBLElBQUksRUFBRTtBQUZWLENBTFMsRUFTVDtBQUNJRCxFQUFBQSxLQUFLLEVBQUUscUJBRFg7QUFFSUMsRUFBQUEsSUFBSSxFQUFFO0FBRlYsQ0FUUyxFQWFUO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxrQ0FEWDtBQUVJQyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQWJTLEVBaUJUO0FBQ0lELEVBQUFBLEtBQUssRUFBRSx1QkFEWDtBQUVJQyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQWpCUyxDQUFiOztBQXVCQSxTQUFTQyxjQUFULEdBQXlCO0FBQUE7O0FBQ3JCLFNBQ0lILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBVTtBQUNmLHdCQUNJO0FBQUssZUFBUyxFQUFFUiw4RUFBaEI7QUFBQSw4QkFFSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFJSSw4REFBQyxxREFBRDtBQUFXLFlBQUksRUFBQyxNQUFoQjtBQUF1QixlQUFPLEVBQUMsS0FBL0I7QUFBQSxrQkFBc0NRLElBQUksQ0FBQ0o7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBVUgsR0FYRCxDQURKO0FBY0g7O0tBZlFFO0FBaUJULCtEQUFlQSxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MkNBQTJDLDBDQUEwQywwQkFBMEIsa0JBQWtCLCtDQUErQyxhQUFhLGtCQUFrQiw4QkFBOEIsYUFBYSxTQUFTLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLFNBQVMsd0JBQXdCLDhCQUE4QixTQUFTLDRCQUE0Qiw4QkFBOEIsU0FBUyx5QkFBeUIsOEJBQThCLDRCQUE0QixhQUFhLEtBQUssbUJBQW1CO0FBQ3QwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL1JlYXNvblNpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb3cvcmVhc29uU2lkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vUGhvdG9zL3JlYXNvblNpZGVQaG90by5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9SZWFzb25TaWRlL3N0eWxlLm1vZHVsZS5jc3M/YmViZCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb3cvcmVhc29uU2lkZS5tb2R1bGUuY3NzPzY2ODQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9SZWFzb25TaWRlL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcm93L3JlYXNvblNpZGUubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uLy4uL2ljb25zJ1xyXG5cclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi8uLi90ZXh0L2hlYWQtdGl0bGUnXHJcblxyXG5jb25zdCBJTkZPID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2xhaW0gT3duZXJzaGlwJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvdmUgRXhpdGVuY2UnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdWZXJpZnkgQXV0aGVudGljaXR5JyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJpdmF0ZWx5IENvbm5lY3Qgd2l0aCB0aGUgT3duZXInLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTZWN1cmUgRGlnaXRhbCBBc3NldHMnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gUmVhc29uU2lkZUZvcm0oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgSU5GTy5tYXAoKGluZm8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25TaWRlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSWNvbiBTaWRlKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24uQ2hlY2tTcXVhcmUvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSZWFzb24gU2lkZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIHNpemU9JzE4cHgnIG9wYWNpdHk9JzAuOCc+e2luZm8udGl0bGV9PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhc29uU2lkZUZvcm1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9vay91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgRXhoaWJpdGlvblNpZGUgZnJvbSAnLi4vcm93L2V4aGliaXRpb25TaWRlJ1xyXG5pbXBvcnQgUXVvdGF0aW9uIGZyb20gXCIuLi9yb3cvcXVvdGF0aW9uXCI7XHJcbmltcG9ydCBSZWFzb25TaWRlIGZyb20gXCIuLi9yb3cvcmVhc29uU2lkZVwiXHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgc2l6ZS53aWR0aCA8IENPTlNULlRBQkxFVF9TSVpFID8gXHJcbiAgICAgICAgICAgICAgPE5hdmlnYXRpb24gIGZsYXQvPiA6IDxOYXZpZ2F0aW9uIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICA8RXhoaWJpdGlvblNpZGUvPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFF1b3RhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYXNvblNpZGUvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc2l6aW5nfSA+e0pTT04uc3RyaW5naWZ5KHNpemUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgey8qIFRoZXJlIGhhdmluZyBtYWluIHNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcblxyXG4vKlxyXG48TWFpblNpZGUvPjogUGFnZSBoYXMgb25lIGdyaWQgbmFtZWQgTWFpblNpZGUuIFxyXG48TmF2aWdhdGlvbi8+OiBJdCBoYXMgaWNvbiwgbWFyaywgYnV0dG9ucyxhbmQgbG9jYXRlZCBvbiB0b3Agb2YgcGFnZXMuIFxyXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZWFzb25TaWRlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90by9pbmRleCdcclxuaW1wb3J0IFJlYXNvbiBmcm9tICcuLi9mb3JtL1JlYXNvblNpZGUvaW5kZXgnXHJcbmltcG9ydCBSZWFzb25JbWFnZSBmcm9tICcuLi8uLi9QaG90b3MvcmVhc29uU2lkZVBob3RvLnBuZydcclxuXHJcbmZ1bmN0aW9uIFJlYXNvblNpZGUoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgLyogQ29udGFpbmVyICovIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhc29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25IZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25IZWFkZXJUZXh0fSBzaXplPScyMHB4JyBib2xkPlJlYXNvbnMgdG8gTkZUIEV2ZXJ5dGhpbmcgd2l0aCA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TPC9zcGFuPjwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLkxpbmV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUmVhc29uIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhc29uVGV4dFNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFzb24vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgU2lkZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhc3RJbWFnZVNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQaG90byBzcmM9e1JlYXNvbkltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nODMycHgnIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTM5JyBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J3JlYXNvbnNpZGUnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGb290ZXIgU2lkZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUZXh0fSBzaXplPScxOHB4JyBvcGFjaXR5PScwLjYnPk5GVCBpcyBwZXJtYW5lbnQgaW1tdXRhYmxlIHJlY29yZCBvZiB3aG8gb3ducyBhbnl0aGluZyBvZiB2YWx1ZTwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYXNvblNpZGUiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvUGhvdG9zL3JlYXNvblNpZGVQaG90by44ZDZlOTE0NzBkNTVkZDQyMGNjMmE5ZjllYWM5ZDc5OS5wbmdcIixcImhlaWdodFwiOjEzOSxcIndpZHRoXCI6ODMyLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRlBob3RvcyUyRnJlYXNvblNpZGVQaG90by44ZDZlOTE0NzBkNTVkZDQyMGNjMmE5ZjllYWM5ZDc5OS5wbmcmdz04JnE9NzBcIn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3JlYXNvblNpZGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vcmVhc29uU2lkZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9yZWFzb25TaWRlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlX3JlYXNvblNpZGVDb250YWluZXJfX0V6XzNne1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuICAgIC5zdHlsZV9yZWFzb25TaWRlQ29udGFpbmVyX19Fel8zZyBzdmcgKyBoMSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9mb3JtL1JlYXNvblNpZGUvc3R5bGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFJckI7SUFISTtRQUNJLGtCQUFrQjtJQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVhc29uU2lkZUNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHN2ZyArIGgxIHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyZWFzb25TaWRlQ29udGFpbmVyXCI6IFwic3R5bGVfcmVhc29uU2lkZUNvbnRhaW5lcl9fRXpfM2dcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmVhc29uU2lkZV9yZWFzb25Db250YWluZXJfXzFvcnRje1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1jb2xvci1hbHRlcm5hdGl2ZSk7XFxyXFxufVxcclxcblxcclxcbiAgICAucmVhc29uU2lkZV9yZWFzb25Db250YWluZXJfXzFvcnRjIC5yZWFzb25TaWRlX3JlYXNvbkhlYWRlcl9fMnJRTnIgLnJlYXNvblNpZGVfU3Bhbl9fMVJwT3R7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAucmVhc29uU2lkZV9yZWFzb25Db250YWluZXJfXzFvcnRjIC5yZWFzb25TaWRlX3JlYXNvbkhlYWRlcl9fMnJRTnIgLnJlYXNvblNpZGVfTGluZV9fMzJ2UXV7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMC4zMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlYXNvblNpZGVfcmVhc29uQ29udGFpbmVyX18xb3J0YyAucmVhc29uU2lkZV9taWRkbGVDb250YWluZXJfXzNqYzY1e1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlYXNvblNpZGVfcmVhc29uQ29udGFpbmVyX18xb3J0YyAucmVhc29uU2lkZV9yZWFzb25UZXh0U2lkZV9fMU5kWlR7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVhc29uU2lkZV9yZWFzb25Db250YWluZXJfXzFvcnRjIC5yZWFzb25TaWRlX3JlYXN0SW1hZ2VTaWRlX19tcnprWHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yZWFzb25TaWRlX3JlYXNvbkNvbnRhaW5lcl9fMW9ydGMgLnJlYXNvblNpZGVfZm9vdGVyQ29udGFpbmVyX18zX0IzQntcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xcclxcblxcclxcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvcm93L3JlYXNvblNpZGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztBQTBCckM7O0lBdkJRO1lBQ0ksOEJBQThCO1FBQ2xDOztJQUNBO1lBQ0ksYUFBYTtRQUNqQjs7SUFFSjtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTs7SUFFbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJlYXNvbkNvbnRhaW5lcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWMtY29sb3ItYWx0ZXJuYXRpdmUpO1xcclxcblxcclxcbiAgICAucmVhc29uSGVhZGVye1xcclxcbiAgICAgICAgLlNwYW57XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWMtYnRuLWJhY2tncm91bmQpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLkxpbmV7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMC4zMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAubWlkZGxlQ29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnJlYXNvblRleHRTaWRle1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDU2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlYXN0SW1hZ2VTaWRle1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3RlckNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xcclxcblxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJlYXNvbkNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfcmVhc29uQ29udGFpbmVyX18xb3J0Y1wiLFxuXHRcInJlYXNvbkhlYWRlclwiOiBcInJlYXNvblNpZGVfcmVhc29uSGVhZGVyX18yclFOclwiLFxuXHRcIlNwYW5cIjogXCJyZWFzb25TaWRlX1NwYW5fXzFScE90XCIsXG5cdFwiTGluZVwiOiBcInJlYXNvblNpZGVfTGluZV9fMzJ2UXVcIixcblx0XCJtaWRkbGVDb250YWluZXJcIjogXCJyZWFzb25TaWRlX21pZGRsZUNvbnRhaW5lcl9fM2pjNjVcIixcblx0XCJyZWFzb25UZXh0U2lkZVwiOiBcInJlYXNvblNpZGVfcmVhc29uVGV4dFNpZGVfXzFOZFpUXCIsXG5cdFwicmVhc3RJbWFnZVNpZGVcIjogXCJyZWFzb25TaWRlX3JlYXN0SW1hZ2VTaWRlX19tcnprWFwiLFxuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfZm9vdGVyQ29udGFpbmVyX18zX0IzQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkljb24iLCJIZWFkVGl0bGUiLCJJTkZPIiwidGl0bGUiLCJtYXJrIiwiUmVhc29uU2lkZUZvcm0iLCJtYXAiLCJpbmZvIiwicmVhc29uU2lkZUNvbnRhaW5lciIsInVzZVdpbmRvd1NpemUiLCJDT05TVCIsIk5hdmlnYXRpb24iLCJFeGhpYml0aW9uU2lkZSIsIlF1b3RhdGlvbiIsIlJlYXNvblNpZGUiLCJMYXlvdXQiLCJzaXplIiwibGF5b3V0Iiwid2lkdGgiLCJUQUJMRVRfU0laRSIsInNpemluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJQaG90byIsIlJlYXNvbiIsIlJlYXNvbkltYWdlIiwicmVhc29uQ29udGFpbmVyIiwicmVhc29uSGVhZGVyIiwicmVhc29uSGVhZGVyVGV4dCIsIlNwYW4iLCJMaW5lIiwibWlkZGxlQ29udGFpbmVyIiwicmVhc29uVGV4dFNpZGUiLCJyZWFzdEltYWdlU2lkZSIsImZvb3RlckNvbnRhaW5lciIsImZvb3RlclRleHQiXSwic291cmNlUm9vdCI6IiJ9