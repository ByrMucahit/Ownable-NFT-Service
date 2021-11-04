(() => {
var exports = {};
exports.id = "pages/nftStandards";
exports.ids = ["pages/nftStandards"];
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
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ "./components/button/base/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["border", "children", "className"],
      _excluded2 = ["children", "className"],
      _excluded3 = ["border", "children", "className"];
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\button\\base\\index.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function frameButton(_ref) {
  let {
    border = false,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

function linkButton(_ref2) {
  let {
    children,
    className
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().links),
      children: [" ", children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Comp, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([(_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().baseBtn), border && (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().FrameBorder), className]),
    type: "button",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (button);
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
/* harmony export */   "CheckSquare": () => (/* reexport safe */ _CheckSquare__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Discord": () => (/* reexport safe */ _Discord__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "DropDownİcon": () => (/* reexport safe */ _DropDown_con__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "DropDown": () => (/* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "EthLogo": () => (/* reexport safe */ _EthLogo__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Facebook": () => (/* reexport safe */ _Facebook__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Fingerprint": () => (/* reexport safe */ _Fingerprint__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "HomepageOption": () => (/* reexport safe */ _HomepageOption__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "İnstagram": () => (/* reexport safe */ _nstagram__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "Linkdn": () => (/* reexport safe */ _Linkdn__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "Mail": () => (/* reexport safe */ _Mail__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Media": () => (/* reexport safe */ _Media__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "MetaData": () => (/* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "OpenseaLogo": () => (/* reexport safe */ _OpenseaLogo__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "QrCode": () => (/* reexport safe */ _QrCode__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "RaribleLogo": () => (/* reexport safe */ _RaribleLogo__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "SavingsPig": () => (/* reexport safe */ _SavingsPig__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "SmartContractİcon": () => (/* reexport safe */ _SmartContract_con__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "Twitter": () => (/* reexport safe */ _Twitter__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "Vector": () => (/* reexport safe */ _Vector__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "Youtube": () => (/* reexport safe */ _Youtube__WEBPACK_IMPORTED_MODULE_20__.default)
/* harmony export */ });
/* harmony import */ var _CheckSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckSquare */ "./components/icons/CheckSquare.js");
/* harmony import */ var _Discord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discord */ "./components/icons/Discord.js");
/* harmony import */ var _DropDown_con__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDownİcon */ "./components/icons/DropDownİcon.js");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDown */ "./components/icons/DropDown.js");
/* harmony import */ var _EthLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EthLogo */ "./components/icons/EthLogo.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Facebook */ "./components/icons/Facebook.js");
/* harmony import */ var _Fingerprint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fingerprint */ "./components/icons/Fingerprint.js");
/* harmony import */ var _HomepageOption__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomepageOption */ "./components/icons/HomepageOption.js");
/* harmony import */ var _nstagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./İnstagram */ "./components/icons/İnstagram.js");
/* harmony import */ var _Linkdn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Linkdn */ "./components/icons/Linkdn.js");
/* harmony import */ var _Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Mail */ "./components/icons/Mail.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Media */ "./components/icons/Media.js");
/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MetaData */ "./components/icons/MetaData.js");
/* harmony import */ var _OpenseaLogo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenseaLogo */ "./components/icons/OpenseaLogo.js");
/* harmony import */ var _QrCode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./QrCode */ "./components/icons/QrCode.js");
/* harmony import */ var _RaribleLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RaribleLogo */ "./components/icons/RaribleLogo.js");
/* harmony import */ var _SavingsPig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SavingsPig */ "./components/icons/SavingsPig.js");
/* harmony import */ var _SmartContract_con__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SmartContractİcon */ "./components/icons/SmartContractİcon.js");
/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Twitter */ "./components/icons/Twitter.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Vector */ "./components/icons/Vector.js");
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Youtube */ "./components/icons/Youtube.js");






















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

/***/ "./components/layout/nftStandards/index.js":
/*!*************************************************!*\
  !*** ./components/layout/nftStandards/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ "./components/layout/nftStandards/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/navigation */ "./components/navigation/navigation.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/index */ "./components/footer/index.js");
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _text_text_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../text/text-title */ "./components/text/text-title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\layout\\nftStandards\\index.js";








function NftStandards() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigator),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().textContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainHeader),
        bold: true,
        children: "NFT Community Standards "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: "While blockchain records such as NFTs are nearly impossible to forge, there are many properties of NFTs that easily make them confusing and open for misinterpretation. Without standards, the industry is open to abuse of the technology which can lead to confusion and mistrust. In order for the technology to establish its usefulness and value, standards have been created by Ownerfy to protect both the creators and consumers of NFTs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "To collaborate on NFT standards, industry leaders are invited to join with Ownerfy to help build the NFT Standards Community."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Ownerfy has identified six common NFT problems, best practices, and questions you should ask before minting an NFT."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 1. No Publicly Available Proof of Data Integrity"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem in terms of usefulness and value?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 36
        }, this), "Creators might release an NFT and then the platform changes the metadata url or stops serving their content. This would devalue the NFT."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 36
        }, this), "should also check to see that a platform saves metadata such as a digital signature of the data or uses IPFS or both, on the blockchain."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 36
        }, this), "should check to see that a platform saves metadata such as a digital signature of the data (hash) or uses IPFS or both, on the blockchain."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Many NFTs are purchased and there is no proof of the data integrity. Most NFTs today have been created according to the ERC-721 and ERC-1155 standards. While outlining the bare minimum functionality of non- fungible blockchain tokens, these standards omit essential data necessary to create a link between the tokens themselves and the digital art, music, or other property. Without this essential data it is impossible to know, without external information, whether one token represents for example a painting, and another represents a written document."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "For the vast majority of NFTs today the external data that defines what the token is supposed to represent is saved on the blockchain only as a centralized web link, such as www.mytokensite.com/token-meta-data/10. Several problems can occur with this method. The website can go offline. The site owner could stop paying their bill or the website could return an error. Another problem is a malicious token site could change the token- related data returned from the URL from day to day. Since the data is not on the blockchain there is no guarantee the information that defines the NFT remains the same over time. Any NFTs created this inferior way would be impossible to rely upon for provenance, legal evidence, or financial purposes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Hash Data is on the Blockchain To Validate Data Consistency How can you make sure?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "The easiest way to ensure that lined data does not change over time is to make use of the IPFS. IPFS links are guaranteed to return the same content regardless of where they are served from, with the exception of directory links, which may have modified content. If an IPFS link is used for the metadata then it can be assured to not change over time. However, this does not account for the integrity of the image. An image link is embedded in the metadata returned by the metadata link. If the image link is a non-IPFS link then the image can still be changed over. In order to guarantee the image also does not change, it\u2019s link must also be IPFS, or the digital signature of the image (hash) must also be stored on the blockchain. If both the metadata is stored as an IPFS link and the image is saved in the blockchain both may be evaluated independently, which has greater integrity than using one method alone."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Problems with IPFS. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 36
        }, this), "An IPFS link will stay live and active as long as a server somewhere in the world maintains that data. This requires a commitment by a central entity of pinning service such as Pinata.cloud. If this data were to stop being served the data would no longer be availabe on IPFS. Anyone can choose pick up and serve the data, but if no party is available to serve the data it may be lost forever. This is why the absolute safest place to store data, such as an image hash is on the blockchain itself."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 2. Creators Do Not Use Addresses Consistently"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 40
        }, this), "If creators don\u2019t use the same address their customers will be confused and counterfeiters will be able to more easily forge NFTs in their name."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 40
        }, this), "Consumers can\u2019t be sure they are receiving work from the same creators."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 40
        }, this), "should try to use the same Ethereum or other platform address on multiple platforms."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 40
        }, this), "should check that a platform has verified a creator or should check against a 3rd party list of known creator addresses. The list currently doesn\u2019t exist."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "For each NFT there is one source address that, according to the specification, is considered to be the creator of the NFT. Up until now there has been a disparate effort to link creator Ethereum addresses to the creators they are intended to belong to. Because of this flaw one creator can release NFTs under several Ethereum addresses and it is up to the community to divine whether NFTs both in fact belong to the same creator. There is no reliable source of information to describe which addresses belong to which creators."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "To further compound this problem sometimes we have publishers who release several artists from the same address. In this situation there is no link to the original creator and it\u2019s up to the community to keep track, \u201Cas common knowledge\u201D, which publisher addresses their content creators tend to use. This also opens the door for another kind of hack, which is the \u2018sleep mint\u2019. A sleep mint is a minting that appears to come from an artist but was actually minted by another party."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Best Practice: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 40
        }, this), "Creators Use The Same Addresses to Create NFTs"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Platforms should maintain lists of creators and if possible cross check those lists between each other. This will make it easier to identify creators falsely claiming ownership. Creators should release content consistently using as few publicly known blockchain addresses as possible and also try to avoid publishers that do not mint their work on to a sole dedicated address. If multiple platforms are used it\u2019s best to try and use the same address across each platform."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 3. False Provenance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 44
        }, this), "can be easily copied."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 44
        }, this), "could buy NFTs from a creator claiming to be someone else, making the NFT worth less or nothing."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Creators should try to be added to a list of verified creators either on a platform or by a 3rd party service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Consumers should check that an NFT was created by an official address or creator that is verified by a platform."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "To date there is nothing preventing anyone from uploading any piece of art or source material to the internet and creating an NFT that links to it. As such it is up to the community to evaluate source material as best as it can and identify when content does not appear to belong to the creator of the NFT. False content can lead many to believe that an NFT is theirs to sell or even to confuse the marketplace enough, resulting in inability to identify the original source."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Best Practice: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 44
        }, this), "Platform Creators Monitoring the Creators to Screen Out Bad Actors"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "It\u2019s very difficult to evaluate if a given creator has the rights to publish the content they use for NFTs. It\u2019s up to platforms to help the community by indicating known publishers and publishers that may have falsely identified themselves in the past"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 4. Rug Pulls"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 44
        }, this), "might think that features of their NFT are always stable."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 44
        }, this), "might buy an NFT believing they have full rights and it will not change."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 44
        }, this), "should check the smart contract or have it reviewed by an expert to see if the URLs can be changed, the contract can be paused or other 'administrative' features exist that they are not aware of."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Purchasers : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 44
        }, this), "should check a review of the smart contract."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Certain functionality can be built into smart contracts that can freeze transfers, transfer without owner consent or change the content of the NFT. Sometimes these functions are necessary during an early sale phase to enure there are no problems. Sometimes they are necessary for specific project functionality and made known. Sometimes the intention is to release control. Sometimes the controls are nefarious and in these instances smart contract code is probably not visible on etherscan."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Best Practice: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 44
        }, this), "Smart contract source code should be published and if administrative rights are granted they should be renounced at some point unless it is publicly part of the plan to always be under 3rd party control."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "NFT creators should always publish source code and that code should grant ultimate power to the owners of the NFTs. Functions like pausing, setBaseUri, and built in transfer approvals create back doors and control over nft properties. If these functions are necessary it should be explained or there should be a plan to renounce these administrative powers when they are no longer necessary."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 5. Poor Source Material - Generations Removed from the Original"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 44
        }, this), "might create an NFT but it is not the quality level the customers need."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 44
        }, this), "might buy an NFT but the quality is not suitable for their needs."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 44
        }, this), "- If the NFT is digital media then it should be the highest quality version of that media. If the NFT represents something physical then the metadata and description should be the best possible image and description."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Purchasers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 44
        }, this), "should review the quality of the NFT."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Depending on what an NFT is intended to represent, the source material may affect its value. If an NFT is intended to represent art then the image included should be as close to the original work as is possible. If an NFT is intended to represent a physical painting then the included image should be of high enough quality to effectively identify that unique painting. If an NFT is intended to represent original music then a version of the music that most closely represents the piece should be linked to. Ultimately an NFT represents the media linked to by the NFT more so than anything else. A customer can buy an NFT believing it represents an original work of art, but if the image is a derivative work and better source material exists then an NFT based on the better source material will always be more representative of the source material. While the community accepts the most accurate source material as the most authentic NFT, there are no accepted standards, leading to confusion from NFT creators and consumers."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Best Practice: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 44
        }, this), "NFT creators should use source material that best and most accurately represents the media or subject they are attempting to embody. If it is an original digital work then the intended work released by the artist should be used as the source material. If it is a physical object then a high-resolution photograph from an encompassing angle should be used. If it is a piece of music then best quality recording or original source file should be used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 6. Lack of Existence of the Token (Lazy Minting)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 44
        }, this), "might think they have created an NFT but the platform is misleading and it is not on the blockchain. The provenance can also be lost if it is on a shared smart contract."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 44
        }, this), "might buy an NFT and believe that the NFT already exists."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 44
        }, this), "should check the minting policy of the platform and if they expect it to be on the blockchain they should see an etherscan transaction for it."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 44
        }, this), "- After a Consumer buys an NFT they should be able to see an etherscan transaction for it."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "It\u2019s becoming increasingly common to not identify whether or not an NFT exists on the blockchain. For some NFT creators this matter is irrelevant because it only becomes important if the NFT needs to be transferred to a buyer. This becomes a problem when creators believe they are documenting the existence of certain content on the blockchain, but in fact are not. It is not always made clear by platform providers whether these tokens have been minted to the blockchain or not. These tokens can go by various names such as \u2018lazy minted\u2019 or \u2018magic minted\u2019 tokens. Creators and customers may not always understand they are not dealing with a blockchain product. A token that is not yet on the blockchain does not have the added authenticity and ultimate security the blockchain provides. Also, sometimes the mint is first sent to the buyer and if this happens on a shared smart contract the provenance is lost."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Best Practice: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 44
        }, this), "It should be made very clear by platform providers when an NFT is created, whether that is at the time of sale or some other time. This will avoid confusion from content creators and allow them to better define the utility of their NFT collection."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().problems),
        bold: true,
        children: "Problem 7. Published Source Code and Upgradeable Smart Contracts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "Why is this a problem?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 44
        }, this), "Might think their NFT smart contract will never change and always function the same way. If a contract is upgradeable almost everything about the NFT contract may change, including who has permission to transfer the token. If there is no source code it's impossible to know if there are secret functions or if the contract is upgradebale."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 44
        }, this), "may expect their NFTs to behave the same way indefinitely. If a contract is upgraded the basic functionality of the contract including the ability to transfer may change."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().asks),
        bold: true,
        children: "What should you do to check to see if this is covered?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Creators "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 44
        }, this), "should check if the source code is published and key words like \"UpgradeabilityProxy\" and \"Proxy\" are missing from the source code. Visit the contract's page on etherscan and check the \"contract\" tab and then \"code\" tab. There should be visible source code and not random strings."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Consumers "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 44
        }, this), "should check if the source code is published and key words like \"UpgradeabilityProxy\" and \"Proxy\" are missing from the source code. Visit the contract's page on etherscan and check the \"contract\" tab and then \"code\" tab. There should be visible source code and not random strings."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Without visible source code it's impossible to tell if an NFT conforms to the NFT standards or if there are any hidden elements which may affect the way it functions. An upgradeable smart contract makes a smart contract even more vulnerable to malicious activity. A central body governs whether the code of the contract will change. This central body may change core features of the NFT or even break the NFT contract entirely."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Best Practice: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 44
        }, this), "Platforms should avoid using upgradeable smart contracts for NFTs or decentral assets that consumers believe are unchanging and safe from any third party or governing body. All source code for NFT smart contracts should be published on to etherscan using etherscan verification tools for full transparency using"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "In order for NFTs to maintain value there must be standards enforced by the community. We are composing these standards with the intention of creating a collaboration as a community to build NFT standards we can all follow to increase the value and usefulness of NFTs. If you\u2019d like to join us please contact us here with the option to help build our NFT Standards community."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 33
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_footer_index__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftStandards);

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
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\navigation\\button.js";





function NavigationButton({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button_base_index__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),
    children: children
  }, void 0, false, {
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
  title: 'Make an NFT'
}, {
  key: 'business-signup',
  icon: '',
  title: 'Business Signup'
}, {
  key: 'Subscribe-for-upcoming-drops',
  icon: '',
  title: 'Subscribe for Upcoming Drops'
}, {
  key: 'nft-standards',
  icon: '',
  title: 'NFT Standards'
}, {
  key: 'download-nft-creator',
  icon: '',
  title: 'Download NFT Creator'
}];

function Navigation({
  flat = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
    className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navigator),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().mark)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_head_title__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Ownable-NS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navBtn),
      children: MENU.map(menu => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().subBtn),
          children: !flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_text_text_title__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: [" ", menu.title, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 30
          }, this)
        }, menu.key, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().loginButton),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_frame_frameButton__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), flat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_6__.HomepageOption, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
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

/***/ "./pages/nftStandards.js":
/*!*******************************!*\
  !*** ./pages/nftStandards.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_nftStandards_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/nftStandards/index */ "./components/layout/nftStandards/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\pages\\nftStandards.js";




function NftStandards() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout_nftStandards_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftStandards);

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
	"linkContainer": "style_linkContainer__2aJSj"
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

/***/ "./components/layout/nftStandards/style.module.css":
/*!*********************************************************!*\
  !*** ./components/layout/nftStandards/style.module.css ***!
  \*********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__ha6qp",
	"textContainer": "style_textContainer__3tSQ7",
	"mainHeader": "style_mainHeader__2X9sv",
	"problems": "style_problems__2nVaS",
	"asks": "style_asks__PJpRt"
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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/nftStandards.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ1ZBO0FBQ0E7OztBQUVBLFNBQVMrQyxZQUFULEdBQXVCO0FBQ25CLHNCQUVJLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQUlIOztBQUdELGlFQUFlQSxZQUFmOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lQnV0dG9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0NoZWNrU3F1YXJlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0Rpc2NvcmQuanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvaWNvbnMvRHJvcERvd27EsGNvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9FdGhMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0ZhY2Vib29rLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0ZpbmdlcnByaW50LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0hvbWVwYWdlT3B0aW9uLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL0xpbmtkbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9NYWlsLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01lZGlhLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL01ldGFEYXRhLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL09wZW5zZWFMb2dvLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1FyQ29kZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9SYXJpYmxlTG9nby5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9TYXZpbmdzUGlnLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1NtYXJ0Q29udHJhY3TEsGNvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Ud2l0dGVyLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9pY29ucy9Zb3V0dWJlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2ljb25zL8SwbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbGF5b3V0L25mdFN0YW5kYXJkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvdGV4dC9oZWFkLXRpdGxlLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5qcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vcGFnZXMvbmZ0U3RhbmRhcmRzLmpzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL2J1dHRvbi9iYXNlL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZm9vdGVyL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvZnJhbWUvZnJhbWVCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9sYXlvdXQvbmZ0U3RhbmRhcmRzL3N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9idXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9Pd25hYmxlLU5GVC1TZXJ2aWNlLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvaGVhZC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvLi9jb21wb25lbnRzL3RleHQvdGV4dC10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL093bmFibGUtTkZULVNlcnZpY2UvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vT3duYWJsZS1ORlQtU2VydmljZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcblxyXG5mdW5jdGlvbiBmcmFtZUJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuYmFzZUJ0biAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXIgJiYgc3R5bGVzLkZyYW1lQm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIF0pfSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbGlua0J1dHRvbiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lICwuLi5wcm9wc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiB7Y2hpbGRyZW59IDwvYT5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbiAoe2JvcmRlcj1mYWxzZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSAsLi4ucHJvcHN9KSB7XHJcbiAgICBjb25zdCBDb21wID0gYm9yZGVyID8gZnJhbWVCdXR0b24gOiBsaW5rQnV0dG9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29tcCAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzLmJhc2VCdG4gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyICYmIHN0eWxlcy5GcmFtZUJvcmRlcixcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICBdKX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn0gXHJcbiAgICAgICAgICAgIDwvQ29tcD5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblxyXG5cclxuLypcclxuICAgIERvY3VtZW50OlxyXG4gICAgLS0tLS0tLS1cclxuICAgIGNuIHN0YW5kIGZvciBjbGFzc25hbWVzOiAnQ2xhc3NuYW1lcycgIGlzIHByZXZlbnQgY2xhc3Mgb3ZlcndyaXRlLiBJdCBjb21lcyBtb3JlIHRoYW4gb25lIGNsYXNzIGludG8gZnVuY3Rpb24sIGl0J3MgcmVhc29uIGFib3V0IGNvbmZsaWN0LiBcclxuICAgIGJvcmRlcjogU29tZSBidXR0b24gaGFzIGJvcmRlciwgYnV0IHNvbWUgaXQgaGFzbid0LiBXaGVuIGJ1dHRvbiBoYXMgYm9yZGVyLCBib3JkZXIgYXR0cmlidXRlIHdpbCBoYXZlIGJlZW4gIGFjdGl2YXRlZC4gXHJcbiAgICBjaGlsZHJlbjogQ29udGVudCwgd2hpY2ggaW5jbHVkZSB3aXRoaW4gZWxlbWVudC5cclxuICAgIC4uLnByb3BzOiBXaGF0IGlmIEFueSBwcm9wZXJ0aWVzIGlzIHBhc3NlZCBpbnRvIGZ1bmN0aW9uLCBGdW5jdGlvbiBjYW4gY2F0Y2guXHJcbiovXHJcblxyXG4vKiBcclxuLy8gVE8gRE8gTGlzdFxyXG5bXSAgZnJhbWUgYnV0dG9uIC8gVHJhbnNwYXJlbnQgLSBjb2xvclxyXG5cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0ICogYXMgSWNvbiBmcm9tICcuLi9pY29ucydcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tICcuLi90ZXh0L2hlYWQtdGl0bGUnXHJcbmltcG9ydCBGb290ZXJTaWRlIGZyb20gJy4uL25hdmlnYXRpb24vZm9vdGVyJ1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgLyogQ29udGFpbmVyICovXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7LyogTGVmdCBTaWRlIE9mIEZvb3RlciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2lkZU9mQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHsvKiBJY29ucyBPZiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkljb25zfT5cclxuICAgICAgICAgICAgICAgIDxJY29uLlR3aXR0ZXIvPlxyXG4gICAgICAgICAgICAgICAgPEljb24uRmFjZWJvb2svPlxyXG4gICAgICAgICAgICAgICAgPEljb24uWW91dHViZSAvPlxyXG4gICAgICAgICAgICAgICAgPEljb24uxLBuc3RhZ3JhbS8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbi5MaW5rZG4gLz5cclxuICAgICAgICAgICAgICAgIDxJY29uLk1haWwvPlxyXG4gICAgICAgICAgICAgICAgPEljb24uRGlzY29yZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBUZXh0IGZyb20gbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmpvaW5UZXh0fSBzaXplPScxMnB4Jz5Kb2luIHRoZSBjb21tdW5pdHkgb2YgI293bmFibGUtTlM8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIENvcHkgZnJvbSBsZWZ0IHNpZGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuY29weVRleHR9IHNpemU9JzEycHgnPkNvcHlyaWdodCDCqSAyMDIxIE93bmFibGUtTlM8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRvciBmcm9tIHJpZ2h0IHNpZGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTaWRlT2ZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlclNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mcmFtZUJ1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYmFzZS9pbmRleCdcclxuaW1wb3J0IFRleHRUaXRsZSBmcm9tIFwiLi4vdGV4dC90ZXh0LXRpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBGcmFtZUJ1dHRvbiAoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mcmFtZUJ0bn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPntjaGlsZHJlbn08L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhbWVCdXR0b25cclxuXHJcbi8qIFxyXG4gICAgRG9jdW1lbnQ6XHJcbiAgICAtLS0tLS0tLVxyXG4gICAgPFRleHRUaXRsZS8+OiBJdCdzIHZhcnkgb2YgdGV4dCwgSXQganVzdCBoYXMgc29tZSBzcGVjaWZpYyBhdHRyaWJ1dGUgc3VjaCBhcyAxNiBweCBmb250IHNpemUsIGFuZCBib2xkIGZvbnQgd2lnaHQuXHJcbiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0NoZWNrU3F1YXJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNi4wNzEgMEgxLjkzQTEuOTI5IDEuOTI5IDAgMDAwIDEuOTI5VjE2LjA3QzAgMTcuMTM3Ljg2MyAxOCAxLjkyOSAxOEgxNi4wN0ExLjkyOSAxLjkyOSAwIDAwMTggMTYuMDcxVjEuOTNBMS45MjkgMS45MjkgMCAwMDE2LjA3MSAwem0wIDE2LjA3MUgxLjkzVjEuOTNIMTYuMDdWMTYuMDd6bS0xLjQ0LTkuNzEybC02LjkzNSA2Ljg3OWEuNDgyLjQ4MiAwIDAxLS42ODItLjAwM0wzLjM2NyA5LjU1OGEuNDgyLjQ4MiAwIDAxLjAwMy0uNjgybC45MTItLjkwNWEuNDgyLjQ4MiAwIDAxLjY4Mi4wMDNsMi40MDMgMi40MjIgNS42NzktNS42MzRhLjQ4Mi40ODIgMCAwMS42ODIuMDAzbC45MDUuOTEyYS40ODIuNDgyIDAgMDEtLjAwMi42ODJ6XCJcbiAgICAgICAgZmlsbD1cIiNGQ0M3MjlcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDaGVja1NxdWFyZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Rpc2NvcmQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI1LjYwMyAwSDMuMzk3QzEuNTI1IDAgMCAxLjMzNCAwIDIuOTg3djE5LjYwNGMwIDEuNjUzIDEuNTI1IDIuOTg3IDMuMzk3IDIuOTg3SDIyLjE5bC0uODc4LTIuNjgzIDIuMTIxIDEuNzI2IDIuMDA1IDEuNjI0TDI5IDI5VjIuOTg3QzI5IDEuMzM0IDI3LjQ3NSAwIDI1LjYwMyAwem0tNi4zOTcgMTguOTM3cy0uNTk2LS42MjMtMS4wOTMtMS4xNzVjMi4xNy0uNTM2IDIuOTk5LTEuNzI1IDIuOTk5LTEuNzI1LS42OC4zOTItMS4zMjYuNjY3LTEuOTA2Ljg1NS0uODI4LjMwNS0xLjYyNC41MDgtMi40MDMuNjI0YTEzLjI0IDEzLjI0IDAgMDEtNC4yOTItLjAxNCAxNS40NSAxNS40NSAwIDAxLTIuNDM2LS42MjRjLS4zOC0uMTMtLjc5NS0uMjktMS4yMS0uNDkzLS4wNDktLjAyOS0uMDk5LS4wNDQtLjE0OC0uMDczYS4yMjguMjI4IDAgMDEtLjA2Ny0uMDQzYy0uMjk4LS4xNDUtLjQ2NC0uMjQ2LS40NjQtLjI0NnMuNzk2IDEuMTYgMi45IDEuNzFjLS40OTcuNTUyLTEuMTEgMS4yMDQtMS4xMSAxLjIwNC0zLjY2Mi0uMTAyLTUuMDU0LTIuMjA0LTUuMDU0LTIuMjA0IDAtNC42NjkgMi4zODYtOC40NTQgMi4zODYtOC40NTQgMi4zODYtMS41NjYgNC42NTctMS41MjIgNC42NTctMS41MjJsLjE2NS4xNzRjLTIuOTgzLjc1NC00LjM1OCAxLjktNC4zNTggMS45cy4zNjUtLjE3NS45NzgtLjQyMWMxLjc3My0uNjgxIDMuMTgxLS44NyAzLjc2MS0uOTEzLjEtLjAxNS4xODMtLjAzLjI4Mi0uMDNhMTYuMDExIDE2LjAxMSAwIDAxMy4zNDgtLjAyOGMxLjU3NC4xNTkgMy4yNjQuNTY1IDQuOTg4IDEuMzkyIDAgMC0xLjMxLTEuMDg4LTQuMTI3LTEuODQybC4yMzItLjIzMnMyLjI3LS4wNDMgNC42NTcgMS41MjNjMCAwIDIuMzg2IDMuNzg0IDIuMzg2IDguNDUzIDAgMC0xLjQwOCAyLjEwMi01LjA3IDIuMjA0em0tNy43MDUtNi43NzJjLS45NDUgMC0xLjY5LjcyNi0xLjY5IDEuNjEgMCAuODg0Ljc2MiAxLjYxIDEuNjkgMS42MS45NDQgMCAxLjY5LS43MjYgMS42OS0xLjYxLjAxNi0uODg1LS43NDYtMS42MS0xLjY5LTEuNjF6bTYuMDQ4IDBjLS45NDQgMC0xLjY5LjcyNi0xLjY5IDEuNjEgMCAuODg0Ljc2MiAxLjYxIDEuNjkgMS42MS45NDUgMCAxLjY5LS43MjYgMS42OS0xLjYxIDAtLjg4NS0uNzQ1LTEuNjEtMS42OS0xLjYxelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdEaXNjb3JkXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRHJvcERvd24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQuNTE2IDcuNTQ4Yy40MzYtLjQ0NiAxLjA0My0uNDgxIDEuNTc2IDBMMTAgMTEuMjk1bDMuOTA4LTMuNzQ3Yy41MzMtLjQ4MSAxLjE0MS0uNDQ2IDEuNTc0IDAgLjQzNi40NDUuNDA4IDEuMTk3IDAgMS42MTUtLjQwNi40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDJhMS4wOTUgMS4wOTUgMCAwMS0xLjU3NiAwUzQuOTI0IDkuNTggNC41MTYgOS4xNjNjLS40MDgtLjQxOC0uNDM2LTEuMTcgMC0xLjYxNXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Ryb3BEb3duXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnRHJvcERvd27EsGNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01SDd6XCIgZmlsbD1cIiMwMDBcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Ryb3BEb3duxLBjb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdFdGhMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDIgNzFcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC42fVxuICAgICAgICBkPVwiTTIwLjk5NiAyNy4yOTNMMiAzNi4wOWwxOC45OTYgMTEuNDI3IDE4Ljk5LTExLjQyNy0xOC45OS04Ljc5NnpcIlxuICAgICAgICBmaWxsPVwiIzAxMDEwMVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC40NX1cbiAgICAgICAgZD1cIk0xLjU3IDM1LjgzNGwtLjI1My40MjguNDI1LjI1NkwyMC43NCA0Ny45NDRsLjc1OC40NTZWMi4xNzRsLS45MyAxLjU3MUwxLjU3IDM1LjgzNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC44fVxuICAgICAgICBkPVwiTTIxLjQyNiAzLjc0NWwtLjkzLTEuNTcyVjQ4LjRsLjc1OC0uNDU2IDE4Ljk4OS0xMS40MjYuNDI1LS4yNTYtLjI1My0uNDI4TDIxLjQyNiAzLjc0NXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgb3BhY2l0eT17MC40NX1cbiAgICAgICAgZD1cIk0yMC40OTcgNTEuNDYyVjY1LjQxTDMuNzUgNDEuMzg5bDE2Ljc0NyAxMC4wNzN6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIG9wYWNpdHk9ezAuOH1cbiAgICAgICAgZD1cIk0yMC43MzggNTAuNzUxbC0uMjQyLjE0NlY2OC41OWwuOTEtMS4zMDRMNDAuNDEgNDAuMDM5bC0uNjY4LS43MTRMMjAuNzM4IDUwLjc1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRXRoTG9nb1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0ZhY2Vib29rKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk02LjA0MiAzLjYyNWgxNi45MTZhMi40MTcgMi40MTcgMCAwMTIuNDE3IDIuNDE3djE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3IDIuNDE3SDYuMDQyYTIuNDE3IDIuNDE3IDAgMDEtMi40MTctMi40MTdWNi4wNDJhMi40MTcgMi40MTcgMCAwMTIuNDE3LTIuNDE3ek0yMS43NSA2LjA0MmgtMy4wMmE0LjIzIDQuMjMgMCAwMC00LjIzIDQuMjI5djMuMDJoLTIuNDE3djMuNjI2SDE0LjV2OC40NThoMy42MjV2LTguNDU4aDMuNjI1di0zLjYyNWgtMy42MjV2LTIuNDE3YTEuMjA4IDEuMjA4IDAgMDExLjIwOC0xLjIwOGgyLjQxN1Y2LjA0MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRmFjZWJvb2tcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdGaW5nZXJwcmludChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNmaW5nZXJwcmludF9zdmdfX2NsaXAwKVwiIGZpbGw9XCIjMDAwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuMzczLjE2NGMtLjYxOS4xNjQtLjkyOC45Ni0uNTk4IDEuNTY0LjIwNi4zNTYuNzg0LjQzOSAzLjQ0NC41MiAyLjU1Ny4wODMgMy40NjQuMjIgNC41MTYuNjg3IDEuNDQzLjYzMSAyLjA4Mi40NjYgMi4wODItLjQ5NCAwLS44MjMtLjgwNC0xLjM0NC0yLjkyOC0xLjkyLTEuNzczLS40OTUtNS4yMTctLjY4Ny02LjUxNi0uMzU3ek0xMS41NjggMi4wMDJDOC42MiAzLjcwMyA1LjA5MyA3LjMyNSA1LjIzOCA4LjUwNWMuMDQuMzMuMjA2Ljc0LjM5MS44NzguMjY5LjIyLjY2LS4wODIgMS44NTYtMS40MjcgMS42Ny0xLjg2NiAzLjE3Ni0zLjEyOCA0LjkyOS00LjExNi42MTgtLjM1NiAxLjI1OC0uNzY4IDEuNDAyLS45MDUuMzcxLS40MTIuMzEtMS4yNjItLjE0NC0xLjU5Mi0uNTE2LS4zNTYtLjI4OS0uNDExLTIuMTA0LjY1OXpNMjcuNjExIDMuMjkyYy0uNzQyLjU0OC0uNDEyIDEuNDU0Ljk3IDIuNjYxIDEuNTQ2IDEuMzQ1IDMuMjc4IDMuNTY3IDQuNDU0IDUuNjguODY2IDEuNTY0IDEuMzgxIDEuODY2IDEuODc2IDEuMDcuMjI3LS4zNTcuMjA2LS41NzYtLjEwMy0xLjM0NC0xLjM4Mi0zLjQwMy02LjE4Ni04LjgwOC03LjE5Ny04LjA2N3pNMTUuNTA3IDQuOTFjLTMuMTE0IDEuMTI2LTUuOTggMy40MDMtNy44NzcgNi4zMTEtMi4xMDQgMy4xODMtMy4yMzggNi45MTUtMy43NTMgMTIuMjFDMi43NDMgMzUuMzk1IDMuNjcgNDcuMzU4IDYuNjQgNTguOGMxLjE1NSA0LjQ3MiAxLjM0IDQuODg0IDIuMDIgNC43NzQuMzMtLjA1NS41NzgtLjI3NC42Mi0uNTc2LjA0LS4yNzUtLjMxLTEuODM5LS43NjQtMy40NTctMi40NzQtOC43OC0zLjcxMS0xOS4xNTItMy40NjQtMjguNzAxLjMxLTEwLjU2NCAxLjMtMTQuODcyIDQuNDc1LTE5LjA3IDIuNjQtMy41MTIgNS43OTQtNS4yNCA5LjU4OS01LjI0IDMuODE0IDAgNi45OSAxLjcyOCA5LjYwOSA1LjIxMyAxLjc1MyAyLjM2IDIuNTc4IDQuMTQzIDMuNDAyIDcuMjk4LjY0IDIuNTI1LjcyMiA1LjA0OS40MTMgMTIuNDg1LS4yNjggNi4zNjYuMzkyIDExLjQ0MiAyLjI0OCAxNy4zNDEuNzgzIDIuNDQyIDEuMjU3IDMuMDczIDEuODU1IDIuNDE1LjQzNC0uNDY3LjM5Mi0xLjIwOC0uMTg1LTIuNjktLjc0Mi0xLjk3NS0xLjczMi02LjMzOC0yLjEwMy05LjMyOC0uMjY5LTIuMTY4LS4zMS0zLjU2OC0uMTY1LTcuNjAxLjI0Ny03LjA4LjE4NS05Ljg3OC0uMjA3LTExLjkwOC0xLjM4MS02LjkxNS01LjA5My0xMi4xODMtMTAuMTI1LTE0LjQ2LTIuMjg4LTEuMDE2LTYuMDYyLTEuMjA4LTguMzUxLS4zODR6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xNi4xODcgOS4xMzZjLTIuNDEyLjc5Ni01LjczMiAzLjY3Ny01LjU4OCA0LjkxMi4wNDEuMzAxLjIwNi42ODUuMzkyLjgyMy4yNjguMjIuNjQtLjAyOCAxLjc1My0xLjEyNSAyLjIwNi0yLjE5NSA0Ljg4Ny0zLjI2NiA3LjM0LTIuOTA5IDEuMDMyLjE2NSAxLjE3Ni4xMSAxLjM4Mi0uMzg0LjI5LS43MTMuMjktLjc2OC0uMTAzLTEuMjYyLS4zOTItLjU0OS0zLjU0Ni0uNTc2LTUuMTc2LS4wNTV6TTIzLjI4MSAxMC4zMTZjLS4wODIuMDgyLS4xNDQuNDY2LS4xNDQuNzk2IDAgLjQ2Ni4yODguODUgMS4xNTQgMS41MDkgMi4yOSAxLjcyOCA0LjUxNyA1LjY1MiA0Ljk1IDguNjQzLjE4NSAxLjI2Mi44MDQgMS43MjggMS4zNi45ODguMzkyLS40OTQuMzkyLS42MDQuMDgzLTEuOTQ4LS4zOTItMS43ODQtMS4xOTYtMy44OTctMi4wODMtNS41NDMtMS41MjYtMi43MTYtNC42Ni01LjM1LTUuMzItNC40NDV6TTMuMTc2IDExLjQxM2MtLjg4NyAxLjY3NC0xLjk2IDQuOTk0LTIuNDM0IDcuNDM2LS42MTggMy4yMzgtLjYzOSA0LjMzNS0uMDgyIDQuNzIuNTM2LjM4NCAxLjIzNy0uNTIyIDEuMjM3LTEuNjIgMC0xLjQyNiAxLjAzMS01LjYyNCAxLjk4LTcuOTI5Ljc0Mi0xLjgzOC44NjYtMi4zNi43LTIuNzk5LS4zMDgtLjc2OC0uOTI3LS42ODYtMS40MDEuMTkyek0xNi4xMDUgMTMuNzczYy0xLjY5LjkzMy0yLjUzNiAxLjcyOS0zLjQ4NSAzLjEyOC0xLjc3MyAyLjY4OS0yLjM3MSA1LjktMi42MTkgMTMuOTM5LS4zMyAxMS42NjEgMS43MzIgMjMuODk5IDUuNzc0IDM0LjI5OC45MDcgMi4zMDUgMS4xNTUgMi43NDQgMS41NjcgMi43NDQgMS4wMSAwIDEuMDEtLjc0MS0uMDItMy4zNDgtMi40NTQtNi4xNzMtNC4zNTEtMTMuOTM5LTUuMjE3LTIxLjM0Ny0uNzIyLTYuMDM2LS41OTgtMTYuOTg0LjI0Ny0yMS4yNjUuNTU3LTIuOTA4IDIuMTI0LTUuMTg2IDQuMjI3LTYuMiAxLjM0LS42NiAzLjczMy0uNTc3IDUuMTk3LjE2NCAyLjIyNyAxLjEyNSA0LjA4MyA0LjA4OCA0LjM5MiA3LjAyNC4wNjIuNzEzIDAgMy40MDItLjE0NCA2LjAxLS4yMDcgMy43NTgtLjIyNyA1LjQ4Ny0uMDIgOC4yODUuNTE1IDcuNjU2IDIuMTIzIDE0LjQ2IDQuODg2IDIwLjcxNy45MjggMi4xMTIgMS4yNzkgMi41MjQgMS44MzUgMi4yNS42NC0uMzMuNTE2LTEuMTUzLS41MzYtMy41NjctMy43MTEtOC41MDYtNS4yMTctMTgtNC41MTYtMjguMjYyLjMzLTQuNjM3LjE2NS02LjM5My0uODI0LTkuMDgyLS43NjQtMi4wMy0yLjM5My00LjExNi00LjA4My01LjE4Ni0xLjAxLS42NTktMS40ODUtLjc2OC0zLjM0MS0uODUtMS44OTctLjA4My0yLjMxLS4wMjgtMy4zMi41NDh6TTM1LjIgMTUuMjI3Yy0uMTg2LjI0Ny0uMjY4LjY1OS0uMjA2LjkwNi43MjIgMi40NyAxLjE3NSA1LjQzMyAxLjI3OCA4LjM5Ni4xMjQgMy4yMzguMjY4IDMuOTc5LjgwNSAzLjk3OS41OTggMCAuOTA3LS44NTEuOTA3LTIuNTUyLS4wMi01LjEwNC0xLjI1OC0xMS4xNjgtMi4yNDgtMTEuMTY4LS4xMDMgMC0uMzUuMTkyLS41MzYuNDR6TTguOTkgMTYuMzhjLTEuMDUxLjkwNS0yLjA0IDYuNjk1LTIuMTg1IDEyLjc4Ni0uMDYyIDEuNzg0IDAgMi4xOTUuMzEgMi40Ny4yNDcuMjE5LjQ1My4yMTkuNyAwIC4yODktLjI0Ny40MTMtMS4wMTYuNjE5LTMuODQyLjMzLTQuNzc0LjYxOS02LjgwNSAxLjIxNy04Ljc4LjU5OC0yLjAwMy41OTgtMi4xOTUuMTAzLTIuNTgtLjQ3NS0uMzI5LS40NzUtLjMyOS0uNzYzLS4wNTR6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xOC45OTIgMTcuODM0Yy0uNTU3Ljc0LS4yMDYgMS41MS43ODQgMS43NTYgMS4xOTUuMjc0IDIuMjI3IDEuMzE3IDIuNzQyIDIuNzQ0LjQzMyAxLjE4LjQ1NCAxLjUzNi4zMyA0LjE5OC0uMTI0IDMuMDE4LS4wMiAzLjYyMi43MjIgMy42MjIuNTc3IDAgLjc4My0uODIzLjkyOC0zLjc2LjE0NC0zLjAxNy4wMi0zLjkyMy0uOTI4LTUuOTI2LS42OC0xLjM3Mi0xLjkxOC0yLjQ5Ny0zLjI3OS0yLjkwOC0uNzg0LS4yMi0uOTQ5LS4xOTItMS4zLjI3NHpNMTUuODE2IDE4LjkwNGMtLjgyNS43MTMtMS42OSAyLjUyNC0xLjkzOCA0LjExNi0uMzEgMS45NDgtLjY4IDcuMzI2LS41OTggOC45MTcuMDYyIDEuMTguMTI0IDEuMzcyLjUzNiAxLjQ1NS44NDUuMTY0IDEuMDcyLS4zODUgMS4wNzItMi42NjIgMC0xLjE1Mi4xNDUtMy40My4zMS01LjA0OS4zMDktMy4wNzMuNy00LjM5IDEuNTI2LTUuMDc2LjUzNi0uNDExLjU1Ni0xLjU5MS4wNjEtMS45NDgtLjI4OC0uMTkyLS41MzYtLjEzNy0uOTY5LjI0N3pcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE4LjI5IDIxLjg5NWMtMS4yMzYuNjg2LTEuNTA1IDIuMTEzLTEuNjcgOS40OTQtLjI2OCAxMC4zOTkgMS4yMTcgMTkuNTkgNC42NiAyOC44MSAxLjg3NyA1LjA0OSAyLjY0IDYuNTg1IDMuMjggNi41ODUuOTkgMCAuOTktLjc0LS4wNjItMy4wNDYtMi4wODMtNC42MzctMy45OC0xMC41NjMtNC45NS0xNS41MDItMS4wOTItNS43MDctMS4yNTctNy42LTEuMjM3LTE1LjA2NCAwLTcuMjE2LjE2NS05LjEzNy43NDMtOS4yNzQuNTU2LS4xMzcuNzYzLjc0LjUzNiAyLjU1Mi0uMjY4IDIuMzg3LS4yNjggMTEuMTQuMDIgMTMuODU2LjU5OSA1LjY1MiAxLjU4OCAxMC40NTQgMy4xMzUgMTUuMzM4IDEuMDMxIDMuMjM4IDIuNjYgNy4zMjYgMy42MyA5IC41NTYgMS4wMTUgMS4xNzUgMS4xOCAxLjQ4NC40MTIuMjI3LS41NzcuMjQ3LS40OTQtMS40MjMtNC4zMDgtMi45OS02LjgwNS00Ljg2Ni0xNC44NzItNS40MDMtMjMuMjk1LS4xODUtMy4wMTktLjE4NS00Ljg1Ny4wNDItOC42OTkuMjg4LTUuNTQyLjIyNy01Ljk1NC0xLjEzNC02LjcyMi0uNzg0LS40MzktMS4wNTItLjQzOS0xLjY1LS4xMzd6TTI5Ljg4IDI1LjA3OGMtLjQzMy41NzYtLjY2IDMuODk2LS42MTkgOS4xOTIuMDQxIDUuNDMyLjE2NSA2LjE3MyAxLjAxIDYuMTczaC41OTlsLS4wODMtNC44MDFjLS4wNDEtMi44ODIuMDQxLTUuOS4xODYtNy41MTkuMjQ3LTIuNTUxLjI0Ny0yLjc0NC0uMTAzLTMuMS0uNDk1LS40NjctLjYyLS40NC0uOTkuMDU1ek0uMzcxIDI2LjIwM2MtLjQ5NS42My0uNDk1IDEyLjQ4NCAwIDEzLjExNS4zNzEuNTIyLjQxMy41MjIuOTI4LjE2NS4zNzEtLjI3NC4zOTItLjY1OS4zOTItNi43MjIgMC02LjA2NC0uMDItNi40NDktLjM5Mi02LjcyMy0uNTE1LS4zNTctLjU1Ny0uMzU3LS45MjguMTY1ek0zNi40NzggMzAuODk1Yy0uMjY3LjMyOS0uMTY0IDEwLjM3MS4xMDQgMTAuNzI4LjM3LjQ5NC45NDguMzg0IDEuMTk2LS4xOTIuMzA5LS43OTYuMjY4LTkuOTg4LS4wNDItMTAuNC0uMjY4LS4zNTYtMS4wMy0uNDM4LTEuMjU4LS4xMzZ6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yMi43MDQgMzIuOTI1Yy0uNDEzIDEuMDcuMzA5IDkuNjMxIDEuMTU0IDEzLjU4Mi4zMSAxLjQyNy42NiAxLjg2NiAxLjIxNyAxLjU5Mi40OTUtLjI0Ny41NTctLjkwNi4yNDgtMi41MjUtLjUxNi0yLjYzNC0uOTI4LTYuMzY1LTEuMDczLTkuNTItLjA4Mi0xLjY3NS0uMjI3LTMuMTg0LS4zNS0zLjM3Ni0uMzEtLjUyMS0uOTI4LS4zODQtMS4xOTYuMjQ3ek02Ljg0NiAzNC40MDdjLS4xODUuMjc0LS4yMDYgMS4xMjUtLjEwMyAzLjA3My4xNjUgMy4xLjgyNSA5LjYzIDEuMTM0IDExLjExMy4yNDggMS4xOC45MDcgMS42MTggMS40MDIuOTYuMjY4LS4zODQuMjY4LS42ODYtLjA0LTIuODU0LS41MzctMy44MTQtLjcyMy01Ljc2Mi0uODY3LTktLjA4Mi0xLjY3My0uMjI3LTMuMTgyLS4zNS0zLjM3NC0uMjY5LS40NC0uODY3LS40MTItMS4xNzYuMDgyek0xMy41NjkgMzYuMDhjLS4zOTIuNDk1LS4zNSAxLjMxOC4yMDYgNi43MjMuNyA2Ljc1IDEuNDY0IDkuMzMgMi40NTQgOC4zNjkuMzctLjM1Ny4zNy0uNDY3LS4xNjUtMy43MDQtLjMxLTEuODExLS43MDEtNS4wMjItLjg4Ny03LjEwNy0uMTg1LTIuMDU4LS4zOTItMy45NTEtLjQ3NC00LjE3LS4yNDgtLjYwNC0uNzQzLS42Ni0xLjEzNC0uMTF6TS4yNjggNDIuMzA5Yy0uNDc0Ljc2OC4xNjUgNi4zMzggMS4xMTQgOS42ODYuNyAyLjUyNCAxLjAzIDMuMTI4IDEuNjUgMy4xMjguNzIxIDAgLjg2NS0xLjAxNS4zNS0yLjM4Ny0uNzYzLTEuOTQ4LTEuMy00LjY2NS0xLjU0Ny03LjY4My0uMjQ3LTIuODgxLS4yNjgtMi45NjMtLjc4My0zLjA0Ni0uMjg5LS4wNTUtLjY0LjExLS43ODQuMzAyek0zMC4yOTIgNDIuOTRjLS4wODIuMTEtLjE0NC40NjctLjE0NC44MjMgMCAxLjIzNSAxLjQ4NSA2LjY0IDIuNjQgOS41NzYuOTkgMi41NTIgMS4yNTcgMy4wMTkgMS42NyAzLjAxOSAxLjAzIDAgLjk2OS0uNjg2LS4yNjgtNC4wMDYtLjY0LTEuNzMtMS41MDYtNC41NTUtMS45MzktNi4yODQtLjctMi44NTMtLjgyNS0zLjE1NS0xLjI5OS0zLjIzOC0uMjY4LS4wNTQtLjU3NyAwLS42Ni4xMXpNMjUuMDU1IDUwLjYyM2MtLjE4Ni42MzEuMjI2IDIuMTQgMS41MDUgNS42MjUgMS4zMiAzLjYyMiAyLjc0MiA2Ljc1IDMuMTE0IDYuOTQyLjQxMi4yMi44NjYtLjExLjk5LS42ODYuMDgyLS4zMy0uMjI4LTEuMjktLjkwOC0yLjc3MS0uOTctMi4xNC0yLjEyNC01LjI2OS0zLjA5My04LjI2LS4zMy0xLjA3LS40OTUtMS4yODktLjk0OS0xLjI4OS0uMjg4IDAtLjU3Ny4xOTItLjY2LjQzOXpNOC45NSA1Mi4xNmMtLjM3Mi40OTMtLjMzLjg1LjY2IDQuNzE5IDEuMTM0IDQuNDQ1IDIuODA0IDkuNDk0IDMuMjc4IDkuODc4LjQ5NS40MTEgMS4wNzItLjEzNyAxLjA1Mi0uOTYtLjAyLS4zNTctLjQ1NC0xLjkyMS0uOTktMy40My0uNTM2LTEuNTM3LTEuNDAyLTQuNS0xLjkzOC02LjU4Ni0uNzg0LTMuMS0xLjA1Mi0zLjg0MS0xLjM4Mi0zLjg5Ni0uMjI3LS4wMjctLjUzNi4wODItLjY4LjI3NXpNMTYuMDIzIDU0LjEwOGMtLjE0NS43NC45MDcgNC4zMDggMi42MTggOC44OSAxLjQyMyAzLjgxNCAyLjE4NiA1LjIxMyAyLjcwMiA0LjkzOS43NDItLjM4NS42MTgtMS4wNy0uODQ2LTQuODMtLjgwNC0yLjA1Ny0xLjgxNC00LjkxMS0yLjI0Ny02LjMzOC0uOTktMy4yMzgtMS4wMS0zLjI5Mi0xLjYwOS0zLjI5Mi0uMzUgMC0uNTM2LjE5Mi0uNjE4LjYzelwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiZmluZ2VycHJpbnRfc3ZnX19jbGlwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGgzOHY2M0gwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRmluZ2VycHJpbnRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdIb21lcGFnZU9wdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMi4wOSAxLjY0M2MtMS4wMjYuMTMtMS44ODcuOTk2LTIuMDM0IDIuMDUtLjA3NC40Ny0uMDY4IDEuNzI4IDAgMi4yMjZBMi40NzYgMi40NzYgMCAwMDEuNDEgNy43NzdsLjM3NC4xODFIMjcuMjE1bC4zNzQtLjE4MWEyLjQ3NiAyLjQ3NiAwIDAwMS4zNTQtMS44NThjLjA2OC0uNDg3LjA2OC0xLjY3Ny4wMDUtMi4xOTJhMi40MDUgMi40MDUgMCAwMC0yLjA5LTIuMDljLS40NTMtLjA1Ny0yNC4zMS0uMDU3LTI0Ljc2OS4wMDZ6TTEuODMgMTEuMzU3Yy0uNDYuMTI0LS43NDguMjk0LTEuMDk0LjY0NS0uNTc3LjU3Mi0uNzM2IDEuMTEtLjczNiAyLjQ3IDAgLjkyMy4wNzQgMS40MjEuMjYgMS44MTguMTg3LjM5Ni42MTguODY3Ljk3IDEuMDYuNjQuMzQ1LS4yMTYuMzIyIDEzLjI3LjMyMiAxMy40ODYgMCAxMi42My4wMjMgMTMuMjctLjMyMy4zNTItLjE5Mi43ODItLjY2My45Ny0xLjA2LjE4Ni0uMzk2LjI2LS44OTQuMjYtMS44MTcgMC0uOTIzLS4wNzQtMS40MjItLjI2LTEuODE4LS4xODgtLjM5Ny0uNjE4LS44NjctLjk3LTEuMDYtLjY0LS4zNDUuMjIyLS4zMjItMTMuMjk4LS4zMTctMTAuNDU2IDAtMTIuMzkzLjAxMi0xMi42NDMuMDh6TTEuNjk5IDIxLjA2NWMtLjQxNC4xMy0uNzA4LjMyMy0xLjAzNy42OC0uMzQuMzYyLS41MjcuNzY0LS42MDYgMS4yOC0uMDY4LjQ5Mi0uMDc0IDEuNzUgMCAyLjIyNmEyLjQwMyAyLjQwMyAwIDAwMi4wMjggMi4wNWMuMjU1LjA0IDQuNDEyLjA1NyAxMi42Ny4wNDVsMTIuMjkxLS4wMTcuMzM0LS4xMjRhMi41MDggMi41MDggMCAwMDEuNDUtMS40NzljLjEwMi0uMjY2LjEzLS40ODEuMTUzLTEuMjI5LjA1MS0xLjU0Ni0uMDk2LTIuMTc1LS42NjgtMi43NzUtLjM0LS4zNTctLjYzNC0uNTQ0LTEuMDY1LS42NzQtLjI4My0uMDgtMS40NzgtLjA5LTEyLjc3Mi0uMDg1LTExLjc1OSAwLTEyLjQ4NC4wMDUtMTIuNzc4LjEwMnpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0hvbWVwYWdlT3B0aW9uXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTGlua2RuKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMi45NTggMy42MjVhMi40MTcgMi40MTcgMCAwMTIuNDE3IDIuNDE3djE2LjkxNmEyLjQxNyAyLjQxNyAwIDAxLTIuNDE3IDIuNDE3SDYuMDQyYTIuNDE3IDIuNDE3IDAgMDEtMi40MTctMi40MTdWNi4wNDJhMi40MTcgMi40MTcgMCAwMTIuNDE3LTIuNDE3aDE2LjkxNnptLS42MDQgMTguNzNWMTUuOTVhMy45NCAzLjk0IDAgMDAtMy45MzktMy45NGMtMS4wMjcgMC0yLjIyMy42My0yLjgwMyAxLjU3MlYxMi4yNEgxMi4yNHYxMC4xMTRoMy4zNzJ2LTUuOTU3YzAtLjkzLjc0OS0xLjY5MiAxLjY4LTEuNjkyYTEuNjkxIDEuNjkxIDAgMDExLjY5IDEuNjkydjUuOTU3aDMuMzcyek04LjMxNCAxMC4zNDJhMi4wMyAyLjAzIDAgMDAyLjAzLTIuMDMgMi4wMzcgMi4wMzcgMCAwMC0yLjAzLTIuMDQyQTIuMDQyIDIuMDQyIDAgMDA2LjI3IDguMzEzYzAgMS4xMjQuOTE5IDIuMDMgMi4wNDIgMi4wM3ptMS42NzkgMTIuMDExVjEyLjI0SDYuNjQ2djEwLjExNGgzLjM0N3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTGlua2RuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWFpbChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5IDI5XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQuMTY3IDQuODMzSDQuODMzQTIuNDEzIDIuNDEzIDAgMDAyLjQzIDcuMjVsLS4wMTIgMTQuNWEyLjQyNCAyLjQyNCAwIDAwMi40MTYgMi40MTdoMTkuMzM0YTIuNDI0IDIuNDI0IDAgMDAyLjQxNi0yLjQxN1Y3LjI1YTIuNDI0IDIuNDI0IDAgMDAtMi40MTYtMi40MTd6bTAgMTYuOTE3SDQuODMzVjkuNjY3bDkuNjY3IDYuMDQxIDkuNjY3LTYuMDQxVjIxLjc1ek0xNC41IDEzLjI5Mkw0LjgzMyA3LjI1aDE5LjMzNEwxNC41IDEzLjI5MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWFpbFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z01lZGlhKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xOS4zNSAxMC4wNEE3LjQ5IDcuNDkgMCAwMDEyIDRDOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNEE1Ljk5NCA1Ljk5NCAwIDAwMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTQgMTN2NGgtNHYtNEg3bDUtNSA1IDVoLTN6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01lZGlhXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnTWV0YURhdGEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzOCA2M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMuMDIgMzcuMzA3bDEyLjUxMiAyMC43NGMuMDU2LS4xNS4xMTktLjI5LjE4OC0uNDIxIDUuMDQxLTguMzU4IDEwLjA4NC0xNi43MTMgMTUuMTI4LTI1LjA2NS4xNzktLjI3Mi4yNzYtLjY2Mi4yNjQtMS4wNjQtLjAxMS0yLjQxOSAwLTQuODM3IDAtNy4zMTMtLjExNy4wODQtLjIyMi4xNTEtLjMyMy4yMzMtLjg0Mi42ODEtMS43MTMgMS4yNDgtMi42NTEgMS40My0uMjE5LjAzMi0uNDA4LjI2Mi0uNDkzLjU5Ny0uODAyIDIuMzcyLTIuMDUzIDMuNTkyLTMuNjc2IDMuNTUtMS43MDMtLjA0MS0yLjk2Mi0xLjQxNS0zLjctMy45Ny0uODgtMy4wNDctLjE5Mi02LjgwMiAxLjU0Mi04LjYxNyAxLjc1NS0xLjgzNSA0LjA1OC0xLjIzIDUuMzg0IDEuNDE2LjI0My40OTUuNDMgMS4wMTguMjkgMS43MDEtLjA4My40NjUtLjMwMy44MjYtLjU4NC45NTgtLjI4Mi4xMzItLjU4NC4wMTYtLjgwMS0uMzA2LS4yMi0uMzE0LS4zOTctLjcxMi0uNjI1LTEuMDEtLjc2OC0xLTEuNjEyLTEuMTkyLTIuNDkyLS40NjUtLjkzLjc3Mi0xLjM3NSAyLjA2NS0xLjMwNiAzLjc3OS4wNjYgMS41OTcuNTk3IDIuNzA2IDEuNDc0IDMuMzIuOTE2LjY0OCAxLjk4MS4xOTggMi42LTEuMDk4LS43NzQtLjI5Ny0xLjQ3OC0uODM3LTIuMDA1LTEuOGExMi41OSAxMi41OSAwIDAxLS45NTMtMi4zMjRjLS4xOTUtLjYyOC4wNTMtMS4zOTUuNDIxLTEuNzA3LjM4MS0uMzI4Ljg1LS4xMjggMS4wODkuNDY1LjMzMi44OC42NzYgMS43MDIgMS4yNjIgMi4xNzQuODg0LjY5OCAxLjc5Ny42MiAyLjcwNy4yODQgMS43NTQtLjYzNSAzLjE4OC0yLjE5MyA0LjQzLTQuMjU1IDEuMzczLTIuMjcyIDIuMzU5LTQuOTEzIDIuNjY2LTguMTM4LjE5LTEuOTg1LjAyMi0zLjg3MS0xLjAzLTUuMTc1LS44NTQtMS4wNi0xLjg0Mi0xLjExLTIuODUyLS43OTYtMS4xODQuMzk3LTIuMyAxLjIxOS0zLjI3MiAyLjQwN2E1LjA5IDUuMDkgMCAwMS0uNDM4LjQ3OWMtLjQuNDE0LS45MjQuMjI3LTEuMTg2LS40MjItLjI2Mi0uNjQ5LS4xNjUtMS41MjQuMjE4LTEuOTc4YTE1LjI2NSAxNS4yNjUgMCAwMTEuNjcyLTEuOGMxLjQwMy0xLjIyNSAyLjg5NS0xLjk2NCA0LjUxMi0xLjczNCAyLjM3My4zNDcgNC4wNzkgMy4zNCA0LjE5MSA3LjI5Mi4wOTYgMy4zNzEtLjYzMyA2LjI5OC0xLjc0IDkuMDE2LS42NjEgMS42LTEuNDU1IDMuMDM4LTIuMzU5IDQuMjcxLS4xMTUuMTk4LS4xOC40Ni0uMTgyLjczNS0uMDExIDMuMjE1LS4wMTEgNi40MzEgMCA5LjY1LjAxNC42Ni0uMTQ1IDEuMy0uNDM1IDEuNzU1LTUuNDEzIDguOTUtMTAuODIyIDE3LjkwMy0xNi4yMjggMjYuODYxLS41Ni45My0xLjAwMS45My0xLjU2MiAwLTQuNDgyLTcuNDIzLTguOTYyLTE0Ljg1NS0xMy40NC0yMi4yOTUtLjU3My0uOTQ5LS41NzItMS42NzIuMDA2LTIuNjMyIDUuMzk2LTguOTQgMTAuNzkyLTE3Ljg4OCAxNi4xODktMjYuODQzLjI3LS40ODYuNjU0LS43NTUgMS4wNTMtLjczNyAyLjc0Ny4wMjIgNS40OTQuMDIyIDguMjQyIDAgLjQtLjAyMi43ODYuMjQzIDEuMDU5LjcyOCAxLjMyOCAyLjIzNyAyLjY2NSA0LjQ1MiA0LjAwMiA2LjY4Mi4yOTEuNDYxLjM1NiAxLjE5Mi4xNTcgMS43NzItLjE5OS41OC0uNjEuODYzLS45OTkuNjgzYTEuNTYgMS41NiAwIDAxLS40ODQtLjU0MSA3NzIuMTAzIDc3Mi4xMDMgMCAwMS0zLjYwMi01Ljk0OGMtLjE1LS4yNzUtLjM2Ny0uNDI0LS41OS0uNDA0LTIuNDQ2IDAtNC44OSAwLTcuMzM2LjAyLS4xOS4wMS0uMzcyLjEyOS0uNTE1LjMzOC01LjA5IDguNDEyLTEwLjE3NCAxNi44My0xNS4yNTQgMjUuMjU1bC0uMTQ0LjI2N3pcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgIHN0cm9rZT1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTEuNTc0IDMxLjI2NVYzOC42ODNjLS4wMDcuODE1LS4zOTIgMS40ODItLjg4MSAxLjUyNy0uNDkuMDQ2LS45MTctLjU0Ni0uOTc4LTEuMzU0YTUuMjEyIDUuMjEyIDAgMDEtLjAxMi0uNDMydi04LjQwOGMwLTEuMjY5LjM1Ny0xLjg2NSAxLjExMi0xLjg2N2g1LjEzMWMuNDIgMCAuNzU1LjI0Ny45MzIuOTEuMTYzLjU5Ni4xMzkgMS4yMjEtLjE0OSAxLjY1Mi0uMjA3LjMwNS0uNDY4LjQ5LS43NDQuNTI5LTEuMzEzLjA1Mi0yLjYyNi4wMjItMy45NC4wMjVoLS40NzF6TTE5LjEzNiA0My43Nzl2LTYuOTQyYTQuNTI0IDQuNTI0IDAgMDEuMTI1LTEuMTM1Yy4xODMtLjYzOC42MS0uOTc1IDEuMDI1LS44MDkuNDE3LjE0Ni43MTguNzUyLjcyNSAxLjQ2LjAxNy45MjcuMDA4IDEuODU0LjAwOCAyLjc4MXY1Ljg3NGMwIDEuMzA4LS4zNTIgMS45MDEtMS4xMzEgMS45MDRoLTUuMTRjLS4zODQuMDM5LS43NDMtLjMxNi0uOTA1LS44OTUtLjE1OC0uNTEtLjEyNC0xLjEyNi4wODctMS41OC4yMDEtLjQ1OS41MzItLjcxLjg3My0uNjYzaDMuODczbC40Ni4wMDV6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWV0YURhdGFcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdPcGVuc2VhTG9nbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTguODk1IDE0LjY4MWMtLjA0NS0uMDQ1LS4xMTItLjA0NS0uMTgtLjAyMmwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDAgLjMxLjMxIDAgMDEuMDg5LS4wNjdjLjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NS0uMzU5IDAtLjYyNy4yOTEtLjYyNy42NSAwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0YTUuMTYgNS4xNiAwIDAwLjQ0OC0uOTQxYy4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3LjA0NC0uMDIyLjAyMi0uMDktLjAyMy0uMTEyem0tOS45OTctLjQ5M2gyLjU1NWMuMDQ1IDAgLjA2OC0uMDIzLjA2OC0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDY3bC0xLjI1NS0uNTgzYy0uMDIzLS4wMjItLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA2Ny4wMjIuMTEyLjA2Ny4xMTJ6TTEzIDBDNS44MjggMCAwIDUuODI4IDAgMTNzNS44MjggMTMgMTMgMTMgMTMtNS44MjggMTMtMTNTMjAuMTcyIDAgMTMgMHptLS4wNDUgMjIuNDU5Yy01LjE3NyAwLTkuMzY5LTQuMTkyLTkuMzY5LTkuMzkyIDAtNS4xNzcgNC4xOTItOS4zOTEgOS4zNy05LjM5MSA1LjE3NyAwIDkuMzY4IDQuMjE0IDkuMzY4IDkuMzkxLS4wMjIgNS4yLTQuMjE0IDkuMzkyLTkuMzY5IDkuMzkyem01Ljc2LTcuOGwtLjE1Ni4wNjdhNS41MTggNS41MTggMCAwMS0yLjQ2Ni41NmMtLjA0NSAwLS4wNjcuMDIzLS4wNjcuMDQ1YS44NjUuODY1IDAgMDEtLjg1Mi42OTVoLTEuNzQ4di0xLjQ1N2guMDIyYy4xMTIuMDIyLjIwMi4wMjIuMzE0LjA0NS43NC4xMTIgMS4wOTguNDQ4IDEuMjU1LjYwNWwuMDIzLjAyMmEuMDY4LjA2OCAwIDAwLjA5IDAgLjMxLjMxIDAgMDEuMDg5LS4wNjdjLjI2OS0uMTguODk3LS41Ni44OTctMi41NzcgMC0yLjA2My0xLjU3LTMuNDUyLTEuNzQ5LTMuNTQybC0uOTE5LS4wNjdoLS4wMjJ2LS41ODNhLjY2LjY2IDAgMDAuMzE0LS41NmMwLS4zNTktLjI3LS42NS0uNjI4LS42NS0uMzU5IDAtLjYyNy4yOTEtLjYyNy42NSAwIC4yMjQuMTEyLjQyNi4zMTMuNTM4di40OTNsLTEuMzIyLS4xMzVjLS4wNjcgMC0uMTEyLjA2OC0uMDY3LjExMi4yMjQuMzYuODI5IDEuNDguODc0IDMuMTYuMDQ1IDEuNTctLjIwMiAyLjMxLS4zMTQgMi41NzgtLjAyMi4wMjMtLjAyMi4wNDUgMCAuMDY4LjAyMi4wMjIuMDQ1LjAyMi4wNjcuMDIyLjE1Ny0uMDIyLjQyNi0uMDY3Ljc2Mi0uMDl2MS40NTdoLTEuNDU3YS44OS44OSAwIDAxLS44NzQtLjg3NHYtLjM1OGMwLS4wNDUtLjAyMi0uMDY4LS4wNjctLjA2OEg3LjY4OGMtLjAyMiAwLS4wNjcuMDIzLS4wNjcuMDY4di4yMDFjMCAxLjAwOS4yOTEgMS45MjguNzg0IDIuNzM1LjA5LjEzNC4yNDcuMjAxLjM4MS4xMzRsLjI5Mi0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzEzLjEzNGEuODU1Ljg1NSAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGEuODU2Ljg1NiAwIDAwLjc0IDBsLjMxMy0uMTM0YS44NTYuODU2IDAgMDEuNzQgMGwuMzE0LjEzNGMuMjAxLjA5LjQyNi0uMDIyLjUzOC0uMjI0YTUuMTYgNS4xNiAwIDAwLjQ0OC0uOTQxYy4yNDctLjc0LjY5NS0xLjQzNSAxLjM5LTEuNzcxLjA2Ny0uMDIyLjA5LS4wOS4wOS0uMTU3IDAtLjA0NS0uMDIzLS4xMTItLjA2OC0uMTM0IDAgMC0uMDY3LS4wMjMtLjEzNSAwem0tOS44MTctLjQ3MWgyLjU1NWMuMDQ1IDAgLjA2OC0uMDIzLjA2OC0uMDY3di0yLjc4YzAtLjAyMi0uMDIzLS4wNDQtLjA0NS0uMDY3bC0xLjI1NS0uNTgzYy0uMDIzLS4wMjItLjA2OCAwLS4wOS4wNDVsLTEuMyAzLjM0Yy0uMDIyLjA2Ny4wMjIuMTEyLjA2Ny4xMTJ6XCJcbiAgICAgICAgZmlsbD1cIiMzMjkxRTlcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTEuNDc2IDExLjI5NmwtMS4yNTUtLjU4MmMtLjAyMy0uMDIzLS4wNjggMC0uMDkuMDQ1bC0xLjMgMy4zNGMtLjAyMi4wNDQuMDIyLjA4OS4wNjcuMDg5aDIuNTU2Yy4wNDQgMCAuMDY3LS4wMjMuMDY3LS4wNjd2LTIuNzhjMC0uMDIyLS4wMjMtLjA0NC0uMDQ1LS4wNDR6bTcuNDE5IDMuMzg1Yy0uMDQ1LS4wNDUtLjExMi0uMDQ1LS4xOC0uMDIybC0uMTU2LjA2N2E1LjUxOCA1LjUxOCAwIDAxLTIuNDY2LjU2Yy0uMDQ1IDAtLjA2Ny4wMjMtLjA2Ny4wNDVhLjg2NS44NjUgMCAwMS0uODUyLjY5NWgtMS43NDh2LTEuNDU3aC4wMjJjLjExMi4wMjIuMjAyLjAyMi4zMTQuMDQ1Ljc0LjExMiAxLjA5OC40NDggMS4yNTUuNjA1bC4wMjMuMDIyYS4wNjguMDY4IDAgMDAuMDkgMGMuMDIyLS4wMjIuMDQ0LS4wNDQuMDg5LS4wNjcuMjY5LS4xOC44OTctLjU2Ljg5Ny0yLjU3NyAwLTIuMDYzLTEuNTctMy40NTItMS43NDktMy41NDJsLS45MTktLjA2N2gtLjAyMnYtLjU4M2EuNjYuNjYgMCAwMC4zMTQtLjU2YzAtLjM1OS0uMjctLjY1LS42MjgtLjY1cy0uNjI3LjI5MS0uNjI3LjY1YzAgLjIyNC4xMTIuNDI2LjMxMy41Mzh2LjQ5M2wtMS4zMjItLjEzNWMtLjA2NyAwLS4xMTIuMDY4LS4wNjcuMTEyLjIyNC4zNi44MjkgMS40OC44NzQgMy4xNi4wNDUgMS41Ny0uMjAyIDIuMzEtLjMxNCAyLjU3OC0uMDIyLjAyMy0uMDIyLjA0NSAwIC4wNjguMDIyLjAyMi4wNDUuMDIyLjA2Ny4wMjIuMTU3LS4wMjIuNDI2LS4wNjcuNzYyLS4wOXYxLjQ1N2gtMS40NTdhLjg5Ljg5IDAgMDEtLjg3NC0uODc0di0uMzU4YzAtLjA0NS0uMDIyLS4wNjgtLjA2Ny0uMDY4SDcuNjg4Yy0uMDIyIDAtLjA2Ny4wMjMtLjA2Ny4wNjh2LjIwMWMwIDEuMDA5LjI5MSAxLjkyOC43ODQgMi43MzUuMDkuMTM0LjI0Ny4yMDEuMzgxLjEzNGwuMjkyLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTMuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0YS44NTUuODU1IDAgMDAuNzQgMGwuMzEzLS4xMzRhLjg1Ni44NTYgMCAwMS43NCAwbC4zMTQuMTM0Yy4yMDEuMDkuNDI2LS4wMjIuNTM4LS4yMjQuMTc5LS4yOTEuMzM2LS42MjcuNDQ4LS45NDEuMjQ3LS43NC42OTUtMS40MzUgMS4zOS0xLjc3MS4wNjctLjAyMi4wOS0uMDkuMDktLjE1Ny4wNDQtLjAyMi4wMjItLjA5LS4wMjMtLjExMnpcIlxuICAgICAgICBmaWxsPVwiIzMyOTFFOVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z09wZW5zZWFMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUXJDb2RlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDcgNDdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI3FyLWNvZGVfc3ZnX19jbGlwMClcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTUuODc1IDI0LjU0Mmg0LjY2N3Y0LjY2Nkg1Ljg3NXYtNC42NjZ6bTE4LjY2Ny0xNGg0LjY2NnY5LjMzM2gtNC42NjZ2LTkuMzMzem0tNC42NjcgMTRoOS4zMzN2OS4zMzNoLTQuNjY2di00LjY2N2gtNC42Njd2LTQuNjY2em0xNCAwaDQuNjY3djQuNjY2aDQuNjY2di00LjY2Nmg0LjY2N3Y0LjY2NmgtNC42Njd2NC42NjdoNC42Njd2OS4zMzNoLTQuNjY3djQuNjY3aC00LjY2NnYtNC42NjdoLTkuMzM0djQuNjY3aC00LjY2NnYtOS4zMzNoOS4zMzN2LTQuNjY3aDQuNjY3di00LjY2N2gtNC42Njd2LTQuNjY2em05LjMzMyAxOC42NjZ2LTkuMzMzaC00LjY2NnY5LjMzM2g0LjY2NnpNMzMuODc1IDUuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6TTUuODc1IDUuODc1aDE0djE0aC0xNHYtMTR6bTQuNjY3IDQuNjY3djQuNjY2aDQuNjY2di00LjY2NmgtNC42NjZ6TTUuODc1IDMzLjg3NWgxNHYxNGgtMTR2LTE0em00LjY2NyA0LjY2N3Y0LjY2Nmg0LjY2NnYtNC42NjZoLTQuNjY2elwiXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cInFyLWNvZGVfc3ZnX19jbGlwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgMGg0N3Y0N0gwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUXJDb2RlXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnUmFyaWJsZUxvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyNiAyNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwLjggMEg1LjJBNS4yIDUuMiAwIDAwMCA1LjJ2MTUuNkE1LjIgNS4yIDAgMDA1LjIgMjZoMTUuNmE1LjIgNS4yIDAgMDA1LjItNS4yVjUuMkE1LjIgNS4yIDAgMDAyMC44IDB6XCJcbiAgICAgICAgZmlsbD1cIiNGRURBMDNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuOTQgMTIuOTA1Yy44Mi0uMjEzIDEuNTQ4LS44MjYgMS41NDgtMi4wNTcgMC0yLjA1LTEuNzQxLTIuNTI4LTMuOTcyLTIuNTI4SDYuNjN2OS4yMzRoMy43NFYxNC40Mmg0LjQzN2MuNjgzIDAgMS4wODMuMjcxIDEuMDgzLjk0MnYyLjE5MmgzLjc0di0yLjMwOGMwLTEuMjU4LS43MS0yLjA1MS0xLjY5LTIuMzQxem0tMy4wNjktLjk3NEgxMC4zN3YtLjkwM2g0LjUwMWMuNDkgMCAuNzg3LjA2NS43ODcuNDUycy0uMjk3LjQ1MS0uNzg3LjQ1MXpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1JhcmlibGVMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2F2aW5nc1BpZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDYzXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuMzExLjA3MWMtMy41ODEuODIxLTUuOTM3IDcuMjEyLTQuNzY0IDEyLjkyNS4xMjcuNTkuMjIyIDEuMTA3LjIyMiAxLjE3OCAwIC4wNzItLjM0OS4zNC0uNzYxLjYyNS0uOTcyLjYyNS0yLjYzIDIuMDg5LTMuMjg2IDIuODkybC0uNTA3LjYyNS0uNTE3LS4zNzVjLS45NzItLjY5Ni0yLjMxNC0uNzg1LTMuMjAyLS4yMTQtLjM4LjI1LTEuMjM2IDEuMjMyLTEuMjM2IDEuNDI4IDAgLjA3Mi40MjMgMS4wOS45NCAyLjI1bC45MyAyLjEwNi0uNDEyIDEuMDg5Yy0uNTQ5IDEuNDI4LTEuMTgzIDMuNjc3LTEuNDI2IDUuMDdsLS4xOSAxLjEwN2gtLjQ4NmMtLjcxOCAwLTEuNDguNDQ2LTEuODggMS4xMDctLjcwOCAxLjE3OC0uNjk4IDEuMDE3LS43MyA3Ljk0NC0uMDIgMy45MS4wMTEgNi41NTIuMDc0IDYuOTYyLjE0OC45MS42OTggMiAxLjIxNSAyLjM5Mi4zNy4yODYuNzA4LjM0IDIuMjcyLjM0aDEuODQ5bC45NSAxLjY3OGMuNTI5LjkxIDEuMzMyIDIuMTI0IDEuNzg2IDIuNjk1bC44MTMgMS4wMTh2Mi45ODFjMCAyLjczMi4wMjEgMy4wMTcuMjQzIDMuNjYuNDEyIDEuMjMyLjcwOCAxLjM3NSAyLjczNyAxLjMyMSAxLjU5NS0uMDUzIDEuNzg1LS4wOSAyLjA2LS40MjguNDMzLS41NTQuNjc2LTEuMzU3Ljc0LTIuNWwuMDYzLTEgLjMyNy4wOWMxLjQwNS40MSAzLjE5LjUzNSA0LjQ5LjMzOS43Ni0uMTI1IDEuNDQ4LS4yNjggMS41MzItLjMyMS4xMDYtLjA3Mi4xNTguMTc4LjE5IDEuMDcuMDQyIDEuMjUuMjIyIDEuODIyLjc2IDIuNS4yNjUuMzQuNDM0LjM3NSAyLjEwMy4zNzUgMS43MzMgMCAxLjgzOC0uMDE4IDIuMTY2LS40MS42MTMtLjc1LjY5Ny0xLjIzMi43Ni00LjQ0NmwuMDUzLTIuODkyLjc5My0uOTI4YzEuNzUzLTIuMDg5IDMuNTI4LTUuNTE3IDQuNDQ3LTguNjA1IDEuMTczLTMuODkyIDEuNjM4LTguODAxIDEuMjE1LTEyLjc2NGwtLjEzNy0xLjMwMy41MDctLjQyOWMuNTctLjUgMS4yMjYtLjcxNCAxLjYyNy0uNTUzLjQwMi4xNzguMzE3LjM3NS0uMTguMzkyLTEuMTkzLjA1NC0xLjI1NyAyLjcxNC0uMDczIDMuMzAzLjM3LjE5Ny40NTQuMTc5LjcwNy0uMTI1LjE1OS0uMTk2LjM2LS42MDcuNDQ0LS45MjguMTktLjY3OC4yLS42NzguNzYtLjE5Ny4zODEuMzIyLjQ0NC4zNC41ODIuMTA4LjI0My0uNDExLjA3NC0uOTQ3LS40NDQtMS4zNTctLjI2NC0uMjE0LS41MTctLjM3NS0uNTgtLjM3NS0uMDU0IDAtLjEwNy0uMDktLjEwNy0uMTk2IDAtLjUtLjM4LTEuNDQ3LS42NjUtMS43MTQtLjQ0NC0uMzc1LTEuMzc0LS4yMTUtMi4xNDUuMzc1LS4zMjcuMjUtLjYxMi40NjQtLjYyMy40NjQtLjAyMSAwLS4wNzQtLjI2OC0uMTE2LS41OS0uMTQ4LTEuMTQyLS44OTgtMy43ODQtMS41NjQtNS40OC0xLjY3LTQuMjMtNC4yNDctNy42NzYtNy4xNDItOS41NjktLjU0OS0uMzU3LTEuMDE0LS42Ni0xLjAzNS0uNjc4LS4wMS0uMDM2LjA3NC0uNTE4LjE5LTEuMTA3IDEuMDM2LTUuMDM0LS42NTUtMTAuNzY1LTMuNjY2LTEyLjQ3OS0uODM0LS40NjQtMS44NDktLjYyNC0yLjY3My0uNDQ2em0xLjc5NiAyLjYwN2MxLjMzMi41IDIuNDEgMi4wMzUgMy4wMzMgNC4yODQuMjY0Ljk0Ni4yOTUgMS4yNS4yOTUgMi45MjggMCAxLjc1LS4wMiAxLjk0Ni0uMzQ4IDMuMDctMS42NDggNS43MTMtNi4zODEgNS43MTMtNy45NzcgMC0uMzE3LTEuMTA2LS4zMzgtMS4zMzktLjMzOC0zLjA3IDAtMS42NzguMDMyLTEuOTgyLjI5Ni0yLjkyOC42MDItMi4xNzggMS42MjctMy42NzcgMi45MDUtNC4yMy44ODgtLjM5NCAxLjIyNi0uNDEyIDIuMTM0LS4wNTR6bS00LjM1MiAxNS4zN2MuMDIgMC0uMzQ5LjIzMi0uODE0LjQ4Mi0xLjg3IDEuMDE4LTIuNDkzIDEuODIxLTIuMjE4IDIuODU3LjA2My4yMzIuMjUzLjUzNS40MDEuNjQyLjI0My4xNjEuNDEyLjEwNyAxLjE4My0uNDY0IDIuNzc5LTIuMDE3IDYuMTctMi4yMzEgOC45Ni0uNTcxLjQ5Ni4zMDMgMS4xNC43MzIgMS40MTUuOTgyLjYyMy41MTcuOTgyLjQ4MiAxLjI2OC0uMTQzLjQ4Ni0xLjEwNy0uMjMzLTIuMDg5LTIuMzI1LTMuMjMxLS42MDItLjMyMi0xLjA3Ny0uNjI1LTEuMDc3LS42NzkuMDEtLjA1My4yNDMtLjQ0Ni41MjgtLjg3NGwuNTE4LS43ODYgMS4wNTYuNjQzYzQuMDQ3IDIuNDEgNy4yNTggNy45OTggOC4zMDQgMTQuNDYuNTI4IDMuMjMxLjQ2NSA3LjIzLS4xNjkgMTAuNDk3LS44NDUgNC4zMzgtMi42MiA4LjE1OS01LjAyOSAxMC44NTRsLTEuMTMgMS4yNjgtLjAxIDMuMjQ5LS4wMTEgMy4yNjctMS4zOTUuMDUzLTEuNDA1LjA1NHYtMi4zMzljMC0xLjI2Ny0uMDMyLTIuMzItLjA3NC0yLjMyLS4wNTMgMC0uMzQ5LjEyNC0uNjY2LjI2Ny0uODg3LjQxLTIuODUyLjgwMy0zLjk0LjgwMy0xLjEzIDAtMi43MzYtLjM3NC0zLjkyLS44OTJhMjguOTMgMjguOTMgMCAwMC0uODY2LS4zNTdjLS4wMjEgMC0uMDUzIDEuMDE3LS4wNjMgMi4yNjdsLS4wMzIgMi4yODUtMS40MDUuMDU0LTEuNDA1LjA1My4wMjEtMy40MS4wMS0zLjQxLS44NTUtLjk4MWMtMS4wMzYtMS4yMTQtMi4xMjQtMi44OTItMi44NzQtNC40NDVsLS41NS0xLjE2SDQuMDY0Yy0yLjAxNyAwLTIuMTIzLS4wMTktMi4zNTYtLjM5M2wtLjI0My0uMzc1VjQwLjIyYzAtNy4zOTEtLjEzNy02LjgyIDEuNTk2LTYuOTQ1bDEuMTgzLS4wOS4yNDMtMS41N2MuNDMzLTIuNzMyIDEuMTEtNC45OTkgMi4zMTQtNy43My4xNDctLjM0LjExNi0uNDY0LS42MjQtMi4xNDItLjQ1NC0xLS43NS0xLjg0LS42OTctMS45MjguMTgtLjMwNCAxLjI3OC4xMDcgMi4wNi43NjdsLjc5Mi42Ni43OTMtLjk5OWMuOTcyLTEuMjE0IDIuNDQtMi41NTMgMy42NDUtMy4zMmwuODk4LS41OS41MjguODRjLjI4NS40NjQuNTM5Ljg1Ni41Ni44NzR6bTIxLjA4NyAxNC4yNjRjLjEyNy4wOS4xMzcuMTc5LjA0Mi41MzYtLjEyNy40NDYtLjE4LjUtLjQ0NC4zMjEtLjE2OS0uMTA3LS4yMzItLjYyNS0uMDk1LS44MzkuMDg1LS4xNi4yNzUtLjE2LjQ5Ny0uMDE4elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTguNTc1IDMwLjAxYy0uMTM4LjA1My0uMzguMzItLjU2LjYwNi0uMzYuNjI1LS40MzQgMS42MDctLjE3IDIuNDY0LjI4Ni45MjggMS4yMDUgMS4yMTQgMS43NjUuNTM1IDEuMDM1LTEuMjUuMjQzLTMuOTk5LTEuMDM1LTMuNjA2elwiXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2F2aW5nc1BpZ1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z1NtYXJ0Q29udHJhY3TEsGNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4IDY0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMy4wMjMgMS4zNjhDMS44NjQgMi4wODguMzMzIDUuMDI1LjA3IDcuMTNjLS4zMzYgMi4zODIuNTYxIDQuOTg2IDIuMDU2IDYuMTUuNzEuNTUzIDIuMTMuODMgNC4xMS44M2gyLjk5djIuNDkzYzAgMS4zODUuMTg3IDIuNDkzLjM3NCAyLjQ5My40ODUgMCAuNDg1LTExLjYzNCAwLTEzLjUxNy0uMTg3LS43NzYtLjY3My0xLjg4NC0xLjEyMS0yLjU0OUw3LjczIDEuOTIyaDEzLjExN2MxMS42OTYgMCAxMy4yMjguMTExIDE0LjIuOTQyIDIuMDE4IDEuNzczIDIuMjA1IDMuMjEzIDIuMjA1IDE3LjI4NSAwIDguMTQ0LjE1IDEyLjc5Ny4zNzMgMTIuNzk3LjIyNCAwIC4zNzQtNC41OTguMzc0LTEyLjc0MiAwLTEzLjg1LS4xNS0xNS4xMjQtMi4wNTUtMTcuNzI4bC0xLjAxLTEuMzg1TDE5LjM5Ljk4MWMtOC41NTctLjA1Ni0xNS45MTkuMTEtMTYuMzY3LjM4N3ptMy45NiAxLjM4NWMxLjQ5NiAxLjE2NCAyLjI0MyAzLjQ5IDIuMjQzIDcuMjAydjMuMDQ3SDcuNTQ0Yy0xLjY0NCAwLTEuNjQ0IDAtMS4zMDgtMS40NC4yMjUtLjc3Ni4yNjItMS45OTQuMTUtMi43Ny0uMjI0LTEuMzg1LTIuMjQyLTMuMzgtMi42OS0yLjY2LS4xNS4yMjItLjAzOC41LjI2LjY2Ni43ODYuMzg3IDEuOTA3IDIuMjE2IDEuOTA3IDMuMTU3IDAgLjQ0NC0uMzM3IDEuMzMtLjc4NSAxLjk5NS0uOTcyIDEuNDQtMi4zOTIgMS4wNTItMy41ODctLjk0MkMuNDggOS40LjQwNyA4LjAxNiAxLjE5IDUuNTc4IDIuMjM5IDIuMjU2IDQuNzggMS4wMzcgNi45ODUgMi43NTR6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTcuNDQ3IDExLjg5NGMwIC4zMzMgMi4yNDIuNTU0IDUuOTQyLjU1NCAzLjU4NyAwIDYuMDU0LS4yMjEgNi4yMDMtLjU1NC4xNS0uMzg3LTEuOTQzLS41NTQtNS45NDItLjU1NC0zLjg4NiAwLTYuMjAzLjIyMi02LjIwMy41NTR6TTEyLjk2MyAxNi44OGMwIC4zMzMgMS4zMDguNTU0IDMuMTc2LjU1NCAxLjg2OSAwIDMuMTc3LS4yMjEgMy4xNzctLjU1NCAwLS4zMzItMS4zMDgtLjU1NC0zLjE3Ny0uNTU0LTEuODY4IDAtMy4xNzYuMjIyLTMuMTc2LjU1NHpNMjAuODEgMTYuODhjMCAuMzMzIDEuMTIxLjU1NCAyLjYxNi41NTRzMi42MTYtLjIyMSAyLjYxNi0uNTU0YzAtLjMzMi0xLjEyMS0uNTU0LTIuNjE2LS41NTRzLTIuNjE2LjIyMi0yLjYxNi41NTR6TTMxLjI3NCAxNi44OGMwIC4yNzcuNjcyLjU1NCAxLjQ5NC41NTRzMS40OTQtLjI3NyAxLjQ5NC0uNTU0YzAtLjMzMi0uNjcyLS41NTQtMS40OTQtLjU1NHMtMS40OTQuMjIyLTEuNDk0LjU1NHpNOS41MjUgMjEuNjQ1Yy0uMTg3LjIyMS0uMyA3LjQyMy0uMyAxNi4wMSAwIDE0LjM0OS4wMzggMTUuNjc4LjY3MyAxNi41MS41NjEuNzc1IDEuODY5Ljk0MSA4LjE0NyAxLjA1Mmw3LjQzNi4xNjYuMTEyIDQuMjY2Yy4wNzUgMi4zODIuMjI1IDQuMzIxLjMzNyA0LjMyMS4xNSAwIC43NDctLjY2NSAxLjMwOC0xLjQ5NmwxLjA0Ni0xLjQ5NiAxLjA0NiAxLjQ5NmMuNTYuODMxIDEuMTU5IDEuNDk2IDEuMzA4IDEuNDk2LjE1IDAgLjI2Mi0xLjk5NC4yNjItNC40MzJ2LTQuNDMyaDIuOTUyYzQuMTEgMCA0LjE0OC0uMDU1IDQuMTQ4LTEwLjkxNCAwLTQuOTg2LS4xNS04LjUzMS0uMzc0LTguNzUzLS4yMjQtLjIyMS0uMzczIDEuMjc0LS4zNzMgNC4xdjQuNDg3SDM1LjU3Yy0uOTM0IDAtMS42ODIuMjIyLTEuNjgyLjU1NCAwIC4yNzcuNzQ4LjU1NCAxLjY4Mi41NTRoMS42ODJ2My41NDZjMCA1LjMxOCAwIDUuMzE4LTMuNDAxIDUuMzE4SDMwLjl2LTIuMTZjMC0xLjYwNy4yMjQtMi40MzguNzQ3LTIuOTkyLjY3My0uNzIuNzg1LTEuMjc0LjY3My00LjU5OGwtLjExMi0zLjcxMi0yLjA1NS0xLjY2Mi0yLjA1Ni0xLjY2Mi0xLjg2OCAxLjY2Mi0xLjg2OSAxLjYwNi0uMTEyIDMuNzY4Yy0uMTEyIDMuMzI0IDAgMy44NzguNjczIDQuNTk4LjUyMy41NTQuNzQ3IDEuMzg1Ljc0NyAyLjk5MnYyLjE2aC03LjYyM2MtOC43MDcgMC04LjA3Mi4zODgtOC4wNzItNS4zMTh2LTMuNTQ2aDYuMzUzYzMuOTk4IDAgNi4zNTMtLjIyMSA2LjM1My0uNTU0IDAtLjMzMi0yLjM1NS0uNTU0LTYuMzUzLS41NTRIOS45NzNsLS4wNzUtMTEuNDEyYy0uMDc0LTYuMjYtLjIyNC0xMS4xOTEtLjM3My0xMC45N3ptMjAuNDc4IDE4LjI4MWMxLjY0NCAxLjQ0IDEuNjQ0IDEuNDQgMS42NDQgNC41NDN2My4xNThsLTEuNzE5IDEuMzMtMS43MTkgMS4zODUtMS42NDQtMS4zMy0xLjY0NC0xLjM4NVY0NC40N2MwLTMuMTAyIDAtMy4xNTcgMS42MDctNC41NDMuODYtLjc3NSAxLjYwNy0xLjQ0IDEuNjgxLTEuNDQuMDc1IDAgLjg2LjY2NSAxLjc5NCAxLjQ0em0tLjgyMiAxMS4wMjVsLjk3MS0uOTQyVjYxLjkybC0uOTM0LTEuMjc0LS45MzQtMS4yNzQtLjkzNCAxLjI3NC0uOTM0IDEuMjc0di0xMS44bC44OTYuODMxYy44Ni44MzEgMS4wMS44MzEgMS44NjkgMHpcIlxuICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNy45MSA0MS44MWMwIC4yNzcuMzM3Ljc3Ni43NDcgMS4xMDguNDQ5LjMzMy43NDggMS4xNjMuNzQ4IDEuOTQgMCAuNzc1LjE4NiAxLjM4NC4zNzMgMS4zODQuNzQ3IDAgLjM3NC0zLjI2OC0uNDQ4LTQuMS0uOTcxLS45OTctMS40Mi0xLjEwOC0xLjQyLS4zMzJ6TTE0LjA4NCAyMS44NjZjMCAuMjc3LjY3Mi41NTQgMS41MzIuNTU0Ljg5NiAwIDEuNDItLjIyMSAxLjI3LS41NTQtLjExMi0uMzMyLS44MjItLjU1NC0xLjUzMi0uNTU0LS43MSAwLTEuMjcuMjIyLTEuMjcuNTU0ek0xOC43NTUgMjEuODY2Yy0uMTUuMzg4IDIuNTA0LjU1NCA3LjYyMy41NTQgNS4wMDggMCA3Ljg4NS0uMjIxIDcuODg1LS41NTQgMC0uMzMyLTIuODAzLS41NTQtNy42MjMtLjU1NC00LjcwOSAwLTcuNzM2LjIyMi03Ljg4NS41NTR6TTEyLjc3NiAyNy40MDZjLjE1LjMzMyAyLjgwMy41NTQgNi43MjYuNTU0IDMuOTI0IDAgNi41NzctLjIyMSA2LjcyNy0uNTU0LjE1LS4zODgtMi4xNjgtLjU1NC02LjcyNy0uNTU0cy02Ljg3NS4xNjYtNi43MjYuNTU0ek0yNy45MSAyNy40MDZjMCAuMzMzIDEuMzA4LjU1NCAzLjE3Ny41NTQgMS44NjggMCAzLjE3Ni0uMjIxIDMuMTc2LS41NTQgMC0uMzMyLTEuMzA4LS41NTQtMy4xNzYtLjU1NC0xLjg2OSAwLTMuMTc3LjIyMi0zLjE3Ny41NTR6TTEyLjk2MyAzMi4zOTJjMCAuMzMzIDMuMjUuNTU0IDguOTY4LjU1NHM4Ljk2OS0uMjIxIDguOTY5LS41NTRjMC0uMzMyLTMuMjUxLS41NTQtOC45NjktLjU1NC01LjcxNyAwLTguOTY4LjIyMi04Ljk2OC41NTR6XCJcbiAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTbWFydENvbnRyYWN0xLBjb25cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdUd2l0dGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNy4xNCA3LjI1Yy0uOTMxLjQyMy0xLjkzNC43LTIuOTczLjgzNGE1LjE5NCA1LjE5NCAwIDAwMi4yNzEtMi44NzYgMTAuNDQgMTAuNDQgMCAwMS0zLjI4NiAxLjI2OWMtLjk1NS0xLjA0LTIuMjk2LTEuNjQ0LTMuODE5LTEuNjQ0LTIuODQgMC01LjE2IDIuMzItNS4xNiA1LjE4NCAwIC40MTEuMDUuODEuMTM0IDEuMTg0QTE0LjczNSAxNC43MzUgMCAwMTMuNjI1IDUuNzg4YTUuMTI4IDUuMTI4IDAgMDAtLjcgMi41OThjMCAxLjguOTA1IDMuMzk1IDIuMzA3IDQuMzAyLS44NTggMC0xLjY1NS0uMjQyLTIuMzU2LS42MDV2LjAzN2E1LjE4OCA1LjE4OCAwIDAwNC4xNTcgNS4wODcgNS4xIDUuMSAwIDAxLTIuMzMzLjA4NCA1LjE3MiA1LjE3MiAwIDAwNC44MzQgMy42MDEgMTAuMjk2IDEwLjI5NiAwIDAxLTYuNDQgMi4yMjRjLS40MTEgMC0uODIyLS4wMjUtMS4yMzMtLjA3M2ExNC42NzUgMTQuNjc1IDAgMDA3Ljk1IDIuMzMyYzkuNTIyIDAgMTQuNzU0LTcuOTAyIDE0Ljc1NC0xNC43NTQgMC0uMjMgMC0uNDQ3LS4wMTItLjY3NkExMC4zNTkgMTAuMzU5IDAgMDAyNy4xNCA3LjI1elwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdUd2l0dGVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnVmVjdG9yKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjggMjhcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMy45ODggOS4xMzhoLTEuNzEzdi0yLjYxQzIyLjI3NSAyLjkyMyAxOC40MzcgMCAxMy43MDggMCA4Ljk3NyAwIDUuMTQgMi45MjQgNS4xNCA2LjUyN3YyLjYxMUgzLjQyN0MxLjU0MiA5LjEzOCAwIDEwLjMxMyAwIDExLjc1djEzLjA1NWMwIDEuNDM2IDEuNTQyIDIuNjExIDMuNDI3IDIuNjExaDIwLjU2MWMxLjg4NSAwIDMuNDI3LTEuMTc1IDMuNDI3LTIuNjExVjExLjc0OWMwLTEuNDM2LTEuNTQyLTIuNjEtMy40MjctMi42MXptLTE1LjQyLTIuNjFjMC0yLjE2OCAyLjI5NS0zLjkxNyA1LjE0LTMuOTE3IDIuODQ0IDAgNS4xNCAxLjc1IDUuMTQgMy45MTZ2Mi42MTFIOC41Njh2LTIuNjF6bTE1LjQyIDE4LjI3NkgzLjQyN1YxMS43NDloMjAuNTYxdjEzLjA1NXptLTEwLjI4LTMuOTE2YzEuODg0IDAgMy40MjYtMS4xNzUgMy40MjYtMi42MTEgMC0xLjQzNi0xLjU0Mi0yLjYxMS0zLjQyNy0yLjYxMS0xLjg4NCAwLTMuNDI2IDEuMTc1LTMuNDI2IDIuNjEgMCAxLjQzNyAxLjU0MiAyLjYxMiAzLjQyNiAyLjYxMnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzLjk4OCA5LjEzOGgtMS43MTN2LTIuNjFDMjIuMjc1IDIuOTIzIDE4LjQzNyAwIDEzLjcwOCAwIDguOTc3IDAgNS4xNCAyLjkyNCA1LjE0IDYuNTI3djIuNjExSDMuNDI3QzEuNTQyIDkuMTM4IDAgMTAuMzEzIDAgMTEuNzV2MTMuMDU1YzAgMS40MzYgMS41NDIgMi42MTEgMy40MjcgMi42MTFoMjAuNTYxYzEuODg1IDAgMy40MjctMS4xNzUgMy40MjctMi42MTFWMTEuNzQ5YzAtMS40MzYtMS41NDItMi42MS0zLjQyNy0yLjYxem0tMTUuNDItMi42MWMwLTIuMTY4IDIuMjk1LTMuOTE3IDUuMTQtMy45MTcgMi44NDQgMCA1LjE0IDEuNzUgNS4xNCAzLjkxNnYyLjYxMUg4LjU2OHYtMi42MXptMTUuNDIgMTguMjc2SDMuNDI3VjExLjc0OWgyMC41NjF2MTMuMDU1em0tMTAuMjgtMy45MTZjMS44ODQgMCAzLjQyNi0xLjE3NSAzLjQyNi0yLjYxMSAwLTEuNDM2LTEuNTQyLTIuNjExLTMuNDI3LTIuNjExLTEuODg0IDAtMy40MjYgMS4xNzUtMy40MjYgMi42MSAwIDEuNDM3IDEuNTQyIDIuNjEyIDMuNDI2IDIuNjEyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdWZWN0b3JcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdZb3V0dWJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkgMjlcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMi4wODMgMTguMTI1bDYuMjcyLTMuNjI1LTYuMjcyLTMuNjI1djcuMjV6bTEzLjk2OS05LjQ2MWMuMTU3LjU2OC4yNjUgMS4zMjkuMzM4IDIuMjk2LjA4NC45NjYuMTIgMS44LjEyIDIuNTI1bC4wNzMgMS4wMTVjMCAyLjY0Ni0uMTkzIDQuNTkyLS41MzEgNS44MzYtLjMwMiAxLjA4OC0xLjAwMyAxLjc4OS0yLjA5IDIuMDktLjU2OS4xNTgtMS42MDguMjY3LTMuMjAzLjMzOS0xLjU3LjA4NC0zLjAwOS4xMi00LjMzOC4xMmwtMS45MjEuMDczYy01LjA2MyAwLTguMjE3LS4xOTMtOS40NjEtLjUzMS0xLjA4OC0uMzAyLTEuNzg5LTEuMDAzLTIuMDktMi4wOS0uMTU4LS41NjktLjI2Ny0xLjMzLS4zMzktMi4yOTctLjA4NS0uOTY2LS4xMi0xLjgtLjEyLTIuNTI1TDIuNDE2IDE0LjVjMC0yLjY0Ni4xOTMtNC41OTIuNTMxLTUuODM2LjMwMi0xLjA4OCAxLjAwMy0xLjc4OSAyLjA5LTIuMDkuNTY5LS4xNTggMS42MDgtLjI2NyAzLjIwMy0uMzM5IDEuNTctLjA4NSAzLjAwOC0uMTIgNC4zMzgtLjEybDEuOTIxLS4wNzNjNS4wNjMgMCA4LjIxNy4xOTMgOS40NjEuNTMxIDEuMDg4LjMwMiAxLjc4OSAxLjAwMyAyLjA5IDIuMDl6XCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1lvdXR1YmVcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tTcXVhcmUgfSBmcm9tICcuL0NoZWNrU3F1YXJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXNjb3JkIH0gZnJvbSAnLi9EaXNjb3JkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wRG93bsSwY29uIH0gZnJvbSAnLi9Ecm9wRG93bsSwY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wRG93biB9IGZyb20gJy4vRHJvcERvd24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV0aExvZ28gfSBmcm9tICcuL0V0aExvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmluZ2VycHJpbnQgfSBmcm9tICcuL0ZpbmdlcnByaW50J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIb21lcGFnZU9wdGlvbiB9IGZyb20gJy4vSG9tZXBhZ2VPcHRpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIMSwbnN0YWdyYW0gfSBmcm9tICcuL8SwbnN0YWdyYW0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtkbiB9IGZyb20gJy4vTGlua2RuJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWlsIH0gZnJvbSAnLi9NYWlsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZWRpYSB9IGZyb20gJy4vTWVkaWEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFEYXRhIH0gZnJvbSAnLi9NZXRhRGF0YSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlbnNlYUxvZ28gfSBmcm9tICcuL09wZW5zZWFMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBRckNvZGUgfSBmcm9tICcuL1FyQ29kZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmFyaWJsZUxvZ28gfSBmcm9tICcuL1JhcmlibGVMb2dvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTYXZpbmdzUGlnIH0gZnJvbSAnLi9TYXZpbmdzUGlnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbWFydENvbnRyYWN0xLBjb24gfSBmcm9tICcuL1NtYXJ0Q29udHJhY3TEsGNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIFlvdXR1YmUgfSBmcm9tICcuL1lvdXR1YmUnIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z8SwbnN0YWdyYW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyOSAyOVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTkuNDI1IDIuNDE3aDEwLjE1YTcuMDEzIDcuMDEzIDAgMDE3LjAwOCA3LjAwOHYxMC4xNWE3LjAwOCA3LjAwOCAwIDAxLTcuMDA4IDcuMDA4SDkuNDI1YTcuMDEzIDcuMDEzIDAgMDEtNy4wMDgtNy4wMDhWOS40MjVhNy4wMDggNy4wMDggMCAwMTcuMDA4LTcuMDA4em0tLjI0MiAyLjQxNmE0LjM1IDQuMzUgMCAwMC00LjM1IDQuMzV2MTAuNjM0YTQuMzQ3IDQuMzQ3IDAgMDA0LjM1IDQuMzVoMTAuNjM0YTQuMzUgNC4zNSAwIDAwNC4zNS00LjM1VjkuMTgzYTQuMzQ3IDQuMzQ3IDAgMDAtNC4zNS00LjM1SDkuMTgzem0xMS42NiAxLjgxM2ExLjUxIDEuNTEgMCAxMTAgMy4wMiAxLjUxIDEuNTEgMCAwMTAtMy4wMnpNMTQuNSA4LjQ1OGE2LjA0MiA2LjA0MiAwIDExMCAxMi4wODQgNi4wNDIgNi4wNDIgMCAwMTAtMTIuMDg0em0wIDIuNDE3YTMuNjI1IDMuNjI1IDAgMTAwIDcuMjUgMy42MjUgMy42MjUgMCAwMDAtNy4yNXpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnxLBuc3RhZ3JhbVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9pbmRleCdcclxuaW1wb3J0IEhlYWRUaXRsZSBmcm9tIFwiLi4vLi4vdGV4dC9oZWFkLXRpdGxlXCI7XHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSBcIi4uLy4uL3RleHQvdGV4dC10aXRsZVwiO1xyXG5cclxuZnVuY3Rpb24gTmZ0U3RhbmRhcmRzKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdG9yIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5tYWluSGVhZGVyfSBib2xkPk5GVCBDb21tdW5pdHkgU3RhbmRhcmRzIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIGJsb2NrY2hhaW4gcmVjb3JkcyBzdWNoIGFzIE5GVHMgYXJlIG5lYXJseSBpbXBvc3NpYmxlIHRvIGZvcmdlLCB0aGVyZSBhcmUgbWFueSBwcm9wZXJ0aWVzIG9mIE5GVHMgdGhhdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaWx5IG1ha2UgdGhlbSBjb25mdXNpbmcgYW5kIG9wZW4gZm9yIG1pc2ludGVycHJldGF0aW9uLiBXaXRob3V0IHN0YW5kYXJkcywgdGhlIGluZHVzdHJ5IGlzIG9wZW4gdG8gYWJ1c2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHRlY2hub2xvZ3kgd2hpY2ggY2FuIGxlYWQgdG8gY29uZnVzaW9uIGFuZCBtaXN0cnVzdC4gSW4gb3JkZXIgZm9yIHRoZSB0ZWNobm9sb2d5IHRvIGVzdGFibGlzaCBpdHMgdXNlZnVsbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgdmFsdWUsIHN0YW5kYXJkcyBoYXZlIGJlZW4gY3JlYXRlZCBieSBPd25lcmZ5IHRvIHByb3RlY3QgYm90aCB0aGUgY3JlYXRvcnMgYW5kIGNvbnN1bWVycyBvZiBORlRzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIGNvbGxhYm9yYXRlIG9uIE5GVCBzdGFuZGFyZHMsIGluZHVzdHJ5IGxlYWRlcnMgYXJlIGludml0ZWQgdG8gam9pbiB3aXRoIE93bmVyZnkgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHAgYnVpbGQgdGhlIE5GVCBTdGFuZGFyZHMgQ29tbXVuaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT3duZXJmeSBoYXMgaWRlbnRpZmllZCBzaXggY29tbW9uIE5GVCBwcm9ibGVtcywgYmVzdCBwcmFjdGljZXMsIGFuZCBxdWVzdGlvbnMgeW91IHNob3VsZCBhc2sgYmVmb3JlIG1pbnRpbmcgYW4gTkZULlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMucHJvYmxlbXN9IGJvbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvYmxlbSAxLiBObyBQdWJsaWNseSBBdmFpbGFibGUgUHJvb2Ygb2YgRGF0YSBJbnRlZ3JpdHlcclxuICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuYXNrc30gYm9sZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2h5IGlzIHRoaXMgYSBwcm9ibGVtIGluIHRlcm1zIG9mIHVzZWZ1bG5lc3MgYW5kIHZhbHVlP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNyZWF0b3JzOjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdG9ycyBtaWdodCByZWxlYXNlIGFuIE5GVCBhbmQgdGhlbiB0aGUgcGxhdGZvcm0gY2hhbmdlcyB0aGUgbWV0YWRhdGEgdXJsIG9yIHN0b3BzIHNlcnZpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciBjb250ZW50LiBUaGlzIHdvdWxkIGRldmFsdWUgdGhlIE5GVC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+Q29uc3VtZXJzIDo8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGFsc28gY2hlY2sgdG8gc2VlIHRoYXQgYSBwbGF0Zm9ybSBzYXZlcyBtZXRhZGF0YSBzdWNoIGFzIGEgZGlnaXRhbCBzaWduYXR1cmUgb2YgdGhlIGRhdGEgb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VzIElQRlMgb3IgYm90aCwgb24gdGhlIGJsb2NrY2hhaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFza3N9IGJvbGQ+V2hhdCBzaG91bGQgeW91IGRvIHRvIGNoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIGNvdmVyZWQ/PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+Q3JlYXRvcnMgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCBjaGVjayB0byBzZWUgdGhhdCBhIHBsYXRmb3JtIHNhdmVzIG1ldGFkYXRhIHN1Y2ggYXMgYSBkaWdpdGFsIHNpZ25hdHVyZSBvZiB0aGUgZGF0YSAoaGFzaCkgb3IgdXNlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElQRlMgb3IgYm90aCwgb24gdGhlIGJsb2NrY2hhaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFueSBORlRzIGFyZSBwdXJjaGFzZWQgYW5kIHRoZXJlIGlzIG5vIHByb29mIG9mIHRoZSBkYXRhIGludGVncml0eS4gTW9zdCBORlRzIHRvZGF5IGhhdmUgYmVlbiBjcmVhdGVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3JkaW5nIHRvIHRoZSBFUkMtNzIxIGFuZCBFUkMtMTE1NSBzdGFuZGFyZHMuIFdoaWxlIG91dGxpbmluZyB0aGUgYmFyZSBtaW5pbXVtIGZ1bmN0aW9uYWxpdHkgb2Ygbm9uLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuZ2libGUgYmxvY2tjaGFpbiB0b2tlbnMsIHRoZXNlIHN0YW5kYXJkcyBvbWl0IGVzc2VudGlhbCBkYXRhIG5lY2Vzc2FyeSB0byBjcmVhdGUgYSBsaW5rIGJldHdlZW4gdGhlIHRva2VucyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1zZWx2ZXMgYW5kIHRoZSBkaWdpdGFsIGFydCwgbXVzaWMsIG9yIG90aGVyIHByb3BlcnR5LiBXaXRob3V0IHRoaXMgZXNzZW50aWFsIGRhdGEgaXQgaXMgaW1wb3NzaWJsZSB0byBrbm93LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXQgZXh0ZXJuYWwgaW5mb3JtYXRpb24sIHdoZXRoZXIgb25lIHRva2VuIHJlcHJlc2VudHMgZm9yIGV4YW1wbGUgYSBwYWludGluZywgYW5kIGFub3RoZXIgcmVwcmVzZW50cyBhIHdyaXR0ZW4gZG9jdW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHRoZSB2YXN0IG1ham9yaXR5IG9mIE5GVHMgdG9kYXkgdGhlIGV4dGVybmFsIGRhdGEgdGhhdCBkZWZpbmVzIHdoYXQgdGhlIHRva2VuIGlzIHN1cHBvc2VkIHRvIHJlcHJlc2VudCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkIG9uIHRoZSBibG9ja2NoYWluIG9ubHkgYXMgYSBjZW50cmFsaXplZCB3ZWIgbGluaywgc3VjaCBhcyB3d3cubXl0b2tlbnNpdGUuY29tL3Rva2VuLW1ldGEtZGF0YS8xMC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXZlcmFsIHByb2JsZW1zIGNhbiBvY2N1ciB3aXRoIHRoaXMgbWV0aG9kLiBUaGUgd2Vic2l0ZSBjYW4gZ28gb2ZmbGluZS4gVGhlIHNpdGUgb3duZXIgY291bGQgc3RvcCBwYXlpbmcgdGhlaXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWxsIG9yIHRoZSB3ZWJzaXRlIGNvdWxkIHJldHVybiBhbiBlcnJvci4gQW5vdGhlciBwcm9ibGVtIGlzIGEgbWFsaWNpb3VzIHRva2VuIHNpdGUgY291bGQgY2hhbmdlIHRoZSB0b2tlbi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWQgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBVUkwgZnJvbSBkYXkgdG8gZGF5LiBTaW5jZSB0aGUgZGF0YSBpcyBub3Qgb24gdGhlIGJsb2NrY2hhaW4gdGhlcmUgaXMgbm8gZ3VhcmFudGVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGluZm9ybWF0aW9uIHRoYXQgZGVmaW5lcyB0aGUgTkZUIHJlbWFpbnMgdGhlIHNhbWUgb3ZlciB0aW1lLiBBbnkgTkZUcyBjcmVhdGVkIHRoaXMgaW5mZXJpb3Igd2F5IHdvdWxkIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3NzaWJsZSB0byByZWx5IHVwb24gZm9yIHByb3ZlbmFuY2UsIGxlZ2FsIGV2aWRlbmNlLCBvciBmaW5hbmNpYWwgcHVycG9zZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFza3N9IGJvbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYXNoIERhdGEgaXMgb24gdGhlIEJsb2NrY2hhaW4gVG8gVmFsaWRhdGUgRGF0YSBDb25zaXN0ZW5jeSBIb3cgY2FuIHlvdSBtYWtlIHN1cmU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGVhc2llc3Qgd2F5IHRvIGVuc3VyZSB0aGF0IGxpbmVkIGRhdGEgZG9lcyBub3QgY2hhbmdlIG92ZXIgdGltZSBpcyB0byBtYWtlIHVzZSBvZiB0aGUgSVBGUy4gSVBGUyBsaW5rcyBhcmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyYW50ZWVkIHRvIHJldHVybiB0aGUgc2FtZSBjb250ZW50IHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgdGhleSBhcmUgc2VydmVkIGZyb20sIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBkaXJlY3RvcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rcywgd2hpY2ggbWF5IGhhdmUgbW9kaWZpZWQgY29udGVudC4gSWYgYW4gSVBGUyBsaW5rIGlzIHVzZWQgZm9yIHRoZSBtZXRhZGF0YSB0aGVuIGl0IGNhbiBiZSBhc3N1cmVkIHRvIG5vdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSBvdmVyIHRpbWUuIEhvd2V2ZXIsIHRoaXMgZG9lcyBub3QgYWNjb3VudCBmb3IgdGhlIGludGVncml0eSBvZiB0aGUgaW1hZ2UuIEFuIGltYWdlIGxpbmsgaXMgZW1iZWRkZWQgaW4gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEgcmV0dXJuZWQgYnkgdGhlIG1ldGFkYXRhIGxpbmsuIElmIHRoZSBpbWFnZSBsaW5rIGlzIGEgbm9uLUlQRlMgbGluayB0aGVuIHRoZSBpbWFnZSBjYW4gc3RpbGwgYmUgY2hhbmdlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXIuIEluIG9yZGVyIHRvIGd1YXJhbnRlZSB0aGUgaW1hZ2UgYWxzbyBkb2VzIG5vdCBjaGFuZ2UsIGl04oCZcyBsaW5rIG11c3QgYWxzbyBiZSBJUEZTLCBvciB0aGUgZGlnaXRhbCBzaWduYXR1cmUgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW1hZ2UgKGhhc2gpIG11c3QgYWxzbyBiZSBzdG9yZWQgb24gdGhlIGJsb2NrY2hhaW4uIElmIGJvdGggdGhlIG1ldGFkYXRhIGlzIHN0b3JlZCBhcyBhbiBJUEZTIGxpbmsgYW5kIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIGlzIHNhdmVkIGluIHRoZSBibG9ja2NoYWluIGJvdGggbWF5IGJlIGV2YWx1YXRlZCBpbmRlcGVuZGVudGx5LCB3aGljaCBoYXMgZ3JlYXRlciBpbnRlZ3JpdHkgdGhhbiB1c2luZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZSBtZXRob2QgYWxvbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPlByb2JsZW1zIHdpdGggSVBGUy4gPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuIElQRlMgbGluayB3aWxsIHN0YXkgbGl2ZSBhbmQgYWN0aXZlIGFzIGxvbmcgYXMgYSBzZXJ2ZXIgc29tZXdoZXJlIGluIHRoZSB3b3JsZCBtYWludGFpbnMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGRhdGEuIFRoaXMgcmVxdWlyZXMgYSBjb21taXRtZW50IGJ5IGEgY2VudHJhbCBlbnRpdHkgb2YgcGlubmluZyBzZXJ2aWNlIHN1Y2ggYXMgUGluYXRhLmNsb3VkLiBJZiB0aGlzIGRhdGEgd2VyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHN0b3AgYmVpbmcgc2VydmVkIHRoZSBkYXRhIHdvdWxkIG5vIGxvbmdlciBiZSBhdmFpbGFiZSBvbiBJUEZTLiBBbnlvbmUgY2FuIGNob29zZSBwaWNrIHVwIGFuZCBzZXJ2ZSB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLCBidXQgaWYgbm8gcGFydHkgaXMgYXZhaWxhYmxlIHRvIHNlcnZlIHRoZSBkYXRhIGl0IG1heSBiZSBsb3N0IGZvcmV2ZXIuIFRoaXMgaXMgd2h5IHRoZSBhYnNvbHV0ZSBzYWZlc3QgcGxhY2UgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSBkYXRhLCBzdWNoIGFzIGFuIGltYWdlIGhhc2ggaXMgb24gdGhlIGJsb2NrY2hhaW4gaXRzZWxmLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnByb2JsZW1zfSBib2xkPlByb2JsZW0gMi4gQ3JlYXRvcnMgRG8gTm90IFVzZSBBZGRyZXNzZXMgQ29uc2lzdGVudGx5PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuYXNrc30gYm9sZD5XaHkgaXMgdGhpcyBhIHByb2JsZW0/PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNyZWF0b3JzOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIGNyZWF0b3JzIGRvbuKAmXQgdXNlIHRoZSBzYW1lIGFkZHJlc3MgdGhlaXIgY3VzdG9tZXJzIHdpbGwgYmUgY29uZnVzZWQgYW5kIGNvdW50ZXJmZWl0ZXJzIHdpbGwgYmUgYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBtb3JlIGVhc2lseSBmb3JnZSBORlRzIGluIHRoZWlyIG5hbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+Q29uc3VtZXJzOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bWVycyBjYW7igJl0IGJlIHN1cmUgdGhleSBhcmUgcmVjZWl2aW5nIHdvcmsgZnJvbSB0aGUgc2FtZSBjcmVhdG9ycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hc2tzfSBib2xkPldoYXQgc2hvdWxkIHlvdSBkbyB0byBjaGVjayB0byBzZWUgaWYgdGhpcyBpcyBjb3ZlcmVkPzwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5DcmVhdG9ycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCB0cnkgdG8gdXNlIHRoZSBzYW1lIEV0aGVyZXVtIG9yIG90aGVyIHBsYXRmb3JtIGFkZHJlc3Mgb24gbXVsdGlwbGUgcGxhdGZvcm1zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNvbnN1bWVycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCBjaGVjayB0aGF0IGEgcGxhdGZvcm0gaGFzIHZlcmlmaWVkIGEgY3JlYXRvciBvciBzaG91bGQgY2hlY2sgYWdhaW5zdCBhIDNyZCBwYXJ0eSBsaXN0IG9mIGtub3duIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3IgYWRkcmVzc2VzLiBUaGUgbGlzdCBjdXJyZW50bHkgZG9lc27igJl0IGV4aXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBlYWNoIE5GVCB0aGVyZSBpcyBvbmUgc291cmNlIGFkZHJlc3MgdGhhdCwgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uLCBpcyBjb25zaWRlcmVkIHRvIGJlIHRoZSBjcmVhdG9yIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBORlQuIFVwIHVudGlsIG5vdyB0aGVyZSBoYXMgYmVlbiBhIGRpc3BhcmF0ZSBlZmZvcnQgdG8gbGluayBjcmVhdG9yIEV0aGVyZXVtIGFkZHJlc3NlcyB0byB0aGUgY3JlYXRvcnMgdGhleSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmUgaW50ZW5kZWQgdG8gYmVsb25nIHRvLiBCZWNhdXNlIG9mIHRoaXMgZmxhdyBvbmUgY3JlYXRvciBjYW4gcmVsZWFzZSBORlRzIHVuZGVyIHNldmVyYWwgRXRoZXJldW0gYWRkcmVzc2VzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpdCBpcyB1cCB0byB0aGUgY29tbXVuaXR5IHRvIGRpdmluZSB3aGV0aGVyIE5GVHMgYm90aCBpbiBmYWN0IGJlbG9uZyB0byB0aGUgc2FtZSBjcmVhdG9yLiBUaGVyZSBpcyBubyByZWxpYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2Ugb2YgaW5mb3JtYXRpb24gdG8gZGVzY3JpYmUgd2hpY2ggYWRkcmVzc2VzIGJlbG9uZyB0byB3aGljaCBjcmVhdG9ycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBmdXJ0aGVyIGNvbXBvdW5kIHRoaXMgcHJvYmxlbSBzb21ldGltZXMgd2UgaGF2ZSBwdWJsaXNoZXJzIHdobyByZWxlYXNlIHNldmVyYWwgYXJ0aXN0cyBmcm9tIHRoZSBzYW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuIEluIHRoaXMgc2l0dWF0aW9uIHRoZXJlIGlzIG5vIGxpbmsgdG8gdGhlIG9yaWdpbmFsIGNyZWF0b3IgYW5kIGl04oCZcyB1cCB0byB0aGUgY29tbXVuaXR5IHRvIGtlZXAgdHJhY2ssIOKAnGFzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbiBrbm93bGVkZ2XigJ0sIHdoaWNoIHB1Ymxpc2hlciBhZGRyZXNzZXMgdGhlaXIgY29udGVudCBjcmVhdG9ycyB0ZW5kIHRvIHVzZS4gVGhpcyBhbHNvIG9wZW5zIHRoZSBkb29yIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm90aGVyIGtpbmQgb2YgaGFjaywgd2hpY2ggaXMgdGhlIOKAmHNsZWVwIG1pbnTigJkuIEEgc2xlZXAgbWludCBpcyBhIG1pbnRpbmcgdGhhdCBhcHBlYXJzIHRvIGNvbWUgZnJvbSBhbiBhcnRpc3QgYnV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcyBhY3R1YWxseSBtaW50ZWQgYnkgYW5vdGhlciBwYXJ0eS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5CZXN0IFByYWN0aWNlOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0b3JzIFVzZSBUaGUgU2FtZSBBZGRyZXNzZXMgdG8gQ3JlYXRlIE5GVHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybXMgc2hvdWxkIG1haW50YWluIGxpc3RzIG9mIGNyZWF0b3JzIGFuZCBpZiBwb3NzaWJsZSBjcm9zcyBjaGVjayB0aG9zZSBsaXN0cyBiZXR3ZWVuIGVhY2ggb3RoZXIuIFRoaXMgd2lsbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlIGl0IGVhc2llciB0byBpZGVudGlmeSBjcmVhdG9ycyBmYWxzZWx5IGNsYWltaW5nIG93bmVyc2hpcC4gQ3JlYXRvcnMgc2hvdWxkIHJlbGVhc2UgY29udGVudCBjb25zaXN0ZW50bHkgdXNpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgZmV3IHB1YmxpY2x5IGtub3duIGJsb2NrY2hhaW4gYWRkcmVzc2VzIGFzIHBvc3NpYmxlIGFuZCBhbHNvIHRyeSB0byBhdm9pZCBwdWJsaXNoZXJzIHRoYXQgZG8gbm90IG1pbnQgdGhlaXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yayBvbiB0byBhIHNvbGUgZGVkaWNhdGVkIGFkZHJlc3MuIElmIG11bHRpcGxlIHBsYXRmb3JtcyBhcmUgdXNlZCBpdOKAmXMgYmVzdCB0byB0cnkgYW5kIHVzZSB0aGUgc2FtZSBhZGRyZXNzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjcm9zcyBlYWNoIHBsYXRmb3JtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnByb2JsZW1zfSBib2xkPlByb2JsZW0gMy4gRmFsc2UgUHJvdmVuYW5jZTwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hc2tzfSBib2xkPldoeSBpcyB0aGlzIGEgcHJvYmxlbT88L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNyZWF0b3JzOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW4gYmUgZWFzaWx5IGNvcGllZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNvbnN1bWVyczogPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bGQgYnV5IE5GVHMgZnJvbSBhIGNyZWF0b3IgY2xhaW1pbmcgdG8gYmUgc29tZW9uZSBlbHNlLCBtYWtpbmcgdGhlIE5GVCB3b3J0aCBsZXNzIG9yIG5vdGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFza3N9IGJvbGQ+V2hhdCBzaG91bGQgeW91IGRvIHRvIGNoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIGNvdmVyZWQ/PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT5DcmVhdG9ycyBzaG91bGQgdHJ5IHRvIGJlIGFkZGVkIHRvIGEgbGlzdCBvZiB2ZXJpZmllZCBjcmVhdG9ycyBlaXRoZXIgb24gYSBwbGF0Zm9ybSBvciBieSBhIDNyZCBwYXJ0eSBzZXJ2aWNlLjwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+Q29uc3VtZXJzIHNob3VsZCBjaGVjayB0aGF0IGFuIE5GVCB3YXMgY3JlYXRlZCBieSBhbiBvZmZpY2lhbCBhZGRyZXNzIG9yIGNyZWF0b3IgdGhhdCBpcyB2ZXJpZmllZCBieSBhIHBsYXRmb3JtLjwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gZGF0ZSB0aGVyZSBpcyBub3RoaW5nIHByZXZlbnRpbmcgYW55b25lIGZyb20gdXBsb2FkaW5nIGFueSBwaWVjZSBvZiBhcnQgb3Igc291cmNlIG1hdGVyaWFsIHRvIHRoZSBpbnRlcm5ldCBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmcgYW4gTkZUIHRoYXQgbGlua3MgdG8gaXQuIEFzIHN1Y2ggaXQgaXMgdXAgdG8gdGhlIGNvbW11bml0eSB0byBldmFsdWF0ZSBzb3VyY2UgbWF0ZXJpYWwgYXMgYmVzdCBhcyBpdCBjYW4gYW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZ5IHdoZW4gY29udGVudCBkb2VzIG5vdCBhcHBlYXIgdG8gYmVsb25nIHRvIHRoZSBjcmVhdG9yIG9mIHRoZSBORlQuIEZhbHNlIGNvbnRlbnQgY2FuIGxlYWQgbWFueSB0byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWxpZXZlIHRoYXQgYW4gTkZUIGlzIHRoZWlycyB0byBzZWxsIG9yIGV2ZW4gdG8gY29uZnVzZSB0aGUgbWFya2V0cGxhY2UgZW5vdWdoLCByZXN1bHRpbmcgaW4gaW5hYmlsaXR5IHRvIGlkZW50aWZ5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBvcmlnaW5hbCBzb3VyY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5CZXN0IFByYWN0aWNlOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybSBDcmVhdG9ycyBNb25pdG9yaW5nIHRoZSBDcmVhdG9ycyB0byBTY3JlZW4gT3V0IEJhZCBBY3RvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdOKAmXMgdmVyeSBkaWZmaWN1bHQgdG8gZXZhbHVhdGUgaWYgYSBnaXZlbiBjcmVhdG9yIGhhcyB0aGUgcmlnaHRzIHRvIHB1Ymxpc2ggdGhlIGNvbnRlbnQgdGhleSB1c2UgZm9yIE5GVHMuIEl04oCZcyB1cCB0byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1zIHRvIGhlbHAgdGhlIGNvbW11bml0eSBieSBpbmRpY2F0aW5nIGtub3duIHB1Ymxpc2hlcnMgYW5kIHB1Ymxpc2hlcnMgdGhhdCBtYXkgaGF2ZSBmYWxzZWx5IGlkZW50aWZpZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1zZWx2ZXMgaW4gdGhlIHBhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5wcm9ibGVtc30gYm9sZD5Qcm9ibGVtIDQuIFJ1ZyBQdWxsczwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hc2tzfSBib2xkPldoeSBpcyB0aGlzIGEgcHJvYmxlbT88L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNyZWF0b3JzOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWdodCB0aGluayB0aGF0IGZlYXR1cmVzIG9mIHRoZWlyIE5GVCBhcmUgYWx3YXlzIHN0YWJsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNvbnN1bWVyczogPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlnaHQgYnV5IGFuIE5GVCBiZWxpZXZpbmcgdGhleSBoYXZlIGZ1bGwgcmlnaHRzIGFuZCBpdCB3aWxsIG5vdCBjaGFuZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFza3N9IGJvbGQ+V2hhdCBzaG91bGQgeW91IGRvIHRvIGNoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIGNvdmVyZWQ/PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5DcmVhdG9yczogPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGNoZWNrIHRoZSBzbWFydCBjb250cmFjdCBvciBoYXZlIGl0IHJldmlld2VkIGJ5IGFuIGV4cGVydCB0byBzZWUgaWYgdGhlIFVSTHMgY2FuIGJlIGNoYW5nZWQsIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QgY2FuIGJlIHBhdXNlZCBvciBvdGhlciAnYWRtaW5pc3RyYXRpdmUnIGZlYXR1cmVzIGV4aXN0IHRoYXQgdGhleSBhcmUgbm90IGF3YXJlIG9mLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+UHVyY2hhc2VycyA6IDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCBjaGVjayBhIHJldmlldyBvZiB0aGUgc21hcnQgY29udHJhY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VydGFpbiBmdW5jdGlvbmFsaXR5IGNhbiBiZSBidWlsdCBpbnRvIHNtYXJ0IGNvbnRyYWN0cyB0aGF0IGNhbiBmcmVlemUgdHJhbnNmZXJzLCB0cmFuc2ZlciB3aXRob3V0IG93bmVyIGNvbnNlbnQgb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgTkZULiBTb21ldGltZXMgdGhlc2UgZnVuY3Rpb25zIGFyZSBuZWNlc3NhcnkgZHVyaW5nIGFuIGVhcmx5IHNhbGUgcGhhc2UgdG8gZW51cmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlIGFyZSBubyBwcm9ibGVtcy4gU29tZXRpbWVzIHRoZXkgYXJlIG5lY2Vzc2FyeSBmb3Igc3BlY2lmaWMgcHJvamVjdCBmdW5jdGlvbmFsaXR5IGFuZCBtYWRlIGtub3duLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRpbWVzIHRoZSBpbnRlbnRpb24gaXMgdG8gcmVsZWFzZSBjb250cm9sLiBTb21ldGltZXMgdGhlIGNvbnRyb2xzIGFyZSBuZWZhcmlvdXMgYW5kIGluIHRoZXNlIGluc3RhbmNlcyBzbWFydCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QgY29kZSBpcyBwcm9iYWJseSBub3QgdmlzaWJsZSBvbiBldGhlcnNjYW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5CZXN0IFByYWN0aWNlOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbWFydCBjb250cmFjdCBzb3VyY2UgY29kZSBzaG91bGQgYmUgcHVibGlzaGVkIGFuZCBpZiBhZG1pbmlzdHJhdGl2ZSByaWdodHMgYXJlIGdyYW50ZWQgdGhleSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGJlIHJlbm91bmNlZCBhdCBzb21lIHBvaW50IHVubGVzcyBpdCBpcyBwdWJsaWNseSBwYXJ0IG9mIHRoZSBwbGFuIHRvIGFsd2F5cyBiZSB1bmRlciAzcmQgcGFydHkgY29udHJvbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBORlQgY3JlYXRvcnMgc2hvdWxkIGFsd2F5cyBwdWJsaXNoIHNvdXJjZSBjb2RlIGFuZCB0aGF0IGNvZGUgc2hvdWxkIGdyYW50IHVsdGltYXRlIHBvd2VyIHRvIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJzIG9mIHRoZSBORlRzLiBGdW5jdGlvbnMgbGlrZSBwYXVzaW5nLCBzZXRCYXNlVXJpLCBhbmQgYnVpbHQgaW4gdHJhbnNmZXIgYXBwcm92YWxzIGNyZWF0ZSBiYWNrIGRvb3JzIGFuZCBjb250cm9sIG92ZXIgbmZ0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLiBJZiB0aGVzZSBmdW5jdGlvbnMgYXJlIG5lY2Vzc2FyeSBpdCBzaG91bGQgYmUgZXhwbGFpbmVkIG9yIHRoZXJlIHNob3VsZCBiZSBhIHBsYW4gdG8gcmVub3VuY2UgdGhlc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluaXN0cmF0aXZlIHBvd2VycyB3aGVuIHRoZXkgYXJlIG5vIGxvbmdlciBuZWNlc3NhcnkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLnByb2JsZW1zfSBib2xkPlByb2JsZW0gNS4gUG9vciBTb3VyY2UgTWF0ZXJpYWwgLSBHZW5lcmF0aW9ucyBSZW1vdmVkIGZyb20gdGhlIE9yaWdpbmFsPC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFza3N9IGJvbGQ+V2h5IGlzIHRoaXMgYSBwcm9ibGVtPzwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+Q3JlYXRvcnMgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlnaHQgY3JlYXRlIGFuIE5GVCBidXQgaXQgaXMgbm90IHRoZSBxdWFsaXR5IGxldmVsIHRoZSBjdXN0b21lcnMgbmVlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNvbnN1bWVycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWdodCBidXkgYW4gTkZUIGJ1dCB0aGUgcXVhbGl0eSBpcyBub3Qgc3VpdGFibGUgZm9yIHRoZWlyIG5lZWRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hc2tzfT5XaGF0IHNob3VsZCB5b3UgZG8gdG8gY2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgY292ZXJlZD88L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNyZWF0b3JzIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gSWYgdGhlIE5GVCBpcyBkaWdpdGFsIG1lZGlhIHRoZW4gaXQgc2hvdWxkIGJlIHRoZSBoaWdoZXN0IHF1YWxpdHkgdmVyc2lvbiBvZiB0aGF0IG1lZGlhLiBJZiB0aGUgTkZUIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZXNlbnRzIHNvbWV0aGluZyBwaHlzaWNhbCB0aGVuIHRoZSBtZXRhZGF0YSBhbmQgZGVzY3JpcHRpb24gc2hvdWxkIGJlIHRoZSBiZXN0IHBvc3NpYmxlIGltYWdlIGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5QdXJjaGFzZXJzIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCByZXZpZXcgdGhlIHF1YWxpdHkgb2YgdGhlIE5GVC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBlbmRpbmcgb24gd2hhdCBhbiBORlQgaXMgaW50ZW5kZWQgdG8gcmVwcmVzZW50LCB0aGUgc291cmNlIG1hdGVyaWFsIG1heSBhZmZlY3QgaXRzIHZhbHVlLiBJZiBhbiBORlQgaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVuZGVkIHRvIHJlcHJlc2VudCBhcnQgdGhlbiB0aGUgaW1hZ2UgaW5jbHVkZWQgc2hvdWxkIGJlIGFzIGNsb3NlIHRvIHRoZSBvcmlnaW5hbCB3b3JrIGFzIGlzIHBvc3NpYmxlLiBJZiBhbiBORlQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIGludGVuZGVkIHRvIHJlcHJlc2VudCBhIHBoeXNpY2FsIHBhaW50aW5nIHRoZW4gdGhlIGluY2x1ZGVkIGltYWdlIHNob3VsZCBiZSBvZiBoaWdoIGVub3VnaCBxdWFsaXR5IHRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RpdmVseSBpZGVudGlmeSB0aGF0IHVuaXF1ZSBwYWludGluZy4gSWYgYW4gTkZUIGlzIGludGVuZGVkIHRvIHJlcHJlc2VudCBvcmlnaW5hbCBtdXNpYyB0aGVuIGEgdmVyc2lvbiBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljIHRoYXQgbW9zdCBjbG9zZWx5IHJlcHJlc2VudHMgdGhlIHBpZWNlIHNob3VsZCBiZSBsaW5rZWQgdG8uIFVsdGltYXRlbHkgYW4gTkZUIHJlcHJlc2VudHMgdGhlIG1lZGlhIGxpbmtlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYnkgdGhlIE5GVCBtb3JlIHNvIHRoYW4gYW55dGhpbmcgZWxzZS4gQSBjdXN0b21lciBjYW4gYnV5IGFuIE5GVCBiZWxpZXZpbmcgaXQgcmVwcmVzZW50cyBhbiBvcmlnaW5hbCB3b3JrIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnQsIGJ1dCBpZiB0aGUgaW1hZ2UgaXMgYSBkZXJpdmF0aXZlIHdvcmsgYW5kIGJldHRlciBzb3VyY2UgbWF0ZXJpYWwgZXhpc3RzIHRoZW4gYW4gTkZUIGJhc2VkIG9uIHRoZSBiZXR0ZXIgc291cmNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCB3aWxsIGFsd2F5cyBiZSBtb3JlIHJlcHJlc2VudGF0aXZlIG9mIHRoZSBzb3VyY2UgbWF0ZXJpYWwuIFdoaWxlIHRoZSBjb21tdW5pdHkgYWNjZXB0cyB0aGUgbW9zdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjdXJhdGUgc291cmNlIG1hdGVyaWFsIGFzIHRoZSBtb3N0IGF1dGhlbnRpYyBORlQsIHRoZXJlIGFyZSBubyBhY2NlcHRlZCBzdGFuZGFyZHMsIGxlYWRpbmcgdG8gY29uZnVzaW9uIGZyb20gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5GVCBjcmVhdG9ycyBhbmQgY29uc3VtZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+QmVzdCBQcmFjdGljZTogPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTkZUIGNyZWF0b3JzIHNob3VsZCB1c2Ugc291cmNlIG1hdGVyaWFsIHRoYXQgYmVzdCBhbmQgbW9zdCBhY2N1cmF0ZWx5IHJlcHJlc2VudHMgdGhlIG1lZGlhIG9yIHN1YmplY3QgdGhleSBhcmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRpbmcgdG8gZW1ib2R5LiBJZiBpdCBpcyBhbiBvcmlnaW5hbCBkaWdpdGFsIHdvcmsgdGhlbiB0aGUgaW50ZW5kZWQgd29yayByZWxlYXNlZCBieSB0aGUgYXJ0aXN0IHNob3VsZCBiZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBhcyB0aGUgc291cmNlIG1hdGVyaWFsLiBJZiBpdCBpcyBhIHBoeXNpY2FsIG9iamVjdCB0aGVuIGEgaGlnaC1yZXNvbHV0aW9uIHBob3RvZ3JhcGggZnJvbSBhbiBlbmNvbXBhc3NpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlIHNob3VsZCBiZSB1c2VkLiBJZiBpdCBpcyBhIHBpZWNlIG9mIG11c2ljIHRoZW4gYmVzdCBxdWFsaXR5IHJlY29yZGluZyBvciBvcmlnaW5hbCBzb3VyY2UgZmlsZSBzaG91bGQgYmUgdXNlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMucHJvYmxlbXN9IGJvbGQ+UHJvYmxlbSA2LiBMYWNrIG9mIEV4aXN0ZW5jZSBvZiB0aGUgVG9rZW4gKExhenkgTWludGluZyk8L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuYXNrc30gYm9sZD5XaHkgaXMgdGhpcyBhIHByb2JsZW0/PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5DcmVhdG9ycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWdodCB0aGluayB0aGV5IGhhdmUgY3JlYXRlZCBhbiBORlQgYnV0IHRoZSBwbGF0Zm9ybSBpcyBtaXNsZWFkaW5nIGFuZCBpdCBpcyBub3Qgb24gdGhlIGJsb2NrY2hhaW4uIFRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmVuYW5jZSBjYW4gYWxzbyBiZSBsb3N0IGlmIGl0IGlzIG9uIGEgc2hhcmVkIHNtYXJ0IGNvbnRyYWN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+Q29uc3VtZXJzIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZ2h0IGJ1eSBhbiBORlQgYW5kIGJlbGlldmUgdGhhdCB0aGUgTkZUIGFscmVhZHkgZXhpc3RzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hc2tzfSBib2xkPldoYXQgc2hvdWxkIHlvdSBkbyB0byBjaGVjayB0byBzZWUgaWYgdGhpcyBpcyBjb3ZlcmVkPzwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+PHNwYW4+Q3JlYXRvcnMgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGNoZWNrIHRoZSBtaW50aW5nIHBvbGljeSBvZiB0aGUgcGxhdGZvcm0gYW5kIGlmIHRoZXkgZXhwZWN0IGl0IHRvIGJlIG9uIHRoZSBibG9ja2NoYWluIHRoZXkgc2hvdWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWUgYW4gZXRoZXJzY2FuIHRyYW5zYWN0aW9uIGZvciBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNvbnN1bWVycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEFmdGVyIGEgQ29uc3VtZXIgYnV5cyBhbiBORlQgdGhleSBzaG91bGQgYmUgYWJsZSB0byBzZWUgYW4gZXRoZXJzY2FuIHRyYW5zYWN0aW9uIGZvciBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdOKAmXMgYmVjb21pbmcgaW5jcmVhc2luZ2x5IGNvbW1vbiB0byBub3QgaWRlbnRpZnkgd2hldGhlciBvciBub3QgYW4gTkZUIGV4aXN0cyBvbiB0aGUgYmxvY2tjaGFpbi4gRm9yIHNvbWUgTkZUIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9ycyB0aGlzIG1hdHRlciBpcyBpcnJlbGV2YW50IGJlY2F1c2UgaXQgb25seSBiZWNvbWVzIGltcG9ydGFudCBpZiB0aGUgTkZUIG5lZWRzIHRvIGJlIHRyYW5zZmVycmVkIHRvIGEgYnV5ZXIuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGJlY29tZXMgYSBwcm9ibGVtIHdoZW4gY3JlYXRvcnMgYmVsaWV2ZSB0aGV5IGFyZSBkb2N1bWVudGluZyB0aGUgZXhpc3RlbmNlIG9mIGNlcnRhaW4gY29udGVudCBvbiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrY2hhaW4sIGJ1dCBpbiBmYWN0IGFyZSBub3QuIEl0IGlzIG5vdCBhbHdheXMgbWFkZSBjbGVhciBieSBwbGF0Zm9ybSBwcm92aWRlcnMgd2hldGhlciB0aGVzZSB0b2tlbnMgaGF2ZSBiZWVuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW50ZWQgdG8gdGhlIGJsb2NrY2hhaW4gb3Igbm90LiBUaGVzZSB0b2tlbnMgY2FuIGdvIGJ5IHZhcmlvdXMgbmFtZXMgc3VjaCBhcyDigJhsYXp5IG1pbnRlZOKAmSBvciDigJhtYWdpYyBtaW50ZWTigJkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy4gQ3JlYXRvcnMgYW5kIGN1c3RvbWVycyBtYXkgbm90IGFsd2F5cyB1bmRlcnN0YW5kIHRoZXkgYXJlIG5vdCBkZWFsaW5nIHdpdGggYSBibG9ja2NoYWluIHByb2R1Y3QuIEEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuIHRoYXQgaXMgbm90IHlldCBvbiB0aGUgYmxvY2tjaGFpbiBkb2VzIG5vdCBoYXZlIHRoZSBhZGRlZCBhdXRoZW50aWNpdHkgYW5kIHVsdGltYXRlIHNlY3VyaXR5IHRoZSBibG9ja2NoYWluIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcy4gQWxzbywgc29tZXRpbWVzIHRoZSBtaW50IGlzIGZpcnN0IHNlbnQgdG8gdGhlIGJ1eWVyIGFuZCBpZiB0aGlzIGhhcHBlbnMgb24gYSBzaGFyZWQgc21hcnQgY29udHJhY3QgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92ZW5hbmNlIGlzIGxvc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5CZXN0IFByYWN0aWNlOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBzaG91bGQgYmUgbWFkZSB2ZXJ5IGNsZWFyIGJ5IHBsYXRmb3JtIHByb3ZpZGVycyB3aGVuIGFuIE5GVCBpcyBjcmVhdGVkLCB3aGV0aGVyIHRoYXQgaXMgYXQgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lIG9mIHNhbGUgb3Igc29tZSBvdGhlciB0aW1lLiBUaGlzIHdpbGwgYXZvaWQgY29uZnVzaW9uIGZyb20gY29udGVudCBjcmVhdG9ycyBhbmQgYWxsb3cgdGhlbSB0byBiZXR0ZXIgZGVmaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgdXRpbGl0eSBvZiB0aGVpciBORlQgY29sbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMucHJvYmxlbXN9IGJvbGQ+UHJvYmxlbSA3LiBQdWJsaXNoZWQgU291cmNlIENvZGUgYW5kIFVwZ3JhZGVhYmxlIFNtYXJ0IENvbnRyYWN0czwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5hc2tzfSBib2xkPldoeSBpcyB0aGlzIGEgcHJvYmxlbT88L0hlYWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNyZWF0b3JzIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pZ2h0IHRoaW5rIHRoZWlyIE5GVCBzbWFydCBjb250cmFjdCB3aWxsIG5ldmVyIGNoYW5nZSBhbmQgYWx3YXlzIGZ1bmN0aW9uIHRoZSBzYW1lIHdheS4gSWYgYSBjb250cmFjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgdXBncmFkZWFibGUgYWxtb3N0IGV2ZXJ5dGhpbmcgYWJvdXQgdGhlIE5GVCBjb250cmFjdCBtYXkgY2hhbmdlLCBpbmNsdWRpbmcgd2hvIGhhcyBwZXJtaXNzaW9uIHRvIHRyYW5zZmVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgdG9rZW4uIElmIHRoZXJlIGlzIG5vIHNvdXJjZSBjb2RlIGl0J3MgaW1wb3NzaWJsZSB0byBrbm93IGlmIHRoZXJlIGFyZSBzZWNyZXQgZnVuY3Rpb25zIG9yIGlmIHRoZSBjb250cmFjdCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBncmFkZWJhbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5Db25zdW1lcnMgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5IGV4cGVjdCB0aGVpciBORlRzIHRvIGJlaGF2ZSB0aGUgc2FtZSB3YXkgaW5kZWZpbml0ZWx5LiBJZiBhIGNvbnRyYWN0IGlzIHVwZ3JhZGVkIHRoZSBiYXNpYyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25hbGl0eSBvZiB0aGUgY29udHJhY3QgaW5jbHVkaW5nIHRoZSBhYmlsaXR5IHRvIHRyYW5zZmVyIG1heSBjaGFuZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZFRpdGxlIGNsYXNzTmFtZT17c3R5bGVzLmFza3N9IGJvbGQ+V2hhdCBzaG91bGQgeW91IGRvIHRvIGNoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIGNvdmVyZWQ/PC9IZWFkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZT48c3Bhbj5DcmVhdG9ycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGQgY2hlY2sgaWYgdGhlIHNvdXJjZSBjb2RlIGlzIHB1Ymxpc2hlZCBhbmQga2V5IHdvcmRzIGxpa2UgXCJVcGdyYWRlYWJpbGl0eVByb3h5XCIgYW5kIFwiUHJveHlcIiBhcmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmcgZnJvbSB0aGUgc291cmNlIGNvZGUuIFZpc2l0IHRoZSBjb250cmFjdCdzIHBhZ2Ugb24gZXRoZXJzY2FuIGFuZCBjaGVjayB0aGUgXCJjb250cmFjdFwiIHRhYiBhbmQgdGhlbiBcImNvZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLiBUaGVyZSBzaG91bGQgYmUgdmlzaWJsZSBzb3VyY2UgY29kZSBhbmQgbm90IHJhbmRvbSBzdHJpbmdzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkNvbnN1bWVycyA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGQgY2hlY2sgaWYgdGhlIHNvdXJjZSBjb2RlIGlzIHB1Ymxpc2hlZCBhbmQga2V5IHdvcmRzIGxpa2UgXCJVcGdyYWRlYWJpbGl0eVByb3h5XCIgYW5kIFwiUHJveHlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlIG1pc3NpbmcgZnJvbSB0aGUgc291cmNlIGNvZGUuIFZpc2l0IHRoZSBjb250cmFjdCdzIHBhZ2Ugb24gZXRoZXJzY2FuIGFuZCBjaGVjayB0aGUgXCJjb250cmFjdFwiIHRhYiBhbmQgdGhlbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCIgdGFiLiBUaGVyZSBzaG91bGQgYmUgdmlzaWJsZSBzb3VyY2UgY29kZSBhbmQgbm90IHJhbmRvbSBzdHJpbmdzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhvdXQgdmlzaWJsZSBzb3VyY2UgY29kZSBpdCdzIGltcG9zc2libGUgdG8gdGVsbCBpZiBhbiBORlQgY29uZm9ybXMgdG8gdGhlIE5GVCBzdGFuZGFyZHMgb3IgaWYgdGhlcmUgYXJlIGFueSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIG1heSBhZmZlY3QgdGhlIHdheSBpdCBmdW5jdGlvbnMuIEFuIHVwZ3JhZGVhYmxlIHNtYXJ0IGNvbnRyYWN0IG1ha2VzIGEgc21hcnQgY29udHJhY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW4gbW9yZSB2dWxuZXJhYmxlIHRvIG1hbGljaW91cyBhY3Rpdml0eS4gQSBjZW50cmFsIGJvZHkgZ292ZXJucyB3aGV0aGVyIHRoZSBjb2RlIG9mIHRoZSBjb250cmFjdCB3aWxsIGNoYW5nZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgY2VudHJhbCBib2R5IG1heSBjaGFuZ2UgY29yZSBmZWF0dXJlcyBvZiB0aGUgTkZUIG9yIGV2ZW4gYnJlYWsgdGhlIE5GVCBjb250cmFjdCBlbnRpcmVseS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPjxzcGFuPkJlc3QgUHJhY3RpY2U6IDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtcyBzaG91bGQgYXZvaWQgdXNpbmcgdXBncmFkZWFibGUgc21hcnQgY29udHJhY3RzIGZvciBORlRzIG9yIGRlY2VudHJhbCBhc3NldHMgdGhhdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VtZXJzIGJlbGlldmUgYXJlIHVuY2hhbmdpbmcgYW5kIHNhZmUgZnJvbSBhbnkgdGhpcmQgcGFydHkgb3IgZ292ZXJuaW5nIGJvZHkuIEFsbCBzb3VyY2UgY29kZSBmb3IgTkZUIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFydCBjb250cmFjdHMgc2hvdWxkIGJlIHB1Ymxpc2hlZCBvbiB0byBldGhlcnNjYW4gdXNpbmcgZXRoZXJzY2FuIHZlcmlmaWNhdGlvbiB0b29scyBmb3IgZnVsbCB0cmFuc3BhcmVuY3kgdXNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBvcmRlciBmb3IgTkZUcyB0byBtYWludGFpbiB2YWx1ZSB0aGVyZSBtdXN0IGJlIHN0YW5kYXJkcyBlbmZvcmNlZCBieSB0aGUgY29tbXVuaXR5LiBXZSBhcmUgY29tcG9zaW5nIHRoZXNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFuZGFyZHMgd2l0aCB0aGUgaW50ZW50aW9uIG9mIGNyZWF0aW5nIGEgY29sbGFib3JhdGlvbiBhcyBhIGNvbW11bml0eSB0byBidWlsZCBORlQgc3RhbmRhcmRzIHdlIGNhbiBhbGwgZm9sbG93IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBpbmNyZWFzZSB0aGUgdmFsdWUgYW5kIHVzZWZ1bG5lc3Mgb2YgTkZUcy4gSWYgeW914oCZZCBsaWtlIHRvIGpvaW4gdXMgcGxlYXNlIGNvbnRhY3QgdXMgaGVyZSB3aXRoIHRoZSBvcHRpb24gdG8gaGVscCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGQgb3VyIE5GVCBTdGFuZGFyZHMgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFRpdGxlPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmZ0U3RhbmRhcmRzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Jhc2UvaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQnV0dG9uICh7IGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuICg8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gXCIuLi90ZXh0L2hlYWQtdGl0bGVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTUVOVSA9IFtcclxuICAgIHsgICBcclxuICAgICAgICBrZXk6ICdwcml2YWN5UG9saWN5JyxcclxuICAgICAgICB0aXRsZTonUHJpdmFjeSBQb2xpY3knXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICd0b3MnLFxyXG4gICAgICAgIHRpdGxlOiAnVE9TJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ215Q29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdNeSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjb250YWN0JyxcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnXHJcbiAgICB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIEZvb3Rlck5hdmlnYXRpb24oKXtcclxuICAgIHJldHVybihcclxuICAgICAgIE1FTlUubWFwKChtZW51KT0+e1xyXG4gICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgPEhlYWRUaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9IHNpemU9JzE0cHgnPnttZW51LnRpdGxlfTwvSGVhZFRpdGxlPlxyXG4gICAgICAgICAgIClcclxuICAgICAgIH0pXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3Rlck5hdmlnYXRpb24iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSAnLi4vdGV4dC90ZXh0LXRpdGxlJ1xyXG5pbXBvcnQgSGVhZFRpdGxlIGZyb20gJy4uL3RleHQvaGVhZC10aXRsZSdcclxuaW1wb3J0IEZyYW1lQnV0dG9uIGZyb20gXCIuLi9mcmFtZS9mcmFtZUJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IHtIb21lcGFnZU9wdGlvbn0gZnJvbSAnLi4vaWNvbnMnXHJcblxyXG5jb25zdCBNRU5VID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ21ha2UtYW4tbmZ0JyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ01ha2UgYW4gTkZUJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdidXNpbmVzcy1zaWdudXAnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnQnVzaW5lc3MgU2lnbnVwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdTdWJzY3JpYmUtZm9yLXVwY29taW5nLWRyb3BzJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICB0aXRsZTogJ1N1YnNjcmliZSBmb3IgVXBjb21pbmcgRHJvcHMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ25mdC1zdGFuZGFyZHMnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUIFN0YW5kYXJkcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnZG93bmxvYWQtbmZ0LWNyZWF0b3InLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnRG93bmxvYWQgTkZUIENyZWF0b3InXHJcbiAgICB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe2ZsYXQ9ZmFsc2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRvcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5tYXJrKX0+XHJcbiAgICAgICAgICAgIDxIZWFkVGl0bGU+T3duYWJsZS1OUzwvSGVhZFRpdGxlPiBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZCdG59PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIE1FTlUubWFwKChtZW51KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQnRufVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT0ge21lbnUua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IWZsYXQgJiY8VGV4dFRpdGxlPiB7bWVudS50aXRsZX0gPC9UZXh0VGl0bGU+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlxyXG4gICAgICAgICAgICA8RnJhbWVCdXR0b24+TG9naW48L0ZyYW1lQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmxhdCAmJiA8SG9tZXBhZ2VPcHRpb24vPn1cclxuICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZFRpdGxlKHsgYm9sZD0gZmFsc2UsY2xhc3NOYW1lICxjaGlsZHJlbiwgc2l6ZT0yMCwgb3BhY2l0eT0xfSl7XHJcbiAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgW3N0eWxlcy5UaXRsZSwgXHJcbiAgICAgICAgYm9sZCAmJiBzdHlsZXMuYm9sZCxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICBdKX1cclxuICAgICAgICBzdHlsZT17e2ZvbnRTaXplOnNpemUsIG9wYWNpdHk6IG9wYWNpdHl9fVxyXG4gICAgICAgID57Y2hpbGRyZW59PC9oMT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRpdGxlXHJcblxyXG4vKlxyXG4gICAgY24gc3RhbmQgZm9yIGNsYXNzbmFtZXM6ICdDbGFzc25hbWVzJyAgaXMgcHJldmVudCBjbGFzcyBvdmVyd3JpdGUuIEl0IGNvbWVzIG1vcmUgdGhhbiBvbmUgY2xhc3MgaW50byBmdW5jdGlvbiwgaXQncyByZWFzb24gYWJvdXQgY29uZmxpY3QuIFxyXG4gICAgYm9sZDogU29tZSB0ZXh0IGhhcyBib2xkIGZvbnQgd2VpZ2h0LCBidXQgc29tZSBpdCBoYXNuJ3QuIFdoZW4gdGV4dCBoYXMgYm9sZCBmb250IHdlaWdodCBwcm9wZXJ0aWVzLCBib2xkIHByb3BlcnRpZXMgd2lsbCBoYXZlIGJlZW4gYWN0aXZhdGVkLlxyXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RleHQtdGl0bGUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gVGV4dFRpdGxlKHsgYm9sZD1mYWxzZSwgY2hpbGRyZW59KXtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NuKFtzdHlsZXMuVGl0bGUsIGJvbGQgJiYgc3R5bGVzLmJvbGRdKX0+e2NoaWxkcmVufTwvcD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRUaXRsZSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9uZnRTdGFuZGFyZHMvaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBOZnRTdGFuZGFyZHMoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8TGF5b3V0IC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZnRTdGFuZGFyZHM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFzZUJ0blwiOiBcInN0eWxlX2Jhc2VCdG5fXzI1eV9yXCIsXG5cdFwiRnJhbWVCb3JkZXJcIjogXCJzdHlsZV9GcmFtZUJvcmRlcl9fMUhwNjNcIixcblx0XCJsaW5rQ29udGFpbmVyXCI6IFwic3R5bGVfbGlua0NvbnRhaW5lcl9fMmFKU2pcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcInN0eWxlX2Zvb3RlckNvbnRhaW5lcl9fQTN4NTBcIixcblx0XCJsZWZ0U2lkZU9mQ29udGFpbmVyXCI6IFwic3R5bGVfbGVmdFNpZGVPZkNvbnRhaW5lcl9fM21kZGxcIixcblx0XCJJY29uc1wiOiBcInN0eWxlX0ljb25zX18xeU1fVFwiLFxuXHRcImNvcHlcIjogXCJzdHlsZV9jb3B5X18xUkhIc1wiLFxuXHRcImNvcHlUZXh0XCI6IFwic3R5bGVfY29weVRleHRfXzI5UkVvXCIsXG5cdFwicmlnaHRTaWRlT2ZDb250YWluZXJcIjogXCJzdHlsZV9yaWdodFNpZGVPZkNvbnRhaW5lcl9fM0htcllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZyYW1lQnRuXCI6IFwiZnJhbWVCdXR0b25fZnJhbWVCdG5fX0FtUTJ1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZV9jb250YWluZXJfX2hhNnFwXCIsXG5cdFwidGV4dENvbnRhaW5lclwiOiBcInN0eWxlX3RleHRDb250YWluZXJfXzN0U1E3XCIsXG5cdFwibWFpbkhlYWRlclwiOiBcInN0eWxlX21haW5IZWFkZXJfXzJYOXN2XCIsXG5cdFwicHJvYmxlbXNcIjogXCJzdHlsZV9wcm9ibGVtc19fMm5WYVNcIixcblx0XCJhc2tzXCI6IFwic3R5bGVfYXNrc19fUEpwUnRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTmF2XCI6IFwiZm9vdGVyX05hdl9fMXFzSUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRvclwiOiBcIm5hdmlnYXRpb25fbmF2aWdhdG9yX18yQ2NoTlwiLFxuXHRcIm5hdkJ0blwiOiBcIm5hdmlnYXRpb25fbmF2QnRuX18ySXJhaFwiLFxuXHRcIm5hdkl0ZW1cIjogXCJuYXZpZ2F0aW9uX25hdkl0ZW1fXzIwdWhzXCIsXG5cdFwibWFya1wiOiBcIm5hdmlnYXRpb25fbWFya19fM0dGYU1cIixcblx0XCJsb2dpbkJ1dHRvblwiOiBcIm5hdmlnYXRpb25fbG9naW5CdXR0b25fXzJlQVpNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUaXRsZVwiOiBcImhlYWQtdGl0bGVfVGl0bGVfXzNtd1hnXCIsXG5cdFwiYm9sZFwiOiBcImhlYWQtdGl0bGVfYm9sZF9fMTJzR3lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRpdGxlXCI6IFwidGV4dC10aXRsZV9UaXRsZV9fNktiOWhcIixcblx0XCJib2xkXCI6IFwidGV4dC10aXRsZV9ib2xkX19wUzI4dVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY24iLCJmcmFtZUJ1dHRvbiIsImJvcmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJiYXNlQnRuIiwiRnJhbWVCb3JkZXIiLCJsaW5rQnV0dG9uIiwibGlua0NvbnRhaW5lciIsImxpbmtzIiwiYnV0dG9uIiwiQ29tcCIsIkljb24iLCJIZWFkVGl0bGUiLCJGb290ZXJTaWRlIiwiRm9vdGVyIiwiZm9vdGVyQ29udGFpbmVyIiwibGVmdFNpZGVPZkNvbnRhaW5lciIsIkljb25zIiwiam9pbiIsImpvaW5UZXh0IiwiY29weSIsImNvcHlUZXh0IiwicmlnaHRTaWRlT2ZDb250YWluZXIiLCJmb290ZXIiLCJCdXR0b24iLCJUZXh0VGl0bGUiLCJGcmFtZUJ1dHRvbiIsImZyYW1lQnRuIiwiU3ZnQ2hlY2tTcXVhcmUiLCJTdmdEaXNjb3JkIiwiU3ZnRHJvcERvd24iLCJTdmdEcm9wRG93bsSwY29uIiwiU3ZnRXRoTG9nbyIsIlN2Z0ZhY2Vib29rIiwiU3ZnRmluZ2VycHJpbnQiLCJTdmdIb21lcGFnZU9wdGlvbiIsIlN2Z0xpbmtkbiIsIlN2Z01haWwiLCJTdmdNZWRpYSIsIlN2Z01ldGFEYXRhIiwiU3ZnT3BlbnNlYUxvZ28iLCJTdmdRckNvZGUiLCJTdmdSYXJpYmxlTG9nbyIsIlN2Z1NhdmluZ3NQaWciLCJTdmdTbWFydENvbnRyYWN0xLBjb24iLCJTdmdUd2l0dGVyIiwiU3ZnVmVjdG9yIiwiU3ZnWW91dHViZSIsImRlZmF1bHQiLCJDaGVja1NxdWFyZSIsIkRpc2NvcmQiLCJEcm9wRG93bsSwY29uIiwiRHJvcERvd24iLCJFdGhMb2dvIiwiRmFjZWJvb2siLCJGaW5nZXJwcmludCIsIkhvbWVwYWdlT3B0aW9uIiwixLBuc3RhZ3JhbSIsIkxpbmtkbiIsIk1haWwiLCJNZWRpYSIsIk1ldGFEYXRhIiwiT3BlbnNlYUxvZ28iLCJRckNvZGUiLCJSYXJpYmxlTG9nbyIsIlNhdmluZ3NQaWciLCJTbWFydENvbnRyYWN0xLBjb24iLCJUd2l0dGVyIiwiVmVjdG9yIiwiWW91dHViZSIsIlN2Z8SwbnN0YWdyYW0iLCJOYXZpZ2F0b3IiLCJOZnRTdGFuZGFyZHMiLCJjb250YWluZXIiLCJuYXZpZ2F0b3IiLCJ0ZXh0Q29udGFpbmVyIiwibWFpbkhlYWRlciIsImNvbnRlbnQiLCJwcm9ibGVtcyIsImFza3MiLCJOYXZpZ2F0aW9uQnV0dG9uIiwibmF2IiwiTUVOVSIsImtleSIsInRpdGxlIiwiRm9vdGVyTmF2aWdhdGlvbiIsIm1hcCIsIm1lbnUiLCJOYXYiLCJpY29uIiwiTmF2aWdhdGlvbiIsImZsYXQiLCJtYXJrIiwibmF2QnRuIiwic3ViQnRuIiwibG9naW5CdXR0b24iLCJib2xkIiwic2l6ZSIsIm9wYWNpdHkiLCJUaXRsZSIsImZvbnRTaXplIiwiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==