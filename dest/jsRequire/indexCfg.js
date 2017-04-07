/*! grunt-0.0.1.js 压缩于：2017-04-07 23:49 */

require.config({
//data-main已经指定了baseUrl：src/jsRequire/index
//不过在有config的情况下，baseUrl以config配置的为准
//如果没有显式指定config及data-main，则默认的baseUrl为包含RequireJS的那个HTML页面的所属目录。
//By default load any module IDs from src/ 也就是jsRequire目录的上一层目录src
baseUrl:"../src",
//paths中声明模块，路径相对于baseUrl即src
paths:{requirejs:"bowerJs/requirejs/require",holder:"bowerJs/holderjs/holder",jquery:"bowerJs/jquery/jquery","jquery.cookie":"jsRequire/libs/jquery.cookie","jquery.form":"jsRequire/libs/jquery.form","jquery.validate":"jsRequire/libs/jquery.validate","jquery.quicksand":"jsRequire/libs/jquery.quicksand",icheck:"jsRequire/libs/icheck",transition:"jsRequire/libs/transition","raxus-slider":"jsRequire/libs/raxus-slider",bootstrap:"bowerJs/bootstrap-sass/bootstrap","bootstrap.datetimepicker":"jsRequire/libs/bootstrap.datetimepicker",reglogbox:"js2Min/reglogbox",dropdown:"js2Min/dropdown",tab:"js2Min/tab",checkRadio:"js2Min/checkRadio","jquery-1.11.0":"jsRequire/libs/jquery-1.11.0",adSlider:"js2Min/adSlider",slideAuthCode:"js2Min/slideAuthCode",quicksand:"js2Min/quicksand",costTime:"js2Min/costTime",bbsES5:"js2Min/bbsES5"},
//配置不兼容的模块
//引入非amd模块的命名，需要与文件名一致
//deps数组，表明该模块的依赖性
//exports值（输出的变量名），表明这个模块外部调用时的名称
//注意：exports只会输出某一个方法或变量
shim:{"raxus-slider":{deps:["jquery-1.11.0"]}}});
/*! grunt 最后修改于： 2017-04-07 */