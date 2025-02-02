"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIsMobilePlatform(userAgent) {
    var isIos = /(ipad|iphone|ipod)/gi.test(userAgent);
    var isAndroid = /android/gi.test(userAgent);
    var isOperaMini = /opera mini/gi.test(userAgent);
    var isWindowsPhone = /windows phone/gi.test(userAgent);
    if (isIos || isAndroid || isOperaMini || isWindowsPhone) {
        return true;
    }
    return false;
}
exports.default = getIsMobilePlatform;
//# sourceMappingURL=getIsMobilePlatform.js.map