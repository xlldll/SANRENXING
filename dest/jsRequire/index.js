/*! grunt-0.0.1.js 压缩于：2017-04-08 00:00 */

/*indexCfg跟index.js同级目录*/
//下面依赖的indexCfg模块的实际路径为 src/jsRequire/indexCfg.js
require(["indexCfg"],function(){requirejs(["jquery"],function(a){/*切换NAV特效*/
function b(){a(window).width()<=768?(/*alert($( 'nav ul' )[0].getAttribute('style'));*/
d.css("display","none"),e.removeClass("hvr-bounce-to-right").addClass("hvr-shutter-out-vertical")):(d.css("display","block"),e.removeClass("hvr-shutter-out-vertical").addClass("hvr-bounce-to-right"))}var c=a("#resLogo"),d=a("nav ul"),e=a("nav ul li a");c.on("click",function(a){a.preventDefault(),d.slideToggle()}),b(),e.addClass("hvr-bounce-to-right"),a(window).resize(function(){b()})}),/*占位图*/
requirejs(["holder"],function(){}),/*登录注册*/
requirejs(["reglogbox"],function(){}),/*滑动验证*/
requirejs(["slideAuthCode"],function(){}),/*搜索下拉列表*/
requirejs(["dropdown"],function(){}),requirejs(["tab"],function(){}),requirejs(["checkRadio"],function(){}),/*首屏广告*/
requirejs(["adSlider"],function(){}),/*分类选取*/
requirejs(["quicksand"],function(){}),/*页面耗时*/
requirejs(["costTime"],function(){})});
/*! grunt 最后修改于： 2017-04-08 */