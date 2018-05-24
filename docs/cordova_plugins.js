cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.hutchind.cordova.plugins.streamingmedia/www/StreamingMedia.js",
        "id": "com.hutchind.cordova.plugins.streamingmedia.StreamingMedia",
        "pluginId": "com.hutchind.cordova.plugins.streamingmedia",
        "clobbers": [
            "streamingMedia"
        ]
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/Promise.js",
        "id": "cordova-promise-polyfill.Promise",
        "pluginId": "cordova-promise-polyfill",
        "runs": true
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
        "id": "cordova-promise-polyfill.promise.min",
        "pluginId": "cordova-promise-polyfill"
    },
    {
        "file": "plugins/cordova-plugin-admob-free/www/admob.js",
        "id": "cordova-plugin-admob-free.AdMob",
        "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
            "admob",
            "AdMob",
            "plugins.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio-browser.js",
        "id": "cordova-plugin-nativeaudio.NativeAudioBrowser",
        "pluginId": "cordova-plugin-nativeaudio",
        "clobbers": [
            "cordova.plugins.NativeAudio",
            "plugins.NativeAudio"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.hutchind.cordova.plugins.streamingmedia": "0.1.4",
    "cordova-admob-sdk": "0.17.0",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-plugin-admob-free": "0.17.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.0.5",
    "cordova-plugin-ionic-webview": "1.2.1",
    "cordova-plugin-nativeaudio": "3.0.9",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.4.0"
}
// BOTTOM OF METADATA
});