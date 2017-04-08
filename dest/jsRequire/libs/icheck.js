/*! grunt-0.0.1.js 压缩于：2017-04-08 09:08 */

/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */
!function(a){
// Do something with inputs
function b(a,b,e){var f=a[0],g=/er/.test(e)?_indeterminate:/bl/.test(e)?n:l,h=e==_update?{checked:f[l],disabled:f[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:f[g];
// Check, disable or indeterminate
if(/^(ch|di|in)/.test(e)&&!h)c(a,g);else if(/^(un|en|de)/.test(e)&&h)d(a,g);else if(e==_update)
// Handle states
for(var i in h)h[i]?c(a,i,!0):d(a,i,!0);else b&&"toggle"!=e||(
// Helper or label was clicked
b||a[_callback]("ifClicked"),
// Toggle checked state
h?f[_type]!==k&&d(a,g):c(a,g))}
// Add checked, disabled or indeterminate state
function c(b,c,e){var o=b[0],p=b.parent(),q=c==l,r=c==_indeterminate,s=c==n,t=r?_determinate:q?m:"enabled",u=f(b,t+g(o[_type])),v=f(b,c+g(o[_type]));
// Prevent unnecessary actions
if(!0!==o[c]){
// Toggle assigned radio buttons
if(!e&&c==l&&o[_type]==k&&o.name){var w=b.closest("form"),x='input[name="'+o.name+'"]';x=w.length?w.find(x):a(x),x.each(function(){this!==o&&a(this).data(i)&&d(a(this),c)})}
// Indeterminate state
r?(
// Add indeterminate state
o[c]=!0,
// Remove checked state
o[l]&&d(b,l,"force")):(
// Add checked or disabled state
e||(o[c]=!0),
// Remove indeterminate state
q&&o[_indeterminate]&&d(b,_indeterminate,!1)),
// Trigger callbacks
h(b,q,c,e)}
// Add proper cursor
o[n]&&f(b,_cursor,!0)&&p.find("."+j).css(_cursor,"default"),
// Add state class
p[_add](v||f(b,c)||""),
// Set ARIA attribute
p.attr("role")&&!r&&p.attr("aria-"+(s?n:l),"true"),
// Remove regular state class
p[_remove](u||f(b,t)||"")}
// Remove checked, disabled or indeterminate state
function d(a,b,c){var d=a[0],e=a.parent(),i=b==l,k=b==_indeterminate,o=b==n,p=k?_determinate:i?m:"enabled",q=f(a,p+g(d[_type])),r=f(a,b+g(d[_type]));
// Prevent unnecessary actions
!1!==d[b]&&(
// Toggle state
!k&&c&&"force"!=c||(d[b]=!1),
// Trigger callbacks
h(a,i,p,c)),
// Add proper cursor
!d[n]&&f(a,_cursor,!0)&&e.find("."+j).css(_cursor,"pointer"),
// Remove state class
e[_remove](r||f(a,b)||""),
// Set ARIA attribute
e.attr("role")&&!k&&e.attr("aria-"+(o?n:l),"false"),
// Add regular state class
e[_add](q||f(a,p)||"")}
// Remove all traces
function e(b,c){b.data(i)&&(
// Remove everything except input
b.parent().html(b.attr("style",b.data(i).s||"")),
// Callback
c&&b[_callback](c),
// Unbind events
b.off(".i").unwrap(),a(_label+'[for="'+b[0].id+'"]').add(b.closest(_label)).off(".i"))}
// Get some option
function f(a,b,c){if(a.data(i))return a.data(i).o[b+(c?"":"Class")]}
// Capitalize some string
function g(a){return a.charAt(0).toUpperCase()+a.slice(1)}
// Executable handlers
function h(a,b,c,d){d||(b&&a[_callback]("ifToggled"),a[_callback]("ifChanged")[_callback]("if"+g(c)))}
// Cached vars
var i="iCheck",j=i+"-helper",k="radio",l="checked",m="un"+l,n="disabled";_determinate="determinate",_indeterminate="in"+_determinate,_update="update",_type="type",_click="click",_touch="touchbegin.i touchend.i",_add="addClass",_remove="removeClass",_callback="trigger",_label="label",_cursor="cursor",_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent),
// Plugin init
a.fn[i]=function(f,g){
// Walker
var h='input[type="checkbox"], input[type="'+k+'"]',m=a(),o=function(b){b.each(function(){var b=a(this);m=b.is(h)?m.add(b):m.add(b.find(h))})};
// Check if we should operate with some method
if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(f))
// Normalize method's name
// Find checkboxes and radio buttons
return f=f.toLowerCase(),o(this),m.each(function(){var c=a(this);"destroy"==f?e(c,"ifDestroyed"):b(c,!0,f),
// Fire method's callback
a.isFunction(g)&&g()});if("object"!=typeof f&&f)return this;
// Check if any options were passed
var p=a.extend({checkedClass:l,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},f),q=p.handle,r=p.hoverClass||"hover",s=p.focusClass||"focus",t=p.activeClass||"active",u=!!p.labelHover,v=p.labelHoverClass||"hover",
// Setup clickable area
w=0|(""+p.increaseArea).replace("%","");
// Selector limit
// Clickable area limit
// Walk around the selector
return"checkbox"!=q&&q!=k||(h='input[type="'+q+'"]'),w<-50&&(w=-50),o(this),m.each(function(){var f=a(this);
// If already customized
e(f);var g,h=this,m=h.id,
// Layer styles
o=-w+"%",q=100+2*w+"%",x={position:"absolute",top:o,left:o,display:"block",width:q,height:q,margin:0,padding:0,background:"#fff",border:0,opacity:0},
// Choose how to hide input
y=_mobile?{position:"absolute",visibility:"hidden"}:w?x:{position:"absolute",opacity:0},
// Get proper class
z="checkbox"==h[_type]?p.checkboxClass||"icheckbox":p.radioClass||"i"+k,
// Find assigned labels
A=a(_label+'[for="'+m+'"]').add(f.closest(_label)),
// Check ARIA option
B=!!p.aria,
// Set ARIA placeholder
C=i+"-"+Math.random().toString(36).substr(2,6),
// Parent & helper
D='<div class="'+z+'" '+(B?'role="'+h[_type]+'" ':"");
// Set ARIA "labelledby"
B&&A.each(function(){D+='aria-labelledby="',this.id?D+=this.id:(this.id=C,D+=C),D+='"'}),
// Wrap input
D=f.wrap(D+"/>")[_callback]("ifCreated").parent().append(p.insert),
// Layer addition
g=a('<ins class="'+j+'"/>').css(x).appendTo(D),
// Finalize customization
f.data(i,{o:p,s:f.attr("style")}).css(y),!!p.inheritClass&&D[_add](h.className||""),!!p.inheritID&&m&&D.attr("id",i+"-"+m),"static"==D.css("position")&&D.css("position","relative"),b(f,!0,_update),
// Label events
A.length&&A.on(_click+".i mouseover.i mouseout.i "+_touch,function(c){var d=c[_type],e=a(this);
// Do nothing if input is disabled
if(!h[n]){
// Click
if(d==_click){if(a(c.target).is("a"))return;b(f,!1,!0)}else u&&(
// mouseout|touchend
/ut|nd/.test(d)?(D[_remove](r),e[_remove](v)):(D[_add](r),e[_add](v)));if(!_mobile)return!1;c.stopPropagation()}}),
// Input events
f.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(a){var b=a[_type],e=a.keyCode;
// Click
// Click
return b!=_click&&("keydown"==b&&32==e?(h[_type]==k&&h[l]||(h[l]?d(f,l):c(f,l)),!1):void("keyup"==b&&h[_type]==k?!h[l]&&c(f,l):/us|ur/.test(b)&&D["blur"==b?_remove:_add](s)))}),
// Helper events
g.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(a){var c=a[_type],
// mousedown|mouseup
d=/wn|up/.test(c)?t:r;
// Do nothing if input is disabled
if(!h[n]){if(
// Click
c==_click?b(f,!1,!0):(
// State is on
/wn|er|in/.test(c)?
// mousedown|mouseover|touchbegin
D[_add](d):D[_remove](d+" "+t),
// Label hover
A.length&&u&&d==r&&
// mouseout|touchend
A[/ut|nd/.test(c)?_remove:_add](v)),!_mobile)return!1;a.stopPropagation()}})})}}(window.jQuery||window.Zepto);
/*! grunt 最后修改于： 2017-04-08 */