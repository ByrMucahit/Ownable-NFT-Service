(() => {
var exports = {};
exports.id = "pages/businessSignUp";
exports.ids = ["pages/businessSignUp"];
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

/***/ "./components/form/businessSignUp/index.js":
/*!*************************************************!*\
  !*** ./components/form/businessSignUp/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ "./components/form/businessSignUp/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _input_dropdown_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../input/dropdown/index */ "./components/input/dropdown/index.js");
/* harmony import */ var _input_text_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/text/text */ "./components/input/text/text.js");
/* harmony import */ var _input_message_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input/message/index */ "./components/input/message/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\form\\businessSignUp\\index.js";









function BusinessSignUp() {
  return (
    /*#__PURE__*/

    /* Business Sign Up Form */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().headers),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("main", {
            className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiContainerRoot)} ${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiContainerMaxWidthSm)}`,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
              className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiTypographyRoot)} ${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().cssHeader)} ${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().muiTypographyH5)}`,
              bold: true,
              children: "Contact us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().cnnSelectionInput)} ${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().cssSelectionInputContainer)}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().cssControl)}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    name: "subject",
                    type: "hidden",
                    value: "business"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_input_text_text__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_input_message_index__WEBPACK_IMPORTED_MODULE_3__.default, {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().message)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_5__.default, {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),
                border: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_4__.default, {
                  className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnText),
                  bold: true,
                  children: "SUBMIT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                children: ["Mail To:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 5
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
                  children: "Ownable-NS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 5
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 5
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
                  children: "2633 Lincoln Blvd Suite #710"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 5
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 5
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
                  children: "Santa Monica, CA 90405"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 5
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 1
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessSignUp);

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

/***/ "./components/input/dropdown/index.js":
/*!********************************************!*\
  !*** ./components/input/dropdown/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./components/input/dropdown/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constant */ "./constant/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\dropdown\\index.js";







function DropDownMenu({
  business = false,
  header,
  big,
  medium,
  small
}) {
  const comp = business ? _constant__WEBPACK_IMPORTED_MODULE_3__.BUSINESS : _constant__WEBPACK_IMPORTED_MODULE_3__.makeNFTOption;
  return (
    /*#__PURE__*/

    /* Dropdown menu container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      for: "subOptions",
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
        children: comp.map(options => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
            value: options.key,
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().option),
            children: options.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, this);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDownMenu);

/***/ }),

/***/ "./components/input/message/index.js":
/*!*******************************************!*\
  !*** ./components/input/message/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ "./components/input/message/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\message\\index.js";




function MessageInput() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().muiFormControlRoot),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
      className: `
            ${(_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().muiFormLabelRoot)} 
            ${(_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().muiInputLabelRoot)} 
            ${(_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().cssMessage)} 
            ${(_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().muiInputFormControl)} 
            ${(_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().muiInputLabelAnimated)}`,
      "data-shrink": "false",
      for: "textAreaMessage",
      name: "message",
      rows: "8",
      cols: "57",
      rowmax: "80",
      colsmax: "60",
      placeholder: "Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      id: "textAreaMessage",
      name: "message",
      margin: "normal",
      rows: "8",
      cols: "57",
      rowmax: "80",
      colsmax: "60",
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().messageArea),
      children: "Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageInput);

/***/ }),

/***/ "./components/input/text/text.js":
/*!***************************************!*\
  !*** ./components/input/text/text.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.module.css */ "./components/input/text/text.module.css");
/* harmony import */ var _text_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["medium", "big", "small"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\input\\text\\text.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function Button(_ref) {
  let {
    medium = false,
    big = false,
    small = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: `${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiFormControlRoot)} ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiFormControlFullWidth)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
      className: `
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiFormLabelRoot)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputLabelRoot)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputLabelFormControl)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputLabelAnimated)}`,
      "datas-shrink": "false",
      name: "email",
      placeholder: "Enter Email",
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: `
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputBaseRoot)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputRoot)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputUnderline)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().cssInput)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputBaseFullWidth)} 
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputFullWidth)}
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputBaseFormControl)}
         ${(_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputFormControl)}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread(_objectSpread({
        "aria-invalid": "false",
        name: "email",
        placeholder: "Enter Email",
        type: "text",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([medium && (_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().medium), big && (_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().big), (_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().small), (_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputBaseInput), (_text_module_css__WEBPACK_IMPORTED_MODULE_3___default().muiInputInput)])
      }, props), {}, {
        required: true
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/layout/businessSignUp/index.js":
/*!***************************************************!*\
  !*** ./components/layout/businessSignUp/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/businessSignUp/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _form_businessSignUp_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/businessSignUp/index */ "./components/form/businessSignUp/index.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/index */ "./components/footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\businessSignUp\\index.js";







function Layout() {
  return (
    /*#__PURE__*/

    /* Layout Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigator),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_form_businessSignUp_index__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_footer_index__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

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

/***/ "./pages/businessSignUp.js":
/*!*********************************!*\
  !*** ./pages/businessSignUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_businessSignUp_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/businessSignUp/index */ "./components/layout/businessSignUp/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\businessSignUp.js";




function BusinessSignup() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_businessSignUp_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: " Hello World "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 8
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessSignup);

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

/***/ "./components/form/businessSignUp/style.module.css":
/*!*********************************************************!*\
  !*** ./components/form/businessSignUp/style.module.css ***!
  \*********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"form": "style_form__2pLml",
	"container": "style_container__fMSAu",
	"headers": "style_headers__11t4w",
	"muiContainerRoot": "style_muiContainerRoot__26ea_",
	"muiContainerMaxWidthSm": "style_muiContainerMaxWidthSm__1LkWR",
	"muiTypographyRoot": "style_muiTypographyRoot__2NKSA",
	"muiTypographyH5": "style_muiTypographyH5__2RznB",
	"cssHeader": "style_cssHeader__3Gbvc",
	"cnnSelectionInput": "style_cnnSelectionInput__1vo7W",
	"cssSelectionInputContainer": "style_cssSelectionInputContainer__2Qksf",
	"cssControl": "style_cssControl__OU3uV"
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

/***/ "./components/input/dropdown/style.module.css":
/*!****************************************************!*\
  !*** ./components/input/dropdown/style.module.css ***!
  \****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"header": "style_header__PyZfW",
	"options": "style_options__2O3BB",
	"medium": "style_medium__xl0w7",
	"option": "style_option__3mNea"
};


/***/ }),

/***/ "./components/input/message/style.module.css":
/*!***************************************************!*\
  !*** ./components/input/message/style.module.css ***!
  \***************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"muiFormControlRoot": "style_muiFormControlRoot__CPQWA",
	"messageArea": "style_messageArea__2T2C0"
};


/***/ }),

/***/ "./components/input/text/text.module.css":
/*!***********************************************!*\
  !*** ./components/input/text/text.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"muiFormControlFullWidth": "text_muiFormControlFullWidth__2b-Cn",
	"muiFormControlRoot": "text_muiFormControlRoot__1ua9q",
	"muiFormLabelRoot": "text_muiFormLabelRoot__1rI13",
	"muiInputLabelRoot": "text_muiInputLabelRoot__2qez3",
	"muiInputLabelFormControl": "text_muiInputLabelFormControl__1LKt4",
	"muiInputLabelAnimated": "text_muiInputLabelAnimated__3WFkK",
	"muiInputBaseRoot": "text_muiInputBaseRoot__32JNC",
	"muiInputBaseFullWidth": "text_muiInputBaseFullWidth__10II5",
	"muiInputRoot": "text_muiInputRoot__ycnst",
	"cssInput": "text_cssInput__3Yu1O",
	"muiInputFormControl": "text_muiInputFormControl__38Pk_",
	"muiInputUnderline": "text_muiInputUnderline__2bRNf",
	"muiInputBaseInput": "text_muiInputBaseInput__3s3r6",
	"mui-aouto-fill-cancel": "text_mui-aouto-fill-cancel__3S_Kx",
	"muiInputInput": "text_muiInputInput__1Rcm0"
};


/***/ }),

/***/ "./components/layout/businessSignUp/style.module.css":
/*!***********************************************************!*\
  !*** ./components/layout/businessSignUp/style.module.css ***!
  \***********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__2vT0z",
	"form": "style_form__9qh6R",
	"contact": "style_contact__3BEdP",
	"content": "style_content__2fgZj"
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
var __webpack_exports__ = (__webpack_exec__("./pages/businessSignUp.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQSx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvYnV0dG9uL2ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvcm0vYnVzaW5lc3NTaWduVXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvQXBwU3RvcmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvQ2hlY2tTcXVhcmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRGlzY29yZC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Eb3duQXJyb3cuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRHJvcERvd27EsGNvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9FdGhMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0ZhY2Vib29rLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0ZpbmdlcnByaW50LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0dvb2dsZVBsYXlTdG9yZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ib21lcGFnZU9wdGlvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9MaW5rZG4uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWFpbC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9NZXRhRGF0YS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9PcGVuc2VhTG9nby5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9RckNvZGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvUmFyaWJsZUxvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvU2F2aW5nc1BpZy5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9TbWFydENvbnRyYWN0xLBjb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvVHdpdHRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvVmVjdG9yLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBjb25tb25zdHJDaGVja2JveDE0LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL8SwY29ubW9uc3RyQ2hlY2tib3g2LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL8SwbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaW5wdXQvZHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaW5wdXQvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pbnB1dC90ZXh0L3RleHQuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbGF5b3V0L2J1c2luZXNzU2lnblVwL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vYnV0dG9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vZm9vdGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L2hlYWQtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC90ZXh0LXRpdGxlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb25zdGFudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL3BhZ2VzL2J1c2luZXNzU2lnblVwLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2J1dHRvbi9iYXNlL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvYnV0dG9uL2ljb24vc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9mb290ZXIvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9mb3JtL2J1c2luZXNzU2lnblVwL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pbnB1dC9kcm9wZG93bi9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2lucHV0L21lc3NhZ2Uvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pbnB1dC90ZXh0L3RleHQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvYnVzaW5lc3NTaWduVXAvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC90ZXh0LXRpdGxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9pZ25vcmVkfEM6XFxVc2Vyc1xcbW11Y2FcXERvY3VtZW50c1xcR2l0SHViXFxPd25hYmxlLU5GVC1TZXJ2aWNlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5mdW5jdGlvbiBsaW5rQnV0dG9uICh7IGNoaWxkcmVuLCBocmVmLC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfSBwcm9wcz4ge2NoaWxkcmVufSA8L2E+XHJcbiAgICAgICAgPC9MaW5rPiAgXHJcbiAgICApIFxyXG59XHJcblxyXG5mdW5jdGlvbiBmcmFtZUJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLm11aUJ1dHRvbkJhc2VSb290LFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLm11aUJ1dHRvblJvb3QsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXMubXVpQnV0dG9uQ29udGFpbmVkLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzLmNzc0JvcmRlckJ1dHRvbixcclxuICAgICAgICAgICAgICAgIHN0eWxlcy5tdWlCdXR0b25Db250YWluZWRQcmltYXJ5XHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubXVpQnV0dG9uTGFiZWx9PntjaGlsZHJlbn0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKSBcclxufVxyXG5cclxuZnVuY3Rpb24gYnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIGNvbnN0IENvbXAgPSBib3JkZXIgPyBmcmFtZUJ1dHRvbiA6IGxpbmtCdXR0b25cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb21wICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9Db21wPlxyXG4gICAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uXHJcblxyXG4vKlxyXG4gICAgRG9jdW1lbnQ6XHJcbiAgICAtLS0tLS0tLVxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9yZGVyOiBTb21lIGJ1dHRvbiBoYXMgYm9yZGVyLCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gYnV0dG9uIGhhcyBib3JkZXIsIGJvcmRlciBhdHRyaWJ1dGUgd2lsbCBoYXZlIGJlZW4gIGFjdGl2YXRlZC4gXHJcbiAgICBjaGlsZHJlbjogQ29udGVudCwgd2hpY2ggaW5jbHVkZSB3aXRoaW4gZWxlbWVudC5cclxuICAgIC4uLnByb3BzOiBXaGF0IGlmIEFueSBwcm9wZXJ0aWVzIGlzIHBhc3NlZCBpbnRvIGZ1bmN0aW9uLCBGdW5jdGlvbiBjYW4gY2F0Y2guXHJcblxyXG4gICAgLS0+IFdlIGhhdmUgb3B0aW9uIHRoYXQncyBpcyBkaXZpZGVkIGludG8gdHdvIG9wdGlvbi4gT25lIE9mIHRoZW0gaGFzIGltYWdlIGFuZCB0ZXh0LCBvdGhlciBvbmUgaGFzIGp1c3QgdGV4dC5cclxuICAgIC0tPiBCYXNlIEJ1dHRvbiBoYXMganVzdCB0ZXh0LlxyXG4gICAgLS0+IEJhc2UgQnV0dG9uIGlzIGRpdmlkZWQgaW50byB0d28gdmFyaWFudCBpbiBpdHNlbGYuIE9uZSBPZiB0aGVtIGhhcyBib3JkZXJzLCBvdGhlciBvbmUgaGFzbid0LiBXaGVuIGJ1dHRvbiB3YXMgY2FsbGVkIHdpdGggc2VuZGVkIHdpdGggcGFyYW1ldGVyIG5hbWVkIGJvcmRlciwgQnV0dG9uIHdpbGwgaGF2ZSBcclxuICAgIGJlZW4gYm9yZGVyLiBcclxuKi9cclxuXHJcbi8qIFxyXG4vLyBUTyBETyBMaXN0XHJcbltYXSAgZnJhbWUgYnV0dG9uIC8gVHJhbnNwYXJlbnQgLSBjb2xvclxyXG5cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJy4uLy4uL2ljb25zJ1xyXG5cclxuZnVuY3Rpb24gSWNvbkJ1dHRvbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uQmFzZVJvb3R9IFxyXG4gICAgICAgICR7c3R5bGVzLm11aUljb25CdXR0b25Sb290fSBcclxuICAgICAgICAke3N0eWxlcy5jc3NJY29uQnV0dG9ufSBcclxuICAgICAgICAke3N0eWxlcy5jc3NJY29uQnV0dG9uQ29udGVudH0gXHJcbiAgICAgICAgJHtzdHlsZXMubXVpSWNvbkJ1dHRvbkNvbG9ySW5oZXJpdH1gfVxyXG4gICAgICAgIHRhYkluZGV4PXtcIjBcIn1cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tdWlJY29uQnV0dG9uTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgPEljb24uSG9tZXBhZ2VPcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMubXVpU3ZnSWNvblJvb3R9Lz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tICcuLi9uYXZpZ2F0aW9uL2Zvb3RlcidcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8qIENvbnRhaW5lciAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTGVmdCBTaWRlIE9mIEZvb3RlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2lkZU9mQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJY29ucyBPZiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkljb25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2J5cl9tdWNhaGl0Jz48SWNvbi5Ud2l0dGVyLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcG5lciBub3JlZmVycmVyXCIgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL211Y2FoaXQuYmF5YXIuNzk2Jz48SWNvbi5GYWNlYm9vay8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BuZXIgbm9yZWZlcnJlclwiIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tLyc+PEljb24uWW91dHViZSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL211Y2FoaXQuYnlyci8nPjxJY29uLsSwbnN0YWdyYW0vPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbSVDMyVCQ2NhaGl0LWJheWFyLTAzODAwMDIwMC8nPjxJY29uLkxpbmtkbiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL21haWwuZ29vZ2xlLmNvbS9tYWlsL3UvMC8jaW5ib3gnPjxJY29uLk1haWwvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wbmVyIG5vcmVmZXJyZXJcIiBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2J5cl9tdWNhaGl0Jz48SWNvbi5EaXNjb3JkLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRleHQgZnJvbSBsZWZ0IHNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuam9pblRleHR9IHNpemU9JzEycHgnPkpvaW4gdGhlIGNvbW11bml0eSBvZiAjb3duYWJsZS1OUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5hdmlnYXRvciBmcm9tIHJpZ2h0IHNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb3B5IGZyb20gbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlUZXh0fT5Db3B5cmlnaHQgwqkgMjAyMSBPd25hYmxlLU5TPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJy4uLy4uL2lucHV0L2Ryb3Bkb3duL2luZGV4J1xyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uLy4uL2lucHV0L3RleHQvdGV4dCdcclxuaW1wb3J0IE1lc3NhZ2VzQXJlYSBmcm9tICcuLi8uLi9pbnB1dC9tZXNzYWdlL2luZGV4J1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uLy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24vYmFzZS9pbmRleCdcclxuZnVuY3Rpb24gQnVzaW5lc3NTaWduVXAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICAvKiBCdXNpbmVzcyBTaWduIFVwIEZvcm0gKi9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICB7LyogQ29udGFpbmVyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGVyIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUNvbnRhaW5lclJvb3R9ICR7c3R5bGVzLm11aUNvbnRhaW5lck1heFdpZHRoU219YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlUeXBvZ3JhcGh5Um9vdH0gJHtzdHlsZXMuY3NzSGVhZGVyfSAke3N0eWxlcy5tdWlUeXBvZ3JhcGh5SDV9YH0gYm9sZD5Db250YWN0IHVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNublNlbGVjdGlvbklucHV0fSAke3N0eWxlcy5jc3NTZWxlY3Rpb25JbnB1dENvbnRhaW5lcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNzc0NvbnRyb2x9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic3ViamVjdFwiIHR5cGU9e1wiaGlkZGVuXCJ9IHZhbHVlPXtcImJ1c2luZXNzXCJ9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTWVzc2FnZXMgQXJlYSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXNBcmVhIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFN1Ym1pdCBCdG4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59Ym9yZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmJ0blRleHR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2xkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG57LyogQ29udGFjdCAqL31cclxuPGRpdj5cclxuICAgIE1haWwgVG86XHJcbiAgICA8YnIvPlxyXG4gICAgPGI+T3duYWJsZS1OUzwvYj5cclxuICAgIDxici8+XHJcbiAgICA8Yj4yNjMzIExpbmNvbG4gQmx2ZCBTdWl0ZSAjNzEwPC9iPlxyXG4gICAgPGJyLz5cclxuICAgIDxiPlNhbnRhIE1vbmljYSwgQ0EgOTA0MDU8L2I+XHJcbiAgIFxyXG48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NTaWduVXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mcmFtZUJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvblJvb3R9IFxyXG4gICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uT3V0bGluZWR9IFxyXG4gICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzQnV0dG9uQ29udGVudH1gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tdWlCdXR0b25MYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFtZUJ1dHRvblxyXG5cclxuLyogXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICA8VGV4dFRpdGxlLz46IEl0J3MgdmFyeSBvZiB0ZXh0LCBJdCBqdXN0IGhhcyBzb21lIHNwZWNpZmljIGF0dHJpYnV0ZSBzdWNoIGFzIDE2IHB4IGZvbnQgc2l6ZSwgYW5kIGJvbGQgZm9udCB3aWdodC5cclxuKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQXBwU3RvcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNDAgNzJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2FwcC1zdG9yZV9zdmdfX2NsaXAwXzUxOjUwMSlcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIzMS40NjEgNzEuMDlIOC40MDdDMy43NzIgNzEuMDkgMCA2Ny4zMDggMCA2Mi42NzhWOC40QzAgMy43NjggMy43NzIgMCA4LjQwNyAwaDIyMy4wNTRDMjM2LjA5NCAwIDI0MCAzLjc2OCAyNDAgOC40djU0LjI3OGMwIDQuNjMtMy45MDYgOC40MTItOC41MzkgOC40MTJ6XCJcbiAgICAgICAgICBmaWxsPVwiI0E2QTZBNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0yMzguMjc5IDYyLjY4YTYuODA4IDYuODA4IDAgMDEtNi44MTYgNi44MDdIOC40MDdjLTMuNzY3IDAtNi44MjUtMy4wNDYtNi44MjUtNi44MDdWOC4zOThjMC0zLjc2IDMuMDU4LTYuODE2IDYuODI1LTYuODE2aDIyMy4wNTRhNi44MTUgNi44MTUgMCAwMTYuODE2IDYuODE2bC4wMDIgNTQuMjgyelwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNTMuNTYgMzUuMTYxYy0uMDUtNS43MjggNC42OTItOC41MTUgNC45MS04LjY0NC0yLjY4Ny0zLjkxNi02Ljg1LTQuNDUtOC4zMTQtNC40OTMtMy40OTYtLjM2OC02Ljg4OSAyLjA5MS04LjY3IDIuMDkxLTEuODE3IDAtNC41Ni0yLjA1Ni03LjUxNi0xLjk5NS0zLjgwNS4wNTgtNy4zNjQgMi4yNi05LjMxNiA1LjY4LTQuMDI4IDYuOTcyLTEuMDI0IDE3LjIxOCAyLjgzNiAyMi44NTMgMS45MyAyLjc2IDQuMTg2IDUuODQyIDcuMTQgNS43MzQgMi44ODgtLjEyIDMuOTY3LTEuODQxIDcuNDUzLTEuODQxIDMuNDU1IDAgNC40NjggMS44NCA3LjQ4IDEuNzcyIDMuMS0uMDUgNS4wNTItMi43NzMgNi45MTUtNS41NTggMi4yMzEtMy4xNjMgMy4xMjctNi4yNzkgMy4xNjMtNi40MzktLjA3My0uMDI1LTYuMDIxLTIuMjk0LTYuMDgtOS4xNnpNNDcuODcyIDE4LjMxNmMxLjU1NC0xLjk0MiAyLjYxNy00LjU4NSAyLjMyMi03LjI2Ny0yLjI1LjEtNS4wNjIgMS41NTUtNi42ODEgMy40NTUtMS40MzMgMS42NzQtMi43MTMgNC40MTgtMi4zODIgNi45OTkgMi41MjYuMTg4IDUuMTItMS4yNzQgNi43NC0zLjE4N3pNOTUuMzY5IDU1Ljk5aC00LjAzN2wtMi4yMTItNi45NDdoLTcuNjg3bC0yLjEwNyA2Ljk0N2gtMy45M2w3LjYxNi0yMy42NTFoNC43MDRsNy42NTMgMjMuNjUxem0tNi45MTYtOS44NjFsLTItNi4xNzZjLS4yMTEtLjYzMS0uNjA4LTIuMTE3LTEuMTkzLTQuNDU2aC0uMDdhMTcxLjc2NiAxNzEuNzY2IDAgMDEtMS4xMjQgNC40NTZMODIuMSA0Ni4xMjhoNi4zNTJ6TTExNC45NTUgNDcuMjU0YzAgMi45LS43ODQgNS4xOTMtMi4zNTIgNi44NzYtMS40MDUgMS40OTgtMy4xNDkgMi4yNDYtNS4yMzEgMi4yNDYtMi4yNDcgMC0zLjg2MS0uODA3LTQuODQ0LTIuNDJoLS4wNzF2OC45ODNoLTMuNzlWNDQuNTVjMC0xLjgyMy0uMDQ4LTMuNjk1LS4xNC01LjYxNGgzLjMzM2wuMjExIDIuNzAzaC4wNzFjMS4yNjQtMi4wMzcgMy4xODItMy4wNTMgNS43NTctMy4wNTMgMi4wMTIgMCAzLjY5Mi43OTQgNS4wMzYgMi4zODUgMS4zNDggMS41OTIgMi4wMiAzLjY4NiAyLjAyIDYuMjgzem0tMy44NjIuMTM4YzAtMS42Ni0uMzczLTMuMDI4LTEuMTIzLTQuMTA1LS44Mi0xLjEyNC0xLjkyLTEuNjg1LTMuMy0xLjY4NS0uOTM1IDAtMS43ODUuMzEzLTIuNTQ0LjkzLS43NjEuNjIxLTEuMjU4IDEuNDM0LTEuNDkxIDIuNDQtLjExOC40NjktLjE3Ni44NTMtLjE3NiAxLjE1NXYyLjg0M2MwIDEuMjQuMzggMi4yODggMS4xNDEgMy4xNDIuNzYxLjg1NSAxLjc0OSAxLjI4MiAyLjk2NSAxLjI4MiAxLjQyOCAwIDIuNTM5LS41NTEgMy4zMzQtMS42NS43OTYtMS4xIDEuMTk0LTIuNTUgMS4xOTQtNC4zNTJ6TTEzNC41NzYgNDcuMjU0YzAgMi45LS43ODQgNS4xOTMtMi4zNTQgNi44NzYtMS40MDIgMS40OTgtMy4xNDYgMi4yNDYtNS4yMjggMi4yNDYtMi4yNDcgMC0zLjg2MS0uODA3LTQuODQzLTIuNDJoLS4wNzF2OC45ODNoLTMuNzlWNDQuNTVjMC0xLjgyMy0uMDQ4LTMuNjk1LS4xNDEtNS42MTRoMy4zMzRsLjIxMSAyLjcwM2guMDcxYzEuMjYzLTIuMDM3IDMuMTgxLTMuMDUzIDUuNzU3LTMuMDUzIDIuMDExIDAgMy42OTEuNzk0IDUuMDM4IDIuMzg1IDEuMzQyIDEuNTkyIDIuMDE2IDMuNjg2IDIuMDE2IDYuMjgzem0tMy44NjEuMTM4YzAtMS42Ni0uMzc1LTMuMDI4LTEuMTI2LTQuMTA1LS44MTktMS4xMjQtMS45MTYtMS42ODUtMy4yOTctMS42ODUtLjkzNyAwLTEuNzg1LjMxMy0yLjU0Ni45My0uNzYxLjYyMS0xLjI1NyAxLjQzNC0xLjQ5IDIuNDQtLjExNS40NjktLjE3Ni44NTMtLjE3NiAxLjE1NXYyLjg0M2MwIDEuMjQuMzgxIDIuMjg4IDEuMTM4IDMuMTQyLjc2MS44NTMgMS43NDkgMS4yODIgMi45NjkgMS4yODIgMS40MjcgMCAyLjUzOC0uNTUxIDMuMzMzLTEuNjUuNzk3LTEuMSAxLjE5NS0yLjU1IDEuMTk1LTQuMzUyek0xNTYuNTE0IDQ5LjM1OGMwIDIuMDEyLS42OTkgMy42NDktMi4xMDEgNC45MTItMS41NDIgMS4zODEtMy42ODggMi4wNy02LjQ0NSAyLjA3LTIuNTQ2IDAtNC41ODctLjQ5LTYuMTMxLTEuNDczbC44NzgtMy4xNThjMS42NjQgMS4wMDYgMy40OSAxLjUxIDUuNDc5IDEuNTEgMS40MjcgMCAyLjUzOS0uMzIzIDMuMzM3LS45NjYuNzk0LS42NDMgMS4xOTEtMS41MDcgMS4xOTEtMi41ODQgMC0uOTYtLjMyNy0xLjc2OC0uOTgzLTIuNDI0LS42NTMtLjY1Ni0xLjc0Mi0xLjI2Ni0zLjI2NC0xLjgzLTQuMTQyLTEuNTQ0LTYuMjEyLTMuODA2LTYuMjEyLTYuNzgxIDAtMS45NDQuNzI2LTMuNTM5IDIuMTc4LTQuNzggMS40NDctMS4yNDEgMy4zNzgtMS44NjIgNS43OTItMS44NjIgMi4xNTMgMCAzLjk0MS4zNzUgNS4zNjkgMS4xMjNsLS45NDggMy4wOWMtMS4zMzMtLjcyNi0yLjg0MS0xLjA4OC00LjUyOC0xLjA4OC0xLjMzMyAwLTIuMzc1LjMyOS0zLjEyMS45ODMtLjYzMi41ODQtLjk0OCAxLjI5Ny0uOTQ4IDIuMTQxIDAgLjkzNS4zNjEgMS43MDggMS4wODYgMi4zMTYuNjMxLjU2MSAxLjc3OCAxLjE3IDMuNDQyIDEuODI1IDIuMDM2LjgyIDMuNTMxIDEuNzc3IDQuNDkyIDIuODc2Ljk1OSAxLjA5NCAxLjQzNyAyLjQ2NSAxLjQzNyA0LjF6TTE2OS4wNDUgNDEuNzhoLTQuMTc3djguMjhjMCAyLjEwNi43MzYgMy4xNTggMi4yMTEgMy4xNTguNjc3IDAgMS4yMzktLjA1OSAxLjY4NC0uMTc2bC4xMDUgMi44NzdjLS43NDcuMjgtMS43My40Mi0yLjk0OC40Mi0xLjQ5NyAwLTIuNjY3LS40NTctMy41MTEtMS4zNjktLjg0MS0uOTEzLTEuMjY0LTIuNDQ1LTEuMjY0LTQuNTk3di04LjU5N2gtMi40ODl2LTIuODQ0aDIuNDg5VjM1LjgxbDMuNzIzLTEuMTIzdjQuMjQ1aDQuMTc3djIuODQ4ek0xODcuODk1IDQ3LjMyM2MwIDIuNjIxLS43NSA0Ljc3NC0yLjI0NyA2LjQ1Ny0xLjU3IDEuNzMzLTMuNjUzIDIuNTk2LTYuMjUxIDIuNTk2LTIuNTAzIDAtNC40OTYtLjgzLTUuOTgyLTIuNDktMS40ODYtMS42Ni0yLjIyOS0zLjc1NS0yLjIyOS02LjI4IDAtMi42NDMuNzY0LTQuODA4IDIuMjk4LTYuNDkxIDEuNTMxLTEuNjg1IDMuNTk3LTIuNTI3IDYuMTk0LTIuNTI3IDIuNTAzIDAgNC41MTguODMgNi4wMzggMi40OTIgMS40NTQgMS42MTEgMi4xNzkgMy42OTMgMi4xNzkgNi4yNDN6bS0zLjkzMi4xMjNjMC0xLjU3My0uMzM2LTIuOTIyLTEuMDE3LTQuMDQ3LS43OTUtMS4zNjItMS45MzEtMi4wNC0zLjQwMy0yLjA0LTEuNTIzIDAtMi42ODEuNjgtMy40NzUgMi4wNC0uNjgxIDEuMTI3LTEuMDE3IDIuNDk3LTEuMDE3IDQuMTE4IDAgMS41NzIuMzM2IDIuOTIxIDEuMDE3IDQuMDQ1LjgxOSAxLjM2MSAxLjk2NCAyLjA0IDMuNDQxIDIuMDQgMS40NDcgMCAyLjU4My0uNjkzIDMuNDAzLTIuMDc2LjY5OS0xLjE0NiAxLjA1MS0yLjUxIDEuMDUxLTQuMDh6TTIwMC4yMTUgNDIuMjY4YTYuNTggNi41OCAwIDAwLTEuMTk0LS4xMDVjLTEuMzM0IDAtMi4zNjUuNTAzLTMuMDkgMS41MTEtLjYzMS44ODktLjk0OCAyLjAxMi0uOTQ4IDMuMzY4djguOTQ4aC0zLjc4OGwuMDM1LTExLjY4M2E5Mi45MSA5Mi45MSAwIDAwLS4xNDItNS4zN2gzLjMwMWwuMTM5IDMuMjY0aC4xMDVjLjQtMS4xMjIgMS4wMzEtMi4wMjUgMS44OTUtMi43MDIuODQ1LS42MSAxLjc1Ny0uOTEzIDIuNzQtLjkxMy4zNSAwIC42NjYuMDI1Ljk0Ny4wN3YzLjYxMnpNMjE3LjE2NiA0Ni42NTZjMCAuNjgtLjA0NCAxLjI1Mi0uMTM4IDEuNzE5aC0xMS4zNzFjLjA0NCAxLjY4NS41OTQgMi45NzMgMS42NSAzLjg2Mi45NTguNzk0IDIuMTk3IDEuMTkyIDMuNzE5IDEuMTkyIDEuNjgzIDAgMy4yMTktLjI2OCA0LjYwMS0uODA2bC41OTMgMi42M2MtMS42MTQuNzA0LTMuNTIgMS4wNTQtNS43MTkgMS4wNTQtMi42NDUgMC00LjcyMS0uNzc5LTYuMjMzLTIuMzM0LTEuNTA3LTEuNTU1LTIuMjYzLTMuNjQzLTIuMjYzLTYuMjYzIDAtMi41NzEuNzAzLTQuNzEzIDIuMTA5LTYuNDIgMS40NzItMS44MjQgMy40NjEtMi43MzYgNS45NjQtMi43MzYgMi40NTkgMCA0LjMyLjkxMiA1LjU4NCAyLjczNSAxLjAwMSAxLjQ0OSAxLjUwNCAzLjI0IDEuNTA0IDUuMzY3em0tMy42MTQtLjk4MmMuMDI1LTEuMTI0LS4yMjItMi4wOTQtLjczNi0yLjkxMy0uNjU2LTEuMDU0LTEuNjY0LTEuNTgtMy4wMi0xLjU4LTEuMjQgMC0yLjI0OC41MTMtMy4wMTcgMS41NDQtLjYzMS44Mi0xLjAwNyAxLjgwMi0xLjEyMiAyLjk0N2g3Ljg5NXYuMDAyek04Ny4yIDE3Ljc4OWMwIDIuMDkxLS42MjcgMy42NjYtMS44OCA0LjcyMy0xLjE2Mi45NzYtMi44MTEgMS40NjUtNC45NDggMS40NjUtMS4wNiAwLTEuOTY3LS4wNDYtMi43MjYtLjEzOXYtMTEuNDNjLjk5LS4xNiAyLjA1Ny0uMjQgMy4yMS0uMjQgMi4wMzUgMCAzLjU2OS40NDIgNC42MDQgMS4zMjcgMS4xNTkgMSAxLjc0IDIuNDMxIDEuNzQgNC4yOTR6bS0xLjk2NC4wNTFjMC0xLjM1Ni0uMzYtMi4zOTYtMS4wNzgtMy4xMi0uNzE4LS43MjQtMS43NjctMS4wODctMy4xNDgtMS4wODctLjU4NyAwLTEuMDg2LjA0LTEuNS4xMjF2OC42OWMuMjI5LjAzNS42NDguMDUgMS4yNTguMDUgMS40MjYgMCAyLjUyNi0uMzk2IDMuMzAxLTEuMTg4Ljc3NS0uNzkzIDEuMTY3LTEuOTQ4IDEuMTY3LTMuNDY2ek05Ny42MTYgMTkuNjE2YzAgMS4yODgtLjM2OCAyLjM0NC0xLjEwNCAzLjE3Mi0uNzcyLjg1MS0xLjc5NCAxLjI3Ni0zLjA3IDEuMjc2LTEuMjMgMC0yLjIxLS40MDctMi45NC0xLjIyNC0uNzMtLjgxNi0xLjA5NC0xLjg0NS0xLjA5NC0zLjA4NiAwLTEuMjk3LjM3NS0yLjM2MiAxLjEyOS0zLjE4OC43NTQtLjgyNyAxLjc2Ny0xLjI0IDMuMDQzLTEuMjQgMS4yMyAwIDIuMjIuNDA2IDIuOTY4IDEuMjIyLjcxLjc5MyAxLjA2OCAxLjgxNiAxLjA2OCAzLjA2OHptLTEuOTMzLjA2YzAtLjc3My0uMTY3LTEuNDM2LS40OTktMS45ODktLjM5MS0uNjY4LS45NDgtMS4wMDItMS42NzEtMS4wMDItLjc0OSAwLTEuMzE4LjMzNC0xLjcwOSAxLjAwMi0uMzM0LjU1My0uNSAxLjIyNy0uNSAyLjAyMyAwIC43NzMuMTY4IDEuNDM2LjUgMS45ODguNDA0LjY2OS45NjYgMS4wMDMgMS42OTEgMS4wMDMuNzExIDAgMS4yNy0uMzQgMS42NzEtMS4wMi4zNDUtLjU2NC41MTctMS4yMzIuNTE3LTIuMDA1ek0xMTEuNTgyIDE1LjQ5NmwtMi42MjIgOC4zNzhoLTEuNzA3bC0xLjA4Ni0zLjYzOGEyNy41OTUgMjcuNTk1IDAgMDEtLjY3NC0yLjcwN2gtLjAzM2MtLjE2Mi45Mi0uMzg2IDEuODIyLS42NzQgMi43MDdsLTEuMTU0IDMuNjM4aC0xLjcyNmwtMi40NjYtOC4zNzhoMS45MTVsLjk0NyAzLjk4M2MuMjMuOTQyLjQxOCAxLjg0LjU2OSAyLjY4OWguMDM0YTI5LjggMjkuOCAwIDAxLjY5Mi0yLjY3MmwxLjE4OS0zLjk5OGgxLjUxOGwxLjE0IDMuOTEzYy4yNzUuOTU0LjQ5OSAxLjg3My42NzIgMi43NThoLjA1MWMuMTI2LS44NjEuMzE3LTEuNzguNTY5LTIuNzU4bDEuMDE3LTMuOTEzaDEuODI5di0uMDAyek0xMjEuMjQxIDIzLjg3NGgtMS44NjN2LTQuNzk5YzAtMS40NzgtLjU2Mi0yLjIxOC0xLjY4OS0yLjIxOC0uNTUzIDAtLjk5OS4yMDMtMS4zNDYuNjFhMi4xNjMgMi4xNjMgMCAwMC0uNTE3IDEuNDM2djQuOTdoLTEuODYzVjE3Ljg5YzAtLjczNi0uMDIzLTEuNTM0LS4wNjgtMi4zOThoMS42MzdsLjA4OCAxLjMxaC4wNTFjLjIxNy0uNDA3LjU0MS0uNzQzLjk2NS0xLjAxMWEzLjE1MiAzLjE1MiAwIDAxMS42ODktLjQ3MWMuNzgzIDAgMS40MzMuMjUyIDEuOTUxLjc1OS42NDMuNjIuOTY1IDEuNTQ2Ljk2NSAyLjc3NnY1LjAxOXpNMTI2LjM3OSAyMy44NzRoLTEuODYyVjExLjY1MmgxLjg2MnYxMi4yMjJ6TTEzNy4zNDggMTkuNjE2YzAgMS4yODgtLjM2OCAyLjM0NC0xLjEwNCAzLjE3Mi0uNzcyLjg1MS0xLjc5NiAxLjI3Ni0zLjA3MSAxLjI3Ni0xLjIzMiAwLTIuMjExLS40MDctMi45NC0xLjIyNC0uNzI5LS44MTYtMS4wOTMtMS44NDUtMS4wOTMtMy4wODYgMC0xLjI5Ny4zNzUtMi4zNjIgMS4xMjgtMy4xODguNzU0LS44MjcgMS43NjgtMS4yNCAzLjA0Mi0xLjI0IDEuMjMyIDAgMi4yMTkuNDA2IDIuOTY5IDEuMjIyLjcxMS43OTMgMS4wNjkgMS44MTYgMS4wNjkgMy4wNjh6bS0xLjkzNS4wNmMwLS43NzMtLjE2Ny0xLjQzNi0uNDk5LTEuOTg5LS4zOS0uNjY4LS45NDgtMS4wMDItMS42Ny0xLjAwMi0uNzUgMC0xLjMxOS4zMzQtMS43MDggMS4wMDItLjMzNC41NTMtLjUgMS4yMjctLjUgMi4wMjMgMCAuNzczLjE2OCAxLjQzNi41IDEuOTg4LjQwNC42NjkuOTY1IDEuMDAzIDEuNjkxIDEuMDAzLjcxMSAwIDEuMjY3LS4zNCAxLjY2OS0xLjAyLjM0Ny0uNTY0LjUxNy0xLjIzMi41MTctMi4wMDV6TTE0Ni4zNjUgMjMuODc0aC0xLjY3M2wtLjEzOS0uOTY1aC0uMDUyYy0uNTcyLjc3LTEuMzg4IDEuMTU1LTIuNDQ4IDEuMTU1LS43OTEgMC0xLjQzMS0uMjU0LTEuOTEyLS43NTktLjQzOC0uNDU4LS42NTctMS4wMjktLjY1Ny0xLjcwNiAwLTEuMDI0LjQyNy0xLjgwNCAxLjI4Ni0yLjM0NC44NTctLjU0IDIuMDYyLS44MDUgMy42MTQtLjc5M3YtLjE1NmMwLTEuMTA0LS41OC0xLjY1NS0xLjc0LTEuNjU1LS44MjcgMC0xLjU1Ni4yMDgtMi4xODUuNjJsLS4zNzktMS4yMjJjLjc3OS0uNDgyIDEuNzQxLS43MjQgMi44NzUtLjcyNCAyLjE5IDAgMy4yODkgMS4xNTUgMy4yODkgMy40NjZ2My4wODVjMCAuODM3LjA0MSAxLjUwNC4xMjEgMS45OTh6bS0xLjkzNS0yLjg4di0xLjI5MWMtMi4wNTUtLjAzNi0zLjA4Mi41MjctMy4wODIgMS42ODggMCAuNDM3LjExNy43NjQuMzU3Ljk4My4yNC4yMTkuNTQ2LjMyNy45MS4zMjcuNDA5IDAgLjc5MS0uMTMgMS4xNC0uMzg3YTEuNTg3IDEuNTg3IDAgMDAuNjc1LTEuMzJ6TTE1Ni45NTEgMjMuODc0aC0xLjY1M2wtLjA4Ny0xLjM0NWgtLjA1MmMtLjUyOCAxLjAyMy0xLjQyNyAxLjUzNS0yLjY5MSAxLjUzNS0xLjAxIDAtMS44NTEtLjM5Ni0yLjUxOC0xLjE4OS0uNjY2LS43OTMtLjk5OS0xLjgyMi0uOTk5LTMuMDg1IDAtMS4zNTYuMzYxLTIuNDU1IDEuMDg2LTMuMjkzLjcwMy0uNzgzIDEuNTYzLTEuMTc0IDIuNTg3LTEuMTc0IDEuMTI1IDAgMS45MTMuMzggMi4zNjEgMS4xMzhoLjAzNXYtNC44MWgxLjg2NXY5Ljk2NmMwIC44MTYuMDIyIDEuNTY3LjA2NiAyLjI1N3ptLTEuOTMxLTMuNTMzdi0xLjM5N2MwLS4yNDItLjAxNy0uNDM3LS4wNTEtLjU4N2EyLjEyMyAyLjEyMyAwIDAwLS42NzQtMS4xMjggMS44MzEgMS44MzEgMCAwMC0xLjI0Ni0uNDU3Yy0uNjk1IDAtMS4yMzkuMjc2LTEuNjM5LjgyOC0uMzk3LjU1My0uNTk4IDEuMjU4LS41OTggMi4xMiAwIC44MjkuMTkxIDEuNS41NzMgMi4wMTguNDAzLjU1Ljk0Ny44MjYgMS42MjguODI2LjYxMiAwIDEuMTAxLS4yMyAxLjQ3Mi0uNjkuMzYtLjQyNC41MzUtLjkzNi41MzUtMS41MzN6TTE3Mi44ODUgMTkuNjE2YzAgMS4yODgtLjM2OCAyLjM0NC0xLjEwNCAzLjE3Mi0uNzcxLjg1MS0xLjc5MiAxLjI3Ni0zLjA3IDEuMjc2LTEuMjI4IDAtMi4yMDgtLjQwNy0yLjk0LTEuMjI0LS43MjktLjgxNi0xLjA5NC0xLjg0NS0xLjA5NC0zLjA4NiAwLTEuMjk3LjM3NS0yLjM2MiAxLjEyOS0zLjE4OC43NTQtLjgyNyAxLjc2Ny0xLjI0IDMuMDQ2LTEuMjQgMS4yMjggMCAyLjIxOC40MDYgMi45NjUgMS4yMjIuNzExLjc5MyAxLjA2OCAxLjgxNiAxLjA2OCAzLjA2OHptLTEuOTMuMDZjMC0uNzczLS4xNjctMS40MzYtLjUtMS45ODktLjM5My0uNjY4LS45NDctMS4wMDItMS42NzMtMS4wMDItLjc0NiAwLTEuMzE1LjMzNC0xLjcwOCAxLjAwMi0uMzM0LjU1My0uNSAxLjIyNy0uNSAyLjAyMyAwIC43NzMuMTY3IDEuNDM2LjUgMS45ODguNDAzLjY2OS45NjUgMS4wMDMgMS42OSAxLjAwMy43MTIgMCAxLjI3Mi0uMzQgMS42NzMtMS4wMi4zNDMtLjU2NC41MTgtMS4yMzIuNTE4LTIuMDA1ek0xODIuOTAzIDIzLjg3NGgtMS44NjF2LTQuNzk5YzAtMS40NzgtLjU2Mi0yLjIxOC0xLjY5MS0yLjIxOC0uNTUzIDAtLjk5OS4yMDMtMS4zNDQuNjFhMi4xNTMgMi4xNTMgMCAwMC0uNTE3IDEuNDM2djQuOTdoLTEuODY1VjE3Ljg5YzAtLjczNi0uMDIxLTEuNTM0LS4wNjYtMi4zOThoMS42MzZsLjA4NyAxLjMxaC4wNTFjLjIxOS0uNDA3LjU0My0uNzQzLjk2Ni0xLjAxMWEzLjE1MyAzLjE1MyAwIDAxMS42OS0uNDcxYy43ODEgMCAxLjQzMi4yNTIgMS45NDkuNzU5LjY0NS42Mi45NjUgMS41NDYuOTY1IDIuNzc2djUuMDE5ek0xOTUuNDQyIDE2Ljg5MWgtMi4wNTJ2NC4wN2MwIDEuMDM0LjM2NSAxLjU1MiAxLjA4NyAxLjU1Mi4zMzQgMCAuNjExLS4wMjkuODMtLjA4OGwuMDQ4IDEuNDEzYy0uMzY4LjEzOS0uODUyLjIwOC0xLjQ0Ny4yMDgtLjczNiAwLTEuMzA5LS4yMjQtMS43MjMtLjY3MS0uNDE2LS40NDgtLjYyMi0xLjIwMi0uNjIyLTIuMjZ2LTQuMjI0aC0xLjIyNXYtMS4zOTVoMS4yMjVWMTMuOTZsMS44MjYtLjU1djIuMDg0aDIuMDUxdjEuMzk3aC4wMDJ6TTIwNS4zMDUgMjMuODc0aC0xLjg2NVYxOS4xMWMwLTEuNTAyLS41NjItMi4yNTQtMS42ODctMi4yNTQtLjg2NCAwLTEuNDU0LjQzNi0xLjc3OCAxLjMwN2EyLjM0NCAyLjM0NCAwIDAwLS4wODcuNjd2NS4wMzhoLTEuODYxdi0xMi4yMmgxLjg2MVYxNi43aC4wMzZjLjU4Ni0uOTE5IDEuNDI3LTEuMzc4IDIuNTE3LTEuMzc4Ljc3MSAwIDEuNDEuMjUzIDEuOTE2Ljc2LjYzMS42My45NDggMS41NjkuOTQ4IDIuODF2NC45OHpNMjE1LjQ3OSAxOS4yODljMCAuMzM0LS4wMjUuNjE0LS4wNjkuODQ0aC01LjU4OGMuMDI1LjgyOC4yOTIgMS40NTkuODA5IDEuODk2LjQ3My4zOTEgMS4wODMuNTg3IDEuODI5LjU4Ny44MjcgMCAxLjU4MS0uMTMyIDIuMjYtLjM5N2wuMjkyIDEuMjk0Yy0uNzk1LjM0NS0xLjczLjUxNy0yLjgxMy41MTctMS4yOTggMC0yLjMyLS4zODItMy4wNTktMS4xNDYtLjc0NC0uNzY0LTEuMTEyLTEuNzktMS4xMTItMy4wNzYgMC0xLjI2NC4zNDQtMi4zMTYgMS4wMzUtMy4xNTUuNzIyLS44OTYgMS42OTgtMS4zNDQgMi45My0xLjM0NCAxLjIwNSAwIDIuMTIxLjQ0OCAyLjczOSAxLjM0NC41LjcxLjc0NyAxLjU5Ljc0NyAyLjYzNnptLTEuNzc4LS40ODJjLjAxNS0uNTUzLS4xMDgtMS4wMy0uMzYxLTEuNDMtLjMyMy0uNTE4LS44MTYtLjc3Ny0xLjQ4Mi0uNzc3LS42MDggMC0xLjEwNC4yNTItMS40ODMuNzU4LS4zMDkuNDA0LS40OTIuODg2LS41NTMgMS40NDloMy44Nzl6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJhcHAtc3RvcmVfc3ZnX19jbGlwMF81MTo1MDFcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoMjQwdjcxLjA5SDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBcHBTdG9yZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0NoZWNrU3F1YXJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNi4wNzEgMEgxLjkzQTEuOTI5IDEuOTI5IDAgMDAwIDEuOTI5VjE2LjA3QzAgMTcuMTM3Ljg2MyAxOCAxLjkyOSAxOEgxNi4wN0ExLjkyOSAxLjkyOSAwIDAwMTggMTYuMDcxVjEuOTNBMS45MjkgMS45MjkgMCAwMDE2LjA3MSAwem0wIDE2LjA3MUgxLjkzVjEuOTNIMTYuMDdWMTYuMDd6bS0xLjQ0LTkuNzEybC02LjkzNSA2Ljg3OWEuNDgyLjQ4MiAwIDAxLS42ODItLjAwM0wzLjM2NyA5LjU1OGEuNDgyLjQ4MiAwIDAxLjAwMy0uNjgybC45MTItLjkwNWEuNDgyLjQ4MiAwIDAxLjY4Mi4wMDNsMi40MDMgMi40MjIgNS42NzktNS42MzRhLjQ4Mi40ODIgMCAwMS42ODIuMDAzbC45MDUuOTEyYS40ODIuNDgyIDAgMDEtLjAwMi42ODJ6XCJcbiAgICAgICAgZmlsbD1cIiNGQ0M3MjlcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDaGVja1NxdWFyZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Rpc2NvcmQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI1LjYwMyAwSDMuMzk3QzEuNTI1IDAgMCAxLjMzNCAwIDIuOTg3djE5LjYwNGMwIDEuNjUzIDEuNTI1IDIuOTg3IDMuMzk3IDIuOTg3SDIyLjE5bC0uODc4LTIuNjgzIDIuMTIxIDEuNzI2IDIuMDA1IDEuNjI0TDI5IDI5VjIuOTg3QzI5IDEuMzM0IDI3LjQ3NSAwIDI1LjYwMyAwem0tNi4zOTcgMTguOTM3cy0uNTk2LS42MjMtMS4wOTMtMS4xNzVjMi4xNy0uNTM2IDIuOTk5LTEuNzI1IDIuOTk5LTEuNzI1LS42OC4zOTItMS4zMjYuNjY3LTEuOTA2Ljg1NS0uODI4LjMwNS0xLjYyNC41MDgtMi40MDMuNjI0YTEzLjI0IDEzLjI0IDAgMDEtNC4yOTItLjAxNCAxNS40NSAxNS40NSAwIDAxLTIuNDM2LS42MjRjLS4zOC0uMTMtLjc5NS0uMjktMS4yMS0uNDkzLS4wNDktLjAyOS0uMDk5LS4wNDQtLjE0OC0uMDczYS4yMjguMjI4IDAgMDEtLjA2Ny0uMDQzYy0uMjk4LS4xNDUtLjQ2NC0uMjQ2LS40NjQtLjI0NnMuNzk2IDEuMTYgMi45IDEuNzFjLS40OTcuNTUyLTEuMTEgMS4yMDQtMS4xMSAxLjIwNC0zLjY2Mi0uMTAyLTUuMDU0LTIuMjA0LTUuMDU0LTIuMjA0IDAtNC42NjkgMi4zODYtOC40NTQgMi4zODYtOC40NTQgMi4zODYtMS41NjYgNC42NTctMS41MjIgNC42NTctMS41MjJsLjE2NS4xNzRjLTIuOTgzLjc1NC00LjM1OCAxLjktNC4zNTggMS45cy4zNjUtLjE3NS45NzgtLjQyMWMxLjc3My0uNjgxIDMuMTgxLS44NyAzLjc2MS0uOTEzLjEtLjAxNS4xODMtLjAzLjI4Mi0uMDNhMTYuMDExIDE2LjAxMSAwIDAxMy4zNDgtLjAyOGMxLjU3NC4xNTkgMy4yNjQuNTY1IDQuOTg4IDEuMzkyIDAgMC0xLjMxLTEuMDg4LTQuMTI3LTEuODQybC4yMzItLjIzMnMyLjI3LS4wNDMgNC42NTcgMS41MjNjMCAwIDIuMzg2IDMuNzg0IDIuMzg2IDguNDUzIDAgMC0xLjQwOCAyLjEwMi01LjA3IDIuMjA0em0tNy43MDUtNi43NzJjLS45NDUgMC0xLjY5LjcyNi0xLjY5IDEuNjEgMCAuODg0Ljc2MiAxLjYxIDEuNjkgMS42MS45NDQgMCAxLjY5LS43MjYgMS42OS0xLjYxLjAxNi0uODg1LS43NDYtMS42MS0xLjY5LTEuNjF6bTYuMDQ4IDBjLS45NDQgMC0xLjY5LjcyNi0xLjY5IDEuNjEgMCAuODg0Ljc2MiAxLjYxIDEuNjkgMS42MS45NDUgMCAxLjY5LS43MjYgMS42OS0xLjYxIDAtLjg4NS0uNzQ1LTEuNjEtMS42OS0xLjYxelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEaXNjb3JkXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRG93bkFycm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTg5LjUgMTYxLjRjLTYuNyAyLjktMTAuNSAxMC41LTkgMTguMy42IDMuNCAxMCAxMy4xIDg0LjMgODcuNSA3NC40IDc0LjMgODQuMSA4My43IDg3LjUgODQuMyA5LjQgMS44IDMuOSA2LjYgOTQuOS04NC4zIDkwLjktOTAuOSA4Ni4xLTg1LjUgODQuMy05NC45LS45LTQuOS02LjktMTAuOS0xMS44LTExLjgtOS40LTEuOC00LjYtNS45LTg3LjUgNzYuOEwyNTYgMzEzLjVsLTc1LjgtNzUuN2MtNDIuNC00Mi40LTc2LjktNzYuMi03OC41LTc2LjgtMy44LTEuNC04LjUtMS4yLTEyLjIuNHpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Rvd25BcnJvd1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00LjUxNiA3LjU0OGMuNDM2LS40NDYgMS4wNDMtLjQ4MSAxLjU3NiAwTDEwIDExLjI5NWwzLjkwOC0zLjc0N2MuNTMzLS40ODEgMS4xNDEtLjQ0NiAxLjU3NCAwIC40MzYuNDQ1LjQwOCAxLjE5NyAwIDEuNjE1LS40MDYuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyYTEuMDk1IDEuMDk1IDAgMDEtMS41NzYgMFM0LjkyNCA5LjU4IDQuNTE2IDkuMTYzYy0uNDA4LS40MTgtLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93blxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Ryb3BEb3duxLBjb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgMTBsNSA1IDUtNUg3elwiIGZpbGw9XCIjMDAwXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEcm9wRG93bsSwY29uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRXRoTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQyIDcxXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNn1cbiAgICAgICAgZD1cIk0yMC45OTYgMjcuMjkzTDIgMzYuMDlsMTguOTk2IDExLjQyNyAxOC45OS0xMS40MjctMTguOTktOC43OTZ6XCJcbiAgICAgICAgZmlsbD1cIiMwMTAxMDFcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNDV9XG4gICAgICAgIGQ9XCJNMS41NyAzNS44MzRsLS4yNTMuNDI4LjQyNS4yNTZMMjAuNzQgNDcuOTQ0bC43NTguNDU2VjIuMTc0bC0uOTMgMS41NzFMMS41NyAzNS44MzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuOH1cbiAgICAgICAgZD1cIk0yMS40MjYgMy43NDVsLS45My0xLjU3MlY0OC40bC43NTgtLjQ1NiAxOC45ODktMTEuNDI2LjQyNS0uMjU2LS4yNTMtLjQyOEwyMS40MjYgMy43NDV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuNDV9XG4gICAgICAgIGQ9XCJNMjAuNDk3IDUxLjQ2MlY2NS40MUwzLjc1IDQxLjM4OWwxNi43NDcgMTAuMDczelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjAuNzM4IDUwLjc1MWwtLjI0Mi4xNDZWNjguNTlsLjkxLTEuMzA0TDQwLjQxIDQwLjAzOWwtLjY2OC0uNzE0TDIwLjczOCA1MC43NXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0V0aExvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdGYWNlYm9vayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNi4wNDIgMy42MjVoMTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN3pNMjEuNzUgNi4wNDJoLTMuMDJhNC4yMyA0LjIzIDAgMDAtNC4yMyA0LjIyOXYzLjAyaC0yLjQxN3YzLjYyNkgxNC41djguNDU4aDMuNjI1di04LjQ1OGgzLjYyNXYtMy42MjVoLTMuNjI1di0yLjQxN2ExLjIwOCAxLjIwOCAwIDAxMS4yMDgtMS4yMDhoMi40MTdWNi4wNDJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZhY2Vib29rXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRmluZ2VycHJpbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjZmluZ2VycHJpbnRfc3ZnX19jbGlwMClcIiBmaWxsPVwiIzAwMFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjM3My4xNjRjLS42MTkuMTY0LS45MjguOTYtLjU5OCAxLjU2NC4yMDYuMzU2Ljc4NC40MzkgMy40NDQuNTIgMi41NTcuMDgzIDMuNDY0LjIyIDQuNTE2LjY4NyAxLjQ0My42MzEgMi4wODIuNDY2IDIuMDgyLS40OTQgMC0uODIzLS44MDQtMS4zNDQtMi45MjgtMS45Mi0xLjc3My0uNDk1LTUuMjE3LS42ODctNi41MTYtLjM1N3pNMTEuNTY4IDIuMDAyQzguNjIgMy43MDMgNS4wOTMgNy4zMjUgNS4yMzggOC41MDVjLjA0LjMzLjIwNi43NC4zOTEuODc4LjI2OS4yMi42Ni0uMDgyIDEuODU2LTEuNDI3IDEuNjctMS44NjYgMy4xNzYtMy4xMjggNC45MjktNC4xMTYuNjE4LS4zNTYgMS4yNTgtLjc2OCAxLjQwMi0uOTA1LjM3MS0uNDEyLjMxLTEuMjYyLS4xNDQtMS41OTItLjUxNi0uMzU2LS4yODktLjQxMS0yLjEwNC42NTl6TTI3LjYxMSAzLjI5MmMtLjc0Mi41NDgtLjQxMiAxLjQ1NC45NyAyLjY2MSAxLjU0NiAxLjM0NSAzLjI3OCAzLjU2NyA0LjQ1NCA1LjY4Ljg2NiAxLjU2NCAxLjM4MSAxLjg2NiAxLjg3NiAxLjA3LjIyNy0uMzU3LjIwNi0uNTc2LS4xMDMtMS4zNDQtMS4zODItMy40MDMtNi4xODYtOC44MDgtNy4xOTctOC4wNjd6TTE1LjUwNyA0LjkxYy0zLjExNCAxLjEyNi01Ljk4IDMuNDAzLTcuODc3IDYuMzExLTIuMTA0IDMuMTgzLTMuMjM4IDYuOTE1LTMuNzUzIDEyLjIxQzIuNzQzIDM1LjM5NSAzLjY3IDQ3LjM1OCA2LjY0IDU4LjhjMS4xNTUgNC40NzIgMS4zNCA0Ljg4NCAyLjAyIDQuNzc0LjMzLS4wNTUuNTc4LS4yNzQuNjItLjU3Ni4wNC0uMjc1LS4zMS0xLjgzOS0uNzY0LTMuNDU3LTIuNDc0LTguNzgtMy43MTEtMTkuMTUyLTMuNDY0LTI4LjcwMS4zMS0xMC41NjQgMS4zLTE0Ljg3MiA0LjQ3NS0xOS4wNyAyLjY0LTMuNTEyIDUuNzk0LTUuMjQgOS41ODktNS4yNCAzLjgxNCAwIDYuOTkgMS43MjggOS42MDkgNS4yMTMgMS43NTMgMi4zNiAyLjU3OCA0LjE0MyAzLjQwMiA3LjI5OC42NCAyLjUyNS43MjIgNS4wNDkuNDEzIDEyLjQ4NS0uMjY4IDYuMzY2LjM5MiAxMS40NDIgMi4yNDggMTcuMzQxLjc4MyAyLjQ0MiAxLjI1NyAzLjA3MyAxLjg1NSAyLjQxNS40MzQtLjQ2Ny4zOTItMS4yMDgtLjE4NS0yLjY5LS43NDItMS45NzUtMS43MzItNi4zMzgtMi4xMDMtOS4zMjgtLjI2OS0yLjE2OC0uMzEtMy41NjgtLjE2NS03LjYwMS4yNDctNy4wOC4xODUtOS44NzgtLjIwNy0xMS45MDgtMS4zODEtNi45MTUtNS4wOTMtMTIuMTgzLTEwLjEyNS0xNC40Ni0yLjI4OC0xLjAxNi02LjA2Mi0xLjIwOC04LjM1MS0uMzg0elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuMTg3IDkuMTM2Yy0yLjQxMi43OTYtNS43MzIgMy42NzctNS41ODggNC45MTIuMDQxLjMwMS4yMDYuNjg1LjM5Mi44MjMuMjY4LjIyLjY0LS4wMjggMS43NTMtMS4xMjUgMi4yMDYtMi4xOTUgNC44ODctMy4yNjYgNy4zNC0yLjkwOSAxLjAzMi4xNjUgMS4xNzYuMTEgMS4zODItLjM4NC4yOS0uNzEzLjI5LS43NjgtLjEwMy0xLjI2Mi0uMzkyLS41NDktMy41NDYtLjU3Ni01LjE3Ni0uMDU1ek0yMy4yODEgMTAuMzE2Yy0uMDgyLjA4Mi0uMTQ0LjQ2Ni0uMTQ0Ljc5NiAwIC40NjYuMjg4Ljg1IDEuMTU0IDEuNTA5IDIuMjkgMS43MjggNC41MTcgNS42NTIgNC45NSA4LjY0My4xODUgMS4yNjIuODA0IDEuNzI4IDEuMzYuOTg4LjM5Mi0uNDk0LjM5Mi0uNjA0LjA4My0xLjk0OC0uMzkyLTEuNzg0LTEuMTk2LTMuODk3LTIuMDgzLTUuNTQzLTEuNTI2LTIuNzE2LTQuNjYtNS4zNS01LjMyLTQuNDQ1ek0zLjE3NiAxMS40MTNjLS44ODcgMS42NzQtMS45NiA0Ljk5NC0yLjQzNCA3LjQzNi0uNjE4IDMuMjM4LS42MzkgNC4zMzUtLjA4MiA0LjcyLjUzNi4zODQgMS4yMzctLjUyMiAxLjIzNy0xLjYyIDAtMS40MjYgMS4wMzEtNS42MjQgMS45OC03LjkyOS43NDItMS44MzguODY2LTIuMzYuNy0yLjc5OS0uMzA4LS43NjgtLjkyNy0uNjg2LTEuNDAxLjE5MnpNMTYuMTA1IDEzLjc3M2MtMS42OS45MzMtMi41MzYgMS43MjktMy40ODUgMy4xMjgtMS43NzMgMi42ODktMi4zNzEgNS45LTIuNjE5IDEzLjkzOS0uMzMgMTEuNjYxIDEuNzMyIDIzLjg5OSA1Ljc3NCAzNC4yOTguOTA3IDIuMzA1IDEuMTU1IDIuNzQ0IDEuNTY3IDIuNzQ0IDEuMDEgMCAxLjAxLS43NDEtLjAyLTMuMzQ4LTIuNDU0LTYuMTczLTQuMzUxLTEzLjkzOS01LjIxNy0yMS4zNDctLjcyMi02LjAzNi0uNTk4LTE2Ljk4NC4yNDctMjEuMjY1LjU1Ny0yLjkwOCAyLjEyNC01LjE4NiA0LjIyNy02LjIgMS4zNC0uNjYgMy43MzMtLjU3NyA1LjE5Ny4xNjQgMi4yMjcgMS4xMjUgNC4wODMgNC4wODggNC4zOTIgNy4wMjQuMDYyLjcxMyAwIDMuNDAyLS4xNDQgNi4wMS0uMjA3IDMuNzU4LS4yMjcgNS40ODctLjAyIDguMjg1LjUxNSA3LjY1NiAyLjEyMyAxNC40NiA0Ljg4NiAyMC43MTcuOTI4IDIuMTEyIDEuMjc5IDIuNTI0IDEuODM1IDIuMjUuNjQtLjMzLjUxNi0xLjE1My0uNTM2LTMuNTY3LTMuNzExLTguNTA2LTUuMjE3LTE4LTQuNTE2LTI4LjI2Mi4zMy00LjYzNy4xNjUtNi4zOTMtLjgyNC05LjA4Mi0uNzY0LTIuMDMtMi4zOTMtNC4xMTYtNC4wODMtNS4xODYtMS4wMS0uNjU5LTEuNDg1LS43NjgtMy4zNDEtLjg1LTEuODk3LS4wODMtMi4zMS0uMDI4LTMuMzIuNTQ4ek0zNS4yIDE1LjIyN2MtLjE4Ni4yNDctLjI2OC42NTktLjIwNi45MDYuNzIyIDIuNDcgMS4xNzUgNS40MzMgMS4yNzggOC4zOTYuMTI0IDMuMjM4LjI2OCAzLjk3OS44MDUgMy45NzkuNTk4IDAgLjkwNy0uODUxLjkwNy0yLjU1Mi0uMDItNS4xMDQtMS4yNTgtMTEuMTY4LTIuMjQ4LTExLjE2OC0uMTAzIDAtLjM1LjE5Mi0uNTM2LjQ0ek04Ljk5IDE2LjM4Yy0xLjA1MS45MDUtMi4wNCA2LjY5NS0yLjE4NSAxMi43ODYtLjA2MiAxLjc4NCAwIDIuMTk1LjMxIDIuNDcuMjQ3LjIxOS40NTMuMjE5LjcgMCAuMjg5LS4yNDcuNDEzLTEuMDE2LjYxOS0zLjg0Mi4zMy00Ljc3NC42MTktNi44MDUgMS4yMTctOC43OC41OTgtMi4wMDMuNTk4LTIuMTk1LjEwMy0yLjU4LS40NzUtLjMyOS0uNDc1LS4zMjktLjc2My0uMDU0elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTguOTkyIDE3LjgzNGMtLjU1Ny43NC0uMjA2IDEuNTEuNzg0IDEuNzU2IDEuMTk1LjI3NCAyLjIyNyAxLjMxNyAyLjc0MiAyLjc0NC40MzMgMS4xOC40NTQgMS41MzYuMzMgNC4xOTgtLjEyNCAzLjAxOC0uMDIgMy42MjIuNzIyIDMuNjIyLjU3NyAwIC43ODMtLjgyMy45MjgtMy43Ni4xNDQtMy4wMTcuMDItMy45MjMtLjkyOC01LjkyNi0uNjgtMS4zNzItMS45MTgtMi40OTctMy4yNzktMi45MDgtLjc4NC0uMjItLjk0OS0uMTkyLTEuMy4yNzR6TTE1LjgxNiAxOC45MDRjLS44MjUuNzEzLTEuNjkgMi41MjQtMS45MzggNC4xMTYtLjMxIDEuOTQ4LS42OCA3LjMyNi0uNTk4IDguOTE3LjA2MiAxLjE4LjEyNCAxLjM3Mi41MzYgMS40NTUuODQ1LjE2NCAxLjA3Mi0uMzg1IDEuMDcyLTIuNjYyIDAtMS4xNTIuMTQ1LTMuNDMuMzEtNS4wNDkuMzA5LTMuMDczLjctNC4zOSAxLjUyNi01LjA3Ni41MzYtLjQxMS41NTYtMS41OTEuMDYxLTEuOTQ4LS4yODgtLjE5Mi0uNTM2LS4xMzctLjk2OS4yNDd6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xOC4yOSAyMS44OTVjLTEuMjM2LjY4Ni0xLjUwNSAyLjExMy0xLjY3IDkuNDk0LS4yNjggMTAuMzk5IDEuMjE3IDE5LjU5IDQuNjYgMjguODEgMS44NzcgNS4wNDkgMi42NCA2LjU4NSAzLjI4IDYuNTg1Ljk5IDAgLjk5LS43NC0uMDYyLTMuMDQ2LTIuMDgzLTQuNjM3LTMuOTgtMTAuNTYzLTQuOTUtMTUuNTAyLTEuMDkyLTUuNzA3LTEuMjU3LTcuNi0xLjIzNy0xNS4wNjQgMC03LjIxNi4xNjUtOS4xMzcuNzQzLTkuMjc0LjU1Ni0uMTM3Ljc2My43NC41MzYgMi41NTItLjI2OCAyLjM4Ny0uMjY4IDExLjE0LjAyIDEzLjg1Ni41OTkgNS42NTIgMS41ODggMTAuNDU0IDMuMTM1IDE1LjMzOCAxLjAzMSAzLjIzOCAyLjY2IDcuMzI2IDMuNjMgOSAuNTU2IDEuMDE1IDEuMTc1IDEuMTggMS40ODQuNDEyLjIyNy0uNTc3LjI0Ny0uNDk0LTEuNDIzLTQuMzA4LTIuOTktNi44MDUtNC44NjYtMTQuODcyLTUuNDAzLTIzLjI5NS0uMTg1LTMuMDE5LS4xODUtNC44NTcuMDQyLTguNjk5LjI4OC01LjU0Mi4yMjctNS45NTQtMS4xMzQtNi43MjItLjc4NC0uNDM5LTEuMDUyLS40MzktMS42NS0uMTM3ek0yOS44OCAyNS4wNzhjLS40MzMuNTc2LS42NiAzLjg5Ni0uNjE5IDkuMTkyLjA0MSA1LjQzMi4xNjUgNi4xNzMgMS4wMSA2LjE3M2guNTk5bC0uMDgzLTQuODAxYy0uMDQxLTIuODgyLjA0MS01LjkuMTg2LTcuNTE5LjI0Ny0yLjU1MS4yNDctMi43NDQtLjEwMy0zLjEtLjQ5NS0uNDY3LS42Mi0uNDQtLjk5LjA1NXpNLjM3MSAyNi4yMDNjLS40OTUuNjMtLjQ5NSAxMi40ODQgMCAxMy4xMTUuMzcxLjUyMi40MTMuNTIyLjkyOC4xNjUuMzcxLS4yNzQuMzkyLS42NTkuMzkyLTYuNzIyIDAtNi4wNjQtLjAyLTYuNDQ5LS4zOTItNi43MjMtLjUxNS0uMzU3LS41NTctLjM1Ny0uOTI4LjE2NXpNMzYuNDc4IDMwLjg5NWMtLjI2Ny4zMjktLjE2NCAxMC4zNzEuMTA0IDEwLjcyOC4zNy40OTQuOTQ4LjM4NCAxLjE5Ni0uMTkyLjMwOS0uNzk2LjI2OC05Ljk4OC0uMDQyLTEwLjQtLjI2OC0uMzU2LTEuMDMtLjQzOC0xLjI1OC0uMTM2elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjIuNzA0IDMyLjkyNWMtLjQxMyAxLjA3LjMwOSA5LjYzMSAxLjE1NCAxMy41ODIuMzEgMS40MjcuNjYgMS44NjYgMS4yMTcgMS41OTIuNDk1LS4yNDcuNTU3LS45MDYuMjQ4LTIuNTI1LS41MTYtMi42MzQtLjkyOC02LjM2NS0xLjA3My05LjUyLS4wODItMS42NzUtLjIyNy0zLjE4NC0uMzUtMy4zNzYtLjMxLS41MjEtLjkyOC0uMzg0LTEuMTk2LjI0N3pNNi44NDYgMzQuNDA3Yy0uMTg1LjI3NC0uMjA2IDEuMTI1LS4xMDMgMy4wNzMuMTY1IDMuMS44MjUgOS42MyAxLjEzNCAxMS4xMTMuMjQ4IDEuMTguOTA3IDEuNjE4IDEuNDAyLjk2LjI2OC0uMzg0LjI2OC0uNjg2LS4wNC0yLjg1NC0uNTM3LTMuODE0LS43MjMtNS43NjItLjg2Ny05LS4wODItMS42NzMtLjIyNy0zLjE4Mi0uMzUtMy4zNzQtLjI2OS0uNDQtLjg2Ny0uNDEyLTEuMTc2LjA4MnpNMTMuNTY5IDM2LjA4Yy0uMzkyLjQ5NS0uMzUgMS4zMTguMjA2IDYuNzIzLjcgNi43NSAxLjQ2NCA5LjMzIDIuNDU0IDguMzY5LjM3LS4zNTcuMzctLjQ2Ny0uMTY1LTMuNzA0LS4zMS0xLjgxMS0uNzAxLTUuMDIyLS44ODctNy4xMDctLjE4NS0yLjA1OC0uMzkyLTMuOTUxLS40NzQtNC4xNy0uMjQ4LS42MDQtLjc0My0uNjYtMS4xMzQtLjExek0uMjY4IDQyLjMwOWMtLjQ3NC43NjguMTY1IDYuMzM4IDEuMTE0IDkuNjg2LjcgMi41MjQgMS4wMyAzLjEyOCAxLjY1IDMuMTI4LjcyMSAwIC44NjUtMS4wMTUuMzUtMi4zODctLjc2My0xLjk0OC0xLjMtNC42NjUtMS41NDctNy42ODMtLjI0Ny0yLjg4MS0uMjY4LTIuOTYzLS43ODMtMy4wNDYtLjI4OS0uMDU1LS42NC4xMS0uNzg0LjMwMnpNMzAuMjkyIDQyLjk0Yy0uMDgyLjExLS4xNDQuNDY3LS4xNDQuODIzIDAgMS4yMzUgMS40ODUgNi42NCAyLjY0IDkuNTc2Ljk5IDIuNTUyIDEuMjU3IDMuMDE5IDEuNjcgMy4wMTkgMS4wMyAwIC45NjktLjY4Ni0uMjY4LTQuMDA2LS42NC0xLjczLTEuNTA2LTQuNTU1LTEuOTM5LTYuMjg0LS43LTIuODUzLS44MjUtMy4xNTUtMS4yOTktMy4yMzgtLjI2OC0uMDU0LS41NzcgMC0uNjYuMTF6TTI1LjA1NSA1MC42MjNjLS4xODYuNjMxLjIyNiAyLjE0IDEuNTA1IDUuNjI1IDEuMzIgMy42MjIgMi43NDIgNi43NSAzLjExNCA2Ljk0Mi40MTIuMjIuODY2LS4xMS45OS0uNjg2LjA4Mi0uMzMtLjIyOC0xLjI5LS45MDgtMi43NzEtLjk3LTIuMTQtMi4xMjQtNS4yNjktMy4wOTMtOC4yNi0uMzMtMS4wNy0uNDk1LTEuMjg5LS45NDktMS4yODktLjI4OCAwLS41NzcuMTkyLS42Ni40Mzl6TTguOTUgNTIuMTZjLS4zNzIuNDkzLS4zMy44NS42NiA0LjcxOSAxLjEzNCA0LjQ0NSAyLjgwNCA5LjQ5NCAzLjI3OCA5Ljg3OC40OTUuNDExIDEuMDcyLS4xMzcgMS4wNTItLjk2LS4wMi0uMzU3LS40NTQtMS45MjEtLjk5LTMuNDMtLjUzNi0xLjUzNy0xLjQwMi00LjUtMS45MzgtNi41ODYtLjc4NC0zLjEtMS4wNTItMy44NDEtMS4zODItMy44OTYtLjIyNy0uMDI3LS41MzYuMDgyLS42OC4yNzV6TTE2LjAyMyA1NC4xMDhjLS4xNDUuNzQuOTA3IDQuMzA4IDIuNjE4IDguODkgMS40MjMgMy44MTQgMi4xODYgNS4yMTMgMi43MDIgNC45MzkuNzQyLS4zODUuNjE4LTEuMDctLjg0Ni00LjgzLS44MDQtMi4wNTctMS44MTQtNC45MTEtMi4yNDctNi4zMzgtLjk5LTMuMjM4LTEuMDEtMy4yOTItMS42MDktMy4yOTItLjM1IDAtLjUzNi4xOTItLjYxOC42M3pcIiAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImZpbmdlcnByaW50X3N2Z19fY2xpcDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoMzh2NjNIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZpbmdlcnByaW50XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnR29vZ2xlUGxheVN0b3JlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQwIDcyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX2NsaXAwXzUxOjU0NilcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMzEuMTA4IDcxLjEwOUg4Ljg5MkMzLjk5MiA3MS4xMDkgMCA2Ny4xMDEgMCA2Mi4yMlY4Ljg5QzAgMy45ODkgMy45OTEgMCA4Ljg5MiAwaDIyMi4yMTZDMjM2LjAwNCAwIDI0MCAzLjk5IDI0MCA4Ljg4OVY2Mi4yMmMwIDQuODgxLTMuOTk2IDguODg5LTguODkyIDguODg5elwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTIzMS4xMDggMS40MjNjNC4xMSAwIDcuNDc1IDMuMzU2IDcuNDc1IDcuNDY2VjYyLjIyYzAgNC4xMS0zLjM0MyA3LjQ2Ni03LjQ3NSA3LjQ2Nkg4Ljg5MmMtNC4xMSAwLTcuNDc1LTMuMzU2LTcuNDc1LTcuNDY2VjguODljMC00LjExIDMuMzQzLTcuNDY2IDcuNDc1LTcuNDY2aDIyMi4yMTZ6bTAtMS40MjNIOC44OTJDMy45OTIgMCAwIDQuMDA4IDAgOC44ODlWNjIuMjJjMCA0LjkgMy45OTEgOC44ODkgOC44OTIgOC44ODloMjIyLjIxNmM0Ljg5NiAwIDguODkyLTMuOTkgOC44OTItOC44ODlWOC44OUMyNDAgNC4wMDggMjM2LjAwNCAwIDIzMS4xMDggMHpcIlxuICAgICAgICAgIGZpbGw9XCIjQTZBNkE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTEyNi40MzMgMjMuNTIzYy0xLjYwMyAwLTIuOTU0LS41NjMtNC4wMjItMS42NzJhNS43IDUuNyAwIDAxLTEuNjI1LTQuMDc4YzAtMS42MTguNTQ3LTIuOTg4IDEuNjI1LTQuMDc0IDEuMDY0LTEuMTA5IDIuNDE1LTEuNjcyIDQuMDE3LTEuNjcyIDEuNTg1IDAgMi45MzYuNTYzIDQuMDIzIDEuNjcyIDEuMDc3IDEuMTIxIDEuNjI0IDIuNDkxIDEuNjI0IDQuMDc0LS4wMTcgMS42MjItLjU2NSAyLjk5Mi0xLjYyNCA0LjA3NC0xLjA2NCAxLjExNy0yLjQxNiAxLjY3Ni00LjAxOCAxLjY3NnptLTQ3LjY4OCAwYy0xLjU2OCAwLTIuOTI4LS41NTQtNC4wNC0xLjY1LTEuMTA0LTEuMDktMS42NjUtMi40NjktMS42NjUtNC4wOTYgMC0xLjYyNy41NjEtMy4wMDYgMS42NjUtNC4wOTYgMS4wOS0xLjA5NSAyLjQ1LTEuNjUgNC4wNC0xLjY1YTUuNjEgNS42MSAwIDAxMi4yNTYuNDdjLjcxLjMwNyAxLjI4OS43MjMgMS43MTcgMS4yMzNsLjEwNi4xMjktMS4xOTYgMS4xNzktLjEyNC0uMTQ2Yy0uNjc1LS44MDctMS41OC0xLjIwMi0yLjc3Ny0xLjIwMi0xLjA2OSAwLTIgLjM4MS0yLjc2OCAxLjEzNS0uNzczLjc1OC0xLjE2NiAxLjc1MS0xLjE2NiAyLjk1MyAwIDEuMjAxLjM5MyAyLjE5NCAxLjE2NiAyLjk1MmEzLjgzIDMuODMgMCAwMDIuNzY4IDEuMTM1YzEuMTQgMCAyLjA5Ny0uMzgxIDIuODQzLTEuMTM1LjQ0Mi0uNDQzLjcxNi0xLjA2NC44MTMtMS44NDhoLTMuODM3di0xLjY1OWg1LjQ4NGwuMDIyLjE1MWMuMDQuMjguMDguNTY4LjA4LjgzNCAwIDEuNTMtLjQ2IDIuNzY2LTEuMzcgMy42OC0xLjAzMyAxLjA4MS0yLjM4NCAxLjYzLTQuMDE3IDEuNjN6bTYzLjQwNi0uMjM1aC0xLjY5MWwtNS4xNzktOC4zMjEuMDQ0IDEuNDk4djYuODE4aC0xLjY5MVYxMi4yNjdoMS45MjlsLjA1My4wODQgNC44NyA3LjgzOC0uMDQ0LTEuNDk0di02LjQyOGgxLjcwOXYxMS4wMnptLTI4LjQyNSAwaC0xLjcxM3YtOS4zNjNoLTIuOTcydi0xLjY1OGg3LjY1MnYxLjY1OGgtMi45NzF2OS4zNjNoLjAwNHptLTYuMDggMGgtMS43MDhWMTIuMjY3aDEuNzA4djExLjAyem0tOS42MDMgMGgtMS43MDh2LTkuMzYzaC0yLjk3MnYtMS42NThoNy42NTJ2MS42NThoLTIuOTcydjkuMzYzem0tNS43NjItLjAxOEg4NS43M1YxMi4yNjdoNi41NTJ2MS42NThoLTQuODM5djMuMDIzaDQuMzY3djEuNjRoLTQuMzY3djMuMDI0aDQuODR2MS42NTh6bTMxLjM4My0yLjU1OGMuNzY0Ljc2NyAxLjY5MSAxLjE1MyAyLjc2OSAxLjE1MyAxLjEwOCAwIDIuMDEzLS4zNzcgMi43NjgtMS4xNTMuNzUxLS43NTQgMS4xMy0xLjc0MiAxLjEzLTIuOTM1IDAtMS4xOTItLjM3OS0yLjE4NS0xLjEyNS0yLjkzNWEzLjc4MiAzLjc4MiAwIDAwLTIuNzY5LTEuMTUyYy0xLjEwOCAwLTIuMDEzLjM3Ny0yLjc2NCAxLjE1Mi0uNzUuNzU0LTEuMTMgMS43NDMtMS4xMyAyLjkzNSAwIDEuMTkzLjM3NSAyLjE4NiAxLjEyMSAyLjkzNXpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTEyMC42MjcgMzguNjc1Yy00LjE3MiAwLTcuNTU0IDMuMTgtNy41NTQgNy41NjQgMCA0LjM0NCAzLjQwNCA3LjU2MyA3LjU1NCA3LjU2MyA0LjE3MiAwIDcuNTU0LTMuMjAxIDcuNTU0LTcuNTYzIDAtNC4zODUtMy4zODItNy41NjMtNy41NTQtNy41NjN6bTAgMTIuMTNjLTIuMjgzIDAtNC4yNDctMS44OTgtNC4yNDctNC41ODQgMC0yLjcyNyAxLjk2OS00LjU4NCA0LjI0Ny00LjU4NCAyLjI4MyAwIDQuMjQ3IDEuODU3IDQuMjQ3IDQuNTg0LjAwNSAyLjcwNC0xLjk2NCA0LjU4NC00LjI0NyA0LjU4NHptLTE2LjQ4Mi0xMi4xM2MtNC4xNzIgMC03LjU1NCAzLjE4LTcuNTU0IDcuNTY0IDAgNC4zNDQgMy40MDQgNy41NjMgNy41NTQgNy41NjMgNC4xNzIgMCA3LjU1NC0zLjIwMSA3LjU1NC03LjU2MyAwLTQuMzg1LTMuMzg2LTcuNTYzLTcuNTU0LTcuNTYzem0wIDEyLjEzYy0yLjI4MyAwLTQuMjQ3LTEuODk4LTQuMjQ3LTQuNTg0IDAtMi43MjcgMS45NjktNC41ODQgNC4yNDctNC41ODQgMi4yODMgMCA0LjI0NyAxLjg1NyA0LjI0NyA0LjU4NCAwIDIuNzA0LTEuOTY0IDQuNTg0LTQuMjQ3IDQuNTg0em0tMTkuNjEyLTkuODJ2My4yMDFoNy42NTFjLS4yMzQgMS43OTUtLjgyNSAzLjEyMS0xLjczIDQuMDMtMS4xMjIgMS4xMjYtMi44NTMgMi4zNS01LjkwMyAyLjM1LTQuNzAzIDAtOC4zOC0zLjgxMy04LjM4LTguNTM1IDAtNC43MjEgMy42NzctOC41MzMgOC4zOC04LjUzMyAyLjUzOCAwIDQuMzg4IDEuMDA2IDUuNzYxIDIuMjkxbDIuMjYtMi4yN2MtMS45MDctMS44MzUtNC40NDUtMy4yNC04LjAwNC0zLjI0LTYuNDUgMC0xMS44NjMgNS4yNzUtMTEuODYzIDExLjczNSAwIDYuNDc3IDUuNDA4IDExLjczNCAxMS44NjMgMTEuNzM0IDMuNDg0IDAgNi4wOTctMS4xNDMgOC4xNjQtMy4yOTggMi4xMDYtMi4xMTQgMi43NzMtNS4wOTggMi43NzMtNy41MDUgMC0uNzUtLjA1OC0xLjQyMy0uMTc3LTEuOTk1aC0xMC44Yy4wMDUtLjAwNS4wMDUuMDM1LjAwNS4wMzV6bTgwLjIxOSAyLjQ5MmMtLjYzMS0xLjY5OC0yLjUzOS00LjgyLTYuNDUtNC44Mi0zLjg3NyAwLTcuMSAzLjA2NC03LjEgNy41NjQgMCA0LjI0NyAzLjE4OCA3LjU2MyA3LjQ3NSA3LjU2MyAzLjQ0NCAwIDUuNDQ4LTIuMTE1IDYuMjc0LTMuMzU2bC0yLjU1Ni0xLjcyYy0uODQ4IDEuMjYzLTIuMDI3IDIuMDkyLTMuNyAyLjA5Mi0xLjY5MSAwLTIuODc1LS43NzEtMy42NjEtMi4yOTJsMTAuMDcxLTQuMTg5YzAgLjAwNC0uMzUzLS44NDItLjM1My0uODQyem0tMTAuMjcgMi41MjdjLS4wNzktMi45MjIgMi4yNjEtNC40MDcgMy45MzQtNC40MDcgMS4zMjEgMCAyLjQyLjY1MiAyLjc5NSAxLjZsLTYuNzI5IDIuODA3em0tOC4xODEgNy4zMjhoMy4zMDd2LTIyLjIyaC0zLjMwN3YyMi4yMnptLTUuNDMtMTIuOTc2aC0uMTJjLS43NDYtLjg5MS0yLjE2My0xLjY5OC0zLjk3My0xLjY5OC0zLjc1OCAwLTcuMjE5IDMuMzItNy4yMTkgNy41ODUgMCA0LjI0NyAzLjQ0NCA3LjUyOCA3LjIxOSA3LjUyOCAxLjc4OCAwIDMuMjI3LS44MTIgMy45NzMtMS43MmguMTJ2MS4wODZjMCAyLjg4Ni0xLjUzNyA0LjQ0Mi00LjAxNCA0LjQ0Mi0yLjAyNiAwLTMuMjg1LTEuNDYzLTMuNzk3LTIuNjg3bC0yLjg3NCAxLjIwNmMuODI1IDEuOTk1IDMuMDI5IDQuNDY0IDYuNjY3IDQuNDY0IDMuODc2IDAgNy4xNjEtMi4yOTIgNy4xNjEtNy44ODJWMzkuMTFoLTMuMTI2djEuMjQ2aC0uMDE3em0tMy43OTggMTAuNDQ5Yy0yLjI4MiAwLTQuMTktMS45MTUtNC4xOS00LjU2MiAwLTIuNjY5IDEuOTA4LTQuNjAyIDQuMTktNC42MDIgMi4yNjEgMCA0LjAxNCAxLjk1NSA0LjAxNCA0LjYwMi4wMjIgMi42NDctMS43NDkgNC41NjItNC4wMTQgNC41NjJ6bTQzLjE2My0xOS42OTNoLTcuOTA3djIyLjIyaDMuMzA3di04LjQxNWg0LjYwNWMzLjY2IDAgNy4yNTgtMi42NjQgNy4yNTgtNi44OTMgMC00LjIzLTMuNTg1LTYuOTEyLTcuMjYzLTYuOTEyem0uMDk3IDEwLjcwMmgtNC43MDJWMzQuMTloNC43MDJjMi40NzcgMCAzLjg3NyAyLjA1MyAzLjg3NyAzLjgxMyAwIDEuNzQyLTEuNDE3IDMuODEyLTMuODc3IDMuODEyem0yMC40MjEtMy4xNzhjLTIuNDAyIDAtNC44NzkgMS4wNjgtNS45MDQgMy4zOTVsMi45MzIgMS4yMjRjLjYzMi0xLjIyNCAxLjc4OC0xLjY0IDMuMDExLTEuNjQgMS43MTMgMCAzLjQ0NCAxLjAyOCAzLjQ4NCAyLjg2NHYuMjM1Yy0uNTkyLS4zMzctMS44OS0uODUyLTMuNDQ0LS44NTItMy4xNjYgMC02LjM3NSAxLjczOC02LjM3NSA0Ljk5NyAwIDIuOTgzIDIuNTk2IDQuODk4IDUuNDg4IDQuODk4IDIuMjIgMCAzLjQ0My0xLjAwNiA0LjIwNy0yLjE3MmguMTE5djEuNzJoMy4xODh2LTguNTEyYzAtMy45NjMtMi45MzEtNi4xNTctNi43MDYtNi4xNTd6bS0uNDE1IDEyLjE2OWMtMS4wODIgMC0yLjU5Ny0uNTMyLTIuNTk3LTEuODk4IDAtMS43MiAxLjg5LTIuMzcxIDMuNTAyLTIuMzcxIDEuNDU3IDAgMi4xNDUuMzE0IDMuMDExLjc0OWEzLjk4NyAzLjk4NyAwIDAxLTMuOTE2IDMuNTJ6TTIxOS4wOSAzOS4xMWwtMy43OTcgOS42MzhoLS4xMTlsLTMuOTM0LTkuNjM4aC0zLjU1OWw1LjkwMyAxMy40NzMtMy4zNjQgNy40ODdoMy40NDRsOS4wODItMjAuOTZoLTMuNjU2em0tMjkuNzY3IDE0LjIyMmgzLjMwN3YtMjIuMjJoLTMuMzA3djIyLjIyelwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMTguNDczIDEzLjM5M2MtLjUxMi41NTQtLjgwOCAxLjQtLjgwOCAyLjUxVjU1LjIxYzAgMS4xMDkuMjk2IDEuOTU2LjgyNiAyLjQ4OGwuMTM3LjEyIDIxLjkzNC0yMi4wMjV2LS40OTJMMTguNjEgMTMuMjczbC0uMTM3LjEyelwiXG4gICAgICAgICAgZmlsbD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDBfbGluZWFyXzUxOjU0NilcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTQ3Ljg2IDQzLjE1N2wtNy4zMTYtNy4zNDV2LS41MTVsNy4zMTYtNy4zNDUuMTYuMDk3IDguNjUzIDQuOTM5YzIuNDc3IDEuNCAyLjQ3NyAzLjcxNSAwIDUuMTMzTDQ4LjAyIDQzLjA2bC0uMTU5LjA5N3pcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQxX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk00OC4wMiA0My4wNmwtNy40NzUtNy41MDYtMjIuMDcyIDIyLjE2MmMuODA4Ljg3IDIuMTY0Ljk2NyAzLjY3OC4xMkw0OC4wMiA0My4wNnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQyX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk00OC4wMiAyOC4wNDlMMjIuMTUgMTMuMjk1Yy0xLjUxNC0uODY5LTIuODc0LS43NDktMy42NzguMTJsMjIuMDcyIDIyLjE0IDcuNDc0LTcuNTA2elwiXG4gICAgICAgICAgZmlsbD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDNfbGluZWFyXzUxOjU0NilcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIG9wYWNpdHk9ezAuMn1cbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk00Ny44NiA0Mi45TDIyLjE3IDU3LjU1N2MtMS40MzYuODI5LTIuNzE2Ljc3MS0zLjU0MS4wMTdsLS4xMzcuMTM4LjEzNy4xMmMuODI1Ljc0OSAyLjEwNS44MSAzLjU0LS4wMThMNDguMDM4IDQzLjA2bC0uMTc3LS4xNnpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBvcGFjaXR5PXswLjEyfVxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTU2LjY3MyAzNy44NjRMNDcuODM4IDQyLjlsLjE2LjE2IDguNjUzLTQuOTM5YzEuMjQtLjcwOSAxLjg1LTEuNjQgMS44NS0yLjU2Ny0uMDc1Ljg1Mi0uNzA2IDEuNjU4LTEuODI4IDIuMzF6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgb3BhY2l0eT17MC4yNX1cbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMi4xNSAxMy41NTJsMzQuNTIzIDE5LjY5M2MxLjEyMi42MzQgMS43NTMgMS40NjMgMS44NSAyLjMxIDAtLjkyNy0uNjEtMS44NTgtMS44NS0yLjU2N0wyMi4xNTEgMTMuMjk1Yy0yLjQ3Ny0xLjQyMy00LjQ4Ni0uMjM1LTQuNDg2IDIuNjA3di4yNTdjMC0yLjg0NiAyLjAwOS00LjAxMiA0LjQ4Ni0yLjYwN3pcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDBfbGluZWFyXzUxOjU0NlwiXG4gICAgICAgICAgeDE9ezM4LjU5NX1cbiAgICAgICAgICB5MT17MTUuNDc4fVxuICAgICAgICAgIHgyPXszLjQ0fVxuICAgICAgICAgIHkyPXsyNC44MDd9XG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMwMEEwRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4wMDd9IHN0b3BDb2xvcj1cIiMwMEExRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4yNn0gc3RvcENvbG9yPVwiIzAwQkVGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjUxMn0gc3RvcENvbG9yPVwiIzAwRDJGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjc2fSBzdG9wQ29sb3I9XCIjMDBERkZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwMEUzRkZcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQxX2xpbmVhcl81MTo1NDZcIlxuICAgICAgICAgIHgxPXs1OS45MDN9XG4gICAgICAgICAgeTE9ezM1LjU1NX1cbiAgICAgICAgICB4Mj17MTcuMDYzfVxuICAgICAgICAgIHkyPXszNS41NTV9XG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGRkUwMDBcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC40MDl9IHN0b3BDb2xvcj1cIiNGRkJEMDBcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC43NzV9IHN0b3BDb2xvcj1cIm9yYW5nZVwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjRkY5QzAwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50Ml9saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17NDMuOTU1fVxuICAgICAgICAgIHkxPXszOS42Mzl9XG4gICAgICAgICAgeDI9ezE1LjU3OH1cbiAgICAgICAgICB5Mj17ODcuMjA1fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkYzQTQ0XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNDMzExNjJcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQzX2xpbmVhcl81MTo1NDZcIlxuICAgICAgICAgIHgxPXsxMi45MTV9XG4gICAgICAgICAgeTE9ezAuMzE4fVxuICAgICAgICAgIHgyPXsyNS41NzZ9XG4gICAgICAgICAgeTI9ezIxLjU2Mn1cbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzMyQTA3MVwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjA2OX0gc3RvcENvbG9yPVwiIzJEQTc3MVwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjQ3Nn0gc3RvcENvbG9yPVwiIzE1Q0Y3NFwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjgwMX0gc3RvcENvbG9yPVwiIzA2RTc3NVwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDBGMDc2XCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19jbGlwMF81MTo1NDZcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoMjQwdjcxLjEwOUgwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnR29vZ2xlUGxheVN0b3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnSG9tZXBhZ2VPcHRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIuMDkgMS42NDNjLTEuMDI2LjEzLTEuODg3Ljk5Ni0yLjAzNCAyLjA1LS4wNzQuNDctLjA2OCAxLjcyOCAwIDIuMjI2QTIuNDc2IDIuNDc2IDAgMDAxLjQxIDcuNzc3bC4zNzQuMTgxSDI3LjIxNWwuMzc0LS4xODFhMi40NzYgMi40NzYgMCAwMDEuMzU0LTEuODU4Yy4wNjgtLjQ4Ny4wNjgtMS42NzcuMDA1LTIuMTkyYTIuNDA1IDIuNDA1IDAgMDAtMi4wOS0yLjA5Yy0uNDUzLS4wNTctMjQuMzEtLjA1Ny0yNC43NjkuMDA2ek0xLjgzIDExLjM1N2MtLjQ2LjEyNC0uNzQ4LjI5NC0xLjA5NC42NDUtLjU3Ny41NzItLjczNiAxLjExLS43MzYgMi40NyAwIC45MjMuMDc0IDEuNDIxLjI2IDEuODE4LjE4Ny4zOTYuNjE4Ljg2Ny45NyAxLjA2LjY0LjM0NS0uMjE2LjMyMiAxMy4yNy4zMjIgMTMuNDg2IDAgMTIuNjMuMDIzIDEzLjI3LS4zMjMuMzUyLS4xOTIuNzgyLS42NjMuOTctMS4wNi4xODYtLjM5Ni4yNi0uODk0LjI2LTEuODE3IDAtLjkyMy0uMDc0LTEuNDIyLS4yNi0xLjgxOC0uMTg4LS4zOTctLjYxOC0uODY3LS45Ny0xLjA2LS42NC0uMzQ1LjIyMi0uMzIyLTEzLjI5OC0uMzE3LTEwLjQ1NiAwLTEyLjM5My4wMTItMTIuNjQzLjA4ek0xLjY5OSAyMS4wNjVjLS40MTQuMTMtLjcwOC4zMjMtMS4wMzcuNjgtLjM0LjM2Mi0uNTI3Ljc2NC0uNjA2IDEuMjgtLjA2OC40OTItLjA3NCAxLjc1IDAgMi4yMjZhMi40MDMgMi40MDMgMCAwMDIuMDI4IDIuMDVjLjI1NS4wNCA0LjQxMi4wNTcgMTIuNjcuMDQ1bDEyLjI5MS0uMDE3LjMzNC0uMTI0YTIuNTA4IDIuNTA4IDAgMDAxLjQ1LTEuNDc5Yy4xMDItLjI2Ni4xMy0uNDgxLjE1My0xLjIyOS4wNTEtMS41NDYtLjA5Ni0yLjE3NS0uNjY4LTIuNzc1LS4zNC0uMzU3LS42MzQtLjU0NC0xLjA2NS0uNjc0LS4yODMtLjA4LTEuNDc4LS4wOS0xMi43NzItLjA4NS0xMS43NTkgMC0xMi40ODQuMDA1LTEyLjc3OC4xMDJ6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdIb21lcGFnZU9wdGlvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0xpbmtkbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjIuOTU4IDMuNjI1YTIuNDE3IDIuNDE3IDAgMDEyLjQxNyAyLjQxN3YxNi45MTZhMi40MTcgMi40MTcgMCAwMS0yLjQxNyAyLjQxN0g2LjA0MmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3LTIuNDE3VjYuMDQyYTIuNDE3IDIuNDE3IDAgMDEyLjQxNy0yLjQxN2gxNi45MTZ6bS0uNjA0IDE4LjczVjE1Ljk1YTMuOTQgMy45NCAwIDAwLTMuOTM5LTMuOTRjLTEuMDI3IDAtMi4yMjMuNjMtMi44MDMgMS41NzJWMTIuMjRIMTIuMjR2MTAuMTE0aDMuMzcydi01Ljk1N2MwLS45My43NDktMS42OTIgMS42OC0xLjY5MmExLjY5MSAxLjY5MSAwIDAxMS42OSAxLjY5MnY1Ljk1N2gzLjM3MnpNOC4zMTQgMTAuMzQyYTIuMDMgMi4wMyAwIDAwMi4wMy0yLjAzIDIuMDM3IDIuMDM3IDAgMDAtMi4wMy0yLjA0MkEyLjA0MiAyLjA0MiAwIDAwNi4yNyA4LjMxM2MwIDEuMTI0LjkxOSAyLjAzIDIuMDQyIDIuMDN6bTEuNjc5IDEyLjAxMVYxMi4yNEg2LjY0NnYxMC4xMTRoMy4zNDd6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xpbmtkblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01haWwocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI0LjE2NyA0LjgzM0g0LjgzM0EyLjQxMyAyLjQxMyAwIDAwMi40MyA3LjI1bC0uMDEyIDE0LjVhMi40MjQgMi40MjQgMCAwMDIuNDE2IDIuNDE3aDE5LjMzNGEyLjQyNCAyLjQyNCAwIDAwMi40MTYtMi40MTdWNy4yNWEyLjQyNCAyLjQyNCAwIDAwLTIuNDE2LTIuNDE3em0wIDE2LjkxN0g0LjgzM1Y5LjY2N2w5LjY2NyA2LjA0MSA5LjY2Ny02LjA0MVYyMS43NXpNMTQuNSAxMy4yOTJMNC44MzMgNy4yNWgxOS4zMzRMMTQuNSAxMy4yOTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01haWxcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZWRpYShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkuMzUgMTAuMDRBNy40OSA3LjQ5IDAgMDAxMiA0QzkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDRBNS45OTQgNS45OTQgMCAwMDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZWRpYVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01ldGFEYXRhKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyIDM3LjMwN2wxMi41MTIgMjAuNzRjLjA1Ni0uMTUuMTE5LS4yOS4xODgtLjQyMSA1LjA0MS04LjM1OCAxMC4wODQtMTYuNzEzIDE1LjEyOC0yNS4wNjUuMTc5LS4yNzIuMjc2LS42NjIuMjY0LTEuMDY0LS4wMTEtMi40MTkgMC00LjgzNyAwLTcuMzEzLS4xMTcuMDg0LS4yMjIuMTUxLS4zMjMuMjMzLS44NDIuNjgxLTEuNzEzIDEuMjQ4LTIuNjUxIDEuNDMtLjIxOS4wMzItLjQwOC4yNjItLjQ5My41OTctLjgwMiAyLjM3Mi0yLjA1MyAzLjU5Mi0zLjY3NiAzLjU1LTEuNzAzLS4wNDEtMi45NjItMS40MTUtMy43LTMuOTctLjg4LTMuMDQ3LS4xOTItNi44MDIgMS41NDItOC42MTcgMS43NTUtMS44MzUgNC4wNTgtMS4yMyA1LjM4NCAxLjQxNi4yNDMuNDk1LjQzIDEuMDE4LjI5IDEuNzAxLS4wODMuNDY1LS4zMDMuODI2LS41ODQuOTU4LS4yODIuMTMyLS41ODQuMDE2LS44MDEtLjMwNi0uMjItLjMxNC0uMzk3LS43MTItLjYyNS0xLjAxLS43NjgtMS0xLjYxMi0xLjE5Mi0yLjQ5Mi0uNDY1LS45My43NzItMS4zNzUgMi4wNjUtMS4zMDYgMy43NzkuMDY2IDEuNTk3LjU5NyAyLjcwNiAxLjQ3NCAzLjMyLjkxNi42NDggMS45ODEuMTk4IDIuNi0xLjA5OC0uNzc0LS4yOTctMS40NzgtLjgzNy0yLjAwNS0xLjhhMTIuNTkgMTIuNTkgMCAwMS0uOTUzLTIuMzI0Yy0uMTk1LS42MjguMDUzLTEuMzk1LjQyMS0xLjcwNy4zODEtLjMyOC44NS0uMTI4IDEuMDg5LjQ2NS4zMzIuODguNjc2IDEuNzAyIDEuMjYyIDIuMTc0Ljg4NC42OTggMS43OTcuNjIgMi43MDcuMjg0IDEuNzU0LS42MzUgMy4xODgtMi4xOTMgNC40My00LjI1NSAxLjM3My0yLjI3MiAyLjM1OS00LjkxMyAyLjY2Ni04LjEzOC4xOS0xLjk4NS4wMjItMy44NzEtMS4wMy01LjE3NS0uODU0LTEuMDYtMS44NDItMS4xMS0yLjg1Mi0uNzk2LTEuMTg0LjM5Ny0yLjMgMS4yMTktMy4yNzIgMi40MDdhNS4wOSA1LjA5IDAgMDEtLjQzOC40NzljLS40LjQxNC0uOTI0LjIyNy0xLjE4Ni0uNDIyLS4yNjItLjY0OS0uMTY1LTEuNTI0LjIxOC0xLjk3OGExNS4yNjUgMTUuMjY1IDAgMDExLjY3Mi0xLjhjMS40MDMtMS4yMjUgMi44OTUtMS45NjQgNC41MTItMS43MzQgMi4zNzMuMzQ3IDQuMDc5IDMuMzQgNC4xOTEgNy4yOTIuMDk2IDMuMzcxLS42MzMgNi4yOTgtMS43NCA5LjAxNi0uNjYxIDEuNi0xLjQ1NSAzLjAzOC0yLjM1OSA0LjI3MS0uMTE1LjE5OC0uMTguNDYtLjE4Mi43MzUtLjAxMSAzLjIxNS0uMDExIDYuNDMxIDAgOS42NS4wMTQuNjYtLjE0NSAxLjMtLjQzNSAxLjc1NS01LjQxMyA4Ljk1LTEwLjgyMiAxNy45MDMtMTYuMjI4IDI2Ljg2MS0uNTYuOTMtMS4wMDEuOTMtMS41NjIgMC00LjQ4Mi03LjQyMy04Ljk2Mi0xNC44NTUtMTMuNDQtMjIuMjk1LS41NzMtLjk0OS0uNTcyLTEuNjcyLjAwNi0yLjYzMiA1LjM5Ni04Ljk0IDEwLjc5Mi0xNy44ODggMTYuMTg5LTI2Ljg0My4yNy0uNDg2LjY1NC0uNzU1IDEuMDUzLS43MzcgMi43NDcuMDIyIDUuNDk0LjAyMiA4LjI0MiAwIC40LS4wMjIuNzg2LjI0MyAxLjA1OS43MjggMS4zMjggMi4yMzcgMi42NjUgNC40NTIgNC4wMDIgNi42ODIuMjkxLjQ2MS4zNTYgMS4xOTIuMTU3IDEuNzcyLS4xOTkuNTgtLjYxLjg2My0uOTk5LjY4M2ExLjU2IDEuNTYgMCAwMS0uNDg0LS41NDEgNzcyLjEwMyA3NzIuMTAzIDAgMDEtMy42MDItNS45NDhjLS4xNS0uMjc1LS4zNjctLjQyNC0uNTktLjQwNC0yLjQ0NiAwLTQuODkgMC03LjMzNi4wMi0uMTkuMDEtLjM3Mi4xMjktLjUxNS4zMzgtNS4wOSA4LjQxMi0xMC4xNzQgMTYuODMtMTUuMjU0IDI1LjI1NWwtLjE0NC4yNjd6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjU3NCAzMS4yNjVWMzguNjgzYy0uMDA3LjgxNS0uMzkyIDEuNDgyLS44ODEgMS41MjctLjQ5LjA0Ni0uOTE3LS41NDYtLjk3OC0xLjM1NGE1LjIxMiA1LjIxMiAwIDAxLS4wMTItLjQzMnYtOC40MDhjMC0xLjI2OS4zNTctMS44NjUgMS4xMTItMS44NjdoNS4xMzFjLjQyIDAgLjc1NS4yNDcuOTMyLjkxLjE2My41OTYuMTM5IDEuMjIxLS4xNDkgMS42NTItLjIwNy4zMDUtLjQ2OC40OS0uNzQ0LjUyOS0xLjMxMy4wNTItMi42MjYuMDIyLTMuOTQuMDI1aC0uNDcxek0xOS4xMzYgNDMuNzc5di02Ljk0MmE0LjUyNCA0LjUyNCAwIDAxLjEyNS0xLjEzNWMuMTgzLS42MzguNjEtLjk3NSAxLjAyNS0uODA5LjQxNy4xNDYuNzE4Ljc1Mi43MjUgMS40Ni4wMTcuOTI3LjAwOCAxLjg1NC4wMDggMi43ODF2NS44NzRjMCAxLjMwOC0uMzUyIDEuOTAxLTEuMTMxIDEuOTA0aC01LjE0Yy0uMzg0LjAzOS0uNzQzLS4zMTYtLjkwNS0uODk1LS4xNTgtLjUxLS4xMjQtMS4xMjYuMDg3LTEuNTguMjAxLS40NTkuNTMyLS43MS44NzMtLjY2M2gzLjg3M2wuNDYuMDA1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01ldGFEYXRhXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnT3BlbnNlYUxvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNiAyNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE4Ljg5NSAxNC42ODFjLS4wNDUtLjA0NS0uMTEyLS4wNDUtLjE4LS4wMjJsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwIC4zMS4zMSAwIDAxLjA4OS0uMDY3Yy4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjUtLjM1OSAwLS42MjcuMjkxLS42MjcuNjUgMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNGE1LjE2IDUuMTYgMCAwMC40NDgtLjk0MWMuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1Ny4wNDQtLjAyMi4wMjItLjA5LS4wMjMtLjExMnptLTkuOTk3LS40OTNoMi41NTVjLjA0NSAwIC4wNjgtLjAyMy4wNjgtLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA2N2wtMS4yNTUtLjU4M2MtLjAyMy0uMDIyLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNjcuMDIyLjExMi4wNjcuMTEyek0xMyAwQzUuODI4IDAgMCA1LjgyOCAwIDEzczUuODI4IDEzIDEzIDEzIDEzLTUuODI4IDEzLTEzUzIwLjE3MiAwIDEzIDB6bS0uMDQ1IDIyLjQ1OWMtNS4xNzcgMC05LjM2OS00LjE5Mi05LjM2OS05LjM5MiAwLTUuMTc3IDQuMTkyLTkuMzkxIDkuMzctOS4zOTEgNS4xNzcgMCA5LjM2OCA0LjIxNCA5LjM2OCA5LjM5MS0uMDIyIDUuMi00LjIxNCA5LjM5Mi05LjM2OSA5LjM5MnptNS43Ni03LjhsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwIC4zMS4zMSAwIDAxLjA4OS0uMDY3Yy4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjUtLjM1OSAwLS42MjcuMjkxLS42MjcuNjUgMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1Ni44NTYgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNGE1LjE2IDUuMTYgMCAwMC40NDgtLjk0MWMuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1NyAwLS4wNDUtLjAyMy0uMTEyLS4wNjgtLjEzNCAwIDAtLjA2Ny0uMDIzLS4xMzUgMHptLTkuODE3LS40NzFoMi41NTVjLjA0NSAwIC4wNjgtLjAyMy4wNjgtLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA2N2wtMS4yNTUtLjU4M2MtLjAyMy0uMDIyLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNjcuMDIyLjExMi4wNjcuMTEyelwiXG4gICAgICAgIGZpbGw9XCIjMzI5MUU5XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTExLjQ3NiAxMS4yOTZsLTEuMjU1LS41ODJjLS4wMjMtLjAyMy0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDQ0LjAyMi4wODkuMDY3LjA4OWgyLjU1NmMuMDQ0IDAgLjA2Ny0uMDIzLjA2Ny0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDQ0em03LjQxOSAzLjM4NWMtLjA0NS0uMDQ1LS4xMTItLjA0NS0uMTgtLjAyMmwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDBjLjAyMi0uMDIyLjA0NC0uMDQ0LjA4OS0uMDY3LjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NXMtLjYyNy4yOTEtLjYyNy42NWMwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0LjE3OS0uMjkxLjMzNi0uNjI3LjQ0OC0uOTQxLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcuMDQ0LS4wMjIuMDIyLS4wOS0uMDIzLS4xMTJ6XCJcbiAgICAgICAgZmlsbD1cIiMzMjkxRTlcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdPcGVuc2VhTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1FyQ29kZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDQ3IDQ3XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNxci1jb2RlX3N2Z19fY2xpcDApXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01Ljg3NSAyNC41NDJoNC42Njd2NC42NjZINS44NzV2LTQuNjY2em0xOC42NjctMTRoNC42NjZ2OS4zMzNoLTQuNjY2di05LjMzM3ptLTQuNjY3IDE0aDkuMzMzdjkuMzMzaC00LjY2NnYtNC42NjdoLTQuNjY3di00LjY2NnptMTQgMGg0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoNC42Njd2NC42NjZoLTQuNjY3djQuNjY3aDQuNjY3djkuMzMzaC00LjY2N3Y0LjY2N2gtNC42NjZ2LTQuNjY3aC05LjMzNHY0LjY2N2gtNC42NjZ2LTkuMzMzaDkuMzMzdi00LjY2N2g0LjY2N3YtNC42NjdoLTQuNjY3di00LjY2NnptOS4zMzMgMTguNjY2di05LjMzM2gtNC42NjZ2OS4zMzNoNC42NjZ6TTMzLjg3NSA1Ljg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2ek01Ljg3NSA1Ljg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2ek01Ljg3NSAzMy44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJxci1jb2RlX3N2Z19fY2xpcDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDBoNDd2NDdIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1FyQ29kZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1JhcmlibGVMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMC44IDBINS4yQTUuMiA1LjIgMCAwMDAgNS4ydjE1LjZBNS4yIDUuMiAwIDAwNS4yIDI2aDE1LjZhNS4yIDUuMiAwIDAwNS4yLTUuMlY1LjJBNS4yIDUuMiAwIDAwMjAuOCAwelwiXG4gICAgICAgIGZpbGw9XCIjRkVEQTAzXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3Ljk0IDEyLjkwNWMuODItLjIxMyAxLjU0OC0uODI2IDEuNTQ4LTIuMDU3IDAtMi4wNS0xLjc0MS0yLjUyOC0zLjk3Mi0yLjUyOEg2LjYzdjkuMjM0aDMuNzRWMTQuNDJoNC40MzdjLjY4MyAwIDEuMDgzLjI3MSAxLjA4My45NDJ2Mi4xOTJoMy43NHYtMi4zMDhjMC0xLjI1OC0uNzEtMi4wNTEtMS42OS0yLjM0MXptLTMuMDY5LS45NzRIMTAuMzd2LS45MDNoNC41MDFjLjQ5IDAgLjc4Ny4wNjUuNzg3LjQ1MnMtLjI5Ny40NTEtLjc4Ny40NTF6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdSYXJpYmxlTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NhdmluZ3NQaWcocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjMxMS4wNzFjLTMuNTgxLjgyMS01LjkzNyA3LjIxMi00Ljc2NCAxMi45MjUuMTI3LjU5LjIyMiAxLjEwNy4yMjIgMS4xNzggMCAuMDcyLS4zNDkuMzQtLjc2MS42MjUtLjk3Mi42MjUtMi42MyAyLjA4OS0zLjI4NiAyLjg5MmwtLjUwNy42MjUtLjUxNy0uMzc1Yy0uOTcyLS42OTYtMi4zMTQtLjc4NS0zLjIwMi0uMjE0LS4zOC4yNS0xLjIzNiAxLjIzMi0xLjIzNiAxLjQyOCAwIC4wNzIuNDIzIDEuMDkuOTQgMi4yNWwuOTMgMi4xMDYtLjQxMiAxLjA4OWMtLjU0OSAxLjQyOC0xLjE4MyAzLjY3Ny0xLjQyNiA1LjA3bC0uMTkgMS4xMDdoLS40ODZjLS43MTggMC0xLjQ4LjQ0Ni0xLjg4IDEuMTA3LS43MDggMS4xNzgtLjY5OCAxLjAxNy0uNzMgNy45NDQtLjAyIDMuOTEuMDExIDYuNTUyLjA3NCA2Ljk2Mi4xNDguOTEuNjk4IDIgMS4yMTUgMi4zOTIuMzcuMjg2LjcwOC4zNCAyLjI3Mi4zNGgxLjg0OWwuOTUgMS42NzhjLjUyOS45MSAxLjMzMiAyLjEyNCAxLjc4NiAyLjY5NWwuODEzIDEuMDE4djIuOTgxYzAgMi43MzIuMDIxIDMuMDE3LjI0MyAzLjY2LjQxMiAxLjIzMi43MDggMS4zNzUgMi43MzcgMS4zMjEgMS41OTUtLjA1MyAxLjc4NS0uMDkgMi4wNi0uNDI4LjQzMy0uNTU0LjY3Ni0xLjM1Ny43NC0yLjVsLjA2My0xIC4zMjcuMDljMS40MDUuNDEgMy4xOS41MzUgNC40OS4zMzkuNzYtLjEyNSAxLjQ0OC0uMjY4IDEuNTMyLS4zMjEuMTA2LS4wNzIuMTU4LjE3OC4xOSAxLjA3LjA0MiAxLjI1LjIyMiAxLjgyMi43NiAyLjUuMjY1LjM0LjQzNC4zNzUgMi4xMDMuMzc1IDEuNzMzIDAgMS44MzgtLjAxOCAyLjE2Ni0uNDEuNjEzLS43NS42OTctMS4yMzIuNzYtNC40NDZsLjA1My0yLjg5Mi43OTMtLjkyOGMxLjc1My0yLjA4OSAzLjUyOC01LjUxNyA0LjQ0Ny04LjYwNSAxLjE3My0zLjg5MiAxLjYzOC04LjgwMSAxLjIxNS0xMi43NjRsLS4xMzctMS4zMDMuNTA3LS40MjljLjU3LS41IDEuMjI2LS43MTQgMS42MjctLjU1My40MDIuMTc4LjMxNy4zNzUtLjE4LjM5Mi0xLjE5My4wNTQtMS4yNTcgMi43MTQtLjA3MyAzLjMwMy4zNy4xOTcuNDU0LjE3OS43MDctLjEyNS4xNTktLjE5Ni4zNi0uNjA3LjQ0NC0uOTI4LjE5LS42NzguMi0uNjc4Ljc2LS4xOTcuMzgxLjMyMi40NDQuMzQuNTgyLjEwOC4yNDMtLjQxMS4wNzQtLjk0Ny0uNDQ0LTEuMzU3LS4yNjQtLjIxNC0uNTE3LS4zNzUtLjU4LS4zNzUtLjA1NCAwLS4xMDctLjA5LS4xMDctLjE5NiAwLS41LS4zOC0xLjQ0Ny0uNjY1LTEuNzE0LS40NDQtLjM3NS0xLjM3NC0uMjE1LTIuMTQ1LjM3NS0uMzI3LjI1LS42MTIuNDY0LS42MjMuNDY0LS4wMjEgMC0uMDc0LS4yNjgtLjExNi0uNTktLjE0OC0xLjE0Mi0uODk4LTMuNzg0LTEuNTY0LTUuNDgtMS42Ny00LjIzLTQuMjQ3LTcuNjc2LTcuMTQyLTkuNTY5LS41NDktLjM1Ny0xLjAxNC0uNjYtMS4wMzUtLjY3OC0uMDEtLjAzNi4wNzQtLjUxOC4xOS0xLjEwNyAxLjAzNi01LjAzNC0uNjU1LTEwLjc2NS0zLjY2Ni0xMi40NzktLjgzNC0uNDY0LTEuODQ5LS42MjQtMi42NzMtLjQ0NnptMS43OTYgMi42MDdjMS4zMzIuNSAyLjQxIDIuMDM1IDMuMDMzIDQuMjg0LjI2NC45NDYuMjk1IDEuMjUuMjk1IDIuOTI4IDAgMS43NS0uMDIgMS45NDYtLjM0OCAzLjA3LTEuNjQ4IDUuNzEzLTYuMzgxIDUuNzEzLTcuOTc3IDAtLjMxNy0xLjEwNi0uMzM4LTEuMzM5LS4zMzgtMy4wNyAwLTEuNjc4LjAzMi0xLjk4Mi4yOTYtMi45MjguNjAyLTIuMTc4IDEuNjI3LTMuNjc3IDIuOTA1LTQuMjMuODg4LS4zOTQgMS4yMjYtLjQxMiAyLjEzNC0uMDU0em0tNC4zNTIgMTUuMzdjLjAyIDAtLjM0OS4yMzItLjgxNC40ODItMS44NyAxLjAxOC0yLjQ5MyAxLjgyMS0yLjIxOCAyLjg1Ny4wNjMuMjMyLjI1My41MzUuNDAxLjY0Mi4yNDMuMTYxLjQxMi4xMDcgMS4xODMtLjQ2NCAyLjc3OS0yLjAxNyA2LjE3LTIuMjMxIDguOTYtLjU3MS40OTYuMzAzIDEuMTQuNzMyIDEuNDE1Ljk4Mi42MjMuNTE3Ljk4Mi40ODIgMS4yNjgtLjE0My40ODYtMS4xMDctLjIzMy0yLjA4OS0yLjMyNS0zLjIzMS0uNjAyLS4zMjItMS4wNzctLjYyNS0xLjA3Ny0uNjc5LjAxLS4wNTMuMjQzLS40NDYuNTI4LS44NzRsLjUxOC0uNzg2IDEuMDU2LjY0M2M0LjA0NyAyLjQxIDcuMjU4IDcuOTk4IDguMzA0IDE0LjQ2LjUyOCAzLjIzMS40NjUgNy4yMy0uMTY5IDEwLjQ5Ny0uODQ1IDQuMzM4LTIuNjIgOC4xNTktNS4wMjkgMTAuODU0bC0xLjEzIDEuMjY4LS4wMSAzLjI0OS0uMDExIDMuMjY3LTEuMzk1LjA1My0xLjQwNS4wNTR2LTIuMzM5YzAtMS4yNjctLjAzMi0yLjMyLS4wNzQtMi4zMi0uMDUzIDAtLjM0OS4xMjQtLjY2Ni4yNjctLjg4Ny40MS0yLjg1Mi44MDMtMy45NC44MDMtMS4xMyAwLTIuNzM2LS4zNzQtMy45Mi0uODkyYTI4LjkzIDI4LjkzIDAgMDAtLjg2Ni0uMzU3Yy0uMDIxIDAtLjA1MyAxLjAxNy0uMDYzIDIuMjY3bC0uMDMyIDIuMjg1LTEuNDA1LjA1NC0xLjQwNS4wNTMuMDIxLTMuNDEuMDEtMy40MS0uODU1LS45ODFjLTEuMDM2LTEuMjE0LTIuMTI0LTIuODkyLTIuODc0LTQuNDQ1bC0uNTUtMS4xNkg0LjA2NGMtMi4wMTcgMC0yLjEyMy0uMDE5LTIuMzU2LS4zOTNsLS4yNDMtLjM3NVY0MC4yMmMwLTcuMzkxLS4xMzctNi44MiAxLjU5Ni02Ljk0NWwxLjE4My0uMDkuMjQzLTEuNTdjLjQzMy0yLjczMiAxLjExLTQuOTk5IDIuMzE0LTcuNzMuMTQ3LS4zNC4xMTYtLjQ2NC0uNjI0LTIuMTQyLS40NTQtMS0uNzUtMS44NC0uNjk3LTEuOTI4LjE4LS4zMDQgMS4yNzguMTA3IDIuMDYuNzY3bC43OTIuNjYuNzkzLS45OTljLjk3Mi0xLjIxNCAyLjQ0LTIuNTUzIDMuNjQ1LTMuMzJsLjg5OC0uNTkuNTI4Ljg0Yy4yODUuNDY0LjUzOS44NTYuNTYuODc0em0yMS4wODcgMTQuMjY0Yy4xMjcuMDkuMTM3LjE3OS4wNDIuNTM2LS4xMjcuNDQ2LS4xOC41LS40NDQuMzIxLS4xNjktLjEwNy0uMjMyLS42MjUtLjA5NS0uODM5LjA4NS0uMTYuMjc1LS4xNi40OTctLjAxOHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04LjU3NSAzMC4wMWMtLjEzOC4wNTMtLjM4LjMyLS41Ni42MDYtLjM2LjYyNS0uNDM0IDEuNjA3LS4xNyAyLjQ2NC4yODYuOTI4IDEuMjA1IDEuMjE0IDEuNzY1LjUzNSAxLjAzNS0xLjI1LjI0My0zLjk5OS0xLjAzNS0zLjYwNnpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NhdmluZ3NQaWdcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTbWFydENvbnRyYWN0xLBjb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2NFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMuMDIzIDEuMzY4QzEuODY0IDIuMDg4LjMzMyA1LjAyNS4wNyA3LjEzYy0uMzM2IDIuMzgyLjU2MSA0Ljk4NiAyLjA1NiA2LjE1LjcxLjU1MyAyLjEzLjgzIDQuMTEuODNoMi45OXYyLjQ5M2MwIDEuMzg1LjE4NyAyLjQ5My4zNzQgMi40OTMuNDg1IDAgLjQ4NS0xMS42MzQgMC0xMy41MTctLjE4Ny0uNzc2LS42NzMtMS44ODQtMS4xMjEtMi41NDlMNy43MyAxLjkyMmgxMy4xMTdjMTEuNjk2IDAgMTMuMjI4LjExMSAxNC4yLjk0MiAyLjAxOCAxLjc3MyAyLjIwNSAzLjIxMyAyLjIwNSAxNy4yODUgMCA4LjE0NC4xNSAxMi43OTcuMzczIDEyLjc5Ny4yMjQgMCAuMzc0LTQuNTk4LjM3NC0xMi43NDIgMC0xMy44NS0uMTUtMTUuMTI0LTIuMDU1LTE3LjcyOGwtMS4wMS0xLjM4NUwxOS4zOS45ODFjLTguNTU3LS4wNTYtMTUuOTE5LjExLTE2LjM2Ny4zODd6bTMuOTYgMS4zODVjMS40OTYgMS4xNjQgMi4yNDMgMy40OSAyLjI0MyA3LjIwMnYzLjA0N0g3LjU0NGMtMS42NDQgMC0xLjY0NCAwLTEuMzA4LTEuNDQuMjI1LS43NzYuMjYyLTEuOTk0LjE1LTIuNzctLjIyNC0xLjM4NS0yLjI0Mi0zLjM4LTIuNjktMi42Ni0uMTUuMjIyLS4wMzguNS4yNi42NjYuNzg2LjM4NyAxLjkwNyAyLjIxNiAxLjkwNyAzLjE1NyAwIC40NDQtLjMzNyAxLjMzLS43ODUgMS45OTUtLjk3MiAxLjQ0LTIuMzkyIDEuMDUyLTMuNTg3LS45NDJDLjQ4IDkuNC40MDcgOC4wMTYgMS4xOSA1LjU3OCAyLjIzOSAyLjI1NiA0Ljc4IDEuMDM3IDYuOTg1IDIuNzU0elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjQ0NyAxMS44OTRjMCAuMzMzIDIuMjQyLjU1NCA1Ljk0Mi41NTQgMy41ODcgMCA2LjA1NC0uMjIxIDYuMjAzLS41NTQuMTUtLjM4Ny0xLjk0My0uNTU0LTUuOTQyLS41NTQtMy44ODYgMC02LjIwMy4yMjItNi4yMDMuNTU0ek0xMi45NjMgMTYuODhjMCAuMzMzIDEuMzA4LjU1NCAzLjE3Ni41NTQgMS44NjkgMCAzLjE3Ny0uMjIxIDMuMTc3LS41NTQgMC0uMzMyLTEuMzA4LS41NTQtMy4xNzctLjU1NC0xLjg2OCAwLTMuMTc2LjIyMi0zLjE3Ni41NTR6TTIwLjgxIDE2Ljg4YzAgLjMzMyAxLjEyMS41NTQgMi42MTYuNTU0czIuNjE2LS4yMjEgMi42MTYtLjU1NGMwLS4zMzItMS4xMjEtLjU1NC0yLjYxNi0uNTU0cy0yLjYxNi4yMjItMi42MTYuNTU0ek0zMS4yNzQgMTYuODhjMCAuMjc3LjY3Mi41NTQgMS40OTQuNTU0czEuNDk0LS4yNzcgMS40OTQtLjU1NGMwLS4zMzItLjY3Mi0uNTU0LTEuNDk0LS41NTRzLTEuNDk0LjIyMi0xLjQ5NC41NTR6TTkuNTI1IDIxLjY0NWMtLjE4Ny4yMjEtLjMgNy40MjMtLjMgMTYuMDEgMCAxNC4zNDkuMDM4IDE1LjY3OC42NzMgMTYuNTEuNTYxLjc3NSAxLjg2OS45NDEgOC4xNDcgMS4wNTJsNy40MzYuMTY2LjExMiA0LjI2NmMuMDc1IDIuMzgyLjIyNSA0LjMyMS4zMzcgNC4zMjEuMTUgMCAuNzQ3LS42NjUgMS4zMDgtMS40OTZsMS4wNDYtMS40OTYgMS4wNDYgMS40OTZjLjU2LjgzMSAxLjE1OSAxLjQ5NiAxLjMwOCAxLjQ5Ni4xNSAwIC4yNjItMS45OTQuMjYyLTQuNDMydi00LjQzMmgyLjk1MmM0LjExIDAgNC4xNDgtLjA1NSA0LjE0OC0xMC45MTQgMC00Ljk4Ni0uMTUtOC41MzEtLjM3NC04Ljc1My0uMjI0LS4yMjEtLjM3MyAxLjI3NC0uMzczIDQuMXY0LjQ4N0gzNS41N2MtLjkzNCAwLTEuNjgyLjIyMi0xLjY4Mi41NTQgMCAuMjc3Ljc0OC41NTQgMS42ODIuNTU0aDEuNjgydjMuNTQ2YzAgNS4zMTggMCA1LjMxOC0zLjQwMSA1LjMxOEgzMC45di0yLjE2YzAtMS42MDcuMjI0LTIuNDM4Ljc0Ny0yLjk5Mi42NzMtLjcyLjc4NS0xLjI3NC42NzMtNC41OThsLS4xMTItMy43MTItMi4wNTUtMS42NjItMi4wNTYtMS42NjItMS44NjggMS42NjItMS44NjkgMS42MDYtLjExMiAzLjc2OGMtLjExMiAzLjMyNCAwIDMuODc4LjY3MyA0LjU5OC41MjMuNTU0Ljc0NyAxLjM4NS43NDcgMi45OTJ2Mi4xNmgtNy42MjNjLTguNzA3IDAtOC4wNzIuMzg4LTguMDcyLTUuMzE4di0zLjU0Nmg2LjM1M2MzLjk5OCAwIDYuMzUzLS4yMjEgNi4zNTMtLjU1NCAwLS4zMzItMi4zNTUtLjU1NC02LjM1My0uNTU0SDkuOTczbC0uMDc1LTExLjQxMmMtLjA3NC02LjI2LS4yMjQtMTEuMTkxLS4zNzMtMTAuOTd6bTIwLjQ3OCAxOC4yODFjMS42NDQgMS40NCAxLjY0NCAxLjQ0IDEuNjQ0IDQuNTQzdjMuMTU4bC0xLjcxOSAxLjMzLTEuNzE5IDEuMzg1LTEuNjQ0LTEuMzMtMS42NDQtMS4zODVWNDQuNDdjMC0zLjEwMiAwLTMuMTU3IDEuNjA3LTQuNTQzLjg2LS43NzUgMS42MDctMS40NCAxLjY4MS0xLjQ0LjA3NSAwIC44Ni42NjUgMS43OTQgMS40NHptLS44MjIgMTEuMDI1bC45NzEtLjk0MlY2MS45MmwtLjkzNC0xLjI3NC0uOTM0LTEuMjc0LS45MzQgMS4yNzQtLjkzNCAxLjI3NHYtMTEuOGwuODk2LjgzMWMuODYuODMxIDEuMDEuODMxIDEuODY5IDB6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuOTEgNDEuODFjMCAuMjc3LjMzNy43NzYuNzQ3IDEuMTA4LjQ0OS4zMzMuNzQ4IDEuMTYzLjc0OCAxLjk0IDAgLjc3NS4xODYgMS4zODQuMzczIDEuMzg0Ljc0NyAwIC4zNzQtMy4yNjgtLjQ0OC00LjEtLjk3MS0uOTk3LTEuNDItMS4xMDgtMS40Mi0uMzMyek0xNC4wODQgMjEuODY2YzAgLjI3Ny42NzIuNTU0IDEuNTMyLjU1NC44OTYgMCAxLjQyLS4yMjEgMS4yNy0uNTU0LS4xMTItLjMzMi0uODIyLS41NTQtMS41MzItLjU1NC0uNzEgMC0xLjI3LjIyMi0xLjI3LjU1NHpNMTguNzU1IDIxLjg2NmMtLjE1LjM4OCAyLjUwNC41NTQgNy42MjMuNTU0IDUuMDA4IDAgNy44ODUtLjIyMSA3Ljg4NS0uNTU0IDAtLjMzMi0yLjgwMy0uNTU0LTcuNjIzLS41NTQtNC43MDkgMC03LjczNi4yMjItNy44ODUuNTU0ek0xMi43NzYgMjcuNDA2Yy4xNS4zMzMgMi44MDMuNTU0IDYuNzI2LjU1NCAzLjkyNCAwIDYuNTc3LS4yMjEgNi43MjctLjU1NC4xNS0uMzg4LTIuMTY4LS41NTQtNi43MjctLjU1NHMtNi44NzUuMTY2LTYuNzI2LjU1NHpNMjcuOTEgMjcuNDA2YzAgLjMzMyAxLjMwOC41NTQgMy4xNzcuNTU0IDEuODY4IDAgMy4xNzYtLjIyMSAzLjE3Ni0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc2LS41NTQtMS44NjkgMC0zLjE3Ny4yMjItMy4xNzcuNTU0ek0xMi45NjMgMzIuMzkyYzAgLjMzMyAzLjI1LjU1NCA4Ljk2OC41NTRzOC45NjktLjIyMSA4Ljk2OS0uNTU0YzAtLjMzMi0zLjI1MS0uNTU0LTguOTY5LS41NTQtNS43MTcgMC04Ljk2OC4yMjItOC45NjguNTU0elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU21hcnRDb250cmFjdMSwY29uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuMTQgNy4yNWMtLjkzMS40MjMtMS45MzQuNy0yLjk3My44MzRhNS4xOTQgNS4xOTQgMCAwMDIuMjcxLTIuODc2IDEwLjQ0IDEwLjQ0IDAgMDEtMy4yODYgMS4yNjljLS45NTUtMS4wNC0yLjI5Ni0xLjY0NC0zLjgxOS0xLjY0NC0yLjg0IDAtNS4xNiAyLjMyLTUuMTYgNS4xODQgMCAuNDExLjA1LjgxLjEzNCAxLjE4NEExNC43MzUgMTQuNzM1IDAgMDEzLjYyNSA1Ljc4OGE1LjEyOCA1LjEyOCAwIDAwLS43IDIuNTk4YzAgMS44LjkwNSAzLjM5NSAyLjMwNyA0LjMwMi0uODU4IDAtMS42NTUtLjI0Mi0yLjM1Ni0uNjA1di4wMzdhNS4xODggNS4xODggMCAwMDQuMTU3IDUuMDg3IDUuMSA1LjEgMCAwMS0yLjMzMy4wODQgNS4xNzIgNS4xNzIgMCAwMDQuODM0IDMuNjAxIDEwLjI5NiAxMC4yOTYgMCAwMS02LjQ0IDIuMjI0Yy0uNDExIDAtLjgyMi0uMDI1LTEuMjMzLS4wNzNhMTQuNjc1IDE0LjY3NSAwIDAwNy45NSAyLjMzMmM5LjUyMiAwIDE0Ljc1NC03LjkwMiAxNC43NTQtMTQuNzU0IDAtLjIzIDAtLjQ0Ny0uMDEyLS42NzZBMTAuMzU5IDEwLjM1OSAwIDAwMjcuMTQgNy4yNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnVHdpdHRlclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1VwbG9hZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yNDQuMSAxLjZjLTEyLjcgMy40LTE1LjUgNS43LTUyLjggNDIuOC0zOC42IDM4LjUtMzkuNSAzOS42LTM5LjUgNTAuNSAwIDE3IDE1LjQgMjguNCAzMS44IDIzLjYgNS42LTEuNiA2LjktMi43IDI2LjctMjIuM0wyMzEgNzUuNnYxMzAuNmMwIDE0MS44LS4zIDEzNC42IDUuNSAxNDIuMiAxLjQgMS44IDQuOSA0LjYgNy43IDYuMiAxMy42IDcuNSAzMC41LjYgMzUuNi0xNC41LjktMi41IDEuMi0zNy42IDEuMi0xMzMuOVY3NS42bDIwLjggMjAuNmMxOS43IDE5LjYgMjEgMjAuNyAyNi41IDIyLjMgMTAgMi45IDE5IC4zIDI1LjktNy4zIDQuNC00LjggNi4yLTEwIDYuMi0xNy4zLS4xLTkuNy0yLjMtMTIuNC00MC4zLTUwLjEtMjgtMjcuOC0zNS44LTM1LTQwLjctMzcuNi0xMS42LTYtMjQtNy43LTM1LjMtNC42elwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTE2LjEgMjMyLjdjLTYuMiAyLjItMTIuNCA4LjctMTQuNiAxNS4zLTEuNSA0LjYtMS43IDcuNC0xLjEgMTkuNCAyLjIgNDcuNiAxNi44IDkyLjEgNDIuOCAxMzAuOCAxOS4zIDI4LjkgNDguNyA1Ny4yIDc3LjggNzUuMyA2OS40IDQzIDE1NC4yIDUwLjMgMjMwLjcgMjAgMzIuNi0xMi45IDYxLjQtMzIuNSA4Ny44LTU5LjYgNDQuMy00NS41IDY5LjMtMTAzLjIgNzIuMi0xNjYuNy43LTE2LjgtLjYtMjIuMS03LjItMjguNy05LjgtOS44LTI1LjItOS44LTM1IDAtNS41IDUuNS03LjIgMTEtNy45IDI2LjUtLjggMTYtMi44IDI5LjUtNi43IDQ0LTE5LjMgNzIuNC03Ny41IDEyOS40LTE1MC4yIDE0Ny0xMDkuNiAyNi42LTIyMC4xLTM5LjktMjQ4LjItMTQ5LjQtMy41LTEzLjgtNi41LTM1LjMtNi41LTQ3LjIgMC05LjMtMi4zLTE1LjctNy41LTIwLjktNi45LTctMTYuOS05LjEtMjYuNC01Ljh6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdVcGxvYWRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdWZWN0b3IocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOCAyOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzLjk4OCA5LjEzOGgtMS43MTN2LTIuNjFDMjIuMjc1IDIuOTIzIDE4LjQzNyAwIDEzLjcwOCAwIDguOTc3IDAgNS4xNCAyLjkyNCA1LjE0IDYuNTI3djIuNjExSDMuNDI3QzEuNTQyIDkuMTM4IDAgMTAuMzEzIDAgMTEuNzV2MTMuMDU1YzAgMS40MzYgMS41NDIgMi42MTEgMy40MjcgMi42MTFoMjAuNTYxYzEuODg1IDAgMy40MjctMS4xNzUgMy40MjctMi42MTFWMTEuNzQ5YzAtMS40MzYtMS41NDItMi42MS0zLjQyNy0yLjYxem0tMTUuNDItMi42MWMwLTIuMTY4IDIuMjk1LTMuOTE3IDUuMTQtMy45MTcgMi44NDQgMCA1LjE0IDEuNzUgNS4xNCAzLjkxNnYyLjYxMUg4LjU2OHYtMi42MXptMTUuNDIgMTguMjc2SDMuNDI3VjExLjc0OWgyMC41NjF2MTMuMDU1em0tMTAuMjgtMy45MTZjMS44ODQgMCAzLjQyNi0xLjE3NSAzLjQyNi0yLjYxMSAwLTEuNDM2LTEuNTQyLTIuNjExLTMuNDI3LTIuNjExLTEuODg0IDAtMy40MjYgMS4xNzUtMy40MjYgMi42MSAwIDEuNDM3IDEuNTQyIDIuNjEyIDMuNDI2IDIuNjEyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1ZlY3RvclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1lvdXR1YmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEyLjA4MyAxOC4xMjVsNi4yNzItMy42MjUtNi4yNzItMy42MjV2Ny4yNXptMTMuOTY5LTkuNDYxYy4xNTcuNTY4LjI2NSAxLjMyOS4zMzggMi4yOTYuMDg0Ljk2Ni4xMiAxLjguMTIgMi41MjVsLjA3MyAxLjAxNWMwIDIuNjQ2LS4xOTMgNC41OTItLjUzMSA1LjgzNi0uMzAyIDEuMDg4LTEuMDAzIDEuNzg5LTIuMDkgMi4wOS0uNTY5LjE1OC0xLjYwOC4yNjctMy4yMDMuMzM5LTEuNTcuMDg0LTMuMDA5LjEyLTQuMzM4LjEybC0xLjkyMS4wNzNjLTUuMDYzIDAtOC4yMTctLjE5My05LjQ2MS0uNTMxLTEuMDg4LS4zMDItMS43ODktMS4wMDMtMi4wOS0yLjA5LS4xNTgtLjU2OS0uMjY3LTEuMzMtLjMzOS0yLjI5Ny0uMDg1LS45NjYtLjEyLTEuOC0uMTItMi41MjVMMi40MTYgMTQuNWMwLTIuNjQ2LjE5My00LjU5Mi41MzEtNS44MzYuMzAyLTEuMDg4IDEuMDAzLTEuNzg5IDIuMDktMi4wOS41NjktLjE1OCAxLjYwOC0uMjY3IDMuMjAzLS4zMzkgMS41Ny0uMDg1IDMuMDA4LS4xMiA0LjMzOC0uMTJsMS45MjEtLjA3M2M1LjA2MyAwIDguMjE3LjE5MyA5LjQ2MS41MzEgMS4wODguMzAyIDEuNzg5IDEuMDAzIDIuMDkgMi4wOXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBTdG9yZSB9IGZyb20gJy4vQXBwU3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrU3F1YXJlIH0gZnJvbSAnLi9DaGVja1NxdWFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG93bkFycm93IH0gZnJvbSAnLi9Eb3duQXJyb3cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERyb3BEb3duxLBjb24gfSBmcm9tICcuL0Ryb3BEb3duxLBjb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIERyb3BEb3duIH0gZnJvbSAnLi9Ecm9wRG93bidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXRoTG9nbyB9IGZyb20gJy4vRXRoTG9nbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2sgfSBmcm9tICcuL0ZhY2Vib29rJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaW5nZXJwcmludCB9IGZyb20gJy4vRmluZ2VycHJpbnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdvb2dsZVBsYXlTdG9yZSB9IGZyb20gJy4vR29vZ2xlUGxheVN0b3JlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIb21lcGFnZU9wdGlvbiB9IGZyb20gJy4vSG9tZXBhZ2VPcHRpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIMSwY29ubW9uc3RyQ2hlY2tib3gxNCB9IGZyb20gJy4vxLBjb25tb25zdHJDaGVja2JveDE0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyDEsGNvbm1vbnN0ckNoZWNrYm94NiB9IGZyb20gJy4vxLBjb25tb25zdHJDaGVja2JveDYnXG5leHBvcnQgeyBkZWZhdWx0IGFzIMSwbnN0YWdyYW0gfSBmcm9tICcuL8SwbnN0YWdyYW0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtkbiB9IGZyb20gJy4vTGlua2RuJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWlsIH0gZnJvbSAnLi9NYWlsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZWRpYSB9IGZyb20gJy4vTWVkaWEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFEYXRhIH0gZnJvbSAnLi9NZXRhRGF0YSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlbnNlYUxvZ28gfSBmcm9tICcuL09wZW5zZWFMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBRckNvZGUgfSBmcm9tICcuL1FyQ29kZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmFyaWJsZUxvZ28gfSBmcm9tICcuL1JhcmlibGVMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTYXZpbmdzUGlnIH0gZnJvbSAnLi9TYXZpbmdzUGlnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbWFydENvbnRyYWN0xLBjb24gfSBmcm9tICcuL1NtYXJ0Q29udHJhY3TEsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXBsb2FkIH0gZnJvbSAnLi9VcGxvYWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmfEsGNvbm1vbnN0ckNoZWNrYm94MTQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIyIDJ2MjBIMlYyaDIwem0yLTJIMHYyNGgyNFYwem0tNiAxNi41MzhsLTQuNTkyLTQuNTQ4IDQuNTQ2LTQuNTg3TDE2LjUzOCA2bC00LjU0NSA0LjU4OS00LjU4OC00LjU0M0w2IDcuNDUxbDQuNTkzIDQuNTUyLTQuNTQ3IDQuNTkyTDcuNDUxIDE4bDQuNTU1LTQuNTk2IDQuNTkxIDQuNTVMMTggMTYuNTM4elwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnxLBjb25tb25zdHJDaGVja2JveDE0XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnxLBjb25tb25zdHJDaGVja2JveDYocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIyIDJ2MjBIMlYyaDIwem0yLTJIMHYyNGgyNFYwelwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnxLBjb25tb25zdHJDaGVja2JveDZcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmfEsG5zdGFncmFtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05LjQyNSAyLjQxN2gxMC4xNWE3LjAxMyA3LjAxMyAwIDAxNy4wMDggNy4wMDh2MTAuMTVhNy4wMDggNy4wMDggMCAwMS03LjAwOCA3LjAwOEg5LjQyNWE3LjAxMyA3LjAxMyAwIDAxLTcuMDA4LTcuMDA4VjkuNDI1YTcuMDA4IDcuMDA4IDAgMDE3LjAwOC03LjAwOHptLS4yNDIgMi40MTZhNC4zNSA0LjM1IDAgMDAtNC4zNSA0LjM1djEwLjYzNGE0LjM0NyA0LjM0NyAwIDAwNC4zNSA0LjM1aDEwLjYzNGE0LjM1IDQuMzUgMCAwMDQuMzUtNC4zNVY5LjE4M2E0LjM0NyA0LjM0NyAwIDAwLTQuMzUtNC4zNUg5LjE4M3ptMTEuNjYgMS44MTNhMS41MSAxLjUxIDAgMTEwIDMuMDIgMS41MSAxLjUxIDAgMDEwLTMuMDJ6TTE0LjUgOC40NThhNi4wNDIgNi4wNDIgMCAxMTAgMTIuMDg0IDYuMDQyIDYuMDQyIDAgMDEwLTEyLjA4NHptMCAyLjQxN2EzLjYyNSAzLjYyNSAwIDEwMCA3LjI1IDMuNjI1IDMuNjI1IDAgMDAwLTcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z8SwbnN0YWdyYW1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHttYWtlTkZUT3B0aW9uLCBCVVNJTkVTU30gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmZ1bmN0aW9uIERyb3BEb3duTWVudSh7YnVzaW5lc3M9ZmFsc2UsIGhlYWRlciwgYmlnLG1lZGl1bSxzbWFsbH0pe1xyXG5cclxuICAgIGNvbnN0IGNvbXAgPSBidXNpbmVzcyA/IEJVU0lORVNTIDogbWFrZU5GVE9wdGlvblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIC8qIERyb3Bkb3duIG1lbnUgY29udGFpbmVyICovXHJcbiAgICAgICAgPGxhYmVsIGZvcj0nc3ViT3B0aW9ucyc+IDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvSGVhZFRpdGxlPjxici8+XHJcbiAgICAgICAgICAgIHsvKiBTZWxlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9J3N1Yk9wdGlvbnMnIG5hbWU9J29wdGlvbnMnIGNsYXNzTmFtZT17Y24oW3N0eWxlcy5vcHRpb25zLG1lZGl1bSAmJiBzdHlsZXMubWVkaXVtXSl9PlxyXG4gICAgICAgICAgICAgICAgey8qIE9wdGlvbnMgKi99XHJcbiAgICAgICAgICAgICAgICB7Y29tcC5tYXAoKG9wdGlvbnMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnMua2V5fSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PntvcHRpb25zLnRpdGxlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25NZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VJbnB1dCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAke3N0eWxlcy5jc3NNZXNzYWdlfSBcclxuICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICBkYXRhLXNocmluaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgZm9yPVwidGV4dEFyZWFNZXNzYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICByb3dzPVwiOFwiXHJcbiAgICAgICAgICAgIGNvbHM9XCI1N1wiXHJcbiAgICAgICAgICAgIHJvd21heD1cIjgwXCJcclxuICAgICAgICAgICAgY29sc21heD1cIjYwXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgaWQ9XCJ0ZXh0QXJlYU1lc3NhZ2VcIiBcclxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIiBcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCIgXHJcbiAgICAgICAgICAgIHJvd3M9e1wiOFwifSBcclxuICAgICAgICAgICAgY29scz17XCI1N1wifSBcclxuICAgICAgICAgICAgcm93bWF4PXtcIjgwXCJ9IFxyXG4gICAgICAgICAgICBjb2xzbWF4PXtcIjYwXCJ9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlQXJlYX0+TWVzc2FnZTwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VJbnB1dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90ZXh0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7bWVkaXVtPWZhbHNlLCBiaWc9ZmFsc2UsIHNtYWxsPWZhbHNlLC4uLnByb3BzfSl7XHJcbiAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0gJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xGdWxsV2lkdGh9YH0+XHJcbiAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfSBcclxuICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgIGRhdGFzLXNocmluaz1cImZhbHNlXCJcclxuICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiPlxyXG4gICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZ1bGxXaWR0aH0gXHJcbiAgICAgICAgICR7c3R5bGVzLm11aUlucHV0RnVsbFdpZHRofVxyXG4gICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1gfT5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFtcclxuICAgICAgICAgICAgICAgbWVkaXVtICYmIHN0eWxlcy5tZWRpdW0sIFxyXG4gICAgICAgICAgICAgICBiaWcgJiYgc3R5bGVzLmJpZywgXHJcbiAgICAgICAgICAgICAgIHN0eWxlcy5zbWFsbCAsXHJcbiAgICAgICAgICAgICAgIHN0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dCxcclxuICAgICAgICAgICAgICAgc3R5bGVzLm11aUlucHV0SW5wdXRcclxuICAgICAgICAgICAgICAgXSl9ICBcclxuICAgICAgICAgICAgICAgey4uLnByb3BzfSBcclxuICAgICAgICAgICAgICAgcmVxdWlyZWQvPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJ1c2luZXNzRm9ybSBmcm9tICcuLi8uLi9mb3JtL2J1c2luZXNzU2lnblVwL2luZGV4J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9pbmRleCdcclxuXHJcbmZ1bmN0aW9uIExheW91dCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8qIExheW91dCBDb250YWluZXIgKi9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0b3IgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogRm9ybSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxCdXNpbmVzc0Zvcm0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uTGluayAoeyBjaGlsZHJlbixocmVmLCAuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9ICBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uTGluayIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHtGT09URVJNRU5VfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlck5hdmlnYXRpb24oKXtcclxuICAgIHJldHVybihcclxuICAgICAgICBGT09URVJNRU5VLm1hcCgobWVudSk9PntcclxuICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLk5hdn0gc2l6ZT0nMTRweCc+e21lbnUudGl0bGV9PC9hPlxyXG4gICAgICAgICAgIClcclxuICAgICAgIH0pXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3Rlck5hdmlnYXRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IEZyYW1lQnV0dG9uIGZyb20gXCIuLi9mcmFtZS9mcmFtZUJ1dHRvblwiO1xyXG5pbXBvcnQge01FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9pY29uL2luZGV4XCJcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe2ZsYXQ9ZmFsc2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogTmF2aWdhdG9yICovXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17YFxyXG4gICAgJHtzdHlsZXMubXVpUGFwZXJSb290fSBcclxuICAgICR7c3R5bGVzLm11aUFwcEJhclJvb3R9IFxyXG4gICAgJHtzdHlsZXMubXVpQXBwQmFyUG9zaXRpb25BYnNvbHV0ZX0gXHJcbiAgICAke3N0eWxlcy5tdWlBcHBCYXJDb2xvckRlZmF1bHR9IFxyXG4gICAgJHtzdHlsZXMuY3NzSGVhZGVyfSBcclxuICAgICR7c3R5bGVzLm11aVBhcGVyRWxldmF0aW9ufWB9PiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0b3J9PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBocmVmPScvJyBjbGFzc05hbWU9e3N0eWxlcy5jb21wfT5Pd25hYmxlLU5TPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogTWFyayBTaWRlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNzc05hdmlnYXRvcn0+ICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTGluayBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlMaXN0SXRlbVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmNzc05hdmlnYXRvckNvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUxpc3RJdGVtR3V0dGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpTGlzdEl0ZW1CdXR0b259YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YkJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9IHttZW51LmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51LmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiYgbWVudS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQnV0dG9uQ29udGVudH0+XHJcbiAgICAgICAgPEljb25CdXR0b24vPlxyXG4gICAgPC9kaXY+ICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZFRpdGxlKHsgYm9sZD0gZmFsc2UsY2xhc3NOYW1lICxjaGlsZHJlbiwgc2l6ZT0yMCwgb3BhY2l0eT0xfSl7XHJcbiAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgW3N0eWxlcy5UaXRsZSwgXHJcbiAgICAgICAgYm9sZCAmJiBzdHlsZXMuYm9sZCxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICBdKX1cclxuICAgICAgICBzdHlsZT17e2ZvbnRTaXplOnNpemUsIG9wYWNpdHk6IG9wYWNpdHl9fVxyXG4gICAgICAgID57Y2hpbGRyZW59PC9oMT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRpdGxlXHJcblxyXG4vKlxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9sZDogU29tZSB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0LCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gdGV4dCBoYXMgYm9sZCBmb250IHdlaWdodCBwcm9wZXJ0aWVzLCBib2xkIHByb3BlcnRpZXMgd2lsbCBoYXZlIGJlZW4gYWN0aXZhdGVkLlxyXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gVGV4dFRpdGxlKHsgYm9sZD1mYWxzZSwgY2hpbGRyZW59KXtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0gPntjaGlsZHJlbn08L3A+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRUaXRsZSIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgVEFCTEVUX1NJWkU6IDk0MyxcclxuICAgIERFU0tUT1BfU0laRTogMTI3MFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZU5GVE9wdGlvbj1bXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnTkZUJyxcclxuICAgICAgICB0aXRsZTogJ05GVChOb24gRnVuZ2libGUgVG9rZW4pJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdGVCcsXHJcbiAgICAgICAgdGl0bGU6ICdGVChGdW5naWJsZSBUb2tlbiknXHJcbiAgICB9XVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCVVNJTkVTUyA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnTkZUc2ZvcnlvdXJCdXNpbmVzcycsXHJcbiAgICAgICAgdGl0bGU6ICdORlRzIGZvciB5b3VyIEJ1c2luZXNzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnQ3JlYXRlQUNvbGxlY3Rpb24nLFxyXG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIGEgQ29sbGVjdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ0N1c3RvbWVyQVN1cHBvcnQnLFxyXG4gICAgICAgIHRpdGxlOiAnQ3VzdG9tZXIgQSBTdXBwb3J0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnTkZUU3RhbmRhcmRDb2xsYWJvcmF0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ05GVCBTdGFuZGFyZCBDb2xsYWJvcmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnU29tZXRoaW5nRWxzZScsXHJcbiAgICAgICAgdGl0bGU6ICdTb21ldGhpbmcgRWxzZSdcclxuICAgICAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBJTkZPID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2xhaW0gT3duZXJzaGlwJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvdmUgRXhpdGVuY2UnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdWZXJpZnkgQXV0aGVudGljaXR5JyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUHJpdmF0ZWx5IENvbm5lY3Qgd2l0aCB0aGUgT3duZXInLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTZWN1cmUgRGlnaXRhbCBBc3NldHMnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRk9PVEVSTUVOVSA9IFtcclxuICAgIHsgICBcclxuICAgICAgICBrZXk6ICdwcml2YWN5UG9saWN5JyxcclxuICAgICAgICB0aXRsZTonUHJpdmFjeSBQb2xpY3knXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICd0b3MnLFxyXG4gICAgICAgIHRpdGxlOiAnVE9TJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ215Q29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdNeSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjb250YWN0JyxcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBNRU5VID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ21ha2UtYW4tbmZ0JyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ01ha2UgYW4gTkZUJyxcclxuICAgICAgICBocmVmOiAnL21ha2VOZnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2J1c2luZXNzLXNpZ251cCcsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdCdXNpbmVzcyBTaWdudXAnLFxyXG4gICAgICAgIGhyZWY6ICcvYnVzaW5lc3NTaWduVXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ1N1YnNjcmliZS1mb3ItdXBjb21pbmctZHJvcHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnU3Vic2NyaWJlIGZvciBVcGNvbWluZyBEcm9wcycsXHJcbiAgICAgICAgaHJlZjogJy9zdWJzY3JpYmVGb3JVcGNvbWluZ0Ryb3BzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICduZnQtc3RhbmRhcmRzJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ05GVCBTdGFuZGFyZHMnLFxyXG4gICAgICAgIGhyZWY6ICcvbmZ0U3RhbmRhcmRzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdkb3dubG9hZC1uZnQtY3JlYXRvcicsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdEb3dubG9hZCBORlQgQ3JlYXRvcicsXHJcbiAgICAgICAgaHJlZjogJy9kb3dubG9hZE5GVENyZWF0b3InXHJcbiAgICB9XHJcbl0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2J1c2luZXNzU2lnblVwL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBCdXNpbmVzc1NpZ251cCgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxMYXlvdXQ+IEhlbGxvIFdvcmxkIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NTaWdudXBcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibXVpQnV0dG9uQmFzZVJvb3RcIjogXCJzdHlsZV9tdWlCdXR0b25CYXNlUm9vdF9fMUxjRFJcIixcblx0XCJtdWlCdXR0b25Sb290XCI6IFwic3R5bGVfbXVpQnV0dG9uUm9vdF9fU005dzdcIixcblx0XCJtdWlCdXR0b25Db250YWluZWRcIjogXCJzdHlsZV9tdWlCdXR0b25Db250YWluZWRfXzFmaExGXCIsXG5cdFwibXVpQnV0dG9uQ29udGFpbmVkUHJpbWFyeVwiOiBcInN0eWxlX211aUJ1dHRvbkNvbnRhaW5lZFByaW1hcnlfXzF0T09FXCIsXG5cdFwiY3NzQm9yZGVyQnV0dG9uXCI6IFwic3R5bGVfY3NzQm9yZGVyQnV0dG9uX19yZU90TlwiLFxuXHRcIm11aUJ1dHRvbkxhYmVsXCI6IFwic3R5bGVfbXVpQnV0dG9uTGFiZWxfX3BIY3hWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtdWlCdXR0b25CYXNlUm9vdFwiOiBcInN0eWxlX211aUJ1dHRvbkJhc2VSb290X19SbTlkNVwiLFxuXHRcIm11aUljb25CdXR0b25Sb290XCI6IFwic3R5bGVfbXVpSWNvbkJ1dHRvblJvb3RfX2NadXY2XCIsXG5cdFwibXVpSWNvbkJ1dHRvbkNvbG9ySW5oZXJpdFwiOiBcInN0eWxlX211aUljb25CdXR0b25Db2xvckluaGVyaXRfXzNDc25PXCIsXG5cdFwiY3NzSWNvbkJ1dHRvblwiOiBcInN0eWxlX2Nzc0ljb25CdXR0b25fX3hJWXI2XCIsXG5cdFwibXVpSWNvbkJ1dHRvbkxhYmVsXCI6IFwic3R5bGVfbXVpSWNvbkJ1dHRvbkxhYmVsX19jcnhZaVwiLFxuXHRcIm11aVN2Z0ljb25Sb290XCI6IFwic3R5bGVfbXVpU3ZnSWNvblJvb3RfXzNUMXJZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJDb250YWluZXJcIjogXCJzdHlsZV9mb290ZXJDb250YWluZXJfX0EzeDUwXCIsXG5cdFwiY29udGVudFwiOiBcInN0eWxlX2NvbnRlbnRfXzFyb1J4XCIsXG5cdFwibWFpbkNvbnRhaW5lclwiOiBcInN0eWxlX21haW5Db250YWluZXJfXzJNYVBIXCIsXG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX18yVHFrUFwiLFxuXHRcImxlZnRTaWRlT2ZDb250YWluZXJcIjogXCJzdHlsZV9sZWZ0U2lkZU9mQ29udGFpbmVyX18zbWRkbFwiLFxuXHRcImZvb3Rlck1lbnVcIjogXCJzdHlsZV9mb290ZXJNZW51X18xd0JjUlwiLFxuXHRcImNvcHlUZXh0XCI6IFwic3R5bGVfY29weVRleHRfXzI5UkVvXCIsXG5cdFwiSWNvbnNcIjogXCJzdHlsZV9JY29uc19fMXlNX1RcIixcblx0XCJqb2luVGV4dFwiOiBcInN0eWxlX2pvaW5UZXh0X18zNmJiVVwiLFxuXHRcInJpZ2h0U2lkZU9mQ29udGFpbmVyXCI6IFwic3R5bGVfcmlnaHRTaWRlT2ZDb250YWluZXJfXzNIbXJZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwic3R5bGVfZm9ybV9fMnBMbWxcIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZV9jb250YWluZXJfX2ZNU0F1XCIsXG5cdFwiaGVhZGVyc1wiOiBcInN0eWxlX2hlYWRlcnNfXzExdDR3XCIsXG5cdFwibXVpQ29udGFpbmVyUm9vdFwiOiBcInN0eWxlX211aUNvbnRhaW5lclJvb3RfXzI2ZWFfXCIsXG5cdFwibXVpQ29udGFpbmVyTWF4V2lkdGhTbVwiOiBcInN0eWxlX211aUNvbnRhaW5lck1heFdpZHRoU21fXzFMa1dSXCIsXG5cdFwibXVpVHlwb2dyYXBoeVJvb3RcIjogXCJzdHlsZV9tdWlUeXBvZ3JhcGh5Um9vdF9fMk5LU0FcIixcblx0XCJtdWlUeXBvZ3JhcGh5SDVcIjogXCJzdHlsZV9tdWlUeXBvZ3JhcGh5SDVfXzJSem5CXCIsXG5cdFwiY3NzSGVhZGVyXCI6IFwic3R5bGVfY3NzSGVhZGVyX18zR2J2Y1wiLFxuXHRcImNublNlbGVjdGlvbklucHV0XCI6IFwic3R5bGVfY25uU2VsZWN0aW9uSW5wdXRfXzF2bzdXXCIsXG5cdFwiY3NzU2VsZWN0aW9uSW5wdXRDb250YWluZXJcIjogXCJzdHlsZV9jc3NTZWxlY3Rpb25JbnB1dENvbnRhaW5lcl9fMlFrc2ZcIixcblx0XCJjc3NDb250cm9sXCI6IFwic3R5bGVfY3NzQ29udHJvbF9fT1UzdVZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm11aUJ1dHRvbkJhc2VSb290XCI6IFwiZnJhbWVCdXR0b25fbXVpQnV0dG9uQmFzZVJvb3RfX3lpUU5VXCIsXG5cdFwibXVpQnV0dG9uUm9vdFwiOiBcImZyYW1lQnV0dG9uX211aUJ1dHRvblJvb3RfXzNGZTBWXCIsXG5cdFwibXVpQnV0dG9uT3V0bGluZWRcIjogXCJmcmFtZUJ1dHRvbl9tdWlCdXR0b25PdXRsaW5lZF9fX0Q5QkFcIixcblx0XCJjc3NCdXR0b25Db250ZW50XCI6IFwiZnJhbWVCdXR0b25fY3NzQnV0dG9uQ29udGVudF9fMmFWamVcIixcblx0XCJtdWlCdXR0b25MYWJlbFwiOiBcImZyYW1lQnV0dG9uX211aUJ1dHRvbkxhYmVsX19uUzQxa1wiLFxuXHRcImNzc01lbnVJY29uXCI6IFwiZnJhbWVCdXR0b25fY3NzTWVudUljb25fXzNwd0ZkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJzdHlsZV9oZWFkZXJfX1B5WmZXXCIsXG5cdFwib3B0aW9uc1wiOiBcInN0eWxlX29wdGlvbnNfXzJPM0JCXCIsXG5cdFwibWVkaXVtXCI6IFwic3R5bGVfbWVkaXVtX194bDB3N1wiLFxuXHRcIm9wdGlvblwiOiBcInN0eWxlX29wdGlvbl9fM21OZWFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm11aUZvcm1Db250cm9sUm9vdFwiOiBcInN0eWxlX211aUZvcm1Db250cm9sUm9vdF9fQ1BRV0FcIixcblx0XCJtZXNzYWdlQXJlYVwiOiBcInN0eWxlX21lc3NhZ2VBcmVhX18yVDJDMFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibXVpRm9ybUNvbnRyb2xGdWxsV2lkdGhcIjogXCJ0ZXh0X211aUZvcm1Db250cm9sRnVsbFdpZHRoX18yYi1DblwiLFxuXHRcIm11aUZvcm1Db250cm9sUm9vdFwiOiBcInRleHRfbXVpRm9ybUNvbnRyb2xSb290X18xdWE5cVwiLFxuXHRcIm11aUZvcm1MYWJlbFJvb3RcIjogXCJ0ZXh0X211aUZvcm1MYWJlbFJvb3RfXzFySTEzXCIsXG5cdFwibXVpSW5wdXRMYWJlbFJvb3RcIjogXCJ0ZXh0X211aUlucHV0TGFiZWxSb290X18ycWV6M1wiLFxuXHRcIm11aUlucHV0TGFiZWxGb3JtQ29udHJvbFwiOiBcInRleHRfbXVpSW5wdXRMYWJlbEZvcm1Db250cm9sX18xTEt0NFwiLFxuXHRcIm11aUlucHV0TGFiZWxBbmltYXRlZFwiOiBcInRleHRfbXVpSW5wdXRMYWJlbEFuaW1hdGVkX18zV0ZrS1wiLFxuXHRcIm11aUlucHV0QmFzZVJvb3RcIjogXCJ0ZXh0X211aUlucHV0QmFzZVJvb3RfXzMySk5DXCIsXG5cdFwibXVpSW5wdXRCYXNlRnVsbFdpZHRoXCI6IFwidGV4dF9tdWlJbnB1dEJhc2VGdWxsV2lkdGhfXzEwSUk1XCIsXG5cdFwibXVpSW5wdXRSb290XCI6IFwidGV4dF9tdWlJbnB1dFJvb3RfX3ljbnN0XCIsXG5cdFwiY3NzSW5wdXRcIjogXCJ0ZXh0X2Nzc0lucHV0X18zWXUxT1wiLFxuXHRcIm11aUlucHV0Rm9ybUNvbnRyb2xcIjogXCJ0ZXh0X211aUlucHV0Rm9ybUNvbnRyb2xfXzM4UGtfXCIsXG5cdFwibXVpSW5wdXRVbmRlcmxpbmVcIjogXCJ0ZXh0X211aUlucHV0VW5kZXJsaW5lX18yYlJOZlwiLFxuXHRcIm11aUlucHV0QmFzZUlucHV0XCI6IFwidGV4dF9tdWlJbnB1dEJhc2VJbnB1dF9fM3MzcjZcIixcblx0XCJtdWktYW91dG8tZmlsbC1jYW5jZWxcIjogXCJ0ZXh0X211aS1hb3V0by1maWxsLWNhbmNlbF9fM1NfS3hcIixcblx0XCJtdWlJbnB1dElucHV0XCI6IFwidGV4dF9tdWlJbnB1dElucHV0X18xUmNtMFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX18ydlQwelwiLFxuXHRcImZvcm1cIjogXCJzdHlsZV9mb3JtX185cWg2UlwiLFxuXHRcImNvbnRhY3RcIjogXCJzdHlsZV9jb250YWN0X18zQkVkUFwiLFxuXHRcImNvbnRlbnRcIjogXCJzdHlsZV9jb250ZW50X18yZmdaalwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiYnV0dG9uX25hdl9fMVAyWkJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk5hdlwiOiBcImZvb3Rlcl9OYXZfXzFxc0lHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtdWlQYXBlclJvb3RcIjogXCJuYXZpZ2F0aW9uX211aVBhcGVyUm9vdF9fMUVNV2FcIixcblx0XCJtdWlQYXBlckVsZXZhdGlvblwiOiBcIm5hdmlnYXRpb25fbXVpUGFwZXJFbGV2YXRpb25fXzJaaXdqXCIsXG5cdFwibXVpQXBwQmFyUm9vdFwiOiBcIm5hdmlnYXRpb25fbXVpQXBwQmFyUm9vdF9fMjlhTHNcIixcblx0XCJtdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlXCI6IFwibmF2aWdhdGlvbl9tdWlBcHBCYXJQb3NpdGlvbkFic29sdXRlX193ZERnSFwiLFxuXHRcIm11aUFwcEJhckNvbG9yRGVmYXVsdFwiOiBcIm5hdmlnYXRpb25fbXVpQXBwQmFyQ29sb3JEZWZhdWx0X18zY2VmYVwiLFxuXHRcImNzc0hlYWRlclwiOiBcIm5hdmlnYXRpb25fY3NzSGVhZGVyX18xNmpNSlwiLFxuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTlwiLFxuXHRcImNzc05hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fY3NzTmF2aWdhdG9yX18xaXdqdFwiLFxuXHRcIm11aUJ1dHRvbkJhc2VSb290XCI6IFwibmF2aWdhdGlvbl9tdWlCdXR0b25CYXNlUm9vdF9fMzhNNC1cIixcblx0XCJtdWlMaXN0SXRlbVJvb3RcIjogXCJuYXZpZ2F0aW9uX211aUxpc3RJdGVtUm9vdF9fMlNZaG5cIixcblx0XCJtdWlMaXN0SXRlbUd1dHRlcnNcIjogXCJuYXZpZ2F0aW9uX211aUxpc3RJdGVtR3V0dGVyc19fUVpldElcIixcblx0XCJtdWlMaXN0SXRlbUJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbXVpTGlzdEl0ZW1CdXR0b25fXzM3NzJUXCIsXG5cdFwiY3NzTmF2aWdhdG9yQ29udGVudFwiOiBcIm5hdmlnYXRpb25fY3NzTmF2aWdhdG9yQ29udGVudF9fVFBydGdcIixcblx0XCJpY29uQnV0dG9uQ29udGVudFwiOiBcIm5hdmlnYXRpb25faWNvbkJ1dHRvbkNvbnRlbnRfXzNyQUVvXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcImhlYWQtdGl0bGVfVGl0bGVfXzNtd1hnXCIsXG5cdFwiYm9sZFwiOiBcImhlYWQtdGl0bGVfYm9sZF9fMTJzR3lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRpdGxlXCI6IFwidGV4dC10aXRsZV9UaXRsZV9fNktiOWhcIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX19wUzI4dVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTGluayIsImNuIiwibGlua0J1dHRvbiIsImNoaWxkcmVuIiwiaHJlZiIsInByb3BzIiwibGlua0NvbnRhaW5lciIsImxpbmtzIiwiZnJhbWVCdXR0b24iLCJib3JkZXIiLCJjbGFzc05hbWUiLCJiYXNlQnRuIiwiRnJhbWVCb3JkZXIiLCJtdWlCdXR0b25CYXNlUm9vdCIsIm11aUJ1dHRvblJvb3QiLCJtdWlCdXR0b25Db250YWluZWQiLCJjc3NCb3JkZXJCdXR0b24iLCJtdWlCdXR0b25Db250YWluZWRQcmltYXJ5IiwibXVpQnV0dG9uTGFiZWwiLCJidXR0b24iLCJDb21wIiwiSWNvbiIsIkljb25CdXR0b24iLCJtdWlJY29uQnV0dG9uUm9vdCIsImNzc0ljb25CdXR0b24iLCJjc3NJY29uQnV0dG9uQ29udGVudCIsIm11aUljb25CdXR0b25Db2xvckluaGVyaXQiLCJtdWlJY29uQnV0dG9uTGFiZWwiLCJtdWlTdmdJY29uUm9vdCIsIkhlYWRUaXRsZSIsIkZvb3RlclNpZGUiLCJGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJjb250ZW50IiwibWFpbkNvbnRhaW5lciIsImNvbnRhaW5lciIsImxlZnRTaWRlT2ZDb250YWluZXIiLCJJY29ucyIsImpvaW5UZXh0IiwiZm9vdGVyTWVudSIsImZvb3RlciIsImNvcHlUZXh0IiwiRHJvcERvd25NZW51IiwiVGV4dElucHV0IiwiTWVzc2FnZXNBcmVhIiwiQnV0dG9uIiwiQnVzaW5lc3NTaWduVXAiLCJmb3JtIiwiaGVhZGVycyIsIm11aUNvbnRhaW5lclJvb3QiLCJtdWlDb250YWluZXJNYXhXaWR0aFNtIiwibXVpVHlwb2dyYXBoeVJvb3QiLCJjc3NIZWFkZXIiLCJtdWlUeXBvZ3JhcGh5SDUiLCJjbm5TZWxlY3Rpb25JbnB1dCIsImNzc1NlbGVjdGlvbklucHV0Q29udGFpbmVyIiwiY3NzQ29udHJvbCIsIm1lc3NhZ2UiLCJidG4iLCJidG5UZXh0IiwiVGV4dFRpdGxlIiwiRnJhbWVCdXR0b24iLCJtdWlCdXR0b25PdXRsaW5lZCIsImNzc0J1dHRvbkNvbnRlbnQiLCJTdmdBcHBTdG9yZSIsIlN2Z0NoZWNrU3F1YXJlIiwiU3ZnRGlzY29yZCIsIlN2Z0Rvd25BcnJvdyIsIlN2Z0Ryb3BEb3duIiwiU3ZnRHJvcERvd27EsGNvbiIsIlN2Z0V0aExvZ28iLCJTdmdGYWNlYm9vayIsIlN2Z0ZpbmdlcnByaW50IiwiU3ZnR29vZ2xlUGxheVN0b3JlIiwiU3ZnSG9tZXBhZ2VPcHRpb24iLCJTdmdMaW5rZG4iLCJTdmdNYWlsIiwiU3ZnTWVkaWEiLCJTdmdNZXRhRGF0YSIsIlN2Z09wZW5zZWFMb2dvIiwiU3ZnUXJDb2RlIiwiU3ZnUmFyaWJsZUxvZ28iLCJTdmdTYXZpbmdzUGlnIiwiU3ZnU21hcnRDb250cmFjdMSwY29uIiwiU3ZnVHdpdHRlciIsIlN2Z1VwbG9hZCIsIlN2Z1ZlY3RvciIsIlN2Z1lvdXR1YmUiLCJkZWZhdWx0IiwiQXBwU3RvcmUiLCJDaGVja1NxdWFyZSIsIkRpc2NvcmQiLCJEb3duQXJyb3ciLCJEcm9wRG93bsSwY29uIiwiRHJvcERvd24iLCJFdGhMb2dvIiwiRmFjZWJvb2siLCJGaW5nZXJwcmludCIsIkdvb2dsZVBsYXlTdG9yZSIsIkhvbWVwYWdlT3B0aW9uIiwixLBjb25tb25zdHJDaGVja2JveDE0IiwixLBjb25tb25zdHJDaGVja2JveDYiLCLEsG5zdGFncmFtIiwiTGlua2RuIiwiTWFpbCIsIk1lZGlhIiwiTWV0YURhdGEiLCJPcGVuc2VhTG9nbyIsIlFyQ29kZSIsIlJhcmlibGVMb2dvIiwiU2F2aW5nc1BpZyIsIlNtYXJ0Q29udHJhY3TEsGNvbiIsIlR3aXR0ZXIiLCJVcGxvYWQiLCJWZWN0b3IiLCJZb3V0dWJlIiwiU3ZnxLBjb25tb25zdHJDaGVja2JveDE0IiwiU3ZnxLBjb25tb25zdHJDaGVja2JveDYiLCJTdmfEsG5zdGFncmFtIiwibWFrZU5GVE9wdGlvbiIsIkJVU0lORVNTIiwiYnVzaW5lc3MiLCJoZWFkZXIiLCJiaWciLCJtZWRpdW0iLCJzbWFsbCIsImNvbXAiLCJvcHRpb25zIiwibWFwIiwia2V5Iiwib3B0aW9uIiwidGl0bGUiLCJNZXNzYWdlSW5wdXQiLCJtdWlGb3JtQ29udHJvbFJvb3QiLCJtdWlGb3JtTGFiZWxSb290IiwibXVpSW5wdXRMYWJlbFJvb3QiLCJjc3NNZXNzYWdlIiwibXVpSW5wdXRGb3JtQ29udHJvbCIsIm11aUlucHV0TGFiZWxBbmltYXRlZCIsIm1lc3NhZ2VBcmVhIiwibXVpRm9ybUNvbnRyb2xGdWxsV2lkdGgiLCJtdWlJbnB1dExhYmVsRm9ybUNvbnRyb2wiLCJtdWlJbnB1dEJhc2VSb290IiwibXVpSW5wdXRSb290IiwibXVpSW5wdXRVbmRlcmxpbmUiLCJjc3NJbnB1dCIsIm11aUlucHV0QmFzZUZ1bGxXaWR0aCIsIm11aUlucHV0RnVsbFdpZHRoIiwibXVpSW5wdXRCYXNlRm9ybUNvbnRyb2wiLCJtdWlJbnB1dEJhc2VJbnB1dCIsIm11aUlucHV0SW5wdXQiLCJOYXZpZ2F0aW9uIiwiQnVzaW5lc3NGb3JtIiwiTGF5b3V0IiwibmF2aWdhdG9yIiwiTmF2aWdhdGlvbkxpbmsiLCJuYXYiLCJGT09URVJNRU5VIiwiRm9vdGVyTmF2aWdhdGlvbiIsIm1lbnUiLCJOYXYiLCJOYXZpZ2F0aW9uQnV0dG9uIiwiTUVOVSIsImZsYXQiLCJtdWlQYXBlclJvb3QiLCJtdWlBcHBCYXJSb290IiwibXVpQXBwQmFyUG9zaXRpb25BYnNvbHV0ZSIsIm11aUFwcEJhckNvbG9yRGVmYXVsdCIsIm11aVBhcGVyRWxldmF0aW9uIiwiY3NzTmF2aWdhdG9yIiwibXVpTGlzdEl0ZW1Sb290IiwiY3NzTmF2aWdhdG9yQ29udGVudCIsIm11aUxpc3RJdGVtR3V0dGVycyIsIm11aUxpc3RJdGVtQnV0dG9uIiwic3ViQnRuIiwiaWNvbkJ1dHRvbkNvbnRlbnQiLCJib2xkIiwic2l6ZSIsIm9wYWNpdHkiLCJUaXRsZSIsImZvbnRTaXplIiwiVEFCTEVUX1NJWkUiLCJERVNLVE9QX1NJWkUiLCJJTkZPIiwibWFyayIsImljb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJhcyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiZmluYWxseSIsImFzc2lnbiIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQnVzaW5lc3NTaWdudXAiXSwic291cmNlUm9vdCI6IiJ9