/*! grunt-0.0.1.js 压缩于：2017-04-07 18:44 */

/**
 * 仿淘宝网拖动滑块验证码——个人修改版
 */
define(["jquery"],function(a){a.fn.slideAuthCode=function(b){
//清空事件
function c(){h.removeClass("handler_bg").addClass("handler_ok_bg"),j.text("验证通过"),e.css({color:"#fff"}),h.unbind("mousedown"),a(document).unbind("mousemove"),a(document).unbind("mouseup")}var d,e=this,f=!1,g={},b=a.extend(g,b);this.append('<div class="drag_bg"></div><div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div><div class="handler handler_bg"></div>');var h=e.find(".handler"),i=e.find(".drag_bg"),j=e.find(".drag_text"),k=e.width()-h.width();//能滑动的最大间距
//鼠标按下时候的x轴的位置
h.mousedown(function(a){f=!0,d=a.pageX-parseInt(h.css("left"),10)}),
//鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
a(document).mousemove(function(a){var b=a.pageX-d;f&&(b>0&&b<=k?(h.css({left:b}),i.css({width:b})):b>k&&//鼠标指针移动距离达到最大时清空事件
c())}).mouseup(function(a){f=!1,a.pageX-d<k&&(//鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
h.css({left:0}),i.css({width:0}))})},a("#vcodeDrag").slideAuthCode()});
/*! grunt 最后修改于： 2017-04-07 */