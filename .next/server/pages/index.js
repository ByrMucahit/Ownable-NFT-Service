(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/button/base/index.js":
/*!*****************************************!*\
  !*** ./components/button/base/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ "./components/button/base/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children", "href"],
      _excluded2 = ["border", "children", "className"],
      _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\base\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function linkButton(_ref) {
  let {
    children,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
      props: true,
      children: [" ", children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

function frameButton(_ref2) {
  let {
    border = false,
    children,
    className
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().FrameBorder), (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonBaseRoot), (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonRoot), (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonContained), (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().cssBorderButton), (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonContainedPrimary)]),
    type: "button",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonLabel),
      children: [children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }, this);
}

function button(_ref3) {
  let {
    border = false,
    children,
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  const Comp = border ? frameButton : linkButton;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Comp, _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().FrameBorder), className])
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (button);
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

/***/ }),

/***/ "./components/button/icon/index.js":
/*!*****************************************!*\
  !*** ./components/button/icon/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ "./components/button/icon/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\icon\\index.js";





function IconButton() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    className: `
        ${(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiButtonBaseRoot)} 
        ${(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiIconButtonRoot)} 
        ${(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().cssIconButton)} 
        ${(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().cssIconButtonContent)} 
        ${(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiIconButtonColorInherit)}`,
    tabIndex: "0",
    type: "button",
    "aria-label": "Menu",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiIconButtonLabel),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.HomepageOption, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiSvgIconRoot)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButton);

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./components/footer/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _navigation_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/footer */ "./components/navigation/footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\footer\\index.js";







function Footer() {
  return (
    /*#__PURE__*/

    /* Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftSideOfContainer),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().Icons),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://twitter.com/byr_mucahit",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Twitter, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 116
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://www.facebook.com/mucahit.bayar.796",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Facebook, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 127
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://www.youtube.com/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Youtube, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 109
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://www.instagram.com/mucahit.byrr/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__["İnstagram"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 124
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://www.linkedin.com/in/m%C3%BCcahit-bayar-038000200/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Linkdn, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 142
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://mail.google.com/mail/u/0/#inbox",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Mail, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 124
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  target: "_blank",
                  rel: "noopner noreferrer",
                  href: "https://twitter.com/byr_mucahit",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Discord, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 116
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                  className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().joinText),
                  size: "12px",
                  children: "Join the community of #ownable-NS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerMenu),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_navigation_footer__WEBPACK_IMPORTED_MODULE_3__.default, {
                  className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyText),
            children: "Copyright \xA9 2021 Ownable-NS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/form/reasonSide/index.js":
/*!*********************************************!*\
  !*** ./components/form/reasonSide/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./components/form/reasonSide/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant */ "./constant/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\form\\reasonSide\\index.js";







function ReasonSideForm() {
  return _constant__WEBPACK_IMPORTED_MODULE_2__.INFO.map(info => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().reasonSideContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.CheckSquare, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),
        children: info.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReasonSideForm);

/***/ }),

/***/ "./components/frame/frameButton.js":
/*!*****************************************!*\
  !*** ./components/frame/frameButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frameButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frameButton.module.css */ "./components/frame/frameButton.module.css");
/* harmony import */ var _frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\frameButton.js";






function FrameButton({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: `
                ${(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonBaseRoot)} 
                ${(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonRoot)} 
                ${(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonOutlined)} 
                ${(_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().cssButtonContent)}`,
    type: "button",
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: (_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().muiButtonLabel),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrameButton);
/* 
    Document:
    --------
    <TextTitle/>: It's vary of text, It just has some specific attribute such as 16 px font size, and bold font wight.
*/

/***/ }),

/***/ "./components/frame/getStartedButton.js":
/*!**********************************************!*\
  !*** ./components/frame/getStartedButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStartedButton.module.css */ "./components/frame/getStartedButton.module.css");
/* harmony import */ var _getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\getStartedButton.js";






function GetStartedButton({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
    className: (_getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().getStartedButton),
    border: true,
    children: "Get Started"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetStartedButton);

/***/ }),

/***/ "./components/frame/mintButton.js":
/*!****************************************!*\
  !*** ./components/frame/mintButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mintButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mintButton.module.css */ "./components/frame/mintButton.module.css");
/* harmony import */ var _mintButton_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mintButton_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\frame\\mintButton.js";







function MintButton({
  children,
  className
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_mintButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintButton), className),
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
      bold: true,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MintButton);

/***/ }),

/***/ "./components/icons/AppStore.js":
/*!**************************************!*\
  !*** ./components/icons/AppStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\AppStore.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgAppStore(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 240 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#app-store_svg__clip0_51:501)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M231.461 71.09H8.407C3.772 71.09 0 67.308 0 62.678V8.4C0 3.768 3.772 0 8.407 0h223.054C236.094 0 240 3.768 240 8.4v54.278c0 4.63-3.906 8.412-8.539 8.412z",
        fill: "#A6A6A6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M238.279 62.68a6.808 6.808 0 01-6.816 6.807H8.407c-3.767 0-6.825-3.046-6.825-6.807V8.398c0-3.76 3.058-6.816 6.825-6.816h223.054a6.815 6.815 0 016.816 6.816l.002 54.282z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M53.56 35.161c-.05-5.728 4.692-8.515 4.91-8.644-2.687-3.916-6.85-4.45-8.314-4.493-3.496-.368-6.889 2.091-8.67 2.091-1.817 0-4.56-2.056-7.516-1.995-3.805.058-7.364 2.26-9.316 5.68-4.028 6.972-1.024 17.218 2.836 22.853 1.93 2.76 4.186 5.842 7.14 5.734 2.888-.12 3.967-1.841 7.453-1.841 3.455 0 4.468 1.84 7.48 1.772 3.1-.05 5.052-2.773 6.915-5.558 2.231-3.163 3.127-6.279 3.163-6.439-.073-.025-6.021-2.294-6.08-9.16zM47.872 18.316c1.554-1.942 2.617-4.585 2.322-7.267-2.25.1-5.062 1.555-6.681 3.455-1.433 1.674-2.713 4.418-2.382 6.999 2.526.188 5.12-1.274 6.74-3.187zM95.369 55.99h-4.037l-2.212-6.947h-7.687l-2.107 6.947h-3.93l7.616-23.651h4.704l7.653 23.651zm-6.916-9.861l-2-6.176c-.211-.631-.608-2.117-1.193-4.456h-.07a171.766 171.766 0 01-1.124 4.456L82.1 46.128h6.352zM114.955 47.254c0 2.9-.784 5.193-2.352 6.876-1.405 1.498-3.149 2.246-5.231 2.246-2.247 0-3.861-.807-4.844-2.42h-.071v8.983h-3.79V44.55c0-1.823-.048-3.695-.14-5.614h3.333l.211 2.703h.071c1.264-2.037 3.182-3.053 5.757-3.053 2.012 0 3.692.794 5.036 2.385 1.348 1.592 2.02 3.686 2.02 6.283zm-3.862.138c0-1.66-.373-3.028-1.123-4.105-.82-1.124-1.92-1.685-3.3-1.685-.935 0-1.785.313-2.544.93-.761.621-1.258 1.434-1.491 2.44-.118.469-.176.853-.176 1.155v2.843c0 1.24.38 2.288 1.141 3.142.761.855 1.749 1.282 2.965 1.282 1.428 0 2.539-.551 3.334-1.65.796-1.1 1.194-2.55 1.194-4.352zM134.576 47.254c0 2.9-.784 5.193-2.354 6.876-1.402 1.498-3.146 2.246-5.228 2.246-2.247 0-3.861-.807-4.843-2.42h-.071v8.983h-3.79V44.55c0-1.823-.048-3.695-.141-5.614h3.334l.211 2.703h.071c1.263-2.037 3.181-3.053 5.757-3.053 2.011 0 3.691.794 5.038 2.385 1.342 1.592 2.016 3.686 2.016 6.283zm-3.861.138c0-1.66-.375-3.028-1.126-4.105-.819-1.124-1.916-1.685-3.297-1.685-.937 0-1.785.313-2.546.93-.761.621-1.257 1.434-1.49 2.44-.115.469-.176.853-.176 1.155v2.843c0 1.24.381 2.288 1.138 3.142.761.853 1.749 1.282 2.969 1.282 1.427 0 2.538-.551 3.333-1.65.797-1.1 1.195-2.55 1.195-4.352zM156.514 49.358c0 2.012-.699 3.649-2.101 4.912-1.542 1.381-3.688 2.07-6.445 2.07-2.546 0-4.587-.49-6.131-1.473l.878-3.158c1.664 1.006 3.49 1.51 5.479 1.51 1.427 0 2.539-.323 3.337-.966.794-.643 1.191-1.507 1.191-2.584 0-.96-.327-1.768-.983-2.424-.653-.656-1.742-1.266-3.264-1.83-4.142-1.544-6.212-3.806-6.212-6.781 0-1.944.726-3.539 2.178-4.78 1.447-1.241 3.378-1.862 5.792-1.862 2.153 0 3.941.375 5.369 1.123l-.948 3.09c-1.333-.726-2.841-1.088-4.528-1.088-1.333 0-2.375.329-3.121.983-.632.584-.948 1.297-.948 2.141 0 .935.361 1.708 1.086 2.316.631.561 1.778 1.17 3.442 1.825 2.036.82 3.531 1.777 4.492 2.876.959 1.094 1.437 2.465 1.437 4.1zM169.045 41.78h-4.177v8.28c0 2.106.736 3.158 2.211 3.158.677 0 1.239-.059 1.684-.176l.105 2.877c-.747.28-1.73.42-2.948.42-1.497 0-2.667-.457-3.511-1.369-.841-.913-1.264-2.445-1.264-4.597v-8.597h-2.489v-2.844h2.489V35.81l3.723-1.123v4.245h4.177v2.848zM187.895 47.323c0 2.621-.75 4.774-2.247 6.457-1.57 1.733-3.653 2.596-6.251 2.596-2.503 0-4.496-.83-5.982-2.49-1.486-1.66-2.229-3.755-2.229-6.28 0-2.643.764-4.808 2.298-6.491 1.531-1.685 3.597-2.527 6.194-2.527 2.503 0 4.518.83 6.038 2.492 1.454 1.611 2.179 3.693 2.179 6.243zm-3.932.123c0-1.573-.336-2.922-1.017-4.047-.795-1.362-1.931-2.04-3.403-2.04-1.523 0-2.681.68-3.475 2.04-.681 1.127-1.017 2.497-1.017 4.118 0 1.572.336 2.921 1.017 4.045.819 1.361 1.964 2.04 3.441 2.04 1.447 0 2.583-.693 3.403-2.076.699-1.146 1.051-2.51 1.051-4.08zM200.215 42.268a6.58 6.58 0 00-1.194-.105c-1.334 0-2.365.503-3.09 1.511-.631.889-.948 2.012-.948 3.368v8.948h-3.788l.035-11.683a92.91 92.91 0 00-.142-5.37h3.301l.139 3.264h.105c.4-1.122 1.031-2.025 1.895-2.702.845-.61 1.757-.913 2.74-.913.35 0 .666.025.947.07v3.612zM217.166 46.656c0 .68-.044 1.252-.138 1.719h-11.371c.044 1.685.594 2.973 1.65 3.862.958.794 2.197 1.192 3.719 1.192 1.683 0 3.219-.268 4.601-.806l.593 2.63c-1.614.704-3.52 1.054-5.719 1.054-2.645 0-4.721-.779-6.233-2.334-1.507-1.555-2.263-3.643-2.263-6.263 0-2.571.703-4.713 2.109-6.42 1.472-1.824 3.461-2.736 5.964-2.736 2.459 0 4.32.912 5.584 2.735 1.001 1.449 1.504 3.24 1.504 5.367zm-3.614-.982c.025-1.124-.222-2.094-.736-2.913-.656-1.054-1.664-1.58-3.02-1.58-1.24 0-2.248.513-3.017 1.544-.631.82-1.007 1.802-1.122 2.947h7.895v.002zM87.2 17.789c0 2.091-.627 3.666-1.88 4.723-1.162.976-2.811 1.465-4.948 1.465-1.06 0-1.967-.046-2.726-.139v-11.43c.99-.16 2.057-.24 3.21-.24 2.035 0 3.569.442 4.604 1.327 1.159 1 1.74 2.431 1.74 4.294zm-1.964.051c0-1.356-.36-2.396-1.078-3.12-.718-.724-1.767-1.087-3.148-1.087-.587 0-1.086.04-1.5.121v8.69c.229.035.648.05 1.258.05 1.426 0 2.526-.396 3.301-1.188.775-.793 1.167-1.948 1.167-3.466zM97.616 19.616c0 1.288-.368 2.344-1.104 3.172-.772.851-1.794 1.276-3.07 1.276-1.23 0-2.21-.407-2.94-1.224-.73-.816-1.094-1.845-1.094-3.086 0-1.297.375-2.362 1.129-3.188.754-.827 1.767-1.24 3.043-1.24 1.23 0 2.22.406 2.968 1.222.71.793 1.068 1.816 1.068 3.068zm-1.933.06c0-.773-.167-1.436-.499-1.989-.391-.668-.948-1.002-1.671-1.002-.749 0-1.318.334-1.709 1.002-.334.553-.5 1.227-.5 2.023 0 .773.168 1.436.5 1.988.404.669.966 1.003 1.691 1.003.711 0 1.27-.34 1.671-1.02.345-.564.517-1.232.517-2.005zM111.582 15.496l-2.622 8.378h-1.707l-1.086-3.638a27.595 27.595 0 01-.674-2.707h-.033c-.162.92-.386 1.822-.674 2.707l-1.154 3.638h-1.726l-2.466-8.378h1.915l.947 3.983c.23.942.418 1.84.569 2.689h.034a29.8 29.8 0 01.692-2.672l1.189-3.998h1.518l1.14 3.913c.275.954.499 1.873.672 2.758h.051c.126-.861.317-1.78.569-2.758l1.017-3.913h1.829v-.002zM121.241 23.874h-1.863v-4.799c0-1.478-.562-2.218-1.689-2.218-.553 0-.999.203-1.346.61a2.163 2.163 0 00-.517 1.436v4.97h-1.863V17.89c0-.736-.023-1.534-.068-2.398h1.637l.088 1.31h.051c.217-.407.541-.743.965-1.011a3.152 3.152 0 011.689-.471c.783 0 1.433.252 1.951.759.643.62.965 1.546.965 2.776v5.019zM126.379 23.874h-1.862V11.652h1.862v12.222zM137.348 19.616c0 1.288-.368 2.344-1.104 3.172-.772.851-1.796 1.276-3.071 1.276-1.232 0-2.211-.407-2.94-1.224-.729-.816-1.093-1.845-1.093-3.086 0-1.297.375-2.362 1.128-3.188.754-.827 1.768-1.24 3.042-1.24 1.232 0 2.219.406 2.969 1.222.711.793 1.069 1.816 1.069 3.068zm-1.935.06c0-.773-.167-1.436-.499-1.989-.39-.668-.948-1.002-1.67-1.002-.75 0-1.319.334-1.708 1.002-.334.553-.5 1.227-.5 2.023 0 .773.168 1.436.5 1.988.404.669.965 1.003 1.691 1.003.711 0 1.267-.34 1.669-1.02.347-.564.517-1.232.517-2.005zM146.365 23.874h-1.673l-.139-.965h-.052c-.572.77-1.388 1.155-2.448 1.155-.791 0-1.431-.254-1.912-.759-.438-.458-.657-1.029-.657-1.706 0-1.024.427-1.804 1.286-2.344.857-.54 2.062-.805 3.614-.793v-.156c0-1.104-.58-1.655-1.74-1.655-.827 0-1.556.208-2.185.62l-.379-1.222c.779-.482 1.741-.724 2.875-.724 2.19 0 3.289 1.155 3.289 3.466v3.085c0 .837.041 1.504.121 1.998zm-1.935-2.88v-1.291c-2.055-.036-3.082.527-3.082 1.688 0 .437.117.764.357.983.24.219.546.327.91.327.409 0 .791-.13 1.14-.387a1.587 1.587 0 00.675-1.32zM156.951 23.874h-1.653l-.087-1.345h-.052c-.528 1.023-1.427 1.535-2.691 1.535-1.01 0-1.851-.396-2.518-1.189-.666-.793-.999-1.822-.999-3.085 0-1.356.361-2.455 1.086-3.293.703-.783 1.563-1.174 2.587-1.174 1.125 0 1.913.38 2.361 1.138h.035v-4.81h1.865v9.966c0 .816.022 1.567.066 2.257zm-1.931-3.533v-1.397c0-.242-.017-.437-.051-.587a2.123 2.123 0 00-.674-1.128 1.831 1.831 0 00-1.246-.457c-.695 0-1.239.276-1.639.828-.397.553-.598 1.258-.598 2.12 0 .829.191 1.5.573 2.018.403.55.947.826 1.628.826.612 0 1.101-.23 1.472-.69.36-.424.535-.936.535-1.533zM172.885 19.616c0 1.288-.368 2.344-1.104 3.172-.771.851-1.792 1.276-3.07 1.276-1.228 0-2.208-.407-2.94-1.224-.729-.816-1.094-1.845-1.094-3.086 0-1.297.375-2.362 1.129-3.188.754-.827 1.767-1.24 3.046-1.24 1.228 0 2.218.406 2.965 1.222.711.793 1.068 1.816 1.068 3.068zm-1.93.06c0-.773-.167-1.436-.5-1.989-.393-.668-.947-1.002-1.673-1.002-.746 0-1.315.334-1.708 1.002-.334.553-.5 1.227-.5 2.023 0 .773.167 1.436.5 1.988.403.669.965 1.003 1.69 1.003.712 0 1.272-.34 1.673-1.02.343-.564.518-1.232.518-2.005zM182.903 23.874h-1.861v-4.799c0-1.478-.562-2.218-1.691-2.218-.553 0-.999.203-1.344.61a2.153 2.153 0 00-.517 1.436v4.97h-1.865V17.89c0-.736-.021-1.534-.066-2.398h1.636l.087 1.31h.051c.219-.407.543-.743.966-1.011a3.153 3.153 0 011.69-.471c.781 0 1.432.252 1.949.759.645.62.965 1.546.965 2.776v5.019zM195.442 16.891h-2.052v4.07c0 1.034.365 1.552 1.087 1.552.334 0 .611-.029.83-.088l.048 1.413c-.368.139-.852.208-1.447.208-.736 0-1.309-.224-1.723-.671-.416-.448-.622-1.202-.622-2.26v-4.224h-1.225v-1.395h1.225V13.96l1.826-.55v2.084h2.051v1.397h.002zM205.305 23.874h-1.865V19.11c0-1.502-.562-2.254-1.687-2.254-.864 0-1.454.436-1.778 1.307a2.344 2.344 0 00-.087.67v5.038h-1.861v-12.22h1.861V16.7h.036c.586-.919 1.427-1.378 2.517-1.378.771 0 1.41.253 1.916.76.631.63.948 1.569.948 2.81v4.98zM215.479 19.289c0 .334-.025.614-.069.844h-5.588c.025.828.292 1.459.809 1.896.473.391 1.083.587 1.829.587.827 0 1.581-.132 2.26-.397l.292 1.294c-.795.345-1.73.517-2.813.517-1.298 0-2.32-.382-3.059-1.146-.744-.764-1.112-1.79-1.112-3.076 0-1.264.344-2.316 1.035-3.155.722-.896 1.698-1.344 2.93-1.344 1.205 0 2.121.448 2.739 1.344.5.71.747 1.59.747 2.636zm-1.778-.482c.015-.553-.108-1.03-.361-1.43-.323-.518-.816-.777-1.482-.777-.608 0-1.104.252-1.483.758-.309.404-.492.886-.553 1.449h3.879z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "app-store_svg__clip0_51:501",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h240v71.09H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAppStore);

/***/ }),

/***/ "./components/icons/CheckSquare.js":
/*!*****************************************!*\
  !*** ./components/icons/CheckSquare.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\CheckSquare.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgCheckSquare(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M16.071 0H1.93A1.929 1.929 0 000 1.929V16.07C0 17.137.863 18 1.929 18H16.07A1.929 1.929 0 0018 16.071V1.93A1.929 1.929 0 0016.071 0zm0 16.071H1.93V1.93H16.07V16.07zm-1.44-9.712l-6.935 6.879a.482.482 0 01-.682-.003L3.367 9.558a.482.482 0 01.003-.682l.912-.905a.482.482 0 01.682.003l2.403 2.422 5.679-5.634a.482.482 0 01.682.003l.905.912a.482.482 0 01-.002.682z",
      fill: "#FCC729"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCheckSquare);

/***/ }),

/***/ "./components/icons/Discord.js":
/*!*************************************!*\
  !*** ./components/icons/Discord.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Discord.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDiscord(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M25.603 0H3.397C1.525 0 0 1.334 0 2.987v19.604c0 1.653 1.525 2.987 3.397 2.987H22.19l-.878-2.683 2.121 1.726 2.005 1.624L29 29V2.987C29 1.334 27.475 0 25.603 0zm-6.397 18.937s-.596-.623-1.093-1.175c2.17-.536 2.999-1.725 2.999-1.725-.68.392-1.326.667-1.906.855-.828.305-1.624.508-2.403.624a13.24 13.24 0 01-4.292-.014 15.45 15.45 0 01-2.436-.624c-.38-.13-.795-.29-1.21-.493-.049-.029-.099-.044-.148-.073a.228.228 0 01-.067-.043c-.298-.145-.464-.246-.464-.246s.796 1.16 2.9 1.71c-.497.552-1.11 1.204-1.11 1.204-3.662-.102-5.054-2.204-5.054-2.204 0-4.669 2.386-8.454 2.386-8.454 2.386-1.566 4.657-1.522 4.657-1.522l.165.174c-2.983.754-4.358 1.9-4.358 1.9s.365-.175.978-.421c1.773-.681 3.181-.87 3.761-.913.1-.015.183-.03.282-.03a16.011 16.011 0 013.348-.028c1.574.159 3.264.565 4.988 1.392 0 0-1.31-1.088-4.127-1.842l.232-.232s2.27-.043 4.657 1.523c0 0 2.386 3.784 2.386 8.453 0 0-1.408 2.102-5.07 2.204zm-7.705-6.772c-.945 0-1.69.726-1.69 1.61 0 .884.762 1.61 1.69 1.61.944 0 1.69-.726 1.69-1.61.016-.885-.746-1.61-1.69-1.61zm6.048 0c-.944 0-1.69.726-1.69 1.61 0 .884.762 1.61 1.69 1.61.945 0 1.69-.726 1.69-1.61 0-.885-.745-1.61-1.69-1.61z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDiscord);

/***/ }),

/***/ "./components/icons/DownArrow.js":
/*!***************************************!*\
  !*** ./components/icons/DownArrow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DownArrow.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDownArrow(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M89.5 161.4c-6.7 2.9-10.5 10.5-9 18.3.6 3.4 10 13.1 84.3 87.5 74.4 74.3 84.1 83.7 87.5 84.3 9.4 1.8 3.9 6.6 94.9-84.3 90.9-90.9 86.1-85.5 84.3-94.9-.9-4.9-6.9-10.9-11.8-11.8-9.4-1.8-4.6-5.9-87.5 76.8L256 313.5l-75.8-75.7c-42.4-42.4-76.9-76.2-78.5-76.8-3.8-1.4-8.5-1.2-12.2.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDownArrow);

/***/ }),

/***/ "./components/icons/DropDown.js":
/*!**************************************!*\
  !*** ./components/icons/DropDown.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DropDown.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDropDown(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.58 4.516 9.163c-.408-.418-.436-1.17 0-1.615z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDropDown);

/***/ }),

/***/ "./components/icons/DropDownİcon.js":
/*!******************************************!*\
  !*** ./components/icons/DropDownİcon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\DropDown\u0130con.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgDropDownİcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M7 10l5 5 5-5H7z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDropDownİcon);

/***/ }),

/***/ "./components/icons/EthLogo.js":
/*!*************************************!*\
  !*** ./components/icons/EthLogo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\EthLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgEthLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 42 71",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.6,
      d: "M20.996 27.293L2 36.09l18.996 11.427 18.99-11.427-18.99-8.796z",
      fill: "#010101"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.45,
      d: "M1.57 35.834l-.253.428.425.256L20.74 47.944l.758.456V2.174l-.93 1.571L1.57 35.835z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.8,
      d: "M21.426 3.745l-.93-1.572V48.4l.758-.456 18.989-11.426.425-.256-.253-.428L21.426 3.745z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.45,
      d: "M20.497 51.462V65.41L3.75 41.389l16.747 10.073z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      opacity: 0.8,
      d: "M20.738 50.751l-.242.146V68.59l.91-1.304L40.41 40.039l-.668-.714L20.738 50.75z",
      fill: "currentColor",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgEthLogo);

/***/ }),

/***/ "./components/icons/Facebook.js":
/*!**************************************!*\
  !*** ./components/icons/Facebook.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Facebook.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgFacebook(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M6.042 3.625h16.916a2.417 2.417 0 012.417 2.417v16.916a2.417 2.417 0 01-2.417 2.417H6.042a2.417 2.417 0 01-2.417-2.417V6.042a2.417 2.417 0 012.417-2.417zM21.75 6.042h-3.02a4.23 4.23 0 00-4.23 4.229v3.02h-2.417v3.626H14.5v8.458h3.625v-8.458h3.625v-3.625h-3.625v-2.417a1.208 1.208 0 011.208-1.208h2.417V6.042z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgFacebook);

/***/ }),

/***/ "./components/icons/Fingerprint.js":
/*!*****************************************!*\
  !*** ./components/icons/Fingerprint.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Fingerprint.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgFingerprint(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#fingerprint_svg__clip0)",
      fill: "#000",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M16.373.164c-.619.164-.928.96-.598 1.564.206.356.784.439 3.444.52 2.557.083 3.464.22 4.516.687 1.443.631 2.082.466 2.082-.494 0-.823-.804-1.344-2.928-1.92-1.773-.495-5.217-.687-6.516-.357zM11.568 2.002C8.62 3.703 5.093 7.325 5.238 8.505c.04.33.206.74.391.878.269.22.66-.082 1.856-1.427 1.67-1.866 3.176-3.128 4.929-4.116.618-.356 1.258-.768 1.402-.905.371-.412.31-1.262-.144-1.592-.516-.356-.289-.411-2.104.659zM27.611 3.292c-.742.548-.412 1.454.97 2.661 1.546 1.345 3.278 3.567 4.454 5.68.866 1.564 1.381 1.866 1.876 1.07.227-.357.206-.576-.103-1.344-1.382-3.403-6.186-8.808-7.197-8.067zM15.507 4.91c-3.114 1.126-5.98 3.403-7.877 6.311-2.104 3.183-3.238 6.915-3.753 12.21C2.743 35.395 3.67 47.358 6.64 58.8c1.155 4.472 1.34 4.884 2.02 4.774.33-.055.578-.274.62-.576.04-.275-.31-1.839-.764-3.457-2.474-8.78-3.711-19.152-3.464-28.701.31-10.564 1.3-14.872 4.475-19.07 2.64-3.512 5.794-5.24 9.589-5.24 3.814 0 6.99 1.728 9.609 5.213 1.753 2.36 2.578 4.143 3.402 7.298.64 2.525.722 5.049.413 12.485-.268 6.366.392 11.442 2.248 17.341.783 2.442 1.257 3.073 1.855 2.415.434-.467.392-1.208-.185-2.69-.742-1.975-1.732-6.338-2.103-9.328-.269-2.168-.31-3.568-.165-7.601.247-7.08.185-9.878-.207-11.908-1.381-6.915-5.093-12.183-10.125-14.46-2.288-1.016-6.062-1.208-8.351-.384z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M16.187 9.136c-2.412.796-5.732 3.677-5.588 4.912.041.301.206.685.392.823.268.22.64-.028 1.753-1.125 2.206-2.195 4.887-3.266 7.34-2.909 1.032.165 1.176.11 1.382-.384.29-.713.29-.768-.103-1.262-.392-.549-3.546-.576-5.176-.055zM23.281 10.316c-.082.082-.144.466-.144.796 0 .466.288.85 1.154 1.509 2.29 1.728 4.517 5.652 4.95 8.643.185 1.262.804 1.728 1.36.988.392-.494.392-.604.083-1.948-.392-1.784-1.196-3.897-2.083-5.543-1.526-2.716-4.66-5.35-5.32-4.445zM3.176 11.413c-.887 1.674-1.96 4.994-2.434 7.436-.618 3.238-.639 4.335-.082 4.72.536.384 1.237-.522 1.237-1.62 0-1.426 1.031-5.624 1.98-7.929.742-1.838.866-2.36.7-2.799-.308-.768-.927-.686-1.401.192zM16.105 13.773c-1.69.933-2.536 1.729-3.485 3.128-1.773 2.689-2.371 5.9-2.619 13.939-.33 11.661 1.732 23.899 5.774 34.298.907 2.305 1.155 2.744 1.567 2.744 1.01 0 1.01-.741-.02-3.348-2.454-6.173-4.351-13.939-5.217-21.347-.722-6.036-.598-16.984.247-21.265.557-2.908 2.124-5.186 4.227-6.2 1.34-.66 3.733-.577 5.197.164 2.227 1.125 4.083 4.088 4.392 7.024.062.713 0 3.402-.144 6.01-.207 3.758-.227 5.487-.02 8.285.515 7.656 2.123 14.46 4.886 20.717.928 2.112 1.279 2.524 1.835 2.25.64-.33.516-1.153-.536-3.567-3.711-8.506-5.217-18-4.516-28.262.33-4.637.165-6.393-.824-9.082-.764-2.03-2.393-4.116-4.083-5.186-1.01-.659-1.485-.768-3.341-.85-1.897-.083-2.31-.028-3.32.548zM35.2 15.227c-.186.247-.268.659-.206.906.722 2.47 1.175 5.433 1.278 8.396.124 3.238.268 3.979.805 3.979.598 0 .907-.851.907-2.552-.02-5.104-1.258-11.168-2.248-11.168-.103 0-.35.192-.536.44zM8.99 16.38c-1.051.905-2.04 6.695-2.185 12.786-.062 1.784 0 2.195.31 2.47.247.219.453.219.7 0 .289-.247.413-1.016.619-3.842.33-4.774.619-6.805 1.217-8.78.598-2.003.598-2.195.103-2.58-.475-.329-.475-.329-.763-.054z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M18.992 17.834c-.557.74-.206 1.51.784 1.756 1.195.274 2.227 1.317 2.742 2.744.433 1.18.454 1.536.33 4.198-.124 3.018-.02 3.622.722 3.622.577 0 .783-.823.928-3.76.144-3.017.02-3.923-.928-5.926-.68-1.372-1.918-2.497-3.279-2.908-.784-.22-.949-.192-1.3.274zM15.816 18.904c-.825.713-1.69 2.524-1.938 4.116-.31 1.948-.68 7.326-.598 8.917.062 1.18.124 1.372.536 1.455.845.164 1.072-.385 1.072-2.662 0-1.152.145-3.43.31-5.049.309-3.073.7-4.39 1.526-5.076.536-.411.556-1.591.061-1.948-.288-.192-.536-.137-.969.247z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M18.29 21.895c-1.236.686-1.505 2.113-1.67 9.494-.268 10.399 1.217 19.59 4.66 28.81 1.877 5.049 2.64 6.585 3.28 6.585.99 0 .99-.74-.062-3.046-2.083-4.637-3.98-10.563-4.95-15.502-1.092-5.707-1.257-7.6-1.237-15.064 0-7.216.165-9.137.743-9.274.556-.137.763.74.536 2.552-.268 2.387-.268 11.14.02 13.856.599 5.652 1.588 10.454 3.135 15.338 1.031 3.238 2.66 7.326 3.63 9 .556 1.015 1.175 1.18 1.484.412.227-.577.247-.494-1.423-4.308-2.99-6.805-4.866-14.872-5.403-23.295-.185-3.019-.185-4.857.042-8.699.288-5.542.227-5.954-1.134-6.722-.784-.439-1.052-.439-1.65-.137zM29.88 25.078c-.433.576-.66 3.896-.619 9.192.041 5.432.165 6.173 1.01 6.173h.599l-.083-4.801c-.041-2.882.041-5.9.186-7.519.247-2.551.247-2.744-.103-3.1-.495-.467-.62-.44-.99.055zM.371 26.203c-.495.63-.495 12.484 0 13.115.371.522.413.522.928.165.371-.274.392-.659.392-6.722 0-6.064-.02-6.449-.392-6.723-.515-.357-.557-.357-.928.165zM36.478 30.895c-.267.329-.164 10.371.104 10.728.37.494.948.384 1.196-.192.309-.796.268-9.988-.042-10.4-.268-.356-1.03-.438-1.258-.136z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M22.704 32.925c-.413 1.07.309 9.631 1.154 13.582.31 1.427.66 1.866 1.217 1.592.495-.247.557-.906.248-2.525-.516-2.634-.928-6.365-1.073-9.52-.082-1.675-.227-3.184-.35-3.376-.31-.521-.928-.384-1.196.247zM6.846 34.407c-.185.274-.206 1.125-.103 3.073.165 3.1.825 9.63 1.134 11.113.248 1.18.907 1.618 1.402.96.268-.384.268-.686-.04-2.854-.537-3.814-.723-5.762-.867-9-.082-1.673-.227-3.182-.35-3.374-.269-.44-.867-.412-1.176.082zM13.569 36.08c-.392.495-.35 1.318.206 6.723.7 6.75 1.464 9.33 2.454 8.369.37-.357.37-.467-.165-3.704-.31-1.811-.701-5.022-.887-7.107-.185-2.058-.392-3.951-.474-4.17-.248-.604-.743-.66-1.134-.11zM.268 42.309c-.474.768.165 6.338 1.114 9.686.7 2.524 1.03 3.128 1.65 3.128.721 0 .865-1.015.35-2.387-.763-1.948-1.3-4.665-1.547-7.683-.247-2.881-.268-2.963-.783-3.046-.289-.055-.64.11-.784.302zM30.292 42.94c-.082.11-.144.467-.144.823 0 1.235 1.485 6.64 2.64 9.576.99 2.552 1.257 3.019 1.67 3.019 1.03 0 .969-.686-.268-4.006-.64-1.73-1.506-4.555-1.939-6.284-.7-2.853-.825-3.155-1.299-3.238-.268-.054-.577 0-.66.11zM25.055 50.623c-.186.631.226 2.14 1.505 5.625 1.32 3.622 2.742 6.75 3.114 6.942.412.22.866-.11.99-.686.082-.33-.228-1.29-.908-2.771-.97-2.14-2.124-5.269-3.093-8.26-.33-1.07-.495-1.289-.949-1.289-.288 0-.577.192-.66.439zM8.95 52.16c-.372.493-.33.85.66 4.719 1.134 4.445 2.804 9.494 3.278 9.878.495.411 1.072-.137 1.052-.96-.02-.357-.454-1.921-.99-3.43-.536-1.537-1.402-4.5-1.938-6.586-.784-3.1-1.052-3.841-1.382-3.896-.227-.027-.536.082-.68.275zM16.023 54.108c-.145.74.907 4.308 2.618 8.89 1.423 3.814 2.186 5.213 2.702 4.939.742-.385.618-1.07-.846-4.83-.804-2.057-1.814-4.911-2.247-6.338-.99-3.238-1.01-3.292-1.609-3.292-.35 0-.536.192-.618.63z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "fingerprint_svg__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h38v63H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgFingerprint);

/***/ }),

/***/ "./components/icons/GooglePlayStore.js":
/*!*********************************************!*\
  !*** ./components/icons/GooglePlayStore.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\GooglePlayStore.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgGooglePlayStore(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 240 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#google-play-store_svg__clip0_51:546)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M231.108 71.109H8.892C3.992 71.109 0 67.101 0 62.22V8.89C0 3.989 3.991 0 8.892 0h222.216C236.004 0 240 3.99 240 8.889V62.22c0 4.881-3.996 8.889-8.892 8.889z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M231.108 1.423c4.11 0 7.475 3.356 7.475 7.466V62.22c0 4.11-3.343 7.466-7.475 7.466H8.892c-4.11 0-7.475-3.356-7.475-7.466V8.89c0-4.11 3.343-7.466 7.475-7.466h222.216zm0-1.423H8.892C3.992 0 0 4.008 0 8.889V62.22c0 4.9 3.991 8.889 8.892 8.889h222.216c4.896 0 8.892-3.99 8.892-8.889V8.89C240 4.008 236.004 0 231.108 0z",
        fill: "#A6A6A6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M126.433 23.523c-1.603 0-2.954-.563-4.022-1.672a5.7 5.7 0 01-1.625-4.078c0-1.618.547-2.988 1.625-4.074 1.064-1.109 2.415-1.672 4.017-1.672 1.585 0 2.936.563 4.023 1.672 1.077 1.121 1.624 2.491 1.624 4.074-.017 1.622-.565 2.992-1.624 4.074-1.064 1.117-2.416 1.676-4.018 1.676zm-47.688 0c-1.568 0-2.928-.554-4.04-1.65-1.104-1.09-1.665-2.469-1.665-4.096 0-1.627.561-3.006 1.665-4.096 1.09-1.095 2.45-1.65 4.04-1.65a5.61 5.61 0 012.256.47c.71.307 1.289.723 1.717 1.233l.106.129-1.196 1.179-.124-.146c-.675-.807-1.58-1.202-2.777-1.202-1.069 0-2 .381-2.768 1.135-.773.758-1.166 1.751-1.166 2.953 0 1.201.393 2.194 1.166 2.952a3.83 3.83 0 002.768 1.135c1.14 0 2.097-.381 2.843-1.135.442-.443.716-1.064.813-1.848h-3.837v-1.659h5.484l.022.151c.04.28.08.568.08.834 0 1.53-.46 2.766-1.37 3.68-1.033 1.081-2.384 1.63-4.017 1.63zm63.406-.235h-1.691l-5.179-8.321.044 1.498v6.818h-1.691V12.267h1.929l.053.084 4.87 7.838-.044-1.494v-6.428h1.709v11.02zm-28.425 0h-1.713v-9.363h-2.972v-1.658h7.652v1.658h-2.971v9.363h.004zm-6.08 0h-1.708V12.267h1.708v11.02zm-9.603 0h-1.708v-9.363h-2.972v-1.658h7.652v1.658h-2.972v9.363zm-5.762-.018H85.73V12.267h6.552v1.658h-4.839v3.023h4.367v1.64h-4.367v3.024h4.84v1.658zm31.383-2.558c.764.767 1.691 1.153 2.769 1.153 1.108 0 2.013-.377 2.768-1.153.751-.754 1.13-1.742 1.13-2.935 0-1.192-.379-2.185-1.125-2.935a3.782 3.782 0 00-2.769-1.152c-1.108 0-2.013.377-2.764 1.152-.75.754-1.13 1.743-1.13 2.935 0 1.193.375 2.186 1.121 2.935z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M120.627 38.675c-4.172 0-7.554 3.18-7.554 7.564 0 4.344 3.404 7.563 7.554 7.563 4.172 0 7.554-3.201 7.554-7.563 0-4.385-3.382-7.563-7.554-7.563zm0 12.13c-2.283 0-4.247-1.898-4.247-4.584 0-2.727 1.969-4.584 4.247-4.584 2.283 0 4.247 1.857 4.247 4.584.005 2.704-1.964 4.584-4.247 4.584zm-16.482-12.13c-4.172 0-7.554 3.18-7.554 7.564 0 4.344 3.404 7.563 7.554 7.563 4.172 0 7.554-3.201 7.554-7.563 0-4.385-3.386-7.563-7.554-7.563zm0 12.13c-2.283 0-4.247-1.898-4.247-4.584 0-2.727 1.969-4.584 4.247-4.584 2.283 0 4.247 1.857 4.247 4.584 0 2.704-1.964 4.584-4.247 4.584zm-19.612-9.82v3.201h7.651c-.234 1.795-.825 3.121-1.73 4.03-1.122 1.126-2.853 2.35-5.903 2.35-4.703 0-8.38-3.813-8.38-8.535 0-4.721 3.677-8.533 8.38-8.533 2.538 0 4.388 1.006 5.761 2.291l2.26-2.27c-1.907-1.835-4.445-3.24-8.004-3.24-6.45 0-11.863 5.275-11.863 11.735 0 6.477 5.408 11.734 11.863 11.734 3.484 0 6.097-1.143 8.164-3.298 2.106-2.114 2.773-5.098 2.773-7.505 0-.75-.058-1.423-.177-1.995h-10.8c.005-.005.005.035.005.035zm80.219 2.492c-.631-1.698-2.539-4.82-6.45-4.82-3.877 0-7.1 3.064-7.1 7.564 0 4.247 3.188 7.563 7.475 7.563 3.444 0 5.448-2.115 6.274-3.356l-2.556-1.72c-.848 1.263-2.027 2.092-3.7 2.092-1.691 0-2.875-.771-3.661-2.292l10.071-4.189c0 .004-.353-.842-.353-.842zm-10.27 2.527c-.079-2.922 2.261-4.407 3.934-4.407 1.321 0 2.42.652 2.795 1.6l-6.729 2.807zm-8.181 7.328h3.307v-22.22h-3.307v22.22zm-5.43-12.976h-.12c-.746-.891-2.163-1.698-3.973-1.698-3.758 0-7.219 3.32-7.219 7.585 0 4.247 3.444 7.528 7.219 7.528 1.788 0 3.227-.812 3.973-1.72h.12v1.086c0 2.886-1.537 4.442-4.014 4.442-2.026 0-3.285-1.463-3.797-2.687l-2.874 1.206c.825 1.995 3.029 4.464 6.667 4.464 3.876 0 7.161-2.292 7.161-7.882V39.11h-3.126v1.246h-.017zm-3.798 10.449c-2.282 0-4.19-1.915-4.19-4.562 0-2.669 1.908-4.602 4.19-4.602 2.261 0 4.014 1.955 4.014 4.602.022 2.647-1.749 4.562-4.014 4.562zm43.163-19.693h-7.907v22.22h3.307v-8.415h4.605c3.66 0 7.258-2.664 7.258-6.893 0-4.23-3.585-6.912-7.263-6.912zm.097 10.702h-4.702V34.19h4.702c2.477 0 3.877 2.053 3.877 3.813 0 1.742-1.417 3.812-3.877 3.812zm20.421-3.178c-2.402 0-4.879 1.068-5.904 3.395l2.932 1.224c.632-1.224 1.788-1.64 3.011-1.64 1.713 0 3.444 1.028 3.484 2.864v.235c-.592-.337-1.89-.852-3.444-.852-3.166 0-6.375 1.738-6.375 4.997 0 2.983 2.596 4.898 5.488 4.898 2.22 0 3.443-1.006 4.207-2.172h.119v1.72h3.188v-8.512c0-3.963-2.931-6.157-6.706-6.157zm-.415 12.169c-1.082 0-2.597-.532-2.597-1.898 0-1.72 1.89-2.371 3.502-2.371 1.457 0 2.145.314 3.011.749a3.987 3.987 0 01-3.916 3.52zM219.09 39.11l-3.797 9.638h-.119l-3.934-9.638h-3.559l5.903 13.473-3.364 7.487h3.444l9.082-20.96h-3.656zm-29.767 14.222h3.307v-22.22h-3.307v22.22z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.473 13.393c-.512.554-.808 1.4-.808 2.51V55.21c0 1.109.296 1.956.826 2.488l.137.12 21.934-22.025v-.492L18.61 13.273l-.137.12z",
        fill: "url(#google-play-store_svg__paint0_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.86 43.157l-7.316-7.345v-.515l7.316-7.345.16.097 8.653 4.939c2.477 1.4 2.477 3.715 0 5.133L48.02 43.06l-.159.097z",
        fill: "url(#google-play-store_svg__paint1_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M48.02 43.06l-7.475-7.506-22.072 22.162c.808.87 2.164.967 3.678.12L48.02 43.06z",
        fill: "url(#google-play-store_svg__paint2_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M48.02 28.049L22.15 13.295c-1.514-.869-2.874-.749-3.678.12l22.072 22.14 7.474-7.506z",
        fill: "url(#google-play-store_svg__paint3_linear_51:546)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: 0.2,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.86 42.9L22.17 57.557c-1.436.829-2.716.771-3.541.017l-.137.138.137.12c.825.749 2.105.81 3.54-.018L48.038 43.06l-.177-.16z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: 0.12,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M56.673 37.864L47.838 42.9l.16.16 8.653-4.939c1.24-.709 1.85-1.64 1.85-2.567-.075.852-.706 1.658-1.828 2.31z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: 0.25,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.15 13.552l34.523 19.693c1.122.634 1.753 1.463 1.85 2.31 0-.927-.61-1.858-1.85-2.567L22.151 13.295c-2.477-1.423-4.486-.235-4.486 2.607v.257c0-2.846 2.009-4.012 4.486-2.607z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint0_linear_51:546",
        x1: 38.595,
        y1: 15.478,
        x2: 3.44,
        y2: 24.807,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#00A0FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.007,
          stopColor: "#00A1FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.26,
          stopColor: "#00BEFF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.512,
          stopColor: "#00D2FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.76,
          stopColor: "#00DFFF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#00E3FF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint1_linear_51:546",
        x1: 59.903,
        y1: 35.555,
        x2: 17.063,
        y2: 35.555,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#FFE000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.409,
          stopColor: "#FFBD00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.775,
          stopColor: "orange"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#FF9C00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint2_linear_51:546",
        x1: 43.955,
        y1: 39.639,
        x2: 15.578,
        y2: 87.205,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#FF3A44"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#C31162"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "google-play-store_svg__paint3_linear_51:546",
        x1: 12.915,
        y1: 0.318,
        x2: 25.576,
        y2: 21.562,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          stopColor: "#32A071"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.069,
          stopColor: "#2DA771"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.476,
          stopColor: "#15CF74"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 0.801,
          stopColor: "#06E775"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "#00F076"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "google-play-store_svg__clip0_51:546",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h240v71.109H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgGooglePlayStore);

/***/ }),

/***/ "./components/icons/HomepageOption.js":
/*!********************************************!*\
  !*** ./components/icons/HomepageOption.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\HomepageOption.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgHomepageOption(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M2.09 1.643c-1.026.13-1.887.996-2.034 2.05-.074.47-.068 1.728 0 2.226A2.476 2.476 0 001.41 7.777l.374.181H27.215l.374-.181a2.476 2.476 0 001.354-1.858c.068-.487.068-1.677.005-2.192a2.405 2.405 0 00-2.09-2.09c-.453-.057-24.31-.057-24.769.006zM1.83 11.357c-.46.124-.748.294-1.094.645-.577.572-.736 1.11-.736 2.47 0 .923.074 1.421.26 1.818.187.396.618.867.97 1.06.64.345-.216.322 13.27.322 13.486 0 12.63.023 13.27-.323.352-.192.782-.663.97-1.06.186-.396.26-.894.26-1.817 0-.923-.074-1.422-.26-1.818-.188-.397-.618-.867-.97-1.06-.64-.345.222-.322-13.298-.317-10.456 0-12.393.012-12.643.08zM1.699 21.065c-.414.13-.708.323-1.037.68-.34.362-.527.764-.606 1.28-.068.492-.074 1.75 0 2.226a2.403 2.403 0 002.028 2.05c.255.04 4.412.057 12.67.045l12.291-.017.334-.124a2.508 2.508 0 001.45-1.479c.102-.266.13-.481.153-1.229.051-1.546-.096-2.175-.668-2.775-.34-.357-.634-.544-1.065-.674-.283-.08-1.478-.09-12.772-.085-11.759 0-12.484.005-12.778.102z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgHomepageOption);

/***/ }),

/***/ "./components/icons/Linkdn.js":
/*!************************************!*\
  !*** ./components/icons/Linkdn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Linkdn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgLinkdn(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M22.958 3.625a2.417 2.417 0 012.417 2.417v16.916a2.417 2.417 0 01-2.417 2.417H6.042a2.417 2.417 0 01-2.417-2.417V6.042a2.417 2.417 0 012.417-2.417h16.916zm-.604 18.73V15.95a3.94 3.94 0 00-3.939-3.94c-1.027 0-2.223.63-2.803 1.572V12.24H12.24v10.114h3.372v-5.957c0-.93.749-1.692 1.68-1.692a1.691 1.691 0 011.69 1.692v5.957h3.372zM8.314 10.342a2.03 2.03 0 002.03-2.03 2.037 2.037 0 00-2.03-2.042A2.042 2.042 0 006.27 8.313c0 1.124.919 2.03 2.042 2.03zm1.679 12.011V12.24H6.646v10.114h3.347z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLinkdn);

/***/ }),

/***/ "./components/icons/Mail.js":
/*!**********************************!*\
  !*** ./components/icons/Mail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Mail.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgMail(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M24.167 4.833H4.833A2.413 2.413 0 002.43 7.25l-.012 14.5a2.424 2.424 0 002.416 2.417h19.334a2.424 2.424 0 002.416-2.417V7.25a2.424 2.424 0 00-2.416-2.417zm0 16.917H4.833V9.667l9.667 6.041 9.667-6.041V21.75zM14.5 13.292L4.833 7.25h19.334L14.5 13.292z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMail);

/***/ }),

/***/ "./components/icons/Media.js":
/*!***********************************!*\
  !*** ./components/icons/Media.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Media.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgMedia(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMedia);

/***/ }),

/***/ "./components/icons/MetaData.js":
/*!**************************************!*\
  !*** ./components/icons/MetaData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\MetaData.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgMetaData(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M3.02 37.307l12.512 20.74c.056-.15.119-.29.188-.421 5.041-8.358 10.084-16.713 15.128-25.065.179-.272.276-.662.264-1.064-.011-2.419 0-4.837 0-7.313-.117.084-.222.151-.323.233-.842.681-1.713 1.248-2.651 1.43-.219.032-.408.262-.493.597-.802 2.372-2.053 3.592-3.676 3.55-1.703-.041-2.962-1.415-3.7-3.97-.88-3.047-.192-6.802 1.542-8.617 1.755-1.835 4.058-1.23 5.384 1.416.243.495.43 1.018.29 1.701-.083.465-.303.826-.584.958-.282.132-.584.016-.801-.306-.22-.314-.397-.712-.625-1.01-.768-1-1.612-1.192-2.492-.465-.93.772-1.375 2.065-1.306 3.779.066 1.597.597 2.706 1.474 3.32.916.648 1.981.198 2.6-1.098-.774-.297-1.478-.837-2.005-1.8a12.59 12.59 0 01-.953-2.324c-.195-.628.053-1.395.421-1.707.381-.328.85-.128 1.089.465.332.88.676 1.702 1.262 2.174.884.698 1.797.62 2.707.284 1.754-.635 3.188-2.193 4.43-4.255 1.373-2.272 2.359-4.913 2.666-8.138.19-1.985.022-3.871-1.03-5.175-.854-1.06-1.842-1.11-2.852-.796-1.184.397-2.3 1.219-3.272 2.407a5.09 5.09 0 01-.438.479c-.4.414-.924.227-1.186-.422-.262-.649-.165-1.524.218-1.978a15.265 15.265 0 011.672-1.8c1.403-1.225 2.895-1.964 4.512-1.734 2.373.347 4.079 3.34 4.191 7.292.096 3.371-.633 6.298-1.74 9.016-.661 1.6-1.455 3.038-2.359 4.271-.115.198-.18.46-.182.735-.011 3.215-.011 6.431 0 9.65.014.66-.145 1.3-.435 1.755-5.413 8.95-10.822 17.903-16.228 26.861-.56.93-1.001.93-1.562 0-4.482-7.423-8.962-14.855-13.44-22.295-.573-.949-.572-1.672.006-2.632 5.396-8.94 10.792-17.888 16.189-26.843.27-.486.654-.755 1.053-.737 2.747.022 5.494.022 8.242 0 .4-.022.786.243 1.059.728 1.328 2.237 2.665 4.452 4.002 6.682.291.461.356 1.192.157 1.772-.199.58-.61.863-.999.683a1.56 1.56 0 01-.484-.541 772.103 772.103 0 01-3.602-5.948c-.15-.275-.367-.424-.59-.404-2.446 0-4.89 0-7.336.02-.19.01-.372.129-.515.338-5.09 8.412-10.174 16.83-15.254 25.255l-.144.267z",
      fill: "#000",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M11.574 31.265V38.683c-.007.815-.392 1.482-.881 1.527-.49.046-.917-.546-.978-1.354a5.212 5.212 0 01-.012-.432v-8.408c0-1.269.357-1.865 1.112-1.867h5.131c.42 0 .755.247.932.91.163.596.139 1.221-.149 1.652-.207.305-.468.49-.744.529-1.313.052-2.626.022-3.94.025h-.471zM19.136 43.779v-6.942a4.524 4.524 0 01.125-1.135c.183-.638.61-.975 1.025-.809.417.146.718.752.725 1.46.017.927.008 1.854.008 2.781v5.874c0 1.308-.352 1.901-1.131 1.904h-5.14c-.384.039-.743-.316-.905-.895-.158-.51-.124-1.126.087-1.58.201-.459.532-.71.873-.663h3.873l.46.005z",
      fill: "#000",
      stroke: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMetaData);

/***/ }),

/***/ "./components/icons/OpenseaLogo.js":
/*!*****************************************!*\
  !*** ./components/icons/OpenseaLogo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\OpenseaLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgOpenseaLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M18.895 14.681c-.045-.045-.112-.045-.18-.022l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0 .31.31 0 01.089-.067c.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65-.359 0-.627.291-.627.65 0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224a5.16 5.16 0 00.448-.941c.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157.044-.022.022-.09-.023-.112zm-9.997-.493h2.555c.045 0 .068-.023.068-.067v-2.78c0-.022-.023-.044-.045-.067l-1.255-.583c-.023-.022-.068 0-.09.045l-1.3 3.34c-.022.067.022.112.067.112zM13 0C5.828 0 0 5.828 0 13s5.828 13 13 13 13-5.828 13-13S20.172 0 13 0zm-.045 22.459c-5.177 0-9.369-4.192-9.369-9.392 0-5.177 4.192-9.391 9.37-9.391 5.177 0 9.368 4.214 9.368 9.391-.022 5.2-4.214 9.392-9.369 9.392zm5.76-7.8l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0 .31.31 0 01.089-.067c.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65-.359 0-.627.291-.627.65 0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.856.856 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224a5.16 5.16 0 00.448-.941c.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157 0-.045-.023-.112-.068-.134 0 0-.067-.023-.135 0zm-9.817-.471h2.555c.045 0 .068-.023.068-.067v-2.78c0-.022-.023-.044-.045-.067l-1.255-.583c-.023-.022-.068 0-.09.045l-1.3 3.34c-.022.067.022.112.067.112z",
      fill: "#3291E9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M11.476 11.296l-1.255-.582c-.023-.023-.068 0-.09.045l-1.3 3.34c-.022.044.022.089.067.089h2.556c.044 0 .067-.023.067-.067v-2.78c0-.022-.023-.044-.045-.044zm7.419 3.385c-.045-.045-.112-.045-.18-.022l-.156.067a5.518 5.518 0 01-2.466.56c-.045 0-.067.023-.067.045a.865.865 0 01-.852.695h-1.748v-1.457h.022c.112.022.202.022.314.045.74.112 1.098.448 1.255.605l.023.022a.068.068 0 00.09 0c.022-.022.044-.044.089-.067.269-.18.897-.56.897-2.577 0-2.063-1.57-3.452-1.749-3.542l-.919-.067h-.022v-.583a.66.66 0 00.314-.56c0-.359-.27-.65-.628-.65s-.627.291-.627.65c0 .224.112.426.313.538v.493l-1.322-.135c-.067 0-.112.068-.067.112.224.36.829 1.48.874 3.16.045 1.57-.202 2.31-.314 2.578-.022.023-.022.045 0 .068.022.022.045.022.067.022.157-.022.426-.067.762-.09v1.457h-1.457a.89.89 0 01-.874-.874v-.358c0-.045-.022-.068-.067-.068H7.688c-.022 0-.067.023-.067.068v.201c0 1.009.291 1.928.784 2.735.09.134.247.201.381.134l.292-.134a.856.856 0 01.74 0l.313.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134a.855.855 0 00.74 0l.313-.134a.856.856 0 01.74 0l.314.134c.201.09.426-.022.538-.224.179-.291.336-.627.448-.941.247-.74.695-1.435 1.39-1.771.067-.022.09-.09.09-.157.044-.022.022-.09-.023-.112z",
      fill: "#3291E9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgOpenseaLogo);

/***/ }),

/***/ "./components/icons/QrCode.js":
/*!************************************!*\
  !*** ./components/icons/QrCode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\QrCode.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgQrCode(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 47 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#qr-code_svg__clip0)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M5.875 24.542h4.667v4.666H5.875v-4.666zm18.667-14h4.666v9.333h-4.666v-9.333zm-4.667 14h9.333v9.333h-4.666v-4.667h-4.667v-4.666zm14 0h4.667v4.666h4.666v-4.666h4.667v4.666h-4.667v4.667h4.667v9.333h-4.667v4.667h-4.666v-4.667h-9.334v4.667h-4.666v-9.333h9.333v-4.667h4.667v-4.667h-4.667v-4.666zm9.333 18.666v-9.333h-4.666v9.333h4.666zM33.875 5.875h14v14h-14v-14zm4.667 4.667v4.666h4.666v-4.666h-4.666zM5.875 5.875h14v14h-14v-14zm4.667 4.667v4.666h4.666v-4.666h-4.666zM5.875 33.875h14v14h-14v-14zm4.667 4.667v4.666h4.666v-4.666h-4.666z",
        fill: "#000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "qr-code_svg__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "currentColor",
          d: "M0 0h47v47H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgQrCode);

/***/ }),

/***/ "./components/icons/RaribleLogo.js":
/*!*****************************************!*\
  !*** ./components/icons/RaribleLogo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\RaribleLogo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgRaribleLogo(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M20.8 0H5.2A5.2 5.2 0 000 5.2v15.6A5.2 5.2 0 005.2 26h15.6a5.2 5.2 0 005.2-5.2V5.2A5.2 5.2 0 0020.8 0z",
      fill: "#FEDA03"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.94 12.905c.82-.213 1.548-.826 1.548-2.057 0-2.05-1.741-2.528-3.972-2.528H6.63v9.234h3.74V14.42h4.437c.683 0 1.083.271 1.083.942v2.192h3.74v-2.308c0-1.258-.71-2.051-1.69-2.341zm-3.069-.974H10.37v-.903h4.501c.49 0 .787.065.787.452s-.297.451-.787.451z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgRaribleLogo);

/***/ }),

/***/ "./components/icons/SavingsPig.js":
/*!****************************************!*\
  !*** ./components/icons/SavingsPig.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\SavingsPig.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgSavingsPig(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.311.071c-3.581.821-5.937 7.212-4.764 12.925.127.59.222 1.107.222 1.178 0 .072-.349.34-.761.625-.972.625-2.63 2.089-3.286 2.892l-.507.625-.517-.375c-.972-.696-2.314-.785-3.202-.214-.38.25-1.236 1.232-1.236 1.428 0 .072.423 1.09.94 2.25l.93 2.106-.412 1.089c-.549 1.428-1.183 3.677-1.426 5.07l-.19 1.107h-.486c-.718 0-1.48.446-1.88 1.107-.708 1.178-.698 1.017-.73 7.944-.02 3.91.011 6.552.074 6.962.148.91.698 2 1.215 2.392.37.286.708.34 2.272.34h1.849l.95 1.678c.529.91 1.332 2.124 1.786 2.695l.813 1.018v2.981c0 2.732.021 3.017.243 3.66.412 1.232.708 1.375 2.737 1.321 1.595-.053 1.785-.09 2.06-.428.433-.554.676-1.357.74-2.5l.063-1 .327.09c1.405.41 3.19.535 4.49.339.76-.125 1.448-.268 1.532-.321.106-.072.158.178.19 1.07.042 1.25.222 1.822.76 2.5.265.34.434.375 2.103.375 1.733 0 1.838-.018 2.166-.41.613-.75.697-1.232.76-4.446l.053-2.892.793-.928c1.753-2.089 3.528-5.517 4.447-8.605 1.173-3.892 1.638-8.801 1.215-12.764l-.137-1.303.507-.429c.57-.5 1.226-.714 1.627-.553.402.178.317.375-.18.392-1.193.054-1.257 2.714-.073 3.303.37.197.454.179.707-.125.159-.196.36-.607.444-.928.19-.678.2-.678.76-.197.381.322.444.34.582.108.243-.411.074-.947-.444-1.357-.264-.214-.517-.375-.58-.375-.054 0-.107-.09-.107-.196 0-.5-.38-1.447-.665-1.714-.444-.375-1.374-.215-2.145.375-.327.25-.612.464-.623.464-.021 0-.074-.268-.116-.59-.148-1.142-.898-3.784-1.564-5.48-1.67-4.23-4.247-7.676-7.142-9.569-.549-.357-1.014-.66-1.035-.678-.01-.036.074-.518.19-1.107 1.036-5.034-.655-10.765-3.666-12.479-.834-.464-1.849-.624-2.673-.446zm1.796 2.607c1.332.5 2.41 2.035 3.033 4.284.264.946.295 1.25.295 2.928 0 1.75-.02 1.946-.348 3.07-1.648 5.713-6.381 5.713-7.977 0-.317-1.106-.338-1.339-.338-3.07 0-1.678.032-1.982.296-2.928.602-2.178 1.627-3.677 2.905-4.23.888-.394 1.226-.412 2.134-.054zm-4.352 15.37c.02 0-.349.232-.814.482-1.87 1.018-2.493 1.821-2.218 2.857.063.232.253.535.401.642.243.161.412.107 1.183-.464 2.779-2.017 6.17-2.231 8.96-.571.496.303 1.14.732 1.415.982.623.517.982.482 1.268-.143.486-1.107-.233-2.089-2.325-3.231-.602-.322-1.077-.625-1.077-.679.01-.053.243-.446.528-.874l.518-.786 1.056.643c4.047 2.41 7.258 7.998 8.304 14.46.528 3.231.465 7.23-.169 10.497-.845 4.338-2.62 8.159-5.029 10.854l-1.13 1.268-.01 3.249-.011 3.267-1.395.053-1.405.054v-2.339c0-1.267-.032-2.32-.074-2.32-.053 0-.349.124-.666.267-.887.41-2.852.803-3.94.803-1.13 0-2.736-.374-3.92-.892a28.93 28.93 0 00-.866-.357c-.021 0-.053 1.017-.063 2.267l-.032 2.285-1.405.054-1.405.053.021-3.41.01-3.41-.855-.981c-1.036-1.214-2.124-2.892-2.874-4.445l-.55-1.16H4.064c-2.017 0-2.123-.019-2.356-.393l-.243-.375V40.22c0-7.391-.137-6.82 1.596-6.945l1.183-.09.243-1.57c.433-2.732 1.11-4.999 2.314-7.73.147-.34.116-.464-.624-2.142-.454-1-.75-1.84-.697-1.928.18-.304 1.278.107 2.06.767l.792.66.793-.999c.972-1.214 2.44-2.553 3.645-3.32l.898-.59.528.84c.285.464.539.856.56.874zm21.087 14.264c.127.09.137.179.042.536-.127.446-.18.5-.444.321-.169-.107-.232-.625-.095-.839.085-.16.275-.16.497-.018z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M8.575 30.01c-.138.053-.38.32-.56.606-.36.625-.434 1.607-.17 2.464.286.928 1.205 1.214 1.765.535 1.035-1.25.243-3.999-1.035-3.606z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSavingsPig);

/***/ }),

/***/ "./components/icons/SmartContractİcon.js":
/*!***********************************************!*\
  !*** ./components/icons/SmartContractİcon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\SmartContract\u0130con.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgSmartContractİcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 38 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M3.023 1.368C1.864 2.088.333 5.025.07 7.13c-.336 2.382.561 4.986 2.056 6.15.71.553 2.13.83 4.11.83h2.99v2.493c0 1.385.187 2.493.374 2.493.485 0 .485-11.634 0-13.517-.187-.776-.673-1.884-1.121-2.549L7.73 1.922h13.117c11.696 0 13.228.111 14.2.942 2.018 1.773 2.205 3.213 2.205 17.285 0 8.144.15 12.797.373 12.797.224 0 .374-4.598.374-12.742 0-13.85-.15-15.124-2.055-17.728l-1.01-1.385L19.39.981c-8.557-.056-15.919.11-16.367.387zm3.96 1.385c1.496 1.164 2.243 3.49 2.243 7.202v3.047H7.544c-1.644 0-1.644 0-1.308-1.44.225-.776.262-1.994.15-2.77-.224-1.385-2.242-3.38-2.69-2.66-.15.222-.038.5.26.666.786.387 1.907 2.216 1.907 3.157 0 .444-.337 1.33-.785 1.995-.972 1.44-2.392 1.052-3.587-.942C.48 9.4.407 8.016 1.19 5.578 2.239 2.256 4.78 1.037 6.985 2.754z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.447 11.894c0 .333 2.242.554 5.942.554 3.587 0 6.054-.221 6.203-.554.15-.387-1.943-.554-5.942-.554-3.886 0-6.203.222-6.203.554zM12.963 16.88c0 .333 1.308.554 3.176.554 1.869 0 3.177-.221 3.177-.554 0-.332-1.308-.554-3.177-.554-1.868 0-3.176.222-3.176.554zM20.81 16.88c0 .333 1.121.554 2.616.554s2.616-.221 2.616-.554c0-.332-1.121-.554-2.616-.554s-2.616.222-2.616.554zM31.274 16.88c0 .277.672.554 1.494.554s1.494-.277 1.494-.554c0-.332-.672-.554-1.494-.554s-1.494.222-1.494.554zM9.525 21.645c-.187.221-.3 7.423-.3 16.01 0 14.349.038 15.678.673 16.51.561.775 1.869.941 8.147 1.052l7.436.166.112 4.266c.075 2.382.225 4.321.337 4.321.15 0 .747-.665 1.308-1.496l1.046-1.496 1.046 1.496c.56.831 1.159 1.496 1.308 1.496.15 0 .262-1.994.262-4.432v-4.432h2.952c4.11 0 4.148-.055 4.148-10.914 0-4.986-.15-8.531-.374-8.753-.224-.221-.373 1.274-.373 4.1v4.487H35.57c-.934 0-1.682.222-1.682.554 0 .277.748.554 1.682.554h1.682v3.546c0 5.318 0 5.318-3.401 5.318H30.9v-2.16c0-1.607.224-2.438.747-2.992.673-.72.785-1.274.673-4.598l-.112-3.712-2.055-1.662-2.056-1.662-1.868 1.662-1.869 1.606-.112 3.768c-.112 3.324 0 3.878.673 4.598.523.554.747 1.385.747 2.992v2.16h-7.623c-8.707 0-8.072.388-8.072-5.318v-3.546h6.353c3.998 0 6.353-.221 6.353-.554 0-.332-2.355-.554-6.353-.554H9.973l-.075-11.412c-.074-6.26-.224-11.191-.373-10.97zm20.478 18.281c1.644 1.44 1.644 1.44 1.644 4.543v3.158l-1.719 1.33-1.719 1.385-1.644-1.33-1.644-1.385V44.47c0-3.102 0-3.157 1.607-4.543.86-.775 1.607-1.44 1.681-1.44.075 0 .86.665 1.794 1.44zm-.822 11.025l.971-.942V61.92l-.934-1.274-.934-1.274-.934 1.274-.934 1.274v-11.8l.896.831c.86.831 1.01.831 1.869 0z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M27.91 41.81c0 .277.337.776.747 1.108.449.333.748 1.163.748 1.94 0 .775.186 1.384.373 1.384.747 0 .374-3.268-.448-4.1-.971-.997-1.42-1.108-1.42-.332zM14.084 21.866c0 .277.672.554 1.532.554.896 0 1.42-.221 1.27-.554-.112-.332-.822-.554-1.532-.554-.71 0-1.27.222-1.27.554zM18.755 21.866c-.15.388 2.504.554 7.623.554 5.008 0 7.885-.221 7.885-.554 0-.332-2.803-.554-7.623-.554-4.709 0-7.736.222-7.885.554zM12.776 27.406c.15.333 2.803.554 6.726.554 3.924 0 6.577-.221 6.727-.554.15-.388-2.168-.554-6.727-.554s-6.875.166-6.726.554zM27.91 27.406c0 .333 1.308.554 3.177.554 1.868 0 3.176-.221 3.176-.554 0-.332-1.308-.554-3.176-.554-1.869 0-3.177.222-3.177.554zM12.963 32.392c0 .333 3.25.554 8.968.554s8.969-.221 8.969-.554c0-.332-3.251-.554-8.969-.554-5.717 0-8.968.222-8.968.554z",
      fill: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSmartContractİcon);

/***/ }),

/***/ "./components/icons/Twitter.js":
/*!*************************************!*\
  !*** ./components/icons/Twitter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Twitter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgTwitter(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M27.14 7.25c-.931.423-1.934.7-2.973.834a5.194 5.194 0 002.271-2.876 10.44 10.44 0 01-3.286 1.269c-.955-1.04-2.296-1.644-3.819-1.644-2.84 0-5.16 2.32-5.16 5.184 0 .411.05.81.134 1.184A14.735 14.735 0 013.625 5.788a5.128 5.128 0 00-.7 2.598c0 1.8.905 3.395 2.307 4.302-.858 0-1.655-.242-2.356-.605v.037a5.188 5.188 0 004.157 5.087 5.1 5.1 0 01-2.333.084 5.172 5.172 0 004.834 3.601 10.296 10.296 0 01-6.44 2.224c-.411 0-.822-.025-1.233-.073a14.675 14.675 0 007.95 2.332c9.522 0 14.754-7.902 14.754-14.754 0-.23 0-.447-.012-.676A10.359 10.359 0 0027.14 7.25z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTwitter);

/***/ }),

/***/ "./components/icons/Upload.js":
/*!************************************!*\
  !*** ./components/icons/Upload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Upload.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgUpload(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M244.1 1.6c-12.7 3.4-15.5 5.7-52.8 42.8-38.6 38.5-39.5 39.6-39.5 50.5 0 17 15.4 28.4 31.8 23.6 5.6-1.6 6.9-2.7 26.7-22.3L231 75.6v130.6c0 141.8-.3 134.6 5.5 142.2 1.4 1.8 4.9 4.6 7.7 6.2 13.6 7.5 30.5.6 35.6-14.5.9-2.5 1.2-37.6 1.2-133.9V75.6l20.8 20.6c19.7 19.6 21 20.7 26.5 22.3 10 2.9 19 .3 25.9-7.3 4.4-4.8 6.2-10 6.2-17.3-.1-9.7-2.3-12.4-40.3-50.1-28-27.8-35.8-35-40.7-37.6-11.6-6-24-7.7-35.3-4.6z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M16.1 232.7c-6.2 2.2-12.4 8.7-14.6 15.3-1.5 4.6-1.7 7.4-1.1 19.4 2.2 47.6 16.8 92.1 42.8 130.8 19.3 28.9 48.7 57.2 77.8 75.3 69.4 43 154.2 50.3 230.7 20 32.6-12.9 61.4-32.5 87.8-59.6 44.3-45.5 69.3-103.2 72.2-166.7.7-16.8-.6-22.1-7.2-28.7-9.8-9.8-25.2-9.8-35 0-5.5 5.5-7.2 11-7.9 26.5-.8 16-2.8 29.5-6.7 44-19.3 72.4-77.5 129.4-150.2 147-109.6 26.6-220.1-39.9-248.2-149.4-3.5-13.8-6.5-35.3-6.5-47.2 0-9.3-2.3-15.7-7.5-20.9-6.9-7-16.9-9.1-26.4-5.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgUpload);

/***/ }),

/***/ "./components/icons/Vector.js":
/*!************************************!*\
  !*** ./components/icons/Vector.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Vector.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgVector(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M23.988 9.138h-1.713v-2.61C22.275 2.923 18.437 0 13.708 0 8.977 0 5.14 2.924 5.14 6.527v2.611H3.427C1.542 9.138 0 10.313 0 11.75v13.055c0 1.436 1.542 2.611 3.427 2.611h20.561c1.885 0 3.427-1.175 3.427-2.611V11.749c0-1.436-1.542-2.61-3.427-2.61zm-15.42-2.61c0-2.168 2.295-3.917 5.14-3.917 2.844 0 5.14 1.75 5.14 3.916v2.611H8.568v-2.61zm15.42 18.276H3.427V11.749h20.561v13.055zm-10.28-3.916c1.884 0 3.426-1.175 3.426-2.611 0-1.436-1.542-2.611-3.427-2.611-1.884 0-3.426 1.175-3.426 2.61 0 1.437 1.542 2.612 3.426 2.612z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M23.988 9.138h-1.713v-2.61C22.275 2.923 18.437 0 13.708 0 8.977 0 5.14 2.924 5.14 6.527v2.611H3.427C1.542 9.138 0 10.313 0 11.75v13.055c0 1.436 1.542 2.611 3.427 2.611h20.561c1.885 0 3.427-1.175 3.427-2.611V11.749c0-1.436-1.542-2.61-3.427-2.61zm-15.42-2.61c0-2.168 2.295-3.917 5.14-3.917 2.844 0 5.14 1.75 5.14 3.916v2.611H8.568v-2.61zm15.42 18.276H3.427V11.749h20.561v13.055zm-10.28-3.916c1.884 0 3.426-1.175 3.426-2.611 0-1.436-1.542-2.611-3.427-2.611-1.884 0-3.426 1.175-3.426 2.61 0 1.437 1.542 2.612 3.426 2.612z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgVector);

/***/ }),

/***/ "./components/icons/Youtube.js":
/*!*************************************!*\
  !*** ./components/icons/Youtube.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\Youtube.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgYoutube(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M12.083 18.125l6.272-3.625-6.272-3.625v7.25zm13.969-9.461c.157.568.265 1.329.338 2.296.084.966.12 1.8.12 2.525l.073 1.015c0 2.646-.193 4.592-.531 5.836-.302 1.088-1.003 1.789-2.09 2.09-.569.158-1.608.267-3.203.339-1.57.084-3.009.12-4.338.12l-1.921.073c-5.063 0-8.217-.193-9.461-.531-1.088-.302-1.789-1.003-2.09-2.09-.158-.569-.267-1.33-.339-2.297-.085-.966-.12-1.8-.12-2.525L2.416 14.5c0-2.646.193-4.592.531-5.836.302-1.088 1.003-1.789 2.09-2.09.569-.158 1.608-.267 3.203-.339 1.57-.085 3.008-.12 4.338-.12l1.921-.073c5.063 0 8.217.193 9.461.531 1.088.302 1.789 1.003 2.09 2.09z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgYoutube);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStore": () => (/* reexport safe */ _AppStore__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "CheckSquare": () => (/* reexport safe */ _CheckSquare__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Discord": () => (/* reexport safe */ _Discord__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "DownArrow": () => (/* reexport safe */ _DownArrow__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "DropDownİcon": () => (/* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "DropDown": () => (/* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "EthLogo": () => (/* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Facebook": () => (/* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "Fingerprint": () => (/* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "GooglePlayStore": () => (/* reexport safe */ _GooglePlayStore__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "HomepageOption": () => (/* reexport safe */ _HomepageOption__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "İconmonstrCheckbox14": () => (/* reexport safe */ _conmonstrCheckbox14__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "İconmonstrCheckbox6": () => (/* reexport safe */ _conmonstrCheckbox6__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "İnstagram": () => (/* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "Linkdn": () => (/* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "Mail": () => (/* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "Media": () => (/* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "MetaData": () => (/* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "OpenseaLogo": () => (/* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "QrCode": () => (/* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "RaribleLogo": () => (/* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_20__.default),
/* harmony export */   "SavingsPig": () => (/* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_21__.default),
/* harmony export */   "SmartContractİcon": () => (/* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_22__.default),
/* harmony export */   "Twitter": () => (/* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_23__.default),
/* harmony export */   "Upload": () => (/* reexport safe */ _Upload__WEBPACK_IMPORTED_MODULE_24__.default),
/* harmony export */   "Vector": () => (/* reexport safe */ _Vector__WEBPACK_IMPORTED_MODULE_25__.default),
/* harmony export */   "Youtube": () => (/* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_26__.default)
/* harmony export */ });
/* harmony import */ var _AppStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppStore */ "./components/icons/AppStore.js");
/* harmony import */ var _CheckSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckSquare */ "./components/icons/CheckSquare.js");
/* harmony import */ var _Discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discord */ "./components/icons/Discord.js");
/* harmony import */ var _DownArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DownArrow */ "./components/icons/DownArrow.js");
/* harmony import */ var _DropDown_con__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownİcon */ "./components/icons/DropDownİcon.js");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropDown */ "./components/icons/DropDown.js");
/* harmony import */ var _EthLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EthLogo */ "./components/icons/EthLogo.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Facebook */ "./components/icons/Facebook.js");
/* harmony import */ var _Fingerprint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fingerprint */ "./components/icons/Fingerprint.js");
/* harmony import */ var _GooglePlayStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GooglePlayStore */ "./components/icons/GooglePlayStore.js");
/* harmony import */ var _HomepageOption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomepageOption */ "./components/icons/HomepageOption.js");
/* harmony import */ var _conmonstrCheckbox14__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./İconmonstrCheckbox14 */ "./components/icons/İconmonstrCheckbox14.js");
/* harmony import */ var _conmonstrCheckbox6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./İconmonstrCheckbox6 */ "./components/icons/İconmonstrCheckbox6.js");
/* harmony import */ var _nstagram__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./İnstagram */ "./components/icons/İnstagram.js");
/* harmony import */ var _Linkdn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Linkdn */ "./components/icons/Linkdn.js");
/* harmony import */ var _Mail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Mail */ "./components/icons/Mail.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Media */ "./components/icons/Media.js");
/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MetaData */ "./components/icons/MetaData.js");
/* harmony import */ var _OpenseaLogo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./OpenseaLogo */ "./components/icons/OpenseaLogo.js");
/* harmony import */ var _QrCode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./QrCode */ "./components/icons/QrCode.js");
/* harmony import */ var _RaribleLogo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RaribleLogo */ "./components/icons/RaribleLogo.js");
/* harmony import */ var _SavingsPig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SavingsPig */ "./components/icons/SavingsPig.js");
/* harmony import */ var _SmartContract_con__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SmartContractİcon */ "./components/icons/SmartContractİcon.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Twitter */ "./components/icons/Twitter.js");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Upload */ "./components/icons/Upload.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Vector */ "./components/icons/Vector.js");
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Youtube */ "./components/icons/Youtube.js");




























/***/ }),

/***/ "./components/icons/İconmonstrCheckbox14.js":
/*!**************************************************!*\
  !*** ./components/icons/İconmonstrCheckbox14.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\\u0130conmonstrCheckbox14.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgİconmonstrCheckbox14(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M22 2v20H2V2h20zm2-2H0v24h24V0zm-6 16.538l-4.592-4.548 4.546-4.587L16.538 6l-4.545 4.589-4.588-4.543L6 7.451l4.593 4.552-4.547 4.592L7.451 18l4.555-4.596 4.591 4.55L18 16.538z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgİconmonstrCheckbox14);

/***/ }),

/***/ "./components/icons/İconmonstrCheckbox6.js":
/*!*************************************************!*\
  !*** ./components/icons/İconmonstrCheckbox6.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\\u0130conmonstrCheckbox6.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SvgİconmonstrCheckbox6(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M22 2v20H2V2h20zm2-2H0v24h24V0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgİconmonstrCheckbox6);

/***/ }),

/***/ "./components/icons/İnstagram.js":
/*!***************************************!*\
  !*** ./components/icons/İnstagram.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\icons\\\u0130nstagram.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Svgİnstagram(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 29 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M9.425 2.417h10.15a7.013 7.013 0 017.008 7.008v10.15a7.008 7.008 0 01-7.008 7.008H9.425a7.013 7.013 0 01-7.008-7.008V9.425a7.008 7.008 0 017.008-7.008zm-.242 2.416a4.35 4.35 0 00-4.35 4.35v10.634a4.347 4.347 0 004.35 4.35h10.634a4.35 4.35 0 004.35-4.35V9.183a4.347 4.347 0 00-4.35-4.35H9.183zm11.66 1.813a1.51 1.51 0 110 3.02 1.51 1.51 0 010-3.02zM14.5 8.458a6.042 6.042 0 110 12.084 6.042 6.042 0 010-12.084zm0 2.417a3.625 3.625 0 100 7.25 3.625 3.625 0 000-7.25z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svgİnstagram);

/***/ }),

/***/ "./components/layout/HomePage/index.js":
/*!*********************************************!*\
  !*** ./components/layout/HomePage/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hook/useWindowSize */ "./hook/useWindowSize.js");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/HomePage/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant */ "./constant/index.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../row/exhibitionSide */ "./components/row/exhibitionSide.js");
/* harmony import */ var _row_quotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../row/quotation */ "./components/row/quotation.js");
/* harmony import */ var _row_reasonSide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../row/reasonSide */ "./components/row/reasonSide.js");
/* harmony import */ var _row_getStarted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../row/getStarted */ "./components/row/getStarted.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../footer/index */ "./components/footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\HomePage\\index.js";












function Layout() {
  const size = (0,_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default)();
  return (
    /*#__PURE__*/

    /* Layout */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().layout),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().navigation),
        children: size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
          flat: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 23
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().exhibition),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().reasonSide),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_reasonSide__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().getStarted),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_row_getStarted__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_footer_index__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/

/***/ }),

/***/ "./components/navigation/button.js":
/*!*****************************************!*\
  !*** ./components/navigation/button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.module.css */ "./components/navigation/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children", "href"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function NavigationLink(_ref) {
  let {
    children,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav),
    href: href,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationLink);

/***/ }),

/***/ "./components/navigation/footer.js":
/*!*****************************************!*\
  !*** ./components/navigation/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.module.css */ "./components/navigation/footer.module.css");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\footer.js";






function FooterNavigation() {
  return _constant__WEBPACK_IMPORTED_MODULE_2__.FOOTERMENU.map(menu => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().Nav),
      size: "14px",
      children: menu.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }, this);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterNavigation);

/***/ }),

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _button_icon_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/icon/index */ "./components/button/icon/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";










function Navigation({
  flat = false
}) {
  return (
    /*#__PURE__*/

    /* Navigator */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("header", {
      className: `
    ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiPaperRoot)} 
    ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiAppBarRoot)} 
    ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiAppBarPositionAbsolute)} 
    ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiAppBarColorDefault)} 
    ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().cssHeader)} 
    ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiPaperElevation)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navigator),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().comp),
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().cssNavigator),
          children: _constant__WEBPACK_IMPORTED_MODULE_4__.MENU.map(menu => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: `
                       ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiButtonBaseRoot)} 
                       ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiListItemRoot)} 
                       ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().cssNavigatorContent)} 
                       ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiListItemGutters)} 
                       ${(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().muiListItemButton)}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
                className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().subBtn),
                href: menu.href,
                children: !flat && menu.title
              }, menu.key, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 24
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().iconButtonContent),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button_icon_index__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./components/photo/index.js":
/*!***********************************!*\
  !*** ./components/photo/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ "./components/photo/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\photo\\index.js";




function link({
  src,
  alt,
  href
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().photo),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),
      src: src,
      alt: alt,
      href: href
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

function markLink({
  src,
  alt,
  href
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().markLink),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().mark),
      src: src,
      alt: alt,
      href: href
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

function Photo({
  src = "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fjpierce%2Fj-pierce-promo-black-01.png?alt=media&token=5cf0cf0f-31fa-4ef2-9f21-eaa13659567b",
  alt,
  width = 470,
  height = 292,
  mark = false,
  className,
  href = "/"
}) {
  const Comp = mark ? markLink : link;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Comp, {
    src: src,
    className: className,
    alt: alt,
    href: href
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);

/***/ }),

/***/ "./components/row/exhibitionSide.js":
/*!******************************************!*\
  !*** ./components/row/exhibitionSide.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exhibitionSide.module.css */ "./components/row/exhibitionSide.module.css");
/* harmony import */ var _exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _photo_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photo/index */ "./components/photo/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _frame_mintButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/mintButton */ "./components/frame/mintButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\exhibitionSide.js";







function Exhibition() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("article", {
    className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().row),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().advert),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().advertHeader),
          bold: true,
          children: "CA$H Cows"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subHeaderLink),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
            size: "22px",
            children: "Now Minting: Chic-A-Dees,First NFTs to Generate EGGS Tokens"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_frame_mintButton__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintButton),
          children: "MINT "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().photoExhibition),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().photos),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {
            className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgExhibit)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {
            className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgExhibit),
            src: "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fchicadees%2Fcashcows.png?alt=media&token=60ef4aa7-42c9-47de-82a6-b719953749c3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().owner),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subOwner),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
              size: "12px",
              bold: true,
              children: "UPCOMING COLLECTION:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
              size: "12px",
              children: "J.Pierce and Friends - Hand Painted and Signed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exhibition);

/***/ }),

/***/ "./components/row/getStarted.js":
/*!**************************************!*\
  !*** ./components/row/getStarted.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _getStarted_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getStarted.module.css */ "./components/row/getStarted.module.css");
/* harmony import */ var _getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _frame_getStartedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frame/getStartedButton */ "./components/frame/getStartedButton.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo */ "./components/photo/index.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\getStarted.js";








function GetStarted() {
  return (
    /*#__PURE__*/

    /* Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().span),
          children: "Ownable-NS "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), "for Business"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image),
          src: "https://ownerfy.com/img/home/suitcase.jpg",
          width: "345px",
          height: "207.986"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedTextSide),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().nftExplain),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().Span),
              children: "NFT QR codes "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 55
            }, this), "authenticate, add value and prevent ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 57
            }, this), "counterfitting of goods."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().nftCreator),
            children: "Create NFTs for your business, large or small."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_frame_getStartedButton__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedButton),
            border: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().GetStartedButtonText),
              bold: true,
              children: "GET STARTED"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetStarted);

/***/ }),

/***/ "./components/row/quotation.js":
/*!*************************************!*\
  !*** ./components/row/quotation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Photos_opensea_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Photos/opensea-logo.svg */ "./Photos/opensea-logo.svg");
/* harmony import */ var _Photos_rarible_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Photos/rarible-logo.svg */ "./Photos/rarible-logo.svg");
/* harmony import */ var _quotation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quotation.module.css */ "./components/row/quotation.module.css");
/* harmony import */ var _quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_quotation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\quotation.js";










function Quotation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().quo),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().marketPlaceSide),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().placeSide),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().quoHeaderText),
            bold: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().Span),
              children: "Ownable-NS "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 33
            }, this), "NFTs are traded on the largest NFT marketplaces"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().quoMiddleText),
            children: "Trade Ownable-NS created on marketplace platforms."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_8___default().quoHeaderText)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quotation);

/***/ }),

/***/ "./components/row/reasonSide.js":
/*!**************************************!*\
  !*** ./components/row/reasonSide.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var _reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reasonSide.module.css */ "./components/row/reasonSide.module.css");
/* harmony import */ var _reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _photo_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo/index */ "./components/photo/index.js");
/* harmony import */ var _form_reasonSide_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/reasonSide/index */ "./components/form/reasonSide/index.js");
/* harmony import */ var _Photos_reasonSidePhoto_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Photos/reasonSidePhoto.png */ "./Photos/reasonSidePhoto.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\reasonSide.js";









function ReasonSide() {
  return (
    /*#__PURE__*/

    /* Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().reasonContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().reasonHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().reasonHeaderText),
            bold: true,
            children: ["Reasons to NFT Everything with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().Span),
              children: "Ownable-NS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 109
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().Line)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().middleContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().reasonTextSide),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_form_reasonSide_index__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().reastImageSide),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_3__.default, {
              className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().photo),
              src: "https://ownerfy.com/img/home/valuables.svg",
              width: "831.997px",
              height: "138.993px",
              height: "139",
              alt: "reasonside"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().footerContainer),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_7___default().footerText),
            size: "18px",
            opacity: "0.6",
            children: "NFT is permanent immutable record of who owns anything of value"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReasonSide);

/***/ }),

/***/ "./components/text/head-title.js":
/*!***************************************!*\
  !*** ./components/text/head-title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-title.module.css */ "./components/text/head-title.module.css");
/* harmony import */ var _head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text\\head-title.js";





function HeadTitle({
  bold = false,
  className,
  children,
  size = 20,
  opacity = 1
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_head_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold), className]),
    style: {
      fontSize: size,
      opacity: opacity
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadTitle);
/*
    cn stand for classnames: 'Classnames'  is prevent class overwrite. It comes more than one class into function, it's reason about conflict. 
    bold: Some text has bold font weight, but some it hasn't. When text has bold font weight properties, bold properties will have been activated.
*/

/***/ }),

/***/ "./components/text/text-title.js":
/*!***************************************!*\
  !*** ./components/text/text-title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title.module.css */ "./components/text/text-title.module.css");
/* harmony import */ var _text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\text\\text-title.js";





function TextTitle({
  bold = false,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().Title), bold && (_text_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold)]),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextTitle);

/***/ }),

/***/ "./constant/index.js":
/*!***************************!*\
  !*** ./constant/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "makeNFTOption": () => (/* binding */ makeNFTOption),
/* harmony export */   "BUSINESS": () => (/* binding */ BUSINESS),
/* harmony export */   "INFO": () => (/* binding */ INFO),
/* harmony export */   "FOOTERMENU": () => (/* binding */ FOOTERMENU),
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  TABLET_SIZE: 943,
  DESKTOP_SIZE: 1270
});
const makeNFTOption = [{
  key: 'NFT',
  title: 'NFT(Non Fungible Token)'
}, {
  key: 'FT',
  title: 'FT(Fungible Token)'
}];
const BUSINESS = [{
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
const INFO = [{
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
const FOOTERMENU = [{
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
const MENU = [{
  key: 'make-an-nft',
  icon: '',
  title: 'Make an NFT',
  href: '/makeNft'
}, {
  key: 'business-signup',
  icon: '',
  title: 'Business Signup',
  href: '/businessSignUp'
}, {
  key: 'Subscribe-for-upcoming-drops',
  icon: '',
  title: 'Subscribe for Upcoming Drops',
  href: '/subscribeForUpcomingDrops'
}, {
  key: 'nft-standards',
  icon: '',
  title: 'NFT Standards',
  href: '/nftStandards'
}, {
  key: 'download-nft-creator',
  icon: '',
  title: 'Download NFT Creator',
  href: '/downloadNFTCreator'
}];

/***/ }),

/***/ "./hook/useWindowSize.js":
/*!*******************************!*\
  !*** ./hook/useWindowSize.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Hook

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const {
    0: windowSize,
    1: setWindowSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: undefined,
    height: undefined
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_HomePage_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/HomePage/index */ "./components/layout/HomePage/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\index.js";




function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_HomePage_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./Photos/opensea-logo.svg":
/*!*********************************!*\
  !*** ./Photos/opensea-logo.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/Photos/opensea-logo.8c332801e509f9eb136d1c13ebf1cbc9.svg","height":116,"width":116});

/***/ }),

/***/ "./Photos/rarible-logo.svg":
/*!*********************************!*\
  !*** ./Photos/rarible-logo.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/Photos/rarible-logo.76c18f97424b923993703721717f0e76.svg","height":40,"width":40});

/***/ }),

/***/ "./Photos/reasonSidePhoto.png":
/*!************************************!*\
  !*** ./Photos/reasonSidePhoto.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/Photos/reasonSidePhoto.8d6e91470d55dd420cc2a9f9eac9d799.png","height":139,"width":832,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2FPhotos%2FreasonSidePhoto.8d6e91470d55dd420cc2a9f9eac9d799.png&w=8&q=70"});

/***/ }),

/***/ "./components/button/base/style.module.css":
/*!*************************************************!*\
  !*** ./components/button/base/style.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"muiButtonBaseRoot": "style_muiButtonBaseRoot__1LcDR",
	"muiButtonRoot": "style_muiButtonRoot__SM9w7",
	"muiButtonContained": "style_muiButtonContained__1fhLF",
	"muiButtonContainedPrimary": "style_muiButtonContainedPrimary__1tOOE",
	"cssBorderButton": "style_cssBorderButton__reOtN",
	"muiButtonLabel": "style_muiButtonLabel__pHcxV"
};


/***/ }),

/***/ "./components/button/icon/style.module.css":
/*!*************************************************!*\
  !*** ./components/button/icon/style.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"muiButtonBaseRoot": "style_muiButtonBaseRoot__Rm9d5",
	"muiIconButtonRoot": "style_muiIconButtonRoot__cZuv6",
	"muiIconButtonColorInherit": "style_muiIconButtonColorInherit__3CsnO",
	"cssIconButton": "style_cssIconButton__xIYr6",
	"muiIconButtonLabel": "style_muiIconButtonLabel__crxYi",
	"muiSvgIconRoot": "style_muiSvgIconRoot__3T1rY"
};


/***/ }),

/***/ "./components/footer/style.module.css":
/*!********************************************!*\
  !*** ./components/footer/style.module.css ***!
  \********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "style_footerContainer__A3x50",
	"content": "style_content__1roRx",
	"mainContainer": "style_mainContainer__2MaPH",
	"container": "style_container__2TqkP",
	"leftSideOfContainer": "style_leftSideOfContainer__3mddl",
	"footerMenu": "style_footerMenu__1wBcR",
	"copyText": "style_copyText__29REo",
	"Icons": "style_Icons__1yM_T",
	"joinText": "style_joinText__36bbU",
	"rightSideOfContainer": "style_rightSideOfContainer__3HmrY"
};


/***/ }),

/***/ "./components/form/reasonSide/style.module.css":
/*!*****************************************************!*\
  !*** ./components/form/reasonSide/style.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"reasonSideContainer": "style_reasonSideContainer__1Inmo"
};


/***/ }),

/***/ "./components/frame/frameButton.module.css":
/*!*************************************************!*\
  !*** ./components/frame/frameButton.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"muiButtonBaseRoot": "frameButton_muiButtonBaseRoot__yiQNU",
	"muiButtonRoot": "frameButton_muiButtonRoot__3Fe0V",
	"muiButtonOutlined": "frameButton_muiButtonOutlined___D9BA",
	"cssButtonContent": "frameButton_cssButtonContent__2aVje",
	"muiButtonLabel": "frameButton_muiButtonLabel__nS41k",
	"cssMenuIcon": "frameButton_cssMenuIcon__3pwFd"
};


/***/ }),

/***/ "./components/frame/getStartedButton.module.css":
/*!******************************************************!*\
  !*** ./components/frame/getStartedButton.module.css ***!
  \******************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"getStartedButton": "getStartedButton_getStartedButton__16l0h"
};


/***/ }),

/***/ "./components/frame/mintButton.module.css":
/*!************************************************!*\
  !*** ./components/frame/mintButton.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"mintButton": "mintButton_mintButton__2IVdW"
};


/***/ }),

/***/ "./components/layout/HomePage/style.module.css":
/*!*****************************************************!*\
  !*** ./components/layout/HomePage/style.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "style_layout__1UX6O"
};


/***/ }),

/***/ "./components/navigation/button.module.css":
/*!*************************************************!*\
  !*** ./components/navigation/button.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "button_nav__1P2ZB"
};


/***/ }),

/***/ "./components/navigation/footer.module.css":
/*!*************************************************!*\
  !*** ./components/navigation/footer.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Nav": "footer_Nav__1qsIG"
};


/***/ }),

/***/ "./components/navigation/navigation.module.css":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"muiPaperRoot": "navigation_muiPaperRoot__1EMWa",
	"muiPaperElevation": "navigation_muiPaperElevation__2Ziwj",
	"muiAppBarRoot": "navigation_muiAppBarRoot__29aLs",
	"muiAppBarPositionAbsolute": "navigation_muiAppBarPositionAbsolute__wdDgH",
	"muiAppBarColorDefault": "navigation_muiAppBarColorDefault__3cefa",
	"cssHeader": "navigation_cssHeader__16jMJ",
	"navigator": "navigation_navigator__2CchN",
	"cssNavigator": "navigation_cssNavigator__1iwjt",
	"muiButtonBaseRoot": "navigation_muiButtonBaseRoot__38M4-",
	"muiListItemRoot": "navigation_muiListItemRoot__2SYhn",
	"muiListItemGutters": "navigation_muiListItemGutters__QZetI",
	"muiListItemButton": "navigation_muiListItemButton__3772T",
	"cssNavigatorContent": "navigation_cssNavigatorContent__TPrtg",
	"iconButtonContent": "navigation_iconButtonContent__3rAEo"
};


/***/ }),

/***/ "./components/photo/index.module.css":
/*!*******************************************!*\
  !*** ./components/photo/index.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"img": "photo_img__1nYXD",
	"markLink": "photo_markLink__3ALOb",
	"Mark": "photo_Mark__23NJo"
};


/***/ }),

/***/ "./components/row/exhibitionSide.module.css":
/*!**************************************************!*\
  !*** ./components/row/exhibitionSide.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "exhibitionSide_container__3QjKN",
	"row": "exhibitionSide_row__3ovsa",
	"advert": "exhibitionSide_advert__M4tyZ",
	"advertHeader": "exhibitionSide_advertHeader__3laZ2",
	"subHeaderLink": "exhibitionSide_subHeaderLink__3HjkC",
	"subText": "exhibitionSide_subText__3UNcl",
	"mintButton": "exhibitionSide_mintButton__17trM",
	"photoExhibition": "exhibitionSide_photoExhibition__1Zq07",
	"photos": "exhibitionSide_photos__2J5wx",
	"subOwner": "exhibitionSide_subOwner__2asPr"
};


/***/ }),

/***/ "./components/row/getStarted.module.css":
/*!**********************************************!*\
  !*** ./components/row/getStarted.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"getStartedContainer": "getStarted_getStartedContainer__3vOml",
	"header": "getStarted_header__Qu3cQ",
	"span": "getStarted_span__3ZoMS",
	"content": "getStarted_content__2InLG",
	"Image": "getStarted_Image__2Uv5d",
	"getStartedTextSide": "getStarted_getStartedTextSide__1mApo",
	"nftExplain": "getStarted_nftExplain__3TsiG",
	"nftCreator": "getStarted_nftCreator__3BIK1"
};


/***/ }),

/***/ "./components/row/quotation.module.css":
/*!*********************************************!*\
  !*** ./components/row/quotation.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"quo": "quotation_quo__F-Q0q",
	"content": "quotation_content__214Pj",
	"marketPlaceSide": "quotation_marketPlaceSide__2qekA",
	"placeSide": "quotation_placeSide__2Tyn4",
	"quoHeaderText": "quotation_quoHeaderText__1ivC3",
	"Span": "quotation_Span__2jHjL",
	"quoMiddleText": "quotation_quoMiddleText__3g59f",
	"rariable": "quotation_rariable__31hC4",
	"quoIcons": "quotation_quoIcons__3ySk1"
};


/***/ }),

/***/ "./components/row/reasonSide.module.css":
/*!**********************************************!*\
  !*** ./components/row/reasonSide.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"reasonContainer": "reasonSide_reasonContainer__1ortc",
	"content": "reasonSide_content__2cs_c",
	"reasonHeader": "reasonSide_reasonHeader__2rQNr",
	"reasonHeaderText": "reasonSide_reasonHeaderText__14_RL",
	"middleContainer": "reasonSide_middleContainer__3jc65",
	"reasonTextSide": "reasonSide_reasonTextSide__1NdZT",
	"footerContainer": "reasonSide_footerContainer__3_B3B"
};


/***/ }),

/***/ "./components/text/head-title.module.css":
/*!***********************************************!*\
  !*** ./components/text/head-title.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Title": "head-title_Title__3mwXg",
	"bold": "head-title_bold__12sGy"
};


/***/ }),

/***/ "./components/text/text-title.module.css":
/*!***********************************************!*\
  !*** ./components/text/text-title.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Title": "text-title_Title__6Kb9h",
	"bold": "text-title_bold__pS28u"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQSwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZm9ybS9yZWFzb25TaWRlL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2dldFN0YXJ0ZWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvbWludEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9DaGVja1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9EaXNjb3JkLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Rvd25BcnJvdy5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ecm9wRG93bi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ecm9wRG93bsSwY29uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0V0aExvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRmFjZWJvb2suanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRmluZ2VycHJpbnQuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvR29vZ2xlUGxheVN0b3JlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0hvbWVwYWdlT3B0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0xpbmtkbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9NYWlsLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01lZGlhLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01ldGFEYXRhLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL09wZW5zZWFMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1FyQ29kZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9SYXJpYmxlTG9nby5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9TYXZpbmdzUGlnLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1NtYXJ0Q29udHJhY3TEsGNvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ud2l0dGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvWW91dHViZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy/EsGNvbm1vbnN0ckNoZWNrYm94MTQuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBjb25tb25zdHJDaGVja2JveDYuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBuc3RhZ3JhbS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Bob3RvL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9leGhpYml0aW9uU2lkZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvZ2V0U3RhcnRlZC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvcXVvdGF0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9yZWFzb25TaWRlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvaGVhZC10aXRsZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L3RleHQtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbnN0YW50L2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ob29rL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL1Bob3Rvcy9vcGVuc2VhLWxvZ28uc3ZnIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9QaG90b3MvcmFyaWJsZS1sb2dvLnN2ZyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vUGhvdG9zL3JlYXNvblNpZGVQaG90by5wbmciLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2Uvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vaWNvbi9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvb3Rlci9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvcm0vcmVhc29uU2lkZS9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZ2V0U3RhcnRlZEJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL21pbnRCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2Uvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcGhvdG8vaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvZXhoaWJpdGlvblNpZGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvZ2V0U3RhcnRlZC5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9xdW90YXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvcmVhc29uU2lkZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvaGVhZC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9pZ25vcmVkfEM6XFxVc2Vyc1xcbW11Y2FcXERvY3VtZW50c1xcR2l0SHViXFxPd25hYmxlLU5GVC1TZXJ2aWNlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5mdW5jdGlvbiBsaW5rQnV0dG9uICh7IGNoaWxkcmVuLCBocmVmLC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfSBwcm9wcz4ge2NoaWxkcmVufSA8L2E+XHJcbiAgICAgICAgPC9MaW5rPiAgXHJcbiAgICApIFxyXG59XHJcblxyXG5mdW5jdGlvbiBmcmFtZUJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLm11aUJ1dHRvbkJhc2VSb290LFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLm11aUJ1dHRvblJvb3QsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXMubXVpQnV0dG9uQ29udGFpbmVkLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLmNzc0JvcmRlckJ1dHRvbixcclxuICAgICAgICAgICAgICAgIHN0eWxlcy5tdWlCdXR0b25Db250YWluZWRQcmltYXJ5XHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubXVpQnV0dG9uTGFiZWx9PntjaGlsZHJlbn0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKSBcclxufVxyXG5cclxuZnVuY3Rpb24gYnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIGNvbnN0IENvbXAgPSBib3JkZXIgPyBmcmFtZUJ1dHRvbiA6IGxpbmtCdXR0b25cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb21wICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9Db21wPlxyXG4gICAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uXHJcblxyXG4vKlxyXG4gICAgRG9jdW1lbnQ6XHJcbiAgICAtLS0tLS0tLVxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9yZGVyOiBTb21lIGJ1dHRvbiBoYXMgYm9yZGVyLCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gYnV0dG9uIGhhcyBib3JkZXIsIGJvcmRlciBhdHRyaWJ1dGUgd2lsbCBoYXZlIGJlZW4gIGFjdGl2YXRlZC4gXHJcbiAgICBjaGlsZHJlbjogQ29udGVudCwgd2hpY2ggaW5jbHVkZSB3aXRoaW4gZWxlbWVudC5cclxuICAgIC4uLnByb3BzOiBXaGF0IGlmIEFueSBwcm9wZXJ0aWVzIGlzIHBhc3NlZCBpbnRvIGZ1bmN0aW9uLCBGdW5jdGlvbiBjYW4gY2F0Y2guXHJcblxyXG4gICAgLS0+IFdlIGhhdmUgb3B0aW9uIHRoYXQncyBpcyBkaXZpZGVkIGludG8gdHdvIG9wdGlvbi4gT25lIE9mIHRoZW0gaGFzIGltYWdlIGFuZCB0ZXh0LCBvdGhlciBvbmUgaGFzIGp1c3QgdGV4dC5cclxuICAgIC0tPiBCYXNlIEJ1dHRvbiBoYXMganVzdCB0ZXh0LlxyXG4gICAgLS0+IEJhc2UgQnV0dG9uIGlzIGRpdmlkZWQgaW50byB0d28gdmFyaWFudCBpbiBpdHNlbGYuIE9uZSBPZiB0aGVtIGhhcyBib3JkZXJzLCBvdGhlciBvbmUgaGFzbid0LiBXaGVuIGJ1dHRvbiB3YXMgY2FsbGVkIHdpdGggc2VuZGVkIHdpdGggcGFyYW1ldGVyIG5hbWVkIGJvcmRlciwgQnV0dG9uIHdpbGwgaGF2ZSBcclxuICAgIGJlZW4gYm9yZGVyLiBcclxuKi9cclxuXHJcbi8qIFxyXG4vLyBUTyBETyBMaXN0XHJcbltYXSAgZnJhbWUgYnV0dG9uIC8gVHJhbnNwYXJlbnQgLSBjb2xvclxyXG5cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uLy4uL2ljb25zJ1xyXG5cclxuZnVuY3Rpb24gSWNvbkJ1dHRvbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uQmFzZVJvb3R9IFxyXG4gICAgICAgICR7c3R5bGVzLm11aUljb25CdXR0b25Sb290fSBcclxuICAgICAgICAke3N0eWxlcy5jc3NJY29uQnV0dG9ufSBcclxuICAgICAgICAke3N0eWxlcy5jc3NJY29uQnV0dG9uQ29udGVudH0gXHJcbiAgICAgICAgJHtzdHlsZXMubXVpSWNvbkJ1dHRvbkNvbG9ySW5oZXJpdH1gfVxyXG4gICAgICAgIHRhYkluZGV4PXtcIjBcIn1cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tdWlJY29uQnV0dG9uTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgPEljb24uSG9tZXBhZ2VPcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMubXVpU3ZnSWNvblJvb3R9Lz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tICcuLi9uYXZpZ2F0aW9uL2Zvb3RlcidcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8qIENvbnRhaW5lciAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTGVmdCBTaWRlIE9mIEZvb3RlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2lkZU9mQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJY29ucyBPZiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkljb25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2J5cl9tdWNhaGl0Jz48SWNvbi5Ud2l0dGVyLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcG5lciBub3JlZmVycmVyXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL211Y2FoaXQuYmF5YXIuNzk2Jz48SWNvbi5GYWNlYm9vay8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BuZXIgbm9yZWZlcnJlclwiIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tLyc+PEljb24uWW91dHViZSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL211Y2FoaXQuYnlyci8nPjxJY29uLsSwbnN0YWdyYW0vPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbSVDMyVCQ2NhaGl0LWJheWFyLTAzODAwMDIwMC8nPjxJY29uLkxpbmtkbiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL21haWwuZ29vZ2xlLmNvbS9tYWlsL3UvMC8jaW5ib3gnPjxJY29uLk1haWwvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2J5cl9tdWNhaGl0Jz48SWNvbi5EaXNjb3JkLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRleHQgZnJvbSBsZWZ0IHNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuam9pblRleHR9IHNpemU9JzEycHgnPkpvaW4gdGhlIGNvbW11bml0eSBvZiAjb3duYWJsZS1OUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5hdmlnYXRvciBmcm9tIHJpZ2h0IHNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb3B5IGZyb20gbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlUZXh0fT5Db3B5cmlnaHQgwqkgMjAyMSBPd25hYmxlLU5TPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uLy4uL2ljb25zJ1xyXG5pbXBvcnQge0lORk99IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgVGV4dFRpdHRsZSBmcm9tICcuLi8uLi90ZXh0L3RleHQtdGl0bGUnXHJcblxyXG5mdW5jdGlvbiBSZWFzb25TaWRlRm9ybSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBJTkZPLm1hcCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvblNpZGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJY29uIFNpZGUqL31cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbi5DaGVja1NxdWFyZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFJlYXNvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0dGxlIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PntpbmZvLnRpdGxlfTwvVGV4dFRpdHRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICkgIFxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYXNvblNpZGVGb3JtXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mcmFtZUJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvblJvb3R9IFxyXG4gICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uT3V0bGluZWR9IFxyXG4gICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzQnV0dG9uQ29udGVudH1gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tdWlCdXR0b25MYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFtZUJ1dHRvblxyXG5cclxuLyogXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICA8VGV4dFRpdGxlLz46IEl0J3MgdmFyeSBvZiB0ZXh0LCBJdCBqdXN0IGhhcyBzb21lIHNwZWNpZmljIGF0dHJpYnV0ZSBzdWNoIGFzIDE2IHB4IGZvbnQgc2l6ZSwgYW5kIGJvbGQgZm9udCB3aWdodC5cclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nZXRTdGFydGVkQnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Jhc2UvaW5kZXgnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gR2V0U3RhcnRlZEJ1dHRvbih7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkQnV0dG9ufSBcclxuICAgICAgICBib3JkZXI+XHJcbiAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0U3RhcnRlZEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWludEJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9iYXNlL2luZGV4J1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuXHJcblxyXG5mdW5jdGlvbiBNaW50QnV0dG9uICh7IGNoaWxkcmVuLCBjbGFzc05hbWV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiAgY2xhc3NOYW1lPXtjbihzdHlsZXMubWludEJ1dHRvbiwgY2xhc3NOYW1lKX0gYm9yZGVyPlxyXG4gICAgICAgICAgICA8VGV4dFRpdGxlIGJvbGQ+e2NoaWxkcmVufTwvVGV4dFRpdGxlPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgICApfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcHBTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjYXBwLXN0b3JlX3N2Z19fY2xpcDBfNTE6NTAxKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjMxLjQ2MSA3MS4wOUg4LjQwN0MzLjc3MiA3MS4wOSAwIDY3LjMwOCAwIDYyLjY3OFY4LjRDMCAzLjc2OCAzLjc3MiAwIDguNDA3IDBoMjIzLjA1NEMyMzYuMDk0IDAgMjQwIDMuNzY4IDI0MCA4LjR2NTQuMjc4YzAgNC42My0zLjkwNiA4LjQxMi04LjUzOSA4LjQxMnpcIlxuICAgICAgICAgIGZpbGw9XCIjQTZBNkE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIzOC4yNzkgNjIuNjhhNi44MDggNi44MDggMCAwMS02LjgxNiA2LjgwN0g4LjQwN2MtMy43NjcgMC02LjgyNS0zLjA0Ni02LjgyNS02LjgwN1Y4LjM5OGMwLTMuNzYgMy4wNTgtNi44MTYgNi44MjUtNi44MTZoMjIzLjA1NGE2LjgxNSA2LjgxNSAwIDAxNi44MTYgNi44MTZsLjAwMiA1NC4yODJ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01My41NiAzNS4xNjFjLS4wNS01LjcyOCA0LjY5Mi04LjUxNSA0LjkxLTguNjQ0LTIuNjg3LTMuOTE2LTYuODUtNC40NS04LjMxNC00LjQ5My0zLjQ5Ni0uMzY4LTYuODg5IDIuMDkxLTguNjcgMi4wOTEtMS44MTcgMC00LjU2LTIuMDU2LTcuNTE2LTEuOTk1LTMuODA1LjA1OC03LjM2NCAyLjI2LTkuMzE2IDUuNjgtNC4wMjggNi45NzItMS4wMjQgMTcuMjE4IDIuODM2IDIyLjg1MyAxLjkzIDIuNzYgNC4xODYgNS44NDIgNy4xNCA1LjczNCAyLjg4OC0uMTIgMy45NjctMS44NDEgNy40NTMtMS44NDEgMy40NTUgMCA0LjQ2OCAxLjg0IDcuNDggMS43NzIgMy4xLS4wNSA1LjA1Mi0yLjc3MyA2LjkxNS01LjU1OCAyLjIzMS0zLjE2MyAzLjEyNy02LjI3OSAzLjE2My02LjQzOS0uMDczLS4wMjUtNi4wMjEtMi4yOTQtNi4wOC05LjE2ek00Ny44NzIgMTguMzE2YzEuNTU0LTEuOTQyIDIuNjE3LTQuNTg1IDIuMzIyLTcuMjY3LTIuMjUuMS01LjA2MiAxLjU1NS02LjY4MSAzLjQ1NS0xLjQzMyAxLjY3NC0yLjcxMyA0LjQxOC0yLjM4MiA2Ljk5OSAyLjUyNi4xODggNS4xMi0xLjI3NCA2Ljc0LTMuMTg3ek05NS4zNjkgNTUuOTloLTQuMDM3bC0yLjIxMi02Ljk0N2gtNy42ODdsLTIuMTA3IDYuOTQ3aC0zLjkzbDcuNjE2LTIzLjY1MWg0LjcwNGw3LjY1MyAyMy42NTF6bS02LjkxNi05Ljg2MWwtMi02LjE3NmMtLjIxMS0uNjMxLS42MDgtMi4xMTctMS4xOTMtNC40NTZoLS4wN2ExNzEuNzY2IDE3MS43NjYgMCAwMS0xLjEyNCA0LjQ1Nkw4Mi4xIDQ2LjEyOGg2LjM1MnpNMTE0Ljk1NSA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1MiA2Ljg3Ni0xLjQwNSAxLjQ5OC0zLjE0OSAyLjI0Ni01LjIzMSAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDQtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0LTUuNjE0aDMuMzMzbC4yMTEgMi43MDNoLjA3MWMxLjI2NC0yLjAzNyAzLjE4Mi0zLjA1MyA1Ljc1Ny0zLjA1MyAyLjAxMiAwIDMuNjkyLjc5NCA1LjAzNiAyLjM4NSAxLjM0OCAxLjU5MiAyLjAyIDMuNjg2IDIuMDIgNi4yODN6bS0zLjg2Mi4xMzhjMC0xLjY2LS4zNzMtMy4wMjgtMS4xMjMtNC4xMDUtLjgyLTEuMTI0LTEuOTItMS42ODUtMy4zLTEuNjg1LS45MzUgMC0xLjc4NS4zMTMtMi41NDQuOTMtLjc2MS42MjEtMS4yNTggMS40MzQtMS40OTEgMi40NC0uMTE4LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zOCAyLjI4OCAxLjE0MSAzLjE0Mi43NjEuODU1IDEuNzQ5IDEuMjgyIDIuOTY1IDEuMjgyIDEuNDI4IDAgMi41MzktLjU1MSAzLjMzNC0xLjY1Ljc5Ni0xLjEgMS4xOTQtMi41NSAxLjE5NC00LjM1MnpNMTM0LjU3NiA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1NCA2Ljg3Ni0xLjQwMiAxLjQ5OC0zLjE0NiAyLjI0Ni01LjIyOCAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDMtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0MS01LjYxNGgzLjMzNGwuMjExIDIuNzAzaC4wNzFjMS4yNjMtMi4wMzcgMy4xODEtMy4wNTMgNS43NTctMy4wNTMgMi4wMTEgMCAzLjY5MS43OTQgNS4wMzggMi4zODUgMS4zNDIgMS41OTIgMi4wMTYgMy42ODYgMi4wMTYgNi4yODN6bS0zLjg2MS4xMzhjMC0xLjY2LS4zNzUtMy4wMjgtMS4xMjYtNC4xMDUtLjgxOS0xLjEyNC0xLjkxNi0xLjY4NS0zLjI5Ny0xLjY4NS0uOTM3IDAtMS43ODUuMzEzLTIuNTQ2LjkzLS43NjEuNjIxLTEuMjU3IDEuNDM0LTEuNDkgMi40NC0uMTE1LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zODEgMi4yODggMS4xMzggMy4xNDIuNzYxLjg1MyAxLjc0OSAxLjI4MiAyLjk2OSAxLjI4MiAxLjQyNyAwIDIuNTM4LS41NTEgMy4zMzMtMS42NS43OTctMS4xIDEuMTk1LTIuNTUgMS4xOTUtNC4zNTJ6TTE1Ni41MTQgNDkuMzU4YzAgMi4wMTItLjY5OSAzLjY0OS0yLjEwMSA0LjkxMi0xLjU0MiAxLjM4MS0zLjY4OCAyLjA3LTYuNDQ1IDIuMDctMi41NDYgMC00LjU4Ny0uNDktNi4xMzEtMS40NzNsLjg3OC0zLjE1OGMxLjY2NCAxLjAwNiAzLjQ5IDEuNTEgNS40NzkgMS41MSAxLjQyNyAwIDIuNTM5LS4zMjMgMy4zMzctLjk2Ni43OTQtLjY0MyAxLjE5MS0xLjUwNyAxLjE5MS0yLjU4NCAwLS45Ni0uMzI3LTEuNzY4LS45ODMtMi40MjQtLjY1My0uNjU2LTEuNzQyLTEuMjY2LTMuMjY0LTEuODMtNC4xNDItMS41NDQtNi4yMTItMy44MDYtNi4yMTItNi43ODEgMC0xLjk0NC43MjYtMy41MzkgMi4xNzgtNC43OCAxLjQ0Ny0xLjI0MSAzLjM3OC0xLjg2MiA1Ljc5Mi0xLjg2MiAyLjE1MyAwIDMuOTQxLjM3NSA1LjM2OSAxLjEyM2wtLjk0OCAzLjA5Yy0xLjMzMy0uNzI2LTIuODQxLTEuMDg4LTQuNTI4LTEuMDg4LTEuMzMzIDAtMi4zNzUuMzI5LTMuMTIxLjk4My0uNjMyLjU4NC0uOTQ4IDEuMjk3LS45NDggMi4xNDEgMCAuOTM1LjM2MSAxLjcwOCAxLjA4NiAyLjMxNi42MzEuNTYxIDEuNzc4IDEuMTcgMy40NDIgMS44MjUgMi4wMzYuODIgMy41MzEgMS43NzcgNC40OTIgMi44NzYuOTU5IDEuMDk0IDEuNDM3IDIuNDY1IDEuNDM3IDQuMXpNMTY5LjA0NSA0MS43OGgtNC4xNzd2OC4yOGMwIDIuMTA2LjczNiAzLjE1OCAyLjIxMSAzLjE1OC42NzcgMCAxLjIzOS0uMDU5IDEuNjg0LS4xNzZsLjEwNSAyLjg3N2MtLjc0Ny4yOC0xLjczLjQyLTIuOTQ4LjQyLTEuNDk3IDAtMi42NjctLjQ1Ny0zLjUxMS0xLjM2OS0uODQxLS45MTMtMS4yNjQtMi40NDUtMS4yNjQtNC41OTd2LTguNTk3aC0yLjQ4OXYtMi44NDRoMi40ODlWMzUuODFsMy43MjMtMS4xMjN2NC4yNDVoNC4xNzd2Mi44NDh6TTE4Ny44OTUgNDcuMzIzYzAgMi42MjEtLjc1IDQuNzc0LTIuMjQ3IDYuNDU3LTEuNTcgMS43MzMtMy42NTMgMi41OTYtNi4yNTEgMi41OTYtMi41MDMgMC00LjQ5Ni0uODMtNS45ODItMi40OS0xLjQ4Ni0xLjY2LTIuMjI5LTMuNzU1LTIuMjI5LTYuMjggMC0yLjY0My43NjQtNC44MDggMi4yOTgtNi40OTEgMS41MzEtMS42ODUgMy41OTctMi41MjcgNi4xOTQtMi41MjcgMi41MDMgMCA0LjUxOC44MyA2LjAzOCAyLjQ5MiAxLjQ1NCAxLjYxMSAyLjE3OSAzLjY5MyAyLjE3OSA2LjI0M3ptLTMuOTMyLjEyM2MwLTEuNTczLS4zMzYtMi45MjItMS4wMTctNC4wNDctLjc5NS0xLjM2Mi0xLjkzMS0yLjA0LTMuNDAzLTIuMDQtMS41MjMgMC0yLjY4MS42OC0zLjQ3NSAyLjA0LS42ODEgMS4xMjctMS4wMTcgMi40OTctMS4wMTcgNC4xMTggMCAxLjU3Mi4zMzYgMi45MjEgMS4wMTcgNC4wNDUuODE5IDEuMzYxIDEuOTY0IDIuMDQgMy40NDEgMi4wNCAxLjQ0NyAwIDIuNTgzLS42OTMgMy40MDMtMi4wNzYuNjk5LTEuMTQ2IDEuMDUxLTIuNTEgMS4wNTEtNC4wOHpNMjAwLjIxNSA0Mi4yNjhhNi41OCA2LjU4IDAgMDAtMS4xOTQtLjEwNWMtMS4zMzQgMC0yLjM2NS41MDMtMy4wOSAxLjUxMS0uNjMxLjg4OS0uOTQ4IDIuMDEyLS45NDggMy4zNjh2OC45NDhoLTMuNzg4bC4wMzUtMTEuNjgzYTkyLjkxIDkyLjkxIDAgMDAtLjE0Mi01LjM3aDMuMzAxbC4xMzkgMy4yNjRoLjEwNWMuNC0xLjEyMiAxLjAzMS0yLjAyNSAxLjg5NS0yLjcwMi44NDUtLjYxIDEuNzU3LS45MTMgMi43NC0uOTEzLjM1IDAgLjY2Ni4wMjUuOTQ3LjA3djMuNjEyek0yMTcuMTY2IDQ2LjY1NmMwIC42OC0uMDQ0IDEuMjUyLS4xMzggMS43MTloLTExLjM3MWMuMDQ0IDEuNjg1LjU5NCAyLjk3MyAxLjY1IDMuODYyLjk1OC43OTQgMi4xOTcgMS4xOTIgMy43MTkgMS4xOTIgMS42ODMgMCAzLjIxOS0uMjY4IDQuNjAxLS44MDZsLjU5MyAyLjYzYy0xLjYxNC43MDQtMy41MiAxLjA1NC01LjcxOSAxLjA1NC0yLjY0NSAwLTQuNzIxLS43NzktNi4yMzMtMi4zMzQtMS41MDctMS41NTUtMi4yNjMtMy42NDMtMi4yNjMtNi4yNjMgMC0yLjU3MS43MDMtNC43MTMgMi4xMDktNi40MiAxLjQ3Mi0xLjgyNCAzLjQ2MS0yLjczNiA1Ljk2NC0yLjczNiAyLjQ1OSAwIDQuMzIuOTEyIDUuNTg0IDIuNzM1IDEuMDAxIDEuNDQ5IDEuNTA0IDMuMjQgMS41MDQgNS4zNjd6bS0zLjYxNC0uOTgyYy4wMjUtMS4xMjQtLjIyMi0yLjA5NC0uNzM2LTIuOTEzLS42NTYtMS4wNTQtMS42NjQtMS41OC0zLjAyLTEuNTgtMS4yNCAwLTIuMjQ4LjUxMy0zLjAxNyAxLjU0NC0uNjMxLjgyLTEuMDA3IDEuODAyLTEuMTIyIDIuOTQ3aDcuODk1di4wMDJ6TTg3LjIgMTcuNzg5YzAgMi4wOTEtLjYyNyAzLjY2Ni0xLjg4IDQuNzIzLTEuMTYyLjk3Ni0yLjgxMSAxLjQ2NS00Ljk0OCAxLjQ2NS0xLjA2IDAtMS45NjctLjA0Ni0yLjcyNi0uMTM5di0xMS40M2MuOTktLjE2IDIuMDU3LS4yNCAzLjIxLS4yNCAyLjAzNSAwIDMuNTY5LjQ0MiA0LjYwNCAxLjMyNyAxLjE1OSAxIDEuNzQgMi40MzEgMS43NCA0LjI5NHptLTEuOTY0LjA1MWMwLTEuMzU2LS4zNi0yLjM5Ni0xLjA3OC0zLjEyLS43MTgtLjcyNC0xLjc2Ny0xLjA4Ny0zLjE0OC0xLjA4Ny0uNTg3IDAtMS4wODYuMDQtMS41LjEyMXY4LjY5Yy4yMjkuMDM1LjY0OC4wNSAxLjI1OC4wNSAxLjQyNiAwIDIuNTI2LS4zOTYgMy4zMDEtMS4xODguNzc1LS43OTMgMS4xNjctMS45NDggMS4xNjctMy40NjZ6TTk3LjYxNiAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk0IDEuMjc2LTMuMDcgMS4yNzYtMS4yMyAwLTIuMjEtLjQwNy0yLjk0LTEuMjI0LS43My0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDMtMS4yNCAxLjIzIDAgMi4yMi40MDYgMi45NjggMS4yMjIuNzEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45MzMuMDZjMC0uNzczLS4xNjctMS40MzYtLjQ5OS0xLjk4OS0uMzkxLS42NjgtLjk0OC0xLjAwMi0xLjY3MS0xLjAwMi0uNzQ5IDAtMS4zMTguMzM0LTEuNzA5IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjggMS40MzYuNSAxLjk4OC40MDQuNjY5Ljk2NiAxLjAwMyAxLjY5MSAxLjAwMy43MTEgMCAxLjI3LS4zNCAxLjY3MS0xLjAyLjM0NS0uNTY0LjUxNy0xLjIzMi41MTctMi4wMDV6TTExMS41ODIgMTUuNDk2bC0yLjYyMiA4LjM3OGgtMS43MDdsLTEuMDg2LTMuNjM4YTI3LjU5NSAyNy41OTUgMCAwMS0uNjc0LTIuNzA3aC0uMDMzYy0uMTYyLjkyLS4zODYgMS44MjItLjY3NCAyLjcwN2wtMS4xNTQgMy42MzhoLTEuNzI2bC0yLjQ2Ni04LjM3OGgxLjkxNWwuOTQ3IDMuOTgzYy4yMy45NDIuNDE4IDEuODQuNTY5IDIuNjg5aC4wMzRhMjkuOCAyOS44IDAgMDEuNjkyLTIuNjcybDEuMTg5LTMuOTk4aDEuNTE4bDEuMTQgMy45MTNjLjI3NS45NTQuNDk5IDEuODczLjY3MiAyLjc1OGguMDUxYy4xMjYtLjg2MS4zMTctMS43OC41NjktMi43NThsMS4wMTctMy45MTNoMS44Mjl2LS4wMDJ6TTEyMS4yNDEgMjMuODc0aC0xLjg2M3YtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjg5LTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0Ni42MWEyLjE2MyAyLjE2MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjNWMTcuODljMC0uNzM2LS4wMjMtMS41MzQtLjA2OC0yLjM5OGgxLjYzN2wuMDg4IDEuMzFoLjA1MWMuMjE3LS40MDcuNTQxLS43NDMuOTY1LTEuMDExYTMuMTUyIDMuMTUyIDAgMDExLjY4OS0uNDcxYy43ODMgMCAxLjQzMy4yNTIgMS45NTEuNzU5LjY0My42Mi45NjUgMS41NDYuOTY1IDIuNzc2djUuMDE5ek0xMjYuMzc5IDIzLjg3NGgtMS44NjJWMTEuNjUyaDEuODYydjEyLjIyMnpNMTM3LjM0OCAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk2IDEuMjc2LTMuMDcxIDEuMjc2LTEuMjMyIDAtMi4yMTEtLjQwNy0yLjk0LTEuMjI0LS43MjktLjgxNi0xLjA5My0xLjg0NS0xLjA5My0zLjA4NiAwLTEuMjk3LjM3NS0yLjM2MiAxLjEyOC0zLjE4OC43NTQtLjgyNyAxLjc2OC0xLjI0IDMuMDQyLTEuMjQgMS4yMzIgMCAyLjIxOS40MDYgMi45NjkgMS4yMjIuNzExLjc5MyAxLjA2OSAxLjgxNiAxLjA2OSAzLjA2OHptLTEuOTM1LjA2YzAtLjc3My0uMTY3LTEuNDM2LS40OTktMS45ODktLjM5LS42NjgtLjk0OC0xLjAwMi0xLjY3LTEuMDAyLS43NSAwLTEuMzE5LjMzNC0xLjcwOCAxLjAwMi0uMzM0LjU1My0uNSAxLjIyNy0uNSAyLjAyMyAwIC43NzMuMTY4IDEuNDM2LjUgMS45ODguNDA0LjY2OS45NjUgMS4wMDMgMS42OTEgMS4wMDMuNzExIDAgMS4yNjctLjM0IDEuNjY5LTEuMDIuMzQ3LS41NjQuNTE3LTEuMjMyLjUxNy0yLjAwNXpNMTQ2LjM2NSAyMy44NzRoLTEuNjczbC0uMTM5LS45NjVoLS4wNTJjLS41NzIuNzctMS4zODggMS4xNTUtMi40NDggMS4xNTUtLjc5MSAwLTEuNDMxLS4yNTQtMS45MTItLjc1OS0uNDM4LS40NTgtLjY1Ny0xLjAyOS0uNjU3LTEuNzA2IDAtMS4wMjQuNDI3LTEuODA0IDEuMjg2LTIuMzQ0Ljg1Ny0uNTQgMi4wNjItLjgwNSAzLjYxNC0uNzkzdi0uMTU2YzAtMS4xMDQtLjU4LTEuNjU1LTEuNzQtMS42NTUtLjgyNyAwLTEuNTU2LjIwOC0yLjE4NS42MmwtLjM3OS0xLjIyMmMuNzc5LS40ODIgMS43NDEtLjcyNCAyLjg3NS0uNzI0IDIuMTkgMCAzLjI4OSAxLjE1NSAzLjI4OSAzLjQ2NnYzLjA4NWMwIC44MzcuMDQxIDEuNTA0LjEyMSAxLjk5OHptLTEuOTM1LTIuODh2LTEuMjkxYy0yLjA1NS0uMDM2LTMuMDgyLjUyNy0zLjA4MiAxLjY4OCAwIC40MzcuMTE3Ljc2NC4zNTcuOTgzLjI0LjIxOS41NDYuMzI3LjkxLjMyNy40MDkgMCAuNzkxLS4xMyAxLjE0LS4zODdhMS41ODcgMS41ODcgMCAwMC42NzUtMS4zMnpNMTU2Ljk1MSAyMy44NzRoLTEuNjUzbC0uMDg3LTEuMzQ1aC0uMDUyYy0uNTI4IDEuMDIzLTEuNDI3IDEuNTM1LTIuNjkxIDEuNTM1LTEuMDEgMC0xLjg1MS0uMzk2LTIuNTE4LTEuMTg5LS42NjYtLjc5My0uOTk5LTEuODIyLS45OTktMy4wODUgMC0xLjM1Ni4zNjEtMi40NTUgMS4wODYtMy4yOTMuNzAzLS43ODMgMS41NjMtMS4xNzQgMi41ODctMS4xNzQgMS4xMjUgMCAxLjkxMy4zOCAyLjM2MSAxLjEzOGguMDM1di00LjgxaDEuODY1djkuOTY2YzAgLjgxNi4wMjIgMS41NjcuMDY2IDIuMjU3em0tMS45MzEtMy41MzN2LTEuMzk3YzAtLjI0Mi0uMDE3LS40MzctLjA1MS0uNTg3YTIuMTIzIDIuMTIzIDAgMDAtLjY3NC0xLjEyOCAxLjgzMSAxLjgzMSAwIDAwLTEuMjQ2LS40NTdjLS42OTUgMC0xLjIzOS4yNzYtMS42MzkuODI4LS4zOTcuNTUzLS41OTggMS4yNTgtLjU5OCAyLjEyIDAgLjgyOS4xOTEgMS41LjU3MyAyLjAxOC40MDMuNTUuOTQ3LjgyNiAxLjYyOC44MjYuNjEyIDAgMS4xMDEtLjIzIDEuNDcyLS42OS4zNi0uNDI0LjUzNS0uOTM2LjUzNS0xLjUzM3pNMTcyLjg4NSAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzEuODUxLTEuNzkyIDEuMjc2LTMuMDcgMS4yNzYtMS4yMjggMC0yLjIwOC0uNDA3LTIuOTQtMS4yMjQtLjcyOS0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDYtMS4yNCAxLjIyOCAwIDIuMjE4LjQwNiAyLjk2NSAxLjIyMi43MTEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45My4wNmMwLS43NzMtLjE2Ny0xLjQzNi0uNS0xLjk4OS0uMzkzLS42NjgtLjk0Ny0xLjAwMi0xLjY3My0xLjAwMi0uNzQ2IDAtMS4zMTUuMzM0LTEuNzA4IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjcgMS40MzYuNSAxLjk4OC40MDMuNjY5Ljk2NSAxLjAwMyAxLjY5IDEuMDAzLjcxMiAwIDEuMjcyLS4zNCAxLjY3My0xLjAyLjM0My0uNTY0LjUxOC0xLjIzMi41MTgtMi4wMDV6TTE4Mi45MDMgMjMuODc0aC0xLjg2MXYtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjkxLTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0NC42MWEyLjE1MyAyLjE1MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjVWMTcuODljMC0uNzM2LS4wMjEtMS41MzQtLjA2Ni0yLjM5OGgxLjYzNmwuMDg3IDEuMzFoLjA1MWMuMjE5LS40MDcuNTQzLS43NDMuOTY2LTEuMDExYTMuMTUzIDMuMTUzIDAgMDExLjY5LS40NzFjLjc4MSAwIDEuNDMyLjI1MiAxLjk0OS43NTkuNjQ1LjYyLjk2NSAxLjU0Ni45NjUgMi43NzZ2NS4wMTl6TTE5NS40NDIgMTYuODkxaC0yLjA1MnY0LjA3YzAgMS4wMzQuMzY1IDEuNTUyIDEuMDg3IDEuNTUyLjMzNCAwIC42MTEtLjAyOS44My0uMDg4bC4wNDggMS40MTNjLS4zNjguMTM5LS44NTIuMjA4LTEuNDQ3LjIwOC0uNzM2IDAtMS4zMDktLjIyNC0xLjcyMy0uNjcxLS40MTYtLjQ0OC0uNjIyLTEuMjAyLS42MjItMi4yNnYtNC4yMjRoLTEuMjI1di0xLjM5NWgxLjIyNVYxMy45NmwxLjgyNi0uNTV2Mi4wODRoMi4wNTF2MS4zOTdoLjAwMnpNMjA1LjMwNSAyMy44NzRoLTEuODY1VjE5LjExYzAtMS41MDItLjU2Mi0yLjI1NC0xLjY4Ny0yLjI1NC0uODY0IDAtMS40NTQuNDM2LTEuNzc4IDEuMzA3YTIuMzQ0IDIuMzQ0IDAgMDAtLjA4Ny42N3Y1LjAzOGgtMS44NjF2LTEyLjIyaDEuODYxVjE2LjdoLjAzNmMuNTg2LS45MTkgMS40MjctMS4zNzggMi41MTctMS4zNzguNzcxIDAgMS40MS4yNTMgMS45MTYuNzYuNjMxLjYzLjk0OCAxLjU2OS45NDggMi44MXY0Ljk4ek0yMTUuNDc5IDE5LjI4OWMwIC4zMzQtLjAyNS42MTQtLjA2OS44NDRoLTUuNTg4Yy4wMjUuODI4LjI5MiAxLjQ1OS44MDkgMS44OTYuNDczLjM5MSAxLjA4My41ODcgMS44MjkuNTg3LjgyNyAwIDEuNTgxLS4xMzIgMi4yNi0uMzk3bC4yOTIgMS4yOTRjLS43OTUuMzQ1LTEuNzMuNTE3LTIuODEzLjUxNy0xLjI5OCAwLTIuMzItLjM4Mi0zLjA1OS0xLjE0Ni0uNzQ0LS43NjQtMS4xMTItMS43OS0xLjExMi0zLjA3NiAwLTEuMjY0LjM0NC0yLjMxNiAxLjAzNS0zLjE1NS43MjItLjg5NiAxLjY5OC0xLjM0NCAyLjkzLTEuMzQ0IDEuMjA1IDAgMi4xMjEuNDQ4IDIuNzM5IDEuMzQ0LjUuNzEuNzQ3IDEuNTkuNzQ3IDIuNjM2em0tMS43NzgtLjQ4MmMuMDE1LS41NTMtLjEwOC0xLjAzLS4zNjEtMS40My0uMzIzLS41MTgtLjgxNi0uNzc3LTEuNDgyLS43NzctLjYwOCAwLTEuMTA0LjI1Mi0xLjQ4My43NTgtLjMwOS40MDQtLjQ5Mi44ODYtLjU1MyAxLjQ0OWgzLjg3OXpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImFwcC1zdG9yZV9zdmdfX2NsaXAwXzUxOjUwMVwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgyNDB2NzEuMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0FwcFN0b3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2hlY2tTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE2LjA3MSAwSDEuOTNBMS45MjkgMS45MjkgMCAwMDAgMS45MjlWMTYuMDdDMCAxNy4xMzcuODYzIDE4IDEuOTI5IDE4SDE2LjA3QTEuOTI5IDEuOTI5IDAgMDAxOCAxNi4wNzFWMS45M0ExLjkyOSAxLjkyOSAwIDAwMTYuMDcxIDB6bTAgMTYuMDcxSDEuOTNWMS45M0gxNi4wN1YxNi4wN3ptLTEuNDQtOS43MTJsLTYuOTM1IDYuODc5YS40ODIuNDgyIDAgMDEtLjY4Mi0uMDAzTDMuMzY3IDkuNTU4YS40ODIuNDgyIDAgMDEuMDAzLS42ODJsLjkxMi0uOTA1YS40ODIuNDgyIDAgMDEuNjgyLjAwM2wyLjQwMyAyLjQyMiA1LjY3OS01LjYzNGEuNDgyLjQ4MiAwIDAxLjY4Mi4wMDNsLjkwNS45MTJhLjQ4Mi40ODIgMCAwMS0uMDAyLjY4MnpcIlxuICAgICAgICBmaWxsPVwiI0ZDQzcyOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NoZWNrU3F1YXJlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRGlzY29yZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUuNjAzIDBIMy4zOTdDMS41MjUgMCAwIDEuMzM0IDAgMi45ODd2MTkuNjA0YzAgMS42NTMgMS41MjUgMi45ODcgMy4zOTcgMi45ODdIMjIuMTlsLS44NzgtMi42ODMgMi4xMjEgMS43MjYgMi4wMDUgMS42MjRMMjkgMjlWMi45ODdDMjkgMS4zMzQgMjcuNDc1IDAgMjUuNjAzIDB6bS02LjM5NyAxOC45MzdzLS41OTYtLjYyMy0xLjA5My0xLjE3NWMyLjE3LS41MzYgMi45OTktMS43MjUgMi45OTktMS43MjUtLjY4LjM5Mi0xLjMyNi42NjctMS45MDYuODU1LS44MjguMzA1LTEuNjI0LjUwOC0yLjQwMy42MjRhMTMuMjQgMTMuMjQgMCAwMS00LjI5Mi0uMDE0IDE1LjQ1IDE1LjQ1IDAgMDEtMi40MzYtLjYyNGMtLjM4LS4xMy0uNzk1LS4yOS0xLjIxLS40OTMtLjA0OS0uMDI5LS4wOTktLjA0NC0uMTQ4LS4wNzNhLjIyOC4yMjggMCAwMS0uMDY3LS4wNDNjLS4yOTgtLjE0NS0uNDY0LS4yNDYtLjQ2NC0uMjQ2cy43OTYgMS4xNiAyLjkgMS43MWMtLjQ5Ny41NTItMS4xMSAxLjIwNC0xLjExIDEuMjA0LTMuNjYyLS4xMDItNS4wNTQtMi4yMDQtNS4wNTQtMi4yMDQgMC00LjY2OSAyLjM4Ni04LjQ1NCAyLjM4Ni04LjQ1NCAyLjM4Ni0xLjU2NiA0LjY1Ny0xLjUyMiA0LjY1Ny0xLjUyMmwuMTY1LjE3NGMtMi45ODMuNzU0LTQuMzU4IDEuOS00LjM1OCAxLjlzLjM2NS0uMTc1Ljk3OC0uNDIxYzEuNzczLS42ODEgMy4xODEtLjg3IDMuNzYxLS45MTMuMS0uMDE1LjE4My0uMDMuMjgyLS4wM2ExNi4wMTEgMTYuMDExIDAgMDEzLjM0OC0uMDI4YzEuNTc0LjE1OSAzLjI2NC41NjUgNC45ODggMS4zOTIgMCAwLTEuMzEtMS4wODgtNC4xMjctMS44NDJsLjIzMi0uMjMyczIuMjctLjA0MyA0LjY1NyAxLjUyM2MwIDAgMi4zODYgMy43ODQgMi4zODYgOC40NTMgMCAwLTEuNDA4IDIuMTAyLTUuMDcgMi4yMDR6bS03LjcwNS02Ljc3MmMtLjk0NSAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NCAwIDEuNjktLjcyNiAxLjY5LTEuNjEuMDE2LS44ODUtLjc0Ni0xLjYxLTEuNjktMS42MXptNi4wNDggMGMtLjk0NCAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NSAwIDEuNjktLjcyNiAxLjY5LTEuNjEgMC0uODg1LS43NDUtMS42MS0xLjY5LTEuNjF6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Rpc2NvcmRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEb3duQXJyb3cocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNODkuNSAxNjEuNGMtNi43IDIuOS0xMC41IDEwLjUtOSAxOC4zLjYgMy40IDEwIDEzLjEgODQuMyA4Ny41IDc0LjQgNzQuMyA4NC4xIDgzLjcgODcuNSA4NC4zIDkuNCAxLjggMy45IDYuNiA5NC45LTg0LjMgOTAuOS05MC45IDg2LjEtODUuNSA4NC4zLTk0LjktLjktNC45LTYuOS0xMC45LTExLjgtMTEuOC05LjQtMS44LTQuNi01LjktODcuNSA3Ni44TDI1NiAzMTMuNWwtNzUuOC03NS43Yy00Mi40LTQyLjQtNzYuOS03Ni4yLTc4LjUtNzYuOC0zLjgtMS40LTguNS0xLjItMTIuMi40elwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRG93bkFycm93XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRHJvcERvd24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQuNTE2IDcuNTQ4Yy40MzYtLjQ0NiAxLjA0My0uNDgxIDEuNTc2IDBMMTAgMTEuMjk1bDMuOTA4LTMuNzQ3Yy41MzMtLjQ4MSAxLjE0MS0uNDQ2IDEuNTc0IDAgLjQzNi40NDUuNDA4IDEuMTk3IDAgMS42MTUtLjQwNi40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDJhMS4wOTUgMS4wOTUgMCAwMS0xLjU3NiAwUzQuOTI0IDkuNTggNC41MTYgOS4xNjNjLS40MDgtLjQxOC0uNDM2LTEuMTcgMC0xLjYxNXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Ryb3BEb3duXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRHJvcERvd27EsGNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01SDd6XCIgZmlsbD1cIiMwMDBcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Ryb3BEb3duxLBjb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdFdGhMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDIgNzFcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC42fVxuICAgICAgICBkPVwiTTIwLjk5NiAyNy4yOTNMMiAzNi4wOWwxOC45OTYgMTEuNDI3IDE4Ljk5LTExLjQyNy0xOC45OS04Ljc5NnpcIlxuICAgICAgICBmaWxsPVwiIzAxMDEwMVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC40NX1cbiAgICAgICAgZD1cIk0xLjU3IDM1LjgzNGwtLjI1My40MjguNDI1LjI1NkwyMC43NCA0Ny45NDRsLjc1OC40NTZWMi4xNzRsLS45MyAxLjU3MUwxLjU3IDM1LjgzNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC44fVxuICAgICAgICBkPVwiTTIxLjQyNiAzLjc0NWwtLjkzLTEuNTcyVjQ4LjRsLjc1OC0uNDU2IDE4Ljk4OS0xMS40MjYuNDI1LS4yNTYtLjI1My0uNDI4TDIxLjQyNiAzLjc0NXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC40NX1cbiAgICAgICAgZD1cIk0yMC40OTcgNTEuNDYyVjY1LjQxTDMuNzUgNDEuMzg5bDE2Ljc0NyAxMC4wNzN6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuOH1cbiAgICAgICAgZD1cIk0yMC43MzggNTAuNzUxbC0uMjQyLjE0NlY2OC41OWwuOTEtMS4zMDRMNDAuNDEgNDAuMDM5bC0uNjY4LS43MTRMMjAuNzM4IDUwLjc1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRXRoTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0ZhY2Vib29rKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk02LjA0MiAzLjYyNWgxNi45MTZhMi40MTcgMi40MTcgMCAwMTIuNDE3IDIuNDE3djE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3IDIuNDE3SDYuMDQyYTIuNDE3IDIuNDE3IDAgMDEtMi40MTctMi40MTdWNi4wNDJhMi40MTcgMi40MTcgMCAwMTIuNDE3LTIuNDE3ek0yMS43NSA2LjA0MmgtMy4wMmE0LjIzIDQuMjMgMCAwMC00LjIzIDQuMjI5djMuMDJoLTIuNDE3djMuNjI2SDE0LjV2OC40NThoMy42MjV2LTguNDU4aDMuNjI1di0zLjYyNWgtMy42MjV2LTIuNDE3YTEuMjA4IDEuMjA4IDAgMDExLjIwOC0xLjIwOGgyLjQxN1Y2LjA0MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRmFjZWJvb2tcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdGaW5nZXJwcmludChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNmaW5nZXJwcmludF9zdmdfX2NsaXAwKVwiIGZpbGw9XCIjMDAwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuMzczLjE2NGMtLjYxOS4xNjQtLjkyOC45Ni0uNTk4IDEuNTY0LjIwNi4zNTYuNzg0LjQzOSAzLjQ0NC41MiAyLjU1Ny4wODMgMy40NjQuMjIgNC41MTYuNjg3IDEuNDQzLjYzMSAyLjA4Mi40NjYgMi4wODItLjQ5NCAwLS44MjMtLjgwNC0xLjM0NC0yLjkyOC0xLjkyLTEuNzczLS40OTUtNS4yMTctLjY4Ny02LjUxNi0uMzU3ek0xMS41NjggMi4wMDJDOC42MiAzLjcwMyA1LjA5MyA3LjMyNSA1LjIzOCA4LjUwNWMuMDQuMzMuMjA2Ljc0LjM5MS44NzguMjY5LjIyLjY2LS4wODIgMS44NTYtMS40MjcgMS42Ny0xLjg2NiAzLjE3Ni0zLjEyOCA0LjkyOS00LjExNi42MTgtLjM1NiAxLjI1OC0uNzY4IDEuNDAyLS45MDUuMzcxLS40MTIuMzEtMS4yNjItLjE0NC0xLjU5Mi0uNTE2LS4zNTYtLjI4OS0uNDExLTIuMTA0LjY1OXpNMjcuNjExIDMuMjkyYy0uNzQyLjU0OC0uNDEyIDEuNDU0Ljk3IDIuNjYxIDEuNTQ2IDEuMzQ1IDMuMjc4IDMuNTY3IDQuNDU0IDUuNjguODY2IDEuNTY0IDEuMzgxIDEuODY2IDEuODc2IDEuMDcuMjI3LS4zNTcuMjA2LS41NzYtLjEwMy0xLjM0NC0xLjM4Mi0zLjQwMy02LjE4Ni04LjgwOC03LjE5Ny04LjA2N3pNMTUuNTA3IDQuOTFjLTMuMTE0IDEuMTI2LTUuOTggMy40MDMtNy44NzcgNi4zMTEtMi4xMDQgMy4xODMtMy4yMzggNi45MTUtMy43NTMgMTIuMjFDMi43NDMgMzUuMzk1IDMuNjcgNDcuMzU4IDYuNjQgNTguOGMxLjE1NSA0LjQ3MiAxLjM0IDQuODg0IDIuMDIgNC43NzQuMzMtLjA1NS41NzgtLjI3NC42Mi0uNTc2LjA0LS4yNzUtLjMxLTEuODM5LS43NjQtMy40NTctMi40NzQtOC43OC0zLjcxMS0xOS4xNTItMy40NjQtMjguNzAxLjMxLTEwLjU2NCAxLjMtMTQuODcyIDQuNDc1LTE5LjA3IDIuNjQtMy41MTIgNS43OTQtNS4yNCA5LjU4OS01LjI0IDMuODE0IDAgNi45OSAxLjcyOCA5LjYwOSA1LjIxMyAxLjc1MyAyLjM2IDIuNTc4IDQuMTQzIDMuNDAyIDcuMjk4LjY0IDIuNTI1LjcyMiA1LjA0OS40MTMgMTIuNDg1LS4yNjggNi4zNjYuMzkyIDExLjQ0MiAyLjI0OCAxNy4zNDEuNzgzIDIuNDQyIDEuMjU3IDMuMDczIDEuODU1IDIuNDE1LjQzNC0uNDY3LjM5Mi0xLjIwOC0uMTg1LTIuNjktLjc0Mi0xLjk3NS0xLjczMi02LjMzOC0yLjEwMy05LjMyOC0uMjY5LTIuMTY4LS4zMS0zLjU2OC0uMTY1LTcuNjAxLjI0Ny03LjA4LjE4NS05Ljg3OC0uMjA3LTExLjkwOC0xLjM4MS02LjkxNS01LjA5My0xMi4xODMtMTAuMTI1LTE0LjQ2LTIuMjg4LTEuMDE2LTYuMDYyLTEuMjA4LTguMzUxLS4zODR6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xNi4xODcgOS4xMzZjLTIuNDEyLjc5Ni01LjczMiAzLjY3Ny01LjU4OCA0LjkxMi4wNDEuMzAxLjIwNi42ODUuMzkyLjgyMy4yNjguMjIuNjQtLjAyOCAxLjc1My0xLjEyNSAyLjIwNi0yLjE5NSA0Ljg4Ny0zLjI2NiA3LjM0LTIuOTA5IDEuMDMyLjE2NSAxLjE3Ni4xMSAxLjM4Mi0uMzg0LjI5LS43MTMuMjktLjc2OC0uMTAzLTEuMjYyLS4zOTItLjU0OS0zLjU0Ni0uNTc2LTUuMTc2LS4wNTV6TTIzLjI4MSAxMC4zMTZjLS4wODIuMDgyLS4xNDQuNDY2LS4xNDQuNzk2IDAgLjQ2Ni4yODguODUgMS4xNTQgMS41MDkgMi4yOSAxLjcyOCA0LjUxNyA1LjY1MiA0Ljk1IDguNjQzLjE4NSAxLjI2Mi44MDQgMS43MjggMS4zNi45ODguMzkyLS40OTQuMzkyLS42MDQuMDgzLTEuOTQ4LS4zOTItMS43ODQtMS4xOTYtMy44OTctMi4wODMtNS41NDMtMS41MjYtMi43MTYtNC42Ni01LjM1LTUuMzItNC40NDV6TTMuMTc2IDExLjQxM2MtLjg4NyAxLjY3NC0xLjk2IDQuOTk0LTIuNDM0IDcuNDM2LS42MTggMy4yMzgtLjYzOSA0LjMzNS0uMDgyIDQuNzIuNTM2LjM4NCAxLjIzNy0uNTIyIDEuMjM3LTEuNjIgMC0xLjQyNiAxLjAzMS01LjYyNCAxLjk4LTcuOTI5Ljc0Mi0xLjgzOC44NjYtMi4zNi43LTIuNzk5LS4zMDgtLjc2OC0uOTI3LS42ODYtMS40MDEuMTkyek0xNi4xMDUgMTMuNzczYy0xLjY5LjkzMy0yLjUzNiAxLjcyOS0zLjQ4NSAzLjEyOC0xLjc3MyAyLjY4OS0yLjM3MSA1LjktMi42MTkgMTMuOTM5LS4zMyAxMS42NjEgMS43MzIgMjMuODk5IDUuNzc0IDM0LjI5OC45MDcgMi4zMDUgMS4xNTUgMi43NDQgMS41NjcgMi43NDQgMS4wMSAwIDEuMDEtLjc0MS0uMDItMy4zNDgtMi40NTQtNi4xNzMtNC4zNTEtMTMuOTM5LTUuMjE3LTIxLjM0Ny0uNzIyLTYuMDM2LS41OTgtMTYuOTg0LjI0Ny0yMS4yNjUuNTU3LTIuOTA4IDIuMTI0LTUuMTg2IDQuMjI3LTYuMiAxLjM0LS42NiAzLjczMy0uNTc3IDUuMTk3LjE2NCAyLjIyNyAxLjEyNSA0LjA4MyA0LjA4OCA0LjM5MiA3LjAyNC4wNjIuNzEzIDAgMy40MDItLjE0NCA2LjAxLS4yMDcgMy43NTgtLjIyNyA1LjQ4Ny0uMDIgOC4yODUuNTE1IDcuNjU2IDIuMTIzIDE0LjQ2IDQuODg2IDIwLjcxNy45MjggMi4xMTIgMS4yNzkgMi41MjQgMS44MzUgMi4yNS42NC0uMzMuNTE2LTEuMTUzLS41MzYtMy41NjctMy43MTEtOC41MDYtNS4yMTctMTgtNC41MTYtMjguMjYyLjMzLTQuNjM3LjE2NS02LjM5My0uODI0LTkuMDgyLS43NjQtMi4wMy0yLjM5My00LjExNi00LjA4My01LjE4Ni0xLjAxLS42NTktMS40ODUtLjc2OC0zLjM0MS0uODUtMS44OTctLjA4My0yLjMxLS4wMjgtMy4zMi41NDh6TTM1LjIgMTUuMjI3Yy0uMTg2LjI0Ny0uMjY4LjY1OS0uMjA2LjkwNi43MjIgMi40NyAxLjE3NSA1LjQzMyAxLjI3OCA4LjM5Ni4xMjQgMy4yMzguMjY4IDMuOTc5LjgwNSAzLjk3OS41OTggMCAuOTA3LS44NTEuOTA3LTIuNTUyLS4wMi01LjEwNC0xLjI1OC0xMS4xNjgtMi4yNDgtMTEuMTY4LS4xMDMgMC0uMzUuMTkyLS41MzYuNDR6TTguOTkgMTYuMzhjLTEuMDUxLjkwNS0yLjA0IDYuNjk1LTIuMTg1IDEyLjc4Ni0uMDYyIDEuNzg0IDAgMi4xOTUuMzEgMi40Ny4yNDcuMjE5LjQ1My4yMTkuNyAwIC4yODktLjI0Ny40MTMtMS4wMTYuNjE5LTMuODQyLjMzLTQuNzc0LjYxOS02LjgwNSAxLjIxNy04Ljc4LjU5OC0yLjAwMy41OTgtMi4xOTUuMTAzLTIuNTgtLjQ3NS0uMzI5LS40NzUtLjMyOS0uNzYzLS4wNTR6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xOC45OTIgMTcuODM0Yy0uNTU3Ljc0LS4yMDYgMS41MS43ODQgMS43NTYgMS4xOTUuMjc0IDIuMjI3IDEuMzE3IDIuNzQyIDIuNzQ0LjQzMyAxLjE4LjQ1NCAxLjUzNi4zMyA0LjE5OC0uMTI0IDMuMDE4LS4wMiAzLjYyMi43MjIgMy42MjIuNTc3IDAgLjc4My0uODIzLjkyOC0zLjc2LjE0NC0zLjAxNy4wMi0zLjkyMy0uOTI4LTUuOTI2LS42OC0xLjM3Mi0xLjkxOC0yLjQ5Ny0zLjI3OS0yLjkwOC0uNzg0LS4yMi0uOTQ5LS4xOTItMS4zLjI3NHpNMTUuODE2IDE4LjkwNGMtLjgyNS43MTMtMS42OSAyLjUyNC0xLjkzOCA0LjExNi0uMzEgMS45NDgtLjY4IDcuMzI2LS41OTggOC45MTcuMDYyIDEuMTguMTI0IDEuMzcyLjUzNiAxLjQ1NS44NDUuMTY0IDEuMDcyLS4zODUgMS4wNzItMi42NjIgMC0xLjE1Mi4xNDUtMy40My4zMS01LjA0OS4zMDktMy4wNzMuNy00LjM5IDEuNTI2LTUuMDc2LjUzNi0uNDExLjU1Ni0xLjU5MS4wNjEtMS45NDgtLjI4OC0uMTkyLS41MzYtLjEzNy0uOTY5LjI0N3pcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE4LjI5IDIxLjg5NWMtMS4yMzYuNjg2LTEuNTA1IDIuMTEzLTEuNjcgOS40OTQtLjI2OCAxMC4zOTkgMS4yMTcgMTkuNTkgNC42NiAyOC44MSAxLjg3NyA1LjA0OSAyLjY0IDYuNTg1IDMuMjggNi41ODUuOTkgMCAuOTktLjc0LS4wNjItMy4wNDYtMi4wODMtNC42MzctMy45OC0xMC41NjMtNC45NS0xNS41MDItMS4wOTItNS43MDctMS4yNTctNy42LTEuMjM3LTE1LjA2NCAwLTcuMjE2LjE2NS05LjEzNy43NDMtOS4yNzQuNTU2LS4xMzcuNzYzLjc0LjUzNiAyLjU1Mi0uMjY4IDIuMzg3LS4yNjggMTEuMTQuMDIgMTMuODU2LjU5OSA1LjY1MiAxLjU4OCAxMC40NTQgMy4xMzUgMTUuMzM4IDEuMDMxIDMuMjM4IDIuNjYgNy4zMjYgMy42MyA5IC41NTYgMS4wMTUgMS4xNzUgMS4xOCAxLjQ4NC40MTIuMjI3LS41NzcuMjQ3LS40OTQtMS40MjMtNC4zMDgtMi45OS02LjgwNS00Ljg2Ni0xNC44NzItNS40MDMtMjMuMjk1LS4xODUtMy4wMTktLjE4NS00Ljg1Ny4wNDItOC42OTkuMjg4LTUuNTQyLjIyNy01Ljk1NC0xLjEzNC02LjcyMi0uNzg0LS40MzktMS4wNTItLjQzOS0xLjY1LS4xMzd6TTI5Ljg4IDI1LjA3OGMtLjQzMy41NzYtLjY2IDMuODk2LS42MTkgOS4xOTIuMDQxIDUuNDMyLjE2NSA2LjE3MyAxLjAxIDYuMTczaC41OTlsLS4wODMtNC44MDFjLS4wNDEtMi44ODIuMDQxLTUuOS4xODYtNy41MTkuMjQ3LTIuNTUxLjI0Ny0yLjc0NC0uMTAzLTMuMS0uNDk1LS40NjctLjYyLS40NC0uOTkuMDU1ek0uMzcxIDI2LjIwM2MtLjQ5NS42My0uNDk1IDEyLjQ4NCAwIDEzLjExNS4zNzEuNTIyLjQxMy41MjIuOTI4LjE2NS4zNzEtLjI3NC4zOTItLjY1OS4zOTItNi43MjIgMC02LjA2NC0uMDItNi40NDktLjM5Mi02LjcyMy0uNTE1LS4zNTctLjU1Ny0uMzU3LS45MjguMTY1ek0zNi40NzggMzAuODk1Yy0uMjY3LjMyOS0uMTY0IDEwLjM3MS4xMDQgMTAuNzI4LjM3LjQ5NC45NDguMzg0IDEuMTk2LS4xOTIuMzA5LS43OTYuMjY4LTkuOTg4LS4wNDItMTAuNC0uMjY4LS4zNTYtMS4wMy0uNDM4LTEuMjU4LS4xMzZ6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yMi43MDQgMzIuOTI1Yy0uNDEzIDEuMDcuMzA5IDkuNjMxIDEuMTU0IDEzLjU4Mi4zMSAxLjQyNy42NiAxLjg2NiAxLjIxNyAxLjU5Mi40OTUtLjI0Ny41NTctLjkwNi4yNDgtMi41MjUtLjUxNi0yLjYzNC0uOTI4LTYuMzY1LTEuMDczLTkuNTItLjA4Mi0xLjY3NS0uMjI3LTMuMTg0LS4zNS0zLjM3Ni0uMzEtLjUyMS0uOTI4LS4zODQtMS4xOTYuMjQ3ek02Ljg0NiAzNC40MDdjLS4xODUuMjc0LS4yMDYgMS4xMjUtLjEwMyAzLjA3My4xNjUgMy4xLjgyNSA5LjYzIDEuMTM0IDExLjExMy4yNDggMS4xOC45MDcgMS42MTggMS40MDIuOTYuMjY4LS4zODQuMjY4LS42ODYtLjA0LTIuODU0LS41MzctMy44MTQtLjcyMy01Ljc2Mi0uODY3LTktLjA4Mi0xLjY3My0uMjI3LTMuMTgyLS4zNS0zLjM3NC0uMjY5LS40NC0uODY3LS40MTItMS4xNzYuMDgyek0xMy41NjkgMzYuMDhjLS4zOTIuNDk1LS4zNSAxLjMxOC4yMDYgNi43MjMuNyA2Ljc1IDEuNDY0IDkuMzMgMi40NTQgOC4zNjkuMzctLjM1Ny4zNy0uNDY3LS4xNjUtMy43MDQtLjMxLTEuODExLS43MDEtNS4wMjItLjg4Ny03LjEwNy0uMTg1LTIuMDU4LS4zOTItMy45NTEtLjQ3NC00LjE3LS4yNDgtLjYwNC0uNzQzLS42Ni0xLjEzNC0uMTF6TS4yNjggNDIuMzA5Yy0uNDc0Ljc2OC4xNjUgNi4zMzggMS4xMTQgOS42ODYuNyAyLjUyNCAxLjAzIDMuMTI4IDEuNjUgMy4xMjguNzIxIDAgLjg2NS0xLjAxNS4zNS0yLjM4Ny0uNzYzLTEuOTQ4LTEuMy00LjY2NS0xLjU0Ny03LjY4My0uMjQ3LTIuODgxLS4yNjgtMi45NjMtLjc4My0zLjA0Ni0uMjg5LS4wNTUtLjY0LjExLS43ODQuMzAyek0zMC4yOTIgNDIuOTRjLS4wODIuMTEtLjE0NC40NjctLjE0NC44MjMgMCAxLjIzNSAxLjQ4NSA2LjY0IDIuNjQgOS41NzYuOTkgMi41NTIgMS4yNTcgMy4wMTkgMS42NyAzLjAxOSAxLjAzIDAgLjk2OS0uNjg2LS4yNjgtNC4wMDYtLjY0LTEuNzMtMS41MDYtNC41NTUtMS45MzktNi4yODQtLjctMi44NTMtLjgyNS0zLjE1NS0xLjI5OS0zLjIzOC0uMjY4LS4wNTQtLjU3NyAwLS42Ni4xMXpNMjUuMDU1IDUwLjYyM2MtLjE4Ni42MzEuMjI2IDIuMTQgMS41MDUgNS42MjUgMS4zMiAzLjYyMiAyLjc0MiA2Ljc1IDMuMTE0IDYuOTQyLjQxMi4yMi44NjYtLjExLjk5LS42ODYuMDgyLS4zMy0uMjI4LTEuMjktLjkwOC0yLjc3MS0uOTctMi4xNC0yLjEyNC01LjI2OS0zLjA5My04LjI2LS4zMy0xLjA3LS40OTUtMS4yODktLjk0OS0xLjI4OS0uMjg4IDAtLjU3Ny4xOTItLjY2LjQzOXpNOC45NSA1Mi4xNmMtLjM3Mi40OTMtLjMzLjg1LjY2IDQuNzE5IDEuMTM0IDQuNDQ1IDIuODA0IDkuNDk0IDMuMjc4IDkuODc4LjQ5NS40MTEgMS4wNzItLjEzNyAxLjA1Mi0uOTYtLjAyLS4zNTctLjQ1NC0xLjkyMS0uOTktMy40My0uNTM2LTEuNTM3LTEuNDAyLTQuNS0xLjkzOC02LjU4Ni0uNzg0LTMuMS0xLjA1Mi0zLjg0MS0xLjM4Mi0zLjg5Ni0uMjI3LS4wMjctLjUzNi4wODItLjY4LjI3NXpNMTYuMDIzIDU0LjEwOGMtLjE0NS43NC45MDcgNC4zMDggMi42MTggOC44OSAxLjQyMyAzLjgxNCAyLjE4NiA1LjIxMyAyLjcwMiA0LjkzOS43NDItLjM4NS42MTgtMS4wNy0uODQ2LTQuODMtLjgwNC0yLjA1Ny0xLjgxNC00LjkxMS0yLjI0Ny02LjMzOC0uOTktMy4yMzgtMS4wMS0zLjI5Mi0xLjYwOS0zLjI5Mi0uMzUgMC0uNTM2LjE5Mi0uNjE4LjYzelwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiZmluZ2VycHJpbnRfc3ZnX19jbGlwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgzOHY2M0gwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRmluZ2VycHJpbnRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdHb29nbGVQbGF5U3RvcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNDAgNzJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fY2xpcDBfNTE6NTQ2KVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTIzMS4xMDggNzEuMTA5SDguODkyQzMuOTkyIDcxLjEwOSAwIDY3LjEwMSAwIDYyLjIyVjguODlDMCAzLjk4OSAzLjk5MSAwIDguODkyIDBoMjIyLjIxNkMyMzYuMDA0IDAgMjQwIDMuOTkgMjQwIDguODg5VjYyLjIyYzAgNC44ODEtMy45OTYgOC44ODktOC44OTIgOC44ODl6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjMxLjEwOCAxLjQyM2M0LjExIDAgNy40NzUgMy4zNTYgNy40NzUgNy40NjZWNjIuMjJjMCA0LjExLTMuMzQzIDcuNDY2LTcuNDc1IDcuNDY2SDguODkyYy00LjExIDAtNy40NzUtMy4zNTYtNy40NzUtNy40NjZWOC44OWMwLTQuMTEgMy4zNDMtNy40NjYgNy40NzUtNy40NjZoMjIyLjIxNnptMC0xLjQyM0g4Ljg5MkMzLjk5MiAwIDAgNC4wMDggMCA4Ljg4OVY2Mi4yMmMwIDQuOSAzLjk5MSA4Ljg4OSA4Ljg5MiA4Ljg4OWgyMjIuMjE2YzQuODk2IDAgOC44OTItMy45OSA4Ljg5Mi04Ljg4OVY4Ljg5QzI0MCA0LjAwOCAyMzYuMDA0IDAgMjMxLjEwOCAwelwiXG4gICAgICAgICAgZmlsbD1cIiNBNkE2QTZcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMTI2LjQzMyAyMy41MjNjLTEuNjAzIDAtMi45NTQtLjU2My00LjAyMi0xLjY3MmE1LjcgNS43IDAgMDEtMS42MjUtNC4wNzhjMC0xLjYxOC41NDctMi45ODggMS42MjUtNC4wNzQgMS4wNjQtMS4xMDkgMi40MTUtMS42NzIgNC4wMTctMS42NzIgMS41ODUgMCAyLjkzNi41NjMgNC4wMjMgMS42NzIgMS4wNzcgMS4xMjEgMS42MjQgMi40OTEgMS42MjQgNC4wNzQtLjAxNyAxLjYyMi0uNTY1IDIuOTkyLTEuNjI0IDQuMDc0LTEuMDY0IDEuMTE3LTIuNDE2IDEuNjc2LTQuMDE4IDEuNjc2em0tNDcuNjg4IDBjLTEuNTY4IDAtMi45MjgtLjU1NC00LjA0LTEuNjUtMS4xMDQtMS4wOS0xLjY2NS0yLjQ2OS0xLjY2NS00LjA5NiAwLTEuNjI3LjU2MS0zLjAwNiAxLjY2NS00LjA5NiAxLjA5LTEuMDk1IDIuNDUtMS42NSA0LjA0LTEuNjVhNS42MSA1LjYxIDAgMDEyLjI1Ni40N2MuNzEuMzA3IDEuMjg5LjcyMyAxLjcxNyAxLjIzM2wuMTA2LjEyOS0xLjE5NiAxLjE3OS0uMTI0LS4xNDZjLS42NzUtLjgwNy0xLjU4LTEuMjAyLTIuNzc3LTEuMjAyLTEuMDY5IDAtMiAuMzgxLTIuNzY4IDEuMTM1LS43NzMuNzU4LTEuMTY2IDEuNzUxLTEuMTY2IDIuOTUzIDAgMS4yMDEuMzkzIDIuMTk0IDEuMTY2IDIuOTUyYTMuODMgMy44MyAwIDAwMi43NjggMS4xMzVjMS4xNCAwIDIuMDk3LS4zODEgMi44NDMtMS4xMzUuNDQyLS40NDMuNzE2LTEuMDY0LjgxMy0xLjg0OGgtMy44Mzd2LTEuNjU5aDUuNDg0bC4wMjIuMTUxYy4wNC4yOC4wOC41NjguMDguODM0IDAgMS41My0uNDYgMi43NjYtMS4zNyAzLjY4LTEuMDMzIDEuMDgxLTIuMzg0IDEuNjMtNC4wMTcgMS42M3ptNjMuNDA2LS4yMzVoLTEuNjkxbC01LjE3OS04LjMyMS4wNDQgMS40OTh2Ni44MThoLTEuNjkxVjEyLjI2N2gxLjkyOWwuMDUzLjA4NCA0Ljg3IDcuODM4LS4wNDQtMS40OTR2LTYuNDI4aDEuNzA5djExLjAyem0tMjguNDI1IDBoLTEuNzEzdi05LjM2M2gtMi45NzJ2LTEuNjU4aDcuNjUydjEuNjU4aC0yLjk3MXY5LjM2M2guMDA0em0tNi4wOCAwaC0xLjcwOFYxMi4yNjdoMS43MDh2MTEuMDJ6bS05LjYwMyAwaC0xLjcwOHYtOS4zNjNoLTIuOTcydi0xLjY1OGg3LjY1MnYxLjY1OGgtMi45NzJ2OS4zNjN6bS01Ljc2Mi0uMDE4SDg1LjczVjEyLjI2N2g2LjU1MnYxLjY1OGgtNC44Mzl2My4wMjNoNC4zNjd2MS42NGgtNC4zNjd2My4wMjRoNC44NHYxLjY1OHptMzEuMzgzLTIuNTU4Yy43NjQuNzY3IDEuNjkxIDEuMTUzIDIuNzY5IDEuMTUzIDEuMTA4IDAgMi4wMTMtLjM3NyAyLjc2OC0xLjE1My43NTEtLjc1NCAxLjEzLTEuNzQyIDEuMTMtMi45MzUgMC0xLjE5Mi0uMzc5LTIuMTg1LTEuMTI1LTIuOTM1YTMuNzgyIDMuNzgyIDAgMDAtMi43NjktMS4xNTJjLTEuMTA4IDAtMi4wMTMuMzc3LTIuNzY0IDEuMTUyLS43NS43NTQtMS4xMyAxLjc0My0xLjEzIDIuOTM1IDAgMS4xOTMuMzc1IDIuMTg2IDEuMTIxIDIuOTM1elwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMTIwLjYyNyAzOC42NzVjLTQuMTcyIDAtNy41NTQgMy4xOC03LjU1NCA3LjU2NCAwIDQuMzQ0IDMuNDA0IDcuNTYzIDcuNTU0IDcuNTYzIDQuMTcyIDAgNy41NTQtMy4yMDEgNy41NTQtNy41NjMgMC00LjM4NS0zLjM4Mi03LjU2My03LjU1NC03LjU2M3ptMCAxMi4xM2MtMi4yODMgMC00LjI0Ny0xLjg5OC00LjI0Ny00LjU4NCAwLTIuNzI3IDEuOTY5LTQuNTg0IDQuMjQ3LTQuNTg0IDIuMjgzIDAgNC4yNDcgMS44NTcgNC4yNDcgNC41ODQuMDA1IDIuNzA0LTEuOTY0IDQuNTg0LTQuMjQ3IDQuNTg0em0tMTYuNDgyLTEyLjEzYy00LjE3MiAwLTcuNTU0IDMuMTgtNy41NTQgNy41NjQgMCA0LjM0NCAzLjQwNCA3LjU2MyA3LjU1NCA3LjU2MyA0LjE3MiAwIDcuNTU0LTMuMjAxIDcuNTU0LTcuNTYzIDAtNC4zODUtMy4zODYtNy41NjMtNy41NTQtNy41NjN6bTAgMTIuMTNjLTIuMjgzIDAtNC4yNDctMS44OTgtNC4yNDctNC41ODQgMC0yLjcyNyAxLjk2OS00LjU4NCA0LjI0Ny00LjU4NCAyLjI4MyAwIDQuMjQ3IDEuODU3IDQuMjQ3IDQuNTg0IDAgMi43MDQtMS45NjQgNC41ODQtNC4yNDcgNC41ODR6bS0xOS42MTItOS44MnYzLjIwMWg3LjY1MWMtLjIzNCAxLjc5NS0uODI1IDMuMTIxLTEuNzMgNC4wMy0xLjEyMiAxLjEyNi0yLjg1MyAyLjM1LTUuOTAzIDIuMzUtNC43MDMgMC04LjM4LTMuODEzLTguMzgtOC41MzUgMC00LjcyMSAzLjY3Ny04LjUzMyA4LjM4LTguNTMzIDIuNTM4IDAgNC4zODggMS4wMDYgNS43NjEgMi4yOTFsMi4yNi0yLjI3Yy0xLjkwNy0xLjgzNS00LjQ0NS0zLjI0LTguMDA0LTMuMjQtNi40NSAwLTExLjg2MyA1LjI3NS0xMS44NjMgMTEuNzM1IDAgNi40NzcgNS40MDggMTEuNzM0IDExLjg2MyAxMS43MzQgMy40ODQgMCA2LjA5Ny0xLjE0MyA4LjE2NC0zLjI5OCAyLjEwNi0yLjExNCAyLjc3My01LjA5OCAyLjc3My03LjUwNSAwLS43NS0uMDU4LTEuNDIzLS4xNzctMS45OTVoLTEwLjhjLjAwNS0uMDA1LjAwNS4wMzUuMDA1LjAzNXptODAuMjE5IDIuNDkyYy0uNjMxLTEuNjk4LTIuNTM5LTQuODItNi40NS00LjgyLTMuODc3IDAtNy4xIDMuMDY0LTcuMSA3LjU2NCAwIDQuMjQ3IDMuMTg4IDcuNTYzIDcuNDc1IDcuNTYzIDMuNDQ0IDAgNS40NDgtMi4xMTUgNi4yNzQtMy4zNTZsLTIuNTU2LTEuNzJjLS44NDggMS4yNjMtMi4wMjcgMi4wOTItMy43IDIuMDkyLTEuNjkxIDAtMi44NzUtLjc3MS0zLjY2MS0yLjI5MmwxMC4wNzEtNC4xODljMCAuMDA0LS4zNTMtLjg0Mi0uMzUzLS44NDJ6bS0xMC4yNyAyLjUyN2MtLjA3OS0yLjkyMiAyLjI2MS00LjQwNyAzLjkzNC00LjQwNyAxLjMyMSAwIDIuNDIuNjUyIDIuNzk1IDEuNmwtNi43MjkgMi44MDd6bS04LjE4MSA3LjMyOGgzLjMwN3YtMjIuMjJoLTMuMzA3djIyLjIyem0tNS40My0xMi45NzZoLS4xMmMtLjc0Ni0uODkxLTIuMTYzLTEuNjk4LTMuOTczLTEuNjk4LTMuNzU4IDAtNy4yMTkgMy4zMi03LjIxOSA3LjU4NSAwIDQuMjQ3IDMuNDQ0IDcuNTI4IDcuMjE5IDcuNTI4IDEuNzg4IDAgMy4yMjctLjgxMiAzLjk3My0xLjcyaC4xMnYxLjA4NmMwIDIuODg2LTEuNTM3IDQuNDQyLTQuMDE0IDQuNDQyLTIuMDI2IDAtMy4yODUtMS40NjMtMy43OTctMi42ODdsLTIuODc0IDEuMjA2Yy44MjUgMS45OTUgMy4wMjkgNC40NjQgNi42NjcgNC40NjQgMy44NzYgMCA3LjE2MS0yLjI5MiA3LjE2MS03Ljg4MlYzOS4xMWgtMy4xMjZ2MS4yNDZoLS4wMTd6bS0zLjc5OCAxMC40NDljLTIuMjgyIDAtNC4xOS0xLjkxNS00LjE5LTQuNTYyIDAtMi42NjkgMS45MDgtNC42MDIgNC4xOS00LjYwMiAyLjI2MSAwIDQuMDE0IDEuOTU1IDQuMDE0IDQuNjAyLjAyMiAyLjY0Ny0xLjc0OSA0LjU2Mi00LjAxNCA0LjU2MnptNDMuMTYzLTE5LjY5M2gtNy45MDd2MjIuMjJoMy4zMDd2LTguNDE1aDQuNjA1YzMuNjYgMCA3LjI1OC0yLjY2NCA3LjI1OC02Ljg5MyAwLTQuMjMtMy41ODUtNi45MTItNy4yNjMtNi45MTJ6bS4wOTcgMTAuNzAyaC00LjcwMlYzNC4xOWg0LjcwMmMyLjQ3NyAwIDMuODc3IDIuMDUzIDMuODc3IDMuODEzIDAgMS43NDItMS40MTcgMy44MTItMy44NzcgMy44MTJ6bTIwLjQyMS0zLjE3OGMtMi40MDIgMC00Ljg3OSAxLjA2OC01LjkwNCAzLjM5NWwyLjkzMiAxLjIyNGMuNjMyLTEuMjI0IDEuNzg4LTEuNjQgMy4wMTEtMS42NCAxLjcxMyAwIDMuNDQ0IDEuMDI4IDMuNDg0IDIuODY0di4yMzVjLS41OTItLjMzNy0xLjg5LS44NTItMy40NDQtLjg1Mi0zLjE2NiAwLTYuMzc1IDEuNzM4LTYuMzc1IDQuOTk3IDAgMi45ODMgMi41OTYgNC44OTggNS40ODggNC44OTggMi4yMiAwIDMuNDQzLTEuMDA2IDQuMjA3LTIuMTcyaC4xMTl2MS43MmgzLjE4OHYtOC41MTJjMC0zLjk2My0yLjkzMS02LjE1Ny02LjcwNi02LjE1N3ptLS40MTUgMTIuMTY5Yy0xLjA4MiAwLTIuNTk3LS41MzItMi41OTctMS44OTggMC0xLjcyIDEuODktMi4zNzEgMy41MDItMi4zNzEgMS40NTcgMCAyLjE0NS4zMTQgMy4wMTEuNzQ5YTMuOTg3IDMuOTg3IDAgMDEtMy45MTYgMy41MnpNMjE5LjA5IDM5LjExbC0zLjc5NyA5LjYzOGgtLjExOWwtMy45MzQtOS42MzhoLTMuNTU5bDUuOTAzIDEzLjQ3My0zLjM2NCA3LjQ4N2gzLjQ0NGw5LjA4Mi0yMC45NmgtMy42NTZ6bS0yOS43NjcgMTQuMjIyaDMuMzA3di0yMi4yMmgtMy4zMDd2MjIuMjJ6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0xOC40NzMgMTMuMzkzYy0uNTEyLjU1NC0uODA4IDEuNC0uODA4IDIuNTFWNTUuMjFjMCAxLjEwOS4yOTYgMS45NTYuODI2IDIuNDg4bC4xMzcuMTIgMjEuOTM0LTIyLjAyNXYtLjQ5MkwxOC42MSAxMy4yNzNsLS4xMzcuMTJ6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MF9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDcuODYgNDMuMTU3bC03LjMxNi03LjM0NXYtLjUxNWw3LjMxNi03LjM0NS4xNi4wOTcgOC42NTMgNC45MzljMi40NzcgMS40IDIuNDc3IDMuNzE1IDAgNS4xMzNMNDguMDIgNDMuMDZsLS4xNTkuMDk3elwiXG4gICAgICAgICAgZmlsbD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDFfbGluZWFyXzUxOjU0NilcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTQ4LjAyIDQzLjA2bC03LjQ3NS03LjUwNi0yMi4wNzIgMjIuMTYyYy44MDguODcgMi4xNjQuOTY3IDMuNjc4LjEyTDQ4LjAyIDQzLjA2elwiXG4gICAgICAgICAgZmlsbD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDJfbGluZWFyXzUxOjU0NilcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTQ4LjAyIDI4LjA0OUwyMi4xNSAxMy4yOTVjLTEuNTE0LS44NjktMi44NzQtLjc0OS0zLjY3OC4xMmwyMi4wNzIgMjIuMTQgNy40NzQtNy41MDZ6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50M19saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgb3BhY2l0eT17MC4yfVxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTQ3Ljg2IDQyLjlMMjIuMTcgNTcuNTU3Yy0xLjQzNi44MjktMi43MTYuNzcxLTMuNTQxLjAxN2wtLjEzNy4xMzguMTM3LjEyYy44MjUuNzQ5IDIuMTA1LjgxIDMuNTQtLjAxOEw0OC4wMzggNDMuMDZsLS4xNzctLjE2elwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIG9wYWNpdHk9ezAuMTJ9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNTYuNjczIDM3Ljg2NEw0Ny44MzggNDIuOWwuMTYuMTYgOC42NTMtNC45MzljMS4yNC0uNzA5IDEuODUtMS42NCAxLjg1LTIuNTY3LS4wNzUuODUyLS43MDYgMS42NTgtMS44MjggMi4zMXpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBvcGFjaXR5PXswLjI1fVxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTIyLjE1IDEzLjU1MmwzNC41MjMgMTkuNjkzYzEuMTIyLjYzNCAxLjc1MyAxLjQ2MyAxLjg1IDIuMzEgMC0uOTI3LS42MS0xLjg1OC0xLjg1LTIuNTY3TDIyLjE1MSAxMy4yOTVjLTIuNDc3LTEuNDIzLTQuNDg2LS4yMzUtNC40ODYgMi42MDd2LjI1N2MwLTIuODQ2IDIuMDA5LTQuMDEyIDQuNDg2LTIuNjA3elwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MF9saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17MzguNTk1fVxuICAgICAgICAgIHkxPXsxNS40Nzh9XG4gICAgICAgICAgeDI9ezMuNDR9XG4gICAgICAgICAgeTI9ezI0LjgwN31cbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzAwQTBGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjAwN30gc3RvcENvbG9yPVwiIzAwQTFGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjI2fSBzdG9wQ29sb3I9XCIjMDBCRUZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNTEyfSBzdG9wQ29sb3I9XCIjMDBEMkZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNzZ9IHN0b3BDb2xvcj1cIiMwMERGRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwRTNGRlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDFfbGluZWFyXzUxOjU0NlwiXG4gICAgICAgICAgeDE9ezU5LjkwM31cbiAgICAgICAgICB5MT17MzUuNTU1fVxuICAgICAgICAgIHgyPXsxNy4wNjN9XG4gICAgICAgICAgeTI9ezM1LjU1NX1cbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGRTAwMFwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjQwOX0gc3RvcENvbG9yPVwiI0ZGQkQwMFwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjc3NX0gc3RvcENvbG9yPVwib3JhbmdlXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNGRjlDMDBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQyX2xpbmVhcl81MTo1NDZcIlxuICAgICAgICAgIHgxPXs0My45NTV9XG4gICAgICAgICAgeTE9ezM5LjYzOX1cbiAgICAgICAgICB4Mj17MTUuNTc4fVxuICAgICAgICAgIHkyPXs4Ny4yMDV9XG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGRjNBNDRcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0MzMTE2MlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDNfbGluZWFyXzUxOjU0NlwiXG4gICAgICAgICAgeDE9ezEyLjkxNX1cbiAgICAgICAgICB5MT17MC4zMTh9XG4gICAgICAgICAgeDI9ezI1LjU3Nn1cbiAgICAgICAgICB5Mj17MjEuNTYyfVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMzJBMDcxXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMDY5fSBzdG9wQ29sb3I9XCIjMkRBNzcxXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNDc2fSBzdG9wQ29sb3I9XCIjMTVDRjc0XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuODAxfSBzdG9wQ29sb3I9XCIjMDZFNzc1XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwMEYwNzZcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX2NsaXAwXzUxOjU0NlwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgyNDB2NzEuMTA5SDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdHb29nbGVQbGF5U3RvcmVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdIb21lcGFnZU9wdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMi4wOSAxLjY0M2MtMS4wMjYuMTMtMS44ODcuOTk2LTIuMDM0IDIuMDUtLjA3NC40Ny0uMDY4IDEuNzI4IDAgMi4yMjZBMi40NzYgMi40NzYgMCAwMDEuNDEgNy43NzdsLjM3NC4xODFIMjcuMjE1bC4zNzQtLjE4MWEyLjQ3NiAyLjQ3NiAwIDAwMS4zNTQtMS44NThjLjA2OC0uNDg3LjA2OC0xLjY3Ny4wMDUtMi4xOTJhMi40MDUgMi40MDUgMCAwMC0yLjA5LTIuMDljLS40NTMtLjA1Ny0yNC4zMS0uMDU3LTI0Ljc2OS4wMDZ6TTEuODMgMTEuMzU3Yy0uNDYuMTI0LS43NDguMjk0LTEuMDk0LjY0NS0uNTc3LjU3Mi0uNzM2IDEuMTEtLjczNiAyLjQ3IDAgLjkyMy4wNzQgMS40MjEuMjYgMS44MTguMTg3LjM5Ni42MTguODY3Ljk3IDEuMDYuNjQuMzQ1LS4yMTYuMzIyIDEzLjI3LjMyMiAxMy40ODYgMCAxMi42My4wMjMgMTMuMjctLjMyMy4zNTItLjE5Mi43ODItLjY2My45Ny0xLjA2LjE4Ni0uMzk2LjI2LS44OTQuMjYtMS44MTcgMC0uOTIzLS4wNzQtMS40MjItLjI2LTEuODE4LS4xODgtLjM5Ny0uNjE4LS44NjctLjk3LTEuMDYtLjY0LS4zNDUuMjIyLS4zMjItMTMuMjk4LS4zMTctMTAuNDU2IDAtMTIuMzkzLjAxMi0xMi42NDMuMDh6TTEuNjk5IDIxLjA2NWMtLjQxNC4xMy0uNzA4LjMyMy0xLjAzNy42OC0uMzQuMzYyLS41MjcuNzY0LS42MDYgMS4yOC0uMDY4LjQ5Mi0uMDc0IDEuNzUgMCAyLjIyNmEyLjQwMyAyLjQwMyAwIDAwMi4wMjggMi4wNWMuMjU1LjA0IDQuNDEyLjA1NyAxMi42Ny4wNDVsMTIuMjkxLS4wMTcuMzM0LS4xMjRhMi41MDggMi41MDggMCAwMDEuNDUtMS40NzljLjEwMi0uMjY2LjEzLS40ODEuMTUzLTEuMjI5LjA1MS0xLjU0Ni0uMDk2LTIuMTc1LS42NjgtMi43NzUtLjM0LS4zNTctLjYzNC0uNTQ0LTEuMDY1LS42NzQtLjI4My0uMDgtMS40NzgtLjA5LTEyLjc3Mi0uMDg1LTExLjc1OSAwLTEyLjQ4NC4wMDUtMTIuNzc4LjEwMnpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0hvbWVwYWdlT3B0aW9uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlua2RuKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMi45NTggMy42MjVhMi40MTcgMi40MTcgMCAwMTIuNDE3IDIuNDE3djE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3IDIuNDE3SDYuMDQyYTIuNDE3IDIuNDE3IDAgMDEtMi40MTctMi40MTdWNi4wNDJhMi40MTcgMi40MTcgMCAwMTIuNDE3LTIuNDE3aDE2LjkxNnptLS42MDQgMTguNzNWMTUuOTVhMy45NCAzLjk0IDAgMDAtMy45MzktMy45NGMtMS4wMjcgMC0yLjIyMy42My0yLjgwMyAxLjU3MlYxMi4yNEgxMi4yNHYxMC4xMTRoMy4zNzJ2LTUuOTU3YzAtLjkzLjc0OS0xLjY5MiAxLjY4LTEuNjkyYTEuNjkxIDEuNjkxIDAgMDExLjY5IDEuNjkydjUuOTU3aDMuMzcyek04LjMxNCAxMC4zNDJhMi4wMyAyLjAzIDAgMDAyLjAzLTIuMDMgMi4wMzcgMi4wMzcgMCAwMC0yLjAzLTIuMDQyQTIuMDQyIDIuMDQyIDAgMDA2LjI3IDguMzEzYzAgMS4xMjQuOTE5IDIuMDMgMi4wNDIgMi4wM3ptMS42NzkgMTIuMDExVjEyLjI0SDYuNjQ2djEwLjExNGgzLjM0N3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTGlua2RuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWFpbChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQuMTY3IDQuODMzSDQuODMzQTIuNDEzIDIuNDEzIDAgMDAyLjQzIDcuMjVsLS4wMTIgMTQuNWEyLjQyNCAyLjQyNCAwIDAwMi40MTYgMi40MTdoMTkuMzM0YTIuNDI0IDIuNDI0IDAgMDAyLjQxNi0yLjQxN1Y3LjI1YTIuNDI0IDIuNDI0IDAgMDAtMi40MTYtMi40MTd6bTAgMTYuOTE3SDQuODMzVjkuNjY3bDkuNjY3IDYuMDQxIDkuNjY3LTYuMDQxVjIxLjc1ek0xNC41IDEzLjI5Mkw0LjgzMyA3LjI1aDE5LjMzNEwxNC41IDEzLjI5MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWFpbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01lZGlhKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOS4zNSAxMC4wNEE3LjQ5IDcuNDkgMCAwMDEyIDRDOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNEE1Ljk5NCA1Ljk5NCAwIDAwMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTQgMTN2NGgtNHYtNEg3bDUtNSA1IDVoLTN6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lZGlhXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWV0YURhdGEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMuMDIgMzcuMzA3bDEyLjUxMiAyMC43NGMuMDU2LS4xNS4xMTktLjI5LjE4OC0uNDIxIDUuMDQxLTguMzU4IDEwLjA4NC0xNi43MTMgMTUuMTI4LTI1LjA2NS4xNzktLjI3Mi4yNzYtLjY2Mi4yNjQtMS4wNjQtLjAxMS0yLjQxOSAwLTQuODM3IDAtNy4zMTMtLjExNy4wODQtLjIyMi4xNTEtLjMyMy4yMzMtLjg0Mi42ODEtMS43MTMgMS4yNDgtMi42NTEgMS40My0uMjE5LjAzMi0uNDA4LjI2Mi0uNDkzLjU5Ny0uODAyIDIuMzcyLTIuMDUzIDMuNTkyLTMuNjc2IDMuNTUtMS43MDMtLjA0MS0yLjk2Mi0xLjQxNS0zLjctMy45Ny0uODgtMy4wNDctLjE5Mi02LjgwMiAxLjU0Mi04LjYxNyAxLjc1NS0xLjgzNSA0LjA1OC0xLjIzIDUuMzg0IDEuNDE2LjI0My40OTUuNDMgMS4wMTguMjkgMS43MDEtLjA4My40NjUtLjMwMy44MjYtLjU4NC45NTgtLjI4Mi4xMzItLjU4NC4wMTYtLjgwMS0uMzA2LS4yMi0uMzE0LS4zOTctLjcxMi0uNjI1LTEuMDEtLjc2OC0xLTEuNjEyLTEuMTkyLTIuNDkyLS40NjUtLjkzLjc3Mi0xLjM3NSAyLjA2NS0xLjMwNiAzLjc3OS4wNjYgMS41OTcuNTk3IDIuNzA2IDEuNDc0IDMuMzIuOTE2LjY0OCAxLjk4MS4xOTggMi42LTEuMDk4LS43NzQtLjI5Ny0xLjQ3OC0uODM3LTIuMDA1LTEuOGExMi41OSAxMi41OSAwIDAxLS45NTMtMi4zMjRjLS4xOTUtLjYyOC4wNTMtMS4zOTUuNDIxLTEuNzA3LjM4MS0uMzI4Ljg1LS4xMjggMS4wODkuNDY1LjMzMi44OC42NzYgMS43MDIgMS4yNjIgMi4xNzQuODg0LjY5OCAxLjc5Ny42MiAyLjcwNy4yODQgMS43NTQtLjYzNSAzLjE4OC0yLjE5MyA0LjQzLTQuMjU1IDEuMzczLTIuMjcyIDIuMzU5LTQuOTEzIDIuNjY2LTguMTM4LjE5LTEuOTg1LjAyMi0zLjg3MS0xLjAzLTUuMTc1LS44NTQtMS4wNi0xLjg0Mi0xLjExLTIuODUyLS43OTYtMS4xODQuMzk3LTIuMyAxLjIxOS0zLjI3MiAyLjQwN2E1LjA5IDUuMDkgMCAwMS0uNDM4LjQ3OWMtLjQuNDE0LS45MjQuMjI3LTEuMTg2LS40MjItLjI2Mi0uNjQ5LS4xNjUtMS41MjQuMjE4LTEuOTc4YTE1LjI2NSAxNS4yNjUgMCAwMTEuNjcyLTEuOGMxLjQwMy0xLjIyNSAyLjg5NS0xLjk2NCA0LjUxMi0xLjczNCAyLjM3My4zNDcgNC4wNzkgMy4zNCA0LjE5MSA3LjI5Mi4wOTYgMy4zNzEtLjYzMyA2LjI5OC0xLjc0IDkuMDE2LS42NjEgMS42LTEuNDU1IDMuMDM4LTIuMzU5IDQuMjcxLS4xMTUuMTk4LS4xOC40Ni0uMTgyLjczNS0uMDExIDMuMjE1LS4wMTEgNi40MzEgMCA5LjY1LjAxNC42Ni0uMTQ1IDEuMy0uNDM1IDEuNzU1LTUuNDEzIDguOTUtMTAuODIyIDE3LjkwMy0xNi4yMjggMjYuODYxLS41Ni45My0xLjAwMS45My0xLjU2MiAwLTQuNDgyLTcuNDIzLTguOTYyLTE0Ljg1NS0xMy40NC0yMi4yOTUtLjU3My0uOTQ5LS41NzItMS42NzIuMDA2LTIuNjMyIDUuMzk2LTguOTQgMTAuNzkyLTE3Ljg4OCAxNi4xODktMjYuODQzLjI3LS40ODYuNjU0LS43NTUgMS4wNTMtLjczNyAyLjc0Ny4wMjIgNS40OTQuMDIyIDguMjQyIDAgLjQtLjAyMi43ODYuMjQzIDEuMDU5LjcyOCAxLjMyOCAyLjIzNyAyLjY2NSA0LjQ1MiA0LjAwMiA2LjY4Mi4yOTEuNDYxLjM1NiAxLjE5Mi4xNTcgMS43NzItLjE5OS41OC0uNjEuODYzLS45OTkuNjgzYTEuNTYgMS41NiAwIDAxLS40ODQtLjU0MSA3NzIuMTAzIDc3Mi4xMDMgMCAwMS0zLjYwMi01Ljk0OGMtLjE1LS4yNzUtLjM2Ny0uNDI0LS41OS0uNDA0LTIuNDQ2IDAtNC44OSAwLTcuMzM2LjAyLS4xOS4wMS0uMzcyLjEyOS0uNTE1LjMzOC01LjA5IDguNDEyLTEwLjE3NCAxNi44My0xNS4yNTQgMjUuMjU1bC0uMTQ0LjI2N3pcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTEuNTc0IDMxLjI2NVYzOC42ODNjLS4wMDcuODE1LS4zOTIgMS40ODItLjg4MSAxLjUyNy0uNDkuMDQ2LS45MTctLjU0Ni0uOTc4LTEuMzU0YTUuMjEyIDUuMjEyIDAgMDEtLjAxMi0uNDMydi04LjQwOGMwLTEuMjY5LjM1Ny0xLjg2NSAxLjExMi0xLjg2N2g1LjEzMWMuNDIgMCAuNzU1LjI0Ny45MzIuOTEuMTYzLjU5Ni4xMzkgMS4yMjEtLjE0OSAxLjY1Mi0uMjA3LjMwNS0uNDY4LjQ5LS43NDQuNTI5LTEuMzEzLjA1Mi0yLjYyNi4wMjItMy45NC4wMjVoLS40NzF6TTE5LjEzNiA0My43Nzl2LTYuOTQyYTQuNTI0IDQuNTI0IDAgMDEuMTI1LTEuMTM1Yy4xODMtLjYzOC42MS0uOTc1IDEuMDI1LS44MDkuNDE3LjE0Ni43MTguNzUyLjcyNSAxLjQ2LjAxNy45MjcuMDA4IDEuODU0LjAwOCAyLjc4MXY1Ljg3NGMwIDEuMzA4LS4zNTIgMS45MDEtMS4xMzEgMS45MDRoLTUuMTRjLS4zODQuMDM5LS43NDMtLjMxNi0uOTA1LS44OTUtLjE1OC0uNTEtLjEyNC0xLjEyNi4wODctMS41OC4yMDEtLjQ1OS41MzItLjcxLjg3My0uNjYzaDMuODczbC40Ni4wMDV6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWV0YURhdGFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdPcGVuc2VhTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTguODk1IDE0LjY4MWMtLjA0NS0uMDQ1LS4xMTItLjA0NS0uMTgtLjAyMmwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDAgLjMxLjMxIDAgMDEuMDg5LS4wNjdjLjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NS0uMzU5IDAtLjYyNy4yOTEtLjYyNy42NSAwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0YTUuMTYgNS4xNiAwIDAwLjQ0OC0uOTQxYy4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3LjA0NC0uMDIyLjAyMi0uMDktLjAyMy0uMTEyem0tOS45OTctLjQ5M2gyLjU1NWMuMDQ1IDAgLjA2OC0uMDIzLjA2OC0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDY3bC0xLjI1NS0uNTgzYy0uMDIzLS4wMjItLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA2Ny4wMjIuMTEyLjA2Ny4xMTJ6TTEzIDBDNS44MjggMCAwIDUuODI4IDAgMTNzNS44MjggMTMgMTMgMTMgMTMtNS44MjggMTMtMTNTMjAuMTcyIDAgMTMgMHptLS4wNDUgMjIuNDU5Yy01LjE3NyAwLTkuMzY5LTQuMTkyLTkuMzY5LTkuMzkyIDAtNS4xNzcgNC4xOTItOS4zOTEgOS4zNy05LjM5MSA1LjE3NyAwIDkuMzY4IDQuMjE0IDkuMzY4IDkuMzkxLS4wMjIgNS4yLTQuMjE0IDkuMzkyLTkuMzY5IDkuMzkyem01Ljc2LTcuOGwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDAgLjMxLjMxIDAgMDEuMDg5LS4wNjdjLjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NS0uMzU5IDAtLjYyNy4yOTEtLjYyNy42NSAwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0YTUuMTYgNS4xNiAwIDAwLjQ0OC0uOTQxYy4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3IDAtLjA0NS0uMDIzLS4xMTItLjA2OC0uMTM0IDAgMC0uMDY3LS4wMjMtLjEzNSAwem0tOS44MTctLjQ3MWgyLjU1NWMuMDQ1IDAgLjA2OC0uMDIzLjA2OC0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDY3bC0xLjI1NS0uNTgzYy0uMDIzLS4wMjItLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA2Ny4wMjIuMTEyLjA2Ny4xMTJ6XCJcbiAgICAgICAgZmlsbD1cIiMzMjkxRTlcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTEuNDc2IDExLjI5NmwtMS4yNTUtLjU4MmMtLjAyMy0uMDIzLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNDQuMDIyLjA4OS4wNjcuMDg5aDIuNTU2Yy4wNDQgMCAuMDY3LS4wMjMuMDY3LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNDR6bTcuNDE5IDMuMzg1Yy0uMDQ1LS4wNDUtLjExMi0uMDQ1LS4xOC0uMDIybC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMGMuMDIyLS4wMjIuMDQ0LS4wNDQuMDg5LS4wNjcuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1cy0uNjI3LjI5MS0uNjI3LjY1YzAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjQuMTc5LS4yOTEuMzM2LS42MjcuNDQ4LS45NDEuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1Ny4wNDQtLjAyMi4wMjItLjA5LS4wMjMtLjExMnpcIlxuICAgICAgICBmaWxsPVwiIzMyOTFFOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z09wZW5zZWFMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUXJDb2RlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDcgNDdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI3FyLWNvZGVfc3ZnX19jbGlwMClcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTUuODc1IDI0LjU0Mmg0LjY2N3Y0LjY2Nkg1Ljg3NXYtNC42NjZ6bTE4LjY2Ny0xNGg0LjY2NnY5LjMzM2gtNC42NjZ2LTkuMzMzem0tNC42NjcgMTRoOS4zMzN2OS4zMzNoLTQuNjY2di00LjY2N2gtNC42Njd2LTQuNjY2em0xNCAwaDQuNjY3djQuNjY2aDQuNjY2di00LjY2Nmg0LjY2N3Y0LjY2NmgtNC42Njd2NC42NjdoNC42Njd2OS4zMzNoLTQuNjY3djQuNjY3aC00LjY2NnYtNC42NjdoLTkuMzM0djQuNjY3aC00LjY2NnYtOS4zMzNoOS4zMzN2LTQuNjY3aDQuNjY3di00LjY2N2gtNC42Njd2LTQuNjY2em05LjMzMyAxOC42NjZ2LTkuMzMzaC00LjY2NnY5LjMzM2g0LjY2NnpNMzMuODc1IDUuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6TTUuODc1IDUuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6TTUuODc1IDMzLjg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2elwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cInFyLWNvZGVfc3ZnX19jbGlwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGg0N3Y0N0gwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUXJDb2RlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUmFyaWJsZUxvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNiAyNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwLjggMEg1LjJBNS4yIDUuMiAwIDAwMCA1LjJ2MTUuNkE1LjIgNS4yIDAgMDA1LjIgMjZoMTUuNmE1LjIgNS4yIDAgMDA1LjItNS4yVjUuMkE1LjIgNS4yIDAgMDAyMC44IDB6XCJcbiAgICAgICAgZmlsbD1cIiNGRURBMDNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuOTQgMTIuOTA1Yy44Mi0uMjEzIDEuNTQ4LS44MjYgMS41NDgtMi4wNTcgMC0yLjA1LTEuNzQxLTIuNTI4LTMuOTcyLTIuNTI4SDYuNjN2OS4yMzRoMy43NFYxNC40Mmg0LjQzN2MuNjgzIDAgMS4wODMuMjcxIDEuMDgzLjk0MnYyLjE5MmgzLjc0di0yLjMwOGMwLTEuMjU4LS43MS0yLjA1MS0xLjY5LTIuMzQxem0tMy4wNjktLjk3NEgxMC4zN3YtLjkwM2g0LjUwMWMuNDkgMCAuNzg3LjA2NS43ODcuNDUycy0uMjk3LjQ1MS0uNzg3LjQ1MXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1JhcmlibGVMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2F2aW5nc1BpZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuMzExLjA3MWMtMy41ODEuODIxLTUuOTM3IDcuMjEyLTQuNzY0IDEyLjkyNS4xMjcuNTkuMjIyIDEuMTA3LjIyMiAxLjE3OCAwIC4wNzItLjM0OS4zNC0uNzYxLjYyNS0uOTcyLjYyNS0yLjYzIDIuMDg5LTMuMjg2IDIuODkybC0uNTA3LjYyNS0uNTE3LS4zNzVjLS45NzItLjY5Ni0yLjMxNC0uNzg1LTMuMjAyLS4yMTQtLjM4LjI1LTEuMjM2IDEuMjMyLTEuMjM2IDEuNDI4IDAgLjA3Mi40MjMgMS4wOS45NCAyLjI1bC45MyAyLjEwNi0uNDEyIDEuMDg5Yy0uNTQ5IDEuNDI4LTEuMTgzIDMuNjc3LTEuNDI2IDUuMDdsLS4xOSAxLjEwN2gtLjQ4NmMtLjcxOCAwLTEuNDguNDQ2LTEuODggMS4xMDctLjcwOCAxLjE3OC0uNjk4IDEuMDE3LS43MyA3Ljk0NC0uMDIgMy45MS4wMTEgNi41NTIuMDc0IDYuOTYyLjE0OC45MS42OTggMiAxLjIxNSAyLjM5Mi4zNy4yODYuNzA4LjM0IDIuMjcyLjM0aDEuODQ5bC45NSAxLjY3OGMuNTI5LjkxIDEuMzMyIDIuMTI0IDEuNzg2IDIuNjk1bC44MTMgMS4wMTh2Mi45ODFjMCAyLjczMi4wMjEgMy4wMTcuMjQzIDMuNjYuNDEyIDEuMjMyLjcwOCAxLjM3NSAyLjczNyAxLjMyMSAxLjU5NS0uMDUzIDEuNzg1LS4wOSAyLjA2LS40MjguNDMzLS41NTQuNjc2LTEuMzU3Ljc0LTIuNWwuMDYzLTEgLjMyNy4wOWMxLjQwNS40MSAzLjE5LjUzNSA0LjQ5LjMzOS43Ni0uMTI1IDEuNDQ4LS4yNjggMS41MzItLjMyMS4xMDYtLjA3Mi4xNTguMTc4LjE5IDEuMDcuMDQyIDEuMjUuMjIyIDEuODIyLjc2IDIuNS4yNjUuMzQuNDM0LjM3NSAyLjEwMy4zNzUgMS43MzMgMCAxLjgzOC0uMDE4IDIuMTY2LS40MS42MTMtLjc1LjY5Ny0xLjIzMi43Ni00LjQ0NmwuMDUzLTIuODkyLjc5My0uOTI4YzEuNzUzLTIuMDg5IDMuNTI4LTUuNTE3IDQuNDQ3LTguNjA1IDEuMTczLTMuODkyIDEuNjM4LTguODAxIDEuMjE1LTEyLjc2NGwtLjEzNy0xLjMwMy41MDctLjQyOWMuNTctLjUgMS4yMjYtLjcxNCAxLjYyNy0uNTUzLjQwMi4xNzguMzE3LjM3NS0uMTguMzkyLTEuMTkzLjA1NC0xLjI1NyAyLjcxNC0uMDczIDMuMzAzLjM3LjE5Ny40NTQuMTc5LjcwNy0uMTI1LjE1OS0uMTk2LjM2LS42MDcuNDQ0LS45MjguMTktLjY3OC4yLS42NzguNzYtLjE5Ny4zODEuMzIyLjQ0NC4zNC41ODIuMTA4LjI0My0uNDExLjA3NC0uOTQ3LS40NDQtMS4zNTctLjI2NC0uMjE0LS41MTctLjM3NS0uNTgtLjM3NS0uMDU0IDAtLjEwNy0uMDktLjEwNy0uMTk2IDAtLjUtLjM4LTEuNDQ3LS42NjUtMS43MTQtLjQ0NC0uMzc1LTEuMzc0LS4yMTUtMi4xNDUuMzc1LS4zMjcuMjUtLjYxMi40NjQtLjYyMy40NjQtLjAyMSAwLS4wNzQtLjI2OC0uMTE2LS41OS0uMTQ4LTEuMTQyLS44OTgtMy43ODQtMS41NjQtNS40OC0xLjY3LTQuMjMtNC4yNDctNy42NzYtNy4xNDItOS41NjktLjU0OS0uMzU3LTEuMDE0LS42Ni0xLjAzNS0uNjc4LS4wMS0uMDM2LjA3NC0uNTE4LjE5LTEuMTA3IDEuMDM2LTUuMDM0LS42NTUtMTAuNzY1LTMuNjY2LTEyLjQ3OS0uODM0LS40NjQtMS44NDktLjYyNC0yLjY3My0uNDQ2em0xLjc5NiAyLjYwN2MxLjMzMi41IDIuNDEgMi4wMzUgMy4wMzMgNC4yODQuMjY0Ljk0Ni4yOTUgMS4yNS4yOTUgMi45MjggMCAxLjc1LS4wMiAxLjk0Ni0uMzQ4IDMuMDctMS42NDggNS43MTMtNi4zODEgNS43MTMtNy45NzcgMC0uMzE3LTEuMTA2LS4zMzgtMS4zMzktLjMzOC0zLjA3IDAtMS42NzguMDMyLTEuOTgyLjI5Ni0yLjkyOC42MDItMi4xNzggMS42MjctMy42NzcgMi45MDUtNC4yMy44ODgtLjM5NCAxLjIyNi0uNDEyIDIuMTM0LS4wNTR6bS00LjM1MiAxNS4zN2MuMDIgMC0uMzQ5LjIzMi0uODE0LjQ4Mi0xLjg3IDEuMDE4LTIuNDkzIDEuODIxLTIuMjE4IDIuODU3LjA2My4yMzIuMjUzLjUzNS40MDEuNjQyLjI0My4xNjEuNDEyLjEwNyAxLjE4My0uNDY0IDIuNzc5LTIuMDE3IDYuMTctMi4yMzEgOC45Ni0uNTcxLjQ5Ni4zMDMgMS4xNC43MzIgMS40MTUuOTgyLjYyMy41MTcuOTgyLjQ4MiAxLjI2OC0uMTQzLjQ4Ni0xLjEwNy0uMjMzLTIuMDg5LTIuMzI1LTMuMjMxLS42MDItLjMyMi0xLjA3Ny0uNjI1LTEuMDc3LS42NzkuMDEtLjA1My4yNDMtLjQ0Ni41MjgtLjg3NGwuNTE4LS43ODYgMS4wNTYuNjQzYzQuMDQ3IDIuNDEgNy4yNTggNy45OTggOC4zMDQgMTQuNDYuNTI4IDMuMjMxLjQ2NSA3LjIzLS4xNjkgMTAuNDk3LS44NDUgNC4zMzgtMi42MiA4LjE1OS01LjAyOSAxMC44NTRsLTEuMTMgMS4yNjgtLjAxIDMuMjQ5LS4wMTEgMy4yNjctMS4zOTUuMDUzLTEuNDA1LjA1NHYtMi4zMzljMC0xLjI2Ny0uMDMyLTIuMzItLjA3NC0yLjMyLS4wNTMgMC0uMzQ5LjEyNC0uNjY2LjI2Ny0uODg3LjQxLTIuODUyLjgwMy0zLjk0LjgwMy0xLjEzIDAtMi43MzYtLjM3NC0zLjkyLS44OTJhMjguOTMgMjguOTMgMCAwMC0uODY2LS4zNTdjLS4wMjEgMC0uMDUzIDEuMDE3LS4wNjMgMi4yNjdsLS4wMzIgMi4yODUtMS40MDUuMDU0LTEuNDA1LjA1My4wMjEtMy40MS4wMS0zLjQxLS44NTUtLjk4MWMtMS4wMzYtMS4yMTQtMi4xMjQtMi44OTItMi44NzQtNC40NDVsLS41NS0xLjE2SDQuMDY0Yy0yLjAxNyAwLTIuMTIzLS4wMTktMi4zNTYtLjM5M2wtLjI0My0uMzc1VjQwLjIyYzAtNy4zOTEtLjEzNy02LjgyIDEuNTk2LTYuOTQ1bDEuMTgzLS4wOS4yNDMtMS41N2MuNDMzLTIuNzMyIDEuMTEtNC45OTkgMi4zMTQtNy43My4xNDctLjM0LjExNi0uNDY0LS42MjQtMi4xNDItLjQ1NC0xLS43NS0xLjg0LS42OTctMS45MjguMTgtLjMwNCAxLjI3OC4xMDcgMi4wNi43NjdsLjc5Mi42Ni43OTMtLjk5OWMuOTcyLTEuMjE0IDIuNDQtMi41NTMgMy42NDUtMy4zMmwuODk4LS41OS41MjguODRjLjI4NS40NjQuNTM5Ljg1Ni41Ni44NzR6bTIxLjA4NyAxNC4yNjRjLjEyNy4wOS4xMzcuMTc5LjA0Mi41MzYtLjEyNy40NDYtLjE4LjUtLjQ0NC4zMjEtLjE2OS0uMTA3LS4yMzItLjYyNS0uMDk1LS44MzkuMDg1LS4xNi4yNzUtLjE2LjQ5Ny0uMDE4elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTguNTc1IDMwLjAxYy0uMTM4LjA1My0uMzguMzItLjU2LjYwNi0uMzYuNjI1LS40MzQgMS42MDctLjE3IDIuNDY0LjI4Ni45MjggMS4yMDUgMS4yMTQgMS43NjUuNTM1IDEuMDM1LTEuMjUuMjQzLTMuOTk5LTEuMDM1LTMuNjA2elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2F2aW5nc1BpZ1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NtYXJ0Q29udHJhY3TEsGNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDY0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMy4wMjMgMS4zNjhDMS44NjQgMi4wODguMzMzIDUuMDI1LjA3IDcuMTNjLS4zMzYgMi4zODIuNTYxIDQuOTg2IDIuMDU2IDYuMTUuNzEuNTUzIDIuMTMuODMgNC4xMS44M2gyLjk5djIuNDkzYzAgMS4zODUuMTg3IDIuNDkzLjM3NCAyLjQ5My40ODUgMCAuNDg1LTExLjYzNCAwLTEzLjUxNy0uMTg3LS43NzYtLjY3My0xLjg4NC0xLjEyMS0yLjU0OUw3LjczIDEuOTIyaDEzLjExN2MxMS42OTYgMCAxMy4yMjguMTExIDE0LjIuOTQyIDIuMDE4IDEuNzczIDIuMjA1IDMuMjEzIDIuMjA1IDE3LjI4NSAwIDguMTQ0LjE1IDEyLjc5Ny4zNzMgMTIuNzk3LjIyNCAwIC4zNzQtNC41OTguMzc0LTEyLjc0MiAwLTEzLjg1LS4xNS0xNS4xMjQtMi4wNTUtMTcuNzI4bC0xLjAxLTEuMzg1TDE5LjM5Ljk4MWMtOC41NTctLjA1Ni0xNS45MTkuMTEtMTYuMzY3LjM4N3ptMy45NiAxLjM4NWMxLjQ5NiAxLjE2NCAyLjI0MyAzLjQ5IDIuMjQzIDcuMjAydjMuMDQ3SDcuNTQ0Yy0xLjY0NCAwLTEuNjQ0IDAtMS4zMDgtMS40NC4yMjUtLjc3Ni4yNjItMS45OTQuMTUtMi43Ny0uMjI0LTEuMzg1LTIuMjQyLTMuMzgtMi42OS0yLjY2LS4xNS4yMjItLjAzOC41LjI2LjY2Ni43ODYuMzg3IDEuOTA3IDIuMjE2IDEuOTA3IDMuMTU3IDAgLjQ0NC0uMzM3IDEuMzMtLjc4NSAxLjk5NS0uOTcyIDEuNDQtMi4zOTIgMS4wNTItMy41ODctLjk0MkMuNDggOS40LjQwNyA4LjAxNiAxLjE5IDUuNTc4IDIuMjM5IDIuMjU2IDQuNzggMS4wMzcgNi45ODUgMi43NTR6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuNDQ3IDExLjg5NGMwIC4zMzMgMi4yNDIuNTU0IDUuOTQyLjU1NCAzLjU4NyAwIDYuMDU0LS4yMjEgNi4yMDMtLjU1NC4xNS0uMzg3LTEuOTQzLS41NTQtNS45NDItLjU1NC0zLjg4NiAwLTYuMjAzLjIyMi02LjIwMy41NTR6TTEyLjk2MyAxNi44OGMwIC4zMzMgMS4zMDguNTU0IDMuMTc2LjU1NCAxLjg2OSAwIDMuMTc3LS4yMjEgMy4xNzctLjU1NCAwLS4zMzItMS4zMDgtLjU1NC0zLjE3Ny0uNTU0LTEuODY4IDAtMy4xNzYuMjIyLTMuMTc2LjU1NHpNMjAuODEgMTYuODhjMCAuMzMzIDEuMTIxLjU1NCAyLjYxNi41NTRzMi42MTYtLjIyMSAyLjYxNi0uNTU0YzAtLjMzMi0xLjEyMS0uNTU0LTIuNjE2LS41NTRzLTIuNjE2LjIyMi0yLjYxNi41NTR6TTMxLjI3NCAxNi44OGMwIC4yNzcuNjcyLjU1NCAxLjQ5NC41NTRzMS40OTQtLjI3NyAxLjQ5NC0uNTU0YzAtLjMzMi0uNjcyLS41NTQtMS40OTQtLjU1NHMtMS40OTQuMjIyLTEuNDk0LjU1NHpNOS41MjUgMjEuNjQ1Yy0uMTg3LjIyMS0uMyA3LjQyMy0uMyAxNi4wMSAwIDE0LjM0OS4wMzggMTUuNjc4LjY3MyAxNi41MS41NjEuNzc1IDEuODY5Ljk0MSA4LjE0NyAxLjA1Mmw3LjQzNi4xNjYuMTEyIDQuMjY2Yy4wNzUgMi4zODIuMjI1IDQuMzIxLjMzNyA0LjMyMS4xNSAwIC43NDctLjY2NSAxLjMwOC0xLjQ5NmwxLjA0Ni0xLjQ5NiAxLjA0NiAxLjQ5NmMuNTYuODMxIDEuMTU5IDEuNDk2IDEuMzA4IDEuNDk2LjE1IDAgLjI2Mi0xLjk5NC4yNjItNC40MzJ2LTQuNDMyaDIuOTUyYzQuMTEgMCA0LjE0OC0uMDU1IDQuMTQ4LTEwLjkxNCAwLTQuOTg2LS4xNS04LjUzMS0uMzc0LTguNzUzLS4yMjQtLjIyMS0uMzczIDEuMjc0LS4zNzMgNC4xdjQuNDg3SDM1LjU3Yy0uOTM0IDAtMS42ODIuMjIyLTEuNjgyLjU1NCAwIC4yNzcuNzQ4LjU1NCAxLjY4Mi41NTRoMS42ODJ2My41NDZjMCA1LjMxOCAwIDUuMzE4LTMuNDAxIDUuMzE4SDMwLjl2LTIuMTZjMC0xLjYwNy4yMjQtMi40MzguNzQ3LTIuOTkyLjY3My0uNzIuNzg1LTEuMjc0LjY3My00LjU5OGwtLjExMi0zLjcxMi0yLjA1NS0xLjY2Mi0yLjA1Ni0xLjY2Mi0xLjg2OCAxLjY2Mi0xLjg2OSAxLjYwNi0uMTEyIDMuNzY4Yy0uMTEyIDMuMzI0IDAgMy44NzguNjczIDQuNTk4LjUyMy41NTQuNzQ3IDEuMzg1Ljc0NyAyLjk5MnYyLjE2aC03LjYyM2MtOC43MDcgMC04LjA3Mi4zODgtOC4wNzItNS4zMTh2LTMuNTQ2aDYuMzUzYzMuOTk4IDAgNi4zNTMtLjIyMSA2LjM1My0uNTU0IDAtLjMzMi0yLjM1NS0uNTU0LTYuMzUzLS41NTRIOS45NzNsLS4wNzUtMTEuNDEyYy0uMDc0LTYuMjYtLjIyNC0xMS4xOTEtLjM3My0xMC45N3ptMjAuNDc4IDE4LjI4MWMxLjY0NCAxLjQ0IDEuNjQ0IDEuNDQgMS42NDQgNC41NDN2My4xNThsLTEuNzE5IDEuMzMtMS43MTkgMS4zODUtMS42NDQtMS4zMy0xLjY0NC0xLjM4NVY0NC40N2MwLTMuMTAyIDAtMy4xNTcgMS42MDctNC41NDMuODYtLjc3NSAxLjYwNy0xLjQ0IDEuNjgxLTEuNDQuMDc1IDAgLjg2LjY2NSAxLjc5NCAxLjQ0em0tLjgyMiAxMS4wMjVsLjk3MS0uOTQyVjYxLjkybC0uOTM0LTEuMjc0LS45MzQtMS4yNzQtLjkzNCAxLjI3NC0uOTM0IDEuMjc0di0xMS44bC44OTYuODMxYy44Ni44MzEgMS4wMS44MzEgMS44NjkgMHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNy45MSA0MS44MWMwIC4yNzcuMzM3Ljc3Ni43NDcgMS4xMDguNDQ5LjMzMy43NDggMS4xNjMuNzQ4IDEuOTQgMCAuNzc1LjE4NiAxLjM4NC4zNzMgMS4zODQuNzQ3IDAgLjM3NC0zLjI2OC0uNDQ4LTQuMS0uOTcxLS45OTctMS40Mi0xLjEwOC0xLjQyLS4zMzJ6TTE0LjA4NCAyMS44NjZjMCAuMjc3LjY3Mi41NTQgMS41MzIuNTU0Ljg5NiAwIDEuNDItLjIyMSAxLjI3LS41NTQtLjExMi0uMzMyLS44MjItLjU1NC0xLjUzMi0uNTU0LS43MSAwLTEuMjcuMjIyLTEuMjcuNTU0ek0xOC43NTUgMjEuODY2Yy0uMTUuMzg4IDIuNTA0LjU1NCA3LjYyMy41NTQgNS4wMDggMCA3Ljg4NS0uMjIxIDcuODg1LS41NTQgMC0uMzMyLTIuODAzLS41NTQtNy42MjMtLjU1NC00LjcwOSAwLTcuNzM2LjIyMi03Ljg4NS41NTR6TTEyLjc3NiAyNy40MDZjLjE1LjMzMyAyLjgwMy41NTQgNi43MjYuNTU0IDMuOTI0IDAgNi41NzctLjIyMSA2LjcyNy0uNTU0LjE1LS4zODgtMi4xNjgtLjU1NC02LjcyNy0uNTU0cy02Ljg3NS4xNjYtNi43MjYuNTU0ek0yNy45MSAyNy40MDZjMCAuMzMzIDEuMzA4LjU1NCAzLjE3Ny41NTQgMS44NjggMCAzLjE3Ni0uMjIxIDMuMTc2LS41NTQgMC0uMzMyLTEuMzA4LS41NTQtMy4xNzYtLjU1NC0xLjg2OSAwLTMuMTc3LjIyMi0zLjE3Ny41NTR6TTEyLjk2MyAzMi4zOTJjMCAuMzMzIDMuMjUuNTU0IDguOTY4LjU1NHM4Ljk2OS0uMjIxIDguOTY5LS41NTRjMC0uMzMyLTMuMjUxLS41NTQtOC45NjktLjU1NC01LjcxNyAwLTguOTY4LjIyMi04Ljk2OC41NTR6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTbWFydENvbnRyYWN0xLBjb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdUd2l0dGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNy4xNCA3LjI1Yy0uOTMxLjQyMy0xLjkzNC43LTIuOTczLjgzNGE1LjE5NCA1LjE5NCAwIDAwMi4yNzEtMi44NzYgMTAuNDQgMTAuNDQgMCAwMS0zLjI4NiAxLjI2OWMtLjk1NS0xLjA0LTIuMjk2LTEuNjQ0LTMuODE5LTEuNjQ0LTIuODQgMC01LjE2IDIuMzItNS4xNiA1LjE4NCAwIC40MTEuMDUuODEuMTM0IDEuMTg0QTE0LjczNSAxNC43MzUgMCAwMTMuNjI1IDUuNzg4YTUuMTI4IDUuMTI4IDAgMDAtLjcgMi41OThjMCAxLjguOTA1IDMuMzk1IDIuMzA3IDQuMzAyLS44NTggMC0xLjY1NS0uMjQyLTIuMzU2LS42MDV2LjAzN2E1LjE4OCA1LjE4OCAwIDAwNC4xNTcgNS4wODcgNS4xIDUuMSAwIDAxLTIuMzMzLjA4NCA1LjE3MiA1LjE3MiAwIDAwNC44MzQgMy42MDEgMTAuMjk2IDEwLjI5NiAwIDAxLTYuNDQgMi4yMjRjLS40MTEgMC0uODIyLS4wMjUtMS4yMzMtLjA3M2ExNC42NzUgMTQuNjc1IDAgMDA3Ljk1IDIuMzMyYzkuNTIyIDAgMTQuNzU0LTcuOTAyIDE0Ljc1NC0xNC43NTQgMC0uMjMgMC0uNDQ3LS4wMTItLjY3NkExMC4zNTkgMTAuMzU5IDAgMDAyNy4xNCA3LjI1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdUd2l0dGVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVXBsb2FkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTI0NC4xIDEuNmMtMTIuNyAzLjQtMTUuNSA1LjctNTIuOCA0Mi44LTM4LjYgMzguNS0zOS41IDM5LjYtMzkuNSA1MC41IDAgMTcgMTUuNCAyOC40IDMxLjggMjMuNiA1LjYtMS42IDYuOS0yLjcgMjYuNy0yMi4zTDIzMSA3NS42djEzMC42YzAgMTQxLjgtLjMgMTM0LjYgNS41IDE0Mi4yIDEuNCAxLjggNC45IDQuNiA3LjcgNi4yIDEzLjYgNy41IDMwLjUuNiAzNS42LTE0LjUuOS0yLjUgMS4yLTM3LjYgMS4yLTEzMy45Vjc1LjZsMjAuOCAyMC42YzE5LjcgMTkuNiAyMSAyMC43IDI2LjUgMjIuMyAxMCAyLjkgMTkgLjMgMjUuOS03LjMgNC40LTQuOCA2LjItMTAgNi4yLTE3LjMtLjEtOS43LTIuMy0xMi40LTQwLjMtNTAuMS0yOC0yNy44LTM1LjgtMzUtNDAuNy0zNy42LTExLjYtNi0yNC03LjctMzUuMy00LjZ6XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTYuMSAyMzIuN2MtNi4yIDIuMi0xMi40IDguNy0xNC42IDE1LjMtMS41IDQuNi0xLjcgNy40LTEuMSAxOS40IDIuMiA0Ny42IDE2LjggOTIuMSA0Mi44IDEzMC44IDE5LjMgMjguOSA0OC43IDU3LjIgNzcuOCA3NS4zIDY5LjQgNDMgMTU0LjIgNTAuMyAyMzAuNyAyMCAzMi42LTEyLjkgNjEuNC0zMi41IDg3LjgtNTkuNiA0NC4zLTQ1LjUgNjkuMy0xMDMuMiA3Mi4yLTE2Ni43LjctMTYuOC0uNi0yMi4xLTcuMi0yOC43LTkuOC05LjgtMjUuMi05LjgtMzUgMC01LjUgNS41LTcuMiAxMS03LjkgMjYuNS0uOCAxNi0yLjggMjkuNS02LjcgNDQtMTkuMyA3Mi40LTc3LjUgMTI5LjQtMTUwLjIgMTQ3LTEwOS42IDI2LjYtMjIwLjEtMzkuOS0yNDguMi0xNDkuNC0zLjUtMTMuOC02LjUtMzUuMy02LjUtNDcuMiAwLTkuMy0yLjMtMTUuNy03LjUtMjAuOS02LjktNy0xNi45LTkuMS0yNi40LTUuOHpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1VwbG9hZFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1ZlY3Rvcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI4IDI4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMy45ODggOS4xMzhoLTEuNzEzdi0yLjYxQzIyLjI3NSAyLjkyMyAxOC40MzcgMCAxMy43MDggMCA4Ljk3NyAwIDUuMTQgMi45MjQgNS4xNCA2LjUyN3YyLjYxMUgzLjQyN0MxLjU0MiA5LjEzOCAwIDEwLjMxMyAwIDExLjc1djEzLjA1NWMwIDEuNDM2IDEuNTQyIDIuNjExIDMuNDI3IDIuNjExaDIwLjU2MWMxLjg4NSAwIDMuNDI3LTEuMTc1IDMuNDI3LTIuNjExVjExLjc0OWMwLTEuNDM2LTEuNTQyLTIuNjEtMy40MjctMi42MXptLTE1LjQyLTIuNjFjMC0yLjE2OCAyLjI5NS0zLjkxNyA1LjE0LTMuOTE3IDIuODQ0IDAgNS4xNCAxLjc1IDUuMTQgMy45MTZ2Mi42MTFIOC41Njh2LTIuNjF6bTE1LjQyIDE4LjI3NkgzLjQyN1YxMS43NDloMjAuNTYxdjEzLjA1NXptLTEwLjI4LTMuOTE2YzEuODg0IDAgMy40MjYtMS4xNzUgMy40MjYtMi42MTEgMC0xLjQzNi0xLjU0Mi0yLjYxMS0zLjQyNy0yLjYxMS0xLjg4NCAwLTMuNDI2IDEuMTc1LTMuNDI2IDIuNjEgMCAxLjQzNyAxLjU0MiAyLjYxMiAzLjQyNiAyLjYxMnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVmVjdG9yXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnWW91dHViZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIuMDgzIDE4LjEyNWw2LjI3Mi0zLjYyNS02LjI3Mi0zLjYyNXY3LjI1em0xMy45NjktOS40NjFjLjE1Ny41NjguMjY1IDEuMzI5LjMzOCAyLjI5Ni4wODQuOTY2LjEyIDEuOC4xMiAyLjUyNWwuMDczIDEuMDE1YzAgMi42NDYtLjE5MyA0LjU5Mi0uNTMxIDUuODM2LS4zMDIgMS4wODgtMS4wMDMgMS43ODktMi4wOSAyLjA5LS41NjkuMTU4LTEuNjA4LjI2Ny0zLjIwMy4zMzktMS41Ny4wODQtMy4wMDkuMTItNC4zMzguMTJsLTEuOTIxLjA3M2MtNS4wNjMgMC04LjIxNy0uMTkzLTkuNDYxLS41MzEtMS4wODgtLjMwMi0xLjc4OS0xLjAwMy0yLjA5LTIuMDktLjE1OC0uNTY5LS4yNjctMS4zMy0uMzM5LTIuMjk3LS4wODUtLjk2Ni0uMTItMS44LS4xMi0yLjUyNUwyLjQxNiAxNC41YzAtMi42NDYuMTkzLTQuNTkyLjUzMS01LjgzNi4zMDItMS4wODggMS4wMDMtMS43ODkgMi4wOS0yLjA5LjU2OS0uMTU4IDEuNjA4LS4yNjcgMy4yMDMtLjMzOSAxLjU3LS4wODUgMy4wMDgtLjEyIDQuMzM4LS4xMmwxLjkyMS0uMDczYzUuMDYzIDAgOC4yMTcuMTkzIDkuNDYxLjUzMSAxLjA4OC4zMDIgMS43ODkgMS4wMDMgMi4wOSAyLjA5elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdZb3V0dWJlXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFwcFN0b3JlIH0gZnJvbSAnLi9BcHBTdG9yZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tTcXVhcmUgfSBmcm9tICcuL0NoZWNrU3F1YXJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXNjb3JkIH0gZnJvbSAnLi9EaXNjb3JkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3duQXJyb3cgfSBmcm9tICcuL0Rvd25BcnJvdydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR29vZ2xlUGxheVN0b3JlIH0gZnJvbSAnLi9Hb29nbGVQbGF5U3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWVwYWdlT3B0aW9uIH0gZnJvbSAnLi9Ib21lcGFnZU9wdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgxLBjb25tb25zdHJDaGVja2JveDE0IH0gZnJvbSAnLi/EsGNvbm1vbnN0ckNoZWNrYm94MTQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIMSwY29ubW9uc3RyQ2hlY2tib3g2IH0gZnJvbSAnLi/EsGNvbm1vbnN0ckNoZWNrYm94NidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgxLBuc3RhZ3JhbSB9IGZyb20gJy4vxLBuc3RhZ3JhbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2RuIH0gZnJvbSAnLi9MaW5rZG4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWwgfSBmcm9tICcuL01haWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lZGlhIH0gZnJvbSAnLi9NZWRpYSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YURhdGEgfSBmcm9tICcuL01ldGFEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuc2VhTG9nbyB9IGZyb20gJy4vT3BlbnNlYUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFyQ29kZSB9IGZyb20gJy4vUXJDb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSYXJpYmxlTG9nbyB9IGZyb20gJy4vUmFyaWJsZUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhdmluZ3NQaWcgfSBmcm9tICcuL1NhdmluZ3NQaWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNtYXJ0Q29udHJhY3TEsGNvbiB9IGZyb20gJy4vU21hcnRDb250cmFjdMSwY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVcGxvYWQgfSBmcm9tICcuL1VwbG9hZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIFlvdXR1YmUgfSBmcm9tICcuL1lvdXR1YmUnIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z8SwY29ubW9uc3RyQ2hlY2tib3gxNChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjIgMnYyMEgyVjJoMjB6bTItMkgwdjI0aDI0VjB6bS02IDE2LjUzOGwtNC41OTItNC41NDggNC41NDYtNC41ODdMMTYuNTM4IDZsLTQuNTQ1IDQuNTg5LTQuNTg4LTQuNTQzTDYgNy40NTFsNC41OTMgNC41NTItNC41NDcgNC41OTJMNy40NTEgMThsNC41NTUtNC41OTYgNC41OTEgNC41NUwxOCAxNi41Mzh6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsGNvbm1vbnN0ckNoZWNrYm94MTRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmfEsGNvbm1vbnN0ckNoZWNrYm94Nihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjIgMnYyMEgyVjJoMjB6bTItMkgwdjI0aDI0VjB6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsGNvbm1vbnN0ckNoZWNrYm94NlxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z8SwbnN0YWdyYW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTkuNDI1IDIuNDE3aDEwLjE1YTcuMDEzIDcuMDEzIDAgMDE3LjAwOCA3LjAwOHYxMC4xNWE3LjAwOCA3LjAwOCAwIDAxLTcuMDA4IDcuMDA4SDkuNDI1YTcuMDEzIDcuMDEzIDAgMDEtNy4wMDgtNy4wMDhWOS40MjVhNy4wMDggNy4wMDggMCAwMTcuMDA4LTcuMDA4em0tLjI0MiAyLjQxNmE0LjM1IDQuMzUgMCAwMC00LjM1IDQuMzV2MTAuNjM0YTQuMzQ3IDQuMzQ3IDAgMDA0LjM1IDQuMzVoMTAuNjM0YTQuMzUgNC4zNSAwIDAwNC4zNS00LjM1VjkuMTgzYTQuMzQ3IDQuMzQ3IDAgMDAtNC4zNS00LjM1SDkuMTgzem0xMS42NiAxLjgxM2ExLjUxIDEuNTEgMCAxMTAgMy4wMiAxLjUxIDEuNTEgMCAwMTAtMy4wMnpNMTQuNSA4LjQ1OGE2LjA0MiA2LjA0MiAwIDExMCAxMi4wODQgNi4wNDIgNi4wNDIgMCAwMTAtMTIuMDg0em0wIDIuNDE3YTMuNjI1IDMuNjI1IDAgMTAwIDcuMjUgMy42MjUgMy42MjUgMCAwMDAtNy4yNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnxLBuc3RhZ3JhbVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi8uLi9ob29rL3VzZVdpbmRvd1NpemUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IEV4aGliaXRpb25TaWRlIGZyb20gJy4uLy4uL3Jvdy9leGhpYml0aW9uU2lkZSdcclxuaW1wb3J0IFF1b3RhdGlvbiBmcm9tIFwiLi4vLi4vcm93L3F1b3RhdGlvblwiXHJcbmltcG9ydCBSZWFzb25TaWRlIGZyb20gXCIuLi8uLi9yb3cvcmVhc29uU2lkZVwiXHJcbmltcG9ydCBHZXRTdGFydGVkU2lkZSBmcm9tIFwiLi4vLi4vcm93L2dldFN0YXJ0ZWRcIlxyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tIFwiLi4vLi4vZm9vdGVyL2luZGV4XCJcclxuIFxyXG5mdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgLyogTGF5b3V0ICovXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT4gXHJcbiAgICAgICAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpemUud2lkdGggPCBDT05TVC5UQUJMRVRfU0laRSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gIGZsYXQvPiA6IDxOYXZpZ2F0aW9uIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogRXhoaWJpdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhoaWJpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4aGliaXRpb25TaWRlLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFF1dGF0aW9uICovfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPFF1b3RhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBSZWFzb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvblNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFzb25TaWRlLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEdldCBTdGFydGVkICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkfT5cclxuICAgICAgICAgICAgICAgICAgPEdldFN0YXJ0ZWRTaWRlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBUaGVyZSBoYXZpbmcgbWFpbiBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogRm9vdGVyIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyU2lkZSAvPiBcclxuICAgICAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG5cclxuLypcclxuPE1haW5TaWRlLz46IFBhZ2UgaGFzIG9uZSBncmlkIG5hbWVkIE1haW5TaWRlLiBcclxuPE5hdmlnYXRpb24vPjogSXQgaGFzIGljb24sIG1hcmssIGJ1dHRvbnMsYW5kIGxvY2F0ZWQgb24gdG9wIG9mIHBhZ2VzLiBcclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25MaW5rICh7IGNoaWxkcmVuLGhyZWYsIC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0gIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25MaW5rIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gXCIuLi90ZXh0L2hlYWQtdGl0bGVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge0ZPT1RFUk1FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyTmF2aWdhdGlvbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIEZPT1RFUk1FTlUubWFwKChtZW51KT0+e1xyXG4gICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fSBzaXplPScxNHB4Jz57bWVudS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgfSlcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTmF2aWdhdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcbmltcG9ydCB7TUVOVX0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7SG9tZXBhZ2VPcHRpb259IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2ljb24vaW5kZXhcIlxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBOYXZpZ2F0b3IgKi9cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgXHJcbiAgICAke3N0eWxlcy5tdWlQYXBlclJvb3R9IFxyXG4gICAgJHtzdHlsZXMubXVpQXBwQmFyUm9vdH0gXHJcbiAgICAke3N0eWxlcy5tdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlfSBcclxuICAgICR7c3R5bGVzLm11aUFwcEJhckNvbG9yRGVmYXVsdH0gXHJcbiAgICAke3N0eWxlcy5jc3NIZWFkZXJ9IFxyXG4gICAgJHtzdHlsZXMubXVpUGFwZXJFbGV2YXRpb259YH0+ICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGhyZWY9Jy8nIGNsYXNzTmFtZT17c3R5bGVzLmNvbXB9Pk93bmFibGUtTlM8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiBNYXJrIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3NzTmF2aWdhdG9yfT4gICBcclxuICAgICAgICAgICAgICAgIHsvKiBMaW5rIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uQmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUxpc3RJdGVtUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzTmF2aWdhdG9yQ29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpTGlzdEl0ZW1HdXR0ZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlMaXN0SXRlbUJ1dHRvbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshZmxhdCAmJiBtZW51LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b25Db250ZW50fT5cclxuICAgICAgICA8SWNvbkJ1dHRvbi8+XHJcbiAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5mdW5jdGlvbiBsaW5rKHtzcmMsYWx0LGhyZWZ9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99ID5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XHJcbiAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2E+ICAgXHJcbilcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0xpbmsoe3NyYyxhbHQsaHJlZn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtMaW5rfSA+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tYXJrfVxyXG4gICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgLz5cclxuICAgIDwvYT4gICBcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gUGhvdG8oe3NyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmVjZWlwdGNvaW4tcmVjZWlwdGNoYWluLWRlNTYwLmFwcHNwb3QuY29tL28vd2Vic2l0ZSUyRmpwaWVyY2UlMkZqLXBpZXJjZS1wcm9tby1ibGFjay0wMS5wbmc/YWx0PW1lZGlhJnRva2VuPTVjZjBjZjBmLTMxZmEtNGVmMi05ZjIxLWVhYTEzNjU5NTY3YlwiLCBhbHQsIHdpZHRoPTQ3MCwgaGVpZ2h0PTI5MiwgbWFyaz1mYWxzZSxjbGFzc05hbWUsIGhyZWY9XCIvXCJ9KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IENvbXAgPSBtYXJrID8gbWFya0xpbmsgOiBsaW5rO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbXAgc3JjPXtzcmN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhbHQ9e2FsdH0gaHJlZj17aHJlZn0vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90byIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vcGhvdG8vaW5kZXgnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgTWludEJ1dHRvbiBmcm9tICcuLi9mcmFtZS9taW50QnV0dG9uJ1xyXG5cclxuZnVuY3Rpb24gRXhoaWJpdGlvbigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgey8qIFRleHQgU2lkZSBGcm9tIEV4aGliaXRpb24gc2lkZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmVydH0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFkdmVydEhlYWRlcn0gYm9sZD5DQSRIIENvd3M8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlckxpbmV9Lz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUZXh0IFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnN1YkhlYWRlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnN1YlRleHR9ICBzaXplPScyMnB4JyA+Tm93IE1pbnRpbmc6IENoaWMtQS1EZWVzLEZpcnN0IE5GVHMgdG8gR2VuZXJhdGUgRUdHUyBUb2tlbnM8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWludEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5taW50QnV0dG9ufT5NSU5UIDwvTWludEJ1dHRvbj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUGhvdG9zIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0V4aGliaXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvdG8gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRXhoaWJpdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvIGNsYXNzTmFtZT17c3R5bGVzLmltZ0V4aGliaXR9IHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmVjZWlwdGNvaW4tcmVjZWlwdGNoYWluLWRlNTYwLmFwcHNwb3QuY29tL28vd2Vic2l0ZSUyRmNoaWNhZGVlcyUyRmNhc2hjb3dzLnBuZz9hbHQ9bWVkaWEmdG9rZW49NjBlZjRhYTctNDJjOS00N2RlLTgyYTYtYjcxOTk1Mzc0OWMzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE93bmVyIE9mIFBob3RvcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViT3duZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMTJweCcgYm9sZD5VUENPTUlORyBDT0xMRUNUSU9OOjwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMTJweCc+Si5QaWVyY2UgYW5kIEZyaWVuZHMgLSBIYW5kIFBhaW50ZWQgYW5kIFNpZ25lZDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhoaWJpdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nZXRTdGFydGVkLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBHZXRTdGFydGVkQnV0dG9uIGZyb20gJy4uL2ZyYW1lL2dldFN0YXJ0ZWRCdXR0b24nXHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vcGhvdG9cIjtcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBHZXRTdGFydGVkKCl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBDb250YWluZXIgKi8gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59Pk93bmFibGUtTlMgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIGZvciBCdXNpbmVzc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSBzcmM9XCJodHRwczovL293bmVyZnkuY29tL2ltZy9ob21lL3N1aXRjYXNlLmpwZ1wiIHdpZHRoPSczNDVweCcgaGVpZ2h0PScyMDcuOTg2JyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDb250YWluZXIgVGV4dCBTaWRlKi8gfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkVGV4dFNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT17c3R5bGVzLm5mdEV4cGxhaW59PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNwYW59Pk5GVCBRUiBjb2RlcyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSwgYWRkIHZhbHVlIGFuZCBwcmV2ZW50IDxici8+IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJmaXR0aW5nIG9mIGdvb2RzLjwvcD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmZ0Q3JlYXRvcn0+Q3JlYXRlIE5GVHMgZm9yIHlvdXIgYnVzaW5lc3MsIGxhcmdlIG9yIHNtYWxsLjwvcD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8R2V0U3RhcnRlZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLkdldFN0YXJ0ZWRCdXR0b25UZXh0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HZXRTdGFydGVkQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTdGFydGVkOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgT3BlbnNlYSBmcm9tIFwiLi4vLi4vUGhvdG9zL29wZW5zZWEtbG9nby5zdmdcIlxyXG5pbXBvcnQgUmFyaWFibGUgZnJvbSBcIi4uLy4uL1Bob3Rvcy9yYXJpYmxlLWxvZ28uc3ZnXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3F1b3RhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVGV4dFRpdHRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBRdW90YXRpb24oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW99PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2V0UGxhY2VTaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYWNlU2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdW9IZWFkZXJUZXh0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTkZUcyBhcmUgdHJhZGVkIG9uIHRoZSBsYXJnZXN0IE5GVCBtYXJrZXRwbGFjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5xdW9NaWRkbGVUZXh0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhZGUgT3duYWJsZS1OUyBjcmVhdGVkIG9uIG1hcmtldHBsYWNlIHBsYXRmb3Jtcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvSGVhZGVyVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1b3RhdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBUZXh0VGl0dGxlIGZyb20gXCIuLi90ZXh0L3RleHQtdGl0bGVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3JlYXNvblNpZGUubW9kdWxlLmNzcydcclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3Bob3RvL2luZGV4J1xyXG5pbXBvcnQgUmVhc29uIGZyb20gJy4uL2Zvcm0vcmVhc29uU2lkZS9pbmRleCdcclxuaW1wb3J0IFJlYXNvbkltYWdlIGZyb20gJy4uLy4uL1Bob3Rvcy9yZWFzb25TaWRlUGhvdG8ucG5nJ1xyXG5cclxuZnVuY3Rpb24gUmVhc29uU2lkZSgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvKiBDb250YWluZXIgKi8gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhc29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25IZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdHRsZSBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25IZWFkZXJUZXh0fSBib2xkPlJlYXNvbnMgdG8gTkZUIEV2ZXJ5dGhpbmcgd2l0aCA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TPC9zcGFuPjwvVGV4dFRpdHRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLkxpbmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFJlYXNvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25UZXh0U2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhc29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbWFnZSBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXN0SW1hZ2VTaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaG90byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL293bmVyZnkuY29tL2ltZy9ob21lL3ZhbHVhYmxlcy5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nODMxLjk5N3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSAnMTM4Ljk5M3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMzknIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdyZWFzb25zaWRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgU2lkZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGV4dH0gc2l6ZT0nMThweCcgb3BhY2l0eT0nMC42Jz5ORlQgaXMgcGVybWFuZW50IGltbXV0YWJsZSByZWNvcmQgb2Ygd2hvIG93bnMgYW55dGhpbmcgb2YgdmFsdWU8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhc29uU2lkZSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZFRpdGxlKHsgYm9sZD0gZmFsc2UsY2xhc3NOYW1lICxjaGlsZHJlbiwgc2l6ZT0yMCwgb3BhY2l0eT0xfSl7XHJcbiAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgW3N0eWxlcy5UaXRsZSwgXHJcbiAgICAgICAgYm9sZCAmJiBzdHlsZXMuYm9sZCxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICBdKX1cclxuICAgICAgICBzdHlsZT17e2ZvbnRTaXplOnNpemUsIG9wYWNpdHk6IG9wYWNpdHl9fVxyXG4gICAgICAgID57Y2hpbGRyZW59PC9oMT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRpdGxlXHJcblxyXG4vKlxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9sZDogU29tZSB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0LCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gdGV4dCBoYXMgYm9sZCBmb250IHdlaWdodCBwcm9wZXJ0aWVzLCBib2xkIHByb3BlcnRpZXMgd2lsbCBoYXZlIGJlZW4gYWN0aXZhdGVkLlxyXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gVGV4dFRpdGxlKHsgYm9sZD1mYWxzZSwgY2hpbGRyZW59KXtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0gPntjaGlsZHJlbn08L3A+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRUaXRsZSIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgVEFCTEVUX1NJWkU6IDk0MyxcclxuICAgIERFU0tUT1BfU0laRTogMTI3MFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZU5GVE9wdGlvbj1bXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnTkZUJyxcclxuICAgICAgICB0aXRsZTogJ05GVChOb24gRnVuZ2libGUgVG9rZW4pJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdGVCcsXHJcbiAgICAgICAgdGl0bGU6ICdGVChGdW5naWJsZSBUb2tlbiknXHJcbiAgICB9XVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCVVNJTkVTUyA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnTkZUc2ZvcnlvdXJCdXNpbmVzcycsXHJcbiAgICAgICAgdGl0bGU6ICdORlRzIGZvciB5b3VyIEJ1c2luZXNzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnQ3JlYXRlQUNvbGxlY3Rpb24nLFxyXG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIGEgQ29sbGVjdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ0N1c3RvbWVyQVN1cHBvcnQnLFxyXG4gICAgICAgIHRpdGxlOiAnQ3VzdG9tZXIgQSBTdXBwb3J0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnTkZUU3RhbmRhcmRDb2xsYWJvcmF0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ05GVCBTdGFuZGFyZCBDb2xsYWJvcmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnU29tZXRoaW5nRWxzZScsXHJcbiAgICAgICAgdGl0bGU6ICdTb21ldGhpbmcgRWxzZSdcclxuICAgICAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBJTkZPID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2xhaW0gT3duZXJzaGlwJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvdmUgRXhpdGVuY2UnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdWZXJpZnkgQXV0aGVudGljaXR5JyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJpdmF0ZWx5IENvbm5lY3Qgd2l0aCB0aGUgT3duZXInLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTZWN1cmUgRGlnaXRhbCBBc3NldHMnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRk9PVEVSTUVOVSA9IFtcclxuICAgIHsgICBcclxuICAgICAgICBrZXk6ICdwcml2YWN5UG9saWN5JyxcclxuICAgICAgICB0aXRsZTonUHJpdmFjeSBQb2xpY3knXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICd0b3MnLFxyXG4gICAgICAgIHRpdGxlOiAnVE9TJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ215Q29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdNeSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjb250YWN0JyxcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBNRU5VID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ21ha2UtYW4tbmZ0JyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ01ha2UgYW4gTkZUJyxcclxuICAgICAgICBocmVmOiAnL21ha2VOZnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2J1c2luZXNzLXNpZ251cCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdCdXNpbmVzcyBTaWdudXAnLFxyXG4gICAgICAgIGhyZWY6ICcvYnVzaW5lc3NTaWduVXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ1N1YnNjcmliZS1mb3ItdXBjb21pbmctZHJvcHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnU3Vic2NyaWJlIGZvciBVcGNvbWluZyBEcm9wcycsXHJcbiAgICAgICAgaHJlZjogJy9zdWJzY3JpYmVGb3JVcGNvbWluZ0Ryb3BzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICduZnQtc3RhbmRhcmRzJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ05GVCBTdGFuZGFyZHMnLFxyXG4gICAgICAgIGhyZWY6ICcvbmZ0U3RhbmRhcmRzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdkb3dubG9hZC1uZnQtY3JlYXRvcicsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdEb3dubG9hZCBORlQgQ3JlYXRvcicsXHJcbiAgICAgICAgaHJlZjogJy9kb3dubG9hZE5GVENyZWF0b3InXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG4vLyBIb29rXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXHJcbiAgICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcclxuICAgICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gICAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20ncmVhY3QnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9Ib21lUGFnZS9pbmRleCdcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dC8+ICAgICAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvUGhvdG9zL29wZW5zZWEtbG9nby44YzMzMjgwMWU1MDlmOWViMTM2ZDFjMTNlYmYxY2JjOS5zdmdcIixcImhlaWdodFwiOjExNixcIndpZHRoXCI6MTE2fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvUGhvdG9zL3JhcmlibGUtbG9nby43NmMxOGY5NzQyNGI5MjM5OTM3MDM3MjE3MTdmMGU3Ni5zdmdcIixcImhlaWdodFwiOjQwLFwid2lkdGhcIjo0MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL1Bob3Rvcy9yZWFzb25TaWRlUGhvdG8uOGQ2ZTkxNDcwZDU1ZGQ0MjBjYzJhOWY5ZWFjOWQ3OTkucG5nXCIsXCJoZWlnaHRcIjoxMzksXCJ3aWR0aFwiOjgzMixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZQaG90b3MlMkZyZWFzb25TaWRlUGhvdG8uOGQ2ZTkxNDcwZDU1ZGQ0MjBjYzJhOWY5ZWFjOWQ3OTkucG5nJnc9OCZxPTcwXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm11aUJ1dHRvbkJhc2VSb290XCI6IFwic3R5bGVfbXVpQnV0dG9uQmFzZVJvb3RfXzFMY0RSXCIsXG5cdFwibXVpQnV0dG9uUm9vdFwiOiBcInN0eWxlX211aUJ1dHRvblJvb3RfX1NNOXc3XCIsXG5cdFwibXVpQnV0dG9uQ29udGFpbmVkXCI6IFwic3R5bGVfbXVpQnV0dG9uQ29udGFpbmVkX18xZmhMRlwiLFxuXHRcIm11aUJ1dHRvbkNvbnRhaW5lZFByaW1hcnlcIjogXCJzdHlsZV9tdWlCdXR0b25Db250YWluZWRQcmltYXJ5X18xdE9PRVwiLFxuXHRcImNzc0JvcmRlckJ1dHRvblwiOiBcInN0eWxlX2Nzc0JvcmRlckJ1dHRvbl9fcmVPdE5cIixcblx0XCJtdWlCdXR0b25MYWJlbFwiOiBcInN0eWxlX211aUJ1dHRvbkxhYmVsX19wSGN4VlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibXVpQnV0dG9uQmFzZVJvb3RcIjogXCJzdHlsZV9tdWlCdXR0b25CYXNlUm9vdF9fUm05ZDVcIixcblx0XCJtdWlJY29uQnV0dG9uUm9vdFwiOiBcInN0eWxlX211aUljb25CdXR0b25Sb290X19jWnV2NlwiLFxuXHRcIm11aUljb25CdXR0b25Db2xvckluaGVyaXRcIjogXCJzdHlsZV9tdWlJY29uQnV0dG9uQ29sb3JJbmhlcml0X18zQ3NuT1wiLFxuXHRcImNzc0ljb25CdXR0b25cIjogXCJzdHlsZV9jc3NJY29uQnV0dG9uX194SVlyNlwiLFxuXHRcIm11aUljb25CdXR0b25MYWJlbFwiOiBcInN0eWxlX211aUljb25CdXR0b25MYWJlbF9fY3J4WWlcIixcblx0XCJtdWlTdmdJY29uUm9vdFwiOiBcInN0eWxlX211aVN2Z0ljb25Sb290X18zVDFyWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyQ29udGFpbmVyXCI6IFwic3R5bGVfZm9vdGVyQ29udGFpbmVyX19BM3g1MFwiLFxuXHRcImNvbnRlbnRcIjogXCJzdHlsZV9jb250ZW50X18xcm9SeFwiLFxuXHRcIm1haW5Db250YWluZXJcIjogXCJzdHlsZV9tYWluQ29udGFpbmVyX18yTWFQSFwiLFxuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlX2NvbnRhaW5lcl9fMlRxa1BcIixcblx0XCJsZWZ0U2lkZU9mQ29udGFpbmVyXCI6IFwic3R5bGVfbGVmdFNpZGVPZkNvbnRhaW5lcl9fM21kZGxcIixcblx0XCJmb290ZXJNZW51XCI6IFwic3R5bGVfZm9vdGVyTWVudV9fMXdCY1JcIixcblx0XCJjb3B5VGV4dFwiOiBcInN0eWxlX2NvcHlUZXh0X18yOVJFb1wiLFxuXHRcIkljb25zXCI6IFwic3R5bGVfSWNvbnNfXzF5TV9UXCIsXG5cdFwiam9pblRleHRcIjogXCJzdHlsZV9qb2luVGV4dF9fMzZiYlVcIixcblx0XCJyaWdodFNpZGVPZkNvbnRhaW5lclwiOiBcInN0eWxlX3JpZ2h0U2lkZU9mQ29udGFpbmVyX18zSG1yWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVhc29uU2lkZUNvbnRhaW5lclwiOiBcInN0eWxlX3JlYXNvblNpZGVDb250YWluZXJfXzFJbm1vXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtdWlCdXR0b25CYXNlUm9vdFwiOiBcImZyYW1lQnV0dG9uX211aUJ1dHRvbkJhc2VSb290X195aVFOVVwiLFxuXHRcIm11aUJ1dHRvblJvb3RcIjogXCJmcmFtZUJ1dHRvbl9tdWlCdXR0b25Sb290X18zRmUwVlwiLFxuXHRcIm11aUJ1dHRvbk91dGxpbmVkXCI6IFwiZnJhbWVCdXR0b25fbXVpQnV0dG9uT3V0bGluZWRfX19EOUJBXCIsXG5cdFwiY3NzQnV0dG9uQ29udGVudFwiOiBcImZyYW1lQnV0dG9uX2Nzc0J1dHRvbkNvbnRlbnRfXzJhVmplXCIsXG5cdFwibXVpQnV0dG9uTGFiZWxcIjogXCJmcmFtZUJ1dHRvbl9tdWlCdXR0b25MYWJlbF9fblM0MWtcIixcblx0XCJjc3NNZW51SWNvblwiOiBcImZyYW1lQnV0dG9uX2Nzc01lbnVJY29uX18zcHdGZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2V0U3RhcnRlZEJ1dHRvblwiOiBcImdldFN0YXJ0ZWRCdXR0b25fZ2V0U3RhcnRlZEJ1dHRvbl9fMTZsMGhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1pbnRCdXR0b25cIjogXCJtaW50QnV0dG9uX21pbnRCdXR0b25fXzJJVmRXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRcIjogXCJzdHlsZV9sYXlvdXRfXzFVWDZPXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJidXR0b25fbmF2X18xUDJaQlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTmF2XCI6IFwiZm9vdGVyX05hdl9fMXFzSUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm11aVBhcGVyUm9vdFwiOiBcIm5hdmlnYXRpb25fbXVpUGFwZXJSb290X18xRU1XYVwiLFxuXHRcIm11aVBhcGVyRWxldmF0aW9uXCI6IFwibmF2aWdhdGlvbl9tdWlQYXBlckVsZXZhdGlvbl9fMlppd2pcIixcblx0XCJtdWlBcHBCYXJSb290XCI6IFwibmF2aWdhdGlvbl9tdWlBcHBCYXJSb290X18yOWFMc1wiLFxuXHRcIm11aUFwcEJhclBvc2l0aW9uQWJzb2x1dGVcIjogXCJuYXZpZ2F0aW9uX211aUFwcEJhclBvc2l0aW9uQWJzb2x1dGVfX3dkRGdIXCIsXG5cdFwibXVpQXBwQmFyQ29sb3JEZWZhdWx0XCI6IFwibmF2aWdhdGlvbl9tdWlBcHBCYXJDb2xvckRlZmF1bHRfXzNjZWZhXCIsXG5cdFwiY3NzSGVhZGVyXCI6IFwibmF2aWdhdGlvbl9jc3NIZWFkZXJfXzE2ak1KXCIsXG5cdFwibmF2aWdhdG9yXCI6IFwibmF2aWdhdGlvbl9uYXZpZ2F0b3JfXzJDY2hOXCIsXG5cdFwiY3NzTmF2aWdhdG9yXCI6IFwibmF2aWdhdGlvbl9jc3NOYXZpZ2F0b3JfXzFpd2p0XCIsXG5cdFwibXVpQnV0dG9uQmFzZVJvb3RcIjogXCJuYXZpZ2F0aW9uX211aUJ1dHRvbkJhc2VSb290X18zOE00LVwiLFxuXHRcIm11aUxpc3RJdGVtUm9vdFwiOiBcIm5hdmlnYXRpb25fbXVpTGlzdEl0ZW1Sb290X18yU1loblwiLFxuXHRcIm11aUxpc3RJdGVtR3V0dGVyc1wiOiBcIm5hdmlnYXRpb25fbXVpTGlzdEl0ZW1HdXR0ZXJzX19RWmV0SVwiLFxuXHRcIm11aUxpc3RJdGVtQnV0dG9uXCI6IFwibmF2aWdhdGlvbl9tdWlMaXN0SXRlbUJ1dHRvbl9fMzc3MlRcIixcblx0XCJjc3NOYXZpZ2F0b3JDb250ZW50XCI6IFwibmF2aWdhdGlvbl9jc3NOYXZpZ2F0b3JDb250ZW50X19UUHJ0Z1wiLFxuXHRcImljb25CdXR0b25Db250ZW50XCI6IFwibmF2aWdhdGlvbl9pY29uQnV0dG9uQ29udGVudF9fM3JBRW9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImltZ1wiOiBcInBob3RvX2ltZ19fMW5ZWERcIixcblx0XCJtYXJrTGlua1wiOiBcInBob3RvX21hcmtMaW5rX18zQUxPYlwiLFxuXHRcIk1hcmtcIjogXCJwaG90b19NYXJrX18yM05Kb1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiZXhoaWJpdGlvblNpZGVfY29udGFpbmVyX18zUWpLTlwiLFxuXHRcInJvd1wiOiBcImV4aGliaXRpb25TaWRlX3Jvd19fM292c2FcIixcblx0XCJhZHZlcnRcIjogXCJleGhpYml0aW9uU2lkZV9hZHZlcnRfX000dHlaXCIsXG5cdFwiYWR2ZXJ0SGVhZGVyXCI6IFwiZXhoaWJpdGlvblNpZGVfYWR2ZXJ0SGVhZGVyX18zbGFaMlwiLFxuXHRcInN1YkhlYWRlckxpbmtcIjogXCJleGhpYml0aW9uU2lkZV9zdWJIZWFkZXJMaW5rX18zSGprQ1wiLFxuXHRcInN1YlRleHRcIjogXCJleGhpYml0aW9uU2lkZV9zdWJUZXh0X18zVU5jbFwiLFxuXHRcIm1pbnRCdXR0b25cIjogXCJleGhpYml0aW9uU2lkZV9taW50QnV0dG9uX18xN3RyTVwiLFxuXHRcInBob3RvRXhoaWJpdGlvblwiOiBcImV4aGliaXRpb25TaWRlX3Bob3RvRXhoaWJpdGlvbl9fMVpxMDdcIixcblx0XCJwaG90b3NcIjogXCJleGhpYml0aW9uU2lkZV9waG90b3NfXzJKNXd4XCIsXG5cdFwic3ViT3duZXJcIjogXCJleGhpYml0aW9uU2lkZV9zdWJPd25lcl9fMmFzUHJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdldFN0YXJ0ZWRDb250YWluZXJcIjogXCJnZXRTdGFydGVkX2dldFN0YXJ0ZWRDb250YWluZXJfXzN2T21sXCIsXG5cdFwiaGVhZGVyXCI6IFwiZ2V0U3RhcnRlZF9oZWFkZXJfX1F1M2NRXCIsXG5cdFwic3BhblwiOiBcImdldFN0YXJ0ZWRfc3Bhbl9fM1pvTVNcIixcblx0XCJjb250ZW50XCI6IFwiZ2V0U3RhcnRlZF9jb250ZW50X18ySW5MR1wiLFxuXHRcIkltYWdlXCI6IFwiZ2V0U3RhcnRlZF9JbWFnZV9fMlV2NWRcIixcblx0XCJnZXRTdGFydGVkVGV4dFNpZGVcIjogXCJnZXRTdGFydGVkX2dldFN0YXJ0ZWRUZXh0U2lkZV9fMW1BcG9cIixcblx0XCJuZnRFeHBsYWluXCI6IFwiZ2V0U3RhcnRlZF9uZnRFeHBsYWluX18zVHNpR1wiLFxuXHRcIm5mdENyZWF0b3JcIjogXCJnZXRTdGFydGVkX25mdENyZWF0b3JfXzNCSUsxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJxdW9cIjogXCJxdW90YXRpb25fcXVvX19GLVEwcVwiLFxuXHRcImNvbnRlbnRcIjogXCJxdW90YXRpb25fY29udGVudF9fMjE0UGpcIixcblx0XCJtYXJrZXRQbGFjZVNpZGVcIjogXCJxdW90YXRpb25fbWFya2V0UGxhY2VTaWRlX18ycWVrQVwiLFxuXHRcInBsYWNlU2lkZVwiOiBcInF1b3RhdGlvbl9wbGFjZVNpZGVfXzJUeW40XCIsXG5cdFwicXVvSGVhZGVyVGV4dFwiOiBcInF1b3RhdGlvbl9xdW9IZWFkZXJUZXh0X18xaXZDM1wiLFxuXHRcIlNwYW5cIjogXCJxdW90YXRpb25fU3Bhbl9fMmpIakxcIixcblx0XCJxdW9NaWRkbGVUZXh0XCI6IFwicXVvdGF0aW9uX3F1b01pZGRsZVRleHRfXzNnNTlmXCIsXG5cdFwicmFyaWFibGVcIjogXCJxdW90YXRpb25fcmFyaWFibGVfXzMxaEM0XCIsXG5cdFwicXVvSWNvbnNcIjogXCJxdW90YXRpb25fcXVvSWNvbnNfXzN5U2sxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZWFzb25Db250YWluZXJcIjogXCJyZWFzb25TaWRlX3JlYXNvbkNvbnRhaW5lcl9fMW9ydGNcIixcblx0XCJjb250ZW50XCI6IFwicmVhc29uU2lkZV9jb250ZW50X18yY3NfY1wiLFxuXHRcInJlYXNvbkhlYWRlclwiOiBcInJlYXNvblNpZGVfcmVhc29uSGVhZGVyX18yclFOclwiLFxuXHRcInJlYXNvbkhlYWRlclRleHRcIjogXCJyZWFzb25TaWRlX3JlYXNvbkhlYWRlclRleHRfXzE0X1JMXCIsXG5cdFwibWlkZGxlQ29udGFpbmVyXCI6IFwicmVhc29uU2lkZV9taWRkbGVDb250YWluZXJfXzNqYzY1XCIsXG5cdFwicmVhc29uVGV4dFNpZGVcIjogXCJyZWFzb25TaWRlX3JlYXNvblRleHRTaWRlX18xTmRaVFwiLFxuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfZm9vdGVyQ29udGFpbmVyX18zX0IzQlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGl0bGVcIjogXCJoZWFkLXRpdGxlX1RpdGxlX18zbXdYZ1wiLFxuXHRcImJvbGRcIjogXCJoZWFkLXRpdGxlX2JvbGRfXzEyc0d5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcInRleHQtdGl0bGVfVGl0bGVfXzZLYjloXCIsXG5cdFwiYm9sZFwiOiBcInRleHQtdGl0bGVfYm9sZF9fcFMyOHVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTGluayIsImNuIiwibGlua0J1dHRvbiIsImNoaWxkcmVuIiwiaHJlZiIsInByb3BzIiwibGlua0NvbnRhaW5lciIsImxpbmtzIiwiZnJhbWVCdXR0b24iLCJib3JkZXIiLCJjbGFzc05hbWUiLCJiYXNlQnRuIiwiRnJhbWVCb3JkZXIiLCJtdWlCdXR0b25CYXNlUm9vdCIsIm11aUJ1dHRvblJvb3QiLCJtdWlCdXR0b25Db250YWluZWQiLCJjc3NCb3JkZXJCdXR0b24iLCJtdWlCdXR0b25Db250YWluZWRQcmltYXJ5IiwibXVpQnV0dG9uTGFiZWwiLCJidXR0b24iLCJDb21wIiwiSWNvbiIsIkljb25CdXR0b24iLCJtdWlJY29uQnV0dG9uUm9vdCIsImNzc0ljb25CdXR0b24iLCJjc3NJY29uQnV0dG9uQ29udGVudCIsIm11aUljb25CdXR0b25Db2xvckluaGVyaXQiLCJtdWlJY29uQnV0dG9uTGFiZWwiLCJtdWlTdmdJY29uUm9vdCIsIkhlYWRUaXRsZSIsIkZvb3RlclNpZGUiLCJGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJjb250ZW50IiwibWFpbkNvbnRhaW5lciIsImNvbnRhaW5lciIsImxlZnRTaWRlT2ZDb250YWluZXIiLCJJY29ucyIsImpvaW5UZXh0IiwiZm9vdGVyTWVudSIsImZvb3RlciIsImNvcHlUZXh0IiwiSU5GTyIsIlRleHRUaXR0bGUiLCJSZWFzb25TaWRlRm9ybSIsIm1hcCIsImluZm8iLCJyZWFzb25TaWRlQ29udGFpbmVyIiwidGV4dCIsInRpdGxlIiwiQnV0dG9uIiwiVGV4dFRpdGxlIiwiRnJhbWVCdXR0b24iLCJtdWlCdXR0b25PdXRsaW5lZCIsImNzc0J1dHRvbkNvbnRlbnQiLCJHZXRTdGFydGVkQnV0dG9uIiwiZ2V0U3RhcnRlZEJ1dHRvbiIsIk1pbnRCdXR0b24iLCJtaW50QnV0dG9uIiwiU3ZnQXBwU3RvcmUiLCJTdmdDaGVja1NxdWFyZSIsIlN2Z0Rpc2NvcmQiLCJTdmdEb3duQXJyb3ciLCJTdmdEcm9wRG93biIsIlN2Z0Ryb3BEb3duxLBjb24iLCJTdmdFdGhMb2dvIiwiU3ZnRmFjZWJvb2siLCJTdmdGaW5nZXJwcmludCIsIlN2Z0dvb2dsZVBsYXlTdG9yZSIsIlN2Z0hvbWVwYWdlT3B0aW9uIiwiU3ZnTGlua2RuIiwiU3ZnTWFpbCIsIlN2Z01lZGlhIiwiU3ZnTWV0YURhdGEiLCJTdmdPcGVuc2VhTG9nbyIsIlN2Z1FyQ29kZSIsIlN2Z1JhcmlibGVMb2dvIiwiU3ZnU2F2aW5nc1BpZyIsIlN2Z1NtYXJ0Q29udHJhY3TEsGNvbiIsIlN2Z1R3aXR0ZXIiLCJTdmdVcGxvYWQiLCJTdmdWZWN0b3IiLCJTdmdZb3V0dWJlIiwiZGVmYXVsdCIsIkFwcFN0b3JlIiwiQ2hlY2tTcXVhcmUiLCJEaXNjb3JkIiwiRG93bkFycm93IiwiRHJvcERvd27EsGNvbiIsIkRyb3BEb3duIiwiRXRoTG9nbyIsIkZhY2Vib29rIiwiRmluZ2VycHJpbnQiLCJHb29nbGVQbGF5U3RvcmUiLCJIb21lcGFnZU9wdGlvbiIsIsSwY29ubW9uc3RyQ2hlY2tib3gxNCIsIsSwY29ubW9uc3RyQ2hlY2tib3g2IiwixLBuc3RhZ3JhbSIsIkxpbmtkbiIsIk1haWwiLCJNZWRpYSIsIk1ldGFEYXRhIiwiT3BlbnNlYUxvZ28iLCJRckNvZGUiLCJSYXJpYmxlTG9nbyIsIlNhdmluZ3NQaWciLCJTbWFydENvbnRyYWN0xLBjb24iLCJUd2l0dGVyIiwiVXBsb2FkIiwiVmVjdG9yIiwiWW91dHViZSIsIlN2Z8SwY29ubW9uc3RyQ2hlY2tib3gxNCIsIlN2Z8SwY29ubW9uc3RyQ2hlY2tib3g2IiwiU3ZnxLBuc3RhZ3JhbSIsInVzZVdpbmRvd1NpemUiLCJDT05TVCIsIk5hdmlnYXRpb24iLCJFeGhpYml0aW9uU2lkZSIsIlF1b3RhdGlvbiIsIlJlYXNvblNpZGUiLCJHZXRTdGFydGVkU2lkZSIsIkxheW91dCIsInNpemUiLCJsYXlvdXQiLCJuYXZpZ2F0aW9uIiwid2lkdGgiLCJUQUJMRVRfU0laRSIsImV4aGliaXRpb24iLCJyZWFzb25TaWRlIiwiZ2V0U3RhcnRlZCIsIk5hdmlnYXRpb25MaW5rIiwibmF2IiwiRk9PVEVSTUVOVSIsIkZvb3Rlck5hdmlnYXRpb24iLCJtZW51IiwiTmF2IiwiTmF2aWdhdGlvbkJ1dHRvbiIsIk1FTlUiLCJmbGF0IiwibXVpUGFwZXJSb290IiwibXVpQXBwQmFyUm9vdCIsIm11aUFwcEJhclBvc2l0aW9uQWJzb2x1dGUiLCJtdWlBcHBCYXJDb2xvckRlZmF1bHQiLCJjc3NIZWFkZXIiLCJtdWlQYXBlckVsZXZhdGlvbiIsIm5hdmlnYXRvciIsImNvbXAiLCJjc3NOYXZpZ2F0b3IiLCJtdWlMaXN0SXRlbVJvb3QiLCJjc3NOYXZpZ2F0b3JDb250ZW50IiwibXVpTGlzdEl0ZW1HdXR0ZXJzIiwibXVpTGlzdEl0ZW1CdXR0b24iLCJzdWJCdG4iLCJrZXkiLCJpY29uQnV0dG9uQ29udGVudCIsImxpbmsiLCJzcmMiLCJhbHQiLCJwaG90byIsImltZyIsIm1hcmtMaW5rIiwibWFyayIsIlBob3RvIiwiaGVpZ2h0IiwiRXhoaWJpdGlvbiIsInJvdyIsImFkdmVydCIsImFkdmVydEhlYWRlciIsImJvcmRlckxpbmUiLCJzdWJIZWFkZXJMaW5rIiwic3ViVGV4dCIsInBob3RvRXhoaWJpdGlvbiIsInBob3RvcyIsImltZ0V4aGliaXQiLCJvd25lciIsInN1Yk93bmVyIiwiR2V0U3RhcnRlZCIsImdldFN0YXJ0ZWRDb250YWluZXIiLCJoZWFkZXIiLCJzcGFuIiwiSW1hZ2UiLCJnZXRTdGFydGVkVGV4dFNpZGUiLCJuZnRFeHBsYWluIiwiU3BhbiIsIm5mdENyZWF0b3IiLCJHZXRTdGFydGVkQnV0dG9uVGV4dCIsIk9wZW5zZWEiLCJSYXJpYWJsZSIsInF1byIsIm1hcmtldFBsYWNlU2lkZSIsInBsYWNlU2lkZSIsInF1b0hlYWRlclRleHQiLCJxdW9NaWRkbGVUZXh0IiwiUmVhc29uIiwiUmVhc29uSW1hZ2UiLCJyZWFzb25Db250YWluZXIiLCJyZWFzb25IZWFkZXIiLCJyZWFzb25IZWFkZXJUZXh0IiwiTGluZSIsIm1pZGRsZUNvbnRhaW5lciIsInJlYXNvblRleHRTaWRlIiwicmVhc3RJbWFnZVNpZGUiLCJmb290ZXJUZXh0IiwiYm9sZCIsIm9wYWNpdHkiLCJUaXRsZSIsImZvbnRTaXplIiwiREVTS1RPUF9TSVpFIiwibWFrZU5GVE9wdGlvbiIsIkJVU0lORVNTIiwiaWNvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1bmRlZmluZWQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwiaGFzUHJlZmV0Y2giLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==