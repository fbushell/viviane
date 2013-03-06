;(function( $, window, document, undefined ){
   
	'use strict';

	// Init vars
	var $window   = $(window),
			$document = $(document),
			$html     = $("html");

	// viviane
	var viviane = {

		init: function(){

			var self = this;
			self.$slider = $(".flexslider");
			self.flexslider();

		},

		//
		// Init Flexslider
		//
		flexslider: function(){

			var self = this;

			self.$slider.flexslider({
				animation: 'slide',
				directionNav: false,
			});

		}

		
	}


	//
	// All ready.. lets do this dance
	//
	$window
		.load(function(){

			viviane.init();

		})

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;

}( jQuery, window, document));

