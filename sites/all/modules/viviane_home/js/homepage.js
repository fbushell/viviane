;(function( $, window, document, undefined ){
   
	'use strict';

	// Init vars
	var $window   = $(window),
			$document = $(document),
			$html     = $("html"),
			$loader   = $("div#loader"),
			$html     = $("html");

	// viviane
	var viviane = {

		init: function(){

			var self = this;
			self.$nav = $("#nav a");

			self.isotopeInit();

			// Attach click handlers
			self.$nav.on("click", self.scrollTo);

	},

		//
		// Ohhhhhh baby that is some smooth scrolling
		//
		scrollTo: function(event){

			var self = viviane;

			// Init
			var $link = $(this);

			// Scroll to href of clicked link
			$("html, body").stop().animate({

        scrollTop: $($link.attr("href")).offset().top + 30

      }, 1500,'easeInOutExpo');

			event.preventDefault();

		},

		//
		// Init it for Dave!
		//
		isotopeInit: function() {

			$('#iso-container').isotope();

		}
		
	}


	//
	// All ready.. lets do this dance
	//
	$window
		.load(function(){

			setTimeout(function() {

				$html.css('overflow', 'auto');
				$loader.fadeOut();

			}, 1000)

			viviane.init();

		})

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;


}( jQuery, window, document));

