/*! FF Swap Children Plugin v.1 */

(function($){
	
	$.fn.ff_swap_children = function( options ) {
		
		if( !$(this).length ) {
			console.log('Cant find element: ', this);
			return;
		}
		
		var $this = this;
		
		var settings = $.extend({
			window_width: 768
		}, options );
		
		// Initialize
		
		// add index class
		$(this).children().each(function(index){
			$(this).addClass('child-'+ index);
		});
		
		// Run on init
		ff_swap_children($this, settings.window_width);
		
		// Run on resize
		$(window).resize(function() {
			ff_swap_children($this, settings.window_width);
		});
		
		function ff_swap_children(el, target_window_width){
			var left_child = el.children()[0];
			var right_child = el.children()[1];
			if( $(window).width() <= target_window_width ) {
				if( !$(left_child).hasClass("child-1") ) {
					left_child.before(right_child); // swap
				}
			} else {
				if( $(left_child).hasClass("child-1") ) {
					left_child.before(right_child); // swap back
				}
			}
		}
		
		return this;
	}
	
})(jQuery)