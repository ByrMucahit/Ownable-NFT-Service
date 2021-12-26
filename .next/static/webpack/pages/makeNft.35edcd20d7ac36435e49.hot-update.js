"use strict";
self["webpackHotUpdate_N_E"]("pages/makeNft",{

/***/ "./components/form/makeNFT/NonAccount/index.js":
/*!*****************************************************!*\
  !*** ./components/form/makeNFT/NonAccount/index.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_head_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../text/head-title */ "./components/text/head-title.js");
/* harmony import */ var _button_mint_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../button/mint/index */ "./components/button/mint/index.js");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.module.css */ "./components/form/makeNFT/NonAccount/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons */ "./components/icons/index.js");
/* harmony import */ var _input_text_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../input/text/text */ "./components/input/text/text.js");
/* harmony import */ var _input_check_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../input/check/index */ "./components/input/check/index.js");
/* harmony import */ var _button_image_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../button/image/index */ "./components/button/image/index.js");
/* harmony import */ var _input_dropdown_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../input/dropdown/index */ "./components/input/dropdown/index.js");
/* harmony import */ var _button_base_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../button/base/index */ "./components/button/base/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mmuca\\Documents\\GitHub\\Ownable-NFT-Service\\components\\form\\makeNFT\\NonAccount\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function MakeNFTForm() {
  _s();

  var _ref;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newName = _useState[0],
      setNewName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newLastName = _useState2[0],
      setNewLastName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newEmail = _useState3[0],
      setNewEmail = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newUserName = _useState4[0],
      setNewUserName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newPhoneNumber = _useState5[0],
      setNewPhoneNumber = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newPassword = _useState6[0],
      setNewPassword = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newConfirmPassword = _useState7[0],
      setNewConfirmPassword = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newTokenName = _useState8[0],
      setNewTokenName = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newTypeOfAsset = _useState9[0],
      setNewTypeOfAsset = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      newDescription = _useState10[0],
      setNewDescription = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('114.97'),
      newNftMiningFee = _useState11[0],
      setNewNftMiningFee = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      newImage = _useState12[0],
      setNewImage = _useState12[1];

  var handleFileChange = function handleFileChange() {
    return function (e) {
      setNewImage(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          newImage: e.target.files[0]
        });
      });
      console.log(newImage.key);
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().tempContext), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().iterContext)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssContext),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
            className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyH1)),
            children: "Mint NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot),
            children: "Fungible And non-fungible tokens"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyRoot), " \n                                 ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssAccountLinkContent), " \n                                 ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyH3)),
              children: "Already have an account ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                name: "firstName",
                placeholder: "Enter First Name",
                style: {
                  "marginRight": "20px;"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                "),
                style: {
                  "marginRight": "20px;"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  "aria-invalid": "false",
                  name: "firstName",
                  placeholder: "Enter First Name",
                  type: "text",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  onChange: function onChange(e) {
                    return setNewName(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newName + " " + "from first Name field");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                name: "firstName",
                placeholder: "Enter First Name",
                style: {
                  "marginRight": "20px;"
                },
                children: "Provide Your First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                name: "lastName",
                placeholder: "Enter Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl)),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  "aria-invalid": "false",
                  name: "lastName",
                  placeholder: "Enter Last Name",
                  type: "text",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  onChange: function onChange(e) {
                    return setNewLastName(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newLastName + " " + "from last name field");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                name: "firstName",
                placeholder: "Enter Last Name",
                children: "Provide Your Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlFullWidth)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                name: "email",
                placeholder: "Enter Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                "),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  "aria-invalid": "false",
                  name: "email",
                  placeholder: "Enter Email",
                  type: "text",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  onChange: function onChange(e) {
                    return setNewEmail(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newEmail + " " + "from email field.");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                name: "email",
                placeholder: "Enter Email",
                children: "Provide the email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlFullWidth)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                name: "username",
                placeholder: "Enter Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                "),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  "aria-invalid": "false",
                  name: "username",
                  placeholder: "Enter Username",
                  type: "text",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  onChange: function onChange(e) {
                    return setNewUserName(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newUserName + " " + "from username field");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                name: "username",
                placeholder: "Enter Username",
                children: "Provide a username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlFullWidth)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                name: "phone",
                placeholder: "Enter Phone Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                "),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  "aria-invalid": "false",
                  name: "phone",
                  placeholder: "Enter Phone Number",
                  type: "text",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  onChange: function onChange(e) {
                    return setNewPhoneNumber(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newPhoneNumber + " " + "from phone number field");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot),
                name: "phone",
                placeholder: "Enter Phone Number",
                type: "text",
                value: true,
                inputMode: "numeric",
                children: "If provided text messages will be sent here for security."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiBoxRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssPasswordContent)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                  "data-shrink": "false",
                  name: "password",
                  style: "password",
                  placeholder: "Enter Password"
                }, "style", {
                  "marginRight": "20px;"
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                    "),
                  style: {
                    "marginRight": "20px"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                    "aria-invalid": "false",
                    name: "username",
                    placeholder: "Enter Password",
                    type: "text",
                    className: "\n                                        ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), "\n                                        ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                    onChange: function onChange(e) {
                      return setNewPassword(e.target.value);
                    },
                    onClick: function onClick() {
                      return console.log(newPassword + " " + "from password field.");
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                  className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                  name: "password",
                  type: "password",
                  placeholder: "Enter Password",
                  style: {
                    "marginRight": "20px"
                  },
                  children: "Provide your password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                  "data-shrink": "false",
                  name: "confirmPassword",
                  style: "password",
                  placeholder: "Confirm Password"
                }, "style", {
                  "marginRight": ""
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                    "),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                    "aria-invalid": "false",
                    name: "confirmPassword",
                    placeholder: "Confirm password",
                    type: "password",
                    className: "\n                                        ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), "\n                                        ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                    onChange: function onChange(e) {
                      return setNewConfirmPassword(e.target.value);
                    },
                    onClick: function onClick() {
                      return console.log(newConfirmPassword + " " + "from confirm password field.");
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                  className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "Enter Password",
                  style: {
                    "marginRight": "20px"
                  },
                  children: "Confirm your password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiBoxRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssBoxContent)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlLabelRoot),
                color: "primary",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiButtonBaseRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiIconButtonRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssButtonContent), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiCheckBoxRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiCheckBoxColorSecondary), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiIconButtonColorSecondary)),
                  "aria-disabled": "false",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiIconButtonLabel),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
                      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssCheckBox),
                      type: "checkbox",
                      value: "true",
                      name: "tosCheckbox",
                      required: true
                    }, "value", true), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 358,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__["İconmonstrCheckbox6"], {
                      className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSvgIconRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiCheckBoxRoot)),
                      focusable: "false"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  className: "\n                                        ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyRoot), " \n                                        ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlLabelLabel), " \n                                        ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyBody1)),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                    children: ["I have read and agree to the", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      className: "\n                                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyRoot), " \n                                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiLinkRoot), " \n                                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiLinkUnderLineHover), " \n                                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiTypographyColorPrimary)),
                      target: "tos",
                      children: " terms of service"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 368,
                      columnNumber: 49
                    }, this), "."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssForm),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlFullWidth)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl)),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  "aria-invalid": "false",
                  name: "tokenName",
                  placeholder: "Enter Token Name",
                  type: "text",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  onChange: function onChange(e) {
                    return setNewTokenName(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newTokenName + " " + "from new token name field.");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiError)),
                name: "tokenName",
                type: "text",
                placeholder: "Enter Token Name",
                style: {
                  "marginRight": "20px"
                },
                children: "Token name is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssMedia)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                style: {
                  "position": "relative;",
                  "marginTop": "30px;",
                  "top": "-35px;",
                  "marginBottom": "10px;"
                },
                children: "Media"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 419,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiButtonBaseRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiButtonRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiButtonContained), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiButtonContainedPrimary)),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiButtonLabel),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssMediaContent),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Upload, {
                        className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSvgIconRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssSvg))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 434,
                        columnNumber: 49
                      }, this), "UPLOAD FILE"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 433,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                      accept: "image/*",
                      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssSvgContent),
                      id: "icon-button-photo",
                      type: "file",
                      name: "file",
                      onChange: handleFileChange()
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 437,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                  className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot),
                  children: "Any image file or animated gif accepted up to 10mb file size."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 447,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelShrink), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFilled)),
                "data-shrink": "true",
                children: "What type of asset is this?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 451,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl)),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSelectRoot), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSelectSelect), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSelectSelectMenu), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput)),
                  children: "NFT (Non Fungible Token)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                  name: "assetType",
                  "aria-hidden": "true",
                  tabIndex: "-1",
                  className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSelectNativeInput),
                  onChange: function onChange(e) {
                    return setNewTypeOfAsset('NFT');
                  },
                  onClick: function onClick() {
                    return console.log(newTypeOfAsset + " " + "from asset type field.");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.DownArrow, {
                  className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSvgIconRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSelectIcon), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiSelectIconOpen))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 478,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 459,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormHelperTextFilled)),
                children: "NFT's (Non fungible tokens) represent things that are wholly owned by one person like art or merchandise."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 480,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot), " ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlFullWidth)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                name: "description",
                placeholder: "Enter description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 486,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputUnderline), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().cssInput), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFullWidth), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputFormControl), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseMultiLine), "\n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputMultiLine)),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("textarea", {
                  rows: "1",
                  "aria-onInvalid": "false",
                  name: "description",
                  placeholder: "Enter description",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInputMultiLine), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInputMultiLine)),
                  style: {
                    "height": "30px;",
                    "overflow": "hidden;"
                  },
                  onChange: function onChange(e) {
                    return setNewDescription(e.target.value);
                  },
                  onClick: function onClick() {
                    return console.log(newDescription + " " + "from description field.");
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 506,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("textarea", {
                  "aria-hidden": "true",
                  className: "\n                                    ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInput), " \n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputBaseInputMultiLine), "\n                                    ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputInputMultiLine)),
                  readOnly: true,
                  tabIndex: "-1",
                  style: (_ref = {
                    "visibility": "hidden",
                    "position": "absolute",
                    "overflow": "hidden",
                    "height": "0px"
                  }, (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "height", "0px;"), (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "top", "0px"), (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "left", "0px"), (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "transform", "translateZ(0px)"), (0,C_Users_mmuca_Documents_GitHub_Ownable_NFT_Service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "width", "734.652px"), _ref)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 520,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 495,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 485,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: (_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormControlRoot),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                className: "\n                                ".concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiFormLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelRoot), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelFormControl), " \n                                ").concat((_style_module_css__WEBPACK_IMPORTED_MODULE_11___default().muiInputLabelAnimated)),
                "data-shrink": "false",
                style: {
                  "position": "relative",
                  "marginTop": "30px",
                  "top": "-40px"
                },
                children: "NFT Minting Fee"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 542,
                columnNumber: 33
              }, this), "$114.95"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 541,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_button_mint_index__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 552,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(MakeNFTForm, "KnzylSi6dgURHZXWWwSEGpdk+Fw=");

_c = MakeNFTForm;
/* harmony default export */ __webpack_exports__["default"] = (MakeNFTForm);

var _c;

$RefreshReg$(_c, "MakeNFTForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC4zNWVkY2QyMGQ3YWMzNjQzNWU0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsU0FBU1csV0FBVCxHQUFzQjtBQUFBOztBQUFBOztBQUVsQixrQkFBOEJELCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9FLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXNDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPSSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFnQ0wsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT00sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBc0NQLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9RLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTRDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPVSxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBc0NYLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9ZLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQW9EYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPYyxrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQXdDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPZ0IsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBNENqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPa0IsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0Esb0JBQTRDbkIsK0NBQVEsQ0FBQyxFQUFELENBQXBEO0FB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QUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Z0JIOztHQWhpQlFROztLQUFBQTtBQWtpQlQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL21ha2VORlQvTm9uQWNjb3VudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uLy4uLy4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgTWludEJ0biBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL21pbnQvaW5kZXhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vLi4vLi4vaWNvbnMnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9pbnB1dC90ZXh0L3RleHQnXHJcbmltcG9ydCBDaGVja0lucHV0IGZyb20gJy4uLy4uLy4uL2lucHV0L2NoZWNrL2luZGV4J1xyXG5pbXBvcnQgSW1hZ2VCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9pbWFnZS9pbmRleFwiXHJcbmltcG9ydCBEcm9wRG93bklucHV0IGZyb20gJy4uLy4uLy4uL2lucHV0L2Ryb3Bkb3duL2luZGV4J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vYmFzZS9pbmRleFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWtlTkZURm9ybSgpe1xyXG5cclxuICAgIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuZXdMYXN0TmFtZSwgc2V0TmV3TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3VXNlck5hbWUsIHNldE5ld1VzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuZXdQaG9uZU51bWJlciwgc2V0TmV3UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3Q29uZmlybVBhc3N3b3JkLCBzZXROZXdDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld1Rva2VuTmFtZSwgc2V0TmV3VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuZXdUeXBlT2ZBc3NldCwgc2V0TmV3VHlwZU9mQXNzZXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld0Rlc2NyaXB0aW9uLCBzZXROZXdEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3TmZ0TWluaW5nRmVlLCBzZXROZXdOZnRNaW5pbmdGZWVdPSB1c2VTdGF0ZSgnMTE0Ljk3Jyk7XHJcbiAgICBjb25zdCBbbmV3SW1hZ2UsIHNldE5ld0ltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKCkgPT4gKGUpID0+IHtcclxuICAgICAgICBzZXROZXdJbWFnZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgIG5ld0ltYWdlOiBlLnRhcmdldC5maWxlc1swXVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdJbWFnZS5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGVtcENvbnRleHR9ICR7c3R5bGVzLml0ZXJDb250ZXh0fWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jc3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3NzQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlUeXBvZ3JhcGh5Um9vdH0gJHtzdHlsZXMubXVpVHlwb2dyYXBoeUgxfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCBORlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUhlbHBlclRleHRSb290fT5GdW5naWJsZSBBbmQgbm9uLWZ1bmdpYmxlIHRva2VuczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdHlsZXMubXVpVHlwb2dyYXBoeVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NBY2NvdW50TGlua0NvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlUeXBvZ3JhcGh5SDN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4O1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmNzc0lucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4O1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWludmFsaWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld05hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhuZXdOYW1lK1wiIFwiK1wiZnJvbSBmaXJzdCBOYW1lIGZpZWxkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUhlbHBlclRleHRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlFcnJvcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4O1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgWW91ciBGaXJzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGFzdCBOYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKG5ld0xhc3ROYW1lK1wiIFwiK1wiZnJvbSBsYXN0IG5hbWUgZmllbGRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUhlbHBlclRleHRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlFcnJvcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgWW91ciBMYXN0IE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0gJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xGdWxsV2lkdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0RnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Rm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKG5ld0VtYWlsK1wiIFwiK1wiZnJvbSBlbWFpbCBmaWVsZC5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9ICR7c3R5bGVzLm11aUVycm9yfWB9IG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgdGhlIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fSAke3N0eWxlcy5tdWlGb3JtQ29udHJvbEZ1bGxXaWR0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmNzc0lucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cobmV3VXNlck5hbWUrXCIgXCIrXCJmcm9tIHVzZXJuYW1lIGZpZWxkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0gJHtzdHlsZXMubXVpRXJyb3J9YH0gbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiPlByb3ZpZGUgYSB1c2VybmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fSAke3N0eWxlcy5tdWlGb3JtQ29udHJvbEZ1bGxXaWR0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0RnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Rm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGhvbmUgTnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3UGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNvbnNvbGUubG9nKG5ld1Bob25lTnVtYmVyK1wiIFwiK1wiZnJvbSBwaG9uZSBudW1iZXIgZmllbGRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIGlucHV0TW9kZT1cIm51bWVyaWNcIj5JZiBwcm92aWRlZCB0ZXh0IG1lc3NhZ2VzIHdpbGwgYmUgc2VudCBoZXJlIGZvciBzZWN1cml0eS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpQm94Um9vdH0gJHtzdHlsZXMuY3NzUGFzc3dvcmRDb250ZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsQW5pbWF0ZWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4O1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1wibWFyZ2luUmlnaHRcIjpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cobmV3UGFzc3dvcmQrXCIgXCIrXCJmcm9tIHBhc3N3b3JkIGZpZWxkLlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9ICR7c3R5bGVzLm11aUVycm9yfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1wibWFyZ2luUmlnaHRcIjpcIjIwcHhcIn19PlByb3ZpZGUgeW91ciBwYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNocmluaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1wibWFyZ2luUmlnaHRcIjpcIlwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBjb25zb2xlLmxvZyhuZXdDb25maXJtUGFzc3dvcmQrXCIgXCIrXCJmcm9tIGNvbmZpcm0gcGFzc3dvcmQgZmllbGQuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0gJHtzdHlsZXMubXVpRXJyb3J9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1wibWFyZ2luUmlnaHRcIjpcIjIwcHhcIn19PkNvbmZpcm0geW91ciBwYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpQm94Um9vdH0gJHtzdHlsZXMuY3NzQm94Q29udGVudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xMYWJlbFJvb3R9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uQmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJY29uQnV0dG9uUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmNzc0J1dHRvbkNvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlDaGVja0JveFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlDaGVja0JveENvbG9yU2Vjb25kYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJY29uQnV0dG9uQ29sb3JTZWNvbmRhcnl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubXVpSWNvbkJ1dHRvbkxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT17c3R5bGVzLmNzc0NoZWNrQm94fSB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInRydWVcIiAgIG5hbWU9XCJ0b3NDaGVja2JveFwiIHJlcXVpcmVkIHZhbHVlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi7EsGNvbm1vbnN0ckNoZWNrYm94NiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlTdmdJY29uUm9vdH0gJHtzdHlsZXMubXVpQ2hlY2tCb3hSb290fWB9IGZvY3VzYWJsZT1cImZhbHNlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpVHlwb2dyYXBoeVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xMYWJlbExhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aVR5cG9ncmFwaHlCb2R5MX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkkgaGF2ZSByZWFkIGFuZCBhZ3JlZSB0byB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlUeXBvZ3JhcGh5Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUxpbmtSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpTGlua1VuZGVyTGluZUhvdmVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpVHlwb2dyYXBoeUNvbG9yUHJpbWFyeX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b3NcIj4gdGVybXMgb2Ygc2VydmljZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuY3NzRm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0gJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xGdWxsV2lkdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUVycm9yfWB9PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0RnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Rm9ybUNvbnRyb2x9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRva2VuTmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRva2VuIE5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUb2tlbk5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNvbnNvbGUubG9nKG5ld1Rva2VuTmFtZStcIiBcIitcImZyb20gbmV3IHRva2VuIG5hbWUgZmllbGQuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0gJHtzdHlsZXMubXVpRXJyb3J9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b2tlbk5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUb2tlbiBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4XCJ9fT5Ub2tlbiBuYW1lIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9ICR7c3R5bGVzLmNzc01lZGlhfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsQW5pbWF0ZWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNocmluaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1wicG9zaXRpb25cIjpcInJlbGF0aXZlO1wiLFwibWFyZ2luVG9wXCI6XCIzMHB4O1wiLFwidG9wXCI6XCItMzVweDtcIixcIm1hcmdpbkJvdHRvbVwiOlwiMTBweDtcIn19Pk1lZGlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQnV0dG9uUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkNvbnRhaW5lZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkNvbnRhaW5lZFByaW1hcnl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubXVpQnV0dG9uTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNzc01lZGlhQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uLlVwbG9hZCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlTdmdJY29uUm9vdH0gJHtzdHlsZXMuY3NzU3ZnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVBMT0FEIEZJTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jc3NTdmdDb250ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImljb24tYnV0dG9uLXBob3RvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0+QW55IGltYWdlIGZpbGUgb3IgYW5pbWF0ZWQgZ2lmIGFjY2VwdGVkIHVwIHRvIDEwbWIgZmlsZSBzaXplLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsQW5pbWF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFNocmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRmlsbGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJ0cnVlXCI+V2hhdCB0eXBlIG9mIGFzc2V0IGlzIHRoaXM/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlTZWxlY3RSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpU2VsZWN0U2VsZWN0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpU2VsZWN0U2VsZWN0TWVudX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH1gfT5ORlQgKE5vbiBGdW5naWJsZSBUb2tlbik8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzZXRUeXBlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17XCItMVwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubXVpU2VsZWN0TmF0aXZlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VHlwZU9mQXNzZXQoJ05GVCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNvbnNvbGUubG9nKG5ld1R5cGVPZkFzc2V0K1wiIFwiK1wiZnJvbSBhc3NldCB0eXBlIGZpZWxkLlwiKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi5Eb3duQXJyb3cgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpU3ZnSWNvblJvb3R9ICR7c3R5bGVzLm11aVNlbGVjdEljb259ICR7c3R5bGVzLm11aVNlbGVjdEljb25PcGVufWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9ICR7c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0RmlsbGVkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBORlQncyAoTm9uIGZ1bmdpYmxlIHRva2VucykgcmVwcmVzZW50IHRoaW5ncyB0aGF0IGFyZSB3aG9sbHkgb3duZWQgYnkgb25lIHBlcnNvbiBsaWtlIGFydCBvciBtZXJjaGFuZGlzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0gJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xGdWxsV2lkdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRVbmRlcmxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmNzc0lucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VNdWx0aUxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRNdWx0aUxpbmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17XCIxXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLW9uSW52YWxpZD17XCJmYWxzZVwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXRNdWx0aUxpbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0TXVsdGlMaW5lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJoZWlnaHRcIjpcIjMwcHg7XCIsIFwib3ZlcmZsb3dcIjpcImhpZGRlbjtcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhuZXdEZXNjcmlwdGlvbitcIiBcIitcImZyb20gZGVzY3JpcHRpb24gZmllbGQuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXRNdWx0aUxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXRNdWx0aUxpbmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgdGFiSW5kZXg9e1wiLTFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOlwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6XCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvd1wiOlwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOlwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOlwiMHB4O1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjpcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6XCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGVaKDBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjpcIjczNC42NTJweFwifX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwiLFwibWFyZ2luVG9wXCI6XCIzMHB4XCIsXCJ0b3BcIjpcIi00MHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5ORlQgTWludGluZyBGZWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQxMTQuOTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1pbnRCdG4vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWtlTkZURm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkVGl0bGUiLCJNaW50QnRuIiwic3R5bGVzIiwiSWNvbiIsIklucHV0IiwiQ2hlY2tJbnB1dCIsIkltYWdlQnV0dG9uIiwiRHJvcERvd25JbnB1dCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiTWFrZU5GVEZvcm0iLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsIm5ld0xhc3ROYW1lIiwic2V0TmV3TGFzdE5hbWUiLCJuZXdFbWFpbCIsInNldE5ld0VtYWlsIiwibmV3VXNlck5hbWUiLCJzZXROZXdVc2VyTmFtZSIsIm5ld1Bob25lTnVtYmVyIiwic2V0TmV3UGhvbmVOdW1iZXIiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwibmV3Q29uZmlybVBhc3N3b3JkIiwic2V0TmV3Q29uZmlybVBhc3N3b3JkIiwibmV3VG9rZW5OYW1lIiwic2V0TmV3VG9rZW5OYW1lIiwibmV3VHlwZU9mQXNzZXQiLCJzZXROZXdUeXBlT2ZBc3NldCIsIm5ld0Rlc2NyaXB0aW9uIiwic2V0TmV3RGVzY3JpcHRpb24iLCJuZXdOZnRNaW5pbmdGZWUiLCJzZXROZXdOZnRNaW5pbmdGZWUiLCJuZXdJbWFnZSIsInNldE5ld0ltYWdlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJjb250YWluZXIiLCJ0ZW1wQ29udGV4dCIsIml0ZXJDb250ZXh0IiwiY3NzQ29udGFpbmVyIiwiY3NzQ29udGV4dCIsIm11aVR5cG9ncmFwaHlSb290IiwibXVpVHlwb2dyYXBoeUgxIiwibXVpRm9ybUhlbHBlclRleHRSb290IiwiY3NzQWNjb3VudExpbmtDb250ZW50IiwibXVpVHlwb2dyYXBoeUgzIiwibXVpRm9ybUNvbnRyb2xSb290IiwibXVpRm9ybUxhYmVsUm9vdCIsIm11aUlucHV0TGFiZWxSb290IiwibXVpSW5wdXRMYWJlbEZvcm1Db250cm9sIiwibXVpSW5wdXRMYWJlbEFuaW1hdGVkIiwibXVpSW5wdXRCYXNlUm9vdCIsIm11aUlucHV0Um9vdCIsIm11aUlucHV0VW5kZXJsaW5lIiwiY3NzSW5wdXQiLCJtdWlJbnB1dEJhc2VGb3JtQ29udHJvbCIsIm11aUlucHV0Rm9ybUNvbnRyb2wiLCJtdWlJbnB1dEJhc2VJbnB1dCIsIm11aUlucHV0SW5wdXQiLCJ2YWx1ZSIsIm11aUVycm9yIiwibXVpRm9ybUNvbnRyb2xGdWxsV2lkdGgiLCJtdWlJbnB1dEJhc2VGdWxsV2lkdGgiLCJtdWlJbnB1dEZ1bGxXaWR0aCIsIm11aUJveFJvb3QiLCJjc3NQYXNzd29yZENvbnRlbnQiLCJjc3NCb3hDb250ZW50IiwibXVpRm9ybUNvbnRyb2xMYWJlbFJvb3QiLCJtdWlCdXR0b25CYXNlUm9vdCIsIm11aUljb25CdXR0b25Sb290IiwiY3NzQnV0dG9uQ29udGVudCIsIm11aUNoZWNrQm94Um9vdCIsIm11aUNoZWNrQm94Q29sb3JTZWNvbmRhcnkiLCJtdWlJY29uQnV0dG9uQ29sb3JTZWNvbmRhcnkiLCJtdWlJY29uQnV0dG9uTGFiZWwiLCJjc3NDaGVja0JveCIsIm11aVN2Z0ljb25Sb290IiwibXVpRm9ybUNvbnRyb2xMYWJlbExhYmVsIiwibXVpVHlwb2dyYXBoeUJvZHkxIiwibXVpTGlua1Jvb3QiLCJtdWlMaW5rVW5kZXJMaW5lSG92ZXIiLCJtdWlUeXBvZ3JhcGh5Q29sb3JQcmltYXJ5IiwiY3NzRm9ybSIsImNzc01lZGlhIiwibXVpQnV0dG9uUm9vdCIsIm11aUJ1dHRvbkNvbnRhaW5lZCIsIm11aUJ1dHRvbkNvbnRhaW5lZFByaW1hcnkiLCJtdWlCdXR0b25MYWJlbCIsImNzc01lZGlhQ29udGVudCIsImNzc1N2ZyIsImNzc1N2Z0NvbnRlbnQiLCJtdWlJbnB1dExhYmVsU2hyaW5rIiwibXVpSW5wdXRMYWJlbEZpbGxlZCIsIm11aVNlbGVjdFJvb3QiLCJtdWlTZWxlY3RTZWxlY3QiLCJtdWlTZWxlY3RTZWxlY3RNZW51IiwibXVpU2VsZWN0TmF0aXZlSW5wdXQiLCJtdWlTZWxlY3RJY29uIiwibXVpU2VsZWN0SWNvbk9wZW4iLCJtdWlGb3JtSGVscGVyVGV4dEZpbGxlZCIsIm11aUlucHV0QmFzZU11bHRpTGluZSIsIm11aUlucHV0TXVsdGlMaW5lIiwibXVpSW5wdXRCYXNlSW5wdXRNdWx0aUxpbmUiLCJtdWlJbnB1dElucHV0TXVsdGlMaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==