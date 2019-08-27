webpackJsonp([13],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(44);
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
 * Login page component
 */
var LoginPage = (function () {
    function LoginPage(apiService, nav, builder, util, translate, push, storage) {
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.translate = translate;
        this.push = push;
        this.storage = storage;
        this.active = true;
        this.loginForm = this.builder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.util.showLoader();
        this.apiService.login(this.loginForm.value.email, this.loginForm.value.password).then(function (data) {
            _this.push.init(_this.apiService.getSettings().pushwoosh_id);
            _this.util.hideLoader();
            _this.storage.set('welcomeShown', '1').then(function () { }, function () { });
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        }, function () {
            _this.util.hideLoader();
            _this.util.alert(_this.translate.instant('login.error'), '');
        });
    };
    LoginPage.prototype.signup = function () {
        this.nav.setRoot('SignupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\personal\login\login.html"*/'<ion-content class="signup-page">\n	<div padding class="wrap">\n		<form (ngSubmit)="doLogin()" *ngIf="active" novalidate [formGroup]="loginForm" class="signup-form">\n      <div class="icon">\n        <img src="assets/icon.png" alt="">\n      </div>\n			<ion-item>\n				<ion-input placeholder="{{ \'login.email\' | translate }}" type="text" [formControl]="loginForm.controls.email">\n				</ion-input>\n			</ion-item>\n			<ion-item class="iconed-input">\n				<ion-input placeholder="{{ \'login.password\' | translate }}" type="password" [formControl]="loginForm.controls.password">\n				</ion-input>\n			</ion-item>\n			<button ion-button type="submit" id="input_submit" block color="primary" [disabled]="loginForm.invalid">\n				{{ \'login.button\' | translate }}\n			</button>\n			<div class="login-links">\n				<a (click)="signup()">{{ \'login.no_account\' | translate }}</a>\n			</div>\n		</form>\n	</div>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\personal\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=13.js.map