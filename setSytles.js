/**
  * @public
  * @function setStyles
  * @description - Chnages the inline styles of a target element (will optionally preserve current inline styles)
  * @param Element (DOM Element or array of DOM Elements) elements - The specified element or array of elements you want to change
  * @param Object styles - An object of CSS property : value pairs, using standards inline CSS syntax
  * @param Boolean keepStyles - (default false) true will keep current inline styles. false will overwrite them
  */

function setStyles(elements, styles, keepStyles = false) {

if(typeof elements === 'undefined'){
 throw 'Parmeter 1 setStyles must be a Dom element or an Array of Dom elements!';
}

if(typeof styles !== 'object' || Array.isArray(styles)){
 throw 'Parameter 2 of setStyles must be an object containing 0 or more key value pairs of css properties. Parameter 1 is ' + Object.prototype.toString.call(styles);
}

if(typeof keepStyles !== 'boolean'){
throw 'Parameter 3 of setStyles is optional but must be a boolean.';
}

if(!(elements[0] instanceof Element)){
 elements = [].slice.call(elements[0]);
 }


elements.forEach(function (element) {
    
 if(!(element instanceof Element)){
  throw 'Parmeter 1 of setStyles must be a Dom element or an Array of Dom elements! Parameter 1 is ' + Object.prototype.toString.call(elements[0]);
 }

var styleObj = {};
var styleStr = '';

if(keepStyles){
 element.getAttribute('style').split(';').forEach(function(pair){
  if(pair === ''){
  return;
  }
  var pair = pair.split(':');
  styleObj[pair[0]] = pair[1];
 });//END foreach pair
}//END IF keepStyles

for(var style in styles){ 
 styleObj[style] = styles[style];
}

for (var prop in styleObj) {
 styleStr += prop + ':' + styleObj[prop] + '; '
}

element.setAttribute("style", styleStr);
});//END foreach elements
}//END setStyles
