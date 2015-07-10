(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : global._elementIsVisibile = factory();
}(this, function () {
    'use strict';

    function _elementIsVisibile(element) {
        if (element.nodeType !== 1 || element.isEqualNode(document.body)) {
            return true;
        }

        if (element.currentStyle && element.currentStyle.display !== 'none' && element.currentStyle.visibility !== 'hidden') {
            return _elementIsVisibile(element.parentNode);
        } else if (window.getComputedStyle) {
            var computedStyle = document.defaultView.getComputedStyle(element, null);
            if (computedStyle.getPropertyValue('display') !== 'none' && computedStyle.getPropertyValue('visibility') !== 'hidden') {
                return _elementIsVisibile(element.parentNode);
            }
        }
        return false;
    }

    return _elementIsVisibile;
}));