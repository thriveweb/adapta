$(document).on('ready',function(){
  // Set Revolution Slider
  jQuery('.tp-banner').show().revolution({
    // Set time and size
    dottedOverlay:"none",
    delay:1000,
    startwidth:1170,
    startheight:700,
    hideThumbs:200,   
    // Set thumbnail image
    thumbWidth:100,
    thumbHeight:50,
    thumbAmount:5,
    touchenabled:"on",    
    // Set swipe
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,   
    // Set parallax
    parallax:"mouse",
    parallaxBgFreeze:"on",
    parallaxLevels:[7,4,3,2,5,4,3,2,1,0],           
    // Set keyboard
    keyboardNavigation:"off",
    // Arrow Setting
    soloArrowLeftHalign:"center",
    soloArrowLeftValign:"bottom",
    soloArrowLeftHOffset:20,
    soloArrowLeftVOffset:0,
    soloArrowRightHalign:"center",
    soloArrowRightValign:"bottom",
    soloArrowRightHOffset:20,
    soloArrowRightVOffset:0,        
    shadow:0,
    fullWidth:"off",
    fullScreen:"on",
    spinner:"spinner4",   
    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,
    shuffle:"off",    
    autoHeight:"off",           
    forceFullWidth:"off",
    // Hide Thumbnail
    hideThumbsOnMobile:"off",
    hideNavDelayOnMobile:1500,            
    hideBulletsOnMobile:"off",
    hideArrowsOnMobile:"off",
    hideThumbsUnderResolution:0,    
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    startWithSlide:0,
    fullScreenOffsetContainer: ".header-part"
  });

  // Initialize google map
  var map;
  function initialize(){
      // Set google map property
      var myCenter = new google.maps.LatLng(40.7127837, -74.00594130000002);
      var mapProp = {
          center : myCenter,
          zoom : 11,
          scrollwheel: false,
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          styles: [{"featureType":"landscape","stylers":[ { "hue":"#FFBB00" }, { "saturation":43.400000000000006 }, { "lightness":37.599999999999994 }, { "gamma":1 } ] }, { "featureType":"road.highway", "stylers":[ { "hue":"#FFC200" }, { "saturation":-61.8 }, { "lightness":45.599999999999994 }, { "gamma":1 } ] }, { "featureType":"road.arterial", "stylers":[ { "hue":"#FF0300" }, { "saturation":-100 }, { "lightness":51.19999999999999 }, { "gamma":1 } ] }, { "featureType":"road.local", "stylers":[ { "hue":"#FF0300" }, { "saturation":-100 }, { "lightness":52 }, { "gamma":1 } ] }, { "featureType":"water", "stylers":[ { "hue":"#0078FF" }, { "saturation":-13.200000000000003 }, { "lightness":2.4000000000000057 }, {"gamma":1 } ] }, { "featureType":"poi", "stylers":[ { "hue":"#00FF6A" }, { "saturation":-1.0989010989011234 }, { "lightness":11.200000000000017 }, { "gamma":1 } ] } ]
      };
      var map = new google.maps.Map(document.getElementById("map"), mapProp);
      // Set google map marker
      var marker = new google.maps.Marker({
          position : myCenter,
          icon : 'images/map_marker.png'
      });
      marker.setMap(map);

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        map.setOptions({ 'draggable': false });
      }
  }
  // Check google map ID is available or not
  if(document.getElementById('map') != null ){
      google.maps.event.addDomListener(window, 'load', initialize);   
  }
  
  // Send mail to company
  $(".alert-container").hide();
  $("form[name='contact-form']").on('submit',function(e){
    e.preventDefault();
    var url = "functions.html"; // the script where you handle the form input.
    var thisForm = $(this);
    var btnValue = $(this).find(".send_message").attr('value');
    $(this).find(".send_message").attr('value', 'SUBMITTING...');
    $(this).find(".send_message").attr('disabled', 'disabled');
    $.ajax({
      type: "POST",
      url: url,
      data: thisForm.serialize(), // serializes the form's elements.
      success: function(data)
      {
        // show response from the php script.
        $(".alert-container").html(data);                 
        $(".alert-container").show();
        thisForm.trigger("reset");
        thisForm.find(".send_message").attr('value', btnValue);
        thisForm.find(".send_message").removeAttr('disabled');

        $(".alert .close").on('click',function(){
          $(".alert-container").hide();
        });
      }
    });

    return false; // avoid to execute the actual submit of the form.
  });
});

$(window).load(function(){
	$('#pre-loader').delay(1000).fadeOut();
});

// cache the window object paralalx code
jQuerywindow = jQuery(window);
jQuery('.parallax[data-type="background"]').each(function(){
  // Define variable
  var jQueryscroll = jQuery(this), startAt = jQueryscroll.data('start-at'), yPos, coords, thisOffset;
  // Set Parallax Scroll
  jQuery(window).on('scroll',function(){      
    if(!startAt){
      // Y position
      yPos = -(jQuerywindow.scrollTop() / jQueryscroll.data('speed'));
      coords = '50% '+ yPos + 'px';
    } else {
      thisOffset = jQueryscroll.offset();
      thisTop = thisOffset.top;
      if( (thisTop - jQuerywindow.outerHeight()) < jQuerywindow.scrollTop() ){
        yPos = -(jQuerywindow.scrollTop() / jQueryscroll.data('speed'));          
        coords = '50% '+ yPos + 'px';
      }
    }
    // Set parallax scroll css
    jQueryscroll.css({ backgroundPosition: coords });
  });
  return false;
}); 

//Equal height div for dynamic generated by js  
equalheight = function(container){
  // Define variable
  var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), $el, topPosition = 0;
  $(container).each(function(){
    $el = $(this);
    $($el).height('auto');
    topPostion = $el.position().top;
    if(currentRowStart != topPostion){
      for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++){
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++){
      rowDivs[currentDiv].height(currentTallest);
    }
  });
  return false;
}

// Equal height div for dynamic generated by js
$(window).on('load',function(){
  // Image Take Background using dis js
  $('.Banner-part').each(function(){
    var imgSrc = $(this).children('img').attr('src');
    $(this).css('background-image', 'url("' + imgSrc + '")');
    $(this).css('background-size', 'cover');
    $(this).css('background-repeat', 'no-repeat');
    $(this).children('img').hide();
    return false;
  });

  //Initiat WOW JS
  new WOW().init();
  
  // Page Bottom To Top Call
  $('.top-arrow').on('click',function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // Accourdion js and call js
  $(".accordion_head").on('click',function (){
    if($('.accordion_body').is(':visible')){
      $(".accordion_body").slideUp(1000).parent().removeClass("active");
      $(".plusminus").text('+');
    }
    if($(this).next(".accordion_body").is(':visible')){
      $(this).next(".accordion_body").slideUp(1000).parent().removeClass("active");
      $(this).children(".plusminus").text('+');
    } else {
      $(this).next(".accordion_body").slideDown(1000).parent().addClass("active");
      $(this).children(".plusminus").text('-');
    }
    return false;
  });
  
  // Vertically Box content center js
  var parentHeight = $('.mobile-app-main').height();
  var childHeight = $('.mobile-app-left').height();
  $('.mobile-app-left').css('margin-top',(parentHeight - childHeight) / 2);

  //Mobile menu meanmenu call js
  $('.menu-part nav').meanmenu();

  // Languag menu Toggle
  $('.language-toggle').on('click',function(){
    $('.language-menu').slideToggle();
    return false;
  });

  // Set timeout method
  setTimeout(function(){
    // Equal Height call js
    equalheight('.service-box-main .service-boxes');
    equalheight('.feature-boxes-row .feature-boxes');
    equalheight('.faq-container-main .faq-boxes');
    
    // Vertically Box content center js
    var service_box_right = $('.service-boxes .service-boxes-right').height();
    $('.service-boxes .service-boxes-left').css('margin-top', service_box_right/2);      
    // Contact Page After js count
    // Swiper Slider call js
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    var swiper = new Swiper('.testimonial .swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });

    // Isotop Jquery Plugin JS call
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
    });
    
    // Portfolio filter
    $('.portfolioFilter a').on('click',function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
       return false;
    }); 

    // Set Countdown
    $('#features').on('inview', function(event, visible, visiblePartX, visiblePartY) {
      if(visible){
        $(this).find('.timer').each(function(){
          var $this = $(this);
          $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        $(this).unbind('inview');
      }
      return false;
    });
  }, 500);
});

// Service box set equal heighr
$(window).on('resize',function(){
  //Equal Height call js
  equalheight('.service-box-main .service-boxes');
  equalheight('.feature-boxes-row .feature-boxes');
  return false;    
});

// Scroll top arrow
$(window).on('scroll',function(){
  if ($(this).scrollTop() > 500) {
    $('.top-arrow').fadeIn();
  } else {
    $('.top-arrow').fadeOut();
  }
  return false;
});