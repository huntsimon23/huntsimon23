if( !device.tablet() && !device.mobile() ) {

	jQuery(function(){
		"use strict";
		
		var myPlayer;
        jQuery(function () {
            var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};if(!isIframe()){var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");$("#wrapper").prepend(logo),$("#logo").fadeIn()}
            myPlayer = jQuery("#video").vimeo_player();
        });
        
        jQuery("#play_video").click(function(){
			jQuery("#video").v_play();
		});
		
		jQuery("#pause_video").click(function(){
			jQuery("#video").v_pause();
		});
		
		jQuery("#mute_video").click(function(){
			jQuery("#video").v_mute();
			jQuery("#mute_video").fadeOut();
			setTimeout ( function () {
				jQuery("#unmute_video").fadeIn();
			},1000 );
		});
		
		jQuery("#unmute_video").click(function(){
			jQuery("#video").v_unmute();
			jQuery("#unmute_video").fadeOut();
			setTimeout ( function () {
				jQuery("#mute_video").fadeIn();
			},1000 );
		});
	
	});

} else {
	
	$('#bgimg').addClass('poster-image');
	$('.video-controls, #video-content').fadeOut();
	
}