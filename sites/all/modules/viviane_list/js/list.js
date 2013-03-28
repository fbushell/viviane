;(function( $, window, document, undefined ){
   
	'use strict';

	// Init vars
	var $window    = $(window),
			$document  = $(document),
			$html      = $("html"),
			$loader    = $("div#loader"),
			$splash    = $('#name-splash'),
			$html      = $("html"),
			$container = $('div#iso-container')

	// viviane
	var viviane = {

		init: function(){

			var self = this;
			self.$nav = $("#nav a");

			// Attach click handlers
			self.$nav.on("click", self.scrollTo);

			self.listHover();

	},

	listHover: function(){
		var self = viviane;
		var $item = $('.list-item');

		$item.on('hover', function(){
			$(this).find('.list-img').toggleClass('hidden');
		});
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


	}


	//
	// All ready.. lets do this dance
	//
	$window
		.load(function(){

			setTimeout(function() {

				$html.css('overflow', 'auto');
				$splash.fadeOut();
				setTimeout(function() {
					$loader.fadeOut('slow');
				}, 500)

			}, 3000)

			viviane.init();

		})

		.resize(function(){

		})

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;


}( jQuery, window, document));

