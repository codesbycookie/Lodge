;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#cookie-offcanvas, .js-cookie-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-cookie-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="cookie-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-cookie-nav-toggle cookie-nav-toggle cookie-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#cookie-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#cookie-offcanvas').append(clone2);

		$('#cookie-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#cookie-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-cookie-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-cookie-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

			if ( $win.scrollTop() > 100 ) {
				$('.cookie-nav').addClass('scrolled');
			} else {
				$('.cookie-nav').removeClass('scrolled');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".cookie-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if ($('#cookie-counter').length > 0 ) {
			$('#cookie-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#cookie-slider-wrwap .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#cookie-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#cookie-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	});

	  	
	};

	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};

	var DateTimePickerFunc = function() {
		if ($('#taskdatetime').length > 0) {
			$('#taskdatetime').datetimepicker();
		}
	}

	var zoomFunc = function() {
		if ($('.zoomerang').length > 0) {
	   	// Zoomerang.config({maxHeight:730,maxWidth:900}).listen('.zoomerang');

	   	$('.cookie-bg-img').each(function(){
	   		$(this).css('width', '100%');
	   	});
	   	Zoomerang
                .config({
                    maxHeight: 900,
                    maxWidth: 800,
                    bgColor: '#000',
                    bgOpacity: .85,
                    onOpen: openCallback,
                    onClose: closeCallback,
                    onBeforeOpen: beforeOpenCallback,
                    onBeforeClose: beforeCloseCallback
                })
                .listen('.zoomerang')

            function openCallback (el) {
                console.log('zoomed in on: ')
                // console.log(el)
            }

            function closeCallback (el) {
                console.log('zoomed out on: ')
                // console.log(el)
            }

            function beforeOpenCallback (el) {
            	console.log('on before zoomed in on:')
            	// console.log(el)
            }

            function beforeCloseCallback (el) {
            	console.log('on before zoomed out on:')
            	// console.log(el)
            }

	   }
	}

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		fullHeight();
		parallax();
		DateTimePickerFunc();

		$('.cookie-bg-img').each(function(){
   		$(this).css('width', '100%');
   	});
		// zoomFunc();
	});


  $(window).on('load', function() {
    $('.testimonial-slider').flexslider({
      animation: "slide",
      controlNav: true,
      directionNav: true,
      slideshowSpeed: 3000,
      animationSpeed: 600,
      pauseOnHover: true,
      smoothHeight: true,
    });
  });


}());