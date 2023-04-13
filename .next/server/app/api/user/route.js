"use strict";
(() => {
var exports = {};
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 38013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 35547:
/***/ ((module) => {

module.exports = require("next/dist/compiled/bytes");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 74929:
/***/ ((module) => {

module.exports = require("next/dist/compiled/content-type");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 47664:
/***/ ((module) => {

module.exports = require("next/dist/compiled/fresh");

/***/ }),

/***/ 45644:
/***/ ((module) => {

module.exports = require("next/dist/compiled/jsonwebtoken");

/***/ }),

/***/ 27798:
/***/ ((module) => {

module.exports = require("next/dist/compiled/raw-body");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 65780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/user/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET),
  "revalidate": () => (revalidate)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(76145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(19532);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(83804);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(38013);
;// CONCATENATED MODULE: ./src/app/api/user/controller.ts

const getUsers = async ()=>{
    const client = new external_mongodb_.MongoClient(process.env.mongodb || "no db env");
    // Database Name
    const dbName = "MakkaKim-M0";
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("kkanbu_users");
    const userData = await collection.aggregate([
        {
            "$lookup": {
                from: "kkanbu_items",
                localField: "id",
                foreignField: "id",
                as: "item"
            }
        },
        {
            $project: {
                rank: "$rank",
                challenges: "$challenges",
                Object: "$Object",
                public: "$public",
                class: "$class",
                id: "$id",
                account: "$account",
                experience: "$experience",
                level: "$level",
                name: "$name",
                realm: "$realm",
                dead: "$dead",
                items: {
                    $arrayElemAt: [
                        "$item",
                        0
                    ]
                }
            }
        }
    ]).sort({
        experience: -1
    }).toArray();
    client.close();
    return userData;
};
/* harmony default export */ const controller = (getUsers);

;// CONCATENATED MODULE: ./src/app/api/user/route.ts


const revalidate = 30;
async function GET(request, param) {
    const userData = await controller();
    return next_response/* default.json */.Z.json(userData);
} //https://www.pathofexile.com/api/ladders?offset=0&limit=200&id=KKANBU+(PL38521)&type=league

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fuser%2Froute&name=app%2Fapi%2Fuser%2Froute&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2Fhome%2Faa019%2Fdev%2Fkkanbu-ninja%2Fsrc%2Fapp&appPaths=%2Fapi%2Fuser%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=&nextConfigOutput=!

    

    

    

    const routeModule = new app_route_module/* default */.ZP({
    userland: route_namespaceObject,
    pathname: "/api/user",
    resolvedPagePath: "/home/aa019/dev/kkanbu-ninja/src/app/api/user/route.ts",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    

/***/ }),

/***/ 83804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
var _response = __webpack_require__(66843); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [961,904,601,843], () => (__webpack_exec__(65780)));
module.exports = __webpack_exports__;

})();