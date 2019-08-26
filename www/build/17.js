webpackJsonp([17],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderPageModule", function() { return NewOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_order__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewOrderPageModule = (function () {
    function NewOrderPageModule() {
    }
    NewOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_order__["a" /* NewOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_order__["a" /* NewOrderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], NewOrderPageModule);
    return NewOrderPageModule;
}());

//# sourceMappingURL=new-order.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_push_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(65);
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
 * Generated class for the NewOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewOrderPage = (function () {
    function NewOrderPage(navCtrl, navParams, apiService, nav, builder, util, push, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.nav = nav;
        this.builder = builder;
        this.util = util;
        this.push = push;
        this.storage = storage;
        this.translate = translate;
        this.multipleCities = false;
        this.cities = [];
        this.add = [];
        this.areasList = [];
        this.getAreas();
        this.active = true;
        var fields = {};
        this.multipleCities = (this.apiService.getSettings().multiple_cities == 1);
        if (this.multipleCities) {
            fields['city_id'] = [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required];
            this.cities = this.apiService.getCities();
            console.log("cities" + this.cities);
        }
        this.loginForm = this.builder.group(fields);
        this.cities = this.apiService.getCities();
        this.cat = this.apiService.getCategories();
        console.log("categories" + this.cat);
        this.del = this.apiService.getDeliveryAreas();
        console.log("delivery" + this.del);
    }
    NewOrderPage.prototype.getAreas = function () {
        var _this = this;
        this.apiService.getAreas().subscribe(function (data) {
            _this.areasList = data;
            console.log('Areas : ', _this.areasList[0].name);
        });
    };
    NewOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewOrderPage');
    };
    NewOrderPage.prototype.openOrder = function () {
        this.navCtrl.push('CategoriesPage');
    };
    NewOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-order',template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\new-order\new-order.html"*/'<!--\n  Generated template for the NewOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n     <p class="title">Select Location:</p>\n    	<form (ngSubmit)=" openOrder()" *ngIf="active" novalidate [formGroup]="loginForm" class="signup-form">\n	\n			<ion-item *ngIf="multipleCities">\n				<ion-select placeholder="{{ \'newOrder.city\' | translate }}" [formControl]="loginForm.controls.city_id">\n					<ion-option *ngFor="let city of cities" value="{{ city.id }}">{{ city.name }}</ion-option>\n				</ion-select>\n      </ion-item>\n      \n      <ion-item *ngIf="multipleCities">\n          <ion-select placeholder="{{ \'newOrder.area\' | translate }}" [formControl]="loginForm.controls.city_id">\n            <ion-option  *ngFor="let areas of this.areasList" value="{{ areas.name }}">{{ areas.name }}</ion-option>\n          </ion-select>\n        </ion-item>\n        \n      <!--   <div class="wrapper1">\n            <p class="title2">Default Adress:</p> \n          </div>\n            <div class="wrapper2">\n            \n            <ion-input  placeholder="33, street 2 Mankool, Blur Dubai"></ion-input>\n            <ion-input  placeholder="Dubai, United Arab Emirates"></ion-input>\n            </div> -->\n			\n			<button ion-button type="submit" block color="primary" [disabled]="loginForm.invalid">\n				{{ \'newOrder.continue\' | translate }}\n			</button>\n		\n		</form>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\new-order\new-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_5__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], NewOrderPage);
    return NewOrderPage;
}());

//# sourceMappingURL=new-order.js.map

/***/ })

});
//# sourceMappingURL=17.js.map