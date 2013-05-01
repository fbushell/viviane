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
			self.randomPosition();

		},

		listHover: function(){
			var self = viviane;
			var $item = $('.list-item');

			$item.on('hover', function(){
				var $this = $(this).find('.list-img');
				$this.toggleClass('hidden');
				self.randomPosition($this);
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

			randomPosition: function(item){

				var self = viviane;
				var $item = $(item);

				var winwidth	= $window.width();
				var posx		= Math.floor(Math.random() * (winwidth - 800));
				var posy		= Math.floor(Math.random() * 250) + -250;

				console.log(winwidth);

				$item.css({top:posy, right:posx});
			}


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

			}, 1000)

			viviane.init();

		})

		.resize(function(){

		})

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;


}( jQuery, window, document));

