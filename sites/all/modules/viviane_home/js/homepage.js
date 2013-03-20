;(function( $, window, document, undefined ){
   
	'use strict';

	// Init vars
	var $window    = $(window),
			$document  = $(document),
			$html      = $("html"),
			$loader    = $("div#loader"),
			$html      = $("html"),
			$container = $('div#iso-container'),
			columns    = 3;

	// viviane
	var viviane = {

		init: function(){

			var self = this;
			self.$nav = $("#nav a");

			self.grid();

			// Attach click handlers
			self.$nav.on("click", self.scrollTo);

			//self.setColumns();

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

    // setColumns: function(e) { 
    // 	var resize = e;
    // 	var columns = ($window.width() > 640) ? 3 : $window.width() > 320 ? 2 : 1; 
    // },

		grid: function() {

      $container.imagesLoaded(function () {
          $container.masonry({
              itemSelector: ".col",
              gutterWidth: 0,
              columnWidth: function (e) {
              		var e = e;
              		console.log(e);
                  var t = $window.width();
                  if (t <= 960) {
                      var n = 12
                  } else if (t <= 480) {
                      var n = 1
                  } else {
                      var n = 12
                  }
                  return e / n
              }
          })
      })
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

		.resize(function(){
			//var winWidth = $window.width();
			//viviane.setColumns(winWidth);
		})

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;


}( jQuery, window, document));

