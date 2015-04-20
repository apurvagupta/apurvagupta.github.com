  $(document).on('click','.navbar',function(e) {
  	if($(window).width()<=765){
   		 if( $(e.target).is('a') ) {
        		$('.navbar-collapse').collapse('hide');
    	}
}
});

  $(document).ready(function(){
	$('.scroll-link').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			'scrollTop': $($(this).attr('href')).position().top-55
		},700);
	});

	
	new WOW().init();
	$("html").niceScroll({
		zindex:999999,
		boxzoom:true,
		cursoropacitymin :0.5,
		cursoropacitymax :0.8,
		cursorwidth :"10px",
		cursorborder :"0px solid",
		autohidemode:false
	});

	$(window).scroll(function(){
		// Keep navbar background default color intially, make it transparent when you're scrolling
		var windowScroll = $(window).scrollTop(),
			windowHeight = $(window).height();
		if (windowScroll > 1) {
			$('.hoverr-navbar').addClass('scrolled');
		}else if (windowScroll < 1){
			$('.hoverr-navbar').removeClass('scrolled');
		};
	})

});

