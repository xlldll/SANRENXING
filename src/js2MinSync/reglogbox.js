/**
 * Created by LCQ on 2016/8/14.
 */
define( [
		'jquery',
		'jquery.cookie',
		'jquery.form',
		'jquery.validate',
		'bootstrap',
		'bootstrap.datetimepicker'
	],
	function( $ ) {
		
		/*验证码-英文字母*/
		var code; //在全局 定义验证码
		function showCheck( a ) {/* 显示验证码图片 */
			var c   = document.getElementById( "myCanvas" );
			var ctx = c.getContext( "2d" );
			ctx.clearRect( 0,0,1000,1000 );
			ctx.font = "80px Arial";
			ctx.fillText( a,0,100 );
		}
		
		function createCode() {
			code           = "";
			var codeLength = 4;//验证码的长度
			var selectChar = new Array( 1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z' );
			for( var i = 0; i < codeLength; i++ ) {
				var charIndex = Math.floor( Math.random() * 60 );
				code += selectChar[ charIndex ];
			}
			if( code.length != codeLength ) {
				createCode();
			}
			showCheck( code );
		}
		
		function validCode() {
			var inputCode = document.getElementById( "J_codetext" ).value;
			if( inputCode ) {
				var iptCode = inputCode.toUpperCase();
			}
			if( code ) {
				var codeToUp = code.toUpperCase();
			}
			/*if( inputCode.length <= 0 ) {
			 document.getElementById( "J_codetext" ).setAttribute( "placeholder","请输入右边的验证码" );
			 return false;
			 }*/
			if( iptCode != codeToUp ) {
				document.getElementById( "J_codetext" ).value = "";
				document.getElementById( "J_codetext" ).setAttribute( "placeholder","验证码错误！" );
				return false;
			}
			else {
				return true;
			}
		}
		
		$( "#myCanvas" ).click( function() {
			createCode();
			$( "#J_codetext" ).focus();
		} );
		/*$( "#J_codetext" ).blur( function() {
		 validCode();
		 } );*/
		/*注册登录按钮*/
		//用户和登出
		var $ml = $( '#member, #logout' );
		//注册和登录
		var $rl = $( '#reg, #log' );
		if( $.cookie( 'user' ) ) {
			$ml.show();
			$rl.hide();
			$( '#member' ).html( $.cookie( 'user' ) );
		} else {
			$ml.hide();
			$rl.show();
		}
		$( '#reg' ).click( function() {
			$( '#regBox' ).modal( {
				show     : true,
				keyboard : true
			} );
			$( '#regForm' ).resetForm();
			createCode();
		} );
		$( '#log' ).click( function() {
			$( '#logBox' ).modal( {
				show     : true,
				keyboard : true
			} );
			$( '#logForm' ).resetForm();
		} );
		$( '#logout' ).click( function() {
			alert( "linchquiang" );
			$.removeCookie( 'user' );
			console.log( window.location.href );
			window.location.href = "/src/html/";
		} );
		//返回按钮,清空验证
		$( '#returnLog' ).click( function() {
			$( this ).parents( '.modal-footer' ).prev( '.modal-body' ).find( 'input' ).removeClass( 'invalid valid' );
			$( '#logWarn' ).children().css( 'display','none' );
		} );
		$( '#log_close' ).click( function() {
			$( this ).parents( '.modal-header' ).siblings( '.form-horizontal' ).children( '.modal-body' ).find( 'input' ).removeClass( 'invalid valid' );
			$( '#logWarn' ).children().css( 'display','none' );
		} );
		$( '#returnReg' ).click( function() {
			$( this ).parents( '.modal-footer' ).prev( '.modal-body' ).find( 'input' ).removeClass( 'invalid valid' );
			$( '#regWarn' ).children().css( 'display','none' );
		} );
		$( '#reg_close' ).click( function() {
			$( this ).parents( '.modal-header' ).siblings( '.form-horizontal' ).children( '.modal-body' ).find( 'input' ).removeClass( 'invalid valid' );
			$( '#regWarn' ).children().css( 'display','none' );
		} );
		//登录框验证
		$( '#logForm' ).validate( {
			rules               : {
				logAccount  : {
					required  : true,
					minlength : 5
				},
				logPassword : {
					required  : true,
					minlength : 6
				}
			},
			messages            : {
				logAccount  : {
					required  : '帐号不得为空！',
					minlength : $.validator.format( '帐号不得小于{0}位！' )
				},
				logPassword : {
					required  : '密码不得为空！',
					minlength : $.validator.format( '密码不得小于{0}位！' )
				}
			},
			focusInvalid        : true,
			errorLabelContainer : '#logWarn',
			wrapper             : 'span',
			submitHandler       : function( form ) {
				$( form ).ajaxSubmit( {
					url          : '../php/login.php',
					type         : 'POST',
					beforeSubmit : function( formData,jqForm,options ) {
						$( '#logDiv' ).popover( {
							html      : true,
							content   : '正在为您登录&nbsp;<img src="../img/loading.gif"/>',
							placement : 'top',
							delay     : { "show" : 50,"hide" : 50 },
							trigger   : 'manual'
						} ).popover( 'show' );
						$( '#logBtn' ).attr( "disabled","" );
					},
					success      : function( responseText,statusText ) {
						if( responseText ) {
							$( '#logDiv' ).popover( {
								html      : true,
								content   : '已经登录成功&nbsp;<img src="../img/success.gif"/>',
								placement : 'top',
								delay     : { "show" : 50,"hide" : 50 },
								trigger   : 'manual'
							} );
							if( $( '#logExp' ).is( ':checked' ) ) {
								$.cookie( 'user',$( '#logAccount' ).val(),{
									expires : 7
								} );
							} else {
								$.cookie( 'user',$( '#logAccount' ).val() );
							}
							setTimeout( function() {
								$( '#logDiv' ).popover( 'hide' );
								$( '#logBtn' ).removeAttr( "disabled","" );
								$( '#logBox' ).modal( 'hide' );
								$( '#logForm' ).resetForm();
								$ml.show();
								$rl.hide();
								$( '#member' ).html( $.cookie( 'user' ) );
							},2000 );
						}
					}
				} );
			},
			highlight           : function( element,errorClass ) {
				//$(element).css({'border':'1px solid rgba(253, 8, 8, 0.29)','background':'url("../img/invalid.png")
				// no-repeat right','padding-right':'3px'});
				$( element ).removeClass( 'valid' );
				$( element ).addClass( 'invalid' );
			},
			unhighlight         : function( element,errorClass ) {
				//$(element).css({'border':'1px solid green','background':'url("../img/valid.png") no-repeat
				// right','padding-right':'3px'});
				$( element ).removeClass( 'invalid' );
				$( element ).addClass( 'valid' );
			}
		} );
		//注册框验证
		$( '#regForm' ).validate( {
			onkeyup             : false,
			rules               : {
				userN    : {
					required  : true,
					minlength : 6,
					remote    : {
						url  : '../php/user_equal.php',
						type : 'POST'
					}
				},
				pw       : {
					required  : true,
					minlength : 6
				},
				email    : {
					required : true,
					email    : true
				},
				authCode : {
					required : function( element ) {
						if( code ) {
							var codeToUp = code.toUpperCase();
						}
						if( $( element ).val() ) {
							var iptCode = $( element ).val().toUpperCase();
						}
						if( iptCode != codeToUp ) {
							$( element ).val( "" );
							$( element ).attr( "placeholder","验证码错误！" );
							return true;
						} else {
							return false;
						}
					}
				}
			},
			messages            : {
				userN    : {
					required  : '帐号不得为空！',
					minlength : $.validator.format( '帐号不得小于{0}位！' ),
					remote    : '帐号被占用！'
				},
				pw       : {
					required  : '密码不得为空！',
					minlength : $.validator.format( '密码不得小于{0}位！' )
				},
				email    : {
					required  : '邮箱不得为空！',
					minlength : $.validator.format( '邮箱不得小于{0}位！' )
				},
				authCode : {
					required : '验证码错误！'
				}
			},
			errorLabelContainer : '#regWarn',
			wrapper             : 'span',
			submitHandler       : function( form ) {
				$( form ).ajaxSubmit( {
					url          : '../php/reg.php',
					type         : 'POST',
					beforeSubmit : function( formData,jqForm,options ) {
						$( '#regDiv' ).popover( {
							html      : true,
							content   : '正在为您注册&nbsp;<img src="../img/loading.gif"/>',
							placement : 'top',
							delay     : { "show" : 50,"hide" : 50 },
							trigger   : 'manual'
						} ).popover( 'show' );
						$( '#regBtn' ).attr( "disabled","" );
					},
					success      : function( responseText,statusText ) {
						if( responseText ) {
							$( '#regDiv' ).popover( {
								html      : true,
								content   : '已经注册成功&nbsp;<img src="../img/success.gif"/>',
								placement : 'top',
								delay     : { "show" : 50,"hide" : 50 },
								trigger   : 'manual'
							} );
							$.cookie( 'user',$( '#account' ).val() );
							setTimeout( function() {
								$( '#regBox' ).modal( 'hide' );
								$( '#regForm' ).resetForm();
								$( '#regBtn' ).removeAttr( "disabled","" );
								$( '#regDiv' ).popover( 'hide' );
								$ml.show();
								$rl.hide();
								$( '#member' ).html( $.cookie( 'user' ) );
							},2000 );
						}
					}
				} );
			},
			highlight           : function( element,errorClass ) {
				$( element ).removeClass( 'valid' );
				$( element ).addClass( 'invalid' );
			},
			unhighlight         : function( element,errorClass ) {
				$( element ).removeClass( 'invalid' );
				$( element ).addClass( 'valid' );
			}
		} );
		//日期选择
		$.fn.datetimepicker.dates[ 'zh-CN' ] = {
			days        : [ "星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日" ],
			daysShort   : [ "周日","周一","周二","周三","周四","周五","周六","周日" ],
			daysMin     : [ "日","一","二","三","四","五","六","日" ],
			months      : [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
			monthsShort : [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
			today       : "今日",
			suffix      : [],
			meridiem    : [ "上午","下午" ],
			format      : "yyyy-mm-dd" /*控制显示格式*/
		};
		$( '.form_date' ).datetimepicker( {
			language       : 'zh-CN',
			weekStart      : 1,
			todayBtn       : 1,
			autoclose      : 1,
			todayHighlight : 1,
			startView      : 2,
			minView        : 2,
			forceParse     : 0
		} );
		//提示框
		$( '[data-toggle="tooltip"]' ).tooltip( {
			placement : 'bottom'
		} );
		return $;
	} );
