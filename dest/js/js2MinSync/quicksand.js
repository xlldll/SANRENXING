/*! grunt-0.0.1.js 压缩于：2017-04-07 18:44 */

/**
 * Created by LCQ on 2016/11/18.
 */
function licenter(){var a=$("#stage").width(),b=$("#stage > li").width(),c=Math.floor(a/b),d=a/b-c,e=d*b,f=e/(c+1);$("#stage > li").each(function(){$(this).css("cssText","margin-left:"+f+"px !important;")})}define(["jquery","jquery.quicksand"],function(a){function b(b,c){
// This is a helper function that takes the
// text of a menu button and array of li items
// Creating an empty unordered list:
var d=a("<ul>",{class:"hidden"});a.each(c,function(){
// Creating a copy of each li item
// and adding it to the list:
a(this).clone().appendTo(d)}),d.appendTo("#container");
// Creating a menu item. The unordered list is added
// as a data parameter (available via .data('list'):
a("<a>",{html:b,href:"#",data:{list:d}}).appendTo("#filter")}/*1.获取到每一个li以及创建一个对象*/
var c=a("#stage li"),d={};/*2.循环每一个li*/
c.each(function(b){/*3.得到每一个li中的tags*/
var c=a(this),e=c.data("tags").split(",");
//console.log(i+": "+tags);
/*商标设计,印刷设计*/
/*4.设置每一个li的data-id*/
c.attr("data-id",b),/*5.循环每一个li中的tags*/
a.each(e,function(b,e){
// Removing extra whitespace:
e=a.trim(e),/*6.建立一个储存分类的对象，对象的键名为标签名，值为哪个li*/
e in d||(
// Create an empty array to hold this item:
d[e]=[]),
// Each item is added to one array per tag:
d[e].push(c)})}),
// Creating the "Everything" option in the menu:
b("所有分类",c),
// Looping though the arrays in itemsByTags:
a.each(d,function(a,c){b(a,c)}),a(document).on("click","#filter a",function(b){var c=a(this);c.addClass("active").siblings().removeClass("active"),
// Using the Quicksand plugin to animate the li items.
// It uses data('list') defined by our createList function:
a("#stage").quicksand(c.data("list").find("li"),{duration:740,retainExisting:!1,enhancement:function(a){a.find("li").css({marginLeft:function(){var b=a.width(),c=a.find("li").width(),d=Math.floor(b/c);return(b/c-d)*c/(d+1)}})}}),b.preventDefault()}),licenter(),a(window).resize(function(){licenter()})});
/*! grunt 最后修改于： 2017-04-07 */