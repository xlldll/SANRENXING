/*! grunt-0.0.1.js 压缩于：2017-04-08 09:08 */

/*!
 * jQuery Form Plugin
 * version: 3.50.0-2014.02.05
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */
// AMD support
!function(a){"use strict";"function"==typeof define&&define.amd?
// using AMD; register as anon module
define(["jquery"],a):
// no AMD; invoke directly
a("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(a){"use strict";
// private event handlers
function b(b){/*jshint validthis:true */
var c=b.data;b.isDefaultPrevented()||(// if event has been canceled, don't proceed
b.preventDefault(),a(b.target).ajaxSubmit(c))}function c(b){/*jshint validthis:true */
var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){
// is this a child element of the submit el?  (ex: a span within a button)
var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;
// clear form vars
setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}
// helper fn for console logging
function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/
/**
 * Feature detection
 */
var e={};e.fileapi=void 0!==a("<input type='file'/>").get(0).files,e.formdata=void 0!==window.FormData;var f=!!a.fn.prop;
// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
a.fn.attr2=function(){if(!f)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
a.fn.ajaxSubmit=function(b){
// utility fn for deep serialization
function c(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;d<g;d++)
// #252; undo param space replacement
f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),
// #278; use array instead of object storage, favoring array serializations
h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}
// private function for handling file uploads (hat tip to YAHOO!)
function g(c){function e(a){/* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
var b=null;
// IE8 cascading access check
try{a.contentWindow&&(b=a.contentWindow.document)}catch(a){
// IE8 access denied under ssl & missing protocol
d("cannot get iframe.contentWindow document: "+a)}if(b)// successful getting content
return b;try{// simply checking may throw in ie8 under ssl or mismatched protocol
b=a.contentDocument?a.contentDocument:a.document}catch(c){
// last attempt
d("cannot get iframe.contentDocument: "+c),b=a.document}return b}
// take a breath so that pending repaints get some cpu time before the upload starts
function g(){
// look for server aborts
function b(){try{var a=e(r).readyState;d("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(b,50)}catch(a){d("Server abort: ",a," (",a.name,")"),i(A),w&&clearTimeout(w),w=void 0}}
// make sure form attrs are set
var c=k.attr2("target"),f=k.attr2("action"),g=k.attr("enctype")||k.attr("encoding")||"multipart/form-data";
// update form attrs in IE friendly way
x.setAttribute("target",p),h&&!/post/i.test(h)||x.setAttribute("method","POST"),f!=m.url&&x.setAttribute("action",m.url),
// ie borks in some cases when setting encoding
m.skipEncodingOverride||h&&!/post/i.test(h)||k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),
// support timout
m.timeout&&(w=setTimeout(function(){v=!0,i(z)},m.timeout));
// add "extra" data to form if provided in options
var j=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(
// if using the $.param format that allows for multiple values with the same name
a.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?j.push(a('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(x)[0]):j.push(a('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(x)[0]));m.iframeTarget||
// add iframe to doc and submit the form
q.appendTo("body"),r.attachEvent?r.attachEvent("onload",i):r.addEventListener("load",i,!1),setTimeout(b,15);try{x.submit()}catch(a){
// just in case form has element with name/id of 'submit'
var n=document.createElement("form").submit;n.apply(x)}}finally{
// reset attrs and remove "extra" input elements
x.setAttribute("action",f),x.setAttribute("enctype",g),// #380
c?x.setAttribute("target",c):k.removeAttr("target"),a(j).remove()}}function i(b){if(!s.aborted&&!F){if(E=e(r),E||(d("cannot access response document"),b=A),b===z&&s)return s.abort("timeout"),void y.reject(s,"timeout");if(b==A&&s)return s.abort("server abort"),void y.reject(s,"error","server abort");if(E&&E.location.href!=m.iframeSrc||v){r.detachEvent?r.detachEvent("onload",i):r.removeEventListener("load",i,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"==m.dataType||E.XMLDocument||a.isXMLDoc(E);if(d("isXml="+g),!g&&window.opera&&(null===E.body||!E.body.innerHTML)&&--G)
// in some browsers (Opera) the iframe DOM is not always traversable when
// the onload callback fires, so we loop a bit to accommodate
return d("requeing onLoad callback, DOM not available"),void setTimeout(i,250);
//log('response detected');
var h=E.body?E.body:E.documentElement;s.responseText=h?h.innerHTML:null,s.responseXML=E.XMLDocument?E.XMLDocument:E,g&&(m.dataType="xml"),s.getResponseHeader=function(a){return{"content-type":m.dataType}[a.toLowerCase()]},
// support for XHR 'status' & 'statusText' emulation :
h&&(s.status=Number(h.getAttribute("status"))||s.status,s.statusText=h.getAttribute("statusText")||s.statusText);var j=(m.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||m.textarea){
// see if user embedded response in textarea
var l=E.getElementsByTagName("textarea")[0];if(l)s.responseText=l.value,
// support for XHR 'status' & 'statusText' emulation :
s.status=Number(l.getAttribute("status"))||s.status,s.statusText=l.getAttribute("statusText")||s.statusText;else if(k){
// account for browsers injecting pre around json response
var o=E.getElementsByTagName("pre")[0],p=E.getElementsByTagName("body")[0];o?s.responseText=o.textContent?o.textContent:o.innerText:p&&(s.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==j&&!s.responseXML&&s.responseText&&(s.responseXML=H(s.responseText));try{D=J(s,j,m)}catch(a){f="parsererror",s.error=c=a||f}}catch(a){d("error caught: ",a),f="error",s.error=c=a||f}s.aborted&&(d("upload aborted"),f=null),s.status&&(// we've set xhr.status
f=s.status>=200&&s.status<300||304===s.status?"success":"error"),
// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
"success"===f?(m.success&&m.success.call(m.context,D,"success",s),y.resolve(s.responseText,"success",s),n&&a.event.trigger("ajaxSuccess",[s,m])):f&&(void 0===c&&(c=s.statusText),m.error&&m.error.call(m.context,s,f,c),y.reject(s,"error",c),n&&a.event.trigger("ajaxError",[s,m,c])),n&&a.event.trigger("ajaxComplete",[s,m]),n&&!--a.active&&a.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,s,f),F=!0,m.timeout&&clearTimeout(w),
// clean up
setTimeout(function(){m.iframeTarget?//adding else to clean up existing iframe response.
q.attr("src",m.iframeSrc):q.remove(),s.responseXML=null},100)}}}var j,l,m,n,p,q,r,s,t,u,v,w,x=k[0],y=a.Deferred();if(
// #341
y.abort=function(a){s.abort(a)},c)
// ensure that every serialized input is still enabled
for(l=0;l<o.length;l++)j=a(o[l]),f?j.prop("disabled",!1):j.removeAttr("disabled");if(m=a.extend(!0,{},a.ajaxSettings,b),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(q=a(m.iframeTarget),u=q.attr2("name"),u?p=u:q.attr2("name",p)):(q=a('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),q.css({position:"absolute",top:"-1000px",left:"-1000px"})),r=q[0],s={// mock object
aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{// #214, #257
r.contentWindow.document.execCommand&&r.contentWindow.document.execCommand("Stop")}catch(a){}q.attr("src",m.iframeSrc),// abort op in progress
s.error=c,m.error&&m.error.call(m.context,s,c,b),n&&a.event.trigger("ajaxError",[s,m,c]),m.complete&&m.complete.call(m.context,s,c)}},n=m.global,
// trigger ajax global events so that activity/block indicators work like normal
n&&0==a.active++&&a.event.trigger("ajaxStart"),n&&a.event.trigger("ajaxSend",[s,m]),m.beforeSend&&!1===m.beforeSend.call(m.context,s,m))return m.global&&a.active--,y.reject(),y;if(s.aborted)return y.reject(),y;
// add submitting element to data if we know it
(t=x.clk)&&(u=t.name)&&!t.disabled&&(m.extraData=m.extraData||{},m.extraData[u]=t.value,"image"==t.type&&(m.extraData[u+".x"]=x.clk_x,m.extraData[u+".y"]=x.clk_y));var z=1,A=2,B=a("meta[name=csrf-token]").attr("content"),C=a("meta[name=csrf-param]").attr("content");C&&B&&(m.extraData=m.extraData||{},m.extraData[C]=B),m.forceSync?g():setTimeout(g,10);var D,E,F,G=50,H=a.parseXML||function(a,b){// use parseXML if available (jQuery 1.5+)
return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){/*jslint evil:true */
return window.eval("("+a+")")},J=function(b,c,d){// mostly lifted from jq1.4.4
var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return y}/*jshint scripturl:true */
// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var h,i,j,k=this;"function"==typeof b?b={success:b}:void 0===b&&(b={}),h=b.type||this.attr2("method"),i=b.url||this.attr2("action"),j="string"==typeof i?a.trim(i):"",j=j||window.location.href||"",j&&(
// clean url (don't include hash vaue)
j=(j.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:j,success:a.ajaxSettings.success,type:h||a.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);
// hook for manipulating the form data before it is extracted;
// convenient for use with rich editors like tinyMCE or FCKEditor
var l={};if(this.trigger("form-pre-serialize",[this,b,l]),l.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;
// provide opportunity to alter form data before it is serialized
if(b.beforeSerialize&&!1===b.beforeSerialize(this,b))return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var m=b.traditional;void 0===m&&(m=a.ajaxSettings.traditional);var n,o=[],p=this.formToArray(b.semantic,o);
// give pre-submit callback an opportunity to abort the submit
if(b.data&&(b.extraData=b.data,n=a.param(b.data,m)),b.beforeSubmit&&!1===b.beforeSubmit(p,this,b))return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(
// fire vetoable 'validate' event
this.trigger("form-submit-validate",[p,this,b,l]),l.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var q=a.param(p,m);n&&(q=q?q+"&"+n:n),"GET"==b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+q,b.data=null):b.data=q;var r=[];
// perform a load on the target only if dataType is not provided
if(b.resetForm&&r.push(function(){k.resetForm()}),b.clearForm&&r.push(function(){k.clearForm(b.includeHidden)}),!b.dataType&&b.target){var s=b.success||function(){};r.push(function(c){var d=b.replaceTarget?"replaceWith":"html";a(b.target)[d](c).each(s,arguments)})}else b.success&&r.push(b.success);if(b.success=function(a,c,d){// jQuery 1.4+ supports scope context
for(var e=b.context||this,f=0,g=r.length;f<g;f++)r[f].apply(e,[a,c,d||k,k])},b.error){var t=b.error;b.error=function(a,c,d){var e=b.context||this;t.apply(e,[a,c,d,k])}}if(b.complete){var u=b.complete;b.complete=function(a,c){var d=b.context||this;u.apply(d,[a,c,k])}}
// are there files to upload?
// [value] (issue #113), also see comment:
// https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
var v=a("input[type=file]:enabled",this).filter(function(){return""!==a(this).val()}),w=v.length>0,x="multipart/form-data",y=k.attr("enctype")==x||k.attr("encoding")==x,z=e.fileapi&&e.formdata;d("fileAPI :"+z);var A,B=(w||y)&&!z;
// options.iframe allows user to force iframe mode
// 06-NOV-09: now defaulting to iframe mode if file input is detected
!1!==b.iframe&&(b.iframe||B)?
// hack to fix Safari hang (thanks to Tim Molendijk for this)
// see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
b.closeKeepAlive?a.get(b.closeKeepAlive,function(){A=g(p)}):A=g(p):A=(w||y)&&z?
// XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
function(d){for(var e=new FormData,f=0;f<d.length;f++)e.append(d[f].name,d[f].value);if(b.extraData){var g=c(b.extraData);for(f=0;f<g.length;f++)g[f]&&e.append(g[f][0],g[f][1])}b.data=null;var i=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:h||"POST"});b.uploadProgress&&(
// workaround because jqXHR does not expose upload property
i.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(d/e*100)),b.uploadProgress(a,d,e,c)},!1),c}),i.data=null;var j=i.beforeSend;return i.beforeSend=function(a,c){
//Send FormData() provided by user
b.formData?c.data=b.formData:c.data=e,j&&j.call(this,a,c)},a.ajax(i)}(p):a.ajax(b),k.removeData("jqxhr").data("jqxhr",A);
// clear element array
for(var C=0;C<o.length;C++)o[C]=null;
// fire 'notify' event
return this.trigger("form-submit-notify",[this,b]),this},/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
a.fn.ajaxForm=function(e){
// in jQuery 1.3+ we can fix mistakes with the ready state
if(e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var f={s:this.selector,c:this.context};
// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
return!a.isReady&&f.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,b).bind("click.form-plugin",e,c)},
// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
a.fn.formToArray=function(b,c){var d=[];if(0===this.length)return d;var f,g=this[0],h=this.attr("id"),i=b?g.getElementsByTagName("*"):g.elements;if(i&&!/MSIE [678]/.test(navigator.userAgent)&&(// #390
i=a(i).get()),
// #386; account for inputs outside the form which use the 'form' attribute
h&&(f=a(":input[form="+h+"]").get(),f.length&&(i=(i||[]).concat(f))),!i||!i.length)return d;var j,k,l,m,n,o,p;for(j=0,o=i.length;j<o;j++)if(n=i[j],(l=n.name)&&!n.disabled)if(b&&g.clk&&"image"==n.type)
// handle image inputs on the fly when semantic == true
g.clk==n&&(d.push({name:l,value:a(n).val(),type:n.type}),d.push({name:l+".x",value:g.clk_x},{name:l+".y",value:g.clk_y}));else if((m=a.fieldValue(n,!0))&&m.constructor==Array)for(c&&c.push(n),k=0,p=m.length;k<p;k++)d.push({name:l,value:m[k]});else if(e.fileapi&&"file"==n.type){c&&c.push(n);var q=n.files;if(q.length)for(k=0;k<q.length;k++)d.push({name:l,value:q[k],type:n.type});else
// #180
d.push({name:l,value:"",type:n.type})}else null!==m&&void 0!==m&&(c&&c.push(n),d.push({name:l,value:m,type:n.type,required:n.required}));if(!b&&g.clk){
// input type=='image' are not found in elements array! handle it here
var r=a(g.clk),s=r[0];l=s.name,l&&!s.disabled&&"image"==s.type&&(d.push({name:l,value:r.val()}),d.push({name:l+".x",value:g.clk_x},{name:l+".y",value:g.clk_y}))}return d},/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
a.fn.formSerialize=function(b){
//hand off to jQuery.param for proper encoding
return a.param(this.formToArray(b))},/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
a.fn.fieldSerialize=function(b){var c=[];
//hand off to jQuery.param for proper encoding
return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;f<g;f++)c.push({name:d,value:e[f]});else null!==e&&void 0!==e&&c.push({name:this.name,value:e})}}),a.param(c)},/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;d<e;d++){var f=this[d],g=a.fieldValue(f,b);null===g||void 0===g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},/**
 * Returns the value of the field element.
 */
a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(g<0)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;l<k;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(// extra pain for IE...
n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},/**
 * Clears the selected form elements.
 */
a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;// 'hidden' is not in this list
return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(!0===b&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
a.fn.resetForm=function(){return this.each(function(){
// guard against an input with the name of 'reset'
// note that IE reports the reset function as an 'object'
("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},/**
 * Enables or disables any matching elements.
 */
a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&
// deselect all other options
d.find("option").selected(!1),this.selected=b}})},
// expose debug var
a.fn.ajaxSubmit.debug=!1});
/*! grunt 最后修改于： 2017-04-08 */