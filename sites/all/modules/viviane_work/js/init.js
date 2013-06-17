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
			self.$nav         = $("#nav a");
			self.$infoClick   = $('.information');
			self.$infoClose   = $('.information-close');
			self.$infoSection = $('.info-section');
			self.$content     = $('.info-content');
			self.$header      = $('#header');
			self.headerH      = self.$header.outerHeight();
			self.$wrapper     = $('#wrapper');
			
			self.vid();
			self.$infoClick.on('click', self.informationOpen);
			self.$infoClose.on('click', self.informationClose);
			self.locationHashChanged();
			self.setDimensions();

		},

		vid: function() {
			var self = this;
			var $vidWrap = $('.work-video');

			$vidWrap.fitVids();

		},

		setDimensions: function() {
			var self = this;
			self.winH = $window.height();
			self.scrollH = self.winH - self.headerH;

		},

	  locationHashChanged: function() {
	  	var self = viviane;
	  	var $statement = $('div.statement');
	  	var $contact = $('div.contact');
	  	var $resume = $('div.resume');
	  	var $biography = $('div.biography');
	  	var $allTabs = $('div.info-tab');

	  	switch (location.hash) {
	  		case '#contact':
	  			$allTabs.fadeOut(700).removeClass('active');
	    		setTimeout(function(){$contact.fadeIn('slow').addClass('active')},500);
	    		break;
	    	case '#statement':
	    		$allTabs.fadeOut(700).removeClass('active');
	    		setTimeout(function(){$statement.fadeIn('slow').addClass('active')},500);
	    		break;
	    	case '#resume':
	    		$allTabs.fadeOut(700).removeClass('active');
	    		setTimeout(function(){$resume.fadeIn('slow').addClass('active')},500);
	    		break;
	    	case '#biography':
	    		$allTabs.fadeOut(700).removeClass('active');
	    		setTimeout(function(){$biography.fadeIn('slow').addClass('active')},500);
	    		break;
	  	}
	},

	//
	// Information section
	//
	informationOpen: function(event) {
		var self = viviane;
		var $trigger     = $(this);
		var $other       = $('.information-close');

		$trigger.hide();
		$other.show();
		self.$header.animate({'top': self.scrollH}, 500);
		self.$wrapper.animate({'top': self.scrollH}, 500).css('overflow', 'scroll');
		$html.css('overflow', 'hidden');
		self.$infoSection
			.stop()
			.animate({'height': self.scrollH}, 500, function() {
				self.$content.css('opacity', 100);
			}
			);	
	},

	informationClose: function(event) {
		var self = viviane;
		var $trigger     = $(this);
		var $other       = $('.information');
		var $allTabs     = $('div.info-tab');
		
		$trigger.hide();
		$other.show();
		$html.css('overflow', 'auto');
		self.$content.css('opacity', 0)	;
		self.$header.stop().animate({'top': 0}, 500);
		self.$wrapper.animate({'top': 0}, 500);
		self.$infoSection.stop().animate({'height': 0}, 500);		
		$allTabs.fadeOut(700);		
	}
}


	//
	// All ready.. lets do this dance
	//
	$window
		.load(function(){
			viviane.init();
		})

		.resize(function(){
			viviane.setDimensions();
		})

		.scroll(function(){})

		window.onhashchange = viviane.locationHashChanged;

		window.viviane = viviane;

}( jQuery, window, document));

