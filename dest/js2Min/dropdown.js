/*! grunt-0.0.1.js 压缩于：2017-04-08 00:00 */

define(["jquery","transition"],function(a){function b(a,b){a.css({"transition-duration":b,"-moz-transition-duration":b,"-webkit-transition-duration":b,"-o-transition-duration":b})}function c(a,b){var c="right"===b?"100% 0":"down"===b?"50% 0":"0 0";a.css({"transform-origin":c,"-moz-transform-origin":c,"-webkit-transform-origin":c,"-o-transform-origin":c})}function d(b,c){var d=parseInt(c.css("margin-top"),10),e=d>0&&a('<div class="dropdown-gutter" style="height:'+d+'px"></div>');return d>0&&b.append(e)}function e(a){this.$parent.hasClass("searchOpen")?this.hide(a):this.show(a)}function f(f,g){var h=a(f),j=h.parent(".searchDrpdon"),k=j.find(".searchDrpdon-menu");j.hasClass("searchFade")&&(b(h.find(".caret"),g.transition/1e3+"s"),b(k,g.transition/1e3+"s"),c(k,g.dir)),this.$elem=h,this.$parent=j,this.opts=g,"hover"===g.trigger?(d(j,k),j.on("mouseenter"+i+".toggle",a.proxy(this.show,this)),j.on("mouseleave"+i+".toggle",a.proxy(this.hide,this))):j.on("click"+i+".toggle",".searchDrpdon-toggle",a.proxy(e,this))}function g(b){b&&3===b.which||a(j).each(function(){var c=a(this),d=c.data(i.substring(1));d&&(b&&"click"==b.type&&d.contains(b.target)||d.isActive()&&d.hide(b,!0))})}
//封装成jq插件
function h(b){return this.each(function(){var c=a(this),d=i.substring(1),e=c.data(d),g=a.extend({},f.DEFAULTS,c.data(),"object"==typeof b&&b);e||c.data(d,e=new f(this,g)),"string"==typeof b&&e[b].call(c)})}var i=".my.searchDrpdon",j="[data-toggle='searchDrpdon']";/*toggle = "[data-toggle='searchDrpdon']";*/
/* ns = '.my.searchDrpdon'*/
return f.DEFAULTS={trigger:"click",transition:"200",dir:"left"},f.prototype={show:function(b){//触发过渡
function c(){//过渡回调
d.trigger(b=a.Event("shown"+i)),d=null}var d=this.$elem,e=this.$parent,f=e.hasClass("searchOpen"),h=this.opts;if(!d.is(".disabled, :disabled")&&(g(b),!f)){if(d.trigger(b=a.Event("show"+i)),b.isDefaultPrevented())return;e.addClass("searchOpen").addClass("searchIn"),a.support.transition&&e.hasClass("searchFade")?e.one("bsTransitionEnd",c).emulateTransitionEnd(h.transition):c()}},hide:function(b,c){//触发过渡
function d(){//过渡回调
e.removeClass("searchOpen"),e=null,f.trigger(a.Event("hidden"+i))}var e=this.$parent,f=this.$elem,g=this.opts;f.trigger(b=a.Event("hide"+i)),b.isDefaultPrevented()||(e.removeClass("searchIn"),a.support.transition&&!c&&e.hasClass("searchFade")?e.one("bsTransitionEnd",d).emulateTransitionEnd(g.transition):d())},isActive:function(){return this.$parent.hasClass("searchOpen")},contains:function(b){return a.contains(this.$parent[0],b)},destroy:function(){this.$parent.off(i),this.$elem.data(i.substring(1),void 0),this.$elem=null,this.$parent=null,this.opts=null}},a.fn.SearchDrpdon=h,a.fn.SearchDrpdon.Constructor=f,a(j).SearchDrpdon(),a(document).on("click"+i+".data-api",g),a});
/*! grunt 最后修改于： 2017-04-08 */