;(function( $, window, document, undefined ){
   
  'use strict';

  // Init vars
  var $window    = $(window),
      $document  = $(document),
      $html      = $("html"),
      $loader    = $("div#loader"),
      $splash    = $('#name-splash'),
      $html      = $("html");

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

      // Attach click handlers
      //self.$nav.on("click", self.scrollTo);
      self.$infoClick.on('click', self.informationOpen);
      self.$infoClose.on('click', self.informationClose);
      self.listHover();
      self.randomPosition();
      self.locationHashChanged();
      self.setDimensions();
      self.vid();

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

      // if (location.hash === "#contact") {
      //    $statement.fadeOut();
      //    $contact.fadeIn();
      //     // Logic for when someone navigates directly to the contact section
      //     //self.informationOpen();
      // }
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

        var winwidth  = $window.width();
        var posx    = Math.floor(Math.random() * (winwidth - 800));
        var posy    = Math.floor(Math.random() * 250) + -250;

        //console.log(winwidth);

        $item.css({top:posy, right:posx});
      },

      //
      // Information section
      //
      informationOpen: function(event) {
        var self = viviane;
        var $trigger     = $(this);
        var $info        = $('.information');
        var $other       = $('.information-close');

        $trigger.hide();
        $info.hide();
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
        var $close       = $('.information-close');
        var $other       = $('.information');
        var $allTabs     = $('div.info-tab');
        
        $trigger.hide();
        $close.hide();
        $other.show();
        $html.css('overflow', 'auto');
        self.$content.css('opacity', 0) ;
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
      viviane.setDimensions();
    })

    .scroll(function(){
      //console.log('scrolling');

    })

    $document.keyup(function(e) {
      // esc to close drawer
      if (e.keyCode == 27 || e.keyCode == 38) { viviane.informationClose(); } 
      if (e.keyCode == 40 ) { e.preventDefault(); viviane.informationOpen(); }
    });

    window.onhashchange = viviane.locationHashChanged;

    window.viviane = viviane;


}( jQuery, window, document));

