"use strict";
self["webpackHotUpdate_N_E"]("pages/makeNft",{

/***/ "./constant/index.js":
/*!***************************!*\
  !*** ./constant/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNFTOption": function() { return /* binding */ makeNFTOption; },
/* harmony export */   "BUSINESS": function() { return /* binding */ BUSINESS; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFrZU5mdC43Yjc4ZmIxZDFhNjBiNzI1YzZmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUFjO0FBQ1ZBLEVBQUFBLFdBQVcsRUFBRSxHQURIO0FBRVZDLEVBQUFBLFlBQVksRUFBRTtBQUZKLENBQWQ7QUFLTyxJQUFNQyxhQUFhLEdBQUMsQ0FDdkI7QUFDSUMsRUFBQUEsR0FBRyxFQUFFLEtBRFQ7QUFFSUMsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FEdUIsRUFLdkI7QUFDSUQsRUFBQUEsR0FBRyxFQUFFLElBRFQ7QUFFSUMsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FMdUIsQ0FBcEI7QUFXQSxJQUFNQyxRQUFRLEdBQUcsQ0FDcEI7QUFDSUYsRUFBQUEsR0FBRyxFQUFHLHFCQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRTtBQUZYLENBRG9CLEVBS3BCO0FBQ0lELEVBQUFBLEdBQUcsRUFBRyxtQkFEVjtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQUxvQixFQVNwQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUcsa0JBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFO0FBRlgsQ0FUb0IsRUFhcEI7QUFDSUQsRUFBQUEsR0FBRyxFQUFHLDBCQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRTtBQUZYLENBYm9CLEVBaUJwQjtBQUNJRCxFQUFBQSxHQUFHLEVBQUcsZUFEVjtBQUVJQyxFQUFBQSxLQUFLLEVBQUU7QUFGWCxDQWpCb0IsQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBUQUJMRVRfU0laRTogOTQzLFxyXG4gICAgREVTS1RPUF9TSVpFOiAxMjcwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlTkZUT3B0aW9uPVtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdORlQnLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUKE5vbiBGdW5naWJsZSBUb2tlbiknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ0ZUJyxcclxuICAgICAgICB0aXRsZTogJ0ZUKEZ1bmdpYmxlIFRva2VuKSdcclxuICAgIH1dXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJVU0lORVNTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdORlRzZm9yeW91ckJ1c2luZXNzJyxcclxuICAgICAgICB0aXRsZTogJ05GVHMgZm9yIHlvdXIgQnVzaW5lc3MnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdDcmVhdGVBQ29sbGVjdGlvbicsXHJcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgYSBDb2xsZWN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXkgOiAnQ3VzdG9tZXJBU3VwcG9ydCcsXHJcbiAgICAgICAgdGl0bGU6ICdDdXN0b21lciBBIFN1cHBvcnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdORlRTdGFuZGFyZENvbGxhYm9yYXRpb24nLFxyXG4gICAgICAgIHRpdGxlOiAnTkZUIFN0YW5kYXJkIENvbGxhYm9yYXRpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleSA6ICdTb21ldGhpbmdFbHNlJyxcclxuICAgICAgICB0aXRsZTogJ1NvbWV0aGluZyBFbHNlJ1xyXG4gICAgICBcclxuICAgIH1cclxuXSJdLCJuYW1lcyI6WyJUQUJMRVRfU0laRSIsIkRFU0tUT1BfU0laRSIsIm1ha2VORlRPcHRpb24iLCJrZXkiLCJ0aXRsZSIsIkJVU0lORVNTIl0sInNvdXJjZVJvb3QiOiIifQ==