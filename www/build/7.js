webpackJsonp([7],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_info__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_ecurrency_module__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProductsPageModule = (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_3__product_info__["a" /* ProductInfo */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
                __WEBPACK_IMPORTED_MODULE_5__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(47);
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
 * Products list page component
 */
var ProductsPage = (function () {
    function ProductsPage(nav, apiService, params, cart, alertCtrl) {
        this.nav = nav;
        this.apiService = apiService;
        this.params = params;
        this.cart = cart;
        this.alertCtrl = alertCtrl;
        this.searchQ = '';
        this.layout = 1;
        this.addonsList1 = [];
        this.addonsList2 = [];
        this.productsList = [];
        this.layout = this.apiService.getSettings().products_layout;
        this.products = [];
        this.category = params.get('category');
        if (this.category == null) {
            location.href = '/';
        }
    }
    ProductsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.category == null) {
            return;
        }
        this.apiService.getProducts(this.category.id).then(function (response) {
            _this.products = response.json();
            _this.initialProducts = response.json();
            for (var i = 0; i < _this.products.length; i++) {
                _this.products[i].added = _this.cart.hasItem(_this.products[i]);
            }
        });
        this.apiService.getAddons1().subscribe(function (data) {
            _this.addonsList1 = data;
            console.log('Addonssss1 : ', _this.addonsList1);
        });
        this.apiService.getAddons2().subscribe(function (data) {
            _this.addonsList2 = data;
            console.log('Addonssss2 : ', _this.addonsList2);
        });
        this.apiService.getProductsNew().subscribe(function (data) {
            _this.productsList = data;
            console.log('Addonssss3 : ', _this.productsList);
        });
    };
    ProductsPage.prototype.onSearchInput = function ($event) {
        var _this = this;
        this.products = this.initialProducts.filter(function (p) {
            return p.name.toLowerCase().indexOf(_this.searchQ.toLowerCase()) >= 0;
        });
    };
    ProductsPage.prototype.addToCart = function (product) {
        var _this = this;
        //console.log("work" + product);
        this.apiService.getProducts(this.category.id).then(function (response) {
            _this.products = response.json();
            _this.initialProducts = response.json();
            console.log("testing", _this.products);
            //console.log("testing2", product.addon_sets[0].name);
            _this.cart.addItem(product, 1);
            product.added = true;
            //console.log(this.addonsList2)
            for (var j = 0; j < product.addon_sets.length; j++) {
                if (product.addon_sets.length !== 0) {
                    var alert_1 = _this.alertCtrl.create();
                    alert_1.present();
                    alert_1.addButton({
                        text: 'Done',
                    });
                    alert_1.setTitle('Choose add ons:');
                    for (var k = 0; k < _this.addonsList2.length; k++) {
                        if (product.addon_sets[j].id == _this.addonsList2[k].addon_set_id) {
                            console.log("ffs", _this.addonsList2[k].addon_set_id);
                            alert_1.addInput({
                                type: 'checkbox',
                                label: _this.addonsList2[k].name,
                                value: _this.addonsList2[k].name
                            });
                        }
                    }
                }
            }
            //this.products[i].added = this.cart.hasItem(this.products[i]);
            // console.log(this.products);
            //console.log(this.category.id);
        });
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\catalog\products\products.html"*/'<ion-header>\n  <ion-navbar custom-navbar>\n    <ion-title>\n      <span *ngIf="category">{{ category.name }}</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="products-content">\n  <ion-searchbar [(ngModel)]="searchQ" [showCancelButton]="true"\n  (ionInput)="onSearchInput($event)">\n  </ion-searchbar>\n\n  <div *ngIf="layout == 2">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 *ngFor="let product of products">\n          <div class="product -two-column">\n            <img [src]="product.images[0]" *ngIf="product.images.length == 1">\n            <div padding class="product-info">\n              <product-info [product]="product" [descr]="false"></product-info>\n              <button ion-button block icon-left (click)="addToCart(product)" color="{{ product.added ? \'secondary\' : \'primary\' }}">\n                <ion-icon name=\'cart\'></ion-icon>\n                <span *ngIf="!product.added">{{ \'products.to_cart\' | translate }}</span>\n                <span *ngIf="product.added">{{ \'products.in_cart\' | translate }}</span>\n              </button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="layout == 1">\n    <ion-item text-wrap class="product-2" *ngFor="let product of products">\n      <ion-avatar item-start *ngIf="product.images.length">\n        <img [src]="product.images[0]" alt="">\n      </ion-avatar>\n      <product-info [product]="product" [descr]="false"></product-info>\n      <button item-end ion-button icon-left (click)="addToCart(product)" color="{{ product.added ? \'secondary\' : \'primary\' }}">\n        <ion-icon name=\'cart\'></ion-icon>\n        <span *ngIf="!product.added">{{ \'products.to_cart\' | translate }}</span>\n        <span *ngIf="product.added">{{ \'products.in_cart\' | translate }}</span>\n      </button>\n    </ion-item>\n  </div>\n\n  <div *ngIf="layout == 0">\n    <div class="product" *ngFor="let product of products">\n      <div *ngIf="product.images.length > 0" class="product-images">\n        <img [src]="product.images[0]" *ngIf="product.images.length == 1">\n        <ion-slides pager *ngIf="product.images.length > 1">\n          <ion-slide *ngFor="let image of product.images">\n            <img [src]="image">\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <div padding class="product-info">\n        <product-info [product]="product" [descr]="true"></product-info>\n        <button ion-button block icon-left (click)="addToCart(product)" color="{{ product.added ? \'secondary\' : \'primary\' }}">\n          <ion-icon name=\'cart\'></ion-icon>\n          <span *ngIf="!product.added">{{ \'products.to_cart\' | translate }}</span>\n          <span *ngIf="product.added">{{ \'products.in_cart\' | translate }}</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\catalog\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Products info component, used in products list
 */
var ProductInfo = (function () {
    function ProductInfo() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductInfo.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductInfo.prototype, "descr", void 0);
    ProductInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\catalog\products\product_info.html"*/'<div>\n  <h2>{{ product.name }}</h2>\n  <p class="product-descr" *ngIf="descr">{{ product.description }}</p>\n  <div class="product-price">\n    <span *ngIf="product.price_old && (product.price_old > product.price)"><s>{{ product.price_old}}</s></span>\n    <span>{{ product.price }} AED</span>\n  </div>\n</div>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\catalog\products\product_info.html"*/,
            selector: 'product-info'
        })
    ], ProductInfo);
    return ProductInfo;
}());

//# sourceMappingURL=product_info.js.map

/***/ })

});
//# sourceMappingURL=7.js.map