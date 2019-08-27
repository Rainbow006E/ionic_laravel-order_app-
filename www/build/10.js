webpackJsonp([10],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcePageModule", function() { return SourcePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source__ = __webpack_require__(864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SourcePageModule = (function () {
    function SourcePageModule() {
    }
    SourcePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__source__["a" /* SourcePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__source__["a" /* SourcePage */]),
            ],
        })
    ], SourcePageModule);
    return SourcePageModule;
}());

//# sourceMappingURL=source.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcePage; });
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
 * Generated class for the SourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SourcePage = (function () {
    function SourcePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SourcePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SourcePage');
    };
    SourcePage.prototype.passData = function () {
        console.log('ionViewDidLoad FacilitiesPage');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = {
            issue_type: "test",
            description: "testing description",
            image: "https://images.fireside.fm/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover_medium.jpg",
        };
    };
    SourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-source',template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\source\source.html"*/'<!--\n  Generated template for the SourcePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>source</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="passData()">\n    \n        <label for="fname">Add Source</label>\n        <input type="text" id="fname" name="firstname" placeholder="Please select the issue" >\n    \n        <label for="lname">Key</label>\n        <input type="text" id="lname" name="lastname" placeholder="Please type a description">\n    \n    \n      <div>\n       \n            <button ion-button type="submit" (click)="success()">\n          Report\n        </button>\n      </div>\n     \n    </form>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\source\source.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], SourcePage);
    return SourcePage;
    var _a, _b;
}());

//# sourceMappingURL=source.js.map

/***/ })

});
//# sourceMappingURL=10.js.map