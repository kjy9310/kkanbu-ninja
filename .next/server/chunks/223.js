"use strict";
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 3223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET": () => (/* binding */ handler),
/* harmony export */   "POST": () => (/* binding */ handler),
/* harmony export */   "authOptions": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88354);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_twitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74948);



const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        (0,next_auth_providers_twitch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            clientId: process.env.twitchClientId || "not exist",
            clientSecret: process.env.twitchClientSecret || "not exist"
        })
    ],
    callbacks: {
        async session ({ session , token  }) {
            const client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(process.env.mongodb || "no db env");
            const dbName = "MakkaKim-M0";
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection("kkanbu");
            const kkanbuInfo = await collection.findOne({
                twitch: session.user.name
            });
            client.close();
            if (kkanbuInfo) {
                session.token = token.token;
                session.kkanbu = kkanbuInfo;
                return session // The return type will match the one returned in `useSession()`
                ;
            }
            return null;
        }
    }
};
const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);



/***/ })

};
;