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
      console.log(newImage.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC5iYzRiMWE1MWRiMzMxYzkzMjk3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsU0FBU1csV0FBVCxHQUFzQjtBQUFBOztBQUFBOztBQUVsQixrQkFBOEJELCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9FLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXNDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPSSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFnQ0wsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT00sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBc0NQLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9RLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTRDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPVSxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBc0NYLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9ZLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQW9EYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPYyxrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQXdDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPZ0IsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBNENqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPa0IsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0Esb0JBQTRDbkIsK0NBQVEsQ0FBQyxFQUFELENBQXBEO0FB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QUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Z0JIOztHQWhpQlFROztLQUFBQTtBQWtpQlQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL21ha2VORlQvTm9uQWNjb3VudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGl0bGUgZnJvbSBcIi4uLy4uLy4uL3RleHQvaGVhZC10aXRsZVwiO1xyXG5pbXBvcnQgTWludEJ0biBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL21pbnQvaW5kZXhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vLi4vLi4vaWNvbnMnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9pbnB1dC90ZXh0L3RleHQnXHJcbmltcG9ydCBDaGVja0lucHV0IGZyb20gJy4uLy4uLy4uL2lucHV0L2NoZWNrL2luZGV4J1xyXG5pbXBvcnQgSW1hZ2VCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9pbWFnZS9pbmRleFwiXHJcbmltcG9ydCBEcm9wRG93bklucHV0IGZyb20gJy4uLy4uLy4uL2lucHV0L2Ryb3Bkb3duL2luZGV4J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vYmFzZS9pbmRleFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWtlTkZURm9ybSgpe1xyXG5cclxuICAgIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuZXdMYXN0TmFtZSwgc2V0TmV3TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3VXNlck5hbWUsIHNldE5ld1VzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuZXdQaG9uZU51bWJlciwgc2V0TmV3UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3Q29uZmlybVBhc3N3b3JkLCBzZXROZXdDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld1Rva2VuTmFtZSwgc2V0TmV3VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuZXdUeXBlT2ZBc3NldCwgc2V0TmV3VHlwZU9mQXNzZXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25ld0Rlc2NyaXB0aW9uLCBzZXROZXdEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3TmZ0TWluaW5nRmVlLCBzZXROZXdOZnRNaW5pbmdGZWVdPSB1c2VTdGF0ZSgnMTE0Ljk3Jyk7XHJcbiAgICBjb25zdCBbbmV3SW1hZ2UsIHNldE5ld0ltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKCkgPT4gKGUpID0+IHtcclxuICAgICAgICBzZXROZXdJbWFnZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgIG5ld0ltYWdlOiBlLnRhcmdldC5maWxlc1swXVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdJbWFnZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRlbXBDb250ZXh0fSAke3N0eWxlcy5pdGVyQ29udGV4dH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3NzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNzc0NvbnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpVHlwb2dyYXBoeVJvb3R9ICR7c3R5bGVzLm11aVR5cG9ncmFwaHlIMX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0+RnVuZ2libGUgQW5kIG5vbi1mdW5naWJsZSB0b2tlbnM8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3R5bGVzLm11aVR5cG9ncmFwaHlSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzQWNjb3VudExpbmtDb250ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpVHlwb2dyYXBoeUgzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsQW5pbWF0ZWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNocmluaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJtYXJnaW5SaWdodFwiOlwiMjBweDtcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJtYXJnaW5SaWdodFwiOlwiMjBweDtcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cobmV3TmFtZStcIiBcIitcImZyb20gZmlyc3QgTmFtZSBmaWVsZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRXJyb3J9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJtYXJnaW5SaWdodFwiOlwiMjBweDtcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlIFlvdXIgRmlyc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFVuZGVybGluZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Rm9ybUNvbnRyb2x9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExhc3QgTmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhuZXdMYXN0TmFtZStcIiBcIitcImZyb20gbGFzdCBuYW1lIGZpZWxkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1IZWxwZXJUZXh0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRXJyb3J9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlIFlvdXIgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9ICR7c3R5bGVzLm11aUZvcm1Db250cm9sRnVsbFdpZHRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsQW5pbWF0ZWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNocmluaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFVuZGVybGluZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhuZXdFbWFpbCtcIiBcIitcImZyb20gZW1haWwgZmllbGQuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUhlbHBlclRleHRSb290fSAke3N0eWxlcy5tdWlFcnJvcn1gfSBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlIHRoZSBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0gJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xGdWxsV2lkdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0RnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Rm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKG5ld1VzZXJOYW1lK1wiIFwiK1wiZnJvbSB1c2VybmFtZSBmaWVsZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9ICR7c3R5bGVzLm11aUVycm9yfWB9IG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgVXNlcm5hbWVcIj5Qcm92aWRlIGEgdXNlcm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0gJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xGdWxsV2lkdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFVuZGVybGluZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lIE51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Bob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBjb25zb2xlLmxvZyhuZXdQaG9uZU51bWJlcitcIiBcIitcImZyb20gcGhvbmUgbnVtYmVyIGZpZWxkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSBpbnB1dE1vZGU9XCJudW1lcmljXCI+SWYgcHJvdmlkZWQgdGV4dCBtZXNzYWdlcyB3aWxsIGJlIHNlbnQgaGVyZSBmb3Igc2VjdXJpdHkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUJveFJvb3R9ICR7c3R5bGVzLmNzc1Bhc3N3b3JkQ29udGVudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJtYXJnaW5SaWdodFwiOlwiMjBweDtcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKG5ld1Bhc3N3b3JkK1wiIFwiK1wiZnJvbSBwYXNzd29yZCBmaWVsZC5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUhlbHBlclRleHRSb290fSAke3N0eWxlcy5tdWlFcnJvcn1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4XCJ9fT5Qcm92aWRlIHlvdXIgcGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsQW5pbWF0ZWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gY29uc29sZS5sb2cobmV3Q29uZmlybVBhc3N3b3JkK1wiIFwiK1wiZnJvbSBjb25maXJtIHBhc3N3b3JkIGZpZWxkLlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9ICR7c3R5bGVzLm11aUVycm9yfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIyMHB4XCJ9fT5Db25maXJtIHlvdXIgcGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aUJveFJvb3R9ICR7c3R5bGVzLmNzc0JveENvbnRlbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1Db250cm9sTGFiZWxSb290fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvbkJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSWNvbkJ1dHRvblJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NCdXR0b25Db250ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQ2hlY2tCb3hSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpQ2hlY2tCb3hDb2xvclNlY29uZGFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSWNvbkJ1dHRvbkNvbG9yU2Vjb25kYXJ5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm11aUljb25CdXR0b25MYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9e3N0eWxlcy5jc3NDaGVja0JveH0gdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ0cnVlXCIgICBuYW1lPVwidG9zQ2hlY2tib3hcIiByZXF1aXJlZCB2YWx1ZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24uxLBjb25tb25zdHJDaGVja2JveDYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpU3ZnSWNvblJvb3R9ICR7c3R5bGVzLm11aUNoZWNrQm94Um9vdH1gfSBmb2N1c2FibGU9XCJmYWxzZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aVR5cG9ncmFwaHlSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1Db250cm9sTGFiZWxMYWJlbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlUeXBvZ3JhcGh5Qm9keTF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JIGhhdmUgcmVhZCBhbmQgYWdyZWUgdG8gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpVHlwb2dyYXBoeVJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlMaW5rUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUxpbmtVbmRlckxpbmVIb3Zlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aVR5cG9ncmFwaHlDb2xvclByaW1hcnl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9zXCI+IHRlcm1zIG9mIHNlcnZpY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmNzc0Zvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9ICR7c3R5bGVzLm11aUZvcm1Db250cm9sRnVsbFdpZHRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlFcnJvcn1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFVuZGVybGluZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuY3NzSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEZvcm1Db250cm9sfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b2tlbk5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUb2tlbiBOYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9rZW5OYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBjb25zb2xlLmxvZyhuZXdUb2tlbk5hbWUrXCIgXCIrXCJmcm9tIG5ldyB0b2tlbiBuYW1lIGZpZWxkLlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9ICR7c3R5bGVzLm11aUVycm9yfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9rZW5OYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVG9rZW4gTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJtYXJnaW5SaWdodFwiOlwiMjBweFwifX0+VG9rZW4gbmFtZSBpcyByZXF1aXJlZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fSAke3N0eWxlcy5jc3NNZWRpYX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaHJpbms9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZTtcIixcIm1hcmdpblRvcFwiOlwiMzBweDtcIixcInRvcFwiOlwiLTM1cHg7XCIsXCJtYXJnaW5Cb3R0b21cIjpcIjEwcHg7XCJ9fT5NZWRpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlCdXR0b25CYXNlUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUJ1dHRvblJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlCdXR0b25Db250YWluZWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlCdXR0b25Db250YWluZWRQcmltYXJ5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm11aUJ1dHRvbkxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jc3NNZWRpYUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi5VcGxvYWQgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpU3ZnSWNvblJvb3R9ICR7c3R5bGVzLmNzc1N2Z31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVQTE9BRCBGSUxFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3NzU3ZnQ29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1waG90b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dFJvb3R9PkFueSBpbWFnZSBmaWxlIG9yIGFuaW1hdGVkIGdpZiBhY2NlcHRlZCB1cCB0byAxMG1iIGZpbGUgc2l6ZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVpRm9ybUNvbnRyb2xSb290fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpRm9ybUxhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEFuaW1hdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxTaHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZpbGxlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwidHJ1ZVwiPldoYXQgdHlwZSBvZiBhc3NldCBpcyB0aGlzPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VGb3JtQ29udHJvbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRGb3JtQ29udHJvbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpU2VsZWN0Um9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aVNlbGVjdFNlbGVjdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aVNlbGVjdFNlbGVjdE1lbnV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0SW5wdXR9YH0+TkZUIChOb24gRnVuZ2libGUgVG9rZW4pPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFzc2V0VHlwZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e1wiLTFcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm11aVNlbGVjdE5hdGl2ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1R5cGVPZkFzc2V0KCdORlQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBjb25zb2xlLmxvZyhuZXdUeXBlT2ZBc3NldCtcIiBcIitcImZyb20gYXNzZXQgdHlwZSBmaWVsZC5cIil9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24uRG93bkFycm93IGNsYXNzTmFtZT17YCR7c3R5bGVzLm11aVN2Z0ljb25Sb290fSAke3N0eWxlcy5tdWlTZWxlY3RJY29ufSAke3N0eWxlcy5tdWlTZWxlY3RJY29uT3Blbn1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubXVpRm9ybUhlbHBlclRleHRSb290fSAke3N0eWxlcy5tdWlGb3JtSGVscGVyVGV4dEZpbGxlZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTkZUJ3MgKE5vbiBmdW5naWJsZSB0b2tlbnMpIHJlcHJlc2VudCB0aGluZ3MgdGhhdCBhcmUgd2hvbGx5IG93bmVkIGJ5IG9uZSBwZXJzb24gbGlrZSBhcnQgb3IgbWVyY2hhbmRpc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tdWlGb3JtQ29udHJvbFJvb3R9ICR7c3R5bGVzLm11aUZvcm1Db250cm9sRnVsbFdpZHRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlGb3JtTGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsUm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRMYWJlbEZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXNjcmlwdGlvblwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dEJhc2VSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0VW5kZXJsaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5jc3NJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlRnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0RnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0Rm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRCYXNlTXVsdGlMaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TXVsdGlMaW5lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e1wiMVwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1vbkludmFsaWQ9e1wiZmFsc2VcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0TXVsdGlMaW5lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dE11bHRpTGluZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1wiaGVpZ2h0XCI6XCIzMHB4O1wiLCBcIm92ZXJmbG93XCI6XCJoaWRkZW47XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0Rlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cobmV3RGVzY3JpcHRpb24rXCIgXCIrXCJmcm9tIGRlc2NyaXB0aW9uIGZpZWxkLlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMubXVpSW5wdXRJbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0QmFzZUlucHV0TXVsdGlMaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dElucHV0TXVsdGlMaW5lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5IHRhYkluZGV4PXtcIi0xXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjpcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOlwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3ZlcmZsb3dcIjpcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjpcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjpcIjBweDtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6XCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOlwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlWigwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6XCI3MzQuNjUycHhcIn19PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11aUZvcm1Db250cm9sUm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUZvcm1MYWJlbFJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxSb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5tdWlJbnB1dExhYmVsRm9ybUNvbnRyb2x9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm11aUlucHV0TGFiZWxBbmltYXRlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hyaW5rPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIixcIm1hcmdpblRvcFwiOlwiMzBweFwiLFwidG9wXCI6XCItNDBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TkZUIE1pbnRpbmcgRmVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkMTE0Ljk1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW50QnRuLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFrZU5GVEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZFRpdGxlIiwiTWludEJ0biIsInN0eWxlcyIsIkljb24iLCJJbnB1dCIsIkNoZWNrSW5wdXQiLCJJbWFnZUJ1dHRvbiIsIkRyb3BEb3duSW5wdXQiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIk1ha2VORlRGb3JtIiwibmV3TmFtZSIsInNldE5ld05hbWUiLCJuZXdMYXN0TmFtZSIsInNldE5ld0xhc3ROYW1lIiwibmV3RW1haWwiLCJzZXROZXdFbWFpbCIsIm5ld1VzZXJOYW1lIiwic2V0TmV3VXNlck5hbWUiLCJuZXdQaG9uZU51bWJlciIsInNldE5ld1Bob25lTnVtYmVyIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsIm5ld0NvbmZpcm1QYXNzd29yZCIsInNldE5ld0NvbmZpcm1QYXNzd29yZCIsIm5ld1Rva2VuTmFtZSIsInNldE5ld1Rva2VuTmFtZSIsIm5ld1R5cGVPZkFzc2V0Iiwic2V0TmV3VHlwZU9mQXNzZXQiLCJuZXdEZXNjcmlwdGlvbiIsInNldE5ld0Rlc2NyaXB0aW9uIiwibmV3TmZ0TWluaW5nRmVlIiwic2V0TmV3TmZ0TWluaW5nRmVlIiwibmV3SW1hZ2UiLCJzZXROZXdJbWFnZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNvbnRhaW5lciIsInRlbXBDb250ZXh0IiwiaXRlckNvbnRleHQiLCJjc3NDb250YWluZXIiLCJjc3NDb250ZXh0IiwibXVpVHlwb2dyYXBoeVJvb3QiLCJtdWlUeXBvZ3JhcGh5SDEiLCJtdWlGb3JtSGVscGVyVGV4dFJvb3QiLCJjc3NBY2NvdW50TGlua0NvbnRlbnQiLCJtdWlUeXBvZ3JhcGh5SDMiLCJtdWlGb3JtQ29udHJvbFJvb3QiLCJtdWlGb3JtTGFiZWxSb290IiwibXVpSW5wdXRMYWJlbFJvb3QiLCJtdWlJbnB1dExhYmVsRm9ybUNvbnRyb2wiLCJtdWlJbnB1dExhYmVsQW5pbWF0ZWQiLCJtdWlJbnB1dEJhc2VSb290IiwibXVpSW5wdXRSb290IiwibXVpSW5wdXRVbmRlcmxpbmUiLCJjc3NJbnB1dCIsIm11aUlucHV0QmFzZUZvcm1Db250cm9sIiwibXVpSW5wdXRGb3JtQ29udHJvbCIsIm11aUlucHV0QmFzZUlucHV0IiwibXVpSW5wdXRJbnB1dCIsInZhbHVlIiwibXVpRXJyb3IiLCJtdWlGb3JtQ29udHJvbEZ1bGxXaWR0aCIsIm11aUlucHV0QmFzZUZ1bGxXaWR0aCIsIm11aUlucHV0RnVsbFdpZHRoIiwibXVpQm94Um9vdCIsImNzc1Bhc3N3b3JkQ29udGVudCIsImNzc0JveENvbnRlbnQiLCJtdWlGb3JtQ29udHJvbExhYmVsUm9vdCIsIm11aUJ1dHRvbkJhc2VSb290IiwibXVpSWNvbkJ1dHRvblJvb3QiLCJjc3NCdXR0b25Db250ZW50IiwibXVpQ2hlY2tCb3hSb290IiwibXVpQ2hlY2tCb3hDb2xvclNlY29uZGFyeSIsIm11aUljb25CdXR0b25Db2xvclNlY29uZGFyeSIsIm11aUljb25CdXR0b25MYWJlbCIsImNzc0NoZWNrQm94IiwibXVpU3ZnSWNvblJvb3QiLCJtdWlGb3JtQ29udHJvbExhYmVsTGFiZWwiLCJtdWlUeXBvZ3JhcGh5Qm9keTEiLCJtdWlMaW5rUm9vdCIsIm11aUxpbmtVbmRlckxpbmVIb3ZlciIsIm11aVR5cG9ncmFwaHlDb2xvclByaW1hcnkiLCJjc3NGb3JtIiwiY3NzTWVkaWEiLCJtdWlCdXR0b25Sb290IiwibXVpQnV0dG9uQ29udGFpbmVkIiwibXVpQnV0dG9uQ29udGFpbmVkUHJpbWFyeSIsIm11aUJ1dHRvbkxhYmVsIiwiY3NzTWVkaWFDb250ZW50IiwiY3NzU3ZnIiwiY3NzU3ZnQ29udGVudCIsIm11aUlucHV0TGFiZWxTaHJpbmsiLCJtdWlJbnB1dExhYmVsRmlsbGVkIiwibXVpU2VsZWN0Um9vdCIsIm11aVNlbGVjdFNlbGVjdCIsIm11aVNlbGVjdFNlbGVjdE1lbnUiLCJtdWlTZWxlY3ROYXRpdmVJbnB1dCIsIm11aVNlbGVjdEljb24iLCJtdWlTZWxlY3RJY29uT3BlbiIsIm11aUZvcm1IZWxwZXJUZXh0RmlsbGVkIiwibXVpSW5wdXRCYXNlTXVsdGlMaW5lIiwibXVpSW5wdXRNdWx0aUxpbmUiLCJtdWlJbnB1dEJhc2VJbnB1dE11bHRpTGluZSIsIm11aUlucHV0SW5wdXRNdWx0aUxpbmUiXSwic291cmNlUm9vdCI6IiJ9