
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('.main-header').height();
		if ($(window).scrollTop() > navHeight) {
			$('.nav-bar').addClass('fixed');
/* 		 $('.nav-1').addClass('toleft'); */
		 }
		else {
			$('.nav-bar').removeClass('fixed');
	/* 		$('.nav-1').removeClass('toleft') */
		 }
    });
    

});
  