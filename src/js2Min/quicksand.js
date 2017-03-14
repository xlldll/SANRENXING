/**
 * Created by LCQ on 2016/11/18.
 */
define( [ 'jquery','jquery.quicksand' ],function( $ ) {
	/*1.获取到每一个li以及创建一个对象*/
	var items       = $( '#stage li' ),
	    itemsByTags = {};
	/*2.循环每一个li*/
	items.each( function( i ) {
		/*3.得到每一个li中的tags*/
		var elem = $( this ),
		    tags = elem.data( 'tags' ).split( ',' );
		//console.log(i+": "+tags);
		/*商标设计,印刷设计*/
		/*4.设置每一个li的data-id*/
		elem.attr( 'data-id',i );
		/*5.循环每一个li中的tags*/
		$.each( tags,function( key,value ) {

			// Removing extra whitespace:
			value = $.trim( value );
			/*6.建立一个储存分类的对象，对象的键名为标签名，值为哪个li*/
			if( !(value in itemsByTags) ) {
				// Create an empty array to hold this item:
				itemsByTags[ value ] = [];
			}
			// Each item is added to one array per tag:
			itemsByTags[ value ].push( elem );
			//console.log(key+itemsByTags);
		} );
	} );
	// Creating the "Everything" option in the menu:
	createList( '所有分类',items );
	// Looping though the arrays in itemsByTags:
	$.each( itemsByTags,function( k,v ) {
		createList( k,v );
	} );
	$( document ).on( "click","#filter a",function( e ) {
		var link = $( this );
		link.addClass( 'active' ).siblings().removeClass( 'active' );
		// Using the Quicksand plugin to animate the li items.
		// It uses data('list') defined by our createList function:
		$( '#stage' ).quicksand( link.data( 'list' ).find( 'li' ),{
			duration       : 740,
			retainExisting : false,
			enhancement    : function( c ) {
				var val = c.find( 'li' );
				val.css( {
					"marginLeft" : function() {
						var ulWidth = c.width();
						var liWidth = c.find( 'li' ).width();
						//容得下多少个li宽度
						var numF = Math.floor( ulWidth / liWidth );
						//多余的li宽度*!/
						var gap      = (ulWidth / liWidth) - numF;
						//var vli      = (1 + gap) * liWidth;
						var vli      =  gap * liWidth;
						var marginLR = vli / (numF+1);
						return marginLR;
					}
				} );
			}
		} );
		e.preventDefault();
	} );
	function createList( text,items ) {
		// This is a helper function that takes the
		// text of a menu button and array of li items
		// Creating an empty unordered list:
		var ul = $( '<ul>',{ class : "hidden" } );
		$.each( items,function() {
			// Creating a copy of each li item
			// and adding it to the list:
			$( this ).clone().appendTo( ul );
		} );
		ul.appendTo( '#container' );
		// Creating a menu item. The unordered list is added
		// as a data parameter (available via .data('list'):
		var a = $( '<a>',{
			html : text,
			href : '#',
			data : { list : ul }
		} ).appendTo( '#filter' );
	}
	licenter();
	$( window ).resize( function() {
		licenter();
	} );
} );
function licenter() {
	var ulWidth  = $( "#stage" ).width();
	var liWidth  = $( "#stage > li" ).width();
	var numF     = Math.floor( ulWidth / liWidth );
	var gap      = (ulWidth / liWidth) - numF;
	//var vli      = (1 + gap) * liWidth;
	var vli      =  gap * liWidth;
	var marginLR = vli / (numF+1);
	$( "#stage > li" ).each( function() {
		$( this ).css( "cssText","margin-left:" + marginLR + "px !important;" );
	} );
}




