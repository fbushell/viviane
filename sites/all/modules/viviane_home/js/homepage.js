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
			self.$eventHover = $(".event");

			self.timelineWidth();
			self.collectWorks();

			// Attach click handlers
			self.$nav.on("click", self.scrollTo);
			self.$eventHover.hover(self.eventHover, self.eventHoverLeave);

	},

		//
		// Calculate the width of the timeline
		//
		timelineWidth: function(){

			var self = this;

			var $timelime = $("#timeline-wrap"),
					$year = $(".year"),
					$yearWidth = $year.outerWidth( true	 ),
					$yearTotal = $year.length,
					$yearLength;

			//window.cirro = { $year: $year };

			$yearLength = $yearWidth * $yearTotal;

			$timelime.css("width", $yearLength);

		},


		//
		// Collects the events to be stored in the object
		//
		collectWorks: function() {

			var self = this;
			
			var $works = $('.event');

			self.works = [];

			$works.each(function(index) {

				var $this = $( this );

				var work = {
					width: $this.width(),
					$: $this,
					row: null
				};

				self.works.push( work );

				// Last iteration
				if ( index === $works.length - 1 ) {

					self.rowPlacer();

				}

				self.row1 = false;

			});

		},


		rowPlacer: function() {

			var self = this;

			$document.on('viviane.year', function() {

				// Loop through the events

			});

			// Loop through all pixels in the width of the timeline
			for (var i = 1; i <= 4000; i += 75) {

				self.year = i;

				$document.trigger('viviane.year');

			}

		},


		//
		// We are talking about a real live map here
		//
		googleMap: function(){

			var self = this;

			// Lat long of store
				var Latlng = new google.maps.LatLng(39.772213,-104.982498);

				// Google map styles array
				var styles = [
				  {
				    "stylers": [
				      { "saturation": -50 },
				      { "gamma": 0 },
				      { "weight": 0.3 },
				      { "visibility": "on" }
				    ]
				  }
				];

			  // Create a new StyledMapType object, passing it the array of styles,
			  // as well as the name to be displayed on the map type control.
			  var styledMap = new google.maps.StyledMapType(styles);

			  // Create a map object, and include the MapTypeId to add
			  // to the map type control.
			  var mapOptions = {

			    zoom: 15,
			    center: Latlng,
			    scrollwheel: false,
			    mapTypeControl: false,
			    mapTypeId: google.maps.MapTypeId.ROADMAP

			  };

			  var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);

			  // Map marker
			  var marker = new google.maps.Marker({
			      position: Latlng,
			      map: map
			      //animation: google.maps.Animation.DROP
			      //title:"viviane"
			  });

			  //Associate the styled map with the MapTypeId and set it to display.
			  map.mapTypes.set('map_style', styledMap);
			  map.setMapTypeId('map_style');

		},


		//
		// Calculate the width of the timeline
		//
		eventHover: function(event){ 

			var self = viviane;
			var $tlEvent = $(this);
			var img = $tlEvent.find("img.event-img").attr("src");

			//console.log(img);

			$html.addClass("img-hovered").css("background-image", 'url(' + img + ')');

		},

		eventHoverLeave: function(event){ 

			var self = viviane;
			var $tlEvent = $(this);

			$html.removeClass("img-hovered").css("background-image", 'none');
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
		// Just tell me where i am dammit!
		//
		setActiveSection: function(){

			var sections  = {},
					$this     = $(this);
					winHeight = $window.height(),
					$nav      = $("#nav"),
					$navItem  = $("#nav li a"),
					i 				= 0;

			// Grab the position of all our sections
			$(".section").each(function(){

				sections[this.id] = $(this).offset().top;

			})
			
			$(window).scroll(function(){

				var pos = $(this).scrollTop();

				for ( i in sections ) {

					if ( sections[i] > pos && sections[i] < pos + winHeight - 300 ) {

						var $active = $('#nav a.active');

						// Remove other active class if necessary
						if ( !$active.hasClass(i) ){
						  
						  $active.removeClass('active');

						} 

						// Add new active class
						if ( i !== 'start-section' ) {
						  
						  $( '#nav a.' + i ).addClass('active');
						  
					  }

					} 
				
				} 

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

		.scroll(function(){

			//console.log('scrolling');

		})

		window.viviane = viviane;

}( jQuery, window, document));

