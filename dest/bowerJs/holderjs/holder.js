/*! grunt-0.0.1.js 压缩于：2017-04-08 11:10 */

/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(a){if(a.document){var b=a.document;
//https://github.com/inexorabletash/polyfill/blob/master/web.js
b.querySelectorAll||(b.querySelectorAll=function(c){var d,e=b.createElement("style"),f=[];for(b.documentElement.firstChild.appendChild(e),b._qsa=[],e.styleSheet.cssText=c+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",a.scrollBy(0,0),e.parentNode.removeChild(e);b._qsa.length;)d=b._qsa.shift(),d.style.removeAttribute("x-qsa"),f.push(d);return b._qsa=null,f}),b.querySelector||(b.querySelector=function(a){var c=b.querySelectorAll(a);return c.length?c[0]:null}),b.getElementsByClassName||(b.getElementsByClassName=function(a){return a=String(a).replace(/^|\s+/g,"."),b.querySelectorAll(a)}),
//https://github.com/inexorabletash/polyfill
// ES5 15.2.3.14 Object.keys ( O )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
Object.keys||(Object.keys=function(a){if(a!==Object(a))throw TypeError("Object.keys called on non-object");var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c}),
// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
Array.prototype.forEach||(Array.prototype.forEach=function(a){if(void 0===this||null===this)throw TypeError();var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw TypeError();var d,e=arguments[1];for(d=0;d<c;d++)d in b&&a.call(e,b[d],d,b)}),
//https://github.com/inexorabletash/polyfill/blob/master/web.js
function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.atob=a.atob||function(a){a=String(a);var c,d=0,e=[],f=0,g=0;if(a=a.replace(/\s/g,""),a.length%4==0&&(a=a.replace(/=+$/,"")),a.length%4==1)throw Error("InvalidCharacterError");if(/[^+\/0-9A-Za-z]/.test(a))throw Error("InvalidCharacterError");for(;d<a.length;)c=b.indexOf(a.charAt(d)),f=f<<6|c,g+=6,24===g&&(e.push(String.fromCharCode(f>>16&255)),e.push(String.fromCharCode(f>>8&255)),e.push(String.fromCharCode(255&f)),g=0,f=0),d+=1;return 12===g?(f>>=4,e.push(String.fromCharCode(255&f))):18===g&&(f>>=2,e.push(String.fromCharCode(f>>8&255)),e.push(String.fromCharCode(255&f))),e.join("")},a.btoa=a.btoa||function(a){a=String(a);var c,d,e,f,g,h,i,j=0,k=[];if(/[^\x00-\xFF]/.test(a))throw Error("InvalidCharacterError");for(;j<a.length;)c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=a.charCodeAt(j++),
// 111111 112222 222233 333333
f=c>>2,g=(3&c)<<4|d>>4,h=(15&d)<<2|e>>6,i=63&e,j===a.length+2?(h=64,i=64):j===a.length+1&&(i=64),k.push(b.charAt(f),b.charAt(g),b.charAt(h),b.charAt(i));return k.join("")}}(a),
//https://gist.github.com/jimeh/332357
Object.prototype.hasOwnProperty||(/*jshint -W001, -W103 */
Object.prototype.hasOwnProperty=function(a){var b=this.__proto__||this.constructor.prototype;return a in this&&(!(a in b)||b[a]!==this[a])}),
// @license http://opensource.org/licenses/MIT
// copyright Paul Irish 2015
// Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
//   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values
// if you want values similar to what you'd get with real perf.now, place this towards the head of the page
// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed
function(){if("performance"in a==!1&&(a.performance={}),Date.now=Date.now||function(){// thanks IE8
return(new Date).getTime()},"now"in a.performance==!1){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),a.performance.now=function(){return Date.now()-b}}}(),
//requestAnimationFrame polyfill for older Firefox/Chrome versions
a.requestAnimationFrame||(a.webkitRequestAnimationFrame&&a.webkitCancelAnimationFrame?
//https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/requestAnimationFrame/polyfill-webkit.js
function(a){a.requestAnimationFrame=function(b){return webkitRequestAnimationFrame(function(){b(a.performance.now())})},a.cancelAnimationFrame=a.webkitCancelAnimationFrame}(a):a.mozRequestAnimationFrame&&a.mozCancelAnimationFrame?
//https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/requestAnimationFrame/polyfill-moz.js
function(a){a.requestAnimationFrame=function(b){return mozRequestAnimationFrame(function(){b(a.performance.now())})},a.cancelAnimationFrame=a.mozCancelAnimationFrame}(a):function(a){a.requestAnimationFrame=function(b){return a.setTimeout(b,1e3/60)},a.cancelAnimationFrame=a.clearTimeout}(a))}}(this),function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Holder=b():a.Holder=b()}(this,function(){/******/
return function(a){/******/
// The require function
/******/
function b(d){/******/
// Check if module is in cache
/******/
if(c[d])/******/
return c[d].exports;/******/
// Create a new module (and put it into the cache)
/******/
var e=c[d]={/******/
exports:{},/******/
id:d,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}// webpackBootstrap
/******/
// The module cache
/******/
var c={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return b.m=a,b.c=c,b.p="",b(0)}([/* 0 */
/***/
function(a,b,c){/*
	Holder.js - client side image placeholders
	(c) 2012-2015 Ivan Malopinsky - http://imsky.co
	*/
a.exports=c(1)},/* 1 */
/***/
function(a,b,c){/* WEBPACK VAR INJECTION */
(function(b){/**
	 * Processes provided source attribute and sets up the appropriate rendering workflow
	 *
	 * @private
	 * @param options Instance options from Holder.run
	 * @param renderSettings Instance configuration
	 * @param src Image URL
	 * @param el Image DOM element
	 */
function d(a,b,c,d){var g=e(c.substr(c.lastIndexOf(a.domain)),a);g&&f({mode:null,el:d,flags:g,engineSettings:b})}/**
	 * Processes a Holder URL and extracts configuration from query string
	 *
	 * @private
	 * @param url URL
	 * @param instanceOptions Instance options from Holder.run
	 */
function e(a,b){var c={theme:z(D.settings.themes.gray,null),stylesheets:b.stylesheets,instanceOptions:b},d=a.indexOf("?"),e=[a];-1!==d&&(e=[a.slice(0,d),a.slice(d+1)]);var f=e[0].split("/");c.holderURL=a;var g=f[1],h=g.match(/([\d]+p?)x([\d]+p?)/);if(!h)return!1;if(c.fluid=-1!==g.indexOf("p"),c.dimensions={width:h[1].replace("p","%"),height:h[2].replace("p","%")},2===e.length){var i=q.parse(e[1]);
// Dimensions
if(s.truthy(i.ratio)){c.fluid=!0;var j=parseFloat(c.dimensions.width.replace("%","")),k=parseFloat(c.dimensions.height.replace("%",""));k=Math.floor(k/j*100),j=100,c.dimensions.width=j+"%",c.dimensions.height=k+"%"}if(c.auto=s.truthy(i.auto),
// Colors
i.bg&&(c.theme.bg=s.parseColor(i.bg)),i.fg&&(c.theme.fg=s.parseColor(i.fg)),
//todo: add automatic foreground to themes without foreground
i.bg&&!i.fg&&(c.autoFg=!0),i.theme&&c.instanceOptions.themes.hasOwnProperty(i.theme)&&(c.theme=z(c.instanceOptions.themes[i.theme],null)),
// Text
i.text&&(c.text=i.text),i.textmode&&(c.textmode=i.textmode),i.size&&(c.size=i.size),i.font&&(c.font=i.font),i.align&&(c.align=i.align),i.lineWrap&&(c.lineWrap=i.lineWrap),c.nowrap=s.truthy(i.nowrap),
// Miscellaneous
c.outline=s.truthy(i.outline),s.truthy(i.random)){D.vars.cache.themeKeys=D.vars.cache.themeKeys||Object.keys(c.instanceOptions.themes);var l=D.vars.cache.themeKeys[0|Math.random()*D.vars.cache.themeKeys.length];c.theme=z(c.instanceOptions.themes[l],null)}}return c}/**
	 * Modifies the DOM to fit placeholders and sets up resizable image callbacks (for fluid and automatically sized placeholders)
	 *
	 * @private
	 * @param settings DOM prep settings
	 */
function f(a){var b=a.mode,c=a.el,d=a.flags,e=a.engineSettings,f=d.dimensions,h=d.theme,i=f.width+"x"+f.height;b=null==b?d.fluid?"fluid":"image":b;if(null!=d.text&&(h.text=d.text,"object"===c.nodeName.toLowerCase())){for(var l=h.text.split("\\n"),m=0;m<l.length;m++)l[m]=s.encodeHtmlEntity(l[m]);h.text=l.join("\\n")}if(h.text){var n=h.text.match(/holder_([a-z]+)/g);null!==n&&
//todo: optimize template replacement
n.forEach(function(a){"holder_dimensions"===a&&(h.text=h.text.replace(a,i))})}var o=d.holderURL,p=z(e,null);if(d.font&&(/*
	        If external fonts are used in a <img> placeholder rendered with SVG, Holder falls back to canvas.

	        This is done because Firefox and Chrome disallow embedded SVGs from referencing external assets.
	        The workaround is either to change the placeholder tag from <img> to <object> or to use the canvas renderer.
	        */
h.font=d.font,!p.noFontFallback&&"img"===c.nodeName.toLowerCase()&&D.setup.supportsCanvas&&"svg"===p.renderer&&(p=z(p,{renderer:"canvas"}))),
//Chrome and Opera require a quick 10ms re-render if web fonts are used with canvas
d.font&&"canvas"==p.renderer&&(p.reRender=!0),"background"==b)null==c.getAttribute("data-background-src")&&u.setAttr(c,{"data-background-src":o});else{var q={};q[D.vars.dataAttr]=o,u.setAttr(c,q)}d.theme=h,
//todo consider using all renderSettings in holderData
c.holderData={flags:d,engineSettings:p},"image"!=b&&"fluid"!=b||u.setAttr(c,{alt:h.text?h.text+" ["+i+"]":i});var r={mode:b,el:c,holderSettings:{dimensions:f,theme:h,flags:d},engineSettings:p};"image"==b?(d.auto||(c.style.width=f.width+"px",c.style.height=f.height+"px"),"html"==p.renderer?c.style.backgroundColor=h.bg:(g(r),"exact"==d.textmode&&(c.holderData.resizeUpdate=!0,D.vars.resizableImages.push(c),j(c)))):"background"==b&&"html"!=p.renderer?g(r):"fluid"==b&&(c.holderData.resizeUpdate=!0,"%"==f.height.slice(-1)?c.style.height=f.height:null!=d.auto&&d.auto||(c.style.height=f.height+"px"),"%"==f.width.slice(-1)?c.style.width=f.width:null!=d.auto&&d.auto||(c.style.width=f.width+"px"),"inline"!=c.style.display&&""!==c.style.display&&"none"!=c.style.display||(c.style.display="block"),k(c),"html"==p.renderer?c.style.backgroundColor=h.bg:(D.vars.resizableImages.push(c),j(c)))}/**
	 * Core function that takes output from renderers and sets it as the source or background-image of the target element
	 *
	 * @private
	 * @param renderSettings Renderer settings
	 */
function g(a){function c(){var b=null;switch(i.renderer){case"canvas":b=y(k,a);break;case"svg":b=x(k,a);break;default:throw"Holder: invalid renderer: "+i.renderer}return b}var d=null,e=a.mode,f=a.el,g=a.holderSettings,i=a.engineSettings;switch(i.renderer){case"svg":if(!D.setup.supportsSVG)return;break;case"canvas":if(!D.setup.supportsCanvas)return;break;default:return}
//todo: move generation of scene up to flag generation to reduce extra object creation
var j={width:g.dimensions.width,height:g.dimensions.height,theme:g.theme,flags:g.flags},k=h(j);if(null==(d=c()))throw"Holder: couldn't render placeholder";
//todo: add <object> canvas rendering
"background"==e?(f.style.backgroundImage="url("+d+")",i.noBackgroundSize||(f.style.backgroundSize=j.width+"px "+j.height+"px")):("img"===f.nodeName.toLowerCase()?u.setAttr(f,{src:d}):"object"===f.nodeName.toLowerCase()&&u.setAttr(f,{data:d,type:"image/svg+xml"}),i.reRender&&b.setTimeout(function(){var a=c();if(null==a)throw"Holder: couldn't render placeholder";
//todo: refactor this code into a function
"img"===f.nodeName.toLowerCase()?u.setAttr(f,{src:a}):"object"===f.nodeName.toLowerCase()&&u.setAttr(f,{data:a,type:"image/svg+xml"})},150)),
//todo: account for re-rendering
u.setAttr(f,{"data-holder-rendered":!0})}/**
	 * Core function that takes a Holder scene description and builds a scene graph
	 *
	 * @private
	 * @param scene Holder scene object
	 */
//todo: make this function reusable
//todo: merge app defaults and setup properties into the scene argument
function h(a){function b(a,b,c,d){b.width=c,b.height=d,a.width=Math.max(a.width,b.width),a.height+=b.height}var c=D.defaults.size;switch(parseFloat(a.theme.size)?c=a.theme.size:parseFloat(a.flags.size)&&(c=a.flags.size),a.font={family:a.theme.font?a.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:i(a.width,a.height,c,D.defaults.scale),units:a.theme.units?a.theme.units:D.defaults.units,weight:a.theme.fontweight?a.theme.fontweight:"bold"},a.text=a.theme.text||Math.floor(a.width)+"x"+Math.floor(a.height),a.noWrap=a.theme.nowrap||a.flags.nowrap,a.align=a.theme.align||a.flags.align||"center",a.flags.textmode){case"literal":a.text=a.flags.dimensions.width+"x"+a.flags.dimensions.height;break;case"exact":if(!a.flags.exactDimensions)break;a.text=Math.floor(a.flags.exactDimensions.width)+"x"+Math.floor(a.flags.exactDimensions.height)}var d=a.flags.lineWrap||D.setup.lineWrapRatio,e=a.width*d,f=e,g=new r({width:a.width,height:a.height}),h=g.Shape,j=new h.Rect("holderBg",{fill:a.theme.bg});if(j.resize(a.width,a.height),g.root.add(j),a.flags.outline){var k=new v(j.properties.fill);k=k.lighten(k.lighterThan("7f7f7f")?-.1:.1),j.properties.outline={fill:k.toHex(!0),width:2}}var l=a.theme.fg;if(a.flags.autoFg){var m=new v(j.properties.fill),n=new v("fff"),o=new v("000",{alpha:.285714});l=m.blendAlpha(m.lighterThan("7f7f7f")?o:n).toHex(!0)}var p=new h.Group("holderTextGroup",{text:a.text,align:a.align,font:a.font,fill:l});p.moveTo(null,null,1),g.root.add(p);var q=p.textPositionData=E(g);if(!q)throw"Holder: staging fallback not supported yet.";p.properties.leading=q.boundingBox.height;var s=null,t=null;if(q.lineCount>1){var u,w=0,x=0,y=0;t=new h.Group("line"+y),
//Double margin so that left/right-aligned next is not flush with edge of image
"left"!==a.align&&"right"!==a.align||(f=a.width*(1-2*(1-d)));for(var z=0;z<q.words.length;z++){var A=q.words[z];s=new h.Text(A.text);var B="\\n"==A.text;!a.noWrap&&(w+A.width>=f||!0===B)&&(b(p,t,w,p.properties.leading),p.add(t),w=0,x+=p.properties.leading,y+=1,t=new h.Group("line"+y),t.y=x),!0!==B&&(s.moveTo(w,0),w+=q.spaceWidth+A.width,t.add(s))}if(b(p,t,w,p.properties.leading),p.add(t),"left"===a.align)p.moveTo(a.width-e,null,null);else if("right"===a.align){for(u in p.children)t=p.children[u],t.moveTo(a.width-t.width,null,null);p.moveTo(0-(a.width-e),null,null)}else{for(u in p.children)t=p.children[u],t.moveTo((p.width-t.width)/2,null,null);p.moveTo((a.width-p.width)/2,null,null)}p.moveTo(null,(a.height-p.height)/2,null),
//If the text exceeds vertical space, move it down so the first line is visible
(a.height-p.height)/2<0&&p.moveTo(null,0,null)}else s=new h.Text(a.text),t=new h.Group("line0"),t.add(s),p.add(t),"left"===a.align?p.moveTo(a.width-e,null,null):"right"===a.align?p.moveTo(0-(a.width-e),null,null):p.moveTo((a.width-q.boundingBox.width)/2,null,null),p.moveTo(null,(a.height-q.boundingBox.height)/2,null);
//todo: renderlist
return g}/**
	 * Adaptive text sizing function
	 *
	 * @private
	 * @param width Parent width
	 * @param height Parent height
	 * @param fontSize Requested text size
	 * @param scale Proportional scale of text
	 */
function i(a,b,c,d){var e=parseInt(a,10),f=parseInt(b,10),g=Math.max(e,f),h=Math.min(e,f),i=.8*Math.min(h,g*d);return Math.round(Math.max(c,i))}/**
	 * Iterates over resizable (fluid or auto) placeholders and renders them
	 *
	 * @private
	 * @param element Optional element selector, specified only if a specific element needs to be re-rendered
	 */
function j(a){var b;b=null==a||null==a.nodeType?D.vars.resizableImages:[a];for(var c=0,d=b.length;c<d;c++){var e=b[c];if(e.holderData){var f=e.holderData.flags,h=A(e);if(h){if(!e.holderData.resizeUpdate)continue;if(f.fluid&&f.auto){var i=e.holderData.fluidConfig;switch(i.mode){case"width":h.height=h.width/i.ratio;break;case"height":h.width=h.height*i.ratio}}var j={mode:"image",holderSettings:{dimensions:h,theme:f.theme,flags:f},el:e,engineSettings:e.holderData.engineSettings};"exact"==f.textmode&&(f.exactDimensions=h,j.holderSettings.dimensions=f.dimensions),g(j)}else m(e)}}}/**
	 * Sets up aspect ratio metadata for fluid placeholders, in order to preserve proportions when resizing
	 *
	 * @private
	 * @param el Image DOM element
	 */
function k(a){if(a.holderData){var b=A(a);if(b){var c=a.holderData.flags,d={fluidHeight:"%"==c.dimensions.height.slice(-1),fluidWidth:"%"==c.dimensions.width.slice(-1),mode:null,initialDimensions:b};d.fluidWidth&&!d.fluidHeight?(d.mode="width",d.ratio=d.initialDimensions.width/parseFloat(c.dimensions.height)):!d.fluidWidth&&d.fluidHeight&&(d.mode="height",d.ratio=parseFloat(c.dimensions.width)/d.initialDimensions.height),a.holderData.fluidConfig=d}else m(a)}}/**
	 * Iterates through all current invisible images, and if they're visible, renders them and removes them from further checks. Runs every animation frame.
	 *
	 * @private
	 */
function l(){var a,c=[],d=Object.keys(D.vars.invisibleImages);d.forEach(function(b){a=D.vars.invisibleImages[b],A(a)&&"img"==a.nodeName.toLowerCase()&&(c.push(a),delete D.vars.invisibleImages[b])}),c.length&&C.run({images:c}),
// Done to prevent 100% CPU usage via aggressive calling of requestAnimationFrame
setTimeout(function(){b.requestAnimationFrame(l)},10)}/**
	 * Sets a unique ID for an image detected to be invisible and adds it to the map of invisible images checked by visibilityCheck
	 *
	 * @private
	 * @param el Invisible DOM element
	 */
function m(a){a.holderData.invisibleId||(D.vars.invisibleId+=1,D.vars.invisibleImages["i"+D.vars.invisibleId]=a,a.holderData.invisibleId=D.vars.invisibleId)}
//Helpers
/**
	 * Prevents a function from being called too often, waits until a timer elapses to call it again
	 *
	 * @param fn Function to call
	 */
function n(a){D.vars.debounceTimer||a.call(this),D.vars.debounceTimer&&b.clearTimeout(D.vars.debounceTimer),D.vars.debounceTimer=b.setTimeout(function(){D.vars.debounceTimer=null,a.call(this)},D.setup.debounce)}/**
	 * Holder-specific resize/orientation change callback, debounced to prevent excessive execution
	 */
function o(){n(function(){j(null)})}/*
	Holder.js - client side image placeholders
	(c) 2012-2016 Ivan Malopinsky - http://imsky.co
	*/
//Libraries and functions
var p=c(2),q=c(3),r=c(6),s=c(7),t=c(8),u=c(9),v=c(10),w=c(11),x=c(12),y=c(15),z=s.extend,A=s.dimensionCheck,B=w.svg_ns,C={version:w.version,/**
	     * Adds a theme to default settings
	     *
	     * @param {string} name Theme name
	     * @param {Object} theme Theme object, with foreground, background, size, font, and fontweight properties.
	     */
addTheme:function(a,b){return null!=a&&null!=b&&(D.settings.themes[a]=b),delete D.vars.cache.themeKeys,this},/**
	     * Appends a placeholder to an element
	     *
	     * @param {string} src Placeholder URL string
	     * @param el A selector or a reference to a DOM node
	     */
addImage:function(a,b){return u.getNodeArray(b).forEach(function(b){var c=u.newEl("img"),d={};d[D.setup.dataAttr]=a,u.setAttr(c,d),b.appendChild(c)}),this},/**
	     * Sets whether or not an image is updated on resize.
	     * If an image is set to be updated, it is immediately rendered.
	     *
	     * @param {Object} el Image DOM element
	     * @param {Boolean} value Resizable update flag value
	     */
setResizeUpdate:function(a,b){a.holderData&&(a.holderData.resizeUpdate=!!b,a.holderData.resizeUpdate&&j(a))},/**
	     * Runs Holder with options. By default runs Holder on all images with "holder.js" in their source attributes.
	     *
	     * @param {Object} userOptions Options object, can contain domain, themes, images, and bgnodes properties
	     */
run:function(a){
//todo: split processing into separate queues
a=a||{};var c={},g=z(D.settings,a);D.vars.preempted=!0,D.vars.dataAttr=g.dataAttr||D.setup.dataAttr,c.renderer=g.renderer?g.renderer:D.setup.renderer,-1===D.setup.renderers.join(",").indexOf(c.renderer)&&(c.renderer=D.setup.supportsSVG?"svg":D.setup.supportsCanvas?"canvas":"html");var h=u.getNodeArray(g.images),i=u.getNodeArray(g.bgnodes),j=u.getNodeArray(g.stylenodes),k=u.getNodeArray(g.objects);return c.stylesheets=[],c.svgXMLStylesheet=!0,c.noFontFallback=!!g.noFontFallback,c.noBackgroundSize=!!g.noBackgroundSize,j.forEach(function(a){if(a.attributes.rel&&a.attributes.href&&"stylesheet"==a.attributes.rel.value){var b=a.attributes.href.value,d=u.newEl("a");d.href=b;var e=d.protocol+"//"+d.host+d.pathname+d.search;c.stylesheets.push(e)}}),i.forEach(function(a){
//Skip processing background nodes if getComputedStyle is unavailable, since only modern browsers would be able to use canvas or SVG to render to background
if(b.getComputedStyle){var d=b.getComputedStyle(a,null).getPropertyValue("background-image"),h=a.getAttribute("data-background-src"),i=h||d,j=null,k=g.domain+"/",l=i.indexOf(k);if(0===l)j=i;else if(1===l&&"?"===i[0])j=i.slice(1);else{var m=i.substr(l).match(/([^\"]*)"?\)/);if(null!==m)j=m[1];else if(0===i.indexOf("url("))throw"Holder: unable to parse background URL: "+i}if(j){var n=e(j,g);n&&f({mode:"background",el:a,flags:n,engineSettings:c})}}}),k.forEach(function(a){var b={};try{b.data=a.getAttribute("data"),b.dataSrc=a.getAttribute(D.vars.dataAttr)}catch(a){}var e=null!=b.data&&0===b.data.indexOf(g.domain),f=null!=b.dataSrc&&0===b.dataSrc.indexOf(g.domain);e?d(g,c,b.data,a):f&&d(g,c,b.dataSrc,a)}),h.forEach(function(a){var b={};try{b.src=a.getAttribute("src"),b.dataSrc=a.getAttribute(D.vars.dataAttr),b.rendered=a.getAttribute("data-holder-rendered")}catch(a){}var e=null!=b.src,f=null!=b.dataSrc&&0===b.dataSrc.indexOf(g.domain),h=null!=b.rendered&&"true"==b.rendered;e?0===b.src.indexOf(g.domain)?d(g,c,b.src,a):f&&(
//Image has a valid data-src and an invalid src
h?
//If the placeholder has already been render, re-render it
d(g,c,b.dataSrc,a):
//If the placeholder has not been rendered, check if the image exists and render a fallback if it doesn't
function(a,b,c,e,f){s.imageExists(a,function(a){a||d(b,c,e,f)})}(b.src,g,c,b.dataSrc,a)):f&&d(g,c,b.dataSrc,a)}),this}},D={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",themes:{gray:{bg:"#EEEEEE",fg:"#AAAAAA"},social:{bg:"#3a5a97",fg:"#FFFFFF"},industrial:{bg:"#434A52",fg:"#C2F200"},sky:{bg:"#0D8FDB",fg:"#FFFFFF"},vine:{bg:"#39DBAC",fg:"#1E292C"},lava:{bg:"#F8591A",fg:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16}},E=function(){var a=null,b=null,c=null;return function(d){var e=d.root;if(D.setup.supportsSVG){var f=!1;null!=a&&a.parentNode===document.body||(f=!0),a=t.initSVG(a,e.properties.width,e.properties.height),
//Show staging element before staging
a.style.display="block",f&&(b=u.newEl("text",B),c=function(a){return document.createTextNode(a)}(null),u.setAttr(b,{x:0}),b.appendChild(c),a.appendChild(b),document.body.appendChild(a),a.style.visibility="hidden",a.style.position="absolute",a.style.top="-100%",a.style.left="-100%");var g=e.children.holderTextGroup,h=g.properties;u.setAttr(b,{y:h.font.size,style:s.cssProps({"font-weight":h.font.weight,"font-size":h.font.size+h.font.units,"font-family":h.font.family})}),
//Get bounding box for the whole string (total width and height)
c.nodeValue=h.text;var i=b.getBBox(),j=Math.ceil(i.width/e.properties.width),k=h.text.split(" "),l=h.text.match(/\\n/g);j+=null==l?0:l.length,
//Get bounding box for the string with spaces removed
c.nodeValue=h.text.replace(/[ ]+/g,"");var m=b.getComputedTextLength(),n=i.width-m,o=Math.round(n/Math.max(1,k.length-1)),p=[];if(j>1){c.nodeValue="";for(var q=0;q<k.length;q++)if(0!==k[q].length){c.nodeValue=s.decodeHtmlEntity(k[q]);var r=b.getBBox();p.push({text:k[q],width:r.width})}}
//Hide staging element after staging
return a.style.display="none",{spaceWidth:o,lineCount:j,boundingBox:i,words:p}}
//todo: canvas fallback for measuring text on android 2.3
return!1}}();
//Set up flags
for(var F in D.flags)D.flags.hasOwnProperty(F)&&(D.flags[F].match=function(a){return a.match(this.regex)});
//Properties set once on setup
D.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,dataAttr:"data-src",renderers:["html","canvas","svg"]},
//Properties modified during runtime
D.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{}},
//Pre-flight
function(){var a=u.newEl("canvas");a.getContext&&-1!=a.toDataURL("image/png").indexOf("data:image/png")&&(D.setup.renderer="canvas",D.setup.supportsCanvas=!0),document.createElementNS&&document.createElementNS(B,"svg").createSVGRect&&(D.setup.renderer="svg",D.setup.supportsSVG=!0)}(),
//Starts checking for invisible placeholders
/**
	 * Starts checking for invisible placeholders if not doing so yet. Does nothing otherwise.
	 *
	 * @private
	 */
function(){D.vars.visibilityCheckStarted||(b.requestAnimationFrame(l),D.vars.visibilityCheckStarted=!0)}(),p&&p(function(){D.vars.preempted||C.run(),b.addEventListener?(b.addEventListener("resize",o,!1),b.addEventListener("orientationchange",o,!1)):b.attachEvent("onresize",o),"object"==typeof b.Turbolinks&&b.document.addEventListener("page:change",function(){C.run()})}),a.exports=C}).call(b,function(){return this}())},/* 2 */
/***/
function(a,b){a.exports="undefined"!=typeof window&&/*!
	 * onDomReady.js 1.4.0 (c) 2013 Tubal Martin - MIT license
	 *
	 * Specially modified to work with Holder.js
	 */
function(a){
// Handle when the DOM is ready
function b(a){if(!t){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
if(!g.body)return e(b);
// Execute all callbacks
for(
// Remember that the DOM is ready
t=!0;a=u.shift();)e(a)}}
// The ready event handler
function c(a){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(r||a.type===i||g[m]===l)&&(d(),b())}
// Clean-up method for dom ready events
function d(){r?(g[q](o,c,j),a[q](i,c,j)):(g[n](p,c),a[n](k,c))}
// Defers a function, scheduling it to run after the current call stack has cleared.
function e(a,b){
// Allow 0 to be passed
setTimeout(a,+b>=0?b:1)}function f(a){
// If DOM is ready, execute the function (async), otherwise wait
t?e(a):u.push(a)}
//Lazy loading fix for Firefox < 3.6
//http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function a(){document.removeEventListener("DOMContentLoaded",a,!1),document.readyState="complete"},!1),document.readyState="loading");var g=a.document,h=g.documentElement,i="load",j=!1,k="on"+i,l="complete",m="readyState",n="detachEvent",o="DOMContentLoaded",p="onreadystatechange",q="removeEventListener",
// W3C Event model
r="addEventListener"in g,s=j,
// isReady: Is the DOM ready to be used? Set to true once it occurs.
t=j,
// Callbacks pending execution until DOM is ready
u=[];
// Attach the listeners:
// Catch cases where onDomReady is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
if(g[m]===l)
// Handle it asynchronously to allow scripts the opportunity to delay ready
e(b);else if(r)
// Use the handy event callback
g.addEventListener(o,c,j),
// A fallback to window.onload, that will always work
a.addEventListener(i,c,j);else{
// Ensure firing before onload, maybe late but safe also for iframes
g.attachEvent(p,c),
// A fallback to window.onload, that will always work
a.attachEvent(k,c);
// If IE and not a frame
// continually check to see if the document is ready
try{s=null==a.frameElement&&h}catch(a){}s&&s.doScroll&&function a(){if(!t){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
s.doScroll("left")}catch(b){return e(a,50)}
// detach all dom ready events
d(),
// and execute any waiting functions
b()}}()}
// Add version
// Add method to check if DOM is ready
return f.version="1.4.0",f.isReady=function(){return t},f}(window)},/* 3 */
/***/
function(a,b,c){
//Modified version of component/querystring
//Changes: updated dependencies, dot notation parsing, JSHint fixes
//Fork at https://github.com/imsky/querystring
/**
	 * Module dependencies.
	 */
var d=encodeURIComponent,e=decodeURIComponent,f=c(4),g=c(5),h=/(\w+)\[(\d+)\]/,i=/\w+\.\w+/;/**
	 * Parse the given query `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api public
	 */
b.parse=function(a){if("string"!=typeof a)return{};if(""===(a=f(a)))return{};"?"===a.charAt(0)&&(a=a.slice(1));for(var b={},c=a.split("&"),d=0;d<c.length;d++){var g,j,k,l=c[d].split("="),m=e(l[0]);if(g=h.exec(m))b[g[1]]=b[g[1]]||[],b[g[1]][g[2]]=e(l[1]);else if(g=i.test(m)){for(g=m.split("."),j=b;g.length;)if(k=g.shift(),k.length){if(j[k]){if(j[k]&&"object"!=typeof j[k])break}else j[k]={};g.length||(j[k]=e(l[1])),j=j[k]}}else b[l[0]]=null==l[1]?"":e(l[1])}return b},/**
	 * Stringify the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */
b.stringify=function(a){if(!a)return"";var b=[];for(var c in a){var e=a[c];if("array"!=g(e))b.push(d(c)+"="+d(a[c]));else for(var f=0;f<e.length;++f)b.push(d(c+"["+f+"]")+"="+d(e[f]))}return b.join("&")}},/* 4 */
/***/
function(a,b){function c(a){return a.replace(/^\s*|\s*$/g,"")}b=a.exports=c,b.left=function(a){return a.replace(/^\s*/,"")},b.right=function(a){return a.replace(/\s*$/,"")}},/* 5 */
/***/
function(a,b){
// code borrowed from https://github.com/feross/is-buffer/blob/master/index.js
function c(a){// For Safari 5-7 (missing Object.prototype.constructor)
return!(null==a||!(a._isBuffer||a.constructor&&"function"==typeof a.constructor.isBuffer&&a.constructor.isBuffer(a)))}/**
	 * toString ref.
	 */
var d=Object.prototype.toString;/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
a.exports=function(a){switch(d.call(a)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===a?"null":void 0===a?"undefined":a!==a?"nan":a&&1===a.nodeType?"element":c(a)?"buffer":typeof(a=a.valueOf?a.valueOf():Object.prototype.valueOf.apply(a))}},/* 6 */
/***/
function(a,b){var c=function(a){
//todo: move merge to helpers section
function b(a,b){for(var c in b)a[c]=b[c];return a}var c=1,d=function(a){c++,this.parent=null,this.children={},this.id=c,this.name="n"+c,void 0!==a&&(this.name=a),this.x=this.y=this.z=0,this.width=this.height=0};d.prototype.resize=function(a,b){null!=a&&(this.width=a),null!=b&&(this.height=b)},d.prototype.moveTo=function(a,b,c){this.x=null!=a?a:this.x,this.y=null!=b?b:this.y,this.z=null!=c?c:this.z},d.prototype.add=function(a){var b=a.name;if(void 0!==this.children[b])throw"SceneGraph: child already exists: "+b;this.children[b]=a,a.parent=this};var e=function(){d.call(this,"root"),this.properties=a};e.prototype=new d;var f=function(a,c){if(d.call(this,a),this.properties={fill:"#000000"},void 0!==c)b(this.properties,c);else if(void 0!==a&&"string"!=typeof a)throw"SceneGraph: invalid node name"};f.prototype=new d;var g=function(){f.apply(this,arguments),this.type="group"};g.prototype=new f;var h=function(){f.apply(this,arguments),this.type="rect"};h.prototype=new f;var i=function(a){f.call(this),this.type="text",this.properties.text=a};i.prototype=new f;var j=new e;return this.Shape={Rect:h,Text:i,Group:g},this.root=j,this};a.exports=c},/* 7 */
/***/
function(a,b){/* WEBPACK VAR INJECTION */
(function(a){/**
	 * Shallow object clone and merge
	 *
	 * @param a Object A
	 * @param b Object B
	 * @returns {Object} New object with all of A's properties, and all of B's properties, overwriting A's properties
	 */
b.extend=function(a,b){var c={};for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);if(null!=b)for(var e in b)b.hasOwnProperty(e)&&(c[e]=b[e]);return c},/**
	 * Takes a k/v list of CSS properties and returns a rule
	 *
	 * @param props CSS properties object
	 */
b.cssProps=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);return b.join(";")},/**
	 * Encodes HTML entities in a string
	 *
	 * @param str Input string
	 */
b.encodeHtmlEntity=function(a){for(var b=[],c=0,d=a.length-1;d>=0;d--)c=a.charCodeAt(d),c>128?b.unshift(["&#",c,";"].join("")):b.unshift(a[d]);return b.join("")},/**
	 * Checks if an image exists
	 *
	 * @param src URL of image
	 * @param callback Callback to call once image status has been found
	 */
b.imageExists=function(a,b){var c=new Image;c.onerror=function(){b.call(this,!1)},c.onload=function(){b.call(this,!0)},c.src=a},/**
	 * Decodes HTML entities in a string
	 *
	 * @param str Input string
	 */
b.decodeHtmlEntity=function(a){return a.replace(/&#(\d+);/g,function(a,b){return String.fromCharCode(b)})},/**
	 * Returns an element's dimensions if it's visible, `false` otherwise.
	 *
	 * @param el DOM element
	 */
b.dimensionCheck=function(a){var b={height:a.clientHeight,width:a.clientWidth};return!(!b.height||!b.width)&&b},/**
	 * Returns true if value is truthy or if it is "semantically truthy"
	 * @param val
	 */
b.truthy=function(a){return"string"==typeof a?"true"===a||"yes"===a||"1"===a||"on"===a||"✓"===a:!!a},/**
	 * Parses input into a well-formed CSS color
	 * @param val
	 */
b.parseColor=function(a){var b,c=a.match(/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i);return null!==c?(b=c[1]||c[2],"#"!==b[0]?"#"+b:b):null!==(c=a.match(/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/))?b="rgb("+c.slice(1).join(",")+")":(c=a.match(/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/),null!==c?b="rgba("+c.slice(1).join(",")+")":null)},/**
	 * Provides the correct scaling ratio for canvas drawing operations on HiDPI screens (e.g. Retina displays)
	 */
b.canvasRatio=function(){var b=1,c=1;if(a.document){var d=a.document.createElement("canvas");if(d.getContext){var e=d.getContext("2d");b=a.devicePixelRatio||1,c=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1}}return b/c}}).call(b,function(){return this}())},/* 8 */
/***/
function(a,b,c){/* WEBPACK VAR INJECTION */
(function(a){var d=c(9),e="http://www.w3.org/2000/svg";/**
	 * Generic SVG element creation function
	 *
	 * @param svg SVG context, set to null if new
	 * @param width Document width
	 * @param height Document height
	 */
b.initSVG=function(a,b,c){var f,g,h=!1;a&&a.querySelector?null===(g=a.querySelector("style"))&&(h=!0):(a=d.newEl("svg",e),h=!0),h&&(f=d.newEl("defs",e),g=d.newEl("style",e),d.setAttr(g,{type:"text/css"}),f.appendChild(g),a.appendChild(f)),
//IE throws an exception if this is set and Chrome requires it to be set
a.webkitMatchesSelector&&a.setAttribute("xmlns",e);
//Remove comment nodes
for(var i=0;i<a.childNodes.length;i++)8===a.childNodes[i].nodeType&&a.removeChild(a.childNodes[i]);
//Remove CSS
for(;g.childNodes.length;)g.removeChild(g.childNodes[0]);return d.setAttr(a,{width:b,height:c,viewBox:"0 0 "+b+" "+c,preserveAspectRatio:"none"}),a},/**
	 * Converts serialized SVG to a string suitable for data URI use
	 * @param svgString Serialized SVG string
	 * @param [base64] Use base64 encoding for data URI
	 */
b.svgStringToDataURI=function(){return function(b,c){return c?"data:image/svg+xml;charset=UTF-8;base64,"+btoa(a.unescape(encodeURIComponent(b))):"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(b)}}(),/**
	 * Returns serialized SVG with XML processing instructions
	 *
	 * @param svg SVG context
	 * @param stylesheets CSS stylesheets to include
	 */
b.serializeSVG=function(b,c){if(a.XMLSerializer){var e=new XMLSerializer,f="",g=c.stylesheets;
//External stylesheets: Processing Instruction method
if(c.svgXMLStylesheet){
//Add <?xml-stylesheet ?> directives
for(var h=d.createXML(),i=g.length-1;i>=0;i--){var j=h.createProcessingInstruction("xml-stylesheet",'href="'+g[i]+'" rel="stylesheet"');h.insertBefore(j,h.firstChild)}h.removeChild(h.documentElement),f=e.serializeToString(h)}var k=e.serializeToString(b);return k=k.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),f+k}}}).call(b,function(){return this}())},/* 9 */
/***/
function(a,b){/* WEBPACK VAR INJECTION */
(function(a){/**
	 * Generic new DOM element function
	 *
	 * @param tag Tag to create
	 * @param namespace Optional namespace value
	 */
b.newEl=function(b,c){if(a.document)return null==c?a.document.createElement(b):a.document.createElementNS(c,b)},/**
	 * Generic setAttribute function
	 *
	 * @param el Reference to DOM element
	 * @param attrs Object with attribute keys and values
	 */
b.setAttr=function(a,b){for(var c in b)a.setAttribute(c,b[c])},/**
	 * Creates a XML document
	 * @private
	 */
b.createXML=function(){if(a.DOMParser)return(new DOMParser).parseFromString("<xml />","application/xml")},/**
	 * Converts a value into an array of DOM nodes
	 *
	 * @param val A string, a NodeList, a Node, or an HTMLCollection
	 */
b.getNodeArray=function(b){var c=null;return"string"==typeof b?c=document.querySelectorAll(b):a.NodeList&&b instanceof a.NodeList?c=b:a.Node&&b instanceof a.Node?c=[b]:a.HTMLCollection&&b instanceof a.HTMLCollection?c=b:b instanceof Array?c=b:null===b&&(c=[]),c=Array.prototype.slice.call(c)}}).call(b,function(){return this}())},/* 10 */
/***/
function(a,b){var c=function(a,b){
//todo: support rgba, hsla, and rrggbbaa notation
//todo: use CIELAB internally
//todo: add clamp function (with sign)
"string"==typeof a&&(this.original=a,"#"===a.charAt(0)&&(a=a.slice(1)),/[^a-f0-9]+/i.test(a)||(3===a.length&&(a=a.replace(/./g,"$&$&")),6===a.length&&(this.alpha=1,b&&b.alpha&&(this.alpha=b.alpha),this.set(parseInt(a,16)))))};
//todo: jsdocs
c.rgb2hex=function(a,b,c){function d(a){var b=(0|a).toString(16);return a<16&&(b="0"+b),b}return[a,b,c].map(d).join("")},
//todo: jsdocs
c.hsl2rgb=function(a,b,c){var d=a/60,e=(1-Math.abs(2*c-1))*b,f=e*(1-Math.abs(parseInt(d)%2-1)),g=c-e/2,h=0,i=0,j=0;return d>=0&&d<1?(h=e,i=f):d>=1&&d<2?(h=f,i=e):d>=2&&d<3?(i=e,j=f):d>=3&&d<4?(i=f,j=e):d>=4&&d<5?(h=f,j=e):d>=5&&d<6&&(h=e,j=f),h+=g,i+=g,j+=g,h=parseInt(255*h),i=parseInt(255*i),j=parseInt(255*j),[h,i,j]},/**
	 * Sets the color from a raw RGB888 integer
	 * @param raw RGB888 representation of color
	 */
//todo: refactor into a static method
//todo: factor out individual color spaces
//todo: add HSL, CIELAB, and CIELUV
c.prototype.set=function(a){this.raw=a;var b=(16711680&this.raw)>>16,c=(65280&this.raw)>>8,d=255&this.raw,e=.2126*b+.7152*c+.0722*d,f=-.09991*b-.33609*c+.436*d,g=.615*b-.55861*c-.05639*d;return this.rgb={r:b,g:c,b:d},this.yuv={y:e,u:f,v:g},this},/**
	 * Lighten or darken a color
	 * @param multiplier Amount to lighten or darken (-1 to 1)
	 */
c.prototype.lighten=function(a){var b=Math.min(1,Math.max(0,Math.abs(a)))*(a<0?-1:1),d=255*b|0,e=Math.min(255,Math.max(0,this.rgb.r+d)),f=Math.min(255,Math.max(0,this.rgb.g+d)),g=Math.min(255,Math.max(0,this.rgb.b+d)),h=c.rgb2hex(e,f,g);return new c(h)},/**
	 * Output color in hex format
	 * @param addHash Add a hash character to the beginning of the output
	 */
c.prototype.toHex=function(a){return(a?"#":"")+this.raw.toString(16)},/**
	 * Returns whether or not current color is lighter than another color
	 * @param color Color to compare against
	 */
c.prototype.lighterThan=function(a){return a instanceof c||(a=new c(a)),this.yuv.y>a.yuv.y},/**
	 * Returns the result of mixing current color with another color
	 * @param color Color to mix with
	 * @param multiplier How much to mix with the other color
	 */
/*
	Color.prototype.mix = function (color, multiplier) {
	    if (!(color instanceof Color)) {
	        color = new Color(color);
	    }

	    var r = this.rgb.r;
	    var g = this.rgb.g;
	    var b = this.rgb.b;
	    var a = this.alpha;

	    var m = typeof multiplier !== 'undefined' ? multiplier : 0.5;

	    //todo: write a lerp function
	    r = r + m * (color.rgb.r - r);
	    g = g + m * (color.rgb.g - g);
	    b = b + m * (color.rgb.b - b);
	    a = a + m * (color.alpha - a);

	    return new Color(Color.rgbToHex(r, g, b), {
	        'alpha': a
	    });
	};
	*/
/**
	 * Returns the result of blending another color on top of current color with alpha
	 * @param color Color to blend on top of current color, i.e. "Ca"
	 */
//todo: see if .blendAlpha can be merged into .mix
c.prototype.blendAlpha=function(a){a instanceof c||(a=new c(a));var b=a,d=this,e=b.alpha*b.rgb.r+(1-b.alpha)*d.rgb.r,f=b.alpha*b.rgb.g+(1-b.alpha)*d.rgb.g,g=b.alpha*b.rgb.b+(1-b.alpha)*d.rgb.b;return new c(c.rgb2hex(e,f,g))},a.exports=c},/* 11 */
/***/
function(a,b){a.exports={version:"2.9.4",svg_ns:"http://www.w3.org/2000/svg"}},/* 12 */
/***/
function(a,b,c){
//todo: deprecate tag arg, infer tag from shape object
function d(a,b){return l.element({tag:b,width:a.width,height:a.height,fill:a.properties.fill})}function e(a){return j.cssProps({fill:a.fill,"font-weight":a.font.weight,"font-family":a.font.family+", monospace","font-size":a.font.size+a.font.units})}function f(a,b,c){var d=c/2;return["M",d,d,"H",a-d,"V",b-d,"H",d,"V",0,"M",0,d,"L",a,b-d,"M",0,b-d,"L",a,d].join(" ")}var g=c(13),h=c(8),i=c(11),j=c(7),k=i.svg_ns,l={element:function(a){var b=a.tag,c=a.content||"";return delete a.tag,delete a.content,[b,c,a]}};a.exports=function(a,b){var c=b.engineSettings,i=c.stylesheets,j=i.map(function(a){return'<?xml-stylesheet rel="stylesheet" href="'+a+'"?>'}).join("\n"),m="holder_"+Number(new Date).toString(16),n=a.root,o=n.children.holderTextGroup,p="#"+m+" text { "+e(o.properties)+" } ";
// push text down to be equally vertically aligned with canvas renderer
o.y+=.8*o.textPositionData.boundingBox.height;var q=[];Object.keys(o.children).forEach(function(a){var b=o.children[a];Object.keys(b.children).forEach(function(a){var c=b.children[a],d=o.x+b.x+c.x,e=o.y+b.y+c.y,f=l.element({tag:"text",content:c.properties.text,x:d,y:e});q.push(f)})});var r=l.element({tag:"g",content:q}),s=null;if(n.children.holderBg.properties.outline){var t=n.children.holderBg.properties.outline;s=l.element({tag:"path",d:f(n.children.holderBg.width,n.children.holderBg.height,t.width),"stroke-width":t.width,stroke:t.fill,fill:"none"})}var u=d(n.children.holderBg,"rect"),v=[];v.push(u),t&&v.push(s),v.push(r);var w=l.element({tag:"g",id:m,content:v}),x=l.element({tag:"style",
//todo: figure out how to add CDATA directive
content:p,type:"text/css"}),y=l.element({tag:"defs",content:x}),z=l.element({tag:"svg",content:[y,w],width:n.properties.width,height:n.properties.height,xmlns:k,viewBox:[0,0,n.properties.width,n.properties.height].join(" "),preserveAspectRatio:"none"}),A=g(z);return A=j+A[0],h.svgStringToDataURI(A,"background"===b.mode)}},/* 13 */
/***/
function(a,b,c){c(14);
// TODO: remove namespace
a.exports=function a(b,c,d){"use strict";function e(a,b){if(null!==b&&!1!==b&&void 0!==b)return"string"!=typeof b&&"object"!=typeof b?String(b):b}var f,g,h,i,j=1,k=!0;if(d=d||{},"string"==typeof b[0])b[0]=function(a){var b=a.match(/^[\w-]+/),c={tag:b?b[0]:"div",attr:{},children:[]},e=a.match(/#([\w-]+)/),f=a.match(/\$([\w-]+)/),g=a.match(/\.[\w-]+/g);
// Assign id if is set
// Add element to the return object
return e&&(c.attr.id=e[1],d[e[1]]=c),f&&(d[f[1]]=c),g&&(c.attr.class=g.join(" ").replace(/\./g,"")),a.match(/&$/g)&&(k=!1),c}(b[0]);else{if(!Array.isArray(b[0]))throw new Error("First element of array must be a string, or an array and not "+JSON.stringify(b[0]));j=0}for(;j<b.length;j++){
// Don't render element if value is false or null
if(!1===b[j]||null===b[j]){b[0]=!1;break}if(void 0!==b[j]&&!0!==b[j])if("string"==typeof b[j])k&&(b[j]=function(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(b[j])),b[0].children.push(b[j]);else if("number"==typeof b[j])b[0].children.push(b[j]);else if(Array.isArray(b[j])){if(Array.isArray(b[j][0])){if(b[j].reverse().forEach(function(a){b.splice(j+1,0,a)}),0!==j)continue;j++}a(b[j],c,d),b[j][0]&&b[0].children.push(b[j][0])}else if("function"==typeof b[j])h=b[j];else{if("object"!=typeof b[j])throw new TypeError('"'+b[j]+'" is not allowed as a value.');for(g in b[j])b[j].hasOwnProperty(g)&&null!==b[j][g]&&!1!==b[j][g]&&("style"===g&&"object"==typeof b[j][g]?b[0].attr[g]=JSON.stringify(b[j][g],e).slice(2,-2).replace(/","/g,";").replace(/":"/g,":").replace(/\\"/g,"'"):b[0].attr[g]=b[j][g])}}if(!1!==b[0]){f="<"+b[0].tag;for(i in b[0].attr)b[0].attr.hasOwnProperty(i)&&(f+=" "+i+'="'+function(a){return a||0===a?String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;"):""}(b[0].attr[i])+'"');f+=">",b[0].children.forEach(function(a){f+=a}),f+="</"+b[0].tag+">",b[0]=f}
// returns object containing all elements with an id and the root element
// Return root element on index 0
return d[0]=b[0],h&&h(b[0]),d}},/* 14 */
/***/
function(a,b){/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */
"use strict";/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */
function c(a){var b=""+a,c=d.exec(b);if(!c)return b;var e,f="",g=0,h=0;for(g=c.index;g<b.length;g++){switch(b.charCodeAt(g)){case 34:// "
e="&quot;";break;case 38:// &
e="&amp;";break;case 39:// '
e="&#39;";break;case 60:// <
e="&lt;";break;case 62:// >
e="&gt;";break;default:continue}h!==g&&(f+=b.substring(h,g)),h=g+1,f+=e}return h!==g?f+b.substring(h,g):f}/**
	 * Module variables.
	 * @private
	 */
var d=/["'&<>]/;/**
	 * Module exports.
	 * @public
	 */
a.exports=c},/* 15 */
/***/
function(a,b,c){var d=c(9),e=c(7);a.exports=function(){var a=d.newEl("canvas"),b=null;return function(c){null==b&&(b=a.getContext("2d"));var d=e.canvasRatio(),f=c.root;a.width=d*f.properties.width,a.height=d*f.properties.height,b.textBaseline="middle";var g=f.children.holderBg,h=d*g.width,i=d*g.height;b.fillStyle=g.properties.fill,b.fillRect(0,0,h,i),g.properties.outline&&(
//todo: abstract this into a method
b.strokeStyle=g.properties.outline.fill,b.lineWidth=g.properties.outline.width,b.moveTo(1,1),
// TL, TR, BR, BL
b.lineTo(h-1,1),b.lineTo(h-1,i-1),b.lineTo(1,i-1),b.lineTo(1,1),
// Diagonals
b.moveTo(0,1),b.lineTo(h,i-1),b.moveTo(0,i-1),b.lineTo(h,1),b.stroke());var j=f.children.holderTextGroup;b.font=j.properties.font.weight+" "+d*j.properties.font.size+j.properties.font.units+" "+j.properties.font.family+", monospace",b.fillStyle=j.properties.fill;for(var k in j.children){var l=j.children[k];for(var m in l.children){var n=l.children[m],o=d*(j.x+l.x+n.x),p=d*(j.y+l.y+n.y+j.properties.leading/2);b.fillText(n.properties.text,o,p)}}return a.toDataURL("image/png")}}()}])}),function(a,b){b&&(Holder=a.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package);
/*! grunt 最后修改于： 2017-04-08 */