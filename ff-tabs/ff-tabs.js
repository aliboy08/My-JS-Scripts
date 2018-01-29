/*! FF Custom Tabs Plugin v.1 */
(function($){
	
	$.fn.ff_tabs = function(options) {
	
		this.addClass('ff-custom-tabs-init');
		
		var settings = $.extend({
			nav: '.tabs-nav',
			tabs: '.tabs',
			on_init: '',
			after_click: '',
		}, options );
		
		if( typeof settings.on_init === 'function' ) {
			settings.on_init();
		}
		
		var nav = this.find(settings.nav),
			tabs = this.find(settings.tabs),
			target, this_nav_item, target_tab;
			
		// Hide on init
		tabs.children().hide();
		
		// Set first nav item active
		$(nav.children('a')[0]).addClass('active');
		
		// Show first tab item
		$(tabs.children()[0]).fadeIn();
		
		nav.find('a').click(function(e){
			e.preventDefault();
			
			this_nav_item = $(this);
			
			if( this_nav_item.hasClass('active') ) {
				return;
			}
			
			target = this_nav_item.attr('href');
			
			// Set nav item active
			nav.children('a').removeClass('active'); // reset
			this_nav_item.addClass('active');
			
			target_tab = tabs.find(target);
			// Show target tab
			tabs.children().hide(); // reset
			target_tab.fadeIn();
			
			// After click callback
			if( typeof settings.after_click === 'function' ) {
				settings.after_click({
					this_nav_item: this_nav_item,
					target_tab: target_tab,
				});
			}
			
		});
		
		return this;
	};
	
})(jQuery)