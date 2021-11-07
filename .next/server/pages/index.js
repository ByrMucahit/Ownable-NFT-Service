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
  return (
    /*#__PURE__*/

    /* Layout */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().layout),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().navigation),
        children: size.width < _constant__WEBPACK_IMPORTED_MODULE_2__.default.TABLET_SIZE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
          flat: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 23
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().exhibition),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_exhibitionSide__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().quotation),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_quotation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().reasonSide),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_reasonSide__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().business),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_businessSide__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().getStarted),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_row_getStarted__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().sizing),
          children: JSON.stringify(size)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_footer_index__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
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
    columnNumber: 5
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
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.module.css */ "./components/navigation/footer.module.css");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\footer.js";






function FooterNavigation() {
  return _constant__WEBPACK_IMPORTED_MODULE_2__.FOOTERMENU.map(menu => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
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
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/navigation/button.js");
/* harmony import */ var _frame_frameButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frameButton */ "./components/frame/frameButton.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant */ "./constant/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\navigation.js";









function Navigation({
  flat = false
}) {
  return (
    /*#__PURE__*/

    /* Navigator */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigator),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().mark)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          children: "Ownable-NS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().navBtn),
        children: _constant__WEBPACK_IMPORTED_MODULE_4__.MENU.map(menu => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().subBtn),
            href: menu.href,
            children: !flat && menu.title
          }, menu.key, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_5__.HomepageOption, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
  return (
    /*#__PURE__*/

    /* Business Side Container */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default().businessContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: (_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default().businessText),
        bold: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: (_businessSide_module_css__WEBPACK_IMPORTED_MODULE_3___default().Span),
          children: "Ownable-NS "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), "for Business"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)
  );
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
        lineNumber: 14,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
          size: "22px",
          children: "Now Minting: Chic-A-Dees,First NFTs to Generate EGGS Tokens"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_frame_mintButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_exhibitionSide_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintButton),
        children: "MINT CHIC-A-DEE NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
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
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_photo_index__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: "https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fchicadees%2Fcashcows.png?alt=media&token=60ef4aa7-42c9-47de-82a6-b719953749c3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
            lineNumber: 36,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_2__.default, {
            size: "12px",
            children: "J.Pierce and Friends - Hand Painted and Signed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
          lineNumber: 16,
          columnNumber: 24
        }, this), "created on marketplace platforms."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoFooter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoFooterText),
        size: "16px",
        opacity: "0.6",
        children: ["You,the creator, own your private keys, therefore own your assets and are free to,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 103
        }, this), "transfer, sell or trade NFTs anywhere on the digital marketplace."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoIcons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.RaribleLogo, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoRarible)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.OpenseaLogo, {
        className: (_quotation_module_css__WEBPACK_IMPORTED_MODULE_5___default().quoOpensea)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZm9ybS9yZWFzb25TaWRlL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2dldFN0YXJ0ZWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvbWludEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9DaGVja1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9EaXNjb3JkLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Ryb3BEb3duxLBjb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRXRoTG9nby5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9GYWNlYm9vay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9GaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Hb29nbGVQbGF5U3RvcmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvSG9tZXBhZ2VPcHRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTGlua2RuLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01haWwuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvTWV0YURhdGEuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvT3BlbnNlYUxvZ28uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvUXJDb2RlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1JhcmlibGVMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1NhdmluZ3NQaWcuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvU21hcnRDb250cmFjdMSwY29uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1R3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvVmVjdG9yLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvxLBuc3RhZ3JhbS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Bob3RvL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9idXNpbmVzc1NpZGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L2V4aGliaXRpb25TaWRlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9nZXRTdGFydGVkLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3Jvdy9xdW90YXRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L3JlYXNvblNpZGUuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29uc3RhbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2hvb2svdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9QaG90b3MvcmVhc29uU2lkZVBob3RvLnBuZyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vUGhvdG9zL3N1aXRjYXNlLmpwZyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9idXR0b24vYmFzZS9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvb3Rlci9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2Zvcm0vcmVhc29uU2lkZS9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZ2V0U3RhcnRlZEJ1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL21pbnRCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2Uvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcGhvdG8vaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvYnVzaW5lc3NTaWRlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L2V4aGliaXRpb25TaWRlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L2dldFN0YXJ0ZWQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9yb3cvcXVvdGF0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvcm93L3JlYXNvblNpZGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L2hlYWQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy90ZXh0L3RleHQtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlL2lnbm9yZWR8QzpcXFVzZXJzXFxtbXVjYVxcRG9jdW1lbnRzXFxHaXRIdWJcXE93bmFibGUtTkZULVNlcnZpY2VcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmZ1bmN0aW9uIGxpbmtCdXR0b24gKHsgY2hpbGRyZW4sIGhyZWYsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8YSAgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9IHByb3BzPiB7Y2hpbGRyZW59IDwvYT5cclxuICAgICAgICA8L0xpbms+ICBcclxuICAgICkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyYW1lQnV0dG9uICh7Ym9yZGVyPWZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgW3N0eWxlcy5iYXNlQnRuICxcclxuICAgICAgICAgICAgICAgIGJvcmRlciAmJiBzdHlsZXMuRnJhbWVCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgXSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICBjb25zdCBDb21wID0gYm9yZGVyID8gZnJhbWVCdXR0b24gOiBsaW5rQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29tcCAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmJhc2VCdG4gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyICYmIHN0eWxlcy5GcmFtZUJvcmRlcixcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICBdKX0gXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn0gXHJcbiAgICAgICAgICAgIDwvQ29tcD5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblxyXG5cclxuLypcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIGNuIHN0YW5kIGZvciBjbGFzc25hbWVzOiAnQ2xhc3NuYW1lcycgIGlzIHByZXZlbnQgY2xhc3Mgb3ZlcndyaXRlLiBJdCBjb21lcyBtb3JlIHRoYW4gb25lIGNsYXNzIGludG8gZnVuY3Rpb24sIGl0J3MgcmVhc29uIGFib3V0IGNvbmZsaWN0LiBcclxuICAgIGJvcmRlcjogU29tZSBidXR0b24gaGFzIGJvcmRlciwgYnV0IHNvbWUgaXQgaGFzbid0LiBXaGVuIGJ1dHRvbiBoYXMgYm9yZGVyLCBib3JkZXIgYXR0cmlidXRlIHdpbGwgaGF2ZSBiZWVuICBhY3RpdmF0ZWQuIFxyXG4gICAgY2hpbGRyZW46IENvbnRlbnQsIHdoaWNoIGluY2x1ZGUgd2l0aGluIGVsZW1lbnQuXHJcbiAgICAuLi5wcm9wczogV2hhdCBpZiBBbnkgcHJvcGVydGllcyBpcyBwYXNzZWQgaW50byBmdW5jdGlvbiwgRnVuY3Rpb24gY2FuIGNhdGNoLlxyXG5cclxuICAgIC0tPiBXZSBoYXZlIG9wdGlvbiB0aGF0J3MgaXMgZGl2aWRlZCBpbnRvIHR3byBvcHRpb24uIE9uZSBPZiB0aGVtIGhhcyBpbWFnZSBhbmQgdGV4dCwgb3RoZXIgb25lIGhhcyBqdXN0IHRleHQuXHJcbiAgICAtLT4gQmFzZSBCdXR0b24gaGFzIGp1c3QgdGV4dC5cclxuICAgIC0tPiBCYXNlIEJ1dHRvbiBpcyBkaXZpZGVkIGludG8gdHdvIHZhcmlhbnQgaW4gaXRzZWxmLiBPbmUgT2YgdGhlbSBoYXMgYm9yZGVycywgb3RoZXIgb25lIGhhc24ndC4gV2hlbiBidXR0b24gd2FzIGNhbGxlZCB3aXRoIHNlbmRlZCB3aXRoIHBhcmFtZXRlciBuYW1lZCBib3JkZXIsIEJ1dHRvbiB3aWxsIGhhdmUgXHJcbiAgICBiZWVuIGJvcmRlci4gXHJcbiovXHJcblxyXG4vKiBcclxuLy8gVE8gRE8gTGlzdFxyXG5bWF0gIGZyYW1lIGJ1dHRvbiAvIFRyYW5zcGFyZW50IC0gY29sb3JcclxuXHJcbiovXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSAnLi4vdGV4dC9oZWFkLXRpdGxlJ1xyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tICcuLi9uYXZpZ2F0aW9uL2Zvb3RlcidcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8qIENvbnRhaW5lciAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgey8qIExlZnQgU2lkZSBPZiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGVPZkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7LyogSWNvbnMgT2YgRm9vdGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JY29uc30+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5Ud2l0dGVyLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLkZhY2Vib29rLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLllvdXR1YmUgLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLsSwbnN0YWdyYW0vPlxyXG4gICAgICAgICAgICAgICAgPEljb24uTGlua2RuIC8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5NYWlsLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLkRpc2NvcmQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogVGV4dCBmcm9tIGxlZnQgc2lkZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9pbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5qb2luVGV4dH0gc2l6ZT0nMTJweCc+Sm9pbiB0aGUgY29tbXVuaXR5IG9mICNvd25hYmxlLU5TPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDb3B5IGZyb20gbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlUZXh0fSBzaXplPScxMnB4Jz5Db3B5cmlnaHQgwqkgMjAyMSBPd25hYmxlLU5TPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0b3IgZnJvbSByaWdodCBzaWRlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0U2lkZU9mQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0ICogYXMgSWNvbiBmcm9tICcuLi8uLi9pY29ucydcclxuaW1wb3J0IHtJTkZPfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi8uLi90ZXh0L2hlYWQtdGl0bGUnXHJcblxyXG5mdW5jdGlvbiBSZWFzb25TaWRlRm9ybSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBJTkZPLm1hcCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvblNpZGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJY29uIFNpZGUqL31cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbi5DaGVja1NxdWFyZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFJlYXNvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMThweCcgb3BhY2l0eT0nMC44Jz57aW5mby50aXRsZX08L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICkgIFxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYXNvblNpZGVGb3JtXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mcmFtZUJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mcmFtZUJ0bn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPntjaGlsZHJlbn08L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFtZUJ1dHRvblxyXG5cclxuLyogXHJcbiAgICBEb2N1bWVudDpcclxuICAgIC0tLS0tLS0tXHJcbiAgICA8VGV4dFRpdGxlLz46IEl0J3MgdmFyeSBvZiB0ZXh0LCBJdCBqdXN0IGhhcyBzb21lIHNwZWNpZmljIGF0dHJpYnV0ZSBzdWNoIGFzIDE2IHB4IGZvbnQgc2l6ZSwgYW5kIGJvbGQgZm9udCB3aWdodC5cclxuKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nZXRTdGFydGVkQnV0dG9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Jhc2UvaW5kZXgnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gR2V0U3RhcnRlZEJ1dHRvbih7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWRCdXR0b259IFxyXG4gICAgICAgIGJvcmRlcj5cclxuICAgICAgICAgICAgPEhlYWRUaXRsZSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuVGV4dH0gXHJcbiAgICAgICAgICAgIGJvbGQ+XHJcbiAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgICA8L0hlYWRUaXRsZT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0U3RhcnRlZEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWludEJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9iYXNlL2luZGV4J1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gJy4uL3RleHQvdGV4dC10aXRsZSdcclxuXHJcblxyXG5mdW5jdGlvbiBNaW50QnV0dG9uICh7IGNoaWxkcmVuLCBjbGFzc05hbWV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiAgY2xhc3NOYW1lPXtjbihzdHlsZXMubWludEJ1dHRvbiwgY2xhc3NOYW1lKX0gYm9yZGVyPlxyXG4gICAgICAgICAgICA8VGV4dFRpdGxlIGJvbGQ+e2NoaWxkcmVufTwvVGV4dFRpdGxlPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgICApfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcHBTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjYXBwLXN0b3JlX3N2Z19fY2xpcDBfNTE6NTAxKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjMxLjQ2MSA3MS4wOUg4LjQwN0MzLjc3MiA3MS4wOSAwIDY3LjMwOCAwIDYyLjY3OFY4LjRDMCAzLjc2OCAzLjc3MiAwIDguNDA3IDBoMjIzLjA1NEMyMzYuMDk0IDAgMjQwIDMuNzY4IDI0MCA4LjR2NTQuMjc4YzAgNC42My0zLjkwNiA4LjQxMi04LjUzOSA4LjQxMnpcIlxuICAgICAgICAgIGZpbGw9XCIjQTZBNkE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIzOC4yNzkgNjIuNjhhNi44MDggNi44MDggMCAwMS02LjgxNiA2LjgwN0g4LjQwN2MtMy43NjcgMC02LjgyNS0zLjA0Ni02LjgyNS02LjgwN1Y4LjM5OGMwLTMuNzYgMy4wNTgtNi44MTYgNi44MjUtNi44MTZoMjIzLjA1NGE2LjgxNSA2LjgxNSAwIDAxNi44MTYgNi44MTZsLjAwMiA1NC4yODJ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01My41NiAzNS4xNjFjLS4wNS01LjcyOCA0LjY5Mi04LjUxNSA0LjkxLTguNjQ0LTIuNjg3LTMuOTE2LTYuODUtNC40NS04LjMxNC00LjQ5My0zLjQ5Ni0uMzY4LTYuODg5IDIuMDkxLTguNjcgMi4wOTEtMS44MTcgMC00LjU2LTIuMDU2LTcuNTE2LTEuOTk1LTMuODA1LjA1OC03LjM2NCAyLjI2LTkuMzE2IDUuNjgtNC4wMjggNi45NzItMS4wMjQgMTcuMjE4IDIuODM2IDIyLjg1MyAxLjkzIDIuNzYgNC4xODYgNS44NDIgNy4xNCA1LjczNCAyLjg4OC0uMTIgMy45NjctMS44NDEgNy40NTMtMS44NDEgMy40NTUgMCA0LjQ2OCAxLjg0IDcuNDggMS43NzIgMy4xLS4wNSA1LjA1Mi0yLjc3MyA2LjkxNS01LjU1OCAyLjIzMS0zLjE2MyAzLjEyNy02LjI3OSAzLjE2My02LjQzOS0uMDczLS4wMjUtNi4wMjEtMi4yOTQtNi4wOC05LjE2ek00Ny44NzIgMTguMzE2YzEuNTU0LTEuOTQyIDIuNjE3LTQuNTg1IDIuMzIyLTcuMjY3LTIuMjUuMS01LjA2MiAxLjU1NS02LjY4MSAzLjQ1NS0xLjQzMyAxLjY3NC0yLjcxMyA0LjQxOC0yLjM4MiA2Ljk5OSAyLjUyNi4xODggNS4xMi0xLjI3NCA2Ljc0LTMuMTg3ek05NS4zNjkgNTUuOTloLTQuMDM3bC0yLjIxMi02Ljk0N2gtNy42ODdsLTIuMTA3IDYuOTQ3aC0zLjkzbDcuNjE2LTIzLjY1MWg0LjcwNGw3LjY1MyAyMy42NTF6bS02LjkxNi05Ljg2MWwtMi02LjE3NmMtLjIxMS0uNjMxLS42MDgtMi4xMTctMS4xOTMtNC40NTZoLS4wN2ExNzEuNzY2IDE3MS43NjYgMCAwMS0xLjEyNCA0LjQ1Nkw4Mi4xIDQ2LjEyOGg2LjM1MnpNMTE0Ljk1NSA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1MiA2Ljg3Ni0xLjQwNSAxLjQ5OC0zLjE0OSAyLjI0Ni01LjIzMSAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDQtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0LTUuNjE0aDMuMzMzbC4yMTEgMi43MDNoLjA3MWMxLjI2NC0yLjAzNyAzLjE4Mi0zLjA1MyA1Ljc1Ny0zLjA1MyAyLjAxMiAwIDMuNjkyLjc5NCA1LjAzNiAyLjM4NSAxLjM0OCAxLjU5MiAyLjAyIDMuNjg2IDIuMDIgNi4yODN6bS0zLjg2Mi4xMzhjMC0xLjY2LS4zNzMtMy4wMjgtMS4xMjMtNC4xMDUtLjgyLTEuMTI0LTEuOTItMS42ODUtMy4zLTEuNjg1LS45MzUgMC0xLjc4NS4zMTMtMi41NDQuOTMtLjc2MS42MjEtMS4yNTggMS40MzQtMS40OTEgMi40NC0uMTE4LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zOCAyLjI4OCAxLjE0MSAzLjE0Mi43NjEuODU1IDEuNzQ5IDEuMjgyIDIuOTY1IDEuMjgyIDEuNDI4IDAgMi41MzktLjU1MSAzLjMzNC0xLjY1Ljc5Ni0xLjEgMS4xOTQtMi41NSAxLjE5NC00LjM1MnpNMTM0LjU3NiA0Ny4yNTRjMCAyLjktLjc4NCA1LjE5My0yLjM1NCA2Ljg3Ni0xLjQwMiAxLjQ5OC0zLjE0NiAyLjI0Ni01LjIyOCAyLjI0Ni0yLjI0NyAwLTMuODYxLS44MDctNC44NDMtMi40MmgtLjA3MXY4Ljk4M2gtMy43OVY0NC41NWMwLTEuODIzLS4wNDgtMy42OTUtLjE0MS01LjYxNGgzLjMzNGwuMjExIDIuNzAzaC4wNzFjMS4yNjMtMi4wMzcgMy4xODEtMy4wNTMgNS43NTctMy4wNTMgMi4wMTEgMCAzLjY5MS43OTQgNS4wMzggMi4zODUgMS4zNDIgMS41OTIgMi4wMTYgMy42ODYgMi4wMTYgNi4yODN6bS0zLjg2MS4xMzhjMC0xLjY2LS4zNzUtMy4wMjgtMS4xMjYtNC4xMDUtLjgxOS0xLjEyNC0xLjkxNi0xLjY4NS0zLjI5Ny0xLjY4NS0uOTM3IDAtMS43ODUuMzEzLTIuNTQ2LjkzLS43NjEuNjIxLTEuMjU3IDEuNDM0LTEuNDkgMi40NC0uMTE1LjQ2OS0uMTc2Ljg1My0uMTc2IDEuMTU1djIuODQzYzAgMS4yNC4zODEgMi4yODggMS4xMzggMy4xNDIuNzYxLjg1MyAxLjc0OSAxLjI4MiAyLjk2OSAxLjI4MiAxLjQyNyAwIDIuNTM4LS41NTEgMy4zMzMtMS42NS43OTctMS4xIDEuMTk1LTIuNTUgMS4xOTUtNC4zNTJ6TTE1Ni41MTQgNDkuMzU4YzAgMi4wMTItLjY5OSAzLjY0OS0yLjEwMSA0LjkxMi0xLjU0MiAxLjM4MS0zLjY4OCAyLjA3LTYuNDQ1IDIuMDctMi41NDYgMC00LjU4Ny0uNDktNi4xMzEtMS40NzNsLjg3OC0zLjE1OGMxLjY2NCAxLjAwNiAzLjQ5IDEuNTEgNS40NzkgMS41MSAxLjQyNyAwIDIuNTM5LS4zMjMgMy4zMzctLjk2Ni43OTQtLjY0MyAxLjE5MS0xLjUwNyAxLjE5MS0yLjU4NCAwLS45Ni0uMzI3LTEuNzY4LS45ODMtMi40MjQtLjY1My0uNjU2LTEuNzQyLTEuMjY2LTMuMjY0LTEuODMtNC4xNDItMS41NDQtNi4yMTItMy44MDYtNi4yMTItNi43ODEgMC0xLjk0NC43MjYtMy41MzkgMi4xNzgtNC43OCAxLjQ0Ny0xLjI0MSAzLjM3OC0xLjg2MiA1Ljc5Mi0xLjg2MiAyLjE1MyAwIDMuOTQxLjM3NSA1LjM2OSAxLjEyM2wtLjk0OCAzLjA5Yy0xLjMzMy0uNzI2LTIuODQxLTEuMDg4LTQuNTI4LTEuMDg4LTEuMzMzIDAtMi4zNzUuMzI5LTMuMTIxLjk4My0uNjMyLjU4NC0uOTQ4IDEuMjk3LS45NDggMi4xNDEgMCAuOTM1LjM2MSAxLjcwOCAxLjA4NiAyLjMxNi42MzEuNTYxIDEuNzc4IDEuMTcgMy40NDIgMS44MjUgMi4wMzYuODIgMy41MzEgMS43NzcgNC40OTIgMi44NzYuOTU5IDEuMDk0IDEuNDM3IDIuNDY1IDEuNDM3IDQuMXpNMTY5LjA0NSA0MS43OGgtNC4xNzd2OC4yOGMwIDIuMTA2LjczNiAzLjE1OCAyLjIxMSAzLjE1OC42NzcgMCAxLjIzOS0uMDU5IDEuNjg0LS4xNzZsLjEwNSAyLjg3N2MtLjc0Ny4yOC0xLjczLjQyLTIuOTQ4LjQyLTEuNDk3IDAtMi42NjctLjQ1Ny0zLjUxMS0xLjM2OS0uODQxLS45MTMtMS4yNjQtMi40NDUtMS4yNjQtNC41OTd2LTguNTk3aC0yLjQ4OXYtMi44NDRoMi40ODlWMzUuODFsMy43MjMtMS4xMjN2NC4yNDVoNC4xNzd2Mi44NDh6TTE4Ny44OTUgNDcuMzIzYzAgMi42MjEtLjc1IDQuNzc0LTIuMjQ3IDYuNDU3LTEuNTcgMS43MzMtMy42NTMgMi41OTYtNi4yNTEgMi41OTYtMi41MDMgMC00LjQ5Ni0uODMtNS45ODItMi40OS0xLjQ4Ni0xLjY2LTIuMjI5LTMuNzU1LTIuMjI5LTYuMjggMC0yLjY0My43NjQtNC44MDggMi4yOTgtNi40OTEgMS41MzEtMS42ODUgMy41OTctMi41MjcgNi4xOTQtMi41MjcgMi41MDMgMCA0LjUxOC44MyA2LjAzOCAyLjQ5MiAxLjQ1NCAxLjYxMSAyLjE3OSAzLjY5MyAyLjE3OSA2LjI0M3ptLTMuOTMyLjEyM2MwLTEuNTczLS4zMzYtMi45MjItMS4wMTctNC4wNDctLjc5NS0xLjM2Mi0xLjkzMS0yLjA0LTMuNDAzLTIuMDQtMS41MjMgMC0yLjY4MS42OC0zLjQ3NSAyLjA0LS42ODEgMS4xMjctMS4wMTcgMi40OTctMS4wMTcgNC4xMTggMCAxLjU3Mi4zMzYgMi45MjEgMS4wMTcgNC4wNDUuODE5IDEuMzYxIDEuOTY0IDIuMDQgMy40NDEgMi4wNCAxLjQ0NyAwIDIuNTgzLS42OTMgMy40MDMtMi4wNzYuNjk5LTEuMTQ2IDEuMDUxLTIuNTEgMS4wNTEtNC4wOHpNMjAwLjIxNSA0Mi4yNjhhNi41OCA2LjU4IDAgMDAtMS4xOTQtLjEwNWMtMS4zMzQgMC0yLjM2NS41MDMtMy4wOSAxLjUxMS0uNjMxLjg4OS0uOTQ4IDIuMDEyLS45NDggMy4zNjh2OC45NDhoLTMuNzg4bC4wMzUtMTEuNjgzYTkyLjkxIDkyLjkxIDAgMDAtLjE0Mi01LjM3aDMuMzAxbC4xMzkgMy4yNjRoLjEwNWMuNC0xLjEyMiAxLjAzMS0yLjAyNSAxLjg5NS0yLjcwMi44NDUtLjYxIDEuNzU3LS45MTMgMi43NC0uOTEzLjM1IDAgLjY2Ni4wMjUuOTQ3LjA3djMuNjEyek0yMTcuMTY2IDQ2LjY1NmMwIC42OC0uMDQ0IDEuMjUyLS4xMzggMS43MTloLTExLjM3MWMuMDQ0IDEuNjg1LjU5NCAyLjk3MyAxLjY1IDMuODYyLjk1OC43OTQgMi4xOTcgMS4xOTIgMy43MTkgMS4xOTIgMS42ODMgMCAzLjIxOS0uMjY4IDQuNjAxLS44MDZsLjU5MyAyLjYzYy0xLjYxNC43MDQtMy41MiAxLjA1NC01LjcxOSAxLjA1NC0yLjY0NSAwLTQuNzIxLS43NzktNi4yMzMtMi4zMzQtMS41MDctMS41NTUtMi4yNjMtMy42NDMtMi4yNjMtNi4yNjMgMC0yLjU3MS43MDMtNC43MTMgMi4xMDktNi40MiAxLjQ3Mi0xLjgyNCAzLjQ2MS0yLjczNiA1Ljk2NC0yLjczNiAyLjQ1OSAwIDQuMzIuOTEyIDUuNTg0IDIuNzM1IDEuMDAxIDEuNDQ5IDEuNTA0IDMuMjQgMS41MDQgNS4zNjd6bS0zLjYxNC0uOTgyYy4wMjUtMS4xMjQtLjIyMi0yLjA5NC0uNzM2LTIuOTEzLS42NTYtMS4wNTQtMS42NjQtMS41OC0zLjAyLTEuNTgtMS4yNCAwLTIuMjQ4LjUxMy0zLjAxNyAxLjU0NC0uNjMxLjgyLTEuMDA3IDEuODAyLTEuMTIyIDIuOTQ3aDcuODk1di4wMDJ6TTg3LjIgMTcuNzg5YzAgMi4wOTEtLjYyNyAzLjY2Ni0xLjg4IDQuNzIzLTEuMTYyLjk3Ni0yLjgxMSAxLjQ2NS00Ljk0OCAxLjQ2NS0xLjA2IDAtMS45NjctLjA0Ni0yLjcyNi0uMTM5di0xMS40M2MuOTktLjE2IDIuMDU3LS4yNCAzLjIxLS4yNCAyLjAzNSAwIDMuNTY5LjQ0MiA0LjYwNCAxLjMyNyAxLjE1OSAxIDEuNzQgMi40MzEgMS43NCA0LjI5NHptLTEuOTY0LjA1MWMwLTEuMzU2LS4zNi0yLjM5Ni0xLjA3OC0zLjEyLS43MTgtLjcyNC0xLjc2Ny0xLjA4Ny0zLjE0OC0xLjA4Ny0uNTg3IDAtMS4wODYuMDQtMS41LjEyMXY4LjY5Yy4yMjkuMDM1LjY0OC4wNSAxLjI1OC4wNSAxLjQyNiAwIDIuNTI2LS4zOTYgMy4zMDEtMS4xODguNzc1LS43OTMgMS4xNjctMS45NDggMS4xNjctMy40NjZ6TTk3LjYxNiAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk0IDEuMjc2LTMuMDcgMS4yNzYtMS4yMyAwLTIuMjEtLjQwNy0yLjk0LTEuMjI0LS43My0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDMtMS4yNCAxLjIzIDAgMi4yMi40MDYgMi45NjggMS4yMjIuNzEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45MzMuMDZjMC0uNzczLS4xNjctMS40MzYtLjQ5OS0xLjk4OS0uMzkxLS42NjgtLjk0OC0xLjAwMi0xLjY3MS0xLjAwMi0uNzQ5IDAtMS4zMTguMzM0LTEuNzA5IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjggMS40MzYuNSAxLjk4OC40MDQuNjY5Ljk2NiAxLjAwMyAxLjY5MSAxLjAwMy43MTEgMCAxLjI3LS4zNCAxLjY3MS0xLjAyLjM0NS0uNTY0LjUxNy0xLjIzMi41MTctMi4wMDV6TTExMS41ODIgMTUuNDk2bC0yLjYyMiA4LjM3OGgtMS43MDdsLTEuMDg2LTMuNjM4YTI3LjU5NSAyNy41OTUgMCAwMS0uNjc0LTIuNzA3aC0uMDMzYy0uMTYyLjkyLS4zODYgMS44MjItLjY3NCAyLjcwN2wtMS4xNTQgMy42MzhoLTEuNzI2bC0yLjQ2Ni04LjM3OGgxLjkxNWwuOTQ3IDMuOTgzYy4yMy45NDIuNDE4IDEuODQuNTY5IDIuNjg5aC4wMzRhMjkuOCAyOS44IDAgMDEuNjkyLTIuNjcybDEuMTg5LTMuOTk4aDEuNTE4bDEuMTQgMy45MTNjLjI3NS45NTQuNDk5IDEuODczLjY3MiAyLjc1OGguMDUxYy4xMjYtLjg2MS4zMTctMS43OC41NjktMi43NThsMS4wMTctMy45MTNoMS44Mjl2LS4wMDJ6TTEyMS4yNDEgMjMuODc0aC0xLjg2M3YtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjg5LTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0Ni42MWEyLjE2MyAyLjE2MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjNWMTcuODljMC0uNzM2LS4wMjMtMS41MzQtLjA2OC0yLjM5OGgxLjYzN2wuMDg4IDEuMzFoLjA1MWMuMjE3LS40MDcuNTQxLS43NDMuOTY1LTEuMDExYTMuMTUyIDMuMTUyIDAgMDExLjY4OS0uNDcxYy43ODMgMCAxLjQzMy4yNTIgMS45NTEuNzU5LjY0My42Mi45NjUgMS41NDYuOTY1IDIuNzc2djUuMDE5ek0xMjYuMzc5IDIzLjg3NGgtMS44NjJWMTEuNjUyaDEuODYydjEyLjIyMnpNMTM3LjM0OCAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzIuODUxLTEuNzk2IDEuMjc2LTMuMDcxIDEuMjc2LTEuMjMyIDAtMi4yMTEtLjQwNy0yLjk0LTEuMjI0LS43MjktLjgxNi0xLjA5My0xLjg0NS0xLjA5My0zLjA4NiAwLTEuMjk3LjM3NS0yLjM2MiAxLjEyOC0zLjE4OC43NTQtLjgyNyAxLjc2OC0xLjI0IDMuMDQyLTEuMjQgMS4yMzIgMCAyLjIxOS40MDYgMi45NjkgMS4yMjIuNzExLjc5MyAxLjA2OSAxLjgxNiAxLjA2OSAzLjA2OHptLTEuOTM1LjA2YzAtLjc3My0uMTY3LTEuNDM2LS40OTktMS45ODktLjM5LS42NjgtLjk0OC0xLjAwMi0xLjY3LTEuMDAyLS43NSAwLTEuMzE5LjMzNC0xLjcwOCAxLjAwMi0uMzM0LjU1My0uNSAxLjIyNy0uNSAyLjAyMyAwIC43NzMuMTY4IDEuNDM2LjUgMS45ODguNDA0LjY2OS45NjUgMS4wMDMgMS42OTEgMS4wMDMuNzExIDAgMS4yNjctLjM0IDEuNjY5LTEuMDIuMzQ3LS41NjQuNTE3LTEuMjMyLjUxNy0yLjAwNXpNMTQ2LjM2NSAyMy44NzRoLTEuNjczbC0uMTM5LS45NjVoLS4wNTJjLS41NzIuNzctMS4zODggMS4xNTUtMi40NDggMS4xNTUtLjc5MSAwLTEuNDMxLS4yNTQtMS45MTItLjc1OS0uNDM4LS40NTgtLjY1Ny0xLjAyOS0uNjU3LTEuNzA2IDAtMS4wMjQuNDI3LTEuODA0IDEuMjg2LTIuMzQ0Ljg1Ny0uNTQgMi4wNjItLjgwNSAzLjYxNC0uNzkzdi0uMTU2YzAtMS4xMDQtLjU4LTEuNjU1LTEuNzQtMS42NTUtLjgyNyAwLTEuNTU2LjIwOC0yLjE4NS42MmwtLjM3OS0xLjIyMmMuNzc5LS40ODIgMS43NDEtLjcyNCAyLjg3NS0uNzI0IDIuMTkgMCAzLjI4OSAxLjE1NSAzLjI4OSAzLjQ2NnYzLjA4NWMwIC44MzcuMDQxIDEuNTA0LjEyMSAxLjk5OHptLTEuOTM1LTIuODh2LTEuMjkxYy0yLjA1NS0uMDM2LTMuMDgyLjUyNy0zLjA4MiAxLjY4OCAwIC40MzcuMTE3Ljc2NC4zNTcuOTgzLjI0LjIxOS41NDYuMzI3LjkxLjMyNy40MDkgMCAuNzkxLS4xMyAxLjE0LS4zODdhMS41ODcgMS41ODcgMCAwMC42NzUtMS4zMnpNMTU2Ljk1MSAyMy44NzRoLTEuNjUzbC0uMDg3LTEuMzQ1aC0uMDUyYy0uNTI4IDEuMDIzLTEuNDI3IDEuNTM1LTIuNjkxIDEuNTM1LTEuMDEgMC0xLjg1MS0uMzk2LTIuNTE4LTEuMTg5LS42NjYtLjc5My0uOTk5LTEuODIyLS45OTktMy4wODUgMC0xLjM1Ni4zNjEtMi40NTUgMS4wODYtMy4yOTMuNzAzLS43ODMgMS41NjMtMS4xNzQgMi41ODctMS4xNzQgMS4xMjUgMCAxLjkxMy4zOCAyLjM2MSAxLjEzOGguMDM1di00LjgxaDEuODY1djkuOTY2YzAgLjgxNi4wMjIgMS41NjcuMDY2IDIuMjU3em0tMS45MzEtMy41MzN2LTEuMzk3YzAtLjI0Mi0uMDE3LS40MzctLjA1MS0uNTg3YTIuMTIzIDIuMTIzIDAgMDAtLjY3NC0xLjEyOCAxLjgzMSAxLjgzMSAwIDAwLTEuMjQ2LS40NTdjLS42OTUgMC0xLjIzOS4yNzYtMS42MzkuODI4LS4zOTcuNTUzLS41OTggMS4yNTgtLjU5OCAyLjEyIDAgLjgyOS4xOTEgMS41LjU3MyAyLjAxOC40MDMuNTUuOTQ3LjgyNiAxLjYyOC44MjYuNjEyIDAgMS4xMDEtLjIzIDEuNDcyLS42OS4zNi0uNDI0LjUzNS0uOTM2LjUzNS0xLjUzM3pNMTcyLjg4NSAxOS42MTZjMCAxLjI4OC0uMzY4IDIuMzQ0LTEuMTA0IDMuMTcyLS43NzEuODUxLTEuNzkyIDEuMjc2LTMuMDcgMS4yNzYtMS4yMjggMC0yLjIwOC0uNDA3LTIuOTQtMS4yMjQtLjcyOS0uODE2LTEuMDk0LTEuODQ1LTEuMDk0LTMuMDg2IDAtMS4yOTcuMzc1LTIuMzYyIDEuMTI5LTMuMTg4Ljc1NC0uODI3IDEuNzY3LTEuMjQgMy4wNDYtMS4yNCAxLjIyOCAwIDIuMjE4LjQwNiAyLjk2NSAxLjIyMi43MTEuNzkzIDEuMDY4IDEuODE2IDEuMDY4IDMuMDY4em0tMS45My4wNmMwLS43NzMtLjE2Ny0xLjQzNi0uNS0xLjk4OS0uMzkzLS42NjgtLjk0Ny0xLjAwMi0xLjY3My0xLjAwMi0uNzQ2IDAtMS4zMTUuMzM0LTEuNzA4IDEuMDAyLS4zMzQuNTUzLS41IDEuMjI3LS41IDIuMDIzIDAgLjc3My4xNjcgMS40MzYuNSAxLjk4OC40MDMuNjY5Ljk2NSAxLjAwMyAxLjY5IDEuMDAzLjcxMiAwIDEuMjcyLS4zNCAxLjY3My0xLjAyLjM0My0uNTY0LjUxOC0xLjIzMi41MTgtMi4wMDV6TTE4Mi45MDMgMjMuODc0aC0xLjg2MXYtNC43OTljMC0xLjQ3OC0uNTYyLTIuMjE4LTEuNjkxLTIuMjE4LS41NTMgMC0uOTk5LjIwMy0xLjM0NC42MWEyLjE1MyAyLjE1MyAwIDAwLS41MTcgMS40MzZ2NC45N2gtMS44NjVWMTcuODljMC0uNzM2LS4wMjEtMS41MzQtLjA2Ni0yLjM5OGgxLjYzNmwuMDg3IDEuMzFoLjA1MWMuMjE5LS40MDcuNTQzLS43NDMuOTY2LTEuMDExYTMuMTUzIDMuMTUzIDAgMDExLjY5LS40NzFjLjc4MSAwIDEuNDMyLjI1MiAxLjk0OS43NTkuNjQ1LjYyLjk2NSAxLjU0Ni45NjUgMi43NzZ2NS4wMTl6TTE5NS40NDIgMTYuODkxaC0yLjA1MnY0LjA3YzAgMS4wMzQuMzY1IDEuNTUyIDEuMDg3IDEuNTUyLjMzNCAwIC42MTEtLjAyOS44My0uMDg4bC4wNDggMS40MTNjLS4zNjguMTM5LS44NTIuMjA4LTEuNDQ3LjIwOC0uNzM2IDAtMS4zMDktLjIyNC0xLjcyMy0uNjcxLS40MTYtLjQ0OC0uNjIyLTEuMjAyLS42MjItMi4yNnYtNC4yMjRoLTEuMjI1di0xLjM5NWgxLjIyNVYxMy45NmwxLjgyNi0uNTV2Mi4wODRoMi4wNTF2MS4zOTdoLjAwMnpNMjA1LjMwNSAyMy44NzRoLTEuODY1VjE5LjExYzAtMS41MDItLjU2Mi0yLjI1NC0xLjY4Ny0yLjI1NC0uODY0IDAtMS40NTQuNDM2LTEuNzc4IDEuMzA3YTIuMzQ0IDIuMzQ0IDAgMDAtLjA4Ny42N3Y1LjAzOGgtMS44NjF2LTEyLjIyaDEuODYxVjE2LjdoLjAzNmMuNTg2LS45MTkgMS40MjctMS4zNzggMi41MTctMS4zNzguNzcxIDAgMS40MS4yNTMgMS45MTYuNzYuNjMxLjYzLjk0OCAxLjU2OS45NDggMi44MXY0Ljk4ek0yMTUuNDc5IDE5LjI4OWMwIC4zMzQtLjAyNS42MTQtLjA2OS44NDRoLTUuNTg4Yy4wMjUuODI4LjI5MiAxLjQ1OS44MDkgMS44OTYuNDczLjM5MSAxLjA4My41ODcgMS44MjkuNTg3LjgyNyAwIDEuNTgxLS4xMzIgMi4yNi0uMzk3bC4yOTIgMS4yOTRjLS43OTUuMzQ1LTEuNzMuNTE3LTIuODEzLjUxNy0xLjI5OCAwLTIuMzItLjM4Mi0zLjA1OS0xLjE0Ni0uNzQ0LS43NjQtMS4xMTItMS43OS0xLjExMi0zLjA3NiAwLTEuMjY0LjM0NC0yLjMxNiAxLjAzNS0zLjE1NS43MjItLjg5NiAxLjY5OC0xLjM0NCAyLjkzLTEuMzQ0IDEuMjA1IDAgMi4xMjEuNDQ4IDIuNzM5IDEuMzQ0LjUuNzEuNzQ3IDEuNTkuNzQ3IDIuNjM2em0tMS43NzgtLjQ4MmMuMDE1LS41NTMtLjEwOC0xLjAzLS4zNjEtMS40My0uMzIzLS41MTgtLjgxNi0uNzc3LTEuNDgyLS43NzctLjYwOCAwLTEuMTA0LjI1Mi0xLjQ4My43NTgtLjMwOS40MDQtLjQ5Mi44ODYtLjU1MyAxLjQ0OWgzLjg3OXpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImFwcC1zdG9yZV9zdmdfX2NsaXAwXzUxOjUwMVwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgyNDB2NzEuMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0FwcFN0b3JlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnQ2hlY2tTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE2LjA3MSAwSDEuOTNBMS45MjkgMS45MjkgMCAwMDAgMS45MjlWMTYuMDdDMCAxNy4xMzcuODYzIDE4IDEuOTI5IDE4SDE2LjA3QTEuOTI5IDEuOTI5IDAgMDAxOCAxNi4wNzFWMS45M0ExLjkyOSAxLjkyOSAwIDAwMTYuMDcxIDB6bTAgMTYuMDcxSDEuOTNWMS45M0gxNi4wN1YxNi4wN3ptLTEuNDQtOS43MTJsLTYuOTM1IDYuODc5YS40ODIuNDgyIDAgMDEtLjY4Mi0uMDAzTDMuMzY3IDkuNTU4YS40ODIuNDgyIDAgMDEuMDAzLS42ODJsLjkxMi0uOTA1YS40ODIuNDgyIDAgMDEuNjgyLjAwM2wyLjQwMyAyLjQyMiA1LjY3OS01LjYzNGEuNDgyLjQ4MiAwIDAxLjY4Mi4wMDNsLjkwNS45MTJhLjQ4Mi40ODIgMCAwMS0uMDAyLjY4MnpcIlxuICAgICAgICBmaWxsPVwiI0ZDQzcyOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NoZWNrU3F1YXJlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRGlzY29yZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjUuNjAzIDBIMy4zOTdDMS41MjUgMCAwIDEuMzM0IDAgMi45ODd2MTkuNjA0YzAgMS42NTMgMS41MjUgMi45ODcgMy4zOTcgMi45ODdIMjIuMTlsLS44NzgtMi42ODMgMi4xMjEgMS43MjYgMi4wMDUgMS42MjRMMjkgMjlWMi45ODdDMjkgMS4zMzQgMjcuNDc1IDAgMjUuNjAzIDB6bS02LjM5NyAxOC45MzdzLS41OTYtLjYyMy0xLjA5My0xLjE3NWMyLjE3LS41MzYgMi45OTktMS43MjUgMi45OTktMS43MjUtLjY4LjM5Mi0xLjMyNi42NjctMS45MDYuODU1LS44MjguMzA1LTEuNjI0LjUwOC0yLjQwMy42MjRhMTMuMjQgMTMuMjQgMCAwMS00LjI5Mi0uMDE0IDE1LjQ1IDE1LjQ1IDAgMDEtMi40MzYtLjYyNGMtLjM4LS4xMy0uNzk1LS4yOS0xLjIxLS40OTMtLjA0OS0uMDI5LS4wOTktLjA0NC0uMTQ4LS4wNzNhLjIyOC4yMjggMCAwMS0uMDY3LS4wNDNjLS4yOTgtLjE0NS0uNDY0LS4yNDYtLjQ2NC0uMjQ2cy43OTYgMS4xNiAyLjkgMS43MWMtLjQ5Ny41NTItMS4xMSAxLjIwNC0xLjExIDEuMjA0LTMuNjYyLS4xMDItNS4wNTQtMi4yMDQtNS4wNTQtMi4yMDQgMC00LjY2OSAyLjM4Ni04LjQ1NCAyLjM4Ni04LjQ1NCAyLjM4Ni0xLjU2NiA0LjY1Ny0xLjUyMiA0LjY1Ny0xLjUyMmwuMTY1LjE3NGMtMi45ODMuNzU0LTQuMzU4IDEuOS00LjM1OCAxLjlzLjM2NS0uMTc1Ljk3OC0uNDIxYzEuNzczLS42ODEgMy4xODEtLjg3IDMuNzYxLS45MTMuMS0uMDE1LjE4My0uMDMuMjgyLS4wM2ExNi4wMTEgMTYuMDExIDAgMDEzLjM0OC0uMDI4YzEuNTc0LjE1OSAzLjI2NC41NjUgNC45ODggMS4zOTIgMCAwLTEuMzEtMS4wODgtNC4xMjctMS44NDJsLjIzMi0uMjMyczIuMjctLjA0MyA0LjY1NyAxLjUyM2MwIDAgMi4zODYgMy43ODQgMi4zODYgOC40NTMgMCAwLTEuNDA4IDIuMTAyLTUuMDcgMi4yMDR6bS03LjcwNS02Ljc3MmMtLjk0NSAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NCAwIDEuNjktLjcyNiAxLjY5LTEuNjEuMDE2LS44ODUtLjc0Ni0xLjYxLTEuNjktMS42MXptNi4wNDggMGMtLjk0NCAwLTEuNjkuNzI2LTEuNjkgMS42MSAwIC44ODQuNzYyIDEuNjEgMS42OSAxLjYxLjk0NSAwIDEuNjktLjcyNiAxLjY5LTEuNjEgMC0uODg1LS43NDUtMS42MS0xLjY5LTEuNjF6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Rpc2NvcmRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEcm9wRG93bihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNC41MTYgNy41NDhjLjQzNi0uNDQ2IDEuMDQzLS40ODEgMS41NzYgMEwxMCAxMS4yOTVsMy45MDgtMy43NDdjLjUzMy0uNDgxIDEuMTQxLS40NDYgMS41NzQgMCAuNDM2LjQ0NS40MDggMS4xOTcgMCAxLjYxNS0uNDA2LjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMmExLjA5NSAxLjA5NSAwIDAxLTEuNTc2IDBTNC45MjQgOS41OCA0LjUxNiA5LjE2M2MtLjQwOC0uNDE4LS40MzYtMS4xNyAwLTEuNjE1elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdEcm9wRG93bsSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDEwbDUgNSA1LTVIN3pcIiBmaWxsPVwiIzAwMFwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRHJvcERvd27EsGNvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0V0aExvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0MiA3MVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjZ9XG4gICAgICAgIGQ9XCJNMjAuOTk2IDI3LjI5M0wyIDM2LjA5bDE4Ljk5NiAxMS40MjcgMTguOTktMTEuNDI3LTE4Ljk5LTguNzk2elwiXG4gICAgICAgIGZpbGw9XCIjMDEwMTAxXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTEuNTcgMzUuODM0bC0uMjUzLjQyOC40MjUuMjU2TDIwLjc0IDQ3Ljk0NGwuNzU4LjQ1NlYyLjE3NGwtLjkzIDEuNTcxTDEuNTcgMzUuODM1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjh9XG4gICAgICAgIGQ9XCJNMjEuNDI2IDMuNzQ1bC0uOTMtMS41NzJWNDguNGwuNzU4LS40NTYgMTguOTg5LTExLjQyNi40MjUtLjI1Ni0uMjUzLS40MjhMMjEuNDI2IDMuNzQ1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBvcGFjaXR5PXswLjQ1fVxuICAgICAgICBkPVwiTTIwLjQ5NyA1MS40NjJWNjUuNDFMMy43NSA0MS4zODlsMTYuNzQ3IDEwLjA3M3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC44fVxuICAgICAgICBkPVwiTTIwLjczOCA1MC43NTFsLS4yNDIuMTQ2VjY4LjU5bC45MS0xLjMwNEw0MC40MSA0MC4wMzlsLS42NjgtLjcxNEwyMC43MzggNTAuNzV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdFdGhMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRmFjZWJvb2socHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTYuMDQyIDMuNjI1aDE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxMi40MTcgMi40MTd2MTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEtMi40MTcgMi40MTdINi4wNDJhMi40MTcgMi40MTcgMCAwMS0yLjQxNy0yLjQxN1Y2LjA0MmEyLjQxNyAyLjQxNyAwIDAxMi40MTctMi40MTd6TTIxLjc1IDYuMDQyaC0zLjAyYTQuMjMgNC4yMyAwIDAwLTQuMjMgNC4yMjl2My4wMmgtMi40MTd2My42MjZIMTQuNXY4LjQ1OGgzLjYyNXYtOC40NThoMy42MjV2LTMuNjI1aC0zLjYyNXYtMi40MTdhMS4yMDggMS4yMDggMCAwMTEuMjA4LTEuMjA4aDIuNDE3VjYuMDQyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGYWNlYm9va1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0ZpbmdlcnByaW50KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2ZpbmdlcnByaW50X3N2Z19fY2xpcDApXCIgZmlsbD1cIiMwMDBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNi4zNzMuMTY0Yy0uNjE5LjE2NC0uOTI4Ljk2LS41OTggMS41NjQuMjA2LjM1Ni43ODQuNDM5IDMuNDQ0LjUyIDIuNTU3LjA4MyAzLjQ2NC4yMiA0LjUxNi42ODcgMS40NDMuNjMxIDIuMDgyLjQ2NiAyLjA4Mi0uNDk0IDAtLjgyMy0uODA0LTEuMzQ0LTIuOTI4LTEuOTItMS43NzMtLjQ5NS01LjIxNy0uNjg3LTYuNTE2LS4zNTd6TTExLjU2OCAyLjAwMkM4LjYyIDMuNzAzIDUuMDkzIDcuMzI1IDUuMjM4IDguNTA1Yy4wNC4zMy4yMDYuNzQuMzkxLjg3OC4yNjkuMjIuNjYtLjA4MiAxLjg1Ni0xLjQyNyAxLjY3LTEuODY2IDMuMTc2LTMuMTI4IDQuOTI5LTQuMTE2LjYxOC0uMzU2IDEuMjU4LS43NjggMS40MDItLjkwNS4zNzEtLjQxMi4zMS0xLjI2Mi0uMTQ0LTEuNTkyLS41MTYtLjM1Ni0uMjg5LS40MTEtMi4xMDQuNjU5ek0yNy42MTEgMy4yOTJjLS43NDIuNTQ4LS40MTIgMS40NTQuOTcgMi42NjEgMS41NDYgMS4zNDUgMy4yNzggMy41NjcgNC40NTQgNS42OC44NjYgMS41NjQgMS4zODEgMS44NjYgMS44NzYgMS4wNy4yMjctLjM1Ny4yMDYtLjU3Ni0uMTAzLTEuMzQ0LTEuMzgyLTMuNDAzLTYuMTg2LTguODA4LTcuMTk3LTguMDY3ek0xNS41MDcgNC45MWMtMy4xMTQgMS4xMjYtNS45OCAzLjQwMy03Ljg3NyA2LjMxMS0yLjEwNCAzLjE4My0zLjIzOCA2LjkxNS0zLjc1MyAxMi4yMUMyLjc0MyAzNS4zOTUgMy42NyA0Ny4zNTggNi42NCA1OC44YzEuMTU1IDQuNDcyIDEuMzQgNC44ODQgMi4wMiA0Ljc3NC4zMy0uMDU1LjU3OC0uMjc0LjYyLS41NzYuMDQtLjI3NS0uMzEtMS44MzktLjc2NC0zLjQ1Ny0yLjQ3NC04Ljc4LTMuNzExLTE5LjE1Mi0zLjQ2NC0yOC43MDEuMzEtMTAuNTY0IDEuMy0xNC44NzIgNC40NzUtMTkuMDcgMi42NC0zLjUxMiA1Ljc5NC01LjI0IDkuNTg5LTUuMjQgMy44MTQgMCA2Ljk5IDEuNzI4IDkuNjA5IDUuMjEzIDEuNzUzIDIuMzYgMi41NzggNC4xNDMgMy40MDIgNy4yOTguNjQgMi41MjUuNzIyIDUuMDQ5LjQxMyAxMi40ODUtLjI2OCA2LjM2Ni4zOTIgMTEuNDQyIDIuMjQ4IDE3LjM0MS43ODMgMi40NDIgMS4yNTcgMy4wNzMgMS44NTUgMi40MTUuNDM0LS40NjcuMzkyLTEuMjA4LS4xODUtMi42OS0uNzQyLTEuOTc1LTEuNzMyLTYuMzM4LTIuMTAzLTkuMzI4LS4yNjktMi4xNjgtLjMxLTMuNTY4LS4xNjUtNy42MDEuMjQ3LTcuMDguMTg1LTkuODc4LS4yMDctMTEuOTA4LTEuMzgxLTYuOTE1LTUuMDkzLTEyLjE4My0xMC4xMjUtMTQuNDYtMi4yODgtMS4wMTYtNi4wNjItMS4yMDgtOC4zNTEtLjM4NHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjE4NyA5LjEzNmMtMi40MTIuNzk2LTUuNzMyIDMuNjc3LTUuNTg4IDQuOTEyLjA0MS4zMDEuMjA2LjY4NS4zOTIuODIzLjI2OC4yMi42NC0uMDI4IDEuNzUzLTEuMTI1IDIuMjA2LTIuMTk1IDQuODg3LTMuMjY2IDcuMzQtMi45MDkgMS4wMzIuMTY1IDEuMTc2LjExIDEuMzgyLS4zODQuMjktLjcxMy4yOS0uNzY4LS4xMDMtMS4yNjItLjM5Mi0uNTQ5LTMuNTQ2LS41NzYtNS4xNzYtLjA1NXpNMjMuMjgxIDEwLjMxNmMtLjA4Mi4wODItLjE0NC40NjYtLjE0NC43OTYgMCAuNDY2LjI4OC44NSAxLjE1NCAxLjUwOSAyLjI5IDEuNzI4IDQuNTE3IDUuNjUyIDQuOTUgOC42NDMuMTg1IDEuMjYyLjgwNCAxLjcyOCAxLjM2Ljk4OC4zOTItLjQ5NC4zOTItLjYwNC4wODMtMS45NDgtLjM5Mi0xLjc4NC0xLjE5Ni0zLjg5Ny0yLjA4My01LjU0My0xLjUyNi0yLjcxNi00LjY2LTUuMzUtNS4zMi00LjQ0NXpNMy4xNzYgMTEuNDEzYy0uODg3IDEuNjc0LTEuOTYgNC45OTQtMi40MzQgNy40MzYtLjYxOCAzLjIzOC0uNjM5IDQuMzM1LS4wODIgNC43Mi41MzYuMzg0IDEuMjM3LS41MjIgMS4yMzctMS42MiAwLTEuNDI2IDEuMDMxLTUuNjI0IDEuOTgtNy45MjkuNzQyLTEuODM4Ljg2Ni0yLjM2LjctMi43OTktLjMwOC0uNzY4LS45MjctLjY4Ni0xLjQwMS4xOTJ6TTE2LjEwNSAxMy43NzNjLTEuNjkuOTMzLTIuNTM2IDEuNzI5LTMuNDg1IDMuMTI4LTEuNzczIDIuNjg5LTIuMzcxIDUuOS0yLjYxOSAxMy45MzktLjMzIDExLjY2MSAxLjczMiAyMy44OTkgNS43NzQgMzQuMjk4LjkwNyAyLjMwNSAxLjE1NSAyLjc0NCAxLjU2NyAyLjc0NCAxLjAxIDAgMS4wMS0uNzQxLS4wMi0zLjM0OC0yLjQ1NC02LjE3My00LjM1MS0xMy45MzktNS4yMTctMjEuMzQ3LS43MjItNi4wMzYtLjU5OC0xNi45ODQuMjQ3LTIxLjI2NS41NTctMi45MDggMi4xMjQtNS4xODYgNC4yMjctNi4yIDEuMzQtLjY2IDMuNzMzLS41NzcgNS4xOTcuMTY0IDIuMjI3IDEuMTI1IDQuMDgzIDQuMDg4IDQuMzkyIDcuMDI0LjA2Mi43MTMgMCAzLjQwMi0uMTQ0IDYuMDEtLjIwNyAzLjc1OC0uMjI3IDUuNDg3LS4wMiA4LjI4NS41MTUgNy42NTYgMi4xMjMgMTQuNDYgNC44ODYgMjAuNzE3LjkyOCAyLjExMiAxLjI3OSAyLjUyNCAxLjgzNSAyLjI1LjY0LS4zMy41MTYtMS4xNTMtLjUzNi0zLjU2Ny0zLjcxMS04LjUwNi01LjIxNy0xOC00LjUxNi0yOC4yNjIuMzMtNC42MzcuMTY1LTYuMzkzLS44MjQtOS4wODItLjc2NC0yLjAzLTIuMzkzLTQuMTE2LTQuMDgzLTUuMTg2LTEuMDEtLjY1OS0xLjQ4NS0uNzY4LTMuMzQxLS44NS0xLjg5Ny0uMDgzLTIuMzEtLjAyOC0zLjMyLjU0OHpNMzUuMiAxNS4yMjdjLS4xODYuMjQ3LS4yNjguNjU5LS4yMDYuOTA2LjcyMiAyLjQ3IDEuMTc1IDUuNDMzIDEuMjc4IDguMzk2LjEyNCAzLjIzOC4yNjggMy45NzkuODA1IDMuOTc5LjU5OCAwIC45MDctLjg1MS45MDctMi41NTItLjAyLTUuMTA0LTEuMjU4LTExLjE2OC0yLjI0OC0xMS4xNjgtLjEwMyAwLS4zNS4xOTItLjUzNi40NHpNOC45OSAxNi4zOGMtMS4wNTEuOTA1LTIuMDQgNi42OTUtMi4xODUgMTIuNzg2LS4wNjIgMS43ODQgMCAyLjE5NS4zMSAyLjQ3LjI0Ny4yMTkuNDUzLjIxOS43IDAgLjI4OS0uMjQ3LjQxMy0xLjAxNi42MTktMy44NDIuMzMtNC43NzQuNjE5LTYuODA1IDEuMjE3LTguNzguNTk4LTIuMDAzLjU5OC0yLjE5NS4xMDMtMi41OC0uNDc1LS4zMjktLjQ3NS0uMzI5LS43NjMtLjA1NHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE4Ljk5MiAxNy44MzRjLS41NTcuNzQtLjIwNiAxLjUxLjc4NCAxLjc1NiAxLjE5NS4yNzQgMi4yMjcgMS4zMTcgMi43NDIgMi43NDQuNDMzIDEuMTguNDU0IDEuNTM2LjMzIDQuMTk4LS4xMjQgMy4wMTgtLjAyIDMuNjIyLjcyMiAzLjYyMi41NzcgMCAuNzgzLS44MjMuOTI4LTMuNzYuMTQ0LTMuMDE3LjAyLTMuOTIzLS45MjgtNS45MjYtLjY4LTEuMzcyLTEuOTE4LTIuNDk3LTMuMjc5LTIuOTA4LS43ODQtLjIyLS45NDktLjE5Mi0xLjMuMjc0ek0xNS44MTYgMTguOTA0Yy0uODI1LjcxMy0xLjY5IDIuNTI0LTEuOTM4IDQuMTE2LS4zMSAxLjk0OC0uNjggNy4zMjYtLjU5OCA4LjkxNy4wNjIgMS4xOC4xMjQgMS4zNzIuNTM2IDEuNDU1Ljg0NS4xNjQgMS4wNzItLjM4NSAxLjA3Mi0yLjY2MiAwLTEuMTUyLjE0NS0zLjQzLjMxLTUuMDQ5LjMwOS0zLjA3My43LTQuMzkgMS41MjYtNS4wNzYuNTM2LS40MTEuNTU2LTEuNTkxLjA2MS0xLjk0OC0uMjg4LS4xOTItLjUzNi0uMTM3LS45NjkuMjQ3elwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTguMjkgMjEuODk1Yy0xLjIzNi42ODYtMS41MDUgMi4xMTMtMS42NyA5LjQ5NC0uMjY4IDEwLjM5OSAxLjIxNyAxOS41OSA0LjY2IDI4LjgxIDEuODc3IDUuMDQ5IDIuNjQgNi41ODUgMy4yOCA2LjU4NS45OSAwIC45OS0uNzQtLjA2Mi0zLjA0Ni0yLjA4My00LjYzNy0zLjk4LTEwLjU2My00Ljk1LTE1LjUwMi0xLjA5Mi01LjcwNy0xLjI1Ny03LjYtMS4yMzctMTUuMDY0IDAtNy4yMTYuMTY1LTkuMTM3Ljc0My05LjI3NC41NTYtLjEzNy43NjMuNzQuNTM2IDIuNTUyLS4yNjggMi4zODctLjI2OCAxMS4xNC4wMiAxMy44NTYuNTk5IDUuNjUyIDEuNTg4IDEwLjQ1NCAzLjEzNSAxNS4zMzggMS4wMzEgMy4yMzggMi42NiA3LjMyNiAzLjYzIDkgLjU1NiAxLjAxNSAxLjE3NSAxLjE4IDEuNDg0LjQxMi4yMjctLjU3Ny4yNDctLjQ5NC0xLjQyMy00LjMwOC0yLjk5LTYuODA1LTQuODY2LTE0Ljg3Mi01LjQwMy0yMy4yOTUtLjE4NS0zLjAxOS0uMTg1LTQuODU3LjA0Mi04LjY5OS4yODgtNS41NDIuMjI3LTUuOTU0LTEuMTM0LTYuNzIyLS43ODQtLjQzOS0xLjA1Mi0uNDM5LTEuNjUtLjEzN3pNMjkuODggMjUuMDc4Yy0uNDMzLjU3Ni0uNjYgMy44OTYtLjYxOSA5LjE5Mi4wNDEgNS40MzIuMTY1IDYuMTczIDEuMDEgNi4xNzNoLjU5OWwtLjA4My00LjgwMWMtLjA0MS0yLjg4Mi4wNDEtNS45LjE4Ni03LjUxOS4yNDctMi41NTEuMjQ3LTIuNzQ0LS4xMDMtMy4xLS40OTUtLjQ2Ny0uNjItLjQ0LS45OS4wNTV6TS4zNzEgMjYuMjAzYy0uNDk1LjYzLS40OTUgMTIuNDg0IDAgMTMuMTE1LjM3MS41MjIuNDEzLjUyMi45MjguMTY1LjM3MS0uMjc0LjM5Mi0uNjU5LjM5Mi02LjcyMiAwLTYuMDY0LS4wMi02LjQ0OS0uMzkyLTYuNzIzLS41MTUtLjM1Ny0uNTU3LS4zNTctLjkyOC4xNjV6TTM2LjQ3OCAzMC44OTVjLS4yNjcuMzI5LS4xNjQgMTAuMzcxLjEwNCAxMC43MjguMzcuNDk0Ljk0OC4zODQgMS4xOTYtLjE5Mi4zMDktLjc5Ni4yNjgtOS45ODgtLjA0Mi0xMC40LS4yNjgtLjM1Ni0xLjAzLS40MzgtMS4yNTgtLjEzNnpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTIyLjcwNCAzMi45MjVjLS40MTMgMS4wNy4zMDkgOS42MzEgMS4xNTQgMTMuNTgyLjMxIDEuNDI3LjY2IDEuODY2IDEuMjE3IDEuNTkyLjQ5NS0uMjQ3LjU1Ny0uOTA2LjI0OC0yLjUyNS0uNTE2LTIuNjM0LS45MjgtNi4zNjUtMS4wNzMtOS41Mi0uMDgyLTEuNjc1LS4yMjctMy4xODQtLjM1LTMuMzc2LS4zMS0uNTIxLS45MjgtLjM4NC0xLjE5Ni4yNDd6TTYuODQ2IDM0LjQwN2MtLjE4NS4yNzQtLjIwNiAxLjEyNS0uMTAzIDMuMDczLjE2NSAzLjEuODI1IDkuNjMgMS4xMzQgMTEuMTEzLjI0OCAxLjE4LjkwNyAxLjYxOCAxLjQwMi45Ni4yNjgtLjM4NC4yNjgtLjY4Ni0uMDQtMi44NTQtLjUzNy0zLjgxNC0uNzIzLTUuNzYyLS44NjctOS0uMDgyLTEuNjczLS4yMjctMy4xODItLjM1LTMuMzc0LS4yNjktLjQ0LS44NjctLjQxMi0xLjE3Ni4wODJ6TTEzLjU2OSAzNi4wOGMtLjM5Mi40OTUtLjM1IDEuMzE4LjIwNiA2LjcyMy43IDYuNzUgMS40NjQgOS4zMyAyLjQ1NCA4LjM2OS4zNy0uMzU3LjM3LS40NjctLjE2NS0zLjcwNC0uMzEtMS44MTEtLjcwMS01LjAyMi0uODg3LTcuMTA3LS4xODUtMi4wNTgtLjM5Mi0zLjk1MS0uNDc0LTQuMTctLjI0OC0uNjA0LS43NDMtLjY2LTEuMTM0LS4xMXpNLjI2OCA0Mi4zMDljLS40NzQuNzY4LjE2NSA2LjMzOCAxLjExNCA5LjY4Ni43IDIuNTI0IDEuMDMgMy4xMjggMS42NSAzLjEyOC43MjEgMCAuODY1LTEuMDE1LjM1LTIuMzg3LS43NjMtMS45NDgtMS4zLTQuNjY1LTEuNTQ3LTcuNjgzLS4yNDctMi44ODEtLjI2OC0yLjk2My0uNzgzLTMuMDQ2LS4yODktLjA1NS0uNjQuMTEtLjc4NC4zMDJ6TTMwLjI5MiA0Mi45NGMtLjA4Mi4xMS0uMTQ0LjQ2Ny0uMTQ0LjgyMyAwIDEuMjM1IDEuNDg1IDYuNjQgMi42NCA5LjU3Ni45OSAyLjU1MiAxLjI1NyAzLjAxOSAxLjY3IDMuMDE5IDEuMDMgMCAuOTY5LS42ODYtLjI2OC00LjAwNi0uNjQtMS43My0xLjUwNi00LjU1NS0xLjkzOS02LjI4NC0uNy0yLjg1My0uODI1LTMuMTU1LTEuMjk5LTMuMjM4LS4yNjgtLjA1NC0uNTc3IDAtLjY2LjExek0yNS4wNTUgNTAuNjIzYy0uMTg2LjYzMS4yMjYgMi4xNCAxLjUwNSA1LjYyNSAxLjMyIDMuNjIyIDIuNzQyIDYuNzUgMy4xMTQgNi45NDIuNDEyLjIyLjg2Ni0uMTEuOTktLjY4Ni4wODItLjMzLS4yMjgtMS4yOS0uOTA4LTIuNzcxLS45Ny0yLjE0LTIuMTI0LTUuMjY5LTMuMDkzLTguMjYtLjMzLTEuMDctLjQ5NS0xLjI4OS0uOTQ5LTEuMjg5LS4yODggMC0uNTc3LjE5Mi0uNjYuNDM5ek04Ljk1IDUyLjE2Yy0uMzcyLjQ5My0uMzMuODUuNjYgNC43MTkgMS4xMzQgNC40NDUgMi44MDQgOS40OTQgMy4yNzggOS44NzguNDk1LjQxMSAxLjA3Mi0uMTM3IDEuMDUyLS45Ni0uMDItLjM1Ny0uNDU0LTEuOTIxLS45OS0zLjQzLS41MzYtMS41MzctMS40MDItNC41LTEuOTM4LTYuNTg2LS43ODQtMy4xLTEuMDUyLTMuODQxLTEuMzgyLTMuODk2LS4yMjctLjAyNy0uNTM2LjA4Mi0uNjguMjc1ek0xNi4wMjMgNTQuMTA4Yy0uMTQ1Ljc0LjkwNyA0LjMwOCAyLjYxOCA4Ljg5IDEuNDIzIDMuODE0IDIuMTg2IDUuMjEzIDIuNzAyIDQuOTM5Ljc0Mi0uMzg1LjYxOC0xLjA3LS44NDYtNC44My0uODA0LTIuMDU3LTEuODE0LTQuOTExLTIuMjQ3LTYuMzM4LS45OS0zLjIzOC0xLjAxLTMuMjkyLTEuNjA5LTMuMjkyLS4zNSAwLS41MzYuMTkyLS42MTguNjN6XCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJmaW5nZXJwcmludF9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDM4djYzSDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdGaW5nZXJwcmludFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0dvb2dsZVBsYXlTdG9yZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0MCA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19jbGlwMF81MTo1NDYpXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjMxLjEwOCA3MS4xMDlIOC44OTJDMy45OTIgNzEuMTA5IDAgNjcuMTAxIDAgNjIuMjJWOC44OUMwIDMuOTg5IDMuOTkxIDAgOC44OTIgMGgyMjIuMjE2QzIzNi4wMDQgMCAyNDAgMy45OSAyNDAgOC44ODlWNjIuMjJjMCA0Ljg4MS0zLjk5NiA4Ljg4OS04Ljg5MiA4Ljg4OXpcIlxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMzEuMTA4IDEuNDIzYzQuMTEgMCA3LjQ3NSAzLjM1NiA3LjQ3NSA3LjQ2NlY2Mi4yMmMwIDQuMTEtMy4zNDMgNy40NjYtNy40NzUgNy40NjZIOC44OTJjLTQuMTEgMC03LjQ3NS0zLjM1Ni03LjQ3NS03LjQ2NlY4Ljg5YzAtNC4xMSAzLjM0My03LjQ2NiA3LjQ3NS03LjQ2NmgyMjIuMjE2em0wLTEuNDIzSDguODkyQzMuOTkyIDAgMCA0LjAwOCAwIDguODg5VjYyLjIyYzAgNC45IDMuOTkxIDguODg5IDguODkyIDguODg5aDIyMi4yMTZjNC44OTYgMCA4Ljg5Mi0zLjk5IDguODkyLTguODg5VjguODlDMjQwIDQuMDA4IDIzNi4wMDQgMCAyMzEuMTA4IDB6XCJcbiAgICAgICAgICBmaWxsPVwiI0E2QTZBNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0xMjYuNDMzIDIzLjUyM2MtMS42MDMgMC0yLjk1NC0uNTYzLTQuMDIyLTEuNjcyYTUuNyA1LjcgMCAwMS0xLjYyNS00LjA3OGMwLTEuNjE4LjU0Ny0yLjk4OCAxLjYyNS00LjA3NCAxLjA2NC0xLjEwOSAyLjQxNS0xLjY3MiA0LjAxNy0xLjY3MiAxLjU4NSAwIDIuOTM2LjU2MyA0LjAyMyAxLjY3MiAxLjA3NyAxLjEyMSAxLjYyNCAyLjQ5MSAxLjYyNCA0LjA3NC0uMDE3IDEuNjIyLS41NjUgMi45OTItMS42MjQgNC4wNzQtMS4wNjQgMS4xMTctMi40MTYgMS42NzYtNC4wMTggMS42NzZ6bS00Ny42ODggMGMtMS41NjggMC0yLjkyOC0uNTU0LTQuMDQtMS42NS0xLjEwNC0xLjA5LTEuNjY1LTIuNDY5LTEuNjY1LTQuMDk2IDAtMS42MjcuNTYxLTMuMDA2IDEuNjY1LTQuMDk2IDEuMDktMS4wOTUgMi40NS0xLjY1IDQuMDQtMS42NWE1LjYxIDUuNjEgMCAwMTIuMjU2LjQ3Yy43MS4zMDcgMS4yODkuNzIzIDEuNzE3IDEuMjMzbC4xMDYuMTI5LTEuMTk2IDEuMTc5LS4xMjQtLjE0NmMtLjY3NS0uODA3LTEuNTgtMS4yMDItMi43NzctMS4yMDItMS4wNjkgMC0yIC4zODEtMi43NjggMS4xMzUtLjc3My43NTgtMS4xNjYgMS43NTEtMS4xNjYgMi45NTMgMCAxLjIwMS4zOTMgMi4xOTQgMS4xNjYgMi45NTJhMy44MyAzLjgzIDAgMDAyLjc2OCAxLjEzNWMxLjE0IDAgMi4wOTctLjM4MSAyLjg0My0xLjEzNS40NDItLjQ0My43MTYtMS4wNjQuODEzLTEuODQ4aC0zLjgzN3YtMS42NTloNS40ODRsLjAyMi4xNTFjLjA0LjI4LjA4LjU2OC4wOC44MzQgMCAxLjUzLS40NiAyLjc2Ni0xLjM3IDMuNjgtMS4wMzMgMS4wODEtMi4zODQgMS42My00LjAxNyAxLjYzem02My40MDYtLjIzNWgtMS42OTFsLTUuMTc5LTguMzIxLjA0NCAxLjQ5OHY2LjgxOGgtMS42OTFWMTIuMjY3aDEuOTI5bC4wNTMuMDg0IDQuODcgNy44MzgtLjA0NC0xLjQ5NHYtNi40MjhoMS43MDl2MTEuMDJ6bS0yOC40MjUgMGgtMS43MTN2LTkuMzYzaC0yLjk3MnYtMS42NThoNy42NTJ2MS42NThoLTIuOTcxdjkuMzYzaC4wMDR6bS02LjA4IDBoLTEuNzA4VjEyLjI2N2gxLjcwOHYxMS4wMnptLTkuNjAzIDBoLTEuNzA4di05LjM2M2gtMi45NzJ2LTEuNjU4aDcuNjUydjEuNjU4aC0yLjk3MnY5LjM2M3ptLTUuNzYyLS4wMThIODUuNzNWMTIuMjY3aDYuNTUydjEuNjU4aC00LjgzOXYzLjAyM2g0LjM2N3YxLjY0aC00LjM2N3YzLjAyNGg0Ljg0djEuNjU4em0zMS4zODMtMi41NThjLjc2NC43NjcgMS42OTEgMS4xNTMgMi43NjkgMS4xNTMgMS4xMDggMCAyLjAxMy0uMzc3IDIuNzY4LTEuMTUzLjc1MS0uNzU0IDEuMTMtMS43NDIgMS4xMy0yLjkzNSAwLTEuMTkyLS4zNzktMi4xODUtMS4xMjUtMi45MzVhMy43ODIgMy43ODIgMCAwMC0yLjc2OS0xLjE1MmMtMS4xMDggMC0yLjAxMy4zNzctMi43NjQgMS4xNTItLjc1Ljc1NC0xLjEzIDEuNzQzLTEuMTMgMi45MzUgMCAxLjE5My4zNzUgMi4xODYgMS4xMjEgMi45MzV6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0xMjAuNjI3IDM4LjY3NWMtNC4xNzIgMC03LjU1NCAzLjE4LTcuNTU0IDcuNTY0IDAgNC4zNDQgMy40MDQgNy41NjMgNy41NTQgNy41NjMgNC4xNzIgMCA3LjU1NC0zLjIwMSA3LjU1NC03LjU2MyAwLTQuMzg1LTMuMzgyLTcuNTYzLTcuNTU0LTcuNTYzem0wIDEyLjEzYy0yLjI4MyAwLTQuMjQ3LTEuODk4LTQuMjQ3LTQuNTg0IDAtMi43MjcgMS45NjktNC41ODQgNC4yNDctNC41ODQgMi4yODMgMCA0LjI0NyAxLjg1NyA0LjI0NyA0LjU4NC4wMDUgMi43MDQtMS45NjQgNC41ODQtNC4yNDcgNC41ODR6bS0xNi40ODItMTIuMTNjLTQuMTcyIDAtNy41NTQgMy4xOC03LjU1NCA3LjU2NCAwIDQuMzQ0IDMuNDA0IDcuNTYzIDcuNTU0IDcuNTYzIDQuMTcyIDAgNy41NTQtMy4yMDEgNy41NTQtNy41NjMgMC00LjM4NS0zLjM4Ni03LjU2My03LjU1NC03LjU2M3ptMCAxMi4xM2MtMi4yODMgMC00LjI0Ny0xLjg5OC00LjI0Ny00LjU4NCAwLTIuNzI3IDEuOTY5LTQuNTg0IDQuMjQ3LTQuNTg0IDIuMjgzIDAgNC4yNDcgMS44NTcgNC4yNDcgNC41ODQgMCAyLjcwNC0xLjk2NCA0LjU4NC00LjI0NyA0LjU4NHptLTE5LjYxMi05LjgydjMuMjAxaDcuNjUxYy0uMjM0IDEuNzk1LS44MjUgMy4xMjEtMS43MyA0LjAzLTEuMTIyIDEuMTI2LTIuODUzIDIuMzUtNS45MDMgMi4zNS00LjcwMyAwLTguMzgtMy44MTMtOC4zOC04LjUzNSAwLTQuNzIxIDMuNjc3LTguNTMzIDguMzgtOC41MzMgMi41MzggMCA0LjM4OCAxLjAwNiA1Ljc2MSAyLjI5MWwyLjI2LTIuMjdjLTEuOTA3LTEuODM1LTQuNDQ1LTMuMjQtOC4wMDQtMy4yNC02LjQ1IDAtMTEuODYzIDUuMjc1LTExLjg2MyAxMS43MzUgMCA2LjQ3NyA1LjQwOCAxMS43MzQgMTEuODYzIDExLjczNCAzLjQ4NCAwIDYuMDk3LTEuMTQzIDguMTY0LTMuMjk4IDIuMTA2LTIuMTE0IDIuNzczLTUuMDk4IDIuNzczLTcuNTA1IDAtLjc1LS4wNTgtMS40MjMtLjE3Ny0xLjk5NWgtMTAuOGMuMDA1LS4wMDUuMDA1LjAzNS4wMDUuMDM1em04MC4yMTkgMi40OTJjLS42MzEtMS42OTgtMi41MzktNC44Mi02LjQ1LTQuODItMy44NzcgMC03LjEgMy4wNjQtNy4xIDcuNTY0IDAgNC4yNDcgMy4xODggNy41NjMgNy40NzUgNy41NjMgMy40NDQgMCA1LjQ0OC0yLjExNSA2LjI3NC0zLjM1NmwtMi41NTYtMS43MmMtLjg0OCAxLjI2My0yLjAyNyAyLjA5Mi0zLjcgMi4wOTItMS42OTEgMC0yLjg3NS0uNzcxLTMuNjYxLTIuMjkybDEwLjA3MS00LjE4OWMwIC4wMDQtLjM1My0uODQyLS4zNTMtLjg0MnptLTEwLjI3IDIuNTI3Yy0uMDc5LTIuOTIyIDIuMjYxLTQuNDA3IDMuOTM0LTQuNDA3IDEuMzIxIDAgMi40Mi42NTIgMi43OTUgMS42bC02LjcyOSAyLjgwN3ptLTguMTgxIDcuMzI4aDMuMzA3di0yMi4yMmgtMy4zMDd2MjIuMjJ6bS01LjQzLTEyLjk3NmgtLjEyYy0uNzQ2LS44OTEtMi4xNjMtMS42OTgtMy45NzMtMS42OTgtMy43NTggMC03LjIxOSAzLjMyLTcuMjE5IDcuNTg1IDAgNC4yNDcgMy40NDQgNy41MjggNy4yMTkgNy41MjggMS43ODggMCAzLjIyNy0uODEyIDMuOTczLTEuNzJoLjEydjEuMDg2YzAgMi44ODYtMS41MzcgNC40NDItNC4wMTQgNC40NDItMi4wMjYgMC0zLjI4NS0xLjQ2My0zLjc5Ny0yLjY4N2wtMi44NzQgMS4yMDZjLjgyNSAxLjk5NSAzLjAyOSA0LjQ2NCA2LjY2NyA0LjQ2NCAzLjg3NiAwIDcuMTYxLTIuMjkyIDcuMTYxLTcuODgyVjM5LjExaC0zLjEyNnYxLjI0NmgtLjAxN3ptLTMuNzk4IDEwLjQ0OWMtMi4yODIgMC00LjE5LTEuOTE1LTQuMTktNC41NjIgMC0yLjY2OSAxLjkwOC00LjYwMiA0LjE5LTQuNjAyIDIuMjYxIDAgNC4wMTQgMS45NTUgNC4wMTQgNC42MDIuMDIyIDIuNjQ3LTEuNzQ5IDQuNTYyLTQuMDE0IDQuNTYyem00My4xNjMtMTkuNjkzaC03LjkwN3YyMi4yMmgzLjMwN3YtOC40MTVoNC42MDVjMy42NiAwIDcuMjU4LTIuNjY0IDcuMjU4LTYuODkzIDAtNC4yMy0zLjU4NS02LjkxMi03LjI2My02LjkxMnptLjA5NyAxMC43MDJoLTQuNzAyVjM0LjE5aDQuNzAyYzIuNDc3IDAgMy44NzcgMi4wNTMgMy44NzcgMy44MTMgMCAxLjc0Mi0xLjQxNyAzLjgxMi0zLjg3NyAzLjgxMnptMjAuNDIxLTMuMTc4Yy0yLjQwMiAwLTQuODc5IDEuMDY4LTUuOTA0IDMuMzk1bDIuOTMyIDEuMjI0Yy42MzItMS4yMjQgMS43ODgtMS42NCAzLjAxMS0xLjY0IDEuNzEzIDAgMy40NDQgMS4wMjggMy40ODQgMi44NjR2LjIzNWMtLjU5Mi0uMzM3LTEuODktLjg1Mi0zLjQ0NC0uODUyLTMuMTY2IDAtNi4zNzUgMS43MzgtNi4zNzUgNC45OTcgMCAyLjk4MyAyLjU5NiA0Ljg5OCA1LjQ4OCA0Ljg5OCAyLjIyIDAgMy40NDMtMS4wMDYgNC4yMDctMi4xNzJoLjExOXYxLjcyaDMuMTg4di04LjUxMmMwLTMuOTYzLTIuOTMxLTYuMTU3LTYuNzA2LTYuMTU3em0tLjQxNSAxMi4xNjljLTEuMDgyIDAtMi41OTctLjUzMi0yLjU5Ny0xLjg5OCAwLTEuNzIgMS44OS0yLjM3MSAzLjUwMi0yLjM3MSAxLjQ1NyAwIDIuMTQ1LjMxNCAzLjAxMS43NDlhMy45ODcgMy45ODcgMCAwMS0zLjkxNiAzLjUyek0yMTkuMDkgMzkuMTFsLTMuNzk3IDkuNjM4aC0uMTE5bC0zLjkzNC05LjYzOGgtMy41NTlsNS45MDMgMTMuNDczLTMuMzY0IDcuNDg3aDMuNDQ0bDkuMDgyLTIwLjk2aC0zLjY1NnptLTI5Ljc2NyAxNC4yMjJoMy4zMDd2LTIyLjIyaC0zLjMwN3YyMi4yMnpcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTE4LjQ3MyAxMy4zOTNjLS41MTIuNTU0LS44MDggMS40LS44MDggMi41MVY1NS4yMWMwIDEuMTA5LjI5NiAxLjk1Ni44MjYgMi40ODhsLjEzNy4xMiAyMS45MzQtMjIuMDI1di0uNDkyTDE4LjYxIDEzLjI3M2wtLjEzNy4xMnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQwX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk00Ny44NiA0My4xNTdsLTcuMzE2LTcuMzQ1di0uNTE1bDcuMzE2LTcuMzQ1LjE2LjA5NyA4LjY1MyA0LjkzOWMyLjQ3NyAxLjQgMi40NzcgMy43MTUgMCA1LjEzM0w0OC4wMiA0My4wNmwtLjE1OS4wOTd6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MV9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDguMDIgNDMuMDZsLTcuNDc1LTcuNTA2LTIyLjA3MiAyMi4xNjJjLjgwOC44NyAyLjE2NC45NjcgMy42NzguMTJMNDguMDIgNDMuMDZ6XCJcbiAgICAgICAgICBmaWxsPVwidXJsKCNnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50Ml9saW5lYXJfNTE6NTQ2KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDguMDIgMjguMDQ5TDIyLjE1IDEzLjI5NWMtMS41MTQtLjg2OS0yLjg3NC0uNzQ5LTMuNjc4LjEybDIyLjA3MiAyMi4xNCA3LjQ3NC03LjUwNnpcIlxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2dvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQzX2xpbmVhcl81MTo1NDYpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBvcGFjaXR5PXswLjJ9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNNDcuODYgNDIuOUwyMi4xNyA1Ny41NTdjLTEuNDM2LjgyOS0yLjcxNi43NzEtMy41NDEuMDE3bC0uMTM3LjEzOC4xMzcuMTJjLjgyNS43NDkgMi4xMDUuODEgMy41NC0uMDE4TDQ4LjAzOCA0My4wNmwtLjE3Ny0uMTZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgb3BhY2l0eT17MC4xMn1cbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk01Ni42NzMgMzcuODY0TDQ3LjgzOCA0Mi45bC4xNi4xNiA4LjY1My00LjkzOWMxLjI0LS43MDkgMS44NS0xLjY0IDEuODUtMi41NjctLjA3NS44NTItLjcwNiAxLjY1OC0xLjgyOCAyLjMxelwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIG9wYWNpdHk9ezAuMjV9XG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMjIuMTUgMTMuNTUybDM0LjUyMyAxOS42OTNjMS4xMjIuNjM0IDEuNzUzIDEuNDYzIDEuODUgMi4zMSAwLS45MjctLjYxLTEuODU4LTEuODUtMi41NjdMMjIuMTUxIDEzLjI5NWMtMi40NzctMS40MjMtNC40ODYtLjIzNS00LjQ4NiAyLjYwN3YuMjU3YzAtMi44NDYgMi4wMDktNC4wMTIgNC40ODYtMi42MDd6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fcGFpbnQwX2xpbmVhcl81MTo1NDZcIlxuICAgICAgICAgIHgxPXszOC41OTV9XG4gICAgICAgICAgeTE9ezE1LjQ3OH1cbiAgICAgICAgICB4Mj17My40NH1cbiAgICAgICAgICB5Mj17MjQuODA3fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMDBBMEZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMDA3fSBzdG9wQ29sb3I9XCIjMDBBMUZGXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMjZ9IHN0b3BDb2xvcj1cIiMwMEJFRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC41MTJ9IHN0b3BDb2xvcj1cIiMwMEQyRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC43Nn0gc3RvcENvbG9yPVwiIzAwREZGRlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDBFM0ZGXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50MV9saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17NTkuOTAzfVxuICAgICAgICAgIHkxPXszNS41NTV9XG4gICAgICAgICAgeDI9ezE3LjA2M31cbiAgICAgICAgICB5Mj17MzUuNTU1fVxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkZFMDAwXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNDA5fSBzdG9wQ29sb3I9XCIjRkZCRDAwXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNzc1fSBzdG9wQ29sb3I9XCJvcmFuZ2VcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI0ZGOUMwMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiZ29vZ2xlLXBsYXktc3RvcmVfc3ZnX19wYWludDJfbGluZWFyXzUxOjU0NlwiXG4gICAgICAgICAgeDE9ezQzLjk1NX1cbiAgICAgICAgICB5MT17MzkuNjM5fVxuICAgICAgICAgIHgyPXsxNS41Nzh9XG4gICAgICAgICAgeTI9ezg3LjIwNX1cbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGM0E0NFwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjQzMxMTYyXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJnb29nbGUtcGxheS1zdG9yZV9zdmdfX3BhaW50M19saW5lYXJfNTE6NTQ2XCJcbiAgICAgICAgICB4MT17MTIuOTE1fVxuICAgICAgICAgIHkxPXswLjMxOH1cbiAgICAgICAgICB4Mj17MjUuNTc2fVxuICAgICAgICAgIHkyPXsyMS41NjJ9XG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMzMkEwNzFcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4wNjl9IHN0b3BDb2xvcj1cIiMyREE3NzFcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC40NzZ9IHN0b3BDb2xvcj1cIiMxNUNGNzRcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44MDF9IHN0b3BDb2xvcj1cIiMwNkU3NzVcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwRjA3NlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImdvb2dsZS1wbGF5LXN0b3JlX3N2Z19fY2xpcDBfNTE6NTQ2XCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDI0MHY3MS4xMDlIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dvb2dsZVBsYXlTdG9yZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0hvbWVwYWdlT3B0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yLjA5IDEuNjQzYy0xLjAyNi4xMy0xLjg4Ny45OTYtMi4wMzQgMi4wNS0uMDc0LjQ3LS4wNjggMS43MjggMCAyLjIyNkEyLjQ3NiAyLjQ3NiAwIDAwMS40MSA3Ljc3N2wuMzc0LjE4MUgyNy4yMTVsLjM3NC0uMTgxYTIuNDc2IDIuNDc2IDAgMDAxLjM1NC0xLjg1OGMuMDY4LS40ODcuMDY4LTEuNjc3LjAwNS0yLjE5MmEyLjQwNSAyLjQwNSAwIDAwLTIuMDktMi4wOWMtLjQ1My0uMDU3LTI0LjMxLS4wNTctMjQuNzY5LjAwNnpNMS44MyAxMS4zNTdjLS40Ni4xMjQtLjc0OC4yOTQtMS4wOTQuNjQ1LS41NzcuNTcyLS43MzYgMS4xMS0uNzM2IDIuNDcgMCAuOTIzLjA3NCAxLjQyMS4yNiAxLjgxOC4xODcuMzk2LjYxOC44NjcuOTcgMS4wNi42NC4zNDUtLjIxNi4zMjIgMTMuMjcuMzIyIDEzLjQ4NiAwIDEyLjYzLjAyMyAxMy4yNy0uMzIzLjM1Mi0uMTkyLjc4Mi0uNjYzLjk3LTEuMDYuMTg2LS4zOTYuMjYtLjg5NC4yNi0xLjgxNyAwLS45MjMtLjA3NC0xLjQyMi0uMjYtMS44MTgtLjE4OC0uMzk3LS42MTgtLjg2Ny0uOTctMS4wNi0uNjQtLjM0NS4yMjItLjMyMi0xMy4yOTgtLjMxNy0xMC40NTYgMC0xMi4zOTMuMDEyLTEyLjY0My4wOHpNMS42OTkgMjEuMDY1Yy0uNDE0LjEzLS43MDguMzIzLTEuMDM3LjY4LS4zNC4zNjItLjUyNy43NjQtLjYwNiAxLjI4LS4wNjguNDkyLS4wNzQgMS43NSAwIDIuMjI2YTIuNDAzIDIuNDAzIDAgMDAyLjAyOCAyLjA1Yy4yNTUuMDQgNC40MTIuMDU3IDEyLjY3LjA0NWwxMi4yOTEtLjAxNy4zMzQtLjEyNGEyLjUwOCAyLjUwOCAwIDAwMS40NS0xLjQ3OWMuMTAyLS4yNjYuMTMtLjQ4MS4xNTMtMS4yMjkuMDUxLTEuNTQ2LS4wOTYtMi4xNzUtLjY2OC0yLjc3NS0uMzQtLjM1Ny0uNjM0LS41NDQtMS4wNjUtLjY3NC0uMjgzLS4wOC0xLjQ3OC0uMDktMTIuNzcyLS4wODUtMTEuNzU5IDAtMTIuNDg0LjAwNS0xMi43NzguMTAyelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnSG9tZXBhZ2VPcHRpb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdMaW5rZG4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIyLjk1OCAzLjYyNWEyLjQxNyAyLjQxNyAwIDAxMi40MTcgMi40MTd2MTYuOTE2YTIuNDE3IDIuNDE3IDAgMDEtMi40MTcgMi40MTdINi4wNDJhMi40MTcgMi40MTcgMCAwMS0yLjQxNy0yLjQxN1Y2LjA0MmEyLjQxNyAyLjQxNyAwIDAxMi40MTctMi40MTdoMTYuOTE2em0tLjYwNCAxOC43M1YxNS45NWEzLjk0IDMuOTQgMCAwMC0zLjkzOS0zLjk0Yy0xLjAyNyAwLTIuMjIzLjYzLTIuODAzIDEuNTcyVjEyLjI0SDEyLjI0djEwLjExNGgzLjM3MnYtNS45NTdjMC0uOTMuNzQ5LTEuNjkyIDEuNjgtMS42OTJhMS42OTEgMS42OTEgMCAwMTEuNjkgMS42OTJ2NS45NTdoMy4zNzJ6TTguMzE0IDEwLjM0MmEyLjAzIDIuMDMgMCAwMDIuMDMtMi4wMyAyLjAzNyAyLjAzNyAwIDAwLTIuMDMtMi4wNDJBMi4wNDIgMi4wNDIgMCAwMDYuMjcgOC4zMTNjMCAxLjEyNC45MTkgMi4wMyAyLjA0MiAyLjAzem0xLjY3OSAxMi4wMTFWMTIuMjRINi42NDZ2MTAuMTE0aDMuMzQ3elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMaW5rZG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNYWlsKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNC4xNjcgNC44MzNINC44MzNBMi40MTMgMi40MTMgMCAwMDIuNDMgNy4yNWwtLjAxMiAxNC41YTIuNDI0IDIuNDI0IDAgMDAyLjQxNiAyLjQxN2gxOS4zMzRhMi40MjQgMi40MjQgMCAwMDIuNDE2LTIuNDE3VjcuMjVhMi40MjQgMi40MjQgMCAwMC0yLjQxNi0yLjQxN3ptMCAxNi45MTdINC44MzNWOS42NjdsOS42NjcgNi4wNDEgOS42NjctNi4wNDFWMjEuNzV6TTE0LjUgMTMuMjkyTDQuODMzIDcuMjVoMTkuMzM0TDE0LjUgMTMuMjkyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNYWlsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWVkaWEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5LjM1IDEwLjA0QTcuNDkgNy40OSAwIDAwMTIgNEM5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0QTUuOTk0IDUuOTk0IDAgMDAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZXRhRGF0YShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMy4wMiAzNy4zMDdsMTIuNTEyIDIwLjc0Yy4wNTYtLjE1LjExOS0uMjkuMTg4LS40MjEgNS4wNDEtOC4zNTggMTAuMDg0LTE2LjcxMyAxNS4xMjgtMjUuMDY1LjE3OS0uMjcyLjI3Ni0uNjYyLjI2NC0xLjA2NC0uMDExLTIuNDE5IDAtNC44MzcgMC03LjMxMy0uMTE3LjA4NC0uMjIyLjE1MS0uMzIzLjIzMy0uODQyLjY4MS0xLjcxMyAxLjI0OC0yLjY1MSAxLjQzLS4yMTkuMDMyLS40MDguMjYyLS40OTMuNTk3LS44MDIgMi4zNzItMi4wNTMgMy41OTItMy42NzYgMy41NS0xLjcwMy0uMDQxLTIuOTYyLTEuNDE1LTMuNy0zLjk3LS44OC0zLjA0Ny0uMTkyLTYuODAyIDEuNTQyLTguNjE3IDEuNzU1LTEuODM1IDQuMDU4LTEuMjMgNS4zODQgMS40MTYuMjQzLjQ5NS40MyAxLjAxOC4yOSAxLjcwMS0uMDgzLjQ2NS0uMzAzLjgyNi0uNTg0Ljk1OC0uMjgyLjEzMi0uNTg0LjAxNi0uODAxLS4zMDYtLjIyLS4zMTQtLjM5Ny0uNzEyLS42MjUtMS4wMS0uNzY4LTEtMS42MTItMS4xOTItMi40OTItLjQ2NS0uOTMuNzcyLTEuMzc1IDIuMDY1LTEuMzA2IDMuNzc5LjA2NiAxLjU5Ny41OTcgMi43MDYgMS40NzQgMy4zMi45MTYuNjQ4IDEuOTgxLjE5OCAyLjYtMS4wOTgtLjc3NC0uMjk3LTEuNDc4LS44MzctMi4wMDUtMS44YTEyLjU5IDEyLjU5IDAgMDEtLjk1My0yLjMyNGMtLjE5NS0uNjI4LjA1My0xLjM5NS40MjEtMS43MDcuMzgxLS4zMjguODUtLjEyOCAxLjA4OS40NjUuMzMyLjg4LjY3NiAxLjcwMiAxLjI2MiAyLjE3NC44ODQuNjk4IDEuNzk3LjYyIDIuNzA3LjI4NCAxLjc1NC0uNjM1IDMuMTg4LTIuMTkzIDQuNDMtNC4yNTUgMS4zNzMtMi4yNzIgMi4zNTktNC45MTMgMi42NjYtOC4xMzguMTktMS45ODUuMDIyLTMuODcxLTEuMDMtNS4xNzUtLjg1NC0xLjA2LTEuODQyLTEuMTEtMi44NTItLjc5Ni0xLjE4NC4zOTctMi4zIDEuMjE5LTMuMjcyIDIuNDA3YTUuMDkgNS4wOSAwIDAxLS40MzguNDc5Yy0uNC40MTQtLjkyNC4yMjctMS4xODYtLjQyMi0uMjYyLS42NDktLjE2NS0xLjUyNC4yMTgtMS45NzhhMTUuMjY1IDE1LjI2NSAwIDAxMS42NzItMS44YzEuNDAzLTEuMjI1IDIuODk1LTEuOTY0IDQuNTEyLTEuNzM0IDIuMzczLjM0NyA0LjA3OSAzLjM0IDQuMTkxIDcuMjkyLjA5NiAzLjM3MS0uNjMzIDYuMjk4LTEuNzQgOS4wMTYtLjY2MSAxLjYtMS40NTUgMy4wMzgtMi4zNTkgNC4yNzEtLjExNS4xOTgtLjE4LjQ2LS4xODIuNzM1LS4wMTEgMy4yMTUtLjAxMSA2LjQzMSAwIDkuNjUuMDE0LjY2LS4xNDUgMS4zLS40MzUgMS43NTUtNS40MTMgOC45NS0xMC44MjIgMTcuOTAzLTE2LjIyOCAyNi44NjEtLjU2LjkzLTEuMDAxLjkzLTEuNTYyIDAtNC40ODItNy40MjMtOC45NjItMTQuODU1LTEzLjQ0LTIyLjI5NS0uNTczLS45NDktLjU3Mi0xLjY3Mi4wMDYtMi42MzIgNS4zOTYtOC45NCAxMC43OTItMTcuODg4IDE2LjE4OS0yNi44NDMuMjctLjQ4Ni42NTQtLjc1NSAxLjA1My0uNzM3IDIuNzQ3LjAyMiA1LjQ5NC4wMjIgOC4yNDIgMCAuNC0uMDIyLjc4Ni4yNDMgMS4wNTkuNzI4IDEuMzI4IDIuMjM3IDIuNjY1IDQuNDUyIDQuMDAyIDYuNjgyLjI5MS40NjEuMzU2IDEuMTkyLjE1NyAxLjc3Mi0uMTk5LjU4LS42MS44NjMtLjk5OS42ODNhMS41NiAxLjU2IDAgMDEtLjQ4NC0uNTQxIDc3Mi4xMDMgNzcyLjEwMyAwIDAxLTMuNjAyLTUuOTQ4Yy0uMTUtLjI3NS0uMzY3LS40MjQtLjU5LS40MDQtMi40NDYgMC00Ljg5IDAtNy4zMzYuMDItLjE5LjAxLS4zNzIuMTI5LS41MTUuMzM4LTUuMDkgOC40MTItMTAuMTc0IDE2LjgzLTE1LjI1NCAyNS4yNTVsLS4xNDQuMjY3elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMS41NzQgMzEuMjY1VjM4LjY4M2MtLjAwNy44MTUtLjM5MiAxLjQ4Mi0uODgxIDEuNTI3LS40OS4wNDYtLjkxNy0uNTQ2LS45NzgtMS4zNTRhNS4yMTIgNS4yMTIgMCAwMS0uMDEyLS40MzJ2LTguNDA4YzAtMS4yNjkuMzU3LTEuODY1IDEuMTEyLTEuODY3aDUuMTMxYy40MiAwIC43NTUuMjQ3LjkzMi45MS4xNjMuNTk2LjEzOSAxLjIyMS0uMTQ5IDEuNjUyLS4yMDcuMzA1LS40NjguNDktLjc0NC41MjktMS4zMTMuMDUyLTIuNjI2LjAyMi0zLjk0LjAyNWgtLjQ3MXpNMTkuMTM2IDQzLjc3OXYtNi45NDJhNC41MjQgNC41MjQgMCAwMS4xMjUtMS4xMzVjLjE4My0uNjM4LjYxLS45NzUgMS4wMjUtLjgwOS40MTcuMTQ2LjcxOC43NTIuNzI1IDEuNDYuMDE3LjkyNy4wMDggMS44NTQuMDA4IDIuNzgxdjUuODc0YzAgMS4zMDgtLjM1MiAxLjkwMS0xLjEzMSAxLjkwNGgtNS4xNGMtLjM4NC4wMzktLjc0My0uMzE2LS45MDUtLjg5NS0uMTU4LS41MS0uMTI0LTEuMTI2LjA4Ny0xLjU4LjIwMS0uNDU5LjUzMi0uNzEuODczLS42NjNoMy44NzNsLjQ2LjAwNXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZXRhRGF0YVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z09wZW5zZWFMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYgMjZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOC44OTUgMTQuNjgxYy0uMDQ1LS4wNDUtLjExMi0uMDQ1LS4xOC0uMDIybC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMCAuMzEuMzEgMCAwMS4wODktLjA2N2MuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1LS4zNTkgMC0uNjI3LjI5MS0uNjI3LjY1IDAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjRhNS4xNiA1LjE2IDAgMDAuNDQ4LS45NDFjLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcuMDQ0LS4wMjIuMDIyLS4wOS0uMDIzLS4xMTJ6bS05Ljk5Ny0uNDkzaDIuNTU1Yy4wNDUgMCAuMDY4LS4wMjMuMDY4LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNjdsLTEuMjU1LS41ODNjLS4wMjMtLjAyMi0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDY3LjAyMi4xMTIuMDY3LjExMnpNMTMgMEM1LjgyOCAwIDAgNS44MjggMCAxM3M1LjgyOCAxMyAxMyAxMyAxMy01LjgyOCAxMy0xM1MyMC4xNzIgMCAxMyAwem0tLjA0NSAyMi40NTljLTUuMTc3IDAtOS4zNjktNC4xOTItOS4zNjktOS4zOTIgMC01LjE3NyA0LjE5Mi05LjM5MSA5LjM3LTkuMzkxIDUuMTc3IDAgOS4zNjggNC4yMTQgOS4zNjggOS4zOTEtLjAyMiA1LjItNC4yMTQgOS4zOTItOS4zNjkgOS4zOTJ6bTUuNzYtNy44bC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMCAuMzEuMzEgMCAwMS4wODktLjA2N2MuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1LS4zNTkgMC0uNjI3LjI5MS0uNjI3LjY1IDAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTYuODU2IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjRhNS4xNiA1LjE2IDAgMDAuNDQ4LS45NDFjLjI0Ny0uNzQuNjk1LTEuNDM1IDEuMzktMS43NzEuMDY3LS4wMjIuMDktLjA5LjA5LS4xNTcgMC0uMDQ1LS4wMjMtLjExMi0uMDY4LS4xMzQgMCAwLS4wNjctLjAyMy0uMTM1IDB6bS05LjgxNy0uNDcxaDIuNTU1Yy4wNDUgMCAuMDY4LS4wMjMuMDY4LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNjdsLTEuMjU1LS41ODNjLS4wMjMtLjAyMi0uMDY4IDAtLjA5LjA0NWwtMS4zIDMuMzRjLS4wMjIuMDY3LjAyMi4xMTIuMDY3LjExMnpcIlxuICAgICAgICBmaWxsPVwiIzMyOTFFOVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMS40NzYgMTEuMjk2bC0xLjI1NS0uNTgyYy0uMDIzLS4wMjMtLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA0NC4wMjIuMDg5LjA2Ny4wODloMi41NTZjLjA0NCAwIC4wNjctLjAyMy4wNjctLjA2N3YtMi43OGMwLS4wMjItLjAyMy0uMDQ0LS4wNDUtLjA0NHptNy40MTkgMy4zODVjLS4wNDUtLjA0NS0uMTEyLS4wNDUtLjE4LS4wMjJsLS4xNTYuMDY3YTUuNTE4IDUuNTE4IDAgMDEtMi40NjYuNTZjLS4wNDUgMC0uMDY3LjAyMy0uMDY3LjA0NWEuODY1Ljg2NSAwIDAxLS44NTIuNjk1aC0xLjc0OHYtMS40NTdoLjAyMmMuMTEyLjAyMi4yMDIuMDIyLjMxNC4wNDUuNzQuMTEyIDEuMDk4LjQ0OCAxLjI1NS42MDVsLjAyMy4wMjJhLjA2OC4wNjggMCAwMC4wOSAwYy4wMjItLjAyMi4wNDQtLjA0NC4wODktLjA2Ny4yNjktLjE4Ljg5Ny0uNTYuODk3LTIuNTc3IDAtMi4wNjMtMS41Ny0zLjQ1Mi0xLjc0OS0zLjU0MmwtLjkxOS0uMDY3aC0uMDIydi0uNTgzYS42Ni42NiAwIDAwLjMxNC0uNTZjMC0uMzU5LS4yNy0uNjUtLjYyOC0uNjVzLS42MjcuMjkxLS42MjcuNjVjMCAuMjI0LjExMi40MjYuMzEzLjUzOHYuNDkzbC0xLjMyMi0uMTM1Yy0uMDY3IDAtLjExMi4wNjgtLjA2Ny4xMTIuMjI0LjM2LjgyOSAxLjQ4Ljg3NCAzLjE2LjA0NSAxLjU3LS4yMDIgMi4zMS0uMzE0IDIuNTc4LS4wMjIuMDIzLS4wMjIuMDQ1IDAgLjA2OC4wMjIuMDIyLjA0NS4wMjIuMDY3LjAyMi4xNTctLjAyMi40MjYtLjA2Ny43NjItLjA5djEuNDU3aC0xLjQ1N2EuODkuODkgMCAwMS0uODc0LS44NzR2LS4zNThjMC0uMDQ1LS4wMjItLjA2OC0uMDY3LS4wNjhINy42ODhjLS4wMjIgMC0uMDY3LjAyMy0uMDY3LjA2OHYuMjAxYzAgMS4wMDkuMjkxIDEuOTI4Ljc4NCAyLjczNS4wOS4xMzQuMjQ3LjIwMS4zODEuMTM0bC4yOTItLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxMy4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRhLjg1NS44NTUgMCAwMC43NCAwbC4zMTMtLjEzNGEuODU2Ljg1NiAwIDAxLjc0IDBsLjMxNC4xMzRjLjIwMS4wOS40MjYtLjAyMi41MzgtLjIyNC4xNzktLjI5MS4zMzYtLjYyNy40NDgtLjk0MS4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3LjA0NC0uMDIyLjAyMi0uMDktLjAyMy0uMTEyelwiXG4gICAgICAgIGZpbGw9XCIjMzI5MUU5XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnT3BlbnNlYUxvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdRckNvZGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA0NyA0N1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjcXItY29kZV9zdmdfX2NsaXAwKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNS44NzUgMjQuNTQyaDQuNjY3djQuNjY2SDUuODc1di00LjY2NnptMTguNjY3LTE0aDQuNjY2djkuMzMzaC00LjY2NnYtOS4zMzN6bS00LjY2NyAxNGg5LjMzM3Y5LjMzM2gtNC42NjZ2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTE0IDBoNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aDQuNjY3djQuNjY2aC00LjY2N3Y0LjY2N2g0LjY2N3Y5LjMzM2gtNC42Njd2NC42NjdoLTQuNjY2di00LjY2N2gtOS4zMzR2NC42NjdoLTQuNjY2di05LjMzM2g5LjMzM3YtNC42NjdoNC42Njd2LTQuNjY3aC00LjY2N3YtNC42NjZ6bTkuMzMzIDE4LjY2NnYtOS4zMzNoLTQuNjY2djkuMzMzaDQuNjY2ek0zMy44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgNS44NzVoMTR2MTRoLTE0di0xNHptNC42NjcgNC42Njd2NC42NjZoNC42NjZ2LTQuNjY2aC00LjY2NnpNNS44NzUgMzMuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6XCJcbiAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwicXItY29kZV9zdmdfX2NsaXAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCAwaDQ3djQ3SDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdRckNvZGVcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdSYXJpYmxlTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAuOCAwSDUuMkE1LjIgNS4yIDAgMDAwIDUuMnYxNS42QTUuMiA1LjIgMCAwMDUuMiAyNmgxNS42YTUuMiA1LjIgMCAwMDUuMi01LjJWNS4yQTUuMiA1LjIgMCAwMDIwLjggMHpcIlxuICAgICAgICBmaWxsPVwiI0ZFREEwM1wiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy45NCAxMi45MDVjLjgyLS4yMTMgMS41NDgtLjgyNiAxLjU0OC0yLjA1NyAwLTIuMDUtMS43NDEtMi41MjgtMy45NzItMi41MjhINi42M3Y5LjIzNGgzLjc0VjE0LjQyaDQuNDM3Yy42ODMgMCAxLjA4My4yNzEgMS4wODMuOTQydjIuMTkyaDMuNzR2LTIuMzA4YzAtMS4yNTgtLjcxLTIuMDUxLTEuNjktMi4zNDF6bS0zLjA2OS0uOTc0SDEwLjM3di0uOTAzaDQuNTAxYy40OSAwIC43ODcuMDY1Ljc4Ny40NTJzLS4yOTcuNDUxLS43ODcuNDUxelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUmFyaWJsZUxvZ29cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdTYXZpbmdzUGlnKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjNcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy4zMTEuMDcxYy0zLjU4MS44MjEtNS45MzcgNy4yMTItNC43NjQgMTIuOTI1LjEyNy41OS4yMjIgMS4xMDcuMjIyIDEuMTc4IDAgLjA3Mi0uMzQ5LjM0LS43NjEuNjI1LS45NzIuNjI1LTIuNjMgMi4wODktMy4yODYgMi44OTJsLS41MDcuNjI1LS41MTctLjM3NWMtLjk3Mi0uNjk2LTIuMzE0LS43ODUtMy4yMDItLjIxNC0uMzguMjUtMS4yMzYgMS4yMzItMS4yMzYgMS40MjggMCAuMDcyLjQyMyAxLjA5Ljk0IDIuMjVsLjkzIDIuMTA2LS40MTIgMS4wODljLS41NDkgMS40MjgtMS4xODMgMy42NzctMS40MjYgNS4wN2wtLjE5IDEuMTA3aC0uNDg2Yy0uNzE4IDAtMS40OC40NDYtMS44OCAxLjEwNy0uNzA4IDEuMTc4LS42OTggMS4wMTctLjczIDcuOTQ0LS4wMiAzLjkxLjAxMSA2LjU1Mi4wNzQgNi45NjIuMTQ4LjkxLjY5OCAyIDEuMjE1IDIuMzkyLjM3LjI4Ni43MDguMzQgMi4yNzIuMzRoMS44NDlsLjk1IDEuNjc4Yy41MjkuOTEgMS4zMzIgMi4xMjQgMS43ODYgMi42OTVsLjgxMyAxLjAxOHYyLjk4MWMwIDIuNzMyLjAyMSAzLjAxNy4yNDMgMy42Ni40MTIgMS4yMzIuNzA4IDEuMzc1IDIuNzM3IDEuMzIxIDEuNTk1LS4wNTMgMS43ODUtLjA5IDIuMDYtLjQyOC40MzMtLjU1NC42NzYtMS4zNTcuNzQtMi41bC4wNjMtMSAuMzI3LjA5YzEuNDA1LjQxIDMuMTkuNTM1IDQuNDkuMzM5Ljc2LS4xMjUgMS40NDgtLjI2OCAxLjUzMi0uMzIxLjEwNi0uMDcyLjE1OC4xNzguMTkgMS4wNy4wNDIgMS4yNS4yMjIgMS44MjIuNzYgMi41LjI2NS4zNC40MzQuMzc1IDIuMTAzLjM3NSAxLjczMyAwIDEuODM4LS4wMTggMi4xNjYtLjQxLjYxMy0uNzUuNjk3LTEuMjMyLjc2LTQuNDQ2bC4wNTMtMi44OTIuNzkzLS45MjhjMS43NTMtMi4wODkgMy41MjgtNS41MTcgNC40NDctOC42MDUgMS4xNzMtMy44OTIgMS42MzgtOC44MDEgMS4yMTUtMTIuNzY0bC0uMTM3LTEuMzAzLjUwNy0uNDI5Yy41Ny0uNSAxLjIyNi0uNzE0IDEuNjI3LS41NTMuNDAyLjE3OC4zMTcuMzc1LS4xOC4zOTItMS4xOTMuMDU0LTEuMjU3IDIuNzE0LS4wNzMgMy4zMDMuMzcuMTk3LjQ1NC4xNzkuNzA3LS4xMjUuMTU5LS4xOTYuMzYtLjYwNy40NDQtLjkyOC4xOS0uNjc4LjItLjY3OC43Ni0uMTk3LjM4MS4zMjIuNDQ0LjM0LjU4Mi4xMDguMjQzLS40MTEuMDc0LS45NDctLjQ0NC0xLjM1Ny0uMjY0LS4yMTQtLjUxNy0uMzc1LS41OC0uMzc1LS4wNTQgMC0uMTA3LS4wOS0uMTA3LS4xOTYgMC0uNS0uMzgtMS40NDctLjY2NS0xLjcxNC0uNDQ0LS4zNzUtMS4zNzQtLjIxNS0yLjE0NS4zNzUtLjMyNy4yNS0uNjEyLjQ2NC0uNjIzLjQ2NC0uMDIxIDAtLjA3NC0uMjY4LS4xMTYtLjU5LS4xNDgtMS4xNDItLjg5OC0zLjc4NC0xLjU2NC01LjQ4LTEuNjctNC4yMy00LjI0Ny03LjY3Ni03LjE0Mi05LjU2OS0uNTQ5LS4zNTctMS4wMTQtLjY2LTEuMDM1LS42NzgtLjAxLS4wMzYuMDc0LS41MTguMTktMS4xMDcgMS4wMzYtNS4wMzQtLjY1NS0xMC43NjUtMy42NjYtMTIuNDc5LS44MzQtLjQ2NC0xLjg0OS0uNjI0LTIuNjczLS40NDZ6bTEuNzk2IDIuNjA3YzEuMzMyLjUgMi40MSAyLjAzNSAzLjAzMyA0LjI4NC4yNjQuOTQ2LjI5NSAxLjI1LjI5NSAyLjkyOCAwIDEuNzUtLjAyIDEuOTQ2LS4zNDggMy4wNy0xLjY0OCA1LjcxMy02LjM4MSA1LjcxMy03Ljk3NyAwLS4zMTctMS4xMDYtLjMzOC0xLjMzOS0uMzM4LTMuMDcgMC0xLjY3OC4wMzItMS45ODIuMjk2LTIuOTI4LjYwMi0yLjE3OCAxLjYyNy0zLjY3NyAyLjkwNS00LjIzLjg4OC0uMzk0IDEuMjI2LS40MTIgMi4xMzQtLjA1NHptLTQuMzUyIDE1LjM3Yy4wMiAwLS4zNDkuMjMyLS44MTQuNDgyLTEuODcgMS4wMTgtMi40OTMgMS44MjEtMi4yMTggMi44NTcuMDYzLjIzMi4yNTMuNTM1LjQwMS42NDIuMjQzLjE2MS40MTIuMTA3IDEuMTgzLS40NjQgMi43NzktMi4wMTcgNi4xNy0yLjIzMSA4Ljk2LS41NzEuNDk2LjMwMyAxLjE0LjczMiAxLjQxNS45ODIuNjIzLjUxNy45ODIuNDgyIDEuMjY4LS4xNDMuNDg2LTEuMTA3LS4yMzMtMi4wODktMi4zMjUtMy4yMzEtLjYwMi0uMzIyLTEuMDc3LS42MjUtMS4wNzctLjY3OS4wMS0uMDUzLjI0My0uNDQ2LjUyOC0uODc0bC41MTgtLjc4NiAxLjA1Ni42NDNjNC4wNDcgMi40MSA3LjI1OCA3Ljk5OCA4LjMwNCAxNC40Ni41MjggMy4yMzEuNDY1IDcuMjMtLjE2OSAxMC40OTctLjg0NSA0LjMzOC0yLjYyIDguMTU5LTUuMDI5IDEwLjg1NGwtMS4xMyAxLjI2OC0uMDEgMy4yNDktLjAxMSAzLjI2Ny0xLjM5NS4wNTMtMS40MDUuMDU0di0yLjMzOWMwLTEuMjY3LS4wMzItMi4zMi0uMDc0LTIuMzItLjA1MyAwLS4zNDkuMTI0LS42NjYuMjY3LS44ODcuNDEtMi44NTIuODAzLTMuOTQuODAzLTEuMTMgMC0yLjczNi0uMzc0LTMuOTItLjg5MmEyOC45MyAyOC45MyAwIDAwLS44NjYtLjM1N2MtLjAyMSAwLS4wNTMgMS4wMTctLjA2MyAyLjI2N2wtLjAzMiAyLjI4NS0xLjQwNS4wNTQtMS40MDUuMDUzLjAyMS0zLjQxLjAxLTMuNDEtLjg1NS0uOTgxYy0xLjAzNi0xLjIxNC0yLjEyNC0yLjg5Mi0yLjg3NC00LjQ0NWwtLjU1LTEuMTZINC4wNjRjLTIuMDE3IDAtMi4xMjMtLjAxOS0yLjM1Ni0uMzkzbC0uMjQzLS4zNzVWNDAuMjJjMC03LjM5MS0uMTM3LTYuODIgMS41OTYtNi45NDVsMS4xODMtLjA5LjI0My0xLjU3Yy40MzMtMi43MzIgMS4xMS00Ljk5OSAyLjMxNC03LjczLjE0Ny0uMzQuMTE2LS40NjQtLjYyNC0yLjE0Mi0uNDU0LTEtLjc1LTEuODQtLjY5Ny0xLjkyOC4xOC0uMzA0IDEuMjc4LjEwNyAyLjA2Ljc2N2wuNzkyLjY2Ljc5My0uOTk5Yy45NzItMS4yMTQgMi40NC0yLjU1MyAzLjY0NS0zLjMybC44OTgtLjU5LjUyOC44NGMuMjg1LjQ2NC41MzkuODU2LjU2Ljg3NHptMjEuMDg3IDE0LjI2NGMuMTI3LjA5LjEzNy4xNzkuMDQyLjUzNi0uMTI3LjQ0Ni0uMTguNS0uNDQ0LjMyMS0uMTY5LS4xMDctLjIzMi0uNjI1LS4wOTUtLjgzOS4wODUtLjE2LjI3NS0uMTYuNDk3LS4wMTh6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOC41NzUgMzAuMDFjLS4xMzguMDUzLS4zOC4zMi0uNTYuNjA2LS4zNi42MjUtLjQzNCAxLjYwNy0uMTcgMi40NjQuMjg2LjkyOCAxLjIwNSAxLjIxNCAxLjc2NS41MzUgMS4wMzUtMS4yNS4yNDMtMy45OTktMS4wMzUtMy42MDZ6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTYXZpbmdzUGlnXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU21hcnRDb250cmFjdMSwY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzggNjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLjAyMyAxLjM2OEMxLjg2NCAyLjA4OC4zMzMgNS4wMjUuMDcgNy4xM2MtLjMzNiAyLjM4Mi41NjEgNC45ODYgMi4wNTYgNi4xNS43MS41NTMgMi4xMy44MyA0LjExLjgzaDIuOTl2Mi40OTNjMCAxLjM4NS4xODcgMi40OTMuMzc0IDIuNDkzLjQ4NSAwIC40ODUtMTEuNjM0IDAtMTMuNTE3LS4xODctLjc3Ni0uNjczLTEuODg0LTEuMTIxLTIuNTQ5TDcuNzMgMS45MjJoMTMuMTE3YzExLjY5NiAwIDEzLjIyOC4xMTEgMTQuMi45NDIgMi4wMTggMS43NzMgMi4yMDUgMy4yMTMgMi4yMDUgMTcuMjg1IDAgOC4xNDQuMTUgMTIuNzk3LjM3MyAxMi43OTcuMjI0IDAgLjM3NC00LjU5OC4zNzQtMTIuNzQyIDAtMTMuODUtLjE1LTE1LjEyNC0yLjA1NS0xNy43MjhsLTEuMDEtMS4zODVMMTkuMzkuOTgxYy04LjU1Ny0uMDU2LTE1LjkxOS4xMS0xNi4zNjcuMzg3em0zLjk2IDEuMzg1YzEuNDk2IDEuMTY0IDIuMjQzIDMuNDkgMi4yNDMgNy4yMDJ2My4wNDdINy41NDRjLTEuNjQ0IDAtMS42NDQgMC0xLjMwOC0xLjQ0LjIyNS0uNzc2LjI2Mi0xLjk5NC4xNS0yLjc3LS4yMjQtMS4zODUtMi4yNDItMy4zOC0yLjY5LTIuNjYtLjE1LjIyMi0uMDM4LjUuMjYuNjY2Ljc4Ni4zODcgMS45MDcgMi4yMTYgMS45MDcgMy4xNTcgMCAuNDQ0LS4zMzcgMS4zMy0uNzg1IDEuOTk1LS45NzIgMS40NC0yLjM5MiAxLjA1Mi0zLjU4Ny0uOTQyQy40OCA5LjQuNDA3IDguMDE2IDEuMTkgNS41NzggMi4yMzkgMi4yNTYgNC43OCAxLjAzNyA2Ljk4NSAyLjc1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNy40NDcgMTEuODk0YzAgLjMzMyAyLjI0Mi41NTQgNS45NDIuNTU0IDMuNTg3IDAgNi4wNTQtLjIyMSA2LjIwMy0uNTU0LjE1LS4zODctMS45NDMtLjU1NC01Ljk0Mi0uNTU0LTMuODg2IDAtNi4yMDMuMjIyLTYuMjAzLjU1NHpNMTIuOTYzIDE2Ljg4YzAgLjMzMyAxLjMwOC41NTQgMy4xNzYuNTU0IDEuODY5IDAgMy4xNzctLjIyMSAzLjE3Ny0uNTU0IDAtLjMzMi0xLjMwOC0uNTU0LTMuMTc3LS41NTQtMS44NjggMC0zLjE3Ni4yMjItMy4xNzYuNTU0ek0yMC44MSAxNi44OGMwIC4zMzMgMS4xMjEuNTU0IDIuNjE2LjU1NHMyLjYxNi0uMjIxIDIuNjE2LS41NTRjMC0uMzMyLTEuMTIxLS41NTQtMi42MTYtLjU1NHMtMi42MTYuMjIyLTIuNjE2LjU1NHpNMzEuMjc0IDE2Ljg4YzAgLjI3Ny42NzIuNTU0IDEuNDk0LjU1NHMxLjQ5NC0uMjc3IDEuNDk0LS41NTRjMC0uMzMyLS42NzItLjU1NC0xLjQ5NC0uNTU0cy0xLjQ5NC4yMjItMS40OTQuNTU0ek05LjUyNSAyMS42NDVjLS4xODcuMjIxLS4zIDcuNDIzLS4zIDE2LjAxIDAgMTQuMzQ5LjAzOCAxNS42NzguNjczIDE2LjUxLjU2MS43NzUgMS44NjkuOTQxIDguMTQ3IDEuMDUybDcuNDM2LjE2Ni4xMTIgNC4yNjZjLjA3NSAyLjM4Mi4yMjUgNC4zMjEuMzM3IDQuMzIxLjE1IDAgLjc0Ny0uNjY1IDEuMzA4LTEuNDk2bDEuMDQ2LTEuNDk2IDEuMDQ2IDEuNDk2Yy41Ni44MzEgMS4xNTkgMS40OTYgMS4zMDggMS40OTYuMTUgMCAuMjYyLTEuOTk0LjI2Mi00LjQzMnYtNC40MzJoMi45NTJjNC4xMSAwIDQuMTQ4LS4wNTUgNC4xNDgtMTAuOTE0IDAtNC45ODYtLjE1LTguNTMxLS4zNzQtOC43NTMtLjIyNC0uMjIxLS4zNzMgMS4yNzQtLjM3MyA0LjF2NC40ODdIMzUuNTdjLS45MzQgMC0xLjY4Mi4yMjItMS42ODIuNTU0IDAgLjI3Ny43NDguNTU0IDEuNjgyLjU1NGgxLjY4MnYzLjU0NmMwIDUuMzE4IDAgNS4zMTgtMy40MDEgNS4zMThIMzAuOXYtMi4xNmMwLTEuNjA3LjIyNC0yLjQzOC43NDctMi45OTIuNjczLS43Mi43ODUtMS4yNzQuNjczLTQuNTk4bC0uMTEyLTMuNzEyLTIuMDU1LTEuNjYyLTIuMDU2LTEuNjYyLTEuODY4IDEuNjYyLTEuODY5IDEuNjA2LS4xMTIgMy43NjhjLS4xMTIgMy4zMjQgMCAzLjg3OC42NzMgNC41OTguNTIzLjU1NC43NDcgMS4zODUuNzQ3IDIuOTkydjIuMTZoLTcuNjIzYy04LjcwNyAwLTguMDcyLjM4OC04LjA3Mi01LjMxOHYtMy41NDZoNi4zNTNjMy45OTggMCA2LjM1My0uMjIxIDYuMzUzLS41NTQgMC0uMzMyLTIuMzU1LS41NTQtNi4zNTMtLjU1NEg5Ljk3M2wtLjA3NS0xMS40MTJjLS4wNzQtNi4yNi0uMjI0LTExLjE5MS0uMzczLTEwLjk3em0yMC40NzggMTguMjgxYzEuNjQ0IDEuNDQgMS42NDQgMS40NCAxLjY0NCA0LjU0M3YzLjE1OGwtMS43MTkgMS4zMy0xLjcxOSAxLjM4NS0xLjY0NC0xLjMzLTEuNjQ0LTEuMzg1VjQ0LjQ3YzAtMy4xMDIgMC0zLjE1NyAxLjYwNy00LjU0My44Ni0uNzc1IDEuNjA3LTEuNDQgMS42ODEtMS40NC4wNzUgMCAuODYuNjY1IDEuNzk0IDEuNDR6bS0uODIyIDExLjAyNWwuOTcxLS45NDJWNjEuOTJsLS45MzQtMS4yNzQtLjkzNC0xLjI3NC0uOTM0IDEuMjc0LS45MzQgMS4yNzR2LTExLjhsLjg5Ni44MzFjLjg2LjgzMSAxLjAxLjgzMSAxLjg2OSAwelwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjkxIDQxLjgxYzAgLjI3Ny4zMzcuNzc2Ljc0NyAxLjEwOC40NDkuMzMzLjc0OCAxLjE2My43NDggMS45NCAwIC43NzUuMTg2IDEuMzg0LjM3MyAxLjM4NC43NDcgMCAuMzc0LTMuMjY4LS40NDgtNC4xLS45NzEtLjk5Ny0xLjQyLTEuMTA4LTEuNDItLjMzMnpNMTQuMDg0IDIxLjg2NmMwIC4yNzcuNjcyLjU1NCAxLjUzMi41NTQuODk2IDAgMS40Mi0uMjIxIDEuMjctLjU1NC0uMTEyLS4zMzItLjgyMi0uNTU0LTEuNTMyLS41NTQtLjcxIDAtMS4yNy4yMjItMS4yNy41NTR6TTE4Ljc1NSAyMS44NjZjLS4xNS4zODggMi41MDQuNTU0IDcuNjIzLjU1NCA1LjAwOCAwIDcuODg1LS4yMjEgNy44ODUtLjU1NCAwLS4zMzItMi44MDMtLjU1NC03LjYyMy0uNTU0LTQuNzA5IDAtNy43MzYuMjIyLTcuODg1LjU1NHpNMTIuNzc2IDI3LjQwNmMuMTUuMzMzIDIuODAzLjU1NCA2LjcyNi41NTQgMy45MjQgMCA2LjU3Ny0uMjIxIDYuNzI3LS41NTQuMTUtLjM4OC0yLjE2OC0uNTU0LTYuNzI3LS41NTRzLTYuODc1LjE2Ni02LjcyNi41NTR6TTI3LjkxIDI3LjQwNmMwIC4zMzMgMS4zMDguNTU0IDMuMTc3LjU1NCAxLjg2OCAwIDMuMTc2LS4yMjEgMy4xNzYtLjU1NCAwLS4zMzItMS4zMDgtLjU1NC0zLjE3Ni0uNTU0LTEuODY5IDAtMy4xNzcuMjIyLTMuMTc3LjU1NHpNMTIuOTYzIDMyLjM5MmMwIC4zMzMgMy4yNS41NTQgOC45NjguNTU0czguOTY5LS4yMjEgOC45NjktLjU1NGMwLS4zMzItMy4yNTEtLjU1NC04Ljk2OS0uNTU0LTUuNzE3IDAtOC45NjguMjIyLTguOTY4LjU1NHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NtYXJ0Q29udHJhY3TEsGNvblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1R3aXR0ZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI3LjE0IDcuMjVjLS45MzEuNDIzLTEuOTM0LjctMi45NzMuODM0YTUuMTk0IDUuMTk0IDAgMDAyLjI3MS0yLjg3NiAxMC40NCAxMC40NCAwIDAxLTMuMjg2IDEuMjY5Yy0uOTU1LTEuMDQtMi4yOTYtMS42NDQtMy44MTktMS42NDQtMi44NCAwLTUuMTYgMi4zMi01LjE2IDUuMTg0IDAgLjQxMS4wNS44MS4xMzQgMS4xODRBMTQuNzM1IDE0LjczNSAwIDAxMy42MjUgNS43ODhhNS4xMjggNS4xMjggMCAwMC0uNyAyLjU5OGMwIDEuOC45MDUgMy4zOTUgMi4zMDcgNC4zMDItLjg1OCAwLTEuNjU1LS4yNDItMi4zNTYtLjYwNXYuMDM3YTUuMTg4IDUuMTg4IDAgMDA0LjE1NyA1LjA4NyA1LjEgNS4xIDAgMDEtMi4zMzMuMDg0IDUuMTcyIDUuMTcyIDAgMDA0LjgzNCAzLjYwMSAxMC4yOTYgMTAuMjk2IDAgMDEtNi40NCAyLjIyNGMtLjQxMSAwLS44MjItLjAyNS0xLjIzMy0uMDczYTE0LjY3NSAxNC42NzUgMCAwMDcuOTUgMi4zMzJjOS41MjIgMCAxNC43NTQtNy45MDIgMTQuNzU0LTE0Ljc1NCAwLS4yMyAwLS40NDctLjAxMi0uNjc2QTEwLjM1OSAxMC4zNTkgMCAwMDI3LjE0IDcuMjV6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdWZWN0b3IocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOCAyOFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzLjk4OCA5LjEzOGgtMS43MTN2LTIuNjFDMjIuMjc1IDIuOTIzIDE4LjQzNyAwIDEzLjcwOCAwIDguOTc3IDAgNS4xNCAyLjkyNCA1LjE0IDYuNTI3djIuNjExSDMuNDI3QzEuNTQyIDkuMTM4IDAgMTAuMzEzIDAgMTEuNzV2MTMuMDU1YzAgMS40MzYgMS41NDIgMi42MTEgMy40MjcgMi42MTFoMjAuNTYxYzEuODg1IDAgMy40MjctMS4xNzUgMy40MjctMi42MTFWMTEuNzQ5YzAtMS40MzYtMS41NDItMi42MS0zLjQyNy0yLjYxem0tMTUuNDItMi42MWMwLTIuMTY4IDIuMjk1LTMuOTE3IDUuMTQtMy45MTcgMi44NDQgMCA1LjE0IDEuNzUgNS4xNCAzLjkxNnYyLjYxMUg4LjU2OHYtMi42MXptMTUuNDIgMTguMjc2SDMuNDI3VjExLjc0OWgyMC41NjF2MTMuMDU1em0tMTAuMjgtMy45MTZjMS44ODQgMCAzLjQyNi0xLjE3NSAzLjQyNi0yLjYxMSAwLTEuNDM2LTEuNTQyLTIuNjExLTMuNDI3LTIuNjExLTEuODg0IDAtMy40MjYgMS4xNzUtMy40MjYgMi42MSAwIDEuNDM3IDEuNTQyIDIuNjEyIDMuNDI2IDIuNjEyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjMuOTg4IDkuMTM4aC0xLjcxM3YtMi42MUMyMi4yNzUgMi45MjMgMTguNDM3IDAgMTMuNzA4IDAgOC45NzcgMCA1LjE0IDIuOTI0IDUuMTQgNi41Mjd2Mi42MTFIMy40MjdDMS41NDIgOS4xMzggMCAxMC4zMTMgMCAxMS43NXYxMy4wNTVjMCAxLjQzNiAxLjU0MiAyLjYxMSAzLjQyNyAyLjYxMWgyMC41NjFjMS44ODUgMCAzLjQyNy0xLjE3NSAzLjQyNy0yLjYxMVYxMS43NDljMC0xLjQzNi0xLjU0Mi0yLjYxLTMuNDI3LTIuNjF6bS0xNS40Mi0yLjYxYzAtMi4xNjggMi4yOTUtMy45MTcgNS4xNC0zLjkxNyAyLjg0NCAwIDUuMTQgMS43NSA1LjE0IDMuOTE2djIuNjExSDguNTY4di0yLjYxem0xNS40MiAxOC4yNzZIMy40MjdWMTEuNzQ5aDIwLjU2MXYxMy4wNTV6bS0xMC4yOC0zLjkxNmMxLjg4NCAwIDMuNDI2LTEuMTc1IDMuNDI2LTIuNjExIDAtMS40MzYtMS41NDItMi42MTEtMy40MjctMi42MTEtMS44ODQgMC0zLjQyNiAxLjE3NS0zLjQyNiAyLjYxIDAgMS40MzcgMS41NDIgMi42MTIgMy40MjYgMi42MTJ6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1ZlY3RvclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1lvdXR1YmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEyLjA4MyAxOC4xMjVsNi4yNzItMy42MjUtNi4yNzItMy42MjV2Ny4yNXptMTMuOTY5LTkuNDYxYy4xNTcuNTY4LjI2NSAxLjMyOS4zMzggMi4yOTYuMDg0Ljk2Ni4xMiAxLjguMTIgMi41MjVsLjA3MyAxLjAxNWMwIDIuNjQ2LS4xOTMgNC41OTItLjUzMSA1LjgzNi0uMzAyIDEuMDg4LTEuMDAzIDEuNzg5LTIuMDkgMi4wOS0uNTY5LjE1OC0xLjYwOC4yNjctMy4yMDMuMzM5LTEuNTcuMDg0LTMuMDA5LjEyLTQuMzM4LjEybC0xLjkyMS4wNzNjLTUuMDYzIDAtOC4yMTctLjE5My05LjQ2MS0uNTMxLTEuMDg4LS4zMDItMS43ODktMS4wMDMtMi4wOS0yLjA5LS4xNTgtLjU2OS0uMjY3LTEuMzMtLjMzOS0yLjI5Ny0uMDg1LS45NjYtLjEyLTEuOC0uMTItMi41MjVMMi40MTYgMTQuNWMwLTIuNjQ2LjE5My00LjU5Mi41MzEtNS44MzYuMzAyLTEuMDg4IDEuMDAzLTEuNzg5IDIuMDktMi4wOS41NjktLjE1OCAxLjYwOC0uMjY3IDMuMjAzLS4zMzkgMS41Ny0uMDg1IDMuMDA4LS4xMiA0LjMzOC0uMTJsMS45MjEtLjA3M2M1LjA2MyAwIDguMjE3LjE5MyA5LjQ2MS41MzEgMS4wODguMzAyIDEuNzg5IDEuMDAzIDIuMDkgMi4wOXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBTdG9yZSB9IGZyb20gJy4vQXBwU3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrU3F1YXJlIH0gZnJvbSAnLi9DaGVja1NxdWFyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZCB9IGZyb20gJy4vRGlzY29yZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd27EsGNvbiB9IGZyb20gJy4vRHJvcERvd27EsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdGhMb2dvIH0gZnJvbSAnLi9FdGhMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmdlcnByaW50IH0gZnJvbSAnLi9GaW5nZXJwcmludCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR29vZ2xlUGxheVN0b3JlIH0gZnJvbSAnLi9Hb29nbGVQbGF5U3RvcmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWVwYWdlT3B0aW9uIH0gZnJvbSAnLi9Ib21lcGFnZU9wdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgxLBuc3RhZ3JhbSB9IGZyb20gJy4vxLBuc3RhZ3JhbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2RuIH0gZnJvbSAnLi9MaW5rZG4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWwgfSBmcm9tICcuL01haWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lZGlhIH0gZnJvbSAnLi9NZWRpYSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YURhdGEgfSBmcm9tICcuL01ldGFEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuc2VhTG9nbyB9IGZyb20gJy4vT3BlbnNlYUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFyQ29kZSB9IGZyb20gJy4vUXJDb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSYXJpYmxlTG9nbyB9IGZyb20gJy4vUmFyaWJsZUxvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhdmluZ3NQaWcgfSBmcm9tICcuL1NhdmluZ3NQaWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNtYXJ0Q29udHJhY3TEsGNvbiB9IGZyb20gJy4vU21hcnRDb250cmFjdMSwY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3IgfSBmcm9tICcuL1ZlY3RvcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWW91dHViZSB9IGZyb20gJy4vWW91dHViZSciLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnxLBuc3RhZ3JhbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOS40MjUgMi40MTdoMTAuMTVhNy4wMTMgNy4wMTMgMCAwMTcuMDA4IDcuMDA4djEwLjE1YTcuMDA4IDcuMDA4IDAgMDEtNy4wMDggNy4wMDhIOS40MjVhNy4wMTMgNy4wMTMgMCAwMS03LjAwOC03LjAwOFY5LjQyNWE3LjAwOCA3LjAwOCAwIDAxNy4wMDgtNy4wMDh6bS0uMjQyIDIuNDE2YTQuMzUgNC4zNSAwIDAwLTQuMzUgNC4zNXYxMC42MzRhNC4zNDcgNC4zNDcgMCAwMDQuMzUgNC4zNWgxMC42MzRhNC4zNSA0LjM1IDAgMDA0LjM1LTQuMzVWOS4xODNhNC4zNDcgNC4zNDcgMCAwMC00LjM1LTQuMzVIOS4xODN6bTExLjY2IDEuODEzYTEuNTEgMS41MSAwIDExMCAzLjAyIDEuNTEgMS41MSAwIDAxMC0zLjAyek0xNC41IDguNDU4YTYuMDQyIDYuMDQyIDAgMTEwIDEyLjA4NCA2LjA0MiA2LjA0MiAwIDAxMC0xMi4wODR6bTAgMi40MTdhMy42MjUgMy42MjUgMCAxMDAgNy4yNSAzLjYyNSAzLjYyNSAwIDAwMC03LjI1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmfEsG5zdGFncmFtXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2svdXNlV2luZG93U2l6ZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgRXhoaWJpdGlvblNpZGUgZnJvbSAnLi4vLi4vcm93L2V4aGliaXRpb25TaWRlJ1xyXG5pbXBvcnQgUXVvdGF0aW9uIGZyb20gXCIuLi8uLi9yb3cvcXVvdGF0aW9uXCJcclxuaW1wb3J0IFJlYXNvblNpZGUgZnJvbSBcIi4uLy4uL3Jvdy9yZWFzb25TaWRlXCJcclxuaW1wb3J0IEJ1c2luZXNzU2lkZSBmcm9tIFwiLi4vLi4vcm93L2J1c2luZXNzU2lkZVwiXHJcbmltcG9ydCBHZXRTdGFydGVkU2lkZSBmcm9tIFwiLi4vLi4vcm93L2dldFN0YXJ0ZWRcIlxyXG5pbXBvcnQgRm9vdGVyU2lkZSBmcm9tIFwiLi4vLi4vZm9vdGVyL2luZGV4XCJcclxuZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIC8qIExheW91dCAqL1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dH0+IFxyXG4gICAgICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaXplLndpZHRoIDwgQ09OU1QuVEFCTEVUX1NJWkUgPyBcclxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uICBmbGF0Lz4gOiA8TmF2aWdhdGlvbiAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEV4aGliaXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4aGliaXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGhpYml0aW9uU2lkZS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBRdXRhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvdGF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPFF1b3RhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIHsvKiBSZWFzb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvblNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFzb25TaWRlLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEJ1c2luZXNzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXNpbmVzc30+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXNpbmVzc1NpZGUgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEdldCBTdGFydGVkICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkfT5cclxuICAgICAgICAgICAgICAgICAgPEdldFN0YXJ0ZWRTaWRlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNpemluZ30gPntKU09OLnN0cmluZ2lmeShzaXplKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBUaGVyZSBoYXZpbmcgbWFpbiBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogRm9vdGVyIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuXHJcbi8qXHJcbjxNYWluU2lkZS8+OiBQYWdlIGhhcyBvbmUgZ3JpZCBuYW1lZCBNYWluU2lkZS4gXHJcbjxOYXZpZ2F0aW9uLz46IEl0IGhhcyBpY29uLCBtYXJrLCBidXR0b25zLGFuZCBsb2NhdGVkIG9uIHRvcCBvZiBwYWdlcy4gXHJcbiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CdXR0b24gKHsgY2hpbGRyZW4sIC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmF2fSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gXCIuLi90ZXh0L2hlYWQtdGl0bGVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge0ZPT1RFUk1FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyTmF2aWdhdGlvbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIEZPT1RFUk1FTlUubWFwKChtZW51KT0+e1xyXG4gICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9IHNpemU9JzE0cHgnPnttZW51LnRpdGxlfTwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgIClcclxuICAgICAgIH0pXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3Rlck5hdmlnYXRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuL2J1dHRvbidcclxuaW1wb3J0IEZyYW1lQnV0dG9uIGZyb20gXCIuLi9mcmFtZS9mcmFtZUJ1dHRvblwiO1xyXG5pbXBvcnQge01FTlV9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge0hvbWVwYWdlT3B0aW9ufSBmcm9tICcuLi9pY29ucydcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe2ZsYXQ9ZmFsc2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogTmF2aWdhdG9yICovXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgey8qIE1hcmsgU2lkZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1hcmspfT5cclxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBocmVmPScvJz5Pd25hYmxlLU5TPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBMaW5rIFNpZGUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZCdG59PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFmbGF0ICYmIG1lbnUudGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIExvZ2luIEJ1dHRvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgPEZyYW1lQnV0dG9uPkxvZ2luPC9GcmFtZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZsYXQgJiYgPEhvbWVwYWdlT3B0aW9uLz59XHJcbiAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUGhvdG8oe3NyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcmVjZWlwdGNvaW4tcmVjZWlwdGNoYWluLWRlNTYwLmFwcHNwb3QuY29tL28vd2Vic2l0ZSUyRmpwaWVyY2UlMkZqLXBpZXJjZS1wcm9tby1ibGFjay0wMS5wbmc/YWx0PW1lZGlhJnRva2VuPTVjZjBjZjBmLTMxZmEtNGVmMi05ZjIxLWVhYTEzNjU5NTY3YlwiLCBhbHQsIHdpZHRoPTQ3MCwgaGVpZ2h0PTI5Mn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OmhlaWdodH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPiAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90byIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXNpbmVzc1NpZGUubW9kdWxlLmNzcydcclxuXHJcblxyXG5mdW5jdGlvbiBCdXNpbmVzc1NpZGUoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICAvKiBCdXNpbmVzcyBTaWRlIENvbnRhaW5lciAqL1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVzaW5lc3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmJ1c2luZXNzVGV4dH0gXHJcbiAgICAgICAgICAgIGJvbGQ+XHJcbiAgICAgICAgICAgICAgICAgey8qIE93bmFibGUgTlMgKi99XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5TcGFufT5Pd25hYmxlLU5TIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICBmb3IgQnVzaW5lc3NcclxuICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2luZXNzU2lkZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9leGhpYml0aW9uU2lkZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3Bob3RvL2luZGV4J1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IE1pbnRCdXR0b24gZnJvbSAnLi4vZnJhbWUvbWludEJ1dHRvbidcclxuXHJcbmZ1bmN0aW9uIEV4aGliaXRpb24oeyBIZWFkZXIsIFRleHQsIE93bmVyLCBzcmM9XCJodHRwczovL293bmVyZnkuY29tL2pwYW5kZnJpZW5kc1wifSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiBUZXh0IFNpZGUgRnJvbSBFeGhpYml0aW9uIHNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0fT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgU2lkZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFkdmVydEhlYWRlcn0gc2l6ZT0nMzNweCcgYm9sZD5DQSRIIENvd3M8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyTGluZX0vPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogVGV4dCBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuc3ViVGV4dH0gIHNpemU9JzIycHgnID5Ob3cgTWludGluZzogQ2hpYy1BLURlZXMsRmlyc3QgTkZUcyB0byBHZW5lcmF0ZSBFR0dTIFRva2VuczwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiBTaWRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW50QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1pbnRCdXR0b259Pk1JTlQgQ0hJQy1BLURFRSBORlQ8L01pbnRCdXR0b24+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUGhvdG9zIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9FeGhpYml0aW9ufT5cclxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBob3RvLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGhvdG8gc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9yZWNlaXB0Y29pbi1yZWNlaXB0Y2hhaW4tZGU1NjAuYXBwc3BvdC5jb20vby93ZWJzaXRlJTJGY2hpY2FkZWVzJTJGY2FzaGNvd3MucG5nP2FsdD1tZWRpYSZ0b2tlbj02MGVmNGFhNy00MmM5LTQ3ZGUtODJhNi1iNzE5OTUzNzQ5YzNcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgey8qIE93bmVyIE9mIFBob3RvcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdWJPd25lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIHNpemU9JzEycHgnIGJvbGQ+VVBDT01JTkcgQ09MTEVDVElPTjo8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgc2l6ZT0nMTJweCc+Si5QaWVyY2UgYW5kIEZyaWVuZHMgLSBIYW5kIFBhaW50ZWQgYW5kIFNpZ25lZDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4aGliaXRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2V0U3RhcnRlZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgR2V0U3RhcnRlZEJ1dHRvbiBmcm9tICcuLi9mcmFtZS9nZXRTdGFydGVkQnV0dG9uJ1xyXG5pbXBvcnQgU3VpdENhc2UgZnJvbSAnLi4vLi4vUGhvdG9zL3N1aXRjYXNlLmpwZydcclxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9waG90b1wiO1xyXG5cclxuZnVuY3Rpb24gR2V0U3RhcnRlZCgpe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyogQ29udGFpbmVyICovIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiBDb250YWluZXIgVGV4dCBTaWRlKi8gfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdldFN0YXJ0ZWRUZXh0U2lkZX0+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZXRTdGFydGVkSGVhZGVyVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBvcGFjaXR5PScwLjgnIHNpemU9JzI2cHgnPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNwYW59Pk5GVCBRUiBjb2RlcyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSwgYWRkIHZhbHVlIGFuZCBwcmV2ZW50IDxici8+IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJmaXR0aW5nIG9mIGdvb2RzLjwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogVGV4dCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZE1haW5UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIHNpemU9JzIwcHgnIG9wYWNpdHk9JzAuOCc+Q3JlYXRlIE5GVHMgZm9yIHlvdXIgYnVzaW5lc3Mgb3IgY3VzdG9tZXIgYXQgc2NhbGU8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZEJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdldFN0YXJ0ZWRCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZ2V0U3RhcnRlZEJ1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLkdldFN0YXJ0ZWRCdXR0b25UZXh0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR2V0U3RhcnRlZEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEltYWdlIFNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2VTaWRlfT5cclxuICAgICAgICAgICAgICAgIDxQaG90byBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gc3JjPVwiaHR0cHM6Ly9vd25lcmZ5LmNvbS9pbWcvaG9tZS9zdWl0Y2FzZS5qcGdcIiB3aWR0aD0nMzQ1cHgnIGhlaWdodD0nMjA3Ljk4NicgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTdGFydGVkOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVvdGF0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gUXVvdGF0aW9uKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvfT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdW9IZWFkZXJUZXh0fSBcclxuICAgICAgICAgICAgICAgIHNpemU9JzI2cHgnIFxyXG4gICAgICAgICAgICAgICAgYm9sZFxyXG4gICAgICAgICAgICAgICAgPlRyYWRlIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNwYW59Pk93bmFibGUtTlMgPC9zcGFuPmNyZWF0ZWQgb24gbWFya2V0cGxhY2UgcGxhdGZvcm1zLlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW9NaWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnF1b01pZGRsZVRleHR9IFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nMTZweCcgXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PScwLjYnIFxyXG4gICAgICAgICAgICAgICAgYm9sZFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFRyYWRlIE93bmFibGUtTlMgY3JlYXRlZCBvbiBtYXJrZXRwbGFjZSBwbGF0Zm9ybXMuXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b0Zvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXVvRm9vdGVyVGV4dH0gXHJcbiAgICAgICAgICAgICAgICBzaXplPScxNnB4JyBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk9JzAuNidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBZb3UsdGhlIGNyZWF0b3IsIG93biB5b3VyIHByaXZhdGUga2V5cywgdGhlcmVmb3JlIG93biB5b3VyIGFzc2V0cyBhbmQgYXJlIGZyZWUgdG8sPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZmVyLCBzZWxsIG9yIHRyYWRlIE5GVHMgYW55d2hlcmUgb24gdGhlIGRpZ2l0YWwgbWFya2V0cGxhY2UuXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1b0ljb25zfT5cclxuICAgICAgICAgICAgICAgIDxJY29uLlJhcmlibGVMb2dvIGNsYXNzTmFtZT17c3R5bGVzLnF1b1JhcmlibGV9Lz5cclxuICAgICAgICAgICAgICAgIDxJY29uLk9wZW5zZWFMb2dvIGNsYXNzTmFtZT17c3R5bGVzLnF1b09wZW5zZWF9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90YXRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmVhc29uU2lkZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vcGhvdG8vaW5kZXgnXHJcbmltcG9ydCBSZWFzb24gZnJvbSAnLi4vZm9ybS9yZWFzb25TaWRlL2luZGV4J1xyXG5pbXBvcnQgUmVhc29uSW1hZ2UgZnJvbSAnLi4vLi4vUGhvdG9zL3JlYXNvblNpZGVQaG90by5wbmcnXHJcblxyXG5mdW5jdGlvbiBSZWFzb25TaWRlKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIC8qIENvbnRhaW5lciAqLyBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVhc29uSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMucmVhc29uSGVhZGVyVGV4dH0gc2l6ZT0nMjBweCcgYm9sZD5SZWFzb25zIHRvIE5GVCBFdmVyeXRoaW5nIHdpdGggPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuU3Bhbn0+T3duYWJsZS1OUzwvc3Bhbj48L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5MaW5lfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJlYXNvbiBTaWRlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pZGRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXNvblRleHRTaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhc29uLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEltYWdlIFNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYXN0SW1hZ2VTaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UGhvdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL293bmVyZnkuY29tL2ltZy9ob21lL3ZhbHVhYmxlcy5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzgzMS45OTdweCdcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ICcxMzguOTkzcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMzknIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0ncmVhc29uc2lkZSdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEZvb3RlciBTaWRlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclRleHR9IHNpemU9JzE4cHgnIG9wYWNpdHk9JzAuNic+TkZUIGlzIHBlcm1hbmVudCBpbW11dGFibGUgcmVjb3JkIG9mIHdobyBvd25zIGFueXRoaW5nIG9mIHZhbHVlPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhc29uU2lkZSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZFRpdGxlKHsgYm9sZD0gZmFsc2UsY2xhc3NOYW1lICxjaGlsZHJlbiwgc2l6ZT0yMCwgb3BhY2l0eT0xfSl7XHJcbiAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgW3N0eWxlcy5UaXRsZSwgXHJcbiAgICAgICAgYm9sZCAmJiBzdHlsZXMuYm9sZCxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICBdKX1cclxuICAgICAgICBzdHlsZT17e2ZvbnRTaXplOnNpemUsIG9wYWNpdHk6IG9wYWNpdHl9fVxyXG4gICAgICAgID57Y2hpbGRyZW59PC9oMT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRpdGxlXHJcblxyXG4vKlxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9sZDogU29tZSB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0LCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gdGV4dCBoYXMgYm9sZCBmb250IHdlaWdodCBwcm9wZXJ0aWVzLCBib2xkIHByb3BlcnRpZXMgd2lsbCBoYXZlIGJlZW4gYWN0aXZhdGVkLlxyXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gVGV4dFRpdGxlKHsgYm9sZD1mYWxzZSwgY2hpbGRyZW59KXtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvcD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFRpdGxlIiwiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBUQUJMRVRfU0laRTogOTQzLFxyXG4gICAgREVTS1RPUF9TSVpFOiAxMjcwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlTkZUT3B0aW9uPVtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdORlQnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUKE5vbiBGdW5naWJsZSBUb2tlbiknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ0ZUJyxcclxuICAgICAgICB0aXRsZTogJ0ZUKEZ1bmdpYmxlIFRva2VuKSdcclxuICAgIH1dXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJVU0lORVNTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdORlRzZm9yeW91ckJ1c2luZXNzJyxcclxuICAgICAgICB0aXRsZTogJ05GVHMgZm9yIHlvdXIgQnVzaW5lc3MnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdDcmVhdGVBQ29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgYSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnQ3VzdG9tZXJBU3VwcG9ydCcsXHJcbiAgICAgICAgdGl0bGU6ICdDdXN0b21lciBBIFN1cHBvcnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdORlRTdGFuZGFyZENvbGxhYm9yYXRpb24nLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUIFN0YW5kYXJkIENvbGxhYm9yYXRpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdTb21ldGhpbmdFbHNlJyxcclxuICAgICAgICB0aXRsZTogJ1NvbWV0aGluZyBFbHNlJ1xyXG4gICAgICBcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IElORk8gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDbGFpbSBPd25lcnNoaXAnLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQcm92ZSBFeGl0ZW5jZScsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1ZlcmlmeSBBdXRoZW50aWNpdHknLFxyXG4gICAgICAgIG1hcms6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQcml2YXRlbHkgQ29ubmVjdCB3aXRoIHRoZSBPd25lcicsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NlY3VyZSBEaWdpdGFsIEFzc2V0cycsXHJcbiAgICAgICAgbWFyazogdHJ1ZVxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGT09URVJNRU5VID0gW1xyXG4gICAgeyAgIFxyXG4gICAgICAgIGtleTogJ3ByaXZhY3lQb2xpY3knLFxyXG4gICAgICAgIHRpdGxlOidQcml2YWN5IFBvbGljeSdcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3RvcycsXHJcbiAgICAgICAgdGl0bGU6ICdUT1MnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbXlDb2xsZWN0aW9uJyxcclxuICAgICAgICB0aXRsZTogJ015IENvbGxlY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2NvbnRhY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCdcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IE1FTlUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnbWFrZS1hbi1uZnQnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFrZSBhbiBORlQnLFxyXG4gICAgICAgIGhyZWY6ICcvbWFrZU5mdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYnVzaW5lc3Mtc2lnbnVwJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ0J1c2luZXNzIFNpZ251cCcsXHJcbiAgICAgICAgaHJlZjogJy9idXNpbmVzc1NpZ25VcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnU3Vic2NyaWJlLWZvci11cGNvbWluZy1kcm9wcycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgdGl0bGU6ICdTdWJzY3JpYmUgZm9yIFVwY29taW5nIERyb3BzJyxcclxuICAgICAgICBocmVmOiAnL3N1YnNjcmliZUZvclVwY29taW5nRHJvcHMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ25mdC1zdGFuZGFyZHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUIFN0YW5kYXJkcycsXHJcbiAgICAgICAgaHJlZjogJy9uZnRTdGFuZGFyZHMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Rvd25sb2FkLW5mdC1jcmVhdG9yJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ0Rvd25sb2FkIE5GVCBDcmVhdG9yJyxcclxuICAgICAgICBocmVmOiAnL2Rvd25sb2FkTkZUQ3JlYXRvcidcclxuICAgIH1cclxuXSIsImltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIEhvb2tcclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAgIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAgIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICAgIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcclxuICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcbiAgICByZXR1cm4gd2luZG93U2l6ZTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSG9tZVBhZ2UvaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQvPiAgICAgICAgXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL1Bob3Rvcy9yZWFzb25TaWRlUGhvdG8uOGQ2ZTkxNDcwZDU1ZGQ0MjBjYzJhOWY5ZWFjOWQ3OTkucG5nXCIsXCJoZWlnaHRcIjoxMzksXCJ3aWR0aFwiOjgzMixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZQaG90b3MlMkZyZWFzb25TaWRlUGhvdG8uOGQ2ZTkxNDcwZDU1ZGQ0MjBjYzJhOWY5ZWFjOWQ3OTkucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9QaG90b3Mvc3VpdGNhc2UuZGRmNjE2MDdkMWFjOGQyNWVmNjU5ZDRjOGExNWI4YjkuanBnXCIsXCJoZWlnaHRcIjo0MTgsXCJ3aWR0aFwiOjY5NCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZQaG90b3MlMkZzdWl0Y2FzZS5kZGY2MTYwN2QxYWM4ZDI1ZWY2NTlkNGM4YTE1YjhiOS5qcGcmdz04JnE9NzBcIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFzZUJ0blwiOiBcInN0eWxlX2Jhc2VCdG5fXzI1eV9yXCIsXG5cdFwiRnJhbWVCb3JkZXJcIjogXCJzdHlsZV9GcmFtZUJvcmRlcl9fMUhwNjNcIixcblx0XCJsaW5rQ29udGFpbmVyXCI6IFwic3R5bGVfbGlua0NvbnRhaW5lcl9fMmFKU2pcIixcblx0XCJsaW5rc1wiOiBcInN0eWxlX2xpbmtzX18ya1FITFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyQ29udGFpbmVyXCI6IFwic3R5bGVfZm9vdGVyQ29udGFpbmVyX19BM3g1MFwiLFxuXHRcImxlZnRTaWRlT2ZDb250YWluZXJcIjogXCJzdHlsZV9sZWZ0U2lkZU9mQ29udGFpbmVyX18zbWRkbFwiLFxuXHRcIkljb25zXCI6IFwic3R5bGVfSWNvbnNfXzF5TV9UXCIsXG5cdFwiY29weVwiOiBcInN0eWxlX2NvcHlfXzFSSEhzXCIsXG5cdFwiY29weVRleHRcIjogXCJzdHlsZV9jb3B5VGV4dF9fMjlSRW9cIixcblx0XCJyaWdodFNpZGVPZkNvbnRhaW5lclwiOiBcInN0eWxlX3JpZ2h0U2lkZU9mQ29udGFpbmVyX18zSG1yWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVhc29uU2lkZUNvbnRhaW5lclwiOiBcInN0eWxlX3JlYXNvblNpZGVDb250YWluZXJfXzFJbm1vXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmcmFtZUJ0blwiOiBcImZyYW1lQnV0dG9uX2ZyYW1lQnRuX19BbVEydVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2V0U3RhcnRlZEJ1dHRvblwiOiBcImdldFN0YXJ0ZWRCdXR0b25fZ2V0U3RhcnRlZEJ1dHRvbl9fMTZsMGhcIixcblx0XCJidG5UZXh0XCI6IFwiZ2V0U3RhcnRlZEJ1dHRvbl9idG5UZXh0X18zQWlpZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWludEJ1dHRvblwiOiBcIm1pbnRCdXR0b25fbWludEJ1dHRvbl9fMklWZFdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcInN0eWxlX2xheW91dF9fMVVYNk9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTmF2XCI6IFwiZm9vdGVyX05hdl9fMXFzSUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTlwiLFxuXHRcIm5hdkJ0blwiOiBcIm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaFwiLFxuXHRcIm5hdkl0ZW1cIjogXCJuYXZpZ2F0aW9uX25hdkl0ZW1fXzIwdWhzXCIsXG5cdFwibWFya1wiOiBcIm5hdmlnYXRpb25fbWFya19fM0dGYU1cIixcblx0XCJsb2dpbkJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWdcIjogXCJwaG90b19pbWdfXzFuWVhEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXNpbmVzc0NvbnRhaW5lclwiOiBcImJ1c2luZXNzU2lkZV9idXNpbmVzc0NvbnRhaW5lcl9fMkt4ZGdcIixcblx0XCJidXNpbmVzc1RleHRcIjogXCJidXNpbmVzc1NpZGVfYnVzaW5lc3NUZXh0X18zY3poRlwiLFxuXHRcIlNwYW5cIjogXCJidXNpbmVzc1NpZGVfU3Bhbl9fMlh5RkVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImV4aGliaXRpb25TaWRlX2NvbnRhaW5lcl9fM1FqS05cIixcblx0XCJhZHZlcnRcIjogXCJleGhpYml0aW9uU2lkZV9hZHZlcnRfX000dHlaXCIsXG5cdFwiYm9yZGVyTGluZVwiOiBcImV4aGliaXRpb25TaWRlX2JvcmRlckxpbmVfXzFXanRBXCIsXG5cdFwic3ViVGV4dFwiOiBcImV4aGliaXRpb25TaWRlX3N1YlRleHRfXzNVTmNsXCIsXG5cdFwibWludEJ1dHRvblwiOiBcImV4aGliaXRpb25TaWRlX21pbnRCdXR0b25fXzE3dHJNXCIsXG5cdFwicGhvdG9FeGhpYml0aW9uXCI6IFwiZXhoaWJpdGlvblNpZGVfcGhvdG9FeGhpYml0aW9uX18xWnEwN1wiLFxuXHRcInBob3Rvc1wiOiBcImV4aGliaXRpb25TaWRlX3Bob3Rvc19fMko1d3hcIixcblx0XCJzdWJPd25lclwiOiBcImV4aGliaXRpb25TaWRlX3N1Yk93bmVyX18yYXNQclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2V0U3RhcnRlZENvbnRhaW5lclwiOiBcImdldFN0YXJ0ZWRfZ2V0U3RhcnRlZENvbnRhaW5lcl9fM3ZPbWxcIixcblx0XCJnZXRTdGFydGVkVGV4dFNpZGVcIjogXCJnZXRTdGFydGVkX2dldFN0YXJ0ZWRUZXh0U2lkZV9fMW1BcG9cIixcblx0XCJnZXRTdGFydGVkSGVhZGVyVGV4dFwiOiBcImdldFN0YXJ0ZWRfZ2V0U3RhcnRlZEhlYWRlclRleHRfX2ktMnpaXCIsXG5cdFwiU3BhblwiOiBcImdldFN0YXJ0ZWRfU3Bhbl9fM3hpZVBcIixcblx0XCJJbWFnZVNpZGVcIjogXCJnZXRTdGFydGVkX0ltYWdlU2lkZV9fMVlZdEdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInF1b1wiOiBcInF1b3RhdGlvbl9xdW9fX0YtUTBxXCIsXG5cdFwicXVvTWlkZGxlVGV4dFwiOiBcInF1b3RhdGlvbl9xdW9NaWRkbGVUZXh0X18zZzU5ZlwiLFxuXHRcInF1b0Zvb3RlclRleHRcIjogXCJxdW90YXRpb25fcXVvRm9vdGVyVGV4dF9fMU4zc2ZcIixcblx0XCJxdW9PcGVuc2VhXCI6IFwicXVvdGF0aW9uX3F1b09wZW5zZWFfX1hwZ2FJXCIsXG5cdFwiU3BhblwiOiBcInF1b3RhdGlvbl9TcGFuX18yakhqTFwiLFxuXHRcInF1b1JhcmlibGVcIjogXCJxdW90YXRpb25fcXVvUmFyaWJsZV9fM3NxZTBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlYXNvbkNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfcmVhc29uQ29udGFpbmVyX18xb3J0Y1wiLFxuXHRcInJlYXNvbkhlYWRlclwiOiBcInJlYXNvblNpZGVfcmVhc29uSGVhZGVyX18yclFOclwiLFxuXHRcIlNwYW5cIjogXCJyZWFzb25TaWRlX1NwYW5fXzFScE90XCIsXG5cdFwiTGluZVwiOiBcInJlYXNvblNpZGVfTGluZV9fMzJ2UXVcIixcblx0XCJtaWRkbGVDb250YWluZXJcIjogXCJyZWFzb25TaWRlX21pZGRsZUNvbnRhaW5lcl9fM2pjNjVcIixcblx0XCJyZWFzb25UZXh0U2lkZVwiOiBcInJlYXNvblNpZGVfcmVhc29uVGV4dFNpZGVfXzFOZFpUXCIsXG5cdFwicmVhc3RJbWFnZVNpZGVcIjogXCJyZWFzb25TaWRlX3JlYXN0SW1hZ2VTaWRlX19tcnprWFwiLFxuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcInJlYXNvblNpZGVfZm9vdGVyQ29udGFpbmVyX18zX0IzQlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGl0bGVcIjogXCJoZWFkLXRpdGxlX1RpdGxlX18zbXdYZ1wiLFxuXHRcImJvbGRcIjogXCJoZWFkLXRpdGxlX2JvbGRfXzEyc0d5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcInRleHQtdGl0bGVfVGl0bGVfXzZLYjloXCIsXG5cdFwiYm9sZFwiOiBcInRleHQtdGl0bGVfYm9sZF9fcFMyOHVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkxpbmsiLCJjbiIsImxpbmtCdXR0b24iLCJjaGlsZHJlbiIsImhyZWYiLCJwcm9wcyIsImxpbmtDb250YWluZXIiLCJsaW5rcyIsImZyYW1lQnV0dG9uIiwiYm9yZGVyIiwiY2xhc3NOYW1lIiwiYmFzZUJ0biIsIkZyYW1lQm9yZGVyIiwiYnV0dG9uIiwiQ29tcCIsIkljb24iLCJIZWFkVGl0bGUiLCJGb290ZXJTaWRlIiwiRm9vdGVyIiwiZm9vdGVyQ29udGFpbmVyIiwibGVmdFNpZGVPZkNvbnRhaW5lciIsIkljb25zIiwiam9pbiIsImpvaW5UZXh0IiwiY29weSIsImNvcHlUZXh0IiwicmlnaHRTaWRlT2ZDb250YWluZXIiLCJmb290ZXIiLCJJTkZPIiwiUmVhc29uU2lkZUZvcm0iLCJtYXAiLCJpbmZvIiwicmVhc29uU2lkZUNvbnRhaW5lciIsInRpdGxlIiwiQnV0dG9uIiwiVGV4dFRpdGxlIiwiRnJhbWVCdXR0b24iLCJmcmFtZUJ0biIsIkdldFN0YXJ0ZWRCdXR0b24iLCJnZXRTdGFydGVkQnV0dG9uIiwiYnRuVGV4dCIsIk1pbnRCdXR0b24iLCJtaW50QnV0dG9uIiwiU3ZnQXBwU3RvcmUiLCJTdmdDaGVja1NxdWFyZSIsIlN2Z0Rpc2NvcmQiLCJTdmdEcm9wRG93biIsIlN2Z0Ryb3BEb3duxLBjb24iLCJTdmdFdGhMb2dvIiwiU3ZnRmFjZWJvb2siLCJTdmdGaW5nZXJwcmludCIsIlN2Z0dvb2dsZVBsYXlTdG9yZSIsIlN2Z0hvbWVwYWdlT3B0aW9uIiwiU3ZnTGlua2RuIiwiU3ZnTWFpbCIsIlN2Z01lZGlhIiwiU3ZnTWV0YURhdGEiLCJTdmdPcGVuc2VhTG9nbyIsIlN2Z1FyQ29kZSIsIlN2Z1JhcmlibGVMb2dvIiwiU3ZnU2F2aW5nc1BpZyIsIlN2Z1NtYXJ0Q29udHJhY3TEsGNvbiIsIlN2Z1R3aXR0ZXIiLCJTdmdWZWN0b3IiLCJTdmdZb3V0dWJlIiwiZGVmYXVsdCIsIkFwcFN0b3JlIiwiQ2hlY2tTcXVhcmUiLCJEaXNjb3JkIiwiRHJvcERvd27EsGNvbiIsIkRyb3BEb3duIiwiRXRoTG9nbyIsIkZhY2Vib29rIiwiRmluZ2VycHJpbnQiLCJHb29nbGVQbGF5U3RvcmUiLCJIb21lcGFnZU9wdGlvbiIsIsSwbnN0YWdyYW0iLCJMaW5rZG4iLCJNYWlsIiwiTWVkaWEiLCJNZXRhRGF0YSIsIk9wZW5zZWFMb2dvIiwiUXJDb2RlIiwiUmFyaWJsZUxvZ28iLCJTYXZpbmdzUGlnIiwiU21hcnRDb250cmFjdMSwY29uIiwiVHdpdHRlciIsIlZlY3RvciIsIllvdXR1YmUiLCJTdmfEsG5zdGFncmFtIiwidXNlV2luZG93U2l6ZSIsIkNPTlNUIiwiTmF2aWdhdGlvbiIsIkV4aGliaXRpb25TaWRlIiwiUXVvdGF0aW9uIiwiUmVhc29uU2lkZSIsIkJ1c2luZXNzU2lkZSIsIkdldFN0YXJ0ZWRTaWRlIiwiTGF5b3V0Iiwic2l6ZSIsImxheW91dCIsIm5hdmlnYXRpb24iLCJ3aWR0aCIsIlRBQkxFVF9TSVpFIiwiZXhoaWJpdGlvbiIsInF1b3RhdGlvbiIsInJlYXNvblNpZGUiLCJidXNpbmVzcyIsImdldFN0YXJ0ZWQiLCJzaXppbmciLCJKU09OIiwic3RyaW5naWZ5IiwiTmF2aWdhdGlvbkJ1dHRvbiIsIm5hdiIsIkZPT1RFUk1FTlUiLCJGb290ZXJOYXZpZ2F0aW9uIiwibWVudSIsIk5hdiIsIk1FTlUiLCJmbGF0IiwibmF2aWdhdG9yIiwibWFyayIsIm5hdkJ0biIsInN1YkJ0biIsImtleSIsImxvZ2luQnV0dG9uIiwiUGhvdG8iLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJwaG90byIsImltZyIsImJ1c2luZXNzQ29udGFpbmVyIiwiYnVzaW5lc3NUZXh0IiwiU3BhbiIsIkV4aGliaXRpb24iLCJIZWFkZXIiLCJUZXh0IiwiT3duZXIiLCJjb250YWluZXIiLCJhZHZlcnQiLCJhZHZlcnRIZWFkZXIiLCJib3JkZXJMaW5lIiwic3ViVGV4dCIsInBob3RvRXhoaWJpdGlvbiIsInBob3RvcyIsIm93bmVyIiwic3ViT3duZXIiLCJTdWl0Q2FzZSIsIkdldFN0YXJ0ZWQiLCJnZXRTdGFydGVkQ29udGFpbmVyIiwiZ2V0U3RhcnRlZFRleHRTaWRlIiwiZ2V0U3RhcnRlZEhlYWRlclRleHQiLCJnZXRTdGFydGVkTWFpblRleHQiLCJnZXRTdGFydGVkQnV0dG9uQ29udGFpbmVyIiwiR2V0U3RhcnRlZEJ1dHRvblRleHQiLCJJbWFnZVNpZGUiLCJJbWFnZSIsInF1byIsInF1b0hlYWRlciIsInF1b0hlYWRlclRleHQiLCJxdW9NaWRkbGUiLCJxdW9NaWRkbGVUZXh0IiwicXVvRm9vdGVyIiwicXVvRm9vdGVyVGV4dCIsInF1b0ljb25zIiwicXVvUmFyaWJsZSIsInF1b09wZW5zZWEiLCJSZWFzb24iLCJSZWFzb25JbWFnZSIsInJlYXNvbkNvbnRhaW5lciIsInJlYXNvbkhlYWRlciIsInJlYXNvbkhlYWRlclRleHQiLCJMaW5lIiwibWlkZGxlQ29udGFpbmVyIiwicmVhc29uVGV4dFNpZGUiLCJyZWFzdEltYWdlU2lkZSIsImZvb3RlclRleHQiLCJib2xkIiwib3BhY2l0eSIsIlRpdGxlIiwiZm9udFNpemUiLCJERVNLVE9QX1NJWkUiLCJtYWtlTkZUT3B0aW9uIiwiQlVTSU5FU1MiLCJpY29uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVuZGVmaW5lZCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiZmluYWxseSIsImFzc2lnbiIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=