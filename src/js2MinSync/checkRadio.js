define(['jquery','icheck'], function ($) {
	$('#search-block' ).find('input[type="checkbox"],input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox',
        radioClass: 'iradio'
    });
    return $;
});