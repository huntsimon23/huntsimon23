jQuery(document).ready(function() {	
"use strict";
	
	/* ==============================================
	/*	OPTIONS FOR THE IMAGE SLIDER
	=============================================== */
	var image_slider = false; //this variable is necessary to start the image slider, 
							  //if you want to use the image slider, change it to true

	/* ==============================================
	/*	LOADER
	=============================================== */
	$('#loader-circle').circleProgress({
		startAngle: Math.PI*1.5,
		thickness: 3,
		emptyFill: "#888",
	    value: 1,
	    size: 163,
	    fill: {
			color: "#fff" 
	    }
	});	
	
	$('#loader-circle').on('circle-animation-end', function(event) {
		$("#loader-circle").hide( "puff", 400 );
		$('.loader').fadeOut();
		$(".loader-logo").hide( "puff", 400, function() {
			if (image_slider == true){
				api.playToggle(); //delete this line if you don't use some image background option
			}
			text_rotate();
			testimonials_rotate();
			messagesPosition();
			$('#mainNav').css("top", '0px');
			$('.homepage').css("opacity", '1');
		});
	});
	
	/* ==============================================
	/*	DIV MESSAGE POSITION AND MENU MOBILE
	=============================================== */
	function messagesPosition(){
		var windowHeight = $(window).height();
		var homepageHeight = $('.messages').height();
		if (windowHeight >= homepageHeight){
			$('.messages').css("margin-top", ((windowHeight-homepageHeight))/2);
		}
	}
	
	function menuMobilePosition(){
		var windowHeight = $(window).height();
		var menuMobileHeight = $('.menu-mobile ul').height();
		if (windowHeight >= menuMobileHeight){
			$('.menu-mobile ul').css("margin-top", ((windowHeight-menuMobileHeight))/2);
		}
	}

	$(window).resize(function() {		
		messagesPosition();
		menuMobilePosition();
	});
	
	/* ==============================================
	/*	PAGE TRANSITIONS FUNCTION
	=============================================== */
	PageTransitions.init();
	
	/* ==============================================
	/*	MESSAGE ROTATION IN THE HOMEPAGE
	=============================================== */
	var intervalTime = 2000; //transition time
	var messageArray = $(".messages").children();
    var messageMax = messageArray.length - 1;
    
    messageArray.each( function( index ) { $(this).fadeOut(); } );
    $(messageArray[0]).fadeIn();
    
    function text_rotate(){
	    setTimeout ( function() {
	        messageRotate(1);
	    }, intervalTime);
	}

    function messageRotate( index ) {
        var prev = ( (index == 0) ? (messageMax) : (index - 1) );
        var next = ( (index == messageMax) ? 0 : (index + 1 ) );

        setTimeout ( function () {
            $(messageArray[prev]).fadeOut();
            setTimeout ( function () {
                $(messageArray[index]).fadeIn();
                setTimeout ( function () {
                     messageRotate(next);
                },intervalTime );
            },(intervalTime/2) );
        },intervalTime );
    }
    
    /* ==============================================
	/*	TESTIMONIALS ROTATION
	=============================================== */
	var intervalTimeTestimonials= 2000; //transition time
	var testimonialsArray = $(".testimonials-messages").children();
    var testimonialsMax = testimonialsArray.length - 1;
    
    testimonialsArray.each( function( index ) { $(this).fadeOut(); } );
    $(testimonialsArray[0]).fadeIn();
    
    function testimonials_rotate(){
	    setTimeout ( function() {
	        testimonialsRotate(1);
	    }, intervalTimeTestimonials);
	}

    function testimonialsRotate( index ) {
        var prev = ( (index == 0) ? (testimonialsMax) : (index - 1) );
        var next = ( (index == testimonialsMax) ? 0 : (index + 1 ) );

        setTimeout ( function () {
            $(testimonialsArray[prev]).fadeOut();
            setTimeout ( function () {
                $(testimonialsArray[index]).fadeIn();
                setTimeout ( function () {
                	testimonialsRotate(next);
                },intervalTimeTestimonials );
            },(intervalTimeTestimonials/2) );
        },intervalTimeTestimonials );
    }
    
    /* ==============================================
	/*	NAVIGATION BAR
	=============================================== */    
	$('.pt-page').scroll(function() {
		if( $(this).scrollTop() > 50) {
			$('#mainNav').addClass('navTop');
		} else {
			$('#mainNav').removeClass('navTop');
		}
	});
    
    /* ==============================================
    EASY PIE CHART
    =============================================== */
    var pieChartClass = 'pie-chart',
    	pieChartAnimationTime = 3000,
    	pieChartLoadedClass = 'pie-chart-loaded';
	
	function initPieCharts() {
		var chart = $('.' + pieChartClass);
		
		chart.each(function() {	
			var $this = $(this),
				chartSize = ($this.data('chartsize')) ? $this.data('chartsize') : 95,
				chartLineWidth = ($this.data('linewidth')) ? $this.data('linewidth') : 2,
				chartLineCap = ($this.data('linecap')) ? $this.data('linecap') : 5,
				chartBarColor = ($this.data('barcolor')) ? $this.data('barcolor') : "#333333",
				chartTrackColor = ($this.data('trackcolor')) ? $this.data('trackcolor') : "#dddddd";
	
			if( !$this.hasClass(pieChartLoadedClass) ) {
				$this.easyPieChart({
					animate: pieChartAnimationTime,
					barColor: chartBarColor,
					trackColor: chartTrackColor,
					size: chartSize,
					lineWidth: chartLineWidth,
					lineCap: chartLineCap,
					scaleColor: false
				}).addClass(pieChartLoadedClass);
			}
		});   
	}	
	
	initPieCharts();  
	
	/* ==============================================
    /* CONTACT FORM
	================================================== */
    $('.success-message').hide();
    $('.error-message').hide();
    
	var $contactform 	= $('#contactform'),
		$success		= 'Your message has been sent. Thank you!';
		
	$contactform.submit(function(){
		$.ajax({
		   type: "POST",
		   url: "php/contact.php",
		   data: $(this).serialize(),
		   success: function(msg)
		   {
				if(msg == 'SEND'){
					$('.error-message').hide();
                    $('.success-message').hide();
                    $contactform.hide().delay(3000).fadeIn();
                    $('#contactform input').val('');
                    $('#contactform textarea').val('');
                    $('.success-message').html('<div class="success-message">'+ $success +'</div>');
                    $('.success-message').fadeIn().delay(2000).fadeOut();
				}
				else{
					$('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html('<div class="error-message">'+ msg +'</div>');
                    $('.error-message').fadeIn().delay(3000).fadeOut();
				}
			}
		 });
		return false;
	});
	
	/* ==============================================
    /* CODE TO DUPLICATE THE FOOTER
	================================================== */
	$('footer').clone().appendTo(".aboutme, .work, .blog, .contact");
		$('.aboutme footer').removeClass('hide').addClass('darkFooter');
		$('.work footer').removeClass('hide').addClass('darkFooter');
		$('.blog footer').removeClass('hide').addClass('darkFooter');
		$('.contact footer').removeClass('hide').addClass('lightFooter');	
		
	/* ==============================================
	/* BUTTON - BACK TO TOP
	================================================== */
	$('.toTop').click(function() {
		$('.pt-page').animate({ scrollTop: 0 });
	});
	
	/* ==============================================
	/* BUTTON - OPEN MENU MOBILE
	================================================== */
	$('#menuMobileOpen').click(function() {
		menuMobilePosition();
		$('.menu-mobile').fadeIn();
	});
	
	/* ==============================================
	/* BUTTON - CLOSE MENU MOBILE
	================================================== */
	$('#menuMobileClose').click(function() {
		$('.menu-mobile').fadeOut();
	});
	
	$('.menu-mobile button').click(function() {
		$('.menu-mobile').fadeOut();
	});	
	
	/* ==============================================
	/* TOOLTIPS
	================================================== */	
	$('.footer-social li a').tooltip();
	
	/* ==============================================
	/* SINGLE WORK - MENU
	================================================== */	
	$('.menu-hide').click(function() {
		$('#mainNav').hide();
	});
	
	$('.menu-show').click(function() {
		$('#mainNav').show("slow");
	});
		
	/* ==============================================
	/* GALLERY - WORKS
	================================================== */
	var $container = $('#gallery').imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.item',
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});
	});
	
	$('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		$container.isotope({ filter: filterValue });
		$('#filters').find('.checked').removeClass('checked');
    	$( this ).addClass('checked');
	});
	
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
		beforeOpen: function() {
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			   this.st.mainClass = 'mfp-zoom-in';
			}
		},
		closeOnContentClick: true,
		fixedContentPos: false
	});
	
	$('.portfolio-youtube, .portfolio-vimeo').magnificPopup({
		disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
	});
	
	$('.portfolio-gallery').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
		beforeOpen: function() {
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			   this.st.mainClass = 'mfp-zoom-in';
			}
		},
		gallery: {
			enabled: true 
		},
		closeOnContentClick: true,
		fixedContentPos: false
	});
	
	$('.portfolio-gallery2').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
		beforeOpen: function() {
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			   this.st.mainClass = 'mfp-zoom-in';
			}
		},
		gallery: {
			enabled: true 
		},
		closeOnContentClick: true,
		fixedContentPos: false
	});
	
	/* ========== AJAX CONTENT WORK ========== */
	// var newHash     = '',
	// 	$mainContent = $('#work-content');
	
	// $('a.work-call').click(function() {
	// 	window.location.hash = $(this).attr('href');
	// 	return false;
	// });

	// // Not all browsers support hashchange
	// // For older browser support: http://benalman.com/projects/jquery-hashchange-plugin/
	// $(window).bind('hashchange', function() {
	// 	newHash = window.location.hash.substr(1);
	// 	$mainContent.load(newHash + " #work-content > *");
	// });
	
});


