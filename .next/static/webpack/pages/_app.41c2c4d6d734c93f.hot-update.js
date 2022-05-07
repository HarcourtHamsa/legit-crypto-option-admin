"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.jsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var handleStart = function(url) {\n            return url !== router.asPath && setLoading(true);\n        };\n        var handleComplete = function(url) {\n            return url === router.asPath && setLoading(false);\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return function() {\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Admin - Expert Hub Trade\"\n                    }, void 0, false, {\n                        fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                    lineNumber: 38,\n                    columnNumber: 20\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                    lineNumber: 38,\n                    columnNumber: 52\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/harcourthamsa/Desktop/expert-hub-trade-admin/pages/_app.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"0BUTGuNHX7KAjbi2/y+OhWJjYfY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ21CO0FBQ0g7QUFFUDtBQUNXO0FBQ3RCO0FBQ2U7O0FBRTVDLFNBQVNRLEtBQUssQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNuQyxJQUE4QkwsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVYvQyxPQVVnQixHQUFnQkEsR0FBZSxHQUEvQixFQVZoQixVQVU0QixHQUFJQSxHQUFlLEdBQW5CO0lBQzFCLElBQU1RLE1BQU0sR0FBR1gsc0RBQVMsRUFBRTtJQUUxQkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVUsV0FBVyxHQUFHLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsS0FBS0YsTUFBTSxDQUFDRyxNQUFNLElBQUlKLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FBQTtRQUN0RSxJQUFNSyxjQUFjLEdBQUcsU0FBQ0YsR0FBRzttQkFBS0EsR0FBRyxLQUFLRixNQUFNLENBQUNHLE1BQU0sSUFBSUosVUFBVSxDQUFDLEtBQUssQ0FBQztTQUFBO1FBRTFFQyxNQUFNLENBQUNLLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFTCxXQUFXLENBQUMsQ0FBQztRQUNsREQsTUFBTSxDQUFDSyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUYsY0FBYyxDQUFDLENBQUM7UUFDeERKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVGLGNBQWMsQ0FBQyxDQUFDO1FBRXJELE9BQU8sV0FBTTtZQUNYSixNQUFNLENBQUNLLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixFQUFFTixXQUFXLENBQUMsQ0FBQztZQUNuREQsTUFBTSxDQUFDSyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRUgsY0FBYyxDQUFDLENBQUM7WUFDekRKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDRSxHQUFHLENBQUMsa0JBQWtCLEVBQUVILGNBQWMsQ0FBQyxDQUFDO1NBQ3ZELENBQUM7S0FDSCxDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ2hCLHVEQUFZOzswQkFDWCw4REFBQ0ssa0RBQUk7O2tDQUNILDhEQUFDZSxPQUFLO2tDQUFDLDBCQUF3Qjs7Ozs7NEJBQVE7a0NBQ3ZDLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NEJBQUc7a0NBQ2xFLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDM0IsNERBQWM7MEJBQ1pXLE9BQU8saUJBQUcsOERBQUNKLDJEQUFPO29CQUFDSSxPQUFPLEVBQUVBLE9BQU87Ozs7O3dCQUFJLGlCQUFHLDhEQUFDRixTQUFTLG9CQUFLQyxTQUFTOzs7O3dCQUFJOzs7OztvQkFDeEQ7Ozs7OztZQUNKLENBQ2Y7Q0FDSDtHQWhDUUYsS0FBSzs7UUFFR04sa0RBQVM7OztBQUZqQk0sS0FBQUEsS0FBSztBQWtDZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKHVybCkgPT4gdXJsICE9PSByb3V0ZXIuYXNQYXRoICYmIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAodXJsKSA9PiB1cmwgPT09IHJvdXRlci5hc1BhdGggJiYgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlQ29tcGxldGUpO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZUNvbXBsZXRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlU3RhcnQpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BZG1pbiAtIEV4cGVydCBIdWIgVHJhZGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+IDogPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn1cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJMb2FkaW5nIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImhhbmRsZVN0YXJ0IiwidXJsIiwiYXNQYXRoIiwiaGFuZGxlQ29tcGxldGUiLCJldmVudHMiLCJvbiIsIm9mZiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});