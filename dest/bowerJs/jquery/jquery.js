/*! grunt-0.0.1.js 压缩于：2017-04-08 00:07 */

/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function c(a,b){b=b||ca;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}function d(a){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var b=!!a&&"length"in a&&a.length,c=oa.type(a);return"function"!==c&&!oa.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function e(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}
// Implement the identical functionality for filter and not
function f(a,b,c){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
// Simple selector that can be filtered directly, removing non-Elements
// Complex selector, compare the two sets, removing non-Elements
return oa.isFunction(b)?oa.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?oa.grep(a,function(a){return a===b!==c}):"string"!=typeof b?oa.grep(a,function(a){return ha.call(b,a)>-1!==c}):va.test(b)?oa.filter(b,a,c):(b=oa.filter(b,a),oa.grep(a,function(a){return ha.call(b,a)>-1!==c&&1===a.nodeType}))}function g(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}
// Convert String-formatted options into Object-formatted ones
function h(a){var b={};return oa.each(a.match(Aa)||[],function(a,c){b[c]=!0}),b}function i(a){return a}function j(a){throw a}function k(a,b,c,d){var e;try{
// Check for promise aspect first to privilege synchronous behavior
a&&oa.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&oa.isFunction(e=a.then)?e.call(a,b,c):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
b.apply(void 0,[a].slice(d))}catch(a){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
c.apply(void 0,[a])}}
// The ready event handler and self cleanup method
function l(){ca.removeEventListener("DOMContentLoaded",l),a.removeEventListener("load",l),oa.ready()}function m(){this.expando=oa.expando+m.uid++}function n(a){
// Only convert to a number if it doesn't change the string
return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Ha.test(a)?JSON.parse(a):a)}function o(a,b,c){var d;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Ia,"-$&").toLowerCase(),"string"==typeof(c=a.getAttribute(d))){try{c=n(c)}catch(a){}
// Make sure we set the data so it isn't changed later
Ga.set(a,b,c)}else c=void 0;return c}function p(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return oa.css(a,b,"")},i=h(),j=c&&c[3]||(oa.cssNumber[b]?"":"px"),
// Starting value computation is required for potential unit mismatches
k=(oa.cssNumber[b]||"px"!==j&&+i)&&Ka.exec(oa.css(a,b));if(k&&k[3]!==j){
// Trust units reported by jQuery.css
j=j||k[3],
// Make sure we update the tween properties later on
c=c||[],
// Iteratively approximate from a nonzero starting point
k=+i||1;do{
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
f=f||".5",
// Adjust and apply
k/=f,oa.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}
// Apply relative offset (+=/-=) if specified
return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function q(a){var b,c=a.ownerDocument,d=a.nodeName,e=Oa[d];return e||(b=c.body.appendChild(c.createElement(d)),e=oa.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),Oa[d]=e,e)}function r(a,b){
// Determine new display value for elements that need to change
for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===c&&(e[f]=Fa.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&Ma(d)&&(e[f]=q(d))):"none"!==c&&(e[f]="none",
// Remember what we're overwriting
Fa.set(d,"display",c)));
// Set the display of the elements in a second loop to avoid constant reflow
for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}function s(a,b){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var c;return c=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&e(a,b)?oa.merge([a],c):c}
// Mark scripts as having already been evaluated
function t(a,b){for(var c=0,d=a.length;c<d;c++)Fa.set(a[c],"globalEval",!b||Fa.get(b[c],"globalEval"))}function u(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if((f=a[n])||0===f)
// Add nodes directly
if("object"===oa.type(f))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
oa.merge(m,f.nodeType?[f]:f);else if(Ta.test(f)){for(g=g||l.appendChild(b.createElement("div")),
// Deserialize a standard representation
h=(Qa.exec(f)||["",""])[1].toLowerCase(),i=Sa[h]||Sa._default,g.innerHTML=i[1]+oa.htmlPrefilter(f)+i[2],
// Descend through wrappers to the right content
k=i[0];k--;)g=g.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
oa.merge(m,g.childNodes),
// Remember the top-level container
g=l.firstChild,
// Ensure the created nodes are orphaned (#12392)
g.textContent=""}else m.push(b.createTextNode(f));for(
// Remove wrapper from fragment
l.textContent="",n=0;f=m[n++];)
// Skip elements already in the context collection (trac-4087)
if(d&&oa.inArray(f,d)>-1)e&&e.push(f);else
// Capture executables
if(j=oa.contains(f.ownerDocument,f),
// Append to fragment
g=s(l.appendChild(f),"script"),
// Preserve script evaluation history
j&&t(g),c)for(k=0;f=g[k++];)Ra.test(f.type||"")&&c.push(f);return l}function v(){return!0}function w(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function x(){try{return ca.activeElement}catch(a){}}function y(a,b,c,d,e,f){var g,h;
// Types can be a map of types/handlers
if("object"==typeof b){
// ( types-Object, selector, data )
"string"!=typeof c&&(
// ( types-Object, data )
d=d||c,c=void 0);for(h in b)y(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(
// ( types, fn )
e=c,d=c=void 0):null==e&&("string"==typeof c?(
// ( types, selector, fn )
e=d,d=void 0):(
// ( types, data, fn )
e=d,d=c,c=void 0)),!1===e)e=w;else if(!e)return a;
// Use same guid so caller can remove using origFn
return 1===f&&(g=e,e=function(a){
// Can use an empty set, since event contains the info
return oa().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=oa.guid++)),a.each(function(){oa.event.add(this,b,e,d,c)})}
// Prefer a tbody over its parent table for containing new rows
function z(a,b){return e(a,"table")&&e(11!==b.nodeType?b:b.firstChild,"tr")?oa(">tbody",a)[0]||a:a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function A(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function B(a){var b=$a.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function C(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Fa.hasData(a)&&(f=Fa.access(a),g=Fa.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)oa.event.add(b,e,j[e][c])}
// 2. Copy user data
Ga.hasData(a)&&(h=Ga.access(a),i=oa.extend({},h),Ga.set(b,i))}}
// Fix IE bugs, see support tests
function D(a,b){var c=b.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===c&&Pa.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function E(a,b,d,e){
// Flatten any nested arrays
b=fa.apply([],b);var f,g,h,i,j,k,l=0,m=a.length,n=m-1,o=b[0],p=oa.isFunction(o);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||m>1&&"string"==typeof o&&!na.checkClone&&Za.test(o))return a.each(function(c){var f=a.eq(c);p&&(b[0]=o.call(this,c,f.html())),E(f,b,d,e)});if(m&&(f=u(b,a[0].ownerDocument,!1,a,e),g=f.firstChild,1===f.childNodes.length&&(f=g),g||e)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(h=oa.map(s(f,"script"),A),i=h.length;l<m;l++)j=f,l!==n&&(j=oa.clone(j,!0,!0),
// Keep references to cloned scripts for later restoration
i&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
oa.merge(h,s(j,"script"))),d.call(a[l],j,l);if(i)
// Evaluate executable scripts on first document insertion
for(k=h[h.length-1].ownerDocument,
// Reenable scripts
oa.map(h,B),l=0;l<i;l++)j=h[l],Ra.test(j.type||"")&&!Fa.access(j,"globalEval")&&oa.contains(k,j)&&(j.src?
// Optional AJAX dependency, but won't run scripts if not present
oa._evalUrl&&oa._evalUrl(j.src):c(j.textContent.replace(_a,""),k))}return a}function F(a,b,c){for(var d,e=b?oa.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||oa.cleanData(s(d)),d.parentNode&&(c&&oa.contains(d.ownerDocument,d)&&t(s(d,"script")),d.parentNode.removeChild(d));return a}function G(a,b,c){var d,e,f,g,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
h=a.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return c=c||cb(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||oa.contains(a.ownerDocument,a)||(g=oa.style(a,b)),!na.pixelMarginRight()&&bb.test(g)&&ab.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function H(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function I(a){
// Shortcut for names that are not vendor prefixed
if(a in ib)return a;for(
// Check for vendor prefixed names
var b=a[0].toUpperCase()+a.slice(1),c=hb.length;c--;)if((a=hb[c]+b)in ib)return a}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function J(a){var b=oa.cssProps[a];return b||(b=oa.cssProps[a]=I(a)||a),b}function K(a,b,c){
// Any relative (+/-) values have already been
// normalized at this point
var d=Ka.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function L(a,b,c,d,e){var f,g=0;for(
// If we already have the right measurement, avoid augmentation
f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)
// Both box models exclude margin, so add it if we want it
"margin"===c&&(g+=oa.css(a,c+La[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=oa.css(a,"padding"+La[f],!0,e)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=oa.css(a,"border"+La[f]+"Width",!0,e))):(
// At this point, extra isn't content, so add padding
g+=oa.css(a,"padding"+La[f],!0,e),
// At this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=oa.css(a,"border"+La[f]+"Width",!0,e)));return g}function M(a,b,c){
// Start with computed style
var d,e=cb(a),f=G(a,b,e),g="border-box"===oa.css(a,"boxSizing",!1,e);
// Computed unit is not pixels. Stop here and return.
// Computed unit is not pixels. Stop here and return.
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Fall back to offsetWidth/Height when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Normalize "", auto, and prepare for extra
return bb.test(f)?f:(d=g&&(na.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),(f=parseFloat(f)||0)+L(a,b,c||(g?"border":"content"),d,e)+"px")}function N(a,b,c,d,e){return new N.prototype.init(a,b,c,d,e)}function O(){kb&&(!1===ca.hidden&&a.requestAnimationFrame?a.requestAnimationFrame(O):a.setTimeout(O,oa.fx.interval),oa.fx.tick())}
// Animations created synchronously will run synchronously
function P(){return a.setTimeout(function(){jb=void 0}),jb=oa.now()}
// Generate parameters to create a standard animation
function Q(a,b){var c,d=0,e={height:a};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
b=b?1:0;d<4;d+=2-b)c=La[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function R(a,b,c){for(var d,e=(U.tweeners[b]||[]).concat(U.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))
// We're done with this property
return d}function S(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&Ma(a),q=Fa.get(a,"fxshow");
// Queue-skipping animations hijack the fx hooks
c.queue||(g=oa._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){
// Ensure the complete handler is called before this completes
m.always(function(){g.unqueued--,oa.queue(a,"fx").length||g.empty.fire()})}));
// Detect show/hide animations
for(d in b)if(e=b[d],lb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||oa.style(a,d)}if((
// Bail out if this is a no-op like .hide().hide()
i=!oa.isEmptyObject(b))||!oa.isEmptyObject(n)){
// Restrict "overflow" and "display" styles during box animations
l&&1===a.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
c.overflow=[o.overflow,o.overflowX,o.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
j=q&&q.display,null==j&&(j=Fa.get(a,"display")),k=oa.css(a,"display"),"none"===k&&(j?k=j:(
// Get nonempty value(s) by temporarily forcing visibility
r([a],!0),j=a.style.display||j,k=oa.css(a,"display"),r([a]))),
// Animate inline elements as inline-block
("inline"===k||"inline-block"===k&&null!=j)&&"none"===oa.css(a,"float")&&(
// Restore the original display value at the end of pure show/hide animations
i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),
// Implement show/hide animations
i=!1;for(d in n)
// General show/hide setup for this element animation
i||(q?"hidden"in q&&(p=q.hidden):q=Fa.access(a,"fxshow",{display:j}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
f&&(q.hidden=!p),
// Show elements before animating them
p&&r([a],!0),/* eslint-disable no-loop-func */
m.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
p||r([a]),Fa.remove(a,"fxshow");for(d in n)oa.style(a,d,n[d])})),
// Per-property setup
i=R(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function T(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=oa.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=oa.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function U(a,b,c){var d,e,f=0,g=U.prefilters.length,h=oa.Deferred().always(function(){
// Don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=jb||P(),c=Math.max(0,j.startTime+j.duration-b),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);
// If there's more to do, yield
// If there's more to do, yield
// If this was an empty animation, synthesize a final progress notification
// Resolve the animation and report its conclusion
return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:oa.extend({},b),opts:oa.extend(!0,{specialEasing:{},easing:oa.easing._default},c),originalProperties:b,originalOptions:c,startTime:jb||P(),duration:c.duration,tweens:[],createTween:function(b,c){var d=oa.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);
// Resolve when we played the last frame; otherwise, reject
return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(T(k,j.opts.specialEasing);f<g;f++)if(d=U.prefilters[f].call(j,a,k,j.opts))return oa.isFunction(d.stop)&&(oa._queueHooks(j.elem,j.opts.queue).stop=oa.proxy(d.stop,d)),d;
// Attach callbacks from options
return oa.map(k,R,j),oa.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),oa.fx.timer(oa.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}
// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function V(a){return(a.match(Aa)||[]).join(" ")}function W(a){return a.getAttribute&&a.getAttribute("class")||""}function X(a,b,c,d){var e;if(Array.isArray(b))
// Serialize array item.
oa.each(b,function(b,e){c||vb.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
X(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==oa.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)X(a+"["+e+"]",b[e],c,d)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Y(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Aa)||[];if(oa.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function Z(a,b,c,d){function e(h){var i;return f[h]=!0,oa.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Cb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function $(a,b){var c,d,e=oa.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&oa.extend(!0,a,d),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function _(a,b,c){
// Remove auto dataType and get content-type in the process
for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}
// Or just use first one
f=f||g}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(f)return f!==i[0]&&i.unshift(f),c[f]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function aa(a,b,c,d){var e,f,g,h,i,j={},
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
if(g&&a.throws)b=g(b);else try{b=g(b)}catch(a){return{state:"parsererror",error:g?a:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}var ba=[],ca=a.document,da=Object.getPrototypeOf,ea=ba.slice,fa=ba.concat,ga=ba.push,ha=ba.indexOf,ia={},ja=ia.toString,ka=ia.hasOwnProperty,la=ka.toString,ma=la.call(Object),na={},
// Define a local copy of jQuery
oa=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new oa.fn.init(a,b)},
// Used by jQuery.camelCase as callback to replace()
pa=function(a,b){return b.toUpperCase()};oa.fn=oa.prototype={
// The current version of jQuery being used
jquery:"3.2.1",constructor:oa,
// The default length of a jQuery object is 0
length:0,toArray:function(){return ea.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==a?ea.call(this):a<0?this[a+this.length]:this[a]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=oa.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b},
// Execute a callback for every element in the matched set.
each:function(a){return oa.each(this,a)},map:function(a){return this.pushStack(oa.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ea.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ga,sort:ba.sort,splice:ba.splice},oa.extend=oa.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,
// Skip the boolean and the target
g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||oa.isFunction(g)||(g={}),
// Extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);h<i;h++)
// Only deal with non-null/undefined values
if(null!=(a=arguments[h]))
// Extend the base object
for(b in a)c=g[b],d=a[b],
// Prevent never-ending loop
g!==d&&(
// Recurse if we're merging plain objects or arrays
j&&d&&(oa.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&oa.isPlainObject(c)?c:{},
// Never move original objects, clone them
g[b]=oa.extend(j,f,d)):void 0!==d&&(g[b]=d));
// Return the modified object
return g},oa.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===oa.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var b=oa.type(a);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!a||"[object Object]"!==ja.call(a))&&(!(b=da(a))||"function"==typeof(c=ka.call(b,"constructor")&&b.constructor)&&la.call(c)===ma)},isEmptyObject:function(a){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ia[ja.call(a)]||"object":typeof a},
// Evaluates a script in a global context
globalEval:function(a){c(a)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([a-z])/g,pa)},each:function(a,b){var c,e=0;if(d(a))for(c=a.length;e<c&&!1!==b.call(a[e],e,a[e]);e++);else for(e in a)if(!1===b.call(a[e],e,a[e]))break;return a},
// Support: Android <=4.0 only
trim:function(a){return null==a?"":(a+"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},
// results is for internal usage only
makeArray:function(a,b){var c=b||[];return null!=a&&(d(Object(a))?oa.merge(c,"string"==typeof a?[a]:a):ga.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:ha.call(b,a,c)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d=[],e=0,f=a.length,g=!c;e<f;e++)!b(a[e],e)!==g&&d.push(a[e]);return d},
// arg is for internal usage only
map:function(a,b,c){var e,f,g=0,h=[];
// Go through the array, translating each of the items to their new values
if(d(a))for(e=a.length;g<e;g++)null!=(f=b(a[g],g,c))&&h.push(f);else for(g in a)null!=(f=b(a[g],g,c))&&h.push(f);
// Flatten any nested arrays
return fa.apply([],h)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof b&&(c=a[b],b=a,a=c),oa.isFunction(a))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return d=ea.call(arguments,2),e=function(){return a.apply(b||this,d.concat(ea.call(arguments)))},e.guid=a.guid=a.guid||oa.guid++,e},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:na}),"function"==typeof Symbol&&(oa.fn[Symbol.iterator]=ba[Symbol.iterator]),
// Populate the class2type map
oa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ia["[object "+b+"]"]=b.toLowerCase()});var qa=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,k,m,n=b&&b.ownerDocument,
// nodeType defaults to 9, since context defaults to document
o=b?b.nodeType:9;
// Return early from calls with invalid selector or context
if(c=c||[],"string"!=typeof a||!a||1!==o&&9!==o&&11!==o)return c;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!d&&((b?b.ownerDocument||b:N)!==F&&E(b),b=b||F,H)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==o&&(i=pa.exec(a)))
// ID selector
if(e=i[1]){
// Document context
if(9===o){if(!(g=b.getElementById(e)))return c;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(g.id===e)return c.push(g),c}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(n&&(g=n.getElementById(e))&&L(b,g)&&g.id===e)return c.push(g),c}else{if(i[2])return Y.apply(c,b.getElementsByTagName(a)),c;if((e=i[3])&&u.getElementsByClassName&&b.getElementsByClassName)return Y.apply(c,b.getElementsByClassName(e)),c}
// Take advantage of querySelectorAll
if(u.qsa&&!S[a+" "]&&(!I||!I.test(a))){if(1!==o)n=b,m=a;else if("object"!==b.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(h=b.getAttribute("id"))?h=h.replace(ta,ua):b.setAttribute("id",h=M),
// Prefix every selector in the list
k=y(a),f=k.length;f--;)k[f]="#"+h+" "+l(k[f]);m=k.join(","),
// Expand context for sibling selectors
n=qa.test(a)&&j(b.parentNode)||b}if(m)try{return Y.apply(c,n.querySelectorAll(m)),c}catch(a){}finally{h===M&&b.removeAttribute("id")}}}
// All others
return A(a.replace(fa,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>v.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[M]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function e(a){var b=F.createElement("fieldset");try{return!!a(b)}catch(a){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){for(var c=a.split("|"),d=c.length;d--;)v.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function h(a){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(b){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in b?b.parentNode&&!1===b.disabled?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&wa(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function i(a){return d(function(b){return b=+b,d(function(c,d){
// Match elements found at the specified indexes
for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function j(a){return a&&void 0!==a.getElementsByTagName&&a}
// Easy API for creating new setFilters
function k(){}function l(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function m(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=P++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[O,h];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(i){for(;b=b[d];)if((1===b.nodeType||g)&&a(b,c,i))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(l=b[M]||(b[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===O&&j[1]===h)
// Assign to newCache so results back-propagate to previous elements
return m[2]=j[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function n(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function o(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function p(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function q(a,b,c,e,f,g){return e&&!e[M]&&(e=q(e)),f&&!f[M]&&(f=q(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],q=g.length,
// Get initial elements from seed or context
r=d||o(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
s=!a||!d&&b?r:p(r,m,a,h,i),t=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(d?a:q||e)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:s;
// Apply postFilter
if(
// Find primary matches
c&&c(s,t,h,i),e)for(j=p(t,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=t.length;k--;)(l=t[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(s[k]=l);f(null,t=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=t.length;k--;)(l=t[k])&&(j=f?$(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=p(t===g?t.splice(q,t.length):t),f?f(null,g,t,i):Y.apply(g,t)})}function r(a){for(var b,c,d,e=a.length,f=v.relative[a[0].type],g=f||v.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=m(function(a){return a===b},g,!0),j=m(function(a){return $(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==B)||((b=c).nodeType?i(a,c,d):j(a,c,d));
// Avoid hanging onto element (issue #299)
return b=null,e}];h<e;h++)if(c=v.relative[a[h].type])k=[m(n(k),c)];else{
// Return special upon seeing a positional matcher
if(c=v.filter[a[h].type].apply(null,a[h].matches),c[M]){for(
// Find the next relative operator (if any) for proper handling
d=++h;d<e&&!v.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return q(h>1&&n(k),h>1&&l(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(fa,"$1"),c,h<d&&r(a.slice(h,d)),d<e&&r(a=a.slice(d)),d<e&&l(a))}k.push(c)}return n(k)}function s(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",q=d&&[],r=[],s=B,
// We must always have either seed elements or outermost context
t=d||f&&v.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=O+=null==s?1:Math.random()||.1,w=t.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(B=g===F||g||j);o!==w&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===F||(E(k),h=!H);m=a[l++];)if(m(k,g||F,h)){i.push(k);break}j&&(O=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&q.push(k))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
n+=o,e&&o!==n){for(l=0;m=c[l++];)m(q,r,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)for(;o--;)q[o]||r[o]||(r[o]=W.call(i));
// Discard index placeholder values to get only actual matches
r=p(r)}
// Add matches to results
Y.apply(i,r),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(O=u,B=s),q};return e?d(g):g}var t,u,v,w,x,y,z,A,B,C,D,
// Local document vars
E,F,G,H,I,J,K,L,
// Instance-specific data
M="sizzle"+1*new Date,N=a.document,O=0,P=0,Q=c(),R=c(),S=c(),T=function(a,b){return a===b&&(D=!0),0},
// Instance methods
U={}.hasOwnProperty,V=[],W=V.pop,X=V.push,Y=V.push,Z=V.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
$=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},_="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
aa="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ba="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ca="\\["+aa+"*("+ba+")(?:"+aa+
// Operator (capture 2)
"*([*^$|!~]?=)"+aa+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ba+"))|)"+aa+"*\\]",da=":("+ba+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ca+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ea=new RegExp(aa+"+","g"),fa=new RegExp("^"+aa+"+|((?:^|[^\\\\])(?:\\\\.)*)"+aa+"+$","g"),ga=new RegExp("^"+aa+"*,"+aa+"*"),ha=new RegExp("^"+aa+"*([>+~]|"+aa+")"+aa+"*"),ia=new RegExp("="+aa+"*([^\\]'\"]*?)"+aa+"*\\]","g"),ja=new RegExp(da),ka=new RegExp("^"+ba+"$"),la={ID:new RegExp("^#("+ba+")"),CLASS:new RegExp("^\\.("+ba+")"),TAG:new RegExp("^("+ba+"|[*])"),ATTR:new RegExp("^"+ca),PSEUDO:new RegExp("^"+da),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+aa+"*(even|odd|(([+-]|)(\\d*)n|)"+aa+"*(?:([+-]|)"+aa+"*(\\d+)|))"+aa+"*\\)|)","i"),bool:new RegExp("^(?:"+_+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+aa+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+aa+"*((?:-\\d)?\\d*)"+aa+"*\\)|)(?=[^-]|$)","i")},ma=/^(?:input|select|textarea|button)$/i,na=/^h\d$/i,oa=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
pa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,qa=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ra=new RegExp("\\\\([\\da-f]{1,6}"+aa+"?|("+aa+")|.)","ig"),sa=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
ta=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ua=function(a,b){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return b?"\0"===a?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
va=function(){E()},wa=m(function(a){return!0===a.disabled&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Y.apply(V=Z.call(N.childNodes),N.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
V[N.childNodes.length].nodeType}catch(a){Y={apply:V.length?
// Leverage slice if possible
function(a,b){X.apply(a,Z.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}
// Expose support vars for convenience
u=b.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
x=b.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
E=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:N;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
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
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return d!==F&&9===d.nodeType&&d.documentElement?(F=d,G=F.documentElement,H=!x(F),N!==F&&(c=F.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",va,!1):c.attachEvent&&c.attachEvent("onunload",va)),u.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),u.getElementsByTagName=e(function(a){return a.appendChild(F.createComment("")),!a.getElementsByTagName("*").length}),u.getElementsByClassName=oa.test(F.getElementsByClassName),u.getById=e(function(a){return G.appendChild(a).id=M,!F.getElementsByName||!F.getElementsByName(M).length}),u.getById?(v.filter.ID=function(a){var b=a.replace(ra,sa);return function(a){return a.getAttribute("id")===b}},v.find.ID=function(a,b){if(void 0!==b.getElementById&&H){var c=b.getElementById(a);return c?[c]:[]}}):(v.filter.ID=function(a){var b=a.replace(ra,sa);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},v.find.ID=function(a,b){if(void 0!==b.getElementById&&H){var c,d,e,f=b.getElementById(a);if(f){if((
// Verify the id attribute
c=f.getAttributeNode("id"))&&c.value===a)return[f];for(
// Fall back on getElementsByName
e=b.getElementsByName(a),d=0;f=e[d++];)if((c=f.getAttributeNode("id"))&&c.value===a)return[f]}return[]}}),v.find.TAG=u.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):u.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},v.find.CLASS=u.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&H)return b.getElementsByClassName(a)},J=[],I=[],(u.qsa=oa.test(F.querySelectorAll))&&(e(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
G.appendChild(a).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
a.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+aa+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||I.push("\\["+aa+"*(?:value|"+_+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
a.querySelectorAll("[id~="+M+"-]").length||I.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||I.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
a.querySelectorAll("a#"+M+"+*").length||I.push(".#.+[+~]")}),e(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=F.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
a.querySelectorAll("[name=d]").length&&I.push("name"+aa+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==a.querySelectorAll(":enabled").length&&I.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
G.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&I.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),I.push(",.*:")})),(u.matchesSelector=oa.test(K=G.matches||G.webkitMatchesSelector||G.mozMatchesSelector||G.oMatchesSelector||G.msMatchesSelector))&&e(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
u.disconnectedMatch=K.call(a,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
K.call(a,"[s!='']:x"),J.push("!=",da)}),I=I.length&&new RegExp(I.join("|")),J=J.length&&new RegExp(J.join("|")),b=oa.test(G.compareDocumentPosition),L=b||oa.test(G.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},T=b?function(a,b){
// Flag for duplicate removal
if(a===b)return D=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var c=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return c||(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!u.sortDetached&&b.compareDocumentPosition(a)===c?a===F||a.ownerDocument===N&&L(N,a)?-1:b===F||b.ownerDocument===N&&L(N,b)?1:C?$(C,a)-$(C,b):0:4&c?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return D=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];
// Parentless nodes are either documents or disconnected
if(!e||!f)return a===F?-1:b===F?1:e?-1:f?1:C?$(C,a)-$(C,b):0;if(e===f)return g(a,b);for(
// Otherwise we need full lists of their ancestors for comparison
c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);
// Walk down the tree looking for a discrepancy
for(;h[d]===i[d];)d++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return d?g(h[d],i[d]):h[d]===N?-1:i[d]===N?1:0},F):F},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if(
// Set document vars if needed
(a.ownerDocument||a)!==F&&E(a),
// Make sure that attribute selectors are quoted
c=c.replace(ia,"='$1']"),u.matchesSelector&&H&&!S[c+" "]&&(!J||!J.test(c))&&(!I||!I.test(c)))try{var d=K.call(a,c);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||u.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(a){}return b(c,F,null,[a]).length>0},b.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==F&&E(a),L(a,b)},b.attr=function(a,b){
// Set document vars if needed
(a.ownerDocument||a)!==F&&E(a);var c=v.attrHandle[b.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
d=c&&U.call(v.attrHandle,b.toLowerCase())?c(a,b,!H):void 0;return void 0!==d?d:u.attributes||!H?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.escape=function(a){return(a+"").replace(ta,ua)},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
D=!u.detectDuplicates,C=!u.sortStable&&a.slice(0),a.sort(T),D){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return C=null,a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
w=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=w(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
for(;b=a[d++];)
// Do not traverse comment nodes
c+=w(b);
// Do not include comment or processing instruction nodes
return c},v=b.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:d,match:la,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(ra,sa),a[3]=(a[3]||a[4]||a[5]||"").replace(ra,sa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
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
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return la.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ja.test(c)&&(b=y(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ra,sa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=Q[a+" "];return b||(b=new RegExp("(^|"+aa+")"+a+"("+aa+"|$)"))&&Q(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ea," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){
// :(first|last|only)-(child|of-type)
if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
m=q,l=m[M]||(m[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===O&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(
// Fallback to seeking `elem` from the start
t=n=0)||o.pop();)
// When found, cache indexes on `parent` and break
if(1===m.nodeType&&++t&&m===b){k[a]=[O,n,t];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
s&&(
// ...in a gzip-friendly way
m=b,l=m[M]||(m[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===O&&j[1],t=n),!1===t)
// Use the same loop as above to seek `elem` from the start
for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(
// Cache the index of each encountered element
s&&(l=m[M]||(m[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[O,t]),m!==b)););
// Incorporate the offset, then check against cycle size
return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,c){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,f=v.pseudos[a]||v.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[M]?f(c):f.length>1?(e=[a,a,"",c],v.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=$(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{
// Potentially complex pseudos
not:d(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],e=z(a.replace(fa,"$1"));return e[M]?d(function(a,b,c,d){
// Match elements unmatched by `matcher`
for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){
// Don't keep the element (issue #299)
return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ra,sa),function(b){return(b.textContent||b.innerText||w(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:d(function(a){
// lang value must be a valid identifier
return ka.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ra,sa).toLowerCase(),function(b){var c;do{if(c=H?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===G},focus:function(a){return a===F.activeElement&&(!F.hasFocus||F.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:h(!1),disabled:h(!0),checked:function(a){
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
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!v.pseudos.empty(a)},
// Element/input types
header:function(a){return na.test(a.nodeName)},input:function(a){return ma.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
// Position-in-collection
first:i(function(){return[0]}),last:i(function(a,b){return[b-1]}),eq:i(function(a,b,c){return[c<0?c+b:c]}),even:i(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:i(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:i(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:i(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},v.pseudos.nth=v.pseudos.eq;
// Add button/input type pseudos
for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})v.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}(t);for(t in{submit:!0,reset:!0})v.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}(t);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return k.prototype=v.filters=v.pseudos,v.setFilters=new k,y=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=R[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=v.preFilter;h;){
// Comma and first run
d&&!(e=ga.exec(h))||(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ha.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(fa," ")}),h=h.slice(d.length));
// Filters
for(g in v.filter)!(e=la[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):R(a,i).slice(0)},z=b.compile=function(a,b){var c,d=[],e=[],f=S[a+" "];if(!f){for(
// Generate a function of recursive functions that can be used to check each element
b||(b=y(a)),c=b.length;c--;)f=r(b[c]),f[M]?d.push(f):e.push(f);
// Cache the compiled function
f=S(a,s(e,d)),
// Save selector and tokenization
f.selector=a}return f},A=b.select=function(a,b,c,d){var e,f,g,h,i,k="function"==typeof a&&a,m=!d&&y(a=k.selector||a);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(c=c||[],1===m.length){if(
// Reduce context if the leading compound selector is an ID
f=m[0]=m[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&9===b.nodeType&&H&&v.relative[f[1].type]){if(!(b=(v.find.ID(g.matches[0].replace(ra,sa),b)||[])[0]))return c;k&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
e=la.needsContext.test(a)?0:f.length;e--&&(g=f[e],!v.relative[h=g.type]);)if((i=v.find[h])&&(d=i(g.matches[0].replace(ra,sa),qa.test(f[0].type)&&j(b.parentNode)||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),!(a=d.length&&l(f)))return Y.apply(c,d),c;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(k||z(a,m))(d,b,!H,c,!b||qa.test(a)&&j(b.parentNode)||b),c},u.sortStable=M.split("").sort(T).join("")===M,u.detectDuplicates=!!D,E(),u.sortDetached=e(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(F.createElement("fieldset"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),u.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(_,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);oa.find=qa,oa.expr=qa.selectors,
// Deprecated
oa.expr[":"]=oa.expr.pseudos,oa.uniqueSort=oa.unique=qa.uniqueSort,oa.text=qa.getText,oa.isXMLDoc=qa.isXML,oa.contains=qa.contains,oa.escapeSelector=qa.escape;var ra=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&oa(a).is(c))break;d.push(a)}return d},sa=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},ta=oa.expr.match.needsContext,ua=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,va=/^.[^:#\[\.,]*$/;oa.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?oa.find.matchesSelector(d,a)?[d]:[]:oa.find.matches(a,oa.grep(b,function(a){return 1===a.nodeType}))},oa.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(oa(a).filter(function(){for(b=0;b<d;b++)if(oa.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)oa.find(a,e[b],c);return d>1?oa.uniqueSort(c):c},filter:function(a){return this.pushStack(f(this,a||[],!1))},not:function(a){return this.pushStack(f(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!f(this,"string"==typeof a&&ta.test(a)?oa(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var wa,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
xa=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(oa.fn.init=function(a,b,c){var d,e;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
c=c||wa,"string"==typeof a){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
d="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:xa.exec(a))||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(d[1]){
// HANDLE: $(html, props)
if(b=b instanceof oa?b[0]:b,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
oa.merge(this,oa.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:ca,!0)),ua.test(d[1])&&oa.isPlainObject(b))for(d in b)
// Properties of context are called as methods if possible
oa.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}
// Inject the element directly into the jQuery object
return e=ca.getElementById(d[2]),e&&(this[0]=e,this.length=1),this}
// Execute immediately if ready is not present
return a.nodeType?(this[0]=a,this.length=1,this):oa.isFunction(a)?void 0!==c.ready?c.ready(a):a(oa):oa.makeArray(a,this)}).prototype=oa.fn,
// Initialize central reference
wa=oa(ca);var ya=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
za={children:!0,contents:!0,next:!0,prev:!0};oa.fn.extend({has:function(a){var b=oa(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(oa.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&oa(a);
// Positional selectors never match, since there's no _selection_ context
if(!ta.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&oa.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?oa.uniqueSort(f):f)},
// Determine the position of an element within the set
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?ha.call(oa(a),this[0]):ha.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(oa.uniqueSort(oa.merge(this.get(),oa(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),oa.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ra(a,"parentNode")},parentsUntil:function(a,b,c){return ra(a,"parentNode",c)},next:function(a){return g(a,"nextSibling")},prev:function(a){return g(a,"previousSibling")},nextAll:function(a){return ra(a,"nextSibling")},prevAll:function(a){return ra(a,"previousSibling")},nextUntil:function(a,b,c){return ra(a,"nextSibling",c)},prevUntil:function(a,b,c){return ra(a,"previousSibling",c)},siblings:function(a){return sa((a.parentNode||{}).firstChild,a)},children:function(a){return sa(a.firstChild)},contents:function(a){
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
return e(a,"iframe")?a.contentDocument:(e(a,"template")&&(a=a.content||a),oa.merge([],a.childNodes))}},function(a,b){oa.fn[a]=function(c,d){var e=oa.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=oa.filter(d,e)),this.length>1&&(za[a]||oa.uniqueSort(e),ya.test(a)&&e.reverse()),this.pushStack(e)}});var Aa=/[^\x20\t\r\n\f]+/g;/*
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
oa.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?h(a):oa.extend({},a);var// Flag to know if list is currently firing
b,
// Last fire value for non-forgettable lists
c,
// Flag to know if list was already fired
d,
// Flag to prevent firing
e,
// Actual callback list
f=[],
// Queue of execution data for repeatable lists
g=[],
// Index of currently firing callback (modified by add/remove as needed)
i=-1,
// Fire callbacks
j=function(){for(
// Enforce single-firing
e=e||a.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
d=b=!0;g.length;i=-1)for(c=g.shift();++i<f.length;)
// Run callback and check for early termination
!1===f[i].apply(c[0],c[1])&&a.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
i=f.length,c=!1);
// Forget the data if we're done with it
a.memory||(c=!1),b=!1,
// Clean up if we're done firing for good
e&&(
// Keep an empty list if we have data for future add calls
f=c?[]:"")},
// Actual Callbacks object
k={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return f&&(c&&!b&&(i=f.length-1,g.push(c)),function b(c){oa.each(c,function(c,d){oa.isFunction(d)?a.unique&&k.has(d)||f.push(d):d&&d.length&&"string"!==oa.type(d)&&
// Inspect recursively
b(d)})}(arguments),c&&!b&&j()),this},
// Remove a callback from the list
remove:function(){return oa.each(arguments,function(a,b){for(var c;(c=oa.inArray(b,f,c))>-1;)f.splice(c,1),
// Handle firing indexes
c<=i&&i--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?oa.inArray(a,f)>-1:f.length>0},
// Remove all callbacks from the list
empty:function(){return f&&(f=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},
// Call all callbacks with the given context and arguments
fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||j()),this},
// Call all the callbacks with the given arguments
fire:function(){return k.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!d}};return k},oa.extend({Deferred:function(b){var c=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",oa.Callbacks("memory"),oa.Callbacks("memory"),2],["resolve","done",oa.Callbacks("once memory"),oa.Callbacks("once memory"),0,"resolved"],["reject","fail",oa.Callbacks("once memory"),oa.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},catch:function(a){return e.then(null,a)},
// Keep pipe for back-compat
pipe:function(){var a=arguments;return oa.Deferred(function(b){oa.each(c,function(c,d){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var e=oa.isFunction(a[d[4]])&&a[d[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&oa.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){function f(b,c,d,e){return function(){var h=this,k=arguments,l=function(){var a,l;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(b<g)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((a=d.apply(h,k))===c.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=a&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof a||"function"==typeof a)&&a.then,
// Handle a returned thenable
oa.isFunction(l)?
// Special processors (notify) just wait for resolution
e?l.call(a,f(g,c,i,e),f(g,c,j,e)):(
// ...and disregard older resolution values
g++,l.call(a,f(g,c,i,e),f(g,c,j,e),f(g,c,i,c.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
d!==i&&(h=void 0,k=[a]),
// Process the value(s)
// Default process is resolve
(e||c.resolveWith)(h,k))}},
// Only normal processors (resolve) catch and reject exceptions
m=e?l:function(){try{l()}catch(a){oa.Deferred.exceptionHook&&oa.Deferred.exceptionHook(a,m.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
b+1>=g&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
d!==j&&(h=void 0,k=[a]),c.rejectWith(h,k))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
b?m():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
oa.Deferred.getStackHook&&(m.stackTrace=oa.Deferred.getStackHook()),a.setTimeout(m))}}var g=0;return oa.Deferred(function(a){
// progress_handlers.add( ... )
c[0][3].add(f(0,a,oa.isFunction(e)?e:i,a.notifyWith)),
// fulfilled_handlers.add( ... )
c[1][3].add(f(0,a,oa.isFunction(b)?b:i)),
// rejected_handlers.add( ... )
c[2][3].add(f(0,a,oa.isFunction(d)?d:j))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?oa.extend(a,e):e}},f={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return oa.each(c,function(a,b){var g=b[2],h=b[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
e[b[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
d=h},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
c[3-a][2].disable,
// progress_callbacks.lock
c[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
g.add(b[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},
// Deferred helper
when:function(a){var
// count of uncompleted subordinates
b=arguments.length,
// count of unprocessed arguments
c=b,
// subordinate fulfillment data
d=Array(c),e=ea.call(arguments),
// the master Deferred
f=oa.Deferred(),
// subordinate callback factory
g=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?ea.call(arguments):c,--b||f.resolveWith(d,e)}};
// Single- and empty arguments are adopted like Promise.resolve
if(b<=1&&(k(a,f.done(g(c)).resolve,f.reject,!b),"pending"===f.state()||oa.isFunction(e[c]&&e[c].then)))return f.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;c--;)k(e[c],g(c),f.reject);return f.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Ba=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;oa.Deferred.exceptionHook=function(b,c){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
a.console&&a.console.warn&&b&&Ba.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},oa.readyException=function(b){a.setTimeout(function(){throw b})};
// The deferred used on DOM ready
var Ca=oa.Deferred();oa.fn.ready=function(a){return Ca.then(a).catch(function(a){oa.readyException(a)}),this},oa.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
(!0===a?--oa.readyWait:oa.isReady)||(
// Remember that the DOM is ready
oa.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==a&&--oa.readyWait>0||
// If there are functions bound, to execute
Ca.resolveWith(ca,[oa]))}}),oa.ready.then=Ca.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===ca.readyState||"loading"!==ca.readyState&&!ca.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
a.setTimeout(oa.ready):(
// Use the handy event callback
ca.addEventListener("DOMContentLoaded",l),
// A fallback to window.onload, that will always work
a.addEventListener("load",l));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Da=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===oa.type(c)){e=!0;for(h in c)Da(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,oa.isFunction(d)||(g=!0),j&&(
// Bulk operations run against the entire set
g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(oa(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f},Ea=function(a){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===a.nodeType||9===a.nodeType||!+a.nodeType};m.uid=1,m.prototype={cache:function(a){
// Check if the owner object already has a cache
var b=a[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return b||(b={},Ea(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof b)e[oa.camelCase(b)]=c;else
// Copy the properties one-by-one to the cache object
for(d in b)e[oa.camelCase(d)]=b[d];return e},get:function(a,b){
// Always use camelCase key (gh-2257)
return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][oa.camelCase(b)]},access:function(a,b,c){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){
// Support array or space separated string of keys
Array.isArray(b)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
b=b.map(oa.camelCase):(b=oa.camelCase(b),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
b=b in d?[b]:b.match(Aa)||[]),c=b.length;for(;c--;)delete d[b[c]]}
// Remove the expando if there's no more data
(void 0===b||oa.isEmptyObject(d))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!oa.isEmptyObject(b)}};var Fa=new m,Ga=new m,Ha=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ia=/[A-Z]/g;oa.extend({hasData:function(a){return Ga.hasData(a)||Fa.hasData(a)},data:function(a,b,c){return Ga.access(a,b,c)},removeData:function(a,b){Ga.remove(a,b)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(a,b,c){return Fa.access(a,b,c)},_removeData:function(a,b){Fa.remove(a,b)}}),oa.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Gets all values
if(void 0===a){if(this.length&&(e=Ga.get(f),1===f.nodeType&&!Fa.get(f,"hasDataAttrs"))){for(c=g.length;c--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=oa.camelCase(d.slice(5)),o(f,d,e[d])));Fa.set(f,"hasDataAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
return"object"==typeof a?this.each(function(){Ga.set(this,a)}):Da(this,function(b){var c;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(f&&void 0===b){if(void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
c=Ga.get(f,a)))return c;if(void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
c=o(f,a)))return c}else
// Set the data...
this.each(function(){
// We always store the camelCased key
Ga.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Ga.remove(this,a)})}}),oa.extend({queue:function(a,b,c){var d;if(a)
// Speed up dequeue by getting out quickly if this is just a lookup
return b=(b||"fx")+"queue",d=Fa.get(a,b),c&&(!d||Array.isArray(c)?d=Fa.access(a,b,oa.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=oa.queue(a,b),d=c.length,e=c.shift(),f=oa._queueHooks(a,b),g=function(){oa.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// Clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return Fa.get(a,c)||Fa.access(a,c,{empty:oa.Callbacks("once memory").add(function(){Fa.remove(a,[b+"queue",c])})})}}),oa.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?oa.queue(this[0],a):void 0===b?this:this.each(function(){var c=oa.queue(this,a,b);
// Ensure a hooks for this queue
oa._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&oa.dequeue(this,a)})},dequeue:function(a){return this.each(function(){oa.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=oa.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=Fa.get(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Ja=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ka=new RegExp("^(?:([+-])=|)("+Ja+")([a-z%]*)$","i"),La=["Top","Right","Bottom","Left"],Ma=function(a,b){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return a=b||a,"none"===a.style.display||""===a.style.display&&oa.contains(a.ownerDocument,a)&&"none"===oa.css(a,"display")},Na=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e},Oa={};oa.fn.extend({show:function(){return r(this,!0)},hide:function(){return r(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ma(this)?oa(this).show():oa(this).hide()})}});var Pa=/^(?:checkbox|radio)$/i,Qa=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ra=/^$|\/(?:java|ecma)script/i,Sa={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
Sa.optgroup=Sa.option,Sa.tbody=Sa.tfoot=Sa.colgroup=Sa.caption=Sa.thead,Sa.th=Sa.td;var Ta=/<|&#?\w+;/;!function(){var a=ca.createDocumentFragment(),b=a.appendChild(ca.createElement("div")),c=ca.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
na.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
b.innerHTML="<textarea>x</textarea>",na.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var Ua=ca.documentElement,Va=/^key/,Wa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Xa=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
oa.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Fa.get(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q)for(
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(f=c,c=f.handler,e=f.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
e&&oa.find.matchesSelector(Ua,e),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=oa.guid++),
// Init the element's event structure and main handler, if this is the first
(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==oa&&oa.event.triggered!==b.type?oa.event.dispatch.apply(a,arguments):void 0}),
// Handle multiple events separated by a space
b=(b||"").match(Aa)||[""],j=b.length;j--;)h=Xa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
n&&(
// If event changes its type, use the special event handlers for the changed type
l=oa.event.special[n]||{},
// If selector defined, determine special event api type, otherwise given type
n=(e?l.delegateType:l.bindType)||n,
// Update special based on newly reset type
l=oa.event.special[n]||{},
// handleObj is passed to all event handlers
k=oa.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&oa.expr.match.needsContext.test(e),namespace:o.join(".")},f),
// Init the event handler queue if we're the first
(m=i[n])||(m=i[n]=[],m.delegateCount=0,
// Only use addEventListener if the special events handler returns false
l.setup&&!1!==l.setup.call(a,d,o,g)||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),
// Add to the element's handler list, delegates in front
e?m.splice(m.delegateCount++,0,k):m.push(k),
// Keep track of which events have ever been used, for event optimization
oa.event.global[n]=!0)},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Fa.hasData(a)&&Fa.get(a);if(q&&(i=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(Aa)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=Xa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=oa.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
g&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle)||oa.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)oa.event.remove(a,n+b[j],c,d,!0);
// Remove data and the expando if it's no longer used
oa.isEmptyObject(i)&&Fa.remove(a,"handle events")}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
var b,c,d,e,f,g,h=oa.event.fix(a),i=new Array(arguments.length),j=(Fa.get(this,"events")||{})[h.type]||[],k=oa.event.special[h.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
i[0]=h,b=1;b<arguments.length;b++)i[b]=arguments[b];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(h.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,h)){for(
// Determine handlers
g=oa.event.handlers.call(this,h,j),
// Run delegates first; they may want to stop propagation beneath us
b=0;(e=g[b++])&&!h.isPropagationStopped();)for(h.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!h.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
h.rnamespace&&!h.rnamespace.test(f.namespace)||(h.handleObj=f,h.data=f.data,void 0!==(d=((oa.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,i))&&!1===(h.result=d)&&(h.preventDefault(),h.stopPropagation()));
// Call the postDispatch hook for the mapped type
return k.postDispatch&&k.postDispatch.call(this,h),h.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;
// Find delegate handlers
if(i&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
j.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===j.nodeType&&("click"!==a.type||!0!==j.disabled)){for(f=[],g={},c=0;c<i;c++)d=b[c],
// Don't conflict with Object.prototype properties (#13203)
e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?oa(e,this).index(j)>-1:oa.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}
// Add the remaining (directly-bound) handlers
return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(oa.Event.prototype,a,{enumerable:!0,configurable:!0,get:oa.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[oa.expando]?a:new oa.Event(a)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==x()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===x()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&e(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return e(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},oa.removeEvent=function(a,b,c){
// This "if" is needed for plain objects
a.removeEventListener&&a.removeEventListener(b,c)},oa.Event=function(a,b){
// Allow instantiation without the 'new' keyword
if(!(this instanceof oa.Event))return new oa.Event(a,b);
// Event object
a&&a.type?(this.originalEvent=a,this.type=a.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&
// Support: Android <=2.3 only
!1===a.returnValue?v:w,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,
// Put explicitly provided properties onto the event object
b&&oa.extend(this,b),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=a&&a.timeStamp||oa.now(),
// Mark it as fixed
this[oa.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
oa.Event.prototype={constructor:oa.Event,isDefaultPrevented:w,isPropagationStopped:w,isImmediatePropagationStopped:w,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=v,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=v,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=v,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
oa.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==a.which&&Va.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&Wa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},oa.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
oa.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){oa.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return e&&(e===d||oa.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),oa.fn.extend({on:function(a,b,c,d){return y(this,a,b,c,d)},one:function(a,b,c,d){return y(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,oa(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=w),this.each(function(){oa.event.remove(this,a,c,b)})}});var/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
Ya=/<script|<style|<link/i,
// checked="checked" or checked
Za=/checked\s*(?:[^=]|=\s*.checked.)/i,$a=/^true\/(.*)/,_a=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;oa.extend({htmlPrefilter:function(a){return a.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=oa.contains(a.ownerDocument,a);
// Fix IE cloning issues
if(!(na.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||oa.isXMLDoc(a)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
g=s(h),f=s(a),d=0,e=f.length;d<e;d++)D(f[d],g[d]);
// Copy the events from the original to the clone
if(b)if(c)for(f=f||s(a),g=g||s(h),d=0,e=f.length;d<e;d++)C(f[d],g[d]);else C(a,h);
// Return the cloned set
// Preserve script evaluation history
return g=s(h,"script"),g.length>0&&t(g,!i&&s(a,"script")),h},cleanData:function(a){for(var b,c,d,e=oa.event.special,f=0;void 0!==(c=a[f]);f++)if(Ea(c)){if(b=c[Fa.expando]){if(b.events)for(d in b.events)e[d]?oa.event.remove(c,d):oa.removeEvent(c,d,b.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
c[Fa.expando]=void 0}c[Ga.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
c[Ga.expando]=void 0)}}}),oa.fn.extend({detach:function(a){return F(this,a,!0)},remove:function(a){return F(this,a)},text:function(a){return Da(this,function(a){return void 0===a?oa.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return E(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){z(this,a).appendChild(a)}})},prepend:function(){return E(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=z(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return E(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return E(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(
// Prevent memory leaks
oa.cleanData(s(a,!1)),
// Remove any remaining nodes
a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return oa.clone(this,a,b)})},html:function(a){return Da(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!Ya.test(a)&&!Sa[(Qa.exec(a)||["",""])[1].toLowerCase()]){a=oa.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},
// Remove element nodes and prevent memory leaks
1===b.nodeType&&(oa.cleanData(s(b,!1)),b.innerHTML=a);b=0}catch(a){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];
// Make the changes, replacing each non-ignored context element with the new content
return E(this,arguments,function(b){var c=this.parentNode;oa.inArray(this,a)<0&&(oa.cleanData(s(this)),c&&c.replaceChild(b,this))},a)}}),oa.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){oa.fn[a]=function(a){for(var c,d=[],e=oa(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),oa(e[g])[b](c),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ga.apply(d,c.get());return this.pushStack(d)}});var ab=/^margin/,bb=new RegExp("^("+Ja+")(?!px)[a-z%]+$","i"),cb=function(b){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function b(){
// This is a singleton, we need to execute it only once
if(h){h.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ua.appendChild(g);var b=a.getComputedStyle(h);c="1%"!==b.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
f="2px"===b.marginLeft,d="4px"===b.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
h.style.marginRight="50%",e="4px"===b.marginRight,Ua.removeChild(g),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
h=null}}var c,d,e,f,g=ca.createElement("div"),h=ca.createElement("div");
// Finish early in limited (non-browser) environments
h.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",na.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h),oa.extend(na,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),d},pixelMarginRight:function(){return b(),e},reliableMarginLeft:function(){return b(),f}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
db=/^(none|table(?!-c[ea]).+)/,eb=/^--/,fb={position:"absolute",visibility:"hidden",display:"block"},gb={letterSpacing:"0",fontWeight:"400"},hb=["Webkit","Moz","ms"],ib=ca.createElement("div").style;oa.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=G(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{float:"cssFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=oa.camelCase(b),i=eb.test(b),j=a.style;
// Check if we're setting a value
if(
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
i||(b=J(h)),
// Gets hook for the prefixed version, then unprefixed version
g=oa.cssHooks[b]||oa.cssHooks[h],void 0===c)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b];f=typeof c,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===f&&(e=Ka.exec(c))&&e[1]&&(c=p(a,b,e),
// Fixes bug #9237
f="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=c&&c===c&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===f&&(c+=e&&e[3]||(oa.cssNumber[h]?"":"px")),
// background-* props affect original clone's values
na.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c))}},css:function(a,b,c,d){var e,f,g,h=oa.camelCase(b);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return eb.test(b)||(b=J(h)),g=oa.cssHooks[b]||oa.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=G(a,b,d)),"normal"===e&&b in gb&&(e=gb[b]),""===c||c?(f=parseFloat(e),!0===c||isFinite(f)?f||0:e):e}}),oa.each(["height","width"],function(a,b){oa.cssHooks[b]={get:function(a,c,d){if(c)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!db.test(oa.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?M(a,b,d):Na(a,fb,function(){return M(a,b,d)})},set:function(a,c,d){var e,f=d&&cb(a),g=d&&L(a,b,d,"border-box"===oa.css(a,"boxSizing",!1,f),f);
// Convert to pixels if value adjustment is needed
return g&&(e=Ka.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=oa.css(a,b)),K(a,c,g)}}}),oa.cssHooks.marginLeft=H(na.reliableMarginLeft,function(a,b){if(b)return(parseFloat(G(a,"marginLeft"))||a.getBoundingClientRect().left-Na(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
oa.each({margin:"",padding:"",border:"Width"},function(a,b){oa.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// Assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+La[d]+b]=f[d]||f[d-2]||f[0];return e}},ab.test(a)||(oa.cssHooks[a+b].set=K)}),oa.fn.extend({css:function(a,b){return Da(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=cb(a),e=b.length;g<e;g++)f[b[g]]=oa.css(a,b[g],!1,d);return f}return void 0!==c?oa.style(a,b,c):oa.css(a,b)},a,b,arguments.length>1)}}),oa.Tween=N,N.prototype={constructor:N,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||oa.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(oa.cssNumber[c]?"":"px")},cur:function(){var a=N.propHooks[this.prop];return a&&a.get?a.get(this):N.propHooks._default.get(this)},run:function(a){var b,c=N.propHooks[this.prop];return this.options.duration?this.pos=b=oa.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):N.propHooks._default.set(this),this}},N.prototype.init.prototype=N.prototype,N.propHooks={_default:{get:function(a){var b;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=oa.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
oa.fx.step[a.prop]?oa.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[oa.cssProps[a.prop]]&&!oa.cssHooks[a.prop]?a.elem[a.prop]=a.now:oa.style(a.elem,a.prop,a.now+a.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
N.propHooks.scrollTop=N.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},oa.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},oa.fx=N.prototype.init,
// Back compat <1.8 extension point
oa.fx.step={};var jb,kb,lb=/^(?:toggle|show|hide)$/,mb=/queueHooks$/;oa.Animation=oa.extend(U,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return p(c.elem,a,Ka.exec(b),c),c}]},tweener:function(a,b){oa.isFunction(a)?(b=a,a=["*"]):a=a.match(Aa);for(var c,d=0,e=a.length;d<e;d++)c=a[d],U.tweeners[c]=U.tweeners[c]||[],U.tweeners[c].unshift(b)},prefilters:[S],prefilter:function(a,b){b?U.prefilters.unshift(a):U.prefilters.push(a)}}),oa.speed=function(a,b,c){var d=a&&"object"==typeof a?oa.extend({},a):{complete:c||!c&&b||oa.isFunction(a)&&a,duration:a,easing:c&&b||b&&!oa.isFunction(b)&&b};
// Go to the end state if fx are off
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return oa.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in oa.fx.speeds?d.duration=oa.fx.speeds[d.duration]:d.duration=oa.fx.speeds._default),null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){oa.isFunction(d.old)&&d.old.call(this),d.queue&&oa.dequeue(this,d.queue)},d},oa.fn.extend({fadeTo:function(a,b,c,d){
// Show any hidden elements after setting opacity to 0
return this.filter(Ma).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=oa.isEmptyObject(a),f=oa.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=U(this,oa.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||Fa.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=oa.timers,g=Fa.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&mb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!b&&c||oa.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=Fa.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=oa.timers,g=d?d.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
c.finish=!0,
// Empty the queue first
oa.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// Look for any animations in the old queue and finish them
for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// Turn off finishing flag
delete c.finish})}}),oa.each(["toggle","show","hide"],function(a,b){var c=oa.fn[b];oa.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Q(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
oa.each({slideDown:Q("show"),slideUp:Q("hide"),slideToggle:Q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){oa.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),oa.timers=[],oa.fx.tick=function(){var a,b=0,c=oa.timers;for(jb=oa.now();b<c.length;b++)
// Run the timer and safely remove it when done (allowing for external removal)
(a=c[b])()||c[b]!==a||c.splice(b--,1);c.length||oa.fx.stop(),jb=void 0},oa.fx.timer=function(a){oa.timers.push(a),oa.fx.start()},oa.fx.interval=13,oa.fx.start=function(){kb||(kb=!0,O())},oa.fx.stop=function(){kb=null},oa.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
oa.fn.delay=function(b,c){return b=oa.fx?oa.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=ca.createElement("input"),b=ca.createElement("select"),c=b.appendChild(ca.createElement("option"));a.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
na.checkOn=""!==a.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
na.optSelected=c.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
a=ca.createElement("input"),a.value="t",a.type="radio",na.radioValue="t"===a.value}();var nb,ob=oa.expr.attrHandle;oa.fn.extend({attr:function(a,b){return Da(this,oa.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){oa.removeAttr(this,a)})}}),oa.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return void 0===a.getAttribute?oa.prop(a,b,c):(1===f&&oa.isXMLDoc(a)||(e=oa.attrHooks[b.toLowerCase()]||(oa.expr.match.bool.test(b)?nb:void 0)),void 0!==c?null===c?void oa.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=oa.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!na.radioValue&&"radio"===b&&e(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
e=b&&b.match(Aa);if(e&&1===a.nodeType)for(;c=e[d++];)a.removeAttribute(c)}}),
// Hooks for boolean attributes
nb={set:function(a,b,c){
// Remove boolean attributes when set to false
return!1===b?oa.removeAttr(a,c):a.setAttribute(c,c),c}},oa.each(oa.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||oa.find.attr;ob[b]=function(a,b,d){var e,f,g=b.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return d||(f=ob[g],ob[g]=e,e=null!=c(a,b,d)?g:null,ob[g]=f),e}});var pb=/^(?:input|select|textarea|button)$/i,qb=/^(?:a|area)$/i;oa.fn.extend({prop:function(a,b){return Da(this,oa.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[oa.propFix[a]||a]})}}),oa.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fix name and attach hooks
return 1===f&&oa.isXMLDoc(a)||(b=oa.propFix[b]||b,e=oa.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var b=oa.find.attr(a,"tabindex");return b?parseInt(b,10):pb.test(a.nodeName)||qb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
na.optSelected||(oa.propHooks.selected={get:function(a){/* eslint no-unused-expressions: "off" */
var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){/* eslint no-unused-expressions: "off" */
var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),oa.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oa.propFix[this.toLowerCase()]=this}),oa.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(oa.isFunction(a))return this.each(function(b){oa(this).addClass(a.call(this,b,W(this)))});if("string"==typeof a&&a)for(b=a.match(Aa)||[];c=this[i++];)if(e=W(c),d=1===c.nodeType&&" "+V(e)+" "){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");
// Only assign if different to avoid unneeded rendering.
h=V(d),e!==h&&c.setAttribute("class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(oa.isFunction(a))return this.each(function(b){oa(this).removeClass(a.call(this,b,W(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Aa)||[];c=this[i++];)if(e=W(c),
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&" "+V(e)+" "){for(g=0;f=b[g++];)
// Remove *all* instances
for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");
// Only assign if different to avoid unneeded rendering.
h=V(d),e!==h&&c.setAttribute("class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):oa.isFunction(a)?this.each(function(c){oa(this).toggleClass(a.call(this,c,W(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(
// Toggle individual class names
d=0,e=oa(this),f=a.match(Aa)||[];b=f[d++];)
// Check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=W(this),b&&
// Store className if set
Fa.set(this,"__className__",b),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",b||!1===a?"":Fa.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+V(W(c))+" ").indexOf(b)>-1)return!0;return!1}});oa.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=oa.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,oa(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=oa.map(e,function(a){return null==a?"":a+""})),
// If set returns undefined, fall back to normal setting
(b=oa.valHooks[this.type]||oa.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// Handle most common string cases
return(b=oa.valHooks[e.type]||oa.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(/\r/g,""):null==c?"":c)}}}),oa.extend({valHooks:{option:{get:function(a){var b=oa.find.attr(a,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=b?b:V(oa.text(a))}},select:{get:function(a){var b,c,d,f=a.options,g=a.selectedIndex,h="select-one"===a.type,i=h?null:[],j=h?g+1:f.length;
// Loop through all the selected options
for(d=g<0?j:h?g:0;d<j;d++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(c=f[d],(c.selected||d===g)&&
// Don't return options that are disabled or in a disabled optgroup
!c.disabled&&(!c.parentNode.disabled||!e(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=oa(c).val(),h)return b;
// Multi-Selects return an array
i.push(b)}return i},set:function(a,b){for(var c,d,e=a.options,f=oa.makeArray(b),g=e.length;g--;)d=e[g],/* eslint-disable no-cond-assign */
(d.selected=oa.inArray(oa.valHooks.option.get(d),f)>-1)&&(c=!0);
// Force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),f}}}}),
// Radios and checkboxes getter/setter
oa.each(["radio","checkbox"],function(){oa.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=oa.inArray(oa(a).val(),b)>-1}},na.checkOn||(oa.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});
// Return jQuery for attributes-only inclusion
var rb=/^(?:focusinfocus|focusoutblur)$/;oa.extend(oa.event,{trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||ca],n=ka.call(b,"type")?b.type:b,o=ka.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(g=h=d=d||ca,3!==d.nodeType&&8!==d.nodeType&&!rb.test(n+oa.event.triggered)&&(n.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[oa.expando]?b:new oa.Event(n,"object"==typeof b&&b),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
b.result=void 0,b.target||(b.target=d),
// Clone any incoming data and prepend the event, creating the handler arg list
c=null==c?[b]:oa.makeArray(c,[b]),
// Allow special events to draw outside the lines
l=oa.event.special[n]||{},e||!l.trigger||!1!==l.trigger.apply(d,c))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!l.noBubble&&!oa.isWindow(d)){for(i=l.delegateType||n,rb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
h===(d.ownerDocument||ca)&&m.push(h.defaultView||h.parentWindow||a)}for(
// Fire handlers on the event path
f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,
// jQuery handler
k=(Fa.get(g,"events")||{})[b.type]&&Fa.get(g,"handle"),k&&k.apply(g,c),(
// Native handler
k=j&&g[j])&&k.apply&&Ea(g)&&(b.result=k.apply(g,c),!1===b.result&&b.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return b.type=n,e||b.isDefaultPrevented()||l._default&&!1!==l._default.apply(m.pop(),c)||!Ea(d)||j&&oa.isFunction(d[n])&&!oa.isWindow(d)&&(h=d[j],h&&(d[j]=null),oa.event.triggered=n,d[n](),oa.event.triggered=void 0,h&&(d[j]=h)),b.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(a,b,c){var d=oa.extend(new oa.Event,c,{type:a,isSimulated:!0});oa.event.trigger(d,null,b)}}),oa.fn.extend({trigger:function(a,b){return this.each(function(){oa.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return oa.event.trigger(a,b,c,!0)}}),oa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){
// Handle event binding
oa.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),oa.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),na.focusin="onfocusin"in a,
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
na.focusin||oa.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){oa.event.simulate(b,a.target,oa.event.fix(a))};oa.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=Fa.access(d,b);e||d.addEventListener(a,c,!0),Fa.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=Fa.access(d,b)-1;e?Fa.access(d,b,e):(d.removeEventListener(a,c,!0),Fa.remove(d,b))}}});var sb=a.location,tb=oa.now(),ub=/\?/;
// Cross-browser xml parsing
oa.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(a){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||oa.error("Invalid XML: "+b),c};var vb=/\[\]$/,wb=/^(?:submit|button|image|reset|file)$/i,xb=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
oa.param=function(a,b){var c,d=[],e=function(a,b){
// If value is a function, invoke it and use its return value
var c=oa.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!oa.isPlainObject(a))
// Serialize the form elements
oa.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)X(c,a[c],b,e);
// Return the resulting serialization
return d.join("&")},oa.fn.extend({serialize:function(){return oa.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=oa.prop(this,"elements");return a?oa.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!oa(this).is(":disabled")&&xb.test(this.nodeName)&&!wb.test(a)&&(this.checked||!Pa.test(a))}).map(function(a,b){var c=oa(this).val();return null==c?null:Array.isArray(c)?oa.map(c,function(a){return{name:b.name,value:a.replace(/\r?\n/g,"\r\n")}}):{name:b.name,value:c.replace(/\r?\n/g,"\r\n")}}).get()}});var yb=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
zb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ab=/^(?:GET|HEAD)$/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Bb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Cb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Db="*/".concat("*"),
// Anchor tag for parsing the document origin
Eb=ca.createElement("a");Eb.href=sb.href,oa.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:sb.href,type:"GET",isLocal:zb.test(sb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
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
accepts:{"*":Db,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":oa.parseXML},
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
return b?$($(a,oa.ajaxSettings),b):$(oa.ajaxSettings,a)},ajaxPrefilter:Y(Bb),ajaxTransport:Y(Cb),
// Main method
ajax:function(b,c){
// Callback for when everything is done
function d(b,c,d,h){var j,m,n,u,v,w=c;
// Ignore repeat invocations
k||(k=!0,
// Clear timeout if it exists
i&&a.clearTimeout(i),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
e=void 0,
// Cache response headers
g=h||"",
// Set readyState
x.readyState=b>0?4:0,
// Determine if successful
j=b>=200&&b<300||304===b,
// Get response data
d&&(u=_(o,x,d)),
// Convert no matter what (that way responseXXX fields are always set)
u=aa(o,u,x,j),
// If successful, handle type chaining
j?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
o.ifModified&&(v=x.getResponseHeader("Last-Modified"),v&&(oa.lastModified[f]=v),(v=x.getResponseHeader("etag"))&&(oa.etag[f]=v)),
// if no content
204===b||"HEAD"===o.type?w="nocontent":304===b?w="notmodified":(w=u.state,m=u.data,n=u.error,j=!n)):(
// Extract error from statusText and normalize for non-aborts
n=w,!b&&w||(w="error",b<0&&(b=0))),
// Set data for the fake xhr object
x.status=b,x.statusText=(c||w)+"",
// Success/Error
j?r.resolveWith(p,[m,w,x]):r.rejectWith(p,[x,w,n]),
// Status-dependent callbacks
x.statusCode(t),t=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[x,o,j?m:n]),
// Complete
s.fireWith(p,[x,w]),l&&(q.trigger("ajaxComplete",[x,o]),
// Handle the global AJAX counter
--oa.active||oa.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof b&&(c=b,b=void 0),
// Force options to be an object
c=c||{};var e,
// URL without anti-cache param
f,
// Response headers
g,h,
// timeout handle
i,
// Url cleanup var
j,
// Request state (becomes false upon send and true upon completion)
k,
// To know if global events are to be dispatched
l,
// Loop variable
m,
// uncached part of the url
n,
// Create the final options object
o=oa.ajaxSetup({},c),
// Callbacks context
p=o.context||o,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
q=o.context&&(p.nodeType||p.jquery)?oa(p):oa.event,
// Deferreds
r=oa.Deferred(),s=oa.Callbacks("once memory"),
// Status-dependent callbacks
t=o.statusCode||{},
// Headers (they are sent all at once)
u={},v={},
// Default abort message
w="canceled",
// Fake xhr
x={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(k){if(!h)for(h={};b=yb.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return k?g:null},
// Caches the header
setRequestHeader:function(a,b){return null==k&&(a=v[a.toLowerCase()]=v[a.toLowerCase()]||a,u[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(k)
// Execute the appropriate callbacks
x.always(a[x.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(b in a)t[b]=[t[b],a[b]];return this},
// Cancel the request
abort:function(a){var b=a||w;return e&&e.abort(b),d(0,b),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
r.promise(x),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
o.url=((b||o.url||sb.href)+"").replace(/^\/\//,sb.protocol+"//"),
// Alias method option to type as per ticket #12004
o.type=c.method||c.type||o.method||o.type,
// Extract dataTypes list
o.dataTypes=(o.dataType||"*").toLowerCase().match(Aa)||[""],null==o.crossDomain){j=ca.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{j.href=o.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
j.href=j.href,o.crossDomain=Eb.protocol+"//"+Eb.host!=j.protocol+"//"+j.host}catch(a){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
o.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
o.data&&o.processData&&"string"!=typeof o.data&&(o.data=oa.param(o.data,o.traditional)),
// Apply prefilters
Z(Bb,o,c,x),k)return x;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
l=oa.event&&o.global,
// Watch for a new set of requests
l&&0==oa.active++&&oa.event.trigger("ajaxStart"),
// Uppercase the type
o.type=o.type.toUpperCase(),
// Determine if request has content
o.hasContent=!Ab.test(o.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
f=o.url.replace(/#.*$/,""),
// More options handling for requests with no content
o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(/%20/g,"+")):(
// Remember the hash so we can put it back
n=o.url.slice(f.length),
// If data is available, append data to url
o.data&&(f+=(ub.test(f)?"&":"?")+o.data,
// #9682: remove data so that it's not used in an eventual retry
delete o.data),
// Add or update anti-cache param if needed
!1===o.cache&&(f=f.replace(/([?&])_=[^&]*/,"$1"),n=(ub.test(f)?"&":"?")+"_="+tb+++n),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
o.url=f+n),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
o.ifModified&&(oa.lastModified[f]&&x.setRequestHeader("If-Modified-Since",oa.lastModified[f]),oa.etag[f]&&x.setRequestHeader("If-None-Match",oa.etag[f])),
// Set the correct header, if data is being sent
(o.data&&o.hasContent&&!1!==o.contentType||c.contentType)&&x.setRequestHeader("Content-Type",o.contentType),
// Set the Accepts header for the server, depending on the dataType
x.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Db+"; q=0.01":""):o.accepts["*"]);
// Check for headers option
for(m in o.headers)x.setRequestHeader(m,o.headers[m]);
// Allow custom headers/mimetypes and early abort
if(o.beforeSend&&(!1===o.beforeSend.call(p,x,o)||k))
// Abort if not done already and return
return x.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
w="abort",
// Install callbacks on deferreds
s.add(o.complete),x.done(o.success),x.fail(o.error),
// Get transport
e=Z(Cb,o,c,x)){
// If request was aborted inside ajaxSend, stop there
if(x.readyState=1,
// Send global event
l&&q.trigger("ajaxSend",[x,o]),k)return x;
// Timeout
o.async&&o.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},o.timeout));try{k=!1,e.send(u,d)}catch(a){
// Rethrow post-completion exceptions
if(k)throw a;
// Propagate others as results
d(-1,a)}}else d(-1,"No Transport");return x},getJSON:function(a,b,c){return oa.get(a,b,c,"json")},getScript:function(a,b){return oa.get(a,void 0,b,"script")}}),oa.each(["get","post"],function(a,b){oa[b]=function(a,c,d,e){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return oa.isFunction(c)&&(e=e||d,d=c,c=void 0),oa.ajax(oa.extend({url:a,type:b,dataType:e,data:c,success:d},oa.isPlainObject(a)&&a))}}),oa._evalUrl=function(a){return oa.ajax({url:a,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},oa.fn.extend({wrapAll:function(a){var b;
// The elements to wrap the target around
return this[0]&&(oa.isFunction(a)&&(a=a.call(this[0])),b=oa(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return oa.isFunction(a)?this.each(function(b){oa(this).wrapInner(a.call(this,b))}):this.each(function(){var b=oa(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=oa.isFunction(a);return this.each(function(c){oa(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){oa(this).replaceWith(this.childNodes)}),this}}),oa.expr.pseudos.hidden=function(a){return!oa.expr.pseudos.visible(a)},oa.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},oa.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(a){}};var Fb={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Gb=oa.ajaxSettings.xhr();na.cors=!!Gb&&"withCredentials"in Gb,na.ajax=Gb=!!Gb,oa.ajaxTransport(function(b){var c,d;
// Cross domain only allowed if supported through XMLHttpRequest
if(na.cors||Gb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();
// Apply custom fields if provided
if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];
// Override mime type if needed
b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(g in e)h.setRequestHeader(g,e[g]);
// Callback
c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof h.status?f(0,"error"):f(
// File: protocol always yields status 0; see #8605, #14207
h.status,h.statusText):f(Fb[h.status]||h.status,h.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},
// Listen to events
h.onload=c(),d=h.onerror=c("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===h.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
a.setTimeout(function(){c&&d()})},
// Create the abort callback
c=c("abort");try{
// Do send the request (this may raise an exception)
h.send(b.hasContent&&b.data||null)}catch(a){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(c)throw a}},abort:function(){c&&c()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
oa.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),
// Install script dataType
oa.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return oa.globalEval(a),a}}}),
// Handle cache's special case and crossDomain
oa.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),
// Bind script tag hack transport
oa.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var b,c;return{send:function(d,e){b=oa("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
ca.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hb=[],Ib=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
oa.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hb.pop()||oa.expando+"_"+tb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
oa.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(Ib.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ib.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(h||"jsonp"===b.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return e=b.jsonpCallback=oa.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ib,"$1"+e):!1!==b.jsonp&&(b.url+=(ub.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||oa.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){
// If previous value didn't exist - remove it
void 0===f?oa(a).removeProp(e):a[e]=f,
// Save back as free
b[e]&&(
// Make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback,
// Save the callback name for future use
Hb.push(e)),
// Call if it was a function and we have a response
g&&oa.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
na.createHTMLDocument=function(){var a=ca.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
oa.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var d,e,f;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return b||(na.createHTMLDocument?(b=ca.implementation.createHTMLDocument(""),d=b.createElement("base"),d.href=ca.location.href,b.head.appendChild(d)):b=ca),e=ua.exec(a),f=!c&&[],e?[b.createElement(e[1])]:(e=u([a],b,f),f&&f.length&&oa(f).remove(),oa.merge([],e.childNodes))},/**
 * Load a url into a page
 */
oa.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>-1&&(d=V(a.slice(h)),a=a.slice(0,h)),oa.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&oa.ajax({url:a,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:e||"GET",dataType:"html",data:b}).done(function(a){
// Save response for use in complete callback
f=arguments,g.html(d?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
oa("<div>").append(oa.parseHTML(a)).find(d):
// Otherwise use the full result
a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},
// Attach a bunch of functions for handling common AJAX events
oa.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){oa.fn[b]=function(a){return this.on(b,a)}}),oa.expr.pseudos.animated=function(a){return oa.grep(oa.timers,function(b){return a===b.elem}).length},oa.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=oa.css(a,"position"),l=oa(a),m={};
// Set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=oa.css(a,"top"),i=oa.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),oa.isFunction(b)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
b=b.call(a,c,oa.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},oa.fn.extend({offset:function(a){
// Preserve chaining for setter
if(arguments.length)return void 0===a?this:this.each(function(b){oa.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===oa.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),e(a[0],"html")||(d=a.offset()),d={top:d.top+oa.css(a[0],"borderTopWidth",!0),left:d.left+oa.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-oa.css(c,"marginTop",!0),left:b.left-d.left-oa.css(c,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"static"===oa.css(a,"position");)a=a.offsetParent;return a||Ua})}}),
// Create scrollLeft and scrollTop methods
oa.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;oa.fn[a]=function(d){return Da(this,function(a,d,e){
// Coalesce documents and windows
var f;if(oa.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e)return f?f[b]:a[d];f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e},a,d,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
oa.each(["top","left"],function(a,b){oa.cssHooks[b]=H(na.pixelPosition,function(a,c){if(c)
// If curCSS returns percentage, fallback to offset
return c=G(a,b),bb.test(c)?oa(a).position()[b]+"px":c})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
oa.each({Height:"height",Width:"width"},function(a,b){oa.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// Margin is only for outerHeight, outerWidth
oa.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(!0===e||!0===f?"margin":"border");return Da(this,function(b,c,e){var f;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return oa.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?oa.css(b,c,h):oa.style(b,c,e,h)},b,g?e:void 0,g)}})}),oa.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),oa.holdReady=function(a){a?oa.readyWait++:oa.ready(!0)},oa.isArray=Array.isArray,oa.parseJSON=JSON.parse,oa.nodeName=e,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return oa});var
// Map over jQuery in case of overwrite
Jb=a.jQuery,
// Map over the $ in case of overwrite
Kb=a.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return oa.noConflict=function(b){return a.$===oa&&(a.$=Kb),b&&a.jQuery===oa&&(a.jQuery=Jb),oa},b||(a.jQuery=a.$=oa),oa});
/*! grunt 最后修改于： 2017-04-08 */