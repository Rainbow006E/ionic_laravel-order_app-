webpackJsonp([9],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLocatorPageModule", function() { return StoreLocatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_locator__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoreLocatorPageModule = (function () {
    function StoreLocatorPageModule() {
    }
    StoreLocatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__store_locator__["a" /* StoreLocatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store_locator__["a" /* StoreLocatorPage */]),
            ],
        })
    ], StoreLocatorPageModule);
    return StoreLocatorPageModule;
}());

//# sourceMappingURL=store-locator.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreLocatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StoreLocatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoreLocatorPage = (function () {
    function StoreLocatorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StoreLocatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreLocatorPage');
    };
    StoreLocatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store-locator',template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\store-locator\store-locator.html"*/'<!--\n  Generated template for the StoreLocatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Store Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <iframe class = "frame" style="width:100%; height:100%;"\n  src="http://phplaravel-160077-586391.cloudwaysapps.com/store-locator">\n</iframe>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\store-locator\store-locator.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], StoreLocatorPage);
    return StoreLocatorPage;
    var _a, _b;
}());

//# sourceMappingURL=store-locator.js.map

/***/ })

});
//# sourceMappingURL=9.js.map