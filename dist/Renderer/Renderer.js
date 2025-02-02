"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("../Components/root");
var createDomElementFromHtml_1 = require("../Shared/Util/createDomElementFromHtml");
var Dom_1 = require("./Dom");
var domDiff_1 = require("./domDiff");
var domPatch_1 = require("./domPatch");
var Renderer = /** @class */ (function () {
    function Renderer(classNames) {
        this.dom = new Dom_1.default();
        this.classNames = classNames;
    }
    Renderer.prototype.render = function (state, selectElement) {
        var html = root_1.default(state, this.classNames);
        var rootElement = createDomElementFromHtml_1.default(html);
        this.dom = new Dom_1.default();
        this.dom.root = rootElement;
        this.dom.option.length = this.dom.group.length = 0;
        Renderer.queryDomRefs(this.dom);
        this.injectSelect(selectElement);
        return this.dom;
    };
    Renderer.prototype.update = function (state, key) {
        var nextHtml = root_1.default(state, this.classNames);
        var nextRoot = createDomElementFromHtml_1.default(nextHtml);
        var diffCommand = domDiff_1.default(this.dom.root, nextRoot);
        domPatch_1.default(this.dom.root, diffCommand);
        if (key === "selectedIndex") {
            this.syncSelectWithValue(state.value);
        }
    };
    Renderer.prototype.destroy = function () {
        this.dom.select.classList.remove(this.classNames.select);
        try {
            this.dom.root.parentElement.replaceChild(this.dom.select, this.dom.root);
        }
        catch (err) {
            /**/
        }
    };
    Renderer.prototype.injectSelect = function (selectElement) {
        var parent = selectElement.parentElement;
        var tempSelect = this.dom.select;
        if (!parent)
            throw new Error("[EasyDropDown] The provided `<select>` element must exist within a document");
        parent.replaceChild(this.dom.root, selectElement);
        tempSelect.parentElement.replaceChild(selectElement, tempSelect);
        selectElement.className = this.classNames.select;
        this.dom.select = selectElement;
    };
    Renderer.prototype.syncSelectWithValue = function (value) {
        if (this.dom.select.value === value)
            return;
        var event = new CustomEvent("change", {
            bubbles: true,
        });
        this.dom.select.value = value;
        this.dom.select.dispatchEvent(event);
    };
    Renderer.queryDomRefs = function (dom, keys) {
        if (keys === void 0) { keys = Object.keys(dom); }
        return keys.reduce(function (localDom, ref) {
            var selector = "[data-ref~=\"" + ref + "\"]";
            var elements = localDom.root.querySelectorAll(selector);
            if (elements.length < 1 || ref === "root")
                return localDom;
            var element = elements[0];
            var value = localDom[ref];
            if (value === null) {
                localDom[ref] = element;
            }
            else if (Array.isArray(value)) {
                Array.prototype.push.apply(value, elements);
            }
            return localDom;
        }, dom);
    };
    return Renderer;
}());
exports.default = Renderer;
//# sourceMappingURL=Renderer.js.map