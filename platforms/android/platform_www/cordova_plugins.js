cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-stripe.stripe",
    "file": "plugins/cordova-plugin-stripe/www/CordovaStripe.js",
    "pluginId": "cordova-plugin-stripe",
    "clobbers": [
      "cordova.plugins.stripe"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "card.io.cordova.mobilesdk.CardIO",
    "file": "plugins/card.io.cordova.mobilesdk/www/cdv-plugin-card-io.js",
    "pluginId": "card.io.cordova.mobilesdk",
    "clobbers": [
      "CardIO"
    ]
  },
  {
    "id": "com.paypal.cordova.mobilesdk.PayPalMobile",
    "file": "plugins/com.paypal.cordova.mobilesdk/www/cdv-plugin-paypal-mobile-sdk.js",
    "pluginId": "com.paypal.cordova.mobilesdk",
    "clobbers": [
      "PayPalMobile"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-stripe": "1.5.3",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-splashscreen": "4.1.0",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-x-socialsharing": "5.4.3",
  "cordova-plugin-geolocation": "2.4.3",
  "card.io.cordova.mobilesdk": "2.1.0",
  "com.paypal.cordova.mobilesdk": "3.5.0",
  "cordova-custom-config": "5.0.2",
  "onesignal-cordova-plugin": "2.4.6"
};
// BOTTOM OF METADATA
});