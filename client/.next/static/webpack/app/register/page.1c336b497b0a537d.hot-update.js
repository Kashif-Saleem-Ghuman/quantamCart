"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./app/register/page.js":
/*!******************************!*\
  !*** ./app/register/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setpassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    /**\n   * @description show toast notification\n   * @param {*} message\n   * @param {*} type\n   * @returns toast\n   */ const notify = (message, type)=>{\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(message, {\n            type: type,\n            closeOnClick: true,\n            pauseOnHover: true\n        });\n    };\n    /**\n   * @description handleSubmit\n   * @param {*} event\n   */ const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/api/register\", {\n                name,\n                email,\n                password\n            });\n            console.log(response.data);\n            notify(\"Registeration Successull, Please Login\", \"success\");\n        } catch (error) {\n            console.error(\"Error:\", console.error(\"Error:\", error.response ? error.response.data : error.message));\n            notify(error.response.data, \"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center my-3\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-8 offser-md-2 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-2\",\n                            value: name,\n                            onChange: (input)=>setName(input.target.value),\n                            placeholder: \"Enter name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-2\",\n                            value: email,\n                            onChange: (input)=>setEmail(input.target.value),\n                            placeholder: \"Enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-2\",\n                            value: password,\n                            onChange: (input)=>setpassword(input.target.value),\n                            placeholder: \"Enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-gri\"\n                        }, void 0, false, {\n                            fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                            lineNumber: 86,\n                            columnNumber: 3\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/kashif/git/edemy/Re_Started_For_Practice/client/app/register/page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"I7UBa72ccssIAEYNiYEd/hLgKxA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3Rlci9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ2Q7QUFDYTtBQUNVO0FBRWpELE1BQU1LLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDOzs7OztHQUtDLEdBQ0QsTUFBTWEsU0FBUyxDQUFDQyxTQUFTQztRQUN2QmIscURBQUtBLENBQUNZLFNBQVM7WUFDYkMsTUFBTUE7WUFDTkMsY0FBYztZQUNkQyxjQUFjO1FBQ2hCO0lBQ0Y7SUFFQTs7O0dBR0MsR0FDRCxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLElBQUksQ0FBQyxzQ0FBc0M7Z0JBQ3RFakI7Z0JBQ0FFO2dCQUNBRTtZQUNGO1lBRUFjLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksSUFBSTtZQUN6QlosT0FBTywwQ0FBMEM7UUFDbkQsRUFBRSxPQUFPYSxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FDWCxVQUNBSCxRQUFRRyxLQUFLLENBQ1gsVUFDQUEsTUFBTUwsUUFBUSxHQUFHSyxNQUFNTCxRQUFRLENBQUNJLElBQUksR0FBR0MsTUFBTVosT0FBTztZQUd4REQsT0FBT2EsTUFBTUwsUUFBUSxDQUFDSSxJQUFJLEVBQUU7UUFDOUI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0U7Z0JBQUdDLFdBQVU7MEJBQW1COzs7Ozs7MEJBQ2pDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUtDLFVBQVViOztzQ0FDZCw4REFBQ2M7NEJBQ0NqQixNQUFLOzRCQUNMYSxXQUFVOzRCQUNWSyxPQUFPNUI7NEJBQ1A2QixVQUFVLENBQUNGLFFBQVUxQixRQUFRMEIsTUFBTUcsTUFBTSxDQUFDRixLQUFLOzRCQUMvQ0csYUFBWTs0QkFDWkMsUUFBUTs7Ozs7O3NDQUdWLDhEQUFDTDs0QkFDQ2pCLE1BQUs7NEJBQ0xhLFdBQVU7NEJBQ1ZLLE9BQU8xQjs0QkFDUDJCLFVBQVUsQ0FBQ0YsUUFBVXhCLFNBQVN3QixNQUFNRyxNQUFNLENBQUNGLEtBQUs7NEJBQ2hERyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBR1YsOERBQUNMOzRCQUNDakIsTUFBSzs0QkFDTGEsV0FBVTs0QkFDVkssT0FBT3hCOzRCQUNQeUIsVUFBVSxDQUFDRixRQUFVdEIsWUFBWXNCLE1BQU1HLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDbkRHLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FFbEIsOERBQUNSOzRCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpCO0dBdEZNeEI7QUF3Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3JlZ2lzdGVyL3BhZ2UuanM/MGJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgU3luY091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldHBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gc2hvdyB0b2FzdCBub3RpZmljYXRpb25cbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7Kn0gdHlwZVxuICAgKiBAcmV0dXJucyB0b2FzdFxuICAgKi9cbiAgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2UsIHR5cGUpID0+IHtcbiAgICB0b2FzdChtZXNzYWdlLCB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gaGFuZGxlU3VibWl0XG4gICAqIEBwYXJhbSB7Kn0gZXZlbnRcbiAgICovXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVnaXN0ZXJcIiwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICBub3RpZnkoXCJSZWdpc3RlcmF0aW9uIFN1Y2Nlc3N1bGwsIFBsZWFzZSBMb2dpblwiLCBcInN1Y2Nlc3NcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiRXJyb3I6XCIsXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJFcnJvcjpcIixcbiAgICAgICAgICBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEgOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBub3RpZnkoZXJyb3IucmVzcG9uc2UuZGF0YSwgXCJlcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTNcIj5SZWdpc3RlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtOCBvZmZzZXItbWQtMiBwYi01XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC0yXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4gc2V0TmFtZShpbnB1dC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtMlwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGlucHV0KSA9PiBzZXRFbWFpbChpbnB1dC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTJcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4gc2V0cGFzc3dvcmQoaW5wdXQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpXCI+XG5cbiAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ0b2FzdCIsIlN5bmNPdXRsaW5lZCIsInBhZ2UiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldHBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/register/page.js\n"));

/***/ })

});