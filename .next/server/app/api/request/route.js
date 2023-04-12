"use strict";
(() => {
var exports = {};
exports.id = 681;
exports.ids = [681];
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

/***/ 77119:
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

// NAMESPACE OBJECT: ./src/app/api/request/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "DELETE": () => (DELETE),
  "GET": () => (GET),
  "POST": () => (POST),
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
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(63477);
;// CONCATENATED MODULE: ./src/app/api/request/route.ts



const revalidate = 1;
async function GET(request, param) {
    const client = new external_mongodb_.MongoClient(process.env.mongodb || "no db env");
    const dbName = "MakkaKim-M0";
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("kkanbu_requests");
    const requestList = await collection.find({}, {
        projection: {
            password: 0
        }
    }).sort({
        createdAt: -1
    }).toArray();
    client.close();
    return next_response/* default.json */.Z.json(requestList);
}
async function POST(request) {
    const requestData = await request.json();
    const client = new external_mongodb_.MongoClient(process.env.mongodb || "no db env");
    const dbName = "MakkaKim-M0";
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("kkanbu_requests");
    const obj = await collection.insertOne({
        ...requestData,
        createdAt: new Date()
    });
    client.close();
    return next_response/* default.json */.Z.json(obj.insertedId);
}
async function DELETE(request, param) {
    const query = request.url.split("?")[1];
    if (query) {
        const params = (0,external_querystring_.parse)(query);
        const client = new external_mongodb_.MongoClient(process.env.mongodb || "no db env");
        const dbName = "MakkaKim-M0";
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("kkanbu_requests");
        const { id , password  } = params;
        const res = await collection.deleteOne({
            _id: new external_mongodb_.ObjectId(id),
            password
        });
        client.close();
        if (res.deletedCount === 1) {
            return next_response/* default.json */.Z.json("success");
        }
    }
    return next_response/* default.json */.Z.json("failed");
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Frequest%2Froute&name=app%2Fapi%2Frequest%2Froute&pagePath=private-next-app-dir%2Fapi%2Frequest%2Froute.ts&appDir=%2Fhome%2Faa019%2Fdev%2Fkkanbu-ninja%2Fsrc%2Fapp&appPaths=%2Fapi%2Frequest%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=&nextConfigOutput=!

    

    

    

    const routeModule = new app_route_module/* default */.ZP({
    userland: route_namespaceObject,
    pathname: "/api/request",
    resolvedPagePath: "/home/aa019/dev/kkanbu-ninja/src/app/api/request/route.ts",
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
var __webpack_exports__ = __webpack_require__.X(0, [961,616], () => (__webpack_exec__(77119)));
module.exports = __webpack_exports__;

})();