webpackJsonp([5],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_ecurrency_module__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
                __WEBPACK_IMPORTED_MODULE_6__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */]
            ]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stripe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(161);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Stripe
 * @description
 * A plugin that allows you to use Stripe's Native SDKs for Android and iOS.
 *
 * @usage
 * ```typescript
 * import { Stripe } from '@ionic-native/stripe';
 *
 * constructor(private stripe: Stripe) { }
 *
 * ...
 *
 * this.stripe.setPublishableKey('my_publishable_key');
 *
 * let card = {
 *  number: '4242424242424242',
 *  expMonth: 12,
 *  expYear: 2020,
 *  cvc: '220'
 * };
 *
 * this.stripe.createCardToken(card)
 *    .then(token => console.log(token.id))
 *    .catch(error => console.error(error));
 *
 * ```
 *
 * @interfaces
 * StripeCardTokenParams
 */
var Stripe = (function (_super) {
    __extends(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set publishable key
     * @param publishableKey {string} Publishable key
     * @return {Promise<void>}
     */
    Stripe.prototype.setPublishableKey = function (publishableKey) { return; };
    /**
     * Create Credit Card Token
     * @param params {StripeCardTokenParams} Credit card information
     * @return {Promise<StripeCardTokenRes>} returns a promise that resolves with the token object, or rejects with an error
     */
    Stripe.prototype.createCardToken = function (params) { return; };
    /**
     * Create a bank account token
     * @param params {StripeBankAccountParams} Bank account information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    Stripe.prototype.createBankAccountToken = function (params) { return; };
    /**
     * Validates a credit card number
     * @param cardNumber {string} Credit card number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCardNumber = function (cardNumber) { return; };
    /**
     * Validates a CVC number
     * @param cvc {string} CVC number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCVC = function (cvc) { return; };
    /**
     * Validates an expiry date
     * @param expMonth {string} expiry month
     * @param expYear {string} expiry year
     * @return {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return; };
    /**
     * Get a card type from card number
     * @param cardNumber {string} Card number
     * @return {Promise<string>} returns a promise that resolves with the credit card type
     */
    Stripe.prototype.getCardType = function (cardNumber) { return; };
    Stripe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Stripe.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "setPublishableKey", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "createCardToken", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "createBankAccountToken", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "validateCardNumber", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "validateCVC", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "validateExpiryDate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Stripe.prototype, "getCardType", null);
    Stripe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Stripe',
            plugin: 'cordova-plugin-stripe',
            pluginRef: 'cordova.plugins.stripe',
            repo: 'https://github.com/zyramedia/cordova-plugin-stripe',
            platforms: ['Android', 'Browser', 'iOS']
        })
    ], Stripe);
    return Stripe;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PayPalPayment; });
/* unused harmony export PayPalItem */
/* unused harmony export PayPalPaymentDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PayPalConfiguration; });
/* unused harmony export PayPalShippingAddress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(161);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name PayPal
 * @description
 * PayPal plugin for Cordova/Ionic Applications
 *
 * @usage
 * ```typescript
 * import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
 *
 * constructor(private payPal: PayPal) { }
 *
 * ...
 *
 *
 * this.payPal.init({
 *   PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
 *   PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
 * }).then(() => {
 *   // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
 *   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
 *     // Only needed if you get an "Internal Service Error" after PayPal login!
 *     //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
 *   })).then(() => {
 *     let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
 *     this.payPal.renderSinglePaymentUI(payment).then(() => {
 *       // Successfully paid
 *
 *       // Example sandbox response
 *       //
 *       // {
 *       //   "client": {
 *       //     "environment": "sandbox",
 *       //     "product_name": "PayPal iOS SDK",
 *       //     "paypal_sdk_version": "2.16.0",
 *       //     "platform": "iOS"
 *       //   },
 *       //   "response_type": "payment",
 *       //   "response": {
 *       //     "id": "PAY-1AB23456CD789012EF34GHIJ",
 *       //     "state": "approved",
 *       //     "create_time": "2016-10-03T13:33:33Z",
 *       //     "intent": "sale"
 *       //   }
 *       // }
 *     }, () => {
 *       // Error or render dialog closed without being successful
 *     });
 *   }, () => {
 *     // Error in configuration
 *   });
 * }, () => {
 *   // Error in initialization, maybe PayPal isn't supported or something else
 * });
 * ```
 * @interfaces
 * PayPalEnvironment
 * PayPalConfigurationOptions
 * @classes
 * PayPalPayment
 * PayPalItem
 * PayPalPaymentDetails
 * PayPalShippingAddress
 */
var PayPal = (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    PayPal.prototype.version = function () { return; };
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the
     * UI faster. The preconnect is valid for a limited time, so
     * the recommended time to preconnect is on page load.
     *
     * @param {PayPalEnvironment} clientIdsForEnvironments: set of client ids for environments
     * @returns {Promise<any>}
     */
    PayPal.prototype.init = function (clientIdsForEnvironments) { return; };
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the UI faster.
     * The preconnect is valid for a limited time, so the recommended time to preconnect is on page load.
     *
     * @param {String} environment: available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
     * @param {PayPalConfiguration} configuration: PayPalConfiguration object, for Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set
     * @returns {Promise<any>}
     */
    PayPal.prototype.prepareToRender = function (environment, configuration) { return; };
    /**
     * Start PayPal UI to collect payment from the user.
     * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
     * for more documentation of the params.
     *
     * @param {PayPalPayment} payment PayPalPayment object
     * @returns {Promise<any>}
     */
    PayPal.prototype.renderSinglePaymentUI = function (payment) { return; };
    /**
     * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
     * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
     * payment is originating from a valid, user-consented device+application.
     * This helps reduce fraud and decrease declines.
     * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
     * Pass the result to your server, to include in the payment request sent to PayPal.
     * Do not otherwise cache or store this value.
     * @returns {Promise<any>}
     */
    PayPal.prototype.clientMetadataID = function () { return; };
    /**
     * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
     * @returns {Promise<any>}
     */
    PayPal.prototype.renderFuturePaymentUI = function () { return; };
    /**
     * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
     *
     * @param {Array<string>} scopes scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
     * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
     * @returns {Promise<any>}
     */
    PayPal.prototype.renderProfileSharingUI = function (scopes) { return; };
    PayPal.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PayPal.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "version", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "init", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, PayPalConfiguration]),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "prepareToRender", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PayPalPayment]),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "renderSinglePaymentUI", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "clientMetadataID", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "renderFuturePaymentUI", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], PayPal.prototype, "renderProfileSharingUI", null);
    PayPal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'PayPal',
            plugin: 'com.paypal.cordova.mobilesdk',
            pluginRef: 'PayPalMobile',
            repo: 'https://github.com/paypal/PayPal-Cordova-Plugin',
            platforms: ['Android', 'iOS']
        })
    ], PayPal);
    return PayPal;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

/**
 * @hidden
 */
var PayPalPayment = (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());

/**
 * @hidden
 */
var PayPalItem = (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());

/**
 * @hidden
 */
var PayPalPaymentDetails = (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());

/**
 * @hidden
 */
var PayPalConfiguration = (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());

/**
 * @hidden
 */
var PayPalShippingAddress = (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_history_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_paypal__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_util_service__ = __webpack_require__(159);
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
 * Make an order page component
 */
var OrderPage = (function () {
    function OrderPage(cart, apiService, builder, alertCtrl, viewCtrl, modalCtrl, loadingCtrl, historyService, stripe, payPal, util, translate, navCtrl) {
        this.cart = cart;
        this.apiService = apiService;
        this.builder = builder;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.historyService = historyService;
        this.stripe = stripe;
        this.payPal = payPal;
        this.util = util;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.cTotalPrice = 0;
        this.cTaxPrice = 0;
        this.cPriceWithTax = 0;
        this.cFullPrice = 0;
        this.cLoyaltyUsed = 0;
        this.userData = {};
        this.multipleCities = false;
        this.cities = [];
        this.add = [];
        this.areasList = [];
        this.areas_city = [];
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
        this.add = this.apiService.getAddons1();
        console.log("Addons" + this.add);
        this.del = this.apiService.getDeliveryAreas();
        console.log("delivery" + this.del);
        this.userData = this.apiService.getUserData();
        this.stripe.setPublishableKey(this.apiService.getSettings().stripe_publishable);
        this.deliveryPrice = 0;
        this.orderData = {
            products: cart.getItems()
        };
        this.orderForm = this.builder.group({
            name: ["" + this.userData.name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ["" + this.userData.phone, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            promo_code: [''],
            loyalty: [0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].max(this.userData.loyalty_reward)],
            payment_method: ['cash'],
            comment: ''
        });
        this.formReady = true;
        this.discountPrice = null;
        this.areas_city[0] = { name: 'Please select city.' };
    }
    OrderPage.prototype.getAreas = function () {
        var _this = this;
        this.apiService.getAreas().subscribe(function (data) {
            _this.areasList = data;
            console.log('Areas : ', _this.areasList[0].name);
        });
    };
    OrderPage.prototype.onCityChange = function (e) {
        console.log('e: ', e);
        this.areas_city = this.areasList.filter(function (x) { return x.city_id == e; });
        console.log('areas_city: ', this.areas_city);
    };
    OrderPage.prototype.showAddressWindow = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AddressMap');
        modal.onDidDismiss(function (data) {
            if (data && data.address) {
                _this.orderForm.controls['address'].setValue(data.address);
                _this.orderData.lat = data.lat;
                _this.orderData.lng = data.lng;
                _this.deliveryPrice = data.service_area.price;
                _this.orderData.delivery_area_id = data.service_area.id;
                _this.calculatePrices();
            }
        });
        modal.present();
    };
    OrderPage.prototype.calculatePrices = function () {
        this.cFullPrice = this.getFullPrice();
        this.discountPrice = this.cFullPrice;
        this.cTotalPrice = this.cartPrice();
        this.cTaxPrice = this.cartTax();
        this.cPriceWithTax = this.cartWithTax();
    };
    OrderPage.prototype.ionViewWillEnter = function () {
        this.validatePromo(true);
        this.calculatePrices();
    };
    OrderPage.prototype.validatePromo = function (supressAlert) {
        var _this = this;
        if (!this.orderForm.value.promo_code || (this.orderForm.value.promo_code == '')) {
            return;
        }
        var data = {
            code: this.orderForm.value.promo_code,
            products: this.cart.getItems()
        };
        this.apiService.validateDiscount(data).subscribe(function (data) {
            if (!data.success) {
                _this.discountPrice = null;
                if (!supressAlert) {
                    var msg = _this.translate.instant('order.promo_not_found');
                    if (data.code == 400) {
                        msg = _this.translate.instant('order.promo_invalid');
                    }
                    _this.util.alert(msg, _this.translate.instant('order.error_title'));
                }
            }
            else {
                if (!supressAlert) {
                    _this.util.alert(_this.translate.instant('order.promo_applied'), _this.translate.instant('order.success'));
                }
                _this.discountPrice = data.new_price;
                _this.cPriceWithTax = data.new_price_tax;
                _this.cTaxPrice = _this.cPriceWithTax - _this.discountPrice;
            }
        });
    };
    /**
     * Actual submission of order data to server
     */
    OrderPage.prototype.pushPage = function () {
        this.navCtrl.push('OrderSuccessPage');
    };
    /**
     * Call PayPal dialog, create a transaction than place an order
     */
    OrderPage.prototype.payPayPal = function () {
        var _this = this;
        var showPayPalError = function () {
            _this.util.alert(_this.translate.instant('order.paypal_error'), '');
        };
        this.payPal.init({
            PayPalEnvironmentProduction: this.apiService.getSettings().paypal_client_id,
            PayPalEnvironmentSandbox: this.apiService.getSettings().paypal_client_id
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            // change environment here to start payments processing
            var env = 'PayPalEnvironmentSandbox';
            if (_this.apiService.getSettings().paypal_production) {
                env = 'PayPalEnvironmentProduction';
            }
            _this.payPal.prepareToRender(env, new __WEBPACK_IMPORTED_MODULE_7__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_paypal__["c" /* PayPalPayment */]("" + (_this.cartPrice() + _this.deliveryPrice), _this.apiService.getSettings().paypal_currency, 'Order', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (data) {
                    if (data.response && data.response.state == 'approved') {
                        _this.orderData.paypal_id = data.response.id;
                        //this.realPlaceOrder();
                    }
                    else {
                        showPayPalError();
                    }
                }, showPayPalError);
            }, showPayPalError);
        }, showPayPalError);
    };
    /**
     * Call PayPal dialog, get the card token than place an order
     */
    OrderPage.prototype.payStripe = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CreditCardInput');
        modal.onDidDismiss(function (data) {
            if (data && data.number) {
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.stripe.createCardToken(data)
                    .then(function (token) {
                    loading_1.dismiss();
                    _this.orderData.stripe_token = token.id;
                    //this.realPlaceOrder();
                })
                    .catch(function (error) {
                    loading_1.dismiss();
                    _this.util.alert(_this.translate.instant('order.payment_error'), '');
                });
            }
        });
        modal.present();
    };
    /**
     * Basic order form submission handler
     * will call corresponding payment method handler
     */
    OrderPage.prototype.placeOrder = function () {
        this.orderData.name = this.orderForm.value.name;
        this.orderData.phone = this.orderForm.value.phone;
        this.orderData.address = this.orderForm.value.address;
        this.orderData.loyalty = this.orderForm.value.loyalty;
        this.orderData.code = this.orderForm.value.promo_code;
        this.orderData.payment_method = this.orderForm.value.payment_method;
        this.orderData.city_id = this.apiService.getUserData().city_id;
        this.orderData.customer_id = this.apiService.getUserData().id;
        this.orderData.comment = this.orderForm.value.comment;
        if (this.orderData.payment_method == 'cash') {
            //this.realPlaceOrder();
        }
        if (this.orderData.payment_method == 'stripe') {
            this.payStripe();
        }
        if (this.orderData.payment_method == 'paypal') {
            this.payPayPal();
        }
    };
    OrderPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    OrderPage.prototype.getFullPrice = function () {
        var result = 0;
        this.cart.getItems().forEach(function (item) {
            result = result + item.product.price * item.count;
        });
        return result;
    };
    OrderPage.prototype.cartPrice = function () {
        if (this.discountPrice) {
            return this.discountPrice;
        }
        return this.getFullPrice();
    };
    OrderPage.prototype.cartTax = function () {
        var result = 0;
        this.cart.getItems().forEach(function (item) {
            result = result + item.product.price * item.product.tax_value / 100 * item.count;
        });
        return result;
    };
    OrderPage.prototype.cartWithTax = function () {
        if (this.apiService.getSettings().tax_included) {
            return this.cartPrice() + this.deliveryPrice;
        }
        else {
            return this.cartTax() + this.cartPrice() + this.deliveryPrice;
        }
    };
    OrderPage.prototype.useReward = function () {
        this.cLoyaltyUsed = this.orderForm.controls['loyalty'].value;
        if (this.cLoyaltyUsed > this.cTotalPrice) {
            this.cLoyaltyUsed = this.cTotalPrice;
            this.orderForm.controls['loyalty'].setValue(this.cLoyaltyUsed);
        }
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\ordering\order\order.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'order.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form *ngIf="formReady" [formGroup]="orderForm" (ngSubmit)="placeOrder(orderForm.value)" novalidate>\n    <ion-item>\n      <ion-label fixed>{{ \'order.name\' | translate }}</ion-label>\n      <ion-input placeholder="{{ \'order.click_to_write\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>{{ \'order.phone\' | translate }}</ion-label>\n      <ion-input placeholder="{{ \'order.click_to_write\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.phone"></ion-input>\n    </ion-item>\n    <button type="button" ion-item detail-none (click)="showAddressWindow()">\n      <ion-label fixed>{{ \'order.address\' | translate }}</ion-label>\n      <ion-input disabled placeholder="{{ \'order.click_to_write\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.address"></ion-input>\n    </button>\n    <ion-item>\n      <ion-label fixed>{{ \'order.promo_code\' | translate }}</ion-label>\n      <ion-input placeholder="{{ \'order.optional\' | translate }}" type="text"\n                 [formControl]="orderForm.controls.promo_code"></ion-input>\n      <button ion-button item-right type="button" (click)="validatePromo()">{{ \'order.check_promo\' | translate }}\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>{{ \'order.comment\' | translate }}</ion-label>\n      <ion-textarea [formControl]="orderForm.controls.comment"\n                    placeholder="{{ \'order.optional\' | translate }}"></ion-textarea>\n    </ion-item>\n\n    <p class="selectL">Select Location:</p>\n    <form (ngSubmit)=" openOrder()" *ngIf="active" novalidate [formGroup]="loginForm" class="signup-form">\n\n    <ion-item *ngIf="multipleCities">\n      <ion-select placeholder="{{ \'newOrder.city\' | translate }}" [formControl]="loginForm.controls.city_id" (ionChange)="onCityChange($event)">\n        <ion-option *ngFor="let city of cities" value="{{ city.id }}">{{ city.name }}</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item *ngIf="multipleCities">\n        <ion-select placeholder="{{ \'newOrder.area\' | translate }}" [formControl]="loginForm.controls.city_id">\n          <ion-option  *ngFor="let areas of this.areas_city" value="{{ areas.name }}">{{ areas.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n  \n  </form>\n    \n    <ion-list radio-group [formControl]="orderForm.controls.payment_method">\n      <ion-item>\n        <ion-label>{{ \'order.cash_on_delivery\' | translate }}</ion-label>\n        <ion-radio name="payment_method" value="cash"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'order.card_on_delivery\' | translate }}</ion-label>\n        <ion-radio name="payment_method" value="card"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'order.paypal\' | translate }}</ion-label>\n        <ion-radio name="payment_method" value="paypal"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="userData.loyalty_reward > 0">\n      <ion-item>\n        <ion-label stacked>{{ \'order.use_reward\' | translate:{amount: userData.loyalty_reward | ecurrency} }}</ion-label>\n        <ion-input [formControl]="orderForm.controls.loyalty" type="number" max="userData.loyalty_reward"></ion-input>\n        <button ion-button item-right type="button" (click)="useReward()">{{ \'order.use\' | translate }}</button>\n      </ion-item>\n    </ion-list>\n    <div class="cart-total -nob">\n      <div>{{ \'order.price\' | translate }} {{ cTotalPrice | ecurrency }}</div>\n      <div>{{ \'order.delivery_price\' | translate }} {{ deliveryPrice | ecurrency }}</div>\n      <div>{{ \'order.total\' | translate }} {{ cTotalPrice + deliveryPrice | ecurrency }}</div>\n      <div *ngIf="cLoyaltyUsed > 0">{{ \'order.loyalty_used\' | translate:{amount: cLoyaltyUsed | ecurrency} }}</div>\n      <div *ngIf="discountPrice">{{ \'order.coupon_discount\' | translate }} {{ cFullPrice - discountPrice | ecurrency\n        }}</div>\n      <div *ngIf="discountPrice > 0 || cLoyaltyUsed > 0">Total with discount {{ discountPrice - cLoyaltyUsed + deliveryPrice | ecurrency }}</div>\n      <div *ngIf="cTaxPrice > 0">\n        <div>{{ \'order.tax\' | translate }} {{ cTaxPrice | ecurrency }}</div>\n        <div>{{ \'order.total_with_tax\' | translate }} {{ cPriceWithTax | ecurrency }}</div>\n      </div>\n    </div>\n    <button  (click)="pushPage()" [disabled]="!orderForm.valid" ion-button block class="place-order-button">{{\n      \'order.place_order\' | translate }}\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\ordering\order\order.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_history_service__["a" /* OrderHistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_history_service__["a" /* OrderHistoryService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe__["a" /* Stripe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe__["a" /* Stripe */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_paypal__["a" /* PayPal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_paypal__["a" /* PayPal */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_util_service__["a" /* UtilService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */]) === "function" && _o || Object])
    ], OrderPage);
    return OrderPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=5.js.map