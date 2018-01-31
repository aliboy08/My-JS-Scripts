/*! FF Swap Children Plugin v.1 */

(function($){
	
	$.fn.ff_swap_children = function(options) {
	
		var $this = this;
		
		if (!$this.length) {
			console.log('Cant find element: ', $this);
			return;
		}
		
		var settings = $.extend({
			window_width: 768,
			child_left: null,
			child_right: null,
		}, options);

		// Initialize

		// add index class
		if( settings.child_left && settings.child_right ) {
			$this.find(settings.child_left).addClass('child-0');
			$this.find(settings.child_right).addClass('child-1');
		} else {
			$this.children().each(function(index) {
				$this.addClass('child-' + index);
			});
		}

		// Run on init
		ff_swap_children($this, settings.window_width);

		// Run on resize
		$(window).resize(function() {
			ff_swap_children($this, settings.window_width);
		});

		function ff_swap_children(el, target_window_width) {
			var left_child, right_child;
			
			if( settings.child_left && settings.child_right ) {
				left_child = el.find(settings.child_left);
				right_child = el.find(settings.child_right);
			} else {
				left_child = el.children()[0];
				right_child = el.children()[1];
			}
			
			if ($(window).width() <= target_window_width) {
				if (!$(left_child).hasClass("child-1")) {
					left_child.before(right_child); // swap
				}
			} else {
				if ($(left_child).hasClass("child-1")) {
					left_child.before(right_child); // swap back
				}
			}
		}

		return this;
	}
	
})(jQuery)