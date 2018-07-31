# setStyles
Sets the inline styles of an element. Will destroy current inline styles by default OR optionally preserve the inline styles and overwrite any changed styles.


### param elements {DOM Element or array/HTMLCollection of DOM Elements} [element(s)] 
- The specified element or array of elements
### param styles {object} {CSS property : value}
- An object of 0 or more CSS property : value pairs in inline CSS format.
### param keepStyles {boolean} default false
- (defult false) true will preserve existing inline styles and overwrite re-assigned values, false will destroy them

#### usage example:

var exampleElements = [element1, element2];
or
var exampleElements = element1;
or
var exampleElements = document.querySelectorAll('.element*');

var styles = {
'color' : 'black',
'background':'blue'
};

setStyles(exampleElements, styles, true);


##### Results will be:

\<element1 style="...previousValues;color:black;background:blue;"\>

\<element2 style="...previousValues;color:black;background:blue;"\>



###### Notes:
I opted to use 'setAttribute("style",...)' over the element.style.... method to allow for greater backwards compatability with IE legacy browsers.
