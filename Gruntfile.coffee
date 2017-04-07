module.exports = (grunt) ->
	require('time-grunt')(grunt);
	### 开发目录与发布目录 ###
	dirs =
		destDir:'dest'
		srcDir :'src'
	### 发布目录文件夹 ###
	[destHtml,destJs,destCss,destImg,destFonts] = [
		dirs.destDir + '/html',
		dirs.destDir + '/js',
		dirs.destDir + '/css',
		dirs.destDir + '/img',
		dirs.destDir + '/fonts'
	]
	[destCssMin,destCssMult,destJsMin,destJsMult,destJsRjs] = [
		destCss + '/css2MinSync',
		destCss + '/css2MultSync',
		destJs + '/js2MinSync',
		destJs + '/js2MultSync',
		destJs + '/jsrequire'
	]

	### 开发主页、图片、格式 ###
	[srcHtml,srcImg,srcImgMin,srcFonts] = [
		dirs.srcDir + '/html',
		dirs.srcDir + '/img',
		dirs.srcDir + '/imgMin',
		dirs.srcDir + '/fonts'
	]

	### 一一按目录压缩Css ###
	[css2Min, css2MinSync] = [
		dirs.srcDir + '/css2Min',
		dirs.srcDir + '/css2MinSync'
	]
	### 多合一Css ###
	[css2Mult, css2MultSync] = [
		dirs.srcDir + '/css2Mult',
		dirs.srcDir + '/css2MultSync'
	]
	### bower ###
	[bower, bowerJs,bowerCss,bowerImg] = [
		dirs.srcDir + '/bower',
		dirs.srcDir + '/bowerJs',
		dirs.srcDir + '/bowerCss',
		dirs.srcDir + '/bowerImg'
	]
	### requireJs指定引用合并 ###
	[jsRequire] = [
		dirs.srcDir + '/jsRequire'
	]
	### 一一按目录压缩JS ###
	[js2Min, js2MinSync] = [
		dirs.srcDir + '/js2Min',
		dirs.srcDir + '/js2MinSync'
	]
	### 多合一Js ###
	[js2Mult, js2MultSync] = [
		dirs.srcDir + '/js2Mult',
		dirs.srcDir + '/js2MultSync'
	]
	### 任务配置 ###
	grunt.config.init(
		pkg     :grunt.file.readJSON ( 'package.json' )
		### 1.图片压缩到发布目录 ###
		imagemin:
			srcImg:
				options:
					optimizationLevel:3
				files  :[
					expand:true
					cwd   :srcImg
					src   :['**/*.{png,jpg,jpeg,gif}']
					dest  :destImg
				]
		htmlmin :
			html:
				options:
					removeComments    :true
					collapseWhitespace:true
				files  :[
					expand:true
					cwd   :srcHtml
					src   :['**/*.html']
					dest  :destHtml
				]
			releaseHtml:
				options:
					removeComments    :true
					collapseWhitespace:true
				files:
					'dest/index.html':'src/html/destindex.html',
					'dest/bbsreact.html':'src/html/destbbsreact.html'
		### 2.SCSS本地编译 ###
		sass    :
			css2Min:
				options:
					style:'expanded'
				files  :[
					expand :true
					cwd    :css2Min
					src    :['**/*.scss']
					dest   :css2Min
					ext    :'.css'
					flatten:false
				]
			css2Mult:
				options:
					style:'expanded'
				files  :[
					expand :true
					cwd    :css2Mult
					src    :['**/*.scss']
					dest   :css2Mult
					ext    :'.css'
					flatten:false
				]
			bowerCss:
				options:
					style:'expanded'
				files  :[
					expand :true
					cwd    :bower
					src    :['**/*.scss']
					dest   :bower
					ext    :'.css'
					flatten:false
				]
		### 3.CSS格式检查  ###
		csslint :
			css:
				options :
					csslintrc:'.csslintrc.json'
				checkCss:
					options:
						import:2
					src    :[
						css2Mult + '*{,**/}*.css',
						css2Min + '{,**/}*.css'
					]
		### 4.CSS本地压缩  ###
		cssmin  :
			options:
				shorthandCompacting: false
				roundingPrecision: -1
			css2MinSync:
				files:[{
					expand:true
					cwd   :css2MinSync
					src   :[
						'*.css',
						'!**/*.map'
					]
					dest  :destCss
					ext   :'.min.css'
				}]
			css2MultSync :
				files:
					'dest/css/indexMediaEff.min.css': [css2MultSync + '/index.css',css2MultSync + '/media.css',css2MultSync + '/effect.css',]
		### 5.单纯拼接合并CSS以及JS到发布目录，并没有压缩处理效果 ###
		concat  :
			options:
				separator   :'/*****************!CONCAT*******************/'
				stripBanners:true
				banner      :'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */\n'
		### 6.js2Mult本地编译  ###
		### 注意src的斜杠格式 ###
		coffee  :
			js2Min :
				expand :true
				flatten:false
				cwd    :js2Min
				src    :['{,**/}*.coffee']
				dest   :js2Min
				ext    :'.js'
			js2Mult:
				expand :true
				flatten:false
				cwd    :js2Mult
				src    :['{,**/}*.coffee']
				dest   :js2Mult
				ext    :'.js'
			jsRequire:
				expand :true
				flatten:false
				cwd    :jsRequire
				src    :['{,**/}*.coffee']
				dest   :jsRequire
				ext    :'.js'
		### 7.JS检查  ###
		jshint  :
			options  :
				jshintrc:'.jshintrc.json'
			coffee2Js:[
				js2Min + '{,**/}*.js',
				js2Mult + '{,**/}*.js'
			]
			Gruntfile:['Gruntfile.js']
		### 8.JS压缩 ###
		uglify  :
			options :
				banner          :"/*! <%=pkg.name%>-<%=pkg.version%>.js 压缩于：<%= grunt.template.today('yyyy-mm-dd HH:MM') %> */\n"
				footer          :'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'
				preserveComments:true
			### 按原目录下的每个文件结构压缩至新文件夹中 ###
			js2MinSync:
				options:
					mangle:true
					report:"gzip"
				files  :[
					expand :true
					cwd    :js2MinSync,
					src    :['*.js']
					dest   :destJsMin
					ext    :'.js'
					flatten:true
				]
			### 多合一JS压缩 ###
			js2MultSync :
				options:
					mangle:true
				files  :
					'dest/js/js2MultSync/js2MultSync.min.js':[js2MultSync + '/{,**/}*.js']
		### 8.清除文件夹 ###
		clean: {
			destJsMin: [destJsMin],
			destCssMin: [destCssMin],
			destJsRjs: [destJsRjs],
			bbsES5: ['src/js2Min/bbsES5.js'],
			folder_v2: ['path/to/dir/**'],
			contents: ['path/to/dir/*'],
			subfolders: ['path/to/dir/*/'],
			css: ['path/to/dir/*.css'],
			all_css: ['path/to/dir/**/*.css']
		}
		### grunt-requireJs合并压缩打包所有相关依赖JS ###
		requirejs:
			index:
				options:
					### ./src ###
					baseUrl       :'./' + dirs.srcDir
					### 公共JS路径设置 ###
					mainConfigFile:'rjsGrunt.js'
					name          :'jsRequire/index'
					include       :[
						'requireJs'
					]
					out           :destJsRjs + '/packageJs.js'
					uglify2       :
						output  :
							beautify:false
						compress:
							sequences  :false
							global_defs:
								DEBUG:false
						warnings:true
						mangle  :false

		### 9.Bower管理引入文件  ###
		bower    :
			install:
				options:
					copy: true
					targetDir     :'./src/bower'
					layout        :'byType',
					install       :true
					verbose       :true
					cleanTargetDir:true
					cleanBowerDir :false
					bowerOptions  :{}
		### 10.转移开发文件到发布文件夹  ###
		copy     :
			### html、字体 ###
			fonts:
				files:[
					{ expand:true, cwd:srcFonts, src:['**/*'], dest:destFonts, flatten:true, filter:'isFile' }
				]
		### 11.建立网站连接  ###
		connect  :
			options:
				open      :
					target  :'http://Sanrenxing-Demo'
					appName :'chrome'
					callback:()->
				hostname  :'Sanrenxing-Demo'
				livereload:35729
			index:
				options:
					open:true
					port:1618
					base:[
						'.'
					]
		### 12.文件历史缓存  ###
		newer    :
			options:
				cache:'newer/'
		### 13.同步开发文件的删除添加重命名 ###
		sync     :
			htmls:
				files          :[
					{ cwd:srcHtml, src:['{,**/}*.html'], dest:destHtml }
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			imgs :
				files          :[
					{ cwd:srcImg, src:['**'], dest:destImg }
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			fonts:
				files          :[
					{ cwd:srcFonts, src:['**'], dest:destFonts }
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			css2MinSync:
				files:[
					{
						cwd :css2Min,
						src :[
							'{,**/}*.css',
							'!{,**/}*.map'
						]
						dest:css2MinSync
					}
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			css2MultSync:
				files:[
					{
						cwd :css2Mult,
						src :[
							'{,**/}*.css',
							'!{,**/}*.map'
						]
						dest:css2MultSync
					}
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			js2MinSync:
				files:[
					{
						cwd :js2Min
						src :[
							'{,**/}*.js',
							'!{,**/}*.coffee'
						]
						dest:js2MinSync
					}
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			js2MultSync:
				files:[
					{
						cwd :js2Mult,
						src :[
							'{,**/}*.js',
							'!{,**/}*.coffee'
						]
						dest:js2MultSync
					}
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
			bowerJs:
				files:[
					{
						cwd :bower,
						src :[
							'{,**/}*.js',
							'!{,**/}*.coffee'
						]
						dest:bowerJs
					}
				]
				pretend        :false
				verbose        :true
				updateAndDelete:true
		### React ###
		browserify:
			dist:
				options:
					transform:[
						[
							'babelify',
							{'presets':['es2015','stage-2','react'],'plugins':["transform-decorators-legacy"]}
						]
					]
				src:[
					js2Min + '/component/bbsReact.js'
				]
				dest:js2Min + '/bbsES5.js'
		### 14.监视变动  ###
		watch   :
			options   :dateFormat:(time) ->
						grunt.log.writeln('监视耗时 ' + time + '毫秒' + (new Date()).toString());
						grunt.log.writeln('等待更多变化...');
						return;
			### 0.browserify ###
			transform:
				files:[js2Min + '/component/{,**/}*.js']
				tasks:[
					'clean:bbsES5',
					'browserify'
				]
			### 1.gruntfile自动重新加载 ###
			configFiles:
				files: [ 'Gruntfile.js' ]
				options:reload: true
			### 2.多合一CSS ###
			css2Mult:
				files:[css2Mult + '/{,**/}*.{css,scss,map}']
				tasks:[
					'newer:sass:css2Mult',
					'sync:css2MultSync',
					'newer:cssmin:css2MultSync'
				]
			### 3.一一压缩css ###
			css2Min:
				files:[css2Min + '/{*,**/}*.{css,scss,map}']
				options:{
					event:['added', 'deleted','changed']
				}
				tasks:[
					'sass:css2Min',
					'sync:css2MinSync',
					'clean:destCssMin',
					'cssmin:css2MinSync'
				]
			### 4.一一压缩JS ###
			js2Min:
				files:[js2Min + '/{,**/}*.{coffee,js}']
				tasks:[
					'sync:js2MinSync',
					'clean:destJsMin',
					'newer:uglify:js2MinSync'
				]
			### 5.多合一Js ###
			### 编译coffeeJs，同步到cf2Mult文件夹，多合一压缩到发布目录 ###
			js2Mult:
				files:[js2Mult + '/{,**/}*.{coffee,js}']
				tasks:[
					'sync:js2MultSync',
					'newer:uglify:js2MultSync'
				]
			### 6.图片压缩 ###
			imgmin :
				files:[srcImg + '/{,**/}*']
				tasks:[
					'newer:imagemin',
					'sync:imgs'
				]
			htmlmin:
				files:[srcHtml + '/{,**/}*']
				tasks:[
					'newer:htmlmin',
					'sync:htmls'
				]
			### 7.格式文件 ###
			fonts:
				files:[srcFonts + '/{,**/}*']
				tasks:['sync:fonts']
			### 8.实时修改 ###
			livereload:
				options:
					livereload:'<%=connect.options.livereload%>'
				files  :[
					'./' + srcHtml + '/{,**/}*.html',
					'./' + css2Min + '/{,**/}*.css',
					'./' + css2Mult + '/{,**/}*.css',
					'./' + js2Min + '/{,**/}*.js',
					'./' + js2Mult + '/{,**/}*.js',
					'./' + jsRequire + '/{,**/}*.js',
					'./' + srcImg + '/{,**/}*.{png,jpg}',
					'./' + srcFonts + '/{,**/}*'
				]
			### 10.bower ###
			bower:
				files:[bower + '/{,**/}*']
				tasks:[
					'sync:bowerJs'
				]
	)
	require('load-grunt-tasks')(grunt, {
		pattern:['grunt-*',
			'@*/grunt-*']
	})


	### 1.项目准备 ###
	### 导入外部文件，bower install 自动加载依赖JS文件 ###
	grunt.registerTask('1bower', [
		'bower:install',
		'sync:bowerJs'
	]);

	### 2.开发环境-项目开发 ###
	### 所有 ###
	grunt.registerTask('2all', [
		'sass',
		'sync',
		'cssmin',
		'uglify',
		'connect',
		'watch'
	]);
	### CSS ###
	grunt.registerTask('2css', [
		'sass',
		'sync:css2MinSync',
		'clean:destCssMin',
		'sync:css2MultSync',
		'cssmin'
	]);
	### JS(由requireJs接手) ###
	grunt.registerTask('2js', [
		'sync:js2MinSync',
		'clean:destJsMin',
		'sync:js2MultSync',
		'uglify'
	]);

	### 实时修改主页 ###
	grunt.registerTask('2live', [ 'sass:css2Min','browserify','connect:index','watch']);

	### 3.生产环境-项目优化 ###
	### 用GruntRJS打包各依赖JS关系 ###
	grunt.registerTask('3packageJs', [
		'clean:destJsRjs',
		'requirejs:index'
	]);
	
	### 用browserify打包ReactJSX ###
	grunt.registerTask('3transform', ['browserify']);
	
	### 检查格式 ###
	grunt.registerTask('3chkCss', [ 'csslint']);
	grunt.registerTask('3chkJs', [ 'jshint']);
	### 文件压缩 ###
	grunt.registerTask('3allMin', [ 'imagemin','htmlmin','cssmin','uglify']);


	### 4.其它 ###
	### 文件合并 ###
	grunt.registerTask('4concat', [ 'concat']);
	grunt.registerTask('4copy', [ 'copy']);

	return;