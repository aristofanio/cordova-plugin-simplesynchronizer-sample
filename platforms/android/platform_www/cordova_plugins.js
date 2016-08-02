cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-synchronizer/www/ag-simplesynchronizer-plugin.js",
        "id": "cordova-plugin-synchronizer.AGSimpleSynchronizerPlugin",
        "clobbers": [
            "navigator.ag.requestService"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-synchronizer": "0.1.1",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});