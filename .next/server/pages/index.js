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
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().FrameBorder), className]),
    type: "button",
    children: children
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
    lineNumber: 32,
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftSideOfContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().Icons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Twitter, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Facebook, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Youtube, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__["İnstagram"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Linkdn, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Mail, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.Discord, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().join),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().joinText),
            size: "12px",
            children: "Join the community of #ownable-NS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().copy),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyText),
            size: "12px",
            children: "Copyright \xA9 2021 Ownable-NS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightSideOfContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_navigation_footer__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
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
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        size: "18px",
        opacity: "0.8",
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
    className: (_frameButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().frameBtn),
    type: "button",
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().getStartedButton),
    border: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: (_getStartedButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText),
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
/* harmony export */   "DropDownİcon": () => (/* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "DropDown": () => (/* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "EthLogo": () => (/* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Facebook": () => (/* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Fingerprint": () => (/* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "GooglePlayStore": () => (/* reexport safe */ _GooglePlayStore__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "HomepageOption": () => (/* reexport safe */ _HomepageOption__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "İnstagram": () => (/* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Linkdn": () => (/* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "Mail": () => (/* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "Media": () => (/* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "MetaData": () => (/* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "OpenseaLogo": () => (/* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "QrCode": () => (/* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "RaribleLogo": () => (/* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "SavingsPig": () => (/* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "SmartContractİcon": () => (/* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "Twitter": () => (/* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_20__.default),
/* harmony export */   "Vector": () => (/* reexport safe */ _Vector__WEBPACK_IMPORTED_MODULE_21__.default),
/* harmony export */   "Youtube": () => (/* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_22__.default)
/* harmony export */ });
/* harmony import */ var _AppStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppStore */ "./components/icons/AppStore.js");
/* harmony import */ var _CheckSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckSquare */ "./components/icons/CheckSquare.js");
/* harmony import */ var _Discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discord */ "./components/icons/Discord.js");
/* harmony import */ var _DropDown_con__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDownİcon */ "./components/icons/DropDownİcon.js");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDown */ "./components/icons/DropDown.js");
/* harmony import */ var _EthLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EthLogo */ "./components/icons/EthLogo.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Facebook */ "./components/icons/Facebook.js");
/* harmony import */ var _Fingerprint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fingerprint */ "./components/icons/Fingerprint.js");
/* harmony import */ var _GooglePlayStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GooglePlayStore */ "./components/icons/GooglePlayStore.js");
/* harmony import */ var _HomepageOption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomepageOption */ "./components/icons/HomepageOption.js");
/* harmony import */ var _nstagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./İnstagram */ "./components/icons/İnstagram.js");
/* harmony import */ var _Linkdn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Linkdn */ "./components/icons/Linkdn.js");
/* harmony import */ var _Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Mail */ "./components/icons/Mail.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Media */ "./components/icons/Media.js");
/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MetaData */ "./components/icons/MetaData.js");
/* harmony import */ var _OpenseaLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OpenseaLogo */ "./components/icons/OpenseaLogo.js");
/* harmony import */ var _QrCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./QrCode */ "./components/icons/QrCode.js");
/* harmony import */ var _RaribleLogo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RaribleLogo */ "./components/icons/RaribleLogo.js");
/* harmony import */ var _SavingsPig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SavingsPig */ "./components/icons/SavingsPig.js");
/* harmony import */ var _SmartContract_con__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SmartContractİcon */ "./components/icons/SmartContractİcon.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Twitter */ "./components/icons/Twitter.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Vector */ "./components/icons/Vector.js");
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Youtube */ "./components/icons/Youtube.js");
























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
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/HomePage/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant */ "./constant/index.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../row/exhibitionSide */ "./components/row/exhibitionSide.js");
/* harmony import */ var _row_quotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../row/quotation */ "./components/row/quotation.js");
/* harmony import */ var _row_reasonSide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../row/reasonSide */ "./components/row/reasonSide.js");
/* harmony import */ var _row_businessSide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../row/businessSide */ "./components/row/businessSide.js");
/* harmony import */ var _row_getStarted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../row/getStarted */ "./components/row/getStarted.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../footer/index */ "./components/footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\HomePage\\index.js";













function Layout() {
  const size = (0,_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().layout),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        flat: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_reasonSide__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_businessSide__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().getStarted),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_getStarted__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().sizing),
        children: JSON.stringify(size)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_footer_index__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 12
  }, this);
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
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/navigation/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function NavigationButton(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav)
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationButton);

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
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.css */ "./components/navigation/footer.module.css");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\footer.js";




const MENU = [{
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

function FooterNavigation() {
  return MENU.map(menu => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().Nav),
      size: "14px",
      children: menu.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";









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

function Navigation({
  flat = false
}) {
  return (
    /*#__PURE__*/

    /* Navigator */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navigator),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().mark)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navBtn),
        children: MENU.map(menu => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().subBtn),
            href: menu.href,
            children: !flat && menu.title
          }, menu.key, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().loginButton),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_6__.HomepageOption, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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




function Photo({
  src = "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fjpierce%2Fj-pierce-promo-black-01.png?alt=media&token=5cf0cf0f-31fa-4ef2-9f21-eaa13659567b",
  alt,
  width = 470,
  height = 292
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().photo),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),
      style: {
        width: width,
        height: height
      },
      src: src,
      alt: alt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);

/***/ }),

/***/ "./components/row/businessSide.js":
/*!****************************************!*\
  !*** ./components/row/businessSide.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _businessSide_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./businessSide.module.css */ "./components/row/businessSide.module.css");
/* harmony import */ var _businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\businessSide.js";





function BusinessSide() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default().businessContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: (_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default().businessText),
      size: "33px",
      bold: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default().Span),
        children: "Ownable-NS "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), "for Business"]
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessSide);

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







function Exhibition({
  Header,
  Text,
  Owner,
  src = "https://ownerfy.com/jpandfriends"
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("article", {
    className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().advert),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().advertHeader),
        size: "33px",
        bold: true,
        children: "CA$H Cows"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
          size: "22px",
          children: "Now Minting: Chic-A-Dees,First NFTs to Generate EGGS Tokens"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_frame_mintButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintButton),
        children: "MINT CHIC-A-DEE NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().photoExhibition),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().photos),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fchicadees%2Fcashcows.png?alt=media&token=60ef4aa7-42c9-47de-82a6-b719953749c3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
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
            lineNumber: 40,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            size: "12px",
            children: "J.Pierce and Friends - Hand Painted and Signed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
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
/* harmony import */ var _Photos_suitcase_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Photos/suitcase.jpg */ "./Photos/suitcase.jpg");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photo */ "./components/photo/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
              lineNumber: 18,
              columnNumber: 58
            }, this), "authenticate, add value and prevent ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 57
            }, this), "counterfitting of goods."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStartedMainText),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
            size: "20px",
            opacity: "0.8",
            children: "Create NFTs for your business or customer at scale"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
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
              lineNumber: 31,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImageSide),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_photo__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: (_getStarted_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image),
          src: "https://ownerfy.com/img/home/suitcase.jpg",
          width: "345px",
          height: "207.986"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
/* harmony import */ var _quotation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotation.module.css */ "./components/row/quotation.module.css");
/* harmony import */ var _quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_quotation_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\row\\quotation.js";







function Quotation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quo),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoHeader),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoHeaderText),
        size: "26px",
        bold: true,
        children: ["Trade ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().Span),
          children: "Ownable-NS "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 24
        }, this), "created on marketplace platforms."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoMiddle),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoMiddleText),
        size: "16px",
        opacity: "0.6",
        bold: true,
        children: "Trade Ownable-NS created on marketplace platforms."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoFooter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoFooterText),
        size: "16px",
        opacity: "0.6",
        children: ["You,the creator, own your private keys, therefore own your assets and are free to,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 103
        }, this), "transfer, sell or trade NFTs anywhere on the digital marketplace."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoIcons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.RaribleLogo, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoRarible)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.OpenseaLogo, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoOpensea)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
/* harmony import */ var _reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reasonSide.module.css */ "./components/row/reasonSide.module.css");
/* harmony import */ var _reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _photo_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo/index */ "./components/photo/index.js");
/* harmony import */ var _form_reasonSide_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/reasonSide/index */ "./components/form/reasonSide/index.js");
/* harmony import */ var _Photos_reasonSidePhoto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Photos/reasonSidePhoto.png */ "./Photos/reasonSidePhoto.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_form_reasonSide_index__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
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
            className: (_reasonSide_module_css__WEBPACK_IMPORTED_MODULE_6___default().photo),
            src: "https://ownerfy.com/img/home/valuables.svg",
            width: "831.997px",
            height: "138.993px",
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
          lineNumber: 39,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
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
/* harmony export */   "INFO": () => (/* binding */ INFO)
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

/***/ "./Photos/suitcase.jpg":
/*!*****************************!*\
  !*** ./Photos/suitcase.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/Photos/suitcase.ddf61607d1ac8d25ef659d4c8a15b8b9.jpg","height":418,"width":694,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2FPhotos%2Fsuitcase.ddf61607d1ac8d25ef659d4c8a15b8b9.jpg&w=8&q=70"});

/***/ }),

/***/ "./components/button/base/style.module.css":
/*!*************************************************!*\
  !*** ./components/button/base/style.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"baseBtn": "style_baseBtn__25y_r",
	"FrameBorder": "style_FrameBorder__1Hp63",
	"linkContainer": "style_linkContainer__2aJSj",
	"links": "style_links__2kQHL"
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
	"leftSideOfContainer": "style_leftSideOfContainer__3mddl",
	"Icons": "style_Icons__1yM_T",
	"copy": "style_copy__1RHHs",
	"copyText": "style_copyText__29REo",
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
	"frameBtn": "frameButton_frameBtn__AmQ2u"
};


/***/ }),

/***/ "./components/frame/getStartedButton.module.css":
/*!******************************************************!*\
  !*** ./components/frame/getStartedButton.module.css ***!
  \******************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"getStartedButton": "getStartedButton_getStartedButton__16l0h",
	"btnText": "getStartedButton_btnText__3Aiig"
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
	"layout": "style_layout__1UX6O",
	"getStarted": "style_getStarted__j7V-p"
};


/***/ }),

/***/ "./components/navigation/button.module.css":
/*!*************************************************!*\
  !*** ./components/navigation/button.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {

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
	"navigator": "navigation_navigator__2CchN",
	"navBtn": "navigation_navBtn__2Irah",
	"navItem": "navigation_navItem__20uhs",
	"mark": "navigation_mark__3GFaM",
	"loginButton": "navigation_loginButton__2eAZM"
};


/***/ }),

/***/ "./components/photo/index.module.css":
/*!*******************************************!*\
  !*** ./components/photo/index.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"photo": "photo_photo__3OnmP",
	"img": "photo_img__1nYXD"
};


/***/ }),

/***/ "./components/row/businessSide.module.css":
/*!************************************************!*\
  !*** ./components/row/businessSide.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"businessContainer": "businessSide_businessContainer__2Kxdg",
	"businessText": "businessSide_businessText__3czhF",
	"Span": "businessSide_Span__2XyFE"
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
	"advert": "exhibitionSide_advert__M4tyZ",
	"borderLine": "exhibitionSide_borderLine__1WjtA",
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
	"getStartedTextSide": "getStarted_getStartedTextSide__1mApo",
	"getStartedHeaderText": "getStarted_getStartedHeaderText__i-2zZ",
	"Span": "getStarted_Span__3xieP",
	"ImageSide": "getStarted_ImageSide__1YYtG"
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
	"quoMiddleText": "quotation_quoMiddleText__3g59f",
	"quoFooterText": "quotation_quoFooterText__1N3sf",
	"quoOpensea": "quotation_quoOpensea__XpgaI",
	"Span": "quotation_Span__2jHjL",
	"quoRarible": "quotation_quoRarible__3sqe0"
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
	"reasonHeader": "reasonSide_reasonHeader__2rQNr",
	"Span": "reasonSide_Span__1RpOt",
	"Line": "reasonSide_Line__32vQu",
	"middleContainer": "reasonSide_middleContainer__3jc65",
	"reasonTextSide": "reasonSide_reasonTextSide__1NdZT",
	"reastImageSide": "reasonSide_reastImageSide__mrzkX",
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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZm9ybS9yZWFzb25TaWRlL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2dldFN0YXJ0ZWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvbWludEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9DaGVja1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9EaXNjb3JkLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duxLBjb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRXRoTG9nby5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9GYWNlYm9vay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9GaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Hb29nbGVQbGF5U3RvcmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvSG9tZXBhZ2VPcHRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTGlua2RuLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01haWwuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWV0YURhdGEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvT3BlbnNlYUxvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvUXJDb2RlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1JhcmlibGVMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1NhdmluZ3NQaWcuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvU21hcnRDb250cmFjdMSwY29uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1R3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvVmVjdG9yLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBuc3RhZ3JhbS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Bob3RvL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9idXNpbmVzc1NpZGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L2V4aGliaXRpb25TaWRlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9nZXRTdGFydGVkLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9xdW90YXRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L3JlYXNvblNpZGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29uc3RhbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2hvb2svdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9QaG90b3MvcmVhc29uU2lkZVBob3RvLnBuZyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vUGhvdG9zL3N1aXRjYXNlLmpwZyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvb3Rlci9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvcm0vcmVhc29uU2lkZS9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZ2V0U3RhcnRlZEJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL21pbnRCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2Uvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcGhvdG8vaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvYnVzaW5lc3NTaWRlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L2dldFN0YXJ0ZWQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvcXVvdGF0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L3JlYXNvblNpZGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L2hlYWQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L3RleHQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2lnbm9yZWR8QzpcXFVzZXJzXFxtbXVjYVxcRG9jdW1lbnRzXFxHaXRIdWJcXE93bmFibGUtTkZULVNlcnZpY2VcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmZ1bmN0aW9uIGxpbmtCdXR0b24gKHsgY2hpbGRyZW4sIGhyZWYsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8YSAgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9IHByb3BzPiB7Y2hpbGRyZW59IDwvYT5cclxuICAgICAgICA8L0xpbms+ICBcclxuICAgICkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyYW1lQnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICBjb25zdCBDb21wID0gYm9yZGVyID8gZnJhbWVCdXR0b24gOiBsaW5rQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29tcCAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmJhc2VCdG4gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyICYmIHN0eWxlcy5GcmFtZUJvcmRlcixcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICBdKX0gXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn0gXHJcbiAgICAgICAgICAgIDwvQ29tcD5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblxyXG5cclxuLypcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIGNuIHN0YW5kIGZvciBjbGFzc25hbWVzOiAnQ2xhc3NuYW1lcycgIGlzIHByZXZlbnQgY2xhc3Mgb3ZlcndyaXRlLiBJdCBjb21lcyBtb3JlIHRoYW4gb25lIGNsYXNzIGludG8gZnVuY3Rpb24sIGl0J3MgcmVhc29uIGFib3V0IGNvbmZsaWN0LiBcclxuICAgIGJvcmRlcjogU29tZSBidXR0b24gaGFzIGJvcmRlciwgYnV0IHNvbWUgaXQgaGFzbid0LiBXaGVuIGJ1dHRvbiBoYXMgYm9yZGVyLCBib3JkZXIgYXR0cmlidXRlIHdpbGwgaGF2ZSBiZWVuICBhY3RpdmF0ZWQuIFxyXG4gICAgY2hpbGRyZW46IENvbnRlbnQsIHdoaWNoIGluY2x1ZGUgd2l0aGluIGVsZW1lbnQuXHJcbiAgICAuLi5wcm9wczogV2hhdCBpZiBBbnkgcHJvcGVydGllcyBpcyBwYXNzZWQgaW50byBmdW5jdGlvbiwgRnVuY3Rpb24gY2FuIGNhdGNoLlxyXG5cclxuICAgIC0tPiBXZSBoYXZlIG9wdGlvbiB0aGF0J3MgaXMgZGl2aWRlZCBpbnRvIHR3byBvcHRpb24uIE9uZSBPZiB0aGVtIGhhcyBpbWFnZSBhbmQgdGV4dCwgb3RoZXIgb25lIGhhcyBqdXN0IHRleHQuXHJcbiAgICAtLT4gQmFzZSBCdXR0b24gaGFzIGp1c3QgdGV4dC5cclxuICAgIC0tPiBCYXNlIEJ1dHRvbiBpcyBkaXZpZGVkIGludG8gdHdvIHZhcmlhbnQgaW4gaXRzZWxmLiBPbmUgT2YgdGhlbSBoYXMgYm9yZGVycywgb3RoZXIgb25lIGhhc24ndC4gV2hlbiBidXR0b24gd2FzIGNhbGxlZCB3aXRoIHNlbmRlZCB3aXRoIHBhcmFtZXRlciBuYW1lZCBib3JkZXIsIEJ1dHRvbiB3aWxsIGhhdmUgXHJcbiAgICBiZWVuIGJvcmRlci4gXHJcbiovXHJcblxyXG4vKiBcclxuLy8gVE8gRE8gTGlzdFxyXG5bWF0gIGZyYW1lIGJ1dHRvbiAvIFRyYW5zcGFyZW50IC0gY29sb3JcclxuXHJcbiovXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tICcuLi9uYXZpZ2F0aW9uL2Zvb3RlcidcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8qIENvbnRhaW5lciAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgey8qIExlZnQgU2lkZSBPZiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGVPZkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgT2YgRm9vdGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JY29uc30+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5Ud2l0dGVyLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLkZhY2Vib29rLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLllvdXR1YmUgLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLsSwbnN0YWdyYW0vPlxyXG4gICAgICAgICAgICAgICAgPEljb24uTGlua2RuIC8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5NYWlsLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLkRpc2NvcmQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogVGV4dCBmcm9tIGxlZnQgc2lkZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9pbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5qb2luVGV4dH0gc2l6ZT0nMTJweCc+Sm9pbiB0aGUgY29tbXVuaXR5IG9mICNvd25hYmxlLU5TPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDb3B5IGZyb20gbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlUZXh0fSBzaXplPScxMnB4Jz5Db3B5cmlnaHQgwqkgMjAyMSBPd25hYmxlLU5TPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0b3IgZnJvbSByaWdodCBzaWRlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0U2lkZU9mQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0ICogYXMgSWNvbiBmcm9tICcuLi8uLi9pY29ucydcclxuaW1wb3J0IHtJTkZPfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi8uLi90ZXh0L2hlYWQtdGl0bGUnXHJcblxyXG5mdW5jdGlvbiBSZWFzb25TaWRlRm9ybSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBJTkZPLm1hcCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvblNpZGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJY29uIFNpZGUqL31cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbi5DaGVja1NxdWFyZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFJlYXNvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMThweCcgb3BhY2l0eT0nMC44Jz57aW5mby50aXRsZX08L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICkgIFxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYXNvblNpZGVGb3JtXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mcmFtZUJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mcmFtZUJ0bn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPntjaGlsZHJlbn08L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFtZUJ1dHRvblxyXG5cclxuLyogXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICA8VGV4dFRpdGxlLz46IEl0J3MgdmFyeSBvZiB0ZXh0LCBJdCBqdXN0IGhhcyBzb21lIHNwZWNpZmljIGF0dHJpYnV0ZSBzdWNoIGFzIDE2IHB4IGZvbnQgc2l6ZSwgYW5kIGJvbGQgZm9udCB3aWdodC5cclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nZXRTdGFydGVkQnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Jhc2UvaW5kZXgnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gR2V0U3RhcnRlZEJ1dHRvbih7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWRCdXR0b259IFxyXG4gICAgICAgIGJvcmRlcj5cclxuICAgICAgICAgICAgPEhlYWRUaXRsZSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuVGV4dH0gXHJcbiAgICAgICAgICAgIGJvbGQ+XHJcbiAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgICA8L0hlYWRUaXRsZT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0U3RhcnRlZEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWludEJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9iYXNlL2luZGV4J1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuXHJcblxyXG5mdW5jdGlvbiBNaW50QnV0dG9uICh7IGNoaWxkcmVuLCBjbGFzc05hbWV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiAgY2xhc3NOYW1lPXtjbihzdHlsZXMubWludEJ1dHRvbiwgY2xhc3NOYW1lKX0gYm9yZGVyPlxyXG4gICAgICAgICAgICA8VGV4dFRpdGxlIGJvbGQ+e2NoaWxkcmVufTwvVGV4dFRpdGxlPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgICApfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcHBTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjYXBwLXN0b3JlX3N2Z19fY2xpcDBfNTE6NTAxKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjMxLjQ2MSA3MS4wOUg4LjQwN0MzLjc3MiA3MS4wOSAwIDY3LjMwOCAwIDYyLjY3OFY4LjRDMCAzLjc2OCAzLjc3MiAwIDguNDA3IDBoMjIzLjA1NEMyMzYuMDk0IDAgMjQwIDMuNzY4IDI0MCA4LjR2NTQuMjc4YzAgNC42My0zLjkwNiA4LjQxMi04LjUzOSA4LjQxMnpcIlxuICAgICAgICAgIGZpbGw9XCIjQTZBNkE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIzOC4yNzkgNjIuNjhhNi44MDggNi44MDggMCAwMS02LjgxNiA2LjgwN0g4LjQwN2MtMy43NjcgMC02LjgyNS0zLjA0Ni02LjgyNS02LjgwN1Y4LjM5OGMwLTMuNzYgMy4wNTgtNi44MTYgNi44MjUtNi44MTZoMjIzLjA1NGE2LjgxNSA2LjgxNSAwIDAxNi44MTYgNi44MTZsLjAwMiA1NC4yODJ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01My41NiAzNS4xNjFjLS4wNS01LjcyOCA0LjY5Mi04LjUxNSA0LjkxLTguNjQ0LTIuNjg3LTMuOTE2LTYuODUtNC40NS04LjMxNC00LjQ5My0zLjQ5Ni0uMzY4LTYuODg5IDIuMDkxLTguNjcgMi4wOTEtMS44MTcgMC00LjU2LTIuMDU2LTcuNTE2LTEuOTk1LTMuODA1LjA1OC03LjM2NCAyLjI2LTkuMzE2IDUuNjgtNC4wMjggNi45NzItMS4wMjQgMTcuMjE4IDIuODM2IDIyLjg1MyAxLjkzIDIuNzYgNC4xODYgNS44NDIgNy4xNCA1LjczNCAyLjg4OC0uMTIgMy45NjctMS44NDEgNy40NTMtMS44NDEgMy40NTUgMCA0LjQ2OCAxLjg0IDcuNDggMS43NzIgMy4xLS4wNSA1LjA1Mi0yLjc3MyA2LjkxNS01LjU1OCAyLjIzMS0zLjE2MyAzLjEyNy02LjI3OSAzLjE2My02LjQzOS0uMDczLS4wMjUtNi4wMjEtMi4yOTQtNi4wOC05LjE2ek00Ny44NzIgMTguMzE2YzEuNTU0LTEuOTQyIDIuNjE3LTQuNTg1IDIuMzIyLTcuMjY3LTIuMjUuMS01LjA2MiAxLjU1NS02LjY4MSAzLjQ1NS0xLjQzMyAxLjY3NC0yLjcxMyA0LjQxOC0yLjM4MiA2Ljk5OSAyLjUyNi4xODggNS4xMi0xLjI3NCA2Ljc0LTMuMTg3ek05NS4zNjkgNTUuOTloLTQuMDM3bC0yLjIxMi02Ljk0N2gtNy42ODdsLTIuMTA3IDYuOTQ3aC0zLjkzbDcuNjE2LTIzLjY1MWg0LjcwNGw3LjY1MyAyMy42NTF6bS02LjkxNi05Ljg2MWwtMi02LjE3NmMtLjIxMS0uNjMxLS42MDgtMi4xMTctMS4xOTMtNC40NTZoLS4wN2ExNzEuNzY2IDE3MS43NjYgMCAwMS0xLjEyNCA0LjQ1Nkw4Mi4xIDQ2LjEyOGg2LjM1MnpNMTE0Ljk1NSA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1MiA2Ljg3Ni0xLjQwNSAxLjQ5OC0zLjE0OSAyLjI0Ni01LjIzMSAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDQtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0LTUuNjE0aDMuMzMzbC4yMTEgMi43MDNoLjA3MWMxLjI2NC0yLjAzNyAzLjE4Mi0zLjA1MyA1Ljc1Ny0zLjA1MyAyLjAxMiAwIDMuNjkyLjc5NCA1LjAzNiAyLjM4NSAxLjM0OCAxLjU5MiAyLjAyIDMuNjg2IDIuMDIgNi4yODN6bS0zLjg2Mi4xMzhjMC0xLjY2LS4zNzMtMy4wMjgtMS4xMjMtNC4xMDUtLjgyLTEuMTI0LTEuOTItMS42ODUtMy4zLTEuNjg1LS45MzUgMC0xLjc4NS4zMTMtMi41NDQuOTMtLjc2MS42MjEtMS4yNTggMS40MzQtMS40OTEgMi40NC0uMTE4LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zOCAyLjI4OCAxLjE0MSAzLjE0Mi43NjEuODU1IDEuNzQ5IDEuMjgyIDIuOTY1IDEuMjgyIDEuNDI4IDAgMi41MzktLjU1MSAzLjMzNC0xLjY1Ljc5Ni0xLjEgMS4xOTQtMi41NSAxLjE5NC00LjM1MnpNMTM0LjU3NiA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1NCA2Ljg3Ni0xLjQwMiAxLjQ5OC0zLjE0NiAyLjI0Ni01LjIyOCAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDMtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0MS01LjYxNGgzLjMzNGwuMjExIDIuNzAzaC4wNzFjMS4yNjMtMi4wMzcgMy4xODEtMy4wNTMgNS43NTctMy4wNTMgMi4wMTEgMCAzLjY5MS43OTQgNS4wMzggMi4zODUgMS4zNDIgMS41OTIgMi4wMTYgMy42ODYgMi4wMTYgNi4yODN6bS0zLjg2MS4xMzhjMC0xLjY2LS4zNzUtMy4wMjgtMS4xMjYtNC4xMDUtLjgxOS0xLjEyNC0xLjkxNi0xLjY4NS0zLjI5Ny0xLjY4NS0uOTM3IDAtMS43ODUuMzEzLTIuNTQ2LjkzLS43NjEuNjIxLTEuMjU3IDEuNDM0LTEuNDkgMi40NC0uMTE1LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zODEgMi4yODggMS4xMzggMy4xNDIuNzYxLjg1MyAxLjc0OSAxLjI4MiAyLjk2OSAxLjI4MiAxLjQyNyAwIDIuNTM4LS41NTEgMy4zMzMtMS42NS43OTctMS4xIDEuMTk1LTIuNTUgMS4xOTUtNC4zNTJ6TTE1Ni41MTQgNDkuMzU4YzAgMi4wMTItLjY5OSAzLjY0OS0yLjEwMSA0LjkxMi0xLjU0MiAxLjM4MS0zLjY4OCAyLjA3LTYuNDQ1IDIuMDctMi41NDYgMC00LjU4Ny0uNDktNi4xMzEtMS40NzNsLjg3OC0zLjE1OGMxLjY2NCAxLjAwNiAzLjQ5IDEuNTEgNS40NzkgMS41MSAxLjQyNyAwIDIuNTM5LS4zMjMgMy4zMzctLjk2Ni43OTQtLjY0MyAxLjE5MS0xLjUwNyAxLjE5MS0yLjU4NCAwLS45Ni0uMzI3LTEuNzY4LS45ODMtMi40MjQtLjY1My0uNjU2LTEuNzQyLTEuMjY2LTMuMjY0LTEuODMtNC4xNDItMS41NDQtNi4yMTItMy44MDYtNi4yMTItNi43ODEgMC0xLjk0NC43MjYtMy41MzkgMi4xNzgtNC43OCAxLjQ0Ny0xLjI0MSAzLjM3OC0xLjg2MiA1Ljc5Mi0xLjg2MiAyLjE1MyAwIDMuOTQxLjM3NSA1LjM2OSAxLjEyM2wtLjk0OCAzLjA5Yy0xLjMzMy0uNzI2LTIuODQxLTEuMDg4LTQuNTI4LTEuMDg4LTEuMzMzIDAtMi4zNzUuMzI5LTMuMTIxLjk4My0uNjMyLjU4NC0uOTQ4IDEuMjk3LS45NDggMi4xNDEgMCAuOTM1LjM2MSAxLjcwOCAxLjA4NiAyLjMxNi42MzEuNTYxIDEuNzc4IDEuMTcgMy40NDIgMS44MjUgMi4wMzYuODIgMy41MzEgMS43NzcgNC40OTIgMi44NzYuOTU5IDEuMDk0IDEuNDM3IDIuNDY1IDEuNDM3IDQuMXpNMTY5LjA0NSA0MS43OGgtNC4xNzd2OC4yOGMwIDIuMTA2LjczNiAzLjE1OCAyLjIxMSAzLjE1OC42NzcgMCAxLjIzOS0uMDU5IDEuNjg0LS4xNzZsLjEwNSAyLjg3N2MtLjc0Ny4yOC0xLjczLjQyLTIuOTQ4LjQyLTEuNDk3IDAtMi42NjctLjQ1Ny0zLjUxMS0xLjM2OS0uODQxLS45MTMtMS4yNjQtMi40NDUtMS4yNjQtNC41OTd2LTguNTk3aC0yLjQ4OXYtMi44NDRoMi40ODlWMzUuODFsMy43MjMtMS4xMjN2NC4yNDVoNC4xNzd2Mi44NDh6TTE4Ny44OTUgNDcuMzIzYzAgMi42MjEtLjc1IDQuNzc0LTIuMjQ3IDYuNDU3LTEuNTcgMS43MzMtMy42NTMgMi41OTYtNi4yNTEgMi41OTYtMi41MDMgMC00LjQ5Ni0uODMtNS45ODItMi40OS0xLjQ4Ni0xLjY2LTIuMjI5LTMuNzU1LTIuMjI5LTYuMjggMC0yLjY0My43NjQtNC44MDggMi4yOTgtNi40OTEgMS41MzEtMS42ODUgMy41OTctMi41MjcgNi4xOTQtMi41MjcgMi41MDMgMCA0LjUxOC44MyA2LjAzOCAyLjQ5MiAxLjQ1NCAxLjYxMSAyLjE3OSAzLjY5MyAyLjE3OSA2LjI0M3ptLTMuOTMyLjEyM2MwLTEuNTczLS4zMzYtMi45MjItMS4wMTctNC4wNDctLjc5NS0xLjM2Mi0xLjkzMS0yLjA0LTMuNDAzLTIuMDQtMS41MjMgMC0yLjY4MS42OC0zLjQ3NSAyLjA0LS42ODEgMS4xMjctMS4wMTcgMi40OTctMS4wMTcgNC4xMTggMCAxLjU3Mi4zMzYgMi45MjEgMS4wMTcgNC4wNDUuODE5IDEuMzYxIDEuOTY0IDIuMDQgMy40NDEgMi4wNCAxLjQ0NyAwIDIuNTgzLS42OTMgMy40MDMtMi4wNzYuNjk5LTEuMTQ2IDEuMDUxLTIuNTEgMS4wNTEtNC4wOHpNMjAwLjIxNSA0Mi4yNjhhNi41OCA2LjU4IDAgMDAtMS4xOTQtLjEwNWMtMS4zMzQgMC0yLjM2NS41MDMtMy4wOSAxLjUxMS0uNjMxLjg4OS0uOTQ4IDIuMDEyLS45NDggMy4zNjh2OC45NDhoLTMuNzg4bC4wMzUtMTEuNjgzYTkyLjkxIDkyLjkxIDAgMDAtLjE0Mi01LjM3aDMuMzAxbC4xMzkgMy4yNjRoLjEwNWMuNC0xLjEyMiAxLjAzMS0yLjAyNSAxLjg5NS0yLjcwMi44NDUtLjYxIDEuNzU3LS45MTMgMi43NC0uOTEzLjM1IDAgLjY2Ni4wMjUuOTQ3LjA3djMuNjEyek0yMTcuMTY2IDQ2LjY1NmMwIC42OC0uMDQ0IDEuMjUyLS4xMzggMS43MTloLTExLjM3MWMuMDQ0IDEuNjg1LjU5NCAyLjk3MyAxLjY1IDMuODYyLjk1OC43OTQgMi4xOTcgMS4xOTIgMy43MTkgMS4xOTIgMS42ODMgMCAzLjIxOS0uMjY4IDQuNjAxLS44MDZsLjU5MyAyLjYzYy0xLjYxNC43MDQtMy41MiAxLjA1NC01LjcxOSAxLjA1NC0yLjY0NSAwLTQuNzIxLS43NzktNi4yMzMtMi4zMzQtMS41MDctMS41NTUtMi4yNjMtMy42NDMtMi4yNjMtNi4yNjMgMC0yLjU3MS43MDMtNC43MTMgMi4xMDktNi40MiAxLjQ3Mi0xLjgyNCAzLjQ2MS0yLjczNiA1Ljk2NC0yLjczNiAyLjQ1OSAwIDQuMzIuOTEyIDUuNTg0IDIuNzM1IDEuMDAxIDEuNDQ5IDEuNTA0IDMuMjQgMS41MDQgNS4zNjd6bS0zLjYxNC0uOTgyYy4wMjUtMS4xMjQtLjIyMi0yLjA5NC0uNzM2LTIuOTEzLS42NTYtMS4wNTQtMS42NjQtMS41OC0zLjAyLTEuNTgtMS4yNCAwLTIuMjQ4LjUxMy0zLjAxNyAxLjU0NC0uNjMxLjgyLTEuMDA3IDEuODAyLTEuMTIyIDIuOTQ3aDcuODk1di4wMDJ6TTg3LjIgMTcuNzg5YzAgMi4wOTEtLjYyNyAzLjY2Ni0xLjg4IDQuNzIzLTEuMTYyLjk3Ni0yLjgxMSAxLjQ2NS00Ljk0OCAxLjQ2NS0xLjA2IDAtMS45NjctLjA0Ni0yLjcyNi0uMTM5di0xMS40M2MuOTktLjE2IDIuMDU3LS4yNCAzLjIxLS4yNCAyLjAzNSAwIDMuNTY5LjQ0MiA0LjYwNCAxLjMyNyAxLjE1OSAxIDEuNzQgMi40MzEgMS43NCA0LjI5NHptLTEuOTY0LjA1MWMwLTEuMzU2LS4zNi0yLjM5Ni0xLjA3OC0zLjEyLS43MTgtLjcyNC0xLjc2Ny0xLjA4Ny0zLjE0OC0xLjA4Ny0uNTg3IDAtMS4wODYuMDQtMS41LjEyMXY4LjY5Yy4yMjkuMDM1LjY0OC4wNSAxLjI1OC4wNSAxLjQyNiAwIDIuNTI2LS4zOTYgMy4zMDEtMS4xODguNzc1LS43OTMgMS4xNjctMS45NDggMS4xNjctMy40NjZ6TTk3LjYxNiAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk0IDEuMjc2LTMuMDcgMS4yNzYtMS4yMyAwLTIuMjEtLjQwNy0yLjk0LTEuMjI0LS43My0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDMtMS4yNCAxLjIzIDAgMi4yMi40MDYgMi45NjggMS4yMjIuNzEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45MzMuMDZjMC0uNzczLS4xNjctMS40MzYtLjQ5OS0xLjk4OS0uMzkxLS42NjgtLjk0OC0xLjAwMi0xLjY3MS0xLjAwMi0uNzQ5IDAtMS4zMTguMzM0LTEuNzA5IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjggMS40MzYuNSAxLjk4OC40MDQuNjY5Ljk2NiAxLjAwMyAxLjY5MSAxLjAwMy43MTEgMCAxLjI3LS4zNCAxLjY3MS0xLjAyLjM0NS0uNTY0LjUxNy0xLjIzMi41MTctMi4wMDV6TTExMS41ODIgMTUuNDk2bC0yLjYyMiA4LjM3OGgtMS43MDdsLTEuMDg2LTMuNjM4YTI3LjU5NSAyNy41OTUgMCAwMS0uNjc0LTIuNzA3aC0uMDMzYy0uMTYyLjkyLS4zODYgMS44MjItLjY3NCAyLjcwN2wtMS4xNTQgMy42MzhoLTEuNzI2bC0yLjQ2Ni04LjM3OGgxLjkxNWwuOTQ3IDMuOTgzYy4yMy45NDIuNDE4IDEuODQuNTY5IDIuNjg5aC4wMzRhMjkuOCAyOS44IDAgMDEuNjkyLTIuNjcybDEuMTg5LTMuOTk4aDEuNTE4bDEuMTQgMy45MTNjLjI3NS45NTQuNDk5IDEuODczLjY3MiAyLjc1OGguMDUxYy4xMjYtLjg2MS4zMTctMS43OC41NjktMi43NThsMS4wMTctMy45MTNoMS44Mjl2LS4wMDJ6TTEyMS4yNDEgMjMuODc0aC0xLjg2M3YtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjg5LTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0Ni42MWEyLjE2MyAyLjE2MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjNWMTcuODljMC0uNzM2LS4wMjMtMS41MzQtLjA2OC0yLjM5OGgxLjYzN2wuMDg4IDEuMzFoLjA1MWMuMjE3LS40MDcuNTQxLS43NDMuOTY1LTEuMDExYTMuMTUyIDMuMTUyIDAgMDExLjY4OS0uNDcxYy43ODMgMCAxLjQzMy4yNTIgMS45NTEuNzU5LjY0My42Mi45NjUgMS41NDYuOTY1IDIuNzc2djUuMDE5ek0xMjYuMzc5IDIzLjg3NGgtMS44NjJWMTEuNjUyaDEuODYydjEyLjIyMnpNMTM3LjM0OCAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk2IDEuMjc2LTMuMDcxIDEuMjc2LTEuMjMyIDAtMi4yMTEtLjQwNy0yLjk0LTEuMjI0LS43MjktLjgxNi0xLjA5My0xLjg0NS0xLjA5My0zLjA4NiAwLTEuMjk3LjM3NS0yLjM2MiAxLjEyOC0zLjE4OC43NTQtLjgyNyAxLjc2OC0xLjI0IDMuMDQyLTEuMjQgMS4yMzIgMCAyLjIxOS40MDYgMi45NjkgMS4yMjIuNzExLjc5MyAxLjA2OSAxLjgxNiAxLjA2OSAzLjA2OHptLTEuOTM1LjA2YzAtLjc3My0uMTY3LTEuNDM2LS40OTktMS45ODktLjM5LS42NjgtLjk0OC0xLjAwMi0xLjY3LTEuMDAyLS43NSAwLTEuMzE5LjMzNC0xLjcwOCAxLjAwMi0uMzM0LjU1My0uNSAxLjIyNy0uNSAyLjAyMyAwIC43NzMuMTY4IDEuNDM2LjUgMS45ODguNDA0LjY2OS45NjUgMS4wMDMgMS42OTEgMS4wMDMuNzExIDAgMS4yNjctLjM0IDEuNjY5LTEuMDIuMzQ3LS41NjQuNTE3LTEuMjMyLjUxNy0yLjAwNXpNMTQ2LjM2NSAyMy44NzRoLTEuNjczbC0uMTM5LS45NjVoLS4wNTJjLS41NzIuNzctMS4zODggMS4xNTUtMi40NDggMS4xNTUtLjc5MSAwLTEuNDMxLS4yNTQtMS45MTItLjc1OS0uNDM4LS40NTgtLjY1Ny0xLjAyOS0uNjU3LTEuNzA2IDAtMS4wMjQuNDI3LTEuODA0IDEuMjg2LTIuMzQ0Ljg1Ny0uNTQgMi4wNjItLjgwNSAzLjYxNC0uNzkzdi0uMTU2YzAtMS4xMDQtLjU4LTEuNjU1LTEuNzQtMS42NTUtLjgyNyAwLTEuNTU2LjIwOC0yLjE4NS42MmwtLjM3OS0xLjIyMmMuNzc5LS40ODIgMS43NDEtLjcyNCAyLjg3NS0uNzI0IDIuMTkgMCAzLjI4OSAxLjE1NSAzLjI4OSAzLjQ2NnYzLjA4NWMwIC44MzcuMDQxIDEuNTA0LjEyMSAxLjk5OHptLTEuOTM1LTIuODh2LTEuMjkxYy0yLjA1NS0uMDM2LTMuMDgyLjUyNy0zLjA4MiAxLjY4OCAwIC40MzcuMTE3Ljc2NC4zNTcuOTgzLjI0LjIxOS41NDYuMzI3LjkxLjMyNy40MDkgMCAuNzkxLS4xMyAxLjE0LS4zODdhMS41ODcgMS41ODcgMCAwMC42NzUtMS4zMnpNMTU2Ljk1MSAyMy44NzRoLTEuNjUzbC0uMDg3LTEuMzQ1aC0uMDUyYy0uNTI4IDEuMDIzLTEuNDI3IDEuNTM1LTIuNjkxIDEuNTM1LTEuMDEgMC0xLjg1MS0uMzk2LTIuNTE4LTEuMTg5LS42NjYtLjc5My0uOTk5LTEuODIyLS45OTktMy4wODUgMC0xLjM1Ni4zNjEtMi40NTUgMS4wODYtMy4yOTMuNzAzLS43ODMgMS41NjMtMS4xNzQgMi41ODctMS4xNzQgMS4xMjUgMCAxLjkxMy4zOCAyLjM2MSAxLjEzOGguMDM1di00LjgxaDEuODY1djkuOTY2YzAgLjgxNi4wMjIgMS41NjcuMDY2IDIuMjU3em0tMS45MzEtMy41MzN2LTEuMzk3YzAtLjI0Mi0uMDE3LS40MzctLjA1MS0uNTg3YTIuMTIzIDIuMTIzIDAgMDAtLjY3NC0xLjEyOCAxLjgzMSAxLjgzMSAwIDAwLTEuMjQ2LS40NTdjLS42OTUgMC0xLjIzOS4yNzYtMS42MzkuODI4LS4zOTcuNTUzLS41OTggMS4yNTgtLjU5OCAyLjEyIDAgLjgyOS4xOTEgMS41LjU3MyAyLjAxOC40MDMuNTUuOTQ3LjgyNiAxLjYyOC44MjYuNjEyIDAgMS4xMDEtLjIzIDEuNDcyLS42OS4zNi0uNDI0LjUzNS0uOTM2LjUzNS0xLjUzM3pNMTcyLjg4NSAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzEuODUxLTEuNzkyIDEuMjc2LTMuMDcgMS4yNzYtMS4yMjggMC0yLjIwOC0uNDA3LTIuOTQtMS4yMjQtLjcyOS0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDYtMS4yNCAxLjIyOCAwIDIuMjE4LjQwNiAyLjk2NSAxLjIyMi43MTEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45My4wNmMwLS43NzMtLjE2Ny0xLjQzNi0uNS0xLjk4OS0uMzkzLS42NjgtLjk0Ny0xLjAwMi0xLjY3My0xLjAwMi0uNzQ2IDAtMS4zMTUuMzM0LTEuNzA4IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjcgMS40MzYuNSAxLjk4OC40MDMuNjY5Ljk2NSAxLjAwMyAxLjY5IDEuMDAzLjcxMiAwIDEuMjcyLS4zNCAxLjY3My0xLjAyLjM0My0uNTY0LjUxOC0xLjIzMi41MTgtMi4wMDV6TTE4Mi45MDMgMjMuODc0aC0xLjg2MXYtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjkxLTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0NC42MWEyLjE1MyAyLjE1MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjVWMTcuODljMC0uNzM2LS4wMjEtMS41MzQtLjA2Ni0yLjM5OGgxLjYzNmwuMDg3IDEuMzFoLjA1MWMuMjE5LS40MDcuNTQzLS43NDMuOTY2LTEuMDExYTMuMTUzIDMuMTUzIDAgMDExLjY5LS40NzFjLjc4MSAwIDEuNDMyLjI1MiAxLjk0OS43NTkuNjQ1LjYyLjk2NSAxLjU0Ni45NjUgMi43NzZ2NS4wMTl6TTE5NS40NDIgMTYuODkxaC0yLjA1MnY0LjA3YzAgMS4wMzQuMzY1IDEuNTUyIDEuMDg3IDEuNTUyLjMzNCAwIC42MTEtLjAyOS44My0uMDg4bC4wNDggMS40MTNjLS4zNjguMTM5LS44NTIuMjA4LTEuNDQ3LjIwOC0uNzM2IDAtMS4zMDktLjIyNC0xLjcyMy0uNjcxLS40MTYtLjQ0OC0uNjIyLTEuMjAyLS42MjItMi4yNnYtNC4yMjRoLTEuMjI1di0xLjM5NWgxLjIyNVYxMy45NmwxLjgyNi0uNTV2Mi4wODRoMi4wNTF2MS4zOTdoLjAwMnpNMjA1LjMwNSAyMy44NzRoLTEuODY1VjE5LjExYzAtMS41MDItLjU2Mi0yLjI1NC0xLjY4Ny0yLjI1NC0uODY0IDAtMS40NTQuNDM2LTEuNzc4IDEuMzA3YTIuMzQ0IDIuMzQ0IDAgMDAtLjA4Ny42N3Y1LjAzOGgtMS44NjF2LTEyLjIyaDEuODYxVjE2LjdoLjAzNmMuNTg2LS45MTkgMS40MjctMS4zNzggMi41MTctMS4zNzguNzcxIDAgMS40MS4yNTMgMS45MTYuNzYuNjMxLjYzLjk0OCAxLjU2OS45NDggMi44MXY0Ljk4ek0yMTUuNDc5IDE5LjI4OWMwIC4zMzQtLjAyNS42MTQtLjA2OS44NDRoLTUuNTg4Yy4wMjUuODI4LjI5MiAxLjQ1OS44MDkgMS44OTYuNDczLjM5MSAxLjA4My41ODcgMS44MjkuNTg3LjgyNyAwIDEuNTgxLS4xMzIgMi4yNi0uMzk3bC4yOTIgMS4yOTRjLS43OTUuMzQ1LTEuNzMuNTE3LTIuODEzLjUxNy0xLjI5OCAwLTIuMzItLjM4Mi0zLjA1OS0xLjE0Ni0uNzQ0LS43NjQtMS4xMTItMS43OS0xLjExMi0zLjA3NiAwLTEuMjY0LjM0NC0yLjMxNiAxLjAzNS0zLjE1NS43MjItLjg5NiAxLjY5OC0xLjM0NCAyLjkzLTEuMzQ0IDEuMjA1IDAgMi4xMjEuNDQ4IDIuNzM5IDEuMzQ0LjUuNzEuNzQ3IDEuNTkuNzQ3IDIuNjM2em0tMS43NzgtLjQ4MmMuMDE1LS41NTMtLjEwOC0xLjAzLS4zNjEtMS40My0uMzIzLS41MTgtLjgxNi0uNzc3LTEuNDgyLS43NzctLjYwOCAwLTEuMTA0LjI1Mi0xLjQ4My43NTgtLjMwOS40MDQtLjQ5Mi44ODYtLjU1MyAxLjQ0OWgzLjg3OXpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImFwcC1zdG9yZV9zdmdfX2NsaXAwXzUxOjUwMVwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgyNDB2NzEuMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0FwcFN0b3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2hlY2tTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE2LjA3MSAwSDEuOTNBMS45MjkgMS45MjkgMCAwMDAgMS45MjlWMTYuMDdDMCAxNy4xMzcuODYzIDE4IDEuOTI5IDE4SDE2LjA3QTEuOTI5IDEuOTI5IDAgMDAxOCAxNi4wNzFWMS45M0ExLjkyOSAxLjkyOSAwIDAwMTYuMDcxIDB6bTAgMTYuMDcxSDEuOTNWMS45M0gxNi4wN1YxNi4wN3ptLTEuNDQtOS43MTJsLTYuOTM1IDYuODc5YS40ODIuNDgyIDAgMDEtLjY4Mi0uMDAzTDMuMzY3IDkuNTU4YS40ODIuNDgyIDAgMDEuMDAzLS42ODJsLjkxMi0uOTA1YS40ODIuNDgyIDAgMDEuNjgyLjAwM2wyLjQwMyAyLjQyMiA1LjY3OS01LjYzNGEuNDgyLjQ4MiAwIDAxLjY4Mi4wMDNsLjkwNS45MTJhLjQ4Mi40ODIgMCAwMS0uMDAyLjY4MnpcIlxuICAgICAgICBmaWxsPVwiI0ZDQzcyOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NoZWNrU3F1YXJlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRGlzY29yZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUuNjAzIDBIMy4zOTdDMS41MjUgMCAwIDEuMzM0IDAgMi45ODd2MTkuNjA0YzAgMS42NTMgMS41MjUgMi45ODcgMy4zOTcgMi45ODdIMjIuMTlsLS44NzgtMi42ODMgMi4xMjEgMS43MjYgMi4wMDUgMS42MjRMMjkgMjlWMi45ODdDMjkgMS4zMzQgMjcuNDc1IDAgMjUuNjAzIDB6bS02LjM5NyAxOC45MzdzLS41OTYtLjYyMy0xLjA5My0xLjE3NWMyLjE3LS41MzYgMi45OTktMS43MjUgMi45OTktMS43MjUtLjY4LjM5Mi0xLjMyNi42NjctMS45MDYuODU1LS44MjguMzA1LTEuNjI0LjUwOC0yLjQwMy42MjRhMTMuMjQgMTMuMjQgMCAwMS00LjI5Mi0uMDE0IDE1LjQ1IDE1LjQ1IDAgMDEtMi40MzYtLjYyNGMtLjM4LS4xMy0uNzk1LS4yOS0xLjIxLS40OTMtLjA0OS0uMDI5LS4wOTktLjA0NC0uMTQ4LS4wNzNhLjIyOC4yMjggMCAwMS0uMDY3LS4wNDNjLS4yOTgtLjE0NS0uNDY0LS4yNDYtLjQ2NC0uMjQ2cy43OTYgMS4xNiAyLjkgMS43MWMtLjQ5Ny41NTItMS4xMSAxLjIwNC0xLjExIDEuMjA0LTMuNjYyLS4xMDItNS4wNTQtMi4yMDQtNS4wNTQtMi4yMDQgMC00LjY2OSAyLjM4Ni04LjQ1NCAyLjM4Ni04LjQ1NCAyLjM4Ni0xLjU2NiA0LjY1Ny0xLjUyMiA0LjY1Ny0xLjUyMmwuMTY1LjE3NGMtMi45ODMuNzU0LTQuMzU4IDEuOS00LjM1OCAxLjlzLjM2NS0uMTc1Ljk3OC0uNDIxYzEuNzczLS42ODEgMy4xODEtLjg3IDMuNzYxLS45MTMuMS0uMDE1LjE4My0uMDMuMjgyLS4wM2ExNi4wMTEgMTYuMDExIDAgMDEzLjM0OC0uMDI4YzEuNTc0LjE1OSAzLjI2NC41NjUgNC45ODggMS4zOTIgMCAwLTEuMzEtMS4wODgtNC4xMjctMS44NDJsLjIzMi0uMjMyczIuMjctLjA0MyA0LjY1NyAxLjUyM2MwIDAgMi4zODYgMy43ODQgMi4zODYgOC40NTMgMCAwLTEuNDA4IDIuMTAyLTUuMDcgMi4yMDR6bS03LjcwNS02Ljc3MmMtLjk0NSAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NCAwIDEuNjktLjcyNiAxLjY5LTEuNjEuMDE2LS44ODUtLjc0Ni0xLjYxLTEuNjktMS42MXptNi4wNDggMGMtLjk0NCAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NSAwIDEuNjktLjcyNiAxLjY5LTEuNjEgMC0uODg1LS43NDUtMS42MS0xLjY5LTEuNjF6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Rpc2NvcmRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEcm9wRG93bihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNC41MTYgNy41NDhjLjQzNi0uNDQ2IDEuMDQzLS40ODEgMS41NzYgMEwxMCAxMS4yOTVsMy45MDgtMy43NDdjLjUzMy0uNDgxIDEuMTQxLS40NDYgMS41NzQgMCAuNDM2LjQ0NS40MDggMS4xOTcgMCAxLjYxNS0uNDA2LjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMmExLjA5NSAxLjA5NSAwIDAxLTEuNTc2IDBTNC45MjQgOS41OCA0LjUxNiA5LjE2M2MtLjQwOC0uNDE4LS40MzYtMS4xNyAwLTEuNjE1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEcm9wRG93bsSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDEwbDUgNSA1LTVIN3pcIiBmaWxsPVwiIzAwMFwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd27EsGNvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0V0aExvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0MiA3MVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjZ9XG4gICAgICAgIGQ9XCJNMjAuOTk2IDI3LjI5M0wyIDM2LjA5bDE4Ljk5NiAxMS40MjcgMTguOTktMTEuNDI3LTE4Ljk5LTguNzk2elwiXG4gICAgICAgIGZpbGw9XCIjMDEwMTAxXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTEuNTcgMzUuODM0bC0uMjUzLjQyOC40MjUuMjU2TDIwLjc0IDQ3Ljk0NGwuNzU4LjQ1NlYyLjE3NGwtLjkzIDEuNTcxTDEuNTcgMzUuODM1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjEuNDI2IDMuNzQ1bC0uOTMtMS41NzJWNDguNGwuNzU4LS40NTYgMTguOTg5LTExLjQyNi40MjUtLjI1Ni0uMjUzLS40MjhMMjEuNDI2IDMuNzQ1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTIwLjQ5NyA1MS40NjJWNjUuNDFMMy43NSA0MS4zODlsMTYuNzQ3IDEwLjA3M3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC44fVxuICAgICAgICBkPVwiTTIwLjczOCA1MC43NTFsLS4yNDIuMTQ2VjY4LjU5bC45MS0xLjMwNEw0MC40MSA0MC4wMzlsLS42NjgtLjcxNEwyMC43MzggNTAuNzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdFdGhMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRmFjZWJvb2socHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTYuMDQyIDMuNjI1aDE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxMi40MTcgMi40MTd2MTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEtMi40MTcgMi40MTdINi4wNDJhMi40MTcgMi40MTcgMCAwMS0yLjQxNy0yLjQxN1Y2LjA0MmEyLjQxNyAyLjQxNyAwIDAxMi40MTctMi40MTd6TTIxLjc1IDYuMDQyaC0zLjAyYTQuMjMgNC4yMyAwIDAwLTQuMjMgNC4yMjl2My4wMmgtMi40MTd2My42MjZIMTQuNXY4LjQ1OGgzLjYyNXYtOC40NThoMy42MjV2LTMuNjI1aC0zLjYyNXYtMi40MTdhMS4yMDggMS4yMDggMCAwMTEuMjA4LTEuMjA4aDIuNDE3VjYuMDQyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGYWNlYm9va1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0ZpbmdlcnByaW50KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2ZpbmdlcnByaW50X3N2Z19fY2xpcDApXCIgZmlsbD1cIiMwMDBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNi4zNzMuMTY0Yy0uNjE5LjE2NC0uOTI4Ljk2LS41OTggMS41NjQuMjA2LjM1Ni43ODQuNDM5IDMuNDQ0LjUyIDIuNTU3LjA4MyAzLjQ2NC4yMiA0LjUxNi42ODcgMS40NDMuNjMxIDIuMDgyLjQ2NiAyLjA4Mi0uNDk0IDAtLjgyMy0uODA0LTEuMzQ0LTIuOTI4LTEuOTItMS43NzMtLjQ5NS01LjIxNy0uNjg3LTYuNTE2LS4zNTd6TTExLjU2OCAyLjAwMkM4LjYyIDMuNzAzIDUuMDkzIDcuMzI1IDUuMjM4IDguNTA1Yy4wNC4zMy4yMDYuNzQuMzkxLjg3OC4yNjkuMjIuNjYtLjA4MiAxLjg1Ni0xLjQyNyAxLjY3LTEuODY2IDMuMTc2LTMuMTI4IDQuOTI5LTQuMTE2LjYxOC0uMzU2IDEuMjU4LS43NjggMS40MDItLjkwNS4zNzEtLjQxMi4zMS0xLjI2Mi0uMTQ0LTEuNTkyLS41MTYtLjM1Ni0uMjg5LS40MTEtMi4xMDQuNjU5ek0yNy42MTEgMy4yOTJjLS43NDIuNTQ4LS40MTIgMS40NTQuOTcgMi42NjEgMS41NDYgMS4zNDUgMy4yNzggMy41NjcgNC40NTQgNS42OC44NjYgMS41NjQgMS4zODEgMS44NjYgMS44NzYgMS4wNy4yMjctLjM1Ny4yMDYtLjU3Ni0uMTAzLTEuMzQ0LTEuMzgyLTMuNDAzLTYuMTg2LTguODA4LTcuMTk3LTguMDY3ek0xNS41MDcgNC45MWMtMy4xMTQgMS4xMjYtNS45OCAzLjQwMy03Ljg3NyA2LjMxMS0yLjEwNCAzLjE4My0zLjIzOCA2LjkxNS0zLjc1MyAxMi4yMUMyLjc0MyAzNS4zOTUgMy42NyA0Ny4zNTggNi42NCA1OC44YzEuMTU1IDQuNDcyIDEuMzQgNC44ODQgMi4wMiA0Ljc3NC4zMy0uMDU1LjU3OC0uMjc0LjYyLS41NzYuMDQtLjI3NS0uMzEtMS44MzktLjc2NC0zLjQ1Ny0yLjQ3NC04Ljc4LTMuNzExLTE5LjE1Mi0zLjQ2NC0yOC43MDEuMzEtMTAuNTY0IDEuMy0xNC44NzIgNC40NzUtMTkuMDcgMi42NC0zLjUxMiA1Ljc5NC01LjI0IDkuNTg5LTUuMjQgMy44MTQgMCA2Ljk5IDEuNzI4IDkuNjA5IDUuMjEzIDEuNzUzIDIuMzYgMi41NzggNC4xNDMgMy40MDIgNy4yOTguNjQgMi41MjUuNzIyIDUuMDQ5LjQxMyAxMi40ODUtLjI2OCA2LjM2Ni4zOTIgMTEuNDQyIDIuMjQ4IDE3LjM0MS43ODMgMi40NDIgMS4yNTcgMy4wNzMgMS44NTUgMi40MTUuNDM0LS40NjcuMzkyLTEuMjA4LS4xODUtMi42OS0uNzQyLTEuOTc1LTEuNzMyLTYuMzM4LTIuMTAzLTkuMzI4LS4yNjktMi4xNjgtLjMxLTMuNTY4LS4xNjUtNy42MDEuMjQ3LTcuMDguMTg1LTkuODc4LS4yMDctMTEuOTA4LTEuMzgxLTYuOTE1LTUuMDkzLTEyLjE4My0xMC4xMjUtMTQuNDYtMi4yODgtMS4wMTYtNi4wNjItMS4yMDgtOC4zNTEtLjM4NHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjE4NyA5LjEzNmMtMi40MTIuNzk2LTUuNzMyIDMuNjc3LTUuNTg4IDQuOTEyLjA0MS4zMDEuMjA2LjY4NS4zOTIuODIzLjI2OC4yMi42NC0uMDI4IDEuNzUzLTEuMTI1IDIuMjA2LTIuMTk1IDQuODg3LTMuMjY2IDcuMzQtMi45MDkgMS4wMzIuMTY1IDEuMTc2LjExIDEuMzgyLS4zODQuMjktLjcxMy4yOS0uNzY4LS4xMDMtMS4yNjItLjM5Mi0uNTQ5LTMuNTQ2LS41NzYtNS4xNzYtLjA1NXpNMjMuMjgxIDEwLjMxNmMtLjA4Mi4wODItLjE0NC40NjYtLjE0NC43OTYgMCAuNDY2LjI4OC44NSAxLjE1NCAxLjUwOSAyLjI5IDEuNzI4IDQuNTE3IDUuNjUyIDQuOTUgOC42NDMuMTg1IDEuMjYyLjgwNCAxLjcyOCAxLjM2Ljk4OC4zOTItLjQ5NC4zOTItLjYwNC4wODMtMS45NDgtLjM5Mi0xLjc4NC0xLjE5Ni0zLjg5Ny0yLjA4My01LjU0My0xLjUyNi0yLjcxNi00LjY2LTUuMzUtNS4zMi00LjQ0NXpNMy4xNzYgMTEuNDEzYy0uODg3IDEuNjc0LTEuOTYgNC45OTQtMi40MzQgNy40MzYtLjYxOCAzLjIzOC0uNjM5IDQuMzM1LS4wODIgNC43Mi41MzYuMzg0IDEuMjM3LS41MjIgMS4yMzctMS42MiAwLTEuNDI2IDEuMDMxLTUuNjI0IDEuOTgtNy45MjkuNzQyLTEuODM4Ljg2Ni0yLjM2LjctMi43OTktLjMwOC0uNzY4LS45MjctLjY4Ni0xLjQwMS4xOTJ6TTE2LjEwNSAxMy43NzNjLTEuNjkuOTMzLTIuNTM2IDEuNzI5LTMuNDg1IDMuMTI4LTEuNzczIDIuNjg5LTIuMzcxIDUuOS0yLjYxOSAxMy45MzktLjMzIDExLjY2MSAxLjczMiAyMy44OTkgNS43NzQgMzQuMjk4LjkwNyAyLjMwNSAxLjE1NSAyLjc0NCAxLjU2NyAyLjc0NCAxLjAxIDAgMS4wMS0uNzQxLS4wMi0zLjM0OC0yLjQ1NC02LjE3My00LjM1MS0xMy45MzktNS4yMTctMjEuMzQ3LS43MjItNi4wMzYtLjU5OC0xNi45ODQuMjQ3LTIxLjI2NS41NTctMi45MDggMi4xMjQtNS4xODYgNC4yMjctNi4yIDEuMzQtLjY2IDMuNzMzLS41NzcgNS4xOTcuMTY0IDIuMjI3IDEuMTI1IDQuMDgzIDQuMDg4IDQuMzkyIDcuMDI0LjA2Mi43MTMgMCAzLjQwMi0uMTQ0IDYuMDEtLjIwNyAzLjc1OC0uMjI3IDUuNDg3LS4wMiA4LjI4NS41MTUgNy42NTYgMi4xMjMgMTQuNDYgNC44ODYgMjAuNzE3LjkyOCAyLjExMiAxLjI3OSAyLjUyNCAxLjgzNSAyLjI1LjY0LS4zMy41MTYtMS4xNTMtLjUzNi0zLjU2Ny0zLjcxMS04LjUwNi01LjIxNy0xOC00LjUxNi0yOC4yNjIuMzMtNC42MzcuMTY1LTYuMzkzLS44MjQtOS4wODItLjc2NC0yLjAzLTIuMzkzLTQuMTE2LTQuMDgzLTUuMTg2LTEuMDEtLjY1OS0xLjQ4NS0uNzY4LTMuMzQxLS44NS0xLjg5Ny0uMDgzLTIuMzEtLjAyOC0zLjMyLjU0OHpNMzUuMiAxNS4yMjdjLS4xODYuMjQ3LS4yNjguNjU5LS4yMDYuOTA2LjcyMiAyLjQ3IDEuMTc1IDUuNDMzIDEuMjc4IDguMzk2LjEyNCAzLjIzOC4yNjggMy45NzkuODA1IDMuOTc5LjU5OCAwIC45MDctLjg1MS45MDctMi41NTItLjAyLTUuMTA0LTEuMjU4LTExLjE2OC0yLjI0OC0xMS4xNjgtLjEwMyAwLS4zNS4xOTItLjUzNi40NHpNOC45OSAxNi4zOGMtMS4wNTEuOTA1LTIuMDQgNi42OTUtMi4xODUgMTIuNzg2LS4wNjIgMS43ODQgMCAyLjE5NS4zMSAyLjQ3LjI0Ny4yMTkuNDUzLjIxOS43IDAgLjI4OS0uMjQ3LjQxMy0xLjAxNi42MTktMy44NDIuMzMtNC43NzQuNjE5LTYuODA1IDEuMjE3LTguNzguNTk4LTIuMDAzLjU5OC0yLjE5NS4xMDMtMi41OC0uNDc1LS4zMjktLjQ3NS0uMzI5LS43NjMtLjA1NHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE4Ljk5MiAxNy44MzRjLS41NTcuNzQtLjIwNiAxLjUxLjc4NCAxLjc1NiAxLjE5NS4yNzQgMi4yMjcgMS4zMTcgMi43NDIgMi43NDQuNDMzIDEuMTguNDU0IDEuNTM2LjMzIDQuMTk4LS4xMjQgMy4wMTgtLjAyIDMuNjIyLjcyMiAzLjYyMi41NzcgMCAuNzgzLS44MjMuOTI4LTMuNzYuMTQ0LTMuMDE3LjAyLTMuOTIzLS45MjgtNS45MjYtLjY4LTEuMzcyLTEuOTE4LTIuNDk3LTMuMjc5LTIuOTA4LS43ODQtLjIyLS45NDktLjE5Mi0xLjMuMjc0ek0xNS44MTYgMTguOTA0Yy0uODI1LjcxMy0xLjY5IDIuNTI0LTEuOTM4IDQuMTE2LS4zMSAxLjk0OC0uNjggNy4zMjYtLjU5OCA4LjkxNy4wNjIgMS4xOC4xMjQgMS4zNzIuNTM2IDEuNDU1Ljg0NS4xNjQgMS4wNzItLjM4NSAxLjA3Mi0yLjY2MiAwLTEuMTUyLjE0NS0zLjQzLjMxLTUuMDQ5LjMwOS0zLjA3My43LTQuMzkgMS41MjYtNS4wNzYuNTM2LS40MTEuNTU2LTEuNTkxLjA2MS0xLjk0OC0uMjg4LS4xOTItLjUzNi0uMTM3LS45NjkuMjQ3elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTguMjkgMjEuODk1Yy0xLjIzNi42ODYtMS41MDUgMi4xMTMtMS42NyA5LjQ5NC0uMjY4IDEwLjM5OSAxLjIxNyAxOS41OSA0LjY2IDI4LjgxIDEuODc3IDUuMDQ5IDIuNjQgNi41ODUgMy4yOCA2LjU4NS45OSAwIC45OS0uNzQtLjA2Mi0zLjA0Ni0yLjA4My00LjYzNy0zLjk4LTEwLjU2My00Ljk1LTE1LjUwMi0xLjA5Mi01LjcwNy0xLjI1Ny03LjYtMS4yMzctMTUuMDY0IDAtNy4yMTYuMTY1LTkuMTM3Ljc0My05LjI3NC41NTYtLjEzNy43NjMuNzQuNTM2IDIuNTUyLS4yNjggMi4zODctLjI2OCAxMS4xNC4wMiAxMy44NTYuNTk5IDUuNjUyIDEuNTg4IDEwLjQ1NCAzLjEzNSAxNS4zMzggMS4wMzEgMy4yMzggMi42NiA3LjMyNiAzLjYzIDkgLjU1NiAxLjAxNSAxLjE3NSAxLjE4IDEuNDg0LjQxMi4yMjctLjU3Ny4yNDctLjQ5NC0xLjQyMy00LjMwOC0yLjk5LTYuODA1LTQuODY2LTE0Ljg3Mi01LjQwMy0yMy4yOTUtLjE4NS0zLjAxOS0uMTg1LTQuODU3LjA0Mi04LjY5OS4yODgtNS41NDIuMjI3LTUuOTU0LTEuMTM0LTYuNzIyLS43ODQtLjQzOS0xLjA1Mi0uNDM5LTEuNjUtLjEzN3pNMjkuODggMjUuMDc4Yy0uNDMzLjU3Ni0uNjYgMy44OTYtLjYxOSA5LjE5Mi4wNDEgNS40MzIuMTY1IDYuMTczIDEuMDEgNi4xNzNoLjU5OWwtLjA4My00LjgwMWMtLjA0MS0yLjg4Mi4wNDEtNS45LjE4Ni03LjUxOS4yNDctMi41NTEuMjQ3LTIuNzQ0LS4xMDMtMy4xLS40OTUtLjQ2Ny0uNjItLjQ0LS45OS4wNTV6TS4zNzEgMjYuMjAzYy0uNDk1LjYzLS40OTUgMTIuNDg0IDAgMTMuMTE1LjM3MS41MjIuNDEzLjUyMi45MjguMTY1LjM3MS0uMjc0LjM5Mi0uNjU5LjM5Mi02LjcyMiAwLTYuMDY0LS4wMi02LjQ0OS0uMzkyLTYuNzIzLS41MTUtLjM1Ny0uNTU3LS4zNTctLjkyOC4xNjV6TTM2LjQ3OCAzMC44OTVjLS4yNjcuMzI5LS4xNjQgMTAuMzcxLjEwNCAxMC43MjguMzcuNDk0Ljk0OC4zODQgMS4xOTYtLjE5Mi4zMDktLjc5Ni4yNjgtOS45ODgtLjA0Mi0xMC40LS4yNjgtLjM1Ni0xLjAzLS40MzgtMS4yNTgtLjEzNnpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTIyLjcwNCAzMi45MjVjLS40MTMgMS4wNy4zMDkgOS42MzEgMS4xNTQgMTMuNTgyLjMxIDEuNDI3LjY2IDEuODY2IDEuMjE3IDEuNTkyLjQ5NS0uMjQ3LjU1Ny0uOTA2LjI0OC0yLjUyNS0uNTE2LTIuNjM0LS45MjgtNi4zNjUtMS4wNzMtOS41Mi0uMDgyLTEuNjc1LS4yMjctMy4xODQtLjM1LTMuMzc2LS4zMS0uNTIxLS45MjgtLjM4NC0xLjE5Ni4yNDd6TTYuODQ2IDM0LjQwN2MtLjE4NS4yNzQtLjIwNiAxLjEyNS0uMTAzIDMuMDczLjE2NSAzLjEuODI1IDkuNjMgMS4xMzQgMTEuMTEzLjI0OCAxLjE4LjkwNyAxLjYxOCAxLjQwMi45Ni4yNjgtLjM4NC4yNjgtLjY4Ni0uMDQtMi44NTQtLjUzNy0zLjgxNC0uNzIzLTUuNzYyLS44NjctOS0uMDgyLTEuNjczLS4yMjctMy4xODItLjM1LTMuMzc0LS4yNjktLjQ0LS44NjctLjQxMi0xLjE3Ni4wODJ6TTEzLjU2OSAzNi4wOGMtLjM5Mi40OTUtLjM1IDEuMzE4LjIwNiA2LjcyMy43IDYuNzUgMS40NjQgOS4zMyAyLjQ1NCA4LjM2OS4zNy0uMzU3LjM3LS40NjctLjE2NS0zLjcwNC0uMzEtMS44MTEtLjcwMS01LjAyMi0uODg3LTcuMTA3LS4xODUtMi4wNTgtLjM5Mi0zLjk1MS0uNDc0LTQuMTctLjI0OC0uNjA0LS43NDMtLjY2LTEuMTM0LS4xMXpNLjI2OCA0Mi4zMDljLS40NzQuNzY4LjE2NSA2LjMzOCAxLjExNCA5LjY4Ni43IDIuNTI0IDEuMDMgMy4xMjggMS42NSAzLjEyOC43MjEgMCAuODY1LTEuMDE1LjM1LTIuMzg3LS43NjMtMS45NDgtMS4zLTQuNjY1LTEuNTQ3LTcuNjgzLS4yNDctMi44ODEtLjI2OC0yLjk2My0uNzgzLTMuMDQ2LS4yODktLjA1NS0uNjQuMTEtLjc4NC4zMDJ6TTMwLjI5MiA0Mi45NGMtLjA4Mi4xMS0uMTQ0LjQ2Ny0uMTQ0LjgyMyAwIDEuMjM1IDEuNDg1IDYuNjQgMi42NCA5LjU3Ni45OSAyLjU1MiAxLjI1NyAzLjAxOSAxLjY3IDMuMDE5IDEuMDMgMCAuOTY5LS42ODYtLjI2OC00LjAwNi0uNjQtMS43My0xLjUwNi00LjU1NS0xLjkzOS02LjI4NC0uNy0yLjg1My0uODI1LTMuMTU1LTEuMjk5LTMuMjM4LS4yNjgtLjA1NC0uNTc3IDAtLjY2LjExek0yNS4wNTUgNTAuNjIzYy0uMTg2LjYzMS4yMjYgMi4xNCAxLjUwNSA1LjYyNSAxLjMyIDMuNjIyIDIuNzQyIDYuNzUgMy4xMTQgNi45NDIuNDEyLjIyLjg2Ni0uMTEuOTktLjY4Ni4wODItLjMzLS4yMjgtMS4yOS0uOTA4LTIuNzcxLS45Ny0yLjE0LTIuMTI0LTUuMjY5LTMuMDkzLTguMjYtLjMzLTEuMDctLjQ5NS0xLjI4OS0uOTQ5LTEuMjg5LS4yODggMC0uNTc3LjE5Mi0uNjYuNDM5ek04Ljk1IDUyLjE2Yy0uMzcyLjQ5My0uMzMuODUuNjYgNC43MTkgMS4xMzQgNC40NDUgMi44MDQgOS40OTQgMy4yNzggOS44NzguNDk1LjQxMSAxLjA3Mi0uMTM3IDEuMDUyLS45Ni0uMDItLjM1Ny0uNDU0LTEuOTIxLS45OS0zLjQzLS41MzYtMS41MzctMS40MDItNC41LTEuOTM4LTYuNTg2LS43ODQtMy4xLTEuMDUyLTMuODQxLTEuMzgyLTMuODk2LS4yMjctLjAyNy0uNTM2LjA4Mi0uNjguMjc1ek0xNi4wMjMgNTQuMTA4Yy0uMTQ1Ljc0LjkwNyA0LjMwOCAyLjYxOCA4Ljg5IDEuNDIzIDMuODE0IDIuMTg2IDUuMjEzIDIuNzAyIDQuOTM5Ljc0Mi0uMzg1LjYxOC0xLjA3LS44NDYtNC44My0uODA0LTIuMDU3LTEuODE0LTQuOTExLTIuMjQ3LTYuMzM4LS45OS0zLjIzOC0xLjAxLTMuMjkyLTEuNjA5LTMuMjkyLS4zNSAwLS41MzYuMTkyLS42MTguNjN6XCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJmaW5nZXJwcmludF9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDM4djYzSDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGaW5nZXJwcmludFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0dvb2dsZVBsYXlTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19jbGlwMF81MTo1NDYpXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjMxLjEwOCA3MS4xMDlIOC44OTJDMy45OTIgNzEuMTA5IDAgNjcuMTAxIDAgNjIuMjJWOC44OUMwIDMuOTg5IDMuOTkxIDAgOC44OTIgMGgyMjIuMjE2QzIzNi4wMDQgMCAyNDAgMy45OSAyNDAgOC44ODlWNjIuMjJjMCA0Ljg4MS0zLjk5NiA4Ljg4OS04Ljg5MiA4Ljg4OXpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMzEuMTA4IDEuNDIzYzQuMTEgMCA3LjQ3NSAzLjM1NiA3LjQ3NSA3LjQ2NlY2Mi4yMmMwIDQuMTEtMy4zNDMgNy40NjYtNy40NzUgNy40NjZIOC44OTJjLTQuMTEgMC03LjQ3NS0zLjM1Ni03LjQ3NS03LjQ2NlY4Ljg5YzAtNC4xMSAzLjM0My03LjQ2NiA3LjQ3NS03LjQ2NmgyMjIuMjE2em0wLTEuNDIzSDguODkyQzMuOTkyIDAgMCA0LjAwOCAwIDguODg5VjYyLjIyYzAgNC45IDMuOTkxIDguODg5IDguODkyIDguODg5aDIyMi4yMTZjNC44OTYgMCA4Ljg5Mi0zLjk5IDguODkyLTguODg5VjguODlDMjQwIDQuMDA4IDIzNi4wMDQgMCAyMzEuMTA4IDB6XCJcbiAgICAgICAgICBmaWxsPVwiI0E2QTZBNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0xMjYuNDMzIDIzLjUyM2MtMS42MDMgMC0yLjk1NC0uNTYzLTQuMDIyLTEuNjcyYTUuNyA1LjcgMCAwMS0xLjYyNS00LjA3OGMwLTEuNjE4LjU0Ny0yLjk4OCAxLjYyNS00LjA3NCAxLjA2NC0xLjEwOSAyLjQxNS0xLjY3MiA0LjAxNy0xLjY3MiAxLjU4NSAwIDIuOTM2LjU2MyA0LjAyMyAxLjY3MiAxLjA3NyAxLjEyMSAxLjYyNCAyLjQ5MSAxLjYyNCA0LjA3NC0uMDE3IDEuNjIyLS41NjUgMi45OTItMS42MjQgNC4wNzQtMS4wNjQgMS4xMTctMi40MTYgMS42NzYtNC4wMTggMS42NzZ6bS00Ny42ODggMGMtMS41NjggMC0yLjkyOC0uNTU0LTQuMDQtMS42NS0xLjEwNC0xLjA5LTEuNjY1LTIuNDY5LTEuNjY1LTQuMDk2IDAtMS42MjcuNTYxLTMuMDA2IDEuNjY1LTQuMDk2IDEuMDktMS4wOTUgMi40NS0xLjY1IDQuMDQtMS42NWE1LjYxIDUuNjEgMCAwMTIuMjU2LjQ3Yy43MS4zMDcgMS4yODkuNzIzIDEuNzE3IDEuMjMzbC4xMDYuMTI5LTEuMTk2IDEuMTc5LS4xMjQtLjE0NmMtLjY3NS0uODA3LTEuNTgtMS4yMDItMi43NzctMS4yMDItMS4wNjkgMC0yIC4zODEtMi43NjggMS4xMzUtLjc3My43NTgtMS4xNjYgMS43NTEtMS4xNjYgMi45NTMgMCAxLjIwMS4zOTMgMi4xOTQgMS4xNjYgMi45NTJhMy44MyAzLjgzIDAgMDAyLjc2OCAxLjEzNWMxLjE0IDAgMi4wOTctLjM4MSAyLjg0My0xLjEzNS40NDItLjQ0My43MTYtMS4wNjQuODEzLTEuODQ4aC0zLjgzN3YtMS42NTloNS40ODRsLjAyMi4xNTFjLjA0LjI4LjA4LjU2OC4wOC44MzQgMCAxLjUzLS40NiAyLjc2Ni0xLjM3IDMuNjgtMS4wMzMgMS4wODEtMi4zODQgMS42My00LjAxNyAxLjYzem02My40MDYtLjIzNWgtMS42OTFsLTUuMTc5LTguMzIxLjA0NCAxLjQ5OHY2LjgxOGgtMS42OTFWMTIuMjY3aDEuOTI5bC4wNTMuMDg0IDQuODcgNy44MzgtLjA0NC0xLjQ5NHYtNi40MjhoMS43MDl2MTEuMDJ6bS0yOC40MjUgMGgtMS43MTN2LTkuMzYzaC0yLjk3MnYtMS42NThoNy42NTJ2MS42NThoLTIuOTcxdjkuMzYzaC4wMDR6bS02LjA4IDBoLTEuNzA4VjEyLjI2N2gxLjcwOHYxMS4wMnptLTkuNjAzIDBoLTEuNzA4di05LjM2M2gtMi45NzJ2LTEuNjU4aDcuNjUydjEuNjU4aC0yLjk3MnY5LjM2M3ptLTUuNzYyLS4wMThIODUuNzNWMTIuMjY3aDYuNTUydjEuNjU4aC00LjgzOXYzLjAyM2g0LjM2N3YxLjY0aC00LjM2N3YzLjAyNGg0Ljg0djEuNjU4em0zMS4zODMtMi41NThjLjc2NC43NjcgMS42OTEgMS4xNTMgMi43NjkgMS4xNTMgMS4xMDggMCAyLjAxMy0uMzc3IDIuNzY4LTEuMTUzLjc1MS0uNzU0IDEuMTMtMS43NDIgMS4xMy0yLjkzNSAwLTEuMTkyLS4zNzktMi4xODUtMS4xMjUtMi45MzVhMy43ODIgMy43ODIgMCAwMC0yLjc2OS0xLjE1MmMtMS4xMDggMC0yLjAxMy4zNzctMi43NjQgMS4xNTItLjc1Ljc1NC0xLjEzIDEuNzQzLTEuMTMgMi45MzUgMCAxLjE5My4zNzUgMi4xODYgMS4xMjEgMi45MzV6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0xMjAuNjI3IDM4LjY3NWMtNC4xNzIgMC03LjU1NCAzLjE4LTcuNTU0IDcuNTY0IDAgNC4zNDQgMy40MDQgNy41NjMgNy41NTQgNy41NjMgNC4xNzIgMCA3LjU1NC0zLjIwMSA3LjU1NC03LjU2MyAwLTQuMzg1LTMuMzgyLTcuNTYzLTcuNTU0LTcuNTYzem0wIDEyLjEzYy0yLjI4MyAwLTQuMjQ3LTEuODk4LTQuMjQ3LTQuNTg0IDAtMi43MjcgMS45NjktNC41ODQgNC4yNDctNC41ODQgMi4yODMgMCA0LjI0NyAxLjg1NyA0LjI0NyA0LjU4NC4wMDUgMi43MDQtMS45NjQgNC41ODQtNC4yNDcgNC41ODR6bS0xNi40ODItMTIuMTNjLTQuMTcyIDAtNy41NTQgMy4xOC03LjU1NCA3LjU2NCAwIDQuMzQ0IDMuNDA0IDcuNTYzIDcuNTU0IDcuNTYzIDQuMTcyIDAgNy41NTQtMy4yMDEgNy41NTQtNy41NjMgMC00LjM4NS0zLjM4Ni03LjU2My03LjU1NC03LjU2M3ptMCAxMi4xM2MtMi4yODMgMC00LjI0Ny0xLjg5OC00LjI0Ny00LjU4NCAwLTIuNzI3IDEuOTY5LTQuNTg0IDQuMjQ3LTQuNTg0IDIuMjgzIDAgNC4yNDcgMS44NTcgNC4yNDcgNC41ODQgMCAyLjcwNC0xLjk2NCA0LjU4NC00LjI0NyA0LjU4NHptLTE5LjYxMi05LjgydjMuMjAxaDcuNjUxYy0uMjM0IDEuNzk1LS44MjUgMy4xMjEtMS43MyA0LjAzLTEuMTIyIDEuMTI2LTIuODUzIDIuMzUtNS45MDMgMi4zNS00LjcwMyAwLTguMzgtMy44MTMtOC4zOC04LjUzNSAwLTQuNzIxIDMuNjc3LTguNTMzIDguMzgtOC41MzMgMi41MzggMCA0LjM4OCAxLjAwNiA1Ljc2MSAyLjI5MWwyLjI2LTIuMjdjLTEuOTA3LTEuODM1LTQuNDQ1LTMuMjQtOC4wMDQtMy4yNC02LjQ1IDAtMTEuODYzIDUuMjc1LTExLjg2MyAxMS43MzUgMCA2LjQ3NyA1LjQwOCAxMS43MzQgMTEuODYzIDExLjczNCAzLjQ4NCAwIDYuMDk3LTEuMTQzIDguMTY0LTMuMjk4IDIuMTA2LTIuMTE0IDIuNzczLTUuMDk4IDIuNzczLTcuNTA1IDAtLjc1LS4wNTgtMS40MjMtLjE3Ny0xLjk5NWgtMTAuOGMuMDA1LS4wMDUuMDA1LjAzNS4wMDUuMDM1em04MC4yMTkgMi40OTJjLS42MzEtMS42OTgtMi41MzktNC44Mi02LjQ1LTQuODItMy44NzcgMC03LjEgMy4wNjQtNy4xIDcuNTY0IDAgNC4yNDcgMy4xODggNy41NjMgNy40NzUgNy41NjMgMy40NDQgMCA1LjQ0OC0yLjExNSA2LjI3NC0zLjM1NmwtMi41NTYtMS43MmMtLjg0OCAxLjI2My0yLjAyNyAyLjA5Mi0zLjcgMi4wOTItMS42OTEgMC0yLjg3NS0uNzcxLTMuNjYxLTIuMjkybDEwLjA3MS00LjE4OWMwIC4wMDQtLjM1My0uODQyLS4zNTMtLjg0MnptLTEwLjI3IDIuNTI3Yy0uMDc5LTIuOTIyIDIuMjYxLTQuNDA3IDMuOTM0LTQuNDA3IDEuMzIxIDAgMi40Mi42NTIgMi43OTUgMS42bC02LjcyOSAyLjgwN3ptLTguMTgxIDcuMzI4aDMuMzA3di0yMi4yMmgtMy4zMDd2MjIuMjJ6bS01LjQzLTEyLjk3NmgtLjEyYy0uNzQ2LS44OTEtMi4xNjMtMS42OTgtMy45NzMtMS42OTgtMy43NTggMC03LjIxOSAzLjMyLTcuMjE5IDcuNTg1IDAgNC4yNDcgMy40NDQgNy41MjggNy4yMTkgNy41MjggMS43ODggMCAzLjIyNy0uODEyIDMuOTczLTEuNzJoLjEydjEuMDg2YzAgMi44ODYtMS41MzcgNC40NDItNC4wMTQgNC40NDItMi4wMjYgMC0zLjI4NS0xLjQ2My0zLjc5Ny0yLjY4N2wtMi44NzQgMS4yMDZjLjgyNSAxLjk5NSAzLjAyOSA0LjQ2NCA2LjY2NyA0LjQ2NCAzLjg3NiAwIDcuMTYxLTIuMjkyIDcuMTYxLTcuODgyVjM5LjExaC0zLjEyNnYxLjI0NmgtLjAxN3ptLTMuNzk4IDEwLjQ0OWMtMi4yODIgMC00LjE5LTEuOTE1LTQuMTktNC41NjIgMC0yLjY2OSAxLjkwOC00LjYwMiA0LjE5LTQuNjAyIDIuMjYxIDAgNC4wMTQgMS45NTUgNC4wMTQgNC42MDIuMDIyIDIuNjQ3LTEuNzQ5IDQuNTYyLTQuMDE0IDQuNTYyem00My4xNjMtMTkuNjkzaC03LjkwN3YyMi4yMmgzLjMwN3YtOC40MTVoNC42MDVjMy42NiAwIDcuMjU4LTIuNjY0IDcuMjU4LTYuODkzIDAtNC4yMy0zLjU4NS02LjkxMi03LjI2My02LjkxMnptLjA5NyAxMC43MDJoLTQuNzAyVjM0LjE5aDQuNzAyYzIuNDc3IDAgMy44NzcgMi4wNTMgMy44NzcgMy44MTMgMCAxLjc0Mi0xLjQxNyAzLjgxMi0zLjg3NyAzLjgxMnptMjAuNDIxLTMuMTc4Yy0yLjQwMiAwLTQuODc5IDEuMDY4LTUuOTA0IDMuMzk1bDIuOTMyIDEuMjI0Yy42MzItMS4yMjQgMS43ODgtMS42NCAzLjAxMS0xLjY0IDEuNzEzIDAgMy40NDQgMS4wMjggMy40ODQgMi44NjR2LjIzNWMtLjU5Mi0uMzM3LTEuODktLjg1Mi0zLjQ0NC0uODUyLTMuMTY2IDAtNi4zNzUgMS43MzgtNi4zNzUgNC45OTcgMCAyLjk4MyAyLjU5NiA0Ljg5OCA1LjQ4OCA0Ljg5OCAyLjIyIDAgMy40NDMtMS4wMDYgNC4yMDctMi4xNzJoLjExOXYxLjcyaDMuMTg4di04LjUxMmMwLTMuOTYzLTIuOTMxLTYuMTU3LTYuNzA2LTYuMTU3em0tLjQxNSAxMi4xNjljLTEuMDgyIDAtMi41OTctLjUzMi0yLjU5Ny0xLjg5OCAwLTEuNzIgMS44OS0yLjM3MSAzLjUwMi0yLjM3MSAxLjQ1NyAwIDIuMTQ1LjMxNCAzLjAxMS43NDlhMy45ODcgMy45ODcgMCAwMS0zLjkxNiAzLjUyek0yMTkuMDkgMzkuMTFsLTMuNzk3IDkuNjM4aC0uMTE5bC0zLjkzNC05LjYzOGgtMy41NTlsNS45MDMgMTMuNDczLTMuMzY0IDcuNDg3aDMuNDQ0bDkuMDgyLTIwLjk2aC0zLjY1NnptLTI5Ljc2NyAxNC4yMjJoMy4zMDd2LTIyLjIyaC0zLjMwN3YyMi4yMnpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTE4LjQ3MyAxMy4zOTNjLS41MTIuNTU0LS44MDggMS40LS44MDggMi41MVY1NS4yMWMwIDEuMTA5LjI5NiAxLjk1Ni44MjYgMi40ODhsLjEzNy4xMiAyMS45MzQtMjIuMDI1di0uNDkyTDE4LjYxIDEzLjI3M2wtLjEzNy4xMnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQwX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk00Ny44NiA0My4xNTdsLTcuMzE2LTcuMzQ1di0uNTE1bDcuMzE2LTcuMzQ1LjE2LjA5NyA4LjY1MyA0LjkzOWMyLjQ3NyAxLjQgMi40NzcgMy43MTUgMCA1LjEzM0w0OC4wMiA0My4wNmwtLjE1OS4wOTd6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MV9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDguMDIgNDMuMDZsLTcuNDc1LTcuNTA2LTIyLjA3MiAyMi4xNjJjLjgwOC44NyAyLjE2NC45NjcgMy42NzguMTJMNDguMDIgNDMuMDZ6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50Ml9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDguMDIgMjguMDQ5TDIyLjE1IDEzLjI5NWMtMS41MTQtLjg2OS0yLjg3NC0uNzQ5LTMuNjc4LjEybDIyLjA3MiAyMi4xNCA3LjQ3NC03LjUwNnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQzX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBvcGFjaXR5PXswLjJ9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDcuODYgNDIuOUwyMi4xNyA1Ny41NTdjLTEuNDM2LjgyOS0yLjcxNi43NzEtMy41NDEuMDE3bC0uMTM3LjEzOC4xMzcuMTJjLjgyNS43NDkgMi4xMDUuODEgMy41NC0uMDE4TDQ4LjAzOCA0My4wNmwtLjE3Ny0uMTZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgb3BhY2l0eT17MC4xMn1cbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk01Ni42NzMgMzcuODY0TDQ3LjgzOCA0Mi45bC4xNi4xNiA4LjY1My00LjkzOWMxLjI0LS43MDkgMS44NS0xLjY0IDEuODUtMi41NjctLjA3NS44NTItLjcwNiAxLjY1OC0xLjgyOCAyLjMxelwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIG9wYWNpdHk9ezAuMjV9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjIuMTUgMTMuNTUybDM0LjUyMyAxOS42OTNjMS4xMjIuNjM0IDEuNzUzIDEuNDYzIDEuODUgMi4zMSAwLS45MjctLjYxLTEuODU4LTEuODUtMi41NjdMMjIuMTUxIDEzLjI5NWMtMi40NzctMS40MjMtNC40ODYtLjIzNS00LjQ4NiAyLjYwN3YuMjU3YzAtMi44NDYgMi4wMDktNC4wMTIgNC40ODYtMi42MDd6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQwX2xpbmVhcl81MTo1NDZcIlxuICAgICAgICAgIHgxPXszOC41OTV9XG4gICAgICAgICAgeTE9ezE1LjQ3OH1cbiAgICAgICAgICB4Mj17My40NH1cbiAgICAgICAgICB5Mj17MjQuODA3fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMDBBMEZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMDA3fSBzdG9wQ29sb3I9XCIjMDBBMUZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMjZ9IHN0b3BDb2xvcj1cIiMwMEJFRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC41MTJ9IHN0b3BDb2xvcj1cIiMwMEQyRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC43Nn0gc3RvcENvbG9yPVwiIzAwREZGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDBFM0ZGXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MV9saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17NTkuOTAzfVxuICAgICAgICAgIHkxPXszNS41NTV9XG4gICAgICAgICAgeDI9ezE3LjA2M31cbiAgICAgICAgICB5Mj17MzUuNTU1fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkZFMDAwXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNDA5fSBzdG9wQ29sb3I9XCIjRkZCRDAwXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNzc1fSBzdG9wQ29sb3I9XCJvcmFuZ2VcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0ZGOUMwMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDJfbGluZWFyXzUxOjU0NlwiXG4gICAgICAgICAgeDE9ezQzLjk1NX1cbiAgICAgICAgICB5MT17MzkuNjM5fVxuICAgICAgICAgIHgyPXsxNS41Nzh9XG4gICAgICAgICAgeTI9ezg3LjIwNX1cbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGM0E0NFwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjQzMxMTYyXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50M19saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17MTIuOTE1fVxuICAgICAgICAgIHkxPXswLjMxOH1cbiAgICAgICAgICB4Mj17MjUuNTc2fVxuICAgICAgICAgIHkyPXsyMS41NjJ9XG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMzMkEwNzFcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4wNjl9IHN0b3BDb2xvcj1cIiMyREE3NzFcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC40NzZ9IHN0b3BDb2xvcj1cIiMxNUNGNzRcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44MDF9IHN0b3BDb2xvcj1cIiMwNkU3NzVcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwRjA3NlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fY2xpcDBfNTE6NTQ2XCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDI0MHY3MS4xMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dvb2dsZVBsYXlTdG9yZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0hvbWVwYWdlT3B0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yLjA5IDEuNjQzYy0xLjAyNi4xMy0xLjg4Ny45OTYtMi4wMzQgMi4wNS0uMDc0LjQ3LS4wNjggMS43MjggMCAyLjIyNkEyLjQ3NiAyLjQ3NiAwIDAwMS40MSA3Ljc3N2wuMzc0LjE4MUgyNy4yMTVsLjM3NC0uMTgxYTIuNDc2IDIuNDc2IDAgMDAxLjM1NC0xLjg1OGMuMDY4LS40ODcuMDY4LTEuNjc3LjAwNS0yLjE5MmEyLjQwNSAyLjQwNSAwIDAwLTIuMDktMi4wOWMtLjQ1My0uMDU3LTI0LjMxLS4wNTctMjQuNzY5LjAwNnpNMS44MyAxMS4zNTdjLS40Ni4xMjQtLjc0OC4yOTQtMS4wOTQuNjQ1LS41NzcuNTcyLS43MzYgMS4xMS0uNzM2IDIuNDcgMCAuOTIzLjA3NCAxLjQyMS4yNiAxLjgxOC4xODcuMzk2LjYxOC44NjcuOTcgMS4wNi42NC4zNDUtLjIxNi4zMjIgMTMuMjcuMzIyIDEzLjQ4NiAwIDEyLjYzLjAyMyAxMy4yNy0uMzIzLjM1Mi0uMTkyLjc4Mi0uNjYzLjk3LTEuMDYuMTg2LS4zOTYuMjYtLjg5NC4yNi0xLjgxNyAwLS45MjMtLjA3NC0xLjQyMi0uMjYtMS44MTgtLjE4OC0uMzk3LS42MTgtLjg2Ny0uOTctMS4wNi0uNjQtLjM0NS4yMjItLjMyMi0xMy4yOTgtLjMxNy0xMC40NTYgMC0xMi4zOTMuMDEyLTEyLjY0My4wOHpNMS42OTkgMjEuMDY1Yy0uNDE0LjEzLS43MDguMzIzLTEuMDM3LjY4LS4zNC4zNjItLjUyNy43NjQtLjYwNiAxLjI4LS4wNjguNDkyLS4wNzQgMS43NSAwIDIuMjI2YTIuNDAzIDIuNDAzIDAgMDAyLjAyOCAyLjA1Yy4yNTUuMDQgNC40MTIuMDU3IDEyLjY3LjA0NWwxMi4yOTEtLjAxNy4zMzQtLjEyNGEyLjUwOCAyLjUwOCAwIDAwMS40NS0xLjQ3OWMuMTAyLS4yNjYuMTMtLjQ4MS4xNTMtMS4yMjkuMDUxLTEuNTQ2LS4wOTYtMi4xNzUtLjY2OC0yLjc3NS0uMzQtLjM1Ny0uNjM0LS41NDQtMS4wNjUtLjY3NC0uMjgzLS4wOC0xLjQ3OC0uMDktMTIuNzcyLS4wODUtMTEuNzU5IDAtMTIuNDg0LjAwNS0xMi43NzguMTAyelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnSG9tZXBhZ2VPcHRpb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdMaW5rZG4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyLjk1OCAzLjYyNWEyLjQxNyAyLjQxNyAwIDAxMi40MTcgMi40MTd2MTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEtMi40MTcgMi40MTdINi4wNDJhMi40MTcgMi40MTcgMCAwMS0yLjQxNy0yLjQxN1Y2LjA0MmEyLjQxNyAyLjQxNyAwIDAxMi40MTctMi40MTdoMTYuOTE2em0tLjYwNCAxOC43M1YxNS45NWEzLjk0IDMuOTQgMCAwMC0zLjkzOS0zLjk0Yy0xLjAyNyAwLTIuMjIzLjYzLTIuODAzIDEuNTcyVjEyLjI0SDEyLjI0djEwLjExNGgzLjM3MnYtNS45NTdjMC0uOTMuNzQ5LTEuNjkyIDEuNjgtMS42OTJhMS42OTEgMS42OTEgMCAwMTEuNjkgMS42OTJ2NS45NTdoMy4zNzJ6TTguMzE0IDEwLjM0MmEyLjAzIDIuMDMgMCAwMDIuMDMtMi4wMyAyLjAzNyAyLjAzNyAwIDAwLTIuMDMtMi4wNDJBMi4wNDIgMi4wNDIgMCAwMDYuMjcgOC4zMTNjMCAxLjEyNC45MTkgMi4wMyAyLjA0MiAyLjAzem0xLjY3OSAxMi4wMTFWMTIuMjRINi42NDZ2MTAuMTE0aDMuMzQ3elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaW5rZG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNYWlsKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNC4xNjcgNC44MzNINC44MzNBMi40MTMgMi40MTMgMCAwMDIuNDMgNy4yNWwtLjAxMiAxNC41YTIuNDI0IDIuNDI0IDAgMDAyLjQxNiAyLjQxN2gxOS4zMzRhMi40MjQgMi40MjQgMCAwMDIuNDE2LTIuNDE3VjcuMjVhMi40MjQgMi40MjQgMCAwMC0yLjQxNi0yLjQxN3ptMCAxNi45MTdINC44MzNWOS42NjdsOS42NjcgNi4wNDEgOS42NjctNi4wNDFWMjEuNzV6TTE0LjUgMTMuMjkyTDQuODMzIDcuMjVoMTkuMzM0TDE0LjUgMTMuMjkyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNYWlsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWVkaWEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5LjM1IDEwLjA0QTcuNDkgNy40OSAwIDAwMTIgNEM5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0QTUuOTk0IDUuOTk0IDAgMDAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXRhRGF0YShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMy4wMiAzNy4zMDdsMTIuNTEyIDIwLjc0Yy4wNTYtLjE1LjExOS0uMjkuMTg4LS40MjEgNS4wNDEtOC4zNTggMTAuMDg0LTE2LjcxMyAxNS4xMjgtMjUuMDY1LjE3OS0uMjcyLjI3Ni0uNjYyLjI2NC0xLjA2NC0uMDExLTIuNDE5IDAtNC44MzcgMC03LjMxMy0uMTE3LjA4NC0uMjIyLjE1MS0uMzIzLjIzMy0uODQyLjY4MS0xLjcxMyAxLjI0OC0yLjY1MSAxLjQzLS4yMTkuMDMyLS40MDguMjYyLS40OTMuNTk3LS44MDIgMi4zNzItMi4wNTMgMy41OTItMy42NzYgMy41NS0xLjcwMy0uMDQxLTIuOTYyLTEuNDE1LTMuNy0zLjk3LS44OC0zLjA0Ny0uMTkyLTYuODAyIDEuNTQyLTguNjE3IDEuNzU1LTEuODM1IDQuMDU4LTEuMjMgNS4zODQgMS40MTYuMjQzLjQ5NS40MyAxLjAxOC4yOSAxLjcwMS0uMDgzLjQ2NS0uMzAzLjgyNi0uNTg0Ljk1OC0uMjgyLjEzMi0uNTg0LjAxNi0uODAxLS4zMDYtLjIyLS4zMTQtLjM5Ny0uNzEyLS42MjUtMS4wMS0uNzY4LTEtMS42MTItMS4xOTItMi40OTItLjQ2NS0uOTMuNzcyLTEuMzc1IDIuMDY1LTEuMzA2IDMuNzc5LjA2NiAxLjU5Ny41OTcgMi43MDYgMS40NzQgMy4zMi45MTYuNjQ4IDEuOTgxLjE5OCAyLjYtMS4wOTgtLjc3NC0uMjk3LTEuNDc4LS44MzctMi4wMDUtMS44YTEyLjU5IDEyLjU5IDAgMDEtLjk1My0yLjMyNGMtLjE5NS0uNjI4LjA1My0xLjM5NS40MjEtMS43MDcuMzgxLS4zMjguODUtLjEyOCAxLjA4OS40NjUuMzMyLjg4LjY3NiAxLjcwMiAxLjI2MiAyLjE3NC44ODQuNjk4IDEuNzk3LjYyIDIuNzA3LjI4NCAxLjc1NC0uNjM1IDMuMTg4LTIuMTkzIDQuNDMtNC4yNTUgMS4zNzMtMi4yNzIgMi4zNTktNC45MTMgMi42NjYtOC4xMzguMTktMS45ODUuMDIyLTMuODcxLTEuMDMtNS4xNzUtLjg1NC0xLjA2LTEuODQyLTEuMTEtMi44NTItLjc5Ni0xLjE4NC4zOTctMi4zIDEuMjE5LTMuMjcyIDIuNDA3YTUuMDkgNS4wOSAwIDAxLS40MzguNDc5Yy0uNC40MTQtLjkyNC4yMjctMS4xODYtLjQyMi0uMjYyLS42NDktLjE2NS0xLjUyNC4yMTgtMS45NzhhMTUuMjY1IDE1LjI2NSAwIDAxMS42NzItMS44YzEuNDAzLTEuMjI1IDIuODk1LTEuOTY0IDQuNTEyLTEuNzM0IDIuMzczLjM0NyA0LjA3OSAzLjM0IDQuMTkxIDcuMjkyLjA5NiAzLjM3MS0uNjMzIDYuMjk4LTEuNzQgOS4wMTYtLjY2MSAxLjYtMS40NTUgMy4wMzgtMi4zNTkgNC4yNzEtLjExNS4xOTgtLjE4LjQ2LS4xODIuNzM1LS4wMTEgMy4yMTUtLjAxMSA2LjQzMSAwIDkuNjUuMDE0LjY2LS4xNDUgMS4zLS40MzUgMS43NTUtNS40MTMgOC45NS0xMC44MjIgMTcuOTAzLTE2LjIyOCAyNi44NjEtLjU2LjkzLTEuMDAxLjkzLTEuNTYyIDAtNC40ODItNy40MjMtOC45NjItMTQuODU1LTEzLjQ0LTIyLjI5NS0uNTczLS45NDktLjU3Mi0xLjY3Mi4wMDYtMi42MzIgNS4zOTYtOC45NCAxMC43OTItMTcuODg4IDE2LjE4OS0yNi44NDMuMjctLjQ4Ni42NTQtLjc1NSAxLjA1My0uNzM3IDIuNzQ3LjAyMiA1LjQ5NC4wMjIgOC4yNDIgMCAuNC0uMDIyLjc4Ni4yNDMgMS4wNTkuNzI4IDEuMzI4IDIuMjM3IDIuNjY1IDQuNDUyIDQuMDAyIDYuNjgyLjI5MS40NjEuMzU2IDEuMTkyLjE1NyAxLjc3Mi0uMTk5LjU4LS42MS44NjMtLjk5OS42ODNhMS41NiAxLjU2IDAgMDEtLjQ4NC0uNTQxIDc3Mi4xMDMgNzcyLjEwMyAwIDAxLTMuNjAyLTUuOTQ4Yy0uMTUtLjI3NS0uMzY3LS40MjQtLjU5LS40MDQtMi40NDYgMC00Ljg5IDAtNy4zMzYuMDItLjE5LjAxLS4zNzIuMTI5LS41MTUuMzM4LTUuMDkgOC40MTItMTAuMTc0IDE2LjgzLTE1LjI1NCAyNS4yNTVsLS4xNDQuMjY3elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMS41NzQgMzEuMjY1VjM4LjY4M2MtLjAwNy44MTUtLjM5MiAxLjQ4Mi0uODgxIDEuNTI3LS40OS4wNDYtLjkxNy0uNTQ2LS45NzgtMS4zNTRhNS4yMTIgNS4yMTIgMCAwMS0uMDEyLS40MzJ2LTguNDA4YzAtMS4yNjkuMzU3LTEuODY1IDEuMTEyLTEuODY3aDUuMTMxYy40MiAwIC43NTUuMjQ3LjkzMi45MS4xNjMuNTk2LjEzOSAxLjIyMS0uMTQ5IDEuNjUyLS4yMDcuMzA1LS40NjguNDktLjc0NC41MjktMS4zMTMuMDUyLTIuNjI2LjAyMi0zLjk0LjAyNWgtLjQ3MXpNMTkuMTM2IDQzLjc3OXYtNi45NDJhNC41MjQgNC41MjQgMCAwMS4xMjUtMS4xMzVjLjE4My0uNjM4LjYxLS45NzUgMS4wMjUtLjgwOS40MTcuMTQ2LjcxOC43NTIuNzI1IDEuNDYuMDE3LjkyNy4wMDggMS44NTQuMDA4IDIuNzgxdjUuODc0YzAgMS4zMDgtLjM1MiAxLjkwMS0xLjEzMSAxLjkwNGgtNS4xNGMtLjM4NC4wMzktLjc0My0uMzE2LS45MDUtLjg5NS0uMTU4LS41MS0uMTI0LTEuMTI2LjA4Ny0xLjU4LjIwMS0uNDU5LjUzMi0uNzEuODczLS42NjNoMy44NzNsLjQ2LjAwNXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXRhRGF0YVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z09wZW5zZWFMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOC44OTUgMTQuNjgxYy0uMDQ1LS4wNDUtLjExMi0uMDQ1LS4xOC0uMDIybC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMCAuMzEuMzEgMCAwMS4wODktLjA2N2MuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1LS4zNTkgMC0uNjI3LjI5MS0uNjI3LjY1IDAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjRhNS4xNiA1LjE2IDAgMDAuNDQ4LS45NDFjLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcuMDQ0LS4wMjIuMDIyLS4wOS0uMDIzLS4xMTJ6bS05Ljk5Ny0uNDkzaDIuNTU1Yy4wNDUgMCAuMDY4LS4wMjMuMDY4LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNjdsLTEuMjU1LS41ODNjLS4wMjMtLjAyMi0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDY3LjAyMi4xMTIuMDY3LjExMnpNMTMgMEM1LjgyOCAwIDAgNS44MjggMCAxM3M1LjgyOCAxMyAxMyAxMyAxMy01LjgyOCAxMy0xM1MyMC4xNzIgMCAxMyAwem0tLjA0NSAyMi40NTljLTUuMTc3IDAtOS4zNjktNC4xOTItOS4zNjktOS4zOTIgMC01LjE3NyA0LjE5Mi05LjM5MSA5LjM3LTkuMzkxIDUuMTc3IDAgOS4zNjggNC4yMTQgOS4zNjggOS4zOTEtLjAyMiA1LjItNC4yMTQgOS4zOTItOS4zNjkgOS4zOTJ6bTUuNzYtNy44bC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMCAuMzEuMzEgMCAwMS4wODktLjA2N2MuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1LS4zNTkgMC0uNjI3LjI5MS0uNjI3LjY1IDAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjRhNS4xNiA1LjE2IDAgMDAuNDQ4LS45NDFjLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcgMC0uMDQ1LS4wMjMtLjExMi0uMDY4LS4xMzQgMCAwLS4wNjctLjAyMy0uMTM1IDB6bS05LjgxNy0uNDcxaDIuNTU1Yy4wNDUgMCAuMDY4LS4wMjMuMDY4LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNjdsLTEuMjU1LS41ODNjLS4wMjMtLjAyMi0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDY3LjAyMi4xMTIuMDY3LjExMnpcIlxuICAgICAgICBmaWxsPVwiIzMyOTFFOVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMS40NzYgMTEuMjk2bC0xLjI1NS0uNTgyYy0uMDIzLS4wMjMtLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA0NC4wMjIuMDg5LjA2Ny4wODloMi41NTZjLjA0NCAwIC4wNjctLjAyMy4wNjctLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA0NHptNy40MTkgMy4zODVjLS4wNDUtLjA0NS0uMTEyLS4wNDUtLjE4LS4wMjJsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwYy4wMjItLjAyMi4wNDQtLjA0NC4wODktLjA2Ny4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjVzLS42MjcuMjkxLS42MjcuNjVjMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNC4xNzktLjI5MS4zMzYtLjYyNy40NDgtLjk0MS4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3LjA0NC0uMDIyLjAyMi0uMDktLjAyMy0uMTEyelwiXG4gICAgICAgIGZpbGw9XCIjMzI5MUU5XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnT3BlbnNlYUxvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdRckNvZGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0NyA0N1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjcXItY29kZV9zdmdfX2NsaXAwKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNS44NzUgMjQuNTQyaDQuNjY3djQuNjY2SDUuODc1di00LjY2NnptMTguNjY3LTE0aDQuNjY2djkuMzMzaC00LjY2NnYtOS4zMzN6bS00LjY2NyAxNGg5LjMzM3Y5LjMzM2gtNC42NjZ2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTE0IDBoNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aDQuNjY3djQuNjY2aC00LjY2N3Y0LjY2N2g0LjY2N3Y5LjMzM2gtNC42Njd2NC42NjdoLTQuNjY2di00LjY2N2gtOS4zMzR2NC42NjdoLTQuNjY2di05LjMzM2g5LjMzM3YtNC42NjdoNC42Njd2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTkuMzMzIDE4LjY2NnYtOS4zMzNoLTQuNjY2djkuMzMzaDQuNjY2ek0zMy44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgMzMuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwicXItY29kZV9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDQ3djQ3SDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdRckNvZGVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdSYXJpYmxlTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAuOCAwSDUuMkE1LjIgNS4yIDAgMDAwIDUuMnYxNS42QTUuMiA1LjIgMCAwMDUuMiAyNmgxNS42YTUuMiA1LjIgMCAwMDUuMi01LjJWNS4yQTUuMiA1LjIgMCAwMDIwLjggMHpcIlxuICAgICAgICBmaWxsPVwiI0ZFREEwM1wiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy45NCAxMi45MDVjLjgyLS4yMTMgMS41NDgtLjgyNiAxLjU0OC0yLjA1NyAwLTIuMDUtMS43NDEtMi41MjgtMy45NzItMi41MjhINi42M3Y5LjIzNGgzLjc0VjE0LjQyaDQuNDM3Yy42ODMgMCAxLjA4My4yNzEgMS4wODMuOTQydjIuMTkyaDMuNzR2LTIuMzA4YzAtMS4yNTgtLjcxLTIuMDUxLTEuNjktMi4zNDF6bS0zLjA2OS0uOTc0SDEwLjM3di0uOTAzaDQuNTAxYy40OSAwIC43ODcuMDY1Ljc4Ny40NTJzLS4yOTcuNDUxLS43ODcuNDUxelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUmFyaWJsZUxvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTYXZpbmdzUGlnKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy4zMTEuMDcxYy0zLjU4MS44MjEtNS45MzcgNy4yMTItNC43NjQgMTIuOTI1LjEyNy41OS4yMjIgMS4xMDcuMjIyIDEuMTc4IDAgLjA3Mi0uMzQ5LjM0LS43NjEuNjI1LS45NzIuNjI1LTIuNjMgMi4wODktMy4yODYgMi44OTJsLS41MDcuNjI1LS41MTctLjM3NWMtLjk3Mi0uNjk2LTIuMzE0LS43ODUtMy4yMDItLjIxNC0uMzguMjUtMS4yMzYgMS4yMzItMS4yMzYgMS40MjggMCAuMDcyLjQyMyAxLjA5Ljk0IDIuMjVsLjkzIDIuMTA2LS40MTIgMS4wODljLS41NDkgMS40MjgtMS4xODMgMy42NzctMS40MjYgNS4wN2wtLjE5IDEuMTA3aC0uNDg2Yy0uNzE4IDAtMS40OC40NDYtMS44OCAxLjEwNy0uNzA4IDEuMTc4LS42OTggMS4wMTctLjczIDcuOTQ0LS4wMiAzLjkxLjAxMSA2LjU1Mi4wNzQgNi45NjIuMTQ4LjkxLjY5OCAyIDEuMjE1IDIuMzkyLjM3LjI4Ni43MDguMzQgMi4yNzIuMzRoMS44NDlsLjk1IDEuNjc4Yy41MjkuOTEgMS4zMzIgMi4xMjQgMS43ODYgMi42OTVsLjgxMyAxLjAxOHYyLjk4MWMwIDIuNzMyLjAyMSAzLjAxNy4yNDMgMy42Ni40MTIgMS4yMzIuNzA4IDEuMzc1IDIuNzM3IDEuMzIxIDEuNTk1LS4wNTMgMS43ODUtLjA5IDIuMDYtLjQyOC40MzMtLjU1NC42NzYtMS4zNTcuNzQtMi41bC4wNjMtMSAuMzI3LjA5YzEuNDA1LjQxIDMuMTkuNTM1IDQuNDkuMzM5Ljc2LS4xMjUgMS40NDgtLjI2OCAxLjUzMi0uMzIxLjEwNi0uMDcyLjE1OC4xNzguMTkgMS4wNy4wNDIgMS4yNS4yMjIgMS44MjIuNzYgMi41LjI2NS4zNC40MzQuMzc1IDIuMTAzLjM3NSAxLjczMyAwIDEuODM4LS4wMTggMi4xNjYtLjQxLjYxMy0uNzUuNjk3LTEuMjMyLjc2LTQuNDQ2bC4wNTMtMi44OTIuNzkzLS45MjhjMS43NTMtMi4wODkgMy41MjgtNS41MTcgNC40NDctOC42MDUgMS4xNzMtMy44OTIgMS42MzgtOC44MDEgMS4yMTUtMTIuNzY0bC0uMTM3LTEuMzAzLjUwNy0uNDI5Yy41Ny0uNSAxLjIyNi0uNzE0IDEuNjI3LS41NTMuNDAyLjE3OC4zMTcuMzc1LS4xOC4zOTItMS4xOTMuMDU0LTEuMjU3IDIuNzE0LS4wNzMgMy4zMDMuMzcuMTk3LjQ1NC4xNzkuNzA3LS4xMjUuMTU5LS4xOTYuMzYtLjYwNy40NDQtLjkyOC4xOS0uNjc4LjItLjY3OC43Ni0uMTk3LjM4MS4zMjIuNDQ0LjM0LjU4Mi4xMDguMjQzLS40MTEuMDc0LS45NDctLjQ0NC0xLjM1Ny0uMjY0LS4yMTQtLjUxNy0uMzc1LS41OC0uMzc1LS4wNTQgMC0uMTA3LS4wOS0uMTA3LS4xOTYgMC0uNS0uMzgtMS40NDctLjY2NS0xLjcxNC0uNDQ0LS4zNzUtMS4zNzQtLjIxNS0yLjE0NS4zNzUtLjMyNy4yNS0uNjEyLjQ2NC0uNjIzLjQ2NC0uMDIxIDAtLjA3NC0uMjY4LS4xMTYtLjU5LS4xNDgtMS4xNDItLjg5OC0zLjc4NC0xLjU2NC01LjQ4LTEuNjctNC4yMy00LjI0Ny03LjY3Ni03LjE0Mi05LjU2OS0uNTQ5LS4zNTctMS4wMTQtLjY2LTEuMDM1LS42NzgtLjAxLS4wMzYuMDc0LS41MTguMTktMS4xMDcgMS4wMzYtNS4wMzQtLjY1NS0xMC43NjUtMy42NjYtMTIuNDc5LS44MzQtLjQ2NC0xLjg0OS0uNjI0LTIuNjczLS40NDZ6bTEuNzk2IDIuNjA3YzEuMzMyLjUgMi40MSAyLjAzNSAzLjAzMyA0LjI4NC4yNjQuOTQ2LjI5NSAxLjI1LjI5NSAyLjkyOCAwIDEuNzUtLjAyIDEuOTQ2LS4zNDggMy4wNy0xLjY0OCA1LjcxMy02LjM4MSA1LjcxMy03Ljk3NyAwLS4zMTctMS4xMDYtLjMzOC0xLjMzOS0uMzM4LTMuMDcgMC0xLjY3OC4wMzItMS45ODIuMjk2LTIuOTI4LjYwMi0yLjE3OCAxLjYyNy0zLjY3NyAyLjkwNS00LjIzLjg4OC0uMzk0IDEuMjI2LS40MTIgMi4xMzQtLjA1NHptLTQuMzUyIDE1LjM3Yy4wMiAwLS4zNDkuMjMyLS44MTQuNDgyLTEuODcgMS4wMTgtMi40OTMgMS44MjEtMi4yMTggMi44NTcuMDYzLjIzMi4yNTMuNTM1LjQwMS42NDIuMjQzLjE2MS40MTIuMTA3IDEuMTgzLS40NjQgMi43NzktMi4wMTcgNi4xNy0yLjIzMSA4Ljk2LS41NzEuNDk2LjMwMyAxLjE0LjczMiAxLjQxNS45ODIuNjIzLjUxNy45ODIuNDgyIDEuMjY4LS4xNDMuNDg2LTEuMTA3LS4yMzMtMi4wODktMi4zMjUtMy4yMzEtLjYwMi0uMzIyLTEuMDc3LS42MjUtMS4wNzctLjY3OS4wMS0uMDUzLjI0My0uNDQ2LjUyOC0uODc0bC41MTgtLjc4NiAxLjA1Ni42NDNjNC4wNDcgMi40MSA3LjI1OCA3Ljk5OCA4LjMwNCAxNC40Ni41MjggMy4yMzEuNDY1IDcuMjMtLjE2OSAxMC40OTctLjg0NSA0LjMzOC0yLjYyIDguMTU5LTUuMDI5IDEwLjg1NGwtMS4xMyAxLjI2OC0uMDEgMy4yNDktLjAxMSAzLjI2Ny0xLjM5NS4wNTMtMS40MDUuMDU0di0yLjMzOWMwLTEuMjY3LS4wMzItMi4zMi0uMDc0LTIuMzItLjA1MyAwLS4zNDkuMTI0LS42NjYuMjY3LS44ODcuNDEtMi44NTIuODAzLTMuOTQuODAzLTEuMTMgMC0yLjczNi0uMzc0LTMuOTItLjg5MmEyOC45MyAyOC45MyAwIDAwLS44NjYtLjM1N2MtLjAyMSAwLS4wNTMgMS4wMTctLjA2MyAyLjI2N2wtLjAzMiAyLjI4NS0xLjQwNS4wNTQtMS40MDUuMDUzLjAyMS0zLjQxLjAxLTMuNDEtLjg1NS0uOTgxYy0xLjAzNi0xLjIxNC0yLjEyNC0yLjg5Mi0yLjg3NC00LjQ0NWwtLjU1LTEuMTZINC4wNjRjLTIuMDE3IDAtMi4xMjMtLjAxOS0yLjM1Ni0uMzkzbC0uMjQzLS4zNzVWNDAuMjJjMC03LjM5MS0uMTM3LTYuODIgMS41OTYtNi45NDVsMS4xODMtLjA5LjI0My0xLjU3Yy40MzMtMi43MzIgMS4xMS00Ljk5OSAyLjMxNC03LjczLjE0Ny0uMzQuMTE2LS40NjQtLjYyNC0yLjE0Mi0uNDU0LTEtLjc1LTEuODQtLjY5Ny0xLjkyOC4xOC0uMzA0IDEuMjc4LjEwNyAyLjA2Ljc2N2wuNzkyLjY2Ljc5My0uOTk5Yy45NzItMS4yMTQgMi40NC0yLjU1MyAzLjY0NS0zLjMybC44OTgtLjU5LjUyOC44NGMuMjg1LjQ2NC41MzkuODU2LjU2Ljg3NHptMjEuMDg3IDE0LjI2NGMuMTI3LjA5LjEzNy4xNzkuMDQyLjUzNi0uMTI3LjQ0Ni0uMTguNS0uNDQ0LjMyMS0uMTY5LS4xMDctLjIzMi0uNjI1LS4wOTUtLjgzOS4wODUtLjE2LjI3NS0uMTYuNDk3LS4wMTh6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOC41NzUgMzAuMDFjLS4xMzguMDUzLS4zOC4zMi0uNTYuNjA2LS4zNi42MjUtLjQzNCAxLjYwNy0uMTcgMi40NjQuMjg2LjkyOCAxLjIwNSAxLjIxNCAxLjc2NS41MzUgMS4wMzUtMS4yNS4yNDMtMy45OTktMS4wMzUtMy42MDZ6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTYXZpbmdzUGlnXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU21hcnRDb250cmFjdMSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyMyAxLjM2OEMxLjg2NCAyLjA4OC4zMzMgNS4wMjUuMDcgNy4xM2MtLjMzNiAyLjM4Mi41NjEgNC45ODYgMi4wNTYgNi4xNS43MS41NTMgMi4xMy44MyA0LjExLjgzaDIuOTl2Mi40OTNjMCAxLjM4NS4xODcgMi40OTMuMzc0IDIuNDkzLjQ4NSAwIC40ODUtMTEuNjM0IDAtMTMuNTE3LS4xODctLjc3Ni0uNjczLTEuODg0LTEuMTIxLTIuNTQ5TDcuNzMgMS45MjJoMTMuMTE3YzExLjY5NiAwIDEzLjIyOC4xMTEgMTQuMi45NDIgMi4wMTggMS43NzMgMi4yMDUgMy4yMTMgMi4yMDUgMTcuMjg1IDAgOC4xNDQuMTUgMTIuNzk3LjM3MyAxMi43OTcuMjI0IDAgLjM3NC00LjU5OC4zNzQtMTIuNzQyIDAtMTMuODUtLjE1LTE1LjEyNC0yLjA1NS0xNy43MjhsLTEuMDEtMS4zODVMMTkuMzkuOTgxYy04LjU1Ny0uMDU2LTE1LjkxOS4xMS0xNi4zNjcuMzg3em0zLjk2IDEuMzg1YzEuNDk2IDEuMTY0IDIuMjQzIDMuNDkgMi4yNDMgNy4yMDJ2My4wNDdINy41NDRjLTEuNjQ0IDAtMS42NDQgMC0xLjMwOC0xLjQ0LjIyNS0uNzc2LjI2Mi0xLjk5NC4xNS0yLjc3LS4yMjQtMS4zODUtMi4yNDItMy4zOC0yLjY5LTIuNjYtLjE1LjIyMi0uMDM4LjUuMjYuNjY2Ljc4Ni4zODcgMS45MDcgMi4yMTYgMS45MDcgMy4xNTcgMCAuNDQ0LS4zMzcgMS4zMy0uNzg1IDEuOTk1LS45NzIgMS40NC0yLjM5MiAxLjA1Mi0zLjU4Ny0uOTQyQy40OCA5LjQuNDA3IDguMDE2IDEuMTkgNS41NzggMi4yMzkgMi4yNTYgNC43OCAxLjAzNyA2Ljk4NSAyLjc1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy40NDcgMTEuODk0YzAgLjMzMyAyLjI0Mi41NTQgNS45NDIuNTU0IDMuNTg3IDAgNi4wNTQtLjIyMSA2LjIwMy0uNTU0LjE1LS4zODctMS45NDMtLjU1NC01Ljk0Mi0uNTU0LTMuODg2IDAtNi4yMDMuMjIyLTYuMjAzLjU1NHpNMTIuOTYzIDE2Ljg4YzAgLjMzMyAxLjMwOC41NTQgMy4xNzYuNTU0IDEuODY5IDAgMy4xNzctLjIyMSAzLjE3Ny0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc3LS41NTQtMS44NjggMC0zLjE3Ni4yMjItMy4xNzYuNTU0ek0yMC44MSAxNi44OGMwIC4zMzMgMS4xMjEuNTU0IDIuNjE2LjU1NHMyLjYxNi0uMjIxIDIuNjE2LS41NTRjMC0uMzMyLTEuMTIxLS41NTQtMi42MTYtLjU1NHMtMi42MTYuMjIyLTIuNjE2LjU1NHpNMzEuMjc0IDE2Ljg4YzAgLjI3Ny42NzIuNTU0IDEuNDk0LjU1NHMxLjQ5NC0uMjc3IDEuNDk0LS41NTRjMC0uMzMyLS42NzItLjU1NC0xLjQ5NC0uNTU0cy0xLjQ5NC4yMjItMS40OTQuNTU0ek05LjUyNSAyMS42NDVjLS4xODcuMjIxLS4zIDcuNDIzLS4zIDE2LjAxIDAgMTQuMzQ5LjAzOCAxNS42NzguNjczIDE2LjUxLjU2MS43NzUgMS44NjkuOTQxIDguMTQ3IDEuMDUybDcuNDM2LjE2Ni4xMTIgNC4yNjZjLjA3NSAyLjM4Mi4yMjUgNC4zMjEuMzM3IDQuMzIxLjE1IDAgLjc0Ny0uNjY1IDEuMzA4LTEuNDk2bDEuMDQ2LTEuNDk2IDEuMDQ2IDEuNDk2Yy41Ni44MzEgMS4xNTkgMS40OTYgMS4zMDggMS40OTYuMTUgMCAuMjYyLTEuOTk0LjI2Mi00LjQzMnYtNC40MzJoMi45NTJjNC4xMSAwIDQuMTQ4LS4wNTUgNC4xNDgtMTAuOTE0IDAtNC45ODYtLjE1LTguNTMxLS4zNzQtOC43NTMtLjIyNC0uMjIxLS4zNzMgMS4yNzQtLjM3MyA0LjF2NC40ODdIMzUuNTdjLS45MzQgMC0xLjY4Mi4yMjItMS42ODIuNTU0IDAgLjI3Ny43NDguNTU0IDEuNjgyLjU1NGgxLjY4MnYzLjU0NmMwIDUuMzE4IDAgNS4zMTgtMy40MDEgNS4zMThIMzAuOXYtMi4xNmMwLTEuNjA3LjIyNC0yLjQzOC43NDctMi45OTIuNjczLS43Mi43ODUtMS4yNzQuNjczLTQuNTk4bC0uMTEyLTMuNzEyLTIuMDU1LTEuNjYyLTIuMDU2LTEuNjYyLTEuODY4IDEuNjYyLTEuODY5IDEuNjA2LS4xMTIgMy43NjhjLS4xMTIgMy4zMjQgMCAzLjg3OC42NzMgNC41OTguNTIzLjU1NC43NDcgMS4zODUuNzQ3IDIuOTkydjIuMTZoLTcuNjIzYy04LjcwNyAwLTguMDcyLjM4OC04LjA3Mi01LjMxOHYtMy41NDZoNi4zNTNjMy45OTggMCA2LjM1My0uMjIxIDYuMzUzLS41NTQgMC0uMzMyLTIuMzU1LS41NTQtNi4zNTMtLjU1NEg5Ljk3M2wtLjA3NS0xMS40MTJjLS4wNzQtNi4yNi0uMjI0LTExLjE5MS0uMzczLTEwLjk3em0yMC40NzggMTguMjgxYzEuNjQ0IDEuNDQgMS42NDQgMS40NCAxLjY0NCA0LjU0M3YzLjE1OGwtMS43MTkgMS4zMy0xLjcxOSAxLjM4NS0xLjY0NC0xLjMzLTEuNjQ0LTEuMzg1VjQ0LjQ3YzAtMy4xMDIgMC0zLjE1NyAxLjYwNy00LjU0My44Ni0uNzc1IDEuNjA3LTEuNDQgMS42ODEtMS40NC4wNzUgMCAuODYuNjY1IDEuNzk0IDEuNDR6bS0uODIyIDExLjAyNWwuOTcxLS45NDJWNjEuOTJsLS45MzQtMS4yNzQtLjkzNC0xLjI3NC0uOTM0IDEuMjc0LS45MzQgMS4yNzR2LTExLjhsLjg5Ni44MzFjLjg2LjgzMSAxLjAxLjgzMSAxLjg2OSAwelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjkxIDQxLjgxYzAgLjI3Ny4zMzcuNzc2Ljc0NyAxLjEwOC40NDkuMzMzLjc0OCAxLjE2My43NDggMS45NCAwIC43NzUuMTg2IDEuMzg0LjM3MyAxLjM4NC43NDcgMCAuMzc0LTMuMjY4LS40NDgtNC4xLS45NzEtLjk5Ny0xLjQyLTEuMTA4LTEuNDItLjMzMnpNMTQuMDg0IDIxLjg2NmMwIC4yNzcuNjcyLjU1NCAxLjUzMi41NTQuODk2IDAgMS40Mi0uMjIxIDEuMjctLjU1NC0uMTEyLS4zMzItLjgyMi0uNTU0LTEuNTMyLS41NTQtLjcxIDAtMS4yNy4yMjItMS4yNy41NTR6TTE4Ljc1NSAyMS44NjZjLS4xNS4zODggMi41MDQuNTU0IDcuNjIzLjU1NCA1LjAwOCAwIDcuODg1LS4yMjEgNy44ODUtLjU1NCAwLS4zMzItMi44MDMtLjU1NC03LjYyMy0uNTU0LTQuNzA5IDAtNy43MzYuMjIyLTcuODg1LjU1NHpNMTIuNzc2IDI3LjQwNmMuMTUuMzMzIDIuODAzLjU1NCA2LjcyNi41NTQgMy45MjQgMCA2LjU3Ny0uMjIxIDYuNzI3LS41NTQuMTUtLjM4OC0yLjE2OC0uNTU0LTYuNzI3LS41NTRzLTYuODc1LjE2Ni02LjcyNi41NTR6TTI3LjkxIDI3LjQwNmMwIC4zMzMgMS4zMDguNTU0IDMuMTc3LjU1NCAxLjg2OCAwIDMuMTc2LS4yMjEgMy4xNzYtLjU1NCAwLS4zMzItMS4zMDgtLjU1NC0zLjE3Ni0uNTU0LTEuODY5IDAtMy4xNzcuMjIyLTMuMTc3LjU1NHpNMTIuOTYzIDMyLjM5MmMwIC4zMzMgMy4yNS41NTQgOC45NjguNTU0czguOTY5LS4yMjEgOC45NjktLjU1NGMwLS4zMzItMy4yNTEtLjU1NC04Ljk2OS0uNTU0LTUuNzE3IDAtOC45NjguMjIyLTguOTY4LjU1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NtYXJ0Q29udHJhY3TEsGNvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1R3aXR0ZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjE0IDcuMjVjLS45MzEuNDIzLTEuOTM0LjctMi45NzMuODM0YTUuMTk0IDUuMTk0IDAgMDAyLjI3MS0yLjg3NiAxMC40NCAxMC40NCAwIDAxLTMuMjg2IDEuMjY5Yy0uOTU1LTEuMDQtMi4yOTYtMS42NDQtMy44MTktMS42NDQtMi44NCAwLTUuMTYgMi4zMi01LjE2IDUuMTg0IDAgLjQxMS4wNS44MS4xMzQgMS4xODRBMTQuNzM1IDE0LjczNSAwIDAxMy42MjUgNS43ODhhNS4xMjggNS4xMjggMCAwMC0uNyAyLjU5OGMwIDEuOC45MDUgMy4zOTUgMi4zMDcgNC4zMDItLjg1OCAwLTEuNjU1LS4yNDItMi4zNTYtLjYwNXYuMDM3YTUuMTg4IDUuMTg4IDAgMDA0LjE1NyA1LjA4NyA1LjEgNS4xIDAgMDEtMi4zMzMuMDg0IDUuMTcyIDUuMTcyIDAgMDA0LjgzNCAzLjYwMSAxMC4yOTYgMTAuMjk2IDAgMDEtNi40NCAyLjIyNGMtLjQxMSAwLS44MjItLjAyNS0xLjIzMy0uMDczYTE0LjY3NSAxNC42NzUgMCAwMDcuOTUgMi4zMzJjOS41MjIgMCAxNC43NTQtNy45MDIgMTQuNzU0LTE0Ljc1NCAwLS4yMyAwLS40NDctLjAxMi0uNjc2QTEwLjM1OSAxMC4zNTkgMCAwMDI3LjE0IDcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdWZWN0b3IocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOCAyOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzLjk4OCA5LjEzOGgtMS43MTN2LTIuNjFDMjIuMjc1IDIuOTIzIDE4LjQzNyAwIDEzLjcwOCAwIDguOTc3IDAgNS4xNCAyLjkyNCA1LjE0IDYuNTI3djIuNjExSDMuNDI3QzEuNTQyIDkuMTM4IDAgMTAuMzEzIDAgMTEuNzV2MTMuMDU1YzAgMS40MzYgMS41NDIgMi42MTEgMy40MjcgMi42MTFoMjAuNTYxYzEuODg1IDAgMy40MjctMS4xNzUgMy40MjctMi42MTFWMTEuNzQ5YzAtMS40MzYtMS41NDItMi42MS0zLjQyNy0yLjYxem0tMTUuNDItMi42MWMwLTIuMTY4IDIuMjk1LTMuOTE3IDUuMTQtMy45MTcgMi44NDQgMCA1LjE0IDEuNzUgNS4xNCAzLjkxNnYyLjYxMUg4LjU2OHYtMi42MXptMTUuNDIgMTguMjc2SDMuNDI3VjExLjc0OWgyMC41NjF2MTMuMDU1em0tMTAuMjgtMy45MTZjMS44ODQgMCAzLjQyNi0xLjE3NSAzLjQyNi0yLjYxMSAwLTEuNDM2LTEuNTQyLTIuNjExLTMuNDI3LTIuNjExLTEuODg0IDAtMy40MjYgMS4xNzUtMy40MjYgMi42MSAwIDEuNDM3IDEuNTQyIDIuNjEyIDMuNDI2IDIuNjEyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1ZlY3RvclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1lvdXR1YmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEyLjA4MyAxOC4xMjVsNi4yNzItMy42MjUtNi4yNzItMy42MjV2Ny4yNXptMTMuOTY5LTkuNDYxYy4xNTcuNTY4LjI2NSAxLjMyOS4zMzggMi4yOTYuMDg0Ljk2Ni4xMiAxLjguMTIgMi41MjVsLjA3MyAxLjAxNWMwIDIuNjQ2LS4xOTMgNC41OTItLjUzMSA1LjgzNi0uMzAyIDEuMDg4LTEuMDAzIDEuNzg5LTIuMDkgMi4wOS0uNTY5LjE1OC0xLjYwOC4yNjctMy4yMDMuMzM5LTEuNTcuMDg0LTMuMDA5LjEyLTQuMzM4LjEybC0xLjkyMS4wNzNjLTUuMDYzIDAtOC4yMTctLjE5My05LjQ2MS0uNTMxLTEuMDg4LS4zMDItMS43ODktMS4wMDMtMi4wOS0yLjA5LS4xNTgtLjU2OS0uMjY3LTEuMzMtLjMzOS0yLjI5Ny0uMDg1LS45NjYtLjEyLTEuOC0uMTItMi41MjVMMi40MTYgMTQuNWMwLTIuNjQ2LjE5My00LjU5Mi41MzEtNS44MzYuMzAyLTEuMDg4IDEuMDAzLTEuNzg5IDIuMDktMi4wOS41NjktLjE1OCAxLjYwOC0uMjY3IDMuMjAzLS4zMzkgMS41Ny0uMDg1IDMuMDA4LS4xMiA0LjMzOC0uMTJsMS45MjEtLjA3M2M1LjA2MyAwIDguMjE3LjE5MyA5LjQ2MS41MzEgMS4wODguMzAyIDEuNzg5IDEuMDAzIDIuMDkgMi4wOXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBTdG9yZSB9IGZyb20gJy4vQXBwU3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrU3F1YXJlIH0gZnJvbSAnLi9DaGVja1NxdWFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR29vZ2xlUGxheVN0b3JlIH0gZnJvbSAnLi9Hb29nbGVQbGF5U3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWVwYWdlT3B0aW9uIH0gZnJvbSAnLi9Ib21lcGFnZU9wdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgxLBuc3RhZ3JhbSB9IGZyb20gJy4vxLBuc3RhZ3JhbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2RuIH0gZnJvbSAnLi9MaW5rZG4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWwgfSBmcm9tICcuL01haWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lZGlhIH0gZnJvbSAnLi9NZWRpYSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YURhdGEgfSBmcm9tICcuL01ldGFEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuc2VhTG9nbyB9IGZyb20gJy4vT3BlbnNlYUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFyQ29kZSB9IGZyb20gJy4vUXJDb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSYXJpYmxlTG9nbyB9IGZyb20gJy4vUmFyaWJsZUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhdmluZ3NQaWcgfSBmcm9tICcuL1NhdmluZ3NQaWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNtYXJ0Q29udHJhY3TEsGNvbiB9IGZyb20gJy4vU21hcnRDb250cmFjdMSwY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3IgfSBmcm9tICcuL1ZlY3RvcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWW91dHViZSB9IGZyb20gJy4vWW91dHViZSciLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnxLBuc3RhZ3JhbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOS40MjUgMi40MTdoMTAuMTVhNy4wMTMgNy4wMTMgMCAwMTcuMDA4IDcuMDA4djEwLjE1YTcuMDA4IDcuMDA4IDAgMDEtNy4wMDggNy4wMDhIOS40MjVhNy4wMTMgNy4wMTMgMCAwMS03LjAwOC03LjAwOFY5LjQyNWE3LjAwOCA3LjAwOCAwIDAxNy4wMDgtNy4wMDh6bS0uMjQyIDIuNDE2YTQuMzUgNC4zNSAwIDAwLTQuMzUgNC4zNXYxMC42MzRhNC4zNDcgNC4zNDcgMCAwMDQuMzUgNC4zNWgxMC42MzRhNC4zNSA0LjM1IDAgMDA0LjM1LTQuMzVWOS4xODNhNC4zNDcgNC4zNDcgMCAwMC00LjM1LTQuMzVIOS4xODN6bTExLjY2IDEuODEzYTEuNTEgMS41MSAwIDExMCAzLjAyIDEuNTEgMS41MSAwIDAxMC0zLjAyek0xNC41IDguNDU4YTYuMDQyIDYuMDQyIDAgMTEwIDEyLjA4NCA2LjA0MiA2LjA0MiAwIDAxMC0xMi4wODR6bTAgMi40MTdhMy42MjUgMy42MjUgMCAxMDAgNy4yNSAzLjYyNSAzLjYyNSAwIDAwMC03LjI1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsG5zdGFncmFtXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2svdXNlV2luZG93U2l6ZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgRXhoaWJpdGlvblNpZGUgZnJvbSAnLi4vLi4vcm93L2V4aGliaXRpb25TaWRlJ1xyXG5pbXBvcnQgUXVvdGF0aW9uIGZyb20gXCIuLi8uLi9yb3cvcXVvdGF0aW9uXCJcclxuaW1wb3J0IFJlYXNvblNpZGUgZnJvbSBcIi4uLy4uL3Jvdy9yZWFzb25TaWRlXCJcclxuaW1wb3J0IEJ1c2luZXNzU2lkZSBmcm9tIFwiLi4vLi4vcm93L2J1c2luZXNzU2lkZVwiXHJcbmltcG9ydCBHZXRTdGFydGVkU2lkZSBmcm9tIFwiLi4vLi4vcm93L2dldFN0YXJ0ZWRcIlxyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tIFwiLi4vLi4vZm9vdGVyL2luZGV4XCJcclxuZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IHNpemUud2lkdGggPCBDT05TVC5UQUJMRVRfU0laRSA/IFxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uICBmbGF0Lz4gOiA8TmF2aWdhdGlvbiAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgPEV4aGliaXRpb25TaWRlLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxRdW90YXRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFzb25TaWRlLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXNpbmVzc1NpZGUgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHZXRTdGFydGVkU2lkZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNpemluZ30gPntKU09OLnN0cmluZ2lmeShzaXplKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIHsvKiBUaGVyZSBoYXZpbmcgbWFpbiBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyU2lkZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG5cclxuLypcclxuPE1haW5TaWRlLz46IFBhZ2UgaGFzIG9uZSBncmlkIG5hbWVkIE1haW5TaWRlLiBcclxuPE5hdmlnYXRpb24vPjogSXQgaGFzIGljb24sIG1hcmssIGJ1dHRvbnMsYW5kIGxvY2F0ZWQgb24gdG9wIG9mIHBhZ2VzLiBcclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CdXR0b24gKHsgY2hpbGRyZW4sIC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuICg8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0gey4uLnByb3BzfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNRU5VID0gW1xyXG4gICAgeyAgIFxyXG4gICAgICAgIGtleTogJ3ByaXZhY3lQb2xpY3knLFxyXG4gICAgICAgIHRpdGxlOidQcml2YWN5IFBvbGljeSdcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3RvcycsXHJcbiAgICAgICAgdGl0bGU6ICdUT1MnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbXlDb2xsZWN0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ015IENvbGxlY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2NvbnRhY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCdcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gRm9vdGVyTmF2aWdhdGlvbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgTUVOVS5tYXAoKG1lbnUpPT57XHJcbiAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLk5hdn0gc2l6ZT0nMTRweCc+e21lbnUudGl0bGV9PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgfSlcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTmF2aWdhdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tICcuLi90ZXh0L3RleHQtdGl0bGUnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRnJhbWVCdXR0b24gZnJvbSBcIi4uL2ZyYW1lL2ZyYW1lQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcbmNvbnN0IE1FTlUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbWFrZS1hbi1uZnQnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFrZSBhbiBORlQnLFxyXG4gICAgICAgIGhyZWY6ICcvbWFrZU5mdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYnVzaW5lc3Mtc2lnbnVwJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ0J1c2luZXNzIFNpZ251cCcsXHJcbiAgICAgICAgaHJlZjogJy9idXNpbmVzc1NpZ25VcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnU3Vic2NyaWJlLWZvci11cGNvbWluZy1kcm9wcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdTdWJzY3JpYmUgZm9yIFVwY29taW5nIERyb3BzJyxcclxuICAgICAgICBocmVmOiAnL3N1YnNjcmliZUZvclVwY29taW5nRHJvcHMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ25mdC1zdGFuZGFyZHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUIFN0YW5kYXJkcycsXHJcbiAgICAgICAgaHJlZjogJy9uZnRTdGFuZGFyZHMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Rvd25sb2FkLW5mdC1jcmVhdG9yJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ0Rvd25sb2FkIE5GVCBDcmVhdG9yJyxcclxuICAgICAgICBocmVmOiAnL2Rvd25sb2FkTkZUQ3JlYXRvcidcclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7ZmxhdD1mYWxzZX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvKiBOYXZpZ2F0b3IgKi9cclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdG9yfT5cclxuICAgICAgICB7LyogTWFyayBTaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFyayl9PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGhyZWY9Jy8nPk93bmFibGUtTlM8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIExpbmsgU2lkZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJ0bn0+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgTUVOVS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJCdG59XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PSB7bWVudS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWVudS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiYgbWVudS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxGcmFtZUJ1dHRvbj5Mb2dpbjwvRnJhbWVCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmbGF0ICYmIDxIb21lcGFnZU9wdGlvbi8+fVxyXG4gICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFBob3RvKHtzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JlY2VpcHRjb2luLXJlY2VpcHRjaGFpbi1kZTU2MC5hcHBzcG90LmNvbS9vL3dlYnNpdGUlMkZqcGllcmNlJTJGai1waWVyY2UtcHJvbW8tYmxhY2stMDEucG5nP2FsdD1tZWRpYSZ0b2tlbj01Y2YwY2YwZi0zMWZhLTRlZjItOWYyMS1lYWExMzY1OTU2N2JcIiwgYWx0LCB3aWR0aD00NzAsIGhlaWdodD0yOTJ9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5waG90b30gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDpoZWlnaHR9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT4gICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnVzaW5lc3NTaWRlLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZnVuY3Rpb24gQnVzaW5lc3NTaWRlKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXNpbmVzc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuYnVzaW5lc3NUZXh0fSBcclxuICAgICAgICAgICAgc2l6ZT0nMzNweCcgXHJcbiAgICAgICAgICAgIGJvbGQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICBmb3IgQnVzaW5lc3NcclxuICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2luZXNzU2lkZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9leGhpYml0aW9uU2lkZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3Bob3RvL2luZGV4J1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IE1pbnRCdXR0b24gZnJvbSAnLi4vZnJhbWUvbWludEJ1dHRvbidcclxuXHJcbmZ1bmN0aW9uIEV4aGliaXRpb24oeyBIZWFkZXIsIFRleHQsIE93bmVyLCBzcmM9XCJodHRwczovL293bmVyZnkuY29tL2pwYW5kZnJpZW5kc1wifSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiBUZXh0IFNpZGUgRnJvbSBFeGhpYml0aW9uIHNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0fT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgU2lkZSAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0SGVhZGVyfSBzaXplPSczM3B4JyBib2xkPkNBJEggQ293czwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJMaW5lfS8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUZXh0IFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnN1YlRleHR9ICBzaXplPScyMnB4JyA+Tm93IE1pbnRpbmc6IENoaWMtQS1EZWVzLEZpcnN0IE5GVHMgdG8gR2VuZXJhdGUgRUdHUyBUb2tlbnM8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCdXR0b24gU2lkZSAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW50QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1pbnRCdXR0b259Pk1JTlQgQ0hJQy1BLURFRSBORlQ8L01pbnRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUGhvdG9zIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9FeGhpYml0aW9ufT5cclxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBob3RvLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGhvdG8gc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yZWNlaXB0Y29pbi1yZWNlaXB0Y2hhaW4tZGU1NjAuYXBwc3BvdC5jb20vby93ZWJzaXRlJTJGY2hpY2FkZWVzJTJGY2FzaGNvd3MucG5nP2FsdD1tZWRpYSZ0b2tlbj02MGVmNGFhNy00MmM5LTQ3ZGUtODJhNi1iNzE5OTUzNzQ5YzNcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgey8qIE93bmVyIE9mIFBob3RvcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdWJPd25lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIHNpemU9JzEycHgnIGJvbGQ+VVBDT01JTkcgQ09MTEVDVElPTjo8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMTJweCc+Si5QaWVyY2UgYW5kIEZyaWVuZHMgLSBIYW5kIFBhaW50ZWQgYW5kIFNpZ25lZDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4aGliaXRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2V0U3RhcnRlZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgR2V0U3RhcnRlZEJ1dHRvbiBmcm9tICcuLi9mcmFtZS9nZXRTdGFydGVkQnV0dG9uJ1xyXG5pbXBvcnQgU3VpdENhc2UgZnJvbSAnLi4vLi4vUGhvdG9zL3N1aXRjYXNlLmpwZydcclxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9waG90b1wiO1xyXG5cclxuZnVuY3Rpb24gR2V0U3RhcnRlZCgpe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogQ29udGFpbmVyICovIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiBDb250YWluZXIgVGV4dCBTaWRlKi8gfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWRUZXh0U2lkZX0+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkSGVhZGVyVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBvcGFjaXR5PScwLjgnIHNpemU9JzI2cHgnPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNwYW59Pk5GVCBRUiBjb2RlcyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSwgYWRkIHZhbHVlIGFuZCBwcmV2ZW50IDxici8+IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJmaXR0aW5nIG9mIGdvb2RzLjwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogVGV4dCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZE1haW5UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIHNpemU9JzIwcHgnIG9wYWNpdHk9JzAuOCc+Q3JlYXRlIE5GVHMgZm9yIHlvdXIgYnVzaW5lc3Mgb3IgY3VzdG9tZXIgYXQgc2NhbGU8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZEJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdldFN0YXJ0ZWRCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZEJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLkdldFN0YXJ0ZWRCdXR0b25UZXh0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR2V0U3RhcnRlZEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEltYWdlIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2VTaWRlfT5cclxuICAgICAgICAgICAgICAgIDxQaG90byBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gc3JjPVwiaHR0cHM6Ly9vd25lcmZ5LmNvbS9pbWcvaG9tZS9zdWl0Y2FzZS5qcGdcIiB3aWR0aD0nMzQ1cHgnIGhlaWdodD0nMjA3Ljk4NicgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTdGFydGVkOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVvdGF0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gUXVvdGF0aW9uKCl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXVvSGVhZGVyVGV4dH0gXHJcbiAgICAgICAgICAgICAgICBzaXplPScyNnB4JyBcclxuICAgICAgICAgICAgICAgIGJvbGRcclxuICAgICAgICAgICAgICAgID5UcmFkZSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TIDwvc3Bhbj5jcmVhdGVkIG9uIG1hcmtldHBsYWNlIHBsYXRmb3Jtcy5cclxuICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvTWlkZGxlfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdW9NaWRkbGVUZXh0fSBcclxuICAgICAgICAgICAgICAgIHNpemU9JzE2cHgnIFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eT0nMC42JyBcclxuICAgICAgICAgICAgICAgIGJvbGRcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUcmFkZSBPd25hYmxlLU5TIGNyZWF0ZWQgb24gbWFya2V0cGxhY2UgcGxhdGZvcm1zLlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW9Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnF1b0Zvb3RlclRleHR9IFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nMTZweCcgXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PScwLjYnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91LHRoZSBjcmVhdG9yLCBvd24geW91ciBwcml2YXRlIGtleXMsIHRoZXJlZm9yZSBvd24geW91ciBhc3NldHMgYW5kIGFyZSBmcmVlIHRvLDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zlciwgc2VsbCBvciB0cmFkZSBORlRzIGFueXdoZXJlIG9uIHRoZSBkaWdpdGFsIG1hcmtldHBsYWNlLlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW9JY29uc30+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5SYXJpYmxlTG9nbyBjbGFzc05hbWU9e3N0eWxlcy5xdW9SYXJpYmxlfS8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5PcGVuc2VhTG9nbyBjbGFzc05hbWU9e3N0eWxlcy5xdW9PcGVuc2VhfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVvdGF0aW9uIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gXCIuLi90ZXh0L2hlYWQtdGl0bGVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3JlYXNvblNpZGUubW9kdWxlLmNzcydcclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3Bob3RvL2luZGV4J1xyXG5pbXBvcnQgUmVhc29uIGZyb20gJy4uL2Zvcm0vcmVhc29uU2lkZS9pbmRleCdcclxuaW1wb3J0IFJlYXNvbkltYWdlIGZyb20gJy4uLy4uL1Bob3Rvcy9yZWFzb25TaWRlUGhvdG8ucG5nJ1xyXG5cclxuZnVuY3Rpb24gUmVhc29uU2lkZSgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAvKiBDb250YWluZXIgKi8gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvbkhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvbkhlYWRlclRleHR9IHNpemU9JzIwcHgnIGJvbGQ+UmVhc29ucyB0byBORlQgRXZlcnl0aGluZyB3aXRoIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNwYW59Pk93bmFibGUtTlM8L3NwYW4+PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuTGluZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSZWFzb24gU2lkZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzb25UZXh0U2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYXNvbi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBJbWFnZSBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFzdEltYWdlU2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBob3RvIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9vd25lcmZ5LmNvbS9pbWcvaG9tZS92YWx1YWJsZXMuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPSc4MzEuOTk3cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSAnMTM4Ljk5M3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTM5JyBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J3JlYXNvbnNpZGUnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGb290ZXIgU2lkZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUZXh0fSBzaXplPScxOHB4JyBvcGFjaXR5PScwLjYnPk5GVCBpcyBwZXJtYW5lbnQgaW1tdXRhYmxlIHJlY29yZCBvZiB3aG8gb3ducyBhbnl0aGluZyBvZiB2YWx1ZTwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYXNvblNpZGUiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkLXRpdGxlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRUaXRsZSh7IGJvbGQ9IGZhbHNlLGNsYXNzTmFtZSAsY2hpbGRyZW4sIHNpemU9MjAsIG9wYWNpdHk9MX0pe1xyXG4gICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFtzdHlsZXMuVGl0bGUsIFxyXG4gICAgICAgIGJvbGQgJiYgc3R5bGVzLmJvbGQsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgXSl9XHJcbiAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpzaXplLCBvcGFjaXR5OiBvcGFjaXR5fX1cclxuICAgICAgICA+e2NoaWxkcmVufTwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUaXRsZVxyXG5cclxuLypcclxuICAgIGNuIHN0YW5kIGZvciBjbGFzc25hbWVzOiAnQ2xhc3NuYW1lcycgIGlzIHByZXZlbnQgY2xhc3Mgb3ZlcndyaXRlLiBJdCBjb21lcyBtb3JlIHRoYW4gb25lIGNsYXNzIGludG8gZnVuY3Rpb24sIGl0J3MgcmVhc29uIGFib3V0IGNvbmZsaWN0LiBcclxuICAgIGJvbGQ6IFNvbWUgdGV4dCBoYXMgYm9sZCBmb250IHdlaWdodCwgYnV0IHNvbWUgaXQgaGFzbid0LiBXaGVuIHRleHQgaGFzIGJvbGQgZm9udCB3ZWlnaHQgcHJvcGVydGllcywgYm9sZCBwcm9wZXJ0aWVzIHdpbGwgaGF2ZSBiZWVuIGFjdGl2YXRlZC5cclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90ZXh0LXRpdGxlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIFRleHRUaXRsZSh7IGJvbGQ9ZmFsc2UsIGNoaWxkcmVufSl7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtjbihbc3R5bGVzLlRpdGxlLCBib2xkICYmIHN0eWxlcy5ib2xkXSl9PntjaGlsZHJlbn08L3A+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0VGl0bGUiLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIFRBQkxFVF9TSVpFOiA5NDMsXHJcbiAgICBERVNLVE9QX1NJWkU6IDEyNzBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VORlRPcHRpb249W1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ05GVCcsXHJcbiAgICAgICAgdGl0bGU6ICdORlQoTm9uIEZ1bmdpYmxlIFRva2VuKSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnRlQnLFxyXG4gICAgICAgIHRpdGxlOiAnRlQoRnVuZ2libGUgVG9rZW4pJ1xyXG4gICAgfV1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQlVTSU5FU1MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ05GVHNmb3J5b3VyQnVzaW5lc3MnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUcyBmb3IgeW91ciBCdXNpbmVzcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ0NyZWF0ZUFDb2xsZWN0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ0NyZWF0ZSBhIENvbGxlY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdDdXN0b21lckFTdXBwb3J0JyxcclxuICAgICAgICB0aXRsZTogJ0N1c3RvbWVyIEEgU3VwcG9ydCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ05GVFN0YW5kYXJkQ29sbGFib3JhdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdORlQgU3RhbmRhcmQgQ29sbGFib3JhdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5IDogJ1NvbWV0aGluZ0Vsc2UnLFxyXG4gICAgICAgIHRpdGxlOiAnU29tZXRoaW5nIEVsc2UnXHJcbiAgICAgIFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgSU5GTyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NsYWltIE93bmVyc2hpcCcsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1Byb3ZlIEV4aXRlbmNlJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnVmVyaWZ5IEF1dGhlbnRpY2l0eScsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1ByaXZhdGVseSBDb25uZWN0IHdpdGggdGhlIE93bmVyJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU2VjdXJlIERpZ2l0YWwgQXNzZXRzJyxcclxuICAgICAgICBtYXJrOiB0cnVlXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG4vLyBIb29rXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXHJcbiAgICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcclxuICAgICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gICAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hvbWVQYWdlL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0Lz4gICAgICAgIFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9QaG90b3MvcmVhc29uU2lkZVBob3RvLjhkNmU5MTQ3MGQ1NWRkNDIwY2MyYTlmOWVhYzlkNzk5LnBuZ1wiLFwiaGVpZ2h0XCI6MTM5LFwid2lkdGhcIjo4MzIsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGUGhvdG9zJTJGcmVhc29uU2lkZVBob3RvLjhkNmU5MTQ3MGQ1NWRkNDIwY2MyYTlmOWVhYzlkNzk5LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvUGhvdG9zL3N1aXRjYXNlLmRkZjYxNjA3ZDFhYzhkMjVlZjY1OWQ0YzhhMTViOGI5LmpwZ1wiLFwiaGVpZ2h0XCI6NDE4LFwid2lkdGhcIjo2OTQsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGUGhvdG9zJTJGc3VpdGNhc2UuZGRmNjE2MDdkMWFjOGQyNWVmNjU5ZDRjOGExNWI4YjkuanBnJnc9OCZxPTcwXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhc2VCdG5cIjogXCJzdHlsZV9iYXNlQnRuX18yNXlfclwiLFxuXHRcIkZyYW1lQm9yZGVyXCI6IFwic3R5bGVfRnJhbWVCb3JkZXJfXzFIcDYzXCIsXG5cdFwibGlua0NvbnRhaW5lclwiOiBcInN0eWxlX2xpbmtDb250YWluZXJfXzJhSlNqXCIsXG5cdFwibGlua3NcIjogXCJzdHlsZV9saW5rc19fMmtRSExcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcInN0eWxlX2Zvb3RlckNvbnRhaW5lcl9fQTN4NTBcIixcblx0XCJsZWZ0U2lkZU9mQ29udGFpbmVyXCI6IFwic3R5bGVfbGVmdFNpZGVPZkNvbnRhaW5lcl9fM21kZGxcIixcblx0XCJJY29uc1wiOiBcInN0eWxlX0ljb25zX18xeU1fVFwiLFxuXHRcImNvcHlcIjogXCJzdHlsZV9jb3B5X18xUkhIc1wiLFxuXHRcImNvcHlUZXh0XCI6IFwic3R5bGVfY29weVRleHRfXzI5UkVvXCIsXG5cdFwicmlnaHRTaWRlT2ZDb250YWluZXJcIjogXCJzdHlsZV9yaWdodFNpZGVPZkNvbnRhaW5lcl9fM0htcllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlYXNvblNpZGVDb250YWluZXJcIjogXCJzdHlsZV9yZWFzb25TaWRlQ29udGFpbmVyX18xSW5tb1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJhbWVCdG5cIjogXCJmcmFtZUJ1dHRvbl9mcmFtZUJ0bl9fQW1RMnVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdldFN0YXJ0ZWRCdXR0b25cIjogXCJnZXRTdGFydGVkQnV0dG9uX2dldFN0YXJ0ZWRCdXR0b25fXzE2bDBoXCIsXG5cdFwiYnRuVGV4dFwiOiBcImdldFN0YXJ0ZWRCdXR0b25fYnRuVGV4dF9fM0FpaWdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1pbnRCdXR0b25cIjogXCJtaW50QnV0dG9uX21pbnRCdXR0b25fXzJJVmRXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRcIjogXCJzdHlsZV9sYXlvdXRfXzFVWDZPXCIsXG5cdFwiZ2V0U3RhcnRlZFwiOiBcInN0eWxlX2dldFN0YXJ0ZWRfX2o3Vi1wXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk5hdlwiOiBcImZvb3Rlcl9OYXZfXzFxc0lHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZpZ2F0b3JcIjogXCJuYXZpZ2F0aW9uX25hdmlnYXRvcl9fMkNjaE5cIixcblx0XCJuYXZCdG5cIjogXCJuYXZpZ2F0aW9uX25hdkJ0bl9fMklyYWhcIixcblx0XCJuYXZJdGVtXCI6IFwibmF2aWdhdGlvbl9uYXZJdGVtX18yMHVoc1wiLFxuXHRcIm1hcmtcIjogXCJuYXZpZ2F0aW9uX21hcmtfXzNHRmFNXCIsXG5cdFwibG9naW5CdXR0b25cIjogXCJuYXZpZ2F0aW9uX2xvZ2luQnV0dG9uX18yZUFaTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGhvdG9cIjogXCJwaG90b19waG90b19fM09ubVBcIixcblx0XCJpbWdcIjogXCJwaG90b19pbWdfXzFuWVhEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXNpbmVzc0NvbnRhaW5lclwiOiBcImJ1c2luZXNzU2lkZV9idXNpbmVzc0NvbnRhaW5lcl9fMkt4ZGdcIixcblx0XCJidXNpbmVzc1RleHRcIjogXCJidXNpbmVzc1NpZGVfYnVzaW5lc3NUZXh0X18zY3poRlwiLFxuXHRcIlNwYW5cIjogXCJidXNpbmVzc1NpZGVfU3Bhbl9fMlh5RkVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImV4aGliaXRpb25TaWRlX2NvbnRhaW5lcl9fM1FqS05cIixcblx0XCJhZHZlcnRcIjogXCJleGhpYml0aW9uU2lkZV9hZHZlcnRfX000dHlaXCIsXG5cdFwiYm9yZGVyTGluZVwiOiBcImV4aGliaXRpb25TaWRlX2JvcmRlckxpbmVfXzFXanRBXCIsXG5cdFwic3ViVGV4dFwiOiBcImV4aGliaXRpb25TaWRlX3N1YlRleHRfXzNVTmNsXCIsXG5cdFwibWludEJ1dHRvblwiOiBcImV4aGliaXRpb25TaWRlX21pbnRCdXR0b25fXzE3dHJNXCIsXG5cdFwicGhvdG9FeGhpYml0aW9uXCI6IFwiZXhoaWJpdGlvblNpZGVfcGhvdG9FeGhpYml0aW9uX18xWnEwN1wiLFxuXHRcInBob3Rvc1wiOiBcImV4aGliaXRpb25TaWRlX3Bob3Rvc19fMko1d3hcIixcblx0XCJzdWJPd25lclwiOiBcImV4aGliaXRpb25TaWRlX3N1Yk93bmVyX18yYXNQclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2V0U3RhcnRlZENvbnRhaW5lclwiOiBcImdldFN0YXJ0ZWRfZ2V0U3RhcnRlZENvbnRhaW5lcl9fM3ZPbWxcIixcblx0XCJnZXRTdGFydGVkVGV4dFNpZGVcIjogXCJnZXRTdGFydGVkX2dldFN0YXJ0ZWRUZXh0U2lkZV9fMW1BcG9cIixcblx0XCJnZXRTdGFydGVkSGVhZGVyVGV4dFwiOiBcImdldFN0YXJ0ZWRfZ2V0U3RhcnRlZEhlYWRlclRleHRfX2ktMnpaXCIsXG5cdFwiU3BhblwiOiBcImdldFN0YXJ0ZWRfU3Bhbl9fM3hpZVBcIixcblx0XCJJbWFnZVNpZGVcIjogXCJnZXRTdGFydGVkX0ltYWdlU2lkZV9fMVlZdEdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInF1b1wiOiBcInF1b3RhdGlvbl9xdW9fX0YtUTBxXCIsXG5cdFwicXVvTWlkZGxlVGV4dFwiOiBcInF1b3RhdGlvbl9xdW9NaWRkbGVUZXh0X18zZzU5ZlwiLFxuXHRcInF1b0Zvb3RlclRleHRcIjogXCJxdW90YXRpb25fcXVvRm9vdGVyVGV4dF9fMU4zc2ZcIixcblx0XCJxdW9PcGVuc2VhXCI6IFwicXVvdGF0aW9uX3F1b09wZW5zZWFfX1hwZ2FJXCIsXG5cdFwiU3BhblwiOiBcInF1b3RhdGlvbl9TcGFuX18yakhqTFwiLFxuXHRcInF1b1JhcmlibGVcIjogXCJxdW90YXRpb25fcXVvUmFyaWJsZV9fM3NxZTBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlYXNvbkNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfcmVhc29uQ29udGFpbmVyX18xb3J0Y1wiLFxuXHRcInJlYXNvbkhlYWRlclwiOiBcInJlYXNvblNpZGVfcmVhc29uSGVhZGVyX18yclFOclwiLFxuXHRcIlNwYW5cIjogXCJyZWFzb25TaWRlX1NwYW5fXzFScE90XCIsXG5cdFwiTGluZVwiOiBcInJlYXNvblNpZGVfTGluZV9fMzJ2UXVcIixcblx0XCJtaWRkbGVDb250YWluZXJcIjogXCJyZWFzb25TaWRlX21pZGRsZUNvbnRhaW5lcl9fM2pjNjVcIixcblx0XCJyZWFzb25UZXh0U2lkZVwiOiBcInJlYXNvblNpZGVfcmVhc29uVGV4dFNpZGVfXzFOZFpUXCIsXG5cdFwicmVhc3RJbWFnZVNpZGVcIjogXCJyZWFzb25TaWRlX3JlYXN0SW1hZ2VTaWRlX19tcnprWFwiLFxuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfZm9vdGVyQ29udGFpbmVyX18zX0IzQlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGl0bGVcIjogXCJoZWFkLXRpdGxlX1RpdGxlX18zbXdYZ1wiLFxuXHRcImJvbGRcIjogXCJoZWFkLXRpdGxlX2JvbGRfXzEyc0d5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcInRleHQtdGl0bGVfVGl0bGVfXzZLYjloXCIsXG5cdFwiYm9sZFwiOiBcInRleHQtdGl0bGVfYm9sZF9fcFMyOHVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkxpbmsiLCJjbiIsImxpbmtCdXR0b24iLCJjaGlsZHJlbiIsImhyZWYiLCJwcm9wcyIsImxpbmtDb250YWluZXIiLCJsaW5rcyIsImZyYW1lQnV0dG9uIiwiYm9yZGVyIiwiY2xhc3NOYW1lIiwiYmFzZUJ0biIsIkZyYW1lQm9yZGVyIiwiYnV0dG9uIiwiQ29tcCIsIkljb24iLCJIZWFkVGl0bGUiLCJGb290ZXJTaWRlIiwiRm9vdGVyIiwiZm9vdGVyQ29udGFpbmVyIiwibGVmdFNpZGVPZkNvbnRhaW5lciIsIkljb25zIiwiam9pbiIsImpvaW5UZXh0IiwiY29weSIsImNvcHlUZXh0IiwicmlnaHRTaWRlT2ZDb250YWluZXIiLCJmb290ZXIiLCJJTkZPIiwiUmVhc29uU2lkZUZvcm0iLCJtYXAiLCJpbmZvIiwicmVhc29uU2lkZUNvbnRhaW5lciIsInRpdGxlIiwiQnV0dG9uIiwiVGV4dFRpdGxlIiwiRnJhbWVCdXR0b24iLCJmcmFtZUJ0biIsIkdldFN0YXJ0ZWRCdXR0b24iLCJnZXRTdGFydGVkQnV0dG9uIiwiYnRuVGV4dCIsIk1pbnRCdXR0b24iLCJtaW50QnV0dG9uIiwiU3ZnQXBwU3RvcmUiLCJTdmdDaGVja1NxdWFyZSIsIlN2Z0Rpc2NvcmQiLCJTdmdEcm9wRG93biIsIlN2Z0Ryb3BEb3duxLBjb24iLCJTdmdFdGhMb2dvIiwiU3ZnRmFjZWJvb2siLCJTdmdGaW5nZXJwcmludCIsIlN2Z0dvb2dsZVBsYXlTdG9yZSIsIlN2Z0hvbWVwYWdlT3B0aW9uIiwiU3ZnTGlua2RuIiwiU3ZnTWFpbCIsIlN2Z01lZGlhIiwiU3ZnTWV0YURhdGEiLCJTdmdPcGVuc2VhTG9nbyIsIlN2Z1FyQ29kZSIsIlN2Z1JhcmlibGVMb2dvIiwiU3ZnU2F2aW5nc1BpZyIsIlN2Z1NtYXJ0Q29udHJhY3TEsGNvbiIsIlN2Z1R3aXR0ZXIiLCJTdmdWZWN0b3IiLCJTdmdZb3V0dWJlIiwiZGVmYXVsdCIsIkFwcFN0b3JlIiwiQ2hlY2tTcXVhcmUiLCJEaXNjb3JkIiwiRHJvcERvd27EsGNvbiIsIkRyb3BEb3duIiwiRXRoTG9nbyIsIkZhY2Vib29rIiwiRmluZ2VycHJpbnQiLCJHb29nbGVQbGF5U3RvcmUiLCJIb21lcGFnZU9wdGlvbiIsIsSwbnN0YWdyYW0iLCJMaW5rZG4iLCJNYWlsIiwiTWVkaWEiLCJNZXRhRGF0YSIsIk9wZW5zZWFMb2dvIiwiUXJDb2RlIiwiUmFyaWJsZUxvZ28iLCJTYXZpbmdzUGlnIiwiU21hcnRDb250cmFjdMSwY29uIiwiVHdpdHRlciIsIlZlY3RvciIsIllvdXR1YmUiLCJTdmfEsG5zdGFncmFtIiwidXNlV2luZG93U2l6ZSIsIkNPTlNUIiwiTmF2aWdhdGlvbiIsIkV4aGliaXRpb25TaWRlIiwiUXVvdGF0aW9uIiwiUmVhc29uU2lkZSIsIkJ1c2luZXNzU2lkZSIsIkdldFN0YXJ0ZWRTaWRlIiwiTGF5b3V0Iiwic2l6ZSIsImxheW91dCIsIndpZHRoIiwiVEFCTEVUX1NJWkUiLCJnZXRTdGFydGVkIiwic2l6aW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIk5hdmlnYXRpb25CdXR0b24iLCJuYXYiLCJNRU5VIiwia2V5IiwiRm9vdGVyTmF2aWdhdGlvbiIsIm1lbnUiLCJOYXYiLCJpY29uIiwiZmxhdCIsIm5hdmlnYXRvciIsIm1hcmsiLCJuYXZCdG4iLCJzdWJCdG4iLCJsb2dpbkJ1dHRvbiIsIlBob3RvIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwicGhvdG8iLCJpbWciLCJidXNpbmVzc0NvbnRhaW5lciIsImJ1c2luZXNzVGV4dCIsIlNwYW4iLCJFeGhpYml0aW9uIiwiSGVhZGVyIiwiVGV4dCIsIk93bmVyIiwiY29udGFpbmVyIiwiYWR2ZXJ0IiwiYWR2ZXJ0SGVhZGVyIiwiYm9yZGVyTGluZSIsInN1YlRleHQiLCJwaG90b0V4aGliaXRpb24iLCJwaG90b3MiLCJvd25lciIsInN1Yk93bmVyIiwiU3VpdENhc2UiLCJHZXRTdGFydGVkIiwiZ2V0U3RhcnRlZENvbnRhaW5lciIsImdldFN0YXJ0ZWRUZXh0U2lkZSIsImdldFN0YXJ0ZWRIZWFkZXJUZXh0IiwiZ2V0U3RhcnRlZE1haW5UZXh0IiwiZ2V0U3RhcnRlZEJ1dHRvbkNvbnRhaW5lciIsIkdldFN0YXJ0ZWRCdXR0b25UZXh0IiwiSW1hZ2VTaWRlIiwiSW1hZ2UiLCJxdW8iLCJxdW9IZWFkZXIiLCJxdW9IZWFkZXJUZXh0IiwicXVvTWlkZGxlIiwicXVvTWlkZGxlVGV4dCIsInF1b0Zvb3RlciIsInF1b0Zvb3RlclRleHQiLCJxdW9JY29ucyIsInF1b1JhcmlibGUiLCJxdW9PcGVuc2VhIiwiUmVhc29uIiwiUmVhc29uSW1hZ2UiLCJyZWFzb25Db250YWluZXIiLCJyZWFzb25IZWFkZXIiLCJyZWFzb25IZWFkZXJUZXh0IiwiTGluZSIsIm1pZGRsZUNvbnRhaW5lciIsInJlYXNvblRleHRTaWRlIiwicmVhc3RJbWFnZVNpZGUiLCJmb290ZXJUZXh0IiwiYm9sZCIsIm9wYWNpdHkiLCJUaXRsZSIsImZvbnRTaXplIiwiREVTS1RPUF9TSVpFIiwibWFrZU5GVE9wdGlvbiIsIkJVU0lORVNTIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVuZGVmaW5lZCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiZmluYWxseSIsImFzc2lnbiIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=