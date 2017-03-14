define(['jquery', 'transition'], function ($) {

	var ns = '.my.searchDrpdon',
	    toggle = "[data-toggle='searchDrpdon']";

	function setTransition($elem, transition) {
		$elem.css(
			{
				'transition-duration': transition,
				'-moz-transition-duration': transition,
				'-webkit-transition-duration': transition,
				'-o-transition-duration': transition
			}
		);
	}

	function setOrigin($elem, dir) {
		var props = dir === 'right' ? '100% 0' : dir === 'down' ? '50% 0' : '0 0';

		$elem.css(
			{
				'transform-origin': props,
				'-moz-transform-origin': props,
				'-webkit-transform-origin': props,
				'-o-transform-origin': props
			}
		);
	}

	function createGutter($parent, $menu) {
		var height = parseInt($menu.css('margin-top'), 10),
		    $gutter = height > 0 && $('<div class="dropdown-gutter" style="height:' + height + 'px"></div>');

		return height > 0 && $parent.append($gutter);
	}

	function clickToggle(e) {
		var $parent = this.$parent,
		    isActive = $parent.hasClass('searchOpen');

		isActive ? this.hide(e) : this.show(e);
	}

	function SearchDrpdon(element, opts) {
		var $elem = $(element),
		    $parent = $elem.parent('.searchDrpdon'),
		    $menu = $parent.find('.searchDrpdon-menu');

		if ($parent.hasClass('searchFade')) {
			setTransition($elem.find('.caret'), (opts.transition / 1000) + 's');
			setTransition($menu, (opts.transition / 1000) + 's');
			setOrigin($menu, opts.dir);
		}

		this.$elem = $elem;
		this.$parent = $parent;
		this.opts = opts;

		if (opts.trigger === 'hover') {
			createGutter($parent, $menu);
			$parent.on('mouseenter' + ns + '.toggle', $.proxy(this.show, this));
			$parent.on('mouseleave' + ns + '.toggle', $.proxy(this.hide, this));
		} else {
			$parent.on('click' + ns + '.toggle', '.searchDrpdon-toggle', $.proxy(clickToggle, this));
		}
	}

	SearchDrpdon.DEFAULTS = {
		trigger: 'click',
		transition: '200',
		dir: 'left'
	};

	SearchDrpdon.prototype = {
		show: function (e) {
			var $elem = this.$elem,
			    $parent = this.$parent,
			    isActive = $parent.hasClass('searchOpen'),
			    opts = this.opts;

			if ($elem.is('.disabled, :disabled')) return;

			clearMenus(e);

			if (!isActive) {
				$elem.trigger(e = $.Event('show' + ns));
				if (e.isDefaultPrevented()) return;

				$parent.addClass('searchOpen').addClass('searchIn');//触发过渡

				function _afterToggle() {//过渡回调
					$elem.trigger(e = $.Event('shown' + ns));
					$elem = null;
				}

				$.support.transition && $parent.hasClass('searchFade') ?
					$parent
					.one('bsTransitionEnd', _afterToggle)
					.emulateTransitionEnd(opts.transition) :
					_afterToggle();
			}
		},
		hide: function (e, noFade) {
			var $parent = this.$parent,
			    $elem = this.$elem,
			    opts = this.opts;

			$elem.trigger(e = $.Event('hide' + ns));
			if (e.isDefaultPrevented()) return;

			$parent.removeClass('searchIn');//触发过渡
			function _afterToggle() {//过渡回调
				$parent.removeClass('searchOpen');
				$parent = null;
				$elem.trigger($.Event('hidden' + ns));
			}

			$.support.transition && !noFade && $parent.hasClass('searchFade') ?
				$parent
				.one('bsTransitionEnd', _afterToggle)
				.emulateTransitionEnd(opts.transition) :
				_afterToggle();
		},
		isActive: function () {
			return this.$parent.hasClass('searchOpen');
		},
		contains: function (target) {
			return $.contains(this.$parent[0], target);
		},
		destroy: function () {
			this.$parent.off(ns);
			this.$elem.data(ns.substring(1), undefined);
			this.$elem = null;
			this.$parent = null;
			this.opts = null;
		}
	};

	function clearMenus(e) {
		if (e && e.which === 3) return;
		$(toggle).each(function () {
			var $elem = $(this),
			    SearchDrpdon = $elem.data(ns.substring(1));

			if (!SearchDrpdon) return;
			if (e && e.type == 'click' && SearchDrpdon.contains(e.target)) return;
			if (!SearchDrpdon.isActive()) return;

			SearchDrpdon.hide(e, true);
		});
	}

	//封装成jq插件
	function Plugin(option) {
		return this.each(function () {
			var $this = $(this),
			    name = ns.substring(1),
			    data = $this.data(name),
			    options = $.extend({}, SearchDrpdon.DEFAULTS, $this.data(), typeof option === 'object' && option);

			if (!data) $this.data(name, (data = new SearchDrpdon(this, options)));
			if (typeof option == 'string') data[option].call($this);
		});
	}

	$.fn.SearchDrpdon = Plugin;
	$.fn.SearchDrpdon.Constructor = SearchDrpdon;

	/*toggle = "[data-toggle='searchDrpdon']";*/
	$(toggle).SearchDrpdon();
	/* ns = '.my.searchDrpdon'*/
	$(document).on('click' + ns + '.data-api', clearMenus);

	return $;
});