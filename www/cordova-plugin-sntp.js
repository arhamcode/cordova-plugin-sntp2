module.exports = {
    setServer : function(sntpServer, timeout) {
        cordova.exec(null, null, "cordova-plugin-sntp", "setServer", [sntpServer, timeout]);
    },
    getTime : function(success, error) {
        cordova.exec(success, error, "cordova-plugin-sntp", "getTime", []);
    },
    getClockOffset : function(success, error) {
        cordova.exec(success, error, "cordova-plugin-sntp", "getClockOffset", []);
    }
}