(function($){
	
	$.fn.ff_equal_heights = function( options ) {
		
		if( !$(this).length ) {
			console.log('Cant find elements: ', this);
			return;
		}
		
		var $this = this;
		
		var settings = $.extend({
			enable_on_resize: true,
			disable_on_width: false,
		}, options );
		
		// Disable on window width
		if( settings.disable_on_width ) {
			if( window.innerWidth <= settings.disable_on_width ) {
				$this.css("min-height", "initial");
				return $this;
			}
		}
		
		// Initialize
		ff_set_equal_heights($this);
		
		if( settings.enable_on_resize ) {
			
			// On resize
			$(window).resize(function() {
				
				// Disable on window width
				if( settings.disable_on_width ) {
					if( window.innerWidth <= settings.disable_on_width ) {
						$this.css("min-height", "initial");
						return $this;
					}
				}
		
				ff_set_equal_heights($this);
			});
		}
		
		function ff_set_equal_heights(el){
			var temp_height = 0;
			el.each(function(){
				if( temp_height < $(this).outerHeight() ) {
					temp_height = $(this).outerHeight();
				}
			});
			el.css("min-height", temp_height + "px");
		}
		
		return $this;
	}
	
})(jQuery)