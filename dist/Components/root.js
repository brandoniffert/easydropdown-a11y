"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var composeClassName_1 = require("../Shared/Util/composeClassName");
var body_1 = require("./body");
var head_1 = require("./head");
var root = function (state, classNames) {
    var className = composeClassName_1.default([
        classNames.root,
        [state.isDisabled, classNames.rootDisabled],
        [state.isInvalid, classNames.rootInvalid],
        [state.isOpen, classNames.rootOpen],
        [state.isFocused, classNames.rootFocused],
        [state.hasValue, classNames.rootHasValue],
        [state.isOpenAbove, classNames.rootOpenAbove],
        [state.isOpenBelow, classNames.rootOpenBelow],
        [state.isUseNativeMode, classNames.rootNative],
    ]);
    return "\n        <div\n            class=\"" + className + "\"\n        >\n            " + head_1.default(state, classNames) + "\n            " + (state.isUseNativeMode ? "" : body_1.default(state, classNames)) + "\n        </div>\n    ";
};
exports.default = root;
//# sourceMappingURL=root.js.map