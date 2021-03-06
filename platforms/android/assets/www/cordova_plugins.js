cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  },
  {
    "id": "cordova-plugin-locationservices.Coordinates",
    "file": "plugins/cordova-plugin-locationservices/www/Coordinates.js",
    "pluginId": "cordova-plugin-locationservices",
    "clobbers": [
      "cordova.plugins.locationServices.Coordinates",
      "plugin.locationServices.Coordinates"
    ]
  },
  {
    "id": "cordova-plugin-locationservices.PositionError",
    "file": "plugins/cordova-plugin-locationservices/www/PositionError.js",
    "pluginId": "cordova-plugin-locationservices",
    "clobbers": [
      "cordova.plugins.locationServices.PositionError",
      "plugin.locationServices.PositionError"
    ]
  },
  {
    "id": "cordova-plugin-locationservices.Position",
    "file": "plugins/cordova-plugin-locationservices/www/Position.js",
    "pluginId": "cordova-plugin-locationservices",
    "clobbers": [
      "cordova.plugins.locationServices.PositionError",
      "plugin.locationServices.PositionError"
    ]
  },
  {
    "id": "cordova-plugin-locationservices.LocationServices",
    "file": "plugins/cordova-plugin-locationservices/www/LocationServices.js",
    "pluginId": "cordova-plugin-locationservices",
    "clobbers": [
      "cordova.plugins.locationServices.geolocation",
      "plugin.locationServices.geolocation"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-background-mode": "0.7.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-locationservices": "2.1.0"
};
// BOTTOM OF METADATA
});