;(function( $, window, document, undefined ){
   
	'use strict';

	// Init vars
	var $window    = $(window),
			$document  = $(document),
			$html      = $("html"),
			$loader    = $("div#loader"),
			$splash    = $('#name-splash'),
			$html      = $("html"),
			$container = $('div#iso-container'),
			columns    = 3;

	// viviane
	var viviane = {

		init: function(){

			var self = this;
			self.$nav = $("#nav a");

			self.intro();
			self.grid();

			// Attach click handlers
			self.$nav.on("click", self.scrollTo);

			//self.setColumns();

	},

	intro: function(){
		var self   = viviane;
		var $intro = $('div#intro');
		var $txt   = $('#statement');

		var winH   = $window.height();
		var txtH   = $txt.outerHeight();
		var centerCalc = (winH - txtH) / 2;

		if ( centerCalc > 50 ) {

			$txt.css('margin-top', centerCalc);

		} else {

			$txt.css('margin-top', '50px');

		}

		// Ensure height of intro in small window
		if ( txtH > winH ) {

			$intro.css('height', txtH);

		} else {

			$intro.css('height', winH);
		}

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
              		//console.log(e);
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
				$splash.fadeOut();
				setTimeout(function() {
					$loader.fadeOut('slow');
				}, 500)

			}, 3000)

			viviane.init();

		})

		.resize(function(){
			//var winWidth = $window.width();
			//viviane.setColumns(winWidth);
			viviane.intro();
		})

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;


}( jQuery, window, document));

