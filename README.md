# setStyles
Sets the inline styles of an element


### param {object or array of objects} [element] 
- The specified element or array of elements
### param {object} [styles] 
- An object of styles in CSS String format to apply to element
### param {boolean} [keep]
- Boolean to keep current inline styles(true) or to overwrite them(false - default)

#### usage example:

var exampleElements = [element1, element2];
or
var exampleElements = element1;

var styles = {
'color' : 'black',
'background':'blue'
};

setStyles(exampleElements, styles, true);


##### Results will be:

\<element1 style="...previousValues;color:black;background:blue;"\>

\<element2 style="...previousValues;color:black;background:blue;"\>
