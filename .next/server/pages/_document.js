"use strict";
<<<<<<< HEAD
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 17930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Html = Html;
exports.Main = Main;
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(18038));
var _constants = __webpack_require__(56724);
var _getPageFiles = __webpack_require__(94140);
var _htmlescape = __webpack_require__(89716);
var _isError = _interopRequireDefault(__webpack_require__(80676));
var _htmlContext = __webpack_require__(18743);
class Document extends _react.default.Component {
    /**
   * `getInitialProps` hook returns the context object with the addition of `renderPage`.
   * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
   */ static getInitialProps(ctx) {
        return ctx.defaultGetInitialProps(ctx);
    }
    render() {
        return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));
    }
}
exports["default"] = Document;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
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
/** Set of pages that have triggered a large data warning on production mode. */ const largePageDataWarnings = new Set();
function getDocumentFiles(buildManifest, pathname, inAmpMode) {
    const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, "/_app");
    const pageFiles =  true && inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
    return {
        sharedFiles,
        pageFiles,
        allFiles: [
            ...new Set([
                ...sharedFiles,
                ...pageFiles
            ])
        ]
    };
}
function getPolyfillScripts(context, props) {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const { assetPrefix , buildManifest , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = context;
    return buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>/*#__PURE__*/ _react.default.createElement("script", {
            key: polyfill,
            defer: !disableOptimizedLoading,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin,
            noModule: true,
            src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
        }));
}
function hasComponentProps(child) {
    return !!child && !!child.props;
}
function AmpStyles({ styles  }) {
    if (!styles) return null;
    // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
        const hasStyles = (el)=>{
            var ref, ref1;
            return el == null ? void 0 : (ref = el.props) == null ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref1.__html;
        };
        // @ts-ignore Property 'props' does not exist on type ReactElement
        styles.props.children.forEach((child)=>{
            if (Array.isArray(child)) {
                child.forEach((el)=>hasStyles(el) && curStyles.push(el));
            } else if (hasStyles(child)) {
                curStyles.push(child);
            }
        });
    }
    /* Add custom styles before AMP styles to prevent accidental overrides */ return /*#__PURE__*/ _react.default.createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
            __html: curStyles.map((style)=>style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
        }
    });
}
function getDynamicChunks(context, props, files) {
    const { dynamicImports , assetPrefix , isDevelopment , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = context;
    return dynamicImports.map((file)=>{
        if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
        return /*#__PURE__*/ _react.default.createElement("script", {
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            key: file,
            src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
}
function getScripts(context, props, files) {
    var ref;
    const { assetPrefix , buildManifest , isDevelopment , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = context;
    const normalScripts = files.allFiles.filter((file)=>file.endsWith(".js"));
    const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) == null ? void 0 : ref.filter((file)=>file.endsWith(".js"));
    return [
        ...normalScripts,
        ...lowPriorityScripts
    ].map((file)=>{
        return /*#__PURE__*/ _react.default.createElement("script", {
            key: file,
            src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
            nonce: props.nonce,
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
}
function getPreNextWorkerScripts(context, props) {
    const { assetPrefix , scriptLoader , crossOrigin , nextScriptWorkers  } = context;
    // disable `nextScriptWorkers` in edge runtime
    if (!nextScriptWorkers || "nodejs" === "edge") return null;
    try {
        let { partytownSnippet  } = require("@builder.io/partytown/integration");
        const children = Array.isArray(props.children) ? props.children : [
            props.children
        ];
        // Check to see if the user has defined their own Partytown configuration
        const userDefinedConfig = children.find((child)=>{
            var ref, ref2;
            return hasComponentProps(child) && (child == null ? void 0 : (ref = child.props) == null ? void 0 : (ref2 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref2.__html.length) && "data-partytown-config" in child.props;
        });
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/ _react.default.createElement("script", {
            "data-partytown-config": "",
            dangerouslySetInnerHTML: {
                __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
            }
        }), /*#__PURE__*/ _react.default.createElement("script", {
            "data-partytown": "",
            dangerouslySetInnerHTML: {
                __html: partytownSnippet()
            }
        }), (scriptLoader.worker || []).map((file, index)=>{
            const { strategy , src , children: scriptChildren , dangerouslySetInnerHTML , ...scriptProps } = file;
            let srcProps = {};
            if (src) {
                // Use external src if provided
                srcProps.src = src;
            } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                // Embed inline script if provided with dangerouslySetInnerHTML
                srcProps.dangerouslySetInnerHTML = {
                    __html: dangerouslySetInnerHTML.__html
                };
            } else if (scriptChildren) {
                // Embed inline script if provided with children
                srcProps.dangerouslySetInnerHTML = {
                    __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
                };
            } else {
                throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
            }
            return /*#__PURE__*/ _react.default.createElement("script", Object.assign({}, srcProps, scriptProps, {
                type: "text/partytown",
                key: src || index,
                nonce: props.nonce,
                "data-nscript": "worker",
                crossOrigin: props.crossOrigin || crossOrigin
            }));
        }));
    } catch (err) {
        if ((0, _isError).default(err) && err.code !== "MODULE_NOT_FOUND") {
            console.warn(`Warning: ${err.message}`);
        }
        return null;
    }
}
function getPreNextScripts(context, props) {
    const { scriptLoader , disableOptimizedLoading , crossOrigin  } = context;
    const webWorkerScripts = getPreNextWorkerScripts(context, props);
    const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter((script)=>script.src).map((file, index)=>{
        const { strategy , ...scriptProps } = file;
        return /*#__PURE__*/ _react.default.createElement("script", Object.assign({}, scriptProps, {
            key: scriptProps.src || index,
            defer: scriptProps.defer ?? !disableOptimizedLoading,
            nonce: props.nonce,
            "data-nscript": "beforeInteractive",
            crossOrigin: props.crossOrigin || crossOrigin
        }));
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);
}
function getHeadHTMLProps(props) {
    const { crossOrigin , nonce , ...restProps } = props;
    // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>
    const headProps = restProps;
    return headProps;
}
function getAmpPath(ampPath, asPath) {
    return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}
function getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix = "") {
    if (!nextFontManifest) {
        return {
            preconnect: null,
            preload: null
        };
    }
    const appFontsEntry = nextFontManifest.pages["/_app"];
    const pageFontsEntry = nextFontManifest.pages[dangerousAsPath];
    const preloadedFontFiles = [
        ...appFontsEntry ?? [],
        ...pageFontsEntry ?? []
    ];
    // If no font files should preload but there's an entry for the path, add a preconnect tag.
    const preconnectToSelf = !!(preloadedFontFiles.length === 0 && (appFontsEntry || pageFontsEntry));
    return {
        preconnect: preconnectToSelf ? /*#__PURE__*/ _react.default.createElement("link", {
            "data-next-font": nextFontManifest.pagesUsingSizeAdjust ? "size-adjust" : "",
            rel: "preconnect",
            href: "/",
            crossOrigin: "anonymous"
        }) : null,
        preload: preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{
            const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
            return /*#__PURE__*/ _react.default.createElement("link", {
                key: fontFile,
                rel: "preload",
                href: `${assetPrefix}/_next/${encodeURI(fontFile)}`,
                as: "font",
                type: `font/${ext}`,
                crossOrigin: "anonymous",
                "data-next-font": fontFile.includes("-s") ? "size-adjust" : ""
            });
        }) : null
    };
}
class Head extends _react.default.Component {
    static{
        this.contextType = _htmlContext.HtmlContext;
    }
    getCssLinks(files) {
        const { assetPrefix , devOnlyCacheBusterQueryString , dynamicImports , crossOrigin , optimizeCss , optimizeFonts  } = this.context;
        const cssFiles = files.allFiles.filter((f)=>f.endsWith(".css"));
        const sharedFiles = new Set(files.sharedFiles);
        // Unmanaged files are CSS files that will be handled directly by the
        // webpack runtime (`mini-css-extract-plugin`).
        let unmangedFiles = new Set([]);
        let dynamicCssFiles = Array.from(new Set(dynamicImports.filter((file)=>file.endsWith(".css"))));
        if (dynamicCssFiles.length) {
            const existing = new Set(cssFiles);
            dynamicCssFiles = dynamicCssFiles.filter((f)=>!(existing.has(f) || sharedFiles.has(f)));
            unmangedFiles = new Set(dynamicCssFiles);
            cssFiles.push(...dynamicCssFiles);
        }
        let cssLinkElements = [];
        cssFiles.forEach((file)=>{
            const isSharedFile = sharedFiles.has(file);
            if (!optimizeCss) {
                cssLinkElements.push(/*#__PURE__*/ _react.default.createElement("link", {
                    key: `${file}-preload`,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                    as: "style",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }));
            }
            const isUnmanagedFile = unmangedFiles.has(file);
            cssLinkElements.push(/*#__PURE__*/ _react.default.createElement("link", {
                key: file,
                nonce: this.props.nonce,
                rel: "stylesheet",
                href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
                "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
            }));
        });
        if ( true && optimizeFonts) {
            cssLinkElements = this.makeStylesheetInert(cssLinkElements);
        }
        return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
    getPreloadDynamicChunks() {
        const { dynamicImports , assetPrefix , devOnlyCacheBusterQueryString , crossOrigin  } = this.context;
        return dynamicImports.map((file)=>{
            if (!file.endsWith(".js")) {
                return null;
            }
            return /*#__PURE__*/ _react.default.createElement("link", {
                rel: "preload",
                key: file,
                href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                as: "script",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            });
        }) // Filter out nulled scripts
        .filter(Boolean);
    }
    getPreloadMainLinks(files) {
        const { assetPrefix , devOnlyCacheBusterQueryString , scriptLoader , crossOrigin  } = this.context;
        const preloadFiles = files.allFiles.filter((file)=>{
            return file.endsWith(".js");
        });
        return [
            ...(scriptLoader.beforeInteractive || []).map((file)=>/*#__PURE__*/ _react.default.createElement("link", {
                    key: file.src,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: file.src,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                })),
            ...preloadFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("link", {
                    key: file,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }))
        ];
    }
    getBeforeInteractiveInlineScripts() {
        const { scriptLoader  } = this.context;
        const { nonce , crossOrigin  } = this.props;
        return (scriptLoader.beforeInteractive || []).filter((script)=>!script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index)=>{
            const { strategy , children , dangerouslySetInnerHTML , src , ...scriptProps } = file;
            let html = "";
            if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                html = dangerouslySetInnerHTML.__html;
            } else if (children) {
                html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            return /*#__PURE__*/ _react.default.createElement("script", Object.assign({}, scriptProps, {
                dangerouslySetInnerHTML: {
                    __html: html
                },
                key: scriptProps.id || index,
                nonce: nonce,
                "data-nscript": "beforeInteractive",
                crossOrigin: crossOrigin || undefined
            }));
        });
    }
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    makeStylesheetInert(node) {
        return _react.default.Children.map(node, (c)=>{
            var ref5, ref3;
            if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (ref5 = c.props) == null ? void 0 : ref5.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({ url  })=>{
                var ref, ref4;
                return c == null ? void 0 : (ref = c.props) == null ? void 0 : (ref4 = ref.href) == null ? void 0 : ref4.startsWith(url);
            })) {
                const newProps = {
                    ...c.props || {},
                    "data-href": c.props.href,
                    href: undefined
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            } else if (c == null ? void 0 : (ref3 = c.props) == null ? void 0 : ref3.children) {
                const newProps = {
                    ...c.props || {},
                    children: this.makeStylesheetInert(c.props.children)
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
            return c;
        }).filter(Boolean);
    }
    render() {
        const { styles , ampPath , inAmpMode , hybridAmp , canonicalBase , __NEXT_DATA__ , dangerousAsPath , headTags , unstable_runtimeJS , unstable_JsPreload , disableOptimizedLoading , optimizeCss , optimizeFonts , assetPrefix , nextFontManifest  } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
        this.context.docComponentsRendered.Head = true;
        let { head  } = this.context;
        let cssPreloads = [];
        let otherHeadElements = [];
        if (head) {
            head.forEach((c)=>{
                let metaTag;
                if (this.context.strictNextHead) {
                    metaTag = /*#__PURE__*/ _react.default.createElement("meta", {
                        name: "next-head",
                        content: "1"
                    });
                }
                if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
                    metaTag && cssPreloads.push(metaTag);
                    cssPreloads.push(c);
                } else {
                    if (c) {
                        if (metaTag && (c.type !== "meta" || !c.props["charSet"])) {
                            otherHeadElements.push(metaTag);
                        }
                        otherHeadElements.push(c);
                    }
                }
            });
            head = cssPreloads.concat(otherHeadElements);
        }
        let children = _react.default.Children.toArray(this.props.children).filter(Boolean);
        // show a warning if Head contains <title> (only in development)
        if (false) {}
        if ( true && optimizeFonts && !( true && inAmpMode)) {
            children = this.makeStylesheetInert(children);
        }
        let hasAmphtmlRel = false;
        let hasCanonicalRel = false;
        // show warning and remove conflicting amp head tags
        head = _react.default.Children.map(head || [], (child)=>{
            if (!child) return child;
            const { type , props  } = child;
            if ( true && inAmpMode) {
                let badProp = "";
                if (type === "meta" && props.name === "viewport") {
                    badProp = 'name="viewport"';
                } else if (type === "link" && props.rel === "canonical") {
                    hasCanonicalRel = true;
                } else if (type === "script") {
                    // only block if
                    // 1. it has a src and isn't pointing to ampproject's CDN
                    // 2. it is using dangerouslySetInnerHTML without a type or
                    // a type of text/javascript
                    if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
                        badProp = "<script";
                        Object.keys(props).forEach((prop)=>{
                            badProp += ` ${prop}="${props[prop]}"`;
                        });
                        badProp += "/>";
                    }
                }
                if (badProp) {
                    console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
                    return null;
                }
            } else {
                // non-amp mode
                if (type === "link" && props.rel === "amphtml") {
                    hasAmphtmlRel = true;
                }
            }
            return child;
        });
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
        const nextFontLinkTags = getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix);
        return /*#__PURE__*/ _react.default.createElement("head", Object.assign({}, getHeadHTMLProps(this.props)), this.context.isDevelopment && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("style", {
            "data-next-hide-fouc": true,
            "data-ampdevmode":  true && inAmpMode ? "true" : undefined,
            dangerouslySetInnerHTML: {
                __html: `body{display:none}`
            }
        }), /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-next-hide-fouc": true,
            "data-ampdevmode":  true && inAmpMode ? "true" : undefined
        }, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                __html: `body{display:block}`
            }
        }))), head, this.context.strictNextHead ? null : /*#__PURE__*/ _react.default.createElement("meta", {
            name: "next-head-count",
            content: _react.default.Children.count(head || []).toString()
        }), children, optimizeFonts && /*#__PURE__*/ _react.default.createElement("meta", {
            name: "next-font-preconnect"
        }), nextFontLinkTags.preconnect, nextFontLinkTags.preload,  true && inAmpMode && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width,minimum-scale=1,initial-scale=1"
        }), !hasCanonicalRel && /*#__PURE__*/ _react.default.createElement("link", {
            rel: "canonical",
            href: canonicalBase + (__webpack_require__(76368).cleanAmpPath)(dangerousAsPath)
        }), /*#__PURE__*/ _react.default.createElement("link", {
            rel: "preload",
            as: "script",
            href: "https://cdn.ampproject.org/v0.js"
        }), /*#__PURE__*/ _react.default.createElement(AmpStyles, {
            styles: styles
        }), /*#__PURE__*/ _react.default.createElement("style", {
            "amp-boilerplate": "",
            dangerouslySetInnerHTML: {
                __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
            }
        }), /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("style", {
            "amp-boilerplate": "",
            dangerouslySetInnerHTML: {
                __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
            }
        })), /*#__PURE__*/ _react.default.createElement("script", {
            async: true,
            src: "https://cdn.ampproject.org/v0.js"
        })), !( true && inAmpMode) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/ _react.default.createElement("link", {
            rel: "amphtml",
            href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
        }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-n-css": this.props.nonce ?? ""
        }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-n-css": this.props.nonce ?? ""
        }), this.context.isDevelopment && // this element is used to mount development styles so the
        // ordering matches production
        // (by default, style-loader injects at the bottom of <head />)
        /*#__PURE__*/ _react.default.createElement("noscript", {
            id: "__next_css__DO_NOT_USE__"
        }), styles || null), /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {}, ...headTags || []));
    }
}
exports.Head = Head;
function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
    var ref10, ref7, ref8, ref9;
    if (!props.children) return;
    const scriptLoaderItems = [];
    const children = Array.isArray(props.children) ? props.children : [
        props.children
    ];
    const headChildren = (ref10 = children.find((child)=>child.type === Head)) == null ? void 0 : (ref7 = ref10.props) == null ? void 0 : ref7.children;
    const bodyChildren = (ref8 = children.find((child)=>child.type === "body")) == null ? void 0 : (ref9 = ref8.props) == null ? void 0 : ref9.children;
    // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed
    const combinedChildren = [
        ...Array.isArray(headChildren) ? headChildren : [
            headChildren
        ],
        ...Array.isArray(bodyChildren) ? bodyChildren : [
            bodyChildren
        ]
    ];
    _react.default.Children.forEach(combinedChildren, (child)=>{
        var ref;
        if (!child) return;
        // When using the `next/script` component, register it in script loader.
        if ((ref = child.type) == null ? void 0 : ref.__nextScript) {
            if (child.props.strategy === "beforeInteractive") {
                scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([
                    {
                        ...child.props
                    }
                ]);
                return;
            } else if ([
                "lazyOnload",
                "afterInteractive",
                "worker"
            ].includes(child.props.strategy)) {
                scriptLoaderItems.push(child.props);
                return;
            }
        }
    });
    __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}
class NextScript extends _react.default.Component {
    static{
        this.contextType = _htmlContext.HtmlContext;
    }
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    static getInlineScriptSource(context) {
        const { __NEXT_DATA__ , largePageDataBytes  } = context;
        try {
            const data = JSON.stringify(__NEXT_DATA__);
            if (largePageDataWarnings.has(__NEXT_DATA__.page)) {
                return (0, _htmlescape).htmlEscapeJsonString(data);
            }
            const bytes =  false ? 0 : Buffer.from(data).byteLength;
            const prettyBytes = (__webpack_require__(95955)/* ["default"] */ .Z);
            if (largePageDataBytes && bytes > largePageDataBytes) {
                if (true) {
                    largePageDataWarnings.add(__NEXT_DATA__.page);
                }
                console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? "" : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
            }
            return (0, _htmlescape).htmlEscapeJsonString(data);
        } catch (err) {
            if ((0, _isError).default(err) && err.message.indexOf("circular structure") !== -1) {
                throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
            }
            throw err;
        }
    }
    render() {
        const { assetPrefix , inAmpMode , buildManifest , unstable_runtimeJS , docComponentsRendered , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        docComponentsRendered.NextScript = true;
        if ( true && inAmpMode) {
            if (true) {
                return null;
            }
            const ampDevFiles = [
                ...buildManifest.devFiles,
                ...buildManifest.polyfillFiles,
                ...buildManifest.ampDevFiles
            ];
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement("script", {
                id: "__NEXT_DATA__",
                type: "application/json",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                dangerouslySetInnerHTML: {
                    __html: NextScript.getInlineScriptSource(this.context)
                },
                "data-ampdevmode": true
            }), ampDevFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("script", {
                    key: file,
                    src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || crossOrigin,
                    "data-ampdevmode": true
                })));
        }
        if (false) {}
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("script", {
                key: file,
                src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            })) : null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement("script", {
            id: "__NEXT_DATA__",
            type: "application/json",
            nonce: this.props.nonce,
            crossOrigin: this.props.crossOrigin || crossOrigin,
            dangerouslySetInnerHTML: {
                __html: NextScript.getInlineScriptSource(this.context)
            }
        }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
    }
}
exports.NextScript = NextScript;
function Html(props) {
    const { inAmpMode , docComponentsRendered , locale , scriptLoader , __NEXT_DATA__  } = (0, _react).useContext(_htmlContext.HtmlContext);
    docComponentsRendered.Html = true;
    handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
    return /*#__PURE__*/ _react.default.createElement("html", Object.assign({}, props, {
        lang: props.lang || locale || undefined,
        amp:  true && inAmpMode ? "" : undefined,
        "data-ampdevmode":  true && inAmpMode && "production" !== "production" ? 0 : undefined
    }));
}
function Main() {
    const { docComponentsRendered  } = (0, _react).useContext(_htmlContext.HtmlContext);
    docComponentsRendered.Main = true;
    // @ts-ignore
    return /*#__PURE__*/ _react.default.createElement("next-js-internal-body-render-target", null);
}
// Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.
const InternalFunctionDocument = function InternalFunctionDocument() {
    return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));
};
Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument; //# sourceMappingURL=_document.js.map


/***/ }),

/***/ 80676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(78524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 95955:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = prettyBytes;
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return " 0 B";
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + " B";
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + " " + unit;
}
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ const UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === "string") {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};

//# sourceMappingURL=pretty-bytes.js.map

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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.Html = Html;\nexports.Main = Main;\nexports[\"default\"] = void 0;\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\nvar _constants = __webpack_require__(/*! ../shared/lib/constants */ \"../shared/lib/constants\");\nvar _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ \"../server/get-page-files\");\nvar _htmlescape = __webpack_require__(/*! ../server/htmlescape */ \"../server/htmlescape\");\nvar _isError = _interopRequireDefault(__webpack_require__(/*! ../lib/is-error */ \"./node_modules/next/dist/lib/is-error.js\"));\nvar _htmlContext = __webpack_require__(/*! ../shared/lib/html-context */ \"../shared/lib/html-context\");\nclass Document extends _react.default.Component {\n    /**\n   * `getInitialProps` hook returns the context object with the addition of `renderPage`.\n   * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers\n   */ static getInitialProps(ctx) {\n        return ctx.defaultGetInitialProps(ctx);\n    }\n    render() {\n        return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement(\"body\", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));\n    }\n}\nexports[\"default\"] = Document;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _getRequireWildcardCache() {\n    if (typeof WeakMap !== \"function\") return null;\n    var cache = new WeakMap();\n    _getRequireWildcardCache = function() {\n        return cache;\n    };\n    return cache;\n}\nfunction _interopRequireWildcard(obj) {\n    if (obj && obj.__esModule) {\n        return obj;\n    }\n    if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {\n        return {\n            default: obj\n        };\n    }\n    var cache = _getRequireWildcardCache();\n    if (cache && cache.has(obj)) {\n        return cache.get(obj);\n    }\n    var newObj = {};\n    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n    for(var key in obj){\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n            if (desc && (desc.get || desc.set)) {\n                Object.defineProperty(newObj, key, desc);\n            } else {\n                newObj[key] = obj[key];\n            }\n        }\n    }\n    newObj.default = obj;\n    if (cache) {\n        cache.set(obj, newObj);\n    }\n    return newObj;\n}\n/** Set of pages that have triggered a large data warning on production mode. */ const largePageDataWarnings = new Set();\nfunction getDocumentFiles(buildManifest, pathname, inAmpMode) {\n    const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, \"/_app\");\n    const pageFiles =  true && inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);\n    return {\n        sharedFiles,\n        pageFiles,\n        allFiles: [\n            ...new Set([\n                ...sharedFiles,\n                ...pageFiles\n            ])\n        ]\n    };\n}\nfunction getPolyfillScripts(context, props) {\n    // polyfills.js has to be rendered as nomodule without async\n    // It also has to be the first script to load\n    const { assetPrefix , buildManifest , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = context;\n    return buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(\".js\") && !polyfill.endsWith(\".module.js\")).map((polyfill)=>/*#__PURE__*/ _react.default.createElement(\"script\", {\n            key: polyfill,\n            defer: !disableOptimizedLoading,\n            nonce: props.nonce,\n            crossOrigin: props.crossOrigin || crossOrigin,\n            noModule: true,\n            src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`\n        }));\n}\nfunction hasComponentProps(child) {\n    return !!child && !!child.props;\n}\nfunction AmpStyles({ styles  }) {\n    if (!styles) return null;\n    // try to parse styles from fragment for backwards compat\n    const curStyles = Array.isArray(styles) ? styles : [];\n    if (styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement\n    Array.isArray(styles.props.children)) {\n        const hasStyles = (el)=>{\n            var ref, ref1;\n            return el == null ? void 0 : (ref = el.props) == null ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref1.__html;\n        };\n        // @ts-ignore Property 'props' does not exist on type ReactElement\n        styles.props.children.forEach((child)=>{\n            if (Array.isArray(child)) {\n                child.forEach((el)=>hasStyles(el) && curStyles.push(el));\n            } else if (hasStyles(child)) {\n                curStyles.push(child);\n            }\n        });\n    }\n    /* Add custom styles before AMP styles to prevent accidental overrides */ return /*#__PURE__*/ _react.default.createElement(\"style\", {\n        \"amp-custom\": \"\",\n        dangerouslySetInnerHTML: {\n            __html: curStyles.map((style)=>style.props.dangerouslySetInnerHTML.__html).join(\"\").replace(/\\/\\*# sourceMappingURL=.*\\*\\//g, \"\").replace(/\\/\\*@ sourceURL=.*?\\*\\//g, \"\")\n        }\n    });\n}\nfunction getDynamicChunks(context, props, files) {\n    const { dynamicImports , assetPrefix , isDevelopment , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = context;\n    return dynamicImports.map((file)=>{\n        if (!file.endsWith(\".js\") || files.allFiles.includes(file)) return null;\n        return /*#__PURE__*/ _react.default.createElement(\"script\", {\n            async: !isDevelopment && disableOptimizedLoading,\n            defer: !disableOptimizedLoading,\n            key: file,\n            src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n            nonce: props.nonce,\n            crossOrigin: props.crossOrigin || crossOrigin\n        });\n    });\n}\nfunction getScripts(context, props, files) {\n    var ref;\n    const { assetPrefix , buildManifest , isDevelopment , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = context;\n    const normalScripts = files.allFiles.filter((file)=>file.endsWith(\".js\"));\n    const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) == null ? void 0 : ref.filter((file)=>file.endsWith(\".js\"));\n    return [\n        ...normalScripts,\n        ...lowPriorityScripts\n    ].map((file)=>{\n        return /*#__PURE__*/ _react.default.createElement(\"script\", {\n            key: file,\n            src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n            nonce: props.nonce,\n            async: !isDevelopment && disableOptimizedLoading,\n            defer: !disableOptimizedLoading,\n            crossOrigin: props.crossOrigin || crossOrigin\n        });\n    });\n}\nfunction getPreNextWorkerScripts(context, props) {\n    const { assetPrefix , scriptLoader , crossOrigin , nextScriptWorkers  } = context;\n    // disable `nextScriptWorkers` in edge runtime\n    if (!nextScriptWorkers || \"nodejs\" === \"edge\") return null;\n    try {\n        let { partytownSnippet  } = require(\"@builder.io/partytown/integration\");\n        const children = Array.isArray(props.children) ? props.children : [\n            props.children\n        ];\n        // Check to see if the user has defined their own Partytown configuration\n        const userDefinedConfig = children.find((child)=>{\n            var ref, ref2;\n            return hasComponentProps(child) && (child == null ? void 0 : (ref = child.props) == null ? void 0 : (ref2 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref2.__html.length) && \"data-partytown-config\" in child.props;\n        });\n        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/ _react.default.createElement(\"script\", {\n            \"data-partytown-config\": \"\",\n            dangerouslySetInnerHTML: {\n                __html: `\n            partytown = {\n              lib: \"${assetPrefix}/_next/static/~partytown/\"\n            };\n          `\n            }\n        }), /*#__PURE__*/ _react.default.createElement(\"script\", {\n            \"data-partytown\": \"\",\n            dangerouslySetInnerHTML: {\n                __html: partytownSnippet()\n            }\n        }), (scriptLoader.worker || []).map((file, index)=>{\n            const { strategy , src , children: scriptChildren , dangerouslySetInnerHTML , ...scriptProps } = file;\n            let srcProps = {};\n            if (src) {\n                // Use external src if provided\n                srcProps.src = src;\n            } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {\n                // Embed inline script if provided with dangerouslySetInnerHTML\n                srcProps.dangerouslySetInnerHTML = {\n                    __html: dangerouslySetInnerHTML.__html\n                };\n            } else if (scriptChildren) {\n                // Embed inline script if provided with children\n                srcProps.dangerouslySetInnerHTML = {\n                    __html: typeof scriptChildren === \"string\" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join(\"\") : \"\"\n                };\n            } else {\n                throw new Error(\"Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script\");\n            }\n            return /*#__PURE__*/ _react.default.createElement(\"script\", Object.assign({}, srcProps, scriptProps, {\n                type: \"text/partytown\",\n                key: src || index,\n                nonce: props.nonce,\n                \"data-nscript\": \"worker\",\n                crossOrigin: props.crossOrigin || crossOrigin\n            }));\n        }));\n    } catch (err) {\n        if ((0, _isError).default(err) && err.code !== \"MODULE_NOT_FOUND\") {\n            console.warn(`Warning: ${err.message}`);\n        }\n        return null;\n    }\n}\nfunction getPreNextScripts(context, props) {\n    const { scriptLoader , disableOptimizedLoading , crossOrigin  } = context;\n    const webWorkerScripts = getPreNextWorkerScripts(context, props);\n    const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter((script)=>script.src).map((file, index)=>{\n        const { strategy , ...scriptProps } = file;\n        return /*#__PURE__*/ _react.default.createElement(\"script\", Object.assign({}, scriptProps, {\n            key: scriptProps.src || index,\n            defer: scriptProps.defer ?? !disableOptimizedLoading,\n            nonce: props.nonce,\n            \"data-nscript\": \"beforeInteractive\",\n            crossOrigin: props.crossOrigin || crossOrigin\n        }));\n    });\n    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);\n}\nfunction getHeadHTMLProps(props) {\n    const { crossOrigin , nonce , ...restProps } = props;\n    // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>\n    const headProps = restProps;\n    return headProps;\n}\nfunction getAmpPath(ampPath, asPath) {\n    return ampPath || `${asPath}${asPath.includes(\"?\") ? \"&\" : \"?\"}amp=1`;\n}\nfunction getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix = \"\") {\n    if (!nextFontManifest) {\n        return {\n            preconnect: null,\n            preload: null\n        };\n    }\n    const appFontsEntry = nextFontManifest.pages[\"/_app\"];\n    const pageFontsEntry = nextFontManifest.pages[dangerousAsPath];\n    const preloadedFontFiles = [\n        ...appFontsEntry ?? [],\n        ...pageFontsEntry ?? []\n    ];\n    // If no font files should preload but there's an entry for the path, add a preconnect tag.\n    const preconnectToSelf = !!(preloadedFontFiles.length === 0 && (appFontsEntry || pageFontsEntry));\n    return {\n        preconnect: preconnectToSelf ? /*#__PURE__*/ _react.default.createElement(\"link\", {\n            \"data-next-font\": nextFontManifest.pagesUsingSizeAdjust ? \"size-adjust\" : \"\",\n            rel: \"preconnect\",\n            href: \"/\",\n            crossOrigin: \"anonymous\"\n        }) : null,\n        preload: preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{\n            const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];\n            return /*#__PURE__*/ _react.default.createElement(\"link\", {\n                key: fontFile,\n                rel: \"preload\",\n                href: `${assetPrefix}/_next/${encodeURI(fontFile)}`,\n                as: \"font\",\n                type: `font/${ext}`,\n                crossOrigin: \"anonymous\",\n                \"data-next-font\": fontFile.includes(\"-s\") ? \"size-adjust\" : \"\"\n            });\n        }) : null\n    };\n}\nclass Head extends _react.default.Component {\n    static{\n        this.contextType = _htmlContext.HtmlContext;\n    }\n    getCssLinks(files) {\n        const { assetPrefix , devOnlyCacheBusterQueryString , dynamicImports , crossOrigin , optimizeCss , optimizeFonts  } = this.context;\n        const cssFiles = files.allFiles.filter((f)=>f.endsWith(\".css\"));\n        const sharedFiles = new Set(files.sharedFiles);\n        // Unmanaged files are CSS files that will be handled directly by the\n        // webpack runtime (`mini-css-extract-plugin`).\n        let unmangedFiles = new Set([]);\n        let dynamicCssFiles = Array.from(new Set(dynamicImports.filter((file)=>file.endsWith(\".css\"))));\n        if (dynamicCssFiles.length) {\n            const existing = new Set(cssFiles);\n            dynamicCssFiles = dynamicCssFiles.filter((f)=>!(existing.has(f) || sharedFiles.has(f)));\n            unmangedFiles = new Set(dynamicCssFiles);\n            cssFiles.push(...dynamicCssFiles);\n        }\n        let cssLinkElements = [];\n        cssFiles.forEach((file)=>{\n            const isSharedFile = sharedFiles.has(file);\n            if (!optimizeCss) {\n                cssLinkElements.push(/*#__PURE__*/ _react.default.createElement(\"link\", {\n                    key: `${file}-preload`,\n                    nonce: this.props.nonce,\n                    rel: \"preload\",\n                    href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n                    as: \"style\",\n                    crossOrigin: this.props.crossOrigin || crossOrigin\n                }));\n            }\n            const isUnmanagedFile = unmangedFiles.has(file);\n            cssLinkElements.push(/*#__PURE__*/ _react.default.createElement(\"link\", {\n                key: file,\n                nonce: this.props.nonce,\n                rel: \"stylesheet\",\n                href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n                crossOrigin: this.props.crossOrigin || crossOrigin,\n                \"data-n-g\": isUnmanagedFile ? undefined : isSharedFile ? \"\" : undefined,\n                \"data-n-p\": isUnmanagedFile ? undefined : isSharedFile ? undefined : \"\"\n            }));\n        });\n        if (false) {}\n        return cssLinkElements.length === 0 ? null : cssLinkElements;\n    }\n    getPreloadDynamicChunks() {\n        const { dynamicImports , assetPrefix , devOnlyCacheBusterQueryString , crossOrigin  } = this.context;\n        return dynamicImports.map((file)=>{\n            if (!file.endsWith(\".js\")) {\n                return null;\n            }\n            return /*#__PURE__*/ _react.default.createElement(\"link\", {\n                rel: \"preload\",\n                key: file,\n                href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n                as: \"script\",\n                nonce: this.props.nonce,\n                crossOrigin: this.props.crossOrigin || crossOrigin\n            });\n        }) // Filter out nulled scripts\n        .filter(Boolean);\n    }\n    getPreloadMainLinks(files) {\n        const { assetPrefix , devOnlyCacheBusterQueryString , scriptLoader , crossOrigin  } = this.context;\n        const preloadFiles = files.allFiles.filter((file)=>{\n            return file.endsWith(\".js\");\n        });\n        return [\n            ...(scriptLoader.beforeInteractive || []).map((file)=>/*#__PURE__*/ _react.default.createElement(\"link\", {\n                    key: file.src,\n                    nonce: this.props.nonce,\n                    rel: \"preload\",\n                    href: file.src,\n                    as: \"script\",\n                    crossOrigin: this.props.crossOrigin || crossOrigin\n                })),\n            ...preloadFiles.map((file)=>/*#__PURE__*/ _react.default.createElement(\"link\", {\n                    key: file,\n                    nonce: this.props.nonce,\n                    rel: \"preload\",\n                    href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n                    as: \"script\",\n                    crossOrigin: this.props.crossOrigin || crossOrigin\n                }))\n        ];\n    }\n    getBeforeInteractiveInlineScripts() {\n        const { scriptLoader  } = this.context;\n        const { nonce , crossOrigin  } = this.props;\n        return (scriptLoader.beforeInteractive || []).filter((script)=>!script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index)=>{\n            const { strategy , children , dangerouslySetInnerHTML , src , ...scriptProps } = file;\n            let html = \"\";\n            if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {\n                html = dangerouslySetInnerHTML.__html;\n            } else if (children) {\n                html = typeof children === \"string\" ? children : Array.isArray(children) ? children.join(\"\") : \"\";\n            }\n            return /*#__PURE__*/ _react.default.createElement(\"script\", Object.assign({}, scriptProps, {\n                dangerouslySetInnerHTML: {\n                    __html: html\n                },\n                key: scriptProps.id || index,\n                nonce: nonce,\n                \"data-nscript\": \"beforeInteractive\",\n                crossOrigin: crossOrigin || undefined\n            }));\n        });\n    }\n    getDynamicChunks(files) {\n        return getDynamicChunks(this.context, this.props, files);\n    }\n    getPreNextScripts() {\n        return getPreNextScripts(this.context, this.props);\n    }\n    getScripts(files) {\n        return getScripts(this.context, this.props, files);\n    }\n    getPolyfillScripts() {\n        return getPolyfillScripts(this.context, this.props);\n    }\n    makeStylesheetInert(node) {\n        return _react.default.Children.map(node, (c)=>{\n            var ref5, ref3;\n            if ((c == null ? void 0 : c.type) === \"link\" && (c == null ? void 0 : (ref5 = c.props) == null ? void 0 : ref5.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({ url  })=>{\n                var ref, ref4;\n                return c == null ? void 0 : (ref = c.props) == null ? void 0 : (ref4 = ref.href) == null ? void 0 : ref4.startsWith(url);\n            })) {\n                const newProps = {\n                    ...c.props || {},\n                    \"data-href\": c.props.href,\n                    href: undefined\n                };\n                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);\n            } else if (c == null ? void 0 : (ref3 = c.props) == null ? void 0 : ref3.children) {\n                const newProps = {\n                    ...c.props || {},\n                    children: this.makeStylesheetInert(c.props.children)\n                };\n                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);\n            }\n            return c;\n        }).filter(Boolean);\n    }\n    render() {\n        const { styles , ampPath , inAmpMode , hybridAmp , canonicalBase , __NEXT_DATA__ , dangerousAsPath , headTags , unstable_runtimeJS , unstable_JsPreload , disableOptimizedLoading , optimizeCss , optimizeFonts , assetPrefix , nextFontManifest  } = this.context;\n        const disableRuntimeJS = unstable_runtimeJS === false;\n        const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;\n        this.context.docComponentsRendered.Head = true;\n        let { head  } = this.context;\n        let cssPreloads = [];\n        let otherHeadElements = [];\n        if (head) {\n            head.forEach((c)=>{\n                let metaTag;\n                if (this.context.strictNextHead) {\n                    metaTag = /*#__PURE__*/ _react.default.createElement(\"meta\", {\n                        name: \"next-head\",\n                        content: \"1\"\n                    });\n                }\n                if (c && c.type === \"link\" && c.props[\"rel\"] === \"preload\" && c.props[\"as\"] === \"style\") {\n                    metaTag && cssPreloads.push(metaTag);\n                    cssPreloads.push(c);\n                } else {\n                    if (c) {\n                        if (metaTag && (c.type !== \"meta\" || !c.props[\"charSet\"])) {\n                            otherHeadElements.push(metaTag);\n                        }\n                        otherHeadElements.push(c);\n                    }\n                }\n            });\n            head = cssPreloads.concat(otherHeadElements);\n        }\n        let children = _react.default.Children.toArray(this.props.children).filter(Boolean);\n        // show a warning if Head contains <title> (only in development)\n        if (true) {\n            children = _react.default.Children.map(children, (child)=>{\n                var ref;\n                const isReactHelmet = child == null ? void 0 : (ref = child.props) == null ? void 0 : ref[\"data-react-helmet\"];\n                if (!isReactHelmet) {\n                    var ref6;\n                    if ((child == null ? void 0 : child.type) === \"title\") {\n                        console.warn(\"Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title\");\n                    } else if ((child == null ? void 0 : child.type) === \"meta\" && (child == null ? void 0 : (ref6 = child.props) == null ? void 0 : ref6.name) === \"viewport\") {\n                        console.warn(\"Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta\");\n                    }\n                }\n                return child;\n            });\n            if (this.props.crossOrigin) console.warn(\"Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated\");\n        }\n        if (false) {}\n        let hasAmphtmlRel = false;\n        let hasCanonicalRel = false;\n        // show warning and remove conflicting amp head tags\n        head = _react.default.Children.map(head || [], (child)=>{\n            if (!child) return child;\n            const { type , props  } = child;\n            if ( true && inAmpMode) {\n                let badProp = \"\";\n                if (type === \"meta\" && props.name === \"viewport\") {\n                    badProp = 'name=\"viewport\"';\n                } else if (type === \"link\" && props.rel === \"canonical\") {\n                    hasCanonicalRel = true;\n                } else if (type === \"script\") {\n                    // only block if\n                    // 1. it has a src and isn't pointing to ampproject's CDN\n                    // 2. it is using dangerouslySetInnerHTML without a type or\n                    // a type of text/javascript\n                    if (props.src && props.src.indexOf(\"ampproject\") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === \"text/javascript\")) {\n                        badProp = \"<script\";\n                        Object.keys(props).forEach((prop)=>{\n                            badProp += ` ${prop}=\"${props[prop]}\"`;\n                        });\n                        badProp += \"/>\";\n                    }\n                }\n                if (badProp) {\n                    console.warn(`Found conflicting amp tag \"${child.type}\" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);\n                    return null;\n                }\n            } else {\n                // non-amp mode\n                if (type === \"link\" && props.rel === \"amphtml\") {\n                    hasAmphtmlRel = true;\n                }\n            }\n            return child;\n        });\n        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);\n        const nextFontLinkTags = getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix);\n        return /*#__PURE__*/ _react.default.createElement(\"head\", Object.assign({}, getHeadHTMLProps(this.props)), this.context.isDevelopment && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            \"data-next-hide-fouc\": true,\n            \"data-ampdevmode\":  true && inAmpMode ? \"true\" : undefined,\n            dangerouslySetInnerHTML: {\n                __html: `body{display:none}`\n            }\n        }), /*#__PURE__*/ _react.default.createElement(\"noscript\", {\n            \"data-next-hide-fouc\": true,\n            \"data-ampdevmode\":  true && inAmpMode ? \"true\" : undefined\n        }, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `body{display:block}`\n            }\n        }))), head, this.context.strictNextHead ? null : /*#__PURE__*/ _react.default.createElement(\"meta\", {\n            name: \"next-head-count\",\n            content: _react.default.Children.count(head || []).toString()\n        }), children, optimizeFonts && /*#__PURE__*/ _react.default.createElement(\"meta\", {\n            name: \"next-font-preconnect\"\n        }), nextFontLinkTags.preconnect, nextFontLinkTags.preload,  true && inAmpMode && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(\"meta\", {\n            name: \"viewport\",\n            content: \"width=device-width,minimum-scale=1,initial-scale=1\"\n        }), !hasCanonicalRel && /*#__PURE__*/ _react.default.createElement(\"link\", {\n            rel: \"canonical\",\n            href: canonicalBase + (__webpack_require__(/*! ../server/utils */ \"../server/utils\").cleanAmpPath)(dangerousAsPath)\n        }), /*#__PURE__*/ _react.default.createElement(\"link\", {\n            rel: \"preload\",\n            as: \"script\",\n            href: \"https://cdn.ampproject.org/v0.js\"\n        }), /*#__PURE__*/ _react.default.createElement(AmpStyles, {\n            styles: styles\n        }), /*#__PURE__*/ _react.default.createElement(\"style\", {\n            \"amp-boilerplate\": \"\",\n            dangerouslySetInnerHTML: {\n                __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`\n            }\n        }), /*#__PURE__*/ _react.default.createElement(\"noscript\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            \"amp-boilerplate\": \"\",\n            dangerouslySetInnerHTML: {\n                __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`\n            }\n        })), /*#__PURE__*/ _react.default.createElement(\"script\", {\n            async: true,\n            src: \"https://cdn.ampproject.org/v0.js\"\n        })), !( true && inAmpMode) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/ _react.default.createElement(\"link\", {\n            rel: \"amphtml\",\n            href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)\n        }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/ _react.default.createElement(\"noscript\", {\n            \"data-n-css\": this.props.nonce ?? \"\"\n        }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/ _react.default.createElement(\"noscript\", {\n            \"data-n-css\": this.props.nonce ?? \"\"\n        }), this.context.isDevelopment && // this element is used to mount development styles so the\n        // ordering matches production\n        // (by default, style-loader injects at the bottom of <head />)\n        /*#__PURE__*/ _react.default.createElement(\"noscript\", {\n            id: \"__next_css__DO_NOT_USE__\"\n        }), styles || null), /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {}, ...headTags || []));\n    }\n}\nexports.Head = Head;\nfunction handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {\n    var ref10, ref7, ref8, ref9;\n    if (!props.children) return;\n    const scriptLoaderItems = [];\n    const children = Array.isArray(props.children) ? props.children : [\n        props.children\n    ];\n    const headChildren = (ref10 = children.find((child)=>child.type === Head)) == null ? void 0 : (ref7 = ref10.props) == null ? void 0 : ref7.children;\n    const bodyChildren = (ref8 = children.find((child)=>child.type === \"body\")) == null ? void 0 : (ref9 = ref8.props) == null ? void 0 : ref9.children;\n    // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed\n    const combinedChildren = [\n        ...Array.isArray(headChildren) ? headChildren : [\n            headChildren\n        ],\n        ...Array.isArray(bodyChildren) ? bodyChildren : [\n            bodyChildren\n        ]\n    ];\n    _react.default.Children.forEach(combinedChildren, (child)=>{\n        var ref;\n        if (!child) return;\n        // When using the `next/script` component, register it in script loader.\n        if ((ref = child.type) == null ? void 0 : ref.__nextScript) {\n            if (child.props.strategy === \"beforeInteractive\") {\n                scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([\n                    {\n                        ...child.props\n                    }\n                ]);\n                return;\n            } else if ([\n                \"lazyOnload\",\n                \"afterInteractive\",\n                \"worker\"\n            ].includes(child.props.strategy)) {\n                scriptLoaderItems.push(child.props);\n                return;\n            }\n        }\n    });\n    __NEXT_DATA__.scriptLoader = scriptLoaderItems;\n}\nclass NextScript extends _react.default.Component {\n    static{\n        this.contextType = _htmlContext.HtmlContext;\n    }\n    getDynamicChunks(files) {\n        return getDynamicChunks(this.context, this.props, files);\n    }\n    getPreNextScripts() {\n        return getPreNextScripts(this.context, this.props);\n    }\n    getScripts(files) {\n        return getScripts(this.context, this.props, files);\n    }\n    getPolyfillScripts() {\n        return getPolyfillScripts(this.context, this.props);\n    }\n    static getInlineScriptSource(context) {\n        const { __NEXT_DATA__ , largePageDataBytes  } = context;\n        try {\n            const data = JSON.stringify(__NEXT_DATA__);\n            if (largePageDataWarnings.has(__NEXT_DATA__.page)) {\n                return (0, _htmlescape).htmlEscapeJsonString(data);\n            }\n            const bytes =  false ? 0 : Buffer.from(data).byteLength;\n            const prettyBytes = (__webpack_require__(/*! ../lib/pretty-bytes */ \"./node_modules/next/dist/lib/pretty-bytes.js\")[\"default\"]);\n            if (largePageDataBytes && bytes > largePageDataBytes) {\n                if (false) {}\n                console.warn(`Warning: data for page \"${__NEXT_DATA__.page}\"${__NEXT_DATA__.page === context.dangerousAsPath ? \"\" : ` (path \"${context.dangerousAsPath}\")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);\n            }\n            return (0, _htmlescape).htmlEscapeJsonString(data);\n        } catch (err) {\n            if ((0, _isError).default(err) && err.message.indexOf(\"circular structure\") !== -1) {\n                throw new Error(`Circular structure in \"getInitialProps\" result of page \"${__NEXT_DATA__.page}\". https://nextjs.org/docs/messages/circular-structure`);\n            }\n            throw err;\n        }\n    }\n    render() {\n        const { assetPrefix , inAmpMode , buildManifest , unstable_runtimeJS , docComponentsRendered , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin  } = this.context;\n        const disableRuntimeJS = unstable_runtimeJS === false;\n        docComponentsRendered.NextScript = true;\n        if ( true && inAmpMode) {\n            if (false) {}\n            const ampDevFiles = [\n                ...buildManifest.devFiles,\n                ...buildManifest.polyfillFiles,\n                ...buildManifest.ampDevFiles\n            ];\n            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement(\"script\", {\n                id: \"__NEXT_DATA__\",\n                type: \"application/json\",\n                nonce: this.props.nonce,\n                crossOrigin: this.props.crossOrigin || crossOrigin,\n                dangerouslySetInnerHTML: {\n                    __html: NextScript.getInlineScriptSource(this.context)\n                },\n                \"data-ampdevmode\": true\n            }), ampDevFiles.map((file)=>/*#__PURE__*/ _react.default.createElement(\"script\", {\n                    key: file,\n                    src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,\n                    nonce: this.props.nonce,\n                    crossOrigin: this.props.crossOrigin || crossOrigin,\n                    \"data-ampdevmode\": true\n                })));\n        }\n        if (true) {\n            if (this.props.crossOrigin) console.warn(\"Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated\");\n        }\n        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);\n        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file)=>/*#__PURE__*/ _react.default.createElement(\"script\", {\n                key: file,\n                src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n                nonce: this.props.nonce,\n                crossOrigin: this.props.crossOrigin || crossOrigin\n            })) : null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement(\"script\", {\n            id: \"__NEXT_DATA__\",\n            type: \"application/json\",\n            nonce: this.props.nonce,\n            crossOrigin: this.props.crossOrigin || crossOrigin,\n            dangerouslySetInnerHTML: {\n                __html: NextScript.getInlineScriptSource(this.context)\n            }\n        }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));\n    }\n}\nexports.NextScript = NextScript;\nfunction Html(props) {\n    const { inAmpMode , docComponentsRendered , locale , scriptLoader , __NEXT_DATA__  } = (0, _react).useContext(_htmlContext.HtmlContext);\n    docComponentsRendered.Html = true;\n    handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);\n    return /*#__PURE__*/ _react.default.createElement(\"html\", Object.assign({}, props, {\n        lang: props.lang || locale || undefined,\n        amp:  true && inAmpMode ? \"\" : undefined,\n        \"data-ampdevmode\":  true && inAmpMode && \"development\" !== \"production\" ? \"\" : undefined\n    }));\n}\nfunction Main() {\n    const { docComponentsRendered  } = (0, _react).useContext(_htmlContext.HtmlContext);\n    docComponentsRendered.Main = true;\n    // @ts-ignore\n    return /*#__PURE__*/ _react.default.createElement(\"next-js-internal-body-render-target\", null);\n}\n// Add a special property to the built-in `Document` component so later we can\n// identify if a user customized `Document` is used or not.\nconst InternalFunctionDocument = function InternalFunctionDocument() {\n    return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement(\"body\", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));\n};\nDocument[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument; //# sourceMappingURL=_document.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGRCxZQUFZLEdBQUdFO0FBQ2ZGLFlBQVksR0FBR0c7QUFDZkgsa0JBQWUsR0FBRyxLQUFLO0FBQ3ZCLElBQUlLLFNBQVNDLHdCQUF3QkMsbUJBQU9BLENBQUMsb0JBQU87QUFDcEQsSUFBSUMsYUFBYUQsbUJBQU9BLENBQUMsd0RBQXlCO0FBQ2xELElBQUlFLGdCQUFnQkYsbUJBQU9BLENBQUMsMERBQTBCO0FBQ3RELElBQUlHLGNBQWNILG1CQUFPQSxDQUFDLGtEQUFzQjtBQUNoRCxJQUFJSSxXQUFXQyx1QkFBdUJMLG1CQUFPQSxDQUFDLGlFQUFpQjtBQUMvRCxJQUFJTSxlQUFlTixtQkFBT0EsQ0FBQyw4REFBNEI7QUFDdkQsTUFBTU8saUJBQWlCVCxPQUFPRCxPQUFPLENBQUNXLFNBQVM7SUFDM0M7OztHQUdELEdBQUcsT0FBT0MsZ0JBQWdCQyxHQUFHLEVBQUU7UUFDMUIsT0FBT0EsSUFBSUMsc0JBQXNCLENBQUNEO0lBQ3RDO0lBQ0FFLFNBQVM7UUFDTCxPQUFPLFdBQVcsR0FBR2QsT0FBT0QsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDbEIsTUFBTSxJQUFJLEVBQUUsV0FBVyxHQUFHRyxPQUFPRCxPQUFPLENBQUNnQixhQUFhLENBQUNDLE1BQU0sSUFBSSxHQUFHLFdBQVcsR0FBR2hCLE9BQU9ELE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxRQUFRLElBQUksRUFBRSxXQUFXLEdBQUdmLE9BQU9ELE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQ2pCLE1BQU0sSUFBSSxHQUFHLFdBQVcsR0FBR0UsT0FBT0QsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDRSxZQUFZLElBQUk7SUFDdFM7QUFDSjtBQUNBdEIsa0JBQWUsR0FBR2M7QUFDbEIsU0FBU0YsdUJBQXVCVyxHQUFHLEVBQUU7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U0FBU2xLLE9BQU87SUFDWixNQUFNLEVBQUVnTSxzQkFBcUIsRUFBRyxHQUFHLENBQUMsR0FBRzlMLE1BQU0sRUFBRWdQLFVBQVUsQ0FBQ3hPLGFBQWEySSxXQUFXO0lBQ2xGMkMsc0JBQXNCaE0sSUFBSSxHQUFHLElBQUk7SUFDakMsYUFBYTtJQUNiLE9BQU8sV0FBVyxHQUFHRSxPQUFPRCxPQUFPLENBQUNnQixhQUFhLENBQUMsdUNBQXVDLElBQUk7QUFDakc7QUFDQSw4RUFBOEU7QUFDOUUsMkRBQTJEO0FBQzNELE1BQU1vTywyQkFBMkIsU0FBU0EsMkJBQTJCO0lBQ2pFLE9BQU8sV0FBVyxHQUFHblAsT0FBT0QsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDbEIsTUFBTSxJQUFJLEVBQUUsV0FBVyxHQUFHRyxPQUFPRCxPQUFPLENBQUNnQixhQUFhLENBQUNDLE1BQU0sSUFBSSxHQUFHLFdBQVcsR0FBR2hCLE9BQU9ELE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxRQUFRLElBQUksRUFBRSxXQUFXLEdBQUdmLE9BQU9ELE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQ2pCLE1BQU0sSUFBSSxHQUFHLFdBQVcsR0FBR0UsT0FBT0QsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDRSxZQUFZLElBQUk7QUFDdFM7QUFDQVIsUUFBUSxDQUFDTixXQUFXaVAscUJBQXFCLENBQUMsR0FBR0QsMEJBRTdDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2trYW5idS1uaW5qYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzPzNiOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkh0bWwgPSBIdG1sO1xuZXhwb3J0cy5NYWluID0gTWFpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9jb25zdGFudHNcIik7XG52YXIgX2dldFBhZ2VGaWxlcyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXNcIik7XG52YXIgX2h0bWxlc2NhcGUgPSByZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7XG52YXIgX2lzRXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvaXMtZXJyb3JcIikpO1xudmFyIF9odG1sQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2h0bWwtY29udGV4dFwiKTtcbmNsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi8gc3RhdGljIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5kZWZhdWx0R2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCwgbnVsbCkpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH07XG4gICAgcmV0dXJuIGNhY2hlO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgICB9XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld09iajtcbn1cbi8qKiBTZXQgb2YgcGFnZXMgdGhhdCBoYXZlIHRyaWdnZXJlZCBhIGxhcmdlIGRhdGEgd2FybmluZyBvbiBwcm9kdWN0aW9uIG1vZGUuICovIGNvbnN0IGxhcmdlUGFnZURhdGFXYXJuaW5ncyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUsIGluQW1wTW9kZSkge1xuICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gKDAsIF9nZXRQYWdlRmlsZXMpLmdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBcIi9fYXBwXCIpO1xuICAgIGNvbnN0IHBhZ2VGaWxlcyA9IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlID8gW10gOiAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZWRGaWxlcyxcbiAgICAgICAgcGFnZUZpbGVzLFxuICAgICAgICBhbGxGaWxlczogW1xuICAgICAgICAgICAgLi4ubmV3IFNldChbXG4gICAgICAgICAgICAgICAgLi4uc2hhcmVkRmlsZXMsXG4gICAgICAgICAgICAgICAgLi4ucGFnZUZpbGVzXG4gICAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBidWlsZE1hbmlmZXN0ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICwgIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKChwb2x5ZmlsbCk9PnBvbHlmaWxsLmVuZHNXaXRoKFwiLmpzXCIpICYmICFwb2x5ZmlsbC5lbmRzV2l0aChcIi5tb2R1bGUuanNcIikpLm1hcCgocG9seWZpbGwpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAga2V5OiBwb2x5ZmlsbCxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW4sXG4gICAgICAgICAgICBub01vZHVsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gXG4gICAgICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGhhc0NvbXBvbmVudFByb3BzKGNoaWxkKSB7XG4gICAgcmV0dXJuICEhY2hpbGQgJiYgISFjaGlsZC5wcm9wcztcbn1cbmZ1bmN0aW9uIEFtcFN0eWxlcyh7IHN0eWxlcyAgfSkge1xuICAgIGlmICghc3R5bGVzKSByZXR1cm4gbnVsbDtcbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXMgPSBBcnJheS5pc0FycmF5KHN0eWxlcykgPyBzdHlsZXMgOiBbXTtcbiAgICBpZiAoLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgc3R5bGVzLnByb3BzICYmIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWwpPT57XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgcmV0dXJuIGVsID09IG51bGwgPyB2b2lkIDAgOiAocmVmID0gZWwucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5kYW5nZXJvdXNseVNldElubmVySFRNTCkgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZjEuX19odG1sO1xuICAgICAgICB9O1xuICAgICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpPT5oYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiBBZGQgY3VzdG9tIHN0eWxlcyBiZWZvcmUgQU1QIHN0eWxlcyB0byBwcmV2ZW50IGFjY2lkZW50YWwgb3ZlcnJpZGVzICovIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgIFwiYW1wLWN1c3RvbVwiOiBcIlwiLFxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXMubWFwKChzdHlsZSk9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbihcIlwiKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgXCJcIikucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csIFwiXCIpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCwgcHJvcHMsIGZpbGVzKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgaXNEZXZlbG9wbWVudCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCBjcm9zc09yaWdpbiAsICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKT0+e1xuICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoXCIuanNcIikgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTY3JpcHRzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xuICAgIHZhciByZWY7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGJ1aWxkTWFuaWZlc3QgLCBpc0RldmVsb3BtZW50ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICwgIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKFwiLmpzXCIpKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSAocmVmID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoXCIuanNcIikpO1xuICAgIHJldHVybiBbXG4gICAgICAgIC4uLm5vcm1hbFNjcmlwdHMsXG4gICAgICAgIC4uLmxvd1ByaW9yaXR5U2NyaXB0c1xuICAgIF0ubWFwKChmaWxlKT0+e1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRQcmVOZXh0V29ya2VyU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBzY3JpcHRMb2FkZXIgLCBjcm9zc09yaWdpbiAsIG5leHRTY3JpcHRXb3JrZXJzICB9ID0gY29udGV4dDtcbiAgICAvLyBkaXNhYmxlIGBuZXh0U2NyaXB0V29ya2Vyc2AgaW4gZWRnZSBydW50aW1lXG4gICAgaWYgKCFuZXh0U2NyaXB0V29ya2VycyB8fCBwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09IFwiZWRnZVwiKSByZXR1cm4gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBsZXQgeyBwYXJ0eXRvd25TbmlwcGV0ICB9ID0gX19ub25fd2VicGFja19yZXF1aXJlX18oXCJAYnVpbGRlci5pby9wYXJ0eXRvd24vaW50ZWdyYXRpb25cIik7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5jaGlsZHJlbikgPyBwcm9wcy5jaGlsZHJlbiA6IFtcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgIF07XG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBoYXMgZGVmaW5lZCB0aGVpciBvd24gUGFydHl0b3duIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgdXNlckRlZmluZWRDb25maWcgPSBjaGlsZHJlbi5maW5kKChjaGlsZCk9PntcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjI7XG4gICAgICAgICAgICByZXR1cm4gaGFzQ29tcG9uZW50UHJvcHMoY2hpbGQpICYmIChjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogKHJlZiA9IGNoaWxkLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogKHJlZjIgPSByZWYuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpID09IG51bGwgPyB2b2lkIDAgOiByZWYyLl9faHRtbC5sZW5ndGgpICYmIFwiZGF0YS1wYXJ0eXRvd24tY29uZmlnXCIgaW4gY2hpbGQucHJvcHM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhdXNlckRlZmluZWRDb25maWcgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1wYXJ0eXRvd24tY29uZmlnXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgcGFydHl0b3duID0ge1xuICAgICAgICAgICAgICBsaWI6IFwiJHthc3NldFByZWZpeH0vX25leHQvc3RhdGljL35wYXJ0eXRvd24vXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1wYXJ0eXRvd25cIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBwYXJ0eXRvd25TbmlwcGV0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIChzY3JpcHRMb2FkZXIud29ya2VyIHx8IFtdKS5tYXAoKGZpbGUsIGluZGV4KT0+e1xuICAgICAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIHNyYyAsIGNoaWxkcmVuOiBzY3JpcHRDaGlsZHJlbiAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICwgLi4uc2NyaXB0UHJvcHMgfSA9IGZpbGU7XG4gICAgICAgICAgICBsZXQgc3JjUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgZXh0ZXJuYWwgc3JjIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgc3JjUHJvcHMuc3JjID0gc3JjO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCAmJiBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpIHtcbiAgICAgICAgICAgICAgICAvLyBFbWJlZCBpbmxpbmUgc2NyaXB0IGlmIHByb3ZpZGVkIHdpdGggZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcbiAgICAgICAgICAgICAgICBzcmNQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JpcHRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIC8vIEVtYmVkIGlubGluZSBzY3JpcHQgaWYgcHJvdmlkZWQgd2l0aCBjaGlsZHJlblxuICAgICAgICAgICAgICAgIHNyY1Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHR5cGVvZiBzY3JpcHRDaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiA/IHNjcmlwdENoaWxkcmVuIDogQXJyYXkuaXNBcnJheShzY3JpcHRDaGlsZHJlbikgPyBzY3JpcHRDaGlsZHJlbi5qb2luKFwiXCIpIDogXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNhZ2Ugb2YgbmV4dC9zY3JpcHQuIERpZCB5b3UgZm9yZ2V0IHRvIGluY2x1ZGUgYSBzcmMgYXR0cmlidXRlIG9yIGFuIGlubGluZSBzY3JpcHQ/IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtc2NyaXB0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCBPYmplY3QuYXNzaWduKHt9LCBzcmNQcm9wcywgc2NyaXB0UHJvcHMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHQvcGFydHl0b3duXCIsXG4gICAgICAgICAgICAgICAga2V5OiBzcmMgfHwgaW5kZXgsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uc2NyaXB0XCI6IFwid29ya2VyXCIsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCgwLCBfaXNFcnJvcikuZGVmYXVsdChlcnIpICYmIGVyci5jb2RlICE9PSBcIk1PRFVMRV9OT1RfRk9VTkRcIikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBXYXJuaW5nOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFByZU5leHRTY3JpcHRzKGNvbnRleHQsIHByb3BzKSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICB9ID0gY29udGV4dDtcbiAgICBjb25zdCB3ZWJXb3JrZXJTY3JpcHRzID0gZ2V0UHJlTmV4dFdvcmtlclNjcmlwdHMoY29udGV4dCwgcHJvcHMpO1xuICAgIGNvbnN0IGJlZm9yZUludGVyYWN0aXZlU2NyaXB0cyA9IChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmZpbHRlcigoc2NyaXB0KT0+c2NyaXB0LnNyYykubWFwKChmaWxlLCBpbmRleCk9PntcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIE9iamVjdC5hc3NpZ24oe30sIHNjcmlwdFByb3BzLCB7XG4gICAgICAgICAgICBrZXk6IHNjcmlwdFByb3BzLnNyYyB8fCBpbmRleCxcbiAgICAgICAgICAgIGRlZmVyOiBzY3JpcHRQcm9wcy5kZWZlciA/PyAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBcImRhdGEtbnNjcmlwdFwiOiBcImJlZm9yZUludGVyYWN0aXZlXCIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIHdlYldvcmtlclNjcmlwdHMsIGJlZm9yZUludGVyYWN0aXZlU2NyaXB0cyk7XG59XG5mdW5jdGlvbiBnZXRIZWFkSFRNTFByb3BzKHByb3BzKSB7XG4gICAgY29uc3QgeyBjcm9zc09yaWdpbiAsIG5vbmNlICwgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcbiAgICAvLyBUaGlzIGFzc2lnbm1lbnQgaXMgbmVjZXNzYXJ5IGZvciBhZGRpdGlvbmFsIHR5cGUgY2hlY2tpbmcgdG8gYXZvaWQgdW5zdXBwb3J0ZWQgYXR0cmlidXRlcyBpbiA8aGVhZD5cbiAgICBjb25zdCBoZWFkUHJvcHMgPSByZXN0UHJvcHM7XG4gICAgcmV0dXJuIGhlYWRQcm9wcztcbn1cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCwgYXNQYXRoKSB7XG4gICAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKFwiP1wiKSA/IFwiJlwiIDogXCI/XCJ9YW1wPTFgO1xufVxuZnVuY3Rpb24gZ2V0TmV4dEZvbnRMaW5rVGFncyhuZXh0Rm9udE1hbmlmZXN0LCBkYW5nZXJvdXNBc1BhdGgsIGFzc2V0UHJlZml4ID0gXCJcIikge1xuICAgIGlmICghbmV4dEZvbnRNYW5pZmVzdCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJlY29ubmVjdDogbnVsbCxcbiAgICAgICAgICAgIHByZWxvYWQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgYXBwRm9udHNFbnRyeSA9IG5leHRGb250TWFuaWZlc3QucGFnZXNbXCIvX2FwcFwiXTtcbiAgICBjb25zdCBwYWdlRm9udHNFbnRyeSA9IG5leHRGb250TWFuaWZlc3QucGFnZXNbZGFuZ2Vyb3VzQXNQYXRoXTtcbiAgICBjb25zdCBwcmVsb2FkZWRGb250RmlsZXMgPSBbXG4gICAgICAgIC4uLmFwcEZvbnRzRW50cnkgPz8gW10sXG4gICAgICAgIC4uLnBhZ2VGb250c0VudHJ5ID8/IFtdLCBcbiAgICBdO1xuICAgIC8vIElmIG5vIGZvbnQgZmlsZXMgc2hvdWxkIHByZWxvYWQgYnV0IHRoZXJlJ3MgYW4gZW50cnkgZm9yIHRoZSBwYXRoLCBhZGQgYSBwcmVjb25uZWN0IHRhZy5cbiAgICBjb25zdCBwcmVjb25uZWN0VG9TZWxmID0gISEocHJlbG9hZGVkRm9udEZpbGVzLmxlbmd0aCA9PT0gMCAmJiAoYXBwRm9udHNFbnRyeSB8fCBwYWdlRm9udHNFbnRyeSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByZWNvbm5lY3Q6IHByZWNvbm5lY3RUb1NlbGYgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uZXh0LWZvbnRcIjogbmV4dEZvbnRNYW5pZmVzdC5wYWdlc1VzaW5nU2l6ZUFkanVzdCA/IFwic2l6ZS1hZGp1c3RcIiA6IFwiXCIsXG4gICAgICAgICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIlxuICAgICAgICB9KSA6IG51bGwsXG4gICAgICAgIHByZWxvYWQ6IHByZWxvYWRlZEZvbnRGaWxlcyA/IHByZWxvYWRlZEZvbnRGaWxlcy5tYXAoKGZvbnRGaWxlKT0+e1xuICAgICAgICAgICAgY29uc3QgZXh0ID0gL1xcLih3b2ZmfHdvZmYyfGVvdHx0dGZ8b3RmKSQvLmV4ZWMoZm9udEZpbGUpWzFdO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZm9udEZpbGUsXG4gICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZm9udEZpbGUpfWAsXG4gICAgICAgICAgICAgICAgYXM6IFwiZm9udFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IGBmb250LyR7ZXh0fWAsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLW5leHQtZm9udFwiOiBmb250RmlsZS5pbmNsdWRlcyhcIi1zXCIpID8gXCJzaXplLWFkanVzdFwiIDogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pIDogbnVsbFxuICAgIH07XG59XG5jbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBfaHRtbENvbnRleHQuSHRtbENvbnRleHQ7XG4gICAgZ2V0Q3NzTGlua3MoZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZHluYW1pY0ltcG9ydHMgLCBjcm9zc09yaWdpbiAsIG9wdGltaXplQ3NzICwgb3B0aW1pemVGb250cyAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZik9PmYuZW5kc1dpdGgoXCIuY3NzXCIpKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkRmlsZXMgPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKTtcbiAgICAgICAgLy8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4gICAgICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgICAgIGxldCB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChbXSk7XG4gICAgICAgIGxldCBkeW5hbWljQ3NzRmlsZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aChcIi5jc3NcIikpKSk7XG4gICAgICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpO1xuICAgICAgICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcigoZik9PiEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSkpO1xuICAgICAgICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKTtcbiAgICAgICAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3NzTGlua0VsZW1lbnRzID0gW107XG4gICAgICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpc1NoYXJlZEZpbGUgPSBzaGFyZWRGaWxlcy5oYXMoZmlsZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGltaXplQ3NzKSB7XG4gICAgICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYCR7ZmlsZX0tcHJlbG9hZGAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpblxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpO1xuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpbixcbiAgICAgICAgICAgICAgICBcImRhdGEtbi1nXCI6IGlzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IFwiXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgXCJkYXRhLW4tcFwiOiBpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiBcIlwiXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBvcHRpbWl6ZUZvbnRzKSB7XG4gICAgICAgICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY3NzTGlua0VsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBjc3NMaW5rRWxlbWVudHM7XG4gICAgfVxuICAgIGdldFByZWxvYWREeW5hbWljQ2h1bmtzKCkge1xuICAgICAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzICwgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGNyb3NzT3JpZ2luICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpPT57XG4gICAgICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoXCIuanNcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgc2NyaXB0TG9hZGVyICwgY3Jvc3NPcmlnaW4gLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGZpbGUuZW5kc1dpdGgoXCIuanNcIik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBmaWxlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgICAgICAgICB9KSksIFxuICAgICAgICBdO1xuICAgIH1cbiAgICBnZXRCZWZvcmVJbnRlcmFjdGl2ZUlubGluZVNjcmlwdHMoKSB7XG4gICAgICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB7IG5vbmNlICwgY3Jvc3NPcmlnaW4gIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuZmlsdGVyKChzY3JpcHQpPT4hc2NyaXB0LnNyYyAmJiAoc2NyaXB0LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHx8IHNjcmlwdC5jaGlsZHJlbikpLm1hcCgoZmlsZSwgaW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCB7IHN0cmF0ZWd5ICwgY2hpbGRyZW4gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAsIHNyYyAsIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlO1xuICAgICAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkge1xuICAgICAgICAgICAgICAgIGh0bWwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaHRtbCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKFwiXCIpIDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgT2JqZWN0LmFzc2lnbih7fSwgc2NyaXB0UHJvcHMsIHtcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGh0bWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGtleTogc2NyaXB0UHJvcHMuaWQgfHwgaW5kZXgsXG4gICAgICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uc2NyaXB0XCI6IFwiYmVmb3JlSW50ZXJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSwgKGMpPT57XG4gICAgICAgICAgICB2YXIgcmVmNSwgcmVmMztcbiAgICAgICAgICAgIGlmICgoYyA9PSBudWxsID8gdm9pZCAwIDogYy50eXBlKSA9PT0gXCJsaW5rXCIgJiYgKGMgPT0gbnVsbCA/IHZvaWQgMCA6IChyZWY1ID0gYy5wcm9wcykgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZjUuaHJlZikgJiYgX2NvbnN0YW50cy5PUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgoeyB1cmwgIH0pPT57XG4gICAgICAgICAgICAgICAgdmFyIHJlZiwgcmVmNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyA9PSBudWxsID8gdm9pZCAwIDogKHJlZiA9IGMucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiAocmVmNCA9IHJlZi5ocmVmKSA9PSBudWxsID8gdm9pZCAwIDogcmVmNC5zdGFydHNXaXRoKHVybCk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jLnByb3BzIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtaHJlZlwiOiBjLnByb3BzLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PSBudWxsID8gdm9pZCAwIDogKHJlZjMgPSBjLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmMy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jLnByb3BzIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHMuY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0eWxlcyAsIGFtcFBhdGggLCBpbkFtcE1vZGUgLCBoeWJyaWRBbXAgLCBjYW5vbmljYWxCYXNlICwgX19ORVhUX0RBVEFfXyAsIGRhbmdlcm91c0FzUGF0aCAsIGhlYWRUYWdzICwgdW5zdGFibGVfcnVudGltZUpTICwgdW5zdGFibGVfSnNQcmVsb2FkICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCBvcHRpbWl6ZUNzcyAsIG9wdGltaXplRm9udHMgLCBhc3NldFByZWZpeCAsIG5leHRGb250TWFuaWZlc3QgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPSB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlIHx8ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZztcbiAgICAgICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZTtcbiAgICAgICAgbGV0IHsgaGVhZCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgbGV0IGNzc1ByZWxvYWRzID0gW107XG4gICAgICAgIGxldCBvdGhlckhlYWRFbGVtZW50cyA9IFtdO1xuICAgICAgICBpZiAoaGVhZCkge1xuICAgICAgICAgICAgaGVhZC5mb3JFYWNoKChjKT0+e1xuICAgICAgICAgICAgICAgIGxldCBtZXRhVGFnO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuc3RyaWN0TmV4dEhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YVRhZyA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuZXh0LWhlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJyZWxcIl0gPT09IFwicHJlbG9hZFwiICYmIGMucHJvcHNbXCJhc1wiXSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFUYWcgJiYgY3NzUHJlbG9hZHMucHVzaChtZXRhVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFUYWcgJiYgKGMudHlwZSAhPT0gXCJtZXRhXCIgfHwgIWMucHJvcHNbXCJjaGFyU2V0XCJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVySGVhZEVsZW1lbnRzLnB1c2gobWV0YVRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoZWFkID0gY3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgLy8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkID09IG51bGwgPyB2b2lkIDAgOiAocmVmID0gY2hpbGQucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiByZWZbXCJkYXRhLXJlYWN0LWhlbG1ldFwiXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoY2hpbGQgPT0gbnVsbCA/IHZvaWQgMCA6IGNoaWxkLnR5cGUpID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkID09IG51bGwgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gXCJtZXRhXCIgJiYgKGNoaWxkID09IG51bGwgPyB2b2lkIDAgOiAocmVmNiA9IGNoaWxkLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmNi5uYW1lKSA9PT0gXCJ2aWV3cG9ydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKSBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIgJiYgb3B0aW1pemVGb250cyAmJiAhKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2U7XG4gICAgICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZTtcbiAgICAgICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgICAgICBoZWFkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCk9PntcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSAsIHByb3BzICB9ID0gY2hpbGQ7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFkUHJvcCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibWV0YVwiICYmIHByb3BzLm5hbWUgPT09IFwidmlld3BvcnRcIikge1xuICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibGlua1wiICYmIHByb3BzLnJlbCA9PT0gXCJjYW5vbmljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzY3JpcHRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgICAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoXCJhbXBwcm9qZWN0XCIpIDwgLTEgfHwgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiYgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09IFwidGV4dC9qYXZhc2NyaXB0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gXCI8c2NyaXB0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9IFwiLz5cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibGlua1wiICYmIHByb3BzLnJlbCA9PT0gXCJhbXBodG1sXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LCB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLCBwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgIT09IFwiZWRnZVwiICYmIGluQW1wTW9kZSk7XG4gICAgICAgIGNvbnN0IG5leHRGb250TGlua1RhZ3MgPSBnZXROZXh0Rm9udExpbmtUYWdzKG5leHRGb250TWFuaWZlc3QsIGRhbmdlcm91c0FzUGF0aCwgYXNzZXRQcmVmaXgpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLCBPYmplY3QuYXNzaWduKHt9LCBnZXRIZWFkSFRNTFByb3BzKHRoaXMucHJvcHMpKSwgdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogcHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUgPyBcInRydWVcIiA6IHVuZGVmaW5lZFxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSksIGhlYWQsIHRoaXMuY29udGV4dC5zdHJpY3ROZXh0SGVhZCA/IG51bGwgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1oZWFkLWNvdW50XCIsXG4gICAgICAgICAgICBjb250ZW50OiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpXG4gICAgICAgIH0pLCBjaGlsZHJlbiwgb3B0aW1pemVGb250cyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1mb250LXByZWNvbm5lY3RcIlxuICAgICAgICB9KSwgbmV4dEZvbnRMaW5rVGFncy5wcmVjb25uZWN0LCBuZXh0Rm9udExpbmtUYWdzLnByZWxvYWQsIHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgfSksICFoYXNDYW5vbmljYWxSZWwgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwiY2Fub25pY2FsXCIsXG4gICAgICAgICAgICBocmVmOiBjYW5vbmljYWxCYXNlICsgcmVxdWlyZShcIi4uL3NlcnZlci91dGlsc1wiKS5jbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBbXBTdHlsZXMsIHtcbiAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImFtcC1ib2lsZXJwbGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtYm9pbGVycGxhdGVcIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICB9KSksICEocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUpICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgIWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcImFtcGh0bWxcIixcbiAgICAgICAgICAgIGhyZWY6IGNhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aClcbiAgICAgICAgfSksIHRoaXMuZ2V0QmVmb3JlSW50ZXJhY3RpdmVJbmxpbmVTY3JpcHRzKCksICFvcHRpbWl6ZUNzcyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKSwgIW9wdGltaXplQ3NzICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uLWNzc1wiOiB0aGlzLnByb3BzLm5vbmNlID8/IFwiXCJcbiAgICAgICAgfSksICFkaXNhYmxlUnVudGltZUpTICYmICFkaXNhYmxlSnNQcmVsb2FkICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwgIWRpc2FibGVSdW50aW1lSlMgJiYgIWRpc2FibGVKc1ByZWxvYWQgJiYgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSwgb3B0aW1pemVDc3MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIG9wdGltaXplQ3NzICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uLWNzc1wiOiB0aGlzLnByb3BzLm5vbmNlID8/IFwiXCJcbiAgICAgICAgfSksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIlxuICAgICAgICB9KSwgc3R5bGVzIHx8IG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIHt9LCAuLi5oZWFkVGFncyB8fCBbXSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuSGVhZCA9IEhlYWQ7XG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKHNjcmlwdExvYWRlciwgX19ORVhUX0RBVEFfXywgcHJvcHMpIHtcbiAgICB2YXIgcmVmMTAsIHJlZjcsIHJlZjgsIHJlZjk7XG4gICAgaWYgKCFwcm9wcy5jaGlsZHJlbikgcmV0dXJuO1xuICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zID0gW107XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKSA/IHByb3BzLmNoaWxkcmVuIDogW1xuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgIF07XG4gICAgY29uc3QgaGVhZENoaWxkcmVuID0gKHJlZjEwID0gY2hpbGRyZW4uZmluZCgoY2hpbGQpPT5jaGlsZC50eXBlID09PSBIZWFkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IChyZWY3ID0gcmVmMTAucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiByZWY3LmNoaWxkcmVuO1xuICAgIGNvbnN0IGJvZHlDaGlsZHJlbiA9IChyZWY4ID0gY2hpbGRyZW4uZmluZCgoY2hpbGQpPT5jaGlsZC50eXBlID09PSBcImJvZHlcIikpID09IG51bGwgPyB2b2lkIDAgOiAocmVmOSA9IHJlZjgucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiByZWY5LmNoaWxkcmVuO1xuICAgIC8vIFNjcmlwdHMgd2l0aCBiZWZvcmVJbnRlcmFjdGl2ZSBjYW4gYmUgcGxhY2VkIGluc2lkZSBIZWFkIG9yIDxib2R5PiBzbyBjaGlsZHJlbiBvZiBib3RoIG5lZWRzIHRvIGJlIHRyYXZlcnNlZFxuICAgIGNvbnN0IGNvbWJpbmVkQ2hpbGRyZW4gPSBbXG4gICAgICAgIC4uLkFycmF5LmlzQXJyYXkoaGVhZENoaWxkcmVuKSA/IGhlYWRDaGlsZHJlbiA6IFtcbiAgICAgICAgICAgIGhlYWRDaGlsZHJlblxuICAgICAgICBdLFxuICAgICAgICAuLi5BcnJheS5pc0FycmF5KGJvZHlDaGlsZHJlbikgPyBib2R5Q2hpbGRyZW4gOiBbXG4gICAgICAgICAgICBib2R5Q2hpbGRyZW5cbiAgICAgICAgXSwgXG4gICAgXTtcbiAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNvbWJpbmVkQ2hpbGRyZW4sIChjaGlsZCk9PntcbiAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuO1xuICAgICAgICAvLyBXaGVuIHVzaW5nIHRoZSBgbmV4dC9zY3JpcHRgIGNvbXBvbmVudCwgcmVnaXN0ZXIgaXQgaW4gc2NyaXB0IGxvYWRlci5cbiAgICAgICAgaWYgKChyZWYgPSBjaGlsZC50eXBlKSA9PSBudWxsID8gdm9pZCAwIDogcmVmLl9fbmV4dFNjcmlwdCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLnN0cmF0ZWd5ID09PSBcImJlZm9yZUludGVyYWN0aXZlXCIpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZC5wcm9wc1xuICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtcbiAgICAgICAgICAgICAgICBcImxhenlPbmxvYWRcIixcbiAgICAgICAgICAgICAgICBcImFmdGVySW50ZXJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcIndvcmtlclwiXG4gICAgICAgICAgICBdLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIF9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyID0gc2NyaXB0TG9hZGVySXRlbXM7XG59XG5jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBfaHRtbENvbnRleHQuSHRtbENvbnRleHQ7XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyAsIGxhcmdlUGFnZURhdGFCeXRlcyAgfSA9IGNvbnRleHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7XG4gICAgICAgICAgICBpZiAobGFyZ2VQYWdlRGF0YVdhcm5pbmdzLmhhcyhfX05FWFRfREFUQV9fLnBhZ2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfaHRtbGVzY2FwZSkuaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gXCJlZGdlXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoZGF0YSkuYnVmZmVyLmJ5dGVMZW5ndGggOiBCdWZmZXIuZnJvbShkYXRhKS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcHJldHR5Qnl0ZXMgPSByZXF1aXJlKFwiLi4vbGliL3ByZXR0eS1ieXRlc1wiKS5kZWZhdWx0O1xuICAgICAgICAgICAgaWYgKGxhcmdlUGFnZURhdGFCeXRlcyAmJiBieXRlcyA+IGxhcmdlUGFnZURhdGFCeXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VQYWdlRGF0YVdhcm5pbmdzLmFkZChfX05FWFRfREFUQV9fLnBhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFdhcm5pbmc6IGRhdGEgZm9yIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIiR7X19ORVhUX0RBVEFfXy5wYWdlID09PSBjb250ZXh0LmRhbmdlcm91c0FzUGF0aCA/IFwiXCIgOiBgIChwYXRoIFwiJHtjb250ZXh0LmRhbmdlcm91c0FzUGF0aH1cIilgfSBpcyAke3ByZXR0eUJ5dGVzKGJ5dGVzKX0gd2hpY2ggZXhjZWVkcyB0aGUgdGhyZXNob2xkIG9mICR7cHJldHR5Qnl0ZXMobGFyZ2VQYWdlRGF0YUJ5dGVzKX0sIHRoaXMgYW1vdW50IG9mIGRhdGEgY2FuIHJlZHVjZSBwZXJmb3JtYW5jZS5cXG5TZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xhcmdlLXBhZ2UtZGF0YWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICgwLCBfaHRtbGVzY2FwZSkuaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNFcnJvcikuZGVmYXVsdChlcnIpICYmIGVyci5tZXNzYWdlLmluZGV4T2YoXCJjaXJjdWxhciBzdHJ1Y3R1cmVcIikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBpbkFtcE1vZGUgLCBidWlsZE1hbmlmZXN0ICwgdW5zdGFibGVfcnVudGltZUpTICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlO1xuICAgICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgIT09IFwiZWRnZVwiICYmIGluQW1wTW9kZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYW1wRGV2RmlsZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5hbXBEZXZGaWxlcywgXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgIGlkOiBcIl9fTkVYVF9EQVRBX19cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpbixcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHRydWVcbiAgICAgICAgICAgIH0pLCBhbXBEZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pIGNvbnNvbGUud2FybihcIldhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlcyA9IGdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsIHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgIWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luXG4gICAgICAgICAgICB9KSkgOiBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX05FWFRfREFUQV9fXCIsXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW4sXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpKTtcbiAgICB9XG59XG5leHBvcnRzLk5leHRTY3JpcHQgPSBOZXh0U2NyaXB0O1xuZnVuY3Rpb24gSHRtbChwcm9wcykge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICwgbG9jYWxlICwgc2NyaXB0TG9hZGVyICwgX19ORVhUX0RBVEFfXyAsICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaHRtbENvbnRleHQuSHRtbENvbnRleHQpO1xuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZTtcbiAgICBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKHNjcmlwdExvYWRlciwgX19ORVhUX0RBVEFfXywgcHJvcHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIGxhbmc6IHByb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYW1wOiBwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgIT09IFwiZWRnZVwiICYmIGluQW1wTW9kZSA/IFwiXCIgOiB1bmRlZmluZWQsXG4gICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiB1bmRlZmluZWRcbiAgICB9KSk7XG59XG5mdW5jdGlvbiBNYWluKCkge1xuICAgIGNvbnN0IHsgZG9jQ29tcG9uZW50c1JlbmRlcmVkICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaHRtbENvbnRleHQuSHRtbENvbnRleHQpO1xuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5leHQtanMtaW50ZXJuYWwtYm9keS1yZW5kZXItdGFyZ2V0XCIsIG51bGwpO1xufVxuLy8gQWRkIGEgc3BlY2lhbCBwcm9wZXJ0eSB0byB0aGUgYnVpbHQtaW4gYERvY3VtZW50YCBjb21wb25lbnQgc28gbGF0ZXIgd2UgY2FuXG4vLyBpZGVudGlmeSBpZiBhIHVzZXIgY3VzdG9taXplZCBgRG9jdW1lbnRgIGlzIHVzZWQgb3Igbm90LlxuY29uc3QgSW50ZXJuYWxGdW5jdGlvbkRvY3VtZW50ID0gZnVuY3Rpb24gSW50ZXJuYWxGdW5jdGlvbkRvY3VtZW50KCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsIG51bGwpKSk7XG59O1xuRG9jdW1lbnRbX2NvbnN0YW50cy5ORVhUX0JVSUxUSU5fRE9DVU1FTlRdID0gSW50ZXJuYWxGdW5jdGlvbkRvY3VtZW50O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiSHRtbCIsIk1haW4iLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbnN0YW50cyIsIl9nZXRQYWdlRmlsZXMiLCJfaHRtbGVzY2FwZSIsIl9pc0Vycm9yIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9odG1sQ29udGV4dCIsIkRvY3VtZW50IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZGVmYXVsdEdldEluaXRpYWxQcm9wcyIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJIZWFkIiwiTmV4dFNjcmlwdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwibGFyZ2VQYWdlRGF0YVdhcm5pbmdzIiwiU2V0IiwiZ2V0RG9jdW1lbnRGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwYXRobmFtZSIsImluQW1wTW9kZSIsInNoYXJlZEZpbGVzIiwiZ2V0UGFnZUZpbGVzIiwicGFnZUZpbGVzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUlVOVElNRSIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsInByb3BzIiwiYXNzZXRQcmVmaXgiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIiwiY3Jvc3NPcmlnaW4iLCJwb2x5ZmlsbEZpbGVzIiwiZmlsdGVyIiwicG9seWZpbGwiLCJlbmRzV2l0aCIsIm1hcCIsImRlZmVyIiwibm9uY2UiLCJub01vZHVsZSIsInNyYyIsImhhc0NvbXBvbmVudFByb3BzIiwiY2hpbGQiLCJBbXBTdHlsZXMiLCJzdHlsZXMiLCJjdXJTdHlsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZHJlbiIsImhhc1N0eWxlcyIsImVsIiwicmVmIiwicmVmMSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZm9yRWFjaCIsInB1c2giLCJzdHlsZSIsImpvaW4iLCJyZXBsYWNlIiwiZ2V0RHluYW1pY0NodW5rcyIsImZpbGVzIiwiZHluYW1pY0ltcG9ydHMiLCJpc0RldmVsb3BtZW50IiwiZmlsZSIsImluY2x1ZGVzIiwiYXN5bmMiLCJlbmNvZGVVUkkiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJnZXRQcmVOZXh0V29ya2VyU2NyaXB0cyIsInNjcmlwdExvYWRlciIsIm5leHRTY3JpcHRXb3JrZXJzIiwicGFydHl0b3duU25pcHBldCIsIl9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIiwidXNlckRlZmluZWRDb25maWciLCJmaW5kIiwicmVmMiIsImxlbmd0aCIsIkZyYWdtZW50Iiwid29ya2VyIiwiaW5kZXgiLCJzdHJhdGVneSIsInNjcmlwdENoaWxkcmVuIiwic2NyaXB0UHJvcHMiLCJzcmNQcm9wcyIsIkVycm9yIiwiYXNzaWduIiwidHlwZSIsImVyciIsImNvZGUiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJnZXRQcmVOZXh0U2NyaXB0cyIsIndlYldvcmtlclNjcmlwdHMiLCJiZWZvcmVJbnRlcmFjdGl2ZVNjcmlwdHMiLCJiZWZvcmVJbnRlcmFjdGl2ZSIsInNjcmlwdCIsImdldEhlYWRIVE1MUHJvcHMiLCJyZXN0UHJvcHMiLCJoZWFkUHJvcHMiLCJnZXRBbXBQYXRoIiwiYW1wUGF0aCIsImFzUGF0aCIsImdldE5leHRGb250TGlua1RhZ3MiLCJuZXh0Rm9udE1hbmlmZXN0IiwiZGFuZ2Vyb3VzQXNQYXRoIiwicHJlY29ubmVjdCIsInByZWxvYWQiLCJhcHBGb250c0VudHJ5IiwicGFnZXMiLCJwYWdlRm9udHNFbnRyeSIsInByZWxvYWRlZEZvbnRGaWxlcyIsInByZWNvbm5lY3RUb1NlbGYiLCJwYWdlc1VzaW5nU2l6ZUFkanVzdCIsInJlbCIsImhyZWYiLCJmb250RmlsZSIsImV4dCIsImV4ZWMiLCJhcyIsImNvbnRleHRUeXBlIiwiSHRtbENvbnRleHQiLCJnZXRDc3NMaW5rcyIsIm9wdGltaXplQ3NzIiwib3B0aW1pemVGb250cyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJpc1VubWFuYWdlZEZpbGUiLCJ1bmRlZmluZWQiLCJtYWtlU3R5bGVzaGVldEluZXJ0IiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImdldEJlZm9yZUludGVyYWN0aXZlSW5saW5lU2NyaXB0cyIsImh0bWwiLCJpZCIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJub2RlIiwiQ2hpbGRyZW4iLCJjIiwicmVmNSIsInJlZjMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJzb21lIiwidXJsIiwicmVmNCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImNsb25lRWxlbWVudCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJfX05FWFRfREFUQV9fIiwiaGVhZFRhZ3MiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJ1bnN0YWJsZV9Kc1ByZWxvYWQiLCJkaXNhYmxlUnVudGltZUpTIiwiZGlzYWJsZUpzUHJlbG9hZCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImhlYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwibWV0YVRhZyIsInN0cmljdE5leHRIZWFkIiwibmFtZSIsImNvbnRlbnQiLCJjb25jYXQiLCJ0b0FycmF5IiwiaXNSZWFjdEhlbG1ldCIsInJlZjYiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsImluZGV4T2YiLCJrZXlzIiwicHJvcCIsInBhZ2UiLCJuZXh0Rm9udExpbmtUYWdzIiwiY291bnQiLCJ0b1N0cmluZyIsImNsZWFuQW1wUGF0aCIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJyZWYxMCIsInJlZjciLCJyZWY4IiwicmVmOSIsInNjcmlwdExvYWRlckl0ZW1zIiwiaGVhZENoaWxkcmVuIiwiYm9keUNoaWxkcmVuIiwiY29tYmluZWRDaGlsZHJlbiIsIl9fbmV4dFNjcmlwdCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImxhcmdlUGFnZURhdGFCeXRlcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbEVzY2FwZUpzb25TdHJpbmciLCJieXRlcyIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiYnVmZmVyIiwiYnl0ZUxlbmd0aCIsIkJ1ZmZlciIsInByZXR0eUJ5dGVzIiwiYWRkIiwiYW1wRGV2RmlsZXMiLCJkZXZGaWxlcyIsImxvY2FsZSIsInVzZUNvbnRleHQiLCJsYW5nIiwiYW1wIiwiSW50ZXJuYWxGdW5jdGlvbkRvY3VtZW50IiwiTkVYVF9CVUlMVElOX0RPQ1VNRU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_document.js\n");

/***/ }),

/***/ "./node_modules/next/dist/lib/is-error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/lib/is-error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = isError;\nexports.getProperError = getProperError;\nvar _isPlainObject = __webpack_require__(/*! ../shared/lib/is-plain-object */ \"../shared/lib/is-plain-object\");\nfunction isError(err) {\n    return typeof err === \"object\" && err !== null && \"name\" in err && \"message\" in err;\n}\nfunction getProperError(err) {\n    if (isError(err)) {\n        return err;\n    }\n    if (true) {\n        // provide better error for case where `throw undefined`\n        // is called in development\n        if (typeof err === \"undefined\") {\n            return new Error(\"An undefined error was thrown, \" + \"see here for more info: https://nextjs.org/docs/messages/threw-undefined\");\n        }\n        if (err === null) {\n            return new Error(\"A null error was thrown, \" + \"see here for more info: https://nextjs.org/docs/messages/threw-undefined\");\n        }\n    }\n    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + \"\");\n}\n\n//# sourceMappingURL=is-error.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9pcy1lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLHFCQUFxQixtQkFBTyxDQUFDLG9FQUErQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBc0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2trYW5idS1uaW5qYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbGliL2lzLWVycm9yLmpzPzE3OGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Vycm9yO1xuZXhwb3J0cy5nZXRQcm9wZXJFcnJvciA9IGdldFByb3BlckVycm9yO1xudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaXMtcGxhaW4tb2JqZWN0XCIpO1xuZnVuY3Rpb24gaXNFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVyciA9PT0gXCJvYmplY3RcIiAmJiBlcnIgIT09IG51bGwgJiYgXCJuYW1lXCIgaW4gZXJyICYmIFwibWVzc2FnZVwiIGluIGVycjtcbn1cbmZ1bmN0aW9uIGdldFByb3BlckVycm9yKGVycikge1xuICAgIGlmIChpc0Vycm9yKGVycikpIHtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgLy8gcHJvdmlkZSBiZXR0ZXIgZXJyb3IgZm9yIGNhc2Ugd2hlcmUgYHRocm93IHVuZGVmaW5lZGBcbiAgICAgICAgLy8gaXMgY2FsbGVkIGluIGRldmVsb3BtZW50XG4gICAgICAgIGlmICh0eXBlb2YgZXJyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiQW4gdW5kZWZpbmVkIGVycm9yIHdhcyB0aHJvd24sIFwiICsgXCJzZWUgaGVyZSBmb3IgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy90aHJldy11bmRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVyciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkEgbnVsbCBlcnJvciB3YXMgdGhyb3duLCBcIiArIFwic2VlIGhlcmUgZm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvdGhyZXctdW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoKDAsIF9pc1BsYWluT2JqZWN0KS5pc1BsYWluT2JqZWN0KGVycikgPyBKU09OLnN0cmluZ2lmeShlcnIpIDogZXJyICsgXCJcIik7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWVycm9yLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/lib/is-error.js\n");

/***/ }),

/***/ "./node_modules/next/dist/lib/pretty-bytes.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/lib/pretty-bytes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = prettyBytes;\nfunction prettyBytes(number, options) {\n    if (!Number.isFinite(number)) {\n        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);\n    }\n    options = Object.assign({}, options);\n    if (options.signed && number === 0) {\n        return \" 0 B\";\n    }\n    const isNegative = number < 0;\n    const prefix = isNegative ? \"-\" : options.signed ? \"+\" : \"\";\n    if (isNegative) {\n        number = -number;\n    }\n    if (number < 1) {\n        const numberString = toLocaleString(number, options.locale);\n        return prefix + numberString + \" B\";\n    }\n    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);\n    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));\n    const numberString = toLocaleString(number, options.locale);\n    const unit = UNITS[exponent];\n    return prefix + numberString + \" \" + unit;\n}\n/*\nMIT License\n\nCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/ const UNITS = [\n    \"B\",\n    \"kB\",\n    \"MB\",\n    \"GB\",\n    \"TB\",\n    \"PB\",\n    \"EB\",\n    \"ZB\",\n    \"YB\"\n];\n/*\nFormats the given number using `Number#toLocaleString`.\n- If locale is a string, the value is expected to be a locale-key (for example: `de`).\n- If locale is true, the system default locale is used for translation.\n- If no value for locale is specified, the number is returned unmodified.\n*/ const toLocaleString = (number, locale)=>{\n    let result = number;\n    if (typeof locale === \"string\") {\n        result = number.toLocaleString(locale);\n    } else if (locale === true) {\n        result = number.toLocaleString();\n    }\n    return result;\n};\n\n//# sourceMappingURL=pretty-bytes.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9wcmV0dHktYnl0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQSw2REFBNkQsY0FBYyxJQUFJLE9BQU87QUFDdEY7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ra2FuYnUtbmluamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9wcmV0dHktYnl0ZXMuanM/ZmYzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZXR0eUJ5dGVzO1xuZnVuY3Rpb24gcHJldHR5Qnl0ZXMobnVtYmVyLCBvcHRpb25zKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIGZpbml0ZSBudW1iZXIsIGdvdCAke3R5cGVvZiBudW1iZXJ9OiAke251bWJlcn1gKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLnNpZ25lZCAmJiBudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwiIDAgQlwiO1xuICAgIH1cbiAgICBjb25zdCBpc05lZ2F0aXZlID0gbnVtYmVyIDwgMDtcbiAgICBjb25zdCBwcmVmaXggPSBpc05lZ2F0aXZlID8gXCItXCIgOiBvcHRpb25zLnNpZ25lZCA/IFwiK1wiIDogXCJcIjtcbiAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyIDwgMSkge1xuICAgICAgICBjb25zdCBudW1iZXJTdHJpbmcgPSB0b0xvY2FsZVN0cmluZyhudW1iZXIsIG9wdGlvbnMubG9jYWxlKTtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArIG51bWJlclN0cmluZyArIFwiIEJcIjtcbiAgICB9XG4gICAgY29uc3QgZXhwb25lbnQgPSBNYXRoLm1pbihNYXRoLmZsb29yKE1hdGgubG9nMTAobnVtYmVyKSAvIDMpLCBVTklUUy5sZW5ndGggLSAxKTtcbiAgICBudW1iZXIgPSBOdW1iZXIoKG51bWJlciAvIE1hdGgucG93KDEwMDAsIGV4cG9uZW50KSkudG9QcmVjaXNpb24oMykpO1xuICAgIGNvbnN0IG51bWJlclN0cmluZyA9IHRvTG9jYWxlU3RyaW5nKG51bWJlciwgb3B0aW9ucy5sb2NhbGUpO1xuICAgIGNvbnN0IHVuaXQgPSBVTklUU1tleHBvbmVudF07XG4gICAgcmV0dXJuIHByZWZpeCArIG51bWJlclN0cmluZyArIFwiIFwiICsgdW5pdDtcbn1cbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyBjb25zdCBVTklUUyA9IFtcbiAgICBcIkJcIixcbiAgICBcImtCXCIsXG4gICAgXCJNQlwiLFxuICAgIFwiR0JcIixcbiAgICBcIlRCXCIsXG4gICAgXCJQQlwiLFxuICAgIFwiRUJcIixcbiAgICBcIlpCXCIsXG4gICAgXCJZQlwiXG5dO1xuLypcbkZvcm1hdHMgdGhlIGdpdmVuIG51bWJlciB1c2luZyBgTnVtYmVyI3RvTG9jYWxlU3RyaW5nYC5cbi0gSWYgbG9jYWxlIGlzIGEgc3RyaW5nLCB0aGUgdmFsdWUgaXMgZXhwZWN0ZWQgdG8gYmUgYSBsb2NhbGUta2V5IChmb3IgZXhhbXBsZTogYGRlYCkuXG4tIElmIGxvY2FsZSBpcyB0cnVlLCB0aGUgc3lzdGVtIGRlZmF1bHQgbG9jYWxlIGlzIHVzZWQgZm9yIHRyYW5zbGF0aW9uLlxuLSBJZiBubyB2YWx1ZSBmb3IgbG9jYWxlIGlzIHNwZWNpZmllZCwgdGhlIG51bWJlciBpcyByZXR1cm5lZCB1bm1vZGlmaWVkLlxuKi8gY29uc3QgdG9Mb2NhbGVTdHJpbmcgPSAobnVtYmVyLCBsb2NhbGUpPT57XG4gICAgbGV0IHJlc3VsdCA9IG51bWJlcjtcbiAgICBpZiAodHlwZW9mIGxvY2FsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXN1bHQgPSBudW1iZXIudG9Mb2NhbGVTdHJpbmcobG9jYWxlKTtcbiAgICB9IGVsc2UgaWYgKGxvY2FsZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXN1bHQgPSBudW1iZXIudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZXR0eS1ieXRlcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/lib/pretty-bytes.js\n");

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
/***/ 94140:
=======
/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

<<<<<<< HEAD
/***/ 89716:
=======
/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

<<<<<<< HEAD
/***/ 76368:
=======
/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

<<<<<<< HEAD
/***/ 56724:
=======
/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

<<<<<<< HEAD
/***/ 18743:
=======
/***/ "../shared/lib/html-context":
/*!*******************************************************!*\
  !*** external "next/dist/shared/lib/html-context.js" ***!
  \*******************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

<<<<<<< HEAD
/***/ 78524:
=======
/***/ "../shared/lib/is-plain-object":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/is-plain-object.js" ***!
  \**********************************************************/
>>>>>>> main
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__(17930));
=======
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_document.js"));
>>>>>>> main
module.exports = __webpack_exports__;

})();