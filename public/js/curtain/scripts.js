$(document).ready(function(){
   $('.curtains').curtain();
   
});


$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#intro h1',{
    	duration:200, property:'left', end:-860
    });
    
});


scrollorama.animate('#spoon-photo',{
	delay:993, duration:993, property:'top', start:100, end:-300
});


scrollorama.animate('#line25-photo',{
	delay:993, duration:1986, property:'rotate', start:-10, end:10
});

scrollorama.animate('#gaming .btn',{
	delay:2000, duration:993, property:'left', start:-800, easing:'easeOutBounce'
});


scrollorama.animate('#cs ul li:nth-child(1)',{
	delay:2979, duration:993, property:'top', start:840, end: 640
});
scrollorama.animate('#cs ul li:nth-child(2)',{
	delay:2979, duration:993, property:'top', start:800, end: 640
});
scrollorama.animate('#cs ul li:nth-child(3)',{
	delay:2979, duration:993, property:'top', start:920, end: 580
});
scrollorama.animate('#cs ul li:nth-child(4)',{
	delay:2979, duration:993, property:'top', start:880, end: 620
});
scrollorama.animate('#cs ul li:nth-child(5)',{
	delay:2979, duration:993, property:'top', start:830, end: 660
});
scrollorama.animate('#cs ul li:nth-child(6)',{
	delay:2979, duration:993, property:'top', start:960, end: 600
});

