/*! grunt-0.0.1.js 压缩于：2017-04-08 00:07 */

/*!
 * jQuery JavaScript Library v1.11.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:02Z
 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper window is present,
// execute the factory and get jQuery
// For environments that do not inherently posses a window with a document
// (such as Node.js), expose a jQuery-making factory as module.exports
// This accentuates the need for the creation of a real window
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info
module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=ea.type(a);return"function"!==c&&!ea.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a))}
// Implement the identical functionality for filter and not
function d(a,b,c){if(ea.isFunction(b))return ea.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c});if(b.nodeType)return ea.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ja.test(b))return ea.filter(b,a,c);b=ea.filter(b,a)}return ea.grep(a,function(a){return ea.inArray(a,b)>=0!==c})}function e(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}
// Convert String-formatted options into Object-formatted ones and store in cache
function f(a){var b=qa[a]={};return ea.each(a.match(pa)||[],function(a,c){b[c]=!0}),b}/**
 * Clean-up method for dom ready events
 */
function g(){la.addEventListener?(la.removeEventListener("DOMContentLoaded",h,!1),a.removeEventListener("load",h,!1)):(la.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}/**
 * The ready event handler and self cleanup method
 */
function h(){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(la.addEventListener||"load"===event.type||"complete"===la.readyState)&&(g(),ea.ready())}function i(a,b,c){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(va,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:
// Only convert to a number if it doesn't change the string
+c+""===c?+c:ua.test(c)?ea.parseJSON(c):c)}catch(a){}
// Make sure we set the data so it isn't changed later
ea.data(a,b,c)}else c=void 0}return c}
// checks a cache object for emptiness
function j(a){var b;for(b in a)
// if the public data object is empty, the private is still empty
if(("data"!==b||!ea.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(ea.acceptData(a)){var e,f,g=ea.expando,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
h=a.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
i=h?ea.cache:a,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
j=h?a[g]:a[g]&&g;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoid exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// Test for null|undefined property data
// First Try to find as-is property data
// Try to find the camelCased property
return j||(j=h?a[g]=W.pop()||ea.guid++:g),i[j]||(i[j]=h?{}:{toJSON:ea.noop}),"object"!=typeof b&&"function"!=typeof b||(d?i[j]=ea.extend(i[j],b):i[j].data=ea.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[ea.camelCase(b)]=c),"string"==typeof b?null==(e=f[b])&&(e=f[ea.camelCase(b)]):e=f,e}}function l(a,b,c){if(ea.acceptData(a)){var d,e,f=a.nodeType,
// See jQuery.data for more information
g=f?ea.cache:a,h=f?a[ea.expando]:ea.expando;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){
// Support array or space separated string names for data keys
ea.isArray(b)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
b=b.concat(ea.map(b,ea.camelCase)):
// try the string as a key before any manipulation
b in d?b=[b]:(
// split the camel cased version by spaces unless a key with the spaces exists
b=ea.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(c?!j(d):!ea.isEmptyObject(d))return}
// See jQuery.data for more information
(c||(delete g[h].data,j(g[h])))&&(
// Destroy the cache
f?ea.cleanData([a],!0):da.deleteExpando||g!=g.window?/* jshint eqeqeq: true */
delete g[h]:g[h]=null)}}}function m(){return!0}function n(){return!1}function o(){try{return la.activeElement}catch(a){}}function p(a){var b=Ga.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function q(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==ta?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==ta?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||ea.nodeName(d,b)?f.push(d):ea.merge(f,q(d,b));return void 0===b||b&&ea.nodeName(a,b)?ea.merge([a],f):f}
// Used in buildFragment, fixes the defaultChecked property
function r(a){Aa.test(a.type)&&(a.defaultChecked=a.checked)}
// Support: IE<8
// Manipulating tables requires a tbody
function s(a,b){return ea.nodeName(a,"table")&&ea.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function t(a){return a.type=(null!==ea.find.attr(a,"type"))+"/"+a.type,a}function u(a){var b=Qa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}
// Mark scripts as having already been evaluated
function v(a,b){for(var c,d=0;null!=(c=a[d]);d++)ea._data(c,"globalEval",!b||ea._data(b[d],"globalEval"))}function w(a,b){if(1===b.nodeType&&ea.hasData(a)){var c,d,e,f=ea._data(a),g=ea._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)ea.event.add(b,c,h[c][d])}
// make the cloned public data object a copy from the original
g.data&&(g.data=ea.extend({},g.data))}}function x(a,b){var c,d,e;
// We do not need to do anything for non-Elements
if(1===b.nodeType){
// IE6-8 copies events bound via attachEvent when using cloneNode.
if(c=b.nodeName.toLowerCase(),!da.noCloneEvent&&b[ea.expando]){e=ea._data(b);for(d in e.events)ea.removeEvent(b,d,e.handle);
// Event data gets referenced instead of copied if the expando gets copied too
b.removeAttribute(ea.expando)}
// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
"script"===c&&b.text!==a.text?(t(b).text=a.text,u(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),
// This path appears unavoidable for IE9. When cloning an object
// element in IE9, the outerHTML strategy above is not sufficient.
// If the src has innerHTML and the destination does not,
// copy the src.innerHTML into the dest.innerHTML. #10324
da.html5Clone&&a.innerHTML&&!ea.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Aa.test(a.type)?(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
b.defaultChecked=b.checked=a.checked,
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function y(b,c){var d=ea(c.createElement(b)).appendTo(c.body),
// getDefaultComputedStyle might be reliably used only on attached element
e=a.getDefaultComputedStyle?
// Use of this method is a temporary fix (more like optmization) until something better comes along,
// since it was removed from specification and supported only in FF
a.getDefaultComputedStyle(d[0]).display:ea.css(d[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return d.detach(),e}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function z(a){var b=la,c=Va[a];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return c||(c=y(a,b),"none"!==c&&c||(Ua=(Ua||ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ua[0].contentWindow||Ua[0].contentDocument).document,b.write(),b.close(),c=y(a,b),Ua.detach()),Va[a]=c),c}function A(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){var c=a();if(null!=c)
// Hook not needed (or it's not possible to use it due to missing dependency),
// remove it.
// Since there are no other hooks for marginRight, remove the whole object.
return c?void delete this.get:(this.get=b).apply(this,arguments)}}}
// return a css property mapped to a potentially vendor prefixed property
function B(a,b){
// shortcut for names that are not vendor prefixed
if(b in a)return b;for(
// check for vendor prefixed names
var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=gb.length;e--;)if((b=gb[e]+c)in a)return b;return d}function C(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=ea._data(d,"olddisplay"),c=d.style.display,b?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
f[g]||"none"!==c||(d.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===d.style.display&&ya(d)&&(f[g]=ea._data(d,"olddisplay",z(d.nodeName)))):f[g]||(e=ya(d),(c&&"none"!==c||!e)&&ea._data(d,"olddisplay",e?c:ea.css(d,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function D(a,b,c){var d=cb.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function E(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===b?1:0,g=0;f<4;f+=2)
// both box models exclude margin, so add it if we want it
"margin"===c&&(g+=ea.css(a,c+xa[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=ea.css(a,"padding"+xa[f],!0,e)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=ea.css(a,"border"+xa[f]+"Width",!0,e))):(
// at this point, extra isn't content, so add padding
g+=ea.css(a,"padding"+xa[f],!0,e),
// at this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=ea.css(a,"border"+xa[f]+"Width",!0,e)));return g}function F(a,b,c){
// Start with offset property, which is equivalent to the border-box value
var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Wa(a),g=da.boxSizing()&&"border-box"===ea.css(a,"boxSizing",!1,f);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(e<=0||null==e){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
e=Xa(a,b,f),(e<0||null==e)&&(e=a.style[b]),Za.test(e))return e;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
d=g&&(da.boxSizingReliable()||e===a.style[b]),
// Normalize "", auto, and prepare for extra
e=parseFloat(e)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return e+E(a,b,c||(g?"border":"content"),d,f)+"px"}function G(a,b,c,d,e){return new G.prototype.init(a,b,c,d,e)}
// Animations created synchronously will run synchronously
function H(){return setTimeout(function(){hb=void 0}),hb=ea.now()}
// Generate parameters to create a standard animation
function I(a,b){var c,d={height:a},e=0;for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
b=b?1:0;e<4;e+=2-b)c=xa[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function J(a,b,c){for(var d,e=(nb[b]||[]).concat(nb["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))
// we're done with this property
return d}function K(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&ya(a),p=ea._data(a,"fxshow");
// handle queue: false promises
c.queue||(h=ea._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){
// doing this makes sure that the complete handler will be called
// before this completes
l.always(function(){h.unqueued--,ea.queue(a,"fx").length||h.empty.fire()})})),
// height/width overflow pass
1===a.nodeType&&("height"in b||"width"in b)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[n.overflow,n.overflowX,n.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
j=ea.css(a,"display"),k=z(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===ea.css(a,"float")&&(
// inline-level elements accept inline-block;
// block-level elements need to be inline with layout
da.inlineBlockNeedsLayout&&"inline"!==k?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",da.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));
// show/hide pass
for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){
// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||ea.style(a,d)}if(!ea.isEmptyObject(m)){p?"hidden"in p&&(o=p.hidden):p=ea._data(a,"fxshow",{}),
// store state if its toggle - enables .stop().toggle() to "reverse"
f&&(p.hidden=!o),o?ea(a).show():l.done(function(){ea(a).hide()}),l.done(function(){var b;ea._removeData(a,"fxshow");for(b in m)ea.style(a,b,m[b])});for(d in m)g=J(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function L(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=ea.camelCase(c),e=b[d],f=a[c],ea.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=ea.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function M(a,b,c){var d,e,f=0,g=mb.length,h=ea.Deferred().always(function(){
// don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=hb||H(),c=Math.max(0,j.startTime+j.duration-b),
// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ea.extend({},b),opts:ea.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:hb||H(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ea.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);
// resolve when we played the last frame
// otherwise, reject
return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(L(k,j.opts.specialEasing);f<g;f++)if(d=mb[f].call(j,a,k,j.opts))return d;
// attach callbacks from options
return ea.map(k,J,j),ea.isFunction(j.opts.start)&&j.opts.start.call(a,j),ea.fx.timer(ea.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function N(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(pa)||[];if(ea.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function O(a,b,c,d){function e(h){var i;return f[h]=!0,ea.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Gb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function P(a,b){var c,d,e=ea.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&ea.extend(!0,a,c),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function Q(a,b,c){
// Remove auto dataType and get content-type in the process
for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}
// Or just use first one
f=f||d}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(f)return f!==i[0]&&i.unshift(f),c[f]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function R(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];
// Convert to each sequential dataType
for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(!(
// Seek a direct converter
g=j[i+" "+f]||j["* "+f]))for(e in j)if(
// If conv2 outputs current
h=e.split(" "),h[1]===f&&(
// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(!0!==g)
// Unless errors are allowed to bubble, catch and return them
if(g&&a.throws)b=g(b);else try{b=g(b)}catch(a){return{state:"parsererror",error:g?a:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function S(a,b,c,d){var e;if(ea.isArray(b))
// Serialize array item.
ea.each(b,function(b,e){c||Ib.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
S(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==ea.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)S(a+"["+e+"]",b[e],c,d)}
// Functions to create xhrs
function T(){try{return new a.XMLHttpRequest}catch(a){}}function U(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}}/**
 * Gets a window from an element
 */
function V(a){return ea.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}
// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var W=[],X=W.slice,Y=W.concat,Z=W.push,$=W.indexOf,_={},aa=_.toString,ba=_.hasOwnProperty,ca="".trim,da={},
// Define a local copy of jQuery
ea=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new ea.fn.init(a,b)},
// Used by jQuery.camelCase as callback to replace()
fa=function(a,b){return b.toUpperCase()};ea.fn=ea.prototype={
// The current version of jQuery being used
jquery:"1.11.0",constructor:ea,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return X.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return a 'clean' array
// Return just the object
return null!=a?a<0?this[a+this.length]:this[a]:X.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=ea.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b.context=this.context,b},
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(a,b){return ea.each(this,a,b)},map:function(a){return this.pushStack(ea.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:Z,sort:W.sort,splice:W.splice},ea.extend=ea.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,
// skip the boolean and the target
g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||ea.isFunction(g)||(g={}),
// extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);h<i;h++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[h]))
// Extend the base object
for(d in e)a=g[d],c=e[d],
// Prevent never-ending loop
g!==c&&(
// Recurse if we're merging plain objects or arrays
j&&c&&(ea.isPlainObject(c)||(b=ea.isArray(c)))?(b?(b=!1,f=a&&ea.isArray(a)?a:[]):f=a&&ea.isPlainObject(a)?a:{},
// Never move original objects, clone them
g[d]=ea.extend(j,f,c)):void 0!==c&&(g[d]=c));
// Return the modified object
return g},ea.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("1.11.0"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(a){return"function"===ea.type(a)},isArray:Array.isArray||function(a){return"array"===ea.type(a)},isWindow:function(a){/* jshint eqeqeq: false */
return null!=a&&a==a.window},isNumeric:function(a){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!a||"object"!==ea.type(a)||a.nodeType||ea.isWindow(a))return!1;try{
// Not own constructor property must be Object
if(a.constructor&&!ba.call(a,"constructor")&&!ba.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(a){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Support: IE<9
// Handle iteration over inherited properties before own properties.
if(da.ownLast)for(b in a)return ba.call(a,b);
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
for(b in a);return void 0===b||ba.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?_[aa.call(a)]||"object":typeof a},
// Evaluates a script in a global context
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(b){b&&ea.trim(b)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(a.execScript||function(b){a.eval.call(a,b)})(b)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,fa)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},
// args is for internal usage only
each:function(a,b,d){var e=0,f=a.length,g=c(a);if(d){if(g)for(;e<f&&!1!==b.apply(a[e],d);e++);else for(e in a)if(!1===b.apply(a[e],d))break}else if(g)for(;e<f&&!1!==b.call(a[e],e,a[e]);e++);else for(e in a)if(!1===b.call(a[e],e,a[e]))break;return a},
// Use native String.trim function wherever possible
trim:ca&&!ca.call("\ufeff ")?function(a){return null==a?"":ca.call(a)}:
// Otherwise use our own trimming functionality
function(a){return null==a?"":(a+"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},
// results is for internal usage only
makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?ea.merge(d,"string"==typeof a?[a]:a):Z.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if($)return $.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)
// Skip accessing in sparse arrays
if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];
// Support: IE<9
// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d=[],e=0,f=a.length,g=!c;e<f;e++)!b(a[e],e)!==g&&d.push(a[e]);return d},
// arg is for internal usage only
map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];
// Go through the array, translating each of the items to their new values
if(h)for(;f<g;f++)null!=(e=b(a[f],f,d))&&i.push(e);else for(f in a)null!=(e=b(a[f],f,d))&&i.push(e);
// Flatten any nested arrays
return Y.apply([],i)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof b&&(e=a[b],b=a,a=e),ea.isFunction(a))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return c=X.call(arguments,2),d=function(){return a.apply(b||this,c.concat(X.call(arguments)))},d.guid=a.guid=a.guid||ea.guid++,d},now:function(){return+new Date},
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:da}),
// Populate the class2type map
ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){_["[object "+b+"]"]=b.toLowerCase()});var ga=/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */
function(a){function b(a,b,c,d){var e,f,g,h,
// QSA vars
j,m,n,o,p,q;if((b?b.ownerDocument||b:M)!==E&&D(b),b=b||E,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(G&&!d){
// Shortcuts
if(e=qa.exec(a))
// Speed-up: Sizzle("#ID")
if(g=e[1]){if(9===h){
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document (jQuery #6963)
if(!(f=b.getElementById(g))||!f.parentNode)return c;
// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(f.id===g)return c.push(f),c}else
// Context is not a document
if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&K(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return Z.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return Z.apply(c,b.getElementsByClassName(g)),c}
// QSA path
if(v.qsa&&(!H||!H.test(a))){
// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(o=n=L,p=b,q=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(m=k(a),(n=b.getAttribute("id"))?o=n.replace(sa,"\\$&"):b.setAttribute("id",o),o="[id='"+o+"'] ",j=m.length;j--;)m[j]=o+l(m[j]);p=ra.test(a)&&i(b.parentNode)||b,q=m.join(",")}if(q)try{return Z.apply(c,p.querySelectorAll(q)),c}catch(a){}finally{n||b.removeAttribute("id")}}}
// All others
return t(a.replace(ga,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[L]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function e(a){var b=E.createElement("div");try{return!!a(b)}catch(a){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||U)-(~a.sourceIndex||U);
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function h(a){return d(function(b){return b=+b,d(function(c,d){
// Match elements found at the specified indexes
for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function i(a){return a&&typeof a.getElementsByTagName!==T&&a}
// Easy API for creating new setFilters
function j(){}function k(a,c){var d,e,f,g,h,i,j,k=Q[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){
// Comma and first run
d&&!(e=ha.exec(h))||(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ia.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(ga," ")}),h=h.slice(d.length));
// Filters
for(g in w.filter)!(e=ma[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):Q(a,i).slice(0)}function l(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function m(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=O++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[N,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[L]||(b[L]={}),(h=i[d])&&h[0]===N&&h[1]===f)
// Assign to newCache so results back-propagate to previous elements
return j[2]=h[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
i[d]=j,j[2]=a(b,c,g))return!0}}}function n(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function o(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function p(a,b,c,e,f,g){return e&&!e[L]&&(e=p(e)),f&&!f[L]&&(f=p(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],p=g.length,
// Get initial elements from seed or context
q=d||s(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
r=!a||!d&&b?q:o(q,m,a,h,i),t=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(d?a:p||e)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:r;
// Apply postFilter
if(
// Find primary matches
c&&c(r,t,h,i),e)for(j=o(t,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(r[n[k]]=l));if(d){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=t.length;k--;)(l=t[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(r[k]=l);f(null,t=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=t.length;k--;)(l=t[k])&&(j=f?_.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=o(t===g?t.splice(p,t.length):t),f?f(null,g,t,i):Z.apply(g,t)})}function q(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=m(function(a){return a===b},g,!0),j=m(function(a){return _.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==A)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];h<e;h++)if(c=w.relative[a[h].type])k=[m(n(k),c)];else{
// Return special upon seeing a positional matcher
if(c=w.filter[a[h].type].apply(null,a[h].matches),c[L]){for(
// Find the next relative operator (if any) for proper handling
d=++h;d<e&&!w.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return p(h>1&&n(k),h>1&&l(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ga,"$1"),c,h<d&&q(a.slice(h,d)),d<e&&q(a=a.slice(d)),d<e&&l(a))}k.push(c)}return n(k)}function r(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,p="0",q=d&&[],r=[],s=A,
// We must always have either seed elements or outermost context
t=d||f&&w.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=N+=null==s?1:Math.random()||.1,v=t.length;
// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(A=g!==E&&g);p!==v&&null!=(k=t[p]);p++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(N=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&q.push(k))}if(
// Apply set filters to unmatched elements
n+=p,e&&p!==n){for(l=0;m=c[l++];)m(q,r,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)for(;p--;)q[p]||r[p]||(r[p]=X.call(i));
// Discard index placeholder values to get only actual matches
r=o(r)}
// Add matches to results
Z.apply(i,r),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(N=u,A=s),q};return e?d(g):g}function s(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function t(a,b,c,d){var e,f,g,h,j,m=k(a);if(!d&&1===m.length){if(
// Take a shortcut and set the context if the root selector is an ID
f=m[0]=m[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&G&&w.relative[f[1].type]){if(!(b=(w.find.ID(g.matches[0].replace(ta,ua),b)||[])[0]))return c;a=a.slice(f.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
e=ma.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((j=w.find[h])&&(d=j(g.matches[0].replace(ta,ua),ra.test(f[0].type)&&i(b.parentNode)||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),!(a=d.length&&l(f)))return Z.apply(c,d),c;break}}
// Compile and execute a filtering function
// Provide `match` to avoid retokenization if we modified the selector above
return z(a,m)(d,b,!G,c,ra.test(a)&&i(b.parentNode)||b),c}var u,v,w,x,y,z,A,B,C,
// Local document vars
D,E,F,G,H,I,J,K,
// Instance-specific data
L="sizzle"+-new Date,M=a.document,N=0,O=0,P=c(),Q=c(),R=c(),S=function(a,b){return a===b&&(C=!0),0},
// General-purpose constants
T="undefined",U=1<<31,
// Instance methods
V={}.hasOwnProperty,W=[],X=W.pop,Y=W.push,Z=W.push,$=W.slice,
// Use a stripped-down indexOf if we can't use a native one
_=W.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},aa="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
ba="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/css3-syntax/#characters
ca="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
da=ca.replace("w","w#"),
// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
ea="\\["+ba+"*("+ca+")"+ba+"*(?:([*^$|!~]?=)"+ba+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+da+")|)|)"+ba+"*\\]",
// Prefer arguments quoted,
//   then not containing pseudos/brackets,
//   then attribute selectors/non-parenthetical expressions,
//   then anything else
// These preferences are here to reduce the number of selectors
//   needing tokenize in the PSEUDO preFilter
fa=":("+ca+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ea.replace(3,8)+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ga=new RegExp("^"+ba+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ba+"+$","g"),ha=new RegExp("^"+ba+"*,"+ba+"*"),ia=new RegExp("^"+ba+"*([>+~]|"+ba+")"+ba+"*"),ja=new RegExp("="+ba+"*([^\\]'\"]*?)"+ba+"*\\]","g"),ka=new RegExp(fa),la=new RegExp("^"+da+"$"),ma={ID:new RegExp("^#("+ca+")"),CLASS:new RegExp("^\\.("+ca+")"),TAG:new RegExp("^("+ca.replace("w","w*")+")"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ba+"*(even|odd|(([+-]|)(\\d*)n|)"+ba+"*(?:([+-]|)"+ba+"*(\\d+)|))"+ba+"*\\)|)","i"),bool:new RegExp("^(?:"+aa+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ba+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ba+"*((?:-\\d)?\\d*)"+ba+"*\\)|)(?=[^-]|$)","i")},na=/^(?:input|select|textarea|button)$/i,oa=/^h\d$/i,pa=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
qa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ra=/[+~]/,sa=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ta=new RegExp("\\\\([\\da-f]{1,6}"+ba+"?|("+ba+")|.)","ig"),ua=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};
// Optimize for push.apply( _, NodeList )
try{Z.apply(W=$.call(M.childNodes),M.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
W[M.childNodes.length].nodeType}catch(a){Z={apply:W.length?
// Leverage slice if possible
function(a,b){Y.apply(a,$.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}
// Expose support vars for convenience
v=b.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
y=b.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
D=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:M,d=c.defaultView;
// If no document and documentElement is available, return
// If no document and documentElement is available, return
// Set our document
// Support tests
// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
// IE11 does not have attachEvent, so all must suffer
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Check if getElementsByClassName can be trusted
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return c!==E&&9===c.nodeType&&c.documentElement?(E=c,F=c.documentElement,G=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){D()},!1):d.attachEvent&&d.attachEvent("onunload",function(){D()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=pa.test(c.getElementsByClassName)&&e(function(a){
// Support: Opera<10
// Catch gEBCN failure to find non-leading classes
// Support: Safari<4
// Catch class over-caching
return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return F.appendChild(a).id=L,!c.getElementsByName||!c.getElementsByName(L).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==T&&G){var c=b.getElementById(a);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){var c=typeof a.getAttributeNode!==T&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){if(typeof b.getElementsByTagName!==T)return b.getElementsByTagName(a)}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){if(typeof b.getElementsByClassName!==T&&G)return b.getElementsByClassName(a)},I=[],H=[],(v.qsa=pa.test(c.querySelectorAll))&&(e(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
a.innerHTML="<select t=''><option selected=''></option></select>",
// Support: IE8, Opera 10-12
// Nothing should be selected when empty strings follow ^= or $= or *=
a.querySelectorAll("[t^='']").length&&H.push("[*^$]="+ba+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||H.push("\\["+ba+"*(?:value|"+aa+")"),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||H.push(":checked")}),e(function(a){
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
a.querySelectorAll("[name=d]").length&&H.push("name"+ba+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
a.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),H.push(",.*:")})),(v.matchesSelector=pa.test(J=F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&e(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
v.disconnectedMatch=J.call(a,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
J.call(a,"[s!='']:x"),I.push("!=",fa)}),H=H.length&&new RegExp(H.join("|")),I=I.length&&new RegExp(I.join("|")),b=pa.test(F.compareDocumentPosition),K=b||pa.test(F.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},S=b?function(a,b){
// Flag for duplicate removal
if(a===b)return C=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===M&&K(M,a)?-1:b===c||b.ownerDocument===M&&K(M,b)?1:B?_.call(B,a)-_.call(B,b):0:4&d?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return C=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];
// Parentless nodes are either documents or disconnected
if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:B?_.call(B,a)-_.call(B,b):0;if(f===h)return g(a,b);for(
// Otherwise we need full lists of their ancestors for comparison
d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);
// Walk down the tree looking for a discrepancy
for(;i[e]===j[e];)e++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return e?g(i[e],j[e]):i[e]===M?-1:j[e]===M?1:0},c):E},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if(
// Set document vars if needed
(a.ownerDocument||a)!==E&&D(a),
// Make sure that attribute selectors are quoted
c=c.replace(ja,"='$1']"),v.matchesSelector&&G&&(!I||!I.test(c))&&(!H||!H.test(c)))try{var d=J.call(a,c);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||v.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(a){}return b(c,E,null,[a]).length>0},b.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==E&&D(a),K(a,b)},b.attr=function(a,b){
// Set document vars if needed
(a.ownerDocument||a)!==E&&D(a);var c=w.attrHandle[b.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
d=c&&V.call(w.attrHandle,b.toLowerCase())?c(a,b,!G):void 0;return void 0!==d?d:v.attributes||!G?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
C=!v.detectDuplicates,B=!v.sortStable&&a.slice(0),a.sort(S),C){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return B=null,a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
for(;b=a[d++];)
// Do not traverse comment nodes
c+=x(b);
// Do not include comment or processing instruction nodes
return c},w=b.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:d,match:ma,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(ta,ua),a[3]=(a[4]||a[5]||"").replace(ta,ua),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return ma.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&ka.test(c)&&(b=k(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ta,ua).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=P[a+" "];return b||(b=new RegExp("(^|"+ba+")"+a+"("+ba+"|$)"))&&P(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==T&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){
// :(first|last|only)-(child|of-type)
if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){for(
// Seek `elem` from a previously-cached index
k=q[L]||(q[L]={}),j=k[a]||[],n=j[0]===N&&j[1],m=j[0]===N&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(
// Fallback to seeking `elem` from the start
m=n=0)||o.pop();)
// When found, cache indexes on `parent` and break
if(1===l.nodeType&&++m&&l===b){k[a]=[N,n,m];break}}else if(s&&(j=(b[L]||(b[L]={}))[a])&&j[0]===N)m=j[1];else
// Use the same loop as above to seek `elem` from the start
for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(
// Cache the index of each encountered element
s&&((l[L]||(l[L]={}))[a]=[N,m]),l!==b)););
// Incorporate the offset, then check against cycle size
return(m-=e)===d||m%d==0&&m/d>=0}}},PSEUDO:function(a,c){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[L]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=_.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{
// Potentially complex pseudos
not:d(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],e=z(a.replace(ga,"$1"));return e[L]?d(function(a,b,c,d){
// Match elements unmatched by `matcher`
for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:d(function(a){
// lang value must be a valid identifier
return la.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ta,ua).toLowerCase(),function(b){var c;do{if(c=G?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===F},focus:function(a){return a===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
// Accessing this property makes selected-by-default
// options in Safari work properly
return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},
// Contents
empty:function(a){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},
// Element/input types
header:function(a){return oa.test(a.nodeName)},input:function(a){return na.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
// Position-in-collection
first:h(function(){return[0]}),last:h(function(a,b){return[b-1]}),eq:h(function(a,b,c){return[c<0?c+b:c]}),even:h(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:h(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:h(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:h(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;
// Add button/input type pseudos
for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}(u);
// One-time assignments
// Sort stability
// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return j.prototype=w.filters=w.pseudos,w.setFilters=new j,z=b.compile=function(a,b){var c,d=[],e=[],f=R[a+" "];if(!f){for(
// Generate a function of recursive functions that can be used to check each element
b||(b=k(a)),c=b.length;c--;)f=q(b[c]),f[L]?d.push(f):e.push(f);
// Cache the compiled function
f=R(a,r(e,d))}return f},v.sortStable=L.split("").sort(S).join("")===L,v.detectDuplicates=!!C,D(),v.sortDetached=e(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(E.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(aa,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);ea.find=ga,ea.expr=ga.selectors,ea.expr[":"]=ea.expr.pseudos,ea.unique=ga.uniqueSort,ea.text=ga.getText,ea.isXMLDoc=ga.isXML,ea.contains=ga.contains;var ha=ea.expr.match.needsContext,ia=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ja=/^.[^:#\[\.,]*$/;ea.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ea.find.matchesSelector(d,a)?[d]:[]:ea.find.matches(a,ea.grep(b,function(a){return 1===a.nodeType}))},ea.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(ea(a).filter(function(){for(b=0;b<e;b++)if(ea.contains(d[b],this))return!0}));for(b=0;b<e;b++)ea.find(a,d[b],c);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return c=this.pushStack(e>1?ea.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!d(this,"string"==typeof a&&ha.test(a)?ea(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var ka,
// Use the correct document accordingly with window argument (sandbox)
la=a.document,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
ma=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
// Give the init function the jQuery prototype for later instantiation
(ea.fn.init=function(a,b){var c,d;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if("string"==typeof a){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:ma.exec(a))||!c[1]&&b)return!b||b.jquery?(b||ka).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(c[1]){
// HANDLE: $(html, props)
if(b=b instanceof ea?b[0]:b,
// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
ea.merge(this,ea.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:la,!0)),ia.test(c[1])&&ea.isPlainObject(b))for(c in b)
// Properties of context are called as methods if possible
ea.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if((d=la.getElementById(c[2]))&&d.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(d.id!==c[2])return ka.find(a);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=d}return this.context=la,this.selector=a,this}
// Execute immediately if ready is not present
return a.nodeType?(this.context=this[0]=a,this.length=1,this):ea.isFunction(a)?void 0!==ka.ready?ka.ready(a):a(ea):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),ea.makeArray(a,this))}).prototype=ea.fn,
// Initialize central reference
ka=ea(la);var na=/^(?:parents|prev(?:Until|All))/,
// methods guaranteed to produce a unique set when starting from a unique set
oa={children:!0,contents:!0,next:!0,prev:!0};ea.extend({dir:function(a,b,c){for(var d=[],e=a[b];e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!ea(e).is(c));)1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),ea.fn.extend({has:function(a){var b,c=ea(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(ea.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=ha.test(a)||"string"!=typeof a?ea(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&ea.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?ea.unique(f):f)},
// Determine the position of an element within
// the matched set of elements
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?ea.inArray(this[0],ea(a)):ea.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(ea.unique(ea.merge(this.get(),ea(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ea.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ea.dir(a,"parentNode")},parentsUntil:function(a,b,c){return ea.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ea.dir(a,"nextSibling")},prevAll:function(a){return ea.dir(a,"previousSibling")},nextUntil:function(a,b,c){return ea.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return ea.dir(a,"previousSibling",c)},siblings:function(a){return ea.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return ea.sibling(a.firstChild)},contents:function(a){return ea.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:ea.merge([],a.childNodes)}},function(a,b){ea.fn[a]=function(c,d){var e=ea.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ea.filter(d,e)),this.length>1&&(oa[a]||(e=ea.unique(e)),na.test(a)&&(e=e.reverse())),this.pushStack(e)}});var pa=/\S+/g,qa={};/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
ea.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?qa[a]||f(a):ea.extend({},a);var// Flag to know if list is currently firing
b,
// Last fire value (for non-forgettable lists)
c,
// Flag to know if list was already fired
d,
// End of the loop when firing
e,
// Index of currently firing callback (modified by remove if needed)
g,
// First callback to fire (used internally by add and fireWith)
h,
// Actual callback list
i=[],
// Stack of fire calls for repeatable lists
j=!a.once&&[],
// Fire callbacks
k=function(f){for(c=a.memory&&f,d=!0,g=h||0,h=0,e=i.length,b=!0;i&&g<e;g++)if(!1===i[g].apply(f[0],f[1])&&a.stopOnFalse){c=!1;// To prevent further calls using add
break}b=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},
// Actual Callbacks object
l={
// Add a callback or a collection of callbacks to the list
add:function(){if(i){
// First, we save the current length
var d=i.length;!function b(c){ea.each(c,function(c,d){var e=ea.type(d);"function"===e?a.unique&&l.has(d)||i.push(d):d&&d.length&&"string"!==e&&
// Inspect recursively
b(d)})}(arguments),
// Do we need to add the callbacks to the
// current firing batch?
b?e=i.length:c&&(h=d,k(c))}return this},
// Remove a callback from the list
remove:function(){return i&&ea.each(arguments,function(a,c){for(var d;(d=ea.inArray(c,i,d))>-1;)i.splice(d,1),
// Handle firing indexes
b&&(d<=e&&e--,d<=g&&g--)}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?ea.inArray(a,i)>-1:!(!i||!i.length)},
// Remove all callbacks from the list
empty:function(){return i=[],e=0,this},
// Have the list do nothing anymore
disable:function(){return i=j=c=void 0,this},
// Is it disabled?
disabled:function(){return!i},
// Lock the list in its current state
lock:function(){return j=void 0,c||l.disable(),this},
// Is it locked?
locked:function(){return!j},
// Call all callbacks with the given context and arguments
fireWith:function(a,c){return!i||d&&!j||(c=c||[],c=[a,c.slice?c.slice():c],b?j.push(c):k(c)),this},
// Call all the callbacks with the given arguments
fire:function(){return l.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!d}};return l},ea.extend({Deferred:function(a){var b=[
// action, add listener, listener list, final state
["resolve","done",ea.Callbacks("once memory"),"resolved"],["reject","fail",ea.Callbacks("once memory"),"rejected"],["notify","progress",ea.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return ea.Deferred(function(c){ea.each(b,function(b,f){var g=ea.isFunction(a[b])&&a[b];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&ea.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?ea.extend(a,d):d}},e={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return d.pipe=d.then,ea.each(b,function(a,f){var g=f[2],h=f[3];
// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = [ resolved | rejected ]
c=h},b[1^a][2].disable,b[2][2].lock),
// deferred[ resolve | reject | notify ]
e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},
// Deferred helper
when:function(a){var b,c,d,e=0,f=X.call(arguments),g=f.length,
// the count of uncompleted subordinates
h=1!==g||a&&ea.isFunction(a.promise)?g:0,
// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
i=1===h?a:ea.Deferred(),
// Update function for both resolve and progress values
j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?X.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};
// add listeners to Deferred subordinates; treat others as resolved
if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);e<g;e++)f[e]&&ea.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;
// if we're not waiting on anything, resolve the master
return h||i.resolveWith(d,f),i.promise()}});
// The deferred used on DOM ready
var ra;ea.fn.ready=function(a){
// Add the callback
return ea.ready.promise().done(a),this},ea.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?ea.readyWait++:ea.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
if(!0===a?!--ea.readyWait:!ea.isReady){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
if(!la.body)return setTimeout(ea.ready);
// Remember that the DOM is ready
ea.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==a&&--ea.readyWait>0||(
// If there are functions bound, to execute
ra.resolveWith(la,[ea]),
// Trigger any bound ready events
ea.fn.trigger&&ea(la).trigger("ready").off("ready"))}}}),ea.ready.promise=function(b){if(!ra)
// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
if(ra=ea.Deferred(),"complete"===la.readyState)
// Handle it asynchronously to allow scripts the opportunity to delay ready
setTimeout(ea.ready);else if(la.addEventListener)
// Use the handy event callback
la.addEventListener("DOMContentLoaded",h,!1),
// A fallback to window.onload, that will always work
a.addEventListener("load",h,!1);else{
// Ensure firing before onload, maybe late but safe also for iframes
la.attachEvent("onreadystatechange",h),
// A fallback to window.onload, that will always work
a.attachEvent("onload",h);
// If IE and not a frame
// continually check to see if the document is ready
var c=!1;try{c=null==a.frameElement&&la.documentElement}catch(a){}c&&c.doScroll&&function a(){if(!ea.isReady){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
c.doScroll("left")}catch(b){return setTimeout(a,50)}
// detach all dom ready events
g(),
// and execute any waiting functions
ea.ready()}}()}return ra.promise(b)};var sa,ta="undefined";for(sa in ea(da))break;da.ownLast="0"!==sa,
// Note: most support tests are defined in their respective modules.
// false until the test is run
da.inlineBlockNeedsLayout=!1,ea(function(){
// We need to execute this one support test ASAP because we need to know
// if body.style.zoom needs to be set.
var a,b,c=la.getElementsByTagName("body")[0];c&&(
// Setup
a=la.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=la.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==ta&&(
// Support: IE<8
// Check if natively block-level elements act like inline-block
// elements when setting their display to 'inline' and giving
// them layout
b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(da.inlineBlockNeedsLayout=3===b.offsetWidth)&&(
// Prevent IE 6 from affecting layout for positioned elements #11048
// Prevent IE from shrinking the body in IE 7 mode #12869
// Support: IE<8
c.style.zoom=1)),c.removeChild(a),
// Null elements to avoid leaks in IE
a=b=null)}),function(){var a=la.createElement("div");
// Execute the test only if not already executed in another module.
if(null==da.deleteExpando){
// Support: IE<9
da.deleteExpando=!0;try{delete a.test}catch(a){da.deleteExpando=!1}}
// Null elements to avoid leaks in IE.
a=null}(),/**
 * Determines whether an object can have data
 */
ea.acceptData=function(a){var b=ea.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
// Nodes accept data unless otherwise specified; rejection can be conditional
return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)};var ua=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,va=/([A-Z])/g;ea.extend({cache:{},
// The following elements (space-suffixed to avoid Object.prototype collisions)
// throw uncatchable exceptions if you attempt to set expando properties
noData:{"applet ":!0,"embed ":!0,
// ...but Flash objects (which have this classid) *can* handle expandos
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?ea.cache[a[ea.expando]]:a[ea.expando])&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},
// For internal use only.
_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),ea.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Special expections of .data basically thwart jQuery.access,
// so implement the relevant behavior ourselves
// Gets all values
if(void 0===a){if(this.length&&(e=ea.data(f),1===f.nodeType&&!ea._data(f,"parsedAttrs"))){for(c=g.length;c--;)d=g[c].name,0===d.indexOf("data-")&&(d=ea.camelCase(d.slice(5)),i(f,d,e[d]));ea._data(f,"parsedAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
// Sets one value
// Gets one value
// Try to fetch any internally stored data first
return"object"==typeof a?this.each(function(){ea.data(this,a)}):arguments.length>1?this.each(function(){ea.data(this,a,b)}):f?i(f,a,ea.data(f,a)):void 0},removeData:function(a){return this.each(function(){ea.removeData(this,a)})}}),ea.extend({queue:function(a,b,c){var d;if(a)
// Speed up dequeue by getting out quickly if this is just a lookup
return b=(b||"fx")+"queue",d=ea._data(a,b),c&&(!d||ea.isArray(c)?d=ea._data(a,b,ea.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=ea.queue(a,b),d=c.length,e=c.shift(),f=ea._queueHooks(a,b),g=function(){ea.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// not intended for public consumption - generates a queueHooks object, or returns the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return ea._data(a,c)||ea._data(a,c,{empty:ea.Callbacks("once memory").add(function(){ea._removeData(a,b+"queue"),ea._removeData(a,c)})})}}),ea.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?ea.queue(this[0],a):void 0===b?this:this.each(function(){var c=ea.queue(this,a,b);
// ensure a hooks for this queue
ea._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&ea.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ea.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=ea.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=ea._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var wa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xa=["Top","Right","Bottom","Left"],ya=function(a,b){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return a=b||a,"none"===ea.css(a,"display")||!ea.contains(a.ownerDocument,a)},za=ea.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===ea.type(c)){e=!0;for(h in c)ea.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,ea.isFunction(d)||(g=!0),j&&(
// Bulk operations run against the entire set
g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(ea(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f},Aa=/^(?:checkbox|radio)$/i;!function(){var a=la.createDocumentFragment(),b=la.createElement("div"),c=la.createElement("input");
// Execute the test only if not already executed in another module.
if(
// Setup
b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",
// IE strips leading whitespace when .innerHTML is used
da.leadingWhitespace=3===b.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
da.tbody=!b.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
da.htmlSerialize=!!b.getElementsByTagName("link").length,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
da.html5Clone="<:nav></:nav>"!==la.createElement("nav").cloneNode(!0).outerHTML,
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
c.type="checkbox",c.checked=!0,a.appendChild(c),da.appendChecked=c.checked,
// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE6-IE11+
b.innerHTML="<textarea>x</textarea>",da.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,
// #11217 - WebKit loses check when the name is after the checked attribute
a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",
// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
da.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<9
// Opera does not clone events (and typeof div.attachEvent === undefined).
// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
da.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){da.noCloneEvent=!1}),b.cloneNode(!0).click()),null==da.deleteExpando){
// Support: IE<9
da.deleteExpando=!0;try{delete b.test}catch(a){da.deleteExpando=!1}}
// Null elements to avoid leaks in IE.
a=b=c=null}(),function(){var b,c,d=la.createElement("div");
// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(da[b+"Bubbles"]=c in a)||(
// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
d.setAttribute(c,"t"),da[b+"Bubbles"]=!1===d.attributes[c].expando);
// Null elements to avoid leaks in IE.
d=null}();var Ba=/^(?:input|select|textarea)$/i,Ca=/^key/,Da=/^(?:mouse|contextmenu)|click/,Ea=/^(?:focusinfocus|focusoutblur)$/,Fa=/^([^.]*)(?:\.(.+)|)$/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
ea.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ea._data(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q){for(
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(i=c,c=i.handler,e=i.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=ea.guid++),
// Init the element's event structure and main handler, if this is the first
(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof ea===ta||a&&ea.event.triggered===a.type?void 0:ea.event.dispatch.apply(k.elem,arguments)},
// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
k.elem=a),
// Handle multiple events separated by a space
b=(b||"").match(pa)||[""],h=b.length;h--;)f=Fa.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
n&&(
// If event changes its type, use the special event handlers for the changed type
j=ea.event.special[n]||{},
// If selector defined, determine special event api type, otherwise given type
n=(e?j.delegateType:j.bindType)||n,
// Update special based on newly reset type
j=ea.event.special[n]||{},
// handleObj is passed to all event handlers
l=ea.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&ea.expr.match.needsContext.test(e),namespace:o.join(".")},i),
// Init the event handler queue if we're the first
(m=g[n])||(m=g[n]=[],m.delegateCount=0,
// Only use addEventListener/attachEvent if the special events handler returns false
j.setup&&!1!==j.setup.call(a,d,o,k)||(
// Bind the global event handler to the element
a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),
// Add to the element's handler list, delegates in front
e?m.splice(m.delegateCount++,0,l):m.push(l),
// Keep track of which events have ever been used, for event optimization
ea.event.global[n]=!0);
// Nullify elem to prevent memory leaks in IE
a=null}},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ea.hasData(a)&&ea._data(a);if(q&&(k=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(pa)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=Fa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ea.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
i&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle)||ea.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)ea.event.remove(a,n+b[j],c,d,!0);
// Remove the expando if it's no longer used
ea.isEmptyObject(k)&&(delete q.handle,
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
ea._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||la],n=ba.call(b,"type")?b.type:b,o=ba.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(h=k=d=d||la,3!==d.nodeType&&8!==d.nodeType&&!Ea.test(n+ea.event.triggered)&&(n.indexOf(".")>=0&&(
// Namespaced trigger; create a regexp to match event type in handle()
o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[ea.expando]?b:new ea.Event(n,"object"==typeof b&&b),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
b.result=void 0,b.target||(b.target=d),
// Clone any incoming data and prepend the event, creating the handler arg list
c=null==c?[b]:ea.makeArray(c,[b]),
// Allow special events to draw outside the lines
j=ea.event.special[n]||{},e||!j.trigger||!1!==j.trigger.apply(d,c))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!j.noBubble&&!ea.isWindow(d)){for(i=j.delegateType||n,Ea.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
k===(d.ownerDocument||la)&&m.push(k.defaultView||k.parentWindow||a)}for(
// Fire handlers on the event path
l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,
// jQuery handler
f=(ea._data(h,"events")||{})[b.type]&&ea._data(h,"handle"),f&&f.apply(h,c),(
// Native handler
f=g&&h[g])&&f.apply&&ea.acceptData(h)&&(b.result=f.apply(h,c),!1===b.result&&b.preventDefault());
// If nobody prevented the default action, do it now
if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||!1===j._default.apply(m.pop(),c))&&ea.acceptData(d)&&g&&d[n]&&!ea.isWindow(d)){
// Don't re-trigger an onFOO event when we call its FOO() method
k=d[g],k&&(d[g]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
ea.event.triggered=n;try{d[n]()}catch(a){}ea.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
a=ea.event.fix(a);var b,c,d,e,f,g=[],h=X.call(arguments),i=(ea._data(this,"events")||{})[a.type]||[],j=ea.event.special[a.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
h[0]=a,a.delegateTarget=this,!j.preDispatch||!1!==j.preDispatch.call(this,a)){for(
// Determine handlers
g=ea.event.handlers.call(this,a,i),
// Run delegates first; they may want to stop propagation beneath us
b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,f=0;(d=e.handlers[f++])&&!a.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
a.namespace_re&&!a.namespace_re.test(d.namespace)||(a.handleObj=d,a.data=d.data,void 0!==(c=((ea.event.special[d.origType]||{}).handle||d.handler).apply(e.elem,h))&&!1===(a.result=c)&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(h&&i.nodeType&&(!a.button||"click"!==a.type))/* jshint eqeqeq: false */
for(;i!=this;i=i.parentNode||this)/* jshint eqeqeq: true */
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(e=[],f=0;f<h;f++)d=b[f],
// Don't conflict with Object.prototype properties (#13203)
c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?ea(c,this).index(i)>=0:ea.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}
// Add the remaining (directly-bound) handlers
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[ea.expando])return a;
// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Da.test(e)?this.mouseHooks:Ca.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new ea.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];
// Support: IE<9
// Fix target property (#1925)
// Support: Chrome 23+, Safari?
// Target should not be a text node (#504, #13143)
// Support: IE<9
// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
return a.target||(a.target=f.srcElement||la),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
// Add which for key events
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||la,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==o()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===o()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if(ea.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return ea.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Even when returnValue equals to undefined Firefox will still show alert
void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var e=ea.extend(new ea.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?ea.event.trigger(e,null,b):ea.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},ea.removeEvent=la.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(
// #8545, #7054, preventing memory leaks for custom events in IE6-8
// detachEvent needed property on element, by name of that event, to properly expose it to GC
typeof a[d]===ta&&(a[d]=null),a.detachEvent(d,c))},ea.Event=function(a,b){
// Allow instantiation without the 'new' keyword
if(!(this instanceof ea.Event))return new ea.Event(a,b);
// Event object
a&&a.type?(this.originalEvent=a,this.type=a.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(
// Support: IE < 9
!1===a.returnValue||
// Support: Android < 4.0
a.getPreventDefault&&a.getPreventDefault())?m:n):this.type=a,
// Put explicitly provided properties onto the event object
b&&ea.extend(this,b),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=a&&a.timeStamp||ea.now(),
// Mark it as fixed
this[ea.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ea.Event.prototype={isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=m,a&&(
// If preventDefault exists, run it on the original event
a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=m,a&&(
// If stopPropagation exists, run it on the original event
a.stopPropagation&&a.stopPropagation(),
// Support: IE
// Set the cancelBubble property of the original event to true
a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=m,this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
ea.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){ea.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return e&&(e===d||ea.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),
// IE submit delegation
da.submitBubbles||(ea.event.special.submit={setup:function(){
// Only need this for delegated form submit events
if(ea.nodeName(this,"form"))return!1;
// Lazy-add a submit handler when a descendant form may potentially be submitted
ea.event.add(this,"click._submit keypress._submit",function(a){
// Node name check avoids a VML-related crash in IE (#9807)
var b=a.target,c=ea.nodeName(b,"input")||ea.nodeName(b,"button")?b.form:void 0;c&&!ea._data(c,"submitBubbles")&&(ea.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),ea._data(c,"submitBubbles",!0))})},postDispatch:function(a){
// If form was submitted by the user, bubble the event up the tree
a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&ea.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){
// Only need this for delegated form submit events
if(ea.nodeName(this,"form"))return!1;
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
ea.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
da.changeBubbles||(ea.event.special.change={setup:function(){if(Ba.test(this.nodeName))
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
return"checkbox"!==this.type&&"radio"!==this.type||(ea.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),ea.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),
// Allow triggered, simulated change events (#11500)
ea.event.simulate("change",this,a,!0)})),!1;
// Delegated event; lazy-add a change handler on descendant inputs
ea.event.add(this,"beforeactivate._change",function(a){var b=a.target;Ba.test(b.nodeName)&&!ea._data(b,"changeBubbles")&&(ea.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||ea.event.simulate("change",this.parentNode,a,!0)}),ea._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;
// Swallow native change events from checkbox/radio, we already triggered them above
if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return ea.event.remove(this,"._change"),!Ba.test(this.nodeName)}}),
// Create "bubbling" focus and blur events
da.focusinBubbles||ea.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){ea.event.simulate(b,a.target,ea.event.fix(a),!0)};ea.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ea._data(d,b);e||d.addEventListener(a,c,!0),ea._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ea._data(d,b)-1;e?ea._data(d,b,e):(d.removeEventListener(a,c,!0),ea._removeData(d,b))}}}),ea.fn.extend({on:function(a,b,c,d,/*INTERNAL*/e){var f,g;
// Types can be a map of types/handlers
if("object"==typeof a){
// ( types-Object, selector, data )
"string"!=typeof b&&(
// ( types-Object, data )
c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(
// ( types, fn )
d=b,c=b=void 0):null==d&&("string"==typeof b?(
// ( types, selector, fn )
d=c,c=void 0):(
// ( types, data, fn )
d=c,c=b,b=void 0)),!1===d)d=n;else if(!d)return this;
// Use same guid so caller can remove using origFn
return 1===e&&(g=d,d=function(a){
// Can use an empty set, since event contains the info
return ea().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=ea.guid++)),this.each(function(){ea.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,ea(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=n),this.each(function(){ea.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){ea.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return ea.event.trigger(a,b,c,!0)}});var Ga="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ha=new RegExp("<(?:"+Ga+")[\\s/>]","i"),Ia=/^\s+/,Ja=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ka=/<([\w:]+)/,La=/<tbody/i,Ma=/<|&#?\w+;/,Na=/<(?:script|style|link)/i,
// checked="checked" or checked
Oa=/checked\s*(?:[^=]|=\s*.checked.)/i,Pa=/^$|\/(?:java|ecma)script/i,Qa=/^true\/(.*)/,
// We have to close these tags to support XHTML (#13200)
Ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default:da.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Sa=p(la),Ta=Sa.appendChild(la.createElement("div"));Ra.optgroup=Ra.option,Ra.tbody=Ra.tfoot=Ra.colgroup=Ra.caption=Ra.thead,Ra.th=Ra.td,ea.extend({clone:function(a,b,c){var d,e,f,g,h,i=ea.contains(a.ownerDocument,a);if(da.html5Clone||ea.isXMLDoc(a)||!Ha.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ta.innerHTML=a.outerHTML,Ta.removeChild(f=Ta.firstChild)),!(da.noCloneEvent&&da.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ea.isXMLDoc(a)))
// Fix all IE cloning issues
for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
d=q(f),h=q(a),g=0;null!=(e=h[g]);++g)
// Ensure that the destination node is not null; Fixes #9587
d[g]&&x(e,d[g]);
// Copy the events from the original to the clone
if(b)if(c)for(h=h||q(a),d=d||q(f),g=0;null!=(e=h[g]);g++)w(e,d[g]);else w(a,f);
// Return the cloned set
// Preserve script evaluation history
return d=q(f,"script"),d.length>0&&v(d,!i&&q(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,
// Ensure a safe fragment
m=p(b),n=[],o=0;o<l;o++)if((f=a[o])||0===f)
// Add nodes directly
if("object"===ea.type(f))ea.merge(n,f.nodeType?[f]:f);else if(Ma.test(f)){for(h=h||m.appendChild(b.createElement("div")),
// Deserialize a standard representation
i=(Ka.exec(f)||["",""])[1].toLowerCase(),k=Ra[i]||Ra._default,h.innerHTML=k[1]+f.replace(Ja,"<$1></$2>")+k[2],
// Descend through wrappers to the right content
e=k[0];e--;)h=h.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(
// Manually add leading whitespace removed by IE
!da.leadingWhitespace&&Ia.test(f)&&n.push(b.createTextNode(Ia.exec(f)[0])),!da.tbody)for(
// String was a <table>, *may* have spurious <tbody>
f="table"!==i||La.test(f)?
// String was a bare <thead> or <tfoot>
"<table>"!==k[1]||La.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)ea.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);
// Fix #12392 for oldIE
for(ea.merge(n,h.childNodes),
// Fix #12392 for WebKit and IE > 9
h.textContent="";h.firstChild;)h.removeChild(h.firstChild);
// Remember the top-level container for proper cleanup
h=m.lastChild}else n.push(b.createTextNode(f));for(
// Fix #11356: Clear elements from fragment
h&&m.removeChild(h),
// Reset defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
da.appendChecked||ea.grep(q(n,"input"),r),o=0;f=n[o++];)
// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if((!d||-1===ea.inArray(f,d))&&(g=ea.contains(f.ownerDocument,f),
// Append to fragment
h=q(m.appendChild(f),"script"),
// Preserve script evaluation history
g&&v(h),c))for(e=0;f=h[e++];)Pa.test(f.type||"")&&c.push(f);return h=null,m},cleanData:function(a,/* internal */b){for(var c,d,e,f,g=0,h=ea.expando,i=ea.cache,j=da.deleteExpando,k=ea.event.special;null!=(c=a[g]);g++)if((b||ea.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?ea.event.remove(c,d):ea.removeEvent(c,d,f.handle);
// Remove cache only if it was not already removed by jQuery.event.remove
i[e]&&(delete i[e],
// IE does not allow us to delete expando properties from nodes,
// nor does it have a removeAttribute function on Document nodes;
// we must handle all of these cases
j?delete c[h]:typeof c.removeAttribute!==ta?c.removeAttribute(h):c[h]=null,W.push(e))}}}),ea.fn.extend({text:function(a){return za(this,function(a){return void 0===a?ea.text(this):this.empty().append((this[0]&&this[0].ownerDocument||la).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){s(this,a).appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?ea.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||ea.cleanData(q(c)),c.parentNode&&(b&&ea.contains(c.ownerDocument,c)&&v(q(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===a.nodeType&&ea.cleanData(q(a,!1));a.firstChild;)a.removeChild(a.firstChild);
// If this is a select, ensure that it displays empty (#12336)
// Support: IE<9
a.options&&ea.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return ea.clone(this,a,b)})},html:function(a){return za(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g,""):void 0;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!Na.test(a)&&(da.htmlSerialize||!Ha.test(a))&&(da.leadingWhitespace||!Ia.test(a))&&!Ra[(Ka.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ja,"<$1></$2>");try{for(;c<d;c++)
// Remove element nodes and prevent memory leaks
b=this[c]||{},1===b.nodeType&&(ea.cleanData(q(b,!1)),b.innerHTML=a);b=0}catch(a){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];
// Force removal if there was no new content (e.g., from empty arguments)
// Make the changes, replacing each context element with the new content
return this.domManip(arguments,function(b){a=this.parentNode,ea.cleanData(q(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){
// Flatten any nested arrays
a=Y.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],n=ea.isFunction(m);
// We can't cloneNode fragments that contain checked, in WebKit
if(n||j>1&&"string"==typeof m&&!da.checkClone&&Oa.test(m))return this.each(function(c){var d=k.eq(c);n&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(h=ea.buildFragment(a,this[0].ownerDocument,!1,this),c=h.firstChild,1===h.childNodes.length&&(h=c),c)){
// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(f=ea.map(q(h,"script"),t),e=f.length;i<j;i++)d=h,i!==l&&(d=ea.clone(d,!0,!0),
// Keep references to cloned scripts for later restoration
e&&ea.merge(f,q(d,"script"))),b.call(this[i],d,i);if(e)
// Evaluate executable scripts on first document insertion
for(g=f[f.length-1].ownerDocument,
// Reenable scripts
ea.map(f,u),i=0;i<e;i++)d=f[i],Pa.test(d.type||"")&&!ea._data(d,"globalEval")&&ea.contains(g,d)&&(d.src?
// Optional AJAX dependency, but won't run scripts if not present
ea._evalUrl&&ea._evalUrl(d.src):ea.globalEval((d.text||d.textContent||d.innerHTML||"").replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,"")));
// Fix #11809: Avoid leaking memory
h=c=null}return this}}),ea.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ea.fn[a]=function(a){for(var c,d=0,e=[],f=ea(a),g=f.length-1;d<=g;d++)c=d===g?this:this.clone(!0),ea(f[d])[b](c),
// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
Z.apply(e,c.get());return this.pushStack(e)}});var Ua,Va={};!function(){var a,b,c=la.createElement("div");
// Setup
c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",
// Make sure that element opacity exists
// (IE uses filter instead)
// Use a regex to work around a WebKit issue. See #5145
da.opacity=/^0.5/.test(a.style.opacity),
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
da.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",da.clearCloneStyle="content-box"===c.style.backgroundClip,
// Null elements to avoid leaks in IE.
a=c=null,da.shrinkWrapBlocks=function(){var a,c,d;if(null==b){if(!(a=la.getElementsByTagName("body")[0]))
// Test fired too early or in an unsupported environment, exit.
return;"border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=la.createElement("div"),d=la.createElement("div"),a.appendChild(c).appendChild(d),
// Will be changed later if needed.
b=!1,typeof d.style.zoom!==ta&&(
// Support: IE6
// Check if elements with layout shrink-wrap their children
d.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b=3!==d.offsetWidth),a.removeChild(c),
// Null elements to avoid leaks in IE.
a=c=d=null}return b}}();var Wa,Xa,Ya=/^margin/,Za=new RegExp("^("+wa+")(?!px)[a-z%]+$","i"),$a=/^(top|right|bottom|left)$/;a.getComputedStyle?(Wa=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Xa=function(a,b,c){var d,e,f,g,h=a.style;
// Support: IE
// IE returns zIndex value as an integer.
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
// A tribute to the "awesome hack by Dean Edwards"
// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return c=c||Wa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||ea.contains(a.ownerDocument,a)||(g=ea.style(a,b)),Za.test(g)&&Ya.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):la.documentElement.currentStyle&&(Wa=function(a){return a.currentStyle},Xa=function(a,b,c){var d,e,f,g,h=a.style;
// Support: IE
// IE returns zIndex value as an integer.
// Avoid setting ret to empty string here
// so we don't default to auto
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// but not position css attributes, as those are proportional to the parent element instead
// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return c=c||Wa(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Za.test(g)&&!$a.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"}),function(){function b(){var b,c,d=la.getElementsByTagName("body")[0];d&&(b=la.createElement("div"),c=la.createElement("div"),b.style.cssText=j,d.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
// Workaround failing boxSizing test due to offsetWidth returning wrong value
// with some non-1 values of body zoom, ticket #13543
ea.swap(d,null!=d.style.zoom?{zoom:1}:{},function(){e=4===c.offsetWidth}),
// Will be changed later if needed.
f=!0,g=!1,h=!0,
// Use window.getComputedStyle because jsdom on node.js will break without it.
a.getComputedStyle&&(g="1%"!==(a.getComputedStyle(c,null)||{}).top,f="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),d.removeChild(b),
// Null elements to avoid leaks in IE.
c=d=null)}var c,d,e,f,g,h,i=la.createElement("div"),j="border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
// Setup
i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=i.getElementsByTagName("a")[0],c.style.cssText="float:left;opacity:.5",
// Make sure that element opacity exists
// (IE uses filter instead)
// Use a regex to work around a WebKit issue. See #5145
da.opacity=/^0.5/.test(c.style.opacity),
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
da.cssFloat=!!c.style.cssFloat,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",da.clearCloneStyle="content-box"===i.style.backgroundClip,
// Null elements to avoid leaks in IE.
c=i=null,ea.extend(da,{reliableHiddenOffsets:function(){if(null!=d)return d;var a,b,c,e=la.createElement("div"),f=la.getElementsByTagName("body")[0];if(f)
// Setup
// Support: IE8
// Check if table cells still have offsetWidth/Height when they are set
// to display:none and there are still other visible table cells in a
// table row; if so, offsetWidth/Height are not reliable for use when
// determining if an element has been hidden directly using
// display:none (it is still safe to use offsets if a parent element is
// hidden; don safety goggles and see bug #4512 for more information).
// Support: IE8
// Check if empty table cells still have offsetWidth/Height
// Null elements to avoid leaks in IE.
return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=la.createElement("div"),a.style.cssText=j,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",d=c&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,d},boxSizing:function(){return null==e&&b(),e},boxSizingReliable:function(){return null==f&&b(),f},pixelPosition:function(){return null==g&&b(),g},reliableMarginRight:function(){var b,c,d,e;
// Use window.getComputedStyle because jsdom on node.js will break without it.
if(null==h&&a.getComputedStyle){if(!(b=la.getElementsByTagName("body")[0]))
// Test fired too early or in an unsupported environment, exit.
return;c=la.createElement("div"),d=la.createElement("div"),c.style.cssText=j,b.appendChild(c).appendChild(d),
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// Fails in WebKit before Feb 2011 nightlies
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
e=d.appendChild(la.createElement("div")),e.style.cssText=d.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0",e.style.marginRight=e.style.width="0",d.style.width="1px",h=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return h}})}(),
// A method for quickly swapping in/out CSS properties to get correct calculations.
ea.swap=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e};var _a=/alpha\([^)]*\)/i,ab=/opacity\s*=\s*([^)]*)/,
// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
bb=/^(none|table(?!-c[ea]).+)/,cb=new RegExp("^("+wa+")(.*)$","i"),db=new RegExp("^([+-])=("+wa+")","i"),eb={position:"absolute",visibility:"hidden",display:"block"},fb={letterSpacing:0,fontWeight:400},gb=["Webkit","O","Moz","ms"];ea.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=Xa(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
float:da.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=ea.camelCase(b),i=a.style;
// Check if we're setting a value
if(b=ea.cssProps[h]||(ea.cssProps[h]=B(i,h)),
// gets hook for the prefixed version
// followed by the unprefixed version
g=ea.cssHooks[b]||ea.cssHooks[h],void 0===c)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];
// Make sure that null and NaN values aren't set. See: #7116
if(f=typeof c,
// convert relative number strings (+= or -=) to relative numbers. #7345
"string"===f&&(e=db.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(ea.css(a,b)),
// Fixes bug #9237
f="number"),null!=c&&c===c&&(
// If a number was passed in, add 'px' to the (except for certain CSS properties)
"number"!==f||ea.cssNumber[h]||(c+="px"),
// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
da.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))
// Support: IE
// Swallow errors from 'invalid' CSS values (#5509)
try{
// Support: Chrome, Safari
// Setting style to blank string required to delete "style: x !important;"
i[b]="",i[b]=c}catch(a){}}},css:function(a,b,c,d){var e,f,g,h=ea.camelCase(b);
// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return b=ea.cssProps[h]||(ea.cssProps[h]=B(a.style,h)),g=ea.cssHooks[b]||ea.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Xa(a,b,d)),"normal"===f&&b in fb&&(f=fb[b]),""===c||c?(e=parseFloat(f),!0===c||ea.isNumeric(e)?e||0:f):f}}),ea.each(["height","width"],function(a,b){ea.cssHooks[b]={get:function(a,c,d){if(c)
// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
return 0===a.offsetWidth&&bb.test(ea.css(a,"display"))?ea.swap(a,eb,function(){return F(a,b,d)}):F(a,b,d)},set:function(a,c,d){var e=d&&Wa(a);return D(a,c,d?E(a,b,d,da.boxSizing()&&"border-box"===ea.css(a,"boxSizing",!1,e),e):0)}}}),da.opacity||(ea.cssHooks.opacity={get:function(a,b){
// IE uses filters for opacity
return ab.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=ea.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
c.zoom=1,
// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
// if value === "", then remove inline opacity #12685
(b>=1||""===b)&&""===ea.trim(f.replace(_a,""))&&c.removeAttribute&&(
// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
// if "filter:" is present at all, clearType is disabled, we want to avoid this
// style.removeAttribute is IE Only, but so apparently is this code path...
c.removeAttribute("filter"),""===b||d&&!d.filter)||(
// otherwise, set new filter values
c.filter=_a.test(f)?f.replace(_a,e):f+" "+e)}}),ea.cssHooks.marginRight=A(da.reliableMarginRight,function(a,b){if(b)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// Work around by temporarily setting element display to inline-block
return ea.swap(a,{display:"inline-block"},Xa,[a,"marginRight"])}),
// These hooks are used by animate to expand properties
ea.each({margin:"",padding:"",border:"Width"},function(a,b){ea.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+xa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ya.test(a)||(ea.cssHooks[a+b].set=D)}),ea.fn.extend({css:function(a,b){return za(this,function(a,b,c){var d,e,f={},g=0;if(ea.isArray(b)){for(d=Wa(a),e=b.length;g<e;g++)f[b[g]]=ea.css(a,b[g],!1,d);return f}return void 0!==c?ea.style(a,b,c):ea.css(a,b)},a,b,arguments.length>1)},show:function(){return C(this,!0)},hide:function(){return C(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ya(this)?ea(this).show():ea(this).hide()})}}),ea.Tween=G,G.prototype={constructor:G,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ea.cssNumber[c]?"":"px")},cur:function(){var a=G.propHooks[this.prop];return a&&a.get?a.get(this):G.propHooks._default.get(this)},run:function(a){var b,c=G.propHooks[this.prop];return this.options.duration?this.pos=b=ea.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):G.propHooks._default.set(this),this}},G.prototype.init.prototype=G.prototype,G.propHooks={_default:{get:function(a){var b;
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=ea.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
ea.fx.step[a.prop]?ea.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[ea.cssProps[a.prop]]||ea.cssHooks[a.prop])?ea.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},
// Support: IE <=9
// Panic based approach to setting things on disconnected nodes
G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ea.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},ea.fx=G.prototype.init,
// Back Compat <1.8 extension point
ea.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=new RegExp("^(?:([+-])=|)("+wa+")([a-z%]*)$","i"),lb=/queueHooks$/,mb=[K],nb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=kb.exec(b),f=e&&e[3]||(ea.cssNumber[a]?"":"px"),
// Starting value computation is required for potential unit mismatches
g=(ea.cssNumber[a]||"px"!==f&&+d)&&kb.exec(ea.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){
// Trust units reported by jQuery.css
f=f||g[3],
// Make sure we update the tween properties later on
e=e||[],
// Iteratively approximate from a nonzero starting point
g=+d||1;do{
// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
h=h||".5",
// Adjust and apply
g/=h,ea.style(c.elem,a,g+f)}while(h!==(h=c.cur()/d)&&1!==h&&--i)}
// Update tween properties
// If a +=/-= token was provided, we're doing a relative animation
return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};ea.Animation=ea.extend(M,{tweener:function(a,b){ea.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;d<e;d++)c=a[d],nb[c]=nb[c]||[],nb[c].unshift(b)},prefilter:function(a,b){b?mb.unshift(a):mb.push(a)}}),ea.speed=function(a,b,c){var d=a&&"object"==typeof a?ea.extend({},a):{complete:c||!c&&b||ea.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ea.isFunction(b)&&b};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return d.duration=ea.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in ea.fx.speeds?ea.fx.speeds[d.duration]:ea.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){ea.isFunction(d.old)&&d.old.call(this),d.queue&&ea.dequeue(this,d.queue)},d},ea.fn.extend({fadeTo:function(a,b,c,d){
// show any hidden elements after setting opacity to 0
return this.filter(ya).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ea.isEmptyObject(a),f=ea.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=M(this,ea.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||ea._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=ea.timers,g=ea._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&lb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
!b&&c||ea.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=ea._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ea.timers,g=d?d.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
c.finish=!0,
// empty the queue first
ea.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// look for any animations in the old queue and finish them
for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// turn off finishing flag
delete c.finish})}}),ea.each(["toggle","show","hide"],function(a,b){var c=ea.fn[b];ea.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(I(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
ea.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ea.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ea.timers=[],ea.fx.tick=function(){var a,b=ea.timers,c=0;for(hb=ea.now();c<b.length;c++)
// Checks the timer has not already been removed
(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||ea.fx.stop(),hb=void 0},ea.fx.timer=function(a){ea.timers.push(a),a()?ea.fx.start():ea.timers.pop()},ea.fx.interval=13,ea.fx.start=function(){ib||(ib=setInterval(ea.fx.tick,ea.fx.interval))},ea.fx.stop=function(){clearInterval(ib),ib=null},ea.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
ea.fn.delay=function(a,b){return a=ea.fx?ea.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=la.createElement("div");
// Setup
e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],
// First batch of tests.
c=la.createElement("select"),d=c.appendChild(la.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",
// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
da.getSetAttribute="t"!==e.className,
// Get the style information from getAttribute
// (IE uses .cssText instead)
da.style=/top/.test(a.getAttribute("style")),
// Make sure that URLs aren't manipulated
// (IE normalizes it by default)
da.hrefNormalized="/a"===a.getAttribute("href"),
// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
da.checkOn=!!b.value,
// Make sure that a selected-by-default option has a working selected property.
// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
da.optSelected=d.selected,
// Tests for enctype support on a form (#6743)
da.enctype=!!la.createElement("form").enctype,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
c.disabled=!0,da.optDisabled=!d.disabled,
// Support: IE8 only
// Check if we can trust getAttribute("value")
b=la.createElement("input"),b.setAttribute("value",""),da.input=""===b.getAttribute("value"),
// Check if an input maintains its value after becoming a radio
b.value="t",b.setAttribute("type","radio"),da.radioValue="t"===b.value,
// Null elements to avoid leaks in IE.
a=b=c=d=e=null}();ea.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=ea.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,ea(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==e?e="":"number"==typeof e?e+="":ea.isArray(e)&&(e=ea.map(e,function(a){return null==a?"":a+""})),
// If set returns undefined, fall back to normal setting
(b=ea.valHooks[this.type]||ea.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// handle most common string cases
// handle cases where value is null/undef or number
return(b=ea.valHooks[e.type]||ea.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(/\r/g,""):null==c?"":c)}}}),ea.extend({valHooks:{option:{get:function(a){var b=ea.find.attr(a,"value");return null!=b?b:ea.text(a)}},select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)
// oldIE doesn't update selected after form reset (#2551)
if(c=d[i],(c.selected||i===e)&&(
// Don't return options that are disabled or in a disabled optgroup
da.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!ea.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=ea(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=ea.makeArray(b),g=e.length;g--;)if(d=e[g],ea.inArray(ea.valHooks.option.get(d),f)>=0)
// Support: IE6
// When new option element is added to select box we need to
// force reflow of newly added node in order to workaround delay
// of initialization properties
try{d.selected=c=!0}catch(a){
// Will be executed only in IE6
d.scrollHeight}else d.selected=!1;
// Force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),e}}}}),
// Radios and checkboxes getter/setter
ea.each(["radio","checkbox"],function(){ea.valHooks[this]={set:function(a,b){if(ea.isArray(b))return a.checked=ea.inArray(ea(a).val(),b)>=0}},da.checkOn||(ea.valHooks[this].get=function(a){
// Support: Webkit
// "" is returned instead of "on" if a value isn't specified
return null===a.getAttribute("value")?"on":a.value})});var ob,pb,qb=ea.expr.attrHandle,rb=/^(?:checked|selected)$/i,sb=da.getSetAttribute,tb=da.input;ea.fn.extend({attr:function(a,b){return za(this,ea.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ea.removeAttr(this,a)})}}),ea.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// don't get/set attributes on text, comment and attribute nodes
if(a&&3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return typeof a.getAttribute===ta?ea.prop(a,b,c):(1===f&&ea.isXMLDoc(a)||(b=b.toLowerCase(),d=ea.attrHooks[b]||(ea.expr.match.bool.test(b)?pb:ob)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=ea.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void ea.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(pa);if(f&&1===a.nodeType)for(;c=f[e++];)d=ea.propFix[c]||c,
// Boolean attributes get special treatment (#10870)
ea.expr.match.bool.test(c)?
// Set corresponding property to false
tb&&sb||!rb.test(c)?a[d]=!1:a[ea.camelCase("default-"+c)]=a[d]=!1:ea.attr(a,c,""),a.removeAttribute(sb?c:d)},attrHooks:{type:{set:function(a,b){if(!da.radioValue&&"radio"===b&&ea.nodeName(a,"input")){
// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),
// Hook for boolean attributes
pb={set:function(a,b,c){
// Remove boolean attributes when set to false
// IE<8 needs the *property* name
return!1===b?ea.removeAttr(a,c):tb&&sb||!rb.test(c)?a.setAttribute(!sb&&ea.propFix[c]||c,c):a[ea.camelCase("default-"+c)]=a[c]=!0,c}},
// Retrieve booleans specially
ea.each(ea.expr.match.bool.source.match(/\w+/g),function(a,b){var c=qb[b]||ea.find.attr;qb[b]=tb&&sb||!rb.test(b)?function(a,b,d){var e,f;
// Avoid an infinite loop by temporarily removing this function from the getter
return d||(f=qb[b],qb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,qb[b]=f),e}:function(a,b,c){if(!c)return a[ea.camelCase("default-"+b)]?b.toLowerCase():null}}),
// fix oldIE attroperties
tb&&sb||(ea.attrHooks.value={set:function(a,b,c){if(!ea.nodeName(a,"input"))
// Use nodeHook if defined (#1954); otherwise setAttribute is fine
return ob&&ob.set(a,b,c);
// Does not return so that setAttribute is also used
a.defaultValue=b}}),
// IE6/7 do not support getting/setting some attributes with get/setAttribute
sb||(
// Use this for any attribute in IE6/7
// This fixes almost every IE6/7 issue
ob={set:function(a,b,c){
// Set the existing or create a new attribute node
var d=a.getAttributeNode(c);
// Break association with cloned elements by also using setAttribute (#9646)
if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},
// Some attributes are constructed with empty-string values when not defined
qb.id=qb.name=qb.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},
// Fixing value retrieval on a button requires this module
ea.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:ob.set},
// Set contenteditable to false on removals(#10429)
// Setting to empty string throws an error as an invalid value
ea.attrHooks.contenteditable={set:function(a,b,c){ob.set(a,""!==b&&b,c)}},
// Set width and height to auto instead of 0 on empty string( Bug #8150 )
// This is for removals
ea.each(["width","height"],function(a,b){ea.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),da.style||(ea.attrHooks.style={get:function(a){
// Return undefined in the case of empty string
// Note: IE uppercases css property names, but if we were to .toLowerCase()
// .cssText, that would destroy case senstitivity in URL's, like in "background"
return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var ub=/^(?:input|select|textarea|button|object)$/i,vb=/^(?:a|area)$/i;ea.fn.extend({prop:function(a,b){return za(this,ea.prop,a,b,arguments.length>1)},removeProp:function(a){return a=ea.propFix[a]||a,this.each(function(){
// try/catch handles cases where IE balks (such as removing a property on window)
try{this[a]=void 0,delete this[a]}catch(a){}})}}),ea.extend({propFix:{for:"htmlFor",class:"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
// don't get/set properties on text, comment and attribute nodes
if(a&&3!==g&&8!==g&&2!==g)
// Fix name and attach hooks
return f=1!==g||!ea.isXMLDoc(a),f&&(b=ea.propFix[b]||b,e=ea.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){
// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var b=ea.find.attr(a,"tabindex");return b?parseInt(b,10):ub.test(a.nodeName)||vb.test(a.nodeName)&&a.href?0:-1}}}}),
// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
da.hrefNormalized||
// href/src property should get the full normalized URL (#10299/#12915)
ea.each(["href","src"],function(a,b){ea.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),
// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
da.optSelected||(ea.propHooks.selected={get:function(a){var b=a.parentNode;
// Make sure that it also works with optgroups, see #5701
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),ea.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ea.propFix[this.toLowerCase()]=this}),
// IE6/7 call enctype encoding
da.enctype||(ea.propFix.enctype="encoding");ea.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(ea.isFunction(a))return this.each(function(b){ea(this).addClass(a.call(this,b,this.className))});if(j)for(
// The disjunction here is for better compressibility (see removeClass)
b=(a||"").match(pa)||[];h<i;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(/[\t\r\n\f]/g," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");
// only assign if different to avoid unneeded rendering.
g=ea.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(ea.isFunction(a))return this.each(function(b){ea(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(pa)||[];h<i;h++)if(c=this[h],
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(/[\t\r\n\f]/g," "):"")){for(f=0;e=b[f++];)
// Remove *all* instances
for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");
// only assign if different to avoid unneeded rendering.
g=a?ea.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):ea.isFunction(a)?this.each(function(c){ea(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(
// toggle individual class names
var b,d=0,e=ea(this),f=a.match(pa)||[];b=f[d++];)
// check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b);else c!==ta&&"boolean"!==c||(this.className&&
// store className if set
ea._data(this,"__className__",this.className),
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||!1===a?"":ea._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;c<d;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(/[\t\r\n\f]/g," ").indexOf(b)>=0)return!0;return!1}}),
// Return jQuery for attributes-only inclusion
ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
// Handle event binding
ea.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ea.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wb=ea.now(),xb=/\?/;ea.parseJSON=function(b){
// Attempt to parse using the native JSON parser first
if(a.JSON&&a.JSON.parse)
// Support: Android 2.3
// Workaround failure to string-cast null input
return a.JSON.parse(b+"");var c,d=null,e=ea.trim(b+"");
// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
// after removing valid tokens
return e&&!ea.trim(e.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,function(a,b,e,f){
// Perform no more replacements after returning to outermost depth
// Force termination if we see a misplaced comma
// Perform no more replacements after returning to outermost depth
// Commas must not follow "[", "{", or ","
// Determine new depth
// array/object open ("[" or "{"): depth += true - false (increment)
// array/object close ("]" or "}"): depth += false - true (decrement)
// other cases ("," or primitive): depth += true - true (numeric cast)
return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():ea.error("Invalid JSON: "+b)},
// Cross-browser xml parsing
ea.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(// Standard
d=new DOMParser,c=d.parseFromString(b,"text/xml")):(// IE
c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(a){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||ea.error("Invalid XML: "+b),c};var
// Document location
yb,zb,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,// IE leaves an \r character at EOL
// #7653, #8125, #8152: local protocol detection
Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Fb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Gb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Hb="*/".concat("*");
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{zb=location.href}catch(a){
// Use the href attribute of an A element
// since IE will modify it given document.location
zb=la.createElement("a"),zb.href="",zb=zb.href}
// Segment location into parts
yb=Eb.exec(zb.toLowerCase())||[],ea.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Cb.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":ea.parseJSON,
// Parse text as xml
"text xml":ea.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?P(P(a,ea.ajaxSettings),b):P(ea.ajaxSettings,a)},ajaxPrefilter:N(Fb),ajaxTransport:N(Gb),
// Main method
ajax:function(a,b){
// Callback for when everything is done
function c(a,b,c,d){var e,k,r,s,u,w=b;
// Called once
2!==t&&(
// State is "done" now
t=2,
// Clear timeout if it exists
h&&clearTimeout(h),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
j=void 0,
// Cache response headers
g=d||"",
// Set readyState
v.readyState=a>0?4:0,
// Determine if successful
e=a>=200&&a<300||304===a,
// Get response data
c&&(s=Q(l,v,c)),
// Convert no matter what (that way responseXXX fields are always set)
s=R(l,s,v,e),
// If successful, handle type chaining
e?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(ea.lastModified[f]=u),(u=v.getResponseHeader("etag"))&&(ea.etag[f]=u)),
// if no content
204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,e=!r)):(
// We extract error from statusText
// then normalize statusText and status for non-aborts
r=w,!a&&w||(w="error",a<0&&(a=0))),
// Set data for the fake xhr object
v.status=a,v.statusText=(b||w)+"",
// Success/Error
e?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),
// Status-dependent callbacks
v.statusCode(q),q=void 0,i&&n.trigger(e?"ajaxSuccess":"ajaxError",[v,l,e?k:r]),
// Complete
p.fireWith(m,[v,w]),i&&(n.trigger("ajaxComplete",[v,l]),
// Handle the global AJAX counter
--ea.active||ea.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof a&&(b=a,a=void 0),
// Force options to be an object
b=b||{};var// Cross-domain detection vars
d,
// Loop variable
e,
// URL without anti-cache param
f,
// Response headers as string
g,
// timeout handle
h,
// To know if global events are to be dispatched
i,j,
// Response headers
k,
// Create the final options object
l=ea.ajaxSetup({},b),
// Callbacks context
m=l.context||l,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
n=l.context&&(m.nodeType||m.jquery)?ea(m):ea.event,
// Deferreds
o=ea.Deferred(),p=ea.Callbacks("once memory"),
// Status-dependent callbacks
q=l.statusCode||{},
// Headers (they are sent all at once)
r={},s={},
// The jqXHR state
t=0,
// Default abort message
u="canceled",
// Fake xhr
v={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(2===t){if(!k)for(k={};b=Bb.exec(g);)k[b[1].toLowerCase()]=b[2];b=k[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return 2===t?g:null},
// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return t||(l.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(t<2)for(b in a)
// Lazy-add the new callback in a way that preserves old ones
q[b]=[q[b],a[b]];else
// Execute the appropriate callbacks
v.always(a[v.status]);return this},
// Cancel the request
abort:function(a){var b=a||u;return j&&j.abort(b),c(0,b),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
l.url=((a||l.url||zb)+"").replace(/#.*$/,"").replace(/^\/\//,yb[1]+"//"),
// Alias method option to type as per ticket #12004
l.type=b.method||b.type||l.method||l.type,
// Extract dataTypes list
l.dataTypes=ea.trim(l.dataType||"*").toLowerCase().match(pa)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==l.crossDomain&&(d=Eb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===yb[1]&&d[2]===yb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),
// Convert data if not already a string
l.data&&l.processData&&"string"!=typeof l.data&&(l.data=ea.param(l.data,l.traditional)),
// Apply prefilters
O(Fb,l,b,v),2===t)return v;
// We can fire global events as of now if asked to
i=l.global,
// Watch for a new set of requests
i&&0==ea.active++&&ea.event.trigger("ajaxStart"),
// Uppercase the type
l.type=l.type.toUpperCase(),
// Determine if request has content
l.hasContent=!Db.test(l.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
f=l.url,
// More options handling for requests with no content
l.hasContent||(
// If data is available, append data to url
l.data&&(f=l.url+=(xb.test(f)?"&":"?")+l.data,
// #9682: remove data so that it's not used in an eventual retry
delete l.data),
// Add anti-cache in url if needed
!1===l.cache&&(l.url=Ab.test(f)?
// If there is already a '_' parameter, set its value
f.replace(Ab,"$1_="+wb++):
// Otherwise add one to the end
f+(xb.test(f)?"&":"?")+"_="+wb++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
l.ifModified&&(ea.lastModified[f]&&v.setRequestHeader("If-Modified-Since",ea.lastModified[f]),ea.etag[f]&&v.setRequestHeader("If-None-Match",ea.etag[f])),
// Set the correct header, if data is being sent
(l.data&&l.hasContent&&!1!==l.contentType||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),
// Set the Accepts header for the server, depending on the dataType
v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Hb+"; q=0.01":""):l.accepts["*"]);
// Check for headers option
for(e in l.headers)v.setRequestHeader(e,l.headers[e]);
// Allow custom headers/mimetypes and early abort
if(l.beforeSend&&(!1===l.beforeSend.call(m,v,l)||2===t))
// Abort if not done already and return
return v.abort();
// aborting is no longer a cancellation
u="abort";
// Install callbacks on deferreds
for(e in{success:1,error:1,complete:1})v[e](l[e]);
// If no transport, we auto-abort
if(
// Get transport
j=O(Gb,l,b,v)){v.readyState=1,
// Send global event
i&&n.trigger("ajaxSend",[v,l]),
// Timeout
l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,j.send(r,c)}catch(a){
// Propagate exception as error if not done
if(!(t<2))throw a;c(-1,a)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return ea.get(a,b,c,"json")},getScript:function(a,b){return ea.get(a,void 0,b,"script")}}),ea.each(["get","post"],function(a,b){ea[b]=function(a,c,d,e){
// shift arguments if data argument was omitted
return ea.isFunction(c)&&(e=e||d,d=c,c=void 0),ea.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),
// Attach a bunch of functions for handling common AJAX events
ea.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ea.fn[b]=function(a){return this.on(b,a)}}),ea._evalUrl=function(a){return ea.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},ea.fn.extend({wrapAll:function(a){if(ea.isFunction(a))return this.each(function(b){ea(this).wrapAll(a.call(this,b))});if(this[0]){
// The elements to wrap the target around
var b=ea(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return ea.isFunction(a)?this.each(function(b){ea(this).wrapInner(a.call(this,b))}):this.each(function(){var b=ea(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ea.isFunction(a);return this.each(function(c){ea(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){ea.nodeName(this,"body")||ea(this).replaceWith(this.childNodes)}).end()}}),ea.expr.filters.hidden=function(a){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return a.offsetWidth<=0&&a.offsetHeight<=0||!da.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||ea.css(a,"display"))},ea.expr.filters.visible=function(a){return!ea.expr.filters.hidden(a)};var Ib=/\[\]$/,Jb=/^(?:submit|button|image|reset|file)$/i,Kb=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
ea.param=function(a,b){var c,d=[],e=function(a,b){
// If value is a function, invoke it and return its value
b=ea.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===b&&(b=ea.ajaxSettings&&ea.ajaxSettings.traditional),ea.isArray(a)||a.jquery&&!ea.isPlainObject(a))
// Serialize the form elements
ea.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)S(c,a[c],b,e);
// Return the resulting serialization
return d.join("&").replace(/%20/g,"+")},ea.fn.extend({serialize:function(){return ea.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=ea.prop(this,"elements");return a?ea.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is(":disabled") so that fieldset[disabled] works
return this.name&&!ea(this).is(":disabled")&&Kb.test(this.nodeName)&&!Jb.test(a)&&(this.checked||!Aa.test(a))}).map(function(a,b){var c=ea(this).val();return null==c?null:ea.isArray(c)?ea.map(c,function(a){return{name:b.name,value:a.replace(/\r?\n/g,"\r\n")}}):{name:b.name,value:c.replace(/\r?\n/g,"\r\n")}}).get()}}),
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
ea.ajaxSettings.xhr=void 0!==a.ActiveXObject?
// Support: IE6+
function(){
// XHR cannot access local files, always use ActiveX for that case
// Support: IE7-8
// oldIE XHR does not support non-RFC2616 methods (#13240)
// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
// Although this check for six methods instead of eight
// since IE also does not support "trace" and "connect"
return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&T()||U()}:
// For all other browsers, use the standard XMLHttpRequest object
T;var Lb=0,Mb={},Nb=ea.ajaxSettings.xhr();
// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
a.ActiveXObject&&ea(a).on("unload",function(){for(var a in Mb)Mb[a](void 0,!0)}),
// Determine support properties
da.cors=!!Nb&&"withCredentials"in Nb,Nb=da.ajax=!!Nb,
// Create transport if the browser can provide an xhr
Nb&&ea.ajaxTransport(function(a){
// Cross domain only allowed if supported through XMLHttpRequest
if(!a.crossDomain||da.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Lb;
// Apply custom fields if provided
if(
// Open the socket
f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];
// Override mime type if needed
a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(e in c)
// Support: IE<9
// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
// request header to a null-value.
//
// To keep consistent with other XHR implementations, cast the value
// to string and ignore `undefined`.
void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
f.send(a.hasContent&&a.data||null),
// Listener
b=function(c,e){var h,i,j;
// Was never called and is aborted or complete
if(b&&(e||4===f.readyState))
// Abort manually if needed
if(
// Clean up
delete Mb[g],b=void 0,f.onreadystatechange=ea.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,
// Support: IE<10
// Accessing binary-data responseText throws an exception
// (#11426)
"string"==typeof f.responseText&&(j.text=f.responseText);
// Firefox throws an exception when accessing
// statusText for faulty cross-domain requests
try{i=f.statusText}catch(a){
// We normalize with Webkit giving an empty statusText
i=""}
// Filter status for non standard behaviors
// If the request is local and we have data: assume a success
// (success with no data won't get notified, that's the best we
// can do given current implementations)
h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}
// Call complete if needed
j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?
// (IE6 & IE7) if it's in cache and has been
// retrieved directly we need to fire the callback
setTimeout(b):
// Add to the list of active xhr callbacks
f.onreadystatechange=Mb[g]=b:
// if we're in sync mode we fire the callback
b()},abort:function(){b&&b(void 0,!0)}}}}),
// Install script dataType
ea.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return ea.globalEval(a),a}}}),
// Handle cache's special case and global
ea.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),
// Bind script tag hack transport
ea.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var b,c=la.head||ea("head")[0]||la.documentElement;return{send:function(d,e){b=la.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,
// Attach handlers for all browsers
b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(
// Handle memory leak in IE
b.onload=b.onreadystatechange=null,
// Remove the script
b.parentNode&&b.parentNode.removeChild(b),
// Dereference the script
b=null,
// Callback if not abort
c||e(200,"success"))},
// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
// Use native DOM manipulation to avoid our domManip AJAX trickery
c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var Ob=[],Pb=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ea.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ob.pop()||ea.expando+"_"+wb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
ea.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(Pb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pb.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(h||"jsonp"===b.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return e=b.jsonpCallback=ea.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Pb,"$1"+e):!1!==b.jsonp&&(b.url+=(xb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||ea.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){
// Restore preexisting value
a[e]=f,
// Save back as free
b[e]&&(
// make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback,
// save the callback name for future use
Ob.push(e)),
// Call if it was a function and we have a response
g&&ea.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
ea.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||la;var d=ia.exec(a),e=!c&&[];
// Single tag
// Single tag
return d?[b.createElement(d[1])]:(d=ea.buildFragment([a],b,e),e&&e.length&&ea(e).remove(),ea.merge([],d.childNodes))};
// Keep a copy of the old load method
var Qb=ea.fn.load;/**
 * Load a url into a page
 */
ea.fn.load=function(a,b,c){if("string"!=typeof a&&Qb)return Qb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),ea.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&ea.ajax({url:a,
// if "type" variable is undefined, then "GET" method will be used
type:f,dataType:"html",data:b}).done(function(a){
// Save response for use in complete callback
e=arguments,g.html(d?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ea("<div>").append(ea.parseHTML(a)).find(d):
// Otherwise use the full result
a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},ea.expr.filters.animated=function(a){return ea.grep(ea.timers,function(b){return a===b.elem}).length};var Rb=a.document.documentElement;ea.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=ea.css(a,"position"),l=ea(a),m={};
// set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=ea.css(a,"top"),i=ea.css(a,"left"),j=("absolute"===k||"fixed"===k)&&ea.inArray("auto",[f,i])>-1,
// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),ea.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},ea.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){ea.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return b=f.documentElement,ea.contains(b,e)?(typeof e.getBoundingClientRect!==ta&&(d=e.getBoundingClientRect()),c=V(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
// Subtract parent offsets and element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
// we assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===ea.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ea.nodeName(a[0],"html")||(c=a.offset()),c.top+=ea.css(a[0],"borderTopWidth",!0),c.left+=ea.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-ea.css(d,"marginTop",!0),left:b.left-c.left-ea.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Rb;a&&!ea.nodeName(a,"html")&&"static"===ea.css(a,"position");)a=a.offsetParent;return a||Rb})}}),
// Create scrollLeft and scrollTop methods
ea.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);ea.fn[a]=function(d){return za(this,function(a,d,e){var f=V(a);if(void 0===e)return f?b in f?f[b]:f.document.documentElement[d]:a[d];f?f.scrollTo(c?ea(f).scrollLeft():e,c?e:ea(f).scrollTop()):a[d]=e},a,d,arguments.length,null)}}),
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
ea.each(["top","left"],function(a,b){ea.cssHooks[b]=A(da.pixelPosition,function(a,c){if(c)
// if curCSS returns percentage, fallback to offset
return c=Xa(a,b),Za.test(c)?ea(a).position()[b]+"px":c})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ea.each({Height:"height",Width:"width"},function(a,b){ea.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// margin is only for outerHeight, outerWidth
ea.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border");return za(this,function(b,c,d){var e;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return ea.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?ea.css(b,c,g):ea.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),
// The number of elements contained in the matched element set
ea.fn.size=function(){return this.length},ea.fn.andSelf=ea.fn.addBack,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
"function"==typeof define&&define.amd&&define("jquery",[],function(){return ea});var
// Map over jQuery in case of overwrite
Sb=a.jQuery,
// Map over the $ in case of overwrite
Tb=a.$;
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return ea.noConflict=function(b){return a.$===ea&&(a.$=Tb),b&&a.jQuery===ea&&(a.jQuery=Sb),ea},typeof b===ta&&(a.jQuery=a.$=ea),ea});
/*! grunt 最后修改于： 2017-04-08 */