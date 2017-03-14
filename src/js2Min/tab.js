define( [ 'jquery','transition' ],function( $ ) {
	var ns = '.my.tab1';

	function Tab( element ) {
		//如果一个获取的是jQuery对象，那么我们在变量前面加上$，如：var $variab = jQuery对象；
		//如果获取的是DOM对象，则与习惯普通一样：var variab = DOM对象；
		this.element = $( element );
	}

	Tab.TRANSITION_DURATION = 100;
	Tab.prototype           = {
		show     : function() {
			//console.log(this.element);//a.tab-toggle
			var $this    = this.element;
			//从元素本身开始，逐级向上级元素匹配，并返回最先匹配的元素。
			var $ul      = $this.closest( 'ul:not(.searchDrpdon-menu)' );
			//#search-brand-tab-pane .tab-pane:nth-child(1)
			var selector = $this.data( 'target' );

			if( !selector ) {
				selector = $this.attr( 'href' )
				selector = selector && selector.replace( /.*(?=#[^\s]*$)/,'' );
			}
			if( $this.parent( 'li' ).hasClass( 'active' ) ) {
				return;
			}
			var $previous = $ul.find( '.active:last a' );
			//注册自定义事件
			var hideEvent = $.Event( 'hide' + ns,{
				relatedTarget : $this[ 0 ]
			} );
			var showEvent = $.Event( 'show' + ns,{
				relatedTarget : $previous[ 0 ]
			} );
			$previous.trigger( hideEvent );
			$this.trigger( showEvent );
			//根据事件对象中是否调用过 event.preventDefault() 方法来返回一个布尔值。
			if( showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented() ) {
				return;
			}

			var $target = $( selector );
			//面板标题的li，ul.tab-nav
			this.activate( $this.closest( 'li' ),$ul );
			this.activate( $target,$target.parent(),function() {
				$previous.trigger( {
					type          : 'hidden' + ns,
					relatedTarget : $this[ 0 ]
				} );
				$this.trigger( {
					type          : 'shown' + ns,
					relatedTarget : $previous[ 0 ]
				} );
			} );
		},
		hide     : function() {
		},
		activate : function( element,container,callback ) {
			//面板标题的li，ul.tab-nav
			var $active    = container.find( '> .active' );
			//li.active
			var transition = callback
			                 && $.support.transition
			                 && ($active.length && $active.hasClass( 'searchFade' ) || !!container.find( '> .searchFade' ).length);
			//console.log(transition +' transition');
			function next() {
				$active.removeClass( 'active' );
				element.addClass( 'active' );
				element[ 0 ].offsetWidth;// reflow for transition
				element.addClass( 'searchIn' );
				callback && callback();
			}

			$active.length && transition ?
				$active.one( 'bsTransitionEnd',next ).emulateTransitionEnd( Tab.TRANSITION_DURATION ) :
				next();
			$active.removeClass( 'searchIn' );
		}
	};
	// TAB PLUGIN DEFINITION
	// =====================
	function Plugin( option ) {
		//注意:此处 this 指代的是 DOM 对象而非 jQuery 对象。
		//也就是每一个面板标题的a标签
		return this.each( function() {
			var $this = $( this ),//转换为JQUERY对象
			    name  = ns.substring( 1 ),//提取从 start 处到 stop-1 处的所有字符，即my.tab
			    data  = $this.data( name );//读取data-name的内容
			if( !data ) {
				data = new Tab( this );
				$this.data(ns,data);//设置data-.my.tab为data=Tab($("[data-toggle='tab']")[0])
				//alert($this.data(ns));
				//console.log($this.data(ns));
			}
			if( typeof option == 'string' ) {
				//data[show]()
				//Tab($("[data-toggle='tab']")[0])['show']()
				//console.log(data);
				//console.log( 's.constructor==String  :'+ (data.constructor==String) );
				//console.log( 'arr.constructor==Array  :'+ (data.constructor==Array) );
				//console.log( 'obj.constructor==Object  :'+ (data.constructor==Object) );
				//console.log(data[ option ]);
				//data是一个对象，所以用中括号读取show方法
				//new Tab( [data-toggle="tab"] )[ option ]()
				data[ option ]();

			}
		} );
	}
	//$.fn.abc()即$("#div").abc()，对jquery扩展了一个abc方法
	$.fn.tab             = Plugin;
	$.fn.tab.Constructor = Tab;
	// TAB DATA-API
	// ============
	var clickHandler = function( e ) {
		e.preventDefault();
		//$( this ).Plugin('show');
		//$("[data-toggle='tab']").Plugin('show');
		Plugin.call( $( this ),'show' );
	};
	//var ns = '.my.tab';
	//$( document ).on( 'click.my.tab.data-api','[data-toggle="tab"]',clickHandler );
	//[data-toggle="tab"]：面板标题中的a标签
	$( document ).on( 'click' + ns + '.data-api','[data-toggle="tab1"]',clickHandler );
	return $;
} );