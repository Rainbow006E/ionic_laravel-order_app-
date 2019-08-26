webpackJsonp([4],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyPageModule", function() { return LoyaltyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loyalty__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_ecurrency_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoyaltyPageModule = (function () {
    function LoyaltyPageModule() {
    }
    LoyaltyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loyalty__["a" /* LoyaltyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loyalty__["a" /* LoyaltyPage */]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__["RoundProgressModule"]
            ]
        })
    ], LoyaltyPageModule);
    return LoyaltyPageModule;
}());

//# sourceMappingURL=loyalty.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(39);
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = /** @class */ (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    /**
       * Resolves a SVG color against the page's `base` tag.
       */
    RoundProgressService.prototype.resolveColor = /**
       * Resolves a SVG color against the page's `base` tag.
       */
    function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    /**
       * Generates a timestamp.
       */
    RoundProgressService.prototype.getTimestamp = /**
       * Generates a timestamp.
       */
    function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    /**
       * Generates the value for an SVG arc.
       * @param current       Current value.
       * @param total         Maximum value.
       * @param pathRadius    Radius of the SVG path.
       * @param elementRadius Radius of the SVG container.
       * @param isSemicircle  Whether the element should be a semicircle.
       */
    RoundProgressService.prototype.getArc = /**
       * Generates the value for an SVG arc.
       * @param current       Current value.
       * @param total         Maximum value.
       * @param pathRadius    Radius of the SVG path.
       * @param elementRadius Radius of the SVG container.
       * @param isSemicircle  Whether the element should be a semicircle.
       */
    function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    ;
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    /**
       * Converts polar cooradinates to Cartesian.
       * @param elementRadius  Radius of the wrapper element.
       * @param pathRadius     Radius of the path being described.
       * @param angleInDegrees Degree to be converted.
       */
    RoundProgressService.prototype._polarToCartesian = /**
       * Converts polar cooradinates to Cartesian.
       * @param elementRadius  Radius of the wrapper element.
       * @param pathRadius     Radius of the path being described.
       * @param angleInDegrees Degree to be converted.
       */
    function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    RoundProgressService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RoundProgressService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [platform_browser_1.DOCUMENT,] },] },
    ]; };
    return RoundProgressService;
}());
exports.RoundProgressService = RoundProgressService;
;
//# sourceMappingURL=round-progress.service.js.map

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
exports.ROUND_PROGRESS_DEFAULTS = new core_1.InjectionToken('ROUND_PROGRESS_DEFAULTS');
exports.ROUND_PROGRESS_DEFAULTS_PROVIDER = {
    provide: exports.ROUND_PROGRESS_DEFAULTS,
    useValue: {
        radius: 125,
        animation: 'easeOutCubic',
        animationDelay: null,
        duration: 500,
        stroke: 15,
        color: '#45CCCE',
        background: '#EAEAEA',
        responsive: false,
        clockwise: true,
        semicircle: false,
        rounded: false
    }
};
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var RoundProgressEase = /** @class */ (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = 
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    function (t, b, c, d) {
        return c * t / d + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        ;
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    ;
    RoundProgressEase.decorators = [
        { type: core_1.Injectable },
    ];
    return RoundProgressEase;
}());
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var round_progress_service_1 = __webpack_require__(837);
var round_progress_config_1 = __webpack_require__(838);
var round_progress_ease_1 = __webpack_require__(839);
var RoundProgressComponent = /** @class */ (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone, _renderer) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._lastAnimationId = 0;
        this.radius = this._defaults.radius;
        this.animation = this._defaults.animation;
        this.animationDelay = this._defaults.animationDelay;
        this.duration = this._defaults.duration;
        this.stroke = this._defaults.stroke;
        this.color = this._defaults.color;
        this.background = this._defaults.background;
        this.responsive = this._defaults.responsive;
        this.clockwise = this._defaults.clockwise;
        this.semicircle = this._defaults.semicircle;
        this.rounded = this._defaults.rounded;
        this.onRender = new core_1.EventEmitter();
    }
    /** Animates a change in the current value. */
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = /** Animates a change in the current value. */
    function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = /** Sets the path dimensions. */
    function (value) {
        if (this._path) {
            this._renderer.setElementAttribute(this._path.nativeElement, 'd', this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle));
        }
    };
    /** Clamps a value between the maximum and 0. */
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = /** Clamps a value between the maximum and 0. */
    function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = /** Determines the SVG transforms for the <path> node. */
    function () {
        var diameter = this._diameter;
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = /** Resolves a color through the service. */
    function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = /** Change detection callback. */
    function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    Object.defineProperty(RoundProgressComponent.prototype, "_diameter", {
        /** Diameter of the circle. */
        get: /** Diameter of the circle. */
        function () {
            return this.radius * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_elementHeight", {
        /** The CSS height of the wrapper element. */
        get: /** The CSS height of the wrapper element. */
        function () {
            if (!this.responsive) {
                return (this.semicircle ? this.radius : this._diameter) + 'px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_viewBox", {
        /** Viewbox for the SVG element. */
        get: /** Viewbox for the SVG element. */
        function () {
            var diameter = this._diameter;
            return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_paddingBottom", {
        /** Bottom padding for the wrapper element. */
        get: /** Bottom padding for the wrapper element. */
        function () {
            if (this.responsive) {
                return this.semicircle ? '50%' : '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    RoundProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'round-progress',
                    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_viewBox\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
                    host: {
                        'role': 'progressbar',
                        '[attr.aria-valuemin]': 'current',
                        '[attr.aria-valuemax]': 'max',
                        '[style.width]': "responsive ? '' : _diameter + 'px'",
                        '[style.height]': '_elementHeight',
                        '[style.padding-bottom]': '_paddingBottom',
                        '[class.responsive]': 'responsive'
                    },
                    styles: [
                        ":host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }",
                        ":host.responsive {\n      width: 100%;\n      padding-bottom: 100%;\n    }",
                        ":host.responsive > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }"
                    ]
                },] },
    ];
    /** @nocollapse */
    RoundProgressComponent.ctorParameters = function () { return [
        { type: round_progress_service_1.RoundProgressService, },
        { type: round_progress_ease_1.RoundProgressEase, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [round_progress_config_1.ROUND_PROGRESS_DEFAULTS,] },] },
        { type: core_1.NgZone, },
        { type: core_1.Renderer, },
    ]; };
    RoundProgressComponent.propDecorators = {
        "_path": [{ type: core_1.ViewChild, args: ['path',] },],
        "current": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "radius": [{ type: core_1.Input },],
        "animation": [{ type: core_1.Input },],
        "animationDelay": [{ type: core_1.Input },],
        "duration": [{ type: core_1.Input },],
        "stroke": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "background": [{ type: core_1.Input },],
        "responsive": [{ type: core_1.Input },],
        "clockwise": [{ type: core_1.Input },],
        "semicircle": [{ type: core_1.Input },],
        "rounded": [{ type: core_1.Input },],
        "onRender": [{ type: core_1.Output },],
    };
    return RoundProgressComponent;
}());
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoyaltyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(38);
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
 * Component for profile editing
 */
var LoyaltyPage = (function () {
    function LoyaltyPage(apiService) {
        this.apiService = apiService;
        this.userData = {};
        this.settings = {};
    }
    LoyaltyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.settings = this.apiService.getSettings();
        this.apiService.loadUserData().then(function (user) {
            _this.userData = user;
        });
    };
    LoyaltyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loyalty',template:/*ion-inline-start:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\personal\loyalty\loyalty.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Loyalty program</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="loyalty-header">\n    <ion-item text-wrap>\n      <h1 class="text-center">{{ \'loyalty.heading\' | translate }}</h1>\n    </ion-item>\n  </ion-list>\n  <div class="loyalty-progress-holder">\n    <div class="text">\n      <div class="available" *ngIf="userData.loyalty_reward > 0">\n        {{ userData.loyalty_reward | ecurrency }} <small>available</small>\n      </div>\n      <span class="points">{{ userData.loyalty_points }}/{{ settings.loyalty_points_for_reward }}</span>\n      <div class="comment">Before the next reward</div>\n    </div>\n    <round-progress\n      [current]="userData.loyalty_points"\n      [max]="settings.loyalty_points_for_reward"\n      [color]="\'#ff3f00\'"\n      [background]="\'#b4b4b4\'"\n      [stroke]="40"\n      [rounded]="true"\n      [clockwise]="true"\n      [responsive]="true"\n      [duration]="800"\n      [animation]="\'easeInOutQuart\'"\n      [animationDelay]="0"></round-progress>\n  </div>\n  <ion-card>\n    <ion-card-content class="loyalty-text">\n      <div [innerHTML]="\'loyalty.description\' | translate:{loyalty_points_per_amount: settings.loyalty_points_per_amount | ecurrency, loyalty_points_per_order: settings.loyalty_points_per_order, loyalty_points_for_reward: settings.loyalty_points_for_reward, loyalty_reward_amount: settings.loyalty_reward_amount | ecurrency}"></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\ionic_laravel\Jollibee-App\src\pages\personal\loyalty\loyalty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]])
    ], LoyaltyPage);
    return LoyaltyPage;
}());

//# sourceMappingURL=loyalty.js.map

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(48);
var round_progress_component_1 = __webpack_require__(840);
var round_progress_service_1 = __webpack_require__(837);
var round_progress_ease_1 = __webpack_require__(839);
var round_progress_config_1 = __webpack_require__(838);
var RoundProgressModule = /** @class */ (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [round_progress_component_1.RoundProgressComponent],
                    exports: [round_progress_component_1.RoundProgressComponent],
                    providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.ROUND_PROGRESS_DEFAULTS_PROVIDER]
                },] },
    ];
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
;
__export(__webpack_require__(840));
__export(__webpack_require__(837));
__export(__webpack_require__(839));
__export(__webpack_require__(838));
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=4.js.map