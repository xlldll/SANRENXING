/*! grunt-0.0.1.js 压缩于：2017-04-08 00:00 */

/**
 * Created by LCQ on 2016/11/18.
 */
function add(a,b){var c,d,e;try{c=a.toString().split(".")[1].length}catch(a){c=0}try{d=b.toString().split(".")[1].length}catch(a){d=0}return e=Math.pow(10,Math.max(c,d)),(mul(a,e)+mul(b,e))/e}function sub(a,b){var c,d,e;try{c=a.toString().split(".")[1].length}catch(a){c=0}try{d=b.toString().split(".")[1].length}catch(a){d=0}return e=Math.pow(10,Math.max(c,d)),(mul(a,e)-mul(b,e))/e}function mul(a,b){var c=0,d=a.toString(),e=b.toString();try{c+=d.split(".")[1].length}catch(a){}try{c+=e.split(".")[1].length}catch(a){}return Number(d.replace(".",""))*Number(e.replace(".",""))/Math.pow(10,c)}function div(a,b){var c,d,e=0,f=0;try{e=a.toString().split(".")[1].length}catch(a){}try{f=b.toString().split(".")[1].length}catch(a){}return c=Number(a.toString().replace(".","")),d=Number(b.toString().replace(".","")),mul(c/d,Math.pow(10,f-e))}define(["jquery"],function(a){a(document).ready(function(){var b=(new Date).getTime(),c=div(b,1e3),d=div(qingzzStartTime1,1e3);a("#qingzzLastTimeShow").text(sub(c,d))})});
/*! grunt 最后修改于： 2017-04-08 */