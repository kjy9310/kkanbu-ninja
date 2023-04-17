"use strict";
<<<<<<< HEAD
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _extends;
    }
}));
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 92648:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 91598:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireWildcard;
    }
}));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}


/***/ }),

/***/ 14600:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(18038));
var _head = _interop_require_default(__webpack_require__(68965));
const statusCodes = {
    400: "Bad Request",
    404: "This page could not be found",
    405: "Method Not Allowed",
    500: "Internal Server Error"
};
function _getInitialProps({ res , err  }) {
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block",
        textAlign: "left"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        paddingRight: 23,
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
var _Component;
class Error extends (_Component = _react.default.Component) {
    render() {
        const { statusCode , withDarkMode =true  } = this.props;
        const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
        return /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.error
        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : "Application error: a client-side exception has occurred")), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */ __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : ""}`
            }
        }), statusCode ? /*#__PURE__*/ _react.default.createElement("h1", {
            className: "next-error-h1",
            style: styles.h1
        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.desc
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            style: styles.h2
        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
}
Error.displayName = "ErrorPage";
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
exports["default"] = Error;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_error.js.map


/***/ }),

/***/ 68965:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultHead = defaultHead;
exports["default"] = void 0;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(91598)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(18038));
var _sideEffect = _interop_require_default(__webpack_require__(82470));
var _ampContext = __webpack_require__(53918);
var _headManagerContext = __webpack_require__(92796);
var _ampMode = __webpack_require__(45732);
var _warnOnce = __webpack_require__(40618);
function defaultHead(inAmpMode = false) {
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode  } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = _extends({}, c.props || {});
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children  }) {
    const ampState = (0, _react).useContext(_ampContext.AmpStateContext);
    const headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideEffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampMode).isInAmpMode(ampState)
    }, children);
}
var _default = Head;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 18038:
=======
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_extends.js":
/*!***************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_extends.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _extends;\n    }\n}));\nfunction extends_() {\n    extends_ = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return extends_.apply(this, arguments);\n}\nfunction _extends() {\n    return extends_.apply(this, arguments);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fZXh0ZW5kcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ra2FuYnUtbmluamEvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fZXh0ZW5kcy5qcz8zOThhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHM7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBleHRlbmRzXygpIHtcbiAgICBleHRlbmRzXyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHNvdXJjZSl7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBleHRlbmRzXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgcmV0dXJuIGV4dGVuZHNfLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_extends.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2thbmJ1LW5pbmphLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_wildcard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_wildcard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireWildcard;\n    }\n}));\nfunction _getRequireWildcardCache(nodeInterop) {\n    if (typeof WeakMap !== \"function\") return null;\n    var cacheBabelInterop = new WeakMap();\n    var cacheNodeInterop = new WeakMap();\n    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {\n        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;\n    })(nodeInterop);\n}\nfunction _interopRequireWildcard(obj, nodeInterop) {\n    if (!nodeInterop && obj && obj.__esModule) {\n        return obj;\n    }\n    if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {\n        return {\n            default: obj\n        };\n    }\n    var cache = _getRequireWildcardCache(nodeInterop);\n    if (cache && cache.has(obj)) {\n        return cache.get(obj);\n    }\n    var newObj = {};\n    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n    for(var key in obj){\n        if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) {\n            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n            if (desc && (desc.get || desc.set)) {\n                Object.defineProperty(newObj, key, desc);\n            } else {\n                newObj[key] = obj[key];\n            }\n        }\n    }\n    newObj.default = obj;\n    if (cache) {\n        cache.set(obj, newObj);\n    }\n    return newObj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2trYW5idS1uaW5qYS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQuanM/MDUxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICAgIHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICAgIHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gICAgICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgICB9KShub2RlSW50ZXJvcCk7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7XG4gICAgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgICB9XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_wildcard.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52\n        fontFamily: 'system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: \"0 20px 0 0\",\n        paddingRight: 23,\n        fontSize: 24,\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: 14,\n        fontWeight: 400,\n        lineHeight: \"49px\",\n        margin: 0\n    }\n};\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                /* CSS minified from\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ${\n                  withDarkMode\n                    ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }`\n                    : ''\n                }\n               */ __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${withDarkMode ? \"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\" : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error;\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGRCxrQkFBZSxHQUFHLEtBQUs7QUFDdkIsSUFBSUcsMkJBQTJCQyxtSkFBK0Q7QUFDOUYsSUFBSUMsU0FBU0YseUJBQXlCQyxtQkFBT0EsQ0FBQyxvQkFBTztBQUNyRCxJQUFJRSxRQUFRSCx5QkFBeUJDLG1CQUFPQSxDQUFDLHVFQUFvQjtBQUNqRSxNQUFNRyxjQUFjO0lBQ2hCLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7QUFDVDtBQUNBLFNBQVNDLGlCQUFpQixFQUFFQyxJQUFHLEVBQUdDLElBQUcsRUFBRyxFQUFFO0lBQ3RDLE1BQU1DLGFBQWFGLE9BQU9BLElBQUlFLFVBQVUsR0FBR0YsSUFBSUUsVUFBVSxHQUFHRCxNQUFNQSxJQUFJQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBO0lBQ0o7QUFDSjtBQUNBLE1BQU1DLFNBQVM7SUFDWEMsT0FBTztRQUNILDBGQUEwRjtRQUMxRkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsZ0JBQWdCO0lBQ3BCO0lBQ0FDLE1BQU07UUFDRkosU0FBUztRQUNURCxXQUFXO0lBQ2Y7SUFDQU0sSUFBSTtRQUNBTCxTQUFTO1FBQ1RNLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsZUFBZTtRQUNmQyxZQUFZO0lBQ2hCO0lBQ0FDLElBQUk7UUFDQUosVUFBVTtRQUNWQyxZQUFZO1FBQ1pFLFlBQVk7UUFDWkwsUUFBUTtJQUNaO0FBQ0o7QUFDQSxJQUFJTztBQUNKLE1BQU1DLGNBQWVELENBQUFBLGFBQWF6QixPQUFPSCxPQUFPLENBQUM4QixTQUFTO0lBQ3REQyxTQUFTO1FBQ0wsTUFBTSxFQUFFdEIsV0FBVSxFQUFHdUIsY0FBYyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFDdkQsTUFBTUMsUUFBUSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxJQUFJN0IsV0FBVyxDQUFDSSxXQUFXLElBQUk7UUFDN0QsT0FBTyxXQUFXLEdBQUdOLE9BQU9ILE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQyxPQUFPO1lBQ3JEQyxPQUFPMUIsT0FBT0MsS0FBSztRQUN2QixHQUFHLFdBQVcsR0FBR1IsT0FBT0gsT0FBTyxDQUFDbUMsYUFBYSxDQUFDL0IsTUFBTUosT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEdBQUdHLE9BQU9ILE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRTFCLGFBQWEsQ0FBQyxFQUFFQSxXQUFXLEVBQUUsRUFBRXlCLE1BQU0sQ0FBQyxHQUFHLHlEQUF5RCxJQUFJLFdBQVcsR0FBRy9CLE9BQU9ILE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxXQUFXLEdBQUdoQyxPQUFPSCxPQUFPLENBQUNtQyxhQUFhLENBQUMsU0FBUztZQUMzVUUseUJBQXlCO2dCQUNyQjs7Ozs7Ozs7Ozs7Ozs7OztlQWdCRCxHQUFHQyxRQUFRLENBQUMsOEZBQThGLEVBQUVOLGVBQWUsb0lBQW9JLEVBQUUsQ0FBQyxDQUFDO1lBQ3RRO1FBQ0osSUFBSXZCLGFBQWEsV0FBVyxHQUFHTixPQUFPSCxPQUFPLENBQUNtQyxhQUFhLENBQUMsTUFBTTtZQUM5REksV0FBVztZQUNYSCxPQUFPMUIsT0FBT1UsRUFBRTtRQUNwQixHQUFHWCxjQUFjLElBQUksRUFBRSxXQUFXLEdBQUdOLE9BQU9ILE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQyxPQUFPO1lBQ3JFQyxPQUFPMUIsT0FBT1MsSUFBSTtRQUN0QixHQUFHLFdBQVcsR0FBR2hCLE9BQU9ILE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQyxNQUFNO1lBQ2hEQyxPQUFPMUIsT0FBT2lCLEVBQUU7UUFDcEIsR0FBRyxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxJQUFJekIsYUFBYXlCLFFBQVEsV0FBVyxHQUFHL0IsT0FBT0gsT0FBTyxDQUFDbUMsYUFBYSxDQUFDaEMsT0FBT0gsT0FBTyxDQUFDd0MsUUFBUSxFQUFFLElBQUksRUFBRSx5R0FBeUcsRUFBRTtJQUNyTztBQUNKO0FBQ0FYLE1BQU1ZLFdBQVcsR0FBRztBQUNwQlosTUFBTWEsZUFBZSxHQUFHcEM7QUFDeEJ1QixNQUFNYyxtQkFBbUIsR0FBR3JDO0FBQzVCUixrQkFBZSxHQUFHK0I7QUFFbEIsSUFBSSxDQUFDLE9BQU8vQixRQUFRRSxPQUFPLEtBQUssY0FBZSxPQUFPRixRQUFRRSxPQUFPLEtBQUssWUFBWUYsUUFBUUUsT0FBTyxLQUFLLElBQUksS0FBTSxPQUFPRixRQUFRRSxPQUFPLENBQUM0QyxVQUFVLEtBQUssYUFBYTtJQUNyS2hELE9BQU9DLGNBQWMsQ0FBQ0MsUUFBUUUsT0FBTyxFQUFFLGNBQWM7UUFBRUQsT0FBTyxJQUFJO0lBQUM7SUFDbkVILE9BQU9pRCxNQUFNLENBQUMvQyxRQUFRRSxPQUFPLEVBQUVGO0lBQy9CZ0QsT0FBT2hELE9BQU8sR0FBR0EsUUFBUUUsT0FBTztBQUNsQyxDQUFDLENBRUQsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2thbmJ1LW5pbmphLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanNcIikuZGVmYXVsdDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xuICAgIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcidcbn07XG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZVxuICAgIH07XG59XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZXJyb3I6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2Jsb2IvbWFpbi9tb2Rlcm4tbm9ybWFsaXplLmNzcyNMMzgtTDUyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksXCJTZWdvZSBVSVwiLFJvYm90byxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgMjBweCAwIDAnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDIzLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4J1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgfVxufTtcbnZhciBfQ29tcG9uZW50O1xuY2xhc3MgRXJyb3IgZXh0ZW5kcyAoX0NvbXBvbmVudCA9IF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCkge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICwgd2l0aERhcmtNb2RlID10cnVlICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgLyogQ1NTIG1pbmlmaWVkIGZyb21cbiAgICAgICAgICAgICAgICBib2R5IHsgbWFyZ2luOiAwOyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICB3aXRoRGFya01vZGVcbiAgICAgICAgICAgICAgICAgICAgPyBgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgICAgICAgICAgYm9keSB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMDAwOyB9XG4gICAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAqLyBfX2h0bWw6IGBib2R5e2NvbG9yOiMwMDA7YmFja2dyb3VuZDojZmZmO21hcmdpbjowfS5uZXh0LWVycm9yLWgxe2JvcmRlci1yaWdodDoxcHggc29saWQgcmdiYSgwLDAsMCwuMyl9JHt3aXRoRGFya01vZGUgPyAnQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXtib2R5e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMDAwfS5uZXh0LWVycm9yLWgxe2JvcmRlci1yaWdodDoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyl9fScgOiAnJ31gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5leHQtZXJyb3ItaDFcIixcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSk7XG4gICAgfVxufVxuRXJyb3IuZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJztcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG5FcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfaGVhZCIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJzdHlsZXMiLCJlcnJvciIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJoMSIsIm1hcmdpbiIsInBhZGRpbmdSaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJsaW5lSGVpZ2h0IiwiaDIiLCJfQ29tcG9uZW50IiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ3aXRoRGFya01vZGUiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIl9fZXNNb2R1bGUiLCJhc3NpZ24iLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.defaultHead = defaultHead;\nexports[\"default\"] = void 0;\nvar _extends = (__webpack_require__(/*! @swc/helpers/lib/_extends.js */ \"./node_modules/@swc/helpers/lib/_extends.js\")[\"default\"]);\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _interop_require_wildcard = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_wildcard.js */ \"./node_modules/@swc/helpers/lib/_interop_require_wildcard.js\")[\"default\"]);\nvar _react = _interop_require_wildcard(__webpack_require__(/*! react */ \"react\"));\nvar _sideEffect = _interop_require_default(__webpack_require__(/*! ./side-effect */ \"./side-effect\"));\nvar _ampContext = __webpack_require__(/*! ./amp-context */ \"./amp-context\");\nvar _headManagerContext = __webpack_require__(/*! ./head-manager-context */ \"./head-manager-context\");\nvar _ampMode = __webpack_require__(/*! ./amp-mode */ \"./amp-mode\");\nvar _warnOnce = __webpack_require__(/*! ./utils/warn-once */ \"./utils/warn-once\");\nfunction defaultHead(inAmpMode = false) {\n    const head = [\n        /*#__PURE__*/ _react.default.createElement(\"meta\", {\n            charSet: \"utf-8\"\n        })\n    ];\n    if (!inAmpMode) {\n        head.push(/*#__PURE__*/ _react.default.createElement(\"meta\", {\n            name: \"viewport\",\n            content: \"width=device-width\"\n        }));\n    }\n    return head;\n}\nfunction onlyReactElement(list, child) {\n    // React children can be \"string\" or \"number\" in this case we ignore them for backwards compat\n    if (typeof child === \"string\" || typeof child === \"number\") {\n        return list;\n    }\n    // Adds support for React.Fragment\n    if (child.type === _react.default.Fragment) {\n        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{\n            if (typeof fragmentChild === \"string\" || typeof fragmentChild === \"number\") {\n                return fragmentList;\n            }\n            return fragmentList.concat(fragmentChild);\n        }, []));\n    }\n    return list.concat(child);\n}\nconst METATYPES = [\n    \"name\",\n    \"httpEquiv\",\n    \"charSet\",\n    \"itemProp\"\n];\n/*\n returns a function for filtering head child elements\n which shouldn't be duplicated, like <title/>\n Also adds support for deduplicated `key` properties\n*/ function unique() {\n    const keys = new Set();\n    const tags = new Set();\n    const metaTypes = new Set();\n    const metaCategories = {};\n    return (h)=>{\n        let isUnique = true;\n        let hasKey = false;\n        if (h.key && typeof h.key !== \"number\" && h.key.indexOf(\"$\") > 0) {\n            hasKey = true;\n            const key = h.key.slice(h.key.indexOf(\"$\") + 1);\n            if (keys.has(key)) {\n                isUnique = false;\n            } else {\n                keys.add(key);\n            }\n        }\n        // eslint-disable-next-line default-case\n        switch(h.type){\n            case \"title\":\n            case \"base\":\n                if (tags.has(h.type)) {\n                    isUnique = false;\n                } else {\n                    tags.add(h.type);\n                }\n                break;\n            case \"meta\":\n                for(let i = 0, len = METATYPES.length; i < len; i++){\n                    const metatype = METATYPES[i];\n                    if (!h.props.hasOwnProperty(metatype)) continue;\n                    if (metatype === \"charSet\") {\n                        if (metaTypes.has(metatype)) {\n                            isUnique = false;\n                        } else {\n                            metaTypes.add(metatype);\n                        }\n                    } else {\n                        const category = h.props[metatype];\n                        const categories = metaCategories[metatype] || new Set();\n                        if ((metatype !== \"name\" || !hasKey) && categories.has(category)) {\n                            isUnique = false;\n                        } else {\n                            categories.add(category);\n                            metaCategories[metatype] = categories;\n                        }\n                    }\n                }\n                break;\n        }\n        return isUnique;\n    };\n}\n/**\n *\n * @param headChildrenElements List of children of <Head>\n */ function reduceComponents(headChildrenElements, props) {\n    const { inAmpMode  } = props;\n    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{\n        const key = c.key || i;\n        if (false) {}\n        if (true) {\n            // omit JSON-LD structured data snippets from the warning\n            if (c.type === \"script\" && c.props[\"type\"] !== \"application/ld+json\") {\n                const srcMessage = c.props[\"src\"] ? `<script> tag with src=\"${c.props[\"src\"]}\"` : `inline <script>`;\n                (0, _warnOnce).warnOnce(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \\nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);\n            } else if (c.type === \"link\" && c.props[\"rel\"] === \"stylesheet\") {\n                (0, _warnOnce).warnOnce(`Do not add stylesheets using next/head (see <link rel=\"stylesheet\"> tag with href=\"${c.props[\"href\"]}\"). Use Document instead. \\nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);\n            }\n        }\n        return /*#__PURE__*/ _react.default.cloneElement(c, {\n            key\n        });\n    });\n}\n/**\n * This component injects elements to `<head>` of your page.\n * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.\n */ function Head({ children  }) {\n    const ampState = (0, _react).useContext(_ampContext.AmpStateContext);\n    const headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);\n    return /*#__PURE__*/ _react.default.createElement(_sideEffect.default, {\n        reduceComponentsToState: reduceComponents,\n        headManager: headManager,\n        inAmpMode: (0, _ampMode).isInAmpMode(ampState)\n    }, children);\n}\nvar _default = Head;\nexports[\"default\"] = _default;\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=head.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFDYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGRCxtQkFBbUIsR0FBR0U7QUFDdEJGLGtCQUFlLEdBQUcsS0FBSztBQUN2QixJQUFJSSxXQUFXQyxtSEFBK0M7QUFDOUQsSUFBSUMsMkJBQTJCRCxtSkFBK0Q7QUFDOUYsSUFBSUUsNEJBQTRCRixxSkFBZ0U7QUFDaEcsSUFBSUcsU0FBU0QsMEJBQTBCRixtQkFBT0EsQ0FBQyxvQkFBTztBQUN0RCxJQUFJSSxjQUFjSCx5QkFBeUJELG1CQUFPQSxDQUFDLG9DQUFlO0FBQ2xFLElBQUlLLGNBQWNMLG1CQUFPQSxDQUFDLG9DQUFlO0FBQ3pDLElBQUlNLHNCQUFzQk4sbUJBQU9BLENBQUMsc0RBQXdCO0FBQzFELElBQUlPLFdBQVdQLG1CQUFPQSxDQUFDLDhCQUFZO0FBQ25DLElBQUlRLFlBQVlSLG1CQUFPQSxDQUFDLDRDQUFtQjtBQUUzQyxTQUFTSCxZQUFZWSxZQUFZLEtBQUssRUFBRTtJQUNwQyxNQUFNQyxPQUFPO1FBQ1QsV0FBVyxHQUFHUCxPQUFPTCxPQUFPLENBQUNhLGFBQWEsQ0FBQyxRQUFRO1lBQy9DQyxTQUFTO1FBQ2I7S0FDSDtJQUNELElBQUksQ0FBQ0gsV0FBVztRQUNaQyxLQUFLRyxJQUFJLENBQUMsV0FBVyxHQUFHVixPQUFPTCxPQUFPLENBQUNhLGFBQWEsQ0FBQyxRQUFRO1lBQ3pERyxNQUFNO1lBQ05DLFNBQVM7UUFDYjtJQUNKLENBQUM7SUFDRCxPQUFPTDtBQUNYO0FBQ0EsU0FBU00saUJBQWlCQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtJQUNuQyw4RkFBOEY7SUFDOUYsSUFBSSxPQUFPQSxVQUFVLFlBQVksT0FBT0EsVUFBVSxVQUFVO1FBQ3hELE9BQU9EO0lBQ1gsQ0FBQztJQUNELGtDQUFrQztJQUNsQyxJQUFJQyxNQUFNQyxJQUFJ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Qm1FLGtCQUFrQjtJQUNqRixPQUFPLFdBQVcsR0FBR3RFLE9BQU9MLE9BQU8sQ0FBQ2EsYUFBYSxDQUFDUCxZQUFZTixPQUFPLEVBQUU7UUFDbkU0RSx5QkFBeUJ2QjtRQUN6QnFCLGFBQWFBO1FBQ2IvRCxXQUFXLENBQUMsR0FBR0YsUUFBUSxFQUFFb0UsV0FBVyxDQUFDTjtJQUN6QyxHQUFHNUM7QUFDUDtBQUNBLElBQUltRCxXQUFXUjtBQUNmekUsa0JBQWUsR0FBR2lGO0FBRWxCLElBQUksQ0FBQyxPQUFPakYsUUFBUUcsT0FBTyxLQUFLLGNBQWUsT0FBT0gsUUFBUUcsT0FBTyxLQUFLLFlBQVlILFFBQVFHLE9BQU8sS0FBSyxJQUFJLEtBQU0sT0FBT0gsUUFBUUcsT0FBTyxDQUFDK0UsVUFBVSxLQUFLLGFBQWE7SUFDcktwRixPQUFPQyxjQUFjLENBQUNDLFFBQVFHLE9BQU8sRUFBRSxjQUFjO1FBQUVGLE9BQU8sSUFBSTtJQUFDO0lBQ25FSCxPQUFPcUYsTUFBTSxDQUFDbkYsUUFBUUcsT0FBTyxFQUFFSDtJQUMvQm9GLE9BQU9wRixPQUFPLEdBQUdBLFFBQVFHLE9BQU87QUFDbEMsQ0FBQyxDQUVELGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2trYW5idS1uaW5qYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzP2ZiNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdEhlYWQgPSBkZWZhdWx0SGVhZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19leHRlbmRzLmpzXCIpLmRlZmF1bHQ7XG52YXIgX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzXCIpLmRlZmF1bHQ7XG52YXIgX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQuanNcIikuZGVmYXVsdDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3NpZGVFZmZlY3QgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQocmVxdWlyZShcIi4vc2lkZS1lZmZlY3RcIikpO1xudmFyIF9hbXBDb250ZXh0ID0gcmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7XG52YXIgX2hlYWRNYW5hZ2VyQ29udGV4dCA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xudmFyIF9hbXBNb2RlID0gcmVxdWlyZShcIi4vYW1wLW1vZGVcIik7XG52YXIgX3dhcm5PbmNlID0gcmVxdWlyZShcIi4vdXRpbHMvd2Fybi1vbmNlXCIpO1xuXG5mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGhlYWQgPSBbXG4gICAgICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgY2hhclNldDogXCJ1dGYtOFwiXG4gICAgICAgIH0pXG4gICAgXTtcbiAgICBpZiAoIWluQW1wTW9kZSkge1xuICAgICAgICBoZWFkLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWQ7XG59XG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KGxpc3QsIGNoaWxkKSB7XG4gICAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoKGZyYWdtZW50TGlzdCwgZnJhZ21lbnRDaGlsZCk9PntcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpO1xuICAgICAgICB9LCBbXSkpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO1xufVxuY29uc3QgTUVUQVRZUEVTID0gW1xuICAgICduYW1lJyxcbiAgICAnaHR0cEVxdWl2JyxcbiAgICAnY2hhclNldCcsXG4gICAgJ2l0ZW1Qcm9wJ1xuXTtcbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qLyBmdW5jdGlvbiB1bmlxdWUoKSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCB0YWdzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhQ2F0ZWdvcmllcyA9IHt9O1xuICAgIHJldHVybiAoaCk9PntcbiAgICAgICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGhhc0tleSA9IGZhbHNlO1xuICAgICAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICAgICAgICBoYXNLZXkgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICBzd2l0Y2goaC50eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICAgICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFncy5hZGQoaC50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNVbmlxdWU7XG4gICAgfTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkQ2hpbGRyZW5FbGVtZW50cyBMaXN0IG9mIGNoaWxkcmVuIG9mIDxIZWFkPlxuICovIGZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZENoaWxkcmVuRWxlbWVudHMsIHByb3BzKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUgIH0gPSBwcm9wcztcbiAgICByZXR1cm4gaGVhZENoaWxkcmVuRWxlbWVudHMucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKS5yZXZlcnNlKCkuY29uY2F0KGRlZmF1bHRIZWFkKGluQW1wTW9kZSkucmV2ZXJzZSgpKS5maWx0ZXIodW5pcXVlKCkpLnJldmVyc2UoKS5tYXAoKGMsIGkpPT57XG4gICAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIWluQW1wTW9kZSkge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ2hyZWYnXSAmJiAvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nXG4gICAgICAgICAgICBdLnNvbWUoKHVybCk9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgYy5wcm9wcyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIC8vIG9taXQgSlNPTi1MRCBzdHJ1Y3R1cmVkIGRhdGEgc25pcHBldHMgZnJvbSB0aGUgd2FybmluZ1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ3NjcmlwdCcgJiYgYy5wcm9wc1sndHlwZSddICE9PSAnYXBwbGljYXRpb24vbGQranNvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNNZXNzYWdlID0gYy5wcm9wc1snc3JjJ10gPyBgPHNjcmlwdD4gdGFnIHdpdGggc3JjPVwiJHtjLnByb3BzWydzcmMnXX1cImAgOiBgaW5saW5lIDxzY3JpcHQ+YDtcbiAgICAgICAgICAgICAgICAoMCwgX3dhcm5PbmNlKS53YXJuT25jZShgRG8gbm90IGFkZCA8c2NyaXB0PiB0YWdzIHVzaW5nIG5leHQvaGVhZCAoc2VlICR7c3JjTWVzc2FnZX0pLiBVc2UgbmV4dC9zY3JpcHQgaW5zdGVhZC4gXFxuU2VlIG1vcmUgaW5mbyBoZXJlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1zY3JpcHQtdGFncy1pbi1oZWFkLWNvbXBvbmVudGApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjLnR5cGUgPT09ICdsaW5rJyAmJiBjLnByb3BzWydyZWwnXSA9PT0gJ3N0eWxlc2hlZXQnKSB7XG4gICAgICAgICAgICAgICAgKDAsIF93YXJuT25jZSkud2Fybk9uY2UoYERvIG5vdCBhZGQgc3R5bGVzaGVldHMgdXNpbmcgbmV4dC9oZWFkIChzZWUgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiPiB0YWcgd2l0aCBocmVmPVwiJHtjLnByb3BzWydocmVmJ119XCIpLiBVc2UgRG9jdW1lbnQgaW5zdGVhZC4gXFxuU2VlIG1vcmUgaW5mbyBoZXJlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1zdHlsZXNoZWV0cy1pbi1oZWFkLWNvbXBvbmVudGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCB7XG4gICAgICAgICAgICBrZXlcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovIGZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiAgfSkge1xuICAgIGNvbnN0IGFtcFN0YXRlID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpO1xuICAgIGNvbnN0IGhlYWRNYW5hZ2VyID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2lkZUVmZmVjdC5kZWZhdWx0LCB7XG4gICAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiByZWR1Y2VDb21wb25lbnRzLFxuICAgICAgICBoZWFkTWFuYWdlcjogaGVhZE1hbmFnZXIsXG4gICAgICAgIGluQW1wTW9kZTogKDAsIF9hbXBNb2RlKS5pc0luQW1wTW9kZShhbXBTdGF0ZSlcbiAgICB9LCBjaGlsZHJlbik7XG59XG52YXIgX2RlZmF1bHQgPSBIZWFkO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdEhlYWQiLCJkZWZhdWx0IiwiX2V4dGVuZHMiLCJyZXF1aXJlIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwiX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCIsIl9yZWFjdCIsIl9zaWRlRWZmZWN0IiwiX2FtcENvbnRleHQiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2FtcE1vZGUiLCJfd2Fybk9uY2UiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY3JlYXRlRWxlbWVudCIsImNoYXJTZXQiLCJwdXNoIiwibmFtZSIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5Iiwia2V5IiwiaW5kZXhPZiIsInNsaWNlIiwiaGFzIiwiYWRkIiwiaSIsImxlbiIsImxlbmd0aCIsIm1ldGF0eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJyZWR1Y2VDb21wb25lbnRzIiwiaGVhZENoaWxkcmVuRWxlbWVudHMiLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwidW5kZWZpbmVkIiwiY2xvbmVFbGVtZW50Iiwic3JjTWVzc2FnZSIsIndhcm5PbmNlIiwiSGVhZCIsImFtcFN0YXRlIiwidXNlQ29udGV4dCIsIkFtcFN0YXRlQ29udGV4dCIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJpc0luQW1wTW9kZSIsIl9kZWZhdWx0IiwiX19lc01vZHVsZSIsImFzc2lnbiIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/head.js\n");

/***/ }),

/***/ "react":
/*!*******************************************!*\
  !*** external "next/dist/compiled/react" ***!
  \*******************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

<<<<<<< HEAD
/***/ 53918:
=======
/***/ "./amp-context":
/*!******************************************************!*\
  !*** external "next/dist/shared/lib/amp-context.js" ***!
  \******************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

<<<<<<< HEAD
/***/ 45732:
=======
/***/ "./amp-mode":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/amp-mode.js" ***!
  \***************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

<<<<<<< HEAD
/***/ 92796:
=======
/***/ "./head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

<<<<<<< HEAD
/***/ 82470:
=======
/***/ "./side-effect":
/*!******************************************************!*\
  !*** external "next/dist/shared/lib/side-effect.js" ***!
  \******************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

<<<<<<< HEAD
/***/ 40618:
=======
/***/ "./utils/warn-once":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/utils/warn-once.js" ***!
  \**********************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__(14600));
=======
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
>>>>>>> main
module.exports = __webpack_exports__;

})();