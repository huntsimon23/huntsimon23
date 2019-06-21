if( !device.tablet() && !device.mobile() ) {
	
	(function($) {
	  "use strict";
		// initialize BigVideo
	    var BV = new $.BigVideo();
		BV.init();
		BV.show('vids/video.mp4');
		jQuery("#play_video").click(function(){
			BV.getPlayer().play();
		});
		jQuery("#pause_video").click(function(){
			BV.getPlayer().pause();
		});
		jQuery("#mute_video").click(function(){
			BV.getPlayer().volume(0);
			jQuery("#mute_video").fadeOut();
			setTimeout ( function () {
				jQuery("#unmute_video").fadeIn();
			},1000 );
		});
		
		jQuery("#unmute_video").click(function(){
			BV.getPlayer().volume(1);
			jQuery("#unmute_video").fadeOut();
			setTimeout ( function () {
				jQuery("#mute_video").fadeIn();
			},1000 );
		});
	})(jQuery);
				
} else {
	
	$('#bgimg').addClass('poster-image');
	$('.video-controls').fadeOut();
	
}




