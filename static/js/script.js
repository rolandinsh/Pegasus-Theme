if (typeof jQuery != 'undefined'){
	jQuery(document).ready(function($) {
		Webcom.slideshow($);
		Webcom.chartbeat($);
		Webcom.analytics($);
		Webcom.handleExternalLinks($);
		Webcom.loadMoreSearchResults($);
		
		// Is this the user's first visit to the site?
		var initial_visit = $.cookie('initial-visit') == null ? true : false;

		(function() {
			$('#story_nav').hide();
			
			var toggle_nav         = $('.toggle_story_nav a'),
				toggle_nav_tooltip = null,
				tooltip_options    = {
					placement:'bottom',
					title  :'<strong>Click here <br /> for more stories</strong>'
				};

			toggle_nav
				.click(function(e) {
					e.preventDefault();
					var story_nav = $('#story_nav');
					if(story_nav.is(':visible')) {
						$(this).html('&#9660;');
					} else {
						$(this).html('&#9650;');
					}
					story_nav.slideToggle();
				});
			toggle_nav.tooltip(tooltip_options);

			// If this is the user's first visit,
			// show the tooltip for 7 seconds
			if(initial_visit) {
				toggle_nav.tooltip('show');
				setTimeout(function() {toggle_nav.tooltip('hide');}, 7000);
			}
		})();

		/* iPad Model */
		(function() {
			var ipad_hide = $.cookie('ipad-hide');
			if((ipad_hide == null || !ipad_hide) && navigator.userAgent.match(/iPad/i) != null) {
				$('#ipad')
					.modal()
					.on('hidden', function() {
						$.cookie('ipad-hide', true);
					});
			}
		})();

		$.cookie('initial-visit', true);
	});
}else{console.log('jQuery dependancy failed to load');}