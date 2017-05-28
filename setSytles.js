/*
    @public
    @function setStyles
    @description - Add styles for specific target element (will optionally not destroy other inline styles)
    @param {object or array of objects} [element] - The specified element or array of elements
    @param {object} [styles] - An object of styles in CSS String format to apply to element
    @param {boolean} keep - Boolean to keep current inline styles(true) or to overwrite them(false - default)
*/
function setStyles(element, styles, keep = false) {
    element = Array.isArray(element) ? element : [element];
    element.forEach(function (element) {
        var styleString = keep ? element.getAttribute("style") : '';
        for (var prop in styles) {
            styleString += prop + ':' + styles[prop] + ';'
        }
        element.setAttribute("style", styleString);
    }
    );
}
