'use strict';

module.exports = function elementIsVisibile(element) {
    if (element.nodeType !== 1 || element.isEqualNode(document.body)) {
        return true;
    }

    if (element.currentStyle && element.currentStyle.display !== 'none' && element.currentStyle.visibility !== 'hidden') {
        return elementIsVisibile(element.parentNode);
    } else if (window.getComputedStyle) {
        var computedStyle = document.defaultView.getComputedStyle(element, null);
        if (computedStyle.getPropertyValue('display') !== 'none' && computedStyle.getPropertyValue('visibility') !== 'hidden') {
            return elementIsVisibile(element.parentNode);
        }
    }
    return false;
}
