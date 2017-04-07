/*! grunt-0.0.1.js 压缩于：2017-04-08 00:07 */

/*

 Quicksand 1.4

 Reorder and filter items with a nice shuffling animation.

 Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
 Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

 Dual licensed under the MIT and GPL version 2 licenses.
 http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
 http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

 Project site: http://razorjack.net/quicksand
 Github site: http://github.com/razorjack/quicksand

 */
!function(a){var b=function(a){var b=a.clone(),c=a.find("canvas");if(c.length){b.find("canvas").each(function(a){this.getContext("2d").drawImage(c.get(a),0,0)})}return b};a.fn.quicksand=function(c,d){var e={duration:750,easing:"swing",attribute:"data-id",// attribute to recognize same items within source and dest
adjustHeight:"auto",// 'dynamic' animates height during shuffling (slow), 'auto' adjusts it
// before or after the animation, false leaves height constant
adjustWidth:"auto",// 'dynamic' animates width during shuffling (slow),
// 'auto' adjusts it before or after the animation, false leaves width constant
useScaling:!1,// enable it if you're using scaling effect
enhancement:function(a){},// Visual enhacement (eg. font replacement) function for cloned elements
selector:"> *",atomic:!1,dx:0,dy:0,maxWidth:0,retainExisting:!0},f=function(){for(var a="transform WebkitTransform MozTransform OTransform msTransform".split(" "),b=document.createElement("div"),c=0;c<a.length;c++)if(void 0!==b.style[a[c]])return!0;return!1}();a.extend(e,d),
// Can the browser do scaling?
f&&void 0!==a.fn.scale||(e.useScaling=!1);var g;return"function"==typeof arguments[1]?g=arguments[1]:(arguments[2],g=arguments[2]),this.each(function(d){var f,h,i=[];h="function"==typeof e.attribute?a(c):b(a(c).filter("["+e.attribute+"]"));var j,k,l=a(this),m=a(this).css("height"),n=a(this).css("width"),o=!1,p=!1,q=a(l).offset(),r=[],s=a(this).find(e.selector),t=a(s).innerWidth();// need for the responsive design
// Replace the collection and quit if IE6
if(navigator.userAgent.match(/msie [6]/i))return void l.html("").append(h);
// Gets called when any animation is finished
var u=0,v=function(){if(a(this).css("margin","").css("position","").css("top","").css("left","").css("opacity",""),!u){if(u=1,!e.atomic){
// hack: used to be: $sourceParent.html($dest.html());
// put target HTML into visible source container
// but new webkit builds cause flickering when replacing the collections
var b=l.find(e.selector);if(e.retainExisting){
// Avoid replacing elements because we may have already altered items in significant
// ways and it would be bad to have to do it again. (i.e. lazy load images)
// But $dest holds the correct ordering. So we must re-sequence items in $sourceParent to match.
var c=a([]);A.find(e.selector).each(function(d){var f=a([]);if("function"==typeof e.attribute){var g=e.attribute(a(this));b.each(function(){if(e.attribute(this)==g)return f=a(this),!1})}else f=b.filter("["+e.attribute+'="'+a(this).attr(e.attribute)+'"]');f.length>0&&(
// There is a matching element in the $toDelete list and in $dest
// list, so make sure it is in the right location within $sourceParent
// and put it in the list of elements we need to not delete.
c=c.add(f),0===d?l.prepend(f):f.insertAfter(l.find(e.selector).get(d-1)))}),
// Remove whatever is remaining from the DOM
b.not(c).remove()}else l.prepend(A.find(e.selector)),b.remove();o&&l.css("height",j),p&&l.css("width",n)}e.enhancement(l),// Perform custom visual enhancements on a newly replaced collection
"function"==typeof g&&g.call(this)}!1===e.adjustHeight&&l.css("height","auto"),!1===e.adjustWidth&&l.css("width","auto")},w=l.offsetParent(),x=w.offset();"relative"==w.css("position")?"body"!=w.get(0).nodeName.toLowerCase()&&(x.top+=parseFloat(w.css("border-top-width"))||0,x.left+=parseFloat(w.css("border-left-width"))||0):(x.top-=parseFloat(w.css("border-top-width"))||0,x.left-=parseFloat(w.css("border-left-width"))||0,x.top-=parseFloat(w.css("margin-top"))||0,x.left-=parseFloat(w.css("margin-left"))||0),
// perform custom corrections from options (use when Quicksand fails to detect proper correction)
isNaN(x.left)&&(x.left=0),isNaN(x.top)&&(x.top=0),x.left-=e.dx,x.top-=e.dy,
// keeps nodes after source container, holding their position
l.css("height",a(this).height()),l.css("width",a(this).width()),
// get positions of source collections
s.each(function(b){r[b]=a(this).offset()}),
// stops previous animations on source container
a(this).stop();var y=0,z=0;s.each(function(b){a(this).stop();// stop animation of collection items
var c=a(this).get(0);"absolute"==c.style.position?(y=-e.dx,z=-e.dy):(y=e.dx,z=e.dy),c.style.position="absolute",c.style.margin="0",e.adjustWidth||(c.style.width=t+"px"),c.style.top=r[b].top-parseFloat(c.style.marginTop)-x.top+z+"px",c.style.left=r[b].left-parseFloat(c.style.marginLeft)-x.left+y+"px",e.maxWidth>0&&r[b].left>e.maxWidth&&(c.style.display="none")});
// create temporary container with destination collection
var A=b(a(l)),B=A.get(0);if(B.innerHTML="",B.setAttribute("id",""),B.style.height="auto",B.style.width=l.width()+"px",A.append(h),
// Inserts node into HTML. Note that the node is under visible source container in the exactly same position
// The browser render all the items without showing them (opacity: 0.0) No offset calculations are needed,
// the browser just extracts position from underlayered destination items and sets animation to destination positions.
A.insertBefore(l),A.css("opacity",0),B.style.zIndex=-1,B.style.margin="0",B.style.position="absolute",B.style.top=q.top-x.top+"px",B.style.left=q.left-x.left+"px","dynamic"===e.adjustHeight?
// If destination container has different height than source container the height can be animated,
// adjusting it to destination height
l.animate({height:A.height()},e.duration,e.easing):"auto"===e.adjustHeight&&(j=A.height(),parseFloat(m)<parseFloat(j)?
// Adjust the height now so that the items don't move out of the container
l.css("height",j):
// Adjust later, on callback
o=!0),"dynamic"===e.adjustWidth?
// If destination container has different width than source container the width can be animated,
// adjusting it to destination width
l.animate({width:A.width()},e.duration,e.easing):"auto"===e.adjustWidth&&(k=A.width(),parseFloat(n)<parseFloat(k)?
// Adjust the height now so that the items don't move out of the container
l.css("width",k):
// Adjust later, on callback
p=!0),
// Now it's time to do shuffling animation. First of all, we need to identify same elements within
// source and destination collections
s.each(function(b){var c=[];"function"==typeof e.attribute?(f=e.attribute(a(this)),h.each(function(){if(e.attribute(this)==f)return c=a(this),!1})):c=h.filter("["+e.attribute+'="'+a(this).attr(e.attribute)+'"]'),c.length?
// The item is both in source and destination collections. It it's under different position, let's move it
e.useScaling?i.push({element:a(this),dest:c,style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{top:c.offset().top-x.top,left:c.offset().left-x.left,opacity:1,scale:"1.0"}}):i.push({element:a(this),dest:c,style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{top:c.offset().top-x.top,left:c.offset().left-x.left,opacity:1}}):
// The item from source collection is not present in destination collections.  Let's remove it
e.useScaling?i.push({element:a(this),style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{opacity:"0.0",scale:"0.0"}}):i.push({element:a(this),style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{opacity:"0.0"}})}),h.each(function(c){
// Grab all items from target collection not present in visible source collection
var d=[],g=[];"function"==typeof e.attribute?(f=e.attribute(a(this)),s.each(function(){if(e.attribute(this)==f)return d=a(this),!1}),h.each(function(){if(e.attribute(this)==f)return g=a(this),!1})):(d=s.filter("["+e.attribute+'="'+a(this).attr(e.attribute)+'"]'),g=h.filter("["+e.attribute+'="'+a(this).attr(e.attribute)+'"]'));var j;if(0===d.length&&g.length>0){
// No such element in source collection...
j=e.useScaling?{opacity:"1.0",scale:"1.0"}:{opacity:"1.0"};
// Let's create it
var k=b(g),m=k.get(0);m.style.position="absolute",m.style.margin="0",e.adjustWidth||(
// sets the width to the current element with even if it has been changed by a responsive design
m.style.width=t+"px"),m.style.top=g.offset().top-x.top+"px",m.style.left=g.offset().left-x.left+"px",k.css("opacity",0),// IE
e.useScaling&&k.scale(0),k.appendTo(l),(0===e.maxWidth||g.offset().left<e.maxWidth)&&i.push({element:a(k),dest:g,animation:j})}}),A.remove(),e.atomic){for($toDelete=l.find(e.selector),l.prepend(A.find(e.selector)),d=0;d<i.length;d++)if(i[d].dest&&i[d].style){var C=i[d].dest,D=C.offset();C.css({position:"relative",top:i[d].style.top-D.top,left:i[d].style.left-D.left}),C.animate({top:"0",left:"0"},e.duration,e.easing,v)}else i[d].element.animate(i[d].animation,e.duration,e.easing,v);$toDelete.remove()}else// Perform custom visual enhancements during the animation
for(e.enhancement(l),d=0;d<i.length;d++)i[d].element.animate(i[d].animation,e.duration,e.easing,v)})}}(jQuery);
/*! grunt 最后修改于： 2017-04-08 */