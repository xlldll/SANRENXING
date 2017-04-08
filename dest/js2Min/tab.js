/*! grunt-0.0.1.js 压缩于：2017-04-08 11:10 */

define(["jquery","transition"],function(a){function b(b){
//如果一个获取的是jQuery对象，那么我们在变量前面加上$，如：var $variab = jQuery对象；
//如果获取的是DOM对象，则与习惯普通一样：var variab = DOM对象；
this.element=a(b)}
// TAB PLUGIN DEFINITION
// =====================
function c(c){
//注意:此处 this 指代的是 DOM 对象而非 jQuery 对象。
//也就是每一个面板标题的a标签
return this.each(function(){var e=a(this),//转换为JQUERY对象
f=d.substring(1),//提取从 start 处到 stop-1 处的所有字符，即my.tab
g=e.data(f);//读取data-name的内容
g||(g=new b(this),e.data(d,g)),"string"==typeof c&&
//data[show]()
//Tab($("[data-toggle='tab']")[0])['show']()
//console.log(data);
//console.log( 's.constructor==String  :'+ (data.constructor==String) );
//console.log( 'arr.constructor==Array  :'+ (data.constructor==Array) );
//console.log( 'obj.constructor==Object  :'+ (data.constructor==Object) );
//console.log(data[ option ]);
//data是一个对象，所以用中括号读取show方法
//new Tab( [data-toggle="tab"] )[ option ]()
g[c]()})}var d=".my.tab1";b.TRANSITION_DURATION=100,b.prototype={show:function(){
//console.log(this.element);//a.tab-toggle
var b=this.element,c=b.closest("ul:not(.searchDrpdon-menu)"),e=b.data("target");if(e||(e=b.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var f=c.find(".active:last a"),g=a.Event("hide"+d,{relatedTarget:b[0]}),h=a.Event("show"+d,{relatedTarget:f[0]});
//根据事件对象中是否调用过 event.preventDefault() 方法来返回一个布尔值。
if(f.trigger(g),b.trigger(h),!h.isDefaultPrevented()&&!g.isDefaultPrevented()){var i=a(e);
//面板标题的li，ul.tab-nav
this.activate(b.closest("li"),c),this.activate(i,i.parent(),function(){f.trigger({type:"hidden"+d,relatedTarget:b[0]}),b.trigger({type:"shown"+d,relatedTarget:f[0]})})}}},hide:function(){},activate:function(c,d,e){
//console.log(transition +' transition');
function f(){g.removeClass("active"),c.addClass("active"),c[0].offsetWidth,// reflow for transition
c.addClass("searchIn"),e&&e()}
//面板标题的li，ul.tab-nav
var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("searchFade")||!!d.find("> .searchFade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(b.TRANSITION_DURATION):f(),g.removeClass("searchIn")}},
//$.fn.abc()即$("#div").abc()，对jquery扩展了一个abc方法
a.fn.tab=c,a.fn.tab.Constructor=b;
// TAB DATA-API
// ============
var e=function(b){b.preventDefault(),
//$( this ).Plugin('show');
//$("[data-toggle='tab']").Plugin('show');
c.call(a(this),"show")};
//var ns = '.my.tab';
//$( document ).on( 'click.my.tab.data-api','[data-toggle="tab"]',clickHandler );
//[data-toggle="tab"]：面板标题中的a标签
return a(document).on("click"+d+".data-api",'[data-toggle="tab1"]',e),a});
/*! grunt 最后修改于： 2017-04-08 */