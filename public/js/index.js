// parallax header
$(window).scroll( function(){
		  var scroll = $(window).scrollTop(), slowScroll = scroll/2;
		  $('#header').css({ transform: "translateY(" + slowScroll + "px)" });
	});