/*! FF Sticky Header Plugin v.1 */

(function($){
	
	$.fn.ff_sticky_header = function(options){
		
		var settings = $.extend({
			disable_width: 539,
			offset: false,
			stick_class: 'swing-in-top-fwd',
			unstick_class: 'swing-in-bottom-fwd',
			body_stick_class: 'with-sticky-header',
		}, options);
		
		var header = this;

		function header_stick_init(){
			header.addClass('ff-sticky-header');
			if( !header.parent().hasClass('sticky-header-spacer') ) {
				// Create spacer, to avoid bump on sticky
				header.wrap('<div class="sticky-header-spacer" style="height:'+ header.outerHeight() +'px;position: relative;z-index: 999;"></div>');
			}
		}
		
		function header_stick_check() {
			
			var offset = ( !settings.offset ) ? header.outerHeight() : settings.offset;
			
			if( window.pageYOffset > offset ) {
				
				if( header.hasClass('stick') ) {
					return;
				}
				
				// Activate Sticky
				header.addClass('stick '+ settings.stick_class ).removeClass( settings.unstick_class );
				$('body').addClass( settings.body_stick_class );
				
			} else {
				
				if( !header.hasClass('stick') ) {
					return;
				}
				
				// Deactivate Sticky
				header.removeClass('stick '+ settings.stick_class).addClass( settings.unstick_class );
				$('body').removeClass(settings.body_stick_class );
			}
		}
		
		// Initialize
		header_stick_init();

		// On scroll
		window.onscroll = function() {
			if( $(window).width() > settings.disable_width ) {
				header_stick_check();
			}
		}
		
		// On resize
		$(window).resize(function() {
			// Update spacer height on resize
			if( header.parent().hasClass('sticky-header-spacer') ) {
				header.parent().css('height', header.outerHeight() +'px');
			}
		});
		
		return this;
	}
	
})(jQuery)