  $(document).on('click','.navbar',function(e) {
  	if($(window).width()<=765){
   		 if( $(e.target).is('a') ) {
        		$('.navbar-collapse').collapse('hide');
    	}
}
});

