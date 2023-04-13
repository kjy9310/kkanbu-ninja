exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 17409:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 77914, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 65110, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23682, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31390, 23))

/***/ }),

/***/ 43620:
/***/ (() => {



/***/ }),

/***/ 64180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83146);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "KKANBU - ninja?",
    description: "KKANBU 1 han da"
};
function RootLayout({ children , params  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        style: {
                            fontSize: 50,
                            marginBottom: 10,
                            textAlign: "center",
                            color: "white"
                        },
                        children: [
                            "깐부 Ha",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    fontSize: 38,
                                    letterSpacing: "-0.14em"
                                },
                                children: "nin"
                            }),
                            " ",
                            "ja"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            padding: "0 0 10px",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "topButton",
                                style: {
                                    backgroundColor: "#b34afb"
                                },
                                target: "_blank",
                                href: "https://www.twitch.tv/ham_90",
                                children: "twitch"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "topButton",
                                style: {
                                    backgroundColor: "#fb4ab0"
                                },
                                target: "_blank",
                                href: "https://tgd.kr/s/ham_90/",
                                children: "햄게더"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "topButton",
                                style: {
                                    backgroundColor: "#626262"
                                },
                                target: "_blank",
                                href: "https://docs.google.com/spreadsheets/d/1mQ-QUtPBI_T4sTcI1SBgl1QOdtiq_ONgxqzO6FyCpaY/edit#gid=2071372347",
                                children: "깐부시트"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "topButton",
                                style: {
                                    backgroundColor: "#621462"
                                },
                                href: "/",
                                children: "깐부build"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "topButton",
                                style: {
                                    backgroundColor: "#3c0c9b"
                                },
                                href: "/request",
                                children: `"해줘"판`
                            })
                        ]
                    }),
                    children
                ]
            })
        ]
    });
}


/***/ }),

/***/ 11193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23854);
/* harmony import */ var next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_server_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20459);
/* harmony import */ var next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93869);
/* harmony import */ var next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2__);
  
  
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const pathname = "/"
    const routeRegex = (0,next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2__.getNamedRouteRegex)(pathname, false)
    const route = (0,next_dist_server_server_utils__WEBPACK_IMPORTED_MODULE_1__/* .interpolateDynamicPath */ .oE)(pathname, props.params, routeRegex)

    const imageData = {"type":"image/x-icon","sizes":"any"};

    return {
      ...imageData,
      url: next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0___default().join(route, "favicon.ico" + ""),
    }
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;