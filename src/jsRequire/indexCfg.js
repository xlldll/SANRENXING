require.config( {
	//data-main已经指定了baseUrl：src/jsRequire/index
	//不过在有config的情况下，baseUrl以config配置的为准
	//如果没有显式指定config及data-main，则默认的baseUrl为包含RequireJS的那个HTML页面的所属目录。
	//By default load any module IDs from src/ 也就是jsRequire目录的上一层目录src
	baseUrl : '../dest',
	//paths中声明模块，路径相对于baseUrl即src
	paths   : {
		'requirejs'                : 'bowerJs/requirejs/require.min',
		'holder'                   : 'bowerJs/holderjs/holder.min',
		'jquery'                   : 'bowerJs/jquery/jquery.min',
		'jquery.cookie'            : 'jsRequire/libs/jquery.cookie.min',
		'jquery.form'              : 'jsRequire/libs/jquery.form.min',
		'jquery.validate'          : 'jsRequire/libs/jquery.validate.min',
		'jquery.quicksand'         : 'jsRequire/libs/jquery.quicksand.min',
		'icheck'                   : 'jsRequire/libs/icheck.min',
		'transition'               : 'jsRequire/libs/transition.min',
		'raxus-slider'             : 'jsRequire/libs/raxus-slider.min',
		'bootstrap'                : 'bowerJs/bootstrap-sass/bootstrap.min',
		'bootstrap.datetimepicker' : 'jsRequire/libs/bootstrap.datetimepicker.min',
		'reglogbox'                : 'js2Min/reglogbox.min',
		'dropdown'                 : 'js2Min/dropdown.min',
		'tab'                      : 'js2Min/tab.min',
		'checkRadio'               : 'js2Min/checkRadio.min',
		'jquery-1.11.0'            : 'jsRequire/libs/jquery.1.11.min',
		'adSlider'                 : 'js2Min/adSlider.min',
		'slideAuthCode'            : 'js2Min/slideAuthCode.min',
		'quicksand'                : 'js2Min/quicksand.min',
		'costTime'                 : 'js2Min/costTime.min',
		'bbsES5'                   : 'js2Min/bbsES5.min'
	},
	//配置不兼容的模块
	//引入非amd模块的命名，需要与文件名一致
	//deps数组，表明该模块的依赖性
	//exports值（输出的变量名），表明这个模块外部调用时的名称
	//注意：exports只会输出某一个方法或变量
	shim    : {
		'raxus-slider' : {
			deps : [ 'jquery-1.11.0' ]
		}
		/*'jquery.cookie'            : {
		 deps    : [ 'jquery' ],
		 exports : 'jquery.cookie'
		 },
		 'jquery.form'              : {
		 deps    : [ 'jquery' ],
		 exports : 'jquery.form'
		 },
		 'jquery.validate'          : {
		 deps    : [ 'jquery' ],
		 exports : 'validate'
		 }*/
		/*'underscore'      : {
		 exports : '_'
		 },
		 'backbone'        : {
		 deps    : [ 'underscore','jquery' ],
		 exports : 'Backbone'
		 }*/
		//由于angularjs并不是按requirejs的模块方式组织代码的
		//Angularjs会在全局域中添加一个名为angular的变量
		//必须在shim中显式把它暴露出来，才能通过模块注入的方式使用它
		/*'angular'           : { exports : 'angular' }*/
	}
} );

